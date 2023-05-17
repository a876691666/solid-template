import logo from './logo.svg';
import styles from './App.module.css';
import * as echarts from 'echarts/core';
import { BarChart } from "echarts/charts";
import { TitleComponent, TooltipComponent, GridComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import { onMount } from 'solid-js';
echarts.use([TitleComponent, TooltipComponent, GridComponent, BarChart, CanvasRenderer]);

function App(props) {
  console.log(props);
  let chartBox;

  onMount(() => {
    const chart = echarts.init(chartBox);
    chart.setOption({
      title: { text: "ECharts 入门示例" },
      tooltip: {},
      xAxis: { data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"] },
      yAxis: {},
      series: [{ name: "销量", type: "bar", data: [5, 20, 36, 10, 10, 20] }],
    });
  })

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <div ref={chartBox} style={{ width: "600px", height: "400px" }}></div>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header >
    </div >
  );
}

export default App;
