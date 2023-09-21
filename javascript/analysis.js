"use strict";

const dataGraphHTMLL = document.querySelector("#myChart");

// Datos de ejemplo
const labels = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Gastos ($)",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [-1000, -500, -800, -400, -700],
    },
    {
      label: "Ingresos ($)",
      backgroundColor: "rgb(75, 192, 192)",
      borderColor: "rgb(75, 192, 192)",
      data: [1200, 1500, 1100, 900, 1750],
    },
  ],
};

// Configuración del gráfico
const config = {
  type: "bar",
  data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

// Generar el gráfico
const myChart = new Chart(dataGraphHTMLL, config);
