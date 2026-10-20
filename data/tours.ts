export interface TourPlanDay {
  day: string;
  title?: string;
  points: string[];
}

export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  duration: string;
  distance: string;
  difficulty: "Normal" | "Moderate" | "Hard" | "Extreme";
  ageRange: string;
  region: string;
  price: string;
  priceNote: string;
  minTravelers: string;
  coverImage: string;
  galleryImages: string[];
  overview: string;
  highlights: string[];
  tourPlan: TourPlanDay[];
  includes: string[];
  excludes: string[];
  whatToBring: string[];
}

export const COMPANY_INFO = {
  name: "Guide You Ceylon",
  shortName: "GUIDE YOU CEYLON",
  tagline: "Wilderness Trekking & Camping Expeditions in Sri Lanka",
  description:
    "Sri Lanka's premier expedition company specializing in guided trekking, wilderness camping, and technical adventures across the Knuckles Mountain Range, Pekoe Trail, and Central Highlands.",
  experience: "5+ Years of Certified Expeditions",
  vision:
    "To be Sri Lanka’s most trusted guide to wilderness adventures, connecting the world to the raw beauty, culture, and soul of Ceylon through responsible trekking and camping experiences.",
  mission:
    "At Guide You Ceylon, our mission is to create safe, authentic, and unforgettable wilderness journeys across Sri Lanka. With 5 years of experience, we specialize in one-day and multi-day trekking & camping expeditions in the Knuckles, Pekoe Trail, Dry Zone, and Central Highlands. We work only with licensed guides, expert naturalists, and local service providers to deliver world-class service to travelers worldwide.",
  pillars: [
    {
      title: "Real Expeditions",
      desc: "Untouched wilderness, mountain summits, remote cardamom huts, and hidden cave camping instead of tourist crowds.",
    },
    {
      title: "Certified Guides & Safety",
      desc: "Expert naturalists, wilderness first aid, satellite communication, and full risk management protocols on every trail.",
    },
    {
      title: "100% Fully Managed",
      desc: "Private 4x4 transport, forest permits, camping gear, and authentic Sri Lankan meals lovingly prepared in the wild.",
    },
    {
      title: "Sustainable & Local",
      desc: "Direct support for indigenous village communities, leave-no-trace ethics, and conservation forest protection.",
    },
  ],
  services: [
    {
      title: "Waterfall Hunting & Trekking",
      desc: "Guided day treks to Sri Lanka's hidden cascading waterfalls, mist-shrouded pygmy forests, and pristine natural infinity pools.",
      icon: "droplets",
    },
    {
      title: "Multi-Day Wilderness Expeditions",
      desc: "2 to 3-day deep treks across UNESCO World Heritage landscapes with authentic cave camping and cardamom hut stays.",
      icon: "compass",
    },
    {
      title: "Wild Camping & Glamping",
      desc: "Summit, cave, and riverbank camping with high-grade all-weather gear, campfire meals, and stargazing.",
      icon: "tent",
    },
    {
      title: "Technical Rock & Peak Climbs",
      desc: "Challenging scrambles to legendary peaks like Yahangala, Thunhisgala, and the Knuckles Five Peaks with certified safety leads.",
      icon: "mountain",
    },
    {
      title: "Private Custom Expeditions",
      desc: "Tailored private journeys suited to your group's fitness level, schedule, and photography preferences.",
      icon: "users",
    },
    {
      title: "Certified Guide Services",
      desc: "Hire licensed English-speaking guides and naturalists for personal trail routes across Ceylon.",
      icon: "shield-check",
    },
  ],
  contact: {
    email: "guideuinfo@gmail.com",
    phone: "+94 75 574 0513",
    whatsapp: "+94755740513",
    location: "Kandy & Knuckles Mountain Range, Sri Lanka",
    officeHours: "Monday - Sunday: 7:00 AM - 9:00 PM (GMT+5:30)",
  },
};

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: "best-trail-knuckles",
    slug: "best-trail-knuckles",
    title: "Best Trail in Knuckles Mountain Range",
    shortTitle: "Knuckles 3-Day Grand Expedition",
    tagline: "Natural Cave Camping & 50-Year-Old Cardamom Hut Adventure",
    duration: "3 Days / 2 Nights",
    distance: "30 km",
    difficulty: "Hard",
    ageRange: "16+",
    region: "Knuckles Mountain Range (UNESCO Heritage)",
    price: "$175",
    priceNote: "All-inclusive per person",
    minTravelers: "Min. 1 traveler",
    coverImage: "/tours/best-trail-knuckles/img-1.webp",
    galleryImages: [
      "/tours/best-trail-knuckles/img-1.webp",
      "/tours/best-trail-knuckles/img-3.webp",
      "/tours/best-trail-knuckles/img-6.webp",
      "/tours/best-trail-knuckles/img-9.webp",
      "/tours/best-trail-knuckles/img-14.webp",
      "/tours/best-trail-knuckles/img-18.webp",
    ],
    overview:
      "Enjoy the scenic beauty of a conservation forest for 3 days with camping in a natural cave and a 50-year-old Cardamom hut. This epic 3-day adventure traverses the Knuckles Mountain Range — a UNESCO World Heritage site. Dive into untouched wilderness, chasing 6 hidden waterfalls, crossing crystal-clear streams, and soaking up the raw beauty of this natural wonderland.",
    highlights: [
      "Trek 30km through untouched cloud and pygmy forests in the Knuckles Range",
      "Night 1: Sleep in a rustic 50-year-old cardamom hut, the last remaining in Knuckles",
      "Night 2: Rare cave camping beside the roaring 70m Duwili Ella waterfall",
      "Cross 10 crystal-clear mountain streams & visit 6+ breathtaking waterfalls",
      "Swim in natural infinity pools and finish with a refreshing dip in pristine Ranamure Oya",
    ],
    tourPlan: [
      {
        day: "Day 1",
        title: "Kandy to Bambarella & 50-Year Cardamom Hut",
        points: [
          "Hotel pickup in Kandy followed by a 2-hour scenic drive to Bambarella with en-route Sri Lankan breakfast.",
          "Hike starts through Bambarella village and Lebanon Estate tea plantations (~2km).",
          "Enter Knuckles Conservation Forest through pygmy and cloud forests, spotting unique endemic flora & fauna.",
          "Stream-side lunch featuring rich local Sri Lankan cuisine shaded by ancient trees.",
          "Arrive at the rustic 50-year-old cardamom hut; gather around the firewood stove for dinner and tales of the wild.",
        ],
      },
      {
        day: "Day 2",
        title: "Waterfall Paradise & Duwili Ella Cave Camping",
        points: [
          "Breakfast at the Cardamom Hut, then trek 2 hours into the heart of the waterfall paradise.",
          "Explore 5 stunning hidden waterfalls and swim in crystal-clear natural infinity pools.",
          "Spot exotic wildlife and experience the richest biodiversity in the central highlands.",
          "Arrive at the unique natural cave beside the 70m-high waterfall — your campsite for the night.",
          "Feast on delicious campfire meals as the waterfall's roar lulls you into peaceful sleep.",
        ],
      },
      {
        day: "Day 3",
        title: "Grasslands, Ginikuru Falls & Ranamure Village",
        points: [
          "Morning breakfast and pack up for the final scenic descent.",
          "Cross two vast grasslands with breathtaking panoramic views across the Knuckles Range.",
          "Visit the top of Ginikuru Falls and hike down to peaceful Ranamure village.",
          "Cool off in the crystal-clear Ranamure Oya stream and savor a traditional village lunch by lush paddy fields.",
          "Depart on a scenic drive back to Kandy or Dambulla.",
        ],
      },
    ],
    includes: [
      "Private guided tour with certified English-fluent naturalist guide",
      "All round-trip transport (hotel pickup and drop-off in Kandy/Dambulla)",
      "8 main meals, freshly brewed Ceylon tea & coffee",
      "High-grade all-weather camping gear, sleeping bags & mats",
      "Knuckles Conservation Forest entrance tickets & permits",
      "Full wilderness first-aid kit & safety protocols",
    ],
    excludes: [
      "Personal expenses & tipping",
      "Sanitary items",
      "Alcoholic beverages",
    ],
    whatToBring: [
      "Comfortable trekking shoes / trail runners",
      "Comfortable backpack (30-40L)",
      "Long-sleeve trekking pants and quick-dry top",
      "Rain jacket / poncho & sunscreen",
      "Power bank for mobile/camera devices",
      "Change of warm clothes for cold mountain nights",
      "Slippers / sandals for campsite",
    ],
  },
  {
    id: "dumbara-waterfall-camping",
    slug: "dumbara-waterfall-camping",
    title: "Dumbara Waterfall & Camping",
    shortTitle: "Dumbara Waterfall & Remote Village",
    tagline: "Explore Walpolamulla — The Smallest Isolated Village in South Asia",
    duration: "2 Days / 1 Night",
    distance: "24 km",
    difficulty: "Moderate",
    ageRange: "16+",
    region: "Knuckles Mountain Range",
    price: "$150",
    priceNote: "All-inclusive per person",
    minTravelers: "Min. 1 traveler",
    coverImage: "/tours/dumbara-waterfall-camping/img-1.webp",
    galleryImages: [
      "/tours/dumbara-waterfall-camping/img-1.webp",
      "/tours/dumbara-waterfall-camping/img-3.webp",
      "/tours/dumbara-waterfall-camping/img-5.webp",
      "/tours/dumbara-waterfall-camping/img-8.webp",
      "/tours/dumbara-waterfall-camping/img-12.webp",
    ],
    overview:
      "Dumbara Waterfall is the crown jewel of this 2-day trekking adventure through the Knuckles Mountain Range. The journey also takes you to Walpolamulla, known as the smallest village in South Asia, isolated deep in the forest without roads. Explore unspoiled wilderness and discover hidden cascades and natural rock pools.",
    highlights: [
      "Visit Walpolamulla, the smallest isolated village in South Asia",
      "Explore both Dumbara Waterfall and Kaludiya Pokuna hidden falls",
      "Swim in serene natural mountain infinity pools",
      "Camp overnight beside the waterfall under a sky ablaze with stars",
      "Authentic village food and heartwarming local mountain hospitality",
    ],
    tourPlan: [
      {
        day: "Day 1",
        title: "Atanwala to Dumbara Waterfall & Walpolamulla",
        points: [
          "Scenic morning drive from Kandy to Atanwala village (~1 hour).",
          "Begin the 12km trek through dense tropical greenery and mist-clad ridges.",
          "Visit Dumbara Waterfall, Kaludiya Pokuna, and secluded natural plunge pools.",
          "Hike via Malkirigoda Gap to Walpolamulla village and enjoy village-style parcelled lunch.",
          "Set up campsite beside the waterfall and enjoy an unforgettable evening under the stars.",
        ],
      },
      {
        day: "Day 2",
        title: "Waterfall Breakfast & Scenic Return",
        points: [
          "Enjoy breakfast cooked fresh at the waterfall side surrounded by birdsong.",
          "Pack up and resume the trail through valleys and waterways.",
          "Stop at a rustic village food shop to taste authentic Sri Lankan specialties.",
          "Conclude the hike and transfer comfortably back to Kandy or Dambulla.",
        ],
      },
    ],
    includes: [
      "Specialized mountain guide & local tracker",
      "Private transport with hotel pickup and drop-off",
      "4 main meals + 2 tea/snack stops",
      "Complete camping gear (tents, mats, lighting)",
      "Conservation entrance tickets & community fees",
      "Basic first-aid kit",
    ],
    excludes: [
      "Personal expenses & gratuities",
      "Sanitary items",
    ],
    whatToBring: [
      "Hiking boots / sturdy footwear",
      "Rain gear & sun protection",
      "Swimwear & quick-dry towel",
      "Warm evening fleece",
      "Power bank",
    ],
  },
  {
    id: "knuckles-5-peaks-trek",
    slug: "knuckles-5-peaks-trek",
    title: "Knuckles 5 Peaks Trek",
    shortTitle: "Knuckles 5 Peaks 1-Day Challenge",
    tagline: "The Ultimate 1-Day Hike to the 1,864m Clenched Fist Summits",
    duration: "1 Day (Full Day)",
    distance: "12 km",
    difficulty: "Normal",
    ageRange: "16+",
    region: "Knuckles Mountain Range",
    price: "$75",
    priceNote: "All-inclusive per person",
    minTravelers: "Min. 1 traveler",
    coverImage: "/tours/knuckles-5-peaks-trek/img-1.webp",
    galleryImages: [
      "/tours/knuckles-5-peaks-trek/img-1.webp",
      "/tours/knuckles-5-peaks-trek/img-2.webp",
      "/tours/knuckles-5-peaks-trek/img-3.webp",
      "/tours/knuckles-5-peaks-trek/img-5.webp",
      "/tours/knuckles-5-peaks-trek/img-7.webp",
    ],
    overview:
      "The Knuckles 5 Peaks Trail is the signature mountain trek of Ceylon. Experience rich biodiversity, dramatic scenery, and summit all 5 peaks of the iconic clenched-fist shaped range. Reaching the second highest peak in Knuckles valley at 1,864m rewards you with panoramic 360° vistas of cloud forests, waterfalls, and drifting mist.",
    highlights: [
      "Summit the 5 famous peaks of the Knuckles Range reaching up to 1,864m",
      "Trek along the legendary Leopard Trail through evergreen cloud forests",
      "Chill and refresh at Knuckles Falls",
      "Authentic hearty Sri Lankan breakfast (string hoppers / pittu / roti) and summit lunch",
      "Cool off in a crystal mountain stream at the end of the hike",
    ],
    tourPlan: [
      {
        day: "Full Day",
        title: "Bambarella, Leopard Trail & 5 Peaks Summit",
        points: [
          "6:00 AM pickup from Kandy for a 2-hour scenic mountain drive to Bambarella.",
          "Fuel up with a hot Sri Lankan village breakfast with fresh tea.",
          "Begin the 12km Leopard Trail hike with your certified guide.",
          "Visit Knuckles Falls after 2km to rest and soak in the tranquil vibes.",
          "Tackle the 5 peaks, reaching the 1,864m lookout for stunning photo ops.",
          "Enjoy a packed rice & curry lunch on the summit ridge.",
          "Descend to Bambarella village, take a dip in a mountain river, and return to Kandy.",
        ],
      },
    ],
    includes: [
      "Private tour with English-fluent certified guide",
      "Round-trip private transport from Kandy",
      "2 main meals (breakfast & summit lunch) + evening snacks",
      "Entrance permits and fees",
      "First aid support",
    ],
    excludes: ["Personal expenses", "Tips"],
    whatToBring: [
      "Trekking shoes with good grip",
      "Comfortable backpack (15-20L)",
      "Raincoat or lightweight windbreaker",
      "Sun hat, sunglasses & sunscreen",
      "Camera or phone for breathtaking ridge shots",
    ],
  },
  {
    id: "kotaganga-5-peaks-cabana",
    slug: "kotaganga-5-peaks-cabana",
    title: "Kotaganga to 5 Peaks Cabana Tour",
    shortTitle: "Kotaganga Waterfalls & Wilderness Cabana",
    tagline: "Waterfalls, 5 Peaks & Cozy Mountain Cabana Stay",
    duration: "2 Days / 1 Night",
    distance: "24 km",
    difficulty: "Moderate",
    ageRange: "16+",
    region: "Knuckles Mountain Range",
    price: "$150",
    priceNote: "All-inclusive per person",
    minTravelers: "Min. 1 traveler",
    coverImage: "/tours/kotaganga-5-peaks-cabana/img-1.webp",
    galleryImages: [
      "/tours/kotaganga-5-peaks-cabana/img-1.webp",
      "/tours/kotaganga-5-peaks-cabana/img-3.webp",
      "/tours/kotaganga-5-peaks-cabana/img-6.webp",
      "/tours/kotaganga-5-peaks-cabana/img-9.webp",
      "/tours/kotaganga-5-peaks-cabana/img-12.webp",
    ],
    overview:
      "Join us for a 2-day trekking adventure in the Knuckles Range, starting at the breathtaking Kotaganga waterfall chain. Explore lush forests, climb alongside five majestic cascades, and spend a peaceful night in a cozy eco-cabana surrounded by nature. On day two, conquer the Knuckles 5 peaks.",
    highlights: [
      "Hike alongside the cascading Kotaganga waterfall chain",
      "Overnight stay in a cozy mountain cabana with hot meals in Thangappuwa",
      "Conquer the iconic Knuckles Five Peaks with sweeping horizon views",
      "Explore the high-altitude Kotaganga Plains grasslands",
      "Experience warm local mountain hospitality and authentic home-style cuisine",
    ],
    tourPlan: [
      {
        day: "Day 1",
        title: "Kotaganga Falls to Thangappuwa Cabana",
        points: [
          "Scenic 1-hour drive from Kandy to Kotaganga Estate; breakfast en-route.",
          "Hike 2km along the cascading Kotaganga waterfall chain (approx. 3-4 hours).",
          "Discover the untouched beauty of Kotaganga Plains grassland.",
          "Continue through emerald tea estates to Thangappuwa mountain village.",
          "Check in to cozy mountain cabana, relax by the mountainside, and enjoy dinner.",
        ],
      },
      {
        day: "Day 2",
        title: "Five Peaks Trek & Summit Conquest",
        points: [
          "Start early with a wholesome breakfast at the cabana.",
          "Embark on a 9km trek to the Knuckles Five Peaks with panoramic valley vistas.",
          "Visit Knuckles waterfall and enjoy a scenic village-style picnic lunch.",
          "Stand atop the summit and take in the magnificent scenery.",
          "Descend to village and return to Kandy in the evening.",
        ],
      },
    ],
    includes: [
      "Private tour with specialized guide",
      "Eco-cabana accommodation (half board)",
      "Private transport (hotel pick-up and drop-off)",
      "All meals (breakfast, lunch, dinner, snacks)",
      "Forest conservation entrance permits",
      "Basic first-aid",
    ],
    excludes: ["Personal expenses", "Additional drinks & tips"],
    whatToBring: [
      "Comfortable trail shoes",
      "Backpack & rain protection",
      "Warm clothes for the cabana evening",
      "Camera & power bank",
    ],
  },
  {
    id: "kotaganga-waterfall-chain",
    slug: "kotaganga-waterfall-chain",
    title: "Kotaganga Waterfall Chain Expedition",
    shortTitle: "7 Majestic Waterfalls Expedition",
    tagline: "Discover 7 Hidden Waterfalls Over 100ft High in 1 Day",
    duration: "1 Day (Full Day)",
    distance: "10 km",
    difficulty: "Moderate",
    ageRange: "16+",
    region: "Knuckles Mountain Range",
    price: "$150",
    priceNote: "All-inclusive per person",
    minTravelers: "Min. 1 traveler",
    coverImage: "/tours/kotaganga-waterfall-chain/img-1.webp",
    galleryImages: [
      "/tours/kotaganga-waterfall-chain/img-1.webp",
      "/tours/kotaganga-waterfall-chain/img-2.webp",
      "/tours/kotaganga-waterfall-chain/img-4.webp",
      "/tours/kotaganga-waterfall-chain/img-6.webp",
      "/tours/kotaganga-waterfall-chain/img-7.webp",
    ],
    overview:
      "Embark on a thrilling day trek to the Kotaganga Waterfall chain, where 7 majestic waterfalls, each over 100ft high, cascade in harmony. Traverse lush tea gardens, mist-shrouded forests, and winding jungle paths. Spot exotic endemic wildlife like the Horned Lizard and Sambar Deer.",
    highlights: [
      "Discover a dramatic sequence of 7 roaring waterfalls over 100ft each",
      "Walk through high-country tea estates and UNESCO Conservation forest",
      "Explore Kotaganga plain with panoramic mountain vistas",
      "Spot endemic fauna including the Kangaroo Lizard and Horned Lizard",
      "Enjoy lunch right beside a pristine waterfall pool",
    ],
    tourPlan: [
      {
        day: "Full Day",
        title: "7 Waterfalls Trail & Mountain Summit",
        points: [
          "6:30 AM pickup from Kandy, heading to Thangappuwa village with breakfast on the way.",
          "Hike through lush tea fields to the threshold of the UNESCO Conservation Forest.",
          "Explore misty cloud forest, navigating stream crossings and jungle trails.",
          "Witness the 7 consecutive Kotaganga waterfalls cascading through rock gorges.",
          "Enjoy a leisurely packed lunch beside a gentle waterfall spray.",
          "Climb to a mountain vantage point for panoramic views before returning to Kandy.",
        ],
      },
    ],
    includes: [
      "Private tour with expert English-fluent guide",
      "Round-trip private transport from Kandy",
      "2 main meals & afternoon refreshments",
      "Entrance permits & safety gear",
      "First aid kit",
    ],
    excludes: ["Personal expenses", "Tips"],
    whatToBring: [
      "Sturdy shoes with good wet traction",
      "Lightweight daypack & rain gear",
      "Insect / leech socks (provided if needed)",
      "Swimwear if you wish to swim in designated pools",
      "Sun protection & camera",
    ],
  },
  {
    id: "yahangala-legendary-hike",
    slug: "yahangala-legendary-hike",
    title: "Legendary Hike in Knuckles - Yahangala",
    shortTitle: "Yahangala Bed Rock Legend",
    tagline: "The Ancient Resting Place of King Ravana & Wild Elephant Plains",
    duration: "1 Day (Full Day)",
    distance: "10 km",
    difficulty: "Extreme",
    ageRange: "16+",
    region: "Knuckles Dry Zone & Central Highlands",
    price: "$75",
    priceNote: "All-inclusive per person",
    minTravelers: "Min. 1 traveler",
    coverImage: "/tours/yahangala-legendary-hike/img-1.webp",
    galleryImages: [
      "/tours/yahangala-legendary-hike/img-1.webp",
      "/tours/yahangala-legendary-hike/img-3.webp",
      "/tours/yahangala-legendary-hike/img-6.webp",
      "/tours/yahangala-legendary-hike/img-9.webp",
      "/tours/yahangala-legendary-hike/img-12.webp",
      "/tours/yahangala-legendary-hike/img-15.webp",
    ],
    overview:
      "Trek to Yahangala ('Bed Rock'), a colossal monolith steeped in Sri Lankan legend where King Ravana is said to rest. This demanding expedition offers breathtaking 360° views of the Knuckles Range, Velangolla Pathana plain, and the Mahaweli River, where wild elephants can often be spotted roaming below.",
    highlights: [
      "Trek through the unique, untouched Knuckles dry-zone ecosystem",
      "Scale the dramatic rock fortress of Yahangala with sheer cliffs",
      "Spot wild elephants roaming freely across the Welangolla plains from above",
      "360-degree panoramic views of Mahaweli River and Eastern Province peaks",
      "Learn the ancient folklore and mythology surrounding King Ravana",
    ],
    tourPlan: [
      {
        day: "Full Day",
        title: "Kalugala Village, Welangolla Plain & Yahangala Summit",
        points: [
          "5:30 AM early pickup from your hotel in Kandy; traditional breakfast en-route.",
          "Arrive at Kalugala village, one of the most secluded and ancient rural settlements in Sri Lanka.",
          "Hike 2km across the stunning Welangolla savanna plain.",
          "Tackle the steep, exhilarating ascent of Yahangala rock monolith.",
          "Reach the summit for jaw-dropping views of Mahaweli river basin and roaming elephants.",
          "Enjoy lunch on top of the mountain surrounded by cool mountain breezes.",
          "Descend to Kalugala village for warm evening tea and transfer back to Kandy.",
        ],
      },
    ],
    includes: [
      "Private tour with experienced wilderness guide",
      "Round-trip private transport from Kandy",
      "Authentic breakfast, picnic lunch & village tea",
      "Entrance permits and wildlife zone permissions",
      "First aid support",
    ],
    excludes: ["Personal expenses", "Tips"],
    whatToBring: [
      "Sturdy hiking boots with strong ankle support",
      "Backpack with minimum 2L water capacity",
      "Sun protection (hat, sunglasses, sunscreen)",
      "Windbreaker / light rain jacket",
      "Binoculars for wildlife spotting",
    ],
  },
  {
    id: "thunhisgala-kmp-tour",
    slug: "thunhisgala-kmp-tour",
    title: "Thunhisgala & KMP 2 Days Tour",
    shortTitle: "Thunhisgala Summit & Historic KMP Hut",
    tagline: "Climb Thunhisgala & Camp in a Historic 50-Year Cardamom Estate",
    duration: "2 Days / 1 Night",
    distance: "24 km",
    difficulty: "Moderate",
    ageRange: "16+",
    region: "Knuckles Mountain Range",
    price: "$200",
    priceNote: "All-inclusive per person",
    minTravelers: "Min. 1 traveler",
    coverImage: "/tours/thunhisgala-kmp-tour/img-1.webp",
    galleryImages: [
      "/tours/thunhisgala-kmp-tour/img-1.webp",
      "/tours/thunhisgala-kmp-tour/img-4.webp",
      "/tours/thunhisgala-kmp-tour/img-7.webp",
      "/tours/thunhisgala-kmp-tour/img-11.webp",
      "/tours/thunhisgala-kmp-tour/img-16.webp",
      "/tours/thunhisgala-kmp-tour/img-20.webp",
    ],
    overview:
      "The Thunhisgala trail is one of the most storied routes in Knuckles. Trek through pygmy cloud forests, explore abandoned cardamom plantations, and spend a night in the historic 50-year-old KMP cardamom hut. Ascend the commanding peak of Thunhisgala for peerless wilderness views.",
    highlights: [
      "Climb the iconic Thunhisgala Mountain with panoramic valley views",
      "Explore historic abandoned cardamom estates and Alahena hut",
      "Camp overnight in the famous 50-year-old KMP cardamom hut deep in the forest",
      "Trek through high-elevation pygmy cloud forests & discover secret waterfalls",
      "Savor authentic Sri Lankan firewood-cooked meals in the wild",
    ],
    tourPlan: [
      {
        day: "Day 1",
        title: "Lebanon Estate, Rathnagiriya & Thunhisgala Ascent",
        points: [
          "2-hour morning drive from Kandy to Bambarella with hearty Sri Lankan breakfast.",
          "Hike through scenic Lebanon Estate tea plantations (~12km / 5-6 hours).",
          "Pass Rathnagiriya peak to chill and soak in tranquil mountain atmosphere.",
          "Enjoy packed rice & curry lunch en-route.",
          "Arrive at KMP hut, drop bags, and make the afternoon climb up Thunhisgala Mountain.",
          "Return to KMP hut for dinner by the firewood stove.",
        ],
      },
      {
        day: "Day 2",
        title: "Alahena Cardamom Estate & Waterfall Descents",
        points: [
          "Wake up to mountain mist, morning tea, and freshly cooked breakfast.",
          "Explore the abandoned Alahena cardamom estate with sweeping views of Thunhisgala.",
          "Pack bags and trek through lush forest, discovering hidden cascading waterfalls.",
          "Enjoy a scenic lunch beside a magnificent waterfall.",
          "Arrive back at the village in the afternoon and transfer to Kandy.",
        ],
      },
    ],
    includes: [
      "Private guided tour with expert naturalist guide",
      "Round-trip private transport from Kandy",
      "4 main meals + snack packs and Ceylon tea/coffee",
      "Camping gear and overnight accommodation in KMP hut",
      "Entrance permits & conservation passes",
      "Wilderness first-aid kit",
    ],
    excludes: ["Personal expenses", "Tips"],
    whatToBring: [
      "Comfortable trekking shoes",
      "Comfortable backpack",
      "Long trekking pants and top",
      "Rain gear & sunscreen",
      "Warm night clothes",
      "Power bank & camera",
    ],
  },
];

