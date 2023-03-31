import { getFeaturedPosts } from '@/service/posts';
import React from 'react';
import { notFound } from 'next/navigation';
import PostCard from './PostCard';

const FeaturedPost = async () => {
    const posts = await getFeaturedPosts();
    if (!posts) {
        notFound();
    }
    return (
        <div className='basis-[85%]'>
            <h1 className='font-extrabold text-xl my-2'>Featured Posts</h1>
            <div className='grid grid-rows-2 grid-cols-3 gap-4'>
                {
                    posts.map(post =>
                        <PostCard key={Math.random()} post={post} />
                    )
                }
            </div>
        </div>
    )
}

export default FeaturedPost;