import ContactCard from '@/components/ContactCard';
import SendMailForm from '@/components/SendMailForm';
import React from 'react';

const ContactPage = () => {
    return (
        <section className='w-full h-full flex justify-center'>
            <div className='w-3/12 h-full flex flex-col justify-around items-center py-8'>
                <ContactCard />
                <SendMailForm />
            </div>
        </section>
    )
}

export default ContactPage;