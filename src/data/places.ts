export interface Place {
  id: number;
  name: string;
  location: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

export const places: Place[] = [
  {
    id: 1,
    name: "Stockholm Old Town",
    location: "Stockholm",
    description:
      "Gamla Stan is one of the best preserved medieval city centres in Europe, with cobblestone streets, colorful 17th-century buildings, and the Royal Palace. Wander through narrow alleys and discover hidden courtyards.",
    imageUrl:
      "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=1200&q=80",
    tags: ["History", "Architecture", "City"],
  },
  {
    id: 2,
    name: "Abisko National Park",
    location: "Lapland",
    description:
      "One of the best places in the world to witness the Northern Lights, Abisko sits above the Arctic Circle. Its unique microclimate keeps skies clear while the surrounding mountains offer breathtaking hiking.",
    imageUrl:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&q=80",
    tags: ["Nature", "Northern Lights", "Hiking"],
  },
  {
    id: 3,
    name: "Visby",
    location: "Gotland",
    description:
      "A UNESCO World Heritage city surrounded by 13th-century limestone walls. Visby blossoms each summer with medieval festivals, rose gardens, and Gothic church ruins dotting the cobblestone streets.",
    imageUrl:
      "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=1200&q=80",
    tags: ["UNESCO", "Medieval", "Island"],
  },
  {
    id: 4,
    name: "Icehotel",
    location: "Jukkasjärvi",
    description:
      "The world's first ice hotel, rebuilt entirely from scratch each winter using ice from the Torne River. Each room is a unique art installation sculpted by artists from around the globe.",
    imageUrl:
      "https://images.unsplash.com/photo-1551524164-687a55dd1126?w=1200&q=80",
    tags: ["Unique", "Winter", "Art"],
  },
  {
    id: 5,
    name: "Kungsleden Trail",
    location: "Swedish Lapland",
    description:
      "The 'King's Trail' stretches 440 km through some of Sweden's most pristine wilderness, passing Sweden's highest peak Kebnekaise, vast tundra, and untouched mountain lakes.",
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    tags: ["Hiking", "Nature", "Adventure"],
  },
  {
    id: 6,
    name: "Gothenburg Archipelago",
    location: "Gothenburg",
    description:
      "A stunning network of over 8,000 islands stretching along the west coast. Kayak between rocky islets, feast on freshly caught shellfish, and enjoy quintessential Swedish summer life.",
    imageUrl:
      "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=1200&q=80",
    tags: ["Islands", "Seafood", "Summer"],
  },
  {
    id: 7,
    name: "Dalarna",
    location: "Central Sweden",
    description:
      "The heartland of Swedish culture, famous for the iconic Dala horse, Midsummer celebrations, and peaceful red-painted farmhouses reflected in mirrored lakes surrounded by birch forests.",
    imageUrl:
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&q=80",
    tags: ["Culture", "Nature", "Traditions"],
  },
  {
    id: 8,
    name: "Höga Kusten",
    location: "High Coast",
    description:
      "A UNESCO World Heritage site where dramatic cliffs plunge into the Baltic Sea. The region has the world's highest measured post-glacial rebound — the land is still rising 8 mm per year.",
    imageUrl:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
    tags: ["UNESCO", "Coastal", "Geology"],
  },
];
