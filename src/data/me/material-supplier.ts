// 原辅材料机械设备服务 - 原辅材料供应商数据助手
export const DataMaterialSupplierHandler = {
  // 分类筛选
  /* TYPE_FILTER: [
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
    }
  ], */

  // 列表数据
  LIST_DATA: [
    {
      id: 1,
      title: '深圳市佰瑞特紧固件有限公司',
      business: '五金及配件',
      attribute: '制造商',
      location: '广东 深圳',
      src: 'assets/imgs/material-supplier/supplier-1.jpg'
    },
    {
      id: 1,
      title: '奥力晟',
      business: '五金及配件',
      attribute: '制造商',
      location: '广东 佛山',
      src: 'assets/imgs/material-supplier/supplier-2.jpg'
    },
    {
      id: 1,
      title: '上海韵狮工贸有限公司',
      business: '五金及配件',
      attribute: '制造商',
      location: '中国 上海',
      src: 'assets/imgs/material-supplier/supplier-3.jpg'
    },
    {
      id: 1,
      title: '德国欧瑞阁建筑五金（北京）有限公司',
      business: '五金及配件',
      attribute: '制造商',
      location: '中国 北京',
      src: 'assets/imgs/material-supplier/supplier-4.jpg'
    },
    {
      id: 1,
      title: '孟州市光宇皮业有限公司',
      business: '皮革',
      attribute: '制造商',
      location: '河南 孟州',
      src: 'assets/imgs/material-supplier/supplier-5.jpg'
    },
    {
      id: 1,
      title: '万峰石材科技股份有限公司',
      business: '石材',
      attribute: '制造商',
      location: '广东 佛山',
      src: 'assets/imgs/material-supplier/supplier-6.jpg'
    },
    {
      id: 1,
      title: '东莞市龙大胶黏制品有限公司',
      business: '胶黏剂',
      attribute: '制造商',
      location: '广东 东莞',
      src: 'assets/imgs/material-supplier/supplier-7.jpg'
    },
    {
      id: 1,
      title: '河北晨阳工贸集团有限公司',
      business: '涂料',
      attribute: '制造商',
      location: '河北 保定',
      src: 'assets/imgs/material-supplier/supplier-8.jpg'
    },
    {
      id: 1,
      title: '中山市城画涂料有限公司（堡润漆）',
      business: '涂料',
      attribute: '制造商',
      location: '广东 中山',
      src: 'assets/imgs/material-supplier/supplier-9.jpg'
    },
    {
      id: 1,
      title: '阿克苏诺贝尔公司 （多乐士）',
      business: '涂料',
      attribute: '制造商',
      location: '中国 上海',
      src: 'assets/imgs/material-supplier/supplier-10.jpg'
    },
    {
      id: 1,
      title: '上海邦赢投资管理有限公司（百强板材）',
      business: '人造板',
      attribute: '制造商',
      location: '中国 上海',
      src: 'assets/imgs/material-supplier/supplier-11.jpg'
    },
    {
      id: 1,
      title: '福耀集团',
      business: '玻璃',
      attribute: '制造商',
      location: '福建 福州',
      src: 'assets/imgs/material-supplier/supplier-12.jpg'
    },
    {
      id: 1,
      title: '中国南玻集团',
      business: '玻璃',
      attribute: '制造商',
      location: '广东 深圳',
      src: 'assets/imgs/material-supplier/supplier-13.jpg'
    },
    {
      id: 1,
      title: '湖北宝源木业有限公司',
      business: '板材',
      attribute: '制造商',
      location: '湖北 荆门',
      src: 'assets/imgs/material-supplier/supplier-14.jpg'
    },
    {
      id: 1,
      title: '德曼木业',
      business: '板材',
      attribute: '制造商',
      location: '广东 东莞',
      src: 'assets/imgs/material-supplier/supplier-15.jpg'
    },
    {
      id: 1,
      title: '大亚人造板集团有限公司',
      business: '人造板',
      attribute: '制造商',
      location: '广东 深圳',
      src: 'assets/imgs/material-supplier/supplier-16.jpg'
    },
    {
      id: 1,
      title: '深圳市滴达胶粘剂有限公司',
      business: '胶黏剂',
      attribute: '制造商',
      location: '广东 深圳',
      src: 'assets/imgs/material-supplier/supplier-17.jpg'
    },
    {
      id: 1,
      title: '福达集团',
      business: '人造板',
      attribute: '制造商',
      location: '山东  临沂',
      src: 'assets/imgs/material-supplier/supplier-18.jpg'
    },
    {
      id: 1,
      title: '青岛世纪瑞丰集团有限公司',
      business: '木材',
      attribute: '制造商',
      location: '山东 青岛',
      src: 'assets/imgs/material-supplier/supplier-19.jpg'
    },
    {
      id: 1,
      title: '深圳木材贸易有限公司',
      business: '木材',
      attribute: '制造商',
      location: '广东 深圳',
      src: 'assets/imgs/material-supplier/supplier-20.jpg'
    },
    {
      id: 1,
      title: 'xxxx公司',
      business: '砂纸,日本富士星砂纸砂带,砂轮片,八角砂,圆盘砂,砂纸带,砂布带等',
      attribute: '制造商',
      location: '汕头',
      src: 'assets/imgs/material-supplier/gongyingshang.jpg'
    },
    {
      id: 1,
      title: 'xxxx公司',
      business: '砂纸,日本富士星砂纸砂带,砂轮片,八角砂,圆盘砂,砂纸带,砂布带等',
      attribute: '制造商',
      location: '汕头',
      src: 'assets/imgs/material-supplier/gongyingshang.jpg'
    },
    {
      id: 1,
      title: 'xx公司',
      business: '砂纸,日本富士星砂纸砂带,砂轮片,八角砂,圆盘砂,砂纸带,砂布带等',
      attribute: '制造商',
      location: '揭阳',
      src: 'assets/imgs/material-supplier/gongyingshang.jpg'
    },
    {
      id: 1,
      title: 'xxxx公司',
      business: '砂纸,日本富士星砂纸砂带,砂轮片,八角砂,圆盘砂,砂纸带,砂布带等',
      attribute: '制造商',
      location: '汕头',
      src: 'assets/imgs/material-supplier/gongyingshang.jpg'
    },
  ]
};
