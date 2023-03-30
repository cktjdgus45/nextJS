import { Inter } from 'next/font/google'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='w-full h-full flex flex-col'>
      <div className='flex flex-col items-center justify-center basis-[15%] bg-blue'>
        <div className='mt-2'>
          <Image className='my-2 rounded-full' width={200} height={0} src="/images/popo.jpg" alt="proifle" />
        </div>
        <h1 className='my-2 font-extrabold text-2xl'>Hi,I&apos;m Popo</h1>
        <h3 className='mb-2 font-semibold text-lg'>Front-end engineer</h3>
        <span className='mb-2 text-sm font-bold'>3.38kg 다이어트중인 코더 포포</span>
        <button className='m-2 rounded-lg px-2 py-1 font-bold  text-base bg-yellow-400 text-black'>Contact Me</button>
      </div>
      <div className='basis-[85%]'>
        <h1 className='font-extrabold text-xl my-2'>Featured Posts</h1>
        <div className='grid grid-rows-2 grid-cols-3 gap-4'>
          <div className=' flex flex-col shadow-lg'>
            <div className='basis-[70%]'>
              <Image className='rounded-t-md bg-center bg-contain w-full h-full' width={650} height={450} src="/images/posts/review-2023.png" alt="proifle" />
            </div>
            <div className='bg-white p-2 flex justify-end basis-[10%] text-sm'>2023-12-31</div>
            <div className='rounded-b-md bg-white p-4 basis-[20%] flex flex-col items-center justify-center'>
              <h1 className='font-bold'>2023년 리뷰</h1>
              <span className='my-3'>2023년 한해 동안 배운 기술들, 생각들 정리</span>
              <div className='text-sm rounded-md bg-sky-300'>
                <span className='p-1'>my story</span>
              </div>
            </div>
          </div>
          <div className=' flex flex-col shadow-lg'>
            <div className='basis-[70%]'>
              <Image className='rounded-t-md bg-center bg-contain w-full h-full' width={650} height={450} src="/images/posts/react18-walkthrough.png" alt="thumbnail" />
            </div>
            <div className='bg-white p-2 flex justify-end basis-[10%] text-sm'>2023-05-02</div>
            <div className='rounded-b-md bg-white p-4 basis-[20%] flex flex-col items-center justify-center'>
              <h1 className='font-bold'>리액트 18버전!</h1>
              <span className='my-3'>리액트 18에 추가된 사항들 정리</span>
              <div className='text-sm rounded-md bg-sky-300'>
                <span className='p-1'>frontend</span>
              </div>
            </div>
          </div>
          <div className=' flex flex-col shadow-lg'>
            <div className='basis-[70%]'>
              <Image className='rounded-t-md bg-center bg-contain w-full h-full' width={650} height={450} src="/images/posts/best-react-practices.png" alt="thumbnail" />
            </div>
            <div className='bg-white p-2 flex justify-end basis-[10%] text-sm'>2023-04-15</div>
            <div className='rounded-b-md bg-white p-4 basis-[20%] flex flex-col items-center justify-center'>
              <h1 className='font-bold'>리액트 Best Practice!</h1>
              <span className='my-3'>리액트를 정확하게 사용하는 방법들을 정리</span>
              <div className='text-sm rounded-md bg-sky-300'>
                <span className='p-1'>frontend</span>
              </div>
            </div>
          </div>
          <div className=' flex flex-col shadow-lg'>
            <div className='basis-[70%]'>
              <Image className='rounded-t-md bg-center bg-contain w-full h-full' width={650} height={450} src="/images/posts/node-pro-tips.png" alt="thumbnail" />
            </div>
            <div className='bg-white p-2 flex justify-end basis-[10%] text-sm'>2023-04-10</div>
            <div className='rounded-b-md bg-white p-4 basis-[20%] flex flex-col items-center justify-center'>
              <h1 className='font-bold'>Node 프로 팁!</h1>
              <span className='my-3'>노드를 프로처럼 사용하기 위한 모든 팁들을 정리!</span>
              <div className='text-sm rounded-md bg-sky-300'>
                <span className='p-1'>backend</span>
              </div>
            </div>
          </div>
          <div className=' flex flex-col shadow-lg'>
            <div className='basis-[70%]'>
              <Image className='rounded-t-md bg-center bg-contain w-full h-full' width={650} height={450} src="/images/posts/javascript-10-tips.png" alt="thumbnail" />
            </div>
            <div className='bg-white p-2 flex justify-end basis-[10%] text-sm'>2022-06-15</div>
            <div className='rounded-b-md bg-white p-4 basis-[20%] flex flex-col items-center justify-center'>
              <h1 className='font-bold'>자바스크립트 10가지 프로팁!</h1>
              <span className='my-3'>프로처럼 자바스크립트 사용할 수 있는 10가지 팁</span>
              <div className='text-sm rounded-md bg-sky-300'>
                <span className='p-1'>javascript</span>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className='my-3'>
        <h1 className='font-extrabold text-xl'>You may like</h1>
      </div>
    </div>
  )
}
