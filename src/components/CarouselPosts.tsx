import { getNonFeaturedPosts } from '@/service/posts';
import React from 'react';
import PostCard from './PostCard';
import MulitCarousel from './MulitCarousel';

const CarouselPosts = async () => {
    const posts = await getNonFeaturedPosts();
    return (
        <section>
            <h2 className='mt-5 font-extrabold text-xl mb-3'>You May Like</h2>
            <MulitCarousel>

                {posts.map((post) => (
                    <PostCard key={post.path} post={post} />
                ))}
            </MulitCarousel>
        </section>
    )
}

export default CarouselPosts;