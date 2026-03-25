import { useTranslation } from 'react-i18next';
import { Network, Brain, FileCheck, Users } from 'lucide-react';

const services = [
  { id: 'governance', icon: Network },
  { id: 'intelligence', icon: Brain },
  { id: 'compliance', icon: FileCheck },
  { id: 'consulting', icon: Users },
];

export default function Services() {
  const { t } = useTranslation();

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-warm-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6">
            {t('services.hero.title')}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            {t('services.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              const features = t(`services.${service.id}.features`, { returnObjects: true });
              return (
                <div
                  key={service.id}
                  className="bg-warm-50 dark:bg-slate-700/30 p-8 rounded-2xl border border-warm-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t(`services.${service.id}.title`)}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">{t(`services.${service.id}.desc`)}</p>
                  <ul className="space-y-2">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                        <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-indigo-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Governance?</h2>
          <p className="text-indigo-200 mb-8">Schedule a demo to see how OrthyxAI can help your organization.</p>
          <a
            href="/contact"
            className="inline-block bg-white text-indigo-900 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
          >
            {t('common.contactUs')}
          </a>
        </div>
      </section>
    </div>
  );
}
