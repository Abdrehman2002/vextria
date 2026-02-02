"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Phone, DollarSign, Settings, Play } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function FeaturesDetail() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".fd-header",
        { y: 24, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
        }
      )
      gsap.fromTo(
        ".fd-video",
        { y: 32, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, ease: "power2.out",
          scrollTrigger: { trigger: ".fd-video", start: "top 78%", once: true },
        }
      )
      gsap.fromTo(
        ".fd-feature",
        { y: 24, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, ease: "power2.out", stagger: 0.14,
          scrollTrigger: { trigger: ".fd-features", start: "top 78%", once: true },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="relative w-full bg-black overflow-hidden" style={{ paddingTop: "96px", paddingBottom: "96px" }}>
      {/* Grid BG */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
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

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="fd-header text-center" style={{ marginBottom: "64px" }}>
          <h2
            className="text-white text-3xl sm:text-4xl md:text-5xl"
            style={{
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "16px",
            }}
          >
            Your Shop Dashboard
          </h2>
          <h3
            className="text-2xl sm:text-3xl md:text-4xl"
            style={{
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: "16px",
            }}
          >
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#5AADE8] via-[#A8D8F0] to-[#4A9AE8] bg-clip-text text-transparent">
                Everything your shop needs — in one place.
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#5AADE8] via-[#A8D8F0] to-[#4A9AE8] blur-2xl opacity-40 -z-10"></div>
            </span>
          </h3>
          <p
            className="mx-auto"
            style={{
              fontSize: "1.125rem",
              fontWeight: 400,
              lineHeight: 1.6,
              color: "#9CA3AF",
              maxWidth: "640px",
            }}
          >
            See every call, every booked job, and every missed opportunity — in real time.
          </p>
        </div>

        {/* Video */}
        <div className="fd-video" style={{ marginBottom: "64px" }}>
          {/* Label above video */}
          <p
            style={{
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.15em",
              color: "#4A9AE8",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            What your front desk sees
          </p>
          <div
            className="relative overflow-hidden"
            style={{
              borderRadius: "12px",
              border: "1px solid rgba(26, 96, 171, 0.3)",
              background: "#0a0a0a",
              boxShadow: "0 0 20px rgba(26, 96, 171, 0.4), 0 0 40px rgba(74, 154, 232, 0.3)",
            }}
          >
            <video
              ref={videoRef}
              className="w-full h-auto block"
              controls
              poster="/dashboard.png"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            >
              <source src="/Transforming Calls into Booked Appointments with Clary UI 📞 (1).mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Play overlay */}
            {!isPlaying && (
              <button
                onClick={() => {
                  if (videoRef.current) {
                    videoRef.current.play()
                    setIsPlaying(true)
                  }
                }}
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                aria-label="Play video"
              >
                <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.3)" }} />
                <div
                  className="relative flex items-center justify-center transition-transform duration-300 hover:scale-110"
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #4A9AE8, #1A60AB)",
                    boxShadow: "0 0 15px rgba(74, 154, 232, 0.8), 0 0 35px rgba(26, 96, 171, 0.45)",
                  }}
                >
                  <Play className="text-white ml-0.5" style={{ width: "24px", height: "24px" }} fill="white" />
                </div>
              </button>
            )}
          </div>
          {/* Caption below video */}
          <p
            style={{
              fontSize: "15px",
              fontWeight: 400,
              lineHeight: 1.7,
              color: "#9CA3AF",
              marginTop: "16px",
              marginBottom: "8px",
            }}
          >
            Call activity, bookings, and revenue impact — updated live.
          </p>
          <p
            style={{
              fontSize: "15px",
              fontWeight: 500,
              lineHeight: 1.7,
              color: "#CBD5E1",
              marginTop: "8px",
            }}
          >
            Know exactly how many jobs were captured — and how much revenue was recovered.
          </p>
        </div>

        {/* Bottom features — 3 columns, no cards */}
        <div className="fd-features grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {[
            {
              Icon: Phone,
              title: "Call Visibility",
              description: "See every answered call, missed call, and booked appointment — all in one place.",
            },
            {
              Icon: DollarSign,
              title: "Revenue Clarity",
              description: "Know exactly how many jobs were captured and how much revenue was recovered.",
            },
            {
              Icon: Settings,
              title: "Simple Control",
              description: "Pause, adjust, or update call handling anytime — without touching your phone system.",
            },
          ].map((feature, i) => {
            const Icon = feature.Icon
            return (
              <div key={i} className="fd-feature">
                <Icon
                  style={{ width: "20px", height: "20px", color: "#1A60AB", marginBottom: "16px" }}
                />
                <h4
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 500,
                    lineHeight: 1.3,
                    color: "#E5E7EB",
                    marginBottom: "8px",
                  }}
                >
                  {feature.title}
                </h4>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: 400,
                    lineHeight: 1.7,
                    color: "#9CA3AF",
                  }}
                >
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Closing line */}
        <p
          className="text-center"
          style={{
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: 1.6,
            color: "#CBD5E1",
            marginTop: "64px",
            maxWidth: "560px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          You stay focused on the shop floor. Vextria handles the calls and keeps you informed.
        </p>
      </div>
    </div>
  )
}
