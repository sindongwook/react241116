import React, { useRef } from 'react'

/*

    [useRef] focus 제어

*/ 

const Step03 = () => {
    const inputRef = useRef(null);

    const focusInput = ()=>{
        
        // 안정성 체크 : 현재 참조하고 있는 요소가 있는지 확인

        if(inputRef.current){
            inputRef.current.focus();
        };
    }
  return (
    <>
        <input type="text"/>
        <button onClick={focusInput}>입력으로 이동</button>
    </>
  )
}

export default Step03