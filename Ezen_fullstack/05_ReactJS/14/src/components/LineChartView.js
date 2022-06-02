import React, { memo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChartView = memo((chartData) => {

  const menu = {
    confirmed: [],
    confirmed_acc: [],
    active: [],
    released: [],
    released_acc: [],
    death: [],
    death_acc: [],
  };
  
  React.useEffect(() => {
    Array.from(chartData).map((v, i) => {
      console.log(v.released);
      return (
        menu.confirmed.push(v.confirmed)
      )
    })
    
  }, [chartData, menu.confirmed])
  

  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
      },
    },
  };

  const data = {
 // x축에 나타날 항목들
 labels: chartData.released,
 // y축에 값을 비롯한 기타 옵션들
 datasets: [
   {
     label: "명",
     backgroundColor: "#0066ff44",
     borderColor: "#0066ff",
     // 그래프 각 항목별 y축 수치값
     data: chartData.released,
   },
 ],
};
  
  return <Line data={data} options={options}></Line>;
});

LineChartView.defaultProps = {
  chartData: {
    confirmed: [],
    confirmed_acc: [],
    active: [],
    released: [],
    released_acc: [],
    death: [],
    death_acc: [],
  },
};

export default LineChartView;
