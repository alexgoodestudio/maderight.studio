function Footer() {
  const year = new Date().getFullYear(); // dynamically get current year

  return (
    <footer className="bg-purple-200 text-gray-600 text-sm py-4 px-5">
      <div className="max-w-6xl mx-auto text-center">
        © {year} NeatFreak Cleaning Services | Richmond, Virginia
      </div>
    </footer>
  );
}

export default Footer;
