// 产品设计资料库数据助手
export const DataDesignDatabaseHandler = {

  // 分类筛选
  TYPE_FILTER: [
    {
      id: '1',
      title: '品牌类型',
      data: [
        {
          id: '1',
          label: '国内'
        },
        {
          id: '2',
          label: '国外'
        },
        {
          id: '3',
          label: '国内出口'
        }
      ]
    },
    {
      id: '2',
      title: '使用场所',
      data: [
        {
          id: '1',
          label: '民用家具'
        },
        {
          id: '2',
          label: '公用家具'
        },
        {
          id: '3',
          label: '户外家具'
        }
      ]
    },
    {
      id: '5',
      title: '类型',
      data: [
        {
          id: '1',
          label: '柜类',
          subData: [
            {
              id: '1-1',
              label: '柜类一'
            },
            {
              id: '1-2',
              label: '柜类二'
            },
            {
              id: '1-3',
              label: '柜类三'
            }
          ]
        },
        {
          id: '2',
          label: '椅凳类',
          subData: [
            {
              id: '2-1',
              label: '椅凳类一'
            },
            {
              id: '2-2',
              label: '椅凳类二'
            },
            {
              id: '2-3',
              label: '椅凳类三'
            }
          ]
        },
        {
          id: '3',
          label: '床类',
          subData: [
            {
              id: '3-1',
              label: '床类一'
            },
            {
              id: '3-2',
              label: '床类二'
            },
            {
              id: '3-3',
              label: '床类三'
            }
          ]
        }
      ]
    }
  ],

  // 列表数据
  LIST_DATA: [
    {
      id: 1,
      type: '类型1',
      specs: '100 * 20 * 128',
      style: '传统中式',
      material: '材料',
      place: '民用家具',
      brandType: '国内',
      src: '/assets/imgs/design-database/xiangxi-1.jpg'
    },
    {
      id: 2,
      type: '类型2',
      specs: '100 * 20 * 128',
      style: '传统中式',
      material: '材料',
      place: '民用家具',
      brandType: '国内',
      src: '/assets/imgs/design-database/xiangxi-2.jpg'
    },
    {
      id: 3,
      type: '类型3',
      specs: '100 * 20 * 128',
      style: '传统中式',
      material: '材料',
      place: '民用家具',
      brandType: '国内',
      src: '/assets/imgs/design-database/xiangxi-3.jpg'
    },
    {
      id: 4,
      type: '类型4',
      specs: '100 * 20 * 128',
      style: '传统中式',
      material: '材料',
      place: '民用家具',
      brandType: '国内',
      src: '/assets/imgs/design-database/xiangxi-1.jpg'
    },
    {
      id: 5,
      type: '类型5',
      specs: '100 * 20 * 128',
      style: '传统中式',
      material: '材料',
      place: '民用家具',
      brandType: '国内',
      src: '/assets/imgs/design-database/xiangxi-2.jpg'
    },
    {
      id: 6,
      type: '类型6',
      specs: '100 * 20 * 128',
      style: '传统中式',
      material: '材料',
      place: '民用家具',
      brandType: '国内',
      src: '/assets/imgs/design-database/xiangxi-3.jpg'
    },
    {
      id: 7,
      type: '类型7',
      specs: '100 * 20 * 128',
      style: '传统中式',
      material: '材料',
      place: '民用家具',
      brandType: '国内',
      src: '/assets/imgs/design-database/xiangxi-1.jpg'
    },
    {
      id: 8,
      type: '类型8',
      specs: '100 * 20 * 128',
      style: '传统中式',
      material: '材料',
      place: '民用家具',
      brandType: '国内',
      src: '/assets/imgs/design-database/xiangxi-2.jpg'
    },
    {
      id: 9,
      type: '类型9',
      specs: '100 * 20 * 128',
      style: '传统中式',
      material: '材料',
      place: '民用家具',
      brandType: '国内',
      src: '/assets/imgs/design-database/xiangxi-3.jpg'
    },
    {
      id: 10,
      type: '类型10',
      specs: '100 * 20 * 128',
      style: '传统中式',
      material: '材料',
      place: '民用家具',
      brandType: '国内',
      src: '/assets/imgs/design-database/xiangxi-1.jpg'
    },
    {
      id: 11,
      type: '类型11',
      specs: '100 * 20 * 128',
      style: '传统中式',
      material: '材料',
      place: '民用家具',
      brandType: '国内',
      src: '/assets/imgs/design-database/xiangxi-2.jpg'
    },
    {
      id: 12,
      type: '类型12',
      specs: '100 * 20 * 128',
      style: '传统中式',
      material: '材料',
      place: '民用家具',
      brandType: '国内',
      src: '/assets/imgs/design-database/xiangxi-3.jpg'
    },
    {
      id: 13,
      type: '类型13',
      specs: '100 * 20 * 128',
      style: '传统中式',
      material: '材料',
      place: '民用家具',
      brandType: '国内',
      src: '/assets/imgs/design-database/xiangxi-1.jpg'
    },
    {
      id: 14,
      type: '类型14',
      specs: '100 * 20 * 128',
      style: '传统中式',
      material: '材料',
      place: '民用家具',
      brandType: '国内',
      src: '/assets/imgs/design-database/xiangxi-2.jpg'
    },
    {
      id: 15,
      type: '类型15',
      specs: '100 * 20 * 128',
      style: '传统中式',
      material: '材料',
      place: '民用家具',
      brandType: '国内',
      src: '/assets/imgs/design-database/xiangxi-3.jpg'
    },
    {
      id: 16,
      type: '类型16',
      specs: '100 * 20 * 128',
      style: '传统中式',
      material: '材料',
      place: '民用家具',
      brandType: '国内',
      src: '/assets/imgs/design-database/xiangxi-1.jpg'
    },
    {
      id: 17,
      type: '类型17',
      specs: '100 * 20 * 128',
      style: '传统中式',
      material: '材料',
      place: '民用家具',
      brandType: '国内',
      src: '/assets/imgs/design-database/xiangxi-2.jpg'
    },
    {
      id: 18,
      type: '类型18',
      specs: '100 * 20 * 128',
      style: '传统中式',
      material: '材料',
      place: '民用家具',
      brandType: '国内',
      src: '/assets/imgs/design-database/xiangxi-3.jpg'
    }
  ]
};
