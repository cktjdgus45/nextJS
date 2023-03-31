import Image from 'next/image';
import React from 'react';

type Prop = {
    post: {
        title: string;
        description: string;
        date: string;
        category: string;
        path: string;
        featured: boolean;
    }
}

const PostCard = (post: Prop) => {
    const { post: { title, description, date, category, path } } = post;
    return (
        <div className=' flex flex-col shadow-md hover:shadow-lg duration-100 ease-linear'>
            <div className='basis-[70%]'>
                <Image className='rounded-t-md bg-center bg-contain w-full h-full' width={650} height={450} src={`/images/posts/${path}.png`} alt="proifle" />
            </div>
            <div className='bg-white p-2 flex justify-end basis-[10%] text-sm'>{date}</div>
            <div className='rounded-b-md bg-white p-4 basis-[20%] flex flex-col items-center justify-center'>
                <h1 className='font-bold'>{title}</h1>
                <span className='my-3'>{description}</span>
                <div className='text-sm rounded-md bg-sky-300'>
                    <span className='p-1'>{category}</span>
                </div>
            </div>
        </div>
    )
}

export default PostCard;