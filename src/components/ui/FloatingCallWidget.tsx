import { Phone } from "lucide-react";

export function FloatingCallWidget() {
  const handleClick = () => {
    // Scroll to pain section and trigger call
    const painSection = document.getElementById("pain");
    if (painSection) {
      painSection.scrollIntoView({ behavior: "smooth" });
      // Wait for scroll then trigger the call button
      setTimeout(() => {
        const callButton = painSection.querySelector("button");
        if (callButton) {
          callButton.click();
        }
      }, 800);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-3 px-6 py-4 rounded-xl font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 group"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 9999,
        background: "linear-gradient(135deg, #1557A0, #5A3DE8)",
        boxShadow: "0 4px 24px rgba(107,76,255,0.5)",
        animation: "ctaGlow 2.5s ease-in-out infinite",
      }}
    >
      <div className="relative">
        <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
        <div
          className="absolute inset-0 blur-md opacity-50"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.8), transparent)",
          }}
        />
      </div>
      <span className="text-sm whitespace-nowrap">Call In Here Live</span>
    </button>
  );
}
