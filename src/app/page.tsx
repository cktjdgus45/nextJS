import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Counter from '../components/Counter';

export default function Home() {
  return (
    <div className='bg-black'>
      <div className='text-red-300'>home페이지 입니다! ver5.0..</div>
      <Counter />
    </div>
  )
}
