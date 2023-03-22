import React from 'react';
import { notFound } from 'next/navigation';
import { getProduct, getProducts } from '@/service/products';

type Props = {
    params: {
        slug: string;
    }
}
const ProductPage = async ({ params: { slug } }: Props) => {
    //서버파일에 있는 데이터 중 해당 제품의 정보를 찾아서 그걸 보여줌
    const product = await getProduct(slug);
    if (!product) {
        notFound();
    }
    return (
        <>
            {product.name} | product의 기본골격 페이지입니다 !
        </>
    )
}
//어떤 경로라도 동적으로 접근할수있기때문에 페이지를 미리 만들수가없었다.
//어떤 경로에 한해서 미리 페이지를 만들수 있게 하기.
//NEXTJS에게 함수로알려주기.
export async function generateStaticParams() {
    //모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄거임(SSG)
    const products = await getProducts();
    return products.map(product => ({
        slug: product
    }))
}

//SEO
export function generateMetadata({ params }: Props) {
    return {
        title: `제품의 이름 ${params.slug}`
    }
}

export default ProductPage;