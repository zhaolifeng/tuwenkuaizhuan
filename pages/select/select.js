// pages/select/select.js
// const app = getApp()
// Page({
//   data: {
//     StatusBar: app.globalData.StatusBar,
//     CustomBar: app.globalData.CustomBar,
//     Custom: app.globalData.Custom,
//     TabCur: 0,
//     MainCur: 0,
//     VerticalNavTop: 0,
//     list: [],
//     load: true
//   },
//   onLoad() {
//     wx.showLoading({
//       title: '加载中...',
//       mask: true
//     });
//     let list = [{}];
//     for (let i = 0; i < 26; i++) {
//       list[i] = {};
//       list[i].name = String.fromCharCode(65 + i);
//       list[i].id = i;
//     }
//     this.setData({
//       list: list,
//       listCur: list[0]
//     })
//   },
//   onReady() {
//     wx.hideLoading()
//   },
//   tabSelect(e) {
//     this.setData({
//       TabCur: e.currentTarget.dataset.id,
//       MainCur: e.currentTarget.dataset.id,
//       VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50
//     })
//   },
//   VerticalMain(e) {
//     let that = this;
//     let list = this.data.list;
//     let tabHeight = 0;
//     if (this.data.load) {
//       for (let i = 0; i < list.length; i++) {
//         let view = wx.createSelectorQuery().select("#main-" + list[i].id);
//         view.fields({
//           size: true
//         }, data => {
//           list[i].top = tabHeight;
//           tabHeight = tabHeight + data.height;
//           list[i].bottom = tabHeight;    
//         }).exec();
//       }
//       that.setData({
//         load: false,
//         list: list
//       })
//     }
//     let scrollTop = e.detail.scrollTop + 20;
//     for (let i = 0; i < list.length; i++) {
//       if (scrollTop > list[i].top && scrollTop < list[i].bottom) {
//         that.setData({
//           VerticalNavTop: (list[i].id - 1) * 50,
//           TabCur: list[i].id
//         })
//         return false
//       }
//     }
//   }
// })


const app = getApp()
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    TabCur: 0,
    MainCur: 0,
    VerticalNavTop: 0,
    list: [],
    funList:[
        {
          "id":"0",
          "name":"通用",
          "titles":[
              {
                  "id":"1-1",
                  "name":"印刷体",
                  "code":"004003-1-印刷体",
                  "image":"/pages/image/select/yingshuati.png",
                  "desc":"支持多场景、任意版面下整图文字的识别，包括中英文、字母、数字和日语、韩语、西班牙语等十余种多语言识别"
              },
              {
                  "id":"1-2",
                  "name":"手写体",
                  "code":"004005-1-手写体",
                  "image":"/pages/image/select/shouxieti.png",
                  "desc":"支持图片内手写体文字的检测和识别，针对手写字体无规则、字迹潦草、模糊等特点进行了识别能力的增强"
              },
              {
                  "id":"1-3",
                  "name":"英文",
                  "code":"004001-1-英文",
                  "image":"/pages/image/select/yingwen.png",
                  "desc":"支持图像英文文字的检测和识别，返回文字框位置与文字内容。支持多场景、任意版面下的英文、字母、数字和常见字符的识别，同时覆盖英文印刷体和英文手写体识别"
              },
              {
                  "id":"1-4",
                  "name":"二维码",
                  "code":"004006-1-二维码",
                  "image":"/pages/image/select/erweima.png",
                  "desc":"支持二维码的识别"
              },
              {
                  "id":"1-5",
                  "name":"条形码",
                  "code":"004006-1-条形码",
                  "image":"/pages/image/select/tiaoxingma.png",
                  "desc":"支持条形码"
              },
              {
                  "id":"1-6",
                  "name":"算式校对",
                  "code":"005002-1-算式校对",
                  "image":"/pages/image/select/suanshi.png",
                  "desc":"支持作业算式题目的自动识别，目前覆盖 K12 学力范围内的 14 种题型，包括加减乘除四则运算、分数四则运算、竖式四则运算、脱式计算等"
              },
              {
                  "id":"1-7",
                  "name":"翻译",
                  "code":"006001-1-翻译",
                  "image":"/pages/image/select/fanyi.png",
                  "desc":"可支持中、英、日、韩等200+语言互译"
              }
          ],
          "image":"/pages/image/select/ship.png",
          "desc":""
      },
      {
          "id":"1",
          "name":"卡证",
          "titles":[
              
                  {
                      "id":"2-1",
                      "name":"身份证",
                      "code":"002007-2-身份证",
                      "image":"/pages/image/select/codeId.png",
                      "desc":"支持二代身份证人像面所有字段的识别，包括姓名、性别、民族、出生日期、住址、公民身份证号、包括签发机关、有效期限"
                  },
                 {
                      "id":"2-2",
                      "name":"护照",
                      "code":"002013-1-护照",
                      "image":"/pages/image/select/passport.png",
                      "desc":"支持中国大陆护照、中国香港护照、泰国护照及其他国外护照个人资料页多个字段的检测与识别"
                  },
                 {
                      "id":"2-3",
                      "name":"户口本",
                      "code":"002017-1-户口本",
                      "image":"/pages/image/select/hukou.png",
                      "desc":"支持居民户口簿户主页及成员页关键字段的识别，包括姓名、户别、地址、籍贯、身份证号码等"
                  },
                  {
                      "id":"2-3",
                      "name":"港澳台居住",
                      "code":"002006-2-港澳台居住",
                      "image":"/pages/image/select/gangaojuzhu.png",
                      "desc":"支持港澳台居住证的正面及反面的关键字段识别，包含姓名、性别、出生、地址、身份证号、通行证号码、签发机关、有效期限、签发次数"
                  },
                  {
                      "id":"2-4",
                      "name":"港澳台内地通行",
                      "code":"002009-1-港澳台内地通行",
                      "image":"/pages/image/select/neiditong.png",
                      "desc":"支持港澳居民来往内地通行证及台湾居民来往大陆通行证识别，包含中英文姓名、出生日期、性别、有效期限、签发机关、证件号码、换证次数、证件类型"
                  },
                  {
                      "id":"2-5",
                      "name":"港澳台通行证",
                      "code":"002014-1-港澳台通行证",
                      "image":"/pages/image/select/gangaotong.png",
                      "desc":"支持对卡式港澳台通行证的识别，包括签发地点、签发机关、有效期限、性别、出生日期、英文姓名、姓名、证件号等字段"
                  },
                  {
                      "id":"2-6",
                      "name":"银行卡",
                      "code":"002001-1-银行卡",
                      "image":"/pages/image/select/bank.png",
                      "desc":"支持对中国大陆主流银行卡的卡号、银行信息、有效期等关键字段的检测与识别"
                  },
                  {
                      "id":"2-4",
                      "name":"不动产证",
                      "code":"002005-1-不动产证",
                      "image":"/pages/image/select/fangchan.png",
                      "desc":"支持不动产权证关键字段的识别，包括使用期限、面积、用途、权利性质、权利类型、坐落、共有情况、权利人、权利其他情况等。"
                  },
                  {
                      "id":"3-1",
                      "name":"营业执照",
                      "code":"002002-1-营业执照",
                      "image":"/pages/image/select/yingyezheng.png",
                      "desc":"支持快速精准识别营业执照上的字段，包括注册号、公司名称、经营场所、主体类型、法定代表人、注册资金、组成形式、成立日期、营业期限和经营范围等字段"
                  },
                  {
                      "id":"3-2",
                      "name":"企业执照",
                      "code":"002004-1-企业执照",
                      "image":"/pages/image/select/qiyezhang.png",
                      "desc":"支持智能化识别各类企业登记证书、许可证书、企业执照、三证合一类证书，结构化输出统一社会信用代码、公司名称、法定代表人、公司地址、注册资金、企业类型、经营范围等关键字段"
                  }
              
          ],
          "image":"/pages/image/select/ship.png",
          "desc":""
      },
      {
          "id":"2",
          "name":"票据",
          "titles":[
                  {
                      "id":"2-1",
                      "name":"增值发票",
                      "code":"001001-1-增值发票",
                      "image":"/pages/image/select/vatInvoice.png",
                      "desc":"支持增值税专用发票、增值税普通发票、增值税电子发票全字段的内容检测和识别，包括发票代码、发票号码、开票日期、合计金额、校验码、税率等"
                  },
                  {
                      "id":"2-2",
                      "name":"运单识别",
                      "code":"001018-1-运单识别",
                      "image":"/pages/image/select/yundan.png",
                      "desc":"支持市面上主流版式电子运单的识别，包括收件人和寄件人的姓名、电话、地址以及运单号等字段"
                  },
                  {
                      "id":"2-3",
                      "name":"火车票",
                      "code":"001016-1-火车票",
                      "image":"/pages/image/select/train.png",
                      "desc":"支持火车票全字段的识别，包括编号、票价、姓名、座位号、出发时间、出发站、到达站、车次、席别等"
                  },
                  {
                      "id":"2-4",
                      "name":"出车租票",
                      "code":"001014-1-出车租票",
                      "image":"/pages/image/select/taxi.png",
                      "desc":"支持出租车发票关键字段的识别，包括发票号码、发票代码、金额、日期等字段"
                  },
                  {
                      "id":"2-5",
                      "name":"汽车票",
                      "code":"001002-1-汽车票",
                      "image":"/pages/image/select/bus.png",
                      "desc":"支持识别公路汽车客票的发票代码、发票号码、日期、姓名、票价等字段"
                  },
                  {
                      "id":"2-6",
                      "name":"轮船票",
                      "code":"001013-1-轮船票",
                      "image":"/pages/image/select/ship.png",
                      "desc":"支持识别轮船票的发票代码、发票号码、日期、姓名、票价等字段。"
                  },
                  {
                      "id":"2-7",
                      "name":"行程单",
                      "code":"001007-1-行程单",
                      "image":"/pages/image/select/flight.png",
                      "desc":"支持机票行程单关键字段的识别，包括姓名、身份证件号码、航班号、票价 、合计、电子客票号码、填开日期等"
                  },
                  {
                      "id":"2-8",
                      "name":"路桥费",
                      "code":"001015-1-路桥费",
                      "image":"/pages/image/select/guolupiao.png",
                      "desc":"支持对过路过桥费发票的发票代码、发票号码、日期、小写金额等关键字段的识别"
                  },
                  {
                      "id":"2-9",
                      "name":"增值卷票",
                      "code":"001017-1-增值卷票",
                      "image":"/pages/image/select/zengzhipiao.png",
                      "desc":"支持对增值税发票（卷票）的发票代码、发票号码、日期、校验码、合计金额（小写）等关键字段的识别"
                  },
                  {
                      "id":"2-10",
                      "name":"定额发票",
                      "code":"001012-1-定额发票",
                      "image":"/pages/image/select/dingepiao.png",
                      "desc":"支持定额发票的发票号码、发票代码及金额等关键字段的识别"
                  },
                  {
                      "id":"2-11",
                      "name":"通用发票",
                      "code":"001009-1-通用发票",
                      "image":"/pages/image/select/tongyongfapiao.png",
                      "desc":"支持对通用机打发票的发票代码、发票号码、日期、购买方识别号、销售方识别号、校验码、小写金额等关键字段的识别"
                  },
                  {
                      "id":"2-12",
                      "name":"购车发票",
                      "code":"001003-1-购车发票",
                      "image":"/pages/image/select/gouchepiao.png",
                      "desc":"支持机动车销售统一发票和二手车销售统一发票的识别，包括发票号码、发票代码、合计金额、合计税额等二十多个字段"
                  },
                 {
                      "id":"2-13",
                      "name":"完税证明",
                      "code":"001004-1-完税证明",
                      "image":"/pages/image/select/zhengming.png",
                      "desc":"支持对完税证明的税号、纳税人识别号、纳税人名称、金额合计大写、金额合计小写、填发日期、税务机关、填票人等关键字段的识别"
                  },
                  {
                      "id":"2-14",
                      "name":"混贴票据",
                      "code":"001011-1-混贴票据",
                      "image":"/pages/image/select/huntiepiao.png",
                      "desc":"支持多张、多类型票据的混合识别，目前已支持增值税发票、定额发票、火车票、出租车发票、机票行程单等共11种票据"
                  },
                  {
                      "id":"2-15",
                      "name":"金融票据",
                      "code":"001005-1-金融票据",
                      "image":"/pages/image/select/jingrong.png",
                      "desc":"支持常见银行票据的自动分类和识别。整单识别包括支票（含现金支票、普通支票、转账支票），承兑汇票（含银行承兑汇票、商业承兑汇票）以及进账单等"
                  },
                  {
                      "id":"2-16",
                      "name":"保险票据",
                      "code":"001008-1-保险票据",
                      "image":"/pages/image/select/baoxian.png",
                      "desc":"支持病案首页、费用清单、结算单、医疗发票四种理赔单据的文本识别和结构化输出，可用于保险用户申请保险报销时的信息录入和审核校对"
                  }
          ],
          "image":"/pages/image/select/ship.png",
          "desc":""
      },
      {
          "id":"3",
          "name":"车相关",
          "titles":[
                  {
                      "id":"3-1",
                      "name":"行驶证",
                      "code":"003003-2-行驶证",
                      "image":"/pages/image/select/carId.png",
                      "desc":"支持行驶证主页所有字段的自动定位与识别，包含号牌号码、车辆类型、所有人、住址、使用性质、品牌型号、车辆识别代码、发动机号码、注册日期、发证日期、印章、号牌号码、档案编号、核定人数、总质量、整备质量、核定载质量、外廓尺寸、备注、核验记录、准牵引总质量"
                  },
                  {
                      "id":"3-2",
                      "name":"驾驶证",
                      "code":"003001-1-驾驶证",
                      "image":"/pages/image/select/driverId.png",
                      "desc":"支持对驾驶证主页所有字段的自动定位与识别，包含证号、姓名、性别、国籍、住址、出生日期、初次领证日期、准驾车型、有效期限等"
                  },
                  {
                      "id":"3-3",
                      "name":"车牌",
                      "code":"003002-1-车牌",
                      "image":"/pages/image/select/chepai.png",
                      "desc":"支持对中国大陆机动车车牌的自动定位和识别，返回地域编号和车牌号信息"
                  },
                  {
                      "id":"3-4",
                      "name":"VIN码",
                      "code":"003005-1-VIN码",
                      "image":"/pages/image/select/VIN.png",
                      "desc":"支持图片内车辆识别代号（VIN）的检测和识别"
                  },
                  {
                      "id":"3-5",
                      "name":"机动车登记",
                      "code":"003004-1-机动车登记",
                      "image":"/pages/image/select/cheliangdengji.png",
                      "desc":"支持国内机动车登记证书主要字段的结构化识别，包括机动车所有人、身份证明名称、号码、车辆型号、车辆识别代号、发动机号、制造厂名称等"
                  }
          ],
          "image":"/pages/image/select/ship.png",
          "desc":""
      }

  ],
    load: true,
  },
  onLoad() {
    wx.showLoading({
      title: '加载中...',
      mask: true
    });
    // let list = [{"name":"卡证识别"},{"name":"票据识别"},{"name":"文档识别"},{"name":"汽车识别"},{"name":"通用识别"}];
    let list = this.data.funList;
    // for (let i = 0; i < list.length; i++) {
      // list[i] = {};
      // list[i].name = String.fromCharCode(65 + i);
      // list[i].id = i;
    // }
    // console.log("&&&&&&&&"+JSON.stringify(list));
    this.setData({
      list: list,
      listCur: list[0]
    })
  },
  onReady() {
    wx.hideLoading()
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      MainCur: e.currentTarget.dataset.id,
      VerticalNavTop: (e.currentTarget.dataset.id - 1) * 1
    })
  },
  VerticalMain(e) {
    let that = this;
    let list = this.data.list;
    let tabHeight = 0;
    if (this.data.load) {
      for (let i = 0; i < list.length; i++) {
        let view = wx.createSelectorQuery().select("#main-" + list[i].id);
        view.fields({
          size: true
        }, data => {
          list[i].top = tabHeight;
          tabHeight = tabHeight + data.height;
          list[i].bottom = tabHeight;    
        }).exec();
      }
      that.setData({
        load: false,
        list: list
      })
    }
    let scrollTop = e.detail.scrollTop +10;
    for (let i = 0; i < list.length; i++) {
      if (scrollTop > list[i].top && scrollTop < list[i].bottom) {
        that.setData({
          VerticalNavTop: (list[i].id - 1) * 1,
          TabCur: list[i].id
        })
        return false
      }
    }
  },
  check:function(event){
    console.log(event.currentTarget.dataset.gid);
    let gid=event.currentTarget.dataset.gid;
    if(gid.includes('005002-1')){
      wx.navigateTo({
        url: '/pages/danyeDeal/danyeDeal?typeCode='+gid
      })
    }else{
      wx.navigateTo({
        url: '/pages/check/check?typeCode='+gid
      })
    }
  }
})