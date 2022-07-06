import React from "react";

/**
 * jsx 반복처리 (2-2) - return문 안에서 map함수 사용하기
 */

const Loop3 = () => {
    const seasons = ['봄', '여름', '가을', '겨울'];

    return (
        <div>
            <h2>Loop3</h2>
            <table border='1'>
                <tbody>
                    <tr>
                        {seasons.map((item, index) => {
                            return <td key={index}>{item}</td>;
                        })}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Loop3;