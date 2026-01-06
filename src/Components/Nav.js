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
        {/* Logo Text - Left Side */}
        <a
          href="/"
          className="flex items-center eighties no-underline text-4xl"
          style={{ color: '#FFFFFF' }}
          aria-label="Made Right Studio Home"
        >
          made right 
        </a>

        {/* Main Navigation Pill */}
        <div className="bg-teal-900 nunito-bold rounded-full px-4 py-2 flex items-center gap-4 shadow-lg mx-auto">
          {/* Logo Text */}
          <a
            href="/"
            className="flex items-center font-semibold text-sm no-underline pr-3 border-r border-green-800"
            style={{ color: '#FFFFFF' }}
            aria-label="Made Right Studio Home"
          >
            Home
          </a>

          {/* Navigation Links */}
          <a
            href="/about"
            className={`text-sm no-underline px-3 py-1.5 rounded-full ${
              isActive('/about')
                ? 'bg-white text-teal-950 font-medium'
                : 'text-white hover:bg-teal-800'
            }`}
            style={{
              transition: 'all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
              letterSpacing: '0.01em'
            }}
            aria-current={isActive('/about') ? 'page' : undefined}
          >
            About
          </a>

          <a
            href="/team"
            className={`text-sm no-underline px-3 py-1.5 rounded-full ${
              isActive('/team')
                ? 'bg-white text-teal-950 font-medium'
                : 'text-white hover:bg-teal-800'
            }`}
            style={{
              transition: 'all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
              letterSpacing: '0.01em'
            }}
            aria-current={isActive('/team') ? 'page' : undefined}
          >
            Team
          </a>

          <a
            href="/our-process"
            className={`text-sm no-underline px-3 py-1.5 rounded-full ${
              isActive('/our-process')
                ? 'bg-white text-teal-950 font-medium'
                : 'text-white hover:bg-teal-800'
            }`}
            style={{
              transition: 'all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
              letterSpacing: '0.01em'
            }}
            aria-current={isActive('/our-process') ? 'page' : undefined}
          >
           Process
          </a>

          {/* Featured Work Dropdown */}
          <div className="relative">
            <button
              className="text-white text-sm hover:bg-teal-800 px-3 py-1.5 rounded-full flex items-center gap-1"
              style={{
                transition: 'all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                letterSpacing: '0.01em'
              }}
              onMouseEnter={() => setIsFeaturedOpen(true)}
              onMouseLeave={() => setIsFeaturedOpen(false)}
              aria-expanded={isFeaturedOpen}
              aria-haspopup="true"
            >
              Featured Work
              <svg
                className="w-2.5 h-2.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                style={{
                  transition: 'transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                  transform: isFeaturedOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isFeaturedOpen && (
              <div
                className="absolute top-full left-0 w-72 z-50"
                style={{
                  paddingTop: '16px',
                  transform: 'translate3d(0,0,0)'
                }}
                onMouseEnter={() => setIsFeaturedOpen(true)}
                onMouseLeave={() => setIsFeaturedOpen(false)}
              >
                <div
                  className="bg-white border border-slate-900"
                  style={{
                    borderRadius: '0',
                    boxShadow: '4px 4px 0 rgba(15, 23, 42, 0.08)'
                  }}
                >
                  {/* Whitney-inspired catalog header */}
                  <div
                    className="px-6 py-3 border-b border-slate-200 bg-green-400"
                    // style={{ backgroundColor: 'rgba(248, 250, 252, 0.6)' }}
                  >
                    <div
                      className="text-xs font-mono uppercase text-slate-600"
                      style={{
                        letterSpacing: '0.15em',
                        lineHeight: '1.3'
                      }}
                    >
                      Selected Projects
                    </div>
                  </div>

                  {/* Muuto-inspired minimal list with Whitney spacing */}
                  <div style={{ padding: '8px 0' }}>
                    <a
                      href="http://alexgoode.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-6 py-4 hover:bg-stone-50 no-underline group"
                      style={{
                        transition: 'background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                        borderBottom: '1px solid rgba(226, 232, 240, 0.5)'
                      }}
                    >
                      <div
                        className="text-xs font-mono uppercase text-slate-500 mb-2"
                        style={{
                          letterSpacing: '0.1em',
                          lineHeight: '1.3'
                        }}
                      >
                        Portfolio / 2024
                      </div>
                      <div
                        className="text-base text-slate-900 group-hover:text-slate-900"
                        style={{
                          letterSpacing: '-0.01em',
                          lineHeight: '1.4',
                          fontWeight: '500'
                        }}
                      >
                        Alex Goode
                      </div>
                      <div
                        className="text-sm text-slate-600 mt-1"
                        style={{
                          letterSpacing: '0',
                          lineHeight: '1.4'
                        }}
                      >
                        Studio Owner
                      </div>
                    </a>

                    <a
                      href="https://lemich.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-6 py-4 hover:bg-stone-50 no-underline group"
                      style={{
                        transition: 'background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                        borderBottom: '1px solid rgba(226, 232, 240, 0.5)'
                      }}
                    >
                      <div
                        className="text-xs font-mono uppercase text-slate-500 mb-2"
                        style={{
                          letterSpacing: '0.1em',
                          lineHeight: '1.3'
                        }}
                      >
                        Healthcare / 2024
                      </div>
                      <div
                        className="text-base text-slate-900 group-hover:text-slate-900"
                        style={{
                          letterSpacing: '-0.01em',
                          lineHeight: '1.4',
                          fontWeight: '500'
                        }}
                      >
                        The Lemich Clinic
                      </div>
                      <div
                        className="text-sm text-slate-600 mt-1"
                        style={{
                          letterSpacing: '0',
                          lineHeight: '1.4'
                        }}
                      >
                        Norfolk, Virginia
                      </div>
                    </a>

                    <a
                      href="https://rosewoodcleaning.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-6 py-4 hover:bg-stone-50 no-underline group"
                      style={{
                        transition: 'background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)'
                      }}
                    >
                      <div
                        className="text-xs font-mono uppercase text-slate-500 mb-2"
                        style={{
                          letterSpacing: '0.1em',
                          lineHeight: '1.3'
                        }}
                      >
                        Service / 2024
                      </div>
                      <div
                        className="text-base text-slate-900 group-hover:text-slate-900"
                        style={{
                          letterSpacing: '-0.01em',
                          lineHeight: '1.4',
                          fontWeight: '500'
                        }}
                      >
                        Rosewood Cleaning
                      </div>
                      <div
                        className="text-sm text-slate-600 mt-1"
                        style={{
                          letterSpacing: '0',
                          lineHeight: '1.4'
                        }}
                      >
                        Columbia, South Carolina
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* <a 
            href="/blog" 
            className={`text-sm transition-colors no-underline px-3 py-1.5 rounded-full ${
              isActive('/blog') 
                ? 'bg-white text-teal-950 font-medium' 
                : 'text-white hover:text-gray-300'
            }`}
            style={{ letterSpacing: '0.02em' }}
            aria-current={isActive('/blog') ? 'page' : undefined}
          >
            Blog
          </a> */}
        </div>

        {/* Right Side Links */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleContactClick}
            className="bg-white  text-green-900 px-5 py-2 font-semibold rounded-full text-sm cursor-pointer border-0 hover:bg-stone-100"
            style={{
              transition: 'all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
              letterSpacing: '0.01em'
            }}
            aria-label="Email us"
          >
            Email
          </button>

          {/* Socials Dropdown */}
          <div className="relative">
            <button
              className="text-white bg-teal-900 py-2 px-5 rounded-full text-sm font-medium hover:bg-teal-800 flex items-center gap-1 nav-dropdown-button"
              style={{
                transition: 'all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                letterSpacing: '0.01em'
              }}
              onMouseEnter={() => setIsCompanyOpen(true)}
              onMouseLeave={() => setIsCompanyOpen(false)}
              aria-expanded={isCompanyOpen}
              aria-haspopup="true"
            >
              Socials
              <svg
                className="w-2.5 h-2.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                style={{
                  transition: 'transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                  transform: isCompanyOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                }}
              >
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
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 no-underline rounded-lg mx-1"
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
              className="flex items-center eighties no-underline"
              style={{ color: '#FFFFFF' }}
              aria-label="Made Right Studio Home"
            >
              🧤 Made Right
            </a>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="bg-white text-green-950 px-4 py-2 rounded-lg"
              aria-expanded={isMobileOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>

          {isMobileOpen && (
            <div className="bg-white border border-slate-900 mt-3 mx-3 mb-3" style={{ borderRadius: '0', boxShadow: '4px 4px 0 rgba(15, 23, 42, 0.08)' }}>
              {/* Catalog header */}
              <div className="px-5 py-3 border-b border-slate-200" style={{ backgroundColor: 'rgba(248, 250, 252, 0.6)' }}>
                <div className="text-xs font-mono uppercase text-slate-600" style={{ letterSpacing: '0.15em', lineHeight: '1.3' }}>
                  Navigation
                </div>
              </div>

              <div className="pb-2">
                {/* Studio Links */}
                <a
                  href="/"
                  className="block px-5 py-3 hover:bg-stone-50 no-underline"
                  style={{
                    transition: 'background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                    borderBottom: '1px solid rgba(226, 232, 240, 0.5)'
                  }}
                >
                  <div className="text-sm text-slate-900" style={{ letterSpacing: '-0.01em', fontWeight: '500' }}>
                    Home
                  </div>
                </a>
                <a
                  href="/about"
                  className="block px-5 py-3 hover:bg-stone-50 no-underline"
                  style={{
                    transition: 'background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                    borderBottom: '1px solid rgba(226, 232, 240, 0.5)'
                  }}
                >
                  <div className="text-sm text-slate-900" style={{ letterSpacing: '-0.01em', fontWeight: '500' }}>
                    About
                  </div>
                </a>
                <a
                  href="/team"
                  className="block px-5 py-3 hover:bg-stone-50 no-underline"
                  style={{
                    transition: 'background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                    borderBottom: '1px solid rgba(226, 232, 240, 0.5)'
                  }}
                >
                  <div className="text-sm text-slate-900" style={{ letterSpacing: '-0.01em', fontWeight: '500' }}>
                    Team
                  </div>
                </a>
                <a
                  href="/our-process"
                  className="block px-5 py-3 hover:bg-stone-50 no-underline"
                  style={{
                    transition: 'background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                    borderBottom: '1px solid rgba(226, 232, 240, 0.5)'
                  }}
                >
                  <div className="text-sm text-slate-900" style={{ letterSpacing: '-0.01em', fontWeight: '500' }}>
                    Our Process
                  </div>
                </a>

                {/* Featured Work Section */}
                <div className="px-5 py-3 border-b border-slate-200 mt-2" style={{ backgroundColor: 'rgba(248, 250, 252, 0.6)' }}>
                  <div className="text-xs font-mono uppercase text-slate-600" style={{ letterSpacing: '0.15em', lineHeight: '1.3' }}>
                    Selected Projects
                  </div>
                </div>

                <a
                  href="http://alexgoode.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-5 py-3 hover:bg-stone-50 no-underline"
                  style={{
                    transition: 'background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                    borderBottom: '1px solid rgba(226, 232, 240, 0.5)'
                  }}
                >
                  <div className="text-xs font-mono uppercase text-slate-500 mb-1" style={{ letterSpacing: '0.1em' }}>
                    Portfolio / 2024
                  </div>
                  <div className="text-sm text-slate-900" style={{ letterSpacing: '-0.01em', fontWeight: '500' }}>
                    Alex Goode
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5" style={{ letterSpacing: '0' }}>
                    Studio Owner
                  </div>
                </a>
                <a
                  href="https://lemich.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-5 py-3 hover:bg-stone-50 no-underline"
                  style={{
                    transition: 'background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                    borderBottom: '1px solid rgba(226, 232, 240, 0.5)'
                  }}
                >
                  <div className="text-xs font-mono uppercase text-slate-500 mb-1" style={{ letterSpacing: '0.1em' }}>
                    Healthcare / 2024
                  </div>
                  <div className="text-sm text-slate-900" style={{ letterSpacing: '-0.01em', fontWeight: '500' }}>
                    The Lemich Clinic
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5" style={{ letterSpacing: '0' }}>
                    Norfolk, Virginia
                  </div>
                </a>
                <a
                  href="https://rosewoodcleaning.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-5 py-3 hover:bg-stone-50 no-underline"
                  style={{
                    transition: 'background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                    borderBottom: '1px solid rgba(226, 232, 240, 0.5)'
                  }}
                >
                  <div className="text-xs font-mono uppercase text-slate-500 mb-1" style={{ letterSpacing: '0.1em' }}>
                    Service / 2024
                  </div>
                  <div className="text-sm text-slate-900" style={{ letterSpacing: '-0.01em', fontWeight: '500' }}>
                    Rosewood Cleaning
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5" style={{ letterSpacing: '0' }}>
                    Columbia, South Carolina
                  </div>
                </a>

                {/* Socials Section */}
                <div className="px-5 py-3 border-b border-slate-200 mt-2" style={{ backgroundColor: 'rgba(248, 250, 252, 0.6)' }}>
                  <div className="text-xs font-mono uppercase text-slate-600" style={{ letterSpacing: '0.15em', lineHeight: '1.3' }}>
                    Connect
                  </div>
                </div>

                <a
                  href="https://instagram.com/maderight.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-5 py-3 hover:bg-stone-50 no-underline"
                  style={{
                    transition: 'background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                    borderBottom: '1px solid rgba(226, 232, 240, 0.5)'
                  }}
                >
                  <div className="text-sm text-slate-900" style={{ letterSpacing: '-0.01em', fontWeight: '500' }}>
                    Instagram
                  </div>
                </a>

                <a
                  href="mailto:alexgoode2@gmail.com"
                  className="block mx-5 my-3 bg-teal-950 text-white px-4 py-2 text-center text-sm font-medium no-underline hover:bg-teal-900"
                  style={{
                    transition: 'background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                    letterSpacing: '0.01em',
                    borderRadius: '0'
                  }}
                >
                  Contact Us
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Navigation (< 768px) */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 px-3 pt-2 pb-3">
        <div className=" rounded-lg">
          <div className="flex justify-between items-center px-3 py-2.5">
            <a
              href="/"
              className="flex items-center bg-teal-900 px-2 py-2 rounded eighties no-underline"
              style={{ color: '#FFFFFF' }}
              aria-label="Made Right Studio Home"
            >
              🧤 Made Right
            </a>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="bg-white text-green-950 px-3 py-2 rounded-lg"
              aria-expanded={isMobileOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>

          {isMobileOpen && (
            <div className="bg-white border border-slate-900 mt-2 mx-2 mb-2" style={{ borderRadius: '0', boxShadow: '4px 4px 0 rgba(15, 23, 42, 0.08)' }}>
              {/* Catalog header */}
              <div className="px-4 py-2.5 border-b border-slate-200" style={{ backgroundColor: 'rgba(248, 250, 252, 0.6)' }}>
                <div className="text-xs font-mono uppercase text-slate-600" style={{ letterSpacing: '0.15em', lineHeight: '1.3' }}>
                  Navigation
                </div>
              </div>

              <div className="pb-2">
                {/* Studio Links */}
                <a
                  href="/"
                  className="block px-4 py-2.5 hover:bg-stone-50 no-underline"
                  style={{
                    transition: 'background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                    borderBottom: '1px solid rgba(226, 232, 240, 0.5)'
                  }}
                >
                  <div className="text-sm text-slate-900" style={{ letterSpacing: '-0.01em', fontWeight: '500' }}>
                    Home
                  </div>
                </a>
                <a
                  href="/about"
                  className="block px-4 py-2.5 hover:bg-stone-50 no-underline"
                  style={{
                    transition: 'background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                    borderBottom: '1px solid rgba(226, 232, 240, 0.5)'
                  }}
                >
                  <div className="text-sm text-slate-900" style={{ letterSpacing: '-0.01em', fontWeight: '500' }}>
                    About
                  </div>
                </a>
                <a
                  href="/team"
                  className="block px-4 py-2.5 hover:bg-stone-50 no-underline"
                  style={{
                    transition: 'background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                    borderBottom: '1px solid rgba(226, 232, 240, 0.5)'
                  }}
                >
                  <div className="text-sm text-slate-900" style={{ letterSpacing: '-0.01em', fontWeight: '500' }}>
                    Team
                  </div>
                </a>
                <a
                  href="/our-process"
                  className="block px-4 py-2.5 hover:bg-stone-50 no-underline"
                  style={{
                    transition: 'background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                    borderBottom: '1px solid rgba(226, 232, 240, 0.5)'
                  }}
                >
                  <div className="text-sm text-slate-900" style={{ letterSpacing: '-0.01em', fontWeight: '500' }}>
                    Our Process
                  </div>
                </a>

                {/* Featured Work Section */}
                <div className="px-4 py-2.5 border-b border-slate-200 mt-2" style={{ backgroundColor: 'rgba(248, 250, 252, 0.6)' }}>
                  <div className="text-xs font-mono uppercase text-slate-600" style={{ letterSpacing: '0.15em', lineHeight: '1.3' }}>
                    Selected Projects
                  </div>
                </div>

                <a
                  href="http://alexgoode.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2.5 hover:bg-stone-50 no-underline"
                  style={{
                    transition: 'background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                    borderBottom: '1px solid rgba(226, 232, 240, 0.5)'
                  }}
                >
                  <div className="text-xs font-mono uppercase text-slate-500 mb-1" style={{ letterSpacing: '0.1em' }}>
                    Portfolio / 2024
                  </div>
                  <div className="text-sm text-slate-900" style={{ letterSpacing: '-0.01em', fontWeight: '500' }}>
                    Alex Goode
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5" style={{ letterSpacing: '0' }}>
                    Studio Owner
                  </div>
                </a>
                <a
                  href="https://lemich.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2.5 hover:bg-stone-50 no-underline"
                  style={{
                    transition: 'background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                    borderBottom: '1px solid rgba(226, 232, 240, 0.5)'
                  }}
                >
                  <div className="text-xs font-mono uppercase text-slate-500 mb-1" style={{ letterSpacing: '0.1em' }}>
                    Healthcare / 2024
                  </div>
                  <div className="text-sm text-slate-900" style={{ letterSpacing: '-0.01em', fontWeight: '500' }}>
                    The Lemich Clinic
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5" style={{ letterSpacing: '0' }}>
                    Norfolk, Virginia
                  </div>
                </a>
                <a
                  href="https://rosewoodcleaning.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2.5 hover:bg-stone-50 no-underline"
                  style={{
                    transition: 'background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                    borderBottom: '1px solid rgba(226, 232, 240, 0.5)'
                  }}
                >
                  <div className="text-xs font-mono uppercase text-slate-500 mb-1" style={{ letterSpacing: '0.1em' }}>
                    Service / 2024
                  </div>
                  <div className="text-sm text-slate-900" style={{ letterSpacing: '-0.01em', fontWeight: '500' }}>
                    Rosewood Cleaning
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5" style={{ letterSpacing: '0' }}>
                    Columbia, South Carolina
                  </div>
                </a>

                {/* Socials Section */}
                <div className="px-4 py-2.5 border-b border-slate-200 mt-2" style={{ backgroundColor: 'rgba(248, 250, 252, 0.6)' }}>
                  <div className="text-xs font-mono uppercase text-slate-600" style={{ letterSpacing: '0.15em', lineHeight: '1.3' }}>
                    Connect
                  </div>
                </div>

                <a
                  href="https://instagram.com/maderight.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2.5 hover:bg-stone-50 no-underline"
                  style={{
                    transition: 'background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                    borderBottom: '1px solid rgba(226, 232, 240, 0.5)'
                  }}
                >
                  <div className="text-sm text-slate-900" style={{ letterSpacing: '-0.01em', fontWeight: '500' }}>
                    Instagram
                  </div>
                </a>

                <a
                  href="mailto:alexgoode2@gmail.com"
                  className="block mx-4 my-2.5 bg-teal-950 text-white px-4 py-2 text-center text-sm font-medium no-underline hover:bg-teal-900"
                  style={{
                    transition: 'background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                    letterSpacing: '0.01em',
                    borderRadius: '0'
                  }}
                >
                  Contact Us
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Nav;