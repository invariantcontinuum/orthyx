const express = require('express');
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const router = express.Router();

// Validation middleware
const validateContact = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),
  body('email')
    .trim()
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  body('subject')
    .trim()
    .isLength({ min: 2, max: 200 })
    .withMessage('Subject must be between 2 and 200 characters'),
  body('message')
    .trim()
    .isLength({ min: 10, max: 5000 })
    .withMessage('Message must be between 10 and 5000 characters'),
];

// Create SMTP transporter
const createTransporter = () => {
  const config = {
    host: process.env.SMTP_HOST || 'mail.invariantcontinuum.com',
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true' || false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: process.env.NODE_ENV === 'production',
    },
  };

  // Add debug logging in development
  if (process.env.NODE_ENV !== 'production') {
    console.log('SMTP Config:', {
      host: config.host,
      port: config.port,
      secure: config.secure,
      user: config.auth.user ? '***configured***' : '***missing***',
    });
  }

  return nodemailer.createTransport(config);
};

// POST /api/contact
router.post('/', validateContact, async (req, res) => {
  try {
    // Check validation results
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array(),
      });
    }

    const { name, email, subject, message } = req.body;

    // Validate SMTP configuration
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP credentials not configured');
      return res.status(500).json({
        success: false,
        message: 'Email service not configured properly',
      });
    }

    // Create transporter
    const transporter = createTransporter();

    // Verify SMTP connection
    try {
      await transporter.verify();
      console.log('SMTP connection verified');
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError);
      return res.status(500).json({
        success: false,
        message: 'Email service temporarily unavailable',
      });
    }

    // Prepare email content
    const recipientEmail = process.env.CONTACT_EMAIL || 'contact@orthyxai.com';
    
    const mailOptions = {
      from: {
        name: 'OrthyxAI Contact Form',
        address: process.env.SMTP_FROM || process.env.SMTP_USER,
      },
      to: recipientEmail,
      replyTo: email,
      subject: `[OrthyxAI Contact] ${subject}`,
      text: `
New contact form submission:

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
Submitted at: ${new Date().toISOString()}
IP: ${req.ip}
      `.trim(),
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #312e81; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #4f46e5; }
    .message { background: white; padding: 15px; border-left: 4px solid #4f46e5; margin-top: 10px; }
    .footer { font-size: 12px; color: #666; margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>New Contact Form Submission</h2>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Name:</span> ${escapeHtml(name)}
      </div>
      <div class="field">
        <span class="label">Email:</span> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>
      </div>
      <div class="field">
        <span class="label">Subject:</span> ${escapeHtml(subject)}
      </div>
      <div class="field">
        <span class="label">Message:</span>
        <div class="message">${escapeHtml(message).replace(/\n/g, '<br>')}</div>
      </div>
    </div>
    <div class="footer">
      Submitted at: ${new Date().toLocaleString()}<br>
      From: OrthyxAI Contact Form
    </div>
  </div>
</body>
</html>
      `.trim(),
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);

    // Return success response
    res.json({
      success: true,
      message: 'Your message has been sent successfully',
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
    });
  }
});

// Helper function to escape HTML
function escapeHtml(text) {
  const htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  return text.replace(/[&<>"']/g, (char) => htmlEntities[char]);
}

module.exports = router;
