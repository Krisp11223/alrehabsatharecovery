import { useLanguage } from '../contexts/LanguageContext';

export default function Privacy() {
  const { isRTL } = useLanguage();
  return (
    <div style={{ direction: isRTL ? 'rtl' : 'ltr' }} className="section-dark min-h-screen">
      <div className="page-hero pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="display-md text-white mb-4">{isRTL ? 'سياسة الخصوصية' : 'Privacy Policy'}</h1>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="glass-card rounded-2xl p-8 border border-white/8 prose prose-invert max-w-none">
          <div className="space-y-6 text-gray-400 leading-relaxed">
            <p className="text-gray-300">
              {isRTL
                ? 'تحترم الرحاب سطحة ريكفري خصوصيتك وتلتزم بحماية معلوماتك الشخصية.'
                : 'Alrehabsatharecovery respects your privacy and is committed to protecting your personal information.'}
            </p>
            <h2 className="text-white font-bold text-xl">{isRTL ? 'المعلومات التي نجمعها' : 'Information We Collect'}</h2>
            <p>{isRTL
              ? 'نجمع المعلومات التي تقدمها لنا طوعاً عند التواصل معنا، مثل الاسم ورقم الهاتف وتفاصيل الخدمة المطلوبة.'
              : 'We collect information you voluntarily provide when contacting us, such as name, phone number and service details.'}</p>
            <h2 className="text-white font-bold text-xl">{isRTL ? 'استخدام المعلومات' : 'How We Use Information'}</h2>
            <p>{isRTL
              ? 'نستخدم معلوماتك فقط لتقديم الخدمة المطلوبة والتواصل معك بشأنها. لا نبيع أو نشارك معلوماتك مع أطراف ثالثة.'
              : 'We use your information only to provide the requested service and communicate with you about it. We do not sell or share your information with third parties.'}</p>
            <h2 className="text-white font-bold text-xl">{isRTL ? 'التواصل معنا' : 'Contact Us'}</h2>
            <p>{isRTL
              ? 'للاستفسار عن سياسة الخصوصية، تواصل معنا على +966565746224.'
              : 'For privacy inquiries, contact us at +966565746224.'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
