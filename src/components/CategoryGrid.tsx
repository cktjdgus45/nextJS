import React from 'react';
import Category from './Category';

type Props = {
    categories: string[];
    selected: string;
    onClick: (category: string) => void
}

const CategoryGrid = ({ categories, selected, onClick }: Props) => {

    return (
        <aside className='basis-1/4 h-full flex justify-center p-3'>
            <div className='flex flex-col p-2 w-full items-center'>
                <h1 className='text-bold font-bold mb-3 border-b-2 border-blue-400'>Category</h1>
                <ul className='flex flex-col text-sm font-normal w-full items-center'>
                    {categories.map(category => (
                        <li onClick={() => onClick(category)} key={category} id={category} className={`cursor-pointer mb-2 hover:text-blue-400 focus:text-blue-400 ease-in-out duration-300 hover:text-base font-base ${category === selected && 'text-sky-600'}`}>{category}</li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}

export default CategoryGrid;