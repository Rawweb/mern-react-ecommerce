// src/data/posts.js
export const posts = [
  {
    id: 1,
    slug: "decorate-like-a-pro",
    title: "7 ways to decor your home like a professional",
    date: "2023-10-16",
    readTime: 6,
    category: "Interior",
    image: "https://picsum.photos/800/600?random=101",
    excerpt:
      "Quick wins and pro tips to take your space from fine to fantastic without blowing the budget.",
    content: [
      "Start with a mood board to set your palette and textures before you buy anything.",
      "Layer lighting: ambient, task, and accent. It’s the fastest way to make a room feel designed.",
      "Edit ruthlessly—negative space is a design element, too."
    ],
    tags: ["Design", "Tips", "Home"],
    author: { name: "Sofia Havertz", avatar: "https://i.pravatar.cc/80?img=11" },
    gallery: ["https://picsum.photos/800/600?random=111", "https://picsum.photos/800/600?random=112"]
  },
  {
    id: 2,
    slug: "kitchen-organization-ideas",
    title: "Inside a beautiful kitchen organization",
    date: "2023-10-16",
    readTime: 5,
    category: "Kitchen",
    image: "https://picsum.photos/800/600?random=102",
    excerpt:
      "Drawer systems, decanting, and a layout that actually works Monday through Friday.",
    content: [
      "Zone your kitchen by task: prep, cook, clean, store.",
      "Use shallow bins in deep drawers to prevent the ‘black hole’ effect."
    ],
    tags: ["Organization", "Kitchen"],
    author: { name: "Nicolas Jensen", avatar: "https://i.pravatar.cc/80?img=15" },
    gallery: ["https://picsum.photos/800/600?random=122"]
  },
  {
    id: 3,
    slug: "kids-bedroom-decor",
    title: "Decor your bedroom for your children",
    date: "2023-10-16",
    readTime: 4,
    category: "Bedroom",
    image: "https://picsum.photos/800/600?random=103",
    excerpt:
      "Playful, safe, and easy to clean—three rules for a room they’ll love.",
    content: [
      "Choose wipeable paint finishes and low-VOC materials.",
      "Build in toy rotation to keep clutter down and curiosity up."
    ],
    tags: ["Kids", "Bedroom"],
    author: { name: "Emma Watson", avatar: "https://i.pravatar.cc/80?img=1" },
    gallery: []
  },
  // 6 more posts ↓
  {
    id: 4,
    slug: "cozy-living-room-ideas",
    title: "Modern living rooms that still feel cozy",
    date: "2023-10-20",
    readTime: 7,
    category: "Living Room",
    image: "https://picsum.photos/800/600?random=104",
    excerpt: "Textiles, symmetry, and a few plants—done.",
    content: [
      "Balance sleek furniture with chunky knits and soft rugs.",
      "Greenery adds life; vary heights for depth."
    ],
    tags: ["Living Room", "Cozy"],
    author: { name: "Ava Li", avatar: "https://i.pravatar.cc/80?img=5" },
    gallery: ["https://picsum.photos/800/600?random=124"]
  },
  {
    id: 5,
    slug: "scandi-bedroom-refresh",
    title: "A Scandinavian bedroom refresh in a weekend",
    date: "2024-01-08",
    readTime: 5,
    category: "Bedroom",
    image: "https://picsum.photos/800/600?random=105",
    excerpt: "Light woods, linen layers, and zero visual noise.",
    content: [
      "Neutral palette doesn’t mean boring—play with texture.",
      "Hide cable chaos; minimalism needs clean lines."
    ],
    tags: ["Scandi", "Minimal"],
    author: { name: "Lukas Meyer", avatar: "https://i.pravatar.cc/80?img=52" },
    gallery: []
  },
  {
    id: 6,
    slug: "bathroom-small-space",
    title: "Small bathroom, big impact",
    date: "2024-02-10",
    readTime: 4,
    category: "Bathroom",
    image: "https://picsum.photos/800/600?random=106",
    excerpt: "Storage tricks and finishes that make it feel luxe.",
    content: [
      "Large-format tiles visually expand the room.",
      "Niche shelves beat suction caddies every time."
    ],
    tags: ["Bathroom", "Small Space"],
    author: { name: "Priya Patel", avatar: "https://i.pravatar.cc/80?img=32" },
    gallery: ["https://picsum.photos/800/600?random=126"]
  },
  {
    id: 7,
    slug: "dining-room-family-friendly",
    title: "Family-friendly dining rooms that don’t look childish",
    date: "2024-03-05",
    readTime: 6,
    category: "Dining",
    image: "https://picsum.photos/800/600?random=107",
    excerpt: "Performance fabrics + rounded edges = fewer regrets.",
    content: [
      "Choose chairs with removable, washable covers.",
      "Round tables keep traffic moving in tight rooms."
    ],
    tags: ["Dining", "Family"],
    author: { name: "Marco Rossi", avatar: "https://i.pravatar.cc/80?img=18" },
    gallery: []
  },
  {
    id: 8,
    slug: "home-office-ideas",
    title: "Home office ideas that actually boost focus",
    date: "2024-05-14",
    readTime: 7,
    category: "Office",
    image: "https://picsum.photos/800/600?random=108",
    excerpt: "Light placement, cable management, and micro-breaks.",
    content: [
      "Face your desk 90° to a window to avoid glare.",
      "Use a single under-desk raceway for tidy cables."
    ],
    tags: ["Office", "Productivity"],
    author: { name: "Dana Park", avatar: "https://i.pravatar.cc/80?img=65" },
    gallery: ["https://picsum.photos/800/600?random=128"]
  },
  {
    id: 9,
    slug: "outdoor-patio-refresh",
    title: "Outdoor patio refresh before summer",
    date: "2024-06-02",
    readTime: 5,
    category: "Outdoor",
    image: "https://picsum.photos/800/600?random=109",
    excerpt: "Shade, seating, and string lights—instant vibes.",
    content: [
      "Zonify for dining vs. lounging.",
      "Solar fixtures are way better than they used to be."
    ],
    tags: ["Outdoor", "Summer"],
    author: { name: "Ben Carter", avatar: "https://i.pravatar.cc/80?img=21" },
    gallery: []
  }
];

// helpers
export const getPostBySlug = (slug) => posts.find(p => p.slug === slug);
export const getPrevNext = (slug) => {
  const idx = posts.findIndex(p => p.slug === slug);
  return {
    prev: idx > 0 ? posts[idx - 1] : null,
    next: idx < posts.length - 1 ? posts[idx + 1] : null
  };
};
export const getRelated = (post, limit = 3) =>
  posts.filter(p => p.category === post.category && p.slug !== post.slug).slice(0, limit);
