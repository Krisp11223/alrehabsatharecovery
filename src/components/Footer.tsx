import { Link } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, Clock, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const PHONE = '+966565746224';
const WA_LINK = 'https://wa.me/966565746224?text=Hello%20Alrehabsatharecovery%2C%20I%20need%20towing%20assistance.%20My%20vehicle%20is%20currently%20located%20at%20______.';

export default function Footer() {
  const { t, isRTL } = useLanguage();

  const footerServices = [
    { label: { en: 'Car Towing', ar: 'سحب السيارات' }, to: '/services/car-towing' },
    { label: { en: 'Hydraulic Towing', ar: 'سحب هيدروليكي' }, to: '/services/hydraulic-towing' },
    { label: { en: 'Emergency Recovery', ar: 'إنقاذ طارئ' }, to: '/services/emergency-towing' },
    { label: { en: 'Accident Recovery', ar: 'إنقاذ من الحوادث' }, to: '/services/accident-recovery' },
    { label: { en: 'Roadside Assistance', ar: 'مساعدة على الطريق' }, to: '/services/roadside-assistance' },
    { label: { en: 'Vehicle Transportation', ar: 'نقل المركبات' }, to: '/services/long-distance' },
    { label: { en: 'Luxury Car Transport', ar: 'نقل السيارات الفاخرة' }, to: '/services/luxury-transport' },
    { label: { en: 'Flatbed Towing', ar: 'سحب بالسطحة' }, to: '/services/flatbed-towing' },
  ];

  const coverageCities = [
    { label: { en: 'Riyadh', ar: 'الرياض' }, to: '/coverage/riyadh' },
    { label: { en: 'Jeddah', ar: 'جدة' }, to: '/coverage/jeddah' },
    { label: { en: 'Makkah', ar: 'مكة المكرمة' }, to: '/coverage/makkah' },
    { label: { en: 'Madinah', ar: 'المدينة المنورة' }, to: '/coverage/madinah' },
    { label: { en: 'Dammam', ar: 'الدمام' }, to: '/coverage/dammam' },
    { label: { en: 'Taif', ar: 'الطائف' }, to: '/coverage/taif' },
  ];

  const companyLinks = [
    { label: { en: 'About Us', ar: 'من نحن' }, to: '/about' },
    { label: { en: 'Services', ar: 'خدماتنا' }, to: '/services' },
    { label: { en: 'Coverage Areas', ar: 'مناطق التغطية' }, to: '/coverage' },
    { label: { en: 'Reviews', ar: 'التقييمات' }, to: '/reviews' },
    { label: { en: 'FAQ', ar: 'الأسئلة الشائعة' }, to: '/faq' },
    { label: { en: 'Contact', ar: 'اتصل بنا' }, to: '/contact' },
    { label: { en: 'Emergency Request', ar: 'طلب طارئ' }, to: '/emergency' },
  ];

  const getLabel = (item: { label: { en: string; ar: string } }) =>
    isRTL ? item.label.ar : item.label.en;

  return (
    <footer
      className="bg-black border-t border-white/6"
      style={{ direction: isRTL ? 'rtl' : 'ltr' }}
    >
      {/* Emergency Banner */}
      <div className="bg-gradient-primary py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-white">
            <span className="text-2xl">🚨</span>
            <div>
              <div className="font-black text-lg">
                {isRTL ? 'خدمة طوارئ متاحة 24/7' : '24/7 Emergency Service Available'}
              </div>
              <div className="text-red-100 text-sm">
                {isRTL ? 'اتصل بنا الآن للحصول على مساعدة فورية' : 'Call now for immediate assistance'}
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-2 px-5 py-2.5 bg-white text-red-600 rounded-lg font-bold text-sm hover:bg-red-50 transition-colors"
            >
              <Phone size={16} />
              {isRTL ? 'اتصل الآن' : 'Call Now'}
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-green-500 text-white rounded-lg font-bold text-sm hover:bg-green-400 transition-colors"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-2xl shadow-lg">
                🚛
              </div>
              <div>
                <div className="text-white font-black text-xl leading-none">Alrehab</div>
                <div className="text-red-500 font-bold text-sm tracking-wider uppercase">Satha Recovery</div>
              </div>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              {isRTL
                ? 'خدمات سحب المركبات وإنقاذها الاحترافية في جميع أنحاء المملكة العربية السعودية. متاحون 24 ساعة في اليوم، 7 أيام في الأسبوع، 365 يوماً في السنة.'
                : 'Professional towing and vehicle recovery services across Saudi Arabia. Available 24 hours a day, 7 days a week, 365 days a year.'}
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-red-500/15 border border-red-500/30 flex items-center justify-center flex-shrink-0">
                  <Phone size={14} className="text-red-400" />
                </div>
                <span className="text-sm font-semibold group-hover:text-red-400 transition-colors">
                  {PHONE}
                </span>
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-green-500/15 border border-green-500/30 flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={14} className="text-green-400" />
                </div>
                <span className="text-sm font-semibold group-hover:text-green-400 transition-colors">
                  WhatsApp: {PHONE}
                </span>
              </a>
              <div className="flex items-center gap-3 text-gray-500">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={14} />
                </div>
                <span className="text-sm">
                  {isRTL ? 'متاح 24/7 — طوارئ' : '24/7 Available — Emergency'}
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-500">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={14} />
                </div>
                <span className="text-sm">
                  {isRTL ? 'المملكة العربية السعودية' : 'Saudi Arabia — Nationwide'}
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              {t('footer.services')}
            </h3>
            <ul className="space-y-2.5">
              {footerServices.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="flex items-center gap-2 text-gray-500 hover:text-gray-300 text-sm transition-colors group"
                  >
                    <ChevronRight
                      size={12}
                      className="text-red-500/50 group-hover:text-red-500 transition-colors flex-shrink-0"
                      style={{ transform: isRTL ? 'rotate(180deg)' : 'none' }}
                    />
                    {getLabel(item)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coverage */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              {t('footer.coverage')}
            </h3>
            <ul className="space-y-2.5">
              {coverageCities.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="flex items-center gap-2 text-gray-500 hover:text-gray-300 text-sm transition-colors group"
                  >
                    <ChevronRight
                      size={12}
                      className="text-red-500/50 group-hover:text-red-500 transition-colors flex-shrink-0"
                      style={{ transform: isRTL ? 'rotate(180deg)' : 'none' }}
                    />
                    {getLabel(item)}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/coverage"
                  className="flex items-center gap-2 text-red-500 hover:text-red-400 text-sm font-semibold transition-colors"
                >
                  {isRTL ? 'جميع المناطق' : 'All Areas →'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              {t('footer.company')}
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="flex items-center gap-2 text-gray-500 hover:text-gray-300 text-sm transition-colors group"
                  >
                    <ChevronRight
                      size={12}
                      className="text-red-500/50 group-hover:text-red-500 transition-colors flex-shrink-0"
                      style={{ transform: isRTL ? 'rotate(180deg)' : 'none' }}
                    />
                    {getLabel(item)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/6 py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs text-center">
            {t('footer.rights')}
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
