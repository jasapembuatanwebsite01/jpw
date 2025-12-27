import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 mt-20 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          {/* KOLOM 1: BRAND & VISI */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="text-2xl font-bold text-white mb-4 block tracking-tight"
            >
              JPW<span className="text-jpw-600"> Studio</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Spesialis pembuatan website bisnis yang cepat, aman, dan dirancang untuk konversi penjualan.
            </p>
            {/* Social Media Placeholder (Opsional) */}
            <div className="flex gap-4">
               {/* Ikon Instagram/LinkedIn bisa ditaruh sini nanti */}
            </div>
          </div>

          {/* KOLOM 2: LAYANAN UTAMA (Produk) */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4 tracking-wide uppercase">
              Solusi Bisnis
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/layanan" className="hover:text-jpw-400 transition-colors flex items-center gap-2">
                  <span className="text-jpw-600">▪</span> Company Profile
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="hover:text-jpw-400 transition-colors flex items-center gap-2">
                  <span className="text-jpw-600">▪</span> Toko Online (UMKM)
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="hover:text-jpw-400 transition-colors flex items-center gap-2">
                  <span className="text-jpw-600">▪</span> Landing Page Iklan
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="hover:text-jpw-400 transition-colors flex items-center gap-2">
                  <span className="text-jpw-600">▪</span> Redesign Website
                </Link>
              </li>
            </ul>
          </div>

          {/* KOLOM 3: SPESIALISASI (Fitur Teknis - YANG ANDA MINTA) */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4 tracking-wide uppercase">
              Standar Teknis
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> SEO Optimized Structure
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Loading di Bawah 1 Detik
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Mobile First Design
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Integrasi WhatsApp API
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Server Aman (Static)
              </li>
            </ul>
          </div>

          {/* KOLOM 4: KONTAK */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4 tracking-wide uppercase">
              Hubungi Kami
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-xl">📍</span>
                <span className="mt-1">Jakarta, Indonesia</span>
              </li>
              <li>
                <Link 
                  href="https://wa.me/6281212435026" 
                  target="_blank"
                  className="flex items-center gap-3 hover:text-white transition-colors group"
                >
                  <span className="text-xl">📞</span>
                  <span className="group-hover:text-jpw-400 transition-colors">+62 812-1243-5026</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="mailto:jpw.jasapembuatanwebsite@gmail.com" 
                  className="flex items-center gap-3 hover:text-white transition-colors group"
                >
                  <span className="text-xl">📧</span>
                  <span className="group-hover:text-jpw-400 transition-colors">jpw.jasapembuatanwebsite@gmail.com</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} JPW Studio. Built with <span className="text-jpw-600 font-bold">Next.js</span> & <span className="text-sky-500 font-bold">Tailwind</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}