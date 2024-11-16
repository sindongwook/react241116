import React, { useRef } from 'react'

/*

    [useRef] Animation 제어

*/

const Step02 = () => {
    const animationRef = useRef(null);
  return (
    <>
    
        <div classMame='box'></div>
        <button onClick={()=>{
            animationRef.current.classList.add('animate');
        }}>CLICK</button>
    
    </>
  )
}

export default Step02