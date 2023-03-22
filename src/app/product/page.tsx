import { getProducts } from '@/service/products';
import Link from 'next/link';
import React from 'react';


const ProductPage = async () => {
    //서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서, 그걸 보여줌.
    const products = await getProducts();
    console.log(products);
    return (
        <>
            <h1>제품 소개 페이지 입니다.</h1>
            {products.map(({ id, name }, index) => (
                <li key={index}>
                    <Link href={`/products/${id}`}>{name}</Link>
                </li>
            ))}
        </>
    )
}

export default ProductPage;