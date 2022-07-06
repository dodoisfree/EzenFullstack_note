import React from 'react';

/**
 * 사용자 정의 함수.
 * useState와 useEffect를 하나의 함수로 묶는 용도로 정의함
 */

const MyHook = () => {
    // 브라우저의 넓이를 의미하는 상태값
    const [myWidth, setMywidth] = React.useState(window.innerWidth);

    // 사용자 정의 함수.
    const onMyResize = () => setMywidth(window.innerWidth);

    // 페이지 로드시에 이벤트 정의, 페이지 종료시에 이벤트 해제
    React.useEffect(() => {
        window.addEventListener('resize', onMyResize);
        return () => window.removeEventListener('resize', onMyResize);
    }, []);


    return myWidth;
};

export default MyHook;