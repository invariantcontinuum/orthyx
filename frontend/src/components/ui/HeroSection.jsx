import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-4xl mx-auto">
        <div className="inline-block px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-semibold tracking-wide uppercase mb-4">
          {t('home.hero.tagline')}
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 dark:text-white mb-6 leading-tight">
          {t('home.hero.title')} <span className="text-indigo-600 dark:text-indigo-400">{t('home.hero.titleHighlight')}</span>.
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
          {t('home.hero.subtitle')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/services"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg text-base font-medium transition-colors shadow-lg hover:shadow-xl"
          >
            {t('home.hero.ctaPrimary')}
          </Link>
          <Link
            to="/about"
            className="bg-white dark:bg-slate-800 hover:bg-warm-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-warm-200 dark:border-slate-600 px-8 py-3 rounded-lg text-base font-medium transition-colors"
          >
            {t('home.hero.ctaSecondary')}
          </Link>
        </div>

        {/* Problem/Solution Visualization */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 items-center">
          <div className="glass-panel bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-warm-200 dark:border-slate-700 p-6 rounded-xl text-left shadow-lg">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{t('home.problem.intentTitle')}</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">{t('home.problem.intentDesc')}</p>
            <div className="space-y-2">
              <div className="h-2 bg-warm-200 dark:bg-slate-700 rounded-full w-3/4"></div>
              <div className="h-2 bg-warm-200 dark:bg-slate-700 rounded-full w-1/2"></div>
              <div className="h-2 bg-warm-200 dark:bg-slate-700 rounded-full w-5/6"></div>
            </div>
            <div className="mt-4 text-indigo-600 dark:text-indigo-400 font-semibold text-sm">{t('home.problem.intentLabel')}</div>
          </div>
          
          <div className="relative py-4 md:py-0">
            <div className="flex items-center justify-center">
              <div className="bg-red-500 text-white font-bold px-4 py-2 rounded-full shadow-lg animate-pulse">
                ⚠ {t('home.problem.gapLabel')}
              </div>
            </div>
            <div className="hidden md:block border-t-2 border-dashed border-slate-300 dark:border-slate-600 w-full absolute top-1/2 left-0 transform -translate-y-1/2 -z-10"></div>
          </div>

          <div className="glass-panel bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-warm-200 dark:border-slate-700 p-6 rounded-xl text-left shadow-lg">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{t('home.problem.realityTitle')}</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">{t('home.problem.realityDesc')}</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded text-xs text-slate-600 dark:text-slate-300 font-mono">git commit</span>
              <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded text-xs text-slate-600 dark:text-slate-300 font-mono">AWS Logs</span>
              <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded text-xs text-slate-600 dark:text-slate-300 font-mono">JSON</span>
            </div>
            <div className="mt-4 text-red-600 dark:text-red-400 font-semibold text-sm">{t('home.problem.realityLabel')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
