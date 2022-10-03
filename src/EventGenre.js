import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const EventGenre = ({ events }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(() => getData());
  }, [events]);

  const COLORS = ["#0088FE", "#00C49F", "#181519", "#FF8042", "#884396"];

  const getData = () => {
    const genres = ["React", "JavaScript", "Node", "jQuery", "Angular"];
    const data = genres.map((genre) => {
      const value = events.filter((event) =>
        event.summary.includes(genre)
      ).length;
      return { name: genre, value };
    });
    return data;
  };

  return (
    <ResponsiveContainer height={400}>
      <PieChart
        width={400}
        height={400}
      >
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => {
            if (percent > 0) {
              return `${name} ${(percent * 100).toFixed(0)}%`;
            }
          }}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenre;
