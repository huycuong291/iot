import moment from "moment";
export function createChartData1(dayValueArr = [], time = "day") {
  const now = moment();
  const categoryArr = [];
  const activeArr = [];

  let currentUnit, maxLimit, unitLabel, startUnit;
  console.log(time);
  switch (time) {
    case "day":
      const timeFlag = now.format("a");
      currentUnit = timeFlag === "pm" ? parseInt(now.format("h")) + 12 : parseInt(now.format("h"));
      maxLimit = 23;
      unitLabel = " h";
      startUnit = 0;
      break;
    case "month":
      currentUnit = now.date();
      maxLimit = now.daysInMonth();
      unitLabel = "";
      startUnit = 1;
      break;
    case "year":
      currentUnit = now.month() + 1; // Adjust to be 1-12 instead of 0-11
      maxLimit = 12;
      unitLabel = " months";
      startUnit = 1; // Adjust to start at 1 for year
      break;
    default:
      throw new Error(`Invalid time unit: ${time}`);
  }

  for (var i = 1; i <= maxLimit; i++) {
    if (i != currentUnit) {
      if (i % 4 != 0) {
        categoryArr.push({ label: i + unitLabel, showLabel: "0" });
      } else {
        categoryArr.push({ label: i + unitLabel });
      }
    } else {
      categoryArr.push({ label: currentUnit + unitLabel });
      categoryArr.push({ vline: "true", color: "#707C92", dashed: "1", linePosition: "0", labelPosition: "0" });
    }
  }

  for (var i = 1; i <= maxLimit; i++) {
    if (i <= currentUnit) {
      if (i % 4 != 0) {
        activeArr.push({ value: dayValueArr[i - 1], label: i - 1 + startUnit + "" });
      } else {
        activeArr.push({ value: dayValueArr[i - 1], label: i - 1 + startUnit + "" });
      }
    } else {
      activeArr.push({ value: null, label: i - 1 + startUnit + "" });
    }
  }

  if (time == "day") {
    time = "hour";
  }

  if (time == "month") {
    time = "day";
  }
  if (time == "year") {
    time = "month";
  }
  var third_chart_today = {
    chart: {
      bgColor: "#1D1B41",
      bgAlpha: "0",
      rotateLabels: "0",
      showHoverEffect: "1",
      canvasBgAlpha: "0",
      showBorder: "0",
      showCanvasBorder: "0",
      drawAnchors: "1",
      showValues: "0",
      baseFontSize: "14",
      baseFont: "Nunito Sans",
      baseFontColor: "#FDFDFD",
      baseFontBold: "0",
      drawCustomLegendIcon: "1",
      paletteColors: "#F2F14F, #2AD8A8",

      lineThickness: "2.5",
      shadow: "0",
      showAxisLines: "0",
      yAxisLineColor: "#979797",
      xAxisLineColor: "#979797",
      xAxisLineThickness: "2",
      yAxisLineThickness: "2",
      showAlternateHGridColor: "0",
      divLineColor: "#979797",
      divLineAlpha: "60",
      divLineThickness: "0.5",
      divLineDashed: "1",
      dashLen: "1",
      dashGap: "200",
      yAxisname: "W",
      xAxisname: "Time" + " (" + time + ")",
      toolTipBgcolor: "#484E69",
      toolTipPadding: "5",
      toolTipBorderRadius: "2",
      toolTipBorderAlpha: "30",
      tooltipBorderThickness: "0.7",
      toolTipColor: "#FDFDFD",
      canvasPadding: "0",
      numberSuffix: " W",
      chartLeftMargin: "0",
      chartRightMargin: "0",
      chartBottomMargin: "0",
      canvasLeftMargin: "0",
      canvasRightMargin: "0",
      canvasBottomMargin: "0",
    },

    categories: [
      {
        category: categoryArr,
      },
    ],

    dataset: [
      {
        seriesname: moment()
          .subtract(1, time)
          .format(time === "day" ? "MMM D" : "MMM YYYY"),
        data: activeArr,
      },
    ],
  };
  return third_chart_today;
}

var chartConfigs1 = {
  type: "line",
  className: "fc-line",
  id: "mychart1",
  dataFormat: "JSON",
  width: "100%",
  height: "300",
  dataSource: [],
};

export default chartConfigs1;
