import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-slate-50 text-slate-900 overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="relative">
        {/* soft gradient background */}
        <div className="absolute inset-x-0 -top-40 -z-10 h-80 bg-gradient-to-b from-indigo-100/80 to-transparent" />

        <div className="container mx-auto px-4 pt-28 pb-20 lg:pt-32 lg:pb-28">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* LEFT TEXT */}
            <div className="w-full lg:w-1/2 space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                JPW Studio • Jasa Pembuatan Website
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span className="block text-slate-900">
                  Website Profesional
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  untuk Bisnis yang Serius
                </span>
              </h1>

              <p className="text-base md:text-lg text-slate-600 max-w-xl">
                JPW membantu UKM dan brand membangun website yang cepat, terlihat
                mahal, dan siap dipakai jualan 24 jam sehari.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#portfolio"
                  className="px-8 py-3 rounded-xl font-semibold text-slate-900 bg-white border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
                >
                  Lihat Portfolio 👇
                </Link>
                <Link
                  href="#kontak"
                  className="px-8 py-3 rounded-xl font-semibold text-white bg-slate-900 shadow-lg hover:bg-slate-800 hover:-translate-y-0.5 transition"
                >
                  Konsultasi Gratis
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs md:text-sm text-slate-600">
                <span className="inline-flex items-center gap-1">
                  <span className="text-amber-400">★</span> 50+ website sudah
                  dibuat JPW
                </span>
                <span className="h-1 w-1 rounded-full bg-slate-300" />
                <span>Free maintenance 1 bulan pertama</span>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-3xl bg-white shadow-2xl border border-slate-100 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop"
                  alt="Developer Coding Website"
                  width={900}
                  height={650}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PORTFOLIO ================= */}
      <section
        id="portfolio"
        className="py-20 bg-white border-t border-slate-100 scroll-mt-24"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
              Contoh Website JPW
            </h2>
            <p className="text-slate-600">
              Beberapa tipe website yang sering kami kerjakan untuk klien —
              tampilan modern, cepat, dan siap dipakai jualan.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <article className="group bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden hover:bg-white hover:shadow-xl transition">
              <div className="relative h-56 bg-slate-200">
                <Image
                  /* Gambar orang belanja online / laptop */
                  src="https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&w=1200&q=80"
                  alt="Toko Online Modern"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute left-4 top-4 inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-400 text-slate-900 shadow-sm">
                  Toko Online &amp; Katalog
                </span>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-semibold text-lg text-slate-900">
                  Storepedia ID
                </h3>
                <p className="text-sm text-slate-600">
                  Toko online modern dengan katalog produk rapi dan tombol
                  WhatsApp langsung.
                </p>
              </div>
            </article>

            {/* Card 2 */}
            <article className="group bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden hover:bg-white hover:shadow-xl transition">
              <div className="relative h-56 bg-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=1600&auto=format&fit=crop"
                  alt="Company Profile Website"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute left-4 top-4 inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold bg-indigo-400 text-slate-900 shadow-sm">
                  Company Profile
                </span>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-semibold text-lg text-slate-900">
                  Mega Konstruksi
                </h3>
                <p className="text-sm text-slate-600">
                  Website profil perusahaan lengkap dengan layanan, portofolio,
                  dan kontak mudah dihubungi.
                </p>
              </div>
            </article>

            {/* Card 3 */}
            <article className="group bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden hover:bg-white hover:shadow-xl transition">
              <div className="relative h-56 bg-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&w=1200&q=80"
                  alt="Grafik analytics untuk landing page"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute left-4 top-4 inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold bg-fuchsia-400 text-slate-900 shadow-sm">
                  Landing Page SaaS
                </span>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-semibold text-lg text-slate-900">
                  SaaS Landing
                </h3>
                <p className="text-sm text-slate-600">
                  Landing page fokus konversi dengan section fitur dan CTA yang
                  jelas.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ================= KEUNGGULAN ================= */}
      <section
        id="keunggulan"
        className="py-20 bg-slate-50 scroll-mt-24 border-t border-slate-100"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
              Kenapa Memilih JPW?
            </h2>
            <p className="text-slate-600">
              Fokus pada website yang benar-benar dipakai untuk jualan dan
              meningkatkan kepercayaan.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-semibold text-lg text-slate-900 mb-2">
                Cepat & Ringan
              </h3>
              <p className="text-sm text-slate-600">
                Optimasi kecepatan sehingga pengunjung betah dan disukai Google.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="font-semibold text-lg text-slate-900 mb-2">
                Mobile Friendly
              </h3>
              <p className="text-sm text-slate-600">
                Desain rapi di HP, tablet, maupun desktop tanpa harus zoom.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="font-semibold text-lg text-slate-900 mb-2">
                Tampil Profesional
              </h3>
              <p className="text-sm text-slate-600">
                Layout bersih dan typography rapi yang memunculkan trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= KONTAK ================= */}
      <section
        id="kontak"
        className="py-20 bg-white border-t border-slate-200 scroll-mt-24"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
              Kontak JPW
            </h2>
            <p className="text-slate-600">
              Konsultasi gratis. Ceritakan kebutuhan website Anda — kami bantu pilih
              solusi terbaik untuk bisnis Anda.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl shadow-sm p-8 text-center space-y-4">
            <p className="text-slate-700 text-sm">
              📞 WhatsApp: <b>+62 812-1243-5026</b>
            </p>
            <p className="text-slate-700 text-sm">
              📧 Email: <b>jpw.jasapembuatanwebsite@gmail.com</b>
            </p>
            <p className="text-slate-700 text-sm">
              📍 Jakarta, Indonesia
            </p>

            <a
              href="https://wa.me/6281212435026"
              target="_blank"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-emerald-500 text-slate-900 font-semibold hover:bg-emerald-400 transition shadow-lg"
            >
              Chat via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
