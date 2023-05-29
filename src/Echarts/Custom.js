import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts';
import { RED } from '../constants';

export function Custom() {
  const chartRef = useRef(null);

  useEffect(() => {
    // Initialize the chart instance
    const chart = echarts.init(chartRef.current, 'custom-theme');

    // Generate data for the chart
    const data = [
      { name: 'Seg', value: 18 },
      { name: 'Ter', value: 21 },
      { name: 'Qua', value: 22 },
      { name: 'Qui', value: 46 },
      { name: 'Sex', value: 280 },
    ];

    const options = {
      xAxis: {
        data: data.map(item => item.name),
        axisLine: { show: false },
        axisTick: { show: false }, // Remove background lines
        axisLabel: { show: true, position: 'bottom' }, // Show labels on the bottom
      },
      yAxis: {
        show: false, // Hide the y-axis
      },
      series: [
        {
          type: 'bar',
          data: data.map(item => ({
            name: item.name,
            value: item.value,
            label: {
              show: true,
              position: 'top',
              formatter: '{c}',
            },
          })),
          barWidth: '60%', // Customize the bar width
          itemStyle: {
            normal: {
              color: RED, // Set the color of the bars to red
              barBorderRadius: [10, 10, 0, 0], // Set the radius of the top corners of the bars
            },
          },
          label: {
            show: true, // Show the value on top of each bar
            position: 'top',
            color: RED,
            fontWeight: 'bold'
          },
        },
      ],
      grid: {
        show: false, // Hide the background lines
        containLabel: true, // Make sure the labels are within the chart area
      },
    };

    chart.setOption(options);

    // Clean up the chart instance when the component unmounts
    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <>
      <h3>Dias com mais vendas</h3>
      <div ref={chartRef} style={{ width: '100%', height: '400px' }} />
    </>
  )
}
