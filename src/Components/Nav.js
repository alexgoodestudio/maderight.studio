import React, { useState } from "react";

function Nav() {
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isFeaturedOpen, setIsFeaturedOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation - Sticky */}
      <nav className="hidden md:flex justify-center sticky top-0 z-50 px-4 py-4">
        <div className="bg-green-950 rounded-full px-5 py-2 flex items-center gap-5 shadow-lg">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 text-white font-semibold text-sm no-underline pr-3 border-r border-green-800">
            Made Right
          </a>

          {/* Navigation Links */}
          <a href="/our-process" className="text-white text-xs hover:text-gray-300 transition-colors no-underline">
            Our Process
          </a>

          <a href="/blog" className="text-white text-xs hover:text-gray-300 transition-colors no-underline">
            Blog
          </a>

          {/* Socials Dropdown */}
          <div className="relative">
            <button
              className="text-white text-xs hover:text-gray-300 transition-colors flex items-center gap-1"
              onMouseEnter={() => setIsCompanyOpen(true)}
              onMouseLeave={() => setIsCompanyOpen(false)}
            >
              Socials
              <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isCompanyOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-44 bg-white rounded-xl shadow-lg py-1 z-50"
                onMouseEnter={() => setIsCompanyOpen(true)}
                onMouseLeave={() => setIsCompanyOpen(false)}
              >
                <a href="https://www.linkedin.com/in/alexgoodestudio/" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-xs text-gray-700 hover:bg-gray-100 no-underline rounded-lg mx-1">
                  LinkedIn
                </a>
                <a href="https://instagram.com/maderight.studio" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-xs text-gray-700 hover:bg-gray-100 no-underline rounded-lg mx-1">
                  Instagram
                </a>
              </div>
            )}
          </div>

          {/* Featured Work Dropdown */}
          <div className="relative">
            <button
              className="text-white text-xs hover:text-gray-300 transition-colors flex items-center gap-1"
              onMouseEnter={() => setIsFeaturedOpen(true)}
              onMouseLeave={() => setIsFeaturedOpen(false)}
            >
              Featured Work
              <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isFeaturedOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-lg py-1 z-50"
                onMouseEnter={() => setIsFeaturedOpen(true)}
                onMouseLeave={() => setIsFeaturedOpen(false)}
              >
                <a href="http://alexgoode.netlify.app/" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 hover:bg-gray-100 no-underline rounded-lg mx-1">
                  <div className="text-xs font-medium text-gray-900">Owner</div>
                  <div className="text-xs text-gray-500 mt-0.5">Alex Goode Portfolio</div>
                </a>
                <a href="https://lemichclinic.netlify.app" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 hover:bg-gray-100 no-underline rounded-lg mx-1">
                  <div className="text-xs font-medium text-gray-900">The Lemich Clinic</div>
                  <div className="text-xs text-gray-500 mt-0.5">Healthcare Website</div>
                </a>
                <a href="https://rosewoodcleaning.netlify.app" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 hover:bg-gray-100 no-underline rounded-lg mx-1">
                  <div className="text-xs font-medium text-gray-900">Rosewood Cleaning</div>
                  <div className="text-xs text-gray-500 mt-0.5">Service Business</div>
                </a>
              </div>
            )}
          </div>

          {/* CTA Button */}
          <a href="mailto:alexgoode2@gmail.com" className="bg-white text-green-950 px-4 py-1.5 rounded-full text-xs font-medium hover:bg-gray-100 transition-colors ml-1 no-underline">
            Book a Demo
          </a>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden sticky top-3 z-50 px-3 pt-2 pb-4">
        <div className="bg-green-950 rounded-lg">
          <div className="flex justify-between items-center px-4 py-2">
            <a href="/" className="flex items-center gap-2 text-white font-semibold text-base no-underline">
              Made Right
            </a>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="bg-white text-green-950 px-4 py-2 rounded-lg text-sm font-medium"
            >
              Menu
            </button>
          </div>

          {isMobileOpen && (
            <div className="bg-white rounded-b-lg">
              <div className="px-4 pb-4 border-t border-gray-100">
                <div className="flex flex-col gap-1 pt-2">
                  <a href="/our-process" className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg no-underline">
                    Our Process
                  </a>
                  <a href="/blog" className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg no-underline">
                    Blog
                  </a>

                  <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mt-1">
                    Socials
                  </div>
                  <a href="https://www.linkedin.com/in/alexgoodestudio/" target="_blank" rel="noopener noreferrer" className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg no-underline">
                    LinkedIn
                  </a>
                  <a href="https://instagram.com/maderight.studio" target="_blank" rel="noopener noreferrer" className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg no-underline">
                    Instagram
                  </a>

                  <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mt-1">
                    Featured Work
                  </div>
                  <a href="http://alexgoode.netlify.app/" target="_blank" rel="noopener noreferrer" className="px-3 py-2 hover:bg-gray-100 rounded-lg no-underline">
                    <div className="text-sm font-medium text-gray-900">Owner</div>
                    <div className="text-xs text-gray-500 mt-0.5">Alex Goode Portfolio</div>
                  </a>
                  <a href="https://lemichclinic.netlify.app" target="_blank" rel="noopener noreferrer" className="px-3 py-2 hover:bg-gray-100 rounded-lg no-underline">
                    <div className="text-sm font-medium text-gray-900">The Lemich Clinic</div>
                    <div className="text-xs text-gray-500 mt-0.5">Healthcare Website</div>
                  </a>
                  <a href="https://rosewoodcleaning.netlify.app" target="_blank" rel="noopener noreferrer" className="px-3 py-2 hover:bg-gray-100 rounded-lg no-underline">
                    <div className="text-sm font-medium text-gray-900">Rosewood Cleaning</div>
                    <div className="text-xs text-gray-500 mt-0.5">Service Business</div>
                  </a>

                  <a href="#contact" className="mt-2 bg-green-950 text-white px-4 py-2 rounded-full text-center text-sm font-medium no-underline">
                    Book a Demo
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