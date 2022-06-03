import React, { memo } from "react";
import { useQueryString } from "../hooks/useQueryString";
import dayjs from "dayjs";
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

const LineChartView = memo(({ option, chartData }) => {
  const { date_gte, date_lte } = useQueryString();
  const [period, setPeriod] = React.useState([]);
  let { confirmed, confirmed_acc, active, released, released_acc, death, death_acc } = chartData;

  React.useEffect(() => {
    const srtDate = new Date(date_gte);
    let result = [];
    while (srtDate <= new Date(date_lte)) {
      let fmDate = new dayjs(srtDate).format("MM/DD");
      result.push(fmDate);
      srtDate.setDate(srtDate.getDate() + 1);
    }
    setPeriod(result);
  }, [chartData, date_gte, date_lte]);

  const [chart, setChart] = React.useState([confirmed]);

  React.useEffect(() => {
    if (confirmed && confirmed[0] === option) {
      setChart(confirmed);
    } else if (confirmed_acc[0] === option) {
      setChart(confirmed_acc);
    } else if (active[0] === option) {
      setChart(active);
    } else if (released[0] === option) {
      setChart(released);
    } else if (released_acc[0] === option) {
      setChart(released_acc);
    } else if (death[0] === option) {
      setChart(death);
    } else if (death_acc[0] === option) {
      setChart(death_acc);
    } else {
      setChart();
    }
  }, [active, confirmed, confirmed_acc, death, death_acc, option, released, released_acc]);

  console.log(chart);
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

  const data1 = {
    labels: period,
    datasets: [
      {
        label: "명",
        backgroundColor: "#0066ff44",
        borderColor: "#0066ff",
        data: chart,
      },
    ],
  };

  return <Line data={data1} options={options}></Line>;
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
