import React, { Component } from "react";
import { HorizontalBar } from "react-chartjs-2";

const backgroundColors = [
  "rgba(255, 99, 132, 0.2)",
  "rgba(54, 162, 235, 0.2)",
  "rgba(255, 206, 86, 0.2)",
  "rgba(75, 192, 192, 0.2)",
  "rgba(153, 102, 255, 0.2)",
  "rgba(255, 159, 64, 0.2)",
];
const borderColors = [
  "rgba(255,99,132,1)",
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)",
];

export class SubFacilityReportChart extends Component {
  generateData = (rows) => {
    const result = {
      labels: [],
      datasets: [
        {
          label: "# of Votes",
          data: [],
          backgroundColor: [],
          borderColor: [],
          borderWidth: 1,
          fill: false,
        },
      ],
    };
    for (const row of rows) {
      const randomIndex = Math.floor(Math.random() * 6);
      result.labels.push(row.name);
      result.datasets[0].data.push(
        this.props.isGeneral ? row.generalpopulation : row.underage
      );
      result.datasets[0].backgroundColor.push(backgroundColors[randomIndex]);
      result.datasets[0].borderColor.push(borderColors[randomIndex]);
    }
    return result;
  };

  options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Sub Facility population data</h4>
                <h6 className="mt-1">
                  {this.props.isGeneral
                    ? "General Population"
                    : "Under 1 Population"}
                </h6>
                {this.props.rows && (
                  <HorizontalBar
                    data={this.generateData(this.props.rows)}
                    options={this.options}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SubFacilityReportChart;
