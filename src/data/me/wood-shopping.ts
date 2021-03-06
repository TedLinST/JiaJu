// 原辅材料机械设备服务 - 原辅材料团购 - 木材团购数据助手
export const DataWoodShoppingHandler = {
  // 分类筛选
  TYPE_FILTER: [
    {
      id: '1',
      title: '木材类型',
      data: [
        {
          id: '1',
          label: '原木'
        },
        {
          id: '2',
          label: '板材'
        },
        {
          id: '3',
          label: '木方'
        },
        {
          id: '4',
          label: '木皮'
        },
        {
          id: '5',
          label: '其他'
        }
      ]
    },
    {
      id: '2',
      title: '木材种类',
      data: [
        {
          id: '1',
          label: '柚木'
        },
        {
          id: '2',
          label: '沙比利'
        },
        {
          id: '3',
          label: '奥古曼'
        },
        {
          id: '4',
          label: '菠萝格'
        },
        {
          id: '5',
          label: '桃花芯'
        },
        {
          id: '6',
          label: '黑胡桃'
        },
        {
          id: '7',
          label: '鸡翅木'
        },
        {
          id: '8',
          label: '桦木'
        },
        {
          id: '9',
          label: '红豆杉'
        },
        {
          id: '10',
          label: '橡胶木'
        },
        {
          id: '11',
          label: '奥坎'
        },
        {
          id: '12',
          label: '花梨木'
        },
        {
          id: '13',
          label: '其他'
        }
      ]
    },
    {
      id: '3',
      title: '木材产地',
      data: [
        {
          id: '1',
          label: '中国'
        },
        {
          id: '2',
          label: '加蓬'
        },
        {
          id: '3',
          label: '刚果'
        },
        {
          id: '4',
          label: '喀麦隆'
        },
        {
          id: '5',
          label: '几内亚'
        },
        {
          id: '6',
          label: '缅甸'
        },
        {
          id: '7',
          label: '泰国'
        },
        {
          id: '8',
          label: '越南'
        },
        {
          id: '9',
          label: '老挝'
        },
        {
          id: '10',
          label: '柬埔寨'
        },
        {
          id: '11',
          label: '俄罗斯'
        },
        {
          id: '12',
          label: '南美'
        },
        {
          id: '13',
          label: '北美'
        },
        {
          id: '14',
          label: '其他'
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
      specs: '150*150*3000mm',
      price: '150元/根',
      date: '2019-10-15',
      qty: '200',
      totalQty: '500',
      src: 'assets/imgs/wood-shopping/tuangou-1.jpg'
    },
    {
      id: 2,
      title: '红松',
      subTitle: '美国红松木方料',
      area: '美国',
      type: '方材',
      specs: '450*250*2000mm',
      price: '1800元/立方米',
      date: '2019-11-16',
      qty: '100',
      totalQty: '200',
      src: 'assets/imgs/wood-shopping/tuangou-2.jpg'
    },
    {
      id: 3,
      title: '橡木',
      subTitle: '橡木拼板板材',
      area: '美国',
      type: '板材',
      specs: '1220*2440*18mm',
      price: '3000元/立方米',
      date: '2020-01-05',
      qty: '50',
      totalQty: '250',
      src: 'assets/imgs/wood-shopping/tuangou-3.jpg'
    },
    {
      id: 4,
      title: '杨木',
      subTitle: '杨木科技木皮',
      area: '中国浙江',
      type: '薄木',
      specs: '1220*2440*5mm',
      price: '150元/立方米',
      date: '2020-03-04',
      qty: '50',
      totalQty: '300',
      src: 'assets/imgs/wood-shopping/tuangou-4.jpg'
    },
    {
      id: 5,
      title: '杨木',
      subTitle: '杨木板材',
      area: '山东临沂',
      type: '原木',
      specs: '1220*2440*12mm',
      price: '2000元/立方米',
      date: '2020-06-15',
      qty: '60',
      totalQty: '70',
      src: 'assets/imgs/wood-shopping/tuangou-5.jpg'
    },
    {
      id: 6,
      title: '普通胶合板',
      subTitle: 'E0级环保板材12mm实木多层板',
      area: '中国上海',
      type: '普通胶合板',
      specs: '1220*2440*12mm',
      price: '130元/张',
      date: '2019-09-06',
      qty: '30',
      totalQty: '80',
      src: 'assets/imgs/wood-shopping/tuangou-6.jpg'
    },
    {
      id: 7,
      title: '成型胶合板',
      subTitle: '二次成型多层板杨木芯胶合板',
      area: '山东临沂',
      type: '成型胶合板',
      specs: '1220*2440*12mm',
      price: '60元/张',
      date: '2020-06-15',
      qty: '50',
      totalQty: '100',
      src: 'assets/imgs/wood-shopping/tuangou-7.jpg'
    },
    {
      id: 8,
      title: '细木工板',
      subTitle: '18mm松木细木工板E0级大芯板',
      area: '中国上海',
      type: '细木工板',
      specs: '1220*2440*18mm',
      price: '150元/张',
      date: '2020-03-06',
      qty: '30',
      totalQty: '200',
      src: 'assets/imgs/wood-shopping/tuangou-8.jpg'
    },
    {
      id: 9,
      title: '集成材',
      subTitle: '新西兰松直拼板E0级实木集成板',
      area: '新西兰',//大洋洲新西兰
      type: '集成材',
      specs: '1220*2440*12mm',
      price: '200元/张',
      date: '2020-03-09',
      qty: '40',
      totalQty: '70',
      src: 'assets/imgs/wood-shopping/tuangou-9.jpg'
    },
    {
      id: 10,
      title: '杉木',
      subTitle: '杉木原木',
      area: '广西柳州',
      type: '原木',
      specs: '250*250*3000mm',
      price: '1500元/立方米',
      date: '2020-08-20',
      qty: '30',
      totalQty: '60',
      src: 'assets/imgs/wood-shopping/tuangou-10.jpg'
    },
    {
      id: 11,
      title: '普通刨花板',
      subTitle: '免漆颗粒生态刨花板',
      area: '山东临沂',
      type: '普通刨花板',
      specs: '1220*2440*12mm',
      price: '80元/张',
      date: '2020-05-15',
      qty: '50',
      totalQty: '80',
      src: 'assets/imgs/wood-shopping/tuangou-11.jpg'
    },
    {
      id: 12,
      title: '松木',
      subTitle: '松木原木',
      area: '江苏苏州',
      type: '原木',
      specs: '300*300*3000mm',
      price: '800元/立方米',
      date: '2020-05-16',
      qty: '50',
      totalQty: '90',
      src: 'assets/imgs/wood-shopping/tuangou-12.jpg'
    },
    {
      id: 13,
      title: '定向刨花板',
      subTitle: '实木多层进口无醛级OSB板',
      area: '山东临沂',
      type: '定向刨花板',
      specs: '1220*2440*12mm',
      price: '110元/张',
      date: '2020-02-02',
      qty: '20',
      totalQty: '70',
      src: 'assets/imgs/wood-shopping/tuangou-13.jpg'
    },
    {
      id: 14,
      title: '桦木',
      subTitle: '俄罗斯桦木木方',
      area: '俄罗斯',
      type: '木方',
      specs: '200*300*2000mm',
      price: '2000元/立方米',
      date: '2020-04-03',
      qty: '50',
      totalQty: '80',
      src: 'assets/imgs/wood-shopping/tuangou-14.jpg'
    },
    {
      id: 15,
      title: '中密度纤维板',
      subTitle: '12毫米定制中密度纤维板',
      area: '江苏苏州',
      type: '中密度纤维板',
      specs: '1220*2440*12mm',
      price: '60元/张',
      date: '2020-06-16',
      qty: '20',
      totalQty: '100',
      src: 'assets/imgs/wood-shopping/tuangou-15.jpg'
    },
    {
      id: 16,
      title: '高密度纤维板',
      subTitle: '12毫米定制高密度纤维板',
      area: '江苏苏州',
      type: '高密度纤维板',
      specs: '1220*2440*12mm',
      price: '70元/张',
      date: '2020-03-14',
      qty: '10',
      totalQty: '20',
      src: 'assets/imgs/wood-shopping/tuangou-16.jpg'
    },
    {
      id: 17,
      title: '特殊用途纤维板',
      subTitle: '防火防水纤维水泥板',
      area: '浙江杭州',
      type: '特殊用途纤维板',
      specs: '1220*2440*8mm',
      price: '60元/张',
      date: '2020-05-02',
      qty: '50',
      totalQty: '70',
      src: 'assets/imgs/wood-shopping/tuangou-17.jpg'
    },
    {
      id: 18,
      title: '桉木',
      subTitle: '桉木方材',
      area: '广西柳州',
      type: '方材',
      specs: '200*200*2000mm',
      price: '800元/立方米',
      date: '2020-08-09',
      qty: '10',
      totalQty: '20',
      src: 'assets/imgs/wood-shopping/tuangou-18.jpg'
    },
    {
      id: 19,
      title: '浸渍纸贴面人造板',
      subTitle: '三聚氰胺浸渍纸人造板',
      area: '浙江嘉兴',
      type: '浸渍纸贴面人造板',
      specs: '1220*2440*3mm',
      price: '50元/张',
      date: '2020-08-03',
      qty: '20',
      totalQty: '80',
      src: 'assets/imgs/wood-shopping/tuangou-19.jpg'
    },
    {
      id: 20,
      title: '竹材人造板',
      subTitle: '竹板材无甲醛楠竹人造板',
      area: '福建南平',
      type: '竹材人造板',
      specs: '2000*400*20mm',
      price: '180元/张',
      date: '2020-06-13',
      qty: '50',
      totalQty: '80',
      src: 'assets/imgs/wood-shopping/tuangou-20.jpg'
    },
  ]
};
