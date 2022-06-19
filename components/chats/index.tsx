import React from "react";
import Chart, { GoogleChartOptions } from "react-google-charts";

export const data = [
  [
    "Month",
    "Lula",
    "Bolsonaro",
    "Ciro Gomes",
    "Tebet",
    "Branco/Nulo/Não Sabe",
    "Outros",
  ],
  ['24/03', 43, 26, 6, null, 8, 15],
  ['29/04', 43, 26, 6, 1, 8, 14],
  ['26/05', 48, 27, 7, 2, 11, 4],
];

export const options: GoogleChartOptions = {
  curveType: "function",
  title: 'Pesquisa Eleitoral DataFolha',
  allowHtml: true,
  backgroundColor: '#fff',
  legend: { position: "bottom" },
};

const Charts: React.FC = () => {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
};

export default Charts;
