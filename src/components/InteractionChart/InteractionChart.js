import { Box } from "@chakra-ui/react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { useGetMPInteraction } from "../../hooks/useGetMPInteraction";

const InteractionChart = () => {
  const { data, isSuccess } = useGetMPInteraction();

  if (!isSuccess || !data) {
    return null;
  }

  const chartData = {
    labels: Object.keys(data).map((key) => data[key].mpName),
    datasets: [
      {
        label: "Number of Messages",
        data: Object.keys(data).map((key) => data[key].noOfMessages),
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        borderColor: "rgba(255, 206, 86, 1)",
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
    >
      <Bar
        style={{ position: "relative", height: "40vh", width: "80vw" }}
        data={chartData}
        options={chartOptions}
      />
    </Box>
  );
};

export default InteractionChart;
