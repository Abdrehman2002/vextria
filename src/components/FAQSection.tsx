"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What does Vextria actually do for my auto shop?",
    answer: "Vextria makes sure every call to your shop is answered. It handles incoming calls, answers common questions, and books service appointments so jobs don't get missed when your team is busy in the bays."
  },
  {
    question: "Will this replace my service advisor or front desk?",
    answer: "No. Vextria is there to support your front desk, not replace it. It covers busy hours, overflow calls, lunch breaks, and after-hours calls. Your team stays focused on customers already in the shop."
  },
  {
    question: "What happens to after-hours calls?",
    answer: "They no longer go to voicemail. Customers calling at night or on weekends can still get answers and request service, and your shop follows up the next business day with everything already captured."
  },
  {
    question: "What if I already use shop software or a scheduling system?",
    answer: "That's fine. Vextria works with what your shop already uses and sends call details and appointment info to your team without forcing you to change systems."
  },
  {
    question: "Will customers think they're talking to a robot?",
    answer: "Customers experience a natural, friendly conversation with no phone menus, no button pressing, and no long holds. The goal is simple: answer the call and take care of the customer."
  },
  {
    question: "Do I need to change my phone system?",
    answer: "No. Vextria works with your existing phone number and setup. There's no need to change carriers or hardware."
  },
  {
    question: "Is it hard to set up or manage?",
    answer: "No. Most shops are up and running quickly, and you can review calls, bookings, and activity from one simple dashboard."
  },
  {
    question: "How does this help my shop make more money?",
    answer: "By answering every call. More answered calls means: More booked jobs, Fewer customers calling competitors, Better use of your existing staff."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    });
  };

  return (
    <section
      id="faq"
      className="relative py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-black via-[#0A0510] to-black"
      onMouseMove={handleMouseMove}
    >
      {/* Background Effects */}
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

      <div className="w-full max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="inline-block mb-3 sm:mb-4 md:mb-6">
            <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#4A9AE8] px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full border border-[#1A60AB]/30 backdrop-blur-sm"
              style={{ background: 'rgba(74, 154, 232, 0.15)' }}>
              FAQ
            </span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6 px-2">
            Questions?
          </h2>
          <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 px-2">
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#5AADE8] via-[#A8D8F0] to-[#4A9AE8] bg-clip-text text-transparent">
                We&apos;ve got answers.
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#5AADE8] via-[#A8D8F0] to-[#4A9AE8] blur-2xl opacity-40 -z-10"></div>
            </span>
          </h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4 sm:px-6">
            Everything you need to know about Vextria and how we help<br className="hidden md:block" />
            auto shops answer every call and capture every job.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-5 md:p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] hover:border-[#1A60AB]/30 transition-all duration-300"
                style={{
                  boxShadow: openIndex === index ? '0 0 12px rgba(74, 154, 232, 0.5), 0 0 30px rgba(26, 96, 171, 0.3)' : 'none'
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-base md:text-lg font-semibold text-white group-hover:text-[#4A9AE8] transition-colors pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 w-6 h-6 md:w-7 md:h-7 rounded-full bg-gradient-to-br from-[#1A60AB] to-[#2E7BD4] flex items-center justify-center transition-transform duration-300"
                    style={{
                      transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}>
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    ) : (
                      <Plus className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    )}
                  </div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm md:text-base text-gray-400 leading-relaxed mt-4 pt-4 border-t border-white/10">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-gray-400 mb-6 text-sm md:text-base">
            Still have questions? We're here to help.
          </p>
          <motion.a
            href="https://calendly.com/abdurrehman1711/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-sm md:text-base transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #4A9AE8 0%, #1A60AB 100%)',
              boxShadow: '0 0 15px rgba(74, 154, 232, 0.8), 0 0 40px rgba(26, 96, 171, 0.5)',
              color: '#FFFFFF'
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 20px rgba(74, 154, 232, 0.9), 0 0 50px rgba(26, 96, 171, 0.6)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Call
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
