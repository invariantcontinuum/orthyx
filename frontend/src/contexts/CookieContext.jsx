import { createContext, useContext, useEffect, useState } from 'react';

const CookieContext = createContext();

export function CookieProvider({ children }) {
  const [cookieConsent, setCookieConsent] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('cookieConsent');
      return saved ? JSON.parse(saved) : null;
    }
    return null;
  });

  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (cookieConsent === null) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [cookieConsent]);

  const acceptAll = () => {
    const consent = { essential: true, analytics: true, marketing: true, timestamp: new Date().toISOString() };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setCookieConsent(consent);
    setShowBanner(false);
  };

  const acceptEssential = () => {
    const consent = { essential: true, analytics: false, marketing: false, timestamp: new Date().toISOString() };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setCookieConsent(consent);
    setShowBanner(false);
  };

  const hasConsent = (type) => {
    return cookieConsent?.[type] === true;
  };

  return (
    <CookieContext.Provider value={{ cookieConsent, showBanner, acceptAll, acceptEssential, hasConsent }}>
      {children}
    </CookieContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within a CookieProvider');
  }
  return context;
}
