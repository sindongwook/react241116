import React, { useEffect, useState } from 'react'

/* 

    [useEffect] 의존성 배열

*/

const Step06 = () => {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log(`카운트가 ${count}로 변경됨`)
    }, [count]);  // count 값이 변경될 때만 실행

  return (
    <>
        <p>카운트 : </p>
        <button onClick={()=>setCount(count+1)}>CLICK</button>
    </>
  )
}

export default Step06