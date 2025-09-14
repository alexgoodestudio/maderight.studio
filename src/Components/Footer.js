function Footer() {
  const year = new Date().getFullYear(); // dynamically get current year

  return (
    <footer className="text-sm text-dark bg-slate-100 py-4 px-5 ">
      <div className="max-w-6xl mx-auto text-center">
        © {year} • Made Right Studios 
      </div>
    </footer>
  );
}

export default Footer;
