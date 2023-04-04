import React from 'react';

export type BannerData = {
    message: string;
    state: 'success' | 'error'
}

const Banner = ({ banner: { message, state } }: { banner: BannerData }) => {
    const isSuccess = state === 'success';
    const icon = isSuccess ? '✅' : '🔥';
    return (
        <p className={`mb-2 w-3/4 text-center text-white font-bold font-sm p-1 rounded-md ${isSuccess ? 'bg-green-300' : 'bg-red-300'}`}>{`${icon} ${message}`}</p>
    )
}

export default Banner;