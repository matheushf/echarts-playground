import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export const ReCustom = () => {
  // Sample data
  const data = [
    { name: 'A', value: 10 },
    { name: 'B', value: 20 },
    { name: 'C', value: 15 },
    { name: 'D', value: 25 },
    { name: 'E', value: 30 },
  ];

  // Custom theme colors
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#ffff00'];

  return (
    <BarChart width={400} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill={colors[0]} />
    </BarChart>
  );
};
