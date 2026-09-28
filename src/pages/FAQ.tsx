import { useState } from 'react';
import { ChevronDown, Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useInView } from 'react-intersection-observer';

const PHONE = '+966565746224';
const WA_LINK = 'https://wa.me/966565746224?text=Hello%20Alrehabsatharecovery%2C%20I%20have%20a%20question%20about%20your%20services.';

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <div ref={ref} className={`${className} transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {children}
    </div>
  );
}

interface FAQItem {
  q: { en: string; ar: string };
  a: { en: string; ar: string };
  category: string;
}

const faqs: FAQItem[] = [
  {
    q: {
      en: 'Are you available 24/7 for emergency towing?',
      ar: 'هل أنتم متاحون 24/7 لخدمة السحب الطارئ؟',
    },
    a: {
      en: 'Yes, Alrehabsatharecovery operates 24 hours a day, 7 days a week, 365 days a year. We are always available for emergency towing and vehicle recovery at any hour, day or night, weekday or weekend.',
      ar: 'نعم، تعمل الرحاب سطحة ريكفري 24 ساعة في اليوم، 7 أيام في الأسبوع، 365 يوماً في السنة. نحن متاحون دائماً لخدمة السحب الطارئ وإنقاذ المركبات في أي وقت، ليلاً أو نهاراً، في أيام العمل أو العطلات.',
    },
    category: 'general',
  },
  {
    q: {
      en: 'How quickly can you arrive at my location?',
      ar: 'كم من الوقت يستغرق وصولكم إلى موقعي؟',
    },
    a: {
      en: 'Response times vary depending on your location, time of day and current demand. We dispatch the nearest available truck immediately upon receiving your call or WhatsApp message. In major cities, we typically aim to arrive as quickly as possible.',
      ar: 'تختلف أوقات الاستجابة حسب موقعك والوقت والطلب الحالي. نرسل أقرب شاحنة متاحة فور استلام اتصالك أو رسالة واتساب. في المدن الرئيسية، نسعى للوصول بأسرع وقت ممكن.',
    },
    category: 'general',
  },
  {
    q: {
      en: 'What areas and cities do you cover?',
      ar: 'ما هي المناطق والمدن التي تغطونها؟',
    },
    a: {
      en: 'We cover major cities across Saudi Arabia including Riyadh, Jeddah, Makkah, Madinah, Dammam, Khobar, Dhahran, Jubail, Taif, Tabuk, Qassim, Sakaka and many more. We also provide service along major highways and inter-city routes. Contact us if you are in a location not listed — we may still be able to assist.',
      ar: 'نغطي المدن الرئيسية في جميع أنحاء المملكة العربية السعودية بما في ذلك الرياض وجدة ومكة المكرمة والمدينة المنورة والدمام والخبر والظهران والجبيل والطائف وتبوك والقصيم وسكاكا وغيرها. كما نقدم الخدمة على الطرق السريعة الرئيسية والمسارات بين المدن. تواصل معنا إذا كنت في موقع غير مدرج — قد نتمكن من مساعدتك.',
    },
    category: 'coverage',
  },
  {
    q: {
      en: 'Do you provide hydraulic towing?',
      ar: 'هل تقدمون خدمة السحب الهيدروليكي؟',
    },
    a: {
      en: 'Yes, we provide professional hydraulic towing services. Our hydraulic trucks can handle vehicles with damaged suspensions, low clearance or those that cannot be towed using standard methods. This equipment allows for damage-free loading and transport.',
      ar: 'نعم، نقدم خدمات السحب الهيدروليكي الاحترافية. يمكن لشاحناتنا الهيدروليكية التعامل مع المركبات ذات التعليق التالف، أو المنخفضة أو التي لا يمكن سحبها بالطرق القياسية. تتيح هذه المعدات التحميل والنقل دون أضرار.',
    },
    category: 'services',
  },
  {
    q: {
      en: 'Can you transport luxury and sports cars?',
      ar: 'هل يمكنكم نقل السيارات الفاخرة والرياضية؟',
    },
    a: {
      en: 'Absolutely. We specialize in luxury and sports car transportation using flatbed trucks and enclosed transport options. Extra care is taken with high-value vehicles including proper securing, protection during transport and special loading techniques to prevent any damage.',
      ar: 'بالتأكيد. نتخصص في نقل السيارات الفاخرة والرياضية باستخدام شاحنات السطحة وخيارات النقل المغلق. يُولى عناية إضافية للمركبات عالية القيمة بما في ذلك التثبيت المناسب والحماية أثناء النقل وتقنيات تحميل خاصة لمنع أي ضرر.',
    },
    category: 'services',
  },
  {
    q: {
      en: 'Can you tow accident-damaged vehicles?',
      ar: 'هل يمكنكم سحب المركبات المتضررة من الحوادث؟',
    },
    a: {
      en: 'Yes, we have specialized equipment and trained operators for accident vehicle recovery. We can safely extract and transport vehicles that have been involved in accidents, even if they are severely damaged, non-drivable or in difficult positions.',
      ar: 'نعم، لدينا معدات متخصصة ومشغلون مدربون لإنقاذ المركبات الحادثة. يمكننا استخراج ونقل المركبات التي تعرضت لحوادث بأمان، حتى لو كانت متضررة بشدة أو غير صالحة للقيادة أو في أوضاع صعبة.',
    },
    category: 'services',
  },
  {
    q: {
      en: 'Do you provide long-distance vehicle transportation?',
      ar: 'هل تقدمون خدمة النقل بعيد المدى للمركبات؟',
    },
    a: {
      en: 'Yes, we provide long-distance and inter-city vehicle transportation across Saudi Arabia. This includes routes like Riyadh to Jeddah, Dammam to Riyadh, and all other major inter-city routes. We offer GPS tracking and communicate with you throughout the journey.',
      ar: 'نعم، نقدم نقل المركبات على مسافات طويلة وبين المدن في جميع أنحاء المملكة. يشمل ذلك مسارات مثل الرياض إلى جدة والدمام إلى الرياض وجميع المسارات الرئيسية بين المدن. نقدم تتبع GPS ونتواصل معك طوال الرحلة.',
    },
    category: 'services',
  },
  {
    q: {
      en: 'Can you transport motorcycles?',
      ar: 'هل يمكنكم نقل الدراجات النارية؟',
    },
    a: {
      en: 'Yes, we transport motorcycles using specialized equipment including proper strapping and securing systems designed for bikes. All motorcycle types can be transported safely, including large cruisers, sports bikes and standard motorcycles.',
      ar: 'نعم، ننقل الدراجات النارية باستخدام معدات متخصصة تشمل أنظمة ربط وتثبيت مصممة خصيصاً للدراجات. يمكن نقل جميع أنواع الدراجات النارية بأمان، بما في ذلك الكروزر الكبيرة والرياضية والقياسية.',
    },
    category: 'services',
  },
  {
    q: {
      en: 'Can you tow non-running or completely dead vehicles?',
      ar: 'هل يمكنكم سحب المركبات المتوقفة تماماً؟',
    },
    a: {
      en: 'Yes, this is one of our core services. We can tow and recover vehicles that are completely non-running due to engine failure, mechanical breakdown, battery issues, or any other cause. Our equipment is designed to handle vehicles that cannot be driven.',
      ar: 'نعم، هذه إحدى خدماتنا الأساسية. يمكننا سحب واسترداد المركبات المتوقفة تماماً بسبب فشل المحرك أو الأعطال الميكانيكية أو مشاكل البطارية أو أي سبب آخر. معداتنا مصممة للتعامل مع المركبات التي لا يمكن قيادتها.',
    },
    category: 'services',
  },
  {
    q: {
      en: 'How is the towing price calculated?',
      ar: 'كيف يتم احتساب سعر السحب؟',
    },
    a: {
      en: 'Pricing depends on several factors including the type of vehicle, type of service required (standard towing, flatbed, hydraulic, enclosed), distance, and location. We provide clear pricing before confirming the service. Contact us for a quote — we aim to be transparent and fair with all pricing.',
      ar: 'التسعير يعتمد على عدة عوامل بما في ذلك نوع المركبة ونوع الخدمة المطلوبة (سحب عادي، سطحة، هيدروليكي، مغلق) والمسافة والموقع. نقدم تسعيراً واضحاً قبل تأكيد الخدمة. تواصل معنا للحصول على عرض سعر — نسعى للشفافية والعدالة في جميع الأسعار.',
    },
    category: 'pricing',
  },
  {
    q: {
      en: 'Can I contact you through WhatsApp?',
      ar: 'هل يمكنني التواصل معكم عبر واتساب؟',
    },
    a: {
      en: 'Yes, WhatsApp is one of our primary communication channels. You can reach us at +966565746224 via WhatsApp at any time. Simply send a message describing your situation and location and our team will respond and dispatch help as quickly as possible.',
      ar: 'نعم، واتساب هو أحد قنوات التواصل الرئيسية لدينا. يمكنك الوصول إلينا على +966565746224 عبر واتساب في أي وقت. ما عليك سوى إرسال رسالة تصف حالتك وموقعك وسيستجيب فريقنا ويرسل المساعدة في أسرع وقت ممكن.',
    },
    category: 'contact',
  },
  {
    q: {
      en: 'Do you provide emergency roadside assistance like battery jump start, tire change and fuel delivery?',
      ar: 'هل تقدمون مساعدة الطوارئ على الطريق مثل تشغيل البطارية وتبديل الإطار وتوصيل الوقود؟',
    },
    a: {
      en: 'Yes, we provide comprehensive roadside assistance including battery jump start, flat tire change, emergency fuel delivery and other minor roadside repairs. These services are available 24/7 to help you get back on the road without needing full towing.',
      ar: 'نعم، نقدم مساعدة شاملة على الطريق تشمل تشغيل البطارية وتبديل الإطار المثقوب وتوصيل الوقود الطارئ وإصلاحات طفيفة أخرى على الطريق. هذه الخدمات متاحة 24/7 لمساعدتك على العودة إلى الطريق دون الحاجة إلى سحب كامل.',
    },
    category: 'services',
  },
  {
    q: {
      en: 'Can you handle SUVs, 4x4s and off-road vehicle recovery?',
      ar: 'هل يمكنكم التعامل مع إنقاذ SUV والسيارات الرباعية الدفع وسيارات الطرق الوعرة؟',
    },
    a: {
      en: 'Yes, we specialize in SUV and 4x4 recovery including vehicles stuck in sand dunes, mud, or difficult off-road terrain. Our heavy-duty recovery equipment and experienced team can handle even the most challenging extraction scenarios.',
      ar: 'نعم، نتخصص في إنقاذ SUV والسيارات الرباعية الدفع بما في ذلك المركبات العالقة في الكثبان الرملية أو الوحل أو التضاريس الصعبة. معدات الإنقاذ الثقيلة لدينا وفريقنا المتمرس يمكنهم التعامل مع أصعب سيناريوهات الاستخراج.',
    },
    category: 'services',
  },
  {
    q: {
      en: 'Do you have enclosed transport for very sensitive or rare vehicles?',
      ar: 'هل لديكم نقل مغلق للمركبات الحساسة جداً أو النادرة؟',
    },
    a: {
      en: 'Yes, we offer enclosed vehicle transportation for maximum protection. This is ideal for luxury cars, classic vehicles, rare cars and any vehicle requiring complete protection from the elements and road conditions during transport.',
      ar: 'نعم، نقدم نقل المركبات المغلق لأقصى قدر من الحماية. هذا مثالي للسيارات الفاخرة والكلاسيكية والنادرة وأي مركبة تتطلب حماية كاملة من العوامل الجوية وظروف الطريق أثناء النقل.',
    },
    category: 'services',
  },
];

const categories = [
  { id: 'all', en: 'All', ar: 'الكل' },
  { id: 'general', en: 'General', ar: 'عام' },
  { id: 'services', en: 'Services', ar: 'خدمات' },
  { id: 'coverage', en: 'Coverage', ar: 'التغطية' },
  { id: 'pricing', en: 'Pricing', ar: 'التسعير' },
  { id: 'contact', en: 'Contact', ar: 'التواصل' },
];

function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { isRTL } = useLanguage();

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <AnimatedSection key={i}>
          <div
            className={`glass-card rounded-xl border transition-all duration-300 ${
              openIndex === i ? 'border-red-500/30' : 'border-white/8'
            }`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-start justify-between gap-4 p-5 text-left"
            >
              <span className={`font-semibold text-base leading-snug transition-colors ${openIndex === i ? 'text-white' : 'text-gray-300'}`}>
                {isRTL ? item.q.ar : item.q.en}
              </span>
              <ChevronDown
                size={20}
                className={`text-gray-500 flex-shrink-0 mt-0.5 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-red-400' : ''}`}
              />
            </button>
            <div className={`accordion-content ${openIndex === i ? 'open' : ''}`}>
              <div className="px-5 pb-5">
                <div className="h-px bg-white/6 mb-4"></div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {isRTL ? item.a.ar : item.a.en}
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}

export default function FAQ() {
  const { isRTL } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredFAQs = activeCategory === 'all' ? faqs : faqs.filter(f => f.category === activeCategory);

  return (
    <div style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      {/* Hero */}
      <div className="page-hero pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="accent-line mb-5"></div>
          <h1 className="display-lg text-white mb-4">
            {isRTL ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            {isRTL
              ? 'كل ما تحتاج معرفته عن خدماتنا للسحب وإنقاذ المركبات'
              : 'Everything you need to know about our towing and vehicle recovery services'}
          </p>
        </div>
      </div>

      <section className="section-dark py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-red-500 text-white shadow-lg shadow-red-500/30'
                    : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white'
                }`}
              >
                {isRTL ? cat.ar : cat.en}
              </button>
            ))}
          </div>

          <FAQAccordion items={filteredFAQs} />
        </div>
      </section>

      {/* Still have questions */}
      <section className="section-surface py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-5xl mb-5">❓</div>
          <h2 className="display-md text-white mb-4">
            {isRTL ? 'لديك سؤال آخر؟' : 'Still Have Questions?'}
          </h2>
          <p className="text-gray-500 mb-8 text-lg">
            {isRTL
              ? 'لا تتردد في التواصل معنا مباشرة. فريقنا جاهز للإجابة على استفساراتك.'
              : "Don't hesitate to contact us directly. Our team is ready to answer any questions."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${PHONE}`} className="btn-primary flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-bold">
              <Phone size={22} /> {isRTL ? 'اتصل بنا' : 'Call Us'}
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
