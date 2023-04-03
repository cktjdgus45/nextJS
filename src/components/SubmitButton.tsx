import { sendMail } from '@/service/mail';
import React from 'react';

type MailInfo = {
    mail: {
        to: string;
        subject: string;
        text: string;
    }
}

const SubmitButton = (props: MailInfo) => {
    const { mail } = props;
    const onMailFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        sendMail(mail);
    }
    return (
        <button onSubmit={onMailFormSubmit} className='bg-yellow-300 w-full text-xs font-light' type="submit">Submit</button>
    )
}

export default SubmitButton;