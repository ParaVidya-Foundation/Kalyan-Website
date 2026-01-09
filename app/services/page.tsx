"use client";

import AccessoriesBestSeller from "@/components/store/Accessories/BestSeller";
import AccessoriesIdols from "@/components/store/Accessories/Idols";
import AccessoriesPoojaKit from "@/components/store/Accessories/PoojaKit";
import AccessoriesRashi from "@/components/store/Accessories/Rashi";

// Gems images as placeholders
const gemsImages = [
  "/Gems/Blue-Sapphire.webp",
  "/Gems/Yellow-Sapphire.webp",
  "/Gems/Ruby.webp",
  "/Gems/Green-Emerald.webp",
  "/Gems/Pearl.webp",
  "/Gems/Red-Coral.webp",
  "/Gems/Hessonite.webp",
  "/Gems/Cats-Eye.webp",
  "/Gems/White-Sapphire.webp",
  "/Gems/Amethyst.webp",
  "/Gems/Moonstone.webp",
  "/Gems/Peridot.webp",
];

export default function StorePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="space-y-12 py-8">
        <AccessoriesBestSeller 
          items={[
            { id: 1, title: "Original Karungali Malai 108-Beads Ebony Wood with Govt. Certified", image: gemsImages[0], price: 791, oldPrice: 2090, showFrom: true },
            { id: 2, title: "Karungali Malai Silver Cap Plated Necklace with Certification", image: gemsImages[1], price: 891, oldPrice: 1999 },
            { id: 3, title: "Karungali Malai Bracelet with Govt. Certification", image: gemsImages[2], price: 591, oldPrice: 1650 },
            { id: 4, title: "Nine Gems Navratna Stones Mala", image: gemsImages[3], price: 2451, oldPrice: 3499 },
            { id: 5, title: "7 Mukhi Premium Rudraksha", image: gemsImages[4], price: 991, oldPrice: 1999 },
            { id: 6, title: "Divine Rudraksha Pendant Necklace", image: gemsImages[5], price: 891, oldPrice: 2590 },
            { id: 7, title: "Black Tourmaline Bracelet (Kumbh Rashi) Aquarius", image: gemsImages[6], price: 1111, oldPrice: 1999 },
            { id: 8, title: "Raw Pyrite Bracelet | For Wealth, Confidence & Protection", image: gemsImages[7], price: 690, oldPrice: 1499 },
          ]} 
        />
        <AccessoriesIdols 
          items={[
            { id: 1, title: "Premium Ganesh Idol with Silver Finish", image: gemsImages[8], price: 1500, oldPrice: 2500 },
            { id: 2, title: "Lakshmi Idol Brass Handcrafted", image: gemsImages[9], price: 2200, oldPrice: 3500 },
            { id: 3, title: "Shiva Lingam Stone Idol", image: gemsImages[10], price: 1800, oldPrice: 2800 },
            { id: 4, title: "Krishna Idol with Flute", image: gemsImages[11], price: 1200, oldPrice: 2000 },
            { id: 5, title: "Durga Maa Idol Premium", image: gemsImages[0], price: 2500, oldPrice: 4000 },
            { id: 6, title: "Hanuman Idol Brass Finish", image: gemsImages[1], price: 1600, oldPrice: 2600 },
            { id: 7, title: "Buddha Idol Meditation Statue", image: gemsImages[2], price: 1900, oldPrice: 3000 },
            { id: 8, title: "Saraswati Idol with Veena", image: gemsImages[3], price: 2100, oldPrice: 3200 },
          ]} 
        />
        <AccessoriesPoojaKit 
          items={[
            { id: 1, title: "Complete Pooja Kit with Brass Items", image: gemsImages[4], price: 899, oldPrice: 1500 },
            { id: 2, title: "Premium Pooja Thali Set", image: gemsImages[5], price: 1200, oldPrice: 2000 },
            { id: 3, title: "Copper Pooja Items Set", image: gemsImages[6], price: 1500, oldPrice: 2500 },
            { id: 4, title: "Silver Plated Pooja Kit", image: gemsImages[7], price: 1800, oldPrice: 3000 },
            { id: 5, title: "Traditional Pooja Samagri Kit", image: gemsImages[8], price: 1100, oldPrice: 1800 },
            { id: 6, title: "Luxury Pooja Set with Box", image: gemsImages[9], price: 2200, oldPrice: 3500 },
            { id: 7, title: "Eco-Friendly Pooja Kit", image: gemsImages[10], price: 999, oldPrice: 1600 },
            { id: 8, title: "Premium Brass Pooja Items", image: gemsImages[11], price: 1600, oldPrice: 2600 },
          ]} 
        />
        <AccessoriesRashi 
          items={[
            { id: 1, title: "Aries Rashi Accessories Set", image: gemsImages[0], price: 2500, oldPrice: 4000 },
            { id: 2, title: "Taurus Rashi Pendant Set", image: gemsImages[1], price: 2200, oldPrice: 3500 },
            { id: 3, title: "Gemini Rashi Bracelet Collection", image: gemsImages[2], price: 1800, oldPrice: 2800 },
            { id: 4, title: "Cancer Rashi Necklace Set", image: gemsImages[3], price: 2100, oldPrice: 3200 },
            { id: 5, title: "Leo Rashi Premium Accessories", image: gemsImages[4], price: 2800, oldPrice: 4500 },
            { id: 6, title: "Virgo Rashi Gemstone Set", image: gemsImages[5], price: 2400, oldPrice: 3800 },
            { id: 7, title: "Libra Rashi Collection", image: gemsImages[6], price: 2000, oldPrice: 3200 },
            { id: 8, title: "Scorpio Rashi Accessories", image: gemsImages[7], price: 2300, oldPrice: 3700 },
          ]} 
        />
      </div>
    </main>
  );
}
