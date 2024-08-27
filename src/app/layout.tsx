import Footer from '@/layouts/footer';
import Header from '@/layouts/header';
import { cn } from '@/lib/utils';
import Providers from '@/providers/providers';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import NextTopLoader from 'nextjs-toploader';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: '100xJobs',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={cn(
          'font-sans antialiased bg-gradient-light dark:bg-gradient min-h-screen relative flex flex-col',
          fontSans.variable
        )}
      >
        <Providers>
          <NextTopLoader />
          <Header />
          <main className="grow grid">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
