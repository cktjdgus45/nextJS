'use client';

import React, { useState } from 'react';
import FeaturedPost from '@/components/FeaturedPost';
import { Category as CategoryType } from '@/service/category';

const Category = () => {
    const [category, setCategory] = useState<CategoryType>('All Posts');
    console.log(category);
    const categories = ["All Posts", "my story", "javascript", "backend", "frontend"];
    const onClick = (e: React.MouseEvent<HTMLLIElement>) => {
        console.dir(e.target);
    }
    return (
        <div className='flex flex-col p-2 w-full items-center'>
            <h1 className='text-bold font-bold mb-3 border-b-2 border-blue-400'>Category</h1>
            <ul className='flex flex-col text-sm font-normal w-full items-center'>
                {categories.map(category => (
                    <li onClick={onClick} key={category} id={category} className='cursor-pointer mb-2 hover:text-blue-400 focus:text-blue-400 ease-in-out duration-300 hover:text-base font-base'>{category}</li>
                ))}
            </ul>
        </div>
    )
}

export default Category;