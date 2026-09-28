import { Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const PHONE = '+966565746224';
const WA_LINK = 'https://wa.me/966565746224?text=Hello%20Alrehabsatharecovery%2C%20I%20need%20towing%20assistance.%20My%20vehicle%20is%20currently%20located%20at%20______.';

export default function FloatingButtons() {
  const { t } = useLanguage();

  return (
    <>
      {/* Floating Action Buttons */}
      <div className="floating-buttons">
        {/* WhatsApp */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-pulse w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-2xl hover:bg-green-400 transition-colors"
          aria-label="WhatsApp"
          title={t('floating.whatsapp')}
        >
          <MessageCircle size={24} className="text-white" />
        </a>

        {/* Call */}
        <a
          href={`tel:${PHONE}`}
          className="pulse-ring w-14 h-14 rounded-full bg-red-500 flex items-center justify-center shadow-2xl hover:bg-red-400 transition-colors"
          aria-label="Call"
          title={t('floating.call')}
        >
          <Phone size={24} className="text-white" />
        </a>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="mobile-bottom-bar">
        <a
          href={`tel:${PHONE}`}
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-red-500 text-white font-bold text-base hover:bg-red-600 transition-colors"
        >
          <Phone size={20} />
          {t('mobile.call')}
        </a>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-green-500 text-white font-bold text-base hover:bg-green-600 transition-colors"
        >
          <MessageCircle size={20} />
          {t('mobile.whatsapp')}
        </a>
      </div>
    </>
  );
}
