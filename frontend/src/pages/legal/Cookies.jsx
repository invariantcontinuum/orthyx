import { useTranslation } from 'react-i18next';

export default function Cookies() {
  const { t } = useTranslation();

  return (
    <div className="animate-fade-in">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-warm-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4">
            {t('legal.cookies.title')}
          </h1>
          <p className="text-slate-500 dark:text-slate-400">{t('legal.cookies.lastUpdated')}</p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto prose dark:prose-invert prose-slate">
          <h2>What Are Cookies</h2>
          <p>
            Cookies are small text files that are stored on your device when you visit a website. 
            They are widely used to make websites work more efficiently and provide information to 
            the website owners.
          </p>

          <h2>How We Use Cookies</h2>
          <p>
            OrthyxAI uses cookies for the following purposes:
          </p>
          <ul>
            <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
            <li><strong>Preference Cookies:</strong> Remember your settings and preferences (language, theme)</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
          </ul>

          <h2>Types of Cookies We Use</h2>
          <h3>Essential Cookies</h3>
          <p>
            These cookies are necessary for the website to function and cannot be switched off. 
            They include cookies for session management and security.
          </p>

          <h3>Preference Cookies</h3>
          <p>
            These cookies remember your preferences, such as language selection and theme preference. 
            They enhance your experience by personalizing the website.
          </p>

          <h3>Analytics Cookies</h3>
          <p>
            These cookies help us understand how visitors engage with our website. We use this 
            information to improve our website and services.
          </p>

          <h2>Managing Cookies</h2>
          <p>
            You can manage your cookie preferences through our cookie banner or your browser settings. 
            Please note that disabling certain cookies may affect the functionality of our website.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time. We will notify you of any changes 
            by posting the new policy on this page.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about our use of cookies, please contact us at privacy@orthyxai.com.
          </p>
        </div>
      </section>
    </div>
  );
}
