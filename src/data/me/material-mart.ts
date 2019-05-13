// 原辅材料机械设备服务 - 原辅材料商城数据助手
export const DataMaterialMartHandler = {
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
      id: 1,
      title: '桐木',
      subTitle: '桐木板材',
      area: '山东菏泽',
      type: '板材',
      specs: '1200*12mm',//1200*42*12mm
      width: '42mm',
      price: '￥2000/立方米',
      qty: '40',//数量：50；报团数量：40。
      src: 'assets/imgs/material-mart/shangcheng-1.jpg'
    },
    {
      id: 2,
      title: '白蜡木',
      subTitle: '白蜡木方材',
      area: '山东滨州',
      type: '方材',
      specs: '150*2000mm',//150*200*2000mm
      width: '200mm',
      price: '￥3000/立方米',
      qty: '50',//数量：90；报团数量：50。
      src: 'assets/imgs/material-mart/shangcheng-2.jpg'
    },
    {
      id: 3,
      title: '铁杉',
      subTitle: '铁杉方材',
      area: '美国',
      type: '方材',
      specs: '100*2000mm',//100*350*2000mm
      width: '350mm',
      price: '￥1400/立方米',
      qty: '20',//数量：40；报团数量：20。
      src: 'assets/imgs/material-mart/shangcheng-3.jpg'
    },
    {
      id: 4,
      title: '樟子松',
      subTitle: '樟子松方材',
      area: '美国',
      type: '方材',
      specs: '200*2000mm',//200*350*2000mm
      width: '350mm',
      price: '￥1350/立方米',
      qty: '20',//数量：50；报团数量：20。
      src: 'assets/imgs/material-mart/shangcheng-4.jpg'
    },
    {
      id: 5,
      title: '白松',
      subTitle: '白松方材',
      area: '美国',
      type: '方材',
      specs: '200*2000mm',//200*350*2000mm
      width: '350mm',
      price: '￥1200/立方米',
      qty: '50',//数量：80；报团数量：50。
      src: 'assets/imgs/material-mart/shangcheng-5.jpg'
    },
    {
      id: 6,
      title: '奥松',
      subTitle: '奥松板材',
      area: '美国',
      type: '方材',
      specs: '2440*20mm',//1220*2440*20mm
      width: '1220mm',
      price: '￥130/张',
      qty: '30',//数量：90；报团数量：30。
      src: 'assets/imgs/material-mart/shangcheng-6.jpg'
    },
    {
      id: 7,
      title: '黄松',
      subTitle: '黄松方材',
      area: '美国',
      type: '方材',
      specs: '300*2000mm',//200*300*2000mm
      width: '200mm',
      price: '￥1420/立方米',
      qty: '20',//数量：50；报团数量：20。
      src: 'assets/imgs/material-mart/shangcheng-7.jpg'
    },
    {
      id: 8,
      title: '相思木',
      subTitle: '相思木板材',
      area: '海南海口',
      type: '板材',
      specs: '20*1000mm',//20*300*1000mm
      width: '300mm',
      price: '￥2200/立方米',
      qty: '10',//数量：40；报团数量：10。
      src: 'assets/imgs/material-mart/shangcheng-8.jpg'
    },
    {
      id: 9,
      title: '柚木',
      subTitle: '缅甸瓦城柚木',
      area: '缅甸瓦城',
      type: '板材',
      specs: '20*1000mm',//20*300*1000mm
      width: '300mm',
      price: '￥250000/立方米',
      qty: '20',//数量：55；报团数量：20。
      src: 'assets/imgs/material-mart/shangcheng-9.jpg'
    },
    {
      id: 10,
      title: '杨木',
      subTitle: '杨木方材',
      area: '湖南长沙',
      type: '方材',
      specs: '20*1000mm',//20*300*1000mm
      width: '300mm',
      price: '￥800/立方米',
      qty: '30',//数量：95；报团数量：30。
      src: 'assets/imgs/material-mart/shangcheng-10.jpg'
    },
    {
      id: 11,
      title: '榉木',
      subTitle: '榉木板材',
      area: '俄罗斯',
      type: '板材',
      specs: '40*2000mm',//40*350*2000mm
      width: '350mm',
      price: '￥2500/立方米',
      qty: '20',//数量：40；报团数量：20。
      src: 'assets/imgs/material-mart/shangcheng-11.jpg'
    },
    {
      id: 12,
      title: '桤木',
      subTitle: '桤木板材',
      area: '四川成都',
      type: '板材',
      specs: '30*1000mm',//30*150*1000mm
      width: '150mm',
      price: '￥700/立方米',
      qty: '55',//数量：80；报团数量：55。
      src: 'assets/imgs/material-mart/shangcheng-12.jpg'
    },
    {
      id: 13,
      title: '柏木',
      subTitle: '柏木板材',
      area: '四川成都',
      type: '板材',
      specs: '30*1000mm',//30*150*1000mm
      width: '150mm',
      price: '￥700/立方米',
      qty: '20',//数量：70；报团数量：20。
      src: 'assets/imgs/material-mart/shangcheng-13.jpg'
    },
    {
      id: 14,
      title: '白蜡',
      subTitle: '白蜡板材',
      area: '美国',
      type: '板材',
      specs: '40*2000mm',//40*350*2000mm
      width: '350mm',
      price: '￥3500/立方米',
      qty: '20',//数量：40；报团数量：20。
      src: 'assets/imgs/material-mart/shangcheng-14.jpg'
    },
    {
      id: 15,
      title: '白松',
      subTitle: '白松方材',
      area: '美国',
      type: '方材',
      specs: '100*3800mm',//100*100*3800mm
      width: '100mm',
      price: '￥1300/立方米',
      qty: '20',//数量：80；报团数量：20。
      src: 'assets/imgs/material-mart/shangcheng-15.jpg'
    },
    {
      id: 16,
      title: '黄杨木',
      subTitle: '黄杨木板材',
      area: '美国',
      type: '板材',
      specs: '30*2500mm',//30*200*2500mm
      width: '200mm',
      price: '￥2200/立方米',
      qty: '20',//数量：40；报团数量：20。
      src: 'assets/imgs/material-mart/shangcheng-16.jpg'
    },
    {
      id: 17,
      title: '松木',
      subTitle: '欧罗斯松木板材',
      area: '俄罗斯',
      type: '板材',
      specs: '20*2000mm',//20*300*2000mm
      width: '300mm',
      price: '￥1000/立方米',
      qty: '10',//数量：20；报团数量：10。
      src: 'assets/imgs/material-mart/shangcheng-17.jpg'
    },
    {
      id: 18,
      title: '樟子松',
      subTitle: '樟子松板材',
      area: '俄罗斯',
      type: '板材',
      specs: '20*2000mm',//20*300*2000mm
      width: '300mm',
      price: '￥2000/立方米',
      qty: '55',//数量：75；报团数量：55。
      src: 'assets/imgs/material-mart/shangcheng-18.jpg'
    },
    {
      id: 19,
      title: '云杉',
      subTitle: '欧洲云杉原木',
      area: '捷克',
      type: '原木',
      specs: '300*3000mm',//300*300*3000mm
      width: '300mm',
      price: '￥1300/立方米',
      qty: '25',//数量：50；报团数量：25。
      src: 'assets/imgs/material-mart/shangcheng-19.jpg'
    },
    {
      id: 20,
      title: '橡木',
      subTitle: '橡木拼板板材',
      area: '美国',
      type: '板材',
      specs: '2440*18mm',//1220*2440*18mm
      width: '1220mm',
      price: '￥3200/立方米',
      qty: '10',//数量：50；报团数量：10。
      src: 'assets/imgs/material-mart/shangcheng-20.jpg'
    },
  
  ]
};
