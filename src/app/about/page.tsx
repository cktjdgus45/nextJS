import MyInfo from '@/components/MyInfo';
import Profile from '@/components/Profile';
import React from 'react';

const AboutPage = async () => {

    return (
        <div className='flex flex-col justify-center'>
            <Profile />
            <MyInfo />
        </div>
    )
}

export default AboutPage;