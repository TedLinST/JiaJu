import { KeyVerticalMenuEvent } from 'src/modules/key/vertical-menu/vertical-menu.event';

export class UtilsSec {

  /**
   * 点击横幅菜单
   * @param portalNav 
   * @param menu 
   */
  public static clickBannerMenu(portalNav: any, menu: KeyVerticalMenuEvent) {
    if (!!menu) {
      if (menu.id == '1') {
        // 学校项目
        portalNav.openSchoolProject();
      } else if (menu.id == '2') {
        // 企业需求
        portalNav.openEnterpriseNeeds();
      } else if (menu.id == '3') {
        // 校企资源
        portalNav.openSeResources();
      } else if (menu.id == '4') {
        // 企业招聘
        portalNav.openEnterpriseRecruitment();
      } else if (menu.id == '5') {
        // 互动讲堂
        portalNav.openInteractionForum();
      } else if (menu.id == '6') {
        // 校企新闻
        portalNav.openSeNews();
      } else if (menu.id == '7') {
        // 有困难找专家
        portalNav.openSeekExpert();
      } else if (menu.id == '8') {
        // 文件下载
        portalNav.openFileDownload();
      }
    }
  }

}