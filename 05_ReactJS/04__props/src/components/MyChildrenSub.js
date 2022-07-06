import React from "react";

import PropTypes from 'prop-types';

const MyChildrenSub = ({width, height, children}) => {
    /** CSS 속성값을 변수화 할 경우 JSON에 객체로 구성한다. */
    const myStyle = {
        // 부모로부터 전달받은 props에 포함된 값으로 width, height 결정
        width: width + 'px',
        height: height + 'px',
        border: '5px solid #d5d5d5',
        padding: '20px',
        margin: '10px',
        backgroundColor: '#eeeeee'
    };

    return (
        <div>
            <h3>MyChildrenSub</h3>
            {/* 부모 컴포넌트가 자신을 호출할 때 시작태그와 끝태그 사이에 명시하는 내용이 childeren이다. */}
            <div style={myStyle}>{children}</div>
        </div>
    );
};

// 속성들에 대한 타입 정의
MyChildrenSub.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    childeren: PropTypes.string
};

// 속성들에 대한 기본값을 JSON으로 정의 (객체이름 고정)
MyChildrenSub.defaultProps = {
    width: 300,
    height: 100,
    childeren: '내용이 없습니다.'
};

export default MyChildrenSub;