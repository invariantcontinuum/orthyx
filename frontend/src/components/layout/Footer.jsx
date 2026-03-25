import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  const footerLinks = {
    product: [
      { to: '/services', label: t('nav.services') },
      { to: '/portfolio', label: t('nav.portfolio') },
      { to: '/faq', label: t('nav.faq') },
    ],
    company: [
      { to: '/about', label: t('nav.about') },
      { to: '/blog', label: t('nav.blog') },
      { to: '/contact', label: t('nav.contact') },
    ],
    legal: [
      { to: '/legal/terms', label: t('legal.terms.title') },
      { to: '/legal/privacy', label: t('legal.privacy.title') },
      { to: '/legal/cookies', label: t('legal.cookies.title') },
      { to: '/legal/impressum', label: t('legal.impressum.title') },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: 'mailto:contact@orthyxai.com', label: 'Email' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center text-white font-bold text-lg">O</div>
              <span className="font-serif font-bold text-xl text-white">OrthyxAI</span>
            </div>
            <p className="text-sm text-slate-400 mb-4 max-w-xs">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('nav.services')}</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('nav.about')}</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 text-center">
          <p className="text-xs text-slate-500">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
