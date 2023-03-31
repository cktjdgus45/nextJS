import MyInfo from '@/components/MyInfo';
import Profile from '@/components/Profile';
import { getProducts } from '@/service/products';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import clothesImage from '../../../public/images/clothes.jpg';
import '../globals.css';

const AboutPage = async () => {

    return (
        <div className='flex flex-col justify-center'>
            <Profile />
            <MyInfo />
        </div>
    )
}

export default AboutPage;