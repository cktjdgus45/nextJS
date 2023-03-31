import React from 'react';

const MyInfo = () => {
    return (
        <div className='flex flex-col justify-center w-full h-full py-12 bg-gray-200'>
            <div className='mb-3'>
                <h1 className='text-center font-extrabold text-lg mb-4'>Who am I?</h1>
                <div className='text-center p-2'>
                    <span>개발을 사랑하는 프론트엔드 개발자</span><br />
                    <span>사람과 디자인을 담는 웹앱을 만들고 있음</span>
                </div>

            </div>
            <div className='mb-3'>
                <h1 className='text-center font-extrabold text-lg mb-4'>Career</h1>
                <div className='text-center p-2'>
                    <span>구글러(-Now)</span><br />
                    <span>메이스북(-2019)</span><br />
                    <span>삼준전자(-2015)</span>
                </div>

            </div>
            <div className='mb-3'>
                <h1 className='text-center font-extrabold text-lg mb-4'>Skills</h1>
                <div className='text-center p-2'>
                    <span>React, Vue, Node</span><br />
                    <span>Git, Clean Code</span><br />
                    <span>VS Code, Intelij, MongoDB</span><br />
                </div>

            </div>
        </div>
    )
}
export default MyInfo;