import PostContent from '@/components/PostContent';
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
    const post = await getPostData(slug);
    const { path, title } = post;
    return (
        <article className='rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4'>
            <Image className='w-full h-1/5 max-h-[500px]' width={720} height={420} src={`/images/posts/${path}.png`} alt={title} />
            <PostContent post={post} />
        </article>
    )
}

export default PostSlugPage;