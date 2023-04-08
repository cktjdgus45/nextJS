import path from 'path';
import { promises as fs, readFile } from 'fs';
import { Category } from './category';
import { cache } from 'react';

export type Post = {
    title: string;
    description: string;
    date: string;
    category: string;
    path: string;
    featured: boolean;
}

export type PostData = Post & {
    content: string
    , next: Post | null
    , prev: Post | null
};

export const getPosts = cache(async (): Promise<Post[]> => {
    const filePath = path.join(process.cwd(), 'data', 'posts.json');
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
});

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

export const getPostData = async (fileName: string): Promise<PostData> => {
    const filePath = path.join(process.cwd(), 'data', 'posts', `${fileName}.md`);
    const posts = await getPosts();
    const post = posts.find(post => post.path === fileName);
    if (!post) throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);
    const index = posts.indexOf(post);
    const next = index > 0 ? posts[index - 1] : null;
    const prev = index < posts.length ? posts[index + 1] : null;
    const content = await fs.readFile(filePath, 'utf-8');
    return { ...post, content, next, prev };
}
