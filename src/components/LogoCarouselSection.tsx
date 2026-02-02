"use client";

import { RulerCarousel, CarouselItem } from "@/components/ui/ruler-carousel";

const CRM_ITEMS: CarouselItem[] = [
  { id: 1, title: "Shopmonkey" },
  { id: 2, title: "Tekmetric" },
  { id: 3, title: "Mitchell 1" },
  { id: 4, title: "AutoLeap" },
  { id: 5, title: "Shopware" },
  { id: 6, title: "ROWriter" },
  { id: 7, title: "ALLDATA" },
  { id: 8, title: "HubSpot" },
];

const LogoCarouselSection = () => {
  return (
    <div className="relative w-full bg-black overflow-hidden py-12 md:py-16">
      {/* Grid BG */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1F242C 1px, transparent 1px), linear-gradient(to bottom, #1F242C 1px, transparent 1px)",
          backgroundSize: "6rem 5rem",
        }}
      />

      <div className="relative z-10 w-full">
        {/* Simple Heading */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 md:mb-12 px-4">
          Integrates easily with
        </h2>

        {/* CRM Carousel - Full Width */}
        <div className="w-full">
          <RulerCarousel originalItems={CRM_ITEMS} />
        </div>
      </div>
    </div>
  );
};

export default LogoCarouselSection;
