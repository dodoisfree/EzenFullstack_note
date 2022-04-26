import React from 'react';

// 외부 css파일 참조 --> 참조변수 이름을 지정하지 않는다.
import '../assets/css/mystyle.css';

const CssClass = () => {
    return (
        <div>
            <h2>CssClass</h2>
            <div className='my-css-box'></div>
        </div>
    );
};

export default CssClass;