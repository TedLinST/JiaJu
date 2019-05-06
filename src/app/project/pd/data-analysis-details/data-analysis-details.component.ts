import { Component, OnInit, ViewChild, AfterContentInit, AfterViewInit } from '@angular/core';
import { KeyVerticalMenuEvent } from 'src/modules/key/vertical-menu/vertical-menu.event';
import { ConstantHandler } from 'src/modules/utils/constant-handler';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataDataAnalysisDetailsHandler } from 'src/data/data-analysis-details';
import { Utils } from 'src/modules/utils/utils';
import { PortalNavigation } from 'src/app/portal/portal.navigation';

@Component({
  selector: 'app-data-analysis-details',
  templateUrl: './data-analysis-details.component.html',
  styleUrls: ['./data-analysis-details.component.scss']
})
export class DataAnalysisDetailsComponent implements OnInit, AfterContentInit, AfterViewInit {

  @ViewChild('echarts')
  echartsEl: Element;

  // 横幅图片
  CH_PD_BANNER_SRC: any;

  // 横幅菜单
  CH_PD_BANNER_MENU: KeyVerticalMenuEvent[];

  // 大数据分析详情数据助手
  dataHandler: any;

  // 接收参数
  idParams: any;

  option1: any = '类型 1';
  option2: any = '风格 1';
  option3: any = '材料 1';
  option4: any = '';
  option5: any = '';
  option6: any = '';
  option7: any = '';
  option8: any = '';

  // 图表实例
  echartsIntance: any;

  legendData: any[] = [];

  xAxisData: any[] = [];

  series: any[] = [];

  // 图表选项 - 基础配置
  chartBaseOption = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: []
    },
    grid: {
      left: '3%',
      right: '3%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: []
    },
    yAxis: {
      type: 'value'
    },
    series: []
  };

  // 门户导航
  portalNav: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.portalNav = new PortalNavigation(router);
  }

  ngOnInit() {
    this.CH_PD_BANNER_SRC = ConstantHandler.CH_PD_BANNER_SRC;
    this.CH_PD_BANNER_MENU = ConstantHandler.CH_PD_BANNER_MENU;
    this.dataHandler = DataDataAnalysisDetailsHandler;
    // 获取参数
    this.idParams = this.getUrlParams('id') ? this.getUrlParams('id') : -1;
    console.log('idParams:' + this.idParams);
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
    this.legendData = this.handleLegendData();
    this.xAxisData = this.handleXAxisData();
    this.series = this.handleSeriesData();
    this.chartBaseOption.legend.data = this.legendData;
    this.chartBaseOption.xAxis.data = this.xAxisData;
    this.chartBaseOption.series = this.series;
    // this.echartsIntance.setOption(this.chartBaseOption);
  }

  /**
   * 点击横幅菜单
   * @param menu 
   */
  onClickBannerMenu(menu: KeyVerticalMenuEvent) {
    if (!!menu) {
      if (menu.id == '1') {
        // 大数据分析
        this.portalNav.openDataAnalysis();
      } else if (menu.id == '2') {
        // 产品设计资料库
        this.portalNav.openDesignDatabase();
      } else if (menu.id == '3') {
        // 设计师园地
        this.portalNav.openDesignersGarden();
      } else if (menu.id == '4') {
        // 设计软件集成
        this.portalNav.openSoftwareIntegration();
      }
    }
  }

  /**
   * 导航到正在开发中页面
   */
  navigateDeveloping() {
    this.router.navigateByUrl('developing');
  }

  /**
   * 设置下拉框选项
   */
  onSelectOption(key: any, value: any) {
    this.legendData = this.handleLegendData();
    this.xAxisData = this.handleXAxisData();
    this.series = this.handleSeriesData();
    this.chartBaseOption.legend.data = this.legendData;
    this.chartBaseOption.xAxis.data = this.xAxisData;
    this.chartBaseOption.series = this.series;
    this.echartsIntance.clear();
    this.echartsIntance.setOption(this.chartBaseOption);
  }

  /**
   * 处理 series 数据
   */
  handleSeriesData() {
    let data = [];
    let len = this.legendData.length;
    let xlen = this.xAxisData.length;
    if (len > 0) {
      this.legendData.forEach((item) => {
        let subData = [];
        for (let i = 0; i < xlen; i++) {
          subData.push(Utils.randomNumber(1, 500));
        }
        data.push({
          name: item,
          type: 'line',
          stack: '总量',
          data: subData
        });
      });
    }
    return data;
  }

  /**
   * 处理 xAxisData 数据
   */
  handleXAxisData() {
    let data = [];
    let dataNumber = 7;
    let step = 24 * 60 * 60 * 1000;
    let startTimestamp = (new Date()).getTime() - (dataNumber * step);
    for (let i = 1; i <= dataNumber; i++) {
      data.push(Utils.formatTime(startTimestamp + (i * step)));
    }
    return data;
  }

  /**
   * 处理 legendData 数据
   */
  handleLegendData() {
    let data = [];
    if (!!this.option1) {
      data.push(this.option1);
    }
    if (!!this.option2) {
      data.push(this.option2);
    }
    if (!!this.option3) {
      data.push(this.option3);
    }
    if (!!this.option4) {
      data.push(this.option4);
    }
    if (!!this.option5) {
      data.push(this.option5);
    }
    if (!!this.option6) {
      data.push(this.option6);
    }
    if (!!this.option7) {
      data.push(this.option7);
    }
    if (!!this.option8) {
      data.push(this.option8);
    }
    return data;
  }

  /**
   * 图表初始化
   */
  onChartInit(ei: any) {
    this.echartsIntance = ei;
  }

  /**
   * 获取浏览器地址栏单个参数
   * @param paramsName 参数名称
   * @returns {any}
   */
  getUrlParams(paramsName: any) {
    let value: any;
    // 获取单个参数
    this.activatedRoute.params.subscribe((params: Params) => {
      value = params[paramsName];
    });
    return value;
  }

}
