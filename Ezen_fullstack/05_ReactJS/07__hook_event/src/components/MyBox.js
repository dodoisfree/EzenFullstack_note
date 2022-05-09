import React from 'react';

// 부모로부터 전달받은 ref 참조변수를 받기 위해 "React.forwardRef" hook에 대한 컴포넌트를 구현한다.
// 이렇게 구현된 컴포넌트는 props와 부모로부터 전달받은 ref 참조변수를 파라미터로 주입받는다.
const MyBox = React.forwardRef((props, ref) => {
    const containerStyle = {
        border: '1px solid black',
        height: '100px',
        width: '100px',
    };


    // 부모로부터 전달받은 ref 참조변수를 <div>에 연결한다.
    // 이 참조변수를 통해 부모 컴포넌트가 ref 참보변수가 연결된 <div>의 DOM에 접근할 수 있다.
    return (
        <div style={containerStyle} ref={ref}>
        </div>
    );
});

export default MyBox;