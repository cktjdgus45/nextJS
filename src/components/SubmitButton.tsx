import { sendContactEmail } from '@/service/clientMail';
import React from 'react';

type MailInfo = {
    mail: {
        to: string;
        subject: string;
        text: string;
    }
}

const SubmitButton = (props: MailInfo) => {
    const { mail: { to, subject, text } } = props;
    const onMailFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        sendContactEmail({ from: to, subject: subject, message: text });
    }
    return (
        <button onSubmit={onMailFormSubmit} className='bg-yellow-300 w-full text-xs font-light' type="submit">Submit</button>
    )
}

export default SubmitButton;