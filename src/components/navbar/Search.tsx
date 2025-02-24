import { CiSearch } from 'react-icons/ci';

const Search = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="bg-gray-30 md:hidden flex items-center rounded-sm h-10 gap-1 px-4">
        <input type="text" placeholder="What can we help you to find ?" className="w-full placeholder:text-gray-70  text-base font-light" />
        <CiSearch size={24} className="text-gray-70" />
      </div>
    </div>
  );
};

export default Search;
