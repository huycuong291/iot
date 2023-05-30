import moment from "moment";
import "../index.css";
import { costInDay, costInMonth, costInYear } from "../constants/cost";

function calculatePercentageChange(numbers) {
  let oldNumber = numbers[0];
  let newNumber = numbers[1];
  let percentChange = ((newNumber - oldNumber) / Math.abs(oldNumber)) * 100;
  if (percentChange >= 0) {
    return "▲ " + percentChange.toFixed(2) + "%";
  } else if (percentChange < 0) {
    return "▼ " + Math.abs(percentChange).toFixed(2) + "%";
  }
}

function getTextAndColor(numbers) {
  let oldNumber = numbers[0];
  let newNumber = numbers[1];
  let percentChange = ((newNumber - oldNumber) / Math.abs(oldNumber)) * 100;
  if (percentChange > 0) {
    return { text: "INCREASE IN COST", color: "#B4F9A1" };
  } else if (percentChange < 0) {
    return { text: "DECREASE IN COST", color: "#E8506B" };
  } else {
    return { text: "INVALID VALUE", color: "#B4F9A1" };
  }
}

function createDataPowerToday(data, cost) {
  const temp = getTextAndColor(data);
  const text = temp.text;
  const color = temp.color;
  var currentDay = moment().format("MMM D");
  var previousDay = moment().subtract(1, "day").format("MMM D");
  var second_chart_today = {
    chart: {
      showBorder: "0",
      showCanvasBorder: "0",
      showAlternateHGridColor: "0",
      bgColor: "#1D1B41",
      bgAlpha: "0",
      canvasBgAlpha: "0",
      baseFontSize: "14",
      baseFont: "Nunito Sans Regular",
      baseFontColor: "#FDFDFD",
      divLineThickness: "2",

      showLimits: "0",
      showDivLineValues: "0",
      paletteColors: "#58E2C2",
      usePlotGradientColor: "0",
      divLineColor: "#979797",
      divLineDashed: "1",
      divLineDashLen: "5",
      valueFontSize: "15",
      canvasRightMargin: "200",
      canvasLeftMargin: "35",
      canvasBottomMargin: "60",
      canvasTopMargin: "60",
      placeValuesInside: "0",
      yAxisMaxValue: "250",
      toolTipBgcolor: "#484E69",
      toolTipPadding: "7",
      toolTipBorderRadius: "3",
      toolTipBorderAlpha: "30",
      tooltipBorderThickness: "0.7",
      toolTipColor: "#FDFDFD",
      yaxismaxvalue: "280",
      transposeAnimation: "1",
    },

    annotations: {
      groups: [
        {
          autoscale: "1",
          items: [
            {
              id: "indicator",
              type: "text",
              text: calculatePercentageChange(data),
              color: color,
              fontSize: "30",
              x: "$canvasEndX + 100",
              y: "$canvasheight/2 - 40",
            },
            {
              id: "indicator",
              type: "text",
              text: text,
              color: "#FDFDFD",
              fontSize: "14",
              x: "$canvasEndX + 100",
              y: "$canvasheight/2 - 15",
            },
            {
              id: "indicator",
              type: "text",
              text: "VND",
              color: "#FDFDFD",
              fontSize: "14",
              x: "$canvasEndX + 100",
              y: "$canvasheight/2 +5",
            },
          ],
        },
      ],
    },

    data: [
      {
        label: previousDay,
        value: (data[0] * cost).toFixed(2),
      },
      {
        label: currentDay,
        value: (data[1] * cost).toFixed(2),
      },
    ],
  };
  return second_chart_today;
}

function createDataPowerMonth(data, cost) {
  const temp = getTextAndColor(data);
  const text = temp.text;
  const color = temp.color;
  var currentMonth = moment().format("MMM");
  var previousMonth = moment().subtract(1, "month").format("MMM");

  var second_chart_month = {
    chart: {
      showBorder: "0",
      showCanvasBorder: "0",
      showAlternateHGridColor: "0",
      bgColor: "#1D1B41",
      bgAlpha: "0",
      canvasBgAlpha: "0",
      baseFontSize: "14",
      baseFont: "Nunito Sans Regular",
      baseFontColor: "#FDFDFD",
      divLineThickness: "2",

      showLimits: "0",
      showDivLineValues: "0",
      paletteColors: "#58E2C2",
      usePlotGradientColor: "0",
      divLineColor: "#979797",
      divLineDashed: "1",
      divLineDashLen: "5",
      valueFontSize: "15",
      canvasRightMargin: "200",
      canvasLeftMargin: "35",
      canvasBottomMargin: "60",
      canvasTopMargin: "60",
      placeValuesInside: "0",
      yAxisMaxValue: "250",
      toolTipBgcolor: "#484E69",
      toolTipPadding: "7",
      toolTipBorderRadius: "3",
      toolTipBorderAlpha: "30",
      tooltipBorderThickness: "0.7",
      toolTipColor: "#FDFDFD",
      yaxismaxvalue: "280",
      transposeAnimation: "1",
    },

    annotations: {
      autoscale: "1",
      groups: [
        {
          items: [
            {
              id: "indicator",
              type: "text",
              text: calculatePercentageChange(data),
              color: color,
              fontSize: "30",
              x: "$canvasEndX + 100",
              y: "$canvasheight/2 - 40",
            },
            {
              id: "indicator",
              type: "text",
              text: text,
              color: "#FDFDFD",
              fontSize: "14",
              x: "$canvasEndX + 100",
              y: "$canvasheight/2 - 15",
            },
            {
              id: "indicator",
              type: "text",
              text: "VND",
              color: "#FDFDFD",
              fontSize: "14",
              x: "$canvasEndX + 100",
              y: "$canvasheight/2 +5",
            },
          ],
        },
      ],
    },

    data: [
      {
        label: previousMonth,
        value: (data[0] * cost).toFixed(2),
      },
      {
        label: currentMonth,
        value: (data[1] * cost).toFixed(2),
      },
    ],
  };
  console.log(data[1] * costInMonth);
  return second_chart_month;
}

function createDataPowerYear(data, cost) {
  const temp = getTextAndColor(data);
  const text = temp.text;
  const color = temp.color;
  var currentYear = moment().format("YYYY");
  var previousYear = moment().subtract(1, "year").format("YYYY");

  var second_chart_year = {
    chart: {
      showBorder: "0",
      showCanvasBorder: "0",
      showAlternateHGridColor: "0",
      bgColor: "#1D1B41",
      bgAlpha: "0",
      canvasBgAlpha: "0",
      baseFontSize: "14",
      baseFont: "Nunito Sans Regular",
      baseFontColor: "#FDFDFD",
      divLineThickness: "2",

      showLimits: "0",
      showDivLineValues: "0",
      paletteColors: "#58E2C2",
      usePlotGradientColor: "0",
      divLineColor: "#979797",
      divLineDashed: "1",
      divLineDashLen: "5",
      valueFontSize: "15",
      canvasRightMargin: "200",
      canvasLeftMargin: "35",
      canvasBottomMargin: "60",
      canvasTopMargin: "60",
      placeValuesInside: "0",
      yAxisMaxValue: "250",
      toolTipBgcolor: "#484E69",
      toolTipPadding: "7",
      toolTipBorderRadius: "3",
      toolTipBorderAlpha: "30",
      tooltipBorderThickness: "0.7",
      toolTipColor: "#FDFDFD",
      yaxismaxvalue: "280",
      transposeAnimation: "1",
    },

    annotations: {
      groups: [
        {
          autoscale: "1",
          items: [
            {
              id: "indicator",
              type: "text",
              text: calculatePercentageChange(data),
              color: color,
              fontSize: "30",
              x: "$canvasEndX + 100",
              y: "$canvasheight/2 - 40",
            },
            {
              id: "indicator",
              type: "text",
              text: text,
              color: "#FDFDFD",
              fontSize: "14",
              x: "$canvasEndX + 100",
              y: "$canvasheight/2 - 15",
            },
            {
              id: "indicator",
              type: "text",
              text: "VND",
              color: "#FDFDFD",
              fontSize: "14",
              x: "$canvasEndX + 100",
              y: "$canvasheight/2 +5",
            },
          ],
        },
      ],
    },

    data: [
      {
        label: previousYear,
        value: (data[0] * cost).toFixed(2),
      },
      {
        label: currentYear,
        value: (data[1] * cost).toFixed(2),
      },
    ],
  };
  console.log(data[1] * costInYear);
  return second_chart_year;
}

var chartConfigs2 = {
  type: "Column2d",
  id: "mychart2",
  dataFormat: "JSON",
  width: "100%",
  height: "300",
  dataSource: createDataPowerMonth([0, 0]),
};

export default chartConfigs2;
export { createDataPowerToday };
export { createDataPowerMonth };
export { createDataPowerYear };
