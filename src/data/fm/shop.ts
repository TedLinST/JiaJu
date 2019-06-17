import { BoxLabelComponent } from 'src/modules/key/box/box-label.component';

// 家具商城 - 商家店铺数据助手
export const DataShopHandler = {
  // 条件选择区
  TYPE_FILTER: [
    {
      id:'1',
      title:'店铺类型',
      data:[
       {
         id:'1',
         label:'官方旗舰店'
       },
       {
        id:'2',
        label:'授权专卖店'
      },
      ]
    },
    {
      id: '2',
      title: '产品品类',
      data: [
        {
          id: '1',
          label: '沙发'
        },
        {
          id: '2',
          label: '茶几'
        },
        {
          id: '3',
          label: '电视柜'
        },
        {
          id:'4',
          label:'角几'
        },
        {
          id:'5',
          label:'厅柜'
        },
        {
          id:'6',
          label:'床'
        },
        {
          id:'7',
          label:'床头柜'
        },
        {
          id:'8',
          label:'衣柜'
        },
        {
          id:'9',
          label:'餐桌'
        },
        {
          id:'10',
          label:'餐椅'
        },
        {
          id:'11',
          label:'边柜'
        },
        {
          id:'12',
          label:'书桌'
        },
        {
          id:'13',
          label:'书椅'
        },
        {
          id:'14',
          label:'书柜'
        },
        {
          id:'15',
          label:'休闲桌椅'
        },
        {
          id:'16',
          label:'儿童产品'
        },
      ]
    },
    {
      id:'3',
      title:'所在空间',
      data:[
       {
         id:'1',
         label:'客厅'
       },
       {
        id:'2',
        label:'餐厅'
      },
      {
        id:'3',
        label:'书房'
      },
      {
        id:'4',
        label:'卧室'
      },
      {
        id:'5',
        label:'厨卫'
      },
      {
        id:'6',
        label:'其他配套'
      },
      ]
    },
    {
      id:'4',
      title:'产品风格',
      data:[
        {
          id:'1',
          label:'现代中式'
        },
        {
          id:'2',
          label:'新中式'
        },
        {
          id:'3',
          label:'传统中式'
        },
        {
          id:'4',
          label:'经典美式'
        },
        {
          id:'5',
          label:'简美'
        },
        {
          id:'6',
          label:'美式乡村'
        },
        {
          id:'7',
          label:'意式'
        },
        {
          id:'8',
          label:'古典欧式'
        },
        {
          id:'9',
          label:'地中海'
        },
        {
          id:'10',
          label:'北欧'
        },
        {
          id:'11',
          label:'现代'
        },
      ]
    },
    {
      id:'5',
      title:'产品类型',
      data:[
        {
          id:'1',
          label:'实木家具'
        },
        {
          id:'2',
          label:'板式家具'
        },
        {
          id:'3',
          label:'定制家具'
        },
        {
          id:'4',
          label:'古典红木'
        },
        {
          id:'5',
          label:'办公家具'
        },
        {
          id:'6',
          label:'户外家具'
        },
        {
          id:'7',
          label:'金属家具'
        },
        {
          id:'8',
          label:'塑料家具'
        },
        {
          id:'9',
          label:'软体家具'
        },
        {
          id:'10',
          label:'床垫'
        },
      ]
    },
  ],

  // 列表数据
  LIST_DATA: [
    {
      DianPuID: 'TB001',
      DianPuMingCheng: '林氏木业家具旗舰店',
      XiaoLiang: 800,
      DengJi: 'LV6',
      MiaoShuPingFen: 4.7,
      FuWuPingFen: 4.8,
      WuLiuPingFen: 4.9,
      dfSrc: 'assets/imgs/furniture-mall/dianpu-1.jpg',
      data: [
        {
          ShangPinMingCheng:  '林氏木业北欧简约现代沙发床小户型布艺沙发三人客厅',
          PinLei: '沙发',
          PinPai: '林氏木业',
          ChanDi: '广东佛山',
          GuiGe: '规格',
          DanJia: 2150,
          ShuLiang: 1,
          ChengJiaoShuLiang: 900,
          PingJiaShuLiang: 900,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-1.jpg'
        },
        {
          ShangPinMingCheng:  '林氏木业北欧皮艺沙发组合客厅头层牛皮质现代真皮沙发整装RBE1K',
          PinLei: '沙发',
          PinPai: '林氏木业',
          ChanDi: '广东佛山',
          GuiGe: '规格',
          DanJia: 3990,
          ShuLiang: 1,
          ChengJiaoShuLiang: 900,
          PingJiaShuLiang: 900,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-2.jpg'
        },
        {
          ShangPinMingCheng:  '林氏木业现代简约客厅布艺沙发组合时尚小户型北欧家具套装',
          PinLei: '沙发',
          PinPai: '林氏木业',
          ChanDi: '广东佛山',
          GuiGe: '规格',
          DanJia: 3540,
          ShuLiang: 1,
          ChengJiaoShuLiang: 900,
          PingJiaShuLiang: 900,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-3.jpg'
        },
        {
          ShangPinMingCheng:  '林氏木业真皮沙发小户型客厅三人奢华头层牛皮欧式沙发组合',
          PinLei: '沙发',
          PinPai: '林氏木业',
          ChanDi: '广东佛山',
          GuiGe: '规格',
          DanJia: 5980,
          ShuLiang: 1,
          ChengJiaoShuLiang: 800,
          PingJiaShuLiang: 600,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-4.jpg'
        },
        {
          ShangPinMingCheng:  '林氏木业北欧风格布艺沙发现代简约大小户型客厅组合家具套装',
          PinLei: '沙发',
          PinPai: '林氏木业',
          ChanDi: '广东佛山',
          GuiGe: '规格',
          DanJia: 2640,
          ShuLiang: 1,
          ChengJiaoShuLiang: 900,
          PingJiaShuLiang: 900,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-5.jpg'
        },
        {
          ShangPinMingCheng:  '林氏木业北欧简约现代沙发床小户型布艺沙发三人客厅整装家具',
          PinLei: '沙发',
          PinPai: '林氏木业',
          ChanDi: '广东佛山',
          GuiGe: '规格',
          DanJia: 999,
          ShuLiang: 1,
          ChengJiaoShuLiang: 900,
          PingJiaShuLiang: 900,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-6.jpg'
        },
        {
          ShangPinMingCheng:  '林氏木业简约现代真皮沙发组合欧式客厅整装头层牛皮沙发家具',
          PinLei: '沙发',
          PinPai: '林氏木业',
          ChanDi: '广东佛山',
          GuiGe: '规格',
          DanJia: 4999,
          ShuLiang: 1,
          ChengJiaoShuLiang: 900,
          PingJiaShuLiang: 900,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-7.jpg'
        },
        {
          ShangPinMingCheng:  '林氏木业欧式布艺沙发皮沙发客厅整装小奢华家具',
          PinLei: '沙发',
          PinPai: '林氏木业',
          ChanDi: '广东佛山',
          GuiGe: '规格',
          DanJia: 3789,
          ShuLiang: 1,
          ChengJiaoShuLiang: 900,
          PingJiaShuLiang: 900,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-8.jpg'
        },
        {
          ShangPinMingCheng:  '林氏木业欧式布艺沙发皮沙发客厅整装小奢华家具',
          PinLei: '沙发',
          PinPai: '林氏木业',
          ChanDi: '广东佛山',
          GuiGe: '规格',
          DanJia: 2599,
          ShuLiang: 1,
          ChengJiaoShuLiang: 900,
          PingJiaShuLiang: 900,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-9.jpg'
        },
        {
          ShangPinMingCheng:  '林氏木业欧式布艺沙发皮沙发客厅整装小奢华家具',
          PinLei: '沙发',
          PinPai: '林氏木业',
          ChanDi: '广东佛山',
          GuiGe: '规格',
          DanJia: 4469,
          ShuLiang: 1,
          ChengJiaoShuLiang: 900,
          PingJiaShuLiang: 900,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-10.jpg'
        },
        {
          ShangPinMingCheng:  '林氏木业北欧双人床简约经济型1.8米硬板床次卧实木框床家具',
          PinLei: '床',
          PinPai: '林氏木业',
          ChanDi: '广东佛山',
          GuiGe: '规格',
          DanJia: 3339,
          ShuLiang: 1,
          ChengJiaoShuLiang: 900,
          PingJiaShuLiang: 900,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-11.jpg'
        },
        {
          ShangPinMingCheng:  '林氏木业美式乡村床1.5米1.8m木床双人床',
          PinLei: '床',
          PinPai: '林氏木业',
          ChanDi: '广东佛山',
          GuiGe: '规格',
          DanJia: 2199,
          ShuLiang: 1,
          ChengJiaoShuLiang: 900,
          PingJiaShuLiang: 900,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-12.jpg'
        },
        {
          ShangPinMingCheng:  '林氏木业公主床1.8米双人床现代简约主卧欧式大床婚床家',
          PinLei: '床',
          PinPai: '林氏木业',
          ChanDi: '广东佛山',
          GuiGe: '规格',
          DanJia: 3799,
          ShuLiang: 1,
          ChengJiaoShuLiang: 900,
          PingJiaShuLiang: 900,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-13.jpg'
        },
        {
          ShangPinMingCheng:  '林氏木业床现代简约时尚轻奢真皮床主卧婚床双人床',
          PinLei: '床',
          PinPai: '林氏木业',
          ChanDi: '广东佛山',
          GuiGe: '规格',
          DanJia:  2980,
          ShuLiang: 1,
          ChengJiaoShuLiang: 900,
          PingJiaShuLiang: 900,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-14.jpg'
        },
        {
          ShangPinMingCheng:  '林氏木业北欧风格床简约现代1.8米实木脚布艺双人床',
          PinLei: '床',
          PinPai: '林氏木业',
          ChanDi: '广东佛山',
          GuiGe: '规格',
          DanJia: 2399,
          ShuLiang: 1,
          ChengJiaoShuLiang: 900,
          PingJiaShuLiang: 900,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-15.jpg'
        },
        {
          ShangPinMingCheng:  '林氏木业1.8米头层牛皮床真皮床简约现代软床主卧双人床',
          PinLei: '床',
          PinPai: '林氏木业',
          ChanDi: '广东佛山',
          GuiGe: '规格',
          DanJia: 2399,
          ShuLiang: 1,
          ChengJiaoShuLiang: 900,
          PingJiaShuLiang: 900,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-16.jpg'
        },
        {
          ShangPinMingCheng:  '林氏木业美式乡村床1.5米1.8m木床双人床',
          PinLei: '床',
          PinPai: '林氏木业',
          ChanDi: '广东佛山',
          GuiGe: '规格',
          DanJia: 3199,
          ShuLiang: 1,
          ChengJiaoShuLiang: 900,
          PingJiaShuLiang: 900,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-17.jpg'
        },
        {
          ShangPinMingCheng:  '林氏木业1.2米女孩床',
          PinLei: '床',
          PinPai: '林氏木业',
          ChanDi: '广东佛山',
          GuiGe: '规格',
          DanJia: 1999,
          ShuLiang: 1,
          ChengJiaoShuLiang: 900,
          PingJiaShuLiang: 900,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-18.jpg'
        },
        {
          ShangPinMingCheng:  '儿童床女孩公主床单人床',
          PinLei: '床',
          PinPai: '林氏木业',
          ChanDi: '广东佛山',
          GuiGe: '规格',
          DanJia: 1760,
          ShuLiang: 1,
          ChengJiaoShuLiang: 900,
          PingJiaShuLiang: 900,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-19.jpg'
        },
        {
          ShangPinMingCheng:  '林氏木业女孩床公主床少女床欧式1.5米',
          PinLei: '床',
          PinPai: '林氏木业',
          ChanDi: '广东佛山',
          GuiGe: '规格',
          DanJia: 2468,
          ShuLiang: 1,
          ChengJiaoShuLiang: 900,
          PingJiaShuLiang: 900,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-20.jpg'
        },

      ]
    },
    {
      DianPuID: 'TB002',
      DianPuMingCheng: '月烨家居旗舰店',
      XiaoLiang: 600,
      DengJi: 'LV5',
      MiaoShuPingFen: 4.9,
      FuWuPingFen: 4.8,
      WuLiuPingFen: 4.7,
      dfSrc: 'assets/imgs/shop/logo.jpg',
      data: [
        {
          ShangPinMingCheng:  'ins北欧实木电视柜茶几套装组合小户型日式家具简约现代客厅机柜',
          PinLei:'电视柜',
          PinPai: '段式木业',
          ChanDi: '江苏徐州',
          GuiGe: '规格',
          DanJia: 398,
          ShuLiang: 1,
          ChengJiaoShuLiang: 800,
          PingJiaShuLiang: 600,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-21.jpg'
        },
        {
          ShangPinMingCheng:  'ins北欧实木电视柜茶几套装组合小户型日式家具简约现代客厅机柜',
          PinLei:'电视柜',
          PinPai: '段式木业',
          ChanDi: '江苏徐州',
          GuiGe: '规格',
          DanJia: 308,
          ShuLiang: 1,
          ChengJiaoShuLiang: 800,
          PingJiaShuLiang: 600,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-22.jpg'
        },
        {
          ShangPinMingCheng:  'ins北欧实木简约现代小户型客厅卧室电视柜日式家具组合玻璃移门',
          PinLei:'电视柜',
          PinPai: '段式木业',
          ChanDi: '江苏徐州',
          GuiGe: '规格',
          DanJia: 238,
          ShuLiang: 1,
          ChengJiaoShuLiang: 800,
          PingJiaShuLiang: 600,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-23.jpg'
        },
        {
          ShangPinMingCheng:  '北欧实木茶几钢化玻璃易简约时尚现代创意小户型茶几客厅组合方型',
          PinLei:'茶几',
          PinPai: '段式木业',
          ChanDi: '江苏徐州',
          GuiGe: '规格',
          DanJia: 250,
          ShuLiang: 1,
          ChengJiaoShuLiang: 800,
          PingJiaShuLiang: 600,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-24.jpg'
        },
        {
          ShangPinMingCheng:  '茶几简约现代钢化玻璃客厅个性家具组合创意小户型办公室方形桌子',
          PinLei:'茶几',
          PinPai: '段式木业',
          ChanDi: '江苏徐州',
          GuiGe: '规格',
          DanJia: 150,
          ShuLiang: 1,
          ChengJiaoShuLiang: 800,
          PingJiaShuLiang: 600,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-24.jpg'
        },
        {
          ShangPinMingCheng:  '月烨家居茶几简约现代钢化玻璃茶几 客厅简易小户型创意茶几桌子',
          PinLei:'茶几',
          PinPai: '段式木业',
          ChanDi: '江苏徐州',
          GuiGe: '规格',
          DanJia: 158,
          ShuLiang: 1,
          ChengJiaoShuLiang: 800,
          PingJiaShuLiang: 600,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-26.jpg'
        },
        {
          ShangPinMingCheng:  'ins风实木简约北欧日式钢化玻璃茶几小户型矮桌子创意易客厅现代',
          PinLei:'茶几',
          PinPai: '段式木业',
          ChanDi: '江苏徐州',
          GuiGe: '规格',
          DanJia: 268,
          ShuLiang: 1,
          ChengJiaoShuLiang: 800,
          PingJiaShuLiang: 600,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-27.jpg'
        },
        {
          ShangPinMingCheng:  'ins风实木简约北欧茶几小户型矮桌子创意咖啡桌易装客厅现代边几',
          PinLei:'茶几',
          PinPai: '段式木业',
          ChanDi: '江苏徐州',
          GuiGe: '规格',
          DanJia: 148,
          ShuLiang: 1,
          ChengJiaoShuLiang: 800,
          PingJiaShuLiang: 600,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-28.jpg'
        },
        {
          ShangPinMingCheng:  '茶几简约现代钢化玻璃客厅个性家具组合创意小户型',
          PinLei:'茶几',
          PinPai: '段式木业',
          ChanDi: '江苏徐州',
          GuiGe: '规格',
          DanJia: 118,
          ShuLiang: 1,
          ChengJiaoShuLiang: 800,
          PingJiaShuLiang: 600,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-29.jpg'
        },
        {
          ShangPinMingCheng:  '月烨家居茶几简约现代钢化玻璃茶几',
          PinLei:'茶几',
          PinPai: '段式木业',
          ChanDi: '江苏徐州',
          GuiGe: '规格',
          DanJia: 158,
          ShuLiang: 1,
          ChengJiaoShuLiang: 800,
          PingJiaShuLiang: 600,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-30.jpg'
        },
      ]
    },
    {
      DianPuID: 'TB003',
      DianPuMingCheng: '源氏木语家居旗舰店',
      XiaoLiang: 700,
      DengJi: 'LV4',
      MiaoShuPingFen: 4.4,
      FuWuPingFen: 4.5,
      WuLiuPingFen: 4.7,
      dfSrc: 'assets/imgs/shop/logo.jpg',
      data: [
        {
          ShangPinMingCheng: '源氏木语实木床头柜北欧经济型床头收纳柜现代简约卧室简易小柜子',
          PinLei: '床头柜',
          PinPai: '源氏木语',
          ChanDi: '上海',
          GuiGe: '规格',
          DanJia: 400,
          ShuLiang: 1,
          ChengJiaoShuLiang: 800,
          PingJiaShuLiang: 600,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-31.jpg'
        },
        {
          ShangPinMingCheng: '源氏木语实木小三抽床头柜白橡木床边柜卧室简约现代小柜子储物柜',
          PinLei: '床头柜',
          PinPai: '源氏木语',
          ChanDi: '上海',
          GuiGe: '规格',
          DanJia: 740,
          ShuLiang: 1,
          ChengJiaoShuLiang: 800,
          PingJiaShuLiang: 600,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-32.jpg'
        },
        {
          ShangPinMingCheng: '源氏木语纯实木床头柜白橡木单抽灯桌柜北欧小斗橱环保储物柜卧室',
          PinLei: '床头柜',
          PinPai: '源氏木语',
          ChanDi: '上海',
          GuiGe: '规格',
          DanJia: 580,
          ShuLiang: 1,
          ChengJiaoShuLiang: 800,
          PingJiaShuLiang: 600,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-33.jpg'
        },
        {
          ShangPinMingCheng: '源氏木语全实木床头柜北欧橡木收纳储物柜现代简约卧室床边小柜子',
          PinLei: '床头柜',
          PinPai: '源氏木语',
          ChanDi: '上海',
          GuiGe: '规格',
          DanJia: 680,
          ShuLiang: 1,
          ChengJiaoShuLiang: 800,
          PingJiaShuLiang: 600,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-34.jpg'
        },
        {
          ShangPinMingCheng: '源氏木语实木床头柜北欧卧室床边小柜子现代简约经济型简易储物柜',
          PinLei: '床头柜',
          PinPai: '源氏木语',
          ChanDi: '上海',
          GuiGe: '规格',
          DanJia: 550,
          ShuLiang: 1,
          ChengJiaoShuLiang: 800,
          PingJiaShuLiang: 600,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-35.jpg'
        },
        {
          ShangPinMingCheng: '源氏木语纯实木床头柜白橡木两抽柜北欧简约小斗橱环保储物柜卧室',
          PinLei: '床头柜',
          PinPai: '源氏木语',
          ChanDi: '上海',
          GuiGe: '规格',
          DanJia: 830,
          ShuLiang: 1,
          ChengJiaoShuLiang: 800,
          PingJiaShuLiang: 600,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-36.jpg'
        },
        {
          ShangPinMingCheng: '源氏木语纯实木储物床头柜北欧带锁收纳柜简约斗柜床边桌卧室家具',
          PinLei: '床头柜',
          PinPai: '源氏木语',
          ChanDi: '上海',
          GuiGe: '规格',
          DanJia: 1080,
          ShuLiang: 1,
          ChengJiaoShuLiang: 800,
          PingJiaShuLiang: 600,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-37.jpg'
        },
        {
          ShangPinMingCheng: '源氏木语实木双抽床头柜白橡木迷你床边柜北欧简约现代卧室收纳柜',
          PinLei: '床头柜',
          PinPai: '源氏木语',
          ChanDi: '上海',
          GuiGe: '规格',
          DanJia: 740,
          ShuLiang: 1,
          ChengJiaoShuLiang: 800,
          PingJiaShuLiang: 600,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-38.jpg'
        },
        {
          ShangPinMingCheng: '源氏木语全实木床头柜北欧橡木儿童储物柜现代简约卧室床边小柜子',
          PinLei: '床头柜',
          PinPai: '源氏木语',
          ChanDi: '上海',
          GuiGe: '规格',
          DanJia: 680,
          ShuLiang: 1,
          ChengJiaoShuLiang: 800,
          PingJiaShuLiang: 600,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-39.jpg'
        },
        {
          ShangPinMingCheng: '源氏木语纯实木床头柜白橡木木蜡油北欧抽屉收纳三斗橱卧室床边桌',
          PinLei: '床头柜',
          PinPai: '源氏木语',
          ChanDi: '上海',
          GuiGe: '规格',
          DanJia: 1080,
          ShuLiang: 1,
          ChengJiaoShuLiang: 800,
          PingJiaShuLiang: 600,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-40.jpg'
        },
        {
          ShangPinMingCheng: '源氏木语实木双抽床头柜白橡木北欧简约现代卧室迷你小柜子床边柜',
          PinLei: '床头柜',
          PinPai: '源氏木语',
          ChanDi: '上海',
          GuiGe: '400*350*550mm',
          DanJia: 830,
          ShuLiang: 1,
          ChengJiaoShuLiang: 800,
          PingJiaShuLiang: 600,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-41.jpg'
        },
        {
          ShangPinMingCheng: '源氏木语全实木床头柜黑胡桃木两抽小柜子木蜡油环保时尚小斗柜',
          PinLei: '床头柜',
          PinPai: '源氏木语',
          ChanDi: '上海',
          GuiGe: '400*360*500mm',
          DanJia: 1440,
          ShuLiang: 1,
          ChengJiaoShuLiang: 800,
          PingJiaShuLiang: 600,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-42.jpg'
        },
        {
          ShangPinMingCheng: '源氏木语实木儿童床头柜北欧橡木经济型收纳柜子现代简约卧室家具',
          PinLei: '床头柜',
          PinPai: '源氏木语',
          ChanDi: '上海',
          GuiGe: '400*350*450mm',
          DanJia: 780,
          ShuLiang: 1,
          ChengJiaoShuLiang: 800,
          PingJiaShuLiang: 600,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-43.jpg'
        },
        {
          ShangPinMingCheng: '源氏木语实木床头柜北欧水曲柳收纳储物柜子现代简约卧室新品家具',
          PinLei: '床头柜',
          PinPai: '源氏木语',
          ChanDi: '上海',
          GuiGe: '400*350*450mm',
          DanJia: 660,
          ShuLiang: 1,
          ChengJiaoShuLiang: 800,
          PingJiaShuLiang: 600,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-44.jpg'
        },
        {
          ShangPinMingCheng: '源氏木语纯实木床头柜白橡木床边柜两抽柜北欧简约整装储物柜卧室',
          PinLei: '床头柜',
          PinPai: '源氏木语',
          ChanDi: '上海',
          GuiGe: '400*350*550mm',
          DanJia: 920,
          ShuLiang: 1,
          ChengJiaoShuLiang: 800,
          PingJiaShuLiang: 600,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-45.jpg'
        },
        {
          ShangPinMingCheng: '源氏木语全实木床头柜现代简约黑胡桃木床边收纳柜北欧',
          PinLei: '床头柜',
          PinPai: '源氏木语',
          ChanDi: '上海',
          GuiGe: '400*360*500mm',
          DanJia: 1250,
          ShuLiang: 1,
          ChengJiaoShuLiang: 800,
          PingJiaShuLiang: 600,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-46.jpg'
        },
        {
          ShangPinMingCheng: '源氏木语全实木床头柜北欧卧室橡木收纳柜现代简约带锁床边小柜子',
          PinLei: '床头柜',
          PinPai: '源氏木语',
          ChanDi: '上海',
          GuiGe: '400*360*500mm',
          DanJia: 900,
          ShuLiang: 1,
          ChengJiaoShuLiang: 800,
          PingJiaShuLiang: 600,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-47.jpg'
        },
        {
          ShangPinMingCheng: '源氏木语纯实木床头柜床边柜原木橡木斗柜抽屉柜北欧简约卧室家具',
          PinLei: '床头柜',
          PinPai: '源氏木语',
          ChanDi: '上海',
          GuiGe: '400*350*550mm',
          DanJia: 870,
          ShuLiang: 1,
          ChengJiaoShuLiang: 800,
          PingJiaShuLiang: 600,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-48.jpg'
        },
        {
          ShangPinMingCheng: '源氏木语纯实木简约现代原木床头柜卧室床边柜白橡木柜子储物家具',
          PinLei: '床头柜',
          PinPai: '源氏木语',
          ChanDi: '上海',
          GuiGe: '450*360*450mm',
          DanJia: 820,
          ShuLiang: 1,
          ChengJiaoShuLiang: 800,
          PingJiaShuLiang: 600,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-49.jpg'
        },
        {
          ShangPinMingCheng: '源氏木语全实木床头柜北欧卧室带锁储物柜现代简约橡木床边收纳柜',
          PinLei: '床头柜',
          PinPai: '源氏木语',
          ChanDi: '上海',
          GuiGe: '450*360*450mm',
          DanJia: 750,
          ShuLiang: 1,
          ChengJiaoShuLiang: 800,
          PingJiaShuLiang: 600,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-50.jpg'
        },
        {
          ShangPinMingCheng: '源氏木语纯实木餐桌全白橡木餐台饭桌环保餐桌椅组合餐厅',
          PinLei: '床头柜',
          PinPai: '源氏木语',
          ChanDi: '上海',
          GuiGe: '1100*700*750mm',
          DanJia: 1680,
          ShuLiang: 1,
          ChengJiaoShuLiang: 800,
          PingJiaShuLiang: 600,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-51.jpg'
        },
        {
          ShangPinMingCheng: '源氏木语纯实木餐桌北欧简约饭桌北美白橡木桌椅组合环保餐厅家具',
          PinLei: '床头柜',
          PinPai: '源氏木语',
          ChanDi: '上海',
          GuiGe: '1200*750*750mm',
          DanJia: 1395,
          ShuLiang: 1,
          ChengJiaoShuLiang: 800,
          PingJiaShuLiang: 600,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-52.jpg'
        },
        {
          ShangPinMingCheng: '源氏木语纯实木床头柜白橡木单抽灯桌柜北欧小斗橱环保储物柜卧室',
          PinLei: '床头柜',
          PinPai: '源氏木语',
          ChanDi: '上海',
          GuiGe: '1200*800*750mm',
          DanJia: 580,
          ShuLiang: 1,
          ChengJiaoShuLiang: 800,
          PingJiaShuLiang: 600,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-53.jpg'
        },
        {
          ShangPinMingCheng: '源氏木语全实木床头柜北欧橡木收纳储物柜现代简约卧室床边小柜子',
          PinLei: '床头柜',
          PinPai: '源氏木语',
          ChanDi: '上海',
          GuiGe: '1200*800*750mm',
          DanJia: 680,
          ShuLiang: 1,
          ChengJiaoShuLiang: 800,
          PingJiaShuLiang: 600,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-54.jpg'
        },
        {
          ShangPinMingCheng: '源氏木语实木床头柜北欧卧室床边小柜子现代简约经济型简易储物柜',
          PinLei: '床头柜',
          PinPai: '源氏木语',
          ChanDi: '上海',
          GuiGe: '1300*1000*760mm',
          DanJia: 550,
          ShuLiang: 1,
          ChengJiaoShuLiang: 800,
          PingJiaShuLiang: 600,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-55.jpg'
        },
        {
          ShangPinMingCheng: '源氏木语纯实木床头柜白橡木两抽柜北欧简约小斗橱环保储物柜卧室',
          PinLei: '床头柜',
          PinPai: '源氏木语',
          ChanDi: '上海',
          GuiGe: '1400*750*740mm',
          DanJia: 830,
          ShuLiang: 1,
          ChengJiaoShuLiang: 800,
          PingJiaShuLiang: 600,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-56.jpg'
        },
        {
          ShangPinMingCheng: '源氏木语纯实木储物床头柜北欧带锁收纳柜简约斗柜床边桌卧室家具',
          PinLei: '床头柜',
          PinPai: '源氏木语',
          ChanDi: '上海',
          GuiGe: '1000*600*760mm',
          DanJia: 1080,
          ShuLiang: 1,
          ChengJiaoShuLiang: 800,
          PingJiaShuLiang: 600,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-57.jpg'
        },
        {
          ShangPinMingCheng: '源氏木语实木双抽床头柜白橡木迷你床边柜北欧简约现代卧室收纳柜',
          PinLei: '床头柜',
          PinPai: '源氏木语',
          ChanDi: '上海',
          GuiGe: '1200*700*750mm',
          DanJia: 740,
          ShuLiang: 1,
          ChengJiaoShuLiang: 800,
          PingJiaShuLiang: 600,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-58.jpg'
        },
        {
          ShangPinMingCheng: '源氏木语全实木床头柜北欧橡木儿童储物柜现代简约卧室床边小柜子',
          PinLei: '床头柜',
          PinPai: '源氏木语',
          ChanDi: '上海',
          GuiGe: '1200*750*750mm',
          DanJia: 680,
          ShuLiang: 1,
          ChengJiaoShuLiang: 800,
          PingJiaShuLiang: 600,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-59.jpg'
        },
        {
          ShangPinMingCheng: '源氏木语纯实木床头柜白橡木木蜡油北欧抽屉收纳三斗橱卧室床边桌',
          PinLei: '床头柜',
          PinPai: '源氏木语',
          ChanDi: '上海',
          GuiGe: '1100*750*750mm',
          DanJia: 1080,
          ShuLiang: 1,
          ChengJiaoShuLiang: 800,
          PingJiaShuLiang: 600,
          TuPianXiangQing: [{ src: 'assets/imgs/shop/xq.jpg', }],
          LeiJiPingLun: [{ src: 'assets/imgs/shop/pl.jpg', }],
          YanSeFenLei: 1,
          AnZhuangFangShi: 1,
          KuanShiFenLei: 1,
          src: 'assets/imgs/shop/shangpin-60.jpg'
        },
      ]
    },
    {
      DianPuID: 'TB004',
      DianPuMingCheng: '缅因森林 美国原材 中国匠心',
      XiaoLiang: 700,
      DengJi: 'LV4',
      MiaoShuPingFen: 4.4,
      FuWuPingFen: 4.5,
      WuLiuPingFen: 4.7,
      dfSrc: 'assets/imgs/shop/logo.jpg',
      data:[

      ]
    }
  ]
}