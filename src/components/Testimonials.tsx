'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Andi Pratama',
    role: 'Mahasiswa',
    content: 'Kopi yang enak dan konsepnya unik banget! Gerobak sepeda listriknya keren, jadi bisa pesan di mana aja. Recommended!',
    rating: 5,
    avatar: '👨‍🎓'
  },
  {
    id: 2,
    name: 'Siti Nurhaliza',
    role: 'Pekerja Kantoran',
    content: 'Gula aren latte-nya juara! Tiap pagi selalu nyari KolinGopal di depan kantor. Fresh brew dan harganya terjangkau.',
    rating: 5,
    avatar: '👩‍💼'
  },
  {
    id: 3,
    name: 'Budi Santoso',
    role: 'Freelancer',
    content: 'Matcha latte-nya super enak! Suka banget sama konsep eco-friendly-nya. Support small business yang peduli lingkungan!',
    rating: 5,
    avatar: '👨‍💻'
  },
  {
    id: 4,
    name: 'Dewi Anggraini',
    role: 'Content Creator',
    content: 'Aesthetic banget buat content! Kopinya juga enak, bukan cuma tampilan. Will definitely come back! 🔥',
    rating: 5,
    avatar: '👩‍🎤'
  },
  {
    id: 5,
    name: 'Rizky Hidayat',
    role: 'Entrepreneur',
    content: 'Pernah booking untuk event kantor, pelayanannya profesional dan kopinya bikin semua orang happy. Top!',
    rating: 5,
    avatar: '👨‍💼'
  }
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="relative" style={{ padding: '80px 0' }} ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-linear-to-b from-[#472055]/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1200px] mx-auto w-full relative z-10" style={{ padding: '0 24px' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center" style={{ marginBottom: '48px' }}
        >
          <span className="text-[#3ECF8E] font-medium mb-4 block">Testimoni</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Apa Kata <span className="gradient-text">Mereka?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Cerita dari pelanggan setia KolinGopal
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ maxWidth: '800px', margin: '0 auto 40px' }}
        >
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            style={{
              padding: '32px 24px',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              textAlign: 'center'
            }}
          >
            {/* Quote Icon */}
            <div style={{ fontSize: '48px', color: 'rgba(71, 32, 85, 0.5)', marginBottom: '20px' }}>"</div>
            
            {/* Content */}
            <p style={{ 
              fontSize: '18px', 
              color: '#e5e7eb', 
              marginBottom: '24px', 
              lineHeight: '1.7',
              fontStyle: 'italic'
            }}>
              {testimonials[activeIndex].content}
            </p>

            {/* Rating */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '20px' }}>
              {renderStars(testimonials[activeIndex].rating)}
            </div>

            {/* Author */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #472055, #8B5CF6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px'
              }}>
                {testimonials[activeIndex].avatar}
              </div>
              <div style={{ textAlign: 'left' }}>
                <p style={{ fontWeight: 600, fontSize: '16px', color: 'white' }}>{testimonials[activeIndex].name}</p>
                <p style={{ color: '#9ca3af', fontSize: '14px' }}>{testimonials[activeIndex].role}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Dots Navigation */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '40px' }}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              style={{
                width: index === activeIndex ? '28px' : '10px',
                height: '10px',
                borderRadius: '999px',
                background: index === activeIndex 
                  ? 'linear-gradient(to right, #472055, #8B5CF6)' 
                  : '#4b5563',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            />
          ))}
        </div>

        {/* Mini Cards */}
        <style jsx>{`
          .testimonial-mini-grid {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 16px;
          }
          @media (min-width: 768px) {
            .testimonial-mini-grid {
              grid-template-columns: repeat(3, 1fr);
              gap: 20px;
            }
          }
        `}</style>
        <div className="testimonial-mini-grid">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              whileHover={{ y: -5 }}
              onClick={() => setActiveIndex(index)}
              style={{
                padding: '16px',
                background: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #472055, #8B5CF6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px'
                }}>
                  {testimonial.avatar}
                </div>
                <div>
                  <p style={{ fontWeight: 500, fontSize: '14px', color: 'white' }}>{testimonial.name}</p>
                  <p style={{ color: '#6b7280', fontSize: '12px' }}>{testimonial.role}</p>
                </div>
              </div>
              <p style={{ 
                color: '#9ca3af', 
                fontSize: '13px', 
                lineHeight: '1.5',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}>
                {testimonial.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
