// 原辅材料机械设备服务 - 机械设备商城数据助手
export const DataEquipmentMartHandler = {
  // 分类筛选
  TYPE_FILTER: [
    {
      id: '1',
      title: '板材制造设备',
      data: [
        {
          id: '1',
          label: '分切机'
        },
        {
          id: '2',
          label: '粉碎机'
        },
        {
          id: '3',
          label: '覆面机'
        },
        {
          id: '4',
          label: '搅拌机'
        },
        {
          id: '5',
          label: '涂胶机'
        },
        {
          id: '6',
          label: '铣齿机'
        },
        {
          id: '7',
          label: '齿接机'
        },
        {
          id: '8',
          label: '拼板机'
        }
      ]
    },
    {
      id: '2',
      title: '木材加工设备',
      data: [
        {
          id: '1',
          label: '电烫斗'
        },
        {
          id: '2',
          label: '锯切机'
        },
        {
          id: '3',
          label: '钻孔机'
        },
        {
          id: '4',
          label: '砂光机'
        },
        {
          id: '5',
          label: '铣削机'
        },
        {
          id: '6',
          label: '封边机'
        }
      ]
    },
    {
      id: '3',
      title: '林业机械',
      data: [
        {
          id: '1',
          label: '叉车'
        },
        {
          id: '2',
          label: '吊车'
        },
        {
          id: '3',
          label: '拉木机'
        },
        {
          id: '4',
          label: '剥皮机'
        },
        {
          id: '5',
          label: '运输机'
        },
        {
          id: '6',
          label: '运输车'
        },
        {
          id: '7',
          label: '劈木机'
        },
        {
          id: '8',
          label: '锯木机'
        },
        {
          id: '9',
          label: '电动磨刀机'
        }
      ]
    },
    {
      id: '4',
      title: '包装装卸机械',
      data: [
        {
          id: '1',
          label: '打包机'
        },
        {
          id: '2',
          label: '打标机'
        },
        {
          id: '3',
          label: '喷码机'
        },
        {
          id: '4',
          label: '码垛机'
        },
        {
          id: '5',
          label: '装箱机'
        },
        {
          id: '6',
          label: '钢带捆扎'
        },
        {
          id: '7',
          label: '缠绕机'
        }
      ]
    },
    {
      id: '5',
      title: '木工刀具',
      data: [
        {
          id: '1',
          label: '带锯'
        },
        {
          id: '2',
          label: '圆锯'
        },
        {
          id: '3',
          label: '条锯'
        },
        {
          id: '4',
          label: '链锯'
        },
        {
          id: '5',
          label: '筒锯'
        },
        {
          id: '6',
          label: '铣刀'
        }
      ]
    },
    {
      id: '6',
      title: '木材机械配件',
      data: [
        {
          id: '1',
          label: '预压带'
        },
        {
          id: '2',
          label: '除尘器'
        },
        {
          id: '3',
          label: '砂轮'
        },
        {
          id: '4',
          label: '轴承'
        },
        {
          id: '5',
          label: '输送带'
        },
        {
          id: '6',
          label: '安全阀'
        },
        {
          id: '7',
          label: '电磁阀'
        },
        {
          id: '8',
          label: '锯片'
        },
        {
          id: '9',
          label: '软管'
        },
        {
          id: '10',
          label: '钻孔头'
        },
        {
          id: '11',
          label: '同步带'
        },
        {
          id: '12',
          label: '风管'
        },
        {
          id: '13',
          label: '集尘管'
        },
        {
          id: '14',
          label: '调速轮'
        }
      ]
    },
  ],

  // 列表数据
  LIST_DATA: [
    {
      id: 1,
      title: 'MSK3724x2 / MSK3724x3 双排多轴数控榫槽机',
      equipmentType: '榫槽机',
      equipmentVolumes: '台式设备',
      enterprise: '马氏木工机械',
      date: '2019-04-29',
      area: '广东 佛山',
      qty: '123',
      explain: '生产效率高：4轴多工位、高速连续铣削，一组工件加工的同时，其他工件进行装卸，不间断生产。每天（8小时）加工榫槽（孔）达20000多个。调整更方便：采用先进的数控系统，人机对话界面，简单易学，普通工人经过2-3小时的培训即可操作。利用对刀杆进行对刀，无需编程，对点即自动生成加工程序。调校一个工件仅需10分钟左右。精准度更高：数控输入和输出，一组工件一次定位加工完成，确保工件高质量、高精度。',
      location: '广东 佛山',
      price: '60000',
      src: 'assets/imgs/raw-material/product-1.jpg'
    },
    {
      id: 2,
      title: 'MSK3724\MSK3725 数控多轴榫槽机',
      equipmentType: '榫槽机',
      equipmentVolumes: '台式设备',
      enterprise: '马氏木工机械',
      date: '2019-04-29',
      area: '广东 佛山',
      qty: '123',
      explain: '生产效率高：4轴多工位、高速连续铣削，一组工件加工的同时，其他工件进行装卸，不间断生产。每天（8小时）加工榫槽（孔）达20000多个。调整更方便：采用先进的数控系统，人机对话界面，简单易学，普通工人经过2-3小时的培训即可操作。利用对刀杆进行对刀，无需编程，对点即自动生成加工程序。调校一个工件仅需10分钟左右。精准度更高：数控输入和输出，一组工件一次定位加工完成，确保工件高质量、高精度。',
      location: '广东 佛山',
      price: '60000',
      src: 'assets/imgs/raw-material/product-2.jpg'
    },
    {
      id: 3,
      title: 'MBZ524x2 自动木工平刨床',
      equipmentType: '刨床',
      equipmentVolumes: '台式设备',
      enterprise: '马氏木工机械',
      date: '2019-04-29',
      area: '广东 佛山',
      qty: '123',
      explain: '设备采用蜗轮传动设计，送料强劲有力，较常规平刨生产效率提高3-6倍。尤其适合大批量定厚刨削。机台与进料组件实现关封闭夹层设计，既能确保加工的安全性，又能对加工效果直观微调，同时方便设备除尘。集成式电控箱及蜗轮组旋钮可对刨削木件的定厚及加工速度进行调整控制。',
      location: '广东 佛山',
      price: '40000',
      src: 'assets/imgs/raw-material/product-3.jpg'
    },
    {
      id: 4,
      title: 'MJ359.CNC 数控带锯机',
      equipmentType: '锯切设备',
      equipmentVolumes: '台式设备',
      enterprise: '马氏木工机械',
      date: '2019-04-29',
      area: '广东 佛山',
      qty: '123',
      explain: '全自动化加工作业：质量稳定，效率大幅提高，为后续加工作业打下坚实基础，使你的整条加工作业线更加顺畅，快捷。先进数控系统：本机采用先进数控系统，操作简单易学。排料作业不需要其他应用软件，只要有CAD基础的人都可以很快地掌握操作机械。高性能高品质：全机采用高性能，高品质零组件。',
      location: '广东 佛山',
      price: '40000',
      src: 'assets/imgs/raw-material/product-4.jpg'
    },
    {
      id: 5,
      title: 'MJK6233 全自动裁板锯',
      equipmentType: '锯切设备',
      equipmentVolumes: '台式设备',
      enterprise: '马氏木工机械',
      date: '2019-04-29',
      area: '广东 佛山',
      qty: '123',
      explain: '本机采用PLC控制，配合工业级触控式液晶显示器，现场操控简易，无需使用鼠标键盘；智慧型指令系统，逐步引导操控人员控机械，实现短期内驾轻就熟的实际操作；集成式平台控制，仅需手指轻点，就能对加工规格、加工速度，进行全面调控；',
      location: '广东 佛山',
      price: '50000',
      src: 'assets/imgs/raw-material/product-5.jpg'
    },
    {
      id: 6,
      title: 'MJ6132B 精密推台锯',
      equipmentType: '锯切设备',
      equipmentVolumes: '台式设备',
      enterprise: '马氏木工机械',
      date: '2019-04-29',
      area: '广东 佛山',
      qty: '123',
      explain: '锯座采用CNC数控加工，实现机架与锯座的高精度衔接，降低设备高速运行时的同心度偏摆。推台台面的铣削，采用日本全自动数控CNC铣床，实现台面的完美加工。推台圆柱导轨槽加工，采用双槽同步加工，槽体一次成型加工，确保精度高，后期导轨安装累积公差小。',
      location: '广东 佛山',
      price: '30000',
      src: 'assets/imgs/raw-material/product-6.jpg'
    },
    {
      id: 7,
      title: 'MF-3000DC数控重型磨刀机',
      equipmentType: '其他设备',
      equipmentVolumes: '台式设备',
      enterprise: '江苏腾飞机械',
      date: '2019-04-29',
      area: '江苏 东台',
      qty: '123',
      explain: '吸收德国磨刀设备和磨刃设备的精华自行制造的一种多用途高档磨削设备',
      location: '江苏 东台',
      price: '180000',
      src: 'assets/imgs/raw-material/product-7.jpg'
    },
    {
      id: 8,
      title: 'LY-5321冷压机',
      equipmentType: '其他设备',
      equipmentVolumes: '台式设备',
      enterprise: '江苏腾飞机械',
      date: '2019-04-29',
      area: '江苏 东台',
      qty: '123',
      explain: '广泛应用于家具制造、现代流行实木板式家具厂、音响厂、木业厂、装潢公司、广告公司、塑料业、平面胶合板、夹板、刨花板、贴面板和其它木模压件制造类工厂。',
      location: '江苏 东台',
      price: '180000',
      src: 'assets/imgs/raw-material/product-8.jpg'
    }
  ]
};
