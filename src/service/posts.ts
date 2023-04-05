import path from 'path';
import { promises as fs } from 'fs';
import { Category } from './category';

type Post = {
    title: string;
    description: string;
    date: string;
    category: string;
    path: string;
    featured: boolean;
}

export const getFeaturedPosts = (): Promise<Post[]> => {
    return getPosts()
        .then(posts => posts.filter(post => post.featured));
}
export const getNonFeaturedPosts = (): Promise<Post[]> => {
    return getPosts()
        .then(posts => posts.filter(post => !post.featured));
}

export const getFilteredPostsByCategory = (category: Category) => {
    return getPosts()
        .then(posts => posts.filter(post => post.category === category));
}

export const getPosts = async (): Promise<Post[]> => {
    const filePath = path.join(process.cwd(), 'data', 'posts.json');
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
}

