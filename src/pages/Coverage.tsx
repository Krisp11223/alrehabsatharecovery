import { Link } from 'react-router-dom';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
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

export const cities = [
  {
    id: 'riyadh',
    name: { en: 'Riyadh', ar: 'الرياض' },
    region: { en: 'Central Region', ar: 'المنطقة الوسطى' },
    icon: '🏙️',
    desc: {
      en: 'Full 24/7 towing and recovery coverage across all Riyadh districts, highways and surrounding areas.',
      ar: 'تغطية كاملة للسحب والإنقاذ على مدار الساعة في جميع أحياء الرياض والطرق السريعة والمناطق المحيطة.',
    },
    highlights: {
      en: ['Ring roads', 'King Fahd Highway', 'Northern Ring Road', 'Airport Road'],
      ar: ['الطرق الدائرية', 'طريق الملك فهد', 'الطريق الدائري الشمالي', 'طريق المطار'],
    },
  },
  {
    id: 'jeddah',
    name: { en: 'Jeddah', ar: 'جدة' },
    region: { en: 'Western Region', ar: 'المنطقة الغربية' },
    icon: '🌊',
    desc: {
      en: '24/7 towing service throughout Jeddah, covering all major districts and the coastal highway.',
      ar: 'خدمة سحب 24/7 في جميع أنحاء جدة، تغطي جميع الأحياء الرئيسية والطريق الساحلي.',
    },
    highlights: {
      en: ['Corniche Road', 'Madinah Road', 'Al Haramain Highway', 'King Abdulaziz Road'],
      ar: ['طريق الكورنيش', 'طريق المدينة', 'طريق الحرمين', 'طريق الملك عبدالعزيز'],
    },
  },
  {
    id: 'makkah',
    name: { en: 'Makkah', ar: 'مكة المكرمة' },
    region: { en: 'Western Region', ar: 'المنطقة الغربية' },
    icon: '🕌',
    desc: {
      en: 'Vehicle recovery and towing services in and around Makkah, including surrounding areas and routes.',
      ar: 'خدمات إنقاذ وسحب المركبات داخل مكة المكرمة وحولها، بما في ذلك المناطق المحيطة والطرق.',
    },
    highlights: {
      en: ['Ring Road 1 & 2', 'Azizia', 'Mina Road', 'Jeddah–Makkah Highway'],
      ar: ['الطريق الدائري 1 و 2', 'العزيزية', 'طريق منى', 'طريق جدة-مكة'],
    },
  },
  {
    id: 'madinah',
    name: { en: 'Madinah', ar: 'المدينة المنورة' },
    region: { en: 'Madinah Region', ar: 'منطقة المدينة' },
    icon: '🕌',
    desc: {
      en: 'Professional towing and roadside assistance throughout Madinah and surrounding routes.',
      ar: 'سحب احترافي ومساعدة على الطريق في جميع أنحاء المدينة المنورة والطرق المحيطة.',
    },
    highlights: {
      en: ['Quba Road', 'King Fahd Road', 'Airport Road', 'Central Ring Road'],
      ar: ['طريق قباء', 'طريق الملك فهد', 'طريق المطار', 'الطريق الدائري المركزي'],
    },
  },
  {
    id: 'dammam',
    name: { en: 'Dammam', ar: 'الدمام' },
    region: { en: 'Eastern Province', ar: 'المنطقة الشرقية' },
    icon: '⚙️',
    desc: {
      en: 'Comprehensive towing and recovery services across Dammam and the Eastern Province.',
      ar: 'خدمات سحب وإنقاذ شاملة في جميع أنحاء الدمام والمنطقة الشرقية.',
    },
    highlights: {
      en: ['King Fahd Causeway Road', 'Prince Nayef Road', 'Coastal Road', 'Industrial Area'],
      ar: ['طريق جسر الملك فهد', 'طريق الأمير نايف', 'الطريق الساحلي', 'المنطقة الصناعية'],
    },
  },
  {
    id: 'taif',
    name: { en: 'Taif', ar: 'الطائف' },
    region: { en: 'Makkah Region', ar: 'منطقة مكة' },
    icon: '⛰️',
    desc: {
      en: 'Towing and recovery services in Taif and surrounding mountain areas including highway routes.',
      ar: 'خدمات السحب والإنقاذ في الطائف والمناطق الجبلية المحيطة بما في ذلك طرق الطريق السريع.',
    },
    highlights: {
      en: ['Hada & Shafa Road', 'Al Haad Road', 'Makkah Road', 'Al Sail Kabir'],
      ar: ['طريق الهدا والشفا', 'طريق الحد', 'طريق مكة', 'السيل الكبير'],
    },
  },
  {
    id: 'khobar',
    name: { en: 'Al-Khobar', ar: 'الخبر' },
    region: { en: 'Eastern Province', ar: 'المنطقة الشرقية' },
    icon: '🌴',
    desc: {
      en: 'Fast vehicle towing and roadside assistance throughout Al-Khobar and surrounding Eastern Province cities.',
      ar: 'سحب سريع للمركبات ومساعدة على الطريق في جميع أنحاء الخبر ومدن المنطقة الشرقية المحيطة.',
    },
    highlights: {
      en: ['Dhahran Road', 'King Abdulaziz Street', 'Coastal Road', 'Prince Sultan Road'],
      ar: ['طريق الظهران', 'شارع الملك عبدالعزيز', 'الطريق الساحلي', 'طريق الأمير سلطان'],
    },
  },
  {
    id: 'dhahran',
    name: { en: 'Dhahran', ar: 'الظهران' },
    region: { en: 'Eastern Province', ar: 'المنطقة الشرقية' },
    icon: '🏭',
    desc: {
      en: 'Reliable towing and vehicle recovery in Dhahran including industrial and residential areas.',
      ar: 'سحب وإنقاذ موثوق للمركبات في الظهران بما في ذلك المناطق الصناعية والسكنية.',
    },
    highlights: {
      en: ['KFUPM Road', 'Dhahran Main Road', 'Airport Road', 'Aramco Areas'],
      ar: ['طريق جامعة الملك فهد', 'الطريق الرئيسي بالظهران', 'طريق المطار', 'مناطق أرامكو'],
    },
  },
  {
    id: 'jubail',
    name: { en: 'Jubail', ar: 'الجبيل' },
    region: { en: 'Eastern Province', ar: 'المنطقة الشرقية' },
    icon: '🏗️',
    desc: {
      en: 'Towing and recovery service in Jubail Industrial City and residential areas.',
      ar: 'خدمة سحب وإنقاذ في مدينة الجبيل الصناعية والمناطق السكنية.',
    },
    highlights: {
      en: ['Industrial City', 'Jubail Residential', 'Highway 95', 'Coastal Road'],
      ar: ['المدينة الصناعية', 'الجبيل السكنية', 'طريق 95', 'الطريق الساحلي'],
    },
  },
  {
    id: 'tabuk',
    name: { en: 'Tabuk', ar: 'تبوك' },
    region: { en: 'Tabuk Region', ar: 'منطقة تبوك' },
    icon: '🏔️',
    desc: {
      en: 'Emergency towing and long-distance transport services in Tabuk and northwestern Saudi Arabia.',
      ar: 'خدمات سحب طارئ ونقل بعيد المدى في تبوك وشمال غرب المملكة.',
    },
    highlights: {
      en: ['Tabuk–Haql Road', 'King Faisal Road', 'Airport Road', 'NEOM Route'],
      ar: ['طريق تبوك-حقل', 'طريق الملك فيصل', 'طريق المطار', 'طريق نيوم'],
    },
  },
  {
    id: 'qassim',
    name: { en: 'Qassim', ar: 'القصيم' },
    region: { en: 'Qassim Region', ar: 'منطقة القصيم' },
    icon: '🌾',
    desc: {
      en: 'Towing and recovery services throughout the Qassim region including Buraidah and Unaizah.',
      ar: 'خدمات السحب والإنقاذ في جميع أنحاء منطقة القصيم بما في ذلك بريدة وعنيزة.',
    },
    highlights: {
      en: ['Buraidah', 'Unaizah', 'Riyadh Road', 'Northern Ring Road'],
      ar: ['بريدة', 'عنيزة', 'طريق الرياض', 'الطريق الدائري الشمالي'],
    },
  },
  {
    id: 'sakaka',
    name: { en: 'Sakaka', ar: 'سكاكا' },
    region: { en: 'Al-Jouf Region', ar: 'منطقة الجوف' },
    icon: '🌵',
    desc: {
      en: 'Vehicle towing and emergency assistance in Sakaka and the Al-Jouf region.',
      ar: 'سحب المركبات والمساعدة الطارئة في سكاكا ومنطقة الجوف.',
    },
    highlights: {
      en: ['Al-Jouf Highway', 'Sakaka City', 'Northern Routes', 'Border Roads'],
      ar: ['طريق الجوف السريع', 'مدينة سكاكا', 'الطرق الشمالية', 'طرق الحدود'],
    },
  },
];

const highways = [
  { en: 'Riyadh–Jeddah Highway (Route 40)', ar: 'طريق الرياض-جدة السريع (الطريق 40)' },
  { en: 'Riyadh–Dammam Highway (Route 80)', ar: 'طريق الرياض-الدمام السريع (الطريق 80)' },
  { en: 'Jeddah–Madinah Highway', ar: 'طريق جدة-المدينة المنورة السريع' },
  { en: 'Makkah–Taif Road', ar: 'طريق مكة-الطائف' },
  { en: 'Dammam–Jubail Road', ar: 'طريق الدمام-الجبيل' },
  { en: 'Haramain Expressway', ar: 'طريق الحرمين السريع' },
  { en: 'Riyadh–Qassim Highway', ar: 'طريق الرياض-القصيم السريع' },
  { en: 'Northern Border Routes', ar: 'طرق الحدود الشمالية' },
];

export default function Coverage() {
  const { isRTL } = useLanguage();

  return (
    <div style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      {/* Page Hero */}
      <div className="page-hero pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="accent-line mb-5"></div>
          <h1 className="display-lg text-white mb-4">
            {isRTL ? 'مناطق التغطية' : 'Coverage Areas'}
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            {isRTL
              ? 'نخدم المدن الرئيسية والطرق السريعة في جميع أنحاء المملكة العربية السعودية'
              : 'Serving major cities, highways and routes across Saudi Arabia'}
          </p>
        </div>
      </div>

      {/* Cities Grid */}
      <section className="section-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="display-md text-white mb-4">
              {isRTL ? 'المدن التي نخدمها' : 'Cities We Serve'}
            </h2>
            <p className="text-gray-500 text-lg">
              {isRTL ? 'تغطية شاملة في جميع أنحاء المملكة' : 'Comprehensive coverage nationwide'}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cities.map((city) => (
              <AnimatedSection key={city.id}>
                <Link to={`/coverage/${city.id}`} className="block h-full">
                  <div className="glass-card rounded-2xl p-6 card-hover border border-white/8 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl">{city.icon}</span>
                      <div>
                        <h2 className="text-white font-bold text-xl">
                          {isRTL ? city.name.ar : city.name.en}
                        </h2>
                        <div className="text-gray-500 text-sm flex items-center gap-1">
                          <MapPin size={12} />
                          {isRTL ? city.region.ar : city.region.en}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                      {isRTL ? city.desc.ar : city.desc.en}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {(isRTL ? city.highlights.ar : city.highlights.en).slice(0, 3).map((h) => (
                        <span key={h} className="px-2 py-1 rounded-lg bg-white/5 border border-white/8 text-gray-400 text-xs">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Highways */}
      <section className="section-surface py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="mb-10">
            <h2 className="display-md text-white mb-4">
              {isRTL ? 'الطرق السريعة والمسارات الرئيسية' : 'Highways & Major Routes'}
            </h2>
            <p className="text-gray-500 mb-8">
              {isRTL
                ? 'نوفر خدمة سحب وإنقاذ على جميع الطرق السريعة الرئيسية'
                : 'We provide towing and recovery on all major Saudi highways'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highways.map((hw) => (
                <div key={hw.en} className="flex items-center gap-3 p-4 glass-card rounded-xl border border-white/8">
                  <div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0"></div>
                  <span className="text-gray-300 text-sm">{isRTL ? hw.ar : hw.en}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* National Coverage CTA */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="display-md text-white mb-4 font-black">
            {isRTL ? 'هل أنت خارج المدن المدرجة؟' : "Not in a Listed City?"}
          </h2>
          <p className="text-red-100 text-lg mb-8">
            {isRTL
              ? 'اتصل بنا. نوفر خدماتنا في مناطق واسعة جداً من المملكة وقد نصل إليك.'
              : "Call us. We cover vast areas of Saudi Arabia and may be able to reach you."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${PHONE}`} className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-red-600 rounded-xl font-black text-lg hover:bg-red-50 transition-colors">
              <Phone size={22} /> {isRTL ? 'اتصل الآن' : 'Call Now'}
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-8 py-4 bg-green-500 text-white rounded-xl font-black text-lg hover:bg-green-400 transition-colors">
              <MessageCircle size={22} /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
