'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-start lg:items-center justify-center relative animated-bg pb-12"
      style={{ paddingTop: '180px' , marginBottom: '24px',paddingBottom: '5rem'}}
    >
      <div className="max-w-[1200px] mx-auto w-full px-[32px] md:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left z-10"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Kopi Enak,{' '}
            <span className="gradient-text">Datang ke Kamu</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-md md:text-md text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0"
          >
            Kopi gerobak keliling berbasis sepeda listrik — ramah lingkungan & fresh brew. 
            Kami hadir di sekitarmu untuk menemani harimu.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
            style={{ marginBlock : '24px' }}
          >
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Pesan Sekarang
            </a>
            <a href="#menu" className="btn-secondary">
              Lihat Menu
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-6 pt-8 "
          >
            <div>
              <p className="text-2xl md:text-3xl font-bold gradient-text">500+</p>
              <p className="text-sm text-gray-500">Pelanggan</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold gradient-text">10+</p>
              <p className="text-sm text-gray-500">Menu Varian</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold gradient-text">100%</p>
              <p className="text-sm text-gray-500">Fresh Brew</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10 lg:px-0"
          style={{ paddingLeft: '16px', paddingRight: '16px', marginTop: '24px' }}
        >
          <div className="relative w-full aspect-square mx-auto hero-image-container">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-linear-to-br from-[#472055]/50 to-[#3ECF8E]/30 rounded-full blur-3xl scale-110"></div>
            
            {/* Main Image */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden glass-card p-4">
              <Image
                src="/images/coffee-hero.jpg"
                alt="KolinGopal Coffee"
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 glass-card p-4 flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-linear-to-br from-[#3ECF8E] to-[#2ecc71] flex items-center justify-center">
                <span className="text-2xl">🌱</span>
              </div>
              <div>
                <p className="text-sm font-semibold">Eco-Friendly</p>
                <p className="text-xs text-gray-400">Sepeda Listrik</p>
              </div>
            </motion.div>

            {/* Floating Badge Right */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute -top-4 -right-4 glass-card p-4 flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-linear-to-br from-[#472055] to-[#8B5CF6] flex items-center justify-center">
                <span className="text-2xl">☕</span>
              </div>
              <div>
                <p className="text-sm font-semibold">Fresh Brew</p>
                <p className="text-xs text-gray-400">Setiap Hari</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
