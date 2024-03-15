import React from 'react';

const SearchBar: React.FC<{ placeholder: string }> = ({ placeholder }) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        className="border border-gray-300 rounded-lg px-3 py-1 w-[180px] focus:outline-none focus:border-blue-500"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        
          
      </div>
    </div>
  );
};

export default SearchBar;
