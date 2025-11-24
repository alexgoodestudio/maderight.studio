function NavBanner() {
  return (
    <header
      className="bg-teal-100 text-slate-800 text-center font-bold"
      role="banner"
      aria-label="Site information banner"
    >
      <p
        className="text-xs gs pb-3 pt-3 mb-0"
        style={{ letterSpacing: '0.06em' }}
      >
        Web Development <span className="mx-1"> • </span>  SEO <span className="mx-1"> • </span> Branding & Design
      </p>
    </header>
  );
}

export default NavBanner;
