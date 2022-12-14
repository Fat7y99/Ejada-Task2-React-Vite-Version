import { React, useEffect } from "react";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5 from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

// function maybeDisposeRoot(divId) {
//   am5.array.each(am5.registry.rootElements, (root) => {
//     if (root.id == divId) {
//       root.dispose();
//     }
//   });
// }

const graphShow = (root) => {
  // maybeDisposeRoot("graph-div");

  root.setThemes([am5themes_Animated.new(root)]);

  root.dateFormatter.setAll({
    dateFormat: "yyyy-MM-dd",
    dateFields: ["valueX"],
  });
  var chart = root.container.children.push(am5xy.XYChart.new(root, {}));

  var cursor = chart.set(
    "cursor",
    am5xy.XYCursor.new(root, {
      behavior: "none",
    })
  );
  cursor.lineY.set("visible", false);

  var xAxis = chart.xAxes.push(
    am5xy.DateAxis.new(root, {
      maxDeviation: 0.5,
      baseInterval: {
        timeUnit: "hour",
        count: 1,
      },
      renderer: am5xy.AxisRendererX.new(root, {
        minGridDistance: 40,
      }),
      tooltip: am5.Tooltip.new(root, {}),
    })
  );

  var yAxis = chart.yAxes.push(
    am5xy.ValueAxis.new(root, {
      maxDeviation: 1,
      visible: false,
      renderer: am5xy.AxisRendererY.new(root, {}),
    })
  );

  yAxis.get("renderer").grid.template.setAll({
    strokeWidth: 0,
    visible: false,
  });

  var series = chart.series.push(
    am5xy.SmoothedXLineSeries.new(root, {
      name: "Series",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value",
      valueXField: "date",
      stroke: am5.color(0xff764c),
      tooltip: am5.Tooltip.new(root, {
        labelText: "{valueY}:{valueX} ",
      }),
    })
  );

  series.fills.template.set(
    "fillGradient",
    am5.LinearGradient.new(root, {
      stops: [
        {
          color: am5.color(0xff764c),
          opacity: 0.24,
        },
        {
          color: am5.color(0xff7e07),
          opacity: 0,
        },
      ],
      rotation: 90,
    })
  );

  series.fills.template.setAll({
    visible: true,
  });

  var date = new Date(2022, 5, 10, 2);
  var value = 100;

  function generateData() {
    value = Math.round(Math.random() * 10 - 5) + value;
    am5.time.add(date, "hour", 1);
    return {
      date: date.getTime(),
      value: value,
    };
  }

  function generateDatas(count) {
    var data = [];
    for (var i = 0; i < count; ++i) {
      data.push(generateData());
    }
    return data;
  }

  root.numberFormatter.set("durationFormat", "mm:ss a");

  var data = generateDatas(20);

  xAxis.data.setAll(data);

  series.data.setAll(data);
  root._logo.dispose();
};

const GraphChart = () => {
  useEffect(() => {
    var root = am5.Root.new("graph-div");

    graphShow(root);
    return () => root.dispose();
  }, []);

  return (
    <div className="col-lg-6">
      <div className="position-relative stat-box">
        <div className="stat-title py-3">
          <strong>Car</strong> Statistics
        </div>
        <div className="ul-div text-start">
          <ul className="d-inline car-stats list-unstyled">
            <li className="d-inline px-2">
              <a href="#">Day</a>
            </li>
            <li className="d-inline px-2">
              <a href="#">Week</a>
            </li>
            <li className="d-inline px-2">
              <a href="#">Month</a>
            </li>
          </ul>
        </div>
        <div className="text-black-50 pt-2">20 February 2022</div>

        <div id="graph-div"></div>
      </div>
    </div>
  );
};
export default GraphChart;
