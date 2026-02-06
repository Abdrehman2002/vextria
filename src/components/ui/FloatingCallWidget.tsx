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
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-6 py-4 rounded-xl font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] group"
      style={{
        background:
          "linear-gradient(135deg, #6366f1 0%, #8b5cf6 25%, #3b82f6 50%, #06b6d4 100%)",
        boxShadow:
          "0 10px 40px rgba(139, 92, 246, 0.4), 0 0 20px rgba(99, 102, 241, 0.3)",
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
