'use client'

import React, { useState } from 'react';



const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <>{count}</>
            <button onClick={() => setCount(prev => prev + 1)}>버튼</button>
        </>
    )
}

export default Counter;