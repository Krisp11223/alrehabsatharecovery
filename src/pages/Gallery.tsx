import { useLanguage } from '../contexts/LanguageContext';
import { useInView } from 'react-intersection-observer';
import { Phone, MessageCircle } from 'lucide-react';

const PHONE = '+966565746224';
const WA_LINK = 'https://wa.me/966565746224?text=Hello%20Alrehabsatharecovery%2C%20I%20need%20towing%20assistance.';

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });
  return (
    <div ref={ref} className={`${className} transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {children}
    </div>
  );
}

const galleryItems = [
  {
    src: '/images/hero-towing.jpg',
    label: { en: 'Emergency Tow Truck', ar: 'شاحنة سحب طارئة' },
    category: { en: 'Emergency', ar: 'طوارئ' },
  },
  {
    src: '/images/recovery-service.jpg',
    label: { en: 'Luxury Car Transport', ar: 'نقل سيارة فاخرة' },
    category: { en: 'Luxury', ar: 'فاخر' },
  },
  {
    src: 'https://images.pexels.com/photos/5209221/pexels-photo-5209221.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
    label: { en: 'Desert Vehicle Recovery', ar: 'إنقاذ مركبة في الصحراء' },
    category: { en: 'Recovery', ar: 'الإنقاذ' },
  },
  {
    src: 'https://images.pexels.com/photos/5180600/pexels-photo-5180600.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
    label: { en: 'Roadside Assistance', ar: 'مساعدة على الطريق' },
    category: { en: 'Roadside', ar: 'على الطريق' },
  },
  {
    src: 'https://images.pexels.com/photos/14989848/pexels-photo-14989848.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
    label: { en: 'Saudi Highway Service', ar: 'خدمة الطريق السريع السعودي' },
    category: { en: 'Highway', ar: 'طريق سريع' },
  },
  {
    src: 'https://images.pexels.com/photos/24343234/pexels-photo-24343234.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
    label: { en: 'Night Emergency Response', ar: 'استجابة طوارئ ليلية' },
    category: { en: 'Emergency', ar: 'طوارئ' },
  },
  {
    src: 'https://images.pexels.com/photos/16325212/pexels-photo-16325212.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
    label: { en: 'Long Distance Transport', ar: 'نقل بعيد المدى' },
    category: { en: 'Transport', ar: 'النقل' },
  },
  {
    src: 'https://images.pexels.com/photos/11215455/pexels-photo-11215455.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
    label: { en: 'Mountain Route Service', ar: 'خدمة طريق جبلي' },
    category: { en: 'Recovery', ar: 'الإنقاذ' },
  },
  {
    src: 'https://images.pexels.com/photos/9917087/pexels-photo-9917087.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
    label: { en: 'All-Weather Service', ar: 'خدمة في جميع الأحوال الجوية' },
    category: { en: 'Roadside', ar: 'على الطريق' },
  },
];

export default function Gallery() {
  const { isRTL } = useLanguage();

  return (
    <div style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      {/* Page Hero */}
      <div className="page-hero pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="accent-line mb-5"></div>
          <h1 className="display-lg text-white mb-4">
            {isRTL ? 'أعمالنا' : 'Our Work'}
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            {isRTL
              ? 'نماذج من عمليات السحب والإنقاذ الاحترافية التي قمنا بها'
              : 'Examples of our professional towing and recovery operations'}
          </p>
        </div>
      </div>

      <section className="section-dark py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {galleryItems.map((item, i) => (
              <AnimatedSection key={i}>
                <div className="gallery-item relative rounded-xl overflow-hidden border border-white/8 h-56 sm:h-64 group">
                  <img
                    src={item.src}
                    alt={item.label.en}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-xs text-red-400 font-semibold mb-1">
                      {isRTL ? item.category.ar : item.category.en}
                    </div>
                    <div className="text-white font-bold text-sm">
                      {isRTL ? item.label.ar : item.label.en}
                    </div>
                  </div>
                  {/* Always visible category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-red-500/80 text-white text-xs font-bold rounded-full backdrop-blur-sm">
                      {isRTL ? item.category.ar : item.category.en}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-surface py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="display-md text-white mb-4">
            {isRTL ? 'تحتاج مساعدة؟' : 'Need Assistance?'}
          </h2>
          <p className="text-gray-500 mb-8">
            {isRTL
              ? 'اتصل أو تواصل عبر واتساب وسنكون هناك في أقرب وقت'
              : 'Call or WhatsApp us and we\'ll be there as fast as possible'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${PHONE}`} className="btn-primary flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-lg">
              <Phone size={22} /> {isRTL ? 'اتصل الآن' : 'Call Now'}
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-lg">
              <MessageCircle size={22} /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
