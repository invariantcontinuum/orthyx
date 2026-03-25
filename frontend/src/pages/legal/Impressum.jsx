import { useTranslation } from 'react-i18next';

export default function Impressum() {
  const { t } = useTranslation();

  return (
    <div className="animate-fade-in">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-warm-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4">
            {t('legal.impressum.title')}
          </h1>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t('legal.impressum.company')}</h2>
              <p className="text-slate-600 dark:text-slate-300 whitespace-pre-line">
                {t('legal.impressum.address')}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t('legal.impressum.contact')}</h2>
              <div className="space-y-2 text-slate-600 dark:text-slate-300">
                <p><strong>Email:</strong> contact@orthyxai.com</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t('legal.impressum.registration')}</h2>
              <p className="text-slate-600 dark:text-slate-300">
                Registered in Delaware, USA<br />
                Registration Number: 123456789<br />
                VAT ID: US123456789
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Responsible for Content</h2>
              <p className="text-slate-600 dark:text-slate-300">
                Dr. Sarah Chen, CEO<br />
                OrthyxAI Inc.<br />
                123 Innovation Drive<br />
                San Francisco, CA 94105<br />
                USA
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Disclaimer</h2>
              <p className="text-slate-600 dark:text-slate-300">
                Despite careful content control, we assume no liability for the content of external links. 
                The operators of the linked pages are solely responsible for their content.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
