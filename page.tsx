import type { Metadata } from "next";
import Link from "next/link";
import { Filter, Search, SlidersHorizontal, Star } from "lucide-react";
import { games, categories } from "@/data/games";
import GameCard from "@/components/ui/GameCard";

export const metadata: Metadata = {
  title: "All Games - 2000+ PC, PS5, Xbox & Switch Games",
  description: "Browse our complete database of 2000+ games across all platforms. Filter by genre, price, platform, and rating to find your perfect next game.",
};

const platforms = ["PC", "PS5", "Xbox", "Nintendo Switch", "Mobile"];
const priceFilters = ["All", "Free to Play", "Under $20", "Under $40", "Under $60"];
const sortOptions = ["Most Popular", "Top Rated", "Newest First", "Price: Low", "Price: High"];

export default function GamesPage() {
  return (
    <div className="min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <nav className="text-xs text-gray-500 mb-3">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <span className="breadcrumb-sep" />
            <span className="text-gray-300">Games</span>
          </nav>
          <h1 className="font-display font-black text-4xl text-white mb-2">
            All Games
          </h1>
          <p className="text-gray-400">
            Explore our database of <span className="text-neon-cyan font-semibold">2,000+ games</span> across all platforms and genres.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-dark-700 rounded-xl border border-white/5 p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="search"
                placeholder="Search games..."
                className="w-full bg-dark-800 border border-white/10 rounded-lg pl-9 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan/50 transition-all"
              />
            </div>
            {/* Sort */}
            <select className="bg-dark-800 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-gray-300 focus:outline-none focus:border-neon-cyan/50 transition-all">
              {sortOptions.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>

          {/* Filter pills */}
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="text-gray-500 text-xs flex items-center gap-1 mr-1">
              <SlidersHorizontal size={12} /> Platforms:
            </span>
            {platforms.map((p) => (
              <button key={p} className="px-3 py-1 rounded-full text-xs border border-white/10 text-gray-400 hover:border-neon-cyan/50 hover:text-neon-cyan transition-all">
                {p}
              </button>
            ))}
            <span className="text-gray-500 text-xs flex items-center gap-1 mx-2">Price:</span>
            {priceFilters.map((p) => (
              <button key={p} className={`px-3 py-1 rounded-full text-xs border transition-all ${p === "All" ? "border-neon-cyan text-neon-cyan bg-neon-cyan/10" : "border-white/10 text-gray-400 hover:border-neon-cyan/50 hover:text-neon-cyan"}`}>
                {p}
              </button>
            ))}
          </div>

          {/* Genres */}
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="text-gray-500 text-xs flex items-center gap-1 mr-1">
              <Filter size={12} /> Genres:
            </span>
            {categories.map((c) => (
              <button key={c.id} className="px-3 py-1 rounded-full text-xs border border-white/10 text-gray-400 hover:border-purple-500/50 hover:text-purple-400 transition-all">
                {c.icon} {c.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-5">
          <p className="text-gray-400 text-sm">
            Showing <span className="text-white font-semibold">{games.length}</span> of <span className="text-neon-cyan font-semibold">2,000+</span> games
          </p>
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded border border-white/10 flex items-center justify-center text-gray-400 hover:border-neon-cyan/50 hover:text-neon-cyan transition-all text-xs">
              ⊞
            </button>
            <button className="w-8 h-8 rounded border border-neon-cyan/50 flex items-center justify-center text-neon-cyan bg-neon-cyan/10 text-xs">
              ☰
            </button>
          </div>
        </div>

        {/* Games grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {games.map((game) => (
            <GameCard key={game.id} game={game} size="sm" />
          ))}
        </div>

        {/* Load more */}
        <div className="mt-10 text-center">
          <button className="px-8 py-3 rounded-xl border border-neon-purple/50 text-neon-purple font-semibold font-display hover:bg-neon-purple/10 transition-all">
            Load More Games
          </button>
          <p className="text-gray-600 text-sm mt-3">Showing 100 of 2,000+ games</p>
        </div>
      </div>
    </div>
  );
}
