'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
      </svg>
    ),
    title: 'Eco-Friendly',
    description: 'Beroperasi dengan sepeda listrik, zero emission untuk menjaga kelestarian lingkungan.',
    color: 'from-[#3ECF8E] to-[#2ecc71]'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
    title: 'Cashless Payment',
    description: 'Mendukung berbagai metode pembayaran digital: QRIS, GoPay, OVO, Dana, dan lainnya.',
    color: 'from-[#472055] to-[#8B5CF6]'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: 'Mobile Coffee',
    description: 'Kami yang datang ke lokasi kamu! Tersedia untuk event, gathering, dan spot rutin.',
    color: 'from-[#E67E22] to-[#F39C12]'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    title: 'Premium Quality',
    description: 'Biji kopi Arabica pilihan dari petani lokal, roasted fresh untuk rasa terbaik.',
    color: 'from-[#F39C12] to-[#E74C3C]'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Fresh Everyday',
    description: 'Setiap minuman dibuat fresh on the spot, tidak ada yang premade atau instan.',
    color: 'from-[#9B59B6] to-[#8E44AD]'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: 'Made with Love',
    description: 'Setiap cangkir dibuat dengan hati dan passion terhadap kopi berkualitas.',
    color: 'from-[#E74C3C] to-[#C0392B]'
  }
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative" style={{ padding: '80px 0' }} ref={ref}>
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#472055]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#3ECF8E]/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1200px] mx-auto w-full relative z-10" style={{ padding: '0 24px' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center" style={{ marginBottom: '48px' }}
        >
          <span className="text-[#3ECF8E] font-medium mb-4 block">Kenapa Pilih Kami?</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Keunggulan <span className="gradient-text">KolinGopal</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Lebih dari sekadar kopi, kami menghadirkan pengalaman yang berbeda
          </p>
        </motion.div>

        {/* Features Grid */}
        <style jsx>{`
          .features-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          @media (min-width: 768px) {
            .features-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 24px;
            }
          }
          @media (min-width: 1024px) {
            .features-grid {
              grid-template-columns: repeat(3, 1fr);
              gap: 28px;
            }
          }
        `}</style>
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              style={{
                padding: '24px',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            >
              {/* Icon */}
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: `linear-gradient(135deg, ${feature.color.includes('3ECF8E') ? '#3ECF8E, #2ecc71' : feature.color.includes('472055') ? '#472055, #8B5CF6' : feature.color.includes('E67E22') ? '#E67E22, #F39C12' : feature.color.includes('F39C12') ? '#F39C12, #E74C3C' : feature.color.includes('9B59B6') ? '#9B59B6, #8E44AD' : '#E74C3C, #C0392B'})`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                transition: 'transform 0.3s'
              }}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 style={{ 
                fontSize: '18px', 
                fontWeight: 'bold', 
                marginBottom: '10px',
                color: 'white'
              }}>
                {feature.title}
              </h3>
              <p style={{ 
                color: '#9ca3af', 
                lineHeight: '1.6',
                fontSize: '14px'
              }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
