import { getProducts } from '@/service/products';
import Link from 'next/link';
import React from 'react';
import styles from './page.module.css';
import '../globals.css';

export const revalidate = 3; // revalidate this page every 60 second

const ProductsPage = async () => {
    //서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서, 그걸 보여줌.
    const products = await getProducts();
    const res = await fetch("https://meowfacts.herokuapp.com/",
        { cache: 'no-store' }
    );
    const data = await res.json();
    const factText = data.data[0];
    return (
        <>
            <h1>제품 소개 페이지 입니다.</h1>
            <ul>
                {products.map(({ id, name }, index) => (
                    <li key={index}>
                        <Link href={`/products/${id}`}>{name}</Link>
                    </li>
                ))}
            </ul>
            <article className={styles.article}>
                {factText}
            </article>
        </>
    )
}

export default ProductsPage;