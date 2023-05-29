import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts';

export function Large() {
  const startRenderTime = performance.now(); // Record the start time
  const chartRef = useRef(null);

  useEffect(() => {
    // Initialize the chart instance
    const chart = echarts.init(chartRef.current);

    const data = [];
    for (let i = 0; i < 50000; i++) {
      data.push({
        name: `Data ${i}`,
        value: Math.random() * i,
      });
    }

    // Chart configuration
    const options = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      xAxis: {
        type: 'category',
        data: data.map((item) => item.name),
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: data.map((item) => item.value),
          type: 'bar',
        },
      ],
    };

    // Set chart options and render
    chart.setOption(options);

    const endRenderTime = performance.now(); // Record the end time
    const renderTime = endRenderTime - startRenderTime; // Calculate the render time
    console.log(`Echart rendered in ${renderTime} milliseconds.`);

    // Clean up the chart instance when the component unmounts
    return () => {

      chart.dispose();
    };
  }, []);

  return (
    <div ref={chartRef} style={{ width: '100%', height: '400px' }} />
  )
}
