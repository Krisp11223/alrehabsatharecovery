import { useState } from 'react';
import { Phone, MessageCircle, Clock, MapPin, Send, CheckCircle } from 'lucide-react';
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

export default function Contact() {
  const { isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: '', phone: '', pickup: '', destination: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message from form data
    const msg = `Hello Alrehabsatharecovery!%0AName: ${formData.name}%0APhone: ${formData.phone}%0APickup: ${formData.pickup}%0ADestination: ${formData.destination}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/966565746224?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      {/* Hero */}
      <div className="page-hero pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="accent-line mb-5"></div>
          <h1 className="display-lg text-white mb-4">
            {isRTL ? 'تواصل معنا' : 'Contact Us'}
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            {isRTL
              ? 'نحن متاحون على مدار الساعة لأي حالة طارئة أو استفسار'
              : 'We are available 24/7 for any emergency or inquiry'}
          </p>
        </div>
      </div>

      <section className="section-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-5">
              {/* Emergency */}
              <AnimatedSection>
                <div className="glass-card rounded-2xl p-6 border border-red-500/25">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-3xl">🚨</span>
                    <div>
                      <h3 className="text-white font-black text-lg">
                        {isRTL ? 'خدمة الطوارئ' : 'Emergency Service'}
                      </h3>
                      <p className="text-red-400 text-sm">{isRTL ? 'متاح 24/7' : 'Available 24/7'}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <a
                      href={`tel:${PHONE}`}
                      className="btn-primary flex items-center gap-3 px-5 py-3.5 rounded-xl font-bold w-full text-base"
                    >
                      <Phone size={20} />
                      <div className={isRTL ? 'text-right' : ''}>
                        <div>{isRTL ? 'اتصل الآن' : 'Call Now'}</div>
                        <div className="text-red-200 font-normal text-sm">{PHONE}</div>
                      </div>
                    </a>
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp flex items-center gap-3 px-5 py-3.5 rounded-xl font-bold w-full text-base"
                    >
                      <MessageCircle size={20} />
                      <div className={isRTL ? 'text-right' : ''}>
                        <div>WhatsApp</div>
                        <div className="text-green-200 font-normal text-sm">{PHONE}</div>
                      </div>
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              {/* Info Cards */}
              <AnimatedSection>
                <div className="glass-card rounded-2xl p-6 border border-white/8">
                  <h3 className="text-white font-bold mb-4">
                    {isRTL ? 'معلومات التواصل' : 'Contact Information'}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-red-500/15 border border-red-500/25 flex items-center justify-center flex-shrink-0">
                        <Phone size={16} className="text-red-400" />
                      </div>
                      <div>
                        <div className="text-gray-500 text-xs mb-0.5">{isRTL ? 'الهاتف' : 'Phone'}</div>
                        <a href={`tel:${PHONE}`} className="text-white font-semibold hover:text-red-400 transition-colors text-sm">
                          {PHONE}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-green-500/15 border border-green-500/25 flex items-center justify-center flex-shrink-0">
                        <MessageCircle size={16} className="text-green-400" />
                      </div>
                      <div>
                        <div className="text-gray-500 text-xs mb-0.5">WhatsApp</div>
                        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-green-400 transition-colors text-sm">
                          {PHONE}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white/8 border border-white/12 flex items-center justify-center flex-shrink-0">
                        <Clock size={16} className="text-gray-400" />
                      </div>
                      <div>
                        <div className="text-gray-500 text-xs mb-0.5">{isRTL ? 'ساعات العمل' : 'Hours'}</div>
                        <div className="text-white font-semibold text-sm">{isRTL ? 'متاح 24/7 — كل أيام الأسبوع' : '24/7 — Every Day of the Year'}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white/8 border border-white/12 flex items-center justify-center flex-shrink-0">
                        <MapPin size={16} className="text-gray-400" />
                      </div>
                      <div>
                        <div className="text-gray-500 text-xs mb-0.5">{isRTL ? 'منطقة الخدمة' : 'Service Area'}</div>
                        <div className="text-white font-semibold text-sm">{isRTL ? 'المملكة العربية السعودية' : 'Saudi Arabia — Nationwide'}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Quick links */}
              <AnimatedSection>
                <div className="glass-card rounded-2xl p-5 border border-white/8">
                  <p className="text-gray-500 text-sm mb-3">{isRTL ? 'روابط سريعة' : 'Quick Links'}</p>
                  <div className="flex flex-col gap-2">
                    {[
                      { href: '/emergency', label: { en: '🚨 Emergency Request Form', ar: '🚨 نموذج طلب طارئ' } },
                      { href: '/services', label: { en: '🔧 View All Services', ar: '🔧 عرض جميع الخدمات' } },
                      { href: '/coverage', label: { en: '🗺️ Coverage Areas', ar: '🗺️ مناطق التغطية' } },
                      { href: '/faq', label: { en: '❓ FAQ', ar: '❓ الأسئلة الشائعة' } },
                    ].map((link) => (
                      <a key={link.href} href={link.href} className="text-gray-400 hover:text-white text-sm py-1.5 transition-colors">
                        {isRTL ? link.label.ar : link.label.en}
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <div className="glass-card rounded-2xl p-8 border border-white/8">
                  <h2 className="text-white font-bold text-2xl mb-2">
                    {isRTL ? 'أرسل لنا رسالة' : 'Send Us a Message'}
                  </h2>
                  <p className="text-gray-500 text-sm mb-7">
                    {isRTL
                      ? 'سيتم توجيه رسالتك مباشرة إلى واتساب لأسرع استجابة ممكنة'
                      : 'Your message will be sent directly via WhatsApp for the fastest possible response'}
                  </p>

                  {submitted ? (
                    <div className="text-center py-12">
                      <CheckCircle size={56} className="text-green-400 mx-auto mb-4" />
                      <h3 className="text-white font-bold text-xl mb-2">
                        {isRTL ? 'تم الإرسال!' : 'Message Sent!'}
                      </h3>
                      <p className="text-gray-400 mb-6">
                        {isRTL ? 'تحقق من واتساب للتأكيد' : 'Check WhatsApp to confirm sending'}
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="btn-outline px-6 py-3 rounded-xl font-bold"
                      >
                        {isRTL ? 'إرسال رسالة أخرى' : 'Send Another Message'}
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="form-label">{isRTL ? 'الاسم *' : 'Your Name *'}</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder={isRTL ? 'اسمك الكامل' : 'Full name'}
                            className="form-input"
                          />
                        </div>
                        <div>
                          <label className="form-label">{isRTL ? 'رقم الهاتف *' : 'Phone Number *'}</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="+966XXXXXXXXX"
                            className="form-input"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="form-label">{isRTL ? 'موقع الاستلام' : 'Pickup Location'}</label>
                          <input
                            type="text"
                            name="pickup"
                            value={formData.pickup}
                            onChange={handleChange}
                            placeholder={isRTL ? 'موقعك الحالي' : 'Your current location'}
                            className="form-input"
                          />
                        </div>
                        <div>
                          <label className="form-label">{isRTL ? 'الوجهة' : 'Destination'}</label>
                          <input
                            type="text"
                            name="destination"
                            value={formData.destination}
                            onChange={handleChange}
                            placeholder={isRTL ? 'أين تريد السحب إليه؟' : 'Where to tow?'}
                            className="form-input"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="form-label">{isRTL ? 'الرسالة' : 'Message'}</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          placeholder={isRTL ? 'صف موقفك أو اطرح سؤالاً...' : 'Describe your situation or ask a question...'}
                          className="form-input resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn-whatsapp flex items-center justify-center gap-3 w-full py-4 rounded-xl text-lg font-bold"
                      >
                        <Send size={20} />
                        {isRTL ? 'إرسال عبر واتساب' : 'Send via WhatsApp'}
                      </button>
                      <p className="text-gray-600 text-xs text-center">
                        {isRTL
                          ? '* سيتم فتح واتساب تلقائياً مع رسالتك'
                          : '* WhatsApp will open automatically with your message'}
                      </p>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="section-surface py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="glass-card rounded-2xl p-8 border border-white/8 text-center">
            <div className="text-5xl mb-4">🗺️</div>
            <h3 className="text-white font-bold text-xl mb-3">
              {isRTL ? 'نغطي المملكة العربية السعودية بأكملها' : 'We Cover All of Saudi Arabia'}
            </h3>
            <p className="text-gray-500 mb-5">
              {isRTL
                ? 'من الرياض إلى جدة، ومن الدمام إلى تبوك — فريقنا جاهز في أي مكان'
                : 'From Riyadh to Jeddah, from Dammam to Tabuk — our team is ready anywhere'}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {['Riyadh', 'Jeddah', 'Dammam', 'Makkah'].map((city) => (
                <div key={city} className="px-3 py-2 rounded-lg bg-white/5 border border-white/8 text-gray-400 text-sm">
                  📍 {city}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
