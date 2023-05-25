import moment from 'moment';
// today
export var todayArr = [7.3, 7.1, 6.2];
export var todayDeviceOneSplit = [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.2, 0.3, 0.4, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.3, 0.3, 0.5, 0.35, 0.2, 0.1];
export var todayDeviceTwoSplit = [0, 0, 0, 0, 0, 0, 0, 0, 0.1, 0.15, 0.2, 0, 0, 0, 0, 0, 0, 0.1, 0.1, 0.1, 0.3, 0.2, 0.1, 0];
export var todayDeviceTreeSplit = [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.15, 0.2, 0, 0, 0, 0, 0, 0, 0.1, 0.1, 0.1, 0.3, 0.2, 0.1, 0];

export var yesterdayDeviceOneSplit = [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.2, 0.3, 0.4, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.3, 0.4, 0.4, 0.5, 0.6, 0.2, 0.1];
export var yesterdayDeviceTwoSplit = [0, 0, 0, 0, 0, 0, 0, 0, 0.1, 0.2, 0.2, 0, 0, 0, 0, 0, 0.1, 0.1, 0.1, 0.2, 0.3, 0.3, 0.1, 0];
export var yesterdayDeviceTreeSplit = [0.1, 0.2, 0.3, 0.4, 0.2, 0.2, 0, 0, 0.1, 0.2, 0.2, 0, 0, 0, 0, 0, 0.1, 0.1, 0.1, 0.2, 0.3, 0.3, 0.1, 0];


// month
export var monthArr = [209, 203, 214];
export var mDeviceOneSplit = [4.9, 4.2, 4.8, 4.1, 4.9, 4.7, 4.8, 4, 4.9, 4, 4.8, 4.3, 4.2, 4.1, 4.9, 4, 4.9, 4, 4.4, 4, 4.5, 4.4, 4.7, 4.9, 4.4, 4.3, 4.3, 4.7, 4.3, 4, 4.9];
export var mDeviceTwoSplit = [2.1, 2.2, 2, 2.9, 2, 2.2, 2.8, 2.6, 2.7, 2, 2.4, 2, 2.9, 3, 3, 2, 2.9, 2.6, 2.1, 2, 2.1, 2.2, 2.4, 3.7, 2, 2, 2.9, 2, 3.3, 2, 2.7];
export var mDeviceTreeSplit = [4.9, 4.2, 4.8, 4.1, 4.9, 4.7, , 2.8, 2.6, 2.7, 2, 2.4, 2, 2.9, 3, 3, 2, 2.9, 2.6, 2.1, 2, 2.1, 2.2, 2.4, 3.7, 2, 2, 2.9, 2, 3.3, 2, 2.7];

export var lmDeviceOneSplit = [4.4, 4.2, 4, 4.1, 4.3, 4.7, 4.1, 4, 4.9, 4, 4.8, 4.3, 4.2, 4.1, 4.2, 4, 4.2, 4, 4.4, 4, 4.5, 4.4, 4.3, 4.9, 4.4, 4.3, 4.3, 4.1, 4.1, 4, 4.1];
export var lmDeviceTwoSplit = [2.1, 2.2, 2, 2.9, 2, 2.2, 2.8, 2.6, 2.7, 2, 2.4, 2, 2.1, 2.3, 3, 2, 2.1, 2.6, 2.1, 2, 2.1, 2.2, 2.4, 3.3, 2, 2, 2.1, 2, 2.3, 2, 2.2];
export var lmDeviceTreeSplit = [4.4, 4.2, 4, 4.1, 4.3, 2.1, 2.2, 2, 2.9, 2, 2.2, 2.8, 2.6, 2.7, 2, 2.4, 2, 2.1, 2.3, 3, 2, 2.1, 2.6, 2.1, 2, 2.1, 2.2, 2.4, 3.3, 2, 2, 2.1, 2, 2.3, 2, 2.2];

// year
export var yearArr = [1700, 1620, 1450];
export var yDeviceOneSplit = [97, 80, 95, 69, 62, 73, 60, 85, 66, 100, 106, 120];
export var yDeviceTwoSplit = [30, 44, 35, 34, 35, 33, 37, 39, 41, 30, 39, 40];
export var yDeviceTreeSplit = [97, 80, 95, 69, 62, 35, 33, 37, 39, 41, 30, 39, 40];

export var lyDeviceOneSplit = [109, 92, 95, 80, 62, 73, 110, 95, 106, 100, 106, 120];
export var lyDeviceTwoSplit = [49, 44, 35, 34, 35, 39, 37, 39, 41, 40, 39, 40];
export var lyDeviceTreeSplit = [109, 92, 95, 80, 62, 39, 37, 39, 41, 40, 39, 40];

//cost-this-day data
var catArr = [];
var deviceOneDataArr = [];
var deviceTwoDataArr = [];
var deviceThreeDataArr = [];

for (var i = 0; i < todayDeviceOneSplit.length; i++) {
  catArr.push({ "label": i + " hrs" });
}
// eslint-disable-next-line
for (var i = 0; i < todayDeviceOneSplit.length; i++) {
  // eslint-disable-next-line
  if (i <= parseInt(moment().format('H'))) {
    deviceOneDataArr.push({ "value": todayDeviceOneSplit[i] });
  } else {
    deviceOneDataArr.push({
      value: todayDeviceOneSplit[i],
      alpha: "30",
      toolText: "<div><i>Predicted: $seriesName<br>$label: $dataValue<i><div>"
    });
  }
}
// eslint-disable-next-line
for (var i = 0; i < todayDeviceTwoSplit.length; i++) {
  // eslint-disable-next-line
  if (i <= parseInt(moment().format('H'))) {
    deviceTwoDataArr.push({
      value: todayDeviceTwoSplit[i]
    });
  } else {
    deviceTwoDataArr.push({
      value: todayDeviceTwoSplit[i],
      alpha: "30",
      toolText: "<div><i>Predicted: $seriesName<br>$label: $dataValue<i><div>"
    });
  }
}

// eslint-disable-next-line
for (var i = 0; i < todayDeviceTreeSplit.length; i++) {
  // eslint-disable-next-line
  if (i <= parseInt(moment().format('H'))) {
    deviceThreeDataArr.push({
      value: todayDeviceTreeSplit[i]
    });
  } else {
    deviceThreeDataArr.push({
      value: todayDeviceTreeSplit[i],
      alpha: "30",
      toolText: "<div><i>Predicted: $seriesName<br>$label: $dataValue<i><div>"
    });
  }
}

var cost_this_day = {
  chart: {
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    showBorder: "0",
    showCanvasBorder: "0",
    showValues: "0",
    showAlternateHGridColor: "0",
    legendBgAlpha: "0",
    usePlotGradientColor: "0",
    paletteColors: "#48DFBA, #F7E332,#F53E2D",
    drawCustomLegendIcon: "1",
    baseFontSize: "14",
    baseFontColor: "#FDFDFD",
    showPlotBorder: "0",
    baseFont: "Nunito Sans",
    legendBorderAlpha: "0",
    numberPrefix: "$",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "5",
    toolTipBorderRadius: "2",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    showXAxisLine: "1",
    showYAxisLine: "1",
    xAxisLineColor: "#9092A4",
    yAxisLineColor: "#9092A4",
    xAxisLineThickness: "1.5",
    yAxisLineThickness: "1.5",
    divLineColor: "#414761",
    divLineAlpha: "100",
    divLineThickness: "1.5",
    divLineDashed: "1",
    divLineDashGap: "2",
    divlineDashLen: "3",
    transposeAxis: "1",
    scrollHeight: "8",
    scrollColor: "#FDFDFD",
    flatScrollBars: "1",
    scrollShowButtons: "0",
    chartLeftMargin: "0",
    chartRightMargin: "0",
    canvasLeftMargin: "0",
    canvasRightMargin: "0"
  },
  categories: [
    {
      category: catArr
    }
  ],
  dataset: [
    {
      seriesname: "Device 1",
      data: deviceOneDataArr
    },
    {
      seriesname: "Device 2",
      data: deviceTwoDataArr
    },
    {
      seriesname: "Device 3",
      data: deviceThreeDataArr
    }
  ]
};

//cost-last-day data

catArr = [];
deviceOneDataArr = [];
deviceTwoDataArr = [];
deviceThreeDataArr = [];
// eslint-disable-next-line
for (var i = 0; i < yesterdayDeviceOneSplit.length; i++) {
  catArr.push({ "label": i + " hrs" });
}
// eslint-disable-next-line
for (var i = 0; i < yesterdayDeviceOneSplit.length; i++) {
  deviceOneDataArr.push({ "value": yesterdayDeviceOneSplit[i] });
}
// eslint-disable-next-line
for (var i = 0; i < yesterdayDeviceTwoSplit.length; i++) {
  deviceTwoDataArr.push({ "value": yesterdayDeviceTwoSplit[i] });
}
// eslint-disable-next-line
for (var i = 0; i < yesterdayDeviceTreeSplit.length; i++) {
  deviceThreeDataArr.push({ "value": yesterdayDeviceTreeSplit[i] });
}

var cost_last_day = {
  chart: {
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    showBorder: "0",
    showCanvasBorder: "0",
    showValues: "0",
    showAlternateHGridColor: "0",
    legendBgAlpha: "0",
    usePlotGradientColor: "0",
    paletteColors: "#48DFBA, #F7E332,#F53E2D",
    drawCustomLegendIcon: "1",
    baseFontSize: "14",
    baseFontColor: "#FDFDFD",
    showPlotBorder: "0",
    baseFont: "Nunito Sans",
    legendBorderAlpha: "0",
    numberPrefix: "$",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "5",
    toolTipBorderRadius: "2",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    showXAxisLine: "1",
    showYAxisLine: "1",
    xAxisLineColor: "#9092A4",
    yAxisLineColor: "#9092A4",
    xAxisLineThickness: "1.5",
    yAxisLineThickness: "1.5",
    divLineColor: "#414761",
    divLineAlpha: "100",
    divLineThickness: "1.5",
    divLineDashed: "1",
    divLineDashGap: "2",
    divlineDashLen: "3",
    transposeAxis: "1",
    scrollHeight: "8",
    scrollColor: "#FDFDFD",
    flatScrollBars: "1",
    scrollShowButtons: "0",
    chartLeftMargin: "0",
    chartRightMargin: "0",
    canvasLeftMargin: "0",
    canvasRightMargin: "0"
  },
  categories: [
    {
      category: catArr
    }
  ],
  dataset: [
    {
      seriesname: "Device 1",
      data: deviceOneDataArr
    },
    {
      seriesname: "Device 2",
      data: deviceTwoDataArr
    },
    {
      seriesname: "Device 3",
      data: deviceThreeDataArr
    }
  ]
};

//cost-this-month-data

catArr = [];
deviceOneDataArr = [];
deviceTwoDataArr = [];
deviceThreeDataArr = [];

// eslint-disable-next-line
for (var i = 1; i <= moment().daysInMonth(); i++) {
  catArr.push({ "label": moment().format('MMM') + " " + i });
}
// eslint-disable-next-line
for (var i = 0; i <= moment().daysInMonth(); i++) {
  // eslint-disable-next-line
  if (i < parseInt(moment().format('D'))) {
    deviceOneDataArr.push({ "value": mDeviceOneSplit[i] });
  } else {
    deviceOneDataArr.push({
      value: mDeviceOneSplit[i],
      alpha: "30",
      toolText:
        "<div><i>Predicted: $seriesName<br>$label: $dataValue<i><div>"
    });
  }
}
// eslint-disable-next-line
for (var i = 0; i <= moment().daysInMonth(); i++) {
  // eslint-disable-next-line
  if (i < parseInt(moment().format('D'))) {
    deviceTwoDataArr.push({ "value": mDeviceTwoSplit[i] });
  } else {
    deviceTwoDataArr.push({
      value: mDeviceTwoSplit[i],
      alpha: "30",
      toolText:
        "<div><i>Predicted: $seriesName<br>$label: $dataValue<i><div>"
    });
  }
}
// eslint-disable-next-line
for (var i = 0; i <= moment().daysInMonth(); i++) {
  // eslint-disable-next-line
  if (i < parseInt(moment().format('D'))) {
    deviceThreeDataArr.push({ "value": mDeviceTreeSplit[i] });
  } else {
    deviceThreeDataArr.push({
      value: mDeviceTreeSplit[i],
      alpha: "30",
      toolText:
        "<div><i>Predicted: $seriesName<br>$label: $dataValue<i><div>"
    });
  }
}
var cost_this_month = {
  chart: {
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    showBorder: "0",
    showCanvasBorder: "0",
    showValues: "0",
    showAlternateHGridColor: "0",
    legendBgAlpha: "0",
    usePlotGradientColor: "0",
    paletteColors: "#48DFBA, #F7E332,#F53E2D",
    drawCustomLegendIcon: "1",
    baseFontSize: "14",
    baseFontColor: "#FDFDFD",
    showPlotBorder: "0",
    baseFont: "Nunito Sans",
    legendBorderAlpha: "0",
    numberPrefix: "$",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "5",
    toolTipBorderRadius: "2",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    showXAxisLine: "1",
    showYAxisLine: "1",
    xAxisLineColor: "#9092A4",
    yAxisLineColor: "#9092A4",
    xAxisLineThickness: "1.5",
    yAxisLineThickness: "1.5",
    divLineColor: "#414761",
    divLineAlpha: "100",
    divLineThickness: "1.5",
    divLineDashed: "1",
    divLineDashGap: "2",
    divlineDashLen: "3",
    labelDisplay: "ROTATE",
    transposeAxis: "1",
    scrollHeight: "8",
    scrollColor: "#FDFDFD",
    flatScrollBars: "1",
    scrollShowButtons: "0",
    chartLeftMargin: "0",
    chartRightMargin: "0",
    canvasLeftMargin: "0",
    canvasRightMargin: "0"
  },
  categories: [
    {
      category: catArr
    }
  ],
  dataset: [
    {
      seriesname: "Device 1",
      data: deviceOneDataArr
    },
    {
      seriesname: "Device 2",
      data: deviceTwoDataArr
    },
    {
      seriesname: "Device 3",
      data: deviceThreeDataArr
    }
  ]
};

//cost-last-month-data

catArr = [];
deviceOneDataArr = [];
deviceTwoDataArr = [];
deviceThreeDataArr = [];

// eslint-disable-next-line
for (var i = 1; i <= moment().subtract(1, 'month').daysInMonth(); i++) {
  catArr.push({ "label": moment().subtract(1, 'month').format('MMM') + " " + i });
}
// eslint-disable-next-line
for (var i = 0; i <= moment().subtract(1, 'month').daysInMonth(); i++) {
  deviceOneDataArr.push({ "value": lmDeviceOneSplit[i] });
}
// eslint-disable-next-line
for (var i = 0; i <= moment().subtract(1, 'month').daysInMonth(); i++) {
  deviceTwoDataArr.push({ "value": lmDeviceTwoSplit[i] });
}
// eslint-disable-next-line
for (var i = 0; i <= moment().subtract(1, 'month').daysInMonth(); i++) {
  deviceThreeDataArr.push({ "value": lmDeviceTreeSplit[i] });
}

var cost_last_month = {
  chart: {
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    showBorder: "0",
    showCanvasBorder: "0",
    showValues: "0",
    showAlternateHGridColor: "0",
    legendBgAlpha: "0",
    usePlotGradientColor: "0",
    paletteColors: "#48DFBA, #F7E332,#F53E2D",
    drawCustomLegendIcon: "1",
    baseFontSize: "14",
    baseFontColor: "#FDFDFD",
    showPlotBorder: "0",
    baseFont: "Nunito Sans",
    legendBorderAlpha: "0",
    numberPrefix: "$",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "5",
    toolTipBorderRadius: "2",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    showXAxisLine: "1",
    showYAxisLine: "1",
    xAxisLineColor: "#9092A4",
    yAxisLineColor: "#9092A4",
    xAxisLineThickness: "1.5",
    yAxisLineThickness: "1.5",
    divLineColor: "#414761",
    divLineAlpha: "100",
    divLineThickness: "1.5",
    divLineDashed: "1",
    divLineDashGap: "2",
    divlineDashLen: "3",
    labelDisplay: "ROTATE",
    transposeAxis: "1",
    scrollHeight: "8",
    scrollColor: "#FDFDFD",
    flatScrollBars: "1",
    scrollShowButtons: "0",
    chartLeftMargin: "0",
    chartRightMargin: "0",
    canvasLeftMargin: "0",
    canvasRightMargin: "0"
  },
  categories: [
    {
      category: catArr
    }
  ],
  dataset: [
    {
      seriesname: "Device 1",
      data: deviceOneDataArr
    },
    {
      seriesname: "Device 2",
      data: deviceTwoDataArr
    },
    {
      seriesname: "Device 3",
      data: deviceThreeDataArr
    }
  ]
};

//cost-this-year-data

catArr = [];
deviceOneDataArr = [];
deviceTwoDataArr = [];
deviceThreeDataArr = [];

// eslint-disable-next-line
for (var i = 0; i < yDeviceOneSplit.length; i++) {
  catArr.push({ "label": moment().month(i).format('MMM') });
}
// eslint-disable-next-line
for (var i = 0; i < yDeviceOneSplit.length; i++) {
  // eslint-disable-next-line
  if (i < parseInt(moment().format('M'))) {
    deviceOneDataArr.push({ "value": yDeviceOneSplit[i] });
  } else {
    deviceOneDataArr.push({
      value: yDeviceOneSplit[i],
      alpha: "30",
      toolText:
        "<div><i>Predicted: $seriesName<br>$label: $dataValue<i><div>"
    });
  }
}
// eslint-disable-next-line
for (var i = 0; i < yDeviceOneSplit.length; i++) {
  // eslint-disable-next-line
  if (i < parseInt(moment().format('M'))) {
    deviceThreeDataArr.push({ "value": yDeviceTreeSplit[i] });
  } else {
    deviceThreeDataArr.push({
      value: yDeviceTreeSplit[i],
      alpha: "30",
      toolText:
        "<div><i>Predicted: $seriesName<br>$label: $dataValue<i><div>"
    });
  }
}
// eslint-disable-next-line
for (var i = 0; i < yDeviceOneSplit.length; i++) {
  // eslint-disable-next-line
  if (i < parseInt(moment().format('M'))) {
    deviceTwoDataArr.push({ "value": yDeviceTwoSplit[i] });
  } else {
    deviceTwoDataArr.push({
      value: yDeviceTwoSplit[i],
      alpha: "30",
      toolText:
        "<div><i>Predicted: $seriesName<br>$label: $dataValue<i><div>"
    });
  }
}
var cost_this_year = {
  chart: {
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    showBorder: "0",
    showCanvasBorder: "0",
    showValues: "0",
    showAlternateHGridColor: "0",
    legendBgAlpha: "0",
    usePlotGradientColor: "0",
    paletteColors: "#48DFBA, #F7E332,#F53E2D",
    drawCustomLegendIcon: "1",
    baseFontSize: "14",
    baseFontColor: "#FDFDFD",
    showPlotBorder: "0",
    baseFont: "Nunito Sans",
    legendBorderAlpha: "0",
    numberPrefix: "$",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "5",
    toolTipBorderRadius: "2",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    showXAxisLine: "1",
    showYAxisLine: "1",
    xAxisLineColor: "#9092A4",
    yAxisLineColor: "#9092A4",
    xAxisLineThickness: "1.5",
    yAxisLineThickness: "1.5",
    divLineColor: "#414761",
    divLineAlpha: "100",
    divLineThickness: "1.5",
    divLineDashed: "1",
    divLineDashGap: "2",
    divlineDashLen: "3",
    transposeAxis: "1",
    scrollHeight: "8",
    scrollColor: "#FDFDFD",
    flatScrollBars: "1",
    scrollShowButtons: "0",
    chartLeftMargin: "0",
    chartRightMargin: "0",
    canvasLeftMargin: "0",
    canvasRightMargin: "0"
  },
  categories: [
    {
      category: catArr
    }
  ],
  dataset: [
    {
      seriesname: "Device 1",
      data: deviceOneDataArr
    },
    {
      seriesname: "Device 2",
      data: deviceTwoDataArr
    },
    {
      seriesname: "Device 3",
      data: deviceThreeDataArr
    }
  ]
};

//cost-last-year-data

catArr = [];
deviceOneDataArr = [];
deviceTwoDataArr = [];
deviceThreeDataArr = [];

// eslint-disable-next-line
for (var i = 0; i < lyDeviceOneSplit.length; i++) {
  catArr.push({ "label": moment().month(i).format('MMM') });
}
// eslint-disable-next-line
for (var i = 0; i < lyDeviceOneSplit.length; i++) {
  deviceOneDataArr.push({ "value": lyDeviceOneSplit[i] });
}
// eslint-disable-next-line
for (var i = 0; i < lyDeviceOneSplit.length; i++) {
  deviceTwoDataArr.push({ "value": lyDeviceTwoSplit[i] });
}
// eslint-disable-next-line
for (var i = 0; i < lyDeviceOneSplit.length; i++) {
  deviceThreeDataArr.push({ "value": lyDeviceTreeSplit[i] });
}

var cost_last_year = {
  chart: {
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    showBorder: "0",
    showCanvasBorder: "0",
    showValues: "0",
    showAlternateHGridColor: "0",
    legendBgAlpha: "0",
    usePlotGradientColor: "0",
    paletteColors: "#48DFBA, #F7E332,#F53E2D",
    drawCustomLegendIcon: "1",
    baseFontSize: "14",
    baseFontColor: "#FDFDFD",
    showPlotBorder: "0",
    baseFont: "Nunito Sans",
    legendBorderAlpha: "0",
    numberPrefix: "$",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "5",
    toolTipBorderRadius: "2",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    showXAxisLine: "1",
    showYAxisLine: "1",
    xAxisLineColor: "#9092A4",
    yAxisLineColor: "#9092A4",
    xAxisLineThickness: "1.5",
    yAxisLineThickness: "1.5",
    divLineColor: "#414761",
    divLineAlpha: "100",
    divLineThickness: "1.5",
    divLineDashed: "1",
    divLineDashGap: "2",
    divlineDashLen: "3",
    transposeAxis: "1",
    scrollHeight: "8",
    scrollColor: "#FDFDFD",
    flatScrollBars: "1",
    scrollShowButtons: "0",
    chartLeftMargin: "0",
    chartRightMargin: "0",
    canvasLeftMargin: "0",
    canvasRightMargin: "0"
  },
  categories: [
    {
      category: catArr
    }
  ],
  dataset: [
    {
      seriesname: "Device 1",
      data: deviceOneDataArr
    },
    {
      seriesname: "Device 2",
      data: deviceTwoDataArr
    },
    {
      seriesname: "Device 3",
      data: deviceThreeDataArr
    }
  ]
};


var costchart = {
  type: "scrollstackedcolumn2d",
  className: "fc-column2d",
  width: "100%",
  id: "mychart8",
  height: 500,

  dataSource: cost_this_month
};

export default costchart;

export { cost_last_month };
export { cost_this_month };

export { cost_this_day };
export { cost_last_day };

export { cost_this_year };
export { cost_last_year };