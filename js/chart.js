const ctx = document.getElementById('fireChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Януари', 'Февруари', 'Март', 'Април'],
    datasets: [{
      label: 'Брой пожари',
      data: [5, 7, 3, 9],
      backgroundColor: 'rgba(255, 99, 132, 0.5)'
    }]
  },
  options: {
    responsive: true
  }
});
