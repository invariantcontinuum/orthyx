import { useTranslation } from 'react-i18next';
import { Building2, Heart, Newspaper } from 'lucide-react';

const cases = [
  { id: 'fintech', icon: Building2 },
  { id: 'healthcare', icon: Heart },
  { id: 'media', icon: Newspaper },
];

export default function Portfolio() {
  const { t } = useTranslation();

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-warm-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6">
            {t('portfolio.hero.title')}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            {t('portfolio.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {cases.map((caseItem, index) => {
              const Icon = caseItem.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={caseItem.id}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center bg-warm-50 dark:bg-slate-700/30 rounded-2xl p-8 border border-warm-200 dark:border-slate-700`}
                >
                  <div className="lg:w-1/3">
                    <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center mb-4">
                      <Icon className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-semibold mb-2">
                      {t(`portfolio.cases.${caseItem.id}.industry`)}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{t(`portfolio.cases.${caseItem.id}.title`)}</h3>
                  </div>
                  <div className="lg:w-2/3 space-y-4">
                    <div>
                      <h4 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase mb-1">Challenge</h4>
                      <p className="text-slate-600 dark:text-slate-300">{t(`portfolio.cases.${caseItem.id}.challenge`)}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase mb-1">Solution</h4>
                      <p className="text-slate-600 dark:text-slate-300">{t(`portfolio.cases.${caseItem.id}.solution`)}</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                      <h4 className="text-sm font-bold text-green-700 dark:text-green-400 uppercase mb-1">Results</h4>
                      <p className="text-green-800 dark:text-green-300">{t(`portfolio.cases.${caseItem.id}.results`)}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
