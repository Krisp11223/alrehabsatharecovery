import { useState, useEffect } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const PHONE = '+966565746224';
const WA_LINK = 'https://wa.me/966565746224?text=Hello%20Alrehabsatharecovery%2C%20I%20need%20towing%20assistance.%20My%20vehicle%20is%20currently%20located%20at%20______.';

export default function StickyEmergencyBar() {
  const { isRTL } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!dismissed) {
        setVisible(window.scrollY > 500);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  if (dismissed || !visible) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[9999] bg-gradient-to-r from-red-700 via-red-600 to-red-700 shadow-2xl"
      style={{ direction: isRTL ? 'rtl' : 'ltr' }}
    >
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <span className="text-xl flex-shrink-0">🚨</span>
          <span className="text-white text-sm font-bold truncate">
            {isRTL
              ? 'مساعدة طارئة على مدار الساعة — اتصل بنا الآن'
              : '24/7 Emergency Towing — Call or WhatsApp Now'}
          </span>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <a
            href={`tel:${PHONE}`}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-red-600 rounded-lg text-xs font-black hover:bg-red-50 transition-colors"
          >
            <Phone size={13} />
            {isRTL ? 'اتصل' : 'Call'}
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-green-500 text-white rounded-lg text-xs font-black hover:bg-green-400 transition-colors"
          >
            <MessageCircle size={13} />
            WA
          </a>
          <button
            onClick={() => { setDismissed(true); setVisible(false); }}
            className="p-1.5 text-red-200 hover:text-white transition-colors"
          >
            <X size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
