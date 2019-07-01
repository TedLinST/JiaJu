
// 原辅材料机械设备服务 - 机械设备求购数据助手
export const DataEquipmentPurchaseHandler = {
  // 分类筛选
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
          label: '条件3.1'
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
      title: '家具厂需求燕尾榫全自动生产设备3台',
      equipmentType: '榫槽机',
      equipmentVolumes: '台式设备',
      date: '2019-04-29',
      area: '不限',
      explain: '要求具有较高的生产效率，每台设备能够替代5个人工，能够24小时连续作业，主要用于制作抽屉燕尾槽榫，高效率设备可适当减少数量。',
      location: '广东 东莞',
      price: '60000',
      src: 'assets/imgs/equipment-purchase/product-1.jpg'
    },
    {
      id: 1,
      title: '饰面板公司求购热压机4台',
      equipmentType: '热压设备',
      equipmentVolumes: '台式设备',
      date: '2019-04-29',
      area: '不限',
      explain: '硬性要求多层热压机，最小幅面2440*1220标准幅面，主要用于装饰薄木贴面，可部分人工参与，具体详聊',
      location: '广西 柳州',
      price: '160000',
      src: 'assets/imgs/equipment-purchase/product-2.jpg'
    },
    {
      id: 1,
      title: '木工平刨床15台',
      equipmentType: '刨床',
      equipmentVolumes: '台式设备',
      date: '2019-04-29',
      area: '广东 佛山',
      explain: '半自动生产线人工作业用，占地不超过1平米/台，安全措施到位',
      location: '广东 佛山',
      price: '20000',
      src: 'assets/imgs/equipment-purchase/product-3.jpg'
    },
    {
      id: 1,
      title: 'CNC数控雕刻机',
      equipmentType: '数控设备',
      equipmentVolumes: '台式设备',
      date: '2019-04-29',
      area: '不限',
      explain: '主要应用于中纤板和实木板材的表面雕刻，要求精度高，加工速度适中，全自动完成。需要工厂能够实地培训操作人员。有现货优先。',
      location: '江西 鹰潭',
      price: '250000',
      src: 'assets/imgs/equipment-purchase/product-4.jpg'
    },
    {
      id: 1,
      title: '自动化涂装生产线',
      equipmentType: '生产线',
      equipmentVolumes: '台式设备',
      date: '2019-04-29',
      area: '山东 青岛',
      explain: '家具企业工厂涂装线升级改造，硝基涂料改水性涂料，部分设备已有，需要工厂能够协助组建整条流水线',
      location: '天津',
      price: '1000000',
      src: 'assets/imgs/equipment-purchase/product-5.jpg'
    },
    {
      id: 1,
      title: '智能化除尘整体解决方案',
      equipmentType: '除尘设备',
      equipmentVolumes: '台式设备',
      date: '2019-04-29',
      area: '不限',
      explain: '环保验收需要重新优化除尘设备，要求工厂能根据实际情况出整体解决方案，全自动、节能效果良好的优先',
      location: '河北 廊坊',
      price: '1500000',
      src: 'assets/imgs/equipment-purchase/product-6.jpg'
    },
    {
      id: 1,
      title: '地板厂求购焚烧锅炉两台',
      equipmentType: '其他设备',
      equipmentVolumes: '台式设备',
      date: '2019-04-29',
      area: '不限',
      explain: '现有锅炉一台，木材废料消化能力不足且排放不达标，求购两台热效率好、自带净化装置、价格合理的锅炉，现货优先。',
      location: '河北 武汉',
      price: '180000',
      src: 'assets/imgs/equipment-purchase/product-7.jpg'
    },
    {
      id: 1,
      title: '购手持砂光机120台',
      equipmentType: '砂光设备',
      equipmentVolumes: '手持设备',
      date: '2019-04-29',
      area: '不限',
      explain: '主要用于红木产品的表面砂光、抛光作业，要求能调节振动幅度，满足多种粗糙度的砂光要求，轻便可携带，充电式佳。',
      location: '福建 仙游',
      price: '400',
      src: 'assets/imgs/equipment-purchase/product-8.jpg'
    }
  ]
};
