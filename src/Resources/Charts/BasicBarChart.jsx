import React from "react";
import Plot from "react-plotly.js";

const BarChart = () => {
  return (
    <div className="p-6">
      <Plot
        data={[
          {
            x: ["giraffes", "orangutans", "monkeys"],
            y: [20, 14, 23],
            type: "bar",
            marker: { color: "teal" },
          },
        ]}
        layout={{
          title: "Zoo Animal Count",
          paper_bgcolor: "white",
          plot_bgcolor: "white",
        }}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default BarChart;
