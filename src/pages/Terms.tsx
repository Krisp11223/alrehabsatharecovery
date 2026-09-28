import { useLanguage } from '../contexts/LanguageContext';

export default function Terms() {
  const { isRTL } = useLanguage();
  return (
    <div style={{ direction: isRTL ? 'rtl' : 'ltr' }} className="section-dark min-h-screen">
      <div className="page-hero pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="display-md text-white mb-4">{isRTL ? 'الشروط والأحكام' : 'Terms & Conditions'}</h1>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="glass-card rounded-2xl p-8 border border-white/8">
          <div className="space-y-6 text-gray-400 leading-relaxed">
            <p className="text-gray-300">
              {isRTL
                ? 'باستخدام خدمات الرحاب سطحة ريكفري، فإنك توافق على الشروط والأحكام التالية.'
                : 'By using Alrehabsatharecovery services, you agree to the following terms and conditions.'}
            </p>
            <h2 className="text-white font-bold text-xl">{isRTL ? 'الخدمات' : 'Services'}</h2>
            <p>{isRTL
              ? 'نقدم خدمات سحب وإنقاذ المركبات والمساعدة على الطريق. تُقدَّم الأسعار قبل تأكيد الخدمة.'
              : 'We provide vehicle towing, recovery and roadside assistance services. Pricing is provided before service confirmation.'}</p>
            <h2 className="text-white font-bold text-xl">{isRTL ? 'مسؤولية العميل' : 'Customer Responsibility'}</h2>
            <p>{isRTL
              ? 'يتحمل العميل مسؤولية تقديم معلومات دقيقة عن الموقع والمركبة. يجب أن يكون العميل أو ممثله حاضراً عند تقديم الخدمة.'
              : 'The customer is responsible for providing accurate location and vehicle information. The customer or their representative must be present at service delivery.'}</p>
            <h2 className="text-white font-bold text-xl">{isRTL ? 'الدفع' : 'Payment'}</h2>
            <p>{isRTL
              ? 'يتم الاتفاق على التسعير مسبقاً. نقبل الدفع عند التسليم.'
              : 'Pricing is agreed upon in advance. We accept payment upon delivery.'}</p>
            <h2 className="text-white font-bold text-xl">{isRTL ? 'تواصل معنا' : 'Contact'}</h2>
            <p>{isRTL ? 'للاستفسار: +966565746224' : 'For inquiries: +966565746224'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
