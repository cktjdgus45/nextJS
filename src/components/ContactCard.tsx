import Link from 'next/link';
import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';

const ContactCard = () => {
    return (
        <div className='my-4 flex flex-col p-3 items-center basis-3/6 text-center'>
            <h1 className='font-extrabold text-2xl'>Contact me</h1>
            <span className='my-3'>cktjdgus45@naver.com</span>
            <div className='flex text-2xl mb-4'>
                <Link href='https://github.com/cktjdgus45'>
                    <BsGithub />
                </Link>
                <BsLinkedin className='mx-3' />
                <BsYoutube />
            </div>
            <h1 className='font-extrabold text-xl basis'>Or Send me an email</h1>
        </div>
    )
}

export default ContactCard;