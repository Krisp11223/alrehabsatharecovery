import { Link } from 'react-router-dom';
import { Phone, MessageCircle, CheckCircle, Star, ArrowRight, Clock, Shield, Zap, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { services } from '../data/services';
import { reviews } from '../data/reviews';
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

const whyChooseUs = [
  { icon: <Clock size={28} />, title: { en: '24/7 Availability', ar: 'متاح 24/7' }, desc: { en: 'Round-the-clock emergency service, day or night, weekday or weekend.', ar: 'خدمة طوارئ على مدار الساعة، ليلاً أو نهاراً، أيام العمل أو العطلات.' } },
  { icon: <Zap size={28} />, title: { en: 'Fast Response', ar: 'استجابة سريعة' }, desc: { en: 'Quick dispatch with GPS-tracked trucks to minimize your wait time.', ar: 'إرسال سريع مع شاحنات بتتبع GPS لتقليل وقت انتظارك.' } },
  { icon: <Shield size={28} />, title: { en: 'Safe Vehicle Handling', ar: 'معالجة آمنة للمركبات' }, desc: { en: 'Every vehicle is handled with extreme care to prevent any damage.', ar: 'كل مركبة تُعالج بعناية فائقة لمنع أي ضرر.' } },
  { icon: <Award size={28} />, title: { en: 'Professional Drivers', ar: 'سائقون محترفون' }, desc: { en: 'Trained and experienced operators who know how to handle any situation.', ar: 'مشغلون مدربون وذوو خبرة يعرفون كيفية التعامل مع أي موقف.' } },
  { icon: <CheckCircle size={28} />, title: { en: 'All Vehicle Types', ar: 'جميع أنواع المركبات' }, desc: { en: 'From sedans to luxury cars, SUVs, motorcycles and commercial vehicles.', ar: 'من السيدان إلى السيارات الفاخرة وSUV والدراجات النارية والمركبات التجارية.' } },
  { icon: <Star size={28} />, title: { en: 'Transparent Pricing', ar: 'تسعير شفاف' }, desc: { en: 'Clear, upfront pricing with no hidden fees or surprise charges.', ar: 'تسعير واضح ومسبق بدون رسوم مخفية أو مفاجآت.' } },
];

const howItWorks = [
  {
    num: '01',
    title: { en: 'Contact Us', ar: 'تواصل معنا' },
    desc: { en: 'Call or send a WhatsApp message. We\'re available 24/7.', ar: 'اتصل أو أرسل رسالة واتساب. نحن متاحون 24/7.' },
    icon: '📞',
  },
  {
    num: '02',
    title: { en: 'Share Your Location', ar: 'أرسل موقعك' },
    desc: { en: 'Share your GPS location and vehicle details with our team.', ar: 'أرسل موقعك عبر GPS وتفاصيل مركبتك لفريقنا.' },
    icon: '📍',
  },
  {
    num: '03',
    title: { en: 'Truck Dispatched', ar: 'إرسال الشاحنة' },
    desc: { en: 'The right towing or recovery vehicle is dispatched immediately.', ar: 'يتم إرسال مركبة السحب أو الإنقاذ المناسبة فوراً.' },
    icon: '🚛',
  },
  {
    num: '04',
    title: { en: 'Safe Transportation', ar: 'نقل آمن' },
    desc: { en: 'Your vehicle is loaded, secured and transported safely to your destination.', ar: 'يتم تحميل مركبتك وتثبيتها ونقلها بأمان إلى وجهتك.' },
    icon: '✅',
  },
];

const vehicleTypes = [
  { icon: '🚗', title: { en: 'Sedan', ar: 'سيدان' } },
  { icon: '🚙', title: { en: 'SUV', ar: 'SUV' } },
  { icon: '🛻', title: { en: '4x4 & Pickup', ar: 'شاحنة 4×4' } },
  { icon: '🏆', title: { en: 'Luxury Cars', ar: 'سيارات فاخرة' } },
  { icon: '🏎️', title: { en: 'Sports Cars', ar: 'سيارات رياضية' } },
  { icon: '🏍️', title: { en: 'Motorcycles', ar: 'دراجات نارية' } },
  { icon: '🚐', title: { en: 'Vans & Minibus', ar: 'فانات وميكروباص' } },
  { icon: '🚛', title: { en: 'Commercial Vehicles', ar: 'مركبات تجارية' } },
  { icon: '⚡', title: { en: 'Electric Vehicles', ar: 'مركبات كهربائية' } },
  { icon: '💥', title: { en: 'Accident Damaged', ar: 'متضررة من حوادث' } },
  { icon: '🔇', title: { en: 'Non-Running', ar: 'غير صالحة للقيادة' } },
  { icon: '🏗️', title: { en: 'Heavy Equipment', ar: 'معدات ثقيلة' } },
];

const galleryImages = [
  {
    src: '/images/hero-towing.jpg',
    alt: 'Professional tow truck on Saudi highway at dusk',
    label: { en: 'Emergency Towing', ar: 'سحب طارئ' },
  },
  {
    src: '/images/recovery-service.jpg',
    alt: 'Flatbed truck transporting luxury car',
    label: { en: 'Luxury Transport', ar: 'نقل فاخر' },
  },
  {
    src: 'https://images.pexels.com/photos/14989848/pexels-photo-14989848.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    alt: 'Saudi Arabia highway service',
    label: { en: 'Highway Service', ar: 'خدمة الطريق السريع' },
  },
  {
    src: 'https://images.pexels.com/photos/5209221/pexels-photo-5209221.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    alt: 'Vehicle recovery on desert road',
    label: { en: 'Desert Recovery', ar: 'إنقاذ صحراوي' },
  },
];

export default function Home() {
  const { isRTL } = useLanguage();

  return (
    <div style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      {/* HERO */}
      <section className="hero-bg relative min-h-screen flex items-center pt-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/15 border border-red-500/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-red-400 font-semibold text-sm">
                {isRTL ? 'خدمة طوارئ متاحة 24/7' : '24/7 Emergency Service — Available Now'}
              </span>
            </div>

            {/* Headline */}
            <h1 className="display-xl text-white mb-6">
              {isRTL ? (
                <>
                  <span className="text-gradient">سحب المركبات وإنقاذها</span>
                  <br />على مدار الساعة
                  <br />في المملكة العربية السعودية
                </>
              ) : (
                <>
                  <span className="text-gradient">24/7 Towing</span> &{' '}
                  <br />
                  Vehicle Recovery
                  <br />
                  in Saudi Arabia
                </>
              )}
            </h1>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              {isRTL
                ? 'خدمات سحب ومركبات وإنقاذ واحترافية وموثوقة في أي وقت تحتاج إليها. متاحون 24 ساعة في اليوم، 7 أيام في الأسبوع في جميع أنحاء المملكة العربية السعودية.'
                : 'Fast, professional and reliable towing, recovery and vehicle transportation whenever you need assistance. Serving all major cities across Saudi Arabia.'}
            </p>

            {/* Phone number display */}
            <div className="flex items-center gap-2 mb-6">
              <Phone size={16} className="text-red-400" />
              <a href={`tel:${PHONE}`} className="text-gray-300 font-bold hover:text-red-400 transition-colors text-lg tracking-wide">
                {PHONE}
              </a>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 mb-10 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <a
                href={`tel:${PHONE}`}
                className="btn-primary flex items-center justify-center gap-3 px-8 py-5 text-xl rounded-2xl font-black shadow-2xl"
                style={{ boxShadow: '0 8px 32px rgba(232,23,30,0.4)' }}
              >
                <Phone size={24} />
                {isRTL ? '📞 اتصل الآن' : '📞 Call Now'}
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp flex items-center justify-center gap-3 px-8 py-5 text-xl rounded-2xl font-black shadow-2xl"
                style={{ boxShadow: '0 8px 32px rgba(37,211,102,0.3)' }}
              >
                <MessageCircle size={24} />
                {isRTL ? '💬 واتساب الآن' : '💬 WhatsApp Now'}
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              {[
                { en: '24/7 Available', ar: 'متاح 24/7', icon: '🕐' },
                { en: 'Fast Response', ar: 'استجابة سريعة', icon: '⚡' },
                { en: 'Safe Handling', ar: 'معالجة آمنة', icon: '🛡️' },
                { en: 'All Vehicle Types', ar: 'جميع المركبات', icon: '🚗' },
                { en: 'Long-Distance', ar: 'بعيد المدى', icon: '🗺️' },
              ].map((badge) => (
                <div key={badge.en} className="trust-badge">
                  <span>{badge.icon}</span>
                  <span>{isRTL ? badge.ar : badge.en}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
          <span className="text-xs uppercase tracking-widest">{isRTL ? 'اسحب للأسفل' : 'Scroll'}</span>
          <div className="w-px h-10 bg-gradient-to-b from-gray-600 to-transparent animate-pulse"></div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="section-charcoal py-10 border-y border-white/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: '24/7', label: { en: 'Available Always', ar: 'متاح دائماً' }, icon: '⏰' },
              { num: '20+', label: { en: 'Services Offered', ar: 'خدمة متاحة' }, icon: '🔧' },
              { num: '12+', label: { en: 'Cities Covered', ar: 'مدينة مغطاة' }, icon: '🗺️' },
              { num: '100%', label: { en: 'Safe Handling', ar: 'معالجة آمنة' }, icon: '🛡️' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-black text-gradient mb-1">{stat.num}</div>
                <div className="text-gray-500 text-sm font-medium">
                  {isRTL ? stat.label.ar : stat.label.en}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section-surface py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-14">
            <div className="accent-line mx-auto mb-5"></div>
            <h2 className="display-md text-white mb-4">
              {isRTL ? 'خدماتنا الشاملة' : 'Our Comprehensive Services'}
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              {isRTL
                ? 'حلول متكاملة لسحب المركبات وإنقاذها لكل الحالات'
                : 'Complete towing and vehicle recovery solutions for every situation'}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.slice(0, 8).map((service) => (
              <AnimatedSection key={service.id}>
                <div className="service-card glass-card rounded-2xl p-6 card-hover border border-white/8 h-full flex flex-col">
                  <div className="service-icon mb-4">{service.icon}</div>
                  <h3 className="text-white font-bold text-base mb-2 leading-snug">
                    {isRTL ? service.title.ar : service.title.en}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                    {isRTL ? service.description.ar : service.description.en}
                  </p>
                  <div className="flex gap-2 mt-auto">
                    <Link
                      to={`/services/${service.id}`}
                      className="flex-1 text-center py-2 px-3 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-white/25 text-xs font-semibold transition-all"
                    >
                      {isRTL ? 'اعرف المزيد' : 'Learn More'}
                    </Link>
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 px-3 rounded-lg bg-green-500/15 border border-green-500/30 text-green-400 hover:bg-green-500/25 text-xs font-semibold transition-all"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 btn-primary px-8 py-3.5 rounded-xl font-bold"
            >
              {isRTL ? 'عرض جميع الخدمات' : 'View All Services'}
              <ArrowRight size={18} style={{ transform: isRTL ? 'rotate(180deg)' : 'none' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-dark py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-14">
            <div className="accent-line mx-auto mb-5"></div>
            <h2 className="display-md text-white mb-4">
              {isRTL ? 'لماذا تختار الرحاب سطحة ريكفري؟' : 'Why Choose Alrehabsatharecovery?'}
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              {isRTL
                ? 'موثوق من آلاف العملاء في جميع أنحاء المملكة'
                : 'Trusted by thousands of vehicle owners across Saudi Arabia'}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (
              <AnimatedSection key={i}>
                <div className="glass-card rounded-2xl p-6 card-hover border border-white/8 h-full">
                  <div className="w-14 h-14 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">
                    {isRTL ? item.title.ar : item.title.en}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {isRTL ? item.desc.ar : item.desc.en}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-surface py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-14">
            <div className="accent-line mx-auto mb-5"></div>
            <h2 className="display-md text-white mb-4">
              {isRTL ? 'كيف نعمل' : 'How It Works'}
            </h2>
            <p className="text-gray-500 text-lg">
              {isRTL ? 'الحصول على المساعدة أمر بسيط وسريع' : 'Getting help is simple and fast'}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, i) => (
              <AnimatedSection key={i}>
                <div className="relative text-center">
                  {/* Connector line */}
                  {i < howItWorks.length - 1 && (
                    <div
                      className="hidden lg:block absolute top-8 w-full h-px bg-gradient-to-r from-red-500/30 to-transparent"
                      style={{ left: '50%' }}
                    ></div>
                  )}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="step-number mb-4 text-2xl font-black">{step.num}</div>
                    <div className="text-4xl mb-4">{step.icon}</div>
                    <h3 className="text-white font-bold text-base mb-2">
                      {isRTL ? step.title.ar : step.title.en}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                      {isRTL ? step.desc.ar : step.desc.en}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-14">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-3 btn-primary px-10 py-4 rounded-xl text-lg font-bold"
            >
              <Phone size={22} />
              {isRTL ? 'اطلب المساعدة الآن' : 'Request Help Now'}
            </a>
          </div>
        </div>
      </section>

      {/* VEHICLES WE HANDLE */}
      <section className="section-dark py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-14">
            <div className="accent-line mx-auto mb-5"></div>
            <h2 className="display-md text-white mb-4">
              {isRTL ? 'المركبات التي نتعامل معها' : 'Vehicles We Handle'}
            </h2>
            <p className="text-gray-500 text-lg">
              {isRTL ? 'معالجة احترافية لجميع أنواع المركبات' : 'Professional handling for all vehicle types'}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {vehicleTypes.map((v, i) => (
              <AnimatedSection key={i}>
                <div className="glass-card rounded-xl p-5 text-center card-hover border border-white/8 cursor-default">
                  <div className="text-4xl mb-3">{v.icon}</div>
                  <div className="text-gray-300 text-sm font-semibold">
                    {isRTL ? v.title.ar : v.title.en}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="section-surface py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-12">
            <div className="accent-line mx-auto mb-5"></div>
            <h2 className="display-md text-white mb-4">
              {isRTL ? 'أعمالنا' : 'Our Work'}
            </h2>
            <p className="text-gray-500 text-lg">
              {isRTL ? 'عمليات سحب وإنقاذ احترافية' : 'Professional towing and recovery operations'}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <AnimatedSection key={i}>
                <div className="gallery-item relative h-56 sm:h-64 rounded-xl overflow-hidden border border-white/8">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="inline-block px-3 py-1 bg-red-500/80 text-white text-xs font-bold rounded-full">
                      {isRTL ? img.label.ar : img.label.en}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS PREVIEW */}
      <section className="section-dark py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-12">
            <div className="accent-line mx-auto mb-5"></div>
            <h2 className="display-md text-white mb-4">
              {isRTL ? 'ماذا يقول عملاؤنا' : 'What Our Customers Say'}
            </h2>
            <p className="text-gray-500 text-lg">
              {isRTL ? 'تقييمات حقيقية من عملاء راضين' : 'Genuine feedback from satisfied customers'}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {reviews.slice(0, 3).map((review) => (
              <AnimatedSection key={review.id}>
                <div className="glass-card rounded-2xl p-6 card-hover border border-white/8 h-full flex flex-col">
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4 italic">
                    "{isRTL ? review.text.ar : review.text.en}"
                  </p>
                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/8">
                    <div className="w-9 h-9 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400 font-bold text-sm flex-shrink-0">
                      {review.initials}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">
                        {isRTL ? review.nameAr : review.name}
                      </div>
                      <div className="text-gray-600 text-xs">
                        {isRTL ? review.service.ar : review.service.en}
                      </div>
                    </div>
                    {review.isDemo && (
                      <span className="ml-auto text-xs text-yellow-600 border border-yellow-600/30 px-2 py-0.5 rounded-full">
                        {isRTL ? 'نموذجي' : 'Sample'}
                      </span>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 btn-outline px-8 py-3.5 rounded-xl font-bold"
            >
              {isRTL ? 'عرض جميع التقييمات' : 'View All Reviews'}
              <ArrowRight size={18} style={{ transform: isRTL ? 'rotate(180deg)' : 'none' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* COVERAGE PREVIEW */}
      <section className="section-surface py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-12">
            <div className="accent-line mx-auto mb-5"></div>
            <h2 className="display-md text-white mb-4">
              {isRTL ? 'مناطق التغطية' : 'Coverage Areas'}
            </h2>
            <p className="text-gray-500 text-lg">
              {isRTL ? 'نخدم جميع المدن الرئيسية في المملكة' : 'Serving all major cities across Saudi Arabia'}
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-10">
            {[
              { icon: '🏙️', name: { en: 'Riyadh', ar: 'الرياض' }, id: 'riyadh' },
              { icon: '🌊', name: { en: 'Jeddah', ar: 'جدة' }, id: 'jeddah' },
              { icon: '🕌', name: { en: 'Makkah', ar: 'مكة' }, id: 'makkah' },
              { icon: '🕌', name: { en: 'Madinah', ar: 'المدينة' }, id: 'madinah' },
              { icon: '⚙️', name: { en: 'Dammam', ar: 'الدمام' }, id: 'dammam' },
              { icon: '⛰️', name: { en: 'Taif', ar: 'الطائف' }, id: 'taif' },
              { icon: '🌴', name: { en: 'Al-Khobar', ar: 'الخبر' }, id: 'khobar' },
              { icon: '🏔️', name: { en: 'Tabuk', ar: 'تبوك' }, id: 'tabuk' },
              { icon: '🌾', name: { en: 'Qassim', ar: 'القصيم' }, id: 'qassim' },
              { icon: '🏗️', name: { en: 'Jubail', ar: 'الجبيل' }, id: 'jubail' },
              { icon: '🏭', name: { en: 'Dhahran', ar: 'الظهران' }, id: 'dhahran' },
              { icon: '🌵', name: { en: 'Sakaka', ar: 'سكاكا' }, id: 'sakaka' },
            ].map((city) => (
              <Link
                key={city.id}
                to={`/coverage/${city.id}`}
                className="city-card"
              >
                <div className="text-3xl mb-2">{city.icon}</div>
                <div className="text-white font-semibold text-sm">
                  {isRTL ? city.name.ar : city.name.en}
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/coverage"
              className="inline-flex items-center gap-2 btn-outline px-8 py-3.5 rounded-xl font-bold"
            >
              {isRTL ? 'عرض جميع المناطق' : 'View All Coverage Areas'}
              <ArrowRight size={18} style={{ transform: isRTL ? 'rotate(180deg)' : 'none' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* EMERGENCY CTA */}
      <section className="py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-95"></div>
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-6xl mb-6">🚨</div>
          <h2 className="display-md text-white mb-4 font-black">
            {isRTL ? 'هل أنت في حالة طارئة؟' : 'Are You in an Emergency?'}
          </h2>
          <p className="text-red-100 text-lg mb-8 max-w-xl mx-auto">
            {isRTL
              ? 'لا تنتظر. اتصل بنا الآن وسيصل فريقنا إليك في أقصر وقت ممكن.'
              : "Don't wait. Call us now and our team will reach you as fast as possible."}
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <a
              href={`tel:${PHONE}`}
              className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-red-600 rounded-xl text-lg font-black hover:bg-red-50 transition-colors shadow-2xl"
            >
              <Phone size={24} />
              {isRTL ? 'اتصل الآن فوراً' : 'Call Now Immediately'}
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-green-500 text-white rounded-xl text-lg font-black hover:bg-green-400 transition-colors shadow-2xl"
            >
              <MessageCircle size={24} />
              WhatsApp
            </a>
            <Link
              to="/emergency"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 text-white border-2 border-white/30 rounded-xl text-lg font-bold hover:bg-white/20 transition-colors"
            >
              {isRTL ? 'طلب طارئ' : 'Emergency Form'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
