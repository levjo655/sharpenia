export interface Collab {
  id: string | number;
  name: string;
  description: string;
  instagram?: string;
  instagramUrl?: string;
  thumbnail?: string;
  images: string[];
  link?: string;
}

export const collabs: Collab[] = [
  {

    id: "Morandi",
    name: "Morandi x Ågane ",
    description:
      "Suminagashi clad (soft iron with 15n20) with a 52100 core, water quenched. Lucas went crazy on that hollow forged hira so I had to get even by offering a convex bevel for a superior cutting feeling. 225x50mmm & rocking a imperial jacaranda handle. ",
    instagram: "@Morandi.cut",
    thumbnail: "/images/morandi_8.jpg",
    link: "https://www.instagram.com/morandi.cut?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    images: [
      "/images/morandi_8.jpg",
      "/images/morandi_7.jpg",
      "/images/morandi_6.jpg",
      "/images/morandi_5.jpg",
      "/images/morandi_4.jpg",
      "/images/morandi_3.jpg",
      "/images/morandi_2.jpg",
      "/images/morandi_1.jpg",
    ],
  },

  {
    id: "Smedjaaspen",
    name: "Smedjaaspen x Ågane ",
    description:
      "Over the past three years, I’ve been relentlessly pursuing the craft of sharpening—refining my skills and pushing myself to reach new levels of precision. This particular blade marks a milestone for me—it’s the cleanest and most refined work I’ve done to date, and I’m proud to share it with you all. TWR core steel and a gorgeous cladding sporting wrought iron and a nickel line to bring everything together. Complete stone progession all the way to mikawa natural stone. ",
    instagram: "@smedjaaspen",
    thumbnail: "/images/aspen_3.jpg",
    link: "https://www.instagram.com/smedjaaspen?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    images: [
      "/images/aspen_3.jpg",
      "/images/aspen_2.jpg",
      "/images/aspen_1.jpg",
      "/images/aspen_4.jpg",
      "/images/aspen_5.jpg",
      "/images/aspen_6.jpg",
      "/images/aspen_7.jpg",
    ],
  },
  {
    id: "covre",
    name: "Eduardo Covre x Ågane",
    description:
      "Hand-forged in Brazil - Hand polished at Ågane. A whopping 300mm sujihiki (slicer) wrapped up with delicious suminagashi secret recipe from the talented Eduardo.",
    instagram: "@covre_knives",
    link: "https://www.instagram.com/covre_knives",
    thumbnail: "/images/covre_suji.jpeg",
    images: [
      "/images/covre_suji.jpeg",
      "/images/covre_2.jpg",
      "/images/covre_3.jpg",
      "/images/covre_4.jpg",
      "/images/covre_5.jpg",
      "/images/covre_6.jpg",
    ],
  },
  {
    id: "ludvig",
    name: "Ludvig Germain Auclair x Ågane",
    description:
      "Suminagashi goodness on full stone polish. Hard to describe the beauty of this blade with words but believe me when I say a good hour from the total amount spent sharpening was me staring at it. Amazing treatment of 125cr1 and in house suminagashi recipe made for an absolute banger of knife!",
    instagram: "@ludvigknives",
    link: "https://www.instagram.com/ludvigcoutelier",
    thumbnail: "/images/Ludvig_gyuto.jpeg",
    images: [
      "/images/Ludvig_gyuto.jpeg",
      "/images/Ludvig_1.jpg",
      "/images/Ludvig_2.jpg",
    ],
  },
  {
    id: "krichbaum",
    name: "Simon Krichbaum x Ågane",
    description:
      "Austria's finest Simon Krichbaum showcasing stellar heat treat of Apex ultra and wrapped nicely with wrought iron. Easily one of my favorite knives I had the pleasure to work with! Ohh and it sports a take-down handle too!!!",
    instagram: "@simonkrichbaum",
    link: "https://www.instagram.com/krichbaumknives",
    thumbnail: "/images/Krichbaum.jpeg",
    images: [
      "/images/Krichbaum.jpeg",
      "/images/krich_1.jpg",
      "/images/krich_2.jpg",
      "/images/krich_3.jpg",
      "/images/krich_4.jpg",
      "/images/krich_5.jpg",
      "/images/krich_6.jpg",
    ],
  },
  {
    id: "covre_gyuto",
    name: "Eduardo Covre x Ågane",
    description:
      "The second blade made by the talented Brazilian maker Eduardo Covre, same construction as the sujihiki and finished on Mikawa natural stone.",
    instagram: "@covre_knives",
    link: "https://www.instagram.com/covre_knives",
    thumbnail: "/images/covre_gyuto_1.jpg",
    images: [
      "/images/covre_gyuto_1.jpg",
      "/images/covre_gyuto_2.jpg",
      "/images/covre_gyuto_3.jpg",
      "/images/covre_gyuto_4.jpg",
    ],
  },
  {
    id: "merion_forge_2",
    name: "Merion Forge x Ågane part 2",
    description:
      "This time with a 235x36mm San mai in house Damascus sujihiki rocking some sexy ahh red padauk shoes. Stone shaped geometry for a stellar cutting feeling up to 400 grit and then continued with sandpaper and finished with finger stones!",
    instagram: "@merion_forge",
    link: "https://www.instagram.com/merion_forge?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    thumbnail: "/images/merion_suji_1.jpg",
    images: [
      "/images/merion_suji_1.jpg",
      "/images/merion_suji_2.jpg",
      "/images/merion_suji_3.jpg",
      "/images/merion_suji_4.jpg",
      "/images/merion_suji_5.jpg",
    ],
  },
  {
    id: "merion_forge_1",
    name: "Merion Forge x Ågane part 1",
    description:
      "Full stone polish and one of my best work to date on this gorgeous damascus petty from Dominick. Blade went through Kongo 180-imanishi 220 and all the way up to my naturals to achieve this finish.",
    instagram: "@merion_forge",
    link: "https://www.instagram.com/merion_forge?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    thumbnail: "/images/merion_petty_1.jpg",
    images: [
      "/images/merion_petty_1.jpg",
      "/images/merion_petty_2.jpg",
      "/images/merion_petty_3.jpg",
      "/images/merion_petty_4.jpg",
      "/images/merion_petty_5.jpg",
    ],
  },
  {
    id: "munetoshi_bloomery",
    name: "Munetoshi bloomery x Ågane * commissioned work not a collab",
    description:
      "Munetoshi bloomery  k-tip gyuto full polish. This time the progression was done with sandpaper as the blade was already thin enough. from 200 grit to 3k and a full session of finger stones for a banger finish and to bring out the crazy details of the steel. ",
    thumbnail: "/images/munetoshi_1.jpg",
    images: [
      "/images/munetoshi_1.jpg",
      "/images/munetoshi_2.jpg",
      "/images/munetoshi_3.jpg",
      "/images/munetoshi_4.jpg",
      "/images/munetoshi_5.jpg",
    ],
  },
];
