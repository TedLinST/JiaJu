
// 校企合作服务 - 企业需求数据助手
export const DataEnterpriseNeedsHandler = {
  // 分类筛选
  TYPE_FILTER: [
    {
      id: '1',
      title: '项目类型',
      data: [
        {
          id: '1',
          label: '科研项目'
        },
        {
          id: '2',
          label: '实习项目'
        },
        {
          id: '3',
          label: '教学项目'
        },
        {
          id: '4',
          label: '其他项目'
        }
      ]
    },
    {
      id: '1',
      title: '项目层次',
      data: [
        {
          id: '1',
          label: '专科'
        },
        {
          id: '2',
          label: '本科'
        },
        {
          id: '3',
          label: '硕士'
        },
        {
          id: '4',
          label: '博士'
        },
        {
          id: '5',
          label: '博士后'
        },
        {
          id: '6',
          label: '教授'
        },
        {
          id: '7',
          label: '院士'
        }
      ]
    },
    {
      id: '3',
      title: '项目级别',
      data: [
        {
          id: '1',
          label: '国家级'
        },
        {
          id: '2',
          label: '省部级'
        },
        {
          id: '3',
          label: '市级'
        },
        {
          id: '4',
          label: '区县级'
        },
        {
          id: '5',
          label: '企业级'
        }
      ]
    }
  ],

  // 列表数据
  LIST_DATA: [
    {
      id: 1,
      MingCheng: '小户型实木家具设计方案创新',
      FaBuXueXiao: '万科企业股份有限公司',
      FaBuShiJian: '2019年5月20日',
      CengCi: '硕士',
      BiaoQian: '本公司精装房项目中，需要大量新型小户型实木家具产品，主要适配50平米左右相对比较规整的公寓房，需要个性化符合年轻消费群体要求的设计方案。',
      FenLei: '实习项目',
      LaiYuan: '企业级　　　　★★★',
      src: 'assets/imgs/enterprise-needs/needs-1.jpg'
    },
    {
      id: 2,
      MingCheng: '精装住宅室内家具产品设计',
      FaBuXueXiao: '深圳家具协会住宅研究院',
      FaBuShiJian: '2018年9月13日',
      CengCi: '硕士',
      BiaoQian: '精装公寓房已经成为了当前的一项潮流，如何妥善化解空间与功能的矛盾是当前主要的问题点，通过本项目能够探索出一条新的精装房家具设计思路。',
      FenLei: '实习项目',
      LaiYuan: '市级　　　　　★★★★',
      src: 'assets/imgs/enterprise-needs/needs-2.jpg'
    },
    {
      id: 3,
      MingCheng: '非洲树种奥古曼的硬度改良探索',
      FaBuXueXiao: '宜华生活科技股份有限公司',
      FaBuShiJian: '2016年6月23日',
      CengCi: '硕士',
      BiaoQian: '本公司非洲林场中拥有大量奥古曼木材，主要应用于材料，但目前该树种材质较软的问题没有行之有效的解决方案，通过本项目希望能够获得一条使得表面硬度达到3H以上的处理办法。',
      FenLei: '科研项目',
      LaiYuan: '企业级　　　　★★★',
      src: 'assets/imgs/enterprise-needs/needs-3.jpg'
    },
    {
      id: 4,
      MingCheng: '家具独立门店新型引流集客方式的研究',
      FaBuXueXiao: '曲美家居集团股份有限公司',
      FaBuShiJian: '2018年8月2日',
      CengCi: '本科',
      BiaoQian: '面对渠道碎片化的大趋势，家居门店客流量已经成为制约门店发展的瓶颈，本项目旨在通过研究探索独立店新型引流方式。',
      FenLei: '实习项目',
      LaiYuan: '企业级　　　　★★★',
      src: 'assets/imgs/enterprise-needs/needs-4.jpg'
    },
    {
      id: 5,
      MingCheng: '家具电商供应链成本控制方案探索',
      FaBuXueXiao: '佛山市阿里顺林家具有限公司',
      FaBuShiJian: '2018年11月23日',
      CengCi: '博士',
      BiaoQian: '本项目重点研究电商供应链各个环节中可优化的部分，以达到节省供应链整体成本，提高效率的目的。',
      FenLei: '科研项目',
      LaiYuan: '企业级　　　　★★★★',
      src: 'assets/imgs/enterprise-needs/needs-5.jpg'
    },
    {
      id: 6,
      MingCheng: '大数据技术在传统家具企业中的应用研究',
      FaBuXueXiao: '东莞慕木家具有限公司',
      FaBuShiJian: '2018年10月22日',
      CengCi: '博士',
      BiaoQian: '传统家具凭借经验进行管理的模式在当前市场竞争条件下已经难以进一步拓展业务，该项目意在通过探索找到一条基于大数据进行传统家具企业管理升级的道路。',
      FenLei: '科研项目',
      LaiYuan: '企业级　　　　★★★',
      src: 'assets/imgs/enterprise-needs/needs-6.jpg'
    },
    {
      id: 7,
      MingCheng: '新型变形餐桌的设计与制造',
      FaBuXueXiao: '东莞市楷模家居用品制造有限公司',
      FaBuShiJian: '2017年12月13日',
      CengCi: '本科',
      BiaoQian: '本公司产品以现代家具为主，多功能化一直是本公司追求的目标，希望通过本项目，能够获得更多变形餐桌的设计方案，革新餐桌的使用方式',
      FenLei: '科研项目',
      LaiYuan: '企业级　　　　★★★★',
      src: 'assets/imgs/enterprise-needs/needs-7.jpg'
    },
    {
      id: 8,
      MingCheng: '电商家具产品长途运输条件下的包装研究',
      FaBuXueXiao: '天津美维信息技术有限公司',
      FaBuShiJian: '2018年5月14日',
      CengCi: '硕士',
      BiaoQian: '电商销售的家具产品经过长途运输，经常出现不同程度的损坏，本课题旨在通过对家具产品包装进行研究，设计出更加合理的包装方式，进而降低产品在运输过程中给',
      FenLei: '科研项目',
      LaiYuan: '企业级　　　　★★★★',
      src: 'assets/imgs/enterprise-needs/needs-8.jpg'
    }
  ]
}