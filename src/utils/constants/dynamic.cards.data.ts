export interface HomeCarditems {
  title: string;
  text: string;
}

export const homeCarditems: HomeCarditems[] = [
  {
    title: "card title 1",
    text: "card text to be here",
  },
  {
    title: "card title 2",
    text: "card text to be here some more is here ",
  },
  {
    title: "card title 3",
    text: "card text to be here even more is here dont worry",
  },
  {
    title: "card title 4",
    text: "card text to be here this is the last card in case you didn't notice",
  },
];

export interface NavItems {
  title: string;
  url: string;
}

export const navItems: NavItems[] = [
  {
    title: "Products",
    url: "/",
  },
  {
    title: "Solutions",
    url: "/",
  },
  {
    title: "Partners",
    url: "/",
  },
  {
    title: "Company",
    url: "/",
  },
];

export interface FactCardItems {
  title: string;
  text: string;
  imgUrl: string;
}

export const factCardItems: FactCardItems[] = [
  {
    title: "Security",
    text: "High security gate a daroan ase",
    imgUrl: "/asset/securityImage/1_ISO-IEC-27001_x3_pngwebp-1.webp",
  },
  {
    title: "Companience",
    text: "high class companience dorle kau bacbe na ",
    imgUrl: "/asset/securityImage/2_gaming_labs_certified_x3.webp",
  },
  {
    title: "Information Security",
    text: "High security we have our own guptochor",
    imgUrl: "/asset/securityImage/3_cloudflare_x3-300x121-1.webp",
  },
];

export interface AwardCardItem {
  text: string;
  imgUrl: string;
}

export const awardCardItems: AwardCardItem[] = [
  {
    imgUrl: "/asset/affpapa-igaming-awards-logo-1-1.webp",
    text: "Socially Responsible Initiative of the Year (2024)",
  },
  {
    imgUrl: "/asset/AGA-Logo-2024-04-1-1.webp",
    text: "Aggregator of the Year (2024)",
  },
  {
    imgUrl: "/asset/COMBINED-logo-768x614-1.webp",
    text: "Software Supplier (2024)",
  },
  {
    imgUrl: "/asset/EiGE-Awards-Square-3-1-5.webp",
    text: "Best Customer Service (2023)",
  },
  {
    imgUrl: "/asset/SiGMA_AFRICA_AWARDS_GOLD_BLACK_BG_RGB-1-1.webp",
    text: "Aggregator Platform of the year (2022)",
  },
];

export interface ProductCardItems {
  text: string;
  imgUrl: string;
  title: string;
  bgcolor: string;
  points: Array<{ point: string }>;
}

export const productCardItems: ProductCardItems[] = [
  {
    title: "Game Aggregator",
    text: "A one-stop solution for all casino game content needs. Our portfolio brings together more than 280 casino game studios with over 27,800 mobile-friendly games via a single API integration.",

    imgUrl: "/asset/productImage/game-aggregator_x3_pngwebp.webp",
    bgcolor: "bg-gradient-to-t from-amber-600 to-amber-500",
    points: [
      { point: "RNG and live dealer games" },
      { point: "One time API integration" },
      { point: "Client back office" },
      { point: "Thousands of casino games" },
    ],
  },
  {
    title: "Game Aggregator",
    text: "A one-stop solution for all casino game content needs. Our portfolio brings together more than 280 casino game studios with over 27,800 mobile-friendly games via a single API integration.",

    imgUrl: "/asset/productImage/affilka_x3_pngwebp.webp",
    bgcolor: "bg-gradient-to-t from-violet-600 to-violet-500",

    points: [
      { point: "RNG and live dealer games" },
      { point: "One time API integration" },
      { point: "Client back office" },
      { point: "Thousands of casino games" },
    ],
  },
  {
    title: "Game Aggregator",
    text: "A one-stop solution for all casino game content needs. Our portfolio brings together more than 280 casino game studios with over 27,800 mobile-friendly games via a single API integration.",

    imgUrl: "/asset/productImage/casino-platform_x3_pngwebp-2.webp",
    bgcolor: "bg-gradient-to-t from-blue-600 to-blue-500",

    points: [
      { point: "RNG and live dealer games" },
      { point: "One time API integration" },
      { point: "Client back office" },
      { point: "Thousands of casino games" },
    ],
  },
  {
    title: "Game Aggregator",
    text: "A one-stop solution for all casino game content needs. Our portfolio brings together more than 280 casino game studios with over 27,800 mobile-friendly games via a single API integration.",

    imgUrl: "/asset/productImage/affilka_x3_pngwebp.webp",
    bgcolor: "bg-gradient-to-t from-violet-600 to-violet-500",

    points: [
      { point: "RNG and live dealer games" },
      { point: "One time API integration" },
      { point: "Client back office" },
      { point: "Thousands of casino games" },
    ],
  },
  {
    title: "Game Aggregator",
    text: "A one-stop solution for all casino game content needs. Our portfolio brings together more than 280 casino game studios with over 27,800 mobile-friendly games via a single API integration.",

    imgUrl: "/asset/productImage/jackpot-aggregator_x3_pngwebp-2.webp",
    bgcolor: "bg-gradient-to-t from-green-600 to-green-500",

    points: [
      { point: "RNG and live dealer games" },
      { point: "One time API integration" },
      { point: "Client back office" },
      { point: "Thousands of casino games" },
    ],
  },
  {
    title: "Game Aggregator",
    text: "A one-stop solution for all casino game content needs. Our portfolio brings together more than 280 casino game studios with over 27,800 mobile-friendly games via a single API integration.",

    imgUrl: "/asset/productImage/affilka_x3_pngwebp.webp",
    bgcolor: "bg-gradient-to-t from-violet-600 to-violet-500",

    points: [
      { point: "RNG and live dealer games" },
      { point: "One time API integration" },
      { point: "Client back office" },
      { point: "Thousands of casino games" },
    ],
  },
  {
    title: "Game Aggregator",
    text: "A one-stop solution for all casino game content needs. Our portfolio brings together more than 280 casino game studios with over 27,800 mobile-friendly games via a single API integration.",

    imgUrl: "/asset/productImage/jackpot-aggregator_x3_pngwebp-2.webp",
    bgcolor: "bg-gradient-to-t from-green-600 to-green-500",

    points: [
      { point: "RNG and live dealer games" },
      { point: "One time API integration" },
      { point: "Client back office" },
      { point: "Thousands of casino games" },
    ],
  },
  {
    title: "Game Aggregator",
    text: "A one-stop solution for all casino game content needs. Our portfolio brings together more than 280 casino game studios with over 27,800 mobile-friendly games via a single API integration.",

    imgUrl: "/asset/productImage/affilka_x3_pngwebp.webp",
    bgcolor: "bg-gradient-to-t from-violet-600 to-violet-500",

    points: [
      { point: "RNG and live dealer games" },
      { point: "One time API integration" },
      { point: "Client back office" },
      { point: "Thousands of casino games" },
    ],
  },
];

export interface SolutionCardItems {
  text: string;
  imgUrl: string;
  title: string;
  bgcolor: string;
  point1: string;
  point2: string;
  point3: string;
  sliderBG: string;
}

export const solutionCardItems: SolutionCardItems[] = [
  {
    imgUrl: "/asset/cardImg/turnkey_casino_x3_pngwebp.webp",
    title: "Turnkey Casino (Standalone)",
    text: "Online casino software for your own licences and merchant accounts",
    point1: "DigitalZet Casino Platform",
    point2: "Client back office",
    point3: "Thousands of casino games",
    bgcolor: "bg-gradient-to-t from-blue-200 to-blue-100",
    sliderBG: "bg-blue-200",
  },
  {
    imgUrl: "/asset/cardImg/crypto_casino_x3_pngwebp.webp",
    title: "Cripto Casino",
    text: "Quick way to start an online crypto casino business",
    point1: "One time API integration",
    point2: "Client back office",
    point3: "Thousands of casino games",
    bgcolor: "bg-gradient-to-t from-pink-200 to-pink-100",
    sliderBG: "bg-pink-200",
  },
  {
    imgUrl: "/asset/cardImg/white_label_casino_x3_pngwebp.webp",
    title: "Cripto Casino",
    text: "Quick way to start an online crypto casino business",
    point1: "One time API integration",
    point2: "Client back office",
    point3: "Thousands of casino games",
    bgcolor: "bg-gradient-to-t from-green-200 to-green-100",
    sliderBG: "bg-green-200",
  },
  {
    imgUrl: "/asset/cardImg/white_label_sportsbook_x3_pngwebp.webp",
    title: "Cripto Casino",
    text: "Quick way to start an online crypto casino business",
    point1: "One time API integration",
    point2: "Client back office",
    point3: "Thousands of casino games",
    bgcolor: "bg-gradient-to-t from-yellow-200 to-yellow-100",
    sliderBG: "bg-yellow-200",
  },
  {
    imgUrl: "/asset/cardImg/sportsbook_integration_x3_pngwebp-1.webp",
    title: "Cripto Casino",
    text: "Quick way to start an online crypto casino business",
    point1: "One time API integration",
    point2: "Client back office",
    point3: "Thousands of casino games",
    bgcolor: "bg-gradient-to-t from-violet-200 to-violet-100",
    sliderBG: "bg-violet-200",
  },
  {
    imgUrl: "/asset/cardImg/casino_games_api_x2_pngwebp.webp",
    title: "Cripto Casino",
    text: "Quick way to start an online crypto casino business",
    point1: "One time API integration",
    point2: "Client back office",
    point3: "Thousands of casino games",
    bgcolor: "bg-gradient-to-t from-amber-200 to-amber-100",
    sliderBG: "bg-amber-200",
  },
];

export interface FooterList {
  listHeading: string;
  listItems: Array<{ text: string }>;
  style?: string;
}

export const footerList: FooterList[] = [
  {
    listHeading: "Product",
    style: "col-start-1 row-span-2 xl:!border-l-0",
    listItems: [
      {
        text: "Casino Game Aggregator",
      },
      {
        text: "Sportsbook Software",
      },
      {
        text: "Online Casino Platform",
      },
      {
        text: "Video Lottery Terminal",
      },
      {
        text: "Managed Services",
      },
      {
        text: "Affilka",
      },
      {
        text: "Jackpot Aggregator",
      },
      {
        text: "Lotto Software",
      },
      {
        text: "Retail Betting Solution",
      },
      {
        text: "Social Gaming Platform",
      },
    ],
  },
  {
    listHeading: "Solutions",
    style: "col-start-2 row-start-1",
    listItems: [
      {
        text: "ami",
      },
      {
        text: "tumi",
      },
      {
        text: "se",
      },
    ],
  },
  {
    listHeading: "Partners",
    style: "col-start-2 row-start-2",
    listItems: [
      {
        text: "ami",
      },
      {
        text: "tumi",
      },
      {
        text: "se",
      },
    ],
  },
  {
    listHeading: "Resources",
    style: "col-start-3 row-start-1  row-span-2",
    listItems: [
      {
        text: "ami",
      },
      {
        text: "tumi",
      },
      {
        text: "se",
      },
    ],
  },
  {
    listHeading: "Company",
    style: "col-start-4 row-start-1  row-span-2",
    listItems: [
      {
        text: "ami",
      },
      {
        text: "tumi",
      },
      {
        text: "se",
      },
    ],
  },
];

export interface FooterImages {
  url: string;
  alt: string;
}

export const footerImages: FooterImages[] = [
  {
    url: "/asset/social-logos/facebook_24-24px_svg.svg",
    alt: "facebook",
  },
  {
    url: "/asset/social-logos/icon-instagram.svg",
    alt: "instagram",
  },
  {
    url: "/asset/social-logos/linkedin_24-24px_svg.svg",
    alt: "linkedin",
  },
  {
    url: "/asset/social-logos/medium_24-24px_svg.svg",
    alt: "medium",
  },
  {
    url: "/asset/social-logos/twitter_24-24px_svg.svg",
    alt: "twitter",
  },
  {
    url: "/asset/social-logos/youtube_24-24px_svg.svg",
    alt: "youtube",
  },
];

export interface FactsFigures {
  heading: string;
  style?: string;
  text: string;
}

export const factsFigures: FactsFigures[] = [
  {
    heading: "2,000+",
    text: "EMPLOYEES WORKING HARD",
  },
  {
    heading: "#1",
    text: "PROVIDER IN CRYPTO GAMBLING",
  },
  {
    heading: "1,200+",
    text: "BRANDS USE OUR SOFTWARE",
  },
  {
    heading: "27,800",
    text: "CASINO GAMES AVAILABLE",
    style: "hidden sm:block",
  },
  {
    heading: "280+",
    text: "GAME PROVIDER PARTNERS",
    style: "hidden sm:block",
  },
];

export interface AffiliateBrands {
  url: string;
  text: string;
  title: string;
}

export const affiliateBrands: AffiliateBrands[] = [
  {
    url: "/asset/affiliateImage/Frame-48097514-1.webp",
    title: "FinteqHub",
    text: "PCI DSS certified payment system aggregator",
  },
  {
    url: "/asset/affiliateImage/Group-1-5.webp",
    title: "SpinArena",
    text: "Social casino gaming",
  },
  {
    url: "/asset/affiliateImage/Group-2-3.webp",
    title: "TrueLab",
    text: "40+ HTML5-based slots for a great entertainment experience",
  },
  {
    url: "/asset/affiliateImage/Group-4.webp",
    title: "Turfsport",
    text: "Sports, horse racing, lotto, and retail betting solutions for iGaming",
  },
];

export interface ClientReviews {
  imgUrl: string;
  text: string;
}

export const clientReviews: ClientReviews[] = [
  {
    imgUrl: "/asset/client-Image/eddiemiro1.jpeg",
    text: "edge, modern, and stable Casino Platform, which ensures a dominant position among the competitors. Vast selection of payment solutions allows players to seamlessly and effortlessly have funds on their account within seconds. The Casino Platform is very flexible and a lot of customization can be done to achieve uniqueness of the brand even though there are a lot of brands using the same software platform. Their team is professional and quick to react in times of need, so we have nothing to say other than that this is a great platform supported by great people.",
  },
  {
    imgUrl: "/asset/client-Image/Milan-Sekulic-founder-e1712568380577.webp",
    text: "SOFTSWISS' services have allowed us to quickly and efficiently expand our iGaming business. Integrating their technology into our existing system was a seamless process and all the staff are extremely knowledgeable in every area. Were thankful for the partnership and are extremely happy to work alongside a company like SOFTSWISS.",
  },
  {
    imgUrl: "/asset/client-Image/Roman-Bondarenko-Anonymous-Casino.jpeg",
    text: "SOFTSWISS' services have allowed us to quickly and efficiently expand our iGaming business. Integrating their technology into our existing system was a seamless process and all the staff are extremely knowledgeable in every area. Were thankful for the partnership and are extremely happy to work alongside a company like SOFTSWISS.",
  },
];
