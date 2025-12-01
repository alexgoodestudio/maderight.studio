function NavBanner() {
  return (
    <header
      className="bg-nav-banner text-slate-800 text-center "
      role="banner"
      aria-label="Site information banner"
    >
      <p
        className="text-xs font-mono pb-3 pt-3 mb-0 nav-banner-text"
      >
        Web Development <span className="mx-1"> • </span>  SEO <span className="mx-1"> • </span>  Design
      </p>
    </header>
  );
}

export default NavBanner;
