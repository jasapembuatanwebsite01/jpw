import Link from "next/link";

export default function KontakPage() {
  return (
    <div className="min-h-[80vh] bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 py-20">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-3">
            Hubungi JPW Studio
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Ceritakan kebutuhan website Anda. Tim JPW siap bantu dengan solusi terbaik
            yang sesuai dengan bisnis Anda.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-8">
          
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Info Left */}
            <div className="space-y-6">
              
              <div>
                <h2 className="text-lg font-semibold text-slate-900 mb-2">
                  Informasi Kontak
                </h2>
                <p className="text-slate-600 text-sm">
                  Anda bisa menghubungi kami melalui WhatsApp, email, atau langsung konsultasi.
                </p>
              </div>

              <div className="space-y-3 text-slate-800 text-sm">
                <p className="flex items-center gap-2">
                  <span className="text-xl">📞</span>
                  +62 812-3456-7890
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-xl">📧</span>
                  hello@jpwstudio.com
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-xl">📍</span>
                  Jakarta, Indonesia
                </p>
              </div>

              <Link
                href="https://wa.me/6281234567890"
                target="_blank"
                className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-7 py-3 rounded-full shadow-lg hover:shadow-xl transition"
              >
                Chat via WhatsApp
              </Link>
            </div>

            {/* Right Section */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h3 className="font-semibold mb-3 text-slate-900">
                Kenapa Hubungi JPW?
              </h3>

              <ul className="space-y-2 text-slate-700 text-sm">
                <li>✔️ Konsultasi Gratis</li>
                <li>✔️ Rekomendasi Paket Terbaik</li>
                <li>✔️ Respon Cepat</li>
                <li>✔️ Tim Profesional & Berpengalaman</li>
              </ul>

              <p className="text-xs text-slate-500 mt-4">
                * Konsultasi tidak dipungut biaya.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
