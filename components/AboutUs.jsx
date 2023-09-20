import Image from 'next/image';
import img from 'public/images/about-us-img2.png';

import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid';

export default function Example() {
  return (
    <div className='relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0'>
      <div className='absolute inset-0 -z-10 overflow-hidden'>
        <svg
          className='absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]'
          aria-hidden='true'
        >
          <defs>
            <pattern
              id='e813992c-7d03-4cc4-a2bd-151760b470a0'
              width={200}
              height={200}
              x='50%'
              y={-1}
              patternUnits='userSpaceOnUse'
            >
              <path d='M100 200V.5M.5 .5H200' fill='none' />
            </pattern>
          </defs>
          <svg x='50%' y={-1} className='overflow-visible fill-gray-50'>
            <path
              d='M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z'
              strokeWidth={0}
            />
          </svg>
          <rect
            width='100%'
            height='100%'
            strokeWidth={0}
            fill='url(#e813992c-7d03-4cc4-a2bd-151760b470a0)'
          />
        </svg>
      </div>
      <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10'>
        <div className='lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
          <div className='lg:pr-4'>
            <div className='lg:max-w-lg'>
              <p className='text-base font-semibold leading-7 text-indigo-600'>
                Där omsorg möter självständighet.
              </p>
              <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                Vår passion för vårt arbete driver oss att alltid sträva efter
                att leverera bästa möjliga omsorg och stöd.
              </h1>
              <p className='mt-6 text-xl leading-8 text-gray-700'>
                Berthåga Vård är inte bara ett namn, utan en filosofi som
                grundades med ett bestämt syfte: att stödja individer i deras
                vardag och hjälpa dem att utveckla sina förmågor och uppnå en
                större grad av självständighet.
              </p>
            </div>
          </div>
        </div>
        <div className='-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden justify-self-center sm:justify-self-auto'>
          <Image
            alt='about us'
            src={img}
            placeholder='blur'
            // quality={100}
            width={912}
            sizes='(max-width: 640px) 768px, 912px'
            objectFit='cover'
            objectPosition='right top'
            style={{
              width: '48rem',
              maxWidth: 'none',
              borderRadius: '0.75rem',
              backgroundColor: '#1A202C',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              border: '1px solid rgba(203, 213, 224, 0.1)',
            }}
          />
        </div>
        <div className='lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
          <div className='lg:pr-4'>
            <div className='max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg'>
              <p>
                Med över 15 års erfarenhet har Berthåga Vårds team byggt upp en
                solid kunskapsbas. Vi förstår de unika utmaningar och behov som
                individer kan möta. Vårt huvudfokus ligger på stödboende, där vi
                strävar efter att varje person ska känna sig som hemma.
              </p>
              <ul role='list' className='mt-8 space-y-8 text-gray-600'>
                <li className='flex gap-x-3'>
                  <CloudArrowUpIcon
                    className='mt-1 h-5 w-5 flex-none text-indigo-600'
                    aria-hidden='true'
                  />
                  <span>
                    <strong className='font-semibold text-gray-900'>
                      Delaktighet och engagemang:&nbsp;
                    </strong>
                    Vi inkluderar alla i vårdprocessen och arbetar tillsammans
                    för att möta individuella behov.
                  </span>
                </li>
                <li className='flex gap-x-3'>
                  <LockClosedIcon
                    className='mt-1 h-5 w-5 flex-none text-indigo-600'
                    aria-hidden='true'
                  />
                  <span>
                    <strong className='font-semibold text-gray-900'>
                      Helhetssyn:&nbsp;
                    </strong>
                    Vår erfarenhet inom flera områden som HVB-hem och särskilda
                    boenden ger oss en bred förståelse för våra klienters behov.
                  </span>
                </li>
                <li className='flex gap-x-3'>
                  <ServerIcon
                    className='mt-1 h-5 w-5 flex-none text-indigo-600'
                    aria-hidden='true'
                  />
                  <span>
                    <strong className='font-semibold text-gray-900'>
                      Fokuserad och målinriktad:&nbsp;
                    </strong>
                    Vi använder vårt team av erfarna yrkesmänniskor för att
                    agera motiverande och inspirerande i varje steg av
                    processen.
                  </span>
                </li>
              </ul>
              <p className='mt-8'>
                Tack vare vår mångfacetterade erfarenhet kan vi erbjuda en
                skräddarsydd vårdplan som ger varje individ de bästa
                förutsättningarna för att bli en självständig och trygg person.
                Om du eller någon du känner skulle dra nytta av våra tjänster,
                är du varmt välkommen att kontakta oss.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
