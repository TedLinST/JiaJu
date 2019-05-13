// 原辅材料机械设备服务 - 原辅材料团购 - 木材团购数据助手
export const DataWoodShoppingHandler = {
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
      title: '花旗松',
      subTitle: '圆柱花旗松防腐原木立柱 ',
      area: '美国',//北美洲-美国
      type: '原木',
      specs: '150*3000mm',//厚度*宽度*长度：150*150*3000mm 
      width: '150mm',
      price: '￥150/根',//150元/根
      date: '2019-10-15',
      qty: '200',
      src: 'assets/imgs/wood-shopping/tuangou-1.jpg'
    },
    {
      id: 2,
      title: '红松',
      subTitle: '美国红松木方料',
      area: '美国',
      type: '方材',
      specs: '450*2000mm',//450*250*2000mm
      width: '250mm',
      price: '￥1800/立方米',
      date: '2019-11-16',
      qty: '100',
      src: 'assets/imgs/wood-shopping/tuangou-2.jpg'
    },
    {
      id: 3,
      title: '橡木',
      subTitle: '橡木拼板板材',
      area: '美国',
      type: '板材',
      specs: '1220*18mm',//1220*2440*18mm
      width: '2440mm',
      price: '￥3000/立方米',
      date: '2020-01-05',
      qty: '50',
      src: 'assets/imgs/wood-shopping/tuangou-3.jpg'
    },
    {
      id: 4,
      title: '杨木',
      subTitle: '杨木科技木皮',
      area: '中国浙江',
      type: '薄木',
      specs: '1220*5mm',//1220*2440*5mm
      width: '2440',
      price: '￥150/立方米',
      date: '2020-03-04',
      qty: '50',
      src: 'assets/imgs/wood-shopping/tuangou-4.jpg'
    },
    {
      id: 5,
      title: '杨木',
      subTitle: '杨木板材',
      area: '山东临沂',
      type: '原木',
      specs: '1220*12mm',//1220*2440*12mm
      width: '2440mm',
      price: '￥2000/立方米',
      date: '2020-06-15',
      qty: '60',
      src: 'assets/imgs/wood-shopping/tuangou-5.jpg'
    },
    {
      id: 6,
      title: '普通胶合板',
      subTitle: 'E0级环保板材12mm实木多层板',
      area: '中国上海',
      type: '普通胶合板',
      specs: '1220*12mm',//1220*2440*12mm
      width: '2440mm',
      price: '￥130/张',
      date: '2019-09-06',
      qty: '30',
      src: 'assets/imgs/wood-shopping/tuangou-6.jpg'
    },
    {
      id: 7,
      title: '成型胶合板',
      subTitle: '二次成型多层板杨木芯胶合板',
      area: '山东临沂',
      type: '成型胶合板',
      specs: '1220*12mm',//1220*2440*12mm
      width: '2440mm',
      price: '￥60/张',
      date: '2020-06-15',
      qty: '50',
      src: 'assets/imgs/wood-shopping/tuangou-7.jpg'
    },
    {
      id: 8,
      title: '樟子松qqqt',
      subTitle: '产品标题',
      area: '汕头',
      type: '天然木材',
      specs: '100*100',
      width: '100',
      price: '￥5230',
      date: '2019-05-07',
      qty: '300',
      src: 'assets/imgs/wood-shopping/tuangou-8.jpg'
    },
    {
      id: 9,
      title: '樟子松lrtfy',
      subTitle: '产品标题',
      area: '汕头',
      type: '天然木材',
      specs: '100*100',
      width: '100',
      price: '￥5230',
      date: '2019-05-08',
      qty: '300',
      src: 'assets/imgs/wood-shopping/tuangou-9.jpg'
    },
    {
      id: 10,
      title: '樟子松azzggff',
      subTitle: '产品标题',
      area: '汕头',
      type: '天然木材',
      specs: '100*100',
      width: '100',
      price: '￥5230',
      date: '2019-05-08',
      qty: '300',
      src: 'assets/imgs/wood-shopping/tuangou-10.jpg'
    },
    {
      id: 11,
      title: '樟子松',
      subTitle: '产品标题',
      area: '汕头',
      type: '天然木材',
      specs: '100*100',
      width: '100',
      price: '￥5230',
      date: '2019-05-09',
      qty: '300',
      src: 'assets/imgs/wood-shopping/tuangou-11.jpg'
    },
    {
      id: 12,
      title: '樟子松',
      subTitle: '产品标题',
      area: '汕头',
      type: '天然木材',
      specs: '100*100',
      width: '100',
      price: '￥5230',
      date: '2019-05-10',
      qty: '300',
      src: 'assets/imgs/wood-shopping/tuangou-12.jpg'
    },
    {
      id: 13,
      title: '樟子松dfg',
      subTitle: '产品标题',
      area: '汕头',
      type: '天然木材',
      specs: '100*100',
      width: '100',
      price: '￥5230',
      date: '2019-05-08',
      qty: '300',
      src: 'assets/imgs/wood-shopping/tuangou-13.jpg'
    },
    {
      id: 14,
      title: '樟子松asdfg',
      subTitle: '产品标题',
      area: '汕头',
      type: '天然木材',
      specs: '100*100',
      width: '100',
      price: '￥5230',
      date: '2019-05-08',
      qty: '300',
      src: 'assets/imgs/wood-shopping/tuangou-14.jpg'
    },
    {
      id: 15,
      title: '樟子松agk',
      subTitle: '产品标题',
      area: '汕头',
      type: '天然木材',
      specs: '100*100',
      width: '100',
      price: '￥5230',
      date: '2019-05-08',
      qty: '300',
      src: 'assets/imgs/wood-shopping/tuangou-15.jpg'
    },
    {
      id: 16,
      title: '樟子松oit',
      subTitle: '产品标题',
      area: '汕头',
      type: '天然木材',
      specs: '100*100',
      width: '100',
      price: '￥5230',
      date: '2019-05-08',
      qty: '300',
      src: 'assets/imgs/wood-shopping/tuangou-16.jpg'
    },
    {
      id: 17,
      title: '樟子松bs',
      subTitle: '产品标题',
      area: '汕头',
      type: '天然木材',
      specs: '100*100',
      width: '100',
      price: '￥5230',
      date: '2019-05-08',
      qty: '300',
      src: 'assets/imgs/wood-shopping/tuangou-17.jpg'
    },
    {
      id: 18,
      title: '樟子松qqqt',
      subTitle: '产品标题',
      area: '汕头',
      type: '天然木材',
      specs: '100*100',
      width: '100',
      price: '￥5230',
      date: '2019-05-07',
      qty: '300',
      src: 'assets/imgs/wood-shopping/tuangou-18.jpg'
    },
    {
      id: 19,
      title: '樟子松lrtfy',
      subTitle: '产品标题',
      area: '汕头',
      type: '天然木材',
      specs: '100*100',
      width: '100',
      price: '￥5230',
      date: '2019-05-08',
      qty: '300',
      src: 'assets/imgs/wood-shopping/tuangou-19.jpg'
    },
    {
      id: 20,
      title: '樟子松azzggff',
      subTitle: '产品标题',
      area: '汕头',
      type: '天然木材',
      specs: '100*100',
      width: '100',
      price: '￥5230',
      date: '2019-05-08',
      qty: '300',
      src: 'assets/imgs/wood-shopping/tuangou-20.jpg'
    },
  ]
};
