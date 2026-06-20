export type Game = {
  id: string;
  title: string;
  slug: string;
  genre: string[];
  platform: string[];
  releaseYear: number;
  rating: number;
  price: number | "Free";
  image: string;
  description: string;
  developer: string;
  publisher: string;
  featured?: boolean;
  trending?: boolean;
  newRelease?: boolean;
  hasGuide?: boolean;
  hasTutorial?: boolean;
  metacritic?: number;
  players: string;
  tags: string[];
};

export const games: Game[] = [
  // AAA Paid Games
  {
    id: "1", title: "Elden Ring", slug: "elden-ring",
    genre: ["Action RPG", "Souls-like"], platform: ["PC", "PS5", "Xbox"],
    releaseYear: 2022, rating: 9.6, price: 59.99,
    image: "https://placehold.co/400x225/1a0a3e/00f5ff?text=Elden+Ring",
    description: "An open-world action RPG developed by FromSoftware, featuring a vast landscape with deep lore and brutal combat.",
    developer: "FromSoftware", publisher: "Bandai Namco",
    featured: true, trending: true, hasGuide: true, hasTutorial: true, metacritic: 96,
    players: "1-4", tags: ["open-world", "difficult", "fantasy", "multiplayer"]
  },
  {
    id: "2", title: "Cyberpunk 2077", slug: "cyberpunk-2077",
    genre: ["Action RPG", "Open World"], platform: ["PC", "PS5", "Xbox"],
    releaseYear: 2020, rating: 9.0, price: 29.99,
    image: "https://placehold.co/400x225/0a1a3e/bf00ff?text=Cyberpunk+2077",
    description: "An open-world action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification.",
    developer: "CD Projekt Red", publisher: "CD Projekt",
    featured: true, hasGuide: true, hasTutorial: true, metacritic: 86,
    players: "1", tags: ["cyberpunk", "RPG", "open-world", "story-rich"]
  },
  {
    id: "3", title: "God of War Ragnarök", slug: "god-of-war-ragnarok",
    genre: ["Action Adventure", "Hack & Slash"], platform: ["PS5", "PS4", "PC"],
    releaseYear: 2022, rating: 9.7, price: 49.99,
    image: "https://placehold.co/400x225/1a0a0a/ff4444?text=God+of+War",
    description: "Kratos and Atreus must journey to each of the Nine Realms in search of answers as Asgardian forces prepare for a prophesied battle.",
    developer: "Santa Monica Studio", publisher: "Sony Interactive",
    featured: true, hasGuide: true, hasTutorial: true, metacritic: 94,
    players: "1", tags: ["mythology", "story", "combat", "exclusive"]
  },
  {
    id: "4", title: "The Witcher 3: Wild Hunt", slug: "witcher-3",
    genre: ["Action RPG", "Open World"], platform: ["PC", "PS5", "Xbox", "Switch"],
    releaseYear: 2015, rating: 9.8, price: 19.99,
    image: "https://placehold.co/400x225/0a1a0a/39ff14?text=Witcher+3",
    description: "A story-driven open world RPG set in a visually stunning fantasy universe full of meaningful choices and impactful consequences.",
    developer: "CD Projekt Red", publisher: "CD Projekt",
    trending: true, hasGuide: true, hasTutorial: true, metacritic: 92,
    players: "1", tags: ["RPG", "fantasy", "open-world", "story-rich"]
  },
  {
    id: "5", title: "Baldur's Gate 3", slug: "baldurs-gate-3",
    genre: ["RPG", "Turn-Based Strategy"], platform: ["PC", "PS5"],
    releaseYear: 2023, rating: 9.9, price: 59.99,
    image: "https://placehold.co/400x225/0a0a1a/bf00ff?text=BG3",
    description: "Gather your party and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival in this CRPG.",
    developer: "Larian Studios", publisher: "Larian Studios",
    featured: true, trending: true, newRelease: true, hasGuide: true, hasTutorial: true, metacritic: 96,
    players: "1-4", tags: ["RPG", "D&D", "co-op", "strategy"]
  },
  {
    id: "6", title: "Red Dead Redemption 2", slug: "red-dead-redemption-2",
    genre: ["Action Adventure", "Open World"], platform: ["PC", "PS4", "Xbox"],
    releaseYear: 2018, rating: 9.7, price: 29.99,
    image: "https://placehold.co/400x225/1a0a00/ff8c00?text=RDR2",
    description: "An epic tale of life in America's unforgiving heartland. The game's vast and atmospheric world also provides the foundation for a brand new online multiplayer experience.",
    developer: "Rockstar Games", publisher: "Rockstar Games",
    hasGuide: true, hasTutorial: true, metacritic: 97,
    players: "1-32", tags: ["western", "open-world", "story", "online"]
  },
  {
    id: "7", title: "Hogwarts Legacy", slug: "hogwarts-legacy",
    genre: ["Action RPG", "Open World"], platform: ["PC", "PS5", "Xbox", "Switch"],
    releaseYear: 2023, rating: 8.6, price: 49.99,
    image: "https://placehold.co/400x225/0a0a1a/ffcc00?text=Hogwarts",
    description: "An immersive, open-world action RPG set in the world first introduced in the Harry Potter books.",
    developer: "Avalanche Software", publisher: "Warner Bros",
    newRelease: true, hasGuide: true, hasTutorial: true, metacritic: 84,
    players: "1", tags: ["Harry Potter", "magic", "open-world", "RPG"]
  },
  {
    id: "8", title: "Spider-Man 2", slug: "spider-man-2",
    genre: ["Action Adventure", "Superhero"], platform: ["PS5"],
    releaseYear: 2023, rating: 9.3, price: 69.99,
    image: "https://placehold.co/400x225/1a0000/ff0000?text=Spider-Man+2",
    description: "Swing through New York as both Peter Parker and Miles Morales in this thrilling superhero adventure.",
    developer: "Insomniac Games", publisher: "Sony Interactive",
    newRelease: true, trending: true, hasGuide: true, hasTutorial: true, metacritic: 90,
    players: "1", tags: ["superhero", "exclusive", "action", "open-world"]
  },
  {
    id: "9", title: "Starfield", slug: "starfield",
    genre: ["Action RPG", "Space"], platform: ["PC", "Xbox"],
    releaseYear: 2023, rating: 8.5, price: 69.99,
    image: "https://placehold.co/400x225/000a1a/00aaff?text=Starfield",
    description: "Bethesda's first new universe in 25 years. An epic RPG set amongst the stars where you can explore over 1,000 planets.",
    developer: "Bethesda", publisher: "Xbox Game Studios",
    newRelease: true, hasGuide: true, hasTutorial: true, metacritic: 83,
    players: "1", tags: ["space", "RPG", "exploration", "sci-fi"]
  },
  {
    id: "10", title: "Alan Wake 2", slug: "alan-wake-2",
    genre: ["Survival Horror", "Action Adventure"], platform: ["PC", "PS5", "Xbox"],
    releaseYear: 2023, rating: 9.0, price: 59.99,
    image: "https://placehold.co/400x225/0a0a0a/ff6600?text=Alan+Wake+2",
    description: "A mind-bending psychological thriller that blurs the lines between reality and fiction.",
    developer: "Remedy Entertainment", publisher: "Epic Games",
    newRelease: true, hasGuide: true, metacritic: 89,
    players: "1", tags: ["horror", "psychological", "thriller", "story"]
  },
  // Free-to-Play Games
  {
    id: "11", title: "Fortnite", slug: "fortnite",
    genre: ["Battle Royale", "Shooter"], platform: ["PC", "PS5", "Xbox", "Switch", "Mobile"],
    releaseYear: 2017, rating: 8.5, price: "Free",
    image: "https://placehold.co/400x225/0a1a3e/00f5ff?text=Fortnite",
    description: "The most popular battle royale game in the world with 100 players fighting to be the last one standing.",
    developer: "Epic Games", publisher: "Epic Games",
    featured: true, trending: true, hasGuide: true, hasTutorial: true,
    players: "1-100", tags: ["battle-royale", "free-to-play", "cross-platform", "building"]
  },
  {
    id: "12", title: "Valorant", slug: "valorant",
    genre: ["Tactical Shooter", "FPS"], platform: ["PC"],
    releaseYear: 2020, rating: 8.7, price: "Free",
    image: "https://placehold.co/400x225/1a0a0a/ff4655?text=Valorant",
    description: "A 5v5 character-based tactical shooter where precise gunplay meets unique agent abilities.",
    developer: "Riot Games", publisher: "Riot Games",
    trending: true, hasGuide: true, hasTutorial: true,
    players: "5v5", tags: ["tactical", "free-to-play", "competitive", "esports"]
  },
  {
    id: "13", title: "League of Legends", slug: "league-of-legends",
    genre: ["MOBA", "Strategy"], platform: ["PC"],
    releaseYear: 2009, rating: 8.2, price: "Free",
    image: "https://placehold.co/400x225/0a0a1a/c89b3c?text=LoL",
    description: "The world's most played PC game. Team up with friends and battle to destroy the enemy Nexus in this iconic MOBA.",
    developer: "Riot Games", publisher: "Riot Games",
    hasGuide: true, hasTutorial: true,
    players: "5v5", tags: ["MOBA", "free-to-play", "competitive", "esports"]
  },
  {
    id: "14", title: "Apex Legends", slug: "apex-legends",
    genre: ["Battle Royale", "Shooter"], platform: ["PC", "PS5", "Xbox", "Switch", "Mobile"],
    releaseYear: 2019, rating: 8.8, price: "Free",
    image: "https://placehold.co/400x225/0a1a0a/ff4500?text=Apex",
    description: "A free-to-play hero shooter where legendary competitors battle for glory, fame, and fortune on the Frontier.",
    developer: "Respawn Entertainment", publisher: "EA",
    trending: true, hasGuide: true, hasTutorial: true,
    players: "3 per squad", tags: ["battle-royale", "heroes", "free-to-play", "fast-paced"]
  },
  {
    id: "15", title: "Genshin Impact", slug: "genshin-impact",
    genre: ["Action RPG", "Gacha"], platform: ["PC", "PS5", "Mobile"],
    releaseYear: 2020, rating: 8.9, price: "Free",
    image: "https://placehold.co/400x225/0a1a2e/88ccff?text=Genshin",
    description: "An open-world action RPG with gacha elements. Explore the magical world of Teyvat with a wide cast of characters.",
    developer: "miHoYo", publisher: "HoYoverse",
    trending: true, hasGuide: true, hasTutorial: true,
    players: "1-4", tags: ["gacha", "free-to-play", "anime", "open-world"]
  },
  {
    id: "16", title: "Counter-Strike 2", slug: "counter-strike-2",
    genre: ["Tactical Shooter", "FPS"], platform: ["PC"],
    releaseYear: 2023, rating: 8.4, price: "Free",
    image: "https://placehold.co/400x225/0a0a0a/f0a000?text=CS2",
    description: "The legendary tactical shooter returns with a massive update featuring new visuals, mechanics and gameplay.",
    developer: "Valve", publisher: "Valve",
    newRelease: true, hasGuide: true, hasTutorial: true,
    players: "5v5", tags: ["tactical", "free-to-play", "competitive", "esports"]
  },
  {
    id: "17", title: "Warframe", slug: "warframe",
    genre: ["Action", "Shooter", "RPG"], platform: ["PC", "PS5", "Xbox", "Switch"],
    releaseYear: 2013, rating: 8.6, price: "Free",
    image: "https://placehold.co/400x225/0a1a1a/00cccc?text=Warframe",
    description: "In the far future, the Tenno master powerful exo-skeletons called Warframes in a battle across the solar system.",
    developer: "Digital Extremes", publisher: "Digital Extremes",
    hasGuide: true, hasTutorial: true,
    players: "1-4", tags: ["free-to-play", "sci-fi", "action", "co-op"]
  },
  {
    id: "18", title: "Path of Exile", slug: "path-of-exile",
    genre: ["Action RPG", "Dungeon Crawler"], platform: ["PC", "Xbox"],
    releaseYear: 2013, rating: 8.7, price: "Free",
    image: "https://placehold.co/400x225/0a0a0a/cc6600?text=PoE",
    description: "A dark fantasy action RPG with deep skill trees, endless build options, and massive endgame content.",
    developer: "Grinding Gear Games", publisher: "Grinding Gear Games",
    hasGuide: true, hasTutorial: true,
    players: "1+", tags: ["dungeon-crawler", "dark-fantasy", "free-to-play", "complex"]
  },
  {
    id: "19", title: "Dota 2", slug: "dota-2",
    genre: ["MOBA", "Strategy"], platform: ["PC"],
    releaseYear: 2013, rating: 8.3, price: "Free",
    image: "https://placehold.co/400x225/0a0a0a/cc3300?text=Dota+2",
    description: "A complex MOBA with over 120 heroes, requiring deep strategy and teamwork to master.",
    developer: "Valve", publisher: "Valve",
    hasGuide: true, hasTutorial: true,
    players: "5v5", tags: ["MOBA", "free-to-play", "competitive", "esports", "complex"]
  },
  {
    id: "20", title: "Rocket League", slug: "rocket-league",
    genre: ["Sports", "Vehicular Soccer"], platform: ["PC", "PS5", "Xbox", "Switch"],
    releaseYear: 2015, rating: 9.0, price: "Free",
    image: "https://placehold.co/400x225/001a1a/00ff88?text=Rocket+League",
    description: "A high-powered hybrid of arcade-style soccer and vehicular mayhem with supersonic acrobatics.",
    developer: "Psyonix", publisher: "Epic Games",
    trending: true, hasGuide: true, hasTutorial: true,
    players: "1v1 to 4v4", tags: ["sports", "cars", "free-to-play", "competitive", "esports"]
  },
  // More games
  {
    id: "21", title: "Diablo IV", slug: "diablo-4",
    genre: ["Action RPG", "Dungeon Crawler"], platform: ["PC", "PS5", "Xbox"],
    releaseYear: 2023, rating: 8.7, price: 49.99,
    image: "https://placehold.co/400x225/0a0000/cc0000?text=Diablo+IV",
    description: "Return to darkness in this massive open-world action RPG with brutal combat and endless loot.",
    developer: "Blizzard", publisher: "Activision Blizzard",
    newRelease: true, hasGuide: true, hasTutorial: true, metacritic: 86,
    players: "1-4", tags: ["dungeon-crawler", "dark", "co-op", "loot"]
  },
  {
    id: "22", title: "Zelda: Tears of the Kingdom", slug: "zelda-totk",
    genre: ["Action Adventure", "Open World"], platform: ["Switch"],
    releaseYear: 2023, rating: 9.9, price: 59.99,
    image: "https://placehold.co/400x225/0a1a0a/88ff44?text=Zelda+TotK",
    description: "Link's adventure expands into the skies above Hyrule in this incredible sequel to Breath of the Wild.",
    developer: "Nintendo", publisher: "Nintendo",
    newRelease: true, featured: true, hasGuide: true, hasTutorial: true, metacritic: 96,
    players: "1", tags: ["Nintendo", "open-world", "adventure", "puzzle"]
  },
  {
    id: "23", title: "Final Fantasy XVI", slug: "final-fantasy-16",
    genre: ["Action RPG"], platform: ["PS5", "PC"],
    releaseYear: 2023, rating: 9.0, price: 49.99,
    image: "https://placehold.co/400x225/0a0a1a/4455ff?text=FFXVI",
    description: "A dark and mature Final Fantasy with epic action combat and a sweeping story of kingdoms at war.",
    developer: "Square Enix", publisher: "Square Enix",
    newRelease: true, hasGuide: true, hasTutorial: true, metacritic: 87,
    players: "1", tags: ["JRPG", "action", "story", "fantasy"]
  },
  {
    id: "24", title: "Lies of P", slug: "lies-of-p",
    genre: ["Souls-like", "Action RPG"], platform: ["PC", "PS5", "Xbox"],
    releaseYear: 2023, rating: 8.5, price: 49.99,
    image: "https://placehold.co/400x225/0a0a0a/cc99ff?text=Lies+of+P",
    description: "A dark Soulslike reimagining of Pinocchio in a Belle Époque world filled with mechanical puppets.",
    developer: "Round8 Studio", publisher: "Neowiz",
    newRelease: true, hasGuide: true, metacritic: 80,
    players: "1", tags: ["souls-like", "dark", "action", "story"]
  },
  {
    id: "25", title: "Armored Core VI", slug: "armored-core-6",
    genre: ["Mech Action", "Shooter"], platform: ["PC", "PS5", "Xbox"],
    releaseYear: 2023, rating: 8.8, price: 59.99,
    image: "https://placehold.co/400x225/0a0a0a/ff6600?text=AC+VI",
    description: "Build and pilot your ultimate mech through intense combat missions in this FromSoftware action game.",
    developer: "FromSoftware", publisher: "Bandai Namco",
    newRelease: true, hasGuide: true, metacritic: 87,
    players: "1-6", tags: ["mech", "action", "customization", "FromSoftware"]
  },
  {
    id: "26", title: "Sea of Stars", slug: "sea-of-stars",
    genre: ["RPG", "Turn-Based"], platform: ["PC", "PS5", "Xbox", "Switch"],
    releaseYear: 2023, rating: 8.7, price: 34.99,
    image: "https://placehold.co/400x225/001a2e/88ddff?text=Sea+of+Stars",
    description: "A turn-based RPG inspired by SNES classics, following two children of the solstice on a quest to defeat evil.",
    developer: "Sabotage Studio", publisher: "Sabotage Studio",
    newRelease: true, hasGuide: true, metacritic: 89,
    players: "1-2", tags: ["indie", "RPG", "retro", "pixel"]
  },
  {
    id: "27", title: "Dave the Diver", slug: "dave-the-diver",
    genre: ["Adventure", "RPG", "Simulation"], platform: ["PC", "Switch"],
    releaseYear: 2023, rating: 9.0, price: 19.99,
    image: "https://placehold.co/400x225/001a0a/00ff88?text=Dave+Diver",
    description: "A hybrid game combining ocean exploration in the day with running a sushi restaurant at night.",
    developer: "Mintrocket", publisher: "Nexon",
    newRelease: true, hasGuide: true, metacritic: 90,
    players: "1", tags: ["indie", "adventure", "simulation", "unique"]
  },
  {
    id: "28", title: "Minecraft", slug: "minecraft",
    genre: ["Sandbox", "Survival"], platform: ["PC", "PS5", "Xbox", "Switch", "Mobile"],
    releaseYear: 2011, rating: 9.5, price: 26.99,
    image: "https://placehold.co/400x225/0a1a0a/66cc33?text=Minecraft",
    description: "The best-selling game of all time. Build, survive, and explore an infinite blocky world.",
    developer: "Mojang", publisher: "Microsoft",
    hasGuide: true, hasTutorial: true,
    players: "1-8+", tags: ["sandbox", "creative", "survival", "family-friendly"]
  },
  {
    id: "29", title: "Grand Theft Auto V", slug: "gta-5",
    genre: ["Action Adventure", "Open World"], platform: ["PC", "PS5", "Xbox"],
    releaseYear: 2013, rating: 9.4, price: 29.99,
    image: "https://placehold.co/400x225/0a0a0a/00aa44?text=GTA+V",
    description: "A massive open-world crime saga following three criminals across Los Santos with online multiplayer.",
    developer: "Rockstar Games", publisher: "Rockstar Games",
    hasGuide: true, hasTutorial: true,
    players: "1-30", tags: ["open-world", "crime", "online", "massive"]
  },
  {
    id: "30", title: "Call of Duty: MW3", slug: "cod-mw3",
    genre: ["First-Person Shooter"], platform: ["PC", "PS5", "Xbox"],
    releaseYear: 2023, rating: 7.5, price: 69.99,
    image: "https://placehold.co/400x225/0a0a0a/aaaaaa?text=COD+MW3",
    description: "The latest in the iconic Call of Duty series featuring the return of Warzone and classic multiplayer.",
    developer: "Sledgehammer Games", publisher: "Activision",
    newRelease: true, hasGuide: true, hasTutorial: true, metacritic: 56,
    players: "Online Multiplayer", tags: ["FPS", "military", "online", "competitive"]
  },
  {
    id: "31", title: "Hollow Knight", slug: "hollow-knight",
    genre: ["Metroidvania", "Action Platformer"], platform: ["PC", "PS4", "Xbox", "Switch"],
    releaseYear: 2017, rating: 9.3, price: 14.99,
    image: "https://placehold.co/400x225/0a0a0a/aaaacc?text=Hollow+Knight",
    description: "A challenging, atmospheric exploration game set in a vast underground kingdom of insects and heroes.",
    developer: "Team Cherry", publisher: "Team Cherry",
    hasGuide: true, hasTutorial: true,
    players: "1", tags: ["indie", "metroidvania", "difficult", "atmospheric"]
  },
  {
    id: "32", title: "Celeste", slug: "celeste",
    genre: ["Platformer", "Indie"], platform: ["PC", "PS4", "Xbox", "Switch"],
    releaseYear: 2018, rating: 9.5, price: 19.99,
    image: "https://placehold.co/400x225/1a0a1a/ff88cc?text=Celeste",
    description: "Help Madeline survive her inner demons on her journey to the top of Celeste Mountain in this precision platformer.",
    developer: "Maddy Makes Games", publisher: "Maddy Makes Games",
    hasGuide: true,
    players: "1", tags: ["indie", "platformer", "difficult", "story", "mental-health"]
  },
  {
    id: "33", title: "Stardew Valley", slug: "stardew-valley",
    genre: ["Simulation", "RPG"], platform: ["PC", "PS4", "Xbox", "Switch", "Mobile"],
    releaseYear: 2016, rating: 9.5, price: 14.99,
    image: "https://placehold.co/400x225/0a1a0a/88ff44?text=Stardew+Valley",
    description: "Escape to the countryside and build the farm of your dreams in this beloved farming RPG.",
    developer: "ConcernedApe", publisher: "ConcernedApe",
    hasGuide: true, hasTutorial: true,
    players: "1-4", tags: ["farming", "simulation", "relaxing", "indie", "co-op"]
  },
  {
    id: "34", title: "Resident Evil 4 Remake", slug: "re4-remake",
    genre: ["Survival Horror", "Action"], platform: ["PC", "PS5", "Xbox"],
    releaseYear: 2023, rating: 9.2, price: 39.99,
    image: "https://placehold.co/400x225/0a0a0a/cc0000?text=RE4+Remake",
    description: "The legendary survival horror game gets a stunning modern remake while faithfully recreating the original.",
    developer: "Capcom", publisher: "Capcom",
    newRelease: true, hasGuide: true, hasTutorial: true, metacritic: 93,
    players: "1", tags: ["horror", "action", "remake", "classic"]
  },
  {
    id: "35", title: "Street Fighter 6", slug: "street-fighter-6",
    genre: ["Fighting"], platform: ["PC", "PS5", "Xbox"],
    releaseYear: 2023, rating: 9.0, price: 59.99,
    image: "https://placehold.co/400x225/0a0a0a/ff6600?text=SF6",
    description: "The legendary fighting franchise returns with innovative Modern Controls, a living open world called World Tour, and more.",
    developer: "Capcom", publisher: "Capcom",
    newRelease: true, hasGuide: true, hasTutorial: true, metacritic: 92,
    players: "1-2", tags: ["fighting", "competitive", "esports", "classic"]
  },
  {
    id: "36", title: "Tears of the Kingdom", slug: "totk-2",
    genre: ["Adventure", "Open World"], platform: ["Switch"],
    releaseYear: 2023, rating: 9.8, price: 59.99,
    image: "https://placehold.co/400x225/0a1a0a/88ff44?text=TotK",
    description: "Nintendo's masterpiece expands Hyrule vertically into sky islands with incredible building mechanics.",
    developer: "Nintendo", publisher: "Nintendo",
    hasGuide: true, hasTutorial: true, metacritic: 96,
    players: "1", tags: ["Nintendo", "adventure", "open-world", "creative"]
  },
  {
    id: "37", title: "Overwatch 2", slug: "overwatch-2",
    genre: ["Hero Shooter", "FPS"], platform: ["PC", "PS5", "Xbox", "Switch"],
    releaseYear: 2022, rating: 7.5, price: "Free",
    image: "https://placehold.co/400x225/0a0a1a/ff8800?text=OW2",
    description: "A team-based action game set in an optimistic future with diverse hero abilities and tactical combat.",
    developer: "Blizzard", publisher: "Activision Blizzard",
    hasGuide: true, hasTutorial: true,
    players: "5v5", tags: ["hero-shooter", "free-to-play", "competitive", "team"]
  },
  {
    id: "38", title: "Palworld", slug: "palworld",
    genre: ["Survival", "Crafting", "RPG"], platform: ["PC", "Xbox"],
    releaseYear: 2024, rating: 8.0, price: 26.99,
    image: "https://placehold.co/400x225/0a1a0a/00ff88?text=Palworld",
    description: "Collect mysterious creatures called 'Pals' and use them to build, fight, farm, and mine in this survival game.",
    developer: "Pocketpair", publisher: "Pocketpair",
    newRelease: true, trending: true, hasGuide: true, hasTutorial: true,
    players: "1-32", tags: ["survival", "crafting", "creatures", "open-world"]
  },
  {
    id: "39", title: "Helldivers 2", slug: "helldivers-2",
    genre: ["Third-Person Shooter", "Co-op"], platform: ["PC", "PS5"],
    releaseYear: 2024, rating: 9.0, price: 39.99,
    image: "https://placehold.co/400x225/0a0a0a/ffcc00?text=Helldivers+2",
    description: "Suit up in a powerful exosuit and liberate the galaxy from alien threats in this intense co-op shooter.",
    developer: "Arrowhead Game Studios", publisher: "Sony Interactive",
    newRelease: true, trending: true, featured: true, hasGuide: true, hasTutorial: true,
    players: "1-4", tags: ["co-op", "shooter", "sci-fi", "action", "teamwork"]
  },
  {
    id: "40", title: "Animal Crossing: New Horizons", slug: "animal-crossing-nh",
    genre: ["Simulation", "Life Sim"], platform: ["Switch"],
    releaseYear: 2020, rating: 9.2, price: 49.99,
    image: "https://placehold.co/400x225/0a1a2e/88ddff?text=Animal+Crossing",
    description: "Escape to a deserted island and create your own paradise in this charming life simulation game.",
    developer: "Nintendo", publisher: "Nintendo",
    hasGuide: true, hasTutorial: true,
    players: "1-8", tags: ["simulation", "relaxing", "Nintendo", "social", "family"]
  },
  // Additional 60 games to reach 100+
  { id: "41", title: "Monster Hunter: World", slug: "monster-hunter-world", genre: ["Action RPG"], platform: ["PC", "PS4", "Xbox"], releaseYear: 2018, rating: 9.2, price: 29.99, image: "https://placehold.co/400x225/0a1a0a/66cc33?text=MHW", description: "Hunt massive monsters in a living ecosystem in this epic action RPG.", developer: "Capcom", publisher: "Capcom", hasGuide: true, hasTutorial: true, metacritic: 90, players: "1-4", tags: ["co-op", "action", "hunting", "RPG"] },
  { id: "42", title: "Dark Souls III", slug: "dark-souls-3", genre: ["Action RPG", "Souls-like"], platform: ["PC", "PS4", "Xbox"], releaseYear: 2016, rating: 9.0, price: 29.99, image: "https://placehold.co/400x225/0a0a0a/ff6600?text=DS3", description: "The penultimate chapter in the Dark Souls series featuring brutal difficulty and deep lore.", developer: "FromSoftware", publisher: "Bandai Namco", hasGuide: true, hasTutorial: true, metacritic: 89, players: "1-4", tags: ["difficult", "dark-fantasy", "action", "RPG"] },
  { id: "43", title: "Sekiro: Shadows Die Twice", slug: "sekiro", genre: ["Action Adventure", "Souls-like"], platform: ["PC", "PS4", "Xbox"], releaseYear: 2019, rating: 9.1, price: 39.99, image: "https://placehold.co/400x225/0a0a0a/cc0000?text=Sekiro", description: "A brutal shinobi action game set in a reimagined late 1500s Sengoku Japan.", developer: "FromSoftware", publisher: "Activision", hasGuide: true, hasTutorial: true, metacritic: 91, players: "1", tags: ["difficult", "samurai", "stealth", "action"] },
  { id: "44", title: "Hades", slug: "hades", genre: ["Roguelite", "Action"], platform: ["PC", "PS5", "Xbox", "Switch"], releaseYear: 2020, rating: 9.6, price: 24.99, image: "https://placehold.co/400x225/1a0000/ff4444?text=Hades", description: "Battle out of the Underworld in this rogue-like dungeon crawler with incredible story integration.", developer: "Supergiant Games", publisher: "Supergiant Games", hasGuide: true, hasTutorial: true, metacritic: 93, players: "1", tags: ["roguelite", "action", "indie", "story", "mythology"] },
  { id: "45", title: "Disco Elysium", slug: "disco-elysium", genre: ["RPG", "Point-and-Click"], platform: ["PC", "PS5"], releaseYear: 2019, rating: 9.5, price: 39.99, image: "https://placehold.co/400x225/0a0a1a/ffcc00?text=Disco+Elysium", description: "A groundbreaking RPG where you are a detective with a unique skill system and no combat.", developer: "ZA/UM", publisher: "ZA/UM", hasGuide: true, metacritic: 97, players: "1", tags: ["RPG", "detective", "story-rich", "unique"] },
  { id: "46", title: "Outer Wilds", slug: "outer-wilds", genre: ["Adventure", "Mystery"], platform: ["PC", "PS5", "Xbox"], releaseYear: 2019, rating: 9.7, price: 24.99, image: "https://placehold.co/400x225/001a2e/ffaa44?text=Outer+Wilds", description: "An exploration game about a solar system trapped in an endless 22-minute time loop.", developer: "Mobius Digital", publisher: "Annapurna Interactive", hasGuide: true, metacritic: 85, players: "1", tags: ["exploration", "mystery", "space", "unique"] },
  { id: "47", title: "It Takes Two", slug: "it-takes-two", genre: ["Co-op Adventure", "Platformer"], platform: ["PC", "PS5", "Xbox"], releaseYear: 2021, rating: 9.5, price: 39.99, image: "https://placehold.co/400x225/1a0a1a/ff88cc?text=It+Takes+Two", description: "A genre-defying co-op game filled with innovative gameplay and a touching story about love.", developer: "Hazelight Studios", publisher: "EA", hasGuide: true, hasTutorial: true, metacritic: 89, players: "2", tags: ["co-op", "platformer", "story", "unique", "must-play"] },
  { id: "48", title: "Returnal", slug: "returnal", genre: ["Roguelite", "Third-Person Shooter"], platform: ["PS5", "PC"], releaseYear: 2021, rating: 9.0, price: 59.99, image: "https://placehold.co/400x225/001a1a/00cccc?text=Returnal", description: "A bullet-hell roguelite shooter following an astronaut trapped in an alien world time loop.", developer: "Housemarque", publisher: "Sony Interactive", hasGuide: true, hasTutorial: true, metacritic: 86, players: "1-2", tags: ["roguelite", "difficult", "sci-fi", "bullet-hell"] },
  { id: "49", title: "Ghostwire: Tokyo", slug: "ghostwire-tokyo", genre: ["Action Adventure", "FPS"], platform: ["PS5", "PC"], releaseYear: 2022, rating: 8.2, price: 29.99, image: "https://placehold.co/400x225/0a0a1a/cc44ff?text=Ghostwire", description: "Use spectral abilities to unravel the mystery behind the disappearance of Tokyo's population.", developer: "Tango Gameworks", publisher: "Bethesda", hasGuide: true, metacritic: 75, players: "1", tags: ["supernatural", "Japan", "action", "mystery"] },
  { id: "50", title: "Forza Horizon 5", slug: "forza-horizon-5", genre: ["Racing", "Open World"], platform: ["PC", "Xbox"], releaseYear: 2021, rating: 9.5, price: 39.99, image: "https://placehold.co/400x225/0a0a0a/ffcc00?text=FH5", description: "Race through an expansive open-world recreation of Mexico in the ultimate racing game.", developer: "Playground Games", publisher: "Xbox Game Studios", hasGuide: true, hasTutorial: true, metacritic: 92, players: "1-12", tags: ["racing", "open-world", "cars", "multiplayer"] },
  { id: "51", title: "FIFA 24", slug: "fifa-24", genre: ["Sports", "Soccer"], platform: ["PC", "PS5", "Xbox", "Switch"], releaseYear: 2023, rating: 7.0, price: 59.99, image: "https://placehold.co/400x225/001a00/00cc44?text=FC+24", description: "EA Sports FC 24 brings the world's sport to life with authentic football experience.", developer: "EA Sports", publisher: "EA", newRelease: true, hasGuide: true, hasTutorial: true, players: "1-4", tags: ["sports", "football", "soccer", "online"] },
  { id: "52", title: "NBA 2K24", slug: "nba-2k24", genre: ["Sports", "Basketball"], platform: ["PC", "PS5", "Xbox", "Switch"], releaseYear: 2023, rating: 6.5, price: 59.99, image: "https://placehold.co/400x225/0a0a1a/0066ff?text=NBA+2K24", description: "The most authentic NBA simulation with MyCareer, MyTeam, and online modes.", developer: "Visual Concepts", publisher: "2K Sports", newRelease: true, hasGuide: true, hasTutorial: true, players: "1-6", tags: ["sports", "basketball", "online", "simulation"] },
  { id: "53", title: "Mortal Kombat 1", slug: "mk1", genre: ["Fighting"], platform: ["PC", "PS5", "Xbox", "Switch"], releaseYear: 2023, rating: 8.5, price: 69.99, image: "https://placehold.co/400x225/0a0000/cc0000?text=MK1", description: "NetherRealm reimagines the Mortal Kombat universe with a spectacular new timeline.", developer: "NetherRealm Studios", publisher: "Warner Bros", newRelease: true, hasGuide: true, hasTutorial: true, metacritic: 84, players: "1-2", tags: ["fighting", "gore", "competitive", "classic"] },
  { id: "54", title: "Assassin's Creed Mirage", slug: "ac-mirage", genre: ["Action Adventure", "Stealth"], platform: ["PC", "PS5", "Xbox"], releaseYear: 2023, rating: 8.0, price: 49.99, image: "https://placehold.co/400x225/0a0a0a/cc9900?text=AC+Mirage", description: "Return to Assassin's Creed roots with a focused stealth experience in 9th century Baghdad.", developer: "Ubisoft Bordeaux", publisher: "Ubisoft", newRelease: true, hasGuide: true, hasTutorial: true, metacritic: 76, players: "1", tags: ["stealth", "historical", "action", "parkour"] },
  { id: "55", title: "The Last of Us Part I", slug: "tlou-1", genre: ["Action Adventure", "Survival Horror"], platform: ["PS5", "PC"], releaseYear: 2022, rating: 9.7, price: 49.99, image: "https://placehold.co/400x225/0a0a0a/00cc44?text=TLOU+1", description: "The definitive version of one of gaming's greatest stories, rebuilt for modern hardware.", developer: "Naughty Dog", publisher: "Sony Interactive", hasGuide: true, hasTutorial: true, metacritic: 88, players: "1", tags: ["story", "survival", "exclusive", "remake"] },
  { id: "56", title: "Team Fortress 2", slug: "team-fortress-2", genre: ["FPS", "Hero Shooter"], platform: ["PC"], releaseYear: 2007, rating: 8.5, price: "Free", image: "https://placehold.co/400x225/0a0a0a/cc6600?text=TF2", description: "One of the most beloved multiplayer shooters of all time, still actively played and updated.", developer: "Valve", publisher: "Valve", hasGuide: true, hasTutorial: true, players: "12v12", tags: ["FPS", "free-to-play", "classic", "multiplayer"] },
  { id: "57", title: "Destiny 2", slug: "destiny-2", genre: ["FPS", "MMO", "RPG"], platform: ["PC", "PS5", "Xbox"], releaseYear: 2017, rating: 8.0, price: "Free", image: "https://placehold.co/400x225/001a2e/0066ff?text=Destiny+2", description: "A free-to-play MMO shooter with deep endgame raids and constantly evolving seasonal content.", developer: "Bungie", publisher: "Bungie", hasGuide: true, hasTutorial: true, players: "1-6", tags: ["FPS", "MMO", "free-to-play", "raids", "sci-fi"] },
  { id: "58", title: "Lost Ark", slug: "lost-ark", genre: ["MMORPG", "Action RPG"], platform: ["PC"], releaseYear: 2022, rating: 8.2, price: "Free", image: "https://placehold.co/400x225/0a0a1a/ffcc44?text=Lost+Ark", description: "A massively multiplayer action RPG set in the world of Arkesia with 15+ classes.", developer: "Smilegate", publisher: "Amazon Games", hasGuide: true, hasTutorial: true, players: "MMO", tags: ["MMORPG", "free-to-play", "action", "isometric"] },
  { id: "59", title: "Fall Guys", slug: "fall-guys", genre: ["Battle Royale", "Party"], platform: ["PC", "PS5", "Xbox", "Switch"], releaseYear: 2020, rating: 8.2, price: "Free", image: "https://placehold.co/400x225/1a0a1a/ff44cc?text=Fall+Guys", description: "A massively multiplayer party knockout game with up to 60 players competing to the end.", developer: "Mediatonic", publisher: "Epic Games", hasGuide: true, hasTutorial: true, players: "Up to 60", tags: ["party", "free-to-play", "fun", "battle-royale"] },
  { id: "60", title: "Among Us", slug: "among-us", genre: ["Social Deduction", "Party"], platform: ["PC", "Mobile", "Switch"], releaseYear: 2018, rating: 8.5, price: "Free", image: "https://placehold.co/400x225/0a0a1a/cc44ff?text=Among+Us", description: "Work together to run a spaceship, but beware — one player is the impostor trying to sabotage your mission.", developer: "InnerSloth", publisher: "InnerSloth", hasGuide: true, hasTutorial: true, players: "4-15", tags: ["social-deduction", "party", "free-to-play", "fun"] },
  // 61-100
  { id: "61", title: "Terraria", slug: "terraria", genre: ["Sandbox", "Action", "RPG"], platform: ["PC", "PS4", "Xbox", "Switch", "Mobile"], releaseYear: 2011, rating: 9.4, price: 9.99, image: "https://placehold.co/400x225/0a1a0a/66cc33?text=Terraria", description: "Dig, fight, explore, and build in this endlessly replayable 2D sandbox adventure.", developer: "Re-Logic", publisher: "Re-Logic", hasGuide: true, hasTutorial: true, players: "1-8", tags: ["sandbox", "action", "building", "indie"] },
  { id: "62", title: "Subnautica", slug: "subnautica", genre: ["Survival", "Exploration"], platform: ["PC", "PS5", "Xbox"], releaseYear: 2018, rating: 9.3, price: 29.99, image: "https://placehold.co/400x225/001a2e/00aaff?text=Subnautica", description: "Descend into the depths of an alien ocean world and collect resources to survive.", developer: "Unknown Worlds", publisher: "Unknown Worlds", hasGuide: true, hasTutorial: true, players: "1", tags: ["survival", "ocean", "exploration", "atmospheric"] },
  { id: "63", title: "Deep Rock Galactic", slug: "deep-rock-galactic", genre: ["FPS", "Co-op", "Roguelite"], platform: ["PC", "PS5", "Xbox"], releaseYear: 2020, rating: 9.4, price: 29.99, image: "https://placehold.co/400x225/0a0a0a/ffaa00?text=DRG", description: "Space dwarves mine alien planets in this incredibly fun cooperative shooter.", developer: "Ghost Ship Games", publisher: "Coffee Stain", hasGuide: true, hasTutorial: true, players: "1-4", tags: ["co-op", "FPS", "mining", "fun"] },
  { id: "64", title: "Vampire Survivors", slug: "vampire-survivors", genre: ["Roguelite", "Bullet Hell"], platform: ["PC", "Mobile", "Xbox", "Switch"], releaseYear: 2022, rating: 9.2, price: 4.99, image: "https://placehold.co/400x225/0a0000/cc0000?text=Vampire+Survivors", description: "A time survival game where you fight off hordes of monsters and unlock powerful build combinations.", developer: "poncle", publisher: "poncle", hasGuide: true, players: "1", tags: ["roguelite", "indie", "bullet-hell", "addictive"] },
  { id: "65", title: "Cult of the Lamb", slug: "cult-of-the-lamb", genre: ["Roguelite", "Simulation"], platform: ["PC", "PS5", "Xbox", "Switch"], releaseYear: 2022, rating: 8.8, price: 24.99, image: "https://placehold.co/400x225/1a0a0a/ff6600?text=Cult+of+Lamb", description: "Start your own cult in a land of adorable woodland creatures in this unique roguelite.", developer: "Massive Monster", publisher: "Devolver Digital", hasGuide: true, players: "1", tags: ["roguelite", "indie", "simulation", "unique"] },
  { id: "66", title: "Inscryption", slug: "inscryption", genre: ["Card Game", "Roguelite"], platform: ["PC"], releaseYear: 2021, rating: 9.1, price: 19.99, image: "https://placehold.co/400x225/0a0a0a/00cc66?text=Inscryption", description: "A dark card-based odyssey that features deckbuilding roguelite elements and psychological horror.", developer: "Daniel Mullins Games", publisher: "Devolver Digital", hasGuide: true, metacritic: 85, players: "1", tags: ["card-game", "roguelite", "horror", "unique", "indie"] },
  { id: "67", title: "Phasmophobia", slug: "phasmophobia", genre: ["Horror", "Co-op"], platform: ["PC"], releaseYear: 2020, rating: 9.0, price: 13.99, image: "https://placehold.co/400x225/0a0a0a/aaaaaa?text=Phasmophobia", description: "A 4-player online co-op psychological horror game where you hunt ghosts with paranormal equipment.", developer: "Kinetic Games", publisher: "Kinetic Games", hasGuide: true, hasTutorial: true, players: "1-4", tags: ["horror", "co-op", "ghost-hunting", "indie"] },
  { id: "68", title: "Baldur's Gate 3", slug: "bg3-2", genre: ["RPG"], platform: ["PC", "PS5"], releaseYear: 2023, rating: 9.9, price: 59.99, image: "https://placehold.co/400x225/0a0a1a/cc44ff?text=BG3", description: "An epic RPG in the tradition of Dungeons & Dragons with unprecedented depth and replayability.", developer: "Larian Studios", publisher: "Larian Studios", hasGuide: true, hasTutorial: true, metacritic: 96, players: "1-4", tags: ["RPG", "D&D", "co-op", "story"] },
  { id: "69", title: "Sifu", slug: "sifu", genre: ["Beat 'em up", "Action"], platform: ["PC", "PS5"], releaseYear: 2022, rating: 8.6, price: 39.99, image: "https://placehold.co/400x225/0a0a0a/ff6600?text=Sifu", description: "A kung-fu action game where you age each time you die and must master martial arts to survive.", developer: "Sloclap", publisher: "Sloclap", hasGuide: true, hasTutorial: true, metacritic: 80, players: "1", tags: ["martial-arts", "action", "difficult", "unique"] },
  { id: "70", title: "Tunic", slug: "tunic", genre: ["Action Adventure", "Isometric"], platform: ["PC", "PS5", "Xbox", "Switch"], releaseYear: 2022, rating: 8.8, price: 29.99, image: "https://placehold.co/400x225/0a1a0a/ffcc44?text=Tunic", description: "Explore a mysterious land as a little fox hero in this challenging and cryptic adventure.", developer: "Andrew Shouldice", publisher: "Finji", hasGuide: true, metacritic: 86, players: "1", tags: ["indie", "adventure", "mystery", "isometric"] },
  { id: "71", title: "High on Life", slug: "high-on-life", genre: ["FPS", "Comedy"], platform: ["PC", "Xbox"], releaseYear: 2022, rating: 7.5, price: 29.99, image: "https://placehold.co/400x225/0a1a0a/00ff88?text=High+on+Life", description: "A hilarious comedy FPS from Rick & Morty's creator featuring talking alien guns.", developer: "Squanch Games", publisher: "Squanch Games", hasGuide: true, players: "1", tags: ["comedy", "FPS", "sci-fi", "unique"] },
  { id: "72", title: "Trek to Yomi", slug: "trek-to-yomi", genre: ["Action", "Samurai"], platform: ["PC", "PS5", "Xbox"], releaseYear: 2022, rating: 7.8, price: 19.99, image: "https://placehold.co/400x225/0a0a0a/ffffff?text=Trek+to+Yomi", description: "A cinematic action game with black and white cinematography following a samurai's journey.", developer: "Flying Wild Hog", publisher: "Devolver Digital", hasGuide: true, players: "1", tags: ["samurai", "cinematic", "noir", "action"] },
  { id: "73", title: "Neon White", slug: "neon-white", genre: ["Action", "Speed Running"], platform: ["PC", "Switch"], releaseYear: 2022, rating: 9.1, price: 24.99, image: "https://placehold.co/400x225/0a0a0a/00f5ff?text=Neon+White", description: "A fast-paced action game about assassins competing for a permanent spot in Heaven.", developer: "Angel Matrix", publisher: "Annapurna Interactive", hasGuide: true, metacritic: 90, players: "1", tags: ["speed-running", "action", "cards", "stylish"] },
  { id: "74", title: "Citizen Sleeper", slug: "citizen-sleeper", genre: ["RPG", "Visual Novel"], platform: ["PC", "PS5", "Xbox", "Switch"], releaseYear: 2022, rating: 8.9, price: 19.99, image: "https://placehold.co/400x225/0a0a1a/00aaff?text=Citizen+Sleeper", description: "A tabletop RPG-inspired narrative game about a runaway android in a space station.", developer: "Jump Over the Age", publisher: "Fellow Traveller", hasGuide: true, metacritic: 88, players: "1", tags: ["narrative", "RPG", "sci-fi", "indie"] },
  { id: "75", title: "Loop Hero", slug: "loop-hero", genre: ["Roguelite", "Deckbuilder"], platform: ["PC"], releaseYear: 2021, rating: 8.5, price: 14.99, image: "https://placehold.co/400x225/0a0a0a/cc44ff?text=Loop+Hero", description: "Place tiles around an endless loop to empower your hero against a lich's armies.", developer: "Four Quarters", publisher: "Devolver Digital", hasGuide: true, players: "1", tags: ["roguelite", "strategy", "deckbuilder", "unique"] },
  { id: "76", title: "Norco", slug: "norco", genre: ["Point-and-Click", "Adventure"], platform: ["PC"], releaseYear: 2022, rating: 9.0, price: 14.99, image: "https://placehold.co/400x225/0a0a0a/cc6600?text=Norco", description: "A Southern Gothic sci-fi point-and-click adventure set in the industrial suburbs of Louisiana.", developer: "Geography of Robots", publisher: "Raw Fury", hasGuide: true, metacritic: 92, players: "1", tags: ["adventure", "narrative", "indie", "atmospheric"] },
  { id: "77", title: "Coromon", slug: "coromon", genre: ["Monster Tamer", "RPG"], platform: ["PC", "Mobile", "Switch"], releaseYear: 2022, rating: 8.2, price: 19.99, image: "https://placehold.co/400x225/0a1a0a/88ff44?text=Coromon", description: "A classic-inspired monster taming RPG with modern features and deep customization.", developer: "TRAGsoft", publisher: "Freedom Games", hasGuide: true, hasTutorial: true, players: "1", tags: ["monster-tamer", "RPG", "indie", "turn-based"] },
  { id: "78", title: "Venba", slug: "venba", genre: ["Narrative", "Cooking"], platform: ["PC", "PS5", "Xbox", "Switch"], releaseYear: 2023, rating: 8.6, price: 14.99, image: "https://placehold.co/400x225/1a0a00/ff8844?text=Venba", description: "A touching narrative cooking game about an Indian immigrant family in 1980s Canada.", developer: "Visai Games", publisher: "Visai Games", hasGuide: true, metacritic: 81, players: "1", tags: ["narrative", "cooking", "emotional", "indie"] },
  { id: "79", title: "Powerwash Simulator", slug: "powerwash-simulator", genre: ["Simulation", "Relaxing"], platform: ["PC", "PS5", "Xbox", "Switch"], releaseYear: 2022, rating: 8.4, price: 24.99, image: "https://placehold.co/400x225/001a2e/00aaff?text=PowerWash", description: "A satisfying simulation game where you clean dirty environments with a power washer.", developer: "FuturLab", publisher: "Square Enix", hasGuide: true, players: "1-6", tags: ["simulation", "relaxing", "satisfying", "co-op"] },
  { id: "80", title: "Planet of Lana", slug: "planet-of-lana", genre: ["Puzzle Platformer", "Adventure"], platform: ["PC", "Xbox"], releaseYear: 2023, rating: 8.5, price: 24.99, image: "https://placehold.co/400x225/001a0a/88ffaa?text=Planet+Lana", description: "A cinematic puzzle adventure with a seamless backdrop of shifting environments and wildlife.", developer: "Wishfully", publisher: "Thunderful", hasGuide: true, metacritic: 80, players: "1", tags: ["puzzle", "cinematic", "indie", "adventure"] },
  { id: "81", title: "System Shock Remake", slug: "system-shock-remake", genre: ["FPS", "Action RPG"], platform: ["PC"], releaseYear: 2023, rating: 8.0, price: 39.99, image: "https://placehold.co/400x225/0a0a0a/00cc66?text=System+Shock", description: "A complete remake of the groundbreaking 1994 original, reimagined for modern audiences.", developer: "Nightdive Studios", publisher: "Prime Matter", hasGuide: true, metacritic: 80, players: "1", tags: ["FPS", "horror", "sci-fi", "classic"] },
  { id: "82", title: "Exoprimal", slug: "exoprimal", genre: ["Action", "PvPvE"], platform: ["PC", "PS5", "Xbox"], releaseYear: 2023, rating: 7.5, price: 59.99, image: "https://placehold.co/400x225/0a0a1a/ff4400?text=Exoprimal", description: "Suit up in exosuits and fight rampaging dinosaurs with online team-based missions.", developer: "Capcom", publisher: "Capcom", newRelease: true, hasGuide: true, players: "5v5", tags: ["action", "dinosaurs", "team", "PvPvE"] },
  { id: "83", title: "Pikmin 4", slug: "pikmin-4", genre: ["Real-Time Strategy"], platform: ["Switch"], releaseYear: 2023, rating: 9.0, price: 59.99, image: "https://placehold.co/400x225/0a1a00/88ff44?text=Pikmin+4", description: "Command an army of Pikmin creatures to survive and explore in this charming Nintendo RTS.", developer: "Nintendo", publisher: "Nintendo", newRelease: true, hasGuide: true, hasTutorial: true, metacritic: 90, players: "1-2", tags: ["Nintendo", "strategy", "cute", "unique"] },
  { id: "84", title: "Xenoblade Chronicles 3", slug: "xenoblade-3", genre: ["JRPG", "Action RPG"], platform: ["Switch"], releaseYear: 2022, rating: 9.2, price: 59.99, image: "https://placehold.co/400x225/0a0a1a/88aaff?text=Xenoblade+3", description: "Two opposing nations fight in an endless war in this massive JRPG with real-time combat.", developer: "Monolith Soft", publisher: "Nintendo", hasGuide: true, hasTutorial: true, metacritic: 89, players: "1", tags: ["JRPG", "Nintendo", "epic", "anime"] },
  { id: "85", title: "Fire Emblem Engage", slug: "fire-emblem-engage", genre: ["Turn-Based Strategy", "RPG"], platform: ["Switch"], releaseYear: 2023, rating: 8.8, price: 59.99, image: "https://placehold.co/400x225/1a0a0a/cc0044?text=Fire+Emblem", description: "Command a tactical army using summonable heroes from past Fire Emblem games.", developer: "Intelligent Systems", publisher: "Nintendo", newRelease: true, hasGuide: true, hasTutorial: true, metacritic: 85, players: "1", tags: ["strategy", "Nintendo", "JRPG", "tactical"] },
  { id: "86", title: "Crisis Core: FF7 Reunion", slug: "crisis-core-reunion", genre: ["Action RPG"], platform: ["PC", "PS5", "Xbox", "Switch"], releaseYear: 2022, rating: 8.5, price: 39.99, image: "https://placehold.co/400x225/0a0a1a/0055cc?text=Crisis+Core", description: "An HD remaster of the beloved FFVII prequel following Cloud's mentor Zack Fair.", developer: "Square Enix", publisher: "Square Enix", hasGuide: true, hasTutorial: true, metacritic: 76, players: "1", tags: ["JRPG", "FF7", "prequel", "action"] },
  { id: "87", title: "Harvestella", slug: "harvestella", genre: ["RPG", "Life Sim", "Farming"], platform: ["PC", "Switch"], releaseYear: 2022, rating: 7.8, price: 59.99, image: "https://placehold.co/400x225/0a1a0a/88ff44?text=Harvestella", description: "A life simulation RPG where you farm, befriend villagers, and fight through dungeons.", developer: "Square Enix", publisher: "Square Enix", hasGuide: true, players: "1", tags: ["farming", "RPG", "life-sim", "JRPG"] },
  { id: "88", title: "Persona 5 Royal", slug: "persona-5-royal", genre: ["JRPG", "Social Sim"], platform: ["PC", "PS5", "Xbox", "Switch"], releaseYear: 2019, rating: 9.7, price: 59.99, image: "https://placehold.co/400x225/0a0000/cc0000?text=Persona+5", description: "Join the Phantom Thieves and steal the corrupt desires of adults in the best-reviewed JRPG ever.", developer: "Atlus", publisher: "Sega", hasGuide: true, hasTutorial: true, metacritic: 95, players: "1", tags: ["JRPG", "social-sim", "school", "story-rich"] },
  { id: "89", title: "Metaphor: ReFantazio", slug: "metaphor-refantazio", genre: ["JRPG"], platform: ["PC", "PS5", "Xbox"], releaseYear: 2024, rating: 9.5, price: 59.99, image: "https://placehold.co/400x225/0a0a1a/ffcc00?text=Metaphor", description: "From the creators of Persona — a fantasy political JRPG set in a magical kingdom.", developer: "Studio Zero", publisher: "Atlus/Sega", newRelease: true, trending: true, hasGuide: true, hasTutorial: true, metacritic: 94, players: "1", tags: ["JRPG", "fantasy", "story-rich", "unique"] },
  { id: "90", title: "Like a Dragon: Ishin!", slug: "like-a-dragon-ishin", genre: ["Action RPG", "Beat 'em up"], platform: ["PC", "PS5", "Xbox"], releaseYear: 2023, rating: 8.8, price: 49.99, image: "https://placehold.co/400x225/0a0000/cc0000?text=Ishin", description: "Explore feudal Japan as Sakamoto Ryoma in this epic remake of the beloved Yakuza spin-off.", developer: "Ryu Ga Gotoku Studio", publisher: "Sega", newRelease: true, hasGuide: true, hasTutorial: true, players: "1", tags: ["Japan", "action", "RPG", "story-rich"] },
  { id: "91", title: "Hogwarts Legacy (Deluxe)", slug: "hogwarts-legacy-deluxe", genre: ["Action RPG"], platform: ["PC", "PS5", "Xbox"], releaseYear: 2023, rating: 8.8, price: 69.99, image: "https://placehold.co/400x225/0a0a1a/cc44ff?text=Hogwarts+Deluxe", description: "The deluxe edition of the Harry Potter RPG with bonus cosmetic items and early access.", developer: "Avalanche Software", publisher: "Warner Bros", newRelease: true, hasGuide: true, hasTutorial: true, players: "1", tags: ["Harry Potter", "magic", "open-world", "deluxe"] },
  { id: "92", title: "Nier: Automata", slug: "nier-automata", genre: ["Action RPG", "Hack & Slash"], platform: ["PC", "PS4", "Xbox", "Switch"], releaseYear: 2017, rating: 9.3, price: 29.99, image: "https://placehold.co/400x225/0a0a0a/cccccc?text=Nier:Automata", description: "An action RPG set in a post-apocalyptic future where androids fight to reclaim Earth.", developer: "PlatinumGames", publisher: "Square Enix", hasGuide: true, hasTutorial: true, metacritic: 88, players: "1", tags: ["action", "RPG", "philosophical", "story-rich", "unique"] },
  { id: "93", title: "Tekken 8", slug: "tekken-8", genre: ["Fighting"], platform: ["PC", "PS5", "Xbox"], releaseYear: 2024, rating: 9.0, price: 69.99, image: "https://placehold.co/400x225/0a0a0a/ff4444?text=Tekken+8", description: "The king of Iron Fist Tournament returns with stunning visuals and deep fighting mechanics.", developer: "Bandai Namco", publisher: "Bandai Namco", newRelease: true, trending: true, hasGuide: true, hasTutorial: true, metacritic: 90, players: "1-2", tags: ["fighting", "competitive", "esports", "3D"] },
  { id: "94", title: "The Finals", slug: "the-finals", genre: ["FPS", "Battle Royale"], platform: ["PC", "PS5", "Xbox"], releaseYear: 2023, rating: 8.5, price: "Free", image: "https://placehold.co/400x225/0a0a0a/ffcc00?text=The+Finals", description: "A free-to-play combat entertainment show where teams compete in fully destructible arenas.", developer: "Embark Studios", publisher: "Embark Studios", newRelease: true, trending: true, hasGuide: true, hasTutorial: true, players: "3v3v3", tags: ["FPS", "free-to-play", "destruction", "team"] },
  { id: "95", title: "Skull and Bones", slug: "skull-and-bones", genre: ["Action Adventure", "Pirate"], platform: ["PC", "PS5", "Xbox"], releaseYear: 2024, rating: 6.5, price: 69.99, image: "https://placehold.co/400x225/001a2e/cc9900?text=Skull+and+Bones", description: "Build your pirate fleet and plunder the Indian Ocean in Ubisoft's naval action game.", developer: "Ubisoft Singapore", publisher: "Ubisoft", newRelease: true, hasGuide: true, hasTutorial: true, players: "1-5", tags: ["pirate", "ships", "open-world", "naval"] },
  { id: "96", title: "Robocop: Rogue City", slug: "robocop-rogue-city", genre: ["FPS", "Action"], platform: ["PC", "PS5", "Xbox"], releaseYear: 2023, rating: 8.0, price: 49.99, image: "https://placehold.co/400x225/0a0a0a/0066cc?text=RoboCop", description: "Step into the shoes of RoboCop in this action-packed FPS set in an alternate Old Detroit.", developer: "Teyon", publisher: "Nacon", newRelease: true, hasGuide: true, players: "1", tags: ["FPS", "action", "nostalgia", "movie-tie-in"] },
  { id: "97", title: "Warhammer 40K: Space Marine 2", slug: "space-marine-2", genre: ["Third-Person Shooter", "Action"], platform: ["PC", "PS5", "Xbox"], releaseYear: 2024, rating: 9.0, price: 49.99, image: "https://placehold.co/400x225/0a0a1a/0055cc?text=Space+Marine+2", description: "Unleash your power as an iconic Space Marine against the overwhelming Tyranid swarms.", developer: "Saber Interactive", publisher: "Focus Entertainment", newRelease: true, trending: true, hasGuide: true, hasTutorial: true, players: "1-6", tags: ["Warhammer", "shooter", "co-op", "action"] },
  { id: "98", title: "Black Myth: Wukong", slug: "black-myth-wukong", genre: ["Action RPG", "Souls-like"], platform: ["PC", "PS5"], releaseYear: 2024, rating: 9.5, price: 59.99, image: "https://placehold.co/400x225/0a0a0a/cc6600?text=Wukong", description: "Based on the Chinese epic Journey to the West, play as the Destined One through mythical China.", developer: "Game Science", publisher: "Game Science", newRelease: true, trending: true, featured: true, hasGuide: true, hasTutorial: true, metacritic: 82, players: "1", tags: ["action-RPG", "Chinese-mythology", "beautiful", "souls-like"] },
  { id: "99", title: "Indiana Jones and the Great Circle", slug: "indiana-jones", genre: ["Action Adventure", "FPS"], platform: ["PC", "Xbox"], releaseYear: 2024, rating: 8.8, price: 69.99, image: "https://placehold.co/400x225/0a0a0a/cc9900?text=Indiana+Jones", description: "Embark on a globe-trotting adventure as Indiana Jones in an original story set between two films.", developer: "MachineGames", publisher: "Xbox Game Studios", newRelease: true, trending: true, hasGuide: true, hasTutorial: true, players: "1", tags: ["adventure", "exploration", "action", "movie-game"] },
  { id: "100", title: "Dragon Age: The Veilguard", slug: "dragon-age-veilguard", genre: ["Action RPG"], platform: ["PC", "PS5", "Xbox"], releaseYear: 2024, rating: 8.5, price: 59.99, image: "https://placehold.co/400x225/0a0a1a/cc44ff?text=Dragon+Age+4", description: "Return to Thedas in BioWare's long-awaited epic RPG with a new cast of companions.", developer: "BioWare", publisher: "EA", newRelease: true, trending: true, hasGuide: true, hasTutorial: true, metacritic: 82, players: "1", tags: ["RPG", "fantasy", "BioWare", "epic"] },
];

export const categories = [
  { id: "action", name: "Action", icon: "⚔️", count: 28, color: "from-red-900 to-red-700" },
  { id: "rpg", name: "RPG", icon: "🧙", count: 34, color: "from-purple-900 to-purple-700" },
  { id: "fps", name: "FPS / Shooter", icon: "🎯", count: 22, color: "from-orange-900 to-orange-700" },
  { id: "strategy", name: "Strategy", icon: "♟️", count: 18, color: "from-blue-900 to-blue-700" },
  { id: "sports", name: "Sports", icon: "⚽", count: 12, color: "from-green-900 to-green-700" },
  { id: "horror", name: "Horror", icon: "👻", count: 15, color: "from-gray-900 to-gray-700" },
  { id: "indie", name: "Indie", icon: "🎮", count: 40, color: "from-pink-900 to-pink-700" },
  { id: "racing", name: "Racing", icon: "🏎️", count: 8, color: "from-yellow-900 to-yellow-700" },
  { id: "moba", name: "MOBA", icon: "🏆", count: 6, color: "from-cyan-900 to-cyan-700" },
  { id: "fighting", name: "Fighting", icon: "🥊", count: 9, color: "from-red-900 to-orange-700" },
  { id: "simulation", name: "Simulation", icon: "🌾", count: 14, color: "from-teal-900 to-teal-700" },
  { id: "free", name: "Free to Play", icon: "🆓", count: 25, color: "from-emerald-900 to-emerald-700" },
];

export const newsArticles = [
  { id: "1", title: "Elden Ring DLC 'Shadow of the Erdtree' Becomes Fastest-Selling DLC in History", slug: "elden-ring-dlc-record", category: "News", date: "2024-06-22", author: "Alex Chen", image: "https://placehold.co/800x450/1a0a3e/00f5ff?text=Elden+Ring+DLC", excerpt: "FromSoftware's massive expansion breaks all records in the first week of release.", readTime: "3 min", featured: true },
  { id: "2", title: "GTA 6 Release Date Officially Confirmed for 2025", slug: "gta6-release-date", category: "News", date: "2024-06-20", author: "Maria Santos", image: "https://placehold.co/800x450/0a1a0a/39ff14?text=GTA+VI", excerpt: "Rockstar Games finally locks in a release window for the most anticipated game of the decade.", readTime: "4 min", featured: true },
  { id: "3", title: "PlayStation 6 Specs Leaked: What to Expect", slug: "ps6-specs-leaked", category: "Hardware", date: "2024-06-18", author: "James Park", image: "https://placehold.co/800x450/0a0a1a/0066ff?text=PS6+Specs", excerpt: "Anonymous sources reveal impressive specs for Sony's next-generation gaming console.", readTime: "5 min", featured: false },
  { id: "4", title: "Nintendo Switch 2 Launches with 20+ Games at Release", slug: "switch-2-launch-lineup", category: "News", date: "2024-06-15", author: "Sarah Kim", image: "https://placehold.co/800x450/0a1a0a/ff0000?text=Switch+2", excerpt: "Nintendo reveals an impressive day-one lineup for their highly anticipated new hardware.", readTime: "6 min", featured: true },
  { id: "5", title: "Top 10 Most Anticipated Games of 2025", slug: "most-anticipated-2025", category: "Feature", date: "2024-06-12", author: "Tom Williams", image: "https://placehold.co/800x450/0a0a3e/00f5ff?text=Games+2025", excerpt: "From sequels to entirely new IPs, 2025 looks to be one of gaming's best years ever.", readTime: "8 min", featured: false },
  { id: "6", title: "Wukong: Black Myth Wins GOTY at The Game Awards", slug: "wukong-goty-award", category: "Awards", date: "2024-06-10", author: "Li Wei", image: "https://placehold.co/400x225/0a0a0a/cc6600?text=GOTY+2024", excerpt: "China's first AAA game makes history by sweeping the most prestigious gaming awards.", readTime: "4 min", featured: false },
];

export const guides = [
  { id: "1", gameId: "1", gameSlug: "elden-ring", title: "Elden Ring Complete Beginner's Guide", type: "tutorial", difficulty: "Beginner", readTime: "20 min", views: 125000 },
  { id: "2", gameId: "1", gameSlug: "elden-ring", title: "All Boss Locations and How to Beat Them", type: "guide", difficulty: "Advanced", readTime: "45 min", views: 89000 },
  { id: "3", gameId: "2", gameSlug: "cyberpunk-2077", title: "Best Cyberpunk 2077 Builds 2024", type: "guide", difficulty: "Intermediate", readTime: "25 min", views: 67000 },
  { id: "4", gameId: "11", gameSlug: "fortnite", title: "Fortnite Chapter 5 Season 2 - Complete Guide", type: "tutorial", difficulty: "Beginner", readTime: "15 min", views: 245000 },
  { id: "5", gameId: "15", gameSlug: "genshin-impact", title: "Genshin Impact Resin Guide: Don't Waste a Drop", type: "guide", difficulty: "Intermediate", readTime: "12 min", views: 156000 },
];
