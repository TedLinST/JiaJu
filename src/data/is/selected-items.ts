
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
          label: ''
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

  /**
   * 列表格式
   * 项目名称：
   * 项目领域：                           项目阶段：
   * 资金性质：                           资金来源：
   * 资金需求：                           经营地址：
   * 项目说明：
   * 项目发起机构/发起人：                  收藏数：
   * 
   * */
  // 列表数据
  LIST_DATA: [
    {
      XiangMuBiaoTi: '应用于变形家具的新兴五金件研发',
      RongZiZiJin: '40万',
      SuoZaiDiQu: '广东东莞',
      SuoShuHangYe: '家具材料',
      RongZiFangShi: '股权融资',
      LianXiRen: '...',
      DanWeiMingCheng: '...',
      LiuYanShu: '100',
      GengXinRiQi: '2019-05-24',
      GongSiJieShao: '...',
      XiangMuGaiShu: '...',
      XiangMuYouShi: '...',
    },
    {
      XiangMuBiaoTi: '长沙代理科美滋实木家具产品',
      RongZiZiJin: '20万',
      SuoZaiDiQu: '湖南长沙',
      SuoShuHangYe: '家具销售',
      RongZiFangShi: '股权融资',
      LianXiRen: '...',
      DanWeiMingCheng: '...',
      LiuYanShu: '100',
      GengXinRiQi: '2019-05-24',
      GongSiJieShao: '...',
      XiangMuGaiShu: '...',
      XiangMuYouShi: '...',
    },
    {
      XiangMuBiaoTi: '中型家具工厂扩大生产需要融资200万元',
      RongZiZiJin: '200万',
      SuoZaiDiQu: '湖南益阳',
      SuoShuHangYe: '家具生产',
      RongZiFangShi: '股权融资',
      LianXiRen: '...',
      DanWeiMingCheng: '...',
      LiuYanShu: '100',
      GengXinRiQi: '2019-05-24',
      GongSiJieShao: '...',
      XiangMuGaiShu: '...',
      XiangMuYouShi: '...',
    },
    {
      XiangMuBiaoTi: '家具卖场引流系统大规模应用',
      RongZiZiJin: '60万',
      SuoZaiDiQu: '上海松江',
      SuoShuHangYe: '家居互联网',
      RongZiFangShi: '股权融资',
      LianXiRen: '...',
      DanWeiMingCheng: '...',
      LiuYanShu: '100',
      GengXinRiQi: '2019-05-24',
      GongSiJieShao: '...',
      XiangMuGaiShu: '...',
      XiangMuYouShi: '...',
    }
  ]
}