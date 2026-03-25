import { useTranslation } from 'react-i18next';

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <div className="animate-fade-in">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-warm-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4">
            {t('legal.privacy.title')}
          </h1>
          <p className="text-slate-500 dark:text-slate-400">{t('legal.privacy.lastUpdated')}</p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto prose dark:prose-invert prose-slate">
          <h2>1. Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, including name, email address, 
            company information, and any other information you choose to provide. We also collect 
            usage data and technical information about your interactions with our services.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send related information</li>
            <li>Send technical notices, updates, and support messages</li>
            <li>Respond to your comments and questions</li>
            <li>Monitor and analyze trends and usage</li>
          </ul>

          <h2>3. Information Sharing</h2>
          <p>
            We do not sell or rent your personal information to third parties. We may share your 
            information with service providers who perform services on our behalf, or when required 
            by law.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal 
            information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2>5. Your Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information, 
            including the right to access, correct, delete, or restrict processing of your data.
          </p>

          <h2>6. International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than your country 
            of residence. These countries may have different data protection laws.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at privacy@orthyxai.com.
          </p>
        </div>
      </section>
    </div>
  );
}
