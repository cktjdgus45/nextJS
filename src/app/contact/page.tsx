import ContactCard from '@/components/ContactCard';
import ContactForm from '@/components/ContactForm';
import React from 'react';

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