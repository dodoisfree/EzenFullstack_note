import React from 'react';

// (3-1) /src폴더 하위의 임의의 경로에 존재하는 이미지 파일을 참조
// --> 현재 소스파일을 기준으로 하는 상대경로로 지정
// --> 실행시에는 react에 의해 다른 경로로 복사된다.
import sample from '../assets/img/sample.png';

/**
 * Inline Css를 적용한 컴포넌트
 * ex) <div style="..."></div>
 */
const InlineCss = () => {
    /** (1-1) CSS로 사용될 JSON 객체 정의 */
    // CSS속성이름은 바닐라스크립트의 프로퍼티 이름으로 지정해야 함.
    // ex) document.getElementById("hello").style.backgroundColor = "#ff00ff";
    const myStyle = {
        backgroundColor: '#f60',
        fontSize: '20px',
        color: '#0f6',
        fontWeight: 'bold',
        padding: '10px 25px',
        marginBottom: '10px'
    };

    return (
        <div>
            <h2>InlineCSS</h2>

            <h3>변수로 정의된 CSS 참조하기</h3>
            {/* (1-2) JSON객체를 style 속성에 적용 */}
            <div style={myStyle}>Hello React Css (1)</div>

            <h3>직접 CSS 코딩하기</h3>
            {/* (2) CSS 직접 코딩 */}
            <div
                style={{
                    backgroundColor: '#ff0',
                    fontSize: '20px',
                    color: '#00f',
                    fontWeight: 'bold',
                    padding: '10px 25px',
                    marginBottom: '10px'
                }}>
                Hello React Css (2)
            </div>

            <h3>이미지 참조하기</h3>
            {/* (3-2) 이미지 사용시 alt 속성을 지정 안하면 경고 발생함 */}
            <img src={sample} width='240' height='240' alt='샘플이미지' />
            {/* (3-3) public 폴더에 있ㅎ는 파일들은 단순 절대경로로 참조 가능함
                (public) 폴더 하위에 임의의 폴더 생성가능) */}
            <img src='/logo192.png' width='240' height='240' alt='react' />
        </div>
    );
};

export default InlineCss;