import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

// Register the required elements
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

// Define your data and options
const data = {
  labels: [
    "Cognitive Abilities",
    "Emotional Intelligence",
    "Adaptability",
    "Technical Ability",
    "Leadership Ability",
    "Social Abilities",
  ],
  datasets: [
    {
      label: "Skill Levels",
      data: [65, 59, 90, 81, 56, 55],
      backgroundColor: "rgba(34, 202, 236, 0.2)",
      borderColor: "rgba(34, 202, 236, 1)",
      borderWidth: 2,
    },
  ],
};

const RadarChart = ({ data }: { data: any }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // 隐藏图例
      },
      tooltip: {
        callbacks: {
          label: () => {
            return "";
          },
        },
      },
    },
    scales: {
      r: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
          display: false,
        },
        angleLines: {
          display: true,
        },
      },
    },
  };
  return <Radar data={data} options={options} />;
};

export default RadarChart;
