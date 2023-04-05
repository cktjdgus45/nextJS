'use client';

import { Post } from '@/service/posts';
import React, { useState } from 'react';
import CategoryGrid from './CategoryGrid';
import PostGrid from './PostGrid';

type Props = {
    posts: Post[];
    categories: string[];
}

const ALL_POSTS = 'All Posts';

const FilterablePosts = ({ posts, categories }: Props) => {
    const [selected, setSelected] = useState(ALL_POSTS);
    const filtered = selected === ALL_POSTS ? posts : posts.filter(post => post.category === selected);
    return (
        <main className='flex w-full h-full'>
            <PostGrid posts={filtered} />
            <CategoryGrid categories={['All Posts', ...categories]} selected={selected} onClick={setSelected} />
        </main>
    )
};

export default FilterablePosts;