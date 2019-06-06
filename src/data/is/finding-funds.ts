
// 综合服务 - 金融服务 - 找资金数据助手
export const DataFindingFundsHandler = {
  // 条件选择区
  TYPE_FILTER: [
    {
      id: '1',
      title: '投资领域',
      data: [
        {
          id: '1',
          label: '家具材料'
        },
        {
          id: '2',
          label: '家具制造'
        },
        {
          id: '3',
          label: '家居营销'
        },
        {
          id: '4',
          label: '家居互联网'
        },
        {
          id: '5',
          label: '其他'
        }
      ]
    },
    {
      id: '2',
      title: '投资阶段',
      data: [
        {
          id: '1',
          label: '初创期'
        },
        {
          id: '2',
          label: '成熟期'
        },
        {
          id: '3',
          label: '扩张期'
        },
        {
          id: '4',
          label: 'PIPE'
        }
      ]
    },
    {
      id: '3',
      title: '资金性质',
      data: [
        {
          id: '1',
          label: 'VC'
        },
        {
          id: '2',
          label: 'PE'
        },
        {
          id: '3',
          label: '天使'
        },
        {
          id: '4',
          label: '个人'
        }
      ]
    },
    {
      id: '4',
      title: '资金来源',
      data: [
        {
          id: '1',
          label: '国内'
        },
        {
          id: '2',
          label: '外资'
        },
        {
          id: '3',
          label: '合资'
        }
      ]
    },
    {
      id: '5',
      title: '投资地区',
      data: [
        {
          id: '1',
          label: '广东'
        },
        {
          id: '2',
          label: '湖南'
        },
        {
          id: '3',
          label: '上海'
        },
        {
          id: '4',
          label: '黑龙江'
        }
      ]
    },
    {
      id: '6',
      title: '投资规模',
      data: [
        {
          id: '1',
          label: '100万以下'
        },
        {
          id: '2',
          label: '100万-500万'
        },
        {
          id: '3',
          label: '500万-1000万'
        },
        {
          id: '4',
          label: '1000万以上'
        }
      ]
    },
  ],

  // 列表数据
  LIST_DATA: [
    {
      XiangMuBiaoTi: '个人资金100万寻智能家居投资项目',
      ZiJinGuiMo: '100万',
      TouZiLingYu: '智能家居',
      TouZiJieDuan: '初创期、成熟期',
      ZiJinXingZhi: '个人',
      ZiJinLaiYuan: '国内',
      TouZiJiGou_GeRenMingCheng: '王先生',
      FaBuShiJian: '2019-03-22',
      TouDiShu: 5,
      ShouCangShu: 18,
      YiTouZiXiangMu: 1,
      YaoQiuGaiShu: '...',
      TouZiAnLie: '...',
      QiTaBeiZhu: '...'
    },
    {
      XiangMuBiaoTi: '金沙江创投寻家居新零售项目',
      ZiJinGuiMo: '1000万',
      TouZiLingYu: '家居营销、家居互联网',
      TouZiJieDuan: '初创期、成熟期',
      ZiJinXingZhi: '天使',
      ZiJinLaiYuan: '国内',
      TouZiJiGou_GeRenMingCheng: '金沙江创业投资基金',
      FaBuShiJian: '2019-05-04',
      TouDiShu: 28,
      ShouCangShu: 152,
      YiTouZiXiangMu: 22,
      YaoQiuGaiShu: '我们致力于寻找和投资有潜力的初创期的企业和企业家，为初创期和成长期的创业团队提供股权投资、技术支持、团队构建、市场开拓、战略规划等全方位的帮助。我们主要针对高新技术行业进行投资，关注的领域有移动互联网、IT服务、医疗健康、新材料、旅游等。我们专注于天使期、早期的创业投资，每笔投资以50万-200万人民币为主。　如果您的团队对自己的创意和构想充满信心，如果您正在寻求独具慧眼的投资人，如果您需要一定规模、经验丰富的企业支持，欢迎您与我们联系！',
      TouZiAnLie: '...',
      QiTaBeiZhu: '...'
    },
    {
      XiangMuBiaoTi: '红杉资本寻国内创业型家具材料研发团队',
      ZiJinGuiMo: '20000万',
      TouZiLingYu: '家具材料、家具制造',
      TouZiJieDuan: '初创期、成熟期、扩张期',
      ZiJinXingZhi: 'VC',
      ZiJinLaiYuan: '外资',
      TouZiJiGou_GeRenMingCheng: '红杉资本中国基金',
      FaBuShiJian: '2019-01-05',
      TouDiShu: 18,
      ShouCangShu: 233,
      YiTouZiXiangMu: 652,
      YaoQiuGaiShu: '...',
      TouZiAnLie: '...',
      QiTaBeiZhu: '...'
    },
    {
      XiangMuBiaoTi: '个人资金寻求家具经销商合作伙伴',
      ZiJinGuiMo: '50万',
      TouZiLingYu: '家具销售',
      TouZiJieDuan: '初创期',
      ZiJinXingZhi: '个人',
      ZiJinLaiYuan: '国内',
      TouZiJiGou_GeRenMingCheng: '李女士',
      FaBuShiJian: '2019-06-02',
      TouDiShu: 0,
      ShouCangShu: 5,
      YiTouZiXiangMu: 0,
      YaoQiuGaiShu: '...',
      TouZiAnLie: '...',
      QiTaBeiZhu: '...'
    }
  ]
}