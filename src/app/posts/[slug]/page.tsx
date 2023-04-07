import MarkdownViewer from '@/components/MarkdownViewer';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { getPostData } from '@/service/posts';
import Image from 'next/image';
import React from 'react';

type Props = {
    params: {
        slug: string;
    }
}

const PostSlugPage = async ({ params: { slug } }: Props) => {
    //1.전달된 slug에 해당하는 포스트 데이터를 읽어와서
    //2.데이터를 마크다운 뷰어에 표기.
    const { title, description, date, path, content } = await getPostData(slug);
    return (
        <article className='rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4'>
            <Image className='w-full h-1/5 max-h-[500px]' width={720} height={420} src={`/images/posts/${path}.png`} alt='banner' />
            <section className='flex flex-col p-4'>
                <div className='flex items-center self-end text-sky-600'>
                    <AiTwotoneCalendar />
                    <p className='font-semibold ml-2'>{date}</p>
                </div>
                <h1 className='text-4xl font-bold mb-1'>{title}</h1>
                <p className='text-xl font-bold'>{description}</p>
                <div className='w-44 border-2 border-sky-600 mt-4 mb-8'></div>
                <MarkdownViewer content={content}></MarkdownViewer>
            </section>
        </article>
    )
}

export default PostSlugPage;