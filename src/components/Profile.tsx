import Image from 'next/image';
import React from 'react';

const Profile = () => {
    return (
        <div className='flex flex-col items-center justify-center basis-[15%] bg-blue'>
            <div className='mt-2'>
                <Image className='my-2 rounded-full' width={200} height={0} src="/images/popo.jpg" alt="proifle" />
            </div>
            <h1 className='my-2 font-extrabold text-2xl'>Hi,I&apos;m Popo</h1>
            <h3 className='mb-2 font-semibold text-lg'>Front-end engineer</h3>
            <span className='mb-2 text-sm font-bold'>3.38kg 다이어트중인 코더 포포</span>
            <button className='m-2 rounded-lg px-2 py-1 font-bold  text-base bg-yellow-400 text-black'>Contact Me</button>
        </div>
    )
}

export default Profile;