import { Box } from "@chakra-ui/react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import ChartColorInfo from "./ChartColorInfo";

const getBarBackgroundColor = (mp) => {
  const { hasResponded, hasMetWith, standsWithUkraine } = mp;

  if (hasResponded && hasMetWith && standsWithUkraine === "Yes") {
    return "rgba(52, 235, 122, 0.2)";
  } else if (hasResponded && hasMetWith && standsWithUkraine === "No") {
    return "rgba(219, 4, 4, 0.2)";
  } else if (hasResponded && hasMetWith) {
    return "rgba(61, 101, 180, 0.2)";
  } else if (hasResponded) {
    return "rgba(52, 229, 235, 0.2)";
  } else {
    return "rgba(255, 206, 86, 0.2)";
  }
};

const getBarBorderColor = (mp) => {
  const { hasResponded, hasMetWith, standsWithUkraine } = mp;

  if (hasResponded && hasMetWith && standsWithUkraine === "Yes") {
    return "rgba(52, 235, 122, 1)";
  } else if (hasResponded && hasMetWith && standsWithUkraine === "No") {
    return "rgba(219, 4, 4, 1)";
  } else if (hasResponded && hasMetWith) {
    return "rgba(61, 101, 180)";
  } else if (hasResponded) {
    return "rgba(52, 229, 235)";
  } else {
    return "rgba(255, 206, 86, 1)";
  }
};

const InteractionChart = ({ data }) => {
  const chartData = {
    labels: Object.values(data).map((item) => item.mpName),
    datasets: [
      {
        label: "Number of Messages",
        data: Object.values(data).map((item) => item.noOfMessages),
        backgroundColor: Object.values(data).map((item) =>
          getBarBackgroundColor(item)
        ),
        borderColor: Object.values(data).map((item) => getBarBorderColor(item)),
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true, // Enable responsiveness
    maintainAspectRatio: false, // Adjust aspect ratio
    backgroundColor: "transparent",
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#3d65b4",
          font: {
            family: "sans-serif",
          },
        },
      },
      x: {
        ticks: {
          color: "#3d65b4",
          font: {
            family: "sans-serif",
          },
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#3d65b4",
          font: {
            family: "sans-serif",
          },
          boxWidth: 0,
          boxHeight: 0,
        },
      },
    },
  };

  return (
    <Box
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="32px"
    >
      <Box
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Bar
          style={{ position: "relative", height: "40vh", width: "80vw" }}
          data={chartData}
          options={chartOptions}
        />
      </Box>
      <ChartColorInfo />
    </Box>
  );
};

export default InteractionChart;
