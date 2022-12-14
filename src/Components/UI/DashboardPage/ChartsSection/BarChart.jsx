import { useEffect } from "react";
import * as am5xy from "@amcharts/amcharts5/xy";

import * as am5 from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

function maybeDisposeRoot(divId) {
  am5.array.each(am5.registry.rootElements, (root) => {
    if (root.id == divId) {
      root.dispose();
    }
  });
}

const barShow = (root) => {
  // maybeDisposeRoot("bardiv");

  root.setThemes([am5themes_Animated.new(root)]);
  root.numberFormatter.set("numberFormat", "#a");

  var chart = root.container.children.push(am5xy.XYChart.new(root, {}));
  // chart.language.locale["_thousandSeparator"] = " ";

  // Add cursor
  // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
  //   var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
  //   cursor.lineY.set("visible", false);

  // Create axes
  // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
  var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 1 });
  xRenderer.labels.template.setAll({
    // centerY: am5.p50,
    // centerX: am5.p100,
    paddingTop: 15,
    fill: am5.color(0x808191),
  });

  var xAxis = chart.xAxes.push(
    am5xy.CategoryAxis.new(root, {
      categoryField: "hour",
      renderer: xRenderer,
    })
  );

  //   xAxis.tooltip.get("background").setAll({
  //     fill: am5.color(0x282b32),
  //   });
  var yAxis = chart.yAxes.push(
    am5xy.ValueAxis.new(root, {
      // maxDeviation: 0.3,
      visible: false,

      renderer: am5xy.AxisRendererY.new(root, {}),
    })
  );

  yAxis.get("renderer").grid.template.setAll({
    strokeWidth: 0,
    visible: false,
  });

  xAxis.get("renderer").grid.template.setAll({
    strokeWidth: 0,
  });

  var series = chart.series.push(
    am5xy.ColumnSeries.new(root, {
      name: "Series 1",
      xAxis: xAxis,
      yAxis: yAxis,
      stroke: false,
      valueYField: "value",
      sequencedInterpolation: true,
      categoryXField: "hour",
    })
  );

  series.columns.template.setAll({
    fill: am5.color(0xf4f5f9),
  });

  series.columns.template.set("interactive", true);

  series.columns.template.states.create("hover", {
    fill: am5.color(0x2884ff),
    stroke: am5.color(0xf4f5f9),
  });
  series.columns.template.setAll({
    tooltipX: am5.percent(100),
    tooltipY: am5.percent(30),
    tooltipFill: am5.color(0xffffff),
    // tooltipHTML:    "<img src='logo.svg' style='vertical-align:bottom; margin-right: 10px; width:21px; height:21px;'>";
  });

  var tempToolTip = am5.Tooltip.new(root, {
    getFillFromSprite: false,
    autoTextColor: false,

    labelText: "{hour}\n{valueY}",
  });

  tempToolTip.get("background").setAll({
    fill: am5.color(0x000000),
    stroke: am5.color(0x000000),
  });

  series.set("tooltip", tempToolTip);

  series.columns.template.setAll({
    tooltipHTML:
      "<span style='font-size:10px; font-family: `DM Sans`; font-weight: 700; color:#FFFFFF;'><b>{hour}</b></span><br><img src='../imgs/tooltip-icon.svg' style='vertical-align:bottom; margin-bottom: 2px; margin-right: 5px; width:12px; height:12px;'><span style='font-size:10px; font-family: `DM Sans`; font-weight: 700; color:#FFFFFF;'><b>{valueY}</b></span>",
  });

  // series.columns.template.tooltipHTML =
  //   series.columns.template.adapters.add("fill", function (fill, target) {
  //     return chart.get("colors").getIndex(series.columns.indexOf(target));
  //   });

  //   series.columns.template.states.add("hover", {
  //     fill: am5.color(0x2884ff),
  //     stroke: am5.color(0x2884ff),
  //   });

  //   series.columns.template.adapters.add("stroke", function (stroke, target) {
  //     return chart.get("colors").getIndex(series.columns.indexOf(target));
  //   });

  var data = [
    {
      hour: "1 PM",
      value: 353000,
    },
    {
      hour: "2 PM",
      value: 354000,
    },
    {
      hour: "3 PM",
      value: 355000,
    },
    {
      hour: "4 PM",
      value: 356000,
    },
    {
      hour: "5 PM",
      value: 357000,
    },
    {
      hour: "6 PM",
      value: 358000,
    },
    {
      hour: "7 PM",
      value: 359000,
    },
  ];

  xAxis.data.setAll(data);
  series.data.setAll(data);

  // series.appear(1000);
  // chart.appear(1000, 100);
  root._logo.dispose();
};

const BarChart = () => {
  useEffect(() => {
    var root = am5.Root.new("bardiv");

    barShow(root);
    return () => root.dispose();
  }, []);

  return (
    <div className="col-lg-6">
      <div className="position-relative stat-box pb-4">
        <div className="stat-title py-3">
          <strong>Miles</strong> Statistics
        </div>
        <div className="miles text-black-50">256 Miles</div>
        <ul className="d-inline stats list-unstyled">
          <li className="d-inline pe-2">
            <a href="#">Day</a>
          </li>
          <li className="d-inline pe-2">
            <a href="#">Week</a>
          </li>
          <li className="d-inline">
            <a href="#">Month</a>
          </li>
        </ul>
        <div id="bardiv"></div>
      </div>
    </div>
  );
};

export default BarChart;
