import MarkdownViewer from '@/components/MarkdownViewer';
import { getPostData } from '@/service/posts';
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
    return (
        <>
            <h1>{post.title}</h1>
            <MarkdownViewer content={post.content}></MarkdownViewer>
            <pre>{post.content}</pre>
        </>
    )
}

export default PostSlugPage;