import { useParams, Link } from 'react-router-dom';
import { Phone, MessageCircle, CheckCircle, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { services } from '../data/services';

const PHONE = '+966565746224';
const WA_LINK = 'https://wa.me/966565746224?text=Hello%20Alrehabsatharecovery%2C%20I%20need%20towing%20assistance.%20My%20vehicle%20is%20currently%20located%20at%20______.';

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const { isRTL } = useLanguage();
  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center section-dark">
        <div className="text-center px-4">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-white text-2xl font-bold mb-4">Service Not Found</h1>
          <Link to="/services" className="btn-primary px-6 py-3 rounded-xl font-bold inline-block">
            View All Services
          </Link>
        </div>
      </div>
    );
  }

  const relatedServices = services.filter(s => s.category === service.category && s.id !== service.id).slice(0, 3);

  return (
    <div style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      {/* Hero */}
      <div className="page-hero pt-24" style={{
        background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 60%, rgba(232,23,30,0.1) 100%)',
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={16} style={{ transform: isRTL ? 'rotate(180deg)' : 'none' }} />
            {isRTL ? 'العودة إلى الخدمات' : 'Back to Services'}
          </Link>
          <div className="flex items-start gap-6">
            <div className="text-6xl flex-shrink-0">{service.icon}</div>
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-red-500/15 text-red-400 text-sm font-semibold capitalize mb-3">
                {service.category}
              </span>
              <h1 className="display-md text-white mb-3">
                {isRTL ? service.title.ar : service.title.en}
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl">
                {isRTL ? service.description.ar : service.description.en}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Features */}
            <div className="glass-card rounded-2xl p-8 border border-white/8">
              <h2 className="text-white font-bold text-xl mb-6">
                {isRTL ? 'ما يتضمنه هذا الخدمة' : 'What This Service Includes'}
              </h2>
              <ul className="space-y-4">
                {(isRTL ? service.features.ar : service.features.en).map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">
                    {isRTL ? 'متاح 24/7 في جميع أنحاء المملكة' : '24/7 availability across Saudi Arabia'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">
                    {isRTL ? 'سائقون محترفون ومدربون' : 'Professional and trained operators'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">
                    {isRTL ? 'أسعار شفافة وعادلة' : 'Transparent and fair pricing'}
                  </span>
                </li>
              </ul>
            </div>

            {/* Why Us for this service */}
            <div className="glass-card rounded-2xl p-8 border border-white/8">
              <h2 className="text-white font-bold text-xl mb-6">
                {isRTL ? 'لماذا تختارنا لهذه الخدمة؟' : 'Why Choose Us for This Service?'}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { en: 'Modern Equipment', ar: 'معدات حديثة' },
                  { en: 'Fast Response Time', ar: 'وقت استجابة سريع' },
                  { en: 'Nationwide Coverage', ar: 'تغطية على مستوى المملكة' },
                  { en: 'Safe Vehicle Handling', ar: 'معالجة آمنة للمركبات' },
                ].map((item) => (
                  <div key={item.en} className="flex items-center gap-3 p-3 rounded-xl bg-white/3 border border-white/6">
                    <div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm font-medium">
                      {isRTL ? item.ar : item.en}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Contact */}
          <div className="space-y-5">
            <div className="glass-card rounded-2xl p-6 border border-red-500/20 sticky top-24">
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">🚨</div>
                <h3 className="text-white font-bold text-lg mb-2">
                  {isRTL ? 'احصل على مساعدة الآن' : 'Get Help Now'}
                </h3>
                <p className="text-gray-500 text-sm">
                  {isRTL ? 'متاحون 24/7 لخدمتك' : 'Available 24/7 to serve you'}
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={`tel:${PHONE}`}
                  className="btn-primary flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-base font-bold w-full"
                >
                  <Phone size={20} />
                  {isRTL ? 'اتصل الآن' : 'Call Now'}
                </a>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-base font-bold w-full"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
                <Link
                  to="/emergency"
                  className="btn-outline flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-base font-bold w-full"
                >
                  {isRTL ? 'نموذج طلب طارئ' : 'Emergency Request Form'}
                </Link>
              </div>

              <div className="mt-5 pt-5 border-t border-white/8 text-center">
                <div className="text-gray-500 text-xs mb-1">{isRTL ? 'رقم الهاتف' : 'Phone'}</div>
                <div className="text-white font-bold text-sm">{PHONE}</div>
              </div>
            </div>

            {/* Related Services */}
            {relatedServices.length > 0 && (
              <div className="glass-card rounded-2xl p-6 border border-white/8">
                <h3 className="text-white font-bold mb-4">
                  {isRTL ? 'خدمات ذات صلة' : 'Related Services'}
                </h3>
                <div className="space-y-3">
                  {relatedServices.map((s) => (
                    <Link
                      key={s.id}
                      to={`/services/${s.id}`}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/3 hover:bg-white/6 border border-white/6 hover:border-white/15 transition-all group"
                    >
                      <span className="text-2xl">{s.icon}</span>
                      <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                        {isRTL ? s.title.ar : s.title.en}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
