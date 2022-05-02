import React from 'react';

/**
 * React에서 document.getElementById(...)에 해당하는 기능을 사용하는 방법
 */

const MyRef = () => {
    // 컴포넌트 렌더링시 콘솔에 출력된 내역 삭제하기
    React.useEffect(() => console.clear(), []);

    // HTML 태그를 react 안에서 참조할 수 있는 변수를 생성
    const myDname = React.useRef();
    const myLoc = React.useRef();
    const myResult = React.useRef();

    return (
        <div>
            <h2>MyRef</h2>

            {/* 미리 준비한 컴포넌트 참조변수와 HTML 태그를 연결 */}
            <div>
                <label htmlFor='dname'>학과명</label>
                <input type='text' ref={myDname} id='dname' />
            </div>

            <div>
                <label htmlFor='loc'>학과위치</label>
                <input type='text' ref={myLoc} id='loc' />
            </div>

            <h3>
                입력값: <span ref={myResult}></span>
            </h3>
            
            <button onClick={e => {
                // 컴포넌트 참조변수를 사용해서 다른 HTML 태그에 접근 가능
                // --> "참조변수.current" 해당 HTML을 의미하는 Javascript DOM 객체
                // --> myDname.current와 document.querySelector(...), document.getElementById(...) 등으로 생성한 객체가 동일한 DOM 객체이다.
                console.log(myDname);
                console.log(myLoc);
                const dname = myDname.current.value;
                const loc = myLoc.current.value;

                myResult.current.innerHTML = dname + ", " + loc;
            }}>클릭</button>
        </div>
    );
};

export default MyRef;