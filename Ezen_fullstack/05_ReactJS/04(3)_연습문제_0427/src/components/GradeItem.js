import React from 'react';
import PropTypes from 'prop-types';

const GradeItem = ({name, grade, sex, kor, eng, math, sinc}) => {
    const sum = parseInt(kor + eng + math + sinc);
    const avg = parseInt(sum / 4);

    return (
        <tr align="center">
            <th><strong>{name}</strong></th>
            <th>{sex}</th>
            <th>{kor}</th>
            <th>{eng}</th>
            <th>{math}</th>
            <th>{sinc}</th>
            <th><strong>{sum}</strong></th>
            <th><strong>{avg}</strong></th>
        </tr>
    );
};

GradeItem.propTypes = {
    name: PropTypes.string.isRequired,
    sex: PropTypes.string.isRequired
};

GradeItem.defaultProps = {
    kor: 0,
    eng: 0,
    math: 0,
    sinc: 0
};

export default GradeItem;