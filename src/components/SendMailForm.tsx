import React from 'react';

const SendMailForm = () => {
    return (
        <div className='bg-slate-600 rounded-md flex flex-col p-4 w-3/4 h-full'>
            <label className='mb-2 text-white font-normal text-xs' htmlFor="Your Email">Your Email</label>
            <input className='outline-none mb-2' type="text" name="email" id="Your Email" />
            <label className='mb-2 text-white font-normal text-xs' htmlFor="Subject">Subject</label>
            <input className='outline-none mb-2' type="text" name="subject" id="Subject" />
            <label className='mb-2 text-white font-normal text-xs' htmlFor="Message">Message</label>
            <textarea className='outline-none mb-1 basis-4/6 text-base' name="message" id="Message" />
            <button className='bg-yellow-300 w-full text-xs font-light' type="submit">Submit</button>
        </div>
    )
}

export default SendMailForm;