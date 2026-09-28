import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const PHONE = '+966565746224';
const WA_LINK = 'https://wa.me/966565746224?text=Hello%20Alrehabsatharecovery%2C%20I%20need%20towing%20assistance.%20My%20vehicle%20is%20currently%20located%20at%20______.';

export default function Header() {
  const { t, lang, toggleLanguage, isRTL } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navItems = [
    { to: '/', label: t('nav.home') },
    { to: '/services', label: t('nav.services') },
    { to: '/coverage', label: t('nav.coverage') },
    { to: '/about', label: t('nav.about') },
    { to: '/reviews', label: t('nav.reviews') },
    { to: '/faq', label: t('nav.faq') },
    { to: '/contact', label: t('nav.contact') },
  ];

  const isActive = (to: string) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'bg-black/95 backdrop-blur-xl shadow-2xl border-b border-white/5'
            : 'bg-black/50 backdrop-blur-md'
        }`}
        style={{ direction: isRTL ? 'rtl' : 'ltr' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center text-white text-lg font-black shadow-lg">
                🚛
              </div>
              <div className="hidden sm:block">
                <div className="text-white font-black text-base leading-none tracking-tight">
                  Alrehab
                </div>
                <div className="text-red-500 font-bold text-xs tracking-widest uppercase">
                  Satha Recovery
                </div>
              </div>
              <div className="sm:hidden">
                <div className="text-white font-black text-sm leading-none">Alrehab</div>
                <div className="text-red-500 font-bold text-xs">Recovery</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`nav-link px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                    isActive(item.to)
                      ? 'text-white bg-white/8 font-semibold'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className={`hidden md:flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {/* Language Switch */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-white/15 text-gray-400 hover:text-white hover:border-white/30 transition-all duration-200 text-sm font-medium"
                aria-label="Switch language"
              >
                <Globe size={14} />
                <span>{lang === 'en' ? 'عربي' : 'EN'}</span>
              </button>

              {/* Call Now */}
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-red-500/40 text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all duration-200 text-sm font-bold"
              >
                <Phone size={14} />
                <span>{t('nav.callNow')}</span>
              </a>

              {/* WhatsApp */}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600/15 border border-green-500/30 text-green-400 hover:bg-green-600/25 hover:text-green-300 transition-all duration-200 text-sm font-bold"
              >
                <MessageCircle size={14} />
                <span>{t('nav.whatsapp')}</span>
              </a>
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={toggleLanguage}
                className="p-2 rounded-lg border border-white/15 text-gray-400 text-xs font-bold"
              >
                {lang === 'en' ? 'ع' : 'EN'}
              </button>
              <a
                href={`tel:${PHONE}`}
                className="p-2 rounded-lg bg-red-500/15 text-red-400 border border-red-500/30"
                aria-label="Call"
              >
                <Phone size={18} />
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded-lg border border-white/15 text-gray-300 hover:text-white"
                aria-label="Menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu ${mobileOpen ? 'open' : ''}`}
        style={{ direction: isRTL ? 'rtl' : 'ltr' }}
      >
        <div className="flex flex-col h-full pt-20 pb-8 px-6 overflow-y-auto">
          {/* Mobile Nav Links */}
          <nav className="flex flex-col gap-1 mb-8">
            {navItems.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-4 py-4 rounded-xl text-lg font-semibold transition-all duration-200 ${
                  isActive(item.to)
                    ? 'bg-red-500/15 text-white border border-red-500/30'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile CTA Buttons */}
          <div className="flex flex-col gap-3 mt-auto">
            <a
              href={`tel:${PHONE}`}
              className="btn-primary flex items-center justify-center gap-3 px-6 py-4 text-lg font-bold rounded-xl"
            >
              <Phone size={20} />
              {t('nav.callNow')} — {PHONE}
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp flex items-center justify-center gap-3 px-6 py-4 text-lg font-bold rounded-xl"
            >
              <MessageCircle size={20} />
              {t('nav.whatsapp')}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
