import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import classNames from 'classnames';
import { XIcon } from '@heroicons/react/solid';
import {
  BookmarkIcon,
  CalendarIcon,
  ClockIcon,
  UserIcon,
  StarIcon,
} from '@heroicons/react/outline';

import { StarIcon as StarCheckedIcon } from '@heroicons/react/solid';

import Dropzone from '../components/Dropzone';

interface TaskPopupProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const TaskPopup: React.FC<TaskPopupProps> = ({ open, setOpen }) => {
  const [error, setError] = useState('');
  const [starHover, setStarHover] = useState(0);
  const [starSelect, setStarSelect] = useState(0);

  const totalStar = 5;

  const [attachment, setAttachment] = useState<Array<File>>([]);
  const cancelButtonRef = useRef(null);
  const userView = 1234;
  const userBookmarked = 1234;
  const polyCost = 1000;
  const stackList = ['React JS', 'Node JS', 'MongoDB'];
  const jobDescription =
    'Coins.ph is on a mission to create an open financial system by providing everyone easy access to Web3 and digital assets. A regulated entity, Coins is the most established crypto brand in the Philippines and has gained the trust of more than 16 million users. Through the easy-to-use mobile app, users can buy and sell a variety of different cryptocurrencies and also access a wide range of payment services.';
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-white bg-opacity-50 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="border-black border-x-2 border-t-2 border-b-4 relative bg-white rounded-lg text-left overflow-hidden transform transition-all sm:my-8 sm:max-w-3xl sm:w-full">
                <div>
                  <div className="flex items-center justify-center h-8 w-full border-black border-b-2 px-4">
                    <div className="flex-shrink-1">
                      <p>
                        <CalendarIcon
                          className="h-7 w-7 text-black inline-block align-middle"
                          aria-hidden="true"
                        />
                        <span className="font-bold text-lg inline-block align-middle ml-2 mt-1">
                          6/8/2022
                        </span>
                        <ClockIcon
                          className="h-7 w-7 text-black inline-block align-middle ml-4"
                          aria-hidden="true"
                        />
                        <span className="font-bold text-lg inline-block align-middle ml-2 mt-1">
                          20 Days
                        </span>
                      </p>
                    </div>
                    <div className="ml-auto flex-shrink-0 pl-12">
                      <button
                        onClick={() => setOpen(false)}
                        className="cursor-pointer bg-red relative w-5 h-5 border-black border-2 rounded-full text-center"
                      >
                        <XIcon
                          className="position-center h-4 w-4"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </div>

                  <div className="bg-green overflow-hidden grid grid-cols-5 lg:gap-4 border-black border-b-2">
                    <div className="pt-10 pb-8 px-4 sm:pt-16 sm:px-8 lg:py-10 lg:pr-0 xl:py-8 col-span-4 mt-auto">
                      <div className="lg:self-center">
                        <h2 className="text-xl font-extrabold text-black sm:text-3xl">
                          <span className="block">
                            Senior Contract Developer
                          </span>
                        </h2>
                        <p className="text-lg leading-6 text-black">
                          Pancake Swap (Defi Protocol)
                        </p>
                      </div>
                    </div>
                    <div className="-mt-6 aspect-w-5 md:aspect-w-2 md:aspect-h-1 col-span-1">
                      <img
                        className="transform translate-y-6 w-full md:w-full -scale-x-1"
                        src="/assets/avatar/peep-17.svg"
                        alt="PeepSVG"
                      />
                    </div>
                  </div>
                  <div className="px-4 sm:px-8 py-8 overflow-y-auto max-h-96 scroll-style">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-center md:text-left">
                          <UserIcon
                            className="h-6 w-6 text-black inline-block align-middle"
                            aria-hidden="true"
                          />
                          <span className="text-lg inline-block align-middle ml-2">
                            {userView
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                          </span>
                          <BookmarkIcon
                            className="h-6 w-6 text-black inline-block align-middle ml-8"
                            aria-hidden="true"
                          />
                          <span className="text-lg inline-block align-middle ml-2">
                            {userBookmarked
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                          </span>
                          <img
                            src="/assets/icon/polygon.svg"
                            className="h-6 w-6 text-black inline-block align-middle ml-8"
                            aria-hidden="true"
                            alt="polygon icon"
                          />
                          <span className="text-lg inline-block align-middle ml-2">
                            {polyCost
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                          </span>
                        </p>
                        <p className="mt-2 text-center md:text-left">
                          <button className="mr-2 mt-2 text-white font-bold text-sm border-black border-t-2 border-x-2 border-b-4 text-center rounded-lg py-1 px-2 bg-discord">
                            <img
                              src="/assets/icon/discord.svg"
                              className="h-5 w-5 inline-block align-middle mr-1"
                              aria-hidden="true"
                              alt="discord icon"
                            />{' '}
                            Discord
                          </button>
                          <button className="mr-2 mt-2 text-white font-bold text-sm border-black border-t-2 border-x-2 border-b-4 text-center rounded-lg py-1 px-2 bg-telegram">
                            <img
                              src="/assets/icon/telegram.svg"
                              className="h-5 w-5 inline-block align-middle mr-1"
                              aria-hidden="true"
                              alt="telegram icon"
                            />{' '}
                            Telegram
                          </button>
                          <button className="mr-2 mt-2 text-white font-bold text-sm border-black border-t-2 border-x-2 border-b-4 text-center rounded-lg py-1 px-2 bg-whatsapp">
                            <img
                              src="/assets/icon/whatsapp.svg"
                              className="h-5 w-5 inline-block align-middle mr-1"
                              aria-hidden="true"
                              alt="telegram icon"
                            />{' '}
                            WhatsApp
                          </button>
                          <button className="mr-2 mt-2 text-white font-bold text-sm border-black border-t-2 border-x-2 border-b-4 text-center rounded-lg py-1 px-2 bg-signal">
                            <img
                              src="/assets/icon/signal.svg"
                              className="h-5 w-5 inline-block align-middle mr-1"
                              aria-hidden="true"
                              alt="telegram icon"
                            />{' '}
                            Signal
                          </button>
                        </p>
                        <div className="mt-4 text-center md:text-left">
                          {stackList.map((item) => (
                            <div
                              key={item}
                              className="inline-block px-3 text-base font-medium border-l-2 last:border-r-2 border-black"
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="text-center md:text-right">
                        <div className="inline-block mr-2 border-black border-t-2 border-x-2 border-b-4 rounded-lg text-center w-20 h-24 font-bold py-4">
                          <span className="text-4xl">01</span>
                          <br />
                          <span className="text-sm">Day</span>
                        </div>
                        <div className="inline-block mr-2 border-black border-t-2 border-x-2 border-b-4 rounded-lg text-center w-20 h-24 font-bold py-4">
                          <span className="text-4xl">02</span>
                          <br />
                          <span className="text-sm">Hours</span>
                        </div>
                        <div className="inline-block mr-2 border-black border-t-2 border-x-2 border-b-4 rounded-lg text-center w-20 h-24 font-bold py-4">
                          <span className="text-4xl">28</span>
                          <br />
                          <span className="text-sm">Mins</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-black text-center md:text-left">
                        {jobDescription}
                      </p>
                    </div>
                    <div className="mt-4">
                      <p className="font-medium text-base text-black text-center md:text-left">
                        Candidate
                      </p>
                      <div className="mt-4">
                        <div className="flex w-full items-center">
                          <div className="flex-shrink-1">
                            <div className="w-4 h-4 rounded-full border-2 bg-yellow inline-block align-middle" />
                            <div className="ml-4 text-xs sm:text-base font-bold inline-block align-middle">
                              Tsek8Qye8ftzTr1tSPu5UwugbzjBgWtQXqm8moYMGxe
                            </div>
                          </div>
                          <div className="flex-shrink-0 ml-auto">
                            <div className="w-28 grid grid-cols-2 gap-2">
                              <div className="col-span-1">
                                <button className="border-black border-t-2 border-b-4 border-x-2 rounded-lg font-bold w-full py-1">
                                  View
                                </button>
                              </div>
                              <div className="col-span-1">
                                <button className="border-black border-t-2 border-b-4 border-x-2 rounded-lg font-bold w-full py-1">
                                  Select
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="font-medium text-base text-black text-center md:text-left">
                        Submission Attachment
                      </p>
                      <textarea
                        rows={1}
                        className="focus:outline-none text-sm border-black border-t-2 border-x-2 border-b-4 rounded-lg w-full px-4 py-2 mt-2 placeholder:text-black placeholder:font-medium"
                        placeholder="Attachment Description"
                      ></textarea>
                      <div className="mt-2">
                        <Dropzone
                          onError={(newError) => setError(newError)}
                          value={attachment}
                          onChange={(newFile) => setAttachment(newFile)}
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="font-medium text-base text-black text-center md:text-left">
                        Rating
                      </p>
                      <div className="mt-2 cursor-pointer text-center md:text-left">
                        {Array.from(Array(totalStar), (e, i) => {
                          return (
                            <div
                              key={e}
                              onMouseEnter={() => setStarHover(i + 1)}
                              onMouseLeave={() => setStarHover(0)}
                              onClick={() => setStarSelect(i + 1)}
                              className={classNames(
                                'w-7 h-7 inline-block mr-2 star-wrapper',
                                i < starHover && 'hover',
                                i < starSelect && 'hover'
                              )}
                            >
                              <StarIcon className="w-6 h-6 star" />
                              <StarCheckedIcon className="w-6 h-6 star-checked" />
                            </div>
                          );
                        })}
                      </div>
                      <div className="mt-1">
                        <input
                          type="text"
                          placeholder="Comment"
                          className="focus:outline-none text-sm border-black border-t-2 border-x-2 border-b-4 rounded-lg w-full px-4 py-2 mt-2 placeholder:text-black placeholder:font-medium"
                        />
                      </div>
                    </div>
                    <div className="w-full mt-4">
                      {/* <button className="font-bold text-sm border-black border-t-2 border-x-2 border-b-4 text-center rounded-lg py-1 px-12">
                    Apply Now
                  </button>
                  <button className="font-bold text-sm border-black border-t-2 border-x-2 border-b-4 text-center rounded-lg py-1 px-12 ml-4">
                    Bookmark
                  </button> */}
                      {/* <button className="bg-red font-bold text-sm border-black border-t-2 border-x-2 border-b-4 text-center rounded-lg py-1 px-12">
                        Cancel Task
                      </button>
                      <button className="bg-green font-bold text-sm border-black border-t-2 border-x-2 border-b-4 text-center rounded-lg py-1 px-12 ml-4">
                        Submit Task
                      </button> */}
                      <button className="cursor-not-allowed bg-gray font-bold text-sm border-black border-t-2 border-x-2 border-b-4 text-center rounded-lg py-1 px-12">
                        Cancel Task
                      </button>
                      <button className="cursor-not-allowed bg-gray font-bold text-sm border-black border-t-2 border-x-2 border-b-4 text-center rounded-lg py-1 px-12 ml-4">
                        Submit Task
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default TaskPopup;
