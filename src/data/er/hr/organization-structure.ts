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
        YuanGongXingMing: '常凯申',
        SuoShuBuMen: '开发部',
        GangWeiMingCheng: '职员',
        RuZhiShiJian: '2009-02-13',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1994-06-14',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '男',
        LianXiDianHua: '13545678933',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '443456789101113322',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '002',
        YuanGongXingMing: '李婷婷',
        SuoShuBuMen: '开发部',
        GangWeiMingCheng: '职员',
        RuZhiShiJian: '2011-02-14',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1984-11-20',
        JiGuan: '长沙',
        HunYinZhuangKuang: '未婚',
        XingBie: '女',
        LianXiDianHua: '13345678955',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '443456789101115566',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '003',
        YuanGongXingMing: '陈燕燕',
        SuoShuBuMen: '开发部',
        GangWeiMingCheng: '职员',
        RuZhiShiJian: '2014-03-22',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1991-03-14',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '女',
        LianXiDianHua: '13345675151',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '443456789101112131',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '004',
        YuanGongXingMing: '王烨芸',
        SuoShuBuMen: '开发部',
        GangWeiMingCheng: '职员',
        RuZhiShiJian: '2019-03-13',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1994-04-16',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '女',
        LianXiDianHua: '13845676611',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '453456789101112345',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '005',
        YuanGongXingMing: '孙宏伟',
        SuoShuBuMen: '开发部',
        GangWeiMingCheng: '总监',
        RuZhiShiJian: '2019-07-18',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1984-11-18',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '男',
        LianXiDianHua: '13845678899',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '453456789101112233',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '006',
        YuanGongXingMing: '徐一鸣',
        SuoShuBuMen: '开发部',
        GangWeiMingCheng: '职员',
        RuZhiShiJian: '2013-03-21',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1991-03-12',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '男',
        LianXiDianHua: '13445678121',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '413456789101112245',
        GeRenJianJie: '...'
      }
    ],
    // 人力资源中心
    RenLiZiYuanZhongXin: [
      {
        YuanGongBianHao: '007',
        YuanGongXingMing: '田一德',
        SuoShuBuMen: '行政部',
        GangWeiMingCheng: '总监',
        RuZhiShiJian: '2019-02-12',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1994-04-12',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '男',
        LianXiDianHua: '13345678988',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '413456789101112131',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '002',
        YuanGongXingMing: '李婷婷',
        SuoShuBuMen: '行政部',
        GangWeiMingCheng: '职员',
        RuZhiShiJian: '2011-02-14',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1984-11-20',
        JiGuan: '长沙',
        HunYinZhuangKuang: '未婚',
        XingBie: '女',
        LianXiDianHua: '13345678955',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '423456789101115566',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '003',
        YuanGongXingMing: '陈燕燕',
        SuoShuBuMen: '行政部',
        GangWeiMingCheng: '职员',
        RuZhiShiJian: '2014-03-22',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1991-03-14',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '女',
        LianXiDianHua: '13345675151',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '443456789101112131',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '004',
        YuanGongXingMing: '王烨芸',
        SuoShuBuMen: '行政部',
        GangWeiMingCheng: '职员',
        RuZhiShiJian: '2019-03-13',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1994-04-16',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '女',
        LianXiDianHua: '13845676611',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '433456789101112345',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '006',
        YuanGongXingMing: '徐一鸣',
        SuoShuBuMen: '行政部',
        GangWeiMingCheng: '职员',
        RuZhiShiJian: '2013-03-21',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1991-03-12',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '男',
        LianXiDianHua: '13445678121',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '413456789101112245',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '008',
        YuanGongXingMing: '常凯申',
        SuoShuBuMen: '行政部',
        GangWeiMingCheng: '职员',
        RuZhiShiJian: '2009-02-13',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1994-06-14',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '男',
        LianXiDianHua: '13545678933',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '423456789101113322',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '005',
        YuanGongXingMing: '孙宏伟',
        SuoShuBuMen: '行政部',
        GangWeiMingCheng: '总监',
        RuZhiShiJian: '2019-07-18',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1984-11-18',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '男',
        LianXiDianHua: '13845678899',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '433456789101112233',
        GeRenJianJie: '...'
      }
    ],
    // 运营中心
    YunYingZhongXin: [
      {
        YuanGongBianHao: '006',
        YuanGongXingMing: '王明涛',
        SuoShuBuMen: '运营部',
        GangWeiMingCheng: '总监',
        RuZhiShiJian: '2019-03-12',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1994-01-15',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '男',
        LianXiDianHua: '13345678911',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '433456789101112132',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '002',
        YuanGongXingMing: '李婷婷',
        SuoShuBuMen: '运营部',
        GangWeiMingCheng: '职员',
        RuZhiShiJian: '2011-02-14',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1984-11-20',
        JiGuan: '长沙',
        HunYinZhuangKuang: '未婚',
        XingBie: '女',
        LianXiDianHua: '13345678955',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '423456789101115566',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '006',
        YuanGongXingMing: '徐一鸣',
        SuoShuBuMen: '运营部',
        GangWeiMingCheng: '职员',
        RuZhiShiJian: '2013-03-21',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1991-03-12',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '男',
        LianXiDianHua: '13445678121',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '413456789101112245',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '008',
        YuanGongXingMing: '常凯申',
        SuoShuBuMen: '运营部',
        GangWeiMingCheng: '职员',
        RuZhiShiJian: '2009-02-13',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1994-06-14',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '男',
        LianXiDianHua: '13545678933',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '423456789101113322',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '003',
        YuanGongXingMing: '陈燕燕',
        SuoShuBuMen: '运营部',
        GangWeiMingCheng: '职员',
        RuZhiShiJian: '2014-03-22',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1991-03-14',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '女',
        LianXiDianHua: '13345675151',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '443456789101112131',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '004',
        YuanGongXingMing: '王烨芸',
        SuoShuBuMen: '运营部',
        GangWeiMingCheng: '职员',
        RuZhiShiJian: '2019-03-13',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1994-04-16',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '女',
        LianXiDianHua: '13845676611',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '433456789101112345',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '005',
        YuanGongXingMing: '孙宏伟',
        SuoShuBuMen: '运营部',
        GangWeiMingCheng: '总监',
        RuZhiShiJian: '2019-07-18',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1984-11-18',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '男',
        LianXiDianHua: '13845678899',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '433456789101112233',
        GeRenJianJie: '...'
      }
    ],
    // 销售中心
    XiaoShouZhongXin: [
      {
        YuanGongBianHao: '004',
        YuanGongXingMing: '王烨芸',
        SuoShuBuMen: '市场部',
        GangWeiMingCheng: '职员',
        RuZhiShiJian: '2019-03-13',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1994-04-16',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '女',
        LianXiDianHua: '13845676611',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '433456789101112345',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '003',
        YuanGongXingMing: '陈燕燕',
        SuoShuBuMen: '市场部',
        GangWeiMingCheng: '职员',
        RuZhiShiJian: '2014-03-22',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1991-03-14',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '女',
        LianXiDianHua: '13345675151',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '443456789101112131',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '006',
        YuanGongXingMing: '王明涛',
        SuoShuBuMen: '市场部',
        GangWeiMingCheng: '总监',
        RuZhiShiJian: '2019-03-12',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1994-01-15',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '男',
        LianXiDianHua: '13345678911',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '433456789101112132',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '002',
        YuanGongXingMing: '李婷婷',
        SuoShuBuMen: '市场部',
        GangWeiMingCheng: '职员',
        RuZhiShiJian: '2011-02-14',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1984-11-20',
        JiGuan: '长沙',
        HunYinZhuangKuang: '未婚',
        XingBie: '女',
        LianXiDianHua: '13345678955',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '423456789101115566',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '008',
        YuanGongXingMing: '常凯申',
        SuoShuBuMen: '市场部',
        GangWeiMingCheng: '职员',
        RuZhiShiJian: '2009-02-13',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1994-06-14',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '男',
        LianXiDianHua: '13545678933',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '423456789101113322',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '005',
        YuanGongXingMing: '李雨桐',
        SuoShuBuMen: '市场部',
        GangWeiMingCheng: '总监',
        RuZhiShiJian: '2019-06-10',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1994-06-10',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '男',
        LianXiDianHua: '12345678910',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '123456789101112131',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '006',
        YuanGongXingMing: '徐一鸣',
        SuoShuBuMen: '市场部',
        GangWeiMingCheng: '职员',
        RuZhiShiJian: '2013-03-21',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1991-03-12',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '男',
        LianXiDianHua: '13445678121',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '413456789101112245',
        GeRenJianJie: '...'
      },
    ],
    // 开发中心
    KaiFaZhongXin: [
      {
        YuanGongBianHao: '003',
        YuanGongXingMing: '潘威廉',
        SuoShuBuMen: '开发部',
        GangWeiMingCheng: '总监',
        RuZhiShiJian: '2013-03-13',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1992-02-12',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '男',
        LianXiDianHua: '13345678922',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '443456789101112122',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '003',
        YuanGongXingMing: '陈燕燕',
        SuoShuBuMen: '开发部',
        GangWeiMingCheng: '职员',
        RuZhiShiJian: '2014-03-22',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1991-03-14',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '女',
        LianXiDianHua: '13345675151',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '443456789101112131',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '008',
        YuanGongXingMing: '常凯申',
        SuoShuBuMen: '开发部',
        GangWeiMingCheng: '职员',
        RuZhiShiJian: '2009-02-13',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1994-06-14',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '男',
        LianXiDianHua: '13545678933',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '443456789101113322',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '002',
        YuanGongXingMing: '李婷婷',
        SuoShuBuMen: '开发部',
        GangWeiMingCheng: '职员',
        RuZhiShiJian: '2011-02-14',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1984-11-20',
        JiGuan: '长沙',
        HunYinZhuangKuang: '未婚',
        XingBie: '女',
        LianXiDianHua: '13345678955',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '443456789101115566',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '006',
        YuanGongXingMing: '徐一鸣',
        SuoShuBuMen: '开发部',
        GangWeiMingCheng: '职员',
        RuZhiShiJian: '2013-03-21',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1991-03-12',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '男',
        LianXiDianHua: '13445678121',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '413456789101112245',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '004',
        YuanGongXingMing: '王烨芸',
        SuoShuBuMen: '开发部',
        GangWeiMingCheng: '职员',
        RuZhiShiJian: '2019-03-13',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1994-04-16',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '女',
        LianXiDianHua: '13845676611',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '453456789101112345',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '005',
        YuanGongXingMing: '孙宏伟',
        SuoShuBuMen: '开发部',
        GangWeiMingCheng: '总监',
        RuZhiShiJian: '2019-07-18',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1984-11-18',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '男',
        LianXiDianHua: '13845678899',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '453456789101112233',
        GeRenJianJie: '...'
      }
    ],
    // 开发中心 - 开发部
    KaiFaBu: [
      {
        YuanGongBianHao: '001',
        YuanGongXingMing: '王明明',
        SuoShuBuMen: '开发部',
        GangWeiMingCheng: '总监',
        RuZhiShiJian: '2014-04-14',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1990-02-14',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '男',
        LianXiDianHua: '13345678910',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '433456789101112433',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '004',
        YuanGongXingMing: '王烨芸',
        SuoShuBuMen: '开发部',
        GangWeiMingCheng: '职员',
        RuZhiShiJian: '2019-03-13',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1994-04-16',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '女',
        LianXiDianHua: '13845676611',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '453456789101112345',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '002',
        YuanGongXingMing: '李婷婷',
        SuoShuBuMen: '开发部',
        GangWeiMingCheng: '职员',
        RuZhiShiJian: '2011-02-14',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1984-11-20',
        JiGuan: '长沙',
        HunYinZhuangKuang: '未婚',
        XingBie: '女',
        LianXiDianHua: '13345678955',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '443456789101115566',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '003',
        YuanGongXingMing: '陈燕燕',
        SuoShuBuMen: '开发部',
        GangWeiMingCheng: '职员',
        RuZhiShiJian: '2014-03-22',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1991-03-14',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '女',
        LianXiDianHua: '13345675151',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '443456789101112131',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '005',
        YuanGongXingMing: '孙宏伟',
        SuoShuBuMen: '开发部',
        GangWeiMingCheng: '总监',
        RuZhiShiJian: '2019-07-18',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1984-11-18',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '男',
        LianXiDianHua: '13845678899',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '453456789101112233',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '008',
        YuanGongXingMing: '常凯申',
        SuoShuBuMen: '开发部',
        GangWeiMingCheng: '职员',
        RuZhiShiJian: '2009-02-13',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1994-06-14',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '男',
        LianXiDianHua: '13545678933',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '443456789101113322',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '006',
        YuanGongXingMing: '徐一鸣',
        SuoShuBuMen: '开发部',
        GangWeiMingCheng: '职员',
        RuZhiShiJian: '2013-03-21',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1991-03-12',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '男',
        LianXiDianHua: '13445678121',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '413456789101112245',
        GeRenJianJie: '...'
      }
    ],
    // 开发中心 - 测试部
    CeShiBu: [
      {
        YuanGongBianHao: '002',
        YuanGongXingMing: '任天野',
        SuoShuBuMen: '开发部',
        GangWeiMingCheng: '总监',
        RuZhiShiJian: '2015-05-15',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1994-05-12',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '男',
        LianXiDianHua: '13345678910',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '433456789101112155',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '008',
        YuanGongXingMing: '常凯申',
        SuoShuBuMen: '开发部',
        GangWeiMingCheng: '职员',
        RuZhiShiJian: '2009-02-13',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1994-06-14',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '男',
        LianXiDianHua: '13545678933',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '443456789101113322',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '005',
        YuanGongXingMing: '孙宏伟',
        SuoShuBuMen: '开发部',
        GangWeiMingCheng: '总监',
        RuZhiShiJian: '2019-07-18',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1984-11-18',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '男',
        LianXiDianHua: '13845678899',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '453456789101112233',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '003',
        YuanGongXingMing: '陈燕燕',
        SuoShuBuMen: '开发部',
        GangWeiMingCheng: '职员',
        RuZhiShiJian: '2014-03-22',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1991-03-14',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '女',
        LianXiDianHua: '13345675151',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '443456789101112131',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '004',
        YuanGongXingMing: '王烨芸',
        SuoShuBuMen: '开发部',
        GangWeiMingCheng: '职员',
        RuZhiShiJian: '2019-03-13',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1994-04-16',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '女',
        LianXiDianHua: '13845676611',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '453456789101112345',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '002',
        YuanGongXingMing: '李婷婷',
        SuoShuBuMen: '开发部',
        GangWeiMingCheng: '职员',
        RuZhiShiJian: '2011-02-14',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1984-11-20',
        JiGuan: '长沙',
        HunYinZhuangKuang: '未婚',
        XingBie: '女',
        LianXiDianHua: '13345678955',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '443456789101115566',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '006',
        YuanGongXingMing: '徐一鸣',
        SuoShuBuMen: '开发部',
        GangWeiMingCheng: '职员',
        RuZhiShiJian: '2013-03-21',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1991-03-12',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '男',
        LianXiDianHua: '13445678121',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '413456789101112245',
        GeRenJianJie: '...'
      }
    ],
    // 生产中心
    ShengChanZhongXin: [
      {
        YuanGongBianHao: '004',
        YuanGongXingMing: '柯文哲',
        SuoShuBuMen: '生产部',
        GangWeiMingCheng: '总监',
        RuZhiShiJian: '2013-01-13',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1990-02-15',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '男',
        LianXiDianHua: '13345678910',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '413456789101112233',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '003',
        YuanGongXingMing: '陈燕燕',
        SuoShuBuMen: '生产部',
        GangWeiMingCheng: '职员',
        RuZhiShiJian: '2014-03-22',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1991-03-14',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '女',
        LianXiDianHua: '13345675151',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '443456789101112131',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '008',
        YuanGongXingMing: '常凯申',
        SuoShuBuMen: '生产部',
        GangWeiMingCheng: '职员',
        RuZhiShiJian: '2009-02-13',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1994-06-14',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '男',
        LianXiDianHua: '13545678933',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '443456789101113322',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '002',
        YuanGongXingMing: '李婷婷',
        SuoShuBuMen: '生产部',
        GangWeiMingCheng: '职员',
        RuZhiShiJian: '2011-02-14',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1984-11-20',
        JiGuan: '长沙',
        HunYinZhuangKuang: '未婚',
        XingBie: '女',
        LianXiDianHua: '13345678955',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '443456789101115566',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '005',
        YuanGongXingMing: '孙宏伟',
        SuoShuBuMen: '生产部',
        GangWeiMingCheng: '总监',
        RuZhiShiJian: '2019-07-18',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1984-11-18',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '男',
        LianXiDianHua: '13845678899',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '453456789101112233',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '004',
        YuanGongXingMing: '王烨芸',
        SuoShuBuMen: '生产部',
        GangWeiMingCheng: '职员',
        RuZhiShiJian: '2019-03-13',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1994-04-16',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '女',
        LianXiDianHua: '13845676611',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '453456789101112345',
        GeRenJianJie: '...'
      },
      {
        YuanGongBianHao: '006',
        YuanGongXingMing: '徐一鸣',
        SuoShuBuMen: '生产部',
        GangWeiMingCheng: '职员',
        RuZhiShiJian: '2013-03-21',
        ZaiZhiZhuangTai: '在职',
        ChuShengNianYue: '1991-03-12',
        JiGuan: '长沙',
        HunYinZhuangKuang: '已婚',
        XingBie: '男',
        LianXiDianHua: '13445678121',
        LianXiDiZhi: '湖南长沙',
        ShenFenZhengHaoMa: '413456789101112245',
        GeRenJianJie: '...'
      }
    ]
  }
}