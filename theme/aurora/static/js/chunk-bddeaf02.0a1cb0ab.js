(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bddeaf02"],{"25b2":function(t,a,e){"use strict";e.d(a,"a",(function(){return s}));var n=e("77fe"),s=new n["a"]({WAIT_PAY:[0,"待支付"],OPENING:[1,"开通中"],CANCEL:[2,"已取消"],END:[3,"已完成"]})},"77fe":function(t,a,e){"use strict";var n=e("d4ec"),s=e("bee2"),r=(e("d3b7"),e("159b"),e("b64b"),e("d81d"),e("7db0"),function(){function t(a){Object(n["a"])(this,t),this.defination=a,this.parseDefination()}return Object(s["a"])(t,[{key:"parseDefination",value:function(){var t=this;Object.keys(this.defination).forEach((function(a){t[a]=t.defination[a][0]}))}},{key:"toArray",value:function(){var t=this,a=Object.keys(this.defination).map((function(a){var e=t.defination[a];return{value:e[0],label:e[1]}}));return a}},{key:"getLabel",value:function(t){var a,e;return null!==(a=null===(e=this.toArray().find((function(a){return String(a.value)===String(t)})))||void 0===e?void 0:e.label)&&void 0!==a?a:""}}]),t}());a["a"]=r},"791b":function(t,a,e){"use strict";e("cb76")},"89cf":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"order-info use-shadow"},[t.orderData?e("div",[e("div",{staticClass:"g-group"},[e("div",{staticClass:"header"},[t._v("订单详情")]),e("div",{staticClass:"items"},[e("div",{staticClass:"item"},[e("span",{staticClass:"tit"},[t._v("订单号:")]),e("span",{staticClass:"value"},[t._v(t._s(t.orderData.trade_no))])]),e("div",{staticClass:"item"},[e("span",{staticClass:"tit"},[t._v("创建时间:")]),e("span",{staticClass:"value"},[t._v(t._s(t._f("datetime")(t.orderData.created_at)))])])]),t.orderData.status===t.States.WAIT_PAY?e("button",{directives:[{name:"wave",rawName:"v-wave"}],staticClass:"btn-cancel n-button color-3",attrs:{type:"button"},on:{click:t.onCancel}},[e("svg-icon",{attrs:{name:"x"}}),t._v(" 取消订单 ")],1):t._e()]),e("a-divider"),e("div",{staticClass:"g-group"},[e("div",{staticClass:"header"},[t._v("商品详情")]),e("div",{staticClass:"items"},[e("div",{staticClass:"item"},[e("span",{staticClass:"tit"},[t._v("商品名称:")]),e("span",{staticClass:"value"},[t._v(t._s(t.orderData.plan.name))])]),e("div",{staticClass:"item"},[e("span",{staticClass:"tit"},[t._v("类型/周期:")]),e("span",{staticClass:"value"},[t._v(t._s(t.orderData.periodLabel))])]),e("div",{staticClass:"item"},[e("span",{staticClass:"tit"},[t._v("产品流量:")]),e("span",{staticClass:"value"},[t._v(t._s(t._f("flow")(t.orderData.flowValue))+t._s("onetime_price"===t.orderData.period?"":"/每月"))])])]),e("div",{staticClass:"tag-state2"},[e("span",[t._v(t._s(t.orderStateLabel))])])]),e("a-divider"),e("a-row",{attrs:{gutter:[40,40]}},[e("a-col",{attrs:{xs:24,md:16}},[e("div",{staticClass:"g-group"},[e("div",{staticClass:"header"},[t._v("支付方式")]),e("div",{staticClass:"items",class:{disabled:t.orderData.status!==t.States.WAIT_PAY}},t._l(t.payments,(function(a){return e("div",{key:a.id,staticClass:"item",on:{click:function(e){t.payType=a.id}}},[e("button",{directives:[{name:"wave",rawName:"v-wave"}],staticClass:"btn-payment",class:{"is-active":t.payType===a.id},attrs:{type:"button"}},[e("img",{directives:[{name:"show",rawName:"v-show",value:a.icon,expression:"item.icon"}],attrs:{src:a.icon,width:"30"}}),t._v(" "+t._s(a.name)+" "),a.handling_fee_percent?[t._v("("+t._s(a.handling_fee_percent+"%")+"手续费)")]:t._e()],2)])})),0)])]),e("a-col",{attrs:{xs:24,md:8}},[e("div",{staticClass:"g-group"},[e("div",{staticClass:"header"},[t._v("订单摘要")]),e("div",{staticClass:"items"},[e("div",{staticClass:"item"},[e("span",{staticClass:"tit"},[t._v("商品价格:")]),e("span",{staticClass:"value"},[t._v(t._s(t._f("amount")(t.orderData.plan[t.orderData.period])))])]),e("div",{staticClass:"item"},[e("span",{staticClass:"tit"},[t._v("余额支付:")]),e("span",{staticClass:"value"},[t._v(t._s(t._f("amount")(t.orderData.balance_amount)))])]),e("div",{staticClass:"item"},[e("span",{staticClass:"tit"},[t._v("抵扣金额:")]),e("span",{staticClass:"value"},[t._v(t._s(t._f("amount")(t.orderData.discount_amount)))])]),e("div",{staticClass:"item"},[e("span",{staticClass:"tit"},[t._v("总计:")]),e("span",{staticClass:"value"},[t._v(t._s(t._f("amount")(t.orderData.total_amount)))])])])])])],1),e("a-divider"),t.orderData.status===t.States.WAIT_PAY?e("div",{staticClass:"g-btns"},[e("a-button",{staticClass:"btn",attrs:{icon:"shopping-cart",loading:t.loading,type:"primary"},on:{click:t.onCallPay}},[t._v("立即支付")])],1):t._e()],1):e("div",{staticClass:"spin-loading"},[e("a-spin",{attrs:{size:"large"}})],1)])},s=[],r=e("c7eb"),i=e("1da1"),c=(e("7db0"),e("d3b7"),e("ac1f"),e("5319"),e("c678")),o=e("a1fc"),l=e("25b2"),u=e("f248"),d=e.n(u),v={name:"OrderInfo",data:function(){return{orderData:null,payments:[],payType:"",loading:!1,States:l["a"]}},computed:{orderStateLabel:function(){return l["a"].getLabel(this.orderData.status)}},mounted:function(){this.getOrderData(),this.getPayments()},methods:{getOrderData:function(){var t=this;return Object(i["a"])(Object(r["a"])().mark((function a(){var e,n,s,i;return Object(r["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(c["c"])(t.$route.query.id);case 2:s=a.sent,i=null!==(e=s.data)&&void 0!==e?e:{},i.periodLabel=null===(n=o["b"].find((function(t){return t.key===i.period})))||void 0===n?void 0:n.label2,i.flowValue=d.a.parse(i.plan.transfer_enable+"GB"),t.orderData=i;case 7:case"end":return a.stop()}}),a)})))()},getPayments:function(){var t=this;return Object(i["a"])(Object(r["a"])().mark((function a(){var e,n;return Object(r["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(c["e"])();case 2:n=a.sent,t.payments=null!==(e=n.data)&&void 0!==e?e:[],t.payments.length>0&&(t.payType=t.payments[0].id);case 5:case"end":return a.stop()}}),a)})))()},onCancel:function(){var t=this;return Object(i["a"])(Object(r["a"])().mark((function a(){return Object(r["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.$confirm({title:"注意",content:"确定要取消该订单吗？",onOk:function(){var a=Object(i["a"])(Object(r["a"])().mark((function a(){var e;return Object(r["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(c["a"])(t.orderData.trade_no);case 2:e=a.sent,!0===e.data&&(t.$message.success("订单已取消"),t.getOrderData());case 4:case"end":return a.stop()}}),a)})));function e(){return a.apply(this,arguments)}return e}()});case 1:case"end":return a.stop()}}),a)})))()},onCallPay:function(){var t=this;return Object(i["a"])(Object(r["a"])().mark((function a(){var e;return Object(r["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(c["b"])(t.orderData.trade_no,t.payType);case 2:e=a.sent,1===e.type?(console.log("url",e.data),window.open(e.data,"_blank")):0===e.type?t.$router.replace({path:"/pay/qrcode",query:{img:encodeURIComponent(e.data),orderNo:t.orderData.trade_no}}):-1===e.type&&(t.$message.success("支付成功"),t.getOrderData());case 4:case"end":return a.stop()}}),a)})))()}}},p=v,f=(e("791b"),e("2877")),b=Object(f["a"])(p,n,s,!1,null,"05d1faa6",null);a["default"]=b.exports},a1fc:function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"a",(function(){return s}));e("4de4"),e("d3b7"),e("ac1f");var n=[{key:"month_price",label:"每月",label2:"月付"},{key:"quarter_price",label:"每季度",label2:"季付"},{key:"half_year_price",label:"每半年",label2:"半年付"},{key:"year_price",label:"每年",label2:"年付"},{key:"two_year_price",label:"每两年",label2:"两年付"},{key:"three_year_price",label:"每三年",label2:"三年付"},{key:"onetime_price",label:"一次性",label2:"一次性付"}];function s(t){var a,e=n.filter((function(a){return null!==t[a.key]})),s=null===(a=/<div\s+class="t0".*?>(.*)<\/div>/gi.exec(t.content))||void 0===a?void 0:a[1],r=function(){return null!==t.capacity_limit&&t.capacity_limit<10?t.capacity_limit<=0?"已售罄":"即将售罄":s},i=r();return{types:e,value:t[e[0].key],label:e[0].label,label2:e[0].label2,tagTitle:i}}},bee2:function(t,a,e){"use strict";e.d(a,"a",(function(){return r}));var n=e("a38e");function s(t,a){for(var e=0;e<a.length;e++){var s=a[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,Object(n["a"])(s.key),s)}}function r(t,a,e){return a&&s(t.prototype,a),e&&s(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}},c678:function(t,a,e){"use strict";e.d(a,"d",(function(){return r})),e.d(a,"c",(function(){return i})),e.d(a,"e",(function(){return c})),e.d(a,"a",(function(){return o})),e.d(a,"b",(function(){return l}));e("99af");var n=e("54d7"),s=e("8c8a");function r(){return Object(s["a"])({url:n["g"]+"/api/v1/user/order/fetch",method:"get"})}function i(t){return Object(s["a"])({url:n["g"]+"/api/v1/user/order/detail?trade_no=".concat(t),method:"get"})}function c(){return Object(s["a"])({url:n["g"]+"/api/v1/user/order/getPaymentMethod",method:"get"})}function o(t){return Object(s["a"])({url:n["g"]+"/api/v1/user/order/cancel?trade_no=".concat(t),method:"post"})}function l(t,a){return Object(s["a"])({url:n["g"]+"/api/v1/user/order/checkout?trade_no=".concat(t,"&method=").concat(a),method:"post"})}},cb76:function(t,a,e){},d4ec:function(t,a,e){"use strict";e.d(a,"a",(function(){return n}));e("d9e2");function n(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}}}]);