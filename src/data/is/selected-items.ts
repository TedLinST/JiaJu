
// 综合服务 - 金融服务 - 选项目数据助手
export const DataSelectedItemsHandler = {
  // 条件选择区
  TYPE_FILTER: [
    {
      id: '1',
      title: '项目领域',
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
      title: '项目阶段',
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
      title: '经营地址',
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
      title: '资金需求',
      data: [
        {
          id: '1',
          label: '10万以下'
        },
        {
          id: '2',
          label: '10万-50万'
        },
        {
          id: '3',
          label: '50万-100万'
        },
        {
          id: '4',
          label: '100万以上'
        }
      ]
    },
  ],

  // 列表数据
  LIST_DATA: [

    {
      XiangMuMingCheng: '应用于变形家具的新兴五金件研发',
      XiangMuLingYu: '家具材料',
      XiangMuJieDuan: '初创期',
      ZiJinXingZhi: '不限',
      ZiJinLaiYuan: '国内',
      ZiJinXuQiu: '40万',
      JingYingDiZhi: '广东东莞',
      XiangMuShuoMing: '为解决本公司变形家具外采五金件难以达到实际使用要求，经常出现质量问题的情况，针对性研发耐久度较好的五金产品。',
      XiangMuFaQiJieGou_FaQiRen: '东莞市多维尚书家居有限公司',
      ShouCangShu: 53,
      GengXinRiQi: '2019-05-24',
      GongSiJieShao: '...',
      XiangMuGaiShu: '...',
      XiangMuYouShi: '...'
    },

    {
      XiangMuMingCheng: '长沙代理科美滋实木家具产品',
      XiangMuLingYu: '家具销售',
      XiangMuJieDuan: '初创期',
      ZiJinXingZhi: '个人',
      ZiJinLaiYuan: '国内',
      ZiJinXuQiu: '20万',
      JingYingDiZhi: '湖南长沙',
      XiangMuShuoMing: '本人计划在长沙代理马来西亚实木家具科美滋系列产品，有多年家具销售经验，寻合伙人。',
      XiangMuFaQiJieGou_FaQiRen: '张先生',
      ShouCangShu: 11,
      GengXinRiQi: '2019-05-24',
      GongSiJieShao: '...',
      XiangMuGaiShu: '...',
      XiangMuYouShi: '...'
    },
    {
      XiangMuMingCheng: '中型家具工厂扩大生产需要融资200万元',
      XiangMuLingYu: '家具生产',
      XiangMuJieDuan: '扩张期',
      ZiJinXingZhi: '不限',
      ZiJinLaiYuan: '不限',
      ZiJinXuQiu: '200万',
      JingYingDiZhi: '湖南益阳',
      XiangMuShuoMing: '本公司以竹材为主要原材料，目前已经研发出多种不同的竹集成材，主要应用于室内家具的生产，现进入量产阶段，需要进行融资。',
      XiangMuFaQiJieGou_FaQiRen: '湖南桃花江竹材股份有限公司',
      ShouCangShu: 25,
      GengXinRiQi: '2019-05-24',
      GongSiJieShao: '...',
      XiangMuGaiShu: '...',
      XiangMuYouShi: '...'
    },
    {
      XiangMuMingCheng: '家具卖场引流系统大规模应用',
      XiangMuLingYu: '家居互联网',
      XiangMuJieDuan: '成熟期',
      ZiJinXingZhi: '不限',
      ZiJinLaiYuan: 'VC',
      ZiJinXuQiu: '60万',
      JingYingDiZhi: '上海松江',
      XiangMuShuoMing: '本公司根据家具市场的实际需求研发了一套富有创造力的引流系统并在3家家居卖场已经试点成功，为支持产品的铺开需要进一步融资60万元。',
      XiangMuFaQiJieGou_FaQiRen: '上海贾宋科技开发有限公司',
      ShouCangShu: 15,
      GengXinRiQi: '2019-05-24',
      GongSiJieShao: '...',
      XiangMuGaiShu: '...',
      XiangMuYouShi: '...'
    }
  ]
}