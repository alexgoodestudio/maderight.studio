function Footer() {
  const year = new Date().getFullYear(); // dynamically get current year

  return (
    <footer className="text-sm bg-slate-100 text-slate-800 py-4 px-5 ">
      <div className="max-w-6xl mx-auto text-center">
        © <span className="font-mono">{year}</span> • Made Right Studios 
      </div>
    </footer>
  );
}

export default Footer;
