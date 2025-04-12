import React from "react";
import "./SixByFourTable.css"; // Make sure to import the CSS

const SixByFourTable = ({row, column, data, headers }) => {
  const rows = {row};
  const columns = {column};

  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
        <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
          
        </thead>
        <tbody>
        {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>    
      </table>
    </div>
  );
};

export default SixByFourTable;
