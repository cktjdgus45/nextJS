import FilterablePosts from '@/components/FilterablePosts';
import { getPosts } from '@/service/posts';
import React from 'react';


const PostPage = async () => {
    //서버 파일(데이터베이스)에 있는 포스트의 리스트를 읽어와서, 그걸 보여줌.
    const posts = await getPosts();
    const categories = [...new Set(posts.map(post => post.category))];

    return (
        <FilterablePosts posts={posts} categories={categories} />
    )
}

export default PostPage;