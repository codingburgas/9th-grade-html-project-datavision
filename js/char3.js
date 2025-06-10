const chartData3 = {
  labels: ["00:00-06:00", "06:00-12:00", "12:00-18:00", "18:00-00:00"],
  data: [8, 18, 42, 32],
};

const myChart3 = document.querySelector(".my-chart2");

new Chart(myChart3, {
  type: "doughnut",
  data: {
    labels: chartData3.labels,
    datasets: [{
      label: "Обаждания по време",
      data: chartData3.data,
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
    }],
  },
  options: {
    borderWidth: 5,
    borderRadius: 2,
    hoverBorderWidth: 0,
    plugins: {
      legend: { display: false },
    },
  },
});