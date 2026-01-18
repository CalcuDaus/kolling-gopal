'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

const menuItems = [
  // Coffee Menu
  {
    name: 'Kopi Susu',
    price: 8000,
    priceLabel: '8rb',
    size: '900ml',
    fullPrice: '50rb',
    image: '/images/kopi-susu.jpg',
    category: 'coffee'
  },
  {
    name: 'Kopi Aren',
    price: 10000,
    priceLabel: '10rb',
    size: '900ml',
    fullPrice: '62rb',
    image: '/images/kopi-aren.jpg',
    category: 'coffee'
  },
  {
    name: 'Kopi Cokelat',
    price: 10000,
    priceLabel: '10rb',
    size: '900ml',
    fullPrice: '62rb',
    image: '/images/kopi-cokelat.jpg',
    category: 'coffee'
  },
  {
    name: 'Kopi Pandan',
    price: 12000,
    priceLabel: '12rb',
    size: '900ml',
    fullPrice: '74rb',
    image: '/images/kopi-pandan.jpg',
    category: 'coffee'
  },
  {
    name: 'Kopi Caramel',
    price: 12000,
    priceLabel: '12rb',
    size: '900ml',
    fullPrice: '74rb',
    image: '/images/kopi-caramel.jpg',
    category: 'coffee'
  },
  {
    name: 'Cold Apple',
    price: 10000,
    priceLabel: '10rb',
    size: '900ml',
    fullPrice: '62rb',
    image: '/images/cold-apple.jpg',
    category: 'coffee'
  },
  {
    name: 'Americano',
    price: 8000,
    priceLabel: '8rb',
    size: '900ml',
    fullPrice: '50rb',
    image: '/images/kopi-americano.jpg',
    category: 'coffee'
  },
  // Non-Coffee Menu
  {
    name: 'Mango Yakult',
    price: 12000,
    priceLabel: '12rb',
    size: '900ml',
    fullPrice: '62rb',
    image: '/images/manggo-yakult.jpg',
    category: 'non-coffee'
  },
  {
    name: 'Matcha Latte',
    price: 12000,
    priceLabel: '12rb',
    size: '900ml',
    fullPrice: '74rb',
    image: '/images/matcha-latte.jpg',
    category: 'non-coffee'
  }
];

const categories = [
  { id: 'all', name: 'Semua Menu' },
  { id: 'coffee', name: 'Coffee' },
  { id: 'non-coffee', name: 'Non-Coffee' }
];

export default function Menu() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="relative" style={{ padding: '80px 0' }} ref={ref}>
      <div className="max-w-[1200px] mx-auto w-full" style={{ padding: '0 24px' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center" style={{ marginBottom: '48px' }}
        >
          <span className="text-[#3ECF8E] font-medium block" style={{ marginBottom: '16px', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '14px' }}>Menu Kami</span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '16px' }}>
            Pilihan <span className="gradient-text">Kopi & Minuman</span>
          </h2>
          <p style={{ color: '#9ca3af', maxWidth: '600px', margin: '0 auto' }}>
            Semua minuman dibuat fresh on the spot dengan bahan berkualitas premium
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginBottom: '48px' }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              style={{
                padding: '12px 28px',
                borderRadius: '999px',
                fontWeight: 600,
                fontSize: '14px',
                transition: 'all 0.3s',
                background: activeCategory === category.id 
                  ? 'linear-gradient(135deg, #472055, #8B5CF6)' 
                  : 'rgba(255, 255, 255, 0.05)',
                color: activeCategory === category.id ? 'white' : '#d1d5db',
                border: activeCategory === category.id 
                  ? 'none' 
                  : '1px solid rgba(255, 255, 255, 0.15)',
                cursor: 'pointer',
                boxShadow: activeCategory === category.id 
                  ? '0 4px 15px rgba(71, 32, 85, 0.4)' 
                  : 'none'
              }}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Menu Grid - with inline responsive CSS */}
        <style jsx>{`
          .menu-grid-inline {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
          @media (min-width: 768px) {
            .menu-grid-inline {
              grid-template-columns: repeat(3, 1fr);
              gap: 20px;
            }
          }
          @media (min-width: 1024px) {
            .menu-grid-inline {
              grid-template-columns: repeat(4, 1fr);
              gap: 24px;
            }
          }
        `}</style>
        <div className="menu-grid-inline">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              whileHover={{ y: -5, scale: 1.03 }}
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '16px',
                overflow: 'hidden',
                cursor: 'pointer',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                transition: 'all 0.3s'
              }}
            >
              {/* Image Container */}
              <div style={{ position: 'relative', aspectRatio: '1/1', overflow: 'hidden' }}>
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  style={{ objectFit: 'cover', transition: 'transform 0.5s' }}
                />
                
                {/* Price Badge */}
                <div style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  background: 'linear-gradient(135deg, #472055, #8B5CF6)',
                  color: 'white',
                  borderRadius: '50%',
                  width: '42px',
                  height: '42px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '12px',
                  boxShadow: '0 4px 15px rgba(71, 32, 85, 0.5)'
                }}>
                  {item.priceLabel}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '12px 8px', textAlign: 'center' }}>
                <h3 style={{ 
                  fontWeight: 'bold', 
                  fontSize: '13px', 
                  marginBottom: '4px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.3px'
                }}>
                  {item.name}
                </h3>
                <p style={{ color: '#9ca3af', fontSize: '11px' }}>
                  <span style={{ color: '#3ECF8E' }}>{item.size}</span> {item.fullPrice}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Order CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ textAlign: 'center', marginTop: '48px' }}
        >
          <p style={{ color: '#9ca3af', marginBottom: '16px' }}>Ingin memesan? Hubungi kami langsung via WhatsApp</p>
          <a
            href="https://wa.me/6281234567890?text=Halo, saya ingin memesan kopi"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '20px', height: '20px' }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Pesan via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
