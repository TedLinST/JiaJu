
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
          id:'4',
          label:'家居互联网'
        },
        {
          id:'5',
          label:'其他'
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

  /**
   * 资金列表格式
   * 标题：
   * 资金规模：          投资领域：         投资阶段：
   * 资金性质：          资金来源：         投资机构/个人名称：
   * 发布时间：
   * 投递数：            收藏数：           已投资项目：
   * 
   * 收藏按键
   * 投递项目按键
   */
  // 列表数据
  LIST_DATA: [
    {
      XiangMuBiaoTi: '个人资金100万寻智能家居投资项目',
      TouZiZiJin: '100万',
      TouZiFangShi: '股权投资',
      ZiJinLeiXing: '个人',
      TouZiDiQu: '汕头',
      TouZiHangYe: '智能家居',
      TouZiLeiXing: '合资',
      TouZiJieDuan: '初创期、成熟期',
      FengKongYaoQiu: '...',
      ZuiDiHuiBaoYaoQiu: '...',
      LianXiRen: '...',
      DanWeiMingCheng: '王先生',
      LiuYanShu: '100',
      TouDiShu: '5',
      GengXinRiQi: '2019-03-22',
      YaoQiuGaiShu:'...',
      TouZiAnLie:'...',
      QiTaBeiZhu:'...',
    },
    {
      XiangMuBiaoTi: '金沙江创投寻家居新零售项目',
      TouZiZiJin: '1000万',
      TouZiFangShi: '股权投资',
      ZiJinLeiXing: '天使',
      TouZiDiQu: '汕头',
      TouZiHangYe: '家居营销、家居互联网',
      TouZiLeiXing: '国内',
      TouZiJieDuan: '初创期、成熟期',
      FengKongYaoQiu: '...',
      ZuiDiHuiBaoYaoQiu: '...',
      LianXiRen: '...',
      DanWeiMingCheng: '金沙江创业投资基金',
      LiuYanShu: '100',
      TouDiShu: '28',
      GengXinRiQi: '2019-05-04',
      YaoQiuGaiShu:'...',
      TouZiAnLie:'...',
      QiTaBeiZhu:'...',
    },
    {
      XiangMuBiaoTi: '红杉资本寻国内创业型家具材料研发团队',
      TouZiZiJin: '20000万',
      TouZiFangShi: '股权投资',
      ZiJinLeiXing: 'VC',
      TouZiDiQu: '汕头',
      TouZiHangYe: '家具材料、家具制造',
      TouZiLeiXing: '外资',
      TouZiJieDuan: '初创期、成熟期、扩张期',
      FengKongYaoQiu: '...',
      ZuiDiHuiBaoYaoQiu: '...',
      LianXiRen: '...',
      DanWeiMingCheng: '红杉资本中国基金',
      LiuYanShu: '100',
      TouDiShu: '18',
      GengXinRiQi: '2019-01-05',
      YaoQiuGaiShu:'...',
      TouZiAnLie:'...',
      QiTaBeiZhu:'...',
    },
    {
      XiangMuBiaoTi: '个人资金寻求家具经销商合作伙伴',
      TouZiZiJin: '50万',
      TouZiFangShi: '股权投资',
      ZiJinLeiXing: '个人',
      TouZiDiQu: '汕头',
      TouZiHangYe: '家具销售',
      TouZiLeiXing: '国内',
      TouZiJieDuan: '初创期',
      FengKongYaoQiu: '...',
      ZuiDiHuiBaoYaoQiu: '...',
      LianXiRen: '...',
      DanWeiMingCheng: '李女士',
      LiuYanShu: '100',
      TouDiShu: '5',
      GengXinRiQi: '2019-06-02',
      YaoQiuGaiShu:'...',
      TouZiAnLie:'...',
      QiTaBeiZhu:'...',
    }
  ]
}