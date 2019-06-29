import { Component, OnInit, AfterContentInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cash-flow-graph',
  templateUrl: './cash-flow-graph.component.html',
  styleUrls: ['./cash-flow-graph.component.scss']
})
export class CashFlowGraphComponent implements OnInit, AfterContentInit, AfterViewInit {

  @ViewChild('echarts')
  echartsEl: Element;

  // 图表实例
  echartsIntance: any;


  option: any = '2019';

  // 图表选项 - 基础配置
  chartBaseOption = {
    tooltip: {
      trigger: 'axis',
      position: function (pt) {
        return [pt[0], '10%'];
      }
    },
    xAxis: {},
    yAxis: {
      type: 'value',
      boundaryGap: [0, '100%']
    },
    dataZoom: [{
      type: 'inside',
      start: 0,
      end: 10
    }, {
      start: 0,
      end: 10,
      handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
      handleSize: '80%',
      handleStyle: {
        color: '#fff',
        shadowBlur: 3,
        shadowColor: 'rgba(0, 0, 0, 0.6)',
        shadowOffsetX: 2,
        shadowOffsetY: 2
      }
    }],
    series: []
  }

  constructor() {
  }

  ngOnInit() {
    this.initChartData();
  }

  ngAfterContentInit() {

  }

  ngAfterViewInit() {

  }

  /**
   * 初始化图表数据
   */
  initChartData() {

    var base = +new Date(parseInt(this.option), 0, 0);
    var oneDay = 24 * 3600 * 1000;
    var date = [];

    var data = [Math.random() * 300];

    for (var i = 1; i <= 365; i++) {
      var now = new Date(base += oneDay);
      date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
      data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
    }

    this.chartBaseOption.series = [
      {
        name: '模拟数据',
        type: 'line',
        smooth: true,
        symbol: 'none',
        sampling: 'average',
        itemStyle: {
          color: 'rgb(255, 70, 131)'
        },
        data: data
      }
    ];
    this.chartBaseOption.xAxis = {
      type: 'category',
      boundaryGap: false,
      data: date
    };
    setTimeout(() => {
      this.echartsIntance.setOption(this.chartBaseOption);
    }, 1000);
  }

  /**
   * 图表初始化
   */
  onChartInit(ei: any) {
    this.echartsIntance = ei;
  }

  /**
   * 设置下拉框选项
   */
  onSelectOption() {

    var base = +new Date(parseInt(this.option), 0, 0);
    var oneDay = 24 * 3600 * 1000;
    var date = [];
    var data = [Math.random() * 300];

    for (var i = 1; i <= 365; i++) {
      var now = new Date(base += oneDay);
      date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
      data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
    }

    this.chartBaseOption.series = [
      {
        name: '模拟数据',
        type: 'line',
        smooth: true,
        symbol: 'none',
        sampling: 'average',
        itemStyle: {
          color: 'rgb(255, 70, 131)'
        },
        data: data
      }
    ];
    this.chartBaseOption.xAxis = {
      type: 'category',
      boundaryGap: false,
      data: date
    };
    this.echartsIntance.clear();
    this.echartsIntance.setOption(this.chartBaseOption);
  }

}
