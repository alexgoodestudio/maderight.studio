import { useState } from "react";

function Nav() {
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isFeaturedOpen, setIsFeaturedOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';

  const handleContactClick = () => {
    window.location.href = "mailto:alexgoode2@gmail.com";
  };

  const isActive = (path) => currentPath === path;

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex justify-between items-center sticky bg-teal-950 top-0 z-50 px-4 py-3">
        {/* Main Navigation Pill */}
        <div className="bg-teal-900 rounded-full px-4 py-2 flex items-center gap-4 shadow-lg mx-auto">
          {/* Logo */}
          <a 
            href="/" 
            className="flex items-center text-white font-semibold text-sm no-underline pr-3 border-r border-green-800"
            aria-label="Made Right Studio Home"
          >
            Made Right  
          </a>

          {/* Navigation Links */}
          <a 
            href="/about" 
            className={`text-xs transition-colors no-underline px-3 py-1.5 rounded-full ${
              isActive('/about') 
                ? 'bg-white text-teal-950 font-medium' 
                : 'text-white hover:text-gray-300'
            }`}
            aria-current={isActive('/about') ? 'page' : undefined}
          >
            About
          </a>

          <a 
            href="/team" 
            className={`text-xs transition-colors no-underline px-3 py-1.5 rounded-full ${
              isActive('/team') 
                ? 'bg-white text-teal-950 font-medium' 
                : 'text-white hover:text-gray-300'
            }`}
            aria-current={isActive('/team') ? 'page' : undefined}
          >
            Team
          </a>

          <a 
            href="/our-process" 
            className={`text-xs transition-colors no-underline px-3 py-1.5 rounded-full ${
              isActive('/our-process') 
                ? 'bg-white text-teal-950 font-medium' 
                : 'text-white hover:text-gray-300'
            }`}
            aria-current={isActive('/our-process') ? 'page' : undefined}
          >
            Our Process
          </a>

          {/* Featured Work Dropdown */}
          <div className="relative">
            <button
              className="text-white text-xs hover:text-gray-300 transition-colors flex items-center gap-1"
              onMouseEnter={() => setIsFeaturedOpen(true)}
              onMouseLeave={() => setIsFeaturedOpen(false)}
              aria-expanded={isFeaturedOpen}
              aria-haspopup="true"
            >
              Featured Work
              <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isFeaturedOpen && (
              <div
                className="absolute top-full left-0 pt-2 w-52 z-50"
                onMouseEnter={() => setIsFeaturedOpen(true)}
                onMouseLeave={() => setIsFeaturedOpen(false)}
              >
                <div className="bg-white rounded-xl shadow-lg py-1">
                  <a 
                    href="http://alexgoode.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block px-3 py-2 hover:bg-gray-100 no-underline rounded-lg mx-1"
                  >
                    <div className="text-xs font-medium text-gray-900">Owner</div>
                    <div className="text-xs text-gray-500 mt-0.5">Alex Goode Portfolio</div>
                  </a>
                  <a 
                    href="https://lemichclinic.netlify.app" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block px-3 py-2 hover:bg-gray-100 no-underline rounded-lg mx-1"
                  >
                    <div className="text-xs font-medium text-gray-900">The Lemich Clinic</div>
                    <div className="text-xs text-gray-500 mt-0.5">Healthcare Website</div>
                  </a>
                  <a 
                    href="https://rosewoodcleaning.netlify.app" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block px-3 py-2 hover:bg-gray-100 no-underline rounded-lg mx-1"
                  >
                    <div className="text-xs font-medium text-gray-900">Rosewood Cleaning</div>
                    <div className="text-xs text-gray-500 mt-0.5">Service Business</div>
                  </a>
                </div>
              </div>
            )}
          </div>

          <a 
            href="/blog" 
            className={`text-xs transition-colors no-underline px-3 py-1.5 rounded-full ${
              isActive('/blog') 
                ? 'bg-white text-teal-950 font-medium' 
                : 'text-white hover:text-gray-300'
            }`}
            style={{ letterSpacing: '0.02em' }}
            aria-current={isActive('/blog') ? 'page' : undefined}
          >
            Blog
          </a>
        </div>

        {/* Right Side Links */}
        <div className="flex items-center gap-3">
          <button 
            onClick={handleContactClick}
            className="bg-white text-green-950 px-5 py-2 rounded-full text-xs transition-colors cursor-pointer border-0 hover:bg-gray-100"
            aria-label="Email us"
          >
            Email Us
          </button>

          {/* Socials Dropdown */}
          <div className="relative">
            <button
              className="text-white bg-teal-900 py-2 px-5 rounded-md text-xs font-medium hover:text-slate-300 transition-colors flex items-center gap-1"
              style={{ letterSpacing: '0.02em' }}
              onMouseEnter={() => setIsCompanyOpen(true)}
              onMouseLeave={() => setIsCompanyOpen(false)}
              aria-expanded={isCompanyOpen}
              aria-haspopup="true"
            >
              Socials
              <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isCompanyOpen && (
              <div
                className="absolute top-full right-0 pt-2 w-44 z-50"
                onMouseEnter={() => setIsCompanyOpen(true)}
                onMouseLeave={() => setIsCompanyOpen(false)}
              >
                <div className="bg-white rounded-xl shadow-lg py-1">
                  <a 
                    href="https://instagram.com/maderight.studio" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block px-3 py-2 text-xs text-gray-700 hover:bg-gray-100 no-underline rounded-lg mx-1"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Tablet Navigation (768px - 1023px) */}
      <nav className="hidden md:flex lg:hidden sticky top-0 z-50 bg-teal-950 px-3 py-3">
        <div className="bg-teal-900 rounded-lg w-full">
          <div className="flex justify-between items-center px-4 py-3">
            <a 
              href="/" 
              className="flex items-center text-white font-semibold text-base no-underline"
              aria-label="Made Right Studio Home"
            >
              Made Right 
            </a>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="bg-white text-green-950 px-4 py-2 rounded-lg text-sm font-medium"
              aria-expanded={isMobileOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileOpen ? 'Close' : 'Menu'}
            </button>
          </div>

          {isMobileOpen && (
            <div className="bg-slate-900 rounded-b-lg">
              <div className="px-4 pb-4">
                <div className="flex flex-col gap-1 pt-2">
                  <a 
                    href="/about" 
                    className={`px-3 py-2 text-sm rounded-lg no-underline ${
                      isActive('/about')
                        ? 'bg-white text-teal-950 font-medium'
                        : 'text-white hover:bg-green-900'
                    }`}
                  >
                    About
                  </a>
                  <a 
                    href="/team" 
                    className={`px-3 py-2 text-sm rounded-lg no-underline ${
                      isActive('/team')
                        ? 'bg-white text-teal-950 font-medium'
                        : 'text-white hover:bg-green-900'
                    }`}
                  >
                    Team
                  </a>
                  <a 
                    href="/our-process" 
                    className={`px-3 py-2 text-sm rounded-lg no-underline ${
                      isActive('/our-process')
                        ? 'bg-white text-teal-950 font-medium'
                        : 'text-white hover:bg-green-900'
                    }`}
                  >
                    Our Process
                  </a>
                  <a 
                    href="/blog" 
                    className={`px-3 py-2 text-sm rounded-lg no-underline ${
                      isActive('/blog')
                        ? 'bg-white text-teal-950 font-medium'
                        : 'text-white hover:bg-green-900'
                    }`}
                  >
                    Blog
                  </a>

                  <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mt-2" style={{ letterSpacing: '0.15em' }}>
                    Featured Work
                  </div>
                  <a 
                    href="http://alexgoode.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-3 py-2 hover:bg-green-900 rounded-lg no-underline"
                  >
                    <div className="text-sm font-medium text-white">Portfolio | Owner</div>
                    <div className="text-xs text-gray-300 mt-0.5">Alex Goode Portfolio</div>
                  </a>
                  <a 
                    href="https://lemichclinic.netlify.app" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-3 py-2 hover:bg-green-900 rounded-lg no-underline"
                  >
                    <div className="text-sm font-medium text-white">The Lemich Clinic</div>
                    <div className="text-xs text-gray-300 mt-0.5">Healthcare Website</div>
                  </a>
                  <a 
                    href="https://rosewoodcleaning.netlify.app" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-3 py-2 hover:bg-green-900 rounded-lg no-underline"
                  >
                    <div className="text-sm font-medium text-white">Rosewood Cleaning</div>
                    <div className="text-xs text-gray-300 mt-0.5">Service Business</div>
                  </a>

                  <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mt-2" style={{ letterSpacing: '0.15em' }}>
                    Socials
                  </div>
                  <a 
                    href="https://instagram.com/maderight.studio" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-3 py-2 text-sm text-white hover:bg-green-900 rounded-lg no-underline"
                  >
                    Instagram
                  </a>

                  <a 
                    href="mailto:alexgoode2@gmail.com" 
                    className="mt-3 bg-white text-green-950 px-4 py-2 rounded-full text-center text-sm font-medium no-underline hover:bg-gray-100"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Navigation (< 768px) */}
      <nav className="md:hidden sticky top-0 z-50 px-3 pt-2 pb-3 bg-teal-950">
        <div className="bg-teal-900 rounded-lg">
          <div className="flex justify-between items-center px-3 py-2.5">
            <a 
              href="/" 
              className="flex items-center text-white font-semibold text-sm no-underline"
              aria-label="Made Right Studio Home"
            >
              Made Right 
            </a>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="bg-white text-green-950 px-3 py-1.5 rounded-lg text-xs font-medium"
              aria-expanded={isMobileOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileOpen ? 'Close' : 'Menu'}
            </button>
          </div>

          {isMobileOpen && (
            <div className="bg-slate-900 rounded-b-lg">
              <div className="px-3 pb-3">
                <div className="flex flex-col gap-1 pt-2">
                  <a 
                    href="/about" 
                    className={`px-3 py-2 text-sm rounded-lg no-underline ${
                      isActive('/about')
                        ? 'bg-white text-teal-950 font-medium'
                        : 'text-white hover:bg-green-900'
                    }`}
                  >
                    About
                  </a>
                  <a 
                    href="/team" 
                    className={`px-3 py-2 text-sm rounded-lg no-underline ${
                      isActive('/team')
                        ? 'bg-white text-teal-950 font-medium'
                        : 'text-white hover:bg-green-900'
                    }`}
                  >
                    Team
                  </a>
                  <a 
                    href="/our-process" 
                    className={`px-3 py-2 text-sm rounded-lg no-underline ${
                      isActive('/our-process')
                        ? 'bg-white text-teal-950 font-medium'
                        : 'text-white hover:bg-green-900'
                    }`}
                  >
                    Our Process
                  </a>
                  <a 
                    href="/blog" 
                    className={`px-3 py-2 text-sm rounded-lg no-underline ${
                      isActive('/blog')
                        ? 'bg-white text-teal-950 font-medium'
                        : 'text-white hover:bg-green-900'
                    }`}
                  >
                    Blog
                  </a>

                  <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mt-1" style={{ letterSpacing: '0.15em' }}>
                    Featured Work
                  </div>
                  <a 
                    href="http://alexgoode.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-3 py-2 hover:bg-green-900 rounded-lg no-underline"
                  >
                    <div className="text-sm font-medium text-white">Portfolio | Owner</div>
                    <div className="text-xs text-gray-300 mt-0.5">Alex Goode</div>
                  </a>
                  <a 
                    href="https://lemichclinic.netlify.app" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-3 py-2 hover:bg-green-900 rounded-lg no-underline"
                  >
                    <div className="text-sm font-medium text-white">The Lemich Clinic</div>
                    <div className="text-xs text-gray-300 mt-0.5">Healthcare</div>
                  </a>
                  <a 
                    href="https://rosewoodcleaning.netlify.app" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-3 py-2 hover:bg-green-900 rounded-lg no-underline"
                  >
                    <div className="text-sm font-medium text-white">Rosewood Cleaning</div>
                    <div className="text-xs text-gray-300 mt-0.5">Service Business</div>
                  </a>

                  <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mt-1" style={{ letterSpacing: '0.15em' }}>
                    Socials
                  </div>
                  <a 
                    href="https://instagram.com/maderight.studio" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-3 py-2 text-sm text-white hover:bg-green-900 rounded-lg no-underline"
                  >
                    Instagram
                  </a>

                  <a 
                    href="mailto:alexgoode2@gmail.com" 
                    className="mt-2 bg-white text-green-950 px-4 py-2 rounded-full text-center text-sm font-medium no-underline hover:bg-gray-100"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Nav;