"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Gamepad2, ChevronDown, Search, Bell, User } from "lucide-react";

const navLinks = [
  {
    label: "Games",
    href: "/games",
    dropdown: [
      { label: "All Games (2000+)", href: "/games" },
      { label: "Free to Play", href: "/free-games" },
      { label: "Top Rated", href: "/top-rated" },
      { label: "New Releases", href: "/new-releases" },
      { label: "Coming Soon", href: "/coming-soon" },
      { label: "Deals & Discounts", href: "/deals" },
    ],
  },
  {
    label: "News",
    href: "/news",
    dropdown: [
      { label: "Latest News", href: "/news" },
      { label: "Reviews", href: "/reviews" },
      { label: "Features", href: "/news?category=feature" },
      { label: "Trailers", href: "/news?category=trailer" },
    ],
  },
  {
    label: "Guides",
    href: "/guides",
    dropdown: [
      { label: "All Guides", href: "/guides" },
      { label: "Beginner Tutorials", href: "/guides?level=beginner" },
      { label: "Advanced Strategies", href: "/guides?level=advanced" },
      { label: "Walkthroughs", href: "/guides?type=walkthrough" },
      { label: "Tips & Tricks", href: "/guides?type=tips" },
    ],
  },
  { label: "Reviews", href: "/reviews" },
  { label: "Forum", href: "/forum" },
  { label: "Deals", href: "/deals" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Breaking news ticker */}
      <div className="bg-gradient-to-r from-purple-900/80 to-cyan-900/50 border-b border-purple-800/50 text-xs py-1.5 overflow-hidden hidden md:block">
        <div className="flex items-center gap-4">
          <span className="bg-neon-cyan text-dark-900 font-bold px-3 py-0.5 rounded text-xs shrink-0 ml-4 font-display tracking-wider">
            LIVE
          </span>
          <div className="overflow-hidden flex-1">
            <div className="ticker-content flex gap-16 whitespace-nowrap">
              <span>🔥 GTA 6 confirmed for 2025 launch</span>
              <span>⚡ Elden Ring DLC breaks sales records</span>
              <span>🎮 Nintendo Switch 2 reveal scheduled</span>
              <span>🏆 The Game Awards 2024 nominees announced</span>
              <span>🆓 Epic Games Store free game this week: Alan Wake 2</span>
              <span>🔥 GTA 6 confirmed for 2025 launch</span>
              <span>⚡ Elden Ring DLC breaks sales records</span>
              <span>🎮 Nintendo Switch 2 reveal scheduled</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-dark-900/95 backdrop-blur-md border-b border-purple-900/50 shadow-lg shadow-purple-900/10"
            : "bg-dark-800/90 backdrop-blur-sm border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center h-16 gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-neon-purple to-neon-cyan flex items-center justify-center shadow-neon-purple group-hover:scale-110 transition-transform">
              <Gamepad2 size={20} className="text-white" />
            </div>
            <span className="font-display font-black text-xl tracking-tight">
              <span className="text-white">NEXUS</span>
              <span className="gradient-text">PLAY</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1 flex-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all"
                >
                  {link.label}
                  {link.dropdown && <ChevronDown size={14} className="opacity-60" />}
                </Link>
                {link.dropdown && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-dark-700 border border-purple-900/50 rounded-lg shadow-xl shadow-black/50 py-1 z-50">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-purple-900/30 transition-all"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2 ml-auto">
            <Link
              href="/search"
              className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all"
            >
              <Search size={18} />
            </Link>
            <button className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all relative">
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-neon-cyan rounded-full"></span>
            </button>
            <Link
              href="/newsletter"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-neon-purple to-neon-cyan text-white text-sm font-semibold hover:opacity-90 transition-opacity font-display tracking-wide"
            >
              Subscribe
            </Link>
            <button
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden bg-dark-800 border-t border-white/5 px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="pl-4 space-y-1 mt-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-3 py-1.5 text-sm text-gray-500 hover:text-gray-300 transition-all"
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-white/5">
              <Link
                href="/newsletter"
                className="block w-full text-center px-4 py-2.5 rounded-lg bg-gradient-to-r from-neon-purple to-neon-cyan text-white text-sm font-semibold"
                onClick={() => setOpen(false)}
              >
                Subscribe to Newsletter
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
