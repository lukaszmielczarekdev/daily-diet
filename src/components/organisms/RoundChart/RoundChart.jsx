import { Wrapper } from "./RoundChartStyles";
import Chart from "react-apexcharts";

const options = {
  colors: ["rgb(125, 215, 120)"],
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: "70%",
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
          offsetY: -10,
          color: "black",
          fontSize: "12px",
        },
        value: {
          color: "black",
          fontSize: "25px",
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
  labels: ["KCAL"],
};

const RoundChart = ({ data }) => {
  return (
    <Wrapper>
      <Chart
        options={options}
        series={data}
        type={"radialBar"}
        width={"260px"}
      />
    </Wrapper>
  );
};
export default RoundChart;
