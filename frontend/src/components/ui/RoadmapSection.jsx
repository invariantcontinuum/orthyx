import { useTranslation } from 'react-i18next';

const phases = [
  { id: 'phase1', num: 1, active: true },
  { id: 'phase2', num: 2, active: false },
  { id: 'phase3', num: 3, active: false },
];

const pricingPlans = [
  { id: 'selfHosted', featured: false },
  { id: 'cloud', featured: true },
  { id: 'modules', featured: false },
];

export default function RoadmapSection() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-warm-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{t('home.roadmap.title')}</h2>
          <p className="text-slate-600 dark:text-slate-300 mt-2">{t('home.roadmap.subtitle')}</p>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 relative">
          <div className="hidden md:block absolute top-8 left-0 w-full h-1 bg-indigo-200 dark:bg-indigo-900/50 z-0 transform -translate-y-1/2"></div>

          {phases.map((phase) => (
            <div
              key={phase.id}
              className={`relative z-10 bg-white dark:bg-slate-800 p-6 rounded-xl border shadow-md ${
                phase.active
                  ? 'border-indigo-500 ring-2 ring-indigo-100 dark:ring-indigo-900/50'
                  : 'border-warm-200 dark:border-slate-700 opacity-90'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mb-4 mx-auto ${
                  phase.active ? 'bg-indigo-600 text-white' : 'bg-slate-400 dark:bg-slate-600 text-white'
                }`}
              >
                {phase.num}
              </div>
              <h3 className="text-lg font-bold text-center text-slate-900 dark:text-white">
                {t(`home.roadmap.${phase.id}.title`)}
              </h3>
              <p className="text-xs text-center text-indigo-600 dark:text-indigo-400 font-semibold mb-4">
                {t(`home.roadmap.${phase.id}.tag`)}
              </p>
              <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-2 list-disc pl-4">
                {t(`home.roadmap.${phase.id}.features`, { returnObjects: true }).map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          {t('home.pricing.title')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`p-8 rounded-xl border transition-colors ${
                plan.featured
                  ? 'bg-slate-900 dark:bg-indigo-900/30 border-slate-900 dark:border-indigo-700 shadow-xl transform scale-105'
                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500'
              }`}
            >
              <div
                className={`text-xs font-bold uppercase tracking-wide mb-2 ${
                  plan.featured ? 'text-indigo-400' : 'text-slate-400 dark:text-slate-500'
                }`}
              >
                {t(`home.pricing.${plan.id}.tag`)}
              </div>
              <h4
                className={`text-2xl font-bold mb-4 ${plan.featured ? 'text-white' : 'text-slate-900 dark:text-white'}`}
              >
                {t(`home.pricing.${plan.id}.name`)}
              </h4>
              <p className={`text-sm mb-6 ${plan.featured ? 'text-slate-300' : 'text-slate-600 dark:text-slate-300'}`}>
                {t(`home.pricing.${plan.id}.desc`)}
              </p>
              <div
                className={`text-3xl font-bold mb-2 ${plan.featured ? 'text-white' : 'text-indigo-600 dark:text-indigo-400'}`}
              >
                {t(`home.pricing.${plan.id}.price`)}
                <span className={`text-sm font-normal ${plan.featured ? 'text-slate-400' : 'text-slate-400'}`}>
                  {t(`home.pricing.${plan.id}.period`)}
                </span>
              </div>
              <ul className={`text-sm space-y-2 mb-6 ${plan.featured ? 'text-slate-300' : ''}`}>
                {t(`home.pricing.${plan.id}.features`, { returnObjects: true }).map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span>{feature.startsWith('🔹') ? '🔹' : '✅'}</span>
                    <span className={plan.featured ? '' : 'text-slate-600 dark:text-slate-300'}>
                      {feature.replace(/^[✅🔹]\s*/, '')}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2 rounded font-medium transition-colors ${
                  plan.featured
                    ? 'bg-indigo-600 hover:bg-indigo-500 text-white'
                    : 'border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
                }`}
              >
                {plan.featured ? 'Start Pilot' : plan.id === 'modules' ? 'View Marketplace' : 'Contact Sales'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
