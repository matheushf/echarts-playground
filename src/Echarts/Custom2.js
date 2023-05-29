import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { PINK, RED } from "../constants";

export function Custom2() {
  const chartRef = useRef(null);

  useEffect(() => {
    // Initialize the chart instance
    const chart = echarts.init(chartRef.current, "custom-theme");

    // Generate data for the chart
    const options = {
      xAxis: {
        type: "category",
        data: ["28/04", "29/04", "30/04", "01/05", "02/05", "03/05", "04/05"],
      },
      yAxis: {
        type: "value",
        axisLabel: { show: false }, // Show labels on the bottom
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        bottom: 10, // Position the legend below the chart
        right: "10%",
        icon: 'circle',
        formatter: (name) => {
          return {
            Line1: `Total de vendas realizadas nos {bold|últimos 7 dias}`,
            Line2: 'Comparação com os 7 dias anteriores',
          }[name]
        },
        data: [
          {
            name: "Line1",
            textStyle: { rich: { bold: { fontWeight: 'bold' } } },
          },
          'Line2',
        ],
      },
      series: [
        {
          data: [20, 90, 0, 40, 55, 30, 200],
          type: "line",
          name: "Line1",
          symbol: 'none',
          itemStyle: {
            color: RED,
          },
        },
        {
          data: [200, 40, 200, 150, 250, 0, 200],
          type: "line",
          name: "Line2",
          symbol: 'none',
          itemStyle: {
            color: PINK,
          },
        },
      ],
    };

    chart.setOption(options);

    // Clean up the chart instance when the component unmounts
    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <>
      <h3>Vendas</h3>
      <div ref={chartRef} style={{ width: "100%", height: "400px" }} />
    </>
  );
}
