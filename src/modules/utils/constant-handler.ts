import { KeyVerticalMenuEvent } from '../key/vertical-menu/vertical-menu.event';

export class ConstantHandler {

  // 产品设计开发服务 - 横幅图片
  public static CH_PD_BANNER_SRC = '/assets/imgs/product-design/toubu-1.jpg';

  // 产品设计开发服务 - 横幅菜单
  public static CH_PD_BANNER_MENU = [
    {
      id: '1',
      title: '大数据分析'
    },
    {
      id: '2',
      title: '产品设计资料库'
    },
    {
      id: '3',
      title: '设计师园地'
    },
    {
      id: '4',
      title: '设计软件集成'
    }
  ];

  // 原辅材料机械设备服务 - 小材料横幅图片
  public static CH_ME_MIN_MATERIAL_BANNER_SRC = '/assets/imgs/raw-material/top.jpg';

  // 原辅材料机械设备服务 - 材料横幅图片
  public static CH_ME_MATERIAL_BANNER_SRC = '/assets/imgs/material-supplier/top.jpg';

  // 原辅材料机械设备服务 - 设备横幅图片
  public static CH_ME_EQUIPMENT_BANNER_SRC = '/assets/imgs/equipment-mart/banner.jpg';

  // 产品设计开发服务 - 横幅菜单
  public static CH_ME_BANNER_MENU: KeyVerticalMenuEvent[] = [
    {
      id: '1',
      title: '原辅材料商城'
    },
    {
      id: '2',
      title: '原辅材料团购',
      subMenu: [
        {
          id: '2-1',
          title: '木材团购',
        },
        {
          id: '2-2',
          title: '家具辅料团购',
        }
      ]
    },
    {
      id: '3',
      title: '原辅材料求购'
    },
    {
      id: '4',
      title: '原辅材料供应商'
    },
    {
      id: '5',
      title: '木材拍卖行'
    },
    {
      id: '6',
      title: '机械设备商城'
    },
    {
      id: '7',
      title: '机械设备供应商'
    },
    {
      id: '8',
      title: '机械设备求购'
    }
  ];

}
