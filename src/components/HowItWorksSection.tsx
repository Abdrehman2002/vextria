"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, Calendar, Bell, Users, MessageSquare, XCircle, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    icon: Phone,
    title: "Customer Calls Your Shop",
    description:
      "Vextria answers instantly — during peak hours, after closing, or whenever your team is busy.",
    details: [
      "Captures name, phone number, and vehicle details",
      "Understands the service request",
      "Asks the right follow-up questions",
      "Keeps the conversation natural and professional",
    ],
    subtext: "No voicemail. No hold music. No missed opportunity."
  },
  {
    icon: Calendar,
    title: "Books the Right Time Slot",
    description:
      "Instead of guessing, Vextria helps schedule correctly the first time.",
    details: [
      "Estimates realistic job length",
      "Checks calendar availability",
      "Prevents double booking",
      "Confirms appointment via text",
    ],
    subtext: "Your bays stay organized. Your schedule stays accurate."
  },
  {
    icon: Bell,
    title: "Sends Smart Reminders",
    description:
      "Before the visit, Vextria keeps the customer engaged.",
    details: [
      "Sends appointment reminders automatically",
      "Allows easy rescheduling",
      "Reduces no-shows",
      "Keeps your calendar full",
    ],
    subtext: "Fewer empty slots. More predictable revenue."
  },
];

const REVENUE_IMPACT = [
  {
    icon: Phone,
    stat: "20–40%",
    title: "Missed Calls",
    description: "Customers hang up during peak hours or after closing.",
  },
  {
    icon: Calendar,
    stat: "10–20%",
    title: "No-Show Rate",
    description: "Weak reminders leave bays empty.",
  },
  {
    icon: XCircle,
    stat: "$5,000–$15,000",
    title: "Lost Repeat Work",
    description: "No follow-up means maintenance revenue disappears.",
  },
];

const OPERATIONAL_INEFFICIENCY = [
  {
    icon: Users,
    stat: "3–4 Hours/Day",
    title: "Front Desk Overloaded",
    description: "Service writers buried in phone calls.",
  },
  {
    icon: Calendar,
    stat: "1–2 Hours/Day",
    title: "Wrong Job Length",
    description: "Scheduling chaos creates idle bays.",
  },
  {
    icon: Phone,
    stat: "2+ Hour Delays",
    title: "Phone Tag Approvals",
    description: "Back-and-forth calls slow repairs.",
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
        ".hiw-pain-header",
        { y: 20, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: ".hiw-pain-header", start: "top 82%", once: true },
        }
      );
      gsap.fromTo(
        ".hiw-pain-card",
        { y: 24, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, ease: "power2.out", stagger: 0.12,
          scrollTrigger: { trigger: ".hiw-pain-grid", start: "top 78%", once: true },
        }
      );
      gsap.fromTo(
        ".hiw-closing",
        { y: 16, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: ".hiw-closing", start: "top 88%", once: true },
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
          <div className="inline-block mb-4">
            <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: "#5AADE8" }}>
              HOW VEXTRIA WORKS
            </span>
          </div>
          <h2
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-4 sm:mb-5 md:mb-6 lg:mb-8 px-2 sm:px-4"
            style={{
              lineHeight: '1.1',
              textShadow: '0 0 40px rgba(74, 154, 232, 0.6), 0 0 80px rgba(26, 96, 171, 0.4)'
            }}
          >
            From First Call to Confirmed Appointment —
            <span className="relative inline-block ml-2">
              <span className="bg-gradient-to-r from-[#5AADE8] via-[#A8D8F0] to-[#4A9AE8] bg-clip-text text-transparent">
                Automatically
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#5AADE8] via-[#A8D8F0] to-[#4A9AE8] blur-2xl opacity-40"></div>
            </span>
          </h2>
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto px-4 sm:px-6"
            style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}
          >
            When a customer contacts your shop, Vextria handles the call, books the right slot, and sends reminders — without interrupting your team.
          </p>
        </div>

        {/* THREE-STEP CARDS */}
        <div
          className="hiw-steps-row grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 lg:gap-10"
          style={{ marginBottom: "80px", marginTop: "48px" }}
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
                    0{index + 1}
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

                  {/* Step Number Badge */}
                  <div className="relative z-10 mb-4">
                    <span className="text-xs font-bold tracking-wider uppercase" style={{ color: "#5AADE8" }}>
                      STEP 0{index + 1}
                    </span>
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
                    <ul className="space-y-2 mb-6">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs md:text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                          <div
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: "#4A9AE8" }}
                          />
                          {detail}
                        </li>
                      ))}
                    </ul>

                    {/* Subtext */}
                    <div className="pt-4 border-t border-white/5">
                      <p className="text-xs text-gray-600 italic leading-relaxed">
                        {step.subtext}
                      </p>
                    </div>
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

        {/* PAIN SECTION */}
        <div style={{ marginTop: "120px" }}>
          {/* Pain Section Header */}
          <div className="hiw-pain-header text-center mb-12 md:mb-16">
            <h3
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
              style={{
                lineHeight: '1.2',
                letterSpacing: '-0.01em',
                textShadow: '0 0 30px rgba(74, 154, 232, 0.5)'
              }}
            >
              What Happens Without Vextria?
            </h3>
            <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              Even great shops lose revenue through small operational gaps.
            </p>
          </div>

          {/* Revenue Impact Row */}
          <div className="mb-16">
            <p className="text-xs font-bold tracking-widest uppercase text-gray-500 text-center mb-6">
              Revenue Impact
            </p>
            <div className="hiw-pain-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {REVENUE_IMPACT.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="hiw-pain-card p-6 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl border border-red-500/10 transition-all duration-300 hover:border-red-500/20"
                    style={{
                      background: "rgba(0, 0, 0, 0.4)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center border flex-shrink-0"
                        style={{
                          background: "rgba(239, 68, 68, 0.08)",
                          borderColor: "rgba(239, 68, 68, 0.15)",
                        }}
                      >
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-red-400" />
                      </div>
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-white mb-3" style={{
                      textShadow: '0 0 20px rgba(239, 68, 68, 0.3)'
                    }}>
                      {item.stat}
                    </div>
                    <h4 className="font-bold text-white mb-2 text-lg md:text-xl">
                      {item.title}
                    </h4>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Operational Inefficiency Row */}
          <div className="mb-16">
            <p className="text-xs font-bold tracking-widest uppercase text-gray-500 text-center mb-6">
              Operational Inefficiency
            </p>
            <div className="hiw-pain-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {OPERATIONAL_INEFFICIENCY.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="hiw-pain-card p-6 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl border border-orange-500/10 transition-all duration-300 hover:border-orange-500/20"
                    style={{
                      background: "rgba(0, 0, 0, 0.4)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center border flex-shrink-0"
                        style={{
                          background: "rgba(249, 115, 22, 0.08)",
                          borderColor: "rgba(249, 115, 22, 0.15)",
                        }}
                      >
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-orange-400" />
                      </div>
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-white mb-3" style={{
                      textShadow: '0 0 20px rgba(249, 115, 22, 0.3)'
                    }}>
                      {item.stat}
                    </div>
                    <h4 className="font-bold text-white mb-2 text-lg md:text-xl">
                      {item.title}
                    </h4>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Summary Card */}
          <div className="max-w-4xl mx-auto">
            <div
              className="p-8 md:p-12 rounded-3xl border text-center"
              style={{
                background: "linear-gradient(135deg, rgba(239, 68, 68, 0.05), rgba(249, 115, 22, 0.05))",
                backdropFilter: "blur(12px)",
                borderColor: "rgba(239, 68, 68, 0.2)",
                boxShadow: "0 0 40px rgba(239, 68, 68, 0.2)",
              }}
            >
              <p className="text-sm font-bold tracking-wider uppercase text-gray-400 mb-4">
                Estimated Monthly Leakage
              </p>
              <div className="text-6xl md:text-7xl font-bold text-white mb-4" style={{
                textShadow: '0 0 30px rgba(239, 68, 68, 0.5)'
              }}>
                $18,400
              </div>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6 max-w-2xl mx-auto">
                Based on industry averages for small-to-mid size auto repair shops handling 15–25 calls per day.
              </p>
              <p className="text-sm text-gray-500 mb-8">
                This does not include upsells, recurring maintenance loss, or delayed approvals.
              </p>
              <button
                className="px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #EF4444 0%, #F97316 100%)",
                  boxShadow: "0 0 20px rgba(239, 68, 68, 0.5)",
                }}
              >
                See How Vextria Recovers This →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
