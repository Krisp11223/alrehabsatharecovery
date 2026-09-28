import { useState } from 'react';
import { Phone, MessageCircle, AlertTriangle, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const PHONE = '+966565746224';
const WA_LINK = 'https://wa.me/966565746224?text=Hello%20Alrehabsatharecovery%2C%20I%20need%20towing%20assistance.%20My%20vehicle%20is%20currently%20located%20at%20______.';

const vehicleTypes = [
  { en: 'Sedan', ar: 'سيدان' },
  { en: 'SUV', ar: 'SUV' },
  { en: '4x4', ar: '4×4' },
  { en: 'Pickup', ar: 'بيك أب' },
  { en: 'Luxury Car', ar: 'سيارة فاخرة' },
  { en: 'Sports Car', ar: 'سيارة رياضية' },
  { en: 'Motorcycle', ar: 'دراجة نارية' },
  { en: 'Van', ar: 'فان' },
  { en: 'Truck', ar: 'شاحنة' },
  { en: 'Other', ar: 'أخرى' },
];

const serviceTypes = [
  { en: 'Emergency Towing', ar: 'سحب طارئ' },
  { en: 'Hydraulic Towing', ar: 'سحب هيدروليكي' },
  { en: 'Flatbed Towing', ar: 'سحب بالسطحة' },
  { en: 'Accident Recovery', ar: 'إنقاذ من الحادث' },
  { en: 'Vehicle Recovery (Stuck)', ar: 'إنقاذ مركبة عالقة' },
  { en: 'Battery Jump Start', ar: 'تشغيل البطارية' },
  { en: 'Flat Tire Assistance', ar: 'مساعدة إطار مثقوب' },
  { en: 'Fuel Delivery', ar: 'توصيل الوقود' },
  { en: 'Long-Distance Transport', ar: 'نقل بعيد المدى' },
  { en: 'Other', ar: 'أخرى' },
];

export default function Emergency() {
  const { isRTL } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', phone: '', whatsapp: '', vehicleType: '', vehicleModel: '',
    service: '', pickup: '', destination: '', problem: '', message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `🚨 EMERGENCY REQUEST 🚨%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AWhatsApp: ${form.whatsapp}%0A%0AVehicle Type: ${form.vehicleType}%0AVehicle Model: ${form.vehicleModel}%0AService Needed: ${form.service}%0A%0APickup Location: ${form.pickup}%0ADestination: ${form.destination}%0A%0AProblem: ${form.problem}%0AAdditional: ${form.message}`;
    window.open(`https://wa.me/966565746224?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen section-dark flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-md">
          <CheckCircle size={80} className="text-green-400 mx-auto mb-6" />
          <h1 className="text-white font-black text-3xl mb-4">
            {isRTL ? 'تم إرسال الطلب!' : 'Request Sent!'}
          </h1>
          <p className="text-gray-400 mb-8">
            {isRTL
              ? 'تم فتح واتساب برسالتك. سيستجيب فريقنا فوراً. إذا لم يتم فتح واتساب، اتصل بنا مباشرة.'
              : 'WhatsApp opened with your request. Our team will respond immediately. If WhatsApp did not open, call us directly.'}
          </p>
          <div className="flex flex-col gap-3">
            <a href={`tel:${PHONE}`} className="btn-primary flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-bold text-lg">
              <Phone size={22} /> {isRTL ? 'اتصل الآن' : 'Call Now'} — {PHONE}
            </a>
            <button onClick={() => setSubmitted(false)} className="btn-outline px-6 py-3 rounded-xl font-semibold">
              {isRTL ? 'إرسال طلب آخر' : 'Send Another Request'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      {/* Emergency Header */}
      <div className="pt-20 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Instant Help Banner */}
          <div className="mt-6 rounded-2xl bg-red-500/10 border border-red-500/30 p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div className="flex items-start gap-4">
              <AlertTriangle size={32} className="text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-white font-black text-xl mb-1">
                  {isRTL ? 'هل أنت في حالة طارئة الآن؟' : 'Are You in an Emergency Right Now?'}
                </h2>
                <p className="text-gray-400 text-sm">
                  {isRTL
                    ? 'لا تملأ النموذج — اتصل بنا الآن مباشرة للحصول على أسرع استجابة'
                    : "Don't fill the form — call us directly now for the fastest response"}
                </p>
              </div>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <a href={`tel:${PHONE}`} className="btn-primary flex items-center gap-2 px-5 py-3 rounded-xl font-black text-base">
                <Phone size={20} /> {isRTL ? 'اتصل الآن' : 'Call Now'}
              </a>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp flex items-center gap-2 px-5 py-3 rounded-xl font-black text-base">
                <MessageCircle size={20} /> WA
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="section-dark py-10 md:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <div className="text-5xl mb-4">🚨</div>
            <h1 className="display-md text-white mb-4">
              {isRTL ? 'نموذج طلب المساعدة الطارئة' : 'Emergency Assistance Request Form'}
            </h1>
            <p className="text-gray-500">
              {isRTL
                ? 'يُفضل الاتصال المباشر أو واتساب. هذا النموذج يرسل تفاصيلك مباشرة عبر واتساب.'
                : 'Direct call or WhatsApp preferred. This form sends your details directly via WhatsApp.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 md:p-8 border border-white/8 space-y-5">
            {/* Personal Info */}
            <div>
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-bold">1</span>
                {isRTL ? 'معلوماتك الشخصية' : 'Your Information'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">{isRTL ? 'الاسم *' : 'Name *'}</label>
                  <input type="text" name="name" required value={form.name} onChange={handleChange}
                    placeholder={isRTL ? 'اسمك الكامل' : 'Full name'} className="form-input" />
                </div>
                <div>
                  <label className="form-label">{isRTL ? 'رقم الهاتف *' : 'Phone *'}</label>
                  <input type="tel" name="phone" required value={form.phone} onChange={handleChange}
                    placeholder="+966XXXXXXXXX" className="form-input" />
                </div>
                <div className="sm:col-span-2">
                  <label className="form-label">{isRTL ? 'رقم واتساب' : 'WhatsApp Number'}</label>
                  <input type="tel" name="whatsapp" value={form.whatsapp} onChange={handleChange}
                    placeholder={isRTL ? 'إذا كان مختلفاً عن الهاتف' : 'If different from phone'} className="form-input" />
                </div>
              </div>
            </div>

            <div className="divider"></div>

            {/* Vehicle Info */}
            <div>
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-bold">2</span>
                {isRTL ? 'معلومات المركبة' : 'Vehicle Information'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">{isRTL ? 'نوع المركبة *' : 'Vehicle Type *'}</label>
                  <select name="vehicleType" required value={form.vehicleType} onChange={handleChange} className="form-input">
                    <option value="">{isRTL ? 'اختر النوع' : 'Select type'}</option>
                    {vehicleTypes.map(v => (
                      <option key={v.en} value={v.en}>{isRTL ? v.ar : v.en}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="form-label">{isRTL ? 'موديل المركبة' : 'Vehicle Model'}</label>
                  <input type="text" name="vehicleModel" value={form.vehicleModel} onChange={handleChange}
                    placeholder={isRTL ? 'مثال: تويوتا كامري 2022' : 'e.g. Toyota Camry 2022'} className="form-input" />
                </div>
                <div className="sm:col-span-2">
                  <label className="form-label">{isRTL ? 'الخدمة المطلوبة *' : 'Required Service *'}</label>
                  <select name="service" required value={form.service} onChange={handleChange} className="form-input">
                    <option value="">{isRTL ? 'اختر الخدمة' : 'Select service'}</option>
                    {serviceTypes.map(s => (
                      <option key={s.en} value={s.en}>{isRTL ? s.ar : s.en}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="divider"></div>

            {/* Location */}
            <div>
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-bold">3</span>
                {isRTL ? 'الموقع والوجهة' : 'Location & Destination'}
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="form-label">{isRTL ? 'موقع الاستلام *' : 'Pickup Location *'}</label>
                  <input type="text" name="pickup" required value={form.pickup} onChange={handleChange}
                    placeholder={isRTL ? 'الحي، الشارع أو أرسل رابط خرائط Google' : 'Neighborhood, street or send Google Maps link'} className="form-input" />
                </div>
                <div>
                  <label className="form-label">{isRTL ? 'الوجهة' : 'Destination'}</label>
                  <input type="text" name="destination" value={form.destination} onChange={handleChange}
                    placeholder={isRTL ? 'أين تريد الذهاب؟ (ورشة، منزل، إلخ)' : 'Where to go? (workshop, home, etc.)'} className="form-input" />
                </div>
              </div>
            </div>

            <div className="divider"></div>

            {/* Problem */}
            <div>
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-bold">4</span>
                {isRTL ? 'وصف المشكلة' : 'Problem Description'}
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="form-label">{isRTL ? 'المشكلة / العطل *' : 'Problem / Issue *'}</label>
                  <input type="text" name="problem" required value={form.problem} onChange={handleChange}
                    placeholder={isRTL ? 'مثال: تعطل المحرك، حادث، إطار مثقوب...' : 'e.g. engine failure, accident, flat tire...'} className="form-input" />
                </div>
                <div>
                  <label className="form-label">{isRTL ? 'رسالة إضافية' : 'Additional Message'}</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={3}
                    placeholder={isRTL ? 'أي تفاصيل إضافية تساعدنا على تقديم أفضل خدمة...' : 'Any additional details that help us serve you better...'}
                    className="form-input resize-none" />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full btn-primary py-5 rounded-xl text-xl font-black flex items-center justify-center gap-3"
            >
              <span>🚨</span>
              {isRTL ? 'إرسال طلب المساعدة الطارئة' : 'Request Emergency Assistance'}
            </button>

            <p className="text-gray-600 text-xs text-center">
              {isRTL
                ? 'للحصول على أسرع استجابة: اتصل مباشرة على +966565746224'
                : 'For fastest response: Call directly at +966565746224'}
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
