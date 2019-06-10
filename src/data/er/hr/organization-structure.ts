// 企业资源管理系统 - 组织管理 - 组织结构管理数据助手
export const DataHrOrganizationStructureHandler = {
  // 树形数据
  treeData: [

    {
      id: 1,
      pid: 0,
      name: "企业资源管理系统",
      key: 'QiYeZiYuanGuanLiXiTong'
    },
    {
      id: 2,
      pid: 1,
      name: "人力资源中心",
      key: 'RenLiZiYuanZhongXin',
    },
    {
      id: 3,
      pid: 1,
      name: "运营中心",
      key: 'YunYingZhongXin',
    },
    {
      id: 4,
      pid: 1,
      name: "销售中心",
      key: 'XiaoShouZhongXin',
    },
    {
      id: 5,
      pid: 1,
      name: "开发中心",
      key: 'KaiFaZhongXin',
    },
    {
      id: 51,
      pid: 5,
      name: "开发部",
      key: 'KaiFaBu',
    },
    {
      id: 52,
      pid: 5,
      name: "测试部",
      key: 'CeShiBu',
    },
    {
      id: 6,
      pid: 1,
      name: "生产中心",
      key: 'ShengChanZhongXin',
    }
  ],

  // 列表数据
  listData: {
    // 企业资源管理系统
    QiYeZiYuanGuanLiXiTong: [
      {
        YuanGongBianHao: '008',
        YuanGongXingMing: 'XXX',
        SuoShuBuMen: '开发部',
        GangWeiMingCheng: '总监',
        RuZhiShiJian: '2019-06-10',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1994-06-10',
        JiGuan: '汕头',
        HunYinZhuangKuang: '已婚',
        XingBie: '男',
        LianXiDianHua: '12345678910',
        LianXiDiZhi: '汕头龙湖',
        ShenFenZhengHaoMa: '123456789101112131',
        GeRenJianJie: '...'
      }
    ],
    // 人力资源中心
    RenLiZiYuanZhongXin: [
      {
        YuanGongBianHao: '007',
        YuanGongXingMing: 'XXX',
        SuoShuBuMen: '开发部',
        GangWeiMingCheng: '总监',
        RuZhiShiJian: '2019-06-10',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1994-06-10',
        JiGuan: '汕头',
        HunYinZhuangKuang: '已婚',
        XingBie: '男',
        LianXiDianHua: '12345678910',
        LianXiDiZhi: '汕头龙湖',
        ShenFenZhengHaoMa: '123456789101112131',
        GeRenJianJie: '...'
      },
    ],
    // 运营中心
    YunYingZhongXin: [
      {
        YuanGongBianHao: '006',
        YuanGongXingMing: 'XXX',
        SuoShuBuMen: '开发部',
        GangWeiMingCheng: '总监',
        RuZhiShiJian: '2019-06-10',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1994-06-10',
        JiGuan: '汕头',
        HunYinZhuangKuang: '已婚',
        XingBie: '男',
        LianXiDianHua: '12345678910',
        LianXiDiZhi: '汕头龙湖',
        ShenFenZhengHaoMa: '123456789101112131',
        GeRenJianJie: '...'
      },
    ],
    // 销售中心
    XiaoShouZhongXin: [
      {
        YuanGongBianHao: '005',
        YuanGongXingMing: 'XXX',
        SuoShuBuMen: '开发部',
        GangWeiMingCheng: '总监',
        RuZhiShiJian: '2019-06-10',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1994-06-10',
        JiGuan: '汕头',
        HunYinZhuangKuang: '已婚',
        XingBie: '男',
        LianXiDianHua: '12345678910',
        LianXiDiZhi: '汕头龙湖',
        ShenFenZhengHaoMa: '123456789101112131',
        GeRenJianJie: '...'
      },
    ],
    // 开发中心
    KaiFaZhongXin: [
      {
        YuanGongBianHao: '003',
        YuanGongXingMing: 'XXX',
        SuoShuBuMen: '开发部',
        GangWeiMingCheng: '总监',
        RuZhiShiJian: '2019-06-10',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1994-06-10',
        JiGuan: '汕头',
        HunYinZhuangKuang: '已婚',
        XingBie: '男',
        LianXiDianHua: '12345678910',
        LianXiDiZhi: '汕头龙湖',
        ShenFenZhengHaoMa: '123456789101112131',
        GeRenJianJie: '...'
      },
    ],
    // 开发中心 - 开发部
    KaiFaBu: [
      {
        YuanGongBianHao: '001',
        YuanGongXingMing: 'XXX',
        SuoShuBuMen: '开发部',
        GangWeiMingCheng: '总监',
        RuZhiShiJian: '2019-06-10',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1994-06-10',
        JiGuan: '汕头',
        HunYinZhuangKuang: '已婚',
        XingBie: '男',
        LianXiDianHua: '12345678910',
        LianXiDiZhi: '汕头龙湖',
        ShenFenZhengHaoMa: '123456789101112131',
        GeRenJianJie: '...'
      },
    ],
    // 开发中心 - 测试部
    CeShiBu: [
      {
        YuanGongBianHao: '002',
        YuanGongXingMing: 'XXX',
        SuoShuBuMen: '开发部',
        GangWeiMingCheng: '总监',
        RuZhiShiJian: '2019-06-10',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1994-06-10',
        JiGuan: '汕头',
        HunYinZhuangKuang: '已婚',
        XingBie: '男',
        LianXiDianHua: '12345678910',
        LianXiDiZhi: '汕头龙湖',
        ShenFenZhengHaoMa: '123456789101112131',
        GeRenJianJie: '...'
      },
    ],
    // 生产中心
    ShengChanZhongXin: [
      {
        YuanGongBianHao: '004',
        YuanGongXingMing: 'XXX',
        SuoShuBuMen: '开发部',
        GangWeiMingCheng: '总监',
        RuZhiShiJian: '2019-06-10',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1994-06-10',
        JiGuan: '汕头',
        HunYinZhuangKuang: '已婚',
        XingBie: '男',
        LianXiDianHua: '12345678910',
        LianXiDiZhi: '汕头龙湖',
        ShenFenZhengHaoMa: '123456789101112131',
        GeRenJianJie: '...'
      },
    ]
  }
}