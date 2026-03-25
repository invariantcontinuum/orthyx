import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

const articles = ['graphrag', 'drift', 'compliance', 'gdpr'];

export default function Blog() {
  const { t } = useTranslation();

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-warm-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6">
            {t('blog.hero.title')}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            {t('blog.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <article
                key={article}
                className={`group bg-warm-50 dark:bg-slate-700/30 rounded-2xl overflow-hidden border border-warm-200 dark:border-slate-700 hover:shadow-lg transition-all ${
                  index === 0 ? 'md:col-span-2' : ''
                }`}
              >
                <div className={`flex flex-col ${index === 0 ? 'md:flex-row' : ''} h-full`}>
                  <div className={`bg-gradient-to-br from-indigo-500 to-purple-600 ${index === 0 ? 'md:w-2/5 h-48 md:h-auto' : 'h-48'}`}>
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-white/20 text-6xl font-bold">{article[0].toUpperCase()}</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {t(`blog.articles.${article}.date`)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Tag className="w-4 h-4" />
                          {t(`blog.articles.${article}.category`)}
                        </span>
                      </div>
                      <h3 className={`font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors ${
                        index === 0 ? 'text-2xl' : 'text-xl'
                      }`}>
                        {t(`blog.articles.${article}.title`)}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300">{t(`blog.articles.${article}.excerpt`)}</p>
                    </div>
                    <Link
                      to="#"
                      className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium mt-4 hover:gap-3 transition-all"
                    >
                      {t('blog.readMore')}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
