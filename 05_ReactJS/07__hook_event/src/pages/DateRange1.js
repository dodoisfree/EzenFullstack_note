import React from 'react';
import dayjs from 'dayjs';  // 날짜 처리를 위함

/**
 * useState를 사용하여 날짜 범위 선택 기능 구현
 */

const DateRange1 = () => {
    const day = dayjs();
    
    //const [startDate, setStartDate] = React.useState(...);
    //const [endDate, setEndDate] = React.useState(...);
    
    /**
     * 화면에 출력할 상태값을 JSON 객체 myDate로 정의하고
     * 이 객체의 값을 갱신할 수 있는 함수를 setMyDate로 선언
     */
    const [myDate, setMyDate] = React.useState({
       startDate: day.format('YYYY-MM-DD'),
       endDate: day.format('YYYY-MM-DD')
    });

    return (
        <div>
            <h2>DateRange1</h2>

            <p>
                {myDate.startDate} ~ {myDate.endDate}
            </p>
            
            <button type='button' 
                onClick={(e) => {
                    setMyDate({ ...myDate, startDate: day.add(-7, 'd').format('YYYY-MM-DD') });
                }}>
                7일
            </button>

            <button type='button' 
                onClick={(e) => {
                    setMyDate({ ...myDate, startDate: day.add(-15, 'd').format('YYYY-MM-DD') });
                }}>
                15일
            </button>

            <button type='button' 
                onClick={(e) => {
                    setMyDate({ ...myDate, startDate: day.add(-1, 'M').format('YYYY-MM-DD') });
                }}>
                1개월
            </button>

            <button type='button' 
                onClick={(e) => {
                    setMyDate({ ...myDate, startDate: day.add(-3, 'M').format('YYYY-MM-DD') });
                }}>
                3개월
            </button>

            <button type='button' 
                onClick={(e) => {
                    setMyDate({ ...myDate, startDate: day.add(-6, 'M').format('YYYY-MM-DD') });
                }}>
                5개월
            </button>
        </div>
    );
};

export default DateRange1;