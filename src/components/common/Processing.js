const Processing = ({ open }) => {
  return (
    open && <aside className="w-screen h-screen fixed top-0 left-0 z-10 bg-zinc-800/80 flex items-center justify-center">
      <div className="rounded-[10px] shadow bg-white p-10">
        <span className="animate-spin transition-all duration-300 block h-5 w-5 mb-3"></span>
        Processing...
      </div>
    </aside>
  );
}

export default Processing;