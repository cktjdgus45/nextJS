import AdjacentPostCard from '@/components/AdjacentPostCard';
import PostContent from '@/components/PostContent';
import { getPostData } from '@/service/posts';
import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

type Props = {
    params: {
        slug: string;
    }
}

export const generateMetadata = async ({ params: { slug } }: Props): Promise<Metadata> => {
    const post = await getPostData(slug);
    const { title, description } = post;
    return {
        title,
        description
    }
}

const PostSlugPage = async ({ params: { slug } }: Props) => {
    //1.전달된 slug에 해당하는 포스트 데이터를 읽어와서
    //2.데이터를 마크다운 뷰어에 표기.
    const post = await getPostData(slug);
    const { path, title, next, prev } = post;
    return (
        <article className='rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4'>
            <Image className='w-full h-1/5 max-h-[500px]' width={720} height={420} src={`/images/posts/${path}.png`} alt={title} />
            <PostContent post={post} />
            <section className='flex shadow-md'>
                {prev && <AdjacentPostCard post={prev} type='prev' />}
                {next && <AdjacentPostCard post={next} type='next' />}
            </section>
        </article>
    )
}

export default PostSlugPage;