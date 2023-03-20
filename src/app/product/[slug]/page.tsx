import React from 'react';
import { notFound } from 'next/navigation';

type Props = {
    params: {
        slug: string;
    }
}
const slug = ({ params }: Props) => {
    if (params.slug === 'nothing') {
        notFound();
    }
    return (
        <>
            {params.slug} | product의 기본골격 페이지입니다 !
        </>
    )
}
//어떤 경로라도 동적으로 접근할수있기때문에 페이지를 미리 만들수가없었다.
//어떤 경로에 한해서 미리 페이지를 만들수 있게 하기.
//NEXTJS에게 함수로알려주기.
export function generateStaticParams() {
    const products = ['pants', 'skirt', 'shirts',];
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

export default slug;