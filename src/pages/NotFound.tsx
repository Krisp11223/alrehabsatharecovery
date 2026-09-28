import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Home } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const PHONE = '+966565746224';
const WA_LINK = 'https://wa.me/966565746224';

export default function NotFound() {
  const { isRTL } = useLanguage();
  return (
    <div style={{ direction: isRTL ? 'rtl' : 'ltr' }} className="min-h-screen section-dark flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="text-8xl mb-6">🚛</div>
        <h1 className="text-8xl font-black text-gradient mb-4">404</h1>
        <h2 className="text-white font-bold text-2xl mb-4">
          {isRTL ? 'الصفحة غير موجودة' : 'Page Not Found'}
        </h2>
        <p className="text-gray-500 text-lg mb-10">
          {isRTL
            ? 'يبدو أن الصفحة التي تبحث عنها غير موجودة. لا تقلق، نحن هنا لمساعدتك!'
            : "The page you're looking for doesn't exist. Don't worry, we're here to help!"}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold">
            <Home size={20} />
            {isRTL ? 'الصفحة الرئيسية' : 'Go Home'}
          </Link>
          <a href={`tel:${PHONE}`} className="btn-outline flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold">
            <Phone size={20} />
            {isRTL ? 'اتصل بنا' : 'Call Us'}
          </a>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold">
            <MessageCircle size={20} />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
