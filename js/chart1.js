const chartData1 = {
  labels: ["Пожари в сгради", "Автопожари", "Горски пожари", "Треви/Храсти", "Отпадаци", "Други"],
  data: [12, 7, 1, 34, 21, 25],
};

const myChart = document.querySelector(".my-chart");

new Chart(myChart, {
  type: "doughnut",
  data: {
    labels: chartData1.labels,
    datasets: [{
      label: "Видове пожари",
      data: chartData1.data,
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40"],
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