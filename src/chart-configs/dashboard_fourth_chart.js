import moment from "moment";
// today chart
//var dayDetail = moment().format('MMMM, Do YYYY');
//var dayLen = 24;
var timeFlag = moment().format("a");
var currentHour;
// eslint-disable-next-line
if (timeFlag == "pm") {
  // eslint-disable-next-line
  currentHour = parseInt(moment().format("h")) + 12;
} else {
  currentHour = moment().format("h");
}

var categoryArr = [];
for (var i = 1; i <= 23; i++) {
  // eslint-disable-next-line
  if (i != currentHour) {
    // eslint-disable-next-line
    if (i % 4 != 0) {
      categoryArr.push({ label: i + " hrs", showLabel: "0" });
    } else {
      categoryArr.push({ label: i + " hrs" });
    }
  } else {
    categoryArr.push({ label: currentHour + " hrs" });
    categoryArr.push({ vline: "true", color: "#707C92", dashed: "1", linePosition: "0", labelPosition: "0" });
  }
}

var dayValueArr = [
  0, 1, 1.3, 1.8, 2.6, 3.1, 3.9, 4.3, 4.8, 5.6, 5.9, 6.2, 7.3, 7.8, 8.3, 8.7, 9.2, 9.8, 10.6, 11.8, 12.3, 13.9, 14.4,
  15.1,
];

var activeArr = [];
// eslint-disable-next-line
for (var i = 1; i <= 23; i++) {
  // eslint-disable-next-line
  if (i <= currentHour) {
    // eslint-disable-next-line
    if (i % 4 != 0) {
      activeArr.push({ value: dayValueArr[i - 1], label: i - 1 + "h" });
    } else {
      activeArr.push({ value: dayValueArr[i - 1], label: i - 1 + "h" });
    }
  } else {
    activeArr.push({ value: null, label: i - 1 + "h" });
  }
}

var fourth_chart_today = {
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
    yAxisname: "°C",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "5",
    toolTipBorderRadius: "2",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    canvasPadding: "0",
    numberSuffix: " °C",
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
      seriesname: moment().subtract(1, "day").format("MMM D"),

      data: activeArr,
    },
  ],
};

var chartConfigs4 = {
  type: "line",
  className: "fc-line",
  id: "mychart4",
  dataFormat: "JSON",
  width: "100%",
  height: "300",
  dataSource: fourth_chart_today,
};

export default chartConfigs4;
export { fourth_chart_today };
