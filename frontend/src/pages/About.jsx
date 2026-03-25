import { useTranslation } from 'react-i18next';
import { Shield, Eye, Zap } from 'lucide-react';

const teamMembers = [
  { id: 'ceo', image: 'SC' },
  { id: 'cto', image: 'MW' },
  { id: 'cso', image: 'ER' },
];

const values = [
  { id: 'integrity', icon: Shield },
  { id: 'transparency', icon: Eye },
  { id: 'action', icon: Zap },
];

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-warm-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6">
            {t('about.hero.title')}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            {t('about.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-warm-50 dark:bg-slate-700/50 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t('about.mission.title')}</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{t('about.mission.content')}</p>
            </div>
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t('about.vision.title')}</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{t('about.vision.content')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-warm-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">{t('about.values.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.id} className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-warm-200 dark:border-slate-700">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t(`about.values.${value.id}.title`)}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{t(`about.values.${value.id}.desc`)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 text-center">{t('about.team.title')}</h2>
          <p className="text-slate-600 dark:text-slate-300 text-center mb-12 max-w-2xl mx-auto">{t('about.team.subtitle')}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center">
                <div className="w-32 h-32 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{member.image}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t(`about.team.members.${member.id}.name`)}</h3>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">{t(`about.team.members.${member.id}.role`)}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">{t(`about.team.members.${member.id}.bio`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
