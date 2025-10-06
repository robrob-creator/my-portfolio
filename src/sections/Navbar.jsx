import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

function Navigation() {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
  ];

  return (
    <ul className="flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
      {navItems.map((item, index) => (
        <motion.li
          key={item.name}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
          className="relative group"
        >
          <a
            className="relative px-4 py-2 text-sm font-medium text-neutral-300 transition-all duration-300 hover:text-secondary group-hover:text-secondary"
            href={item.href}
          >
            {item.name}
            {/* Hover effect underline */}
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-secondary to-accent"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
            {/* Hover glow effect */}
            <motion.div
              className="absolute inset-0 rounded-lg bg-secondary/10 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            />
          </a>
        </motion.li>
      ))}
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed inset-x-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-black/20 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-4 sm:py-6">
          {/* Logo */}
          <motion.a
            href="/"
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent">
              &lt;Robert
            </span>
            <span className="text-2xl font-bold text-white/80 ml-1">/&gt;</span>
            {/* Logo glow effect */}
            <motion.div
              className="absolute -inset-2 rounded-lg bg-gradient-to-r from-secondary/20 to-accent/20 blur-md"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="relative p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 sm:hidden hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </motion.div>
          </motion.button>

          {/* Desktop navigation */}
          <nav className="hidden sm:block">
            <Navigation />
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="sm:hidden bg-black/40 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-4 py-6">
              <Navigation />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
