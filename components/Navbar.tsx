"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Keunggulan", href: "/#keunggulan" },
  { label: "Kontak", href: "/#kontak" }, // ⛔ sudah diubah ke anchor
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-white/80 backdrop-blur"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-slate-900"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-600 text-white text-lg shadow-sm">
            J
          </span>
          <span>
            JPW<span className="text-indigo-600"> Studio</span>
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-slate-700 hover:text-indigo-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="https://wa.me/6281234567890"
            target="_blank"
            className="bg-indigo-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-indigo-700 hover:shadow-lg transition text-sm"
          >
            WhatsApp JPW
          </Link>
        </div>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-slate-700 hover:text-indigo-600"
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"/>
            </svg>
          )}
        </button>

        {/* MOBILE MENU */}
        <div
          className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 text-2xl font-semibold transform transition-transform duration-300 md:hidden ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-slate-900 hover:text-indigo-600"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="https://wa.me/6281234567890"
            target="_blank"
            onClick={() => setOpen(false)}
            className="bg-indigo-600 text-white px-10 py-3 rounded-full shadow-md hover:bg-indigo-700"
          >
            WhatsApp
          </Link>
        </div>
      </div>
    </nav>
  );
}
