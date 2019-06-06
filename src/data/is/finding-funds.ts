
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
      LiuLanShu: 50,
      YaoQiuGaiShu: '&emsp;&emsp;本人有个人资金100万元，主要投资人工智能，机器人，智能设备，高端设备制造，高科技等项目，投资地区主要是广东地区，投资阶段不限，投资方式：股权，无前期费用，希望有意向者与我联系。',
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
      LiuLanShu: 658,
      YaoQiuGaiShu: '&emsp;&emsp;我们致力于寻找和投资有潜力的初创期的企业和企业家，为初创期和成长期的创业团队提供股权投资、技术支持、团队构建、市场开拓、战略规划等全方位的帮助。<br>&emsp;&emsp;我们主要针对高新技术行业进行投资，关注的领域有移动互联网、IT服务、医疗健康、新材料、旅游等。我们专注于天使期、早期的创业投资，每笔投资以50万-200万人民币为主。<br>&emsp;&emsp;如果您的团队对自己的创意和构想充满信心，如果您正在寻求独具慧眼的投资人，如果您需要一定规模、经验丰富的企业支持，欢迎您与我们联系！',
      TouZiAnLie: '<img src="assets/imgs/fund-information/touzianli-2.jpg">',
      QiTaBeiZhu: '资金介绍:<br>&emsp;&emsp;金沙江创业投资基金专注于投资高新技术初创企业。<br>&emsp;&emsp;我们力求发掘最杰出的创业者，共同成就伟大且具有颠覆性的高科技企业。我们致力于寻找具有优秀的团队、庞大的市场机会、核心的自主知识产权和技术，并能成为行业巨头的投资项目。<br>&emsp;&emsp;我们是滴滴出行、饿了么、映客直播、ofo共享单车、 去哪儿、上海大智慧和小红书等优秀创业公司最早期的机构投资者。我们深度参与并见证了他们迈向独角兽的每一步。未来，我们愿与更多优秀的创业者携手，用我们丰富的行业知识和资源，合力打造世界级的高科技企业。<br>&emsp;&emsp;金沙江创业投资基金目前管理着约20亿美元的资产，包括美元和人民币基金。我们在硅谷、北京和新加坡均设立了办事处。'
      
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
      LiuLanShu: 985,
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
      LiuLanShu: 20,
      YaoQiuGaiShu: '&emsp;&emsp;个人自有资金50万元，主要想找家具经销商合作伙伴。以股权的方式，无任何前期费用，有意者请跟我联系。',
      TouZiAnLie: '...',
      QiTaBeiZhu: ''
    }
  ]
}