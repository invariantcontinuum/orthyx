import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useCookieConsent } from '../../contexts/CookieContext';
import { X } from 'lucide-react';

export default function CookieBanner() {
  const { t } = useTranslation();
  const { showBanner, acceptAll, acceptEssential } = useCookieConsent();

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-warm-200 dark:border-slate-700 p-6">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
              {t('cookie.title')}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
              {t('cookie.message')}
            </p>
            <Link 
              to="/legal/cookies" 
              className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              {t('cookie.privacyPolicy')}
            </Link>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={acceptEssential}
              className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors whitespace-nowrap"
            >
              {t('cookie.acceptEssential')}
            </button>
            <button
              onClick={acceptAll}
              className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors whitespace-nowrap"
            >
              {t('cookie.acceptAll')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
