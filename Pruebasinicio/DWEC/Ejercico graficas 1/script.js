document.addEventListener('DOMContentLoaded', () => {
  Papa.parse("Dataset salary 2024.csv", {
    download: true,
    header: true,
    complete: function(results) {
      const data = results.data.filter(r => r.salary_in_usd && parseFloat(r.salary_in_usd) > 0);

      const stats = {};
      data.forEach(r => {
        const job = r.job_title?.trim() || "Otros";
        const sal = parseFloat(r.salary_in_usd);
        const level = r.experience_level || "MI";
        const remote = r.remote_ratio === "100";

        if (!stats[job]) stats[job] = { sum: 0, count: 0, remote: 0, levels: {} };
        stats[job].sum += sal;
        stats[job].count += 1;
        if (remote) stats[job].remote += 1;
        stats[job].levels[level] = (stats[job].levels[level] || 0) + 1;
      });

      const top15 = Object.entries(stats)
        .map(([job, s]) => ({
          job: job.length > 28 ? job.substring(0,26) + '...' : job,
          avg: s.sum / s.count,
          count: s.count,
          remotePct: Math.round((s.remote / s.count) * 100),
          level: Object.entries(s.levels).sort((a,b) => b[1]-a[1])[0][0]
        }))
        .sort((a, b) => b.avg - a.avg)
        .slice(0, 15);

      const levelColor = { EX: '#c0392b', SE: '#e67e22', MI: '#f39c12', EN: '#27ae60' };
      const levelName = { EX: 'Executive', SE: 'Senior', MI: 'Mid-level', EN: 'Entry' };

      new Chart(document.getElementById('megaChart'), {
        type: 'bar',
        data: {
          labels: top15.map(x => x.job),
          datasets: [{
            label: 'Salario Promedio (USD)',
            data: top15.map(x => Math.round(x.avg)),
            backgroundColor: top15.map(x => levelColor[x.level] || '#95a5a6'),
            borderColor: '#2c3e50',
            borderWidth: 2,
            borderRadius: 10,
            barThickness: 38,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                title: ctx => ctx[0].label.replace('...', ''),
                afterLabel: ctx => [
                  `Ofertas encontradas: ${top15[ctx.dataIndex].count}`,
                  `100% Remoto: ${top15[ctx.dataIndex].remotePct}%`,
                  `Nivel más común: ${levelName[top15[ctx.dataIndex].level]}`
                ]
              }
            },
            datalabels: {
              anchor: 'end',
              align: 'top',
              color: '#2c3e50',
              font: { weight: 'bold', size: 13 },
              formatter: (value, ctx) => {
                const item = top15[ctx.dataIndex];
                return `$${value.toLocaleString()}\n(${item.count} ofertas)`;
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: { 
                callback: value => '$' + value.toLocaleString(),
                color: '#2c3e50',
                font: { size: 13 }
              },
              title: {
                display: true,
                text: 'Salario Promedio Anual (USD)',
                color: '#1e3c72',
                font: { size: 18, weight: 'bold' }
              }
            },
            x: {
              ticks: { 
                color: '#2c3e50',
                font: { size: 11, weight: '600' },
                maxRotation: 45,
                minRotation: 45
              },
              grid: { display: false }
            }
          }
        },
        plugins: [ChartDataLabels]
      });

      document.getElementById('legend').innerHTML = `
        <strong>Colores por nivel de experiencia más común:</strong><br>
        <span style="color:#c0392b">Executive</span> • 
        <span style="color:#e67e22">Senior</span> • 
        <span style="color:#f39c12">Mid-level</span> • 
        <span style="color:#27ae60">Entry-level</span>
        <br><br>
        <em>El número en la parte superior = cantidad de ofertas en el dataset</em>
      `;
    }
  });
});