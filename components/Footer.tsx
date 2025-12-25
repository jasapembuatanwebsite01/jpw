import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-6 mt-10 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div>
            <Link
              href="/"
              className="text-2xl font-bold text-white mb-4 block tracking-tight"
            >
              JPW<span className="text-jpw-600"> Studio</span>
            </Link>
            <p className="text-sm text-slate-400">
              Partner digital untuk bisnis yang ingin tampil profesional dan
              serius berjualan online.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-3">
              Layanan JPW
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Website Company Profile</li>
              <li>Toko Online / Catalog</li>
              <li>Landing Page Campaign</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-3">
              Navigasi
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#portfolio" className="hover:text-jpw-100">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#keunggulan" className="hover:text-jpw-100">
                  Keunggulan
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-jpw-100">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-3">
              Hubungi JPW
            </h3>
            <ul className="space-y-2 text-sm">
              <li>📍 Jakarta, Indonesia</li>
              <li>📞 +62 812-3456-7890</li>
              <li>📧 hello@jpwstudio.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-4 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} JPW Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
