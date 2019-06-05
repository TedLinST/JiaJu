
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
          label: '条件2.1'
        },
        {
          id: '2',
          label: '条件2.2'
        },
        {
          id: '3',
          label: '条件2.3'
        },
        {
          id: '4',
          label: '条件2.4'
        }
      ]
    },
    {
      id: '6',
      title: '投资规模',
      data: [
        {
          id: '1',
          label: '条件2.1'
        },
        {
          id: '2',
          label: '条件2.2'
        },
        {
          id: '3',
          label: '条件2.3'
        },
        {
          id: '4',
          label: '条件2.4'
        }
      ]
    },
  ],

  // 列表数据
  LIST_DATA: [
    {
      XiangMuBiaoTi: '个人资金100万寻智能家居投资项目',
      TouZiZiJin: '100万',
      TouZiFangShi: '股权投资',
      ZiJinLeiXing: '个人',
      TouZiDiQu: '汕头',
      TouZiHangYe: '智能家居',
      TouZiLeiXing: '参股合作',
      TouZiJieDuan: '初创期、成熟期',
      FengKongYaoQiu: '...',
      ZuiDiHuiBaoYaoQiu: '...',
      LianXiRen: '...',
      DanWeiMingCheng: '...',
      LiuYanShu: '100',
      TouDiShu: '5',
      GengXinRiQi: '2019-05-24',
      YaoQiuGaiShu:'...',
      TouZiAnLie:'...',
      QiTaBeiZhu:'...',
    },
    {
      XiangMuBiaoTi: 'XXXX项目200万元',
      TouZiZiJin: '200万',
      TouZiFangShi: '股权投资',
      ZiJinLeiXing: '个人资金',
      TouZiDiQu: '汕头',
      TouZiHangYe: '人工智能',
      TouZiLeiXing: '参股合作',
      TouZiJieDuan: '种子期',
      FengKongYaoQiu: '...',
      ZuiDiHuiBaoYaoQiu: '...',
      LianXiRen: '...',
      DanWeiMingCheng: '...',
      LiuYanShu: '100',
      TouDiShu: '10',
      GengXinRiQi: '2019-05-24',
      YaoQiuGaiShu:'...',
      TouZiAnLie:'...',
      QiTaBeiZhu:'...',
    },
    {
      XiangMuBiaoTi: 'XXXX项目300万元',
      TouZiZiJin: '300万',
      TouZiFangShi: '股权投资',
      ZiJinLeiXing: '个人资金',
      TouZiDiQu: '汕头',
      TouZiHangYe: '人工智能',
      TouZiLeiXing: '参股合作',
      TouZiJieDuan: '种子期',
      FengKongYaoQiu: '...',
      ZuiDiHuiBaoYaoQiu: '...',
      LianXiRen: '...',
      DanWeiMingCheng: '...',
      LiuYanShu: '100',
      TouDiShu: '10',
      GengXinRiQi: '2019-05-24',
      YaoQiuGaiShu:'...',
      TouZiAnLie:'...',
      QiTaBeiZhu:'...',
    },
    {
      XiangMuBiaoTi: 'XXXX项目400万元',
      TouZiZiJin: '400万',
      TouZiFangShi: '股权投资',
      ZiJinLeiXing: '个人资金',
      TouZiDiQu: '汕头',
      TouZiHangYe: '人工智能',
      TouZiLeiXing: '参股合作',
      TouZiJieDuan: '种子期',
      FengKongYaoQiu: '...',
      ZuiDiHuiBaoYaoQiu: '...',
      LianXiRen: '...',
      DanWeiMingCheng: '...',
      LiuYanShu: '100',
      TouDiShu: '10',
      GengXinRiQi: '2019-05-24',
      YaoQiuGaiShu:'...',
      TouZiAnLie:'...',
      QiTaBeiZhu:'...',
    },
    {
      XiangMuBiaoTi: 'XXXX项目500万元',
      TouZiZiJin: '500万',
      TouZiFangShi: '股权投资',
      ZiJinLeiXing: '个人资金',
      TouZiDiQu: '汕头',
      TouZiHangYe: '人工智能',
      TouZiLeiXing: '参股合作',
      TouZiJieDuan: '种子期',
      FengKongYaoQiu: '...',
      ZuiDiHuiBaoYaoQiu: '...',
      LianXiRen: '...',
      DanWeiMingCheng: '...',
      LiuYanShu: '100',
      TouDiShu: '10',
      GengXinRiQi: '2019-05-24',
      YaoQiuGaiShu:'...',
      TouZiAnLie:'...',
      QiTaBeiZhu:'...',
    },
    {
      XiangMuBiaoTi: 'XXXX项目200万元',
      TouZiZiJin: '200万',
      TouZiFangShi: '股权投资',
      ZiJinLeiXing: '个人资金',
      TouZiDiQu: '汕头',
      TouZiHangYe: '人工智能',
      TouZiLeiXing: '参股合作',
      TouZiJieDuan: '种子期',
      FengKongYaoQiu: '...',
      ZuiDiHuiBaoYaoQiu: '...',
      LianXiRen: '...',
      DanWeiMingCheng: '...',
      LiuYanShu: '100',
      TouDiShu: '10',
      GengXinRiQi: '2019-05-24',
      YaoQiuGaiShu:'...',
      TouZiAnLie:'...',
      QiTaBeiZhu:'...',
    },
    {
      XiangMuBiaoTi: 'XXXX项目200万元',
      TouZiZiJin: '200万',
      TouZiFangShi: '股权投资',
      ZiJinLeiXing: '个人资金',
      TouZiDiQu: '汕头',
      TouZiHangYe: '人工智能',
      TouZiLeiXing: '参股合作',
      TouZiJieDuan: '种子期',
      FengKongYaoQiu: '...',
      ZuiDiHuiBaoYaoQiu: '...',
      LianXiRen: '...',
      DanWeiMingCheng: '...',
      LiuYanShu: '100',
      TouDiShu: '10',
      GengXinRiQi: '2019-05-24',
      YaoQiuGaiShu:'...',
      TouZiAnLie:'...',
      QiTaBeiZhu:'...',
    },
    {
      XiangMuBiaoTi: 'XXXX项目200万元',
      TouZiZiJin: '200万',
      TouZiFangShi: '股权投资',
      ZiJinLeiXing: '个人资金',
      TouZiDiQu: '汕头',
      TouZiHangYe: '人工智能',
      TouZiLeiXing: '参股合作',
      TouZiJieDuan: '种子期',
      FengKongYaoQiu: '...',
      ZuiDiHuiBaoYaoQiu: '...',
      LianXiRen: '...',
      DanWeiMingCheng: '...',
      LiuYanShu: '100',
      TouDiShu: '10',
      GengXinRiQi: '2019-05-24',
      YaoQiuGaiShu:'...',
      TouZiAnLie:'...',
      QiTaBeiZhu:'...',
    }
  ]
}