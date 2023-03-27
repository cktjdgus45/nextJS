import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Counter from '../components/Counter';
import './globals.css';

export default function Home() {
  return (
    <>
      <>home페이지 입니다! ver4.0..</>
      <Counter />
    </>
  )
}
