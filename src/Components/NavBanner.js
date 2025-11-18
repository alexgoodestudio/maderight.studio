function NavBanner() {
  return (
    <header
      className="bg-sky-200 text-slate-800 text-center font-semibold"
      role="banner"
      aria-label="Site information banner"
    >
      <p
        className="text-xs gs pb-3 pt-3 mb-0"
        style={{ letterSpacing: '0.02em' }}
      >
        Web Development, Design, SEO — Columbia, South Carolina
      </p>
    </header>
  );
}

export default NavBanner;
