import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Eye, Brain, Shield } from 'lucide-react';

const steps = [
  { id: 'observe', icon: Eye, color: 'indigo' },
  { id: 'reason', icon: Brain, color: 'indigo' },
  { id: 'act', icon: Shield, color: 'rose' },
];

export default function EngineSection() {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState('reason');

  const getDetailContent = () => {
    switch (activeStep) {
      case 'observe':
        return {
          title: t('home.engine.detail.observeTitle'),
          desc: t('home.engine.detail.observeDesc'),
        };
      case 'reason':
        return {
          title: t('home.engine.detail.reasonTitle'),
          desc: t('home.engine.detail.reasonDesc'),
        };
      case 'act':
        return {
          title: t('home.engine.detail.actTitle'),
          desc: t('home.engine.detail.actDesc'),
        };
      default:
        return { title: '', desc: '' };
    }
  };

  const detail = getDetailContent();

  return (
    <section className="py-20 bg-white dark:bg-slate-800 border-y border-warm-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{t('home.engine.title')}</h2>
          <p className="text-slate-600 dark:text-slate-300">
            {t('home.engine.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            const isActive = activeStep === step.id;
            return (
              <div
                key={step.id}
                className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-warm-50 dark:bg-slate-700 border-indigo-500 ring-2 ring-indigo-100 dark:ring-indigo-900 shadow-lg'
                    : 'bg-warm-50 dark:bg-slate-700/50 border-warm-200 dark:border-slate-600 hover:shadow-lg'
                }`}
                onClick={() => setActiveStep(step.id)}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-2xl ${
                  isActive 
                    ? 'bg-indigo-600 text-white' 
                    : step.color === 'rose' 
                      ? 'bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400' 
                      : 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
                }`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {t(`home.engine.${step.id}.title`)}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {t(`home.engine.${step.id}.desc`)}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 p-6 bg-slate-900 dark:bg-slate-950 text-white rounded-xl shadow-xl transition-all duration-300">
          <h4 className="text-xl font-bold mb-2">{detail.title}</h4>
          <p className="text-slate-300 text-sm leading-relaxed">{detail.desc}</p>
        </div>
      </div>
    </section>
  );
}
