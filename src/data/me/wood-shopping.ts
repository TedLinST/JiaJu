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
      specs: '150*3000mm',//150*150*3000mm 
      width: '150mm',
      price: '￥150/根',//150元/根
      date: '2019-10-15',
      qty: '200',//总数量:500;已报名数量：200
      src: 'assets/imgs/wood-shopping/tuangou-1.jpg'
    },
    {
      id: 2,
      title: '红松',
      subTitle: '美国红松木方料',
      area: '美国',
      type: '方材',
      specs: '250*2000mm',//450*250*2000mm
      width: '450mm',
      price: '￥1800/立方米',
      date: '2019-11-16',
      qty: '100',//总数量:200;已报名数量：100
      src: 'assets/imgs/wood-shopping/tuangou-2.jpg'
    },
    {
      id: 3,
      title: '橡木',
      subTitle: '橡木拼板板材',
      area: '美国',
      type: '板材',
      specs: '2440*18mm',//1220*2440*18mm
      width: '1220mm',
      price: '￥3000/立方米',
      date: '2020-01-05',
      qty: '50',//总数量:250;已报名数量：50
      src: 'assets/imgs/wood-shopping/tuangou-3.jpg'
    },
    {
      id: 4,
      title: '杨木',
      subTitle: '杨木科技木皮',
      area: '中国浙江',
      type: '薄木',
      specs: '2440*5mm',//1220*2440*5mm
      width: '1220mm',
      price: '￥150/立方米',
      date: '2020-03-04',
      qty: '50',//总数量:300;已报名数量：50
      src: 'assets/imgs/wood-shopping/tuangou-4.jpg'
    },
    {
      id: 5,
      title: '杨木',
      subTitle: '杨木板材',
      area: '山东临沂',
      type: '原木',
      specs: '2440*12mm',//1220*2440*12mm
      width: '1220mm',
      price: '￥2000/立方米',
      date: '2020-06-15',
      qty: '60',//总数量:70;已报名数量：60
      src: 'assets/imgs/wood-shopping/tuangou-5.jpg'
    },
    {
      id: 6,
      title: '普通胶合板',
      subTitle: 'E0级环保板材12mm实木多层板',
      area: '中国上海',
      type: '普通胶合板',
      specs: '2440*12mm',//1220*2440*12mm
      width: '1220mm',
      price: '￥130/张',
      date: '2019-09-06',
      qty: '30',//总数量:80;已报名数量：30
      src: 'assets/imgs/wood-shopping/tuangou-6.jpg'
    },
    {
      id: 7,
      title: '成型胶合板',
      subTitle: '二次成型多层板杨木芯胶合板',
      area: '山东临沂',
      type: '成型胶合板',
      specs: '2440*12mm',//1220*2440*12mm
      width: '1220mm',
      price: '￥60/张',
      date: '2020-06-15',
      qty: '50',//总数量:100;已报名数量：50
      src: 'assets/imgs/wood-shopping/tuangou-7.jpg'
    },
    {
      id: 8,
      title: '细木工板',
      subTitle: '18mm松木细木工板E0级大芯板',
      area: '中国上海',
      type: '细木工板',
      specs: '2440*18mm',//1220*2440*18mm
      width: '1220mm',
      price: '￥150/张',
      date: '2020-03-06',
      qty: '30',//总数量:200;已报名数量：30
      src: 'assets/imgs/wood-shopping/tuangou-8.jpg'
    },
    {
      id: 9,
      title: '集成材',
      subTitle: '新西兰松直拼板E0级实木集成板',
      area: '新西兰',//大洋洲新西兰
      type: '集成材',
      specs: '2440*12mm',//1220*2440*12mm
      width: '1220mm',
      price: '￥200/张',
      date: '2020-03-09',
      qty: '40',//总数量:70;已报名数量：40
      src: 'assets/imgs/wood-shopping/tuangou-9.jpg'
    },
    {
      id: 10,
      title: '杉木',
      subTitle: '杉木原木',
      area: '广西柳州',
      type: '原木',
      specs: '250*3000mm',//250*250*3000mm
      width: '250mm',
      price: '￥1500/立方米',
      date: '2020-08-20',
      qty: '30',//总数量:60;已报名数量：30
      src: 'assets/imgs/wood-shopping/tuangou-10.jpg'
    },
    {
      id: 11,
      title: '普通刨花板',
      subTitle: '免漆颗粒生态刨花板',
      area: '山东临沂',
      type: '普通刨花板',
      specs: '2440*12mm',//1220*2440*12mm
      width: '1220mm',
      price: '￥80/张',
      date: '2020-05-15',
      qty: '50',//总数量:80;已报名数量：50
      src: 'assets/imgs/wood-shopping/tuangou-11.jpg'
    },
    {
      id: 12,
      title: '松木',
      subTitle: '松木原木',
      area: '江苏苏州',
      type: '原木',
      specs: '300*3000mm',//300*300*3000mm
      width: '300mm',
      price: '￥800/立方米',
      date: '2020-05-16',
      qty: '50',//总数量:90;已报名数量：50
      src: 'assets/imgs/wood-shopping/tuangou-12.jpg'
    },
    {
      id: 13,
      title: '定向刨花板',
      subTitle: '实木多层进口无醛级OSB板',
      area: '山东临沂',
      type: '定向刨花板',
      specs: '2440*12mm',//1220*2440*12mm
      width: '1220mm',
      price: '￥110/张',
      date: '2020-02-02',
      qty: '20',//总数量:70;已报名数量：20
      src: 'assets/imgs/wood-shopping/tuangou-13.jpg'
    },
    {
      id: 14,
      title: '桦木',
      subTitle: '俄罗斯桦木木方',
      area: '俄罗斯',
      type: '木方',
      specs: '200*2000mm',//200*300*2000mm
      width: '300mm',
      price: '￥2000/立方米',
      date: '2020-04-03',
      qty: '50',//总数量:80;已报名数量：50
      src: 'assets/imgs/wood-shopping/tuangou-14.jpg'
    },
    {
      id: 15,
      title: '中密度纤维板',
      subTitle: '12毫米定制中密度纤维板',
      area: '江苏苏州',
      type: '中密度纤维板',
      specs: '2440*12mm',//1220*2440*12mm
      width: '1220mm',
      price: '￥60/张',
      date: '2020-06-16',
      qty: '20',//总数量:100;已报名数量：20
      src: 'assets/imgs/wood-shopping/tuangou-15.jpg'
    },
    {
      id: 16,
      title: '高密度纤维板',
      subTitle: '12毫米定制高密度纤维板',
      area: '江苏苏州',
      type: '高密度纤维板',
      specs: '2440*12mm',//1220*2440*12mm
      width: '1220mm',
      price: '￥70/张',
      date: '2020-03-14',
      qty: '10',//总数量:20;已报名数量：10
      src: 'assets/imgs/wood-shopping/tuangou-16.jpg'
    },
    {
      id: 17,
      title: '特殊用途纤维板',
      subTitle: '防火防水纤维水泥板',
      area: '浙江杭州',
      type: '特殊用途纤维板',
      specs: '2440*8mm',//1220*2440*8mm
      width: '1220mm',
      price: '￥60/张',
      date: '2020-05-02',
      qty: '50',//总数量:70;已报名数量：50
      src: 'assets/imgs/wood-shopping/tuangou-17.jpg'
    },
    {
      id: 18,
      title: '桉木',
      subTitle: '桉木方材',
      area: '广西柳州',
      type: '方材',
      specs: '200*2000mm',//200*200*2000mm
      width: '200mm',
      price: '￥800/立方米',
      date: '2020-08-09',
      qty: '10',//总数量:20;已报名数量：10
      src: 'assets/imgs/wood-shopping/tuangou-18.jpg'
    },
    {
      id: 19,
      title: '浸渍纸贴面人造板',
      subTitle: '三聚氰胺浸渍纸人造板',
      area: '浙江嘉兴',
      type: '浸渍纸贴面人造板',
      specs: '2440*3mm',//1220*2440*3mm
      width: '1220mm',
      price: '￥50/张',
      date: '2020-08-03',
      qty: '20',//总数量:80;已报名数量：20
      src: 'assets/imgs/wood-shopping/tuangou-19.jpg'
    },
    {
      id: 20,
      title: '竹材人造板',
      subTitle: '竹板材无甲醛楠竹人造板',
      area: '福建南平',
      type: '竹材人造板',
      specs: '2000*20mm',//2000*400*20mm
      width: '400mm',
      price: '￥180/张',
      date: '2020-06-13',
      qty: '50',//总数量:80;已报名数量：50
      src: 'assets/imgs/wood-shopping/tuangou-20.jpg'
    },
  ]
};
