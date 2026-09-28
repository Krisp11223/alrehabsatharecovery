export interface Service {
  id: string;
  icon: string;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  features: { en: string[]; ar: string[] };
  category: string;
}

export const services: Service[] = [
  {
    id: 'car-towing',
    icon: '🚗',
    title: { en: 'Car Towing', ar: 'سحب السيارات' },
    description: {
      en: 'Professional towing for all sedan and standard cars with careful handling and secure transport.',
      ar: 'سحب احترافي لجميع السيارات السيدان والمركبات القياسية مع معالجة حذرة ونقل آمن.',
    },
    features: {
      en: ['All sedan types', 'Safe securing', 'Fast dispatch'],
      ar: ['جميع أنواع السيدان', 'تثبيت آمن', 'إرسال سريع'],
    },
    category: 'towing',
  },
  {
    id: 'hydraulic-towing',
    icon: '🔧',
    title: { en: 'Hydraulic Towing', ar: 'سحب هيدروليكي' },
    description: {
      en: 'State-of-the-art hydraulic towing equipment for vehicles requiring specialized lifting and transport.',
      ar: 'معدات سحب هيدروليكية متطورة للمركبات التي تتطلب رفعاً ونقلاً متخصصاً.',
    },
    features: {
      en: ['Advanced hydraulic system', 'Damage-free loading', 'All terrain capable'],
      ar: ['نظام هيدروليكي متقدم', 'تحميل بدون ضرر', 'قادر على جميع التضاريس'],
    },
    category: 'towing',
  },
  {
    id: 'flatbed-towing',
    icon: '🚛',
    title: { en: 'Flatbed Towing', ar: 'سحب بالسطحة' },
    description: {
      en: 'Flatbed truck transport for luxury, sports and low-clearance vehicles requiring elevated platforms.',
      ar: 'نقل بشاحنة سطحة للسيارات الفاخرة والرياضية والمركبات ذات المسافة المنخفضة.',
    },
    features: {
      en: ['Luxury car safe', 'Drive-on loading', 'Long-distance capable'],
      ar: ['آمن للسيارات الفاخرة', 'تحميل بالقيادة', 'قادر على المسافات الطويلة'],
    },
    category: 'towing',
  },
  {
    id: 'emergency-towing',
    icon: '🚨',
    title: { en: 'Emergency Towing', ar: 'سحب طارئ' },
    description: {
      en: '24/7 emergency towing response. We dispatch immediately to your location anywhere in Saudi Arabia.',
      ar: 'استجابة سحب طارئ على مدار الساعة. نرسل فوراً إلى موقعك في أي مكان بالمملكة.',
    },
    features: {
      en: ['24/7 availability', 'Fast response time', 'GPS tracking'],
      ar: ['متاح 24/7', 'وقت استجابة سريع', 'تتبع GPS'],
    },
    category: 'emergency',
  },
  {
    id: 'accident-recovery',
    icon: '🛡️',
    title: { en: 'Accident Vehicle Recovery', ar: 'إنقاذ المركبات الحادثة' },
    description: {
      en: 'Specialized recovery for accident-damaged vehicles with careful extraction and safe transport.',
      ar: 'إنقاذ متخصص للمركبات المتضررة من الحوادث مع استخراج دقيق ونقل آمن.',
    },
    features: {
      en: ['Damage assessment', 'Safe extraction', 'Coordination with authorities'],
      ar: ['تقييم الأضرار', 'استخراج آمن', 'التنسيق مع الجهات المختصة'],
    },
    category: 'recovery',
  },
  {
    id: 'vehicle-recovery',
    icon: '⚙️',
    title: { en: 'Vehicle Recovery', ar: 'استرداد المركبات' },
    description: {
      en: 'Professional recovery services for stranded, stuck or disabled vehicles in any situation.',
      ar: 'خدمات استرداد احترافية للمركبات العالقة أو المعطلة في أي موقف.',
    },
    features: {
      en: ['Off-road recovery', 'Sand extraction', 'Ditch recovery'],
      ar: ['استرداد خارج الطريق', 'استخراج من الرمال', 'استرداد من الخندق'],
    },
    category: 'recovery',
  },
  {
    id: 'roadside-assistance',
    icon: '🔑',
    title: { en: 'Roadside Assistance', ar: 'مساعدة على الطريق' },
    description: {
      en: 'Comprehensive roadside assistance including diagnostics, minor repairs and emergency help.',
      ar: 'مساعدة شاملة على الطريق تشمل التشخيص والإصلاحات الطفيفة والمساعدة الطارئة.',
    },
    features: {
      en: ['Vehicle diagnostics', 'Minor repairs', 'Emergency assistance'],
      ar: ['تشخيص المركبة', 'إصلاحات طفيفة', 'مساعدة طارئة'],
    },
    category: 'roadside',
  },
  {
    id: 'battery-jumpstart',
    icon: '⚡',
    title: { en: 'Battery Jump Start', ar: 'تشغيل البطارية' },
    description: {
      en: 'Fast battery jump start service for dead batteries. We come to you wherever you are.',
      ar: 'خدمة سريعة لتشغيل البطاريات الميتة. نأتي إليك أينما كنت.',
    },
    features: {
      en: ['Fast arrival', 'All battery types', 'Battery check included'],
      ar: ['وصول سريع', 'جميع أنواع البطاريات', 'فحص البطارية مدرج'],
    },
    category: 'roadside',
  },
  {
    id: 'flat-tire',
    icon: '🔄',
    title: { en: 'Flat Tire Assistance', ar: 'مساعدة الإطار المثقوب' },
    description: {
      en: 'Quick flat tire change service. We carry spare tire tools and can help you get back on the road.',
      ar: 'خدمة تبديل الإطار المثقوب بسرعة. نحمل أدوات الإطار الاحتياطي لإعادتك إلى الطريق.',
    },
    features: {
      en: ['Quick tire change', 'Tire inflation', 'Spare tire fitting'],
      ar: ['تبديل إطار سريع', 'نفخ الإطار', 'تركيب الإطار الاحتياطي'],
    },
    category: 'roadside',
  },
  {
    id: 'fuel-delivery',
    icon: '⛽',
    title: { en: 'Fuel Delivery', ar: 'توصيل الوقود' },
    description: {
      en: 'Emergency fuel delivery service when you run out of gas on the road. Quick and reliable.',
      ar: 'خدمة توصيل وقود طارئة عند نفاد البنزين على الطريق. سريعة وموثوقة.',
    },
    features: {
      en: ['Petrol & diesel', 'Fast delivery', 'Any location'],
      ar: ['بنزين وديزل', 'توصيل سريع', 'أي موقع'],
    },
    category: 'roadside',
  },
  {
    id: 'luxury-transport',
    icon: '🏆',
    title: { en: 'Luxury Car Transportation', ar: 'نقل السيارات الفاخرة' },
    description: {
      en: 'Premium enclosed or flatbed transport for luxury vehicles. Extra care, specialized equipment.',
      ar: 'نقل فاخر مغلق أو بالسطحة للمركبات الفاخرة. عناية فائقة ومعدات متخصصة.',
    },
    features: {
      en: ['White-glove service', 'Enclosed options', 'GPS tracking'],
      ar: ['خدمة قفاز أبيض', 'خيارات مغلقة', 'تتبع GPS'],
    },
    category: 'specialized',
  },
  {
    id: 'sports-car-transport',
    icon: '🏎️',
    title: { en: 'Sports Car Transportation', ar: 'نقل السيارات الرياضية' },
    description: {
      en: 'Specialized transport for sports and high-performance vehicles using flatbed trucks.',
      ar: 'نقل متخصص للسيارات الرياضية وعالية الأداء باستخدام شاحنات السطحة.',
    },
    features: {
      en: ['Low clearance handling', 'Flatbed transport', 'No drive-on damage'],
      ar: ['معالجة منخفضة', 'نقل بالسطحة', 'بدون أضرار'],
    },
    category: 'specialized',
  },
  {
    id: 'suv-recovery',
    icon: '🚙',
    title: { en: 'SUV & 4x4 Recovery', ar: 'إنقاذ SUV و 4×4' },
    description: {
      en: 'Specialized recovery for SUVs, 4x4s and off-road vehicles stuck in sand, mud or difficult terrain.',
      ar: 'إنقاذ متخصص لـ SUV والسيارات الرباعية العالقة في الرمال أو الوحل أو التضاريس الصعبة.',
    },
    features: {
      en: ['Sand extraction', 'Off-road recovery', 'Heavy duty equipment'],
      ar: ['استخراج من الرمال', 'استرداد خارج الطريق', 'معدات ثقيلة'],
    },
    category: 'recovery',
  },
  {
    id: 'motorcycle-transport',
    icon: '🏍️',
    title: { en: 'Motorcycle Transportation', ar: 'نقل الدراجات النارية' },
    description: {
      en: 'Safe and secure motorcycle transport with specialized strapping and securing equipment.',
      ar: 'نقل آمن ومضمون للدراجات النارية مع معدات ربط وتثبيت متخصصة.',
    },
    features: {
      en: ['Specialized straps', 'Damage-free transport', 'All motorcycle types'],
      ar: ['أحزمة متخصصة', 'نقل بدون أضرار', 'جميع أنواع الدراجات'],
    },
    category: 'specialized',
  },
  {
    id: 'pickup-commercial',
    icon: '🚐',
    title: { en: 'Pickup & Commercial Towing', ar: 'سحب الشاحنات والتجارية' },
    description: {
      en: 'Towing service for pickup trucks, vans and light commercial vehicles across Saudi Arabia.',
      ar: 'خدمة سحب لشاحنات البيك أب والفانات والمركبات التجارية الخفيفة في المملكة.',
    },
    features: {
      en: ['Pickup trucks', 'Vans & minibuses', 'Light commercial'],
      ar: ['شاحنات البيك أب', 'الفانات والميكروباص', 'تجارية خفيفة'],
    },
    category: 'towing',
  },
  {
    id: 'long-distance',
    icon: '🗺️',
    title: { en: 'Long-Distance Transport', ar: 'نقل بعيد المدى' },
    description: {
      en: 'Reliable long-distance vehicle transportation between cities and regions across Saudi Arabia.',
      ar: 'نقل موثوق للمركبات على مسافات بعيدة بين المدن والمناطق في المملكة.',
    },
    features: {
      en: ['City to city', 'Secure transport', 'Full coverage KSA'],
      ar: ['من مدينة لمدينة', 'نقل آمن', 'تغطية كاملة للمملكة'],
    },
    category: 'transport',
  },
  {
    id: 'intercity-transport',
    icon: '🏙️',
    title: { en: 'Inter-City Transportation', ar: 'النقل بين المدن' },
    description: {
      en: 'Professional inter-city vehicle transportation with tracking and safe delivery guarantee.',
      ar: 'نقل احترافي للمركبات بين المدن مع التتبع وضمان التسليم الآمن.',
    },
    features: {
      en: ['Riyadh–Jeddah', 'All major cities', 'Safe delivery'],
      ar: ['الرياض–جدة', 'جميع المدن الكبرى', 'تسليم آمن'],
    },
    category: 'transport',
  },
  {
    id: 'enclosed-transport',
    icon: '📦',
    title: { en: 'Enclosed Vehicle Transport', ar: 'نقل مركبات مغلق' },
    description: {
      en: 'Fully enclosed vehicle transport for maximum protection against elements and road hazards.',
      ar: 'نقل مركبات مغلق بالكامل لأقصى قدر من الحماية من العوامل الجوية وأخطار الطريق.',
    },
    features: {
      en: ['Full protection', 'Climate controlled', 'Luxury vehicles'],
      ar: ['حماية كاملة', 'تحكم في المناخ', 'المركبات الفاخرة'],
    },
    category: 'specialized',
  },
  {
    id: 'heavy-equipment',
    icon: '🏗️',
    title: { en: 'Heavy Vehicle & Equipment', ar: 'نقل المركبات والمعدات الثقيلة' },
    description: {
      en: 'Transportation and recovery for heavy vehicles, machinery and construction equipment.',
      ar: 'نقل واسترداد للمركبات الثقيلة والآلات ومعدات البناء.',
    },
    features: {
      en: ['Heavy machinery', 'Construction equipment', 'Special permits'],
      ar: ['الآلات الثقيلة', 'معدات البناء', 'تصاريح خاصة'],
    },
    category: 'heavy',
  },
  {
    id: 'breakdown-assistance',
    icon: '🔩',
    title: { en: 'Breakdown Assistance', ar: 'مساعدة في الأعطال' },
    description: {
      en: 'Immediate breakdown assistance with mobile mechanics for minor repairs on the spot.',
      ar: 'مساعدة فورية في الأعطال مع ميكانيكيين متنقلين للإصلاحات الطفيفة في الموقع.',
    },
    features: {
      en: ['On-spot repairs', 'Mobile mechanic', 'Quick diagnosis'],
      ar: ['إصلاحات في الموقع', 'ميكانيكي متنقل', 'تشخيص سريع'],
    },
    category: 'roadside',
  },
];
