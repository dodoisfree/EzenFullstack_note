import React from "react";

/**
 * JSX 조건분기 (4) - 삼항 연산자를 사용한 조건 분기
 * {조건 ? (조건이 참인 경우 출력할 내용) : (그렇지 않은 경우 출력할 내용)}
 * 조건이 거짓인 경우 사용하지 않고자 한다면 null 사용.
 * ex) { point === 80 ? (...) : (null) }
 */

const If4 = () => {
    const isLogin = true;

    return (
        <div>
            <h2>If4</h2>
            { isLogin === true ?
            <button type="button">로그아웃</button> : <button type="button">로그인</button> }
        </div>
    );
};

export default If4;