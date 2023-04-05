import { Post } from '@/service/posts';
import React from 'react';
import PostCard from './PostCard';

type Props = {
    posts: Post[];
}

const PostGrid = ({ posts }: Props) => {
    return (
        <section className='grid grid-rows-2 grid-cols-3 gap-4 basis-3/4 h-full p-3'>
            {posts.map(post => (
                <PostCard key={post.path} post={post} />
            ))}
        </section>
    )
}

export default PostGrid;