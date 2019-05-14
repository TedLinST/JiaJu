
// 原辅材料机械设备服务 - 原辅材料求购数据助手
export const DataMaterialPurchaseHandler = {
  // 条件选择区
  TYPE_FILTER: [
    {
      id: '1',
      title: '条件一',
      data: [
        {
          id: '1',
          label: '条件1.1'
        },
        {
          id: '2',
          label: '条件1.2'
        },
        {
          id: '3',
          label: '条件1.3'
        }
      ]
    },
    {
      id: '1',
      title: '条件二',
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
      id: '3',
      title: '条件三',
      data: [
        {
          id: '1',
          label: '条件3.1',
          subData: [
            {
              id: '1',
              label: '条件3.1.1'
            },
            {
              id: '2',
              label: '条件3.1.2'
            },
            {
              id: '3',
              label: '条件3.1.3'
            },
          ]
        },
        {
          id: '2',
          label: '条件3.2'
        },
        {
          id: '3',
          label: '条件3.3'
        },
        {
          id: '4',
          label: '条件3.4'
        },
        {
          id: '5',
          label: '条件3.5'
        }
      ]
    },
  ],

  // 列表数据
  LIST_DATA: [
    {
      Id: '1',
      PinMing: '皮革',
      LeiXing: '皮革',
      ChanDi: '浙江 杭州',
      JiaoYiDi: '浙江 杭州',
      GuiGe: '1400mm',
      LianXiRen: '***',
      ShouJi: '***'
    },
    {
      Id: '1',
      PinMing: '皮革',
      LeiXing: '皮革',
      ChanDi: '浙江 绍兴',
      JiaoYiDi: '浙江 绍兴',
      GuiGe: '1400mm',
      LianXiRen: '***',
      ShouJi: '***'
    },
    {
      Id: '1',
      PinMing: '皮革',
      LeiXing: '皮革',
      ChanDi: '浙江 金华',
      JiaoYiDi: '浙江 金华',
      GuiGe: '1600mm',
      LianXiRen: '***',
      ShouJi: '***'
    },
    {
      Id: '1',
      PinMing: '皮革',
      LeiXing: '皮革',
      ChanDi: '湖北 武汉',
      JiaoYiDi: '湖北 武汉',
      GuiGe: '1800mm',
      LianXiRen: '***',
      ShouJi: '***'
    },
    {
      Id: '1',
      PinMing: '皮革',
      LeiXing: '皮革',
      ChanDi: '湖北 保定',
      JiaoYiDi: '湖北 保定',
      GuiGe: '1600mm',
      LianXiRen: '***',
      ShouJi: '***'
    },
    {
      Id: '1',
      PinMing: '涂料',
      LeiXing: '涂料',
      ChanDi: '欧洲 意大利',
      JiaoYiDi: '中国 上海',
      GuiGe: '1L',
      LianXiRen: '***',
      ShouJi: '***'
    },
    {
      Id: '1',
      PinMing: '涂料',
      LeiXing: '涂料',
      ChanDi: '中国 上海',
      JiaoYiDi: '中国 上海',
      GuiGe: '1L',
      LianXiRen: '***',
      ShouJi: '***'
    },
    {
      Id: '1',
      PinMing: '涂料',
      LeiXing: '涂料',
      ChanDi: '中国 上海',
      JiaoYiDi: '中国 上海',
      GuiGe: '1L',
      LianXiRen: '***',
      ShouJi: '***'
    },
    {
      Id: '1',
      PinMing: '涂料',
      LeiXing: '涂料',
      ChanDi: '广东 江门',
      JiaoYiDi: '广东 江',
      GuiGe: '1L',
      LianXiRen: '***',
      ShouJi: '***'
    },
    {
      Id: '1',
      PinMing: '涂料',
      LeiXing: '涂料',
      ChanDi: '中国 上海',
      JiaoYiDi: '中国 上海',
      GuiGe: '1L',
      LianXiRen: '***',
      ShouJi: '***'
    },
    {
      Id: '1',
      PinMing: '铰链',
      LeiXing: '五金及配件',
      ChanDi: '江苏 苏州',
      JiaoYiDi: '江苏 苏州',
      GuiGe: '62*100*30mm',
      LianXiRen: '***',
      ShouJi: '***'
    },
    {
      Id: '1',
      PinMing: '角铁',
      LeiXing: '五金及配件',
      ChanDi: '广东 肇庆',
      JiaoYiDi: '广东 肇庆',
      GuiGe: '20*20*16mm',
      LianXiRen: '***',
      ShouJi: '***'
    },
    {
      Id: '1',
      PinMing: '连接件',
      LeiXing: '五金及配件',
      ChanDi: '广东 东莞',
      JiaoYiDi: '广东 东莞',
      GuiGe: '15mm',
      LianXiRen: '***',
      ShouJi: '***'
    },
    {
      Id: '1',
      PinMing: '滑轨',
      LeiXing: '五金及配件',
      ChanDi: '广东 中山',
      JiaoYiDi: '广东 中山',
      GuiGe: '16寸',
      LianXiRen: '***',
      ShouJi: '***'
    },
    {
      Id: '1',
      PinMing: '拉手',
      LeiXing: '五金及配件',
      ChanDi: '广东 中山',
      JiaoYiDi: '广东 中山',
      GuiGe: '20*140mm',
      LianXiRen: '***',
      ShouJi: '***'
    },
    {
      Id: '1',
      PinMing: '支脚',
      LeiXing: '五金及配件',
      ChanDi: '中国 上海',
      JiaoYiDi: '中国 上海',
      GuiGe: '40*30*26mm',
      LianXiRen: '***',
      ShouJi: '***'
    },
    {
      Id: '1',
      PinMing: '护角',
      LeiXing: '五金及配件',
      ChanDi: '广东 中山',
      JiaoYiDi: '广东 中山',
      GuiGe: '15*15*1mm',
      LianXiRen: '***',
      ShouJi: '***'
    },
    {
      Id: '1',
      PinMing: '连接件',
      LeiXing: '五金及配件',
      ChanDi: '广东 中山',
      JiaoYiDi: '广东 中山',
      GuiGe: '8*90mm',
      LianXiRen: '***',
      ShouJi: '***'
    },
    {
      Id: '1',
      PinMing: '挂钩',
      LeiXing: '五金及配件',
      ChanDi: '广东 佛山',
      JiaoYiDi: '广东 佛山',
      GuiGe: '56*30*7mm',
      LianXiRen: '***',
      ShouJi: '***'
    },
    {
      Id: '1',
      PinMing: '脚垫',
      LeiXing: '五金及配件',
      ChanDi: '中国 上海',
      JiaoYiDi: '中国 上海',
      GuiGe: '20*20*30mm',
      LianXiRen: '***',
      ShouJi: '***'
    },
  ]
};
