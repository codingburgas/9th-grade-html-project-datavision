const chartData = {
    labels: ["Пожари в сгради", "Автопожари", "Горски пожари", "Треви/Храсти", "Други"],
    data: [12, 7, 1, 34, 25],
};

const myChart = document.querySelector(".my-chart");

new Chart(myChart, {
    type: "doughnut",
    data: {
        labels: chartData.labels,
        datasets: [
            {
                label: "Видове пожари",
                data: chartData.data,
            },
        ],
    },
    options: {
        borderWidth: 5,
        borderRadius: 2,
        hoverBorderWidth: 0,
        plugins: {
            legend: {
                display: false,
            }
        }
    }
});