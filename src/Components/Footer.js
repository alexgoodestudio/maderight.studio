function Footer() {
  const year = new Date().getFullYear(); // dynamically get current year

  return (
    <footer className="bg-amber-950 banner-texttext-sm py-4 px-5 border-t-2">
      <div className="max-w-6xl mx-auto text-center">
        © {year} Made Right Studios
      </div>
    </footer>
  );
}

export default Footer;
