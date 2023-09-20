import { Playfair_Display, Open_Sans } from 'next/font/google';

export const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
});
