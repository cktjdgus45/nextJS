import ContactCard from '@/components/ContactCard';
import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Contact Me',
    description: '포포에게 메일 보내기'
}

const ContactPage = () => {
    return (
        <section className='w-full h-full flex justify-center'>
            <div className='w-3/12 h-full flex flex-col justify-around items-center py-8'>
                <ContactCard />
                <ContactForm />
            </div>
        </section>
    )
}

export default ContactPage;