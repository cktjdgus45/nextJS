import FilterablePosts from '@/components/FilterablePosts';
import { getPosts } from '@/service/posts';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'All Posts',
    description: '풀스택 관련 블로그 글'
}

const PostPage = async () => {
    //서버 파일(데이터베이스)에 있는 포스트의 리스트를 읽어와서, 그걸 보여줌.
    const posts = await getPosts();
    const categories = [...new Set(posts.map(post => post.category))];

    return (
        <FilterablePosts posts={posts} categories={categories} />
    )
}

export default PostPage;