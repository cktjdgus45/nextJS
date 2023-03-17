import React from 'react';
type Props = {
    params: {
        slug: string;
    }
}
const slug = ({ params }: Props) => {
    return (
        <>
            {params.slug} | product의 기본골격 페이지입니다 !
        </>
    )
}

export default slug;