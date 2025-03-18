import * as chartJs from "chart.js";

let chart;

export const formatDateLabel = (timestamp) => {
  const date = new Date(timestamp);
  const month = date.getMonth();
  const day = date.getDate();

  const formatPart = (value) => {
    return value < 10 ? `0${value}` : `${value}`;
  };

  return `${formatPart(day)}/${formatPart(month + 1)}`;
};

export const renderChart = (containerId, readings) => {
  chartJs.Chart.defaults.font.size = "10px";

  chartJs.Chart.register.apply(
    null,
    Object.values(chartJs).filter((chartClass) => chartClass.id)
  );

  const labels = readings.map(({ time }) => formatDateLabel(time));
  const values = readings.map(({ value }) => value);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "kWh usage",
        data: values,
        fill: true,
        tension: 0.8,
        borderRadius: 5,
        backgroundColor: 'rgba(16, 138, 69, 0.8)', // Change to green color
        borderColor: 'rgba(9, 53, 10, 0.69)', // Change to green color
        borderWidth: 0.7,
      },
    ],
  };

  if (chart) {
    chart.destroy();
  }

  chart = new chartJs.Chart(containerId, {
    type: "bar",
    data: data,
    options: {
      scales: {
        y: {
          grid: {
            display: false,
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
      maintainAspectRatio: false,
    },
  });
};
