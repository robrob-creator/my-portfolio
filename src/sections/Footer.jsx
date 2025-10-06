import { mySocials } from "../constants";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-t from-black/90 to-transparent">
      <div className="c-space py-12">
        {/* Top section with logo and description */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-white mb-2">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Robert D. Cumahig Jr.
              </span>
            </h3>
            <p className="text-neutral-300 max-w-md">
              Frontend Software Engineer & Tech Lead specializing in fintech
              solutions. Building scalable applications with Flutter, React, and
              modern web technologies.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {mySocials.map((social, index) => (
              <a
                href={social.href}
                key={index}
                className="group p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={social.icon}
                  className="w-5 h-5 filter invert group-hover:invert-0 transition-all duration-300"
                  alt={social.name}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mb-8 bg-gradient-to-r from-transparent via-white/30 to-transparent h-[1px] w-full" />

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-neutral-300 hover:text-white transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  className="text-neutral-300 hover:text-white transition-colors duration-300"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-neutral-300 hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-neutral-300">Frontend Development</span>
              </li>
              <li>
                <span className="text-neutral-300">Tech Leadership</span>
              </li>
              <li>
                <span className="text-neutral-300">Fintech Solutions</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Technologies</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-neutral-300">Flutter & React</span>
              </li>
              <li>
                <span className="text-neutral-300">Node.js & TypeScript</span>
              </li>
              <li>
                <span className="text-neutral-300">Cross-Platform Apps</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between pt-6 border-t border-white/10">
          <div className="flex flex-wrap gap-4 mb-4 md:mb-0 text-sm">
            <a
              href="#"
              className="text-neutral-400 hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <span className="text-neutral-600">|</span>
            <a
              href="#"
              className="text-neutral-400 hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </a>
            <span className="text-neutral-600">|</span>
            <a
              href="mailto:robertcumahig@gmail.com"
              className="text-neutral-400 hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          <p className="text-neutral-400 text-sm">
            © 2025 Robert D. Cumahig Jr. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
