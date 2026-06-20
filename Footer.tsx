import Link from "next/link";
import { Gamepad2, Twitter, Youtube, Twitch, Instagram, Facebook, Mail, Rss } from "lucide-react";

const footerLinks = {
  Games: [
    { label: "All Games", href: "/games" },
    { label: "Free to Play", href: "/free-games" },
    { label: "Top Rated", href: "/top-rated" },
    { label: "New Releases", href: "/new-releases" },
    { label: "Coming Soon", href: "/coming-soon" },
    { label: "Game Deals", href: "/deals" },
    { label: "PC Games", href: "/games?platform=PC" },
    { label: "PS5 Games", href: "/games?platform=PS5" },
  ],
  Content: [
    { label: "Gaming News", href: "/news" },
    { label: "Game Reviews", href: "/reviews" },
    { label: "Guides & Tutorials", href: "/guides" },
    { label: "Game Forum", href: "/forum" },
    { label: "Newsletter", href: "/newsletter" },
    { label: "Sitemap", href: "/sitemap" },
    { label: "RSS Feed", href: "/rss" },
    { label: "Press Room", href: "/press" },
  ],
  Company: [
    { label: "About NexusPlay", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Careers", href: "/careers" },
    { label: "Advertise With Us", href: "/advertise" },
    { label: "Contact Us", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const socials = [
  { icon: Twitter, href: "#", label: "Twitter/X", color: "hover:text-sky-400" },
  { icon: Youtube, href: "#", label: "YouTube", color: "hover:text-red-500" },
  { icon: Twitch, href: "#", label: "Twitch", color: "hover:text-purple-400" },
  { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-400" },
  { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-400" },
  { icon: Mail, href: "/newsletter", label: "Newsletter", color: "hover:text-cyan-400" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-800 border-t border-white/5 mt-16">
      {/* Newsletter CTA */}
      <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/30 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-xl text-white">
              Stay Ahead of the Game
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Get the latest gaming news, reviews, and exclusive deals in your inbox.
            </p>
          </div>
          <form className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 md:w-72 bg-dark-700 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/30 transition-all"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-neon-purple to-neon-cyan text-white font-semibold text-sm font-display hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Subscribe Free
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-neon-purple to-neon-cyan flex items-center justify-center">
                <Gamepad2 size={20} className="text-white" />
              </div>
              <span className="font-display font-black text-xl tracking-tight">
                <span className="text-white">NEXUS</span>
                <span className="gradient-text">PLAY</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Your ultimate gaming destination. 2000+ games, expert guides, breaking news, and everything you need to dominate.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3 flex-wrap">
              {socials.map(({ icon: Icon, href, label, color }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`w-9 h-9 flex items-center justify-center rounded-lg bg-dark-700 border border-white/5 text-gray-500 ${color} transition-all hover:border-white/20`}
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-gray-500 text-sm hover:text-gray-200 transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Platform badges */}
        <div className="mt-10 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {["PC", "PS5", "PS4", "Xbox Series X", "Xbox One", "Nintendo Switch", "Mobile"].map((platform) => (
                <Link
                  key={platform}
                  href={`/games?platform=${platform}`}
                  className="px-3 py-1 rounded bg-dark-700 border border-white/5 text-gray-500 text-xs hover:border-purple-700/50 hover:text-gray-300 transition-all"
                >
                  {platform}
                </Link>
              ))}
            </div>
            <div className="flex gap-4 text-xs text-gray-600">
              <Link href="/privacy-policy" className="hover:text-gray-400 transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-gray-400 transition-colors">Terms</Link>
              <Link href="/sitemap" className="hover:text-gray-400 transition-colors">Sitemap</Link>
            </div>
          </div>

          <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-600">
            <p>© 2024 NexusPlay. All rights reserved. Not affiliated with any game publishers.</p>
            <p>Made with ❤️ for the gaming community worldwide.</p>
          </div>

          {/* Disclosure for AdSense */}
          <p className="mt-3 text-xs text-gray-700 text-center">
            NexusPlay may earn commissions from purchases made through links on this site.
            This site uses cookies for analytics and advertising purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}
