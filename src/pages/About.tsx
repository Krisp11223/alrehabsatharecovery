import { Phone, MessageCircle, Shield, Users, Clock, Star, CheckCircle, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
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

const values = [
  {
    icon: <Shield size={28} />,
    title: { en: 'Safety First', ar: 'السلامة أولاً' },
    desc: {
      en: 'Every operation is conducted with maximum safety protocols for your vehicle and our team.',
      ar: 'كل عملية تُنفَّذ وفق أعلى معايير السلامة لمركبتك وفريقنا.',
    },
  },
  {
    icon: <Clock size={28} />,
    title: { en: 'Always Responsive', ar: 'دائماً متجاوب' },
    desc: {
      en: 'We understand emergencies happen at any hour. Our team is always ready to respond.',
      ar: 'نتفهم أن الطوارئ تحدث في أي وقت. فريقنا دائماً مستعد للاستجابة.',
    },
  },
  {
    icon: <Users size={28} />,
    title: { en: 'Customer Focus', ar: 'التركيز على العميل' },
    desc: {
      en: 'Every customer matters. We treat each situation with empathy and full attention.',
      ar: 'كل عميل مهم. نتعامل مع كل موقف بتعاطف واهتمام كامل.',
    },
  },
  {
    icon: <Star size={28} />,
    title: { en: 'Quality Service', ar: 'جودة الخدمة' },
    desc: {
      en: 'We maintain high standards in every towing and recovery operation we carry out.',
      ar: 'نحافظ على معايير عالية في كل عملية سحب وإنقاذ نقوم بها.',
    },
  },
  {
    icon: <Zap size={28} />,
    title: { en: 'Speed & Efficiency', ar: 'السرعة والكفاءة' },
    desc: {
      en: 'Fast response times without compromising on quality or safety standards.',
      ar: 'أوقات استجابة سريعة دون التنازل عن معايير الجودة أو السلامة.',
    },
  },
  {
    icon: <CheckCircle size={28} />,
    title: { en: 'Transparency', ar: 'الشفافية' },
    desc: {
      en: 'Clear communication and honest pricing from first contact to final delivery.',
      ar: 'تواصل واضح وتسعير أمين من أول اتصال حتى التسليم النهائي.',
    },
  },
];

export default function About() {
  const { isRTL } = useLanguage();

  return (
    <div style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      {/* Hero */}
      <div className="page-hero pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="accent-line mb-5"></div>
          <h1 className="display-lg text-white mb-4">
            {isRTL ? 'من نحن' : 'About Us'}
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            {isRTL
              ? 'شريكك الموثوق في سحب وإنقاذ المركبات في المملكة العربية السعودية'
              : 'Your trusted partner for towing and vehicle recovery in Saudi Arabia'}
          </p>
        </div>
      </div>

      {/* About Content */}
      <section className="section-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="accent-line mb-6"></div>
              <h2 className="display-md text-white mb-6">
                {isRTL
                  ? 'الرحاب سطحة ريكفري — خبرة واحترافية في كل موقف'
                  : 'Alrehabsatharecovery — Expertise & Professionalism in Every Situation'}
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  {isRTL
                    ? 'الرحاب سطحة ريكفري شركة متخصصة في خدمات سحب المركبات وإنقاذها وتوفير المساعدة على الطريق في جميع أنحاء المملكة العربية السعودية. نفخر بتقديم خدمة موثوقة وسريعة واحترافية في أوقات الحاجة الأكثر إلحاحاً.'
                    : 'Alrehabsatharecovery is a company specializing in vehicle towing, recovery and roadside assistance services throughout Saudi Arabia. We pride ourselves on delivering reliable, fast and professional service when you need it most.'}
                </p>
                <p>
                  {isRTL
                    ? 'فريقنا من المشغلين والسائقين المدربين ملتزم بمعالجة كل مركبة — بدءاً من السيارات العادية إلى السيارات الفاخرة والرياضية — بأقصى درجات العناية والاحترافية. نستخدم معدات سحب هيدروليكية وسطحات حديثة لضمان وصول مركبتك إلى وجهتها سليمة.'
                    : 'Our team of trained operators and drivers is committed to handling every vehicle — from standard cars to luxury and sports vehicles — with the utmost care and professionalism. We use modern hydraulic and flatbed equipment to ensure your vehicle reaches its destination in perfect condition.'}
                </p>
                <p>
                  {isRTL
                    ? 'ندرك أن الانهيار أو الحادث على الطريق يمكن أن يكون تجربة مرهقة. لهذا نحرص على الاستجابة بسرعة والتواصل بوضوح وتسليم خدمة تفوق توقعاتك.'
                    : "We understand that a breakdown or accident can be a stressful experience. That's why we prioritize fast response, clear communication and delivering service that exceeds your expectations."}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden h-64 border border-white/8">
                  <img
                    src="/images/hero-towing.jpg"
                    alt="Professional towing service"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white font-bold text-base mb-1">
                      {isRTL ? 'شاحنات سحب حديثة ومجهزة' : 'Modern, Well-Equipped Tow Trucks'}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {isRTL ? 'أسطولنا جاهز 24/7' : 'Our fleet is ready 24/7'}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: '🚛', label: { en: 'Modern Fleet', ar: 'أسطول حديث' } },
                    { icon: '⏱️', label: { en: '24/7 Service', ar: 'خدمة 24/7' } },
                    { icon: '🛡️', label: { en: 'Safe Handling', ar: 'معالجة آمنة' } },
                  ].map((item) => (
                    <div key={item.icon} className="glass-card rounded-xl p-4 border border-white/8 text-center">
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <div className="text-gray-300 font-semibold text-xs">
                        {isRTL ? item.label.ar : item.label.en}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-surface py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-14">
            <div className="accent-line mx-auto mb-5"></div>
            <h2 className="display-md text-white mb-5">
              {isRTL ? 'مهمتنا' : 'Our Mission'}
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              {isRTL
                ? 'تقديم خدمات سحب وإنقاذ ومساعدة على الطريق آمنة وموثوقة وسريعة لكل صاحب مركبة في المملكة العربية السعودية. نسعى لأن نكون الاختيار الأول الذي تتذكره في وقت الأزمات.'
                : 'To provide safe, reliable and fast towing, recovery and roadside assistance to every vehicle owner in Saudi Arabia. We strive to be the first number you think of when you need help on the road.'}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="section-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="display-md text-white mb-4">
              {isRTL ? 'قيمنا' : 'Our Values'}
            </h2>
            <p className="text-gray-500 text-lg">
              {isRTL ? 'المبادئ التي تقود عملنا' : 'The principles that guide everything we do'}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={i}>
                <div className="glass-card rounded-2xl p-6 card-hover border border-white/8 h-full">
                  <div className="w-14 h-14 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-4">
                    {v.icon}
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">
                    {isRTL ? v.title.ar : v.title.en}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {isRTL ? v.desc.ar : v.desc.en}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Handling */}
      <section className="section-surface py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="glass-card rounded-2xl p-8 border border-white/8">
                <h3 className="text-white font-bold text-xl mb-5">
                  {isRTL ? 'سلامة مركبتك هي أولويتنا' : 'Your Vehicle Safety is Our Priority'}
                </h3>
                <div className="space-y-4">
                  {[
                    { en: 'Hydraulic and flatbed equipment prevents vehicle damage during loading', ar: 'معدات هيدروليكية وسطحة تمنع تلف المركبة أثناء التحميل' },
                    { en: 'Proper tie-down and securing methods for all vehicle types', ar: 'طرق ربط وتثبيت مناسبة لجميع أنواع المركبات' },
                    { en: 'Trained operators who know how to handle special vehicles', ar: 'مشغلون مدربون يعرفون كيفية التعامل مع المركبات الخاصة' },
                    { en: 'GPS tracking for long-distance transport', ar: 'تتبع GPS للنقل بعيد المدى' },
                    { en: 'Full vehicle inspection before and after loading', ar: 'فحص كامل للمركبة قبل وبعد التحميل' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-400 text-sm">
                        {isRTL ? item.ar : item.en}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-7xl mb-4">🛡️</div>
                  <h3 className="text-white font-bold text-xl mb-4">
                    {isRTL ? 'ماذا نغطي' : 'What We Cover'}
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { en: 'Riyadh & Central Region', ar: 'الرياض والمنطقة الوسطى' },
                    { en: 'Jeddah & Western Region', ar: 'جدة والمنطقة الغربية' },
                    { en: 'Dammam & Eastern Province', ar: 'الدمام والمنطقة الشرقية' },
                    { en: 'Makkah & Madinah', ar: 'مكة والمدينة' },
                    { en: 'Major Highways Nationwide', ar: 'الطرق السريعة الرئيسية' },
                    { en: 'Inter-City Routes', ar: 'مسارات بين المدن' },
                  ].map((item) => (
                    <div key={item.en} className="flex items-center gap-2 p-3 rounded-lg glass-card border border-white/8">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0"></div>
                      <span className="text-gray-300 text-xs font-medium">
                        {isRTL ? item.ar : item.en}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="display-md text-white mb-4">
            {isRTL ? 'جاهزون لمساعدتك' : 'Ready to Help You'}
          </h2>
          <p className="text-red-100 mb-8 text-lg">
            {isRTL
              ? 'اتصل أو تواصل عبر واتساب للحصول على مساعدة فورية'
              : 'Call or WhatsApp for immediate assistance anytime'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${PHONE}`} className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-red-600 rounded-xl font-black text-lg">
              <Phone size={22} /> {isRTL ? 'اتصل الآن' : 'Call Now'} — {PHONE}
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-8 py-4 bg-green-500 text-white rounded-xl font-black text-lg">
              <MessageCircle size={22} /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
