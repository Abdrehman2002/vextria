"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, MessageCircle, ClipboardList, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    icon: Phone,
    title: "Customer Calls Your Shop",
    description:
      "Vextria answers instantly — even during peak hours or after closing. No hold music, no missed calls.",
    details: [
      "Picks up on the first ring, 24/7",
      "Sounds human — not robotic or scripted",
      "Handles calls when your team is off the clock",
    ],
  },
  {
    icon: MessageCircle,
    title: "The Call Is Handled Live",
    description:
      "The system speaks naturally, asks the right questions, and follows the rules you set for your shop.",
    details: [
      "Collects customer info and service needs",
      "Stays on script for your shop's workflow",
      "Routes and prioritizes based on intent",
    ],
  },
  {
    icon: ClipboardList,
    title: "Your Team Gets the Update",
    description:
      "Call details and appointments are sent straight to your team and synced with your existing tools automatically.",
    details: [
      "Every call logged with key details",
      "Pushes data to your CRM or shop tools",
      "No manual data entry required",
    ],
  },
];

const HowItWorksSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [mousePositions, setMousePositions] = useState<Record<number, { x: number; y: number }>>({});

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hiw-header",
        { y: 24, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
        }
      );
      gsap.fromTo(
        ".hiw-step",
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: "power2.out", stagger: 0.15,
          scrollTrigger: { trigger: ".hiw-steps-row", start: "top 78%", once: true },
        }
      );
      gsap.fromTo(
        ".hiw-outcome",
        { y: 20, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: ".hiw-outcome", start: "top 82%", once: true },
        }
      );
      gsap.fromTo(
        ".hiw-workflow",
        { y: 24, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: ".hiw-workflow", start: "top 82%", once: true },
        }
      );
      gsap.fromTo(
        ".hiw-capability-col",
        { y: 24, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, ease: "power2.out", stagger: 0.14,
          scrollTrigger: { trigger: ".hiw-capability", start: "top 78%", once: true },
        }
      );
      gsap.fromTo(
        ".hiw-cta",
        { y: 16, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: ".hiw-cta", start: "top 88%", once: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePositions((prev) => ({
      ...prev,
      [index]: { x: e.clientX - rect.left, y: e.clientY - rect.top },
    }));
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black overflow-hidden"
    >
      {/* Grid BG */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1F242C 1px, transparent 1px), linear-gradient(to bottom, #1F242C 1px, transparent 1px)",
          backgroundSize: "6rem 5rem",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, #000 50%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, #000 50%, transparent 100%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingTop: "96px", paddingBottom: "96px" }}>

        {/* HEADER */}
        <div className="hiw-header text-center w-full mx-auto mb-10 sm:mb-12 md:mb-20 lg:mb-24">
          <h2
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-4 sm:mb-5 md:mb-6 lg:mb-8 px-2 sm:px-4"
            style={{
              lineHeight: '1.1',
              textShadow: '0 0 40px rgba(74, 154, 232, 0.6), 0 0 80px rgba(26, 96, 171, 0.4)'
            }}
          >
            How It Works.{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#5AADE8] via-[#A8D8F0] to-[#4A9AE8] bg-clip-text text-transparent">
                Simple & Effective.
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#5AADE8] via-[#A8D8F0] to-[#4A9AE8] blur-2xl opacity-40"></div>
            </span>
          </h2>
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto px-4 sm:px-6"
            style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}
          >
            Answer every call — without changing how your shop runs.
          </p>
        </div>

        {/* THREE-STEP CARDS — ProcessSection style */}
        <div
          className="hiw-steps-row grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 lg:gap-10"
          style={{ marginBottom: "48px", marginTop: "48px" }}
        >
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;
            const mouse = mousePositions[index] || { x: 0, y: 0 };

            return (
              <div
                key={index}
                className="hiw-step relative group"
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
                onMouseMove={(e) => handleMouseMove(e, index)}
              >
                <div
                  className="relative h-full p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-white/10 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-white/20"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.07), transparent)",
                    boxShadow: isActive ? "0 0 20px rgba(74, 154, 232, 0.6), 0 20px 80px rgba(26, 96, 171, 0.5)" : "none",
                    transform: isActive ? "translateY(-10px) scale(1.02)" : "none",
                  }}
                >
                  {/* Mouse-following radial glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at ${mouse.x}px ${mouse.y}px, rgba(74, 154, 232, 0.55), transparent 55%)`,
                    }}
                  />

                  {/* Ghost step number */}
                  <div
                    className="absolute top-4 right-5 font-bold leading-none pointer-events-none"
                    style={{
                      fontSize: "120px",
                      color: "#1A60AB",
                      opacity: 0.03,
                    }}
                  >
                    {index + 1}
                  </div>

                  {/* Icon badge */}
                  <div className="relative z-10 mb-6 md:mb-8">
                    <div
                      className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                      style={{
                        background: "linear-gradient(135deg, #4A9AE8, #2E7BD4, #1A60AB)",
                        boxShadow: "0 0 15px rgba(74, 154, 232, 0.7), 0 10px 40px rgba(26, 96, 171, 0.5)",
                      }}
                    >
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-4 md:mb-6">
                      {step.description}
                    </p>

                    {/* Bullet details */}
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs md:text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                          <div
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: "#1A60AB" }}
                          />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Arrow between cards — desktop only */}
                  {index < STEPS.length - 1 && (
                    <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                      <ArrowRight className="w-8 h-8 text-[#1A60AB] opacity-50" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* OUTCOME LINE */}
        <p
          className="hiw-outcome text-center"
          style={{
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: 1.6,
            color: "#CBD5E1",
          }}
        >
          Every caller is answered, scheduled, and followed up — without interrupting your team.
        </p>
      </div>
    </section>
  );
};

export default HowItWorksSection;
