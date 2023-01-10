const Footer = () => {
  return (
    <footer className="w-full dark:bg-zinc-800 p-4 pt-16 md:pt-20 md:bg-white">
      <div className="w-full container justify-between gap-y-12 flex flex-col md:flex-row text-slate-800">
        <div className="w-full md:w-1/3">
          <div className="lg:w-36 w-24"><img className="w-full object-cover" alt="origin-logo" src="/images/Logo.svg" /></div>
          <div className="w-full max-w-[219px] lg:max-w-[296px]">
            <p className="text-sm text-gray-500 mt-4 text-justify">Our vision is to provide convenience and help increase your sales business.</p>
          </div>
        </div>
        <div className="w-full md:w-2/3 whitespace-nowrap md:justify-end flex flex-wrap gap-x-16 md:gap-x-14 gap-y-11">
          <div className="select-none">
            <span className="lg:text-lg font-bold dark:text-zinc-900">Socials</span>
            <div className="flex flex-col gap-y-3 lg:gap-y-4 mt-4 lg:mt-6 text-gray-500 text-sm">
              <a className="duration-300 hover:text-blue-500 hover:scale-95" href="/">Discord</a>
              <a className="duration-300 hover:text-blue-500 hover:scale-95" href="/">Instagram</a>
              <a className="duration-300 hover:text-blue-500 hover:scale-95" href="/">Twitter</a>
              <a className="duration-300 hover:text-blue-500 hover:scale-95" href="/">Facebook</a>
            </div>
          </div>
          <div className="select-none">
            <span className="lg:text-lg font-bold dark:text-zinc-900">About</span>
            <div className="flex flex-col gap-y-3 lg:gap-y-4 mt-4 lg:mt-6 text-gray-500 text-sm">
              <a className="duration-300 hover:text-blue-500 hover:scale-95" href="/">How it works</a>
              <a className="duration-300 hover:text-blue-500 hover:scale-95" href="/">Feature</a>
              <a className="duration-300 hover:text-blue-500 hover:scale-95" href="/">Partnership</a>
              <a className="duration-300 hover:text-blue-500 hover:scale-95" href="/">Bushiness relation</a>
            </div>
          </div>
          <div className="select-none">
            <span className="lg:text-lg font-bold dark:text-zinc-900">Community</span>
            <div className="flex flex-col gap-y-3 lg:gap-y-4 mt-4 lg:mt-6 text-gray-500 text-sm">
              <a className="duration-300 hover:text-blue-500 hover:scale-95" href="/">Events</a>
              <a className="duration-300 hover:text-blue-500 hover:scale-95" href="/">Blog</a>
              <a className="duration-300 hover:text-blue-500 hover:scale-95" href="/">Podcast</a>
              <a className="duration-300 hover:text-blue-500 hover:scale-95" href="/">Invite a friend</a>
            </div>
          </div>
        </div>
      </div>
      <div className="select-none dark:text-zinc-900 container w-full flex flex-wrap md:justify-between gap-y-8 text-sm lg:text-base border-t border-gray-300 mt-9 pt-9 pb-12 ">
        <div className="w-full md:w-auto flex justify-between">
          <p className="md:mr-9">Terms & Condition</p>
          <p>Privacy & Policy</p>
        </div>
        <span>©2022 MORENT. All rights reserved</span>
      </div>
    </footer>
  );
}

export default Footer;