(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-569e4ee8"], {
    "004a": function(t, e, a) {
        "use strict";
        a.d(e, "c", (function() {
            return s
        })),
        a.d(e, "b", (function() {
            return i
        })),
        a.d(e, "a", (function() {
            return r
        }));
        var n = a("77fe"),
        s = new n["a"]({
            ALL: [0, "全部"],
            PERIOD: [1, "按周期"],
            ONE_TIME: [2, "按流量"]
        }),
        i = new n["a"]({
            NUMBER: [1, "折扣金额"],
            PERCENT: [2, "折扣百分比"]
        }),
        r = new n["a"]({
            UNBUY: [1, "未购买"],
            PERIOD: [2, "周期性订阅"],
            ONE_TIME: [3, "一次性订阅"]
        })
    },
    "12a6": function(t, e, a) {
        "use strict";
        a.r(e);
        var n = function() {
            var t = this,
            e = t.$createElement,
            a = t._self._c || e;
            return a("div", {
                staticClass: "dashboard-container"
            },
            [a("div", {
                staticClass: "overview-box"
            },
            [t.isVIP ? a("a-row", {
                attrs: {
                    gutter: [20, 20]
                }
            },
            [a("a-col", {
                attrs: {
                    md: 12,
                    xl: 6
                }
            },
            [a("div", {
                staticClass: "item use-shadow",
                on: {
                    click: t.onBuySubs
                }
            },
            [a("div", {
                staticClass: "icon"
            },
            [a("svg-icon", {
                attrs: {
                    name: "calendar-check"
                }
            })], 1), a("div", {
                staticClass: "right"
            },
            [t.comboType === t.ComboEnum.PERIOD ? [a("div", {
                staticClass: "tit"
            },
            [t._v(t._s(t._f("date")(t.expiredDate)))]), a("div", {
                staticClass: "exp"
            },
            [t.expiredResidue > 0 ? a("span", [t._v("到期时间")]) : a("span", {
                staticStyle: {
                    color: "#ff4200"
                }
            },
            [t._v("已过期")])])] : t.comboType === t.ComboEnum.ONE_TIME ? [a("div", {
                staticClass: "tit"
            },
            [t._v("无")]), a("div", {
                staticClass: "exp"
            },
            [a("span", [t._v("到期时间")])])] : t.comboType === t.ComboEnum.UNBUY ? [a("div", {
                staticClass: "exp"
            },
            [a("span", [t._v("未购买订阅")])])] : t._e()], 2), a("a-icon", {
                staticClass: "arrow",
                attrs: {
                    type: "right"
                }
            })], 1)]), a("a-col", {
                attrs: {
                    md: 12,
                    xl: 6
                }
            },
            [a("div", {
                staticClass: "item use-shadow",
                on: {
                    click: function(e) {
                        return t.$router.push("/stage/invite")
                    }
                }
            },
            [a("div", {
                staticClass: "icon"
            },
            [a("svg-icon", {
                attrs: {
                    name: "currency-jpy"
                }
            })], 1), a("div", {
                staticClass: "right"
            },
            [a("div", {
                staticClass: "tit"
            },
            [t._v(t._s(t._f("amount")(t.leftBalance)))]), a("div", {
                staticClass: "exp"
            },
            [t._v("帐户余额")])]), a("a-icon", {
                staticClass: "arrow",
                attrs: {
                    type: "right"
                }
            })], 1)]), a("a-col", {
                attrs: {
                    md: 12,
                    xl: 6
                }
            },
            [a("div", {
                staticClass: "item use-shadow",
                on: {
                    click: function(e) {
                        return t.$router.push("/stage/mysubs")
                    }
                }
            },
            [a("div", {
                staticClass: "icon"
            },
            [a("svg-icon", {
                attrs: {
                    name: "chart-bar"
                }
            })], 1), a("div", {
                staticClass: "right"
            },
            [a("div", {
                staticClass: "tit"
            },
            [t._v(t._s(t._f("flow")(t.leftFlow)))]), a("div", {
                staticClass: "exp"
            },
            [t._v("剩余流量")])]), a("a-icon", {
                staticClass: "arrow",
                attrs: {
                    type: "right"
                }
            })], 1)]), a("a-col", {
                attrs: {
                    md: 12,
                    xl: 6
                }
            },
            [a("div", {
                staticClass: "item use-shadow",
                on: {
                    click: function(e) {
                        return t.$router.push("/stage/ticket")
                    }
                }
            },
            [a("div", {
                staticClass: "icon"
            },
            [a("svg-icon", {
                attrs: {
                    name: "alarm"
                }
            })], 1), a("div", {
                staticClass: "right"
            },
            [a("div", {
                staticClass: "tit"
            },
            [t._v(t._s(t.workOrders) + " 条")]), a("div", {
                staticClass: "exp"
            },
            [t._v("待办工单")])]), a("a-icon", {
                staticClass: "arrow",
                attrs: {
                    type: "right"
                }
            })], 1)])], 1) : a("div", {
                staticClass: "spin-loading"
            },
            [a("a-spin", {
                attrs: {
                    size: "large"
                }
            })], 1)], 1), a("subscribe-info", {
                attrs: {
                    reverse: ""
                },
                on: {
                    change: t.onSubscribeChange
                }
            }), a("div", {
                staticClass: "panel-box"
            },
            [t._m(0), a("div", {
                staticClass: "panel-body flow-box use-shadow",
                staticStyle: {
                    padding: "0"
                }
            },
            [t.chartData ? a("div", [t.chartData.length > 0 ? a("div", {
                ref: "refChart",
                staticClass: "chart-box"
            }) : a("div", {
                staticClass: "no-data"
            },
            [a("a-empty", {
                attrs: {
                    image: t.simpleImage,
                    description: "暂无数据"
                }
            })], 1)]) : a("div", {
                staticClass: "spin-loading"
            },
            [a("a-spin", {
                attrs: {
                    size: "large"
                }
            })], 1)])])], 1)
        },
        s = [function() {
            var t = this,
            e = t.$createElement,
            a = t._self._c || e;
            return a("div", {
                staticClass: "panel-header"
            },
            [a("span", {
                staticClass: "tit"
            },
            [t._v("流量明细")])])
        }],
        i = a("c7eb"),
        r = a("1da1"),
        o = (a("14d9"), a("b0c0"), a("a15b"), a("d81d"), a("fc25")),
        c = a("22b4"),
        u = a("1be7"),
        l = a("3620"),
        d = a("9394"),
        b = a("2da7"),
        v = a("4b2a"),
        p = a("5e81"),
        f = a("e600"),
        m = a("ee29"),
        h = a("c55a"),
        C = a("f95e"),
        g = a("0a1e"),
        w = a("1f51"),
        _ = a("004a"),
        x = a("f4e7"),
        y = a("5a0c"),
        k = a.n(y),
        I = a("f248"),
        O = a.n(I);
        c["a"]([d["a"], b["a"], v["a"], p["a"], f["a"], l["a"], m["a"], h["a"], C["a"]]);
        var E = {
            name: "Dashboard",
            components: {
                SubscribeInfo: x["a"]
            },
            data: function() {
                return {
                    chartData: null,
                    workOrders: 0,
                    expiredDate: "",
                    expiredResidue: null,
                    comboType: null,
                    leftFlow: "",
                    leftBalance: 0,
                    planId: "",
                    simpleImage: "",
                    ComboEnum: _["a"]
                }
            },
            computed: {
                isVIP: function() {
                    return ! 0
                }
            },
            created: function() {
                this.simpleImage = o["a"].PRESENTED_IMAGE_SIMPLE
            },
            mounted: function() {
                this.initFlowChart(),
                this.initMySubscribe()
            },
            methods: {
                initMySubscribe: function() {
                    var t = this;
                    return Object(r["a"])(Object(i["a"])().mark((function e() {
                        var a, n, s;
                        return Object(i["a"])().wrap((function(e) {
                            while (1) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                Object(g["a"])();
                            case 2:
                                s = e.sent,
                                t.workOrders = null !== (a = s.data[1]) && void 0 !== a ? a: 0,
                                t.leftBalance = null !== (n = s.data[2]) && void 0 !== n ? n: 0;
                            case 5:
                            case "end":
                                return e.stop()
                            }
                        }), e)
                    })))()
                },
                onSubscribeChange: function(t) {
                    var e = t.expiredDate,
                    a = t.expiredResidue,
                    n = t.leftFlow,
                    s = t.planId,
                    i = t.comboType;
                    this.expiredDate = e,
                    this.expiredResidue = a,
                    this.comboType = i,
                    this.leftFlow = n,
                    this.planId = s
                },
                onBuySubs: function() {
                    this.planId ? this.$router.push("/stage/buysubs/order?id=" + this.planId) : this.$router.push("/stage/buysubs")
                },
                initFlowChart: function() {
                    var t = this;
                    return Object(r["a"])(Object(i["a"])().mark((function e() {
                        var a, n, s, r, o;
                        return Object(i["a"])().wrap((function(e) {
                            while (1) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                Object(w["a"])();
                            case 2:
                                if (a = e.sent, n = a.data, s = void 0 === n ? [] : n, t.chartData = s, 0 !== s.length) {
                                    e.next = 8;
                                    break
                                }
                                return e.abrupt("return");
                            case 8:
                                return e.next = 10,
                                t.$nextTick();
                            case 10:
                                r = t.$refs.refChart,
                                o = u["b"](r),
                                o.setOption({
                                    tooltip: {
                                        trigger: "axis",
                                        formatter: function(t) {
                                            return 0 === t.length ? "": t[0].name + "<br>" + t.map((function(t) {
                                                return t.marker + t.seriesName + " " + O()(t.value)
                                            })).join("<br>")
                                        },
                                        axisPointer: {
                                            type: "cross",
                                            label: {
                                                backgroundColor: "#6a7985"
                                            }
                                        }
                                    },
                                    grid: {
                                        left: 100,
                                        right: 60,
                                        top: 40,
                                        bottom: 40
                                    },
                                    xAxis: {
                                        type: "category",
                                        boundaryGap: !1,
                                        data: s.map((function(t) {
                                            return k.a.unix(t.record_at).format("YYYY-MM-DD")
                                        }))
                                    },
                                    yAxis: {
                                        type: "value",
                                        axisLabel: {
                                            formatter: function(t) {
                                                return O()(t)
                                            }
                                        }
                                    },
                                    series: [{
                                        name: "上行",
                                        data: s.map((function(t) {
                                            return t.u
                                        })),
                                        type: "line",
                                        smooth: !0,
                                        showSymbol: !1,
                                        stack: "flow",
                                        areaStyle: {}
                                    },
                                    {
                                        name: "下行",
                                        data: s.map((function(t) {
                                            return t.d
                                        })),
                                        type: "line",
                                        smooth: !0,
                                        showSymbol: !1,
                                        stack: "flow",
                                        areaStyle: {}
                                    }]
                                }),
                                window.addEventListener("resize", (function() {
                                    o.resize()
                                }), !1);
                            case 14:
                            case "end":
                                return e.stop()
                            }
                        }), e)
                    })))()
                }
            }
        },
        T = E,
        j = (a("21ea"), a("2877")),
        D = Object(j["a"])(T, n, s, !1, null, "56095107", null);
        e["default"] = D.exports
    },
    "1dd1": function(t, e, a) {
        "use strict";
        a.d(e, "b", (function() {
            return i
        })),
        a.d(e, "a", (function() {
            return r
        })),
        a.d(e, "f", (function() {
            return o
        })),
        a.d(e, "e", (function() {
            return c
        })),
        a.d(e, "c", (function() {
            return u
        })),
        a.d(e, "d", (function() {
            return l
        }));
        var n = a("54d7"),
        s = a("8c8a");
        function i() {
            return Object(s["a"])({
                url: n["g"] + "/api/v1/user/plan/fetch",
                method: "get"
            })
        }
        function r(t) {
            return Object(s["a"])({
                url: n["g"] + "/api/v1/user/plan/fetch?id=".concat(t),
                method: "get"
            })
        }
        function o(t) {
            return Object(s["a"])({
                url: n["g"] + "/api/v1/user/coupon/check",
                method: "post",
                data: t
            })
        }
        function c(t) {
            return Object(s["a"])({
                url: n["g"] + "/api/v1/user/order/save",
                method: "post",
                params: t
            })
        }
        function u() {
            return Object(s["a"])({
                url: n["g"] + "/api/v1/user/server/fetch",
                method: "get"
            })
        }
        function l() {
            return Object(s["a"])({
                url: n["g"] + "/api/v1/user/getSubscribe",
                method: "get"
            })
        }
    },
    "1f51": function(t, e, a) {
        "use strict";
        a.d(e, "a", (function() {
            return i
        }));
        var n = a("54d7"),
        s = a("8c8a");
        function i() {
            return Object(s["a"])({
                url: n["g"] + "/api/v1/user/stat/getTrafficLog",
                method: "get"
            })
        }
    },
    "21ea": function(t, e, a) {
        "use strict";
        a("5285")
    },
    5285 : function(t, e, a) {},
    "77fe": function(t, e, a) {
        "use strict";
        var n = a("d4ec"),
        s = a("bee2"),
        i = (a("d3b7"), a("159b"), a("b64b"), a("d81d"), a("7db0"),
        function() {
            function t(e) {
                Object(n["a"])(this, t),
                this.defination = e,
                this.parseDefination()
            }
            return Object(s["a"])(t, [{
                key: "parseDefination",
                value: function() {
                    var t = this;
                    Object.keys(this.defination).forEach((function(e) {
                        t[e] = t.defination[e][0]
                    }))
                }
            },
            {
                key: "toArray",
                value: function() {
                    var t = this,
                    e = Object.keys(this.defination).map((function(e) {
                        var a = t.defination[e];
                        return {
                            value: a[0],
                            label: a[1]
                        }
                    }));
                    return e
                }
            },
            {
                key: "getLabel",
                value: function(t) {
                    var e, a;
                    return null !== (e = null === (a = this.toArray().find((function(e) {
                        return String(e.value) === String(t)
                    }))) || void 0 === a ? void 0 : a.label) && void 0 !== e ? e: ""
                }
            }]),
            t
        } ());
        e["a"] = i
    },
    c262: function(t, e, a) {
        "use strict";
        a("eb1e")
    },
    eb1e: function(t, e, a) {},
    f252: function(t, e, a) {},
    f4e7: function(t, e, a) {
        "use strict";
        var n = function() {
            var t = this,
            e = t.$createElement,
            a = t._self._c || e;
            return a("div", {
                staticClass: "subscribe-info",
                class: {
                    "is-reverse": t.reverse
                }
            },
            [a("div", {
                staticClass: "panel-box col-1"
            },
            [t._m(0), t.comboType ? a("div", {
                staticClass: "panel-body subs-box use-shadow"
            },
            [t.comboType === t.ComboEnum.PERIOD || t.comboType === t.ComboEnum.ONE_TIME ? a("div", {
                staticClass: "subs-msg"
            },
            [a("div", {
                staticClass: "t1"
            },
            [t._v(t._s(t.subscribe.plan.name))]), t.comboType === t.ComboEnum.PERIOD ? [t.expiredResidue > 0 ? a("p", {
                staticClass: "t2"
            },
            [t._v(" 于 " + t._s(t._f("date")(t.expiredDate)) + " 到期，距离到期还有 " + t._s(t.expiredResidue) + " 天，已用流量将在 " + t._s(t.subscribe.reset_day) + " 日后重置 ")]) : a("p", {
                staticClass: "t2 re"
            },
            [t._v("已过期")])] : [a("p", {
                staticClass: "t2"
            },
            [t._v("一次性订阅的流量没有时间限制")])], a("a-progress", {
                staticClass: "prog",
                attrs: {
                    "stroke-linecap": "square",
                    percent: t.percent,
                    "stroke-width": 16
                }
            }), a("p", {
                staticClass: "t3"
            },
            [t._v(" 已用 "), a("b", [t._v(t._s(t._f("flow")(t.usedFlow)))]), t._v(" / 总计 "), a("b", [t._v(t._s(t._f("flow")(t.allFlow)))])])], 2) : a("div", {
                staticClass: "subs-tips"
            },
            [t._v("您还没有购买订阅")]), a("div", {
                staticClass: "subs-btns"
            },
            [a("a-button", {
                staticClass: "btn-2",
                attrs: {
                    size: "large"
                },
                on: {
                    click: t.onBuySubs
                }
            },
            [a("svg-icon", {
                attrs: {
                    name: "calendar"
                }
            }), t._v(" " + t._s(t.comboType === t.ComboEnum.UNBUY ? "购买订阅": "续费订阅") + " ")], 1), a("a-button", {
                staticClass: "btn-3",
                attrs: {
                    size: "large"
                },
                on: {
                    click: function(e) {
                        return t.$router.push("/stage/knowledge")
                    }
                }
            },
            [a("svg-icon", {
                attrs: {
                    name: "book"
                }
            }), t._v(" 查看教程 ")], 1)], 1)]) : a("div", {
                staticClass: "spin-loading"
            },
            [a("a-spin", {
                attrs: {
                    size: "large"
                }
            })], 1)]), a("div", {
                staticStyle: {
                    width: "30px"
                }
            }), a("div", {
                staticClass: "panel-box col-2"
            },
            [t._m(1), t.comboType ? a("div", {
                staticClass: "panel-body import-btns use-shadow"
            },
            [a("div", {
                directives: [{
                    name: "wave",
                    rawName: "v-wave"
                }],
                staticClass: "btn btn-weixin",
                on: {
                    click: function(e) {
                        return t.onImport("copy")
                    }
                }
            },
            [a("svg-icon", {
                attrs: {
                    name: "clipboard-text"
                }
            }), t._v(" 复制 ")], 1), a("div", {
                directives: [{
                    name: "wave",
                    rawName: "v-wave"
                }],
                staticClass: "btn btn-alipay",
                on: {
                    click: function(e) {
                        return t.onImport("qrcode")
                    }
                }
            },
            [a("i", {
                staticClass: "metron-qrcode"
            }), t._v(" 二维码 ")]), a("div", {
                directives: [{
                    name: "wave",
                    rawName: "v-wave"
                }],
                staticClass: "btn btn-clash",
                on: {
                    click: function(e) {
                        return t.onImport("clash")
                    }
                }
            },
            [a("i", {
                staticClass: "metron-clash"
            }), t._v(" Clash 订阅 ")]), a("div", {
                directives: [{
                    name: "wave",
                    rawName: "v-wave"
                }],
                staticClass: "btn btn-surge",
                on: {
                    click: function(e) {
                        return t.onImport("surge")
                    }
                }
            },
            [a("i", {
                staticClass: "metron-surge"
            }), t._v(" Surge 订阅 ")]), a("div", {
                directives: [{
                    name: "wave",
                    rawName: "v-wave"
                }],
                staticClass: "btn btn-shadowrocket",
                on: {
                    click: function(e) {
                        return t.onImport("shadowrocket")
                    }
                }
            },
            [a("i", {
                staticClass: "metron-shadowrocket"
            }), t._v(" Shadowrocket 订阅 ")]), a("div", {
                directives: [{
                    name: "wave",
                    rawName: "v-wave"
                }],
                staticClass: "btn btn-quantumult",
                on: {
                    click: function(e) {
                        return t.onImport("quantumult")
                    }
                }
            },
            [a("i", {
                staticClass: "metron-quantumult"
            }), t._v(" Quantumult 订阅 ")]), a("div", {
                directives: [{
                    name: "wave",
                    rawName: "v-wave"
                }],
                staticClass: "btn btn-quantumultx",
                on: {
                    click: function(e) {
                        return t.onImport("quantumult x")
                    }
                }
            },
            [a("i", {
                staticClass: "metron-quantumultx"
            }), t._v(" Quantumult X 订阅 ")]), a("div", {
                directives: [{
                    name: "wave",
                    rawName: "v-wave"
                }],
                staticClass: "btn btn-surfboard",
                on: {
                    click: function(e) {
                        return t.onImport("surfboard")
                    }
                }
            },
            [a("i", {
                staticClass: "metron-surfboard"
            }), t._v(" Surfboard 订阅 ")]), t.comboType === t.ComboEnum.UNBUY ? a("div", {
                staticClass: "tips"
            },
            [t._v("未购买订阅")]) : t.comboType === t.ComboEnum.PERIOD && t.expiredResidue <= 0 ? a("div", {
                staticClass: "tips"
            },
            [t._v("订阅已过期")]) : t._e()]) : a("div", {
                staticClass: "spin-loading"
            },
            [a("a-spin", {
                attrs: {
                    size: "large"
                }
            })], 1)]), a("a-modal", {
                attrs: {
                    title: "二维码",
                    footer: null
                },
                model: {
                    value: t.qr.visible,
                    callback: function(e) {
                        t.$set(t.qr, "visible", e)
                    },
                    expression: "qr.visible"
                }
            },
            [a("img", {
                staticStyle: {
                    display: "block",
                    margin: "0 auto"
                },
                attrs: {
                    src: t.qr.imgUrl,
                    width: "200"
                }
            })])], 1)
        },
        s = [function() {
            var t = this,
            e = t.$createElement,
            a = t._self._c || e;
            return a("div", {
                staticClass: "panel-header"
            },
            [a("span", {
                staticClass: "tit"
            },
            [t._v("我的订阅")])])
        },
        function() {
            var t = this,
            e = t.$createElement,
            a = t._self._c || e;
            return a("div", {
                staticClass: "panel-header"
            },
            [a("span", {
                staticClass: "tit"
            },
            [t._v("快速导入")])])
        }],
        i = a("c7eb"),
        r = a("1da1"),
        o = (a("b680"), a("14d9"), a("99af"), a("ac1f"), a("5319"), a("1dd1")),
        c = a("004a");
        a("466d");
        function u() {
            var t, e, a, n, s = navigator.userAgent,
            i = s.toLowerCase();
            if ((s.indexOf("Android") > -1 || s.indexOf("Linux") > -1) && (t = !0), i.indexOf("like mac os x") > 0) {
                var r = /os [\d._]*/gi,
                o = i.match(r);
                n = (o + "").replace(/[^0-9|_.]/gi, "").replace(/_/gi, ".")
            }
            var c = n + "";
            return "undefined" != c && c.length > 0 && (n = parseInt(n), n >= 8 ? a = !0 : e = !0),
            {
                isAndroid: t,
                isIOS: e,
                isIOS9: a
            }
        }
        var l = function(t, e) {
            var a = u(),
            n = a.isIOS9;
            if (n) location.href = t,
            setTimeout((function() {
                e && e()
            }), 250),
            setTimeout((function() {
                location.reload()
            }), 1e3);
            else {
                var s = 600,
                i = Date.now(),
                r = document.createElement("iframe");
                r.src = t,
                r.style.display = "none",
                document.body.appendChild(r);
                var o = setTimeout((function() {
                    var t = Date.now(); (!i || t - i < s + 200) && e && e()
                }), s);
                window.onblur = function() {
                    clearTimeout(o)
                }
            }
        },
        d = a("5a0c"),
        b = a.n(d),
        v = a("f248"),
        p = a.n(v),
        f = a("f904"),
        m = a.n(f),
        h = a("d055"),
        C = a.n(h),
        g = (a("f252"), {
            name: "SubscribeInfo",
            props: {
                reverse: {
                    type: Boolean,
                default:
                    !1
                }
            },
            data: function() {
                return {
                    subscribe: null,
                    qr: {
                        visible: !1,
                        imgUrl: ""
                    },
                    ComboEnum: c["a"]
                }
            },
            computed: {
                comboType: function() {
                    return this.subscribe ? null === this.subscribe.plan ? c["a"].UNBUY: null === this.subscribe.reset_day ? c["a"].ONE_TIME: c["a"].PERIOD: null
                },
                expiredResidue: function() {
                    return this.expiredDate > 0 ? b.a.unix(this.expiredDate).diff(b()(), "day") : null
                },
                expiredDate: function() {
                    var t;
                    return null === (t = this.subscribe) || void 0 === t ? void 0 : t.expired_at
                },
                usedFlow: function() {
                    var t, e;
                    return (null === (t = this.subscribe) || void 0 === t ? void 0 : t.d) + (null === (e = this.subscribe) || void 0 === e ? void 0 : e.u)
                },
                allFlow: function() {
                    var t, e, a;
                    return p.a.parse((null !== (t = null === (e = this.subscribe) || void 0 === e || null === (a = e.plan) || void 0 === a ? void 0 : a.transfer_enable) && void 0 !== t ? t: 0) + "GB")
                },
                leftFlow: function() {
                    var t = this.allFlow - this.usedFlow;
                    return t > 0 ? t: 0
                },
                percent: function() {
                    return parseFloat((this.usedFlow / this.allFlow * 100).toFixed(2))
                },
                planId: function() {
                    var t;
                    return null === (t = this.subscribe) || void 0 === t ? void 0 : t.plan_id
                }
            },
            mounted: function() {
                var t = this;
                return Object(r["a"])(Object(i["a"])().mark((function e() {
                    var a;
                    return Object(i["a"])().wrap((function(e) {
                        while (1) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            Object(o["d"])();
                        case 2:
                            a = e.sent,
                            t.subscribe = a.data,
                            t.$nextTick((function() {
                                var e = t.expiredDate,
                                a = t.expiredResidue,
                                n = t.leftFlow,
                                s = t.planId,
                                i = t.comboType;
                                t.$emit("change", {
                                    expiredDate: e,
                                    expiredResidue: a,
                                    leftFlow: n,
                                    planId: s,
                                    comboType: i
                                })
                            }));
                        case 5:
                        case "end":
                            return e.stop()
                        }
                    }), e)
                })))()
            },
            methods: {
                openClient: function(t, e) {
                    var a = this;
                    l(t, (function() {
                        a.$message.info("您还没有安装" + e + "客户端")
                    }))
                },
                onBuySubs: function() {
                    this.planId ? this.$router.push("/stage/buysubs/order?id=" + this.planId) : this.$router.push("/stage/buysubs")
                },
                onImport: function(t) {
                    var e = this;
                    return Object(r["a"])(Object(i["a"])().mark((function a() {
                        var n, s, r, o;
                        return Object(i["a"])().wrap((function(a) {
                            while (1) switch (a.prev = a.next) {
                            case 0:
                                n = e.subscribe.token,
                                s = e.subscribe.subscribe_url,
                                r = "",
                                r = s ? s + "&flag=".concat(t) : "".concat(location.origin, "/api/v1/client/subscribe?token=").concat(n, "&flag=").concat(t),
                                a.t0 = t,
                                a.next = "copy" === a.t0 ? 7 : "qrcode" === a.t0 ? 10 : "clash" === a.t0 ? 16 : "surge" === a.t0 ? 18 : "shadowrocket" === a.t0 ? 20 : "quantumult" === a.t0 ? 22 : "quantumult x" === a.t0 ? 24 : "surfboard" === a.t0 ? 26 : 28;
                                break;
                            case 7:
                                return m()(r.replace("&flag=copy", "")),
                                e.$message.success("链接已复制"),
                                a.abrupt("break", 28);
                            case 10:
                                return a.next = 12,
                                C.a.toDataURL(r.replace("&flag=qrcode", ""));
                            case 12:
                                return o = a.sent,
                                e.qr.imgUrl = o,
                                e.qr.visible = !0,
                                a.abrupt("break", 28);
                            case 16:
                                return e.openClient("clash://install-config?url=".concat(encodeURIComponent(r)), t),
                                a.abrupt("break", 28);
                            case 18:
                                return e.openClient("surge:///install-config?url=".concat(encodeURIComponent(r)), t),
                                a.abrupt("break", 28);
                            case 20:
                                return e.openClient("shadowrocket://install-config?url=".concat(encodeURIComponent(r)), t),
                                a.abrupt("break", 28);
                            case 22:
                                return e.openClient("quantumult:///update-configuration?remote-resource=".concat(encodeURIComponent(r)), t),
                                a.abrupt("break", 28);
                            case 24:
                                return e.openClient("quantumult-x:///update-configuration?remote-resource=".concat(encodeURIComponent(r)), t),
                                a.abrupt("break", 28);
                            case 26:
                                return e.openClient("surfboard:///install-config?url=".concat(encodeURIComponent(r)), t),
                                a.abrupt("break", 28);
                            case 28:
                            case "end":
                                return a.stop()
                            }
                        }), a)
                    })))()
                }
            }
        }),
        w = g,
        _ = (a("c262"), a("2877")),
        x = Object(_["a"])(w, n, s, !1, null, "c794cd82", null);
        e["a"] = x.exports
    }
}]);