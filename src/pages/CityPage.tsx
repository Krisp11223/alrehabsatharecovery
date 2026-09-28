import { useParams, Link } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, CheckCircle, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { cities } from './Coverage';
import { services } from '../data/services';

const PHONE = '+966565746224';
const WA_LINK = 'https://wa.me/966565746224?text=Hello%20Alrehabsatharecovery%2C%20I%20need%20towing%20assistance.%20My%20vehicle%20is%20currently%20located%20at%20______.';

export default function CityPage() {
  const { id } = useParams<{ id: string }>();
  const { isRTL } = useLanguage();
  const city = cities.find(c => c.id === id);

  if (!city) {
    return (
      <div className="min-h-screen flex items-center justify-center section-dark">
        <div className="text-center px-4">
          <div className="text-6xl mb-4">📍</div>
          <h1 className="text-white text-2xl font-bold mb-4">City Not Found</h1>
          <Link to="/coverage" className="btn-primary px-6 py-3 rounded-xl font-bold inline-block">
            View All Areas
          </Link>
        </div>
      </div>
    );
  }

  const topServices = services.slice(0, 6);

  return (
    <div style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      {/* Hero */}
      <div className="page-hero pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Link to="/coverage" className="inline-flex items-center gap-2 text-gray-500 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft size={16} style={{ transform: isRTL ? 'rotate(180deg)' : 'none' }} />
            {isRTL ? 'جميع المناطق' : 'All Coverage Areas'}
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">{city.icon}</span>
            <div>
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                <MapPin size={14} />
                {isRTL ? city.region.ar : city.region.en}
              </div>
              <h1 className="display-md text-white">
                {isRTL
                  ? `خدمة سحب وإنقاذ المركبات في ${city.name.ar}`
                  : `Towing & Recovery in ${city.name.en}`}
              </h1>
            </div>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl">
            {isRTL ? city.desc.ar : city.desc.en}
          </p>
          <div className="flex gap-3 mt-6">
            <a href={`tel:${PHONE}`} className="btn-primary flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold">
              <Phone size={16} /> {isRTL ? 'اتصل الآن' : 'Call Now'}
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold">
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main */}
          <div className="lg:col-span-2 space-y-8">
            {/* About this location */}
            <div className="glass-card rounded-2xl p-8 border border-white/8">
              <h2 className="text-white font-bold text-xl mb-4">
                {isRTL
                  ? `خدماتنا في ${city.name.ar}`
                  : `Our Services in ${city.name.en}`}
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                {isRTL
                  ? `توفر الرحاب سطحة ريكفري خدمات سحب وإنقاذ احترافية في ${city.name.ar} وجميع المناطق المحيطة. فريقنا متواجد على مدار الساعة طوال أيام الأسبوع لمساعدتك في أي حالة طارئة أو احتياج للنقل.`
                  : `Alrehabsatharecovery provides professional towing and vehicle recovery services throughout ${city.name.en} and all surrounding areas. Our team is available 24/7 to assist you in any emergency or transport need.`}
              </p>

              <h3 className="text-white font-semibold mb-4">
                {isRTL ? 'المناطق والطرق المشمولة:' : 'Areas & Routes Covered:'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(isRTL ? city.highlights.ar : city.highlights.en).map((h) => (
                  <div key={h} className="flex items-center gap-2 p-3 rounded-lg bg-white/3 border border-white/6">
                    <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Available Services */}
            <div className="glass-card rounded-2xl p-8 border border-white/8">
              <h2 className="text-white font-bold text-xl mb-6">
                {isRTL
                  ? `الخدمات المتاحة في ${city.name.ar}`
                  : `Services Available in ${city.name.en}`}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {topServices.map((service) => (
                  <Link
                    key={service.id}
                    to={`/services/${service.id}`}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/3 hover:bg-white/6 border border-white/6 hover:border-white/15 transition-all group"
                  >
                    <span className="text-2xl">{service.icon}</span>
                    <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                      {isRTL ? service.title.ar : service.title.en}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="glass-card rounded-2xl p-6 border border-red-500/20 sticky top-24">
              <h3 className="text-white font-bold text-lg mb-4 text-center">
                {isRTL ? 'احصل على مساعدة الآن' : 'Get Help Now'}
              </h3>
              <div className="text-center text-4xl mb-5">🚨</div>
              <div className="space-y-3">
                <a href={`tel:${PHONE}`} className="btn-primary flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-bold w-full">
                  <Phone size={20} /> {isRTL ? 'اتصل الآن' : 'Call Now'}
                </a>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-bold w-full">
                  <MessageCircle size={20} /> WhatsApp
                </a>
                <Link to="/emergency" className="btn-outline flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl font-bold w-full">
                  {isRTL ? 'نموذج طارئ' : 'Emergency Form'}
                </Link>
              </div>
              <div className="mt-4 pt-4 border-t border-white/8 text-center text-gray-500 text-xs">
                {isRTL ? 'متاحون 24/7' : 'Available 24/7'} — {PHONE}
              </div>
            </div>

            {/* Other cities */}
            <div className="glass-card rounded-2xl p-6 border border-white/8">
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                {isRTL ? 'مدن أخرى' : 'Other Cities'}
              </h3>
              <div className="space-y-2">
                {cities.filter(c => c.id !== city.id).slice(0, 5).map((c) => (
                  <Link
                    key={c.id}
                    to={`/coverage/${c.id}`}
                    className="flex items-center gap-2 py-2 text-gray-500 hover:text-gray-300 text-sm transition-colors"
                  >
                    <span>{c.icon}</span>
                    <span>{isRTL ? c.name.ar : c.name.en}</span>
                  </Link>
                ))}
                <Link to="/coverage" className="text-red-500 hover:text-red-400 text-sm font-semibold block mt-2">
                  {isRTL ? 'عرض الكل' : 'View All →'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
