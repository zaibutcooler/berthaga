import Image from 'next/image';
import hero from 'public/images/hero.jpeg';

export default function Hero() {
  return (
    <div className='relative isolate overflow-hidden pt-14 h-screen'>
      <Image
        priority
        alt='hero'
        src={hero}
        placeholder='blur'
        quality={100}
        fill
        sizes='100vw'
        style={{
          objectFit: 'cover',
          zIndex: -10,
          position: 'absolute',
        }}
      />
      {/* overlay */}
      <div className='absolute inset-0 bg-black opacity-50 -z-10' />

      <div className='mx-auto max-w-2xl grid place-items-center h-screen adjust-position'>
        {/* <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
          <div className='relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20'>
            Announcing our next round of funding.
            <a href='#' className='font-semibold text-white'>
              <span className='absolute inset-0' aria-hidden='true' />
              Read more <span aria-hidden='true'>&rarr;</span>
            </a>
          </div>
        </div> */}
        <div className='text-center '>
          <h1 className='text-5xl font-semibold font-playfair text-white sm:text-8xl tracking-wider sm:whitespace-nowrap'>
            Berthåga Vård
          </h1>
          <p className='mt-6 text-lg leading-8 text-gray-300'>
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <button
              type='button'
              className='rounded-md bg-indigo-50 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100'
            >
              Kontakta oss
            </button>
          </div>
        </div>
      </div>
      {/* <div
        className='absolute inset-x-0 top-[calc(100%-13rem)] -z-5 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
        aria-hidden='true'
      >
        <div
          className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div> */}
    </div>
  );
}
