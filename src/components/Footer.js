const Footer = () => {
  return (
    <footer className="w-full container p-4 bg-white">
      <div className="p-4 w-full container flex flex-wrap whitespace-nowrap gap-x-16 gap-y-11 text-slate-800">
        <div className="w-full select-none flex flex-col">
          <span className="lg:text-lg font-bold">Socials</span>
          <div className="">
            <a href="/" className="text-sm text-gray-400 mt-6">discord</a>
            <a href="/" className="text-sm text-gray-400 mt-4">discord</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;