"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Mail, Calendar, ArrowRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const [sectionMousePosition, setSectionMousePosition] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
          once: true
        }
      })

      tl.fromTo(
        headingRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      ).fromTo(
        ".contact-item",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.15
        },
        "-=0.4"
      )
    })

    return () => ctx.revert()
  }, [])

  const handleSectionMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect()
    if (rect) {
      setSectionMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      })
    }
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-black via-[#0A0510] to-black"
      onMouseMove={handleSectionMouseMove}
    >
      {/* Background matching other sections */}
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
          background: `radial-gradient(600px circle at ${sectionMousePosition.x}% ${sectionMousePosition.y}%, rgba(74, 154, 232, 0.35), transparent 60%)`
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div ref={headingRef} className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="inline-block mb-3 sm:mb-4 md:mb-6">
            <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#4A9AE8] px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full border border-[#1A60AB]/30 backdrop-blur-sm"
              style={{ background: 'rgba(74, 154, 232, 0.15)' }}>
              Contact Us
            </span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6 px-2">
            Let's talk.
          </h2>
          <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 px-2">
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#5AADE8] via-[#A8D8F0] to-[#4A9AE8] bg-clip-text text-transparent">
                Transform your business today.
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#5AADE8] via-[#A8D8F0] to-[#4A9AE8] blur-2xl opacity-40 -z-10"></div>
            </span>
          </h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4 sm:px-6">
            Ready to automate and scale? Get in touch and let's build<br className="hidden md:block" />
            intelligent AI solutions tailored to your business needs.
          </p>
        </div>

        {/* Contact Options - Sleek Design */}
        <div className="w-full max-w-4xl mx-auto space-y-3 sm:space-y-4 md:space-y-6 px-2 sm:px-4">
          {/* Email */}
          <motion.a
            href="mailto:vextriaai@gmail.com"
            className="contact-item group flex items-center justify-between p-4 md:p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] hover:border-[#1A60AB]/30 transition-all duration-300"
            whileHover={{ x: 10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-3 md:gap-4 min-w-0">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-[#1A60AB]/20 to-[#2E7BD4]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#1A60AB]" />
              </div>
              <div className="min-w-0">
                <h3 className="text-base md:text-lg font-semibold text-white mb-0.5 md:mb-1">Email Us</h3>
                <p className="text-xs md:text-sm text-gray-400 truncate">vextriaai@gmail.com</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-gray-600 group-hover:text-[#1A60AB] group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </motion.a>

          {/* Schedule Meeting - Primary CTA */}
          <motion.a
            href="https://calendly.com/abdurrehman1711/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item group flex items-center justify-between p-4 md:p-6 rounded-2xl transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #4A9AE8 0%, #1A60AB 100%)',
              boxShadow: '0 0 12px rgba(74, 154, 232, 0.7), 0 0 35px rgba(26, 96, 171, 0.4)',
            }}
            whileHover={{
              scale: 1.02,
              boxShadow: '0 0 40px rgba(26, 96, 171, 0.7)',
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-3 md:gap-4 min-w-0">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <Calendar className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div className="min-w-0">
                <h3 className="text-base md:text-lg font-bold text-white mb-0.5 md:mb-1">Schedule a Meeting</h3>
                <p className="text-xs md:text-sm text-white/80">Book a 30-minute call</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
