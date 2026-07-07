// Komponen Halaman Utama (pages/index.js atau app/page.js)
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* 1. NAVBAR */}
      <nav className="bg-green-700 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <span className="text-xl font-bold tracking-wide">SDN SEJAHTERA</span>
          </div>
          <div className="hidden md:flex space-x-6 font-medium">
            <a href="#" className="hover:text-green-200 transition">Beranda</a>
            <a href="#" className="hover:text-green-200 transition">Profil</a>
            <a href="#" className="hover:text-green-200 transition">Galeri</a>
            <a href="#" className="hover:text-green-200 transition">Berita</a>
            <a href="#" className="hover:text-green-200 transition">Kontak</a>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="relative bg-green-900 text-white py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1577896851231-70ef18881754')] bg-cover bg-center"></div>
        <div className="relative max-w-3xl mx-auto">
          <span className="bg-yellow-400 text-green-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Selamat Datang</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 leading-tight">
            Mewujudkan Generasi Cerdas, Berkarakter, dan Berbudaya
          </h1>
          <p className="text-lg md:text-xl text-green-100 mb-8">
            Selamat datang di portal resmi SDN Sejahtera. Wadah informasi, kreativitas, dan prestasi seluruh warga sekolah.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-green-950 font-bold px-6 py-3 rounded-lg shadow-md transition">
              Jelajahi Profil
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-green-900 font-semibold px-6 py-3 rounded-lg transition">
              Hubungi Kami
            </button>
          </div>
        </div>
      </header>

      {/* 3. VISI & MISI SINGKAT */}
      <section className="max-w-5xl mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-green-800 mb-4">Visi Kami</h3>
            <p className="text-gray-600 leading-relaxed">
              "Unggul dalam prestasi, berakhlak mulia, menguasai ilmu pengetahuan dan teknologi, serta peduli terhadap lingkungan."
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-green-800 mb-4">Misi Utama</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 leading-relaxed">
              <li>Menyelenggarakan pembelajaran yang aktif, kreatif, dan menyenangkan.</li>
              <li>Menanamkan nilai keagamaan dan budi pekerti luhur.</li>
              <li>Mengembangkan bakat siswa melalui kegiatan ekstrakurikuler.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
