import React from 'react';

const Header = () => {
  const greeting = 'GM!☀';
  const name = 'Solpeeps';
  return (
    <div className="border-black bg-light-yellow border-2 rounded-lg shadow-xl overflow-hidden grid grid-cols-4 md:grid-cols-5 gap-4">
      <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:pl-20 select-none col-span-3">
        <div className="lg:self-center">
          <h2 className="text-black">
            <span className="block font-extrabold text-8xl">{greeting}</span>
            <span className="block font-medium text-4xl">{name}</span>
          </h2>
          <button
            className="mt-8 bg-white border-x-2 border-t-2 border-b-4 border-black rounded-md px-3 inline-flex items-center text-base font-bold text-black hover:bg-gray-200"
          >
            View DeCard
          </button>
          <button
            className="ml-2 mt-8 bg-white border-x-2 border-t-2 border-b-4 border-black rounded-md px-3 inline-flex items-center text-base font-bold text-black hover:bg-gray-200"
          >
            View DeSume
          </button>
        </div>
      </div>
      <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1 col-span-1 md:col-span-2">
        <img
          className="transform translate-y-32 md:translate-y-6 rounded-md object-cover object-left-top lg:translate-y-10 w-full md:w-5/6 -scale-x-1"
          src="/assets/avatar/peep-17.svg"
          alt="Avatar"
        />
      </div>
    </div>
  );
};

export default Header;
