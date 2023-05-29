import React, { useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export const ReLarge = () => {
  const startRenderTime = performance.now(); // Record the start time

  // Generate a large dataset
  const generateData = () => {
    const data = [];
    for (let i = 0; i < 10000; i++) {
      data.push({
        name: `Data ${i}`,
        value: Math.random() * 1000,
      });
    }
    return data;
  };

  const data = generateData();

  useEffect(() => {
    const endRenderTime = performance.now(); // Record the end time
    const renderTime = endRenderTime - startRenderTime; // Calculate the render time
    console.log(`Rechart rendered in ${renderTime} milliseconds.`);

    return () => {
    }
  }, [])

  return (
    <BarChart width={800} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  );
};
