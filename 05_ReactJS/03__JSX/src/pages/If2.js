import React from "react";

/**
 * JSX 조건분기 (2) - 조건식과 '&&' 연산자 사용
 * 
 * {조건 && (조건이 참인 경우 출력할 내용)}
 * 
 * 조건이 거짓인 경우 표시되는 내용 없음
 */

const If2 = () => {
    const isLogin = true;

    return (
        <div>
            <h2>If2</h2>
            {isLogin === true && <p>로그인이 되셨습니다.</p>};
        </div>
    );
};

export default If2;