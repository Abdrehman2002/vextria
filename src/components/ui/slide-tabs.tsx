import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Tab {
  label: string;
  href: string;
}

interface SlideTabsProps {
  tabs?: Tab[];
  logo?: {
    src: string;
    alt: string;
    title: string;
  };
}

export const SlideTabs = ({
  tabs = [
    { label: "Home", href: "#hero" },
    { label: "Problem", href: "#pain" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Dashboard", href: "#features" },
    { label: "Florida Pilot", href: "#pilot" },
    { label: "Add-Ons", href: "#frameworks" },
    { label: "FAQ", href: "#faq" },
  ],
  logo = {
    src: "/vextrialogo.svg",
    alt: "Vextria AI",
    title: "Vextria",
  },
}: SlideTabsProps) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  // State to track the currently selected tab, defaulting to the first tab (index 0)
  const [selected, setSelected] = useState(0);
  const tabsRef = useRef<(HTMLLIElement | null)[]>([]);

  // This effect runs when the component mounts or when the selected tab changes.
  // It calculates the position of the selected tab and sets the cursor.
  useEffect(() => {
    const selectedTab = tabsRef.current[selected];
    if (selectedTab) {
      const { width } = selectedTab.getBoundingClientRect();
      setPosition({
        left: selectedTab.offsetLeft,
        width,
        opacity: 1,
      });
    }
  }, [selected]);

  return (
    <div className="relative w-full flex items-center justify-center">
      {/* Logo Section - positioned on the left, overlapping with navbar */}
      <a
        href="#hero"
        className="absolute left-1/2 flex items-center gap-2 flex-shrink-0"
        style={{
          transform: "translateX(calc(-100% - 12px))",
        }}
      >
        <img
          src="/vextrialogo2.svg"
          alt={logo.alt}
          className="w-8 h-8"
          style={{
            filter: "drop-shadow(0 0 8px rgba(74, 154, 232, 0.6))",
          }}
        />
        <span
          className="text-lg font-bold tracking-tight whitespace-nowrap"
          style={{
            background: "linear-gradient(135deg, #5AADE8 0%, #A8D8F0 50%, #4A9AE8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {logo.title}
        </span>
      </a>

      {/* Centered Navbar */}
      <ul
        onMouseLeave={() => {
          // When the mouse leaves the container, reset the cursor
          // to the position of the currently selected tab.
          const selectedTab = tabsRef.current[selected];
          if (selectedTab) {
            const { width } = selectedTab.getBoundingClientRect();
            setPosition({
              left: selectedTab.offsetLeft,
              width,
              opacity: 1,
            });
          }
        }}
        className="relative flex w-fit rounded-full border-2 border-white/20 bg-black/40 backdrop-blur-xl p-1"
        style={{
          boxShadow: "0 0 15px rgba(74, 154, 232, 0.3), 0 0 40px rgba(26, 96, 171, 0.2)",
        }}
      >
        {tabs.map((tab, i) => (
          <Tab
            key={tab.label}
            ref={(el) => (tabsRef.current[i] = el)}
            setPosition={setPosition}
            onClick={() => setSelected(i)}
            href={tab.href}
          >
            {tab.label}
          </Tab>
        ))}

        <Cursor position={position} />
      </ul>
    </div>
  );
};

// The Tab component is wrapped in forwardRef to accept a ref from its parent.
const Tab = React.forwardRef<
  HTMLLIElement,
  {
    children: React.ReactNode;
    setPosition: (position: { left: number; width: number; opacity: number }) => void;
    onClick: () => void;
    href: string;
  }
>(({ children, setPosition, onClick, href }, ref) => {
  return (
    <li
      ref={ref}
      onClick={onClick}
      onMouseEnter={() => {
        if (!ref || typeof ref === "function") return;
        const current = ref.current;
        if (!current) return;

        const { width } = current.getBoundingClientRect();

        setPosition({
          left: current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base font-medium tracking-wide transition-all"
    >
      <a href={href} className="block">
        {children}
      </a>
    </li>
  );
});

Tab.displayName = "Tab";

const Cursor = ({
  position,
}: {
  position: { left: number; width: number; opacity: number };
}) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full md:h-12"
      style={{
        background: "linear-gradient(135deg, #4A9AE8 0%, #1A60AB 100%)",
        boxShadow: "0 0 12px rgba(74, 154, 232, 0.8), 0 0 30px rgba(26, 96, 171, 0.5)",
      }}
    />
  );
};
