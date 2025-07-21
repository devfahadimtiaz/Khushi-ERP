import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import styles from './MonthlyChart.module.css';

const MonthlyChart = ({data, currency}) => {

  return (
    <div className={styles.chartContainer}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid className={styles.grid} />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 12 }}
            stroke="#64748b"
          />
          <YAxis
            tick={{ fontSize: 12 }}
            stroke="#64748b"
            tickFormatter={(value) => `${currency || ""} ${value / 1000}k`}
          />
          <Tooltip
            formatter={(value, name) => [`${currency || ""} ${value.toLocaleString()}`, name === 'Cash Sales' ? 'Cash Sales' : 'Credit Sales']}
            labelStyle={{ color: '#1e293b' }}
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '8px'
            }}
          />
          <Legend />
          <Bar dataKey="totalCash" fill="#10b981" name="Cash Sales" radius={[4, 4, 0, 0]} />
          <Bar dataKey="totalCredit" fill="#f59e0b" name="Credit Sales" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyChart;
