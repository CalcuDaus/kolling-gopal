'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Leaflet components (client-side only)
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

// Location data
const locations = [
  {
    id: 1,
    name: 'Merdeka Walk',
    address: 'Jl. Balai Kota, Medan Barat',
    schedule: 'Senin - Minggu: 16:00 - 23:00',
    coords: [3.5914, 98.6775] as [number, number]
  },
  {
    id: 2,
    name: 'Sun Plaza / Cambridge',
    address: 'Jl. Zainul Arifin, Medan Polonia',
    schedule: 'Senin - Minggu: 10:00 - 21:00',
    coords: [3.5843, 98.6700] as [number, number]
  },
  {
    id: 3,
    name: 'Kampus USU',
    address: 'Jl. Dr. Mansyur, Medan Baru',
    schedule: 'Senin - Jumat: 08:00 - 16:00',
    coords: [3.5630, 98.6590] as [number, number]
  },
  {
    id: 4,
    name: 'Komplek Cemara Asri',
    address: 'Jl. Cemara Asri Blvd, Percut Sei Tuan',
    schedule: 'Sabtu - Minggu: 06:00 - 11:00',
    coords: [3.6360, 98.7040] as [number, number]
  }
];

const schedule = [
  { day: 'Senin - Jumat', time: '07:00 - 22:00', note: 'Spot Kampus & Perkantoran' },
  { day: 'Sabtu', time: '06:00 - 23:00', note: 'Event & Hangout Spots' },
  { day: 'Minggu', time: '06:00 - 22:00', note: 'CFD & Taman Kota' }
];

export default function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isClient, setIsClient] = useState(false);
  const [customIcon, setCustomIcon] = useState<L.Icon | null>(null);

  useEffect(() => {
    setIsClient(true);
    // Import Leaflet and create custom icon
    import("leaflet").then((L) => {
			// Import leaflet CSS
			// @ts-ignore - CSS import doesn't have type declarations
			import("leaflet/dist/leaflet.css");

			const icon = new L.Icon({
				iconUrl: "/images/logo.jpg",
				iconSize: [50, 50],
				iconAnchor: [25, 50],
				popupAnchor: [0, -50],
				className: "rounded-full border-4 border-[#472055] shadow-lg",
			});
			setCustomIcon(icon);
		});
  }, []);

  return (
    <section id="location" className="py-16 lg:py-32 relative" ref={ref}>
      <div className="max-w-[1200px] mx-auto w-full" style={{ padding: '0 24px' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: '24px', paddingBottom: '24px',marginTop: '120px' }}
        >
          <span className="text-[#3ECF8E] font-medium mb-4 block tracking-wider uppercase text-sm">Lokasi Kami</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Temukan <span className="gradient-text">KolinGopal</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Kami hadir di berbagai titik strategis kota Medan. Cek lokasi terdekatmu!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="glass-card h-[350px] lg:h-[600px] overflow-hidden shadow-2xl"
            style={{ padding: '16px' }}
          >
            {isClient && customIcon && (
              <MapContainer
                center={[3.5952, 98.6722]}
                zoom={13}
                className="w-full h-full rounded-2xl"
                scrollWheelZoom={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {locations.map((location) => (
                  <Marker 
                    key={location.id} 
                    position={location.coords}
                    icon={customIcon}
                  >
                    <Popup>
                      <div className="p-2">
                        <h3 className="font-bold text-[#472055]">{location.name}</h3>
                        <p className="text-sm text-gray-600">{location.address}</p>
                        <p className="text-xs text-[#3ECF8E] mt-1">{location.schedule}</p>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            )}
            {!isClient && (
              <div className="w-full h-full flex items-center justify-center bg-gray-800/50 rounded-2xl">
                <div className="text-center">
                  <div className="w-16 h-16 border-4 border-[#472055] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-gray-400">Memuat peta Medan...</p>
                </div>
              </div>
            )}
          </motion.div>

          {/* Schedule & Locations */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 lg:space-y-8"
          >
            {/* Schedule */}
            <div className="glass-card" style={{ padding: '20px' }}>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-[#3ECF8E]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Jadwal Operasional
              </h3>
              <div className="space-y-3">
                {schedule.map((item, index) => (
                  <div key={index} className="flex justify-between items-start py-3 border-b border-white/10 last:border-0">
                    <div>
                      <p className="font-medium">{item.day}</p>
                      <p className="text-sm text-gray-400">{item.note}</p>
                    </div>
                    <span className="text-[#3ECF8E] font-semibold">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location List */}
            <div className="glass-card" style={{ padding: '20px' }}>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-[#E67E22]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Spot Reguler
              </h3>
              <div className="space-y-4">
                {locations.map((location) => (
                  <div key={location.id} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#472055] to-[#8B5CF6] flex items-center justify-center shrink-0">
                      <span className="text-lg">📍</span>
                    </div>
                    <div>
                      <p className="font-medium">{location.name}</p>
                      <p className="text-sm text-gray-400">{location.address}</p>
                      <p className="text-xs text-[#3ECF8E]">{location.schedule}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/6281234567890?text=Halo, dimana lokasi KolinGopal hari ini?"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center text-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Tanya Lokasi Hari Ini
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
