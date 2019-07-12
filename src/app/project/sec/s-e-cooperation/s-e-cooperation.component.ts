import { Component, OnInit } from '@angular/core';
import { KeyVerticalMenuEvent } from 'src/modules/key/vertical-menu/vertical-menu.event';
import { Router } from '@angular/router';
import { PortalNavigation } from 'src/app/portal/portal.navigation';
import { ConstantHandler } from 'src/modules/utils/constant-handler';
import { DataSECooperationHandler } from 'src/data/sec/s-e-cooperation';
import { UtilsSec } from '../utils/utils-sec';
import { KeyCarouselLabelEvent } from 'src/modules/key/carousel/carousel-label.event';

@Component({
  selector: 'app-s-e-cooperation',
  templateUrl: './s-e-cooperation.component.html',
  styleUrls: ['./s-e-cooperation.component.scss']
})
export class SECooperationComponent implements OnInit {

  // 横幅图片
  CH_SEC_BANNER_SRC: any;

  // 横幅菜单
  CH_SEC_BANNER_MENU: KeyVerticalMenuEvent[];

  // 门户导航
  portalNav: any;

  // 数据助手
  dataHandler: any;

  currentIndexER: number = 0;
  currentIndexFD: number = 0;

  labelArray: KeyCarouselLabelEvent[] = [
    { key: 'title' },
    { key: 'text' }
  ];

  senActiveItem: any;

  constructor(private router: Router) {
    this.portalNav = new PortalNavigation(router);
  }

  ngOnInit() {
    this.CH_SEC_BANNER_SRC = ConstantHandler.CH_SEC_BANNER_SRC;
    this.CH_SEC_BANNER_MENU = ConstantHandler.CH_SEC_BANNER_MENU;
    this.dataHandler = DataSECooperationHandler;
    // 校企新闻
    this.senActiveItem = this.dataHandler.SEN.data[0];
  }

  /**
   * 点击横幅菜单
   * @param menu 
   */
  onClickBannerMenu(menu: KeyVerticalMenuEvent) {
    UtilsSec.clickBannerMenu(this.portalNav, menu);
  }

  /**
   * 打开学校项目详情
   * @param id 
   */
  openSchoolProjectDetails(id: any) {
    console.log("打开学校项目详情");
    // this.navigateDeveloping();
  }

  /**
   * 打开企业需求详情
   * @param id 
   */
  openEnterpriseNeedsDetails(id: any) {
    console.log("打开企业需求详情");
    // this.navigateDeveloping();
  }

  /**
   * 校企资源详情
   * @param id 
   */
  openSeResourcesDetails(id: any) {
    console.log("校企资源详情");
    // this.navigateDeveloping();
  }

  /**
   * 校企招聘预告详情
   */
  openEnterpriseRecruitmentNoticeDetails(id: any) {
    console.log("校企招聘预告详情");
    // this.navigateDeveloping();
  }

  /**
   * 校企招聘详情
   */
  openEnterpriseRecruitmentDetails(id: any) {
    console.log("校企招聘详情");
    // this.navigateDeveloping();
  }

  /**
   * 有困难找专家详情
   */
  openSeekExpertDetails(id: any) {
    console.log("有困难找专家详情");
    // this.navigateDeveloping();
  }

  /**
   * 导航到正在开发中页面
   */
  navigateDeveloping() {
    this.router.navigateByUrl('developing');
  }

  /**
   * 激活校企新闻
   * @param item 
   */
  onSenActiveItem(item: any) {
    this.senActiveItem = item;
  }

  /**
   * 下载文件
   * @param id 
   */
  onDownloadFile(id: any, url: any) {
    // window.open(url); // 新窗口下载
    //获取文件名，不带后缀
    let fileName = url.replace(/(.*\/)*([^.]+).*/ig, "$2");
    //获取文件后缀
    let FileExt = url.replace(/.+\./, "");
    // 创建隐藏的可下载链接
    let eleLink = document.createElement('a');
    eleLink.download = fileName + '.' + FileExt;
    eleLink.style.display = 'none';
    // 字符内容转变成blob地址
    /* let blob = new Blob([content]);
    eleLink.href = URL.createObjectURL(blob); */
    eleLink.href = url;
    // 触发点击
    document.body.appendChild(eleLink);
    eleLink.click();
    // 然后移除
    document.body.removeChild(eleLink);
  }

  onPlay(item: any) {
    // console.log("开始播放");
    item.state = false;
  }

  onEnded(item: any) {
    // console.log("播放结束");
    item.state = true;
  }

  onClickChange(item: any) {
    item.state = false;
    let media: any = document.getElementById(item.src);
    if(media){
      media.play();
    }
    
  }

}
