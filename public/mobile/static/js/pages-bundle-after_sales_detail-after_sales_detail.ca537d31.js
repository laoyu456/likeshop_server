(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-bundle-after_sales_detail-after_sales_detail"],{"11a6":function(t,e,i){"use strict";i.r(e);var a=i("8e2e"),s=i("f13f");for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);i("c917");var o,r=i("f0c5"),l=Object(r["a"])(s["default"],a["b"],a["c"],!1,null,"0cf16de3",null,!1,a["a"],o);e["default"]=l.exports},"1b3b":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("cd1d"),s=(i("f9b6"),{data:function(){return{goods:{},reason:[],lists:{},copyContent:"",confirmDialog:!1}},components:{},props:{},onLoad:function(t){var e=t.afterSaleId,i=t.order_id;this.afterSaleId=e,this.orderId=i},onShow:function(){this.afterSaleDetailFun()},methods:{onCopy:function(){var t=this.lists,e=this.copyContent,i=t.shop.address;e=i,uni.setClipboardData({data:e})},goRefund:function(t){var e=this.lists;uni.navigateTo({url:"/pages/bundle/apply_refund/apply_refund?order_id="+this.orderId+"&afterSaleId="+this.afterSaleId+"&item_id="+e.order_goods.item_id})},showDialog:function(){this.confirmDialog=!0},hideDialog:function(){this.confirmDialog=!1},confirmCancel:function(){},cancelApplyFun:function(){var t=this;(0,a.cancelApply)({id:this.afterSaleId}).then((function(e){1==e.code&&(t.$toast({title:e.msg},{tab:5,url:"/pages/bundle/post_sale/post_sale"}),t.$emit("RESET_LIST"))}))},afterSaleDetailFun:function(){var t=this;(0,a.afterSaleDetail)({id:this.afterSaleId}).then((function(e){1==e.code&&(t.lists=e.data)}))}}});e.default=s},"2bac":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */.custom-image[data-v-0cf16de3]{position:relative;display:block;width:100%;height:100%}.custom-image.image-round[data-v-0cf16de3]{overflow:hidden;border-radius:50%}.custom-image .image[data-v-0cf16de3]{display:block;width:100%;height:100%}.custom-image .loading-wrap[data-v-0cf16de3],\n.custom-image .error-wrap[data-v-0cf16de3]{position:absolute;top:0;left:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#969799;font-size:%?28?%;background-color:#f7f8fa}',""]),t.exports=e},"2e19":function(t,e,i){var a=i("a7e3");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("0ef8e2d4",a,!0,{sourceMap:!1,shadowMode:!1})},"2e7e":function(t,e,i){"use strict";var a=i("fd0d"),s=i.n(a);s.a},"3d7a":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* pages/after_sales_detail/after_sales_detail.wxss */.after-sales-detail[data-v-6d689189]{padding-bottom:calc(%?120?% + env(safe-area-inset-bottom))}.after-sales-detail .after-sales-header .after-sales-status[data-v-6d689189]{padding:%?48?% %?30?%;background-color:#555}.after-sales-detail .after-sales-header .after-sales-explain[data-v-6d689189]{padding:%?20?% %?30?% %?24?%}.after-sales-detail .negotiation-record[data-v-6d689189]{padding:%?24?% %?30?%}.after-sales-detail .negotiation-record .arrow[data-v-6d689189]{width:%?28?%;height:%?28?%}.after-sales-detail .return-goods-container[data-v-6d689189]{padding:%?20?% %?24?% %?55?%}.after-sales-detail .return-goods-container .return-goods-row[data-v-6d689189]{line-height:%?40?%;font-weight:400}.after-sales-detail .btn-group[data-v-6d689189]{padding:%?0?% %?24?%;position:fixed;left:0;right:0;bottom:0;height:%?100?%}.after-sales-detail .btn-group .btn[data-v-6d689189]{padding:%?10?% %?34?%;border:1px solid #999}.after-sales-detail .goods-container .goods-header[data-v-6d689189]{padding:%?20?% %?24?%}.after-sales-detail .goods-container .goods-header .store-img[data-v-6d689189]{width:%?40?%;height:%?40?%}.after-sales-detail .goods-container .goods-header .store-name[data-v-6d689189]{line-height:%?40?%;-webkit-align-self:flex-end;align-self:flex-end;font-family:PingFang SC}.after-sales-detail .goods-container .goods-item[data-v-6d689189]{padding:%?25?% %?24?%}.after-sales-detail .goods-container .goods-item .goods-img[data-v-6d689189]{width:%?180?%;height:%?180?%;-webkit-box-flex:0;-webkit-flex:none;flex:none}.after-sales-detail .goods-container .goods-item .goods-info[data-v-6d689189]{margin-left:%?24?%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.return-address-contain[data-v-6d689189]{padding:%?20?% %?24?% %?28?% %?30?%}.return-address-contain .address[data-v-6d689189]{-webkit-box-flex:1;-webkit-flex:1;flex:1;line-height:%?38?%}.return-address-contain .address-title[data-v-6d689189]{width:%?150?%;-webkit-align-self:flex-start;align-self:flex-start;line-height:%?40?%}.return-address-contain .copy-btn[data-v-6d689189]{-webkit-box-flex:0;-webkit-flex:0 0 7%;flex:0 0 7%;background-color:#f4f4f4;color:#555;-webkit-align-self:flex-start;align-self:flex-start;padding:%?3?% %?16?%;margin-left:%?12?%;border-radius:%?4?%}.tips-dialog[data-v-6d689189]{height:%?230?%;width:100%}',""]),t.exports=e},5169:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{src:{type:String},round:Boolean,width:{type:null},height:{type:null},radius:null,lazyLoad:Boolean,useErrorSlot:Boolean,useLoadingSlot:Boolean,showMenuByLongpress:Boolean,mode:{type:String,default:"scaleToFill"},showError:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0}},data:function(){return{error:!1,loading:!0,viewStyle:{}}},created:function(){this.setStyle()},methods:{setStyle:function(){var t=this.width,e=this.height,i=this.radius,a={};t&&(a.width=t),e&&(a.height=e),i&&(a["overflow"]="hidden",a["border-radius"]=i),this.viewStyle=a},onLoaded:function(t){this.loading=!1,this.$emit("load",t.detail)},onErrored:function(t){this.error=!1,this.loading=!0,this.$emit("error",t.detail)},onClick:function(t){this.$emit("click",t.detail)}},watch:{src:function(){this.error=!1,this.loading=!0},width:function(){this.setStyle()},height:function(){this.setStyle()}}};e.default=a},"5d08":function(t,e,i){"use strict";i.r(e);var a=i("f10f"),s=i("d1e2");for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);i("f195");var o,r=i("f0c5"),l=Object(r["a"])(s["default"],a["b"],a["c"],!1,null,"a4a53404",null,!1,a["a"],o);e["default"]=l.exports},"70d1":function(t,e,i){"use strict";i.r(e);var a=i("1b3b"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=s.a},"7c9b":function(t,e,i){"use strict";i.r(e);var a=i("9d41"),s=i("70d1");for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);i("2e7e");var o,r=i("f0c5"),l=Object(r["a"])(s["default"],a["b"],a["c"],!1,null,"6d689189",null,!1,a["a"],o);e["default"]=l.exports},"873e":function(t,e,i){var a=i("2bac");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("d3f9c894",a,!0,{sourceMap:!1,shadowMode:!1})},"8e2e":function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var a={uIcon:i("4023").default},s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{class:{"custom-image":!0,"image-round":t.round},style:[t.viewStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.error?t._e():i("v-uni-image",{staticClass:"image",attrs:{src:t.src,mode:t.mode,"lazy-load":t.lazyLoad,"show-menu-by-longpress":t.showMenuByLongpress},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.onLoaded.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.onErrored.apply(void 0,arguments)}}}),t.loading&&t.showLoading?i("v-uni-view",{staticClass:"loading-wrap image"},[t.useLoadingSlot?t._t("loading"):i("u-icon",{attrs:{color:"#aaa",name:"photo-fill",size:"45"}})],2):t._e(),t.error&&t.showError?i("v-uni-view",{staticClass:"error-wrap image"},[t.useErrorSlot?t._t("error"):i("u-icon",{attrs:{color:"#aaa",name:"error-circle-fill",size:"45"}}),i("v-uni-text",{staticClass:"sm"},[t._v("加载失败")])],2):t._e()],1)},n=[]},"9d41":function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var a={customImage:i("11a6").default,priceFormat:i("5d08").default,uModal:i("ecca").default},s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"after-sales-detail"},[i("v-uni-view",{staticClass:"after-sales-header"},[i("v-uni-view",{staticClass:"after-sales-status white lg"},[t._v(t._s(t.lists.status_text))])],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!(0==t.lists.refund_type),expression:"!(lists.refund_type == 0)"}],staticClass:"return-address-contain row bg-white mt20"},[i("v-uni-view",{staticClass:"nr normal address-title"},[t._v("退货地址：")]),i("v-uni-view",{staticClass:"sm normal address line2"},[t._v(t._s(t.lists.shop&&t.lists.shop.address))]),i("v-uni-view",{staticClass:"xs copy-btn row-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onCopy.apply(void 0,arguments)}}},[t._v("复制")])],1),i("v-uni-view",{staticClass:"goods-container bg-white mt20"},[i("v-uni-view",{staticClass:"goods-item row"},[i("v-uni-view",{staticClass:"goods-img"},[i("custom-image",{attrs:{width:"100%",height:"100%",radius:"10rpx","lazy-load":!0,src:t.lists.order_goods&&t.lists.order_goods.image}})],1),i("v-uni-view",{staticClass:"goods-info"},[i("v-uni-view",{staticClass:"two-txt-cut nr"},[t._v(t._s(t.lists.order_goods&&t.lists.order_goods.goods_name))]),i("v-uni-view",{staticClass:"row-between mt20"},[i("price-format",{attrs:{price:t.lists.order_goods&&t.lists.order_goods.goods_price,firstSize:30,secondSize:30,showSubscript:!0,subscriptSize:30,color:"#101010"}}),i("v-uni-view",{staticClass:"nr"},[t._v("x"+t._s(t.lists.order_goods&&t.lists.order_goods.goods_num))])],1)],1)],1)],1),i("v-uni-view",{staticClass:"return-goods-container bg-white mt20"},[i("v-uni-view",{staticClass:"return-goods-row row sm"},[i("v-uni-view",{staticClass:"return-title"},[t._v("退款方式：")]),i("v-uni-view",{staticClass:"return-explain"},[t._v(t._s(0==t.lists.refund_type?"仅退款":"退款退货"))])],1),i("v-uni-view",{staticClass:"return-goods-row row sm mt20"},[i("v-uni-view",{staticClass:"return-title"},[t._v("退款原因：")]),i("v-uni-view",{staticClass:"return-explain"},[t._v(t._s(t.lists.refund_reason))])],1),i("v-uni-view",{staticClass:"return-goods-row row sm mt20"},[i("v-uni-view",{staticClass:"return-title"},[t._v("退款金额：")]),i("v-uni-view",{staticClass:"return-explain primary"},[t._v("¥"+t._s(t.lists.refund_price))])],1),i("v-uni-view",{staticClass:"return-goods-row row sm mt20"},[i("v-uni-view",{staticClass:"return-title"},[t._v("退款编号：")]),i("v-uni-view",{staticClass:"return-explain"},[t._v(t._s(t.lists.sn))])],1),i("v-uni-view",{staticClass:"return-goods-row row sm mt20"},[i("v-uni-view",{staticClass:"return-title"},[t._v("申请时间：")]),i("v-uni-view",{staticClass:"return-explain"},[t._v(t._s(t.lists.create_time))])],1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!(6==t.lists.status),expression:"!(lists.status == 6)"}],staticClass:"btn-group fixed bg-white row-end"},[i("v-uni-view",{staticClass:"mr20 btn br60",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showDialog.apply(void 0,arguments)}}},[t._v("撤销申请")]),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:4==t.lists.status||1==t.lists.status,expression:"(lists.status == 4 || lists.status == 1)"}],staticClass:"mr20 btn br60",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goRefund.apply(void 0,arguments)}}},[t._v("重新申请")]),i("v-uni-navigator",{directives:[{name:"show",rawName:"v-show",value:2==t.lists.status,expression:"lists.status == 2"}],staticClass:"mr20 btn br60",attrs:{"hover-class":"none",url:"/pages/bundle/input_express_info/input_express_info?id="+t.lists.id}},[t._v("填写快递单号")]),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"btn br60"},[t._v("平台退款")])],1)],1),i("u-modal",{attrs:{"confirm-text":"确定",showCancelButton:!0,"show-title":!1,"confirm-color":"#FF2C3C"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.cancelApplyFun.apply(void 0,arguments)},cancel:function(e){arguments[0]=e=t.$handleEvent(e),t.hideDialog.apply(void 0,arguments)}},model:{value:t.confirmDialog,callback:function(e){t.confirmDialog=e},expression:"confirmDialog"}},[i("v-uni-view",{staticClass:"column-center tips-dialog",staticStyle:{padding:"20rpx 0"}},[i("v-uni-image",{staticClass:"icon-lg",attrs:{src:"/static/images/icon_warning.png"}}),i("v-uni-view",{staticStyle:{"margin-top":"30rpx"}},[t._v("是否要撤销申请？")])],1)],1)],1)},n=[]},a7e3:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".price-format[data-v-a4a53404]{font-family:Avenir}",""]),t.exports=e},c917:function(t,e,i){"use strict";var a=i("873e"),s=i.n(a);s.a},d1e2:function(t,e,i){"use strict";i.r(e);var a=i("d2a5"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=s.a},d2a5:function(t,e,i){"use strict";i("a9e3"),i("acd8"),i("ac1f"),i("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{priceSlice:{}}},components:{},props:{firstSize:{type:Number,default:28},secondSize:{type:Number,default:28},color:{type:String},weight:{type:[String,Number],default:400},price:{type:[String,Number],default:""},showSubscript:{type:Boolean,default:!0},subscriptSize:{type:Number,default:28},lineThrough:{type:Boolean,default:!1}},created:function(){this.priceFormat()},watch:{price:function(t){this.priceFormat()}},methods:{priceFormat:function(){var t=this.price,e={};null!==t&&(t=parseFloat(t),t=String(t).split("."),e.first=t[0],e.second=t[1],this.priceSlice=e)}}};e.default=a},f10f:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-text",{class:(t.lineThrough?"line-through":"")+" price-format",style:{color:t.color,"font-weight":t.weight}},[t.showSubscript?i("v-uni-text",{style:{"font-size":t.subscriptSize+"rpx","margin-right":"2rpx"}},[t._v("¥")]):t._e(),i("v-uni-text",{style:{"font-size":t.firstSize+"rpx","margin-right":"1rpx"}},[t._v(t._s(t.priceSlice.first))]),t.priceSlice.second?i("v-uni-text",{style:{"font-size":t.secondSize+"rpx"}},[t._v("."+t._s(t.priceSlice.second))]):t._e()],1)},n=[]},f13f:function(t,e,i){"use strict";i.r(e);var a=i("5169"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=s.a},f195:function(t,e,i){"use strict";var a=i("2e19"),s=i.n(a);s.a},fd0d:function(t,e,i){var a=i("3d7a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("75e85f17",a,!0,{sourceMap:!1,shadowMode:!1})}}]);