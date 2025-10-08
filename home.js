const ctx = document.getElementById('chartKasus');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['<10 tahun', '10-20 tahun', '21-30 tahun', '31-40 tahun', '>40 tahun'],
    datasets: [{
      label: 'Jumlah Kasus',
      data: [200, 600, 1200, 1800, 900],
      backgroundColor: '#2f5d62',
      borderRadius: 5
    }]
  },
  options: {
    indexAxis: 'y',
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return value >= 1000 ? (value/1000) + ' juta' : value + ' ribu';
          }
        }
      }
    }
  }
});
