import React from "react";
import PropTypes from "prop-types";

const GradeItem = ({ name, grade, sex, kor, eng, math, sci }) => {
  const sum = parseInt(kor + eng + math + sci);
  const avg = parseInt(sum / 4);
  return (
      <tr align="center">
        <td><strong>{name}</strong></td>
        <td><strong>{grade}</strong></td>
        <td><strong>{sex}</strong></td>
        <td><strong>{kor}</strong></td>
        <td><strong>{eng}</strong></td>
        <td><strong>{math}</strong></td>
        <td><strong>{sci}</strong></td>
        <td><strong>{sum}</strong></td>
        <td><strong>{avg}</strong></td>
      </tr>
  );
};

GradeItem.defaultProps = {
  kor: 0,
  eng: 0,
  math: 0,
  sci: 0,
};

GradeItem.propTypes = {
  name: PropTypes.string.isRequired,
  grade: PropTypes.number.isRequired,
  sex: PropTypes.string.isRequired,
  kor: PropTypes.number,
  eng: PropTypes.number,
  math: PropTypes.number,
  sci: PropTypes.number,
};

export default GradeItem;
