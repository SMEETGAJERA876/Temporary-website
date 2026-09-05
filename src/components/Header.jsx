import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight } from 'lucide-react';
import Logo from './Logo';
import { Link, useRoute, navigate } from '../router';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Industries', href: '/industries' },
  { name: 'Technology', href: '/technology' },
  { name: 'Case Studies', href: '/resources' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const path = useRoute();

  const railRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      railRef.current?.style.setProperty('--read', max > 0 ? window.scrollY / max : 0);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [path]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans bg-white overflow-hidden ${
          isScrolled
            ? 'h-[74px] shadow-sm border-b border-[#E2E6EF] bg-white/95 backdrop-blur-md'
            : 'h-[82px] border-b border-[#E2E6EF]/70'
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-6 md:px-8 flex items-center justify-between">
          
          {/* LEFT: Modern Company Logo */}
          <Link to="/" className="flex items-center group py-1" aria-label="dhgsoft home">
            <Logo className="h-7 md:h-8 w-auto hover:opacity-90 transition-opacity" variant="colored" />
          </Link>

          {/* CENTER / RIGHT: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-[14px] xl:text-[15px] font-medium text-[#5B6475]">
            {navItems.map((item) => {
              const active = path === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={`group relative py-1 transition-colors duration-200 hover:text-[#0111A2] ${
                    active ? 'text-[#0111A2] font-semibold' : ''
                  }`}
                >
                  <span>{item.name}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#0111A2] transition-all duration-300 group-hover:w-full ${
                      active ? 'w-full' : 'w-0'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* RIGHT SIDE: Secondary Login + Primary Orange CTA */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            <a
              href="#login"
              className="hidden xl:inline text-[14px] font-semibold text-[#5B6475] hover:text-[#0111A2] transition-colors"
            >
              Client Portal
            </a>

            <motion.a
              href="/contact"
              onClick={(e) => {
                if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
                e.preventDefault();
                navigate('/contact');
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="sheen px-6 py-2.5 rounded-[8px] bg-[#E86A1C] hover:bg-[#d55e15] text-white font-semibold text-[14px] shadow-sm transition-all duration-200"
            >
              Get Started
            </motion.a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#111827] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#E86A1C]" /> : <Menu className="w-6 h-6 text-[#0111A2]" />}
            </button>
          </div>

        </div>

        {/* Reading progress rail */}
        <div
          ref={railRef}
          className="scroll-rail absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0111A2] to-[#E86A1C]"
          aria-hidden="true"
        />
      </header>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white pt-24 px-8 pb-12 flex flex-col justify-between overflow-y-auto lg:hidden"
          >
            <div className="flex flex-col gap-5 text-left pt-4">
              {navItems.map((item, idx) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-display font-bold text-[#111827] hover:text-[#0111A2] flex items-center justify-between border-b border-[#E2E6EF] pb-3"
                >
                  <span>{item.name}</span>
                  <ChevronRight className="w-5 h-5 text-[#E86A1C]" />
                </Link>
              ))}
            </div>

            <div className="pt-8 flex flex-col gap-3">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-[8px] bg-[#E86A1C] text-white text-center font-bold text-[15px] shadow-md flex items-center justify-center gap-2"
              >
                Get Started
              </Link>
              <div className="text-xs text-[#5B6475] text-center font-mono">
                dhgsoft • Engineering Intelligent Industries
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
