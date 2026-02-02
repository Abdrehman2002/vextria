"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  PhoneOff,
  Bell,
  Users,
  Clock,
  BarChart3,
  AlertTriangle,
  Loader2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const PAIN_POINTS = [
  { icon: Users, lead: "Busy bays —", rest: "techs can't answer phones" },
  { icon: AlertTriangle, lead: "Peak-hour chaos —", rest: "front desk overwhelmed" },
  { icon: PhoneOff, lead: "Hang-ups —", rest: "callers go to competitors" },
  { icon: Clock, lead: "After hours —", rest: "voicemail kills jobs" },
  { icon: BarChart3, lead: "No tracking —", rest: "missed calls = invisible losses" },
];

interface PainSectionProps {
  onCallClick: () => void;
  callStatus: "idle" | "calling" | "connected" | "ended";
}

const PainSection = ({ onCallClick, callStatus }: PainSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      tl.fromTo(
        ".pain-section-headline",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
      );
      tl.fromTo(
        ".pain-item",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", stagger: 0.1 },
        "-=0.3"
      );
      tl.fromTo(
        ".pain-reinforcement",
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=0.1"
      );
      tl.fromTo(
        ".pain-call-card",
        { y: 24, opacity: 0, scale: 0.96 },
        { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: "power2.out" },
        "-=0.4"
      );
      tl.fromTo(
        ".pain-closing-line",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.2"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-black"
    >
      {/* Grid BG — dark variant, same as hero */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)",
          backgroundSize: "6rem 5rem",
          maskImage:
            "radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 110%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 110%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        {/* CENTERED HEADING */}
        <h2 className="pain-section-headline text-center text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 whitespace-nowrap">
          <span className="text-white">Every Unanswered Call</span>{" "}
          <span className="text-white/40">Is a Lost Job</span>
        </h2>

        {/* REVENUE ANCHOR — high-impact, right under headline */}
        <div className="pain-reinforcement mb-12 lg:mb-16 text-center">
          <p className="text-base sm:text-lg text-zinc-500">
            Just <span className="font-semibold text-zinc-300">2 missed calls per day</span> can cost a shop <span className="font-semibold text-zinc-300">$3,000–$6,000 per month.</span>
          </p>
        </div>

        {/* SYMMETRICAL TWO-COLUMN ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT COLUMN — Pain Points (plain lines, no boxes) */}
          <div className="flex flex-col order-2 md:order-1 justify-center">
            <ul className="flex flex-col gap-1">
              {PAIN_POINTS.map((point, idx) => {
                const Icon = point.icon;
                return (
                  <li
                    key={idx}
                    className="pain-item flex items-center gap-4 py-3"
                  >
                    <Icon className="w-5 h-5 flex-shrink-0 text-[#1A60AB]" />

                    <span className="text-base sm:text-lg leading-relaxed">
                      <span className="font-semibold text-zinc-200">{point.lead}</span>{" "}
                      <span className="text-zinc-400">{point.rest}</span>
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="mt-5">
              <p className="text-sm sm:text-base leading-relaxed text-zinc-600">
                <span className="font-semibold text-zinc-400">Most auto shops miss 20–40%</span> of inbound calls.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN — Rotating Gradient Panel + Call Card */}
          <div className="pain-call-card relative mx-auto flex h-[40rem] w-full max-w-[60rem] items-center justify-center overflow-hidden rounded-3xl order-1 md:order-2">
            {/* Spinning conic gradient — fills the entire panel */}
            <div className="absolute -inset-10 flex items-center justify-center">
              <div
                className="h-[120%] w-[120%] rounded-[36px] blur-3xl opacity-80"
                style={{
                  background:
                    "conic-gradient(from 0deg, #34d399, #22d3ee, #60a5fa, #2E7BD4, #ec4899, #f43f5e, #34d399)",
                  animation: "spin 8s linear infinite",
                }}
              />
            </div>

            {/* Dark card centered on the glow */}
            <Card className="relative z-10 w-[320px] sm:w-[340px] rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl" style={{ background: "rgba(0,0,0,0.85)" }}>
              <CardContent className="p-5">
                {callStatus === "connected" ? (
                  /* Connected state — sound waves + agent label */
                  <>
                    <h3 className="text-center text-lg sm:text-xl font-bold mb-1 text-white">
                      Vextria AutoRepair Agent
                    </h3>
                    <p className="text-center text-xs text-zinc-500 mb-5">Speaking now…</p>

                    {/* Sound wave bars */}
                    <div className="flex items-end justify-center gap-1 mx-auto mb-5" style={{ height: "48px" }}>
                      {[0.6, 1, 0.5, 0.85, 1, 0.7, 0.45, 0.9, 1, 0.6, 0.8, 0.5, 0.95, 0.7, 1].map((_, i) => (
                        <div
                          key={i}
                          className="rounded-full"
                          style={{
                            width: "3px",
                            background: "linear-gradient(to top, #1A60AB, #60a5fa)",
                            animation: "soundWave 1.2s ease-in-out infinite",
                            animationDelay: `${i * 0.08}s`,
                          }}
                        />
                      ))}
                    </div>
                  </>
                ) : (
                  /* Idle / calling / ended state — original card top */
                  <>
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/10 border border-white/10">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    <h3 className="text-center text-lg sm:text-xl font-bold mb-2 text-white">
                      This Is How Your Calls Are Answered
                    </h3>

                    <p className="text-center text-xs sm:text-sm leading-relaxed mb-5 text-zinc-400">
                     Calls to your shop are answered instantly — even when you’re busy or closed.
                    </p>
                  </>
                )}

                {/* Call Button */}
                <button
                  onClick={onCallClick}
                  disabled={callStatus === "calling" || callStatus === "ended"}
                  className="w-full flex items-center justify-center gap-2 rounded-lg font-bold text-sm text-white transition-all duration-300 active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    background:
                      callStatus === "connected"
                        ? "linear-gradient(135deg, #EF4444, #DC2626)"
                        : "linear-gradient(135deg, #1557A0, #5A3DE8)",
                    padding: "12px 20px",
                    boxShadow:
                      callStatus === "connected"
                        ? "0 4px 20px rgba(239,68,68,0.4)"
                        : "0 4px 24px rgba(107,76,255,0.5)",
                    animation: callStatus === "idle" ? "ctaGlow 2.5s ease-in-out infinite" : "none",
                  }}
                >
                  {callStatus === "calling" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin flex-shrink-0" />
                      Connecting...
                    </>
                  ) : callStatus === "connected" ? (
                    <>
                      <PhoneOff className="w-4 h-4 flex-shrink-0" />
                      End Call
                    </>
                  ) : callStatus === "ended" ? (
                    <>Call Ended</>
                  ) : (
                    <>
                      <Bell className="w-4 h-4 flex-shrink-0" />
                      Call Now — Hear It Live
                    </>
                  )}
                </button>

                <p className="mt-4 text-center text-xs text-zinc-500 leading-relaxed">
                  Live AI phone conversation — no forms, no waiting, no recordings.
                </p>
              </CardContent>
            </Card>

            {/* Trust badge below card */}
            <p className="absolute bottom-4 z-10 text-center text-xs text-zinc-600 px-4">
              Used by independent shops & multi-location repair centers
            </p>
          </div>
        </div>

        {/* CLOSING GUARANTEE */}
        <div className="pain-closing-line mt-14 lg:mt-20 text-center">
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3">
            Every call answered. Every time.
          </p>
          <p className="text-base sm:text-lg text-zinc-500">
            No voicemail. No hold music. No lost repair jobs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
