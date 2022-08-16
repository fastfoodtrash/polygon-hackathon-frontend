import React, { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { SearchIcon } from '@heroicons/react/solid';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';

const user = {
  wallet: 'Tsek8Qye8ftzTr1tSPu5UwugbzjBgWtQXqm8moYMGxe',
  name: 'Solpeeps',
};
const userNavigation = [
  { name: 'My Tasks', subText: 'Tasks dashboard', noti: 2, href: '#' },
  { name: 'DeSume', subText: 'View my desume', href: '#' },
  { name: 'Connect', subText: 'View my connection', noti: 1, href: '#' },
  { name: 'Sign out', subText: '', href: '#' },
];

const NavBar = () => {
  return (
    <Disclosure as="header" className="bg-white border-b-2 border-black">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
            <div className="relative h-16 flex justify-between">
              <div className="relative z-10 px-2 flex lg:px-0">
                <div className="flex-shrink-0 flex items-center select-none">
                  <img className="block h-8 w-auto" src="/assets/img/logo.svg" alt="Workflow" />
                  <span className="text-lg font-bold ml-2">BiteTasks</span>
                </div>
              </div>
              <div className="relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0">
                <div className="w-full sm:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                      <SearchIcon
                        className="h-5 w-5 text-black"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full bg-white border-x-2 border-t-2 border-b-4 border-black rounded-full py-2 pl-10 pr-3 text-sm placeholder-black placeholder:font-bold sm:text-sm focus:outline-none"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>
              <div className="relative z-10 flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="ease-in duration-300 rounded-md p-2 inline-flex items-center justify-center text-black hover:bg-gray-100 hover:text-gray-500">
                  <span className="sr-only">Open menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                {/* Profile dropdown */}
                <button className="px-4 text-center w-full bg-white border-x-2 border-t-2 border-b-4 border-black rounded-full py-2 text-sm font-bold focus:outline-none">
                  Submit Tasks
                </button>
                <Menu as="div" className="flex-shrink-0 relative ml-4">
                  <div>
                    <Menu.Button className="bg-white rounded-full flex">
                      <span className="sr-only">Open user menu</span>
                      <div className="text-center font-bold text-2xl h-10 w-10 rounded-full border-x-2 border-t-2 border-b-4 border-black">
                        {(user.name ? user.name : user.wallet).charAt(0)}
                      </div>
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="cursor-pointer select-none origin-top-right absolute right-0 mt-2 w-60 rounded-md bg-white ring-1 ring-black ring-opacity-5 py-1 border-2 border-black">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <div className="h-16 ease-in duration-300 flex items-center px-4 py-2 border-b-2 border-black last:border-b-0 hover:bg-gray-50 hover:text-gray-900">
                              <div className="flex-shrink-0">
                                {item.name && (
                                  <div className="text-lg font-bold text-black">
                                    {item.name}
                                  </div>
                                )}
                                {item.subText && (
                                  <div className="text-sm font-medium text-gray-500">
                                    {item.subText}
                                  </div>
                                )}
                              </div>
                              {item.noti && (
                                <button
                                  type="button"
                                  className="ease-in duration-300 ml-auto flex-shrink-0 bg-white rounded-full p-1 text-black hover:text-gray-500"
                                >
                                  <span className="sr-only">
                                    View notifications
                                  </span>
                                  <div className="border-2 border-black bg-yellow text-black text-xs font-bold w-5 h-5 rounded-full">
                                    2
                                  </div>
                                </button>
                              )}
                            </div>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel as="nav" className="lg:hidden" aria-label="Global">
            <div className="border-t-2 border-black pt-4 pb-3">
              <div className="px-4 flex items-center">
                <div className="flex-shrink-0">
                  <div className="text-center font-bold text-2xl h-10 w-10 rounded-full border-x-2 border-t-2 border-b-4 border-black">
                    {(user.name ? user.name : user.wallet).charAt(0)}
                  </div>
                </div>
                <div className="ml-3">
                  {user.name && (
                    <div className="text-base font-bold text-gray-800">
                      {user.name}
                    </div>
                  )}
                  <div className="text-sm font-medium text-gray-500">
                    {user.wallet}
                  </div>
                </div>
                <button
                  type="button"
                  className="ease-in duration-300 ml-auto flex-shrink-0 bg-white rounded-full p-1 text-black hover:text-gray-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 px-2 space-y-1">
                <Disclosure.Button
                  as="a"
                  className="cursor-pointer ease-in duration-300 block rounded-md py-2 px-3 text-base font-medium text-black hover:bg-gray-50 hover:text-gray-900"
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="text-base font-bold text-black">
                        Submit Tasks
                      </div>
                      <div className="text-sm font-medium text-gray-500">
                        Tasks submission
                      </div>
                    </div>
                  </div>
                </Disclosure.Button>
                {userNavigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="ease-in duration-300 block rounded-md py-2 px-3 text-base font-medium text-black hover:bg-gray-50 hover:text-gray-900"
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        {item.name && (
                          <div className="text-base font-bold text-black">
                            {item.name}
                          </div>
                        )}
                        {item.subText && (
                          <div className="text-sm font-medium text-gray-500">
                            {item.subText}
                          </div>
                        )}
                      </div>
                      {item.noti && (
                        <button
                          type="button"
                          className="ease-in duration-300 ml-auto flex-shrink-0 bg-white rounded-full p-1 text-black hover:text-gray-500"
                        >
                          <span className="sr-only">View notifications</span>
                          <div className="border-2 border-black bg-yellow text-black text-xs font-bold w-5 h-5 rounded-full">
                            2
                          </div>
                        </button>
                      )}
                    </div>
                  </Disclosure.Button>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;
