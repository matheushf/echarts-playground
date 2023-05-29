import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts';
import { RED } from '../constants';

export function Custom1() {
  const chartRef = useRef(null);

  useEffect(() => {
    // Initialize the chart instance
    const chart = echarts.init(chartRef.current, 'custom-theme');

    // Generate data for the chart
    const options = {
      title: {
        text: 'World Population'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {},
      grid: {
        show: false, // Remove background lines
        borderWidth: 0,
        containLabel: true,
      },
      xAxis: {
        type: 'value',
        splitLine: {
          show: false
        },
        axisLine: { show: false },
        axisTick: { show: false }, // Remove background lines
        axisLabel: { show: false }, // Show labels on the bottom
      },
      yAxis: {
        type: 'category',
        splitLine: {
          show: false
        },
        axisLine: { show: false },
        axisTick: { show: false }, // Remove background lines
        axisLabel: { show: true, position: 'bottom' }, // Show labels on the bottom
        data: [
          '10:00 - 12:00',
          '08:00 - 10:00',
          '06:00 - 08:00',
          '04:00 - 06:00',
          '2:00 - 4:00',
          '00:00 - 2:00',
        ],
      },
      series: [
        {
          type: 'bar',
          barWidth: '24px', // Customize the bar width
          itemStyle: {
            normal: {
              color: RED, // Set the color of the bars to red
              barBorderRadius: [0, 10, 10, 0], // Set the radius of the top corners of the bars
            },
          },
          label: {
            show: true, // Show the value on top of each bar
            position: 'right',
            color: RED,
            fontWeight: 'bold'
          },
          data: [222, 280, 143, 69, 0, 0],
        },
      ]
    };


    chart.setOption(options);

    // Clean up the chart instance when the component unmounts
    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <>
    <h3>Horários com mais vendas</h3>
    <div ref={chartRef} style={{ width: '100%', height: '400px' }} />
    </>
  )
}
