import { useTranslation } from 'react-i18next';

export default function Terms() {
  const { t } = useTranslation();

  return (
    <div className="animate-fade-in">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-warm-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4">
            {t('legal.terms.title')}
          </h1>
          <p className="text-slate-500 dark:text-slate-400">{t('legal.terms.lastUpdated')}</p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto prose dark:prose-invert prose-slate">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using OrthyxAI&apos;s services, you agree to be bound by these Terms and Conditions. 
            If you do not agree to these terms, please do not use our services.
          </p>

          <h2>2. Description of Services</h2>
          <p>
            OrthyxAI provides an Active Governance Engine powered by GraphRAG technology. Our services include 
            but are not limited to: structural integrity monitoring, compliance checking, and automated governance 
            solutions for organizations.
          </p>

          <h2>3. User Accounts</h2>
          <p>
            To access certain features of our services, you may be required to create an account. You are 
            responsible for maintaining the confidentiality of your account information and for all activities 
            that occur under your account.
          </p>

          <h2>4. Data Privacy</h2>
          <p>
            Your use of our services is also governed by our Privacy Policy. By using our services, you consent 
            to the collection and use of information as detailed in our Privacy Policy.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            All content, features, and functionality of our services, including but not limited to text, 
            graphics, logos, and software, are the exclusive property of OrthyxAI and are protected by 
            international copyright, trademark, and other intellectual property laws.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            OrthyxAI shall not be liable for any indirect, incidental, special, consequential, or punitive 
            damages resulting from your use or inability to use our services.
          </p>

          <h2>7. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will notify users of any material 
            changes by posting the new terms on this page.
          </p>

          <h2>8. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at legal@orthyxai.com.
          </p>
        </div>
      </section>
    </div>
  );
}
