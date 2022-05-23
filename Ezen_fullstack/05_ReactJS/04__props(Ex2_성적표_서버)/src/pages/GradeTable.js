import React from 'react';
import GradeItem from '../components/GradeItem';
import Meta from '../components/Meta';
import GradeData from '../GradeData';
import { useParams } from 'react-router-dom';

const GradeTable = () => {

    const {grade} = useParams();
    const key = `${grade}학년`;
    const currentData = GradeData[key];
    console.log(currentData);

    return (
        <div >
            <Meta title={`${key} ::: React 연습문제`} />

            <h2>{key}</h2>
            <table border="1" cellPadding="7">
                <thead>
                    <tr align="center">
                        <th>이름</th>
                        <th>성별</th>
                        <th>국어</th>
                        <th>영어</th>
                        <th>수학</th>
                        <th>과학</th>
                        <th>총점</th>
                        <th>평균</th>
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((v, i) => {
                        return (
                            <GradeItem key={i} name={v.이름} sex={v.성별} kor={v.국어}
                            eng={v.영어} math={v.수학} sinc={v.과학} />
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default GradeTable;