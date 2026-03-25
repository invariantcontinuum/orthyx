import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronUp } from 'lucide-react';

const questions = ['what', 'graphrag', 'integration', 'security', 'pricing', 'support'];

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-warm-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6">
            {t('faq.hero.title')}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            {t('faq.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {questions.map((q, index) => (
              <div
                key={q}
                className="bg-warm-50 dark:bg-slate-700/30 rounded-xl border border-warm-200 dark:border-slate-700 overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-warm-100 dark:hover:bg-slate-700/50 transition-colors"
                >
                  <span className="font-semibold text-slate-900 dark:text-white pr-4">
                    {t(`faq.questions.${q}.q`)}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {t(`faq.questions.${q}.a`)}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-12 text-center p-8 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl border border-indigo-100 dark:border-indigo-800">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Still have questions?</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">Can&apos;t find the answer you&apos;re looking for? Please contact our support team.</p>
            <a
              href="/contact"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              {t('common.contactUs')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
