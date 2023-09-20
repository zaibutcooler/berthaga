'use client';
import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from 'public/grön_logga.png';

const navigation = [
  { name: 'Om oss', href: '#' },
  { name: 'Vår verksamhet', href: '#' },
  { name: 'Erfarenheter', href: '#' },
  { name: 'FAQ', href: '#' },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='absolute w-full z-10'>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8 bg-slate-50 sm:rounded-b-md'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <a href='#' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Berthåga Vård</span>
            <Image
              // className='h-2 w-auto'
              src={logo}
              alt='logo'
              sizes='10vw'
              width='150'
              unoptimized
            />
          </a>
        </div>
        <div className='hidden lg:flex lg:gap-x-12 '>
          {navigation.map(item => (
            <a
              key={item.name}
              href={item.href}
              className='text-sm font-semibold leading-6 text-zinc-900 transition duration-300 ease-in-out transform hover:scale-105 hover:text-indigo-400 hover:shadow-text'
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className='flex flex-1 items-center justify-end gap-x-6'>
          {/* <a
            href='#'
            className='hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900'
          >
            Log in
          </a> */}
          <a
            href='#'
            className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600  sm:inline-block opacity-0 pointer-events-none sm:opacity-100 sm:pointer-events-auto'
          >
            Kontakta oss
          </a>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-8 w-8 sm:h-6 sm:w-6' aria-hidden='true' />
          </button>
        </div>
      </nav>

      {/* Mobile menu  */}
      <Transition show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as='div'
          className='lg:hidden'
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 z-10' />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter='transition ease-out duration-300 transform'
            enterFrom='opacity-0 -translate-y-full'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-200 transform'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 -translate-y-full'
          >
            <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
              <div className='flex items-center gap-x-6'>
                <a href='#' className='-m-1.5 p-1.5'>
                  <span className='sr-only'>Berthåga Vård</span>
                  <Image
                    // className='h-2 w-auto'
                    src={logo}
                    alt='logo'
                    sizes='10vw'
                    width='150'
                    unoptimized
                  />
                </a>
                <a
                  href='#'
                  className='ml-auto rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                  Kontakta oss
                </a>
                <button
                  type='button'
                  className='-m-2.5 rounded-md p-2.5 text-gray-700'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className='sr-only'>Close menu</span>
                  <XMarkIcon
                    className='h-8 w-8 sm:h-6 sm:w-6'
                    aria-hidden='true'
                  />
                </button>
              </div>
              <div className='mt-6 flow-root'>
                <div className='-my-6 divide-y divide-gray-500/10'>
                  <div className='space-y-2 py-6'>
                    {navigation.map(item => (
                      <a
                        key={item.name}
                        href={item.href}
                        className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className='py-6'>
                    {/* <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Log in
                </a> */}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </header>
  );
}
