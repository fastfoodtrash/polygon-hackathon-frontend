import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/solid';
import Select from 'react-select';

interface AddTaskPopupProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const AddTaskPopup: React.FC<AddTaskPopupProps> = ({ open, setOpen }) => {
  const cancelButtonRef = useRef(null);
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  const customStyles = {
    control: (provided: any, state: any) => ({
      // none of react-select's styles are passed to <Control />
      ...provided,
      border: 0,
      outlineWidth: state.isFocused ? 0 : 0,
      boxShadow: 'none'
    }),
    placeholder: (provided: any) => ({
      // none of react-select's styles are passed to <Control />
      ...provided,
      color: 'black',
    }),
  };
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
                        <span className="font-bold text-lg inline-block align-middle ml-2 mt-1">
                          Submit Tasks
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

                  <div className="bg-blue overflow-hidden grid grid-cols-5 lg:gap-4 border-black border-b-2">
                    <div className="pt-10 pb-8 px-4 sm:pt-16 sm:px-16 lg:py-10 lg:pr-0 xl:py-8 col-span-4 my-auto">
                      <div className="lg:self-center">
                        <h2 className="font-extrabold text-white text-6xl">
                          <span className="block">Solpeeps</span>
                        </h2>
                      </div>
                    </div>
                    <div className="-mt-6 aspect-w-5 md:aspect-w-2 md:aspect-h-1 col-span-1">
                      <img
                        className="transform translate-y-6 w-full md:w-full -scale-x-1"
                        src={'/assets/avatar/peep-7.svg'}
                        alt="PeepSVG"
                      />
                    </div>
                  </div>
                  <div className="px-4 pt-5 pb-8 sm:px-10">
                    <div className="mt-4">
                      <p className="font-bold text-base text-black text-left">
                        Company Name
                      </p>
                      <input
                        type="text"
                        className="focus:outline-none text-sm border-black border-t-2 border-x-2 border-b-4 rounded-lg w-full px-4 py-2 mt-2 placeholder:text-black placeholder:font-medium"
                        placeholder="Company Name"
                      />
                    </div>

                    <div className="mt-4">
                      <p className="font-bold text-base text-black text-left">
                        Company Type
                      </p>
                      <input
                        type="text"
                        className="focus:outline-none text-sm border-black border-t-2 border-x-2 border-b-4 rounded-lg w-full px-4 py-2 mt-2 placeholder:text-black placeholder:font-medium"
                        placeholder="Company Type"
                      />
                    </div>

                    <div className="mt-4">
                      <p className="font-bold text-base text-black text-left">
                        Post Name
                      </p>
                      <input
                        type="text"
                        className="focus:outline-none text-sm border-black border-t-2 border-x-2 border-b-4 rounded-lg w-full px-4 py-2 mt-2 placeholder:text-black placeholder:font-medium"
                        placeholder="Post Name"
                      />
                    </div>

                    <div className="mt-4">
                      <p className="font-bold text-base text-black text-left">
                        Job Duration
                      </p>
                      <input
                        type="number"
                        className="focus:outline-none text-sm border-black border-t-2 border-x-2 border-b-4 rounded-lg w-full px-4 py-2 mt-2 placeholder:text-black placeholder:font-medium"
                        placeholder="Job Duration"
                        min={1}
                      />
                    </div>

                    <div className="mt-4">
                      <p className="font-bold text-base text-black text-left">
                        Job Type
                      </p>
                      <Select
                        className="focus:outline-none text-sm border-black border-t-2 border-x-2 border-b-4 rounded-lg w-full px-2 mt-2 placeholder:text-black placeholder:font-medium"
                        options={options}
                        styles={customStyles}
                        placeholder="Job Type"
                      />
                    </div>

                    <div className="mt-4">
                      <p className="font-bold text-base text-black text-left">
                        Required Software / Stacks
                      </p>
                      <Select
                        className="focus:outline-none text-sm border-black border-t-2 border-x-2 border-b-4 rounded-lg w-full px-2 mt-2 placeholder:text-black placeholder:font-medium"
                        options={options}
                        styles={customStyles}
                        placeholder="Required Software / Stacks"
                        isMulti
                      />
                    </div>

                    <div className="mt-4">
                      <p className="font-bold text-base text-black text-left">
                        Salary
                      </p>
                      <input
                        type="number"
                        className="focus:outline-none text-sm border-black border-t-2 border-x-2 border-b-4 rounded-lg w-full px-4 py-2 mt-2 placeholder:text-black placeholder:font-medium"
                        placeholder="Salary"
                        min={1}
                      />
                    </div>

                    <div className="mt-4">
                      <p className="font-bold text-base text-black text-left">
                        Job Description
                      </p>
                      <textarea
                        rows={4}
                        className="focus:outline-none text-sm border-black border-t-2 border-x-2 border-b-4 rounded-lg w-full px-4 py-2 mt-2 placeholder:text-black placeholder:font-medium"
                        placeholder="Job Description"
                      ></textarea>
                    </div>
                    <div className="mt-4">
                      <p className="font-bold text-base text-black text-left">
                        Contact Method (Please fill in at least one contact
                        method)
                      </p>
                      <div className="grid grid-cols-2 gap-4 mt-2">
                        <div>
                          <p className="font-medium text-base text-black text-left">
                            Discord Account
                          </p>
                          <input
                            type="text"
                            className="focus:outline-none text-sm border-black border-t-2 border-x-2 border-b-4 rounded-lg w-full px-4 py-2 mt-2 placeholder:text-black placeholder:font-medium"
                            placeholder="Discord Account"
                          />
                        </div>
                        <div>
                          <p className="font-medium text-base text-black text-left">
                            Telegram Account
                          </p>
                          <input
                            type="text"
                            className="focus:outline-none text-sm border-black border-t-2 border-x-2 border-b-4 rounded-lg w-full px-4 py-2 mt-2 placeholder:text-black placeholder:font-medium"
                            placeholder="Telegram Account"
                          />
                        </div>
                        <div>
                          <p className="font-medium text-base text-black text-left">
                            Whatsapp Account
                          </p>
                          <input
                            type="text"
                            className="focus:outline-none text-sm border-black border-t-2 border-x-2 border-b-4 rounded-lg w-full px-4 py-2 mt-2 placeholder:text-black placeholder:font-medium"
                            placeholder="Whatsapp Account"
                          />
                        </div>
                        <div>
                          <p className="font-medium text-base text-black text-left">
                            Signal Account
                          </p>
                          <input
                            type="text"
                            className="focus:outline-none text-sm border-black border-t-2 border-x-2 border-b-4 rounded-lg w-full px-4 py-2 mt-2 placeholder:text-black placeholder:font-medium"
                            placeholder="Signal Account"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-16">
                      <button className="bg-green font-bold text-sm border-black border-t-2 border-x-2 border-b-4 text-center rounded-lg py-1 px-12">
                        Submit
                      </button>
                      <button
                        onClick={() => setOpen(false)}
                        className="font-bold text-sm border-black border-t-2 border-x-2 border-b-4 text-center rounded-lg py-1 px-12 ml-4"
                      >
                        Cancel
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

export default AddTaskPopup;
