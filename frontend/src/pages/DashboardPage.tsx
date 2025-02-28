import React from 'react';
import { Line } from 'react-chartjs-2';

const DashboardPage = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Consumo de Energia',
        data: [65, 59, 80, 81, 56],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1
      }
    ]
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <Line data={data} />
    </div>
  );
};

export default DashboardPage;
