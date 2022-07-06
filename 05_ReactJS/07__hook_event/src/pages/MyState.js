import React from 'react';

const MyState = () => {
    /**
     * state(상태)값 정의
     * - 이 페이지 안에서 유효한 전역변수 같은 개념.
     * - const [변수이름, 변수에 대한 setter함수] = React.useState(변수의 기본값);
     * - state값은 직접 변경할 수 없고 반드시 setter를 통해서만 변경 가능하다.
     * - useState() 함수에 전달하는 값은 state값에 대한 초기값이다.
     */
    const [myName, setMyName] = React.useState('');
    const [myPoint, setMyPoint] = React.useState(50);

    /** 이벤트 핸들러로 사용될 함수는 컴포넌트 함수 안에서 정의된다. */
    const onMyNameChange = e => {
        // e.currentTarget은 jQuery의 $(this)에 해당함.
        // 즉, 이벤트가 발생한 자신 (여기서는 input태그)
        setMyName(e.currentTarget.value);
    };

    return (
        <div>
            <h2>MyState</h2>

            {/* state값을 출력할 때는 단순히 변수값으로서 사용한다. */}
            <h3>{myName}님의 점수는 {myPoint}점 입니다.</h3>

            <hr />

            <div>
                <label htmlFor='myNameInput'>이름: </label>
                <input id='myNameInput' type='text' value={myName} onChange={onMyNameChange} />
            </div>

            <div>
            <label htmlFor='myPointInput'>점수: </label>
                <input id='myPointInput' type='range' min='0' max='100' value={myPoint}
                    onChange={e => {
                        setMyPoint(e.currentTarget.value);
                    }} 
                />
            </div>
        </div>
    );
};

export default MyState;