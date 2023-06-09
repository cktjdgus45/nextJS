'use client';

import { sendContactEmail } from '@/service/clientMail';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import Banner, { BannerData } from './Banner';
import SubmitButton from './SubmitButton';


type Form = {
    from: string;
    subject: string;
    message: string;
}


const ContactForm = () => {
    const [form, setForm] = useState<Form>({ from: '', subject: '', message: '' });
    const [banner, setBanner] = useState<BannerData | null>(null);
    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }))
    }
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        sendContactEmail(form)
            .then(() => {
                setBanner({ message: '메일을 성공적으로 보냈습니다.', state: 'success' });
            })
            .catch(() => {
                setBanner({ message: '메일전송에 실패했습니다. 다시 시도해주세요.', state: 'error' });
            })
            .finally(() => {
                setTimeout(() => {
                    setBanner(null)
                }, 3000);
                setForm({ from: '', subject: '', message: '' });
            })
    }
    return (
        <>
            {banner && <Banner banner={banner} />}
            <form onSubmit={onSubmit} className='bg-slate-600 rounded-md flex flex-col p-4 w-3/4 h-full'>
                <label className='mb-2 text-white font-bold text-xs' htmlFor="from">Your Email</label>
                <input value={form.from} onChange={onChange} className='outline-none mb-2' type="text" name="from" id="from" autoFocus />
                <label className='mb-2 text-white font-bold text-xs' htmlFor="subject">Subject</label>
                <input value={form.subject} onChange={onChange} className='outline-none mb-2' type="text" name="subject" id="subject" />
                <label className='mb-2 text-white font-bold text-xs' htmlFor="message">Message</label>
                <textarea rows={10} value={form.message} onChange={onChange} className='resize-none outline-none mb-1 basis-4/6 text-base' name="message" id="message" />
                <button className='bg-yellow-300 w-full text-xs font-bold ' type="submit">Submit</button>
            </form>
        </>
    )
}

export default ContactForm;