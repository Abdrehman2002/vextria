"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Zap, Calendar, CheckCircle, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const improvements = [
  {
    icon: Target,
    text: "Answer rate increases by 30+ percentage points",
  },
  {
    icon: Zap,
    text: "35–45% of missed calls turn into booked jobs",
  },
  {
    icon: Calendar,
    text: "Revenue increase by 35–45%",
  },
];

const setupSteps = [
  "Forward your shop number",
  "Connect your calendar or DMS",
  "Go live within 48 hours",
];

export function FloridaPilotSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.fromTo(
        containerRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (rect) {
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-black via-[#0A0510] to-black"
      onMouseMove={handleMouseMove}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(74, 154, 232, 0.2),transparent_50%)]"></div>

      {/* Animated Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
          linear-gradient(to right, #1A60AB 1px, transparent 1px),
          linear-gradient(to bottom, #1A60AB 1px, transparent 1px)
        `,
          backgroundSize: "60px 60px",
        }}
      ></div>

      {/* Radial gradient that follows mouse */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none transition-opacity duration-700"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(74, 154, 232, 0.35), transparent 60%)`,
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Centered Highlight Container */}
        <div ref={containerRef} className="max-w-4xl mx-auto">
          <div
            className="relative rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(10, 14, 26, 0.95), rgba(15, 23, 42, 0.9))",
              border: "1px solid rgba(74, 154, 232, 0.3)",
              boxShadow:
                "0 0 60px rgba(74, 154, 232, 0.25), 0 20px 80px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
            }}
          >
            {/* Badge */}
            <div className="flex justify-center mb-8">
              <div
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(74, 154, 232, 0.25), rgba(26, 96, 171, 0.2))",
                  border: "1px solid rgba(74, 154, 232, 0.4)",
                  color: "#5AADE8",
                  boxShadow: "0 0 25px rgba(74, 154, 232, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                }}
              >
                <span className="relative">
                  <span className="w-2 h-2 bg-[#5AADE8] rounded-full block animate-pulse"></span>
                  <span className="absolute inset-0 w-2 h-2 bg-[#5AADE8] rounded-full animate-ping"></span>
                </span>
                Limited Pilot — Florida Only
              </div>
            </div>

            {/* Headline with gradient underline */}
            <div className="mb-4">
              <h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-2"
                style={{
                  lineHeight: "1.1",
                  background: "linear-gradient(135deg, #FFFFFF 0%, #5AADE8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: "0 0 40px rgba(74, 154, 232, 0.3)",
                }}
              >
                Florida Pilot Program
              </h2>
              <div
                className="h-1 w-32 mx-auto rounded-full"
                style={{
                  background: "linear-gradient(90deg, transparent, #4A9AE8, transparent)",
                  boxShadow: "0 0 20px rgba(74, 154, 232, 0.6)",
                }}
              ></div>
            </div>

            {/* Subheading with highlight */}
            <div className="text-center mb-6">
              <div
                className="inline-block px-6 py-2 rounded-lg mb-4"
                style={{
                  background: "linear-gradient(135deg, rgba(74, 154, 232, 0.1), rgba(26, 96, 171, 0.05))",
                  border: "1px solid rgba(74, 154, 232, 0.2)",
                }}
              >
                <p className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#5AADE8] to-[#A8D8F0] bg-clip-text text-transparent">
                  Try a 14-Day Florida Pilot
                </p>
              </div>
            </div>

            {/* Value Prop */}
            <div className="text-center mb-10 md:mb-12">
              <p className="text-base sm:text-lg text-gray-400 mb-1">
                We don't sell promises.
              </p>
              <p className="text-xl sm:text-2xl font-bold text-white" style={{
                textShadow: "0 0 20px rgba(74, 154, 232, 0.3)",
              }}>
                We measure outcomes.
              </p>
            </div>

            {/* Divider with glow */}
            <div className="relative mb-10 md:mb-12">
              <div
                className="h-px w-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(74, 154, 232, 0.5), transparent)",
                }}
              ></div>
              <div
                className="absolute inset-0 h-px w-full blur-sm"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(74, 154, 232, 0.8), transparent)",
                }}
              ></div>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-10 md:mb-12">
              {/* Left: What We Improve */}
              <div className="relative">
                <div className="absolute -left-3 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-[#4A9AE8] via-[#1A60AB] to-transparent opacity-50"></div>
                <h3 className="text-xl sm:text-2xl font-bold mb-6" style={{
                  background: "linear-gradient(135deg, #FFFFFF, #5AADE8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  What We Improve in 14 Days
                </h3>
                <div className="space-y-5">
                  {improvements.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="group flex items-start gap-4 relative">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(74, 154, 232, 0.25), rgba(26, 96, 171, 0.15))",
                            border: "1px solid rgba(74, 154, 232, 0.4)",
                            boxShadow: "0 4px 15px rgba(74, 154, 232, 0.2)",
                          }}
                        >
                          <Icon className="w-6 h-6 text-[#5AADE8]" />
                        </div>
                        <p className="text-sm sm:text-base text-gray-200 leading-relaxed pt-2.5 flex-1">
                          {item.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-5 pl-16">
                  <p className="text-xs sm:text-sm text-gray-500 italic">
                    Measured using your real call data.
                  </p>
                </div>
              </div>

              {/* Right: Setup Steps */}
              <div className="relative">
                <div className="absolute -right-3 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-[#4A9AE8] via-[#1A60AB] to-transparent opacity-50"></div>
                <h3 className="text-xl sm:text-2xl font-bold mb-6" style={{
                  background: "linear-gradient(135deg, #FFFFFF, #5AADE8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Setup in 3 Simple Steps
                </h3>
                <div className="space-y-5">
                  {setupSteps.map((step, idx) => (
                    <div key={idx} className="group flex items-start gap-4 relative">
                      <div
                        className="relative w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-lg transition-all duration-300 group-hover:scale-110"
                        style={{
                          background:
                            "linear-gradient(135deg, #4A9AE8, #1A60AB)",
                          color: "#fff",
                          boxShadow: "0 4px 20px rgba(74, 154, 232, 0.5)",
                        }}
                      >
                        {idx + 1}
                        <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                      </div>
                      <p className="text-sm sm:text-base text-gray-200 leading-relaxed pt-2.5 flex-1">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pl-16">
                  <p className="text-xs sm:text-sm text-gray-500">
                    No contracts. No disruption to your workflow.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button
                className="relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-white text-base sm:text-lg transition-all duration-300 hover:scale-105 group overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #4A9AE8 0%, #1A60AB 100%)",
                  boxShadow:
                    "0 0 40px rgba(74, 154, 232, 0.7), 0 15px 50px rgba(26, 96, 171, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 group-hover:animate-shimmer"></span>
                <span className="relative">Start My Florida Pilot</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 relative" />
              </button>
              <p className="text-xs sm:text-sm text-gray-400 mt-5 flex items-center justify-center gap-2">
                <span className="w-1 h-1 bg-[#5AADE8] rounded-full"></span>
                Limited to Florida auto repair shops
                <span className="w-1 h-1 bg-[#5AADE8] rounded-full"></span>
              </p>
            </div>

            {/* Corner accent glows */}
            <div
              className="absolute top-0 right-0 w-40 h-40 md:w-64 md:h-64 opacity-30 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at top right, rgba(74, 154, 232, 0.5), transparent 70%)",
              }}
            ></div>
            <div
              className="absolute bottom-0 left-0 w-40 h-40 md:w-64 md:h-64 opacity-20 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at bottom left, rgba(26, 96, 171, 0.4), transparent 70%)",
              }}
            ></div>

            {/* Animated particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-[#5AADE8] rounded-full opacity-30"
                  style={{
                    top: `${20 + i * 30}%`,
                    left: `${10 + i * 25}%`,
                    animation: `float ${3 + i}s ease-in-out infinite`,
                    animationDelay: `${i * 0.5}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
