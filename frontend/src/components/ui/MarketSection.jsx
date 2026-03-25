import { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Chart from 'chart.js/auto';

export default function MarketSection() {
  const { t } = useTranslation();
  const chartRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: 'scatter',
      data: {
        datasets: [
          {
            label: 'Competitors',
            data: [
              { x: -4, y: -3, label: 'Datadog' },
              { x: 2, y: -4, label: 'Snyk' },
              { x: 4, y: 4, label: 'Palantir' },
            ],
            backgroundColor: '#94a3b8',
            pointRadius: 8,
          },
          {
            label: 'OrthyxAI',
            data: [{ x: 4, y: 3 }],
            backgroundColor: '#4f46e5',
            pointRadius: 12,
            pointHoverRadius: 14,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: true, position: 'bottom' },
          tooltip: {
            callbacks: {
              label: (context) => context.raw.label || 'OrthyxAI',
            },
          },
        },
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
            title: { display: true, text: 'Passive (Observe) <--------> Active (Govern)' },
            grid: { color: '#e2e8f0' },
            min: -5,
            max: 5,
          },
          y: {
            type: 'linear',
            position: 'left',
            title: { display: true, text: 'Bug Focus <--------> Integrity Focus' },
            grid: { color: '#e2e8f0' },
            min: -5,
            max: 5,
          },
        },
      },
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <section className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{t('home.market.title')}</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              {t('home.market.subtitle')}
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold whitespace-nowrap">{t('home.market.vsDatadog')}</span>
                <span className="text-sm text-slate-600 dark:text-slate-400">{t('home.market.vsDatadogDesc')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold whitespace-nowrap">{t('home.market.vsSnyk')}</span>
                <span className="text-sm text-slate-600 dark:text-slate-400">{t('home.market.vsSnykDesc')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold whitespace-nowrap">{t('home.market.vsPalantir')}</span>
                <span className="text-sm text-slate-600 dark:text-slate-400">{t('home.market.vsPalantirDesc')}</span>
              </li>
            </ul>
          </div>
          <div className="p-4 bg-warm-50 dark:bg-slate-700/50 rounded-xl border border-warm-200 dark:border-slate-600">
            <div className="relative h-[350px]">
              <canvas ref={canvasRef}></canvas>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
