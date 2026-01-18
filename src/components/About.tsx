'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: '🚲',
      title: 'Mobilitas Tinggi',
      description: 'Gerobak kopi kami bisa menjangkau berbagai lokasi dengan mudah menggunakan sepeda listrik.'
    },
    {
      icon: '🌱',
      title: 'Ramah Lingkungan',
      description: 'Beroperasi dengan sepeda listrik, tidak ada emisi karbon dan ramah lingkungan.'
    },
    {
      icon: '☕',
      title: 'Kualitas Premium',
      description: 'Biji kopi pilihan dari petani lokal, di-roast dengan sempurna untuk cita rasa terbaik.'
    }
  ];

  return (
    <section id="about" className="relative" style={{ padding: '80px 0' }} ref={ref}>
      <div className="max-w-[1200px] mx-auto w-full" style={{ padding: '0 24px' }}>
        <div className="grid lg:grid-cols-2 items-center" style={{ gap: '48px' }}>
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-4/5 max-w-md mx-auto">
              {/* Background Decoration */}
              <div className="absolute inset-0 bg-linear-to-br from-[#472055]/30 to-[#3ECF8E]/20 rounded-3xl blur-2xl scale-105"></div>
              
              {/* Main Image */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden glass-card">
                <Image
                  src="/images/cart.jpg"
                  alt="GO-PAL Kopi Keliling Cart"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Experience Badge */}
              <motion.div
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 glass-card p-6 text-center"
              >
                <p className="text-3xl font-bold gradient-text">2+</p>
                <p className="text-sm text-gray-400">Tahun Melayani</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-[#3ECF8E] font-medium mb-4 block">Tentang Kami</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Lebih dari Sekadar{' '}
              <span className="gradient-text">Kopi Keliling</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              <strong className="text-white">KolinGopal</strong> lahir dari kecintaan kami terhadap kopi dan 
              kepedulian terhadap lingkungan. Kami percaya bahwa kopi enak tidak harus dicari jauh — 
              biarkan kami yang datang ke kamu dengan gerobak sepeda listrik kami.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Setiap cangkir kopi kami dibuat dengan cinta, menggunakan biji kopi pilihan dari 
              petani lokal Indonesia. Fresh brew setiap hari, karena kamu layak mendapatkan yang terbaik.
            </p>

            {/* Features */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                    padding: '20px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                >
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, #472055, #8B5CF6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <span style={{ fontSize: '24px' }}>{feature.icon}</span>
                  </div>
                  <div>
                    <h3 style={{ 
                      fontWeight: 600, 
                      fontSize: '18px', 
                      marginBottom: '6px',
                      color: 'white'
                    }}>
                      {feature.title}
                    </h3>
                    <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.5' }}>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
