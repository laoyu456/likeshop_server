(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-bundle-user_wallet-user_wallet"],{1558:function(t,a,i){"use strict";i.r(a);var e=i("2f8f"),n=i("1de7");for(var s in n)"default"!==s&&function(t){i.d(a,t,(function(){return n[t]}))}(s);i("1621");var r,c=i("f0c5"),l=Object(c["a"])(n["default"],e["b"],e["c"],!1,null,"2349a213",null,!1,e["a"],r);a["default"]=l.exports},1621:function(t,a,i){"use strict";var e=i("36cb"),n=i.n(e);n.a},"1de7":function(t,a,i){"use strict";i.r(a);var e=i("1ef8"),n=i.n(e);for(var s in e)"default"!==s&&function(t){i.d(a,t,(function(){return e[t]}))}(s);a["default"]=n.a},"1ef8":function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=i("cd1d"),n=i("f9b6"),s={data:function(){return{wallet:{}}},components:{},props:{},onShow:function(){this.getWalletFun()},methods:{goPage:function(t){(0,n.goToPay)("/pages/bundle/user_payment/user_payment")},getWalletFun:function(){var t=this;(0,e.getWallet)().then((function(a){1==a.code&&(t.wallet=a.data)}))}}};a.default=s},"2f8f":function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return s})),i.d(a,"a",(function(){return e}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"user-wallet"},[i("v-uni-view",{staticClass:"contain bg-white mb20"},[i("v-uni-view",{staticClass:"header"},[i("v-uni-view",{staticClass:"white mb20"},[i("v-uni-view",{staticClass:"xs"},[t._v("总资产（元）")]),i("v-uni-view",{staticStyle:{"font-size":"76rpx"}},[t._v(t._s(t.wallet.user_money))])],1),i("v-uni-view",{staticClass:"money white row"},[i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"xs"},[t._v("累计充值(元)")]),i("v-uni-view",{staticStyle:{"font-size":"38rpx"}},[t._v(t._s(t.wallet.total_recharge_amount||0))])],1),i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"xs"},[t._v("累计消费(元)")]),i("v-uni-view",{staticStyle:{"font-size":"38rpx"}},[t._v(t._s(t.wallet.total_order_amount||0))])],1),t.wallet.open_racharge?i("v-uni-view",{staticClass:"row-center primary bg-white br60 btn",staticStyle:{height:"58rpx"},attrs:{size:"xs"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goPage.apply(void 0,arguments)}}},[t._v("充值")]):t._e()],1)],1),i("v-uni-view",{staticClass:"nav row"},[i("v-uni-navigator",{staticClass:"nav-item column-center",attrs:{"hover-class":"none",url:"/pages/bundle/user_bill/user_bill?type=0"}},[i("v-uni-image",{attrs:{src:"/static/images/icon_account.png"}}),i("v-uni-view",{staticClass:"mt10"},[t._v("账户明细")])],1),i("v-uni-navigator",{staticClass:"nav-item column-center",attrs:{"hover-class":"none",url:"/pages/bundle/user_bill/user_bill?type=1"}},[i("v-uni-image",{attrs:{src:"/static/images/icon_consume.png"}}),i("v-uni-view",{staticClass:"mt10"},[t._v("消费记录")])],1),i("v-uni-navigator",{staticClass:"nav-item column-center",attrs:{"hover-class":"none",url:"/pages/bundle/user_bill/user_bill?type=2"}},[i("v-uni-image",{attrs:{src:"/static/images/icon_recharge.png"}}),i("v-uni-view",{staticClass:"mt10"},[t._v("充值记录")])],1)],1),i("v-uni-view",{staticClass:"activity"},[i("v-uni-view",{staticClass:"activity-title xl row"},[i("v-uni-view",{staticClass:"mr20",staticStyle:{width:"6rpx",height:"30rpx","background-color":"#FF2C3C"}}),t._v("热门活动")],1),i("v-uni-view",{staticClass:"activity-item row-between"},[i("v-uni-view",[i("v-uni-view",{staticClass:"xl normal",staticStyle:{"font-weight":"500"}},[t._v("会员积分 限时兑换")]),i("v-uni-view",{staticClass:"muted sm mt10"},[t._v("积分签到抵现金")]),i("v-uni-navigator",{staticClass:"br60 bg-primary white join-btn row-center",attrs:{url:"/pages/bundle/user_sign/user_sign","hover-class":"none"}},[t._v("立即参与")])],1),i("v-uni-image",{staticStyle:{width:"274rpx",height:"210rpx"},attrs:{src:"/static/images/img_activity_jifen.png"}})],1)],1)],1)],1)},s=[]},"36cb":function(t,a,i){var e=i("854e");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("9a30ccf2",e,!0,{sourceMap:!1,shadowMode:!1})},"854e":function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */uni-image[data-v-2349a213]{width:100%;height:100%}.user-wallet .contain[data-v-2349a213]{padding:%?20?% %?30?% %?36?%}.user-wallet .contain .header[data-v-2349a213]{position:relative;background:-webkit-linear-gradient(top,#ff2c3c,#ff316a);background:linear-gradient(180deg,#ff2c3c,#ff316a);border-radius:%?20?%;height:%?320?%;padding:%?50?% %?30?% %?30?%;box-sizing:border-box}.user-wallet .contain .header .money .item[data-v-2349a213]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.user-wallet .contain .header .btn[data-v-2349a213]{position:absolute;right:%?30?%;top:%?50?%;padding:0 %?51?%}.user-wallet .contain .nav[data-v-2349a213]{border-bottom:var(--border)}.user-wallet .contain .nav .nav-item[data-v-2349a213]{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:%?40?% 0}.user-wallet .contain .nav .nav-item uni-image[data-v-2349a213]{width:%?62?%;height:%?62?%}.activity[data-v-2349a213]{padding:%?40?% %?0?%}.activity .activity-title[data-v-2349a213]{font-weight:700}.activity .activity-item[data-v-2349a213]{padding:%?15?% %?40?%;box-shadow:0 %?0?% %?20?% rgba(0,0,0,.16);margin-top:%?34?%}.activity .activity-item .join-btn[data-v-2349a213]{height:%?52?%;width:%?156?%;margin-top:%?24?%}',""]),t.exports=a}}]);