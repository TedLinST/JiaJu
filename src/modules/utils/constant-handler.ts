import { KeyVerticalMenuEvent } from '../key/vertical-menu/vertical-menu.event';

export class ConstantHandler {

  // 学历等级
  public static CH_EDUCATIONAL_LEVEL = [
    { id: '小学', text: '小学' },
    { id: '初中', text: '初中' },
    { id: '中专', text: '中专' },
    { id: '高中', text: '高中' },
    { id: '大专', text: '大专' },
    { id: '本科', text: '本科' },
    { id: '硕士研究生', text: '硕士研究生' },
    { id: '博士研究生', text: '博士研究生' }
  ];

  // 款式分类
  public static CH_KuanShiFenLei = [
    { id: 1, text: '款式1' },
    { id: 2, text: '款式2' },
  ];

  // 颜色分类
  public static CH_YanSeFenLei = [
    { id: 1, text: '红色' },
    { id: 2, text: '橙色' },
    { id: 3, text: '黄色' },
    { id: 4, text: '绿色' },
    { id: 5, text: '青色' },
    { id: 6, text: '蓝色' },
    { id: 7, text: '紫色' },
  ];

  // 安装方式
  public static CH_AnZhuangFangShi = [
    { id: 1, text: '配送' },
    { id: 2, text: '自提' },
    { id: 3, text: '搬运' },
    { id: 4, text: '安装' },
    { id: 5, text: '延保' }
  ];

  // 产品设计开发服务 - 横幅图片
  public static CH_PD_BANNER_SRC = [
    'assets/imgs/product-design/toubu-1.jpg',
    'assets/imgs/equipment-mart/banner.jpg',
    'assets/imgs/material-supplier/top.jpg',
  ];

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
  public static CH_ME_MIN_MATERIAL_BANNER_SRC = [
    'assets/imgs/raw-material/top.jpg',
    'assets/imgs/equipment-mart/banner.jpg',
    'assets/imgs/material-supplier/top.jpg'
  ];

  // 原辅材料机械设备服务 - 材料横幅图片
  public static CH_ME_MATERIAL_BANNER_SRC = [
    'assets/imgs/material-supplier/top.jpg',
    'assets/imgs/equipment-mart/banner.jpg',
    'assets/imgs/product-design/toubu-1.jpg'
  ];

  // 原辅材料机械设备服务 - 设备横幅图片
  public static CH_ME_EQUIPMENT_BANNER_SRC = [
    'assets/imgs/equipment-mart/banner.jpg',
    'assets/imgs/material-supplier/top.jpg',
    'assets/imgs/product-design/toubu-1.jpg'
  ];

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

  // 校企合作服务 - 横幅图片
  public static CH_SEC_BANNER_SRC = [
    'assets/imgs/s-e-cooperation/banner.jpg',
    'assets/imgs/material-supplier/top.jpg',
    'assets/imgs/equipment-mart/banner.jpg'
  ];

  // 校企合作服务 - 横幅菜单
  public static CH_SEC_BANNER_MENU = [
    {
      id: '1',
      title: '学校项目'
    },
    {
      id: '2',
      title: '企业需求'
    },
    {
      id: '3',
      title: '校企资源'
    },
    {
      id: '4',
      title: '企业招聘'
    },
    {
      id: '5',
      title: '互动讲堂'
    },
    {
      id: '6',
      title: '校企新闻'
    },
    {
      id: '7',
      title: '有困难找专家'
    },
    {
      id: '8',
      title: '文件下载'
    }
  ];

  // 综合服务 - 横幅图片
  public static CH_IS_BANNER_SRC = [
    'assets/imgs/integrated-services/banner.jpg',
    'assets/imgs/furniture-delivery/banner.jpg',
    'assets/imgs/equipment-mart/banner.jpg'
  ];

  // 综合服务 - 家具送装 - 横幅图片
  public static CH_IS_BANNER_2_SRC = [
    'assets/imgs/furniture-delivery/banner.jpg',
    'assets/imgs/material-supplier/top.jpg',
    'assets/imgs/equipment-mart/banner.jpg'
  ];

  // 综合服务 - 横幅菜单
  public static CH_IS_BANNER_MENU = [
    {
      id: '1',
      title: '展会服务',
      subMenu: [
        {
          id: '1-1',
          title: '家具展会详细',
        },
        {
          id: '1-2',
          title: '预登记详细',
        },
        {
          id: '1-3',
          title: '申请参展详细',
        }
      ]
    },
    {
      id: '2',
      title: '政府服务',
      subMenu: [
        {
          id: '2-1',
          title: '家具国家标准',
        },
        {
          id: '2-3',
          title: '专利服务',
        },
        {
          id: '2-4',
          title: '税务服务',
        },
        {
          id: '2-5',
          title: '环保服务',
        },
        {
          id: '2-2',
          title: '工商服务',
        }
      ]
    },
    {
      id: '3',
      title: '金融服务',
      subMenu: [
        {
          id: '3-1',
          title: '找资金',
        },
        {
          id: '3-2',
          title: '选项目',
        },
        {
          id: '3-3',
          title: '线下融资活动',
        }/* ,
        {
          id: '3-4',
          title: '资金信息详细',
        },
        {
          id: '3-5',
          title: '项目信息详细',
        } */
      ]
    },
    {
      id: '4',
      title: '家具送装',
      subMenu: [
        {
          id: '4-1',
          title: '送装下单',
        },
        {
          id: '4-2',
          title: '服务介绍',
        },
        {
          id: '4-3',
          title: '师傅加入',
        },
        {
          id: '4-4',
          title: '商家开通',
        }
      ]
    }
  ];

  // 家具商城 - 横幅图片
  public static CH_FM_BANNER_SRC = [
    'assets/imgs/furniture-mall/banner.jpg',
    'assets/imgs/furniture-delivery/banner.jpg',
    'assets/imgs/material-supplier/top.jpg'
  ];

  // 家具商城 - 横幅图片2
  public static CH_FM_BANNER_SRC_2 = [
    'assets/imgs/shop-details/banner2.jpg',
    'assets/imgs/material-supplier/top.jpg',
    'assets/imgs/furniture-delivery/banner.jpg'
  ];

  // 家具商城 - 横幅菜单
  public static CH_FM_BANNER_MENU = [
    {
      id: '1',
      title: '众筹频道'
    },
    {
      id: '2',
      title: '品牌'
    },
    {
      id: '3',
      title: '团购'
    },
    {
      id: '4',
      title: '商品'
    },
    {
      id: '5',
      title: '商家店铺'
    },
    {
      id: '6',
      title: '购物车'
    }/* ,
    {
      id: '7',
      title: '结算'
    } */
  ];

}

