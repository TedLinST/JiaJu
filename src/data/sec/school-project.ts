// 校企合作服务 - 学校项目数据助手
export const DataSchoolProjectHandler = {
  // 条件选择区
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
          label: '校级'
        },
        {
          id: '6',
          label: '院系级'
        }
      ]
    }
  ],

  // 列表数据
  LIST_DATA: [
    {
      id: 1,
      MingCheng: '人造板节能环保制造技术研究与示范',
      FaBuXueXiao: '中南林业科技大学',
      FaBuShiJian: '2018年12月6日',
      CengCi: '博士',
      BiaoQian: '本项目着力于研究采用更加科学合理的手段，在人造板制造过程中达到节能环保的，并推广该技术',
      FenLei: '科研项目',
      LaiYuan: '国家级　　　　★★★★★',
      src: 'assets/imgs/school-project/school-1.jpg'
    },
    {
      id: 2,
      MingCheng: '环境友好型秸秆板家具制造技术推广',
      FaBuXueXiao: '南京林业大学',
      FaBuShiJian: '2017年12月6日',
      CengCi: '博士',
      BiaoQian: '本项目意在在本校研发的环境友好型秸秆板制造技术上进行落地推广，使之与实际生产相结合，达到可量产化的目的，实现经济效益。',
      FenLei: '科研项目',
      LaiYuan: '国家级　　　　★★★★★',
      src: 'assets/imgs/school-project/school-2.jpg'
    },
    {
      id: 3,
      MingCheng: '《木纹立体打印装饰制品技术要求》行业标准制定',
      FaBuXueXiao: '南京林业大学',
      FaBuShiJian: '2017年8月6日',
      CengCi: '硕士',
      BiaoQian: '木纹立体打印制品已经得到广泛认可，但相关标准的制定还落后于市场，本项目重点根据市场实际给出能够推动相关行业发展的行业标准。',
      FenLei: '科研项目',
      LaiYuan: '国家级　　　　★★★★',
      src: 'assets/imgs/school-project/school-3.jpg'
    },
    {
      id: 4,
      MingCheng: '木竹纤维柔性装饰材料制造关键技术研究',
      FaBuXueXiao: '中南林业科技大学',
      FaBuShiJian: '2018年6月6日',
      CengCi: '博士',
      BiaoQian: '竹纤维材料装饰效果良好，但制造过程中仍然存在导致成本高、效率低、质量差等问题的瓶颈，本项目重点研究这些关键点，实现关键技术上的突破。',
      FenLei: '科研项目',
      LaiYuan: '国家级　　　　★★★★★',
      src: 'assets/imgs/school-project/school-4.jpg'
    },
    {
      id: 5,
      MingCheng: '中国传统家具艺术数据库的研究',
      FaBuXueXiao: '中南林业科技大学',
      FaBuShiJian: '2019年1月5日',
      CengCi: '本科',
      BiaoQian: '本项目重点从传统家具中收集测量相关的数据，并整理成为可以供未来设计参考的传荣家具数据库。',
      FenLei: '教学项目',
      LaiYuan: '校级　　　　　★★',
      src: 'assets/imgs/school-project/school-5.jpg'
    },
    {
      id: 6,
      MingCheng: '现代中式家具的开发与工业化生产方式研究',
      FaBuXueXiao: '中南林业科技大学',
      FaBuShiJian: '2018年3月12日',
      CengCi: '本科',
      BiaoQian: '通过本项目旨在让学生了解现代中式家具的开发和生产流程，了解更多相关知识。',
      FenLei: '教学项目',
      LaiYuan: '校级　　　　　★★',
      src: 'assets/imgs/school-project/school-6.jpg'
    },
    {
      id: 7,
      MingCheng: '家具生命周期评价（LCA）的研究',
      FaBuXueXiao: '中南林业科技大学',
      FaBuShiJian: '2019年5月20日',
      CengCi: '硕士',
      BiaoQian: '本项目旨在研究家具产品的生命周期相关内容，以探索更贴合市场的家具开发理念。',
      FenLei: '实习项目',
      LaiYuan: '校级　　　　　★★★',
      src: 'assets/imgs/school-project/school-7.jpg'
    },
    {
      id: 8,
      MingCheng: '《木纹立体打印装饰制品技术要求》行业标准制定',
      FaBuXueXiao: '南京林业大学',
      FaBuShiJian: '2017年8月6日',
      CengCi: '硕士',
      BiaoQian: '木纹立体打印制品已经得到广泛认可，但相关标准的制定还落后于市场，本项目重点根据市场实际给出能够推动相关行业发展的行业标准。',
      FenLei: '科研项目',
      LaiYuan: '国家级　　　　★★★★',
      src: 'assets/imgs/school-project/school-3.jpg'
    },
    {
      id: 9,
      MingCheng: '木竹纤维柔性装饰材料制造关键技术研究',
      FaBuXueXiao: '中南林业科技大学',
      FaBuShiJian: '2018年6月6日',
      CengCi: '博士',
      BiaoQian: '竹纤维材料装饰效果良好，但制造过程中仍然存在导致成本高、效率低、质量差等问题的瓶颈，本项目重点研究这些关键点，实现关键技术上的突破。',
      FenLei: '科研项目',
      LaiYuan: '国家级　　　　★★★★★',
      src: 'assets/imgs/school-project/school-4.jpg'
    },
    {
      id: 10,
      MingCheng: '中国传统家具艺术数据库的研究',
      FaBuXueXiao: '中南林业科技大学',
      FaBuShiJian: '2019年1月5日',
      CengCi: '本科',
      BiaoQian: '本项目重点从传统家具中收集测量相关的数据，并整理成为可以供未来设计参考的传荣家具数据库。',
      FenLei: '教学项目',
      LaiYuan: '校级　　　　　★★',
      src: 'assets/imgs/school-project/school-5.jpg'
    },
    {
      id: 11,
      MingCheng: '现代中式家具的开发与工业化生产方式研究',
      FaBuXueXiao: '中南林业科技大学',
      FaBuShiJian: '2018年3月12日',
      CengCi: '本科',
      BiaoQian: '通过本项目旨在让学生了解现代中式家具的开发和生产流程，了解更多相关知识。',
      FenLei: '教学项目',
      LaiYuan: '校级　　　　　★★',
      src: 'assets/imgs/school-project/school-6.jpg'
    },
    {
      id: 12,
      MingCheng: '家具生命周期评价（LCA）的研究',
      FaBuXueXiao: '中南林业科技大学',
      FaBuShiJian: '2019年5月20日',
      CengCi: '硕士',
      BiaoQian: '本项目旨在研究家具产品的生命周期相关内容，以探索更贴合市场的家具开发理念。',
      FenLei: '实习项目',
      LaiYuan: '校级　　　　　★★★',
      src: 'assets/imgs/school-project/school-7.jpg'
    }
  ]
}