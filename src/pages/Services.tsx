import { Link } from 'react-router-dom';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { services } from '../data/services';
import { useInView } from 'react-intersection-observer';

const PHONE = '+966565746224';
const WA_LINK = 'https://wa.me/966565746224?text=Hello%20Alrehabsatharecovery%2C%20I%20need%20towing%20assistance.%20My%20vehicle%20is%20currently%20located%20at%20______.';

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <div ref={ref} className={`${className} transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {children}
    </div>
  );
}

const categories = [
  { id: 'all', label: { en: 'All Services', ar: 'جميع الخدمات' } },
  { id: 'towing', label: { en: 'Towing', ar: 'السحب' } },
  { id: 'recovery', label: { en: 'Recovery', ar: 'الإنقاذ' } },
  { id: 'roadside', label: { en: 'Roadside', ar: 'على الطريق' } },
  { id: 'specialized', label: { en: 'Specialized', ar: 'متخصص' } },
  { id: 'transport', label: { en: 'Transport', ar: 'النقل' } },
  { id: 'emergency', label: { en: 'Emergency', ar: 'طوارئ' } },
  { id: 'heavy', label: { en: 'Heavy', ar: 'ثقيل' } },
];

import { useState } from 'react';

export default function Services() {
  const { isRTL } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(s => s.category === activeCategory);

  return (
    <div style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      {/* Page Hero */}
      <div className="page-hero pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="accent-line mb-5"></div>
          <h1 className="display-lg text-white mb-4">
            {isRTL ? 'خدماتنا الشاملة' : 'Our Services'}
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            {isRTL
              ? 'حلول متكاملة لسحب المركبات وإنقاذها لجميع الحالات في المملكة العربية السعودية'
              : 'Comprehensive towing and vehicle recovery solutions for every situation across Saudi Arabia'}
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

      {/* Category Filter */}
      <div className="section-surface py-6 border-b border-white/6 sticky top-16 md:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-red-500 text-white shadow-lg shadow-red-500/30'
                    : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/25'
                }`}
              >
                {isRTL ? cat.label.ar : cat.label.en}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="section-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <AnimatedSection key={service.id}>
                <div className="service-card glass-card rounded-2xl p-6 card-hover border border-white/8 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="service-icon flex-shrink-0">{service.icon}</div>
                    <div>
                      <h2 className="text-white font-bold text-lg leading-snug mb-1">
                        {isRTL ? service.title.ar : service.title.en}
                      </h2>
                      <span className="inline-block px-2 py-0.5 rounded-full bg-red-500/15 text-red-400 text-xs font-semibold capitalize">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                    {isRTL ? service.description.ar : service.description.en}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1.5 mb-5">
                    {(isRTL ? service.features.ar : service.features.en).map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-2 mt-auto">
                    <a
                      href={`tel:${PHONE}`}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-red-500/15 border border-red-500/30 text-red-400 hover:bg-red-500/25 text-sm font-bold transition-all"
                    >
                      <Phone size={14} />
                      {isRTL ? 'اتصل' : 'Call'}
                    </a>
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-green-500/15 border border-green-500/30 text-green-400 hover:bg-green-500/25 text-sm font-bold transition-all"
                    >
                      <MessageCircle size={14} />
                      WhatsApp
                    </a>
                    <Link
                      to={`/services/${service.id}`}
                      className="flex items-center justify-center gap-1 py-2.5 px-3 rounded-lg border border-white/10 text-gray-400 hover:text-white text-sm font-semibold transition-all"
                    >
                      <ArrowRight size={14} style={{ transform: isRTL ? 'rotate(180deg)' : 'none' }} />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-surface py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="display-md text-white mb-4">
            {isRTL ? 'هل تحتاج مساعدة؟ اتصل بنا الآن' : 'Need Help? Contact Us Now'}
          </h2>
          <p className="text-gray-500 mb-8 text-lg">
            {isRTL
              ? 'فريقنا متاح على مدار الساعة لمساعدتك في أي حالة طارئة'
              : 'Our team is available 24/7 to assist you in any emergency situation'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${PHONE}`} className="btn-primary flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-bold">
              <Phone size={22} /> {isRTL ? 'اتصل الآن' : 'Call Now'} — {PHONE}
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-bold">
              <MessageCircle size={22} /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
