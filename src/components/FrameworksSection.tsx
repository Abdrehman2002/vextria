"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, Calendar, Bell, Users, MessageSquare, XCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Customer Calls Your Shop",
    description: "Vextria answers instantly — during peak hours, after closing, or whenever your team is busy.",
    bullets: [
      "Captures name, phone number, and vehicle details",
      "Understands the service request",
      "Asks the right follow-up questions",
      "Keeps the conversation natural and professional"
    ],
    subtext: "No voicemail. No hold music. No missed opportunity."
  },
  {
    number: "02",
    icon: Calendar,
    title: "Books the Right Time Slot",
    description: "Instead of guessing, Vextria helps schedule correctly the first time.",
    bullets: [
      "Estimates realistic job length",
      "Checks calendar availability",
      "Prevents double booking",
      "Confirms appointment via text"
    ],
    subtext: "Your bays stay organized. Your schedule stays accurate."
  },
  {
    number: "03",
    icon: Bell,
    title: "Sends Smart Reminders",
    description: "Before the visit, Vextria keeps the customer engaged.",
    bullets: [
      "Sends appointment reminders automatically",
      "Allows easy rescheduling",
      "Reduces no-shows",
      "Keeps your calendar full"
    ],
    subtext: "Fewer empty slots. More predictable revenue."
  }
];

const painPoints = [
  {
    icon: Phone,
    title: "Missed Calls",
    description: "Customers hang up and call the next shop."
  },
  {
    icon: Calendar,
    title: "Double Booking",
    description: "Wrong job length estimates create chaos."
  },
  {
    icon: XCircle,
    title: "No-Shows",
    description: "Weak or late reminders leave bays empty."
  },
  {
    icon: Users,
    title: "Front Desk Overload",
    description: "Service writers spend hours on the phone."
  },
  {
    icon: MessageSquare,
    title: "Lost Opportunities",
    description: "Voicemail doesn't book jobs."
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
        ".step-card",
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
      id="how-it-works"
      className="relative py-28 px-6 bg-black overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, #1F1F2E 1px, transparent 1px), linear-gradient(to bottom, #1F1F2E 1px, transparent 1px)',
          backgroundSize: '4rem 4rem'
        }} />
      </div>

      {/* Radial gradient that follows mouse */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none transition-opacity duration-700"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(74, 154, 232, 0.35), transparent 60%)`
        }}
      ></div>

      <div className="relative max-w-[1200px] mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-[800px] mx-auto mb-20">
          <div className="inline-block mb-4">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#5AADE8]">
              HOW VEXTRIA WORKS
            </span>
          </div>

          <h2
            ref={headingRef}
            className="font-bold mb-8"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              lineHeight: '1.1',
              letterSpacing: '-0.01em'
            }}
          >
            <span className="text-white">How It Works. </span>
            <span className="bg-gradient-to-r from-[#5AADE8] via-[#A8D8F0] to-[#4A9AE8] bg-clip-text text-transparent">
              Simple & Effective.
            </span>
          </h2>

          <p
            ref={subheadingRef}
            className="text-[#A0A0B0] leading-relaxed"
            style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
              lineHeight: '1.6'
            }}
          >
            Answer every call — without changing how your shop runs.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className="step-card relative flex flex-col p-8 rounded-xl border border-white/10 bg-gradient-to-b from-[#0C0A14] to-[#000000] hover:border-[#4A9AE8]/40 transition-all duration-300 group"
              >
                {/* Background Number */}
                <div className="absolute top-4 right-4 text-[120px] font-bold leading-none opacity-[0.03] select-none">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="relative mb-6 w-12 h-12 rounded-lg bg-gradient-to-br from-[#4A9AE8]/20 to-[#1A60AB]/20 flex items-center justify-center border border-[#4A9AE8]/30 group-hover:border-[#4A9AE8]/60 transition-all duration-300">
                  <IconComponent className="w-6 h-6 text-[#5AADE8]" />
                </div>

                {/* Step Number Badge */}
                <div className="mb-4">
                  <span className="text-xs font-bold tracking-wider text-[#5AADE8] uppercase">
                    STEP {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[#D6D6E8] text-sm mb-5 leading-relaxed">
                  {step.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-2.5 mb-6 flex-grow">
                  {step.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[#A0A0B0] text-sm">
                      <span className="w-1 h-1 rounded-full bg-[#4A9AE8] mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Subtext */}
                <div className="pt-4 border-t border-white/5">
                  <p className="text-xs text-[#777799] italic leading-relaxed">
                    {step.subtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pain Section */}
        <div className="mt-32">
          {/* Pain Section Header */}
          <div className="text-center mb-16">
            <h3 className="font-bold text-white mb-4" style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              lineHeight: '1.2',
              letterSpacing: '-0.01em'
            }}>
              What Happens Without Automation?
            </h3>
            <p className="text-[#A0A0B0] max-w-[700px] mx-auto" style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
              lineHeight: '1.6'
            }}>
              Even great shops lose revenue through small operational gaps.
            </p>
          </div>

          {/* Pain Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {painPoints.map((pain, index) => {
              const IconComponent = pain.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-white/5 bg-[#0C0A14]/80 hover:border-white/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500/10 to-red-600/10 flex items-center justify-center border border-red-500/20 flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1.5 text-base">
                        {pain.title}
                      </h4>
                      <p className="text-[#A0A0B0] text-sm leading-relaxed">
                        {pain.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Closing Statement */}
          <div className="text-center max-w-[900px] mx-auto">
            <p className="text-[#D6D6E8] leading-relaxed" style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
              lineHeight: '1.6'
            }}>
              Most small to mid-size auto shops lose <span className="text-white font-semibold">20–40% of inbound opportunities</span> — not because of service quality, but because of manual workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
