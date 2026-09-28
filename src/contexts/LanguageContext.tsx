import React, { createContext, useContext, useState, useCallback } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
  isRTL: boolean;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.coverage': 'Coverage Areas',
    'nav.about': 'About Us',
    'nav.reviews': 'Reviews',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.emergency': 'Emergency',
    'nav.callNow': 'Call Now',
    'nav.whatsapp': 'WhatsApp',

    // Hero
    'hero.badge': '24/7 Emergency Service',
    'hero.title1': '24/7 Towing &',
    'hero.title2': 'Vehicle Recovery',
    'hero.title3': 'in Saudi Arabia',
    'hero.subtitle': 'Fast, professional and reliable towing, recovery and vehicle transportation whenever you need assistance.',
    'hero.callNow': '📞 Call Now',
    'hero.whatsappNow': '💬 WhatsApp Now',
    'hero.trust1': '24/7 Available',
    'hero.trust2': 'Fast Response',
    'hero.trust3': 'Safe Handling',
    'hero.trust4': 'All Vehicle Types',
    'hero.trust5': 'Long-Distance',

    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive towing and vehicle recovery solutions for every situation',
    'services.learnMore': 'Learn More',
    'services.whatsapp': 'WhatsApp',
    'services.callNow': 'Call Now',

    // Why Choose Us
    'why.title': 'Why Choose Alrehabsatharecovery',
    'why.subtitle': 'Trusted by thousands of vehicle owners across Saudi Arabia',

    // Vehicles
    'vehicles.title': 'Vehicles We Handle',
    'vehicles.subtitle': 'Professional handling for all vehicle types',

    // How It Works
    'how.title': 'How It Works',
    'how.subtitle': 'Getting help is simple and fast',

    // Coverage
    'coverage.title': 'Coverage Areas',
    'coverage.subtitle': 'Serving major cities and highways across Saudi Arabia',

    // Reviews
    'reviews.title': 'Customer Reviews',
    'reviews.subtitle': 'What our customers say about us',
    'reviews.demo': 'Sample Review',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Everything you need to know about our services',

    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We are available 24/7 for any emergency',
    'contact.phone': 'Phone',
    'contact.whatsapp': 'WhatsApp',
    'contact.hours': 'Available 24/7',
    'contact.name': 'Your Name',
    'contact.phoneField': 'Phone Number',
    'contact.message': 'Message',
    'contact.send': 'Send Message',

    // Emergency Form
    'emergency.title': 'Emergency Request',
    'emergency.subtitle': 'Request immediate towing or recovery assistance',
    'emergency.name': 'Customer Name',
    'emergency.phone': 'Phone Number',
    'emergency.whatsapp': 'WhatsApp Number',
    'emergency.vehicleType': 'Vehicle Type',
    'emergency.vehicleModel': 'Vehicle Model',
    'emergency.service': 'Required Service',
    'emergency.pickup': 'Pickup Location',
    'emergency.destination': 'Destination',
    'emergency.problem': 'Problem / Issue',
    'emergency.message': 'Additional Message',
    'emergency.submit': '🚨 Request Emergency Assistance',

    // Footer
    'footer.rights': '© 2024 Alrehabsatharecovery. All rights reserved.',
    'footer.services': 'Services',
    'footer.coverage': 'Coverage',
    'footer.company': 'Company',
    'footer.contact': 'Contact',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms & Conditions',
    'footer.emergency': '24/7 Emergency Service',

    // About
    'about.title': 'About Us',
    'about.subtitle': 'Your trusted towing and recovery partner',

    // Floating
    'floating.call': 'Call Now',
    'floating.whatsapp': 'WhatsApp',

    // Mobile bottom bar
    'mobile.call': 'Call Now',
    'mobile.whatsapp': 'WhatsApp',

    // Sticky bar
    'sticky.text': '🚨 Emergency? Call us now:',
    'sticky.or': 'or',

    // Gallery
    'gallery.title': 'Our Work',
    'gallery.subtitle': 'Professional towing and recovery operations',

    // General
    'general.readMore': 'Read More',
    'general.viewAll': 'View All Services',
    'general.getHelp': 'Get Help Now',
    'general.emergency': 'Emergency',
    'general.available': 'Available Now',
  },
  ar: {
    // Nav
    'nav.home': 'الرئيسية',
    'nav.services': 'خدماتنا',
    'nav.coverage': 'مناطق التغطية',
    'nav.about': 'من نحن',
    'nav.reviews': 'التقييمات',
    'nav.faq': 'الأسئلة الشائعة',
    'nav.contact': 'اتصل بنا',
    'nav.emergency': 'طوارئ',
    'nav.callNow': 'اتصل الآن',
    'nav.whatsapp': 'واتساب',

    // Hero
    'hero.badge': 'خدمة طوارئ على مدار الساعة',
    'hero.title1': 'سحب وإنقاذ',
    'hero.title2': 'المركبات',
    'hero.title3': 'في المملكة العربية السعودية',
    'hero.subtitle': 'خدمات سحب المركبات والإنقاذ والنقل الاحترافية بسرعة وموثوقية عالية في أي وقت تحتاج إليها.',
    'hero.callNow': '📞 اتصل الآن',
    'hero.whatsappNow': '💬 واتساب الآن',
    'hero.trust1': 'متاح 24/7',
    'hero.trust2': 'استجابة سريعة',
    'hero.trust3': 'معالجة آمنة',
    'hero.trust4': 'جميع أنواع المركبات',
    'hero.trust5': 'نقل بعيد المدى',

    // Services
    'services.title': 'خدماتنا',
    'services.subtitle': 'حلول شاملة لسحب المركبات وإنقاذها في جميع المواقف',
    'services.learnMore': 'اعرف المزيد',
    'services.whatsapp': 'واتساب',
    'services.callNow': 'اتصل الآن',

    // Why Choose Us
    'why.title': 'لماذا تختار الرحاب سطحة ريكفري',
    'why.subtitle': 'موثوق من آلاف أصحاب المركبات في المملكة العربية السعودية',

    // Vehicles
    'vehicles.title': 'المركبات التي نتعامل معها',
    'vehicles.subtitle': 'معالجة احترافية لجميع أنواع المركبات',

    // How It Works
    'how.title': 'كيف نعمل',
    'how.subtitle': 'الحصول على المساعدة أمر بسيط وسريع',

    // Coverage
    'coverage.title': 'مناطق التغطية',
    'coverage.subtitle': 'نخدم المدن الرئيسية والطرق السريعة في المملكة العربية السعودية',

    // Reviews
    'reviews.title': 'تقييمات العملاء',
    'reviews.subtitle': 'ما يقوله عملاؤنا عنا',
    'reviews.demo': 'تقييم نموذجي',

    // FAQ
    'faq.title': 'الأسئلة الشائعة',
    'faq.subtitle': 'كل ما تحتاج معرفته عن خدماتنا',

    // Contact
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'نحن متاحون على مدار الساعة لأي حالة طارئة',
    'contact.phone': 'الهاتف',
    'contact.whatsapp': 'واتساب',
    'contact.hours': 'متاح 24/7',
    'contact.name': 'اسمك',
    'contact.phoneField': 'رقم الهاتف',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال الرسالة',

    // Emergency Form
    'emergency.title': 'طلب طارئ',
    'emergency.subtitle': 'اطلب مساعدة فورية للسحب أو الإنقاذ',
    'emergency.name': 'اسم العميل',
    'emergency.phone': 'رقم الهاتف',
    'emergency.whatsapp': 'رقم واتساب',
    'emergency.vehicleType': 'نوع المركبة',
    'emergency.vehicleModel': 'موديل المركبة',
    'emergency.service': 'الخدمة المطلوبة',
    'emergency.pickup': 'موقع الاستلام',
    'emergency.destination': 'الوجهة',
    'emergency.problem': 'المشكلة / العطل',
    'emergency.message': 'رسالة إضافية',
    'emergency.submit': '🚨 طلب مساعدة طارئة',

    // Footer
    'footer.rights': '© 2024 الرحاب سطحة ريكفري. جميع الحقوق محفوظة.',
    'footer.services': 'الخدمات',
    'footer.coverage': 'التغطية',
    'footer.company': 'الشركة',
    'footer.contact': 'التواصل',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'الشروط والأحكام',
    'footer.emergency': 'خدمة طوارئ 24/7',

    // About
    'about.title': 'من نحن',
    'about.subtitle': 'شريكك الموثوق في سحب وإنقاذ المركبات',

    // Floating
    'floating.call': 'اتصل الآن',
    'floating.whatsapp': 'واتساب',

    // Mobile bottom bar
    'mobile.call': 'اتصل الآن',
    'mobile.whatsapp': 'واتساب',

    // Sticky bar
    'sticky.text': '🚨 هل أنت في حالة طارئة؟ اتصل بنا الآن:',
    'sticky.or': 'أو',

    // Gallery
    'gallery.title': 'أعمالنا',
    'gallery.subtitle': 'عمليات السحب والإنقاذ الاحترافية',

    // General
    'general.readMore': 'اقرأ المزيد',
    'general.viewAll': 'عرض جميع الخدمات',
    'general.getHelp': 'احصل على مساعدة الآن',
    'general.emergency': 'طارئ',
    'general.available': 'متاح الآن',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('en');

  const toggleLanguage = useCallback(() => {
    setLang(prev => {
      const next = prev === 'en' ? 'ar' : 'en';
      if (next === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
        document.body.classList.add('rtl');
      } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', 'en');
        document.body.classList.remove('rtl');
      }
      return next;
    });
  }, []);

  const t = useCallback((key: string) => {
    return translations[lang][key] || key;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, isRTL: lang === 'ar', t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
