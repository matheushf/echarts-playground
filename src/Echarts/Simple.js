import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts';

export function Simple() {
  const chartRef = useRef(null);

  useEffect(() => {
    // Initialize the chart instance
    const chart = echarts.init(chartRef.current);

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
        data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
        },
      ],
    };

    // Set chart options and render
    chart.setOption(options);

    // Clean up the chart instance when the component unmounts
    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div ref={chartRef} style={{ width: '100%', height: '400px' }} />
  )
}
