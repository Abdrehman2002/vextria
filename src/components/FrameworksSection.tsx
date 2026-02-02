"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, RefreshCw, ArrowRight, CheckCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const addons = [
  {
    id: 1,
    icon: Star,
    title: "Google Review Follow-Up Agent",
    tagline: "Turn happy customers into more Google reviews.",
    description: "Follows up after service to thank customers and request a Google review when feedback is positive.",
    color: "#1A60AB",
    gradient: "from-[#1A60AB] via-[#1557A0] to-[#0F4E95]",
    glowColor: "rgba(26, 96, 171, 0.6)",
    features: [
      "Increases 5-star reviews",
      "Improves local search visibility",
      "No awkward asking at the counter",
      "Runs automatically after service"
    ],
    cta: "Learn about the Review Add-On"
  },
  {
    id: 2,
    icon: RefreshCw,
    title: "Service Follow-Up & Repeat Business Agent",
    tagline: "Turn one-time jobs into repeat customers.",
    description: "Follows up after service to thank customers and remind them about future maintenance.",
    color: "#2E7BD4",
    gradient: "from-[#2E7BD4] via-[#1557A0] to-[#0F4E95]",
    glowColor: "rgba(26, 96, 171, 0.6)",
    features: [
      "Increases repeat visits",
      "Keeps your shop top of mind",
      "Reduces customer drop-off",
      "Works quietly in the background"
    ],
    cta: "Learn about the Follow-Up Add-On"
  }
];

export function FrameworksSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true
        }
      });

      tl.fromTo(
        headingRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      ).fromTo(
        subheadingRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      );

      tl.fromTo(
        ".addon-card",
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2
        },
        "-=0.4"
      );
    });

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (rect) {
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 pb-12 sm:pb-16 md:pb-24 lg:pb-32 overflow-hidden bg-gradient-to-b from-black via-[#0A0510] to-black"
      onMouseMove={handleMouseMove}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(74, 154, 232, 0.2),transparent_50%)]"></div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `
          linear-gradient(to right, #1A60AB 1px, transparent 1px),
          linear-gradient(to bottom, #1A60AB 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }}></div>

      {/* Radial gradient that follows mouse */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none transition-opacity duration-700"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(74, 154, 232, 0.35), transparent 60%)`
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center w-full max-w-7xl mx-auto mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <h2
            ref={headingRef}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-4 sm:mb-5 md:mb-6 lg:mb-8 px-2 sm:px-4"
            style={{
              lineHeight: '1.1',
              textShadow: '0 0 40px rgba(74, 154, 232, 0.6), 0 0 80px rgba(26, 96, 171, 0.4)'
            }}
          >
            Add-Ons That Drive Reviews{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#5AADE8] via-[#2E7BD4] to-[#1A60AB] bg-clip-text text-transparent">
                and Repeat Business
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#5AADE8] via-[#A8D8F0] to-[#4A9AE8] blur-2xl opacity-40"></div>
            </span>
          </h2>
          <p
            ref={subheadingRef}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto px-4 sm:px-6"
            style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}
          >
            Optional upgrades that help auto repair shops grow their reputation and keep customers coming back.
          </p>
        </div>

        {/* Add-On Cards Grid - 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 md:gap-8 lg:gap-10 max-w-7xl mx-auto px-2 sm:px-0">
          {addons.map((addon) => (
            <AddonCard key={addon.id} addon={addon} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface AddonCardProps {
  addon: typeof addons[0];
}

function AddonCard({ addon }: AddonCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const Icon = addon.icon;

  return (
    <div
      ref={cardRef}
      className="addon-card group relative h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Container - No glassmorphism, clean dark design */}
      <div
        className="relative h-full bg-black border border-white/10 rounded-3xl p-6 md:p-8 overflow-hidden transition-all duration-500 hover:border-[#1A60AB]/40"
        style={{
          boxShadow: isHovered
            ? `0 0 30px rgba(26, 96, 171, 0.5), 0 20px 60px rgba(26, 96, 171, 0.3)`
            : '0 4px 20px rgba(0,0,0,0.4)'
        }}
      >
        {/* Subtle gradient overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${addon.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-700`}></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Icon */}
          <div className="mb-6 md:mb-8">
            <div
              className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${addon.gradient} flex items-center justify-center transition-all duration-500 group-hover:scale-105`}
              style={{
                boxShadow: `0 8px 30px -5px ${addon.glowColor}`,
              }}
            >
              <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
          </div>

          {/* Title & Tagline */}
          <div className="mb-4 md:mb-5">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-3 leading-tight">
              {addon.title}
            </h3>
            <p className="text-sm md:text-base font-medium text-gray-400">
              {addon.tagline}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6 md:mb-8">
            {addon.description}
          </p>

          {/* Features List */}
          <div className="space-y-3 md:space-y-4 mb-6 md:mb-8 flex-grow">
            {addon.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle
                  className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mt-0.5"
                  style={{ color: addon.color }}
                />
                <span className="text-sm md:text-base text-gray-200 leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Link */}
          <div className="pt-6 border-t border-white/10 mt-auto">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm md:text-base font-semibold group/link transition-all duration-300"
              style={{ color: addon.color }}
            >
              <span className="relative">
                {addon.cta}
                <div
                  className="absolute bottom-0 left-0 h-0.5 w-0 group-hover/link:w-full transition-all duration-300"
                  style={{ backgroundColor: addon.color }}
                ></div>
              </span>
              <ArrowRight
                className="w-4 h-4 md:w-5 md:h-5 group-hover/link:translate-x-1 transition-transform duration-300"
              />
            </a>
          </div>
        </div>

        {/* Corner accent */}
        <div
          className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 opacity-10 group-hover:opacity-20 transition-all duration-700"
          style={{
            background: `radial-gradient(circle at top right, ${addon.color}, transparent 70%)`,
          }}
        ></div>
      </div>
    </div>
  );
}
