import { Wrapper } from "./RoundChartStyles";
import Chart from "react-apexcharts";

const RoundChart = ({
  data,
  label,
  size,
  nameSize,
  valueSize,
  offset,
  hover,
  ringSize,
}) => {
  const options = {
    colors: ["rgb(125, 215, 120)"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: ringSize,
          background: "transparent",
        },
        track: {
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.15,
          },
        },
        dataLabels: {
          name: {
            offsetY: offset,
            color: "black",
            fontSize: nameSize,
          },
          value: {
            color: "black",
            fontSize: valueSize,
            offsetY: 2,
            show: true,
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        gradientToColors: ["rgb(240, 235, 85)"],
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: [label.toUpperCase()],
  };

  return (
    <Wrapper hover={hover}>
      <Chart options={options} series={data} type={"radialBar"} width={size} />
    </Wrapper>
  );
};
export default RoundChart;
