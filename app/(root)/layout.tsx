import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
//components imports
import Topbar from '@/components/shared/Topbar';
import BottomBar from '@/components/shared/BottomBar';
import RightSideBar from '@/components/shared/RightSideBar';
import LeftSideBar from '@/components/shared/LeftSideBar';

import '../globals.css';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Threads',
    description: 'A nextJS 13 Meta Threads Application with Typescript'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Topbar />
          <main className='flex flex-row'>
            <LeftSideBar />
            <section className='main-container'>
              <div className='w-full max-w-4xl'>
                {children}
              </div>
            </section>
            <RightSideBar />
          </main>
          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  )
}
