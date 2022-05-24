import React, { memo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarCartView = memo(({chartData}) => {
  /** 그래프 옵션 */
  const options = {
    indexAxis: "x",
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "관람객 수 순위",
      },
    },
  };
  /** Chart에 표시될 데이터 (막대 그래프용) */
  const data = {
    // x축에 나타날 항목들
    labels: chartData.movieNm,
    // y축에 값을 비롯한 기타 옵션들
    datasets: [
      {
        // 그래프 제목
        label: "관람객 수",
        backgroundColor: "#0066ff44",
        borderColor: "#0066ff",
        borderWidth: 1,
        // 그래프 각 항목별 y축 수치값
        data: chartData.audiCnt,
      },
    ],
  };
  return <Bar data={data} options={options} />;
});


BarCartView.defaultProps = {
  chartData: {
    movieNm: [],
    audiCnt: [],
  },
};

export default BarCartView;
