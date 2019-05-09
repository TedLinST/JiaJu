// 设计软件集成数据助手
export const DataSoftwareIntegrationHandler = {
  // 分类筛选
  TYPE_FILTER: [
    // {
    //   id: '1',
    //   title: '外观设计',
    //   data: [
    //     {
    //       id: '1',
    //       label: 'CAD'
    //     },
    //     {
    //       id: '2',
    //       label: '3MAX'
    //     },
    //     {
    //       id: 'UG',
    //       label: '国内出口'
    //     }
    //   ]
    // },
    // {
    //   id: '2',
    //   title: '结构设计',
    //   data: [
    //     {
    //       id: '1',
    //       label: 'CAD'
    //     },
    //     {
    //       id: '2',
    //       label: '3MAX'
    //     },
    //     {
    //       id: 'UG',
    //       label: '国内出口'
    //     }
    //   ]
    // },
    // {
    //   id: '3',
    //   title: '布局设计',
    //   data: [
    //     {
    //       id: '1',
    //       label: 'CAD'
    //     },
    //     {
    //       id: '2',
    //       label: '3MAX'
    //     },
    //     {
    //       id: '3',
    //       label: 'UG'
    //     }
    //   ]
    // },
    {
      id: '1',
      title: '云设计',
      data: [
        {
          id: '1',
          label: '酷家乐'
        },
        {
          id: '2',
          label: '爱福窝'
        },
        {
          id: '3',
          label: 'WoodNET'
        },
        {
          id: '4',
          label: '三维家'
        }
      ]
    },
    {
      id: '2',
      title: '定制家具',
      data: [
        {
          id: '1',
          label: '圆方'
        },
        {
          id: '2',
          label: '造易'
        },
        {
          id: '3',
          label: '三维家'
        },
        {
          id: '4',
          label: '豪迈WCC'
        }
      ]
    },
    {
      id: '3',
      title: '其他家具',
      data: [
        {
          id: '1',
          label: 'UG'
        },
        {
          id: '2',
          label: 'TopSolid'
        },
        {
          id: '3',
          label: 'Rhino'
        },
        {
          id: '4',
          label: 'Solidworks'
        }
      ]
    },
    {
      id: '4',
      title: '通用软件',
      data: [
        {
          id: '1',
          label: '3Dmax'
        },
        {
          id: '2',
          label: 'AutoCAD'
        },
        {
          id: '3',
          label: 'Adobe Photoshop'
        },
        {
          id: '4',
          label: 'ThinkDesign'
        }
      ]
    },
  ],

  // 列表数据
  LIST_DATA: [
    {
      id: 1,
      title: '酷家乐',
      // test:'VR智能室内设计平台',//简介
      date: '2019-05-06',
      number: 420,
      src: '/assets/imgs/software-integration/ruanjian-1.jpg'
    },
    {
      id: 2,
      title: '爱福窝',
      // test:'国内领先的家装云设计软件服务商',//简介
      date: '2019-05-06',
      number: 2500,
      src: '/assets/imgs/software-integration/ruanjian-2.jpg'
    },
    {
      id: 3,
      title: 'WoodNET',
      // test:'准确根据客户需求进行展示和呈现的软件',//简介
      date: '2019-05-06',
      number: 100,
      src: '/assets/imgs/software-integration/ruanjian-3.jpg'
    },
    {
      id: 4,
      title: '三维家',
      // test:'高效便捷的家居设计与家具设计软件',
      date: '2019-05-06',
      number: 7800,
      src: '/assets/imgs/software-integration/ruanjian-4.jpg'
    },
    {
      id: 5,
      title: '圆方',
      // test:'整体家居解决方案服务商',
      date: '2019-05-06',
      number: 420,
      src: '/assets/imgs/software-integration/ruanjian-5.jpg'
    },
    {
      id: 6,
      title: '造易',
      // test:'定制家具信息化解决方案提供商',
      date: '2019-05-06',
      number: 2500,
      src: '/assets/imgs/software-integration/ruanjian-6.jpg'
    },
    {
      id: 7,
      title: '三维家',
      // test:'家居行业前后端软件技术服务提供商',
      date: '2019-05-06',
      number: 100,
      src: '/assets/imgs/software-integration/ruanjian-7.jpg'
    },
    {
      id: 8,
      title: '豪迈WCC',
      // test:'快速处理设计产品并提供完整数据流的软件',
      date: '2019-05-06',
      number: 7800,
      src: '/assets/imgs/software-integration/ruanjian-8.jpg'
    },
    {
      id: 9,
      title: 'UG',
      // test:'交互式CAD/CAM系统',
      date: '2019-05-06',
      number: 7800,
      src: '/assets/imgs/software-integration/ruanjian-9.jpg'
    },
    {
      id: 10,
      title: 'TopSolid',
      // test:'为木工行业打造的数字化加工生产软件',
      date: '2019-05-06',
      number: 7800,
      src: '/assets/imgs/software-integration/ruanjian-10.jpg'
    },
    {
      id: 11,
      title: 'Rhino',
      // test:'强大的专业3D造型软件',
      date: '2019-05-06',
      number: 7800,
      src: '/assets/imgs/software-integration/ruanjian-11.jpg'
    },
    {
      id: 12,
      title: 'Solidworks',
      // test:'专业的机械设计软件视窗产品',
      date: '2019-05-06',
      number: 7800,
      src: '/assets/imgs/software-integration/ruanjian-12.jpg'
    },
    {
      id: 13,
      title: '3Dmax',
      // test:'三维动画渲染和制作软件',
      date: '2019-05-06',
      number: 7800,
      src: '/assets/imgs/software-integration/ruanjian-13.jpg'
    },
    {
      id: 14,
      title: 'AutoCAD',
      // test:'自动计算机辅助设计软件',
      date: '2019-05-06',
      number: 7800,
      src: '/assets/imgs/software-integration/ruanjian-14.jpg'
    },
    {
      id: 15,
      title: 'Adobe Photoshop',
      // test:'位图图像处理软件',
      date: '2019-05-06',
      number: 7800,
      src: '/assets/imgs/software-integration/ruanjian-15.jpg'
    },
    {
      id: 16,
      title: 'ThinkDesign',
      // test:'极具竞争力的3D辅助产品设计软件',
      date: '2019-05-06',
      number: 7800,
      src: '/assets/imgs/software-integration/ruanjian-16.jpg'
    }
  ]
};
