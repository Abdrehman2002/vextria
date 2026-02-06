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
            className="relative bg-[#0A0E1A] rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16 overflow-hidden"
            style={{
              border: "1px solid",
              borderImage:
                "linear-gradient(135deg, rgba(74, 154, 232, 0.3), rgba(26, 96, 171, 0.2)) 1",
              boxShadow:
                "0 0 40px rgba(74, 154, 232, 0.15), 0 20px 60px rgba(0, 0, 0, 0.5)",
            }}
          >
            {/* Badge */}
            <div className="flex justify-center mb-6">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(74, 154, 232, 0.2), rgba(26, 96, 171, 0.15))",
                  border: "1px solid rgba(74, 154, 232, 0.3)",
                  color: "#5AADE8",
                  boxShadow: "0 0 20px rgba(74, 154, 232, 0.3)",
                }}
              >
                <span className="w-2 h-2 bg-[#5AADE8] rounded-full animate-pulse"></span>
                Limited Pilot — Florida Only
              </div>
            </div>

            {/* Headline */}
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4"
              style={{
                lineHeight: "1.2",
                textShadow:
                  "0 0 40px rgba(74, 154, 232, 0.6), 0 0 80px rgba(26, 96, 171, 0.4)",
              }}
            >
              🚀 Florida Pilot Program
            </h2>

            {/* Subheading */}
            <p className="text-lg sm:text-xl md:text-2xl text-center text-gray-300 mb-3">
              Try a 14-Day Florida Pilot
            </p>

            {/* Value Prop */}
            <div className="text-center mb-8 md:mb-10">
              <p className="text-base sm:text-lg text-gray-400">
                We don't sell promises.
              </p>
              <p className="text-base sm:text-lg font-semibold text-white">
                We measure outcomes.
              </p>
            </div>

            {/* Divider */}
            <div
              className="h-px w-full mb-8 md:mb-10"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(74, 154, 232, 0.3), transparent)",
              }}
            ></div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-10 md:mb-12">
              {/* Left: What We Improve */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                  What We Improve in 14 Days
                </h3>
                <div className="space-y-4">
                  {improvements.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="flex items-start gap-3">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(74, 154, 232, 0.2), rgba(26, 96, 171, 0.1))",
                            border: "1px solid rgba(74, 154, 232, 0.3)",
                          }}
                        >
                          <Icon className="w-5 h-5 text-[#5AADE8]" />
                        </div>
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed pt-2">
                          {item.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <p className="text-xs sm:text-sm text-gray-500 mt-4 italic">
                  Measured using your real call data.
                </p>
              </div>

              {/* Right: Setup Steps */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                  Setup in 3 Simple Steps
                </h3>
                <div className="space-y-4">
                  {setupSteps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 font-bold"
                        style={{
                          background:
                            "linear-gradient(135deg, #4A9AE8, #1A60AB)",
                          color: "#fff",
                          boxShadow: "0 4px 15px rgba(74, 154, 232, 0.4)",
                        }}
                      >
                        {idx + 1}
                      </div>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed pt-2">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-500 mt-4">
                  No contracts. No disruption to your workflow.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-white text-base sm:text-lg transition-all duration-300 hover:scale-105 group"
                style={{
                  background: "linear-gradient(135deg, #4A9AE8 0%, #1A60AB 100%)",
                  boxShadow:
                    "0 0 30px rgba(74, 154, 232, 0.6), 0 10px 40px rgba(26, 96, 171, 0.4)",
                }}
              >
                Start My Florida Pilot
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <p className="text-xs sm:text-sm text-gray-500 mt-4">
                Limited to Florida auto repair shops.
              </p>
            </div>

            {/* Corner accent glow */}
            <div
              className="absolute top-0 right-0 w-40 h-40 md:w-64 md:h-64 opacity-20 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at top right, rgba(74, 154, 232, 0.4), transparent 70%)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
