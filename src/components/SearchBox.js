const SearchBox = () => {
  return (
    <div className="w-full lg:max-w-[492px] lg:border lg:rounded-full lj flex gap-x-4">
      <div className="w-full border lg:border-0 rounded-[10px] py-[14px] px-6 cursor-pointer flex items-center gap-x-2">
        <img src="/icons/Search.svg" alt="icon-search" />
        <input type="text" placeholder="search something here" className="outline-none w-full" />
      </div>
      <div className="border lg:border-0 rounded-[10px] p-3 lg:pr-6 flex items-center">
        <span className="w-6 cursor-pointer">
          <img className="w-full object-cover" src="/icons/filter.svg" alt="icon-filter" />
        </span>
      </div>
    </div>
  );
}

export default SearchBox;