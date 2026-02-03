import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Problem', href: '#pain' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Dashboard', href: '#features' },
    { name: 'Add-Ons', href: '#frameworks' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-lg border-b border-white/10">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <img
            src="/vextrialogo.svg"
            alt="Vextria"
            className="w-8 h-8"
          />
          <span className="text-white text-lg font-bold bg-gradient-to-r from-[#5AADE8] via-[#A8D8F0] to-[#4A9AE8] bg-clip-text text-transparent">
            Vextria
          </span>
        </a>

        {/* CTA Button - Visible when menu is closed */}
        {!isOpen && (
          <a
            href="https://calendly.com/abdurrehman1711/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg text-xs font-semibold text-white transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #4A9AE8, #1A60AB)',
              boxShadow: '0 0 10px rgba(74, 154, 232, 0.5)',
            }}
          >
            Book Demo
          </a>
        )}

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors ml-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-black/98 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}

              {/* Mobile CTA */}
              <a
                href="https://calendly.com/abdurrehman1711/30min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="block mt-4 px-4 py-3 rounded-lg text-center font-semibold text-white transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #4A9AE8, #1A60AB)',
                  boxShadow: '0 0 15px rgba(74, 154, 232, 0.6)',
                }}
              >
                Schedule a Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNavbar;
