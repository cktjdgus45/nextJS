import Link from 'next/link';
import { Metadata } from 'next';
import styles from './layout.module.css';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '포포 블로그',
    template: '포포 블로그 | %s'
  },
  description: '풀스택 개발자 포포의 블로그',
  icons: {
    icon: '/favicon.ico',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <div className="app flex flex-col h-screen w-screen px-20">
          <header className='py-5 text-2xl font-extrabold basis-[10%] flex items-center justify-between'>
            <h1>PoPo&apos;s Blog</h1>
            <nav>
              <Link className='text-sm ml-2 font-semibold' href='/'>home</Link>
              <Link className='text-sm ml-2 font-semibold' href='/about'>about</Link>
              <Link className='text-sm ml-2 font-semibold' href='/posts'>posts</Link>
              <Link className='text-sm ml-2 font-semibold' href='/contact'>contact</Link>
            </nav>
          </header>
          <main className='basis-[90%]'>
            {children}
          </main>
          <footer className='bg-slate-500 p-5 text-white font-bold flex items-center justify-center basis-[5%] text-center'>@all rights reserved by popo</footer>
        </div>
      </body>
    </html>
  )
}
