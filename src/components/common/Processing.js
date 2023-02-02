const Processing = ({ loading }) => {
  return (
    loading && <aside className="w-screen h-screen fixed top-0 left-0 z-10 bg-zinc-800/80 dark:bg-gray-100/60 flex items-center justify-center">
      <div className="rounded-[10px] flex flex-col items-center gap-y-4 shadow bg-white dark:bg-zinc-800 dark:text-white p-10">
        <span className="animate-spin w-8 h-8 border-4 border-slate-800 dark:border-wight rounded-full border-l-transparent block"></span>
        Processing ...
      </div>
    </aside>
  );
}

export default Processing;