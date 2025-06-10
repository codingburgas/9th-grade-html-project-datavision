const chartData2 = {
  labels: ["2020", "2021", "2022", "2023", "2024"],
  data: [25, 11, 22, 21, 22],
};

const myChart1 = document.querySelector(".my-chart1");

new Chart(myChart1, {
  type: "doughnut",
  data: {
    labels: chartData2.labels,
    datasets: [{
      label: "Годишни данни за пожари",
      data: chartData2.data,
      backgroundColor: ["#4BC0C0", "#9966FF", "#FF6384", "#36A2EB", "#FFCE56"],
    }],
  },
  options: {
    borderWidth: 5,
    borderRadius: 2,
    hoverBorderWidth: 0,
    plugins: {
      legend: { display: false},
    },
  },
});
