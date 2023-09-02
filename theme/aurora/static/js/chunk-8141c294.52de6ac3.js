(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-8141c294"], {
    "004a": function(t, e, n) {
        "use strict";
        n.d(e, "c", (function() {
            return r
        })),
        n.d(e, "b", (function() {
            return i
        })),
        n.d(e, "a", (function() {
            return s
        }));
        var a = n("77fe"),
        r = new a["a"]({
            ALL: [0, "全部"],
            PERIOD: [1, "按周期"],
            ONE_TIME: [2, "按流量"]
        }),
        i = new a["a"]({
            NUMBER: [1, "折扣金额"],
            PERCENT: [2, "折扣百分比"]
        }),
        s = new a["a"]({
            UNBUY: [1, "未购买"],
            PERIOD: [2, "周期性订阅"],
            ONE_TIME: [3, "一次性订阅"]
        })
    },
    1148 : function(t, e, n) {
        "use strict";
        var a = n("5926"),
        r = n("577e"),
        i = n("1d80"),
        s = RangeError;
        t.exports = function(t) {
            var e = r(i(this)),
            n = "",
            o = a(t);
            if (o < 0 || o == 1 / 0) throw s("Wrong number of repetitions");
            for (; o > 0; (o >>>= 1) && (e += e)) 1 & o && (n += e);
            return n
        }
    },
    "13d9": function(t, e) {
        t.exports = function() {
            var t = document.getSelection();
            if (!t.rangeCount) return function() {};
            for (var e = document.activeElement,
            n = [], a = 0; a < t.rangeCount; a++) n.push(t.getRangeAt(a));
            switch (e.tagName.toUpperCase()) {
            case "INPUT":
            case "TEXTAREA":
                e.blur();
                break;
            default:
                e = null;
                break
            }
            return t.removeAllRanges(),
            function() {
                "Caret" === t.type && t.removeAllRanges(),
                t.rangeCount || n.forEach((function(e) {
                    t.addRange(e)
                })),
                e && e.focus()
            }
        }
    },
    "1dd1": function(t, e, n) {
        "use strict";
        n.d(e, "b", (function() {
            return i
        })),
        n.d(e, "a", (function() {
            return s
        })),
        n.d(e, "f", (function() {
            return o
        })),
        n.d(e, "e", (function() {
            return c
        })),
        n.d(e, "c", (function() {
            return u
        })),
        n.d(e, "d", (function() {
            return l
        }));
        var a = n("54d7"),
        r = n("8c8a");
        function i() {
            return Object(r["a"])({
                url: a["g"] + "/api/v1/user/plan/fetch",
                method: "get"
            })
        }
        function s(t) {
            return Object(r["a"])({
                url: a["g"] + "/api/v1/user/plan/fetch?id=".concat(t),
                method: "get"
            })
        }
        function o(t) {
            return Object(r["a"])({
                url: a["g"] + "/api/v1/user/coupon/check",
                method: "post",
                data: t
            })
        }
        function c(t) {
            return Object(r["a"])({
                url: a["g"] + "/api/v1/user/order/save",
                method: "post",
                params: t
            })
        }
        function u() {
            return Object(r["a"])({
                url: a["g"] + "/api/v1/user/server/fetch",
                method: "get"
            })
        }
        function l() {
            return Object(r["a"])({
                url: a["g"] + "/api/v1/user/getSubscribe",
                method: "get"
            })
        }
    },
    "77fe": function(t, e, n) {
        "use strict";
        var a = n("d4ec"),
        r = n("bee2"),
        i = (n("d3b7"), n("159b"), n("b64b"), n("d81d"), n("7db0"),
        function() {
            function t(e) {
                Object(a["a"])(this, t),
                this.defination = e,
                this.parseDefination()
            }
            return Object(r["a"])(t, [{
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
                        var n = t.defination[e];
                        return {
                            value: n[0],
                            label: n[1]
                        }
                    }));
                    return e
                }
            },
            {
                key: "getLabel",
                value: function(t) {
                    var e, n;
                    return null !== (e = null === (n = this.toArray().find((function(e) {
                        return String(e.value) === String(t)
                    }))) || void 0 === n ? void 0 : n.label) && void 0 !== e ? e: ""
                }
            }]),
            t
        } ());
        e["a"] = i
    },
    "99c9": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("div", {
                staticClass: "mysubs-container"
            },
            [n("subscribe-info"), n("div", {
                staticClass: "panel-box"
            },
            [t._m(0), t.serverData ? n("a-table", {
                staticClass: "server-table data-table use-shadow",
                attrs: {
                    "data-source": t.serverData,
                    pagination: !1,
                    "table-layout": "fixed",
                    "row-key": "id",
                    scroll: {
                        x: !0
                    }
                }
            },
            [n("a-table-column", {
                key: "index",
                attrs: {
                    "data-index": "index",
                    title: "#",
                    width: "80px"
                }
            }), n("a-table-column", {
                key: "name",
                attrs: {
                    "data-index": "name",
                    title: "名称",
                    width: "200px"
                }
            }), n("a-table-column", {
                key: "badge",
                attrs: {
                    "data-index": "badge"
                },
                scopedSlots: t._u([{
                    key: "customRender",
                    fn: function(t) {
                        return n("div", {},
                        [n("a-badge", {
                            attrs: {
                                status: t
                            }
                        })], 1)
                    }
                }], null, !1, 4289870577)
            },
            [n("span", {
                attrs: {
                    slot: "title"
                },
                slot: "title"
            },
            [t._v(" 状态 "), n("a-tooltip", {
                attrs: {
                    title: "五分钟内节点在线情况",
                    placement: "right"
                }
            },
            [n("a-icon", {
                attrs: {
                    type: "question-circle"
                }
            })], 1)], 1)]), n("a-table-column", {
                key: "rate",
                attrs: {
                    "data-index": "rate",
                    width: "120px"
                },
                scopedSlots: t._u([{
                    key: "customRender",
                    fn: function(e) {
                        return n("a-tag", {
                            attrs: {
                                color: "pink"
                            }
                        },
                        [t._v(t._s(e) + " x")])
                    }
                }], null, !1, 3728977428)
            },
            [n("span", {
                attrs: {
                    slot: "title"
                },
                slot: "title"
            },
            [t._v(" 倍率 "), n("a-tooltip", {
                attrs: {
                    title: "使用的流量将乘以倍率进行扣除",
                    placement: "right"
                }
            },
            [n("a-icon", {
                attrs: {
                    type: "question-circle"
                }
            })], 1)], 1)]), n("a-table-column", {
                key: "tags",
                attrs: {
                    "data-index": "tags",
                    title: "标签",
                    width: "200px"
                },
                scopedSlots: t._u([{
                    key: "customRender",
                    fn: function(e) {
                        return n("div", {},
                        t._l(e, (function(e) {
                            return n("a-tag", {
                                key: e,
                                attrs: {
                                    color: "purple"
                                }
                            },
                            [t._v(t._s(e))])
                        })), 1)
                    }
                }], null, !1, 3348654540)
            })], 1) : n("div", {
                staticClass: "spin-loading"
            },
            [n("a-spin", {
                attrs: {
                    size: "large"
                }
            })], 1)], 1)], 1)
        },
        r = [function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("div", {
                staticClass: "panel-header"
            },
            [n("span", {
                staticClass: "tit"
            },
            [t._v("节点状态")])])
        }],
        i = n("c7eb"),
        s = n("5530"),
        o = n("1da1"),
        c = (n("d81d"), n("f4e7")),
        u = n("1dd1"),
        l = n("5a0c"),
        d = n.n(l),
        f = {
            name: "Mysubs",
            components: {
                SubscribeInfo: c["a"]
            },
            data: function() {
                return {
                    serverData: null
                }
            },
            mounted: function() {
                this.getServerData()
            },
            methods: {
                getServerData: function() {
                    var t = this;
                    return Object(o["a"])(Object(i["a"])().mark((function e() {
                        var n, a;
                        return Object(i["a"])().wrap((function(e) {
                            while (1) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                Object(u["c"])();
                            case 2:
                                a = e.sent,
                                t.serverData = (null !== (n = a.data) && void 0 !== n ? n: []).map((function(e, n) {
                                    return Object(s["a"])(Object(s["a"])({},
                                    e), {},
                                    {
                                        id: t.$uuid(),
                                        index: n + 1,
                                        badge: Math.abs(d.a.unix(e.last_check_at).diff(d()(), "minute", !0)) <= 5 ? "processing": "error"
                                    })
                                }));
                            case 4:
                            case "end":
                                return e.stop()
                            }
                        }), e)
                    })))()
                }
            }
        },
        p = f,
        b = n("2877"),
        v = Object(b["a"])(p, a, r, !1, null, null, null);
        e["default"] = v.exports
    },
    b680: function(t, e, n) {
        "use strict";
        var a = n("23e7"),
        r = n("e330"),
        i = n("5926"),
        s = n("408a"),
        o = n("1148"),
        c = n("d039"),
        u = RangeError,
        l = String,
        d = Math.floor,
        f = r(o),
        p = r("".slice),
        b = r(1..toFixed),
        v = function(t, e, n) {
            return 0 === e ? n: e % 2 === 1 ? v(t, e - 1, n * t) : v(t * t, e / 2, n)
        },
        m = function(t) {
            var e = 0,
            n = t;
            while (n >= 4096) e += 12,
            n /= 4096;
            while (n >= 2) e += 1,
            n /= 2;
            return e
        },
        h = function(t, e, n) {
            var a = -1,
            r = n;
            while (++a < 6) r += e * t[a],
            t[a] = r % 1e7,
            r = d(r / 1e7)
        },
        g = function(t, e) {
            var n = 6,
            a = 0;
            while (--n >= 0) a += t[n],
            t[n] = d(a / e),
            a = a % e * 1e7
        },
        w = function(t) {
            var e = 6,
            n = "";
            while (--e >= 0) if ("" !== n || 0 === e || 0 !== t[e]) {
                var a = l(t[e]);
                n = "" === n ? a: n + f("0", 7 - a.length) + a
            }
            return n
        },
        y = c((function() {
            return "0.000" !== b(8e-5, 3) || "1" !== b(.9, 0) || "1.25" !== b(1.255, 2) || "1000000000000000128" !== b(0xde0b6b3a7640080, 0)
        })) || !c((function() {
            b({})
        }));
        a({
            target: "Number",
            proto: !0,
            forced: y
        },
        {
            toFixed: function(t) {
                var e, n, a, r, o = s(this),
                c = i(t),
                d = [0, 0, 0, 0, 0, 0],
                b = "",
                y = "0";
                if (c < 0 || c > 20) throw u("Incorrect fraction digits");
                if (o != o) return "NaN";
                if (o <= -1e21 || o >= 1e21) return l(o);
                if (o < 0 && (b = "-", o = -o), o > 1e-21) if (e = m(o * v(2, 69, 1)) - 69, n = e < 0 ? o * v(2, -e, 1) : o / v(2, e, 1), n *= 4503599627370496, e = 52 - e, e > 0) {
                    h(d, 0, n),
                    a = c;
                    while (a >= 7) h(d, 1e7, 0),
                    a -= 7;
                    h(d, v(10, a, 1), 0),
                    a = e - 1;
                    while (a >= 23) g(d, 1 << 23),
                    a -= 23;
                    g(d, 1 << a),
                    h(d, 1, 1),
                    g(d, 2),
                    y = w(d)
                } else h(d, 0, n),
                h(d, 1 << -e, 0),
                y = w(d) + f("0", c);
                return c > 0 ? (r = y.length, y = b + (r <= c ? "0." + f("0", c - r) + y: p(y, 0, r - c) + "." + p(y, r - c))) : y = b + y,
                y
            }
        })
    },
    bee2: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return i
        }));
        var a = n("a38e");
        function r(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, Object(a["a"])(r.key), r)
            }
        }
        function i(t, e, n) {
            return e && r(t.prototype, e),
            n && r(t, n),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            t
        }
    },
    c262: function(t, e, n) {
        "use strict";
        n("eb1e")
    },
    d4ec: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return a
        }));
        n("d9e2");
        function a(t, e) {
            if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
    },
    eb1e: function(t, e, n) {},
    f252: function(t, e, n) {},
    f4e7: function(t, e, n) {
        "use strict";
        var a = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("div", {
                staticClass: "subscribe-info",
                class: {
                    "is-reverse": t.reverse
                }
            },
            [n("div", {
                staticClass: "panel-box col-1"
            },
            [t._m(0), t.comboType ? n("div", {
                staticClass: "panel-body subs-box use-shadow"
            },
            [t.comboType === t.ComboEnum.PERIOD || t.comboType === t.ComboEnum.ONE_TIME ? n("div", {
                staticClass: "subs-msg"
            },
            [n("div", {
                staticClass: "t1"
            },
            [t._v(t._s(t.subscribe.plan.name))]), t.comboType === t.ComboEnum.PERIOD ? [t.expiredResidue > 0 ? n("p", {
                staticClass: "t2"
            },
            [t._v(" 于 " + t._s(t._f("date")(t.expiredDate)) + " 到期，距离到期还有 " + t._s(t.expiredResidue) + " 天，已用流量将在 " + t._s(t.subscribe.reset_day) + " 日后重置 ")]) : n("p", {
                staticClass: "t2 re"
            },
            [t._v("已过期")])] : [n("p", {
                staticClass: "t2"
            },
            [t._v("一次性订阅的流量没有时间限制")])], n("a-progress", {
                staticClass: "prog",
                attrs: {
                    "stroke-linecap": "square",
                    percent: t.percent,
                    "stroke-width": 16
                }
            }), n("p", {
                staticClass: "t3"
            },
            [t._v(" 已用 "), n("b", [t._v(t._s(t._f("flow")(t.usedFlow)))]), t._v(" / 总计 "), n("b", [t._v(t._s(t._f("flow")(t.allFlow)))])])], 2) : n("div", {
                staticClass: "subs-tips"
            },
            [t._v("您还没有购买订阅")]), n("div", {
                staticClass: "subs-btns"
            },
            [n("a-button", {
                staticClass: "btn-2",
                attrs: {
                    size: "large"
                },
                on: {
                    click: t.onBuySubs
                }
            },
            [n("svg-icon", {
                attrs: {
                    name: "calendar"
                }
            }), t._v(" " + t._s(t.comboType === t.ComboEnum.UNBUY ? "购买订阅": "续费订阅") + " ")], 1), n("a-button", {
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
            [n("svg-icon", {
                attrs: {
                    name: "book"
                }
            }), t._v(" 查看教程 ")], 1)], 1)]) : n("div", {
                staticClass: "spin-loading"
            },
            [n("a-spin", {
                attrs: {
                    size: "large"
                }
            })], 1)]), n("div", {
                staticStyle: {
                    width: "30px"
                }
            }), n("div", {
                staticClass: "panel-box col-2"
            },
            [t._m(1), t.comboType ? n("div", {
                staticClass: "panel-body import-btns use-shadow"
            },
            [n("div", {
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
            [n("svg-icon", {
                attrs: {
                    name: "clipboard-text"
                }
            }), t._v(" 复制 ")], 1), n("div", {
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
            [n("i", {
                staticClass: "metron-qrcode"
            }), t._v(" 二维码 ")]), n("div", {
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
            [n("i", {
                staticClass: "metron-clash"
            }), t._v(" Clash 订阅 ")]), n("div", {
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
            [n("i", {
                staticClass: "metron-surge"
            }), t._v(" Surge 订阅 ")]), n("div", {
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
            [n("i", {
                staticClass: "metron-shadowrocket"
            }), t._v(" Shadowrocket 订阅 ")]), n("div", {
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
            [n("i", {
                staticClass: "metron-quantumult"
            }), t._v(" Quantumult 订阅 ")]), n("div", {
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
            [n("i", {
                staticClass: "metron-quantumultx"
            }), t._v(" Quantumult X 订阅 ")]), n("div", {
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
            [n("i", {
                staticClass: "metron-surfboard"
            }), t._v(" Surfboard 订阅 ")]), t.comboType === t.ComboEnum.UNBUY ? n("div", {
                staticClass: "tips"
            },
            [t._v("未购买订阅")]) : t.comboType === t.ComboEnum.PERIOD && t.expiredResidue <= 0 ? n("div", {
                staticClass: "tips"
            },
            [t._v("订阅已过期")]) : t._e()]) : n("div", {
                staticClass: "spin-loading"
            },
            [n("a-spin", {
                attrs: {
                    size: "large"
                }
            })], 1)]), n("a-modal", {
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
            [n("img", {
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
        r = [function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("div", {
                staticClass: "panel-header"
            },
            [n("span", {
                staticClass: "tit"
            },
            [t._v("我的订阅")])])
        },
        function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("div", {
                staticClass: "panel-header"
            },
            [n("span", {
                staticClass: "tit"
            },
            [t._v("快速导入")])])
        }],
        i = n("c7eb"),
        s = n("1da1"),
        o = (n("b680"), n("14d9"), n("99af"), n("ac1f"), n("5319"), n("1dd1")),
        c = n("004a");
        n("466d");
        function u() {
            var t, e, n, a, r = navigator.userAgent,
            i = r.toLowerCase();
            if ((r.indexOf("Android") > -1 || r.indexOf("Linux") > -1) && (t = !0), i.indexOf("like mac os x") > 0) {
                var s = /os [\d._]*/gi,
                o = i.match(s);
                a = (o + "").replace(/[^0-9|_.]/gi, "").replace(/_/gi, ".")
            }
            var c = a + "";
            return "undefined" != c && c.length > 0 && (a = parseInt(a), a >= 8 ? n = !0 : e = !0),
            {
                isAndroid: t,
                isIOS: e,
                isIOS9: n
            }
        }
        var l = function(t, e) {
            var n = u(),
            a = n.isIOS9;
            if (a) location.href = t,
            setTimeout((function() {
                e && e()
            }), 250),
            setTimeout((function() {
                location.reload()
            }), 1e3);
            else {
                var r = 600,
                i = Date.now(),
                s = document.createElement("iframe");
                s.src = t,
                s.style.display = "none",
                document.body.appendChild(s);
                var o = setTimeout((function() {
                    var t = Date.now(); (!i || t - i < r + 200) && e && e()
                }), r);
                window.onblur = function() {
                    clearTimeout(o)
                }
            }
        },
        d = n("5a0c"),
        f = n.n(d),
        p = n("f248"),
        b = n.n(p),
        v = n("f904"),
        m = n.n(v),
        h = n("d055"),
        g = n.n(h),
        w = (n("f252"), {
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
                    return this.expiredDate > 0 ? f.a.unix(this.expiredDate).diff(f()(), "day") : null
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
                    var t, e, n;
                    return b.a.parse((null !== (t = null === (e = this.subscribe) || void 0 === e || null === (n = e.plan) || void 0 === n ? void 0 : n.transfer_enable) && void 0 !== t ? t: 0) + "GB")
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
                return Object(s["a"])(Object(i["a"])().mark((function e() {
                    var n;
                    return Object(i["a"])().wrap((function(e) {
                        while (1) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            Object(o["d"])();
                        case 2:
                            n = e.sent,
                            t.subscribe = n.data,
                            t.$nextTick((function() {
                                var e = t.expiredDate,
                                n = t.expiredResidue,
                                a = t.leftFlow,
                                r = t.planId,
                                i = t.comboType;
                                t.$emit("change", {
                                    expiredDate: e,
                                    expiredResidue: n,
                                    leftFlow: a,
                                    planId: r,
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
                    var n = this;
                    l(t, (function() {
                        n.$message.info("您还没有安装" + e + "客户端")
                    }))
                },
                onBuySubs: function() {
                    this.planId ? this.$router.push("/stage/buysubs/order?id=" + this.planId) : this.$router.push("/stage/buysubs")
                },
                onImport: function(t) {
                    var e = this;
                    return Object(s["a"])(Object(i["a"])().mark((function n() {
                        var a, r, s, o;
                        return Object(i["a"])().wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                            case 0:
                                a = e.subscribe.token,
                                r = e.subscribe.subscribe_url,
                                s = "",
                                s = r ? r + "&flag=".concat(t) : "".concat(location.origin, "/api/v1/client/subscribe?token=").concat(a, "&flag=").concat(t),
                                n.t0 = t,
                                n.next = "copy" === n.t0 ? 7 : "qrcode" === n.t0 ? 10 : "clash" === n.t0 ? 16 : "surge" === n.t0 ? 18 : "shadowrocket" === n.t0 ? 20 : "quantumult" === n.t0 ? 22 : "quantumult x" === n.t0 ? 24 : "surfboard" === n.t0 ? 26 : 28;
                                break;
                            case 7:
                                return m()(s.replace("&flag=copy", "")),
                                e.$message.success("链接已复制"),
                                n.abrupt("break", 28);
                            case 10:
                                return n.next = 12,
                                g.a.toDataURL(s.replace("&flag=qrcode", ""));
                            case 12:
                                return o = n.sent,
                                e.qr.imgUrl = o,
                                e.qr.visible = !0,
                                n.abrupt("break", 28);
                            case 16:
                                return e.openClient("clash://install-config?url=".concat(encodeURIComponent(s)), t),
                                n.abrupt("break", 28);
                            case 18:
                                return e.openClient("surge:///install-config?url=".concat(encodeURIComponent(s)), t),
                                n.abrupt("break", 28);
                            case 20:
                                return e.openClient("shadowrocket://install-config?url=".concat(encodeURIComponent(s)), t),
                                n.abrupt("break", 28);
                            case 22:
                                return e.openClient("quantumult:///update-configuration?remote-resource=".concat(encodeURIComponent(s)), t),
                                n.abrupt("break", 28);
                            case 24:
                                return e.openClient("quantumult-x:///update-configuration?remote-resource=".concat(encodeURIComponent(s)), t),
                                n.abrupt("break", 28);
                            case 26:
                                return e.openClient("surfboard:///install-config?url=".concat(encodeURIComponent(s)), t),
                                n.abrupt("break", 28);
                            case 28:
                            case "end":
                                return n.stop()
                            }
                        }), n)
                    })))()
                }
            }
        }),
        y = w,
        C = (n("c262"), n("2877")),
        x = Object(C["a"])(y, a, r, !1, null, "c794cd82", null);
        e["a"] = x.exports
    },
    f904: function(t, e, n) {
        "use strict";
        var a = n("13d9"),
        r = {
            "text/plain": "Text",
            "text/html": "Url",
        default:
            "Text"
        },
        i = "Copy to clipboard: #{key}, Enter";
        function s(t) {
            var e = (/mac os x/i.test(navigator.userAgent) ? "⌘": "Ctrl") + "+C";
            return t.replace(/#{\s*key\s*}/g, e)
        }
        function o(t, e) {
            var n, o, c, u, l, d, f = !1;
            e || (e = {}),
            n = e.debug || !1;
            try {
                c = a(),
                u = document.createRange(),
                l = document.getSelection(),
                d = document.createElement("span"),
                d.textContent = t,
                d.ariaHidden = "true",
                d.style.all = "unset",
                d.style.position = "fixed",
                d.style.top = 0,
                d.style.clip = "rect(0, 0, 0, 0)",
                d.style.whiteSpace = "pre",
                d.style.webkitUserSelect = "text",
                d.style.MozUserSelect = "text",
                d.style.msUserSelect = "text",
                d.style.userSelect = "text",
                d.addEventListener("copy", (function(a) {
                    if (a.stopPropagation(), e.format) if (a.preventDefault(), "undefined" === typeof a.clipboardData) {
                        n && console.warn("unable to use e.clipboardData"),
                        n && console.warn("trying IE specific stuff"),
                        window.clipboardData.clearData();
                        var i = r[e.format] || r["default"];
                        window.clipboardData.setData(i, t)
                    } else a.clipboardData.clearData(),
                    a.clipboardData.setData(e.format, t);
                    e.onCopy && (a.preventDefault(), e.onCopy(a.clipboardData))
                })),
                document.body.appendChild(d),
                u.selectNodeContents(d),
                l.addRange(u);
                var p = document.execCommand("copy");
                if (!p) throw new Error("copy command was unsuccessful");
                f = !0
            } catch(b) {
                n && console.error("unable to copy using execCommand: ", b),
                n && console.warn("trying IE specific stuff");
                try {
                    window.clipboardData.setData(e.format || "text", t),
                    e.onCopy && e.onCopy(window.clipboardData),
                    f = !0
                } catch(b) {
                    n && console.error("unable to copy using clipboardData: ", b),
                    n && console.error("falling back to prompt"),
                    o = s("message" in e ? e.message: i),
                    window.prompt(o, t)
                }
            } finally {
                l && ("function" == typeof l.removeRange ? l.removeRange(u) : l.removeAllRanges()),
                d && document.body.removeChild(d),
                c()
            }
            return f
        }
        t.exports = o
    }
}]); (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-8141c294"], {
    "004a": function(t, e, n) {
        "use strict";
        n.d(e, "c", (function() {
            return r
        })),
        n.d(e, "b", (function() {
            return i
        })),
        n.d(e, "a", (function() {
            return s
        }));
        var a = n("77fe"),
        r = new a["a"]({
            ALL: [0, "全部"],
            PERIOD: [1, "按周期"],
            ONE_TIME: [2, "按流量"]
        }),
        i = new a["a"]({
            NUMBER: [1, "折扣金额"],
            PERCENT: [2, "折扣百分比"]
        }),
        s = new a["a"]({
            UNBUY: [1, "未购买"],
            PERIOD: [2, "周期性订阅"],
            ONE_TIME: [3, "一次性订阅"]
        })
    },
    1148 : function(t, e, n) {
        "use strict";
        var a = n("5926"),
        r = n("577e"),
        i = n("1d80"),
        s = RangeError;
        t.exports = function(t) {
            var e = r(i(this)),
            n = "",
            o = a(t);
            if (o < 0 || o == 1 / 0) throw s("Wrong number of repetitions");
            for (; o > 0; (o >>>= 1) && (e += e)) 1 & o && (n += e);
            return n
        }
    },
    "13d9": function(t, e) {
        t.exports = function() {
            var t = document.getSelection();
            if (!t.rangeCount) return function() {};
            for (var e = document.activeElement,
            n = [], a = 0; a < t.rangeCount; a++) n.push(t.getRangeAt(a));
            switch (e.tagName.toUpperCase()) {
            case "INPUT":
            case "TEXTAREA":
                e.blur();
                break;
            default:
                e = null;
                break
            }
            return t.removeAllRanges(),
            function() {
                "Caret" === t.type && t.removeAllRanges(),
                t.rangeCount || n.forEach((function(e) {
                    t.addRange(e)
                })),
                e && e.focus()
            }
        }
    },
    "1dd1": function(t, e, n) {
        "use strict";
        n.d(e, "b", (function() {
            return i
        })),
        n.d(e, "a", (function() {
            return s
        })),
        n.d(e, "f", (function() {
            return o
        })),
        n.d(e, "e", (function() {
            return c
        })),
        n.d(e, "c", (function() {
            return u
        })),
        n.d(e, "d", (function() {
            return l
        }));
        var a = n("54d7"),
        r = n("8c8a");
        function i() {
            return Object(r["a"])({
                url: a["g"] + "/api/v1/user/plan/fetch",
                method: "get"
            })
        }
        function s(t) {
            return Object(r["a"])({
                url: a["g"] + "/api/v1/user/plan/fetch?id=".concat(t),
                method: "get"
            })
        }
        function o(t) {
            return Object(r["a"])({
                url: a["g"] + "/api/v1/user/coupon/check",
                method: "post",
                data: t
            })
        }
        function c(t) {
            return Object(r["a"])({
                url: a["g"] + "/api/v1/user/order/save",
                method: "post",
                params: t
            })
        }
        function u() {
            return Object(r["a"])({
                url: a["g"] + "/api/v1/user/server/fetch",
                method: "get"
            })
        }
        function l() {
            return Object(r["a"])({
                url: a["g"] + "/api/v1/user/getSubscribe",
                method: "get"
            })
        }
    },
    "77fe": function(t, e, n) {
        "use strict";
        var a = n("d4ec"),
        r = n("bee2"),
        i = (n("d3b7"), n("159b"), n("b64b"), n("d81d"), n("7db0"),
        function() {
            function t(e) {
                Object(a["a"])(this, t),
                this.defination = e,
                this.parseDefination()
            }
            return Object(r["a"])(t, [{
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
                        var n = t.defination[e];
                        return {
                            value: n[0],
                            label: n[1]
                        }
                    }));
                    return e
                }
            },
            {
                key: "getLabel",
                value: function(t) {
                    var e, n;
                    return null !== (e = null === (n = this.toArray().find((function(e) {
                        return String(e.value) === String(t)
                    }))) || void 0 === n ? void 0 : n.label) && void 0 !== e ? e: ""
                }
            }]),
            t
        } ());
        e["a"] = i
    },
    "99c9": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("div", {
                staticClass: "mysubs-container"
            },
            [n("subscribe-info"), n("div", {
                staticClass: "panel-box"
            },
            [t._m(0), t.serverData ? n("a-table", {
                staticClass: "server-table data-table use-shadow",
                attrs: {
                    "data-source": t.serverData,
                    pagination: !1,
                    "table-layout": "fixed",
                    "row-key": "id",
                    scroll: {
                        x: !0
                    }
                }
            },
            [n("a-table-column", {
                key: "index",
                attrs: {
                    "data-index": "index",
                    title: "#",
                    width: "80px"
                }
            }), n("a-table-column", {
                key: "name",
                attrs: {
                    "data-index": "name",
                    title: "名称",
                    width: "200px"
                }
            }), n("a-table-column", {
                key: "badge",
                attrs: {
                    "data-index": "badge"
                },
                scopedSlots: t._u([{
                    key: "customRender",
                    fn: function(t) {
                        return n("div", {},
                        [n("a-badge", {
                            attrs: {
                                status: t
                            }
                        })], 1)
                    }
                }], null, !1, 4289870577)
            },
            [n("span", {
                attrs: {
                    slot: "title"
                },
                slot: "title"
            },
            [t._v(" 状态 "), n("a-tooltip", {
                attrs: {
                    title: "五分钟内节点在线情况",
                    placement: "right"
                }
            },
            [n("a-icon", {
                attrs: {
                    type: "question-circle"
                }
            })], 1)], 1)]), n("a-table-column", {
                key: "rate",
                attrs: {
                    "data-index": "rate",
                    width: "120px"
                },
                scopedSlots: t._u([{
                    key: "customRender",
                    fn: function(e) {
                        return n("a-tag", {
                            attrs: {
                                color: "pink"
                            }
                        },
                        [t._v(t._s(e) + " x")])
                    }
                }], null, !1, 3728977428)
            },
            [n("span", {
                attrs: {
                    slot: "title"
                },
                slot: "title"
            },
            [t._v(" 倍率 "), n("a-tooltip", {
                attrs: {
                    title: "使用的流量将乘以倍率进行扣除",
                    placement: "right"
                }
            },
            [n("a-icon", {
                attrs: {
                    type: "question-circle"
                }
            })], 1)], 1)]), n("a-table-column", {
                key: "tags",
                attrs: {
                    "data-index": "tags",
                    title: "标签",
                    width: "200px"
                },
                scopedSlots: t._u([{
                    key: "customRender",
                    fn: function(e) {
                        return n("div", {},
                        t._l(e, (function(e) {
                            return n("a-tag", {
                                key: e,
                                attrs: {
                                    color: "purple"
                                }
                            },
                            [t._v(t._s(e))])
                        })), 1)
                    }
                }], null, !1, 3348654540)
            })], 1) : n("div", {
                staticClass: "spin-loading"
            },
            [n("a-spin", {
                attrs: {
                    size: "large"
                }
            })], 1)], 1)], 1)
        },
        r = [function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("div", {
                staticClass: "panel-header"
            },
            [n("span", {
                staticClass: "tit"
            },
            [t._v("节点状态")])])
        }],
        i = n("c7eb"),
        s = n("5530"),
        o = n("1da1"),
        c = (n("d81d"), n("f4e7")),
        u = n("1dd1"),
        l = n("5a0c"),
        d = n.n(l),
        f = {
            name: "Mysubs",
            components: {
                SubscribeInfo: c["a"]
            },
            data: function() {
                return {
                    serverData: null
                }
            },
            mounted: function() {
                this.getServerData()
            },
            methods: {
                getServerData: function() {
                    var t = this;
                    return Object(o["a"])(Object(i["a"])().mark((function e() {
                        var n, a;
                        return Object(i["a"])().wrap((function(e) {
                            while (1) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                Object(u["c"])();
                            case 2:
                                a = e.sent,
                                t.serverData = (null !== (n = a.data) && void 0 !== n ? n: []).map((function(e, n) {
                                    return Object(s["a"])(Object(s["a"])({},
                                    e), {},
                                    {
                                        id: t.$uuid(),
                                        index: n + 1,
                                        badge: Math.abs(d.a.unix(e.last_check_at).diff(d()(), "minute", !0)) <= 5 ? "processing": "error"
                                    })
                                }));
                            case 4:
                            case "end":
                                return e.stop()
                            }
                        }), e)
                    })))()
                }
            }
        },
        p = f,
        b = n("2877"),
        v = Object(b["a"])(p, a, r, !1, null, null, null);
        e["default"] = v.exports
    },
    b680: function(t, e, n) {
        "use strict";
        var a = n("23e7"),
        r = n("e330"),
        i = n("5926"),
        s = n("408a"),
        o = n("1148"),
        c = n("d039"),
        u = RangeError,
        l = String,
        d = Math.floor,
        f = r(o),
        p = r("".slice),
        b = r(1..toFixed),
        v = function(t, e, n) {
            return 0 === e ? n: e % 2 === 1 ? v(t, e - 1, n * t) : v(t * t, e / 2, n)
        },
        m = function(t) {
            var e = 0,
            n = t;
            while (n >= 4096) e += 12,
            n /= 4096;
            while (n >= 2) e += 1,
            n /= 2;
            return e
        },
        h = function(t, e, n) {
            var a = -1,
            r = n;
            while (++a < 6) r += e * t[a],
            t[a] = r % 1e7,
            r = d(r / 1e7)
        },
        g = function(t, e) {
            var n = 6,
            a = 0;
            while (--n >= 0) a += t[n],
            t[n] = d(a / e),
            a = a % e * 1e7
        },
        w = function(t) {
            var e = 6,
            n = "";
            while (--e >= 0) if ("" !== n || 0 === e || 0 !== t[e]) {
                var a = l(t[e]);
                n = "" === n ? a: n + f("0", 7 - a.length) + a
            }
            return n
        },
        y = c((function() {
            return "0.000" !== b(8e-5, 3) || "1" !== b(.9, 0) || "1.25" !== b(1.255, 2) || "1000000000000000128" !== b(0xde0b6b3a7640080, 0)
        })) || !c((function() {
            b({})
        }));
        a({
            target: "Number",
            proto: !0,
            forced: y
        },
        {
            toFixed: function(t) {
                var e, n, a, r, o = s(this),
                c = i(t),
                d = [0, 0, 0, 0, 0, 0],
                b = "",
                y = "0";
                if (c < 0 || c > 20) throw u("Incorrect fraction digits");
                if (o != o) return "NaN";
                if (o <= -1e21 || o >= 1e21) return l(o);
                if (o < 0 && (b = "-", o = -o), o > 1e-21) if (e = m(o * v(2, 69, 1)) - 69, n = e < 0 ? o * v(2, -e, 1) : o / v(2, e, 1), n *= 4503599627370496, e = 52 - e, e > 0) {
                    h(d, 0, n),
                    a = c;
                    while (a >= 7) h(d, 1e7, 0),
                    a -= 7;
                    h(d, v(10, a, 1), 0),
                    a = e - 1;
                    while (a >= 23) g(d, 1 << 23),
                    a -= 23;
                    g(d, 1 << a),
                    h(d, 1, 1),
                    g(d, 2),
                    y = w(d)
                } else h(d, 0, n),
                h(d, 1 << -e, 0),
                y = w(d) + f("0", c);
                return c > 0 ? (r = y.length, y = b + (r <= c ? "0." + f("0", c - r) + y: p(y, 0, r - c) + "." + p(y, r - c))) : y = b + y,
                y
            }
        })
    },
    bee2: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return i
        }));
        var a = n("a38e");
        function r(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, Object(a["a"])(r.key), r)
            }
        }
        function i(t, e, n) {
            return e && r(t.prototype, e),
            n && r(t, n),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            t
        }
    },
    c262: function(t, e, n) {
        "use strict";
        n("eb1e")
    },
    d4ec: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return a
        }));
        n("d9e2");
        function a(t, e) {
            if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
    },
    eb1e: function(t, e, n) {},
    f252: function(t, e, n) {},
    f4e7: function(t, e, n) {
        "use strict";
        var a = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("div", {
                staticClass: "subscribe-info",
                class: {
                    "is-reverse": t.reverse
                }
            },
            [n("div", {
                staticClass: "panel-box col-1"
            },
            [t._m(0), t.comboType ? n("div", {
                staticClass: "panel-body subs-box use-shadow"
            },
            [t.comboType === t.ComboEnum.PERIOD || t.comboType === t.ComboEnum.ONE_TIME ? n("div", {
                staticClass: "subs-msg"
            },
            [n("div", {
                staticClass: "t1"
            },
            [t._v(t._s(t.subscribe.plan.name))]), t.comboType === t.ComboEnum.PERIOD ? [t.expiredResidue > 0 ? n("p", {
                staticClass: "t2"
            },
            [t._v(" 于 " + t._s(t._f("date")(t.expiredDate)) + " 到期，距离到期还有 " + t._s(t.expiredResidue) + " 天，已用流量将在 " + t._s(t.subscribe.reset_day) + " 日后重置 ")]) : n("p", {
                staticClass: "t2 re"
            },
            [t._v("已过期")])] : [n("p", {
                staticClass: "t2"
            },
            [t._v("一次性订阅的流量没有时间限制")])], n("a-progress", {
                staticClass: "prog",
                attrs: {
                    "stroke-linecap": "square",
                    percent: t.percent,
                    "stroke-width": 16
                }
            }), n("p", {
                staticClass: "t3"
            },
            [t._v(" 已用 "), n("b", [t._v(t._s(t._f("flow")(t.usedFlow)))]), t._v(" / 总计 "), n("b", [t._v(t._s(t._f("flow")(t.allFlow)))])])], 2) : n("div", {
                staticClass: "subs-tips"
            },
            [t._v("您还没有购买订阅")]), n("div", {
                staticClass: "subs-btns"
            },
            [n("a-button", {
                staticClass: "btn-2",
                attrs: {
                    size: "large"
                },
                on: {
                    click: t.onBuySubs
                }
            },
            [n("svg-icon", {
                attrs: {
                    name: "calendar"
                }
            }), t._v(" " + t._s(t.comboType === t.ComboEnum.UNBUY ? "购买订阅": "续费订阅") + " ")], 1), n("a-button", {
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
            [n("svg-icon", {
                attrs: {
                    name: "book"
                }
            }), t._v(" 查看教程 ")], 1)], 1)]) : n("div", {
                staticClass: "spin-loading"
            },
            [n("a-spin", {
                attrs: {
                    size: "large"
                }
            })], 1)]), n("div", {
                staticStyle: {
                    width: "30px"
                }
            }), n("div", {
                staticClass: "panel-box col-2"
            },
            [t._m(1), t.comboType ? n("div", {
                staticClass: "panel-body import-btns use-shadow"
            },
            [n("div", {
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
            [n("svg-icon", {
                attrs: {
                    name: "clipboard-text"
                }
            }), t._v(" 复制 ")], 1), n("div", {
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
            [n("i", {
                staticClass: "metron-qrcode"
            }), t._v(" 二维码 ")]), n("div", {
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
            [n("i", {
                staticClass: "metron-clash"
            }), t._v(" Clash 订阅 ")]), n("div", {
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
            [n("i", {
                staticClass: "metron-surge"
            }), t._v(" Surge 订阅 ")]), n("div", {
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
            [n("i", {
                staticClass: "metron-shadowrocket"
            }), t._v(" Shadowrocket 订阅 ")]), n("div", {
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
            [n("i", {
                staticClass: "metron-quantumult"
            }), t._v(" Quantumult 订阅 ")]), n("div", {
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
            [n("i", {
                staticClass: "metron-quantumultx"
            }), t._v(" Quantumult X 订阅 ")]), n("div", {
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
            [n("i", {
                staticClass: "metron-surfboard"
            }), t._v(" Surfboard 订阅 ")]), t.comboType === t.ComboEnum.UNBUY ? n("div", {
                staticClass: "tips"
            },
            [t._v("未购买订阅")]) : t.comboType === t.ComboEnum.PERIOD && t.expiredResidue <= 0 ? n("div", {
                staticClass: "tips"
            },
            [t._v("订阅已过期")]) : t._e()]) : n("div", {
                staticClass: "spin-loading"
            },
            [n("a-spin", {
                attrs: {
                    size: "large"
                }
            })], 1)]), n("a-modal", {
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
            [n("img", {
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
        r = [function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("div", {
                staticClass: "panel-header"
            },
            [n("span", {
                staticClass: "tit"
            },
            [t._v("我的订阅")])])
        },
        function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("div", {
                staticClass: "panel-header"
            },
            [n("span", {
                staticClass: "tit"
            },
            [t._v("快速导入")])])
        }],
        i = n("c7eb"),
        s = n("1da1"),
        o = (n("b680"), n("14d9"), n("99af"), n("ac1f"), n("5319"), n("1dd1")),
        c = n("004a");
        n("466d");
        function u() {
            var t, e, n, a, r = navigator.userAgent,
            i = r.toLowerCase();
            if ((r.indexOf("Android") > -1 || r.indexOf("Linux") > -1) && (t = !0), i.indexOf("like mac os x") > 0) {
                var s = /os [\d._]*/gi,
                o = i.match(s);
                a = (o + "").replace(/[^0-9|_.]/gi, "").replace(/_/gi, ".")
            }
            var c = a + "";
            return "undefined" != c && c.length > 0 && (a = parseInt(a), a >= 8 ? n = !0 : e = !0),
            {
                isAndroid: t,
                isIOS: e,
                isIOS9: n
            }
        }
        var l = function(t, e) {
            var n = u(),
            a = n.isIOS9;
            if (a) location.href = t,
            setTimeout((function() {
                e && e()
            }), 250),
            setTimeout((function() {
                location.reload()
            }), 1e3);
            else {
                var r = 600,
                i = Date.now(),
                s = document.createElement("iframe");
                s.src = t,
                s.style.display = "none",
                document.body.appendChild(s);
                var o = setTimeout((function() {
                    var t = Date.now(); (!i || t - i < r + 200) && e && e()
                }), r);
                window.onblur = function() {
                    clearTimeout(o)
                }
            }
        },
        d = n("5a0c"),
        f = n.n(d),
        p = n("f248"),
        b = n.n(p),
        v = n("f904"),
        m = n.n(v),
        h = n("d055"),
        g = n.n(h),
        w = (n("f252"), {
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
                    return this.expiredDate > 0 ? f.a.unix(this.expiredDate).diff(f()(), "day") : null
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
                    var t, e, n;
                    return b.a.parse((null !== (t = null === (e = this.subscribe) || void 0 === e || null === (n = e.plan) || void 0 === n ? void 0 : n.transfer_enable) && void 0 !== t ? t: 0) + "GB")
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
                return Object(s["a"])(Object(i["a"])().mark((function e() {
                    var n;
                    return Object(i["a"])().wrap((function(e) {
                        while (1) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            Object(o["d"])();
                        case 2:
                            n = e.sent,
                            t.subscribe = n.data,
                            t.$nextTick((function() {
                                var e = t.expiredDate,
                                n = t.expiredResidue,
                                a = t.leftFlow,
                                r = t.planId,
                                i = t.comboType;
                                t.$emit("change", {
                                    expiredDate: e,
                                    expiredResidue: n,
                                    leftFlow: a,
                                    planId: r,
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
                    var n = this;
                    l(t, (function() {
                        n.$message.info("您还没有安装" + e + "客户端")
                    }))
                },
                onBuySubs: function() {
                    this.planId ? this.$router.push("/stage/buysubs/order?id=" + this.planId) : this.$router.push("/stage/buysubs")
                },
                onImport: function(t) {
                    var e = this;
                    return Object(s["a"])(Object(i["a"])().mark((function n() {
                        var a, r, s, o;
                        return Object(i["a"])().wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                            case 0:
                                a = e.subscribe.token,
                                r = e.subscribe.subscribe_url,
                                s = "",
                                s = r ? r + "&flag=".concat(t) : "".concat(location.origin, "/api/v1/client/subscribe?token=").concat(a, "&flag=").concat(t),
                                n.t0 = t,
                                n.next = "copy" === n.t0 ? 7 : "qrcode" === n.t0 ? 10 : "clash" === n.t0 ? 16 : "surge" === n.t0 ? 18 : "shadowrocket" === n.t0 ? 20 : "quantumult" === n.t0 ? 22 : "quantumult x" === n.t0 ? 24 : "surfboard" === n.t0 ? 26 : 28;
                                break;
                            case 7:
                                return m()(s.replace("&flag=copy", "")),
                                e.$message.success("链接已复制"),
                                n.abrupt("break", 28);
                            case 10:
                                return n.next = 12,
                                g.a.toDataURL(s.replace("&flag=qrcode", ""));
                            case 12:
                                return o = n.sent,
                                e.qr.imgUrl = o,
                                e.qr.visible = !0,
                                n.abrupt("break", 28);
                            case 16:
                                return e.openClient("clash://install-config?url=".concat(encodeURIComponent(s)), t),
                                n.abrupt("break", 28);
                            case 18:
                                return e.openClient("surge:///install-config?url=".concat(encodeURIComponent(s)), t),
                                n.abrupt("break", 28);
                            case 20:
                                return e.openClient("shadowrocket://install-config?url=".concat(encodeURIComponent(s)), t),
                                n.abrupt("break", 28);
                            case 22:
                                return e.openClient("quantumult:///update-configuration?remote-resource=".concat(encodeURIComponent(s)), t),
                                n.abrupt("break", 28);
                            case 24:
                                return e.openClient("quantumult-x:///update-configuration?remote-resource=".concat(encodeURIComponent(s)), t),
                                n.abrupt("break", 28);
                            case 26:
                                return e.openClient("surfboard:///install-config?url=".concat(encodeURIComponent(s)), t),
                                n.abrupt("break", 28);
                            case 28:
                            case "end":
                                return n.stop()
                            }
                        }), n)
                    })))()
                }
            }
        }),
        y = w,
        C = (n("c262"), n("2877")),
        x = Object(C["a"])(y, a, r, !1, null, "c794cd82", null);
        e["a"] = x.exports
    },
    f904: function(t, e, n) {
        "use strict";
        var a = n("13d9"),
        r = {
            "text/plain": "Text",
            "text/html": "Url",
        default:
            "Text"
        },
        i = "Copy to clipboard: #{key}, Enter";
        function s(t) {
            var e = (/mac os x/i.test(navigator.userAgent) ? "⌘": "Ctrl") + "+C";
            return t.replace(/#{\s*key\s*}/g, e)
        }
        function o(t, e) {
            var n, o, c, u, l, d, f = !1;
            e || (e = {}),
            n = e.debug || !1;
            try {
                c = a(),
                u = document.createRange(),
                l = document.getSelection(),
                d = document.createElement("span"),
                d.textContent = t,
                d.ariaHidden = "true",
                d.style.all = "unset",
                d.style.position = "fixed",
                d.style.top = 0,
                d.style.clip = "rect(0, 0, 0, 0)",
                d.style.whiteSpace = "pre",
                d.style.webkitUserSelect = "text",
                d.style.MozUserSelect = "text",
                d.style.msUserSelect = "text",
                d.style.userSelect = "text",
                d.addEventListener("copy", (function(a) {
                    if (a.stopPropagation(), e.format) if (a.preventDefault(), "undefined" === typeof a.clipboardData) {
                        n && console.warn("unable to use e.clipboardData"),
                        n && console.warn("trying IE specific stuff"),
                        window.clipboardData.clearData();
                        var i = r[e.format] || r["default"];
                        window.clipboardData.setData(i, t)
                    } else a.clipboardData.clearData(),
                    a.clipboardData.setData(e.format, t);
                    e.onCopy && (a.preventDefault(), e.onCopy(a.clipboardData))
                })),
                document.body.appendChild(d),
                u.selectNodeContents(d),
                l.addRange(u);
                var p = document.execCommand("copy");
                if (!p) throw new Error("copy command was unsuccessful");
                f = !0
            } catch(b) {
                n && console.error("unable to copy using execCommand: ", b),
                n && console.warn("trying IE specific stuff");
                try {
                    window.clipboardData.setData(e.format || "text", t),
                    e.onCopy && e.onCopy(window.clipboardData),
                    f = !0
                } catch(b) {
                    n && console.error("unable to copy using clipboardData: ", b),
                    n && console.error("falling back to prompt"),
                    o = s("message" in e ? e.message: i),
                    window.prompt(o, t)
                }
            } finally {
                l && ("function" == typeof l.removeRange ? l.removeRange(u) : l.removeAllRanges()),
                d && document.body.removeChild(d),
                c()
            }
            return f
        }
        t.exports = o
    }
}]);