import Link from 'next/link';
import { Metadata } from 'next';
import styles from './layout.module.css';

export const metadata: Metadata = {
  title: 'nextJS PRACTICE',
  description: 'Generated by create next app',
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
        <header className={styles.header}>
          <h1 className={styles.link}>Demo Note</h1>
          <nav className={styles.nav}>
            <Link className={styles.link} href='/about'>About</Link>
            <Link className={styles.link} href='/contact'>Contact</Link>
            <Link className={styles.link} href='/products'>Products</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
