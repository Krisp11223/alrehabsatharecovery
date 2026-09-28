import { useState } from 'react';
import { Star, MessageCircle, Phone, Info } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { reviews } from '../data/reviews';
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

function StarRating({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}
        />
      ))}
    </div>
  );
}

const serviceFilters = [
  { id: 'all', en: 'All Reviews', ar: 'جميع التقييمات' },
  { id: 'emergency', en: 'Emergency Towing', ar: 'سحب طارئ' },
  { id: 'hydraulic', en: 'Hydraulic Towing', ar: 'سحب هيدروليكي' },
  { id: 'accident', en: 'Accident Recovery', ar: 'إنقاذ من الحوادث' },
  { id: 'luxury', en: 'Luxury Car', ar: 'سيارات فاخرة' },
  { id: 'motorcycle', en: 'Motorcycle', ar: 'دراجات نارية' },
  { id: 'long', en: 'Long Distance', ar: 'بعيد المدى' },
];

export default function Reviews() {
  const { isRTL } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState<'latest' | 'rating'>('latest');

  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);
  const ratingCounts = [5, 4, 3, 2, 1].map(n => ({
    stars: n,
    count: reviews.filter(r => r.rating === n).length,
    pct: Math.round((reviews.filter(r => r.rating === n).length / reviews.length) * 100),
  }));

  const filteredReviews = reviews
    .filter(r => {
      if (filter === 'all') return true;
      const serviceText = (r.service.en + r.service.ar).toLowerCase();
      if (filter === 'emergency') return serviceText.includes('emergency') || serviceText.includes('طارئ');
      if (filter === 'hydraulic') return serviceText.includes('hydraulic') || serviceText.includes('هيدروليك');
      if (filter === 'accident') return serviceText.includes('accident') || serviceText.includes('حادث');
      if (filter === 'luxury') return serviceText.includes('luxury') || serviceText.includes('فاخر');
      if (filter === 'motorcycle') return serviceText.includes('motorcycle') || serviceText.includes('دراج');
      if (filter === 'long') return serviceText.includes('long') || serviceText.includes('بعيد');
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return (
    <div style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      {/* Hero */}
      <div className="page-hero pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="accent-line mb-5"></div>
          <h1 className="display-lg text-white mb-4">
            {isRTL ? 'تقييمات وآراء العملاء' : 'Customer Reviews & Feedback'}
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            {isRTL
              ? 'آراء العملاء من تجاربهم الحقيقية مع خدماتنا'
              : 'Customer feedback from real experiences with our services'}
          </p>
        </div>
      </div>

      {/* Demo Notice */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-6">
        <div className="flex items-start gap-3 p-4 rounded-xl bg-yellow-500/8 border border-yellow-500/25">
          <Info size={18} className="text-yellow-400 flex-shrink-0 mt-0.5" />
          <p className="text-yellow-300/80 text-sm">
            {isRTL
              ? 'ملاحظة: التقييمات المعروضة حالياً هي تقييمات نموذجية لأغراض تصميم الموقع. ستُستبدل بتقييمات العملاء الحقيقية عند توفرها. كل تقييم مُعلَّم بـ "نموذجي".'
              : 'Note: Reviews currently displayed are sample/demo reviews for website design purposes. They will be replaced with genuine customer reviews when available. Each sample review is marked with a "Sample" badge.'}
          </p>
        </div>
      </div>

      {/* Stats */}
      <section className="section-dark py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Overall Rating */}
              <div className="glass-card rounded-2xl p-8 border border-white/8 text-center">
                <div className="text-7xl font-black text-white mb-2">{avgRating}</div>
                <StarRating rating={Math.round(parseFloat(avgRating))} size={24} />
                <div className="text-gray-500 text-sm mt-2">
                  {reviews.length} {isRTL ? 'تقييم' : 'reviews'}
                </div>
              </div>

              {/* Rating Breakdown */}
              <div className="glass-card rounded-2xl p-8 border border-white/8 md:col-span-2">
                <h3 className="text-white font-bold mb-5">
                  {isRTL ? 'توزيع التقييمات' : 'Rating Distribution'}
                </h3>
                <div className="space-y-3">
                  {ratingCounts.map(({ stars, count, pct }) => (
                    <div key={stars} className="flex items-center gap-3">
                      <div className="flex items-center gap-1 w-24 flex-shrink-0">
                        <span className="text-gray-300 text-sm font-medium">{stars}</span>
                        <Star size={14} className="fill-yellow-400 text-yellow-400" />
                      </div>
                      <div className="flex-1 h-2 rounded-full bg-white/8 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500"
                          style={{ width: `${pct}%` }}
                        ></div>
                      </div>
                      <span className="text-gray-500 text-sm w-8 text-right">{count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters */}
      <div className="section-surface py-5 border-b border-white/6 sticky top-16 md:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex flex-wrap gap-2 flex-1">
              {serviceFilters.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    filter === f.id
                      ? 'bg-red-500 text-white'
                      : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  {isRTL ? f.ar : f.en}
                </button>
              ))}
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'latest' | 'rating')}
              className="form-input py-2 px-3 text-sm w-auto bg-white/5 border border-white/10 rounded-lg text-gray-300"
            >
              <option value="latest">{isRTL ? 'الأحدث' : 'Latest'}</option>
              <option value="rating">{isRTL ? 'الأعلى تقييماً' : 'Highest Rated'}</option>
            </select>
          </div>
        </div>
      </div>

      {/* Reviews Grid */}
      <section className="section-dark py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredReviews.map((review) => (
              <AnimatedSection key={review.id}>
                <div className="glass-card rounded-2xl p-6 card-hover border border-white/8 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-red-500/30 to-red-700/20 border border-red-500/30 flex items-center justify-center text-red-300 font-bold text-sm flex-shrink-0">
                        {review.initials}
                      </div>
                      <div>
                        <div className="text-white font-bold text-sm">
                          {isRTL ? review.nameAr : review.name}
                        </div>
                        <div className="text-gray-600 text-xs mt-0.5">
                          {isRTL ? review.service.ar : review.service.en}
                        </div>
                      </div>
                    </div>
                    {review.isDemo && (
                      <span className="text-xs text-yellow-600 border border-yellow-600/30 bg-yellow-500/8 px-2 py-1 rounded-full flex-shrink-0">
                        {isRTL ? 'نموذجي' : 'Sample'}
                      </span>
                    )}
                  </div>

                  {/* Stars */}
                  <StarRating rating={review.rating} />

                  {/* Review Text */}
                  <p className="text-gray-400 text-sm leading-relaxed mt-3 flex-1 italic">
                    "{isRTL ? review.text.ar : review.text.en}"
                  </p>

                  {/* Footer */}
                  <div className="mt-4 pt-4 border-t border-white/6 flex items-center justify-between">
                    <span className="text-gray-600 text-xs">
                      {new Date(review.date).toLocaleDateString(isRTL ? 'ar-SA' : 'en-GB', {
                        year: 'numeric', month: 'short', day: 'numeric',
                      })}
                    </span>
                    <div className="flex gap-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xs">★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {filteredReviews.length === 0 && (
            <div className="text-center py-20 text-gray-600">
              {isRTL ? 'لا توجد تقييمات لهذا الفلتر' : 'No reviews match this filter'}
            </div>
          )}
        </div>
      </section>

      {/* Add Review CTA */}
      <section className="section-surface py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-5xl mb-5">⭐</div>
          <h2 className="display-md text-white mb-4">
            {isRTL ? 'هل استخدمت خدماتنا؟' : 'Did You Use Our Service?'}
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            {isRTL
              ? 'نقدر ملاحظاتك. تواصل معنا عبر واتساب لمشاركة تجربتك'
              : 'We value your feedback. Contact us via WhatsApp to share your experience.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA_LINK + '?text=I%20would%20like%20to%20share%20my%20review%20of%20Alrehabsatharecovery%20service.'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-lg"
            >
              <MessageCircle size={22} />
              {isRTL ? 'شارك تقييمك عبر واتساب' : 'Share Review via WhatsApp'}
            </a>
            <a
              href={`tel:${PHONE}`}
              className="btn-outline flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-lg"
            >
              <Phone size={22} />
              {isRTL ? 'اتصل بنا' : 'Call Us'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
