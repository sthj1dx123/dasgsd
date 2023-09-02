(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"], {
    0 : function(e, t, n) {
        e.exports = n("56d7")
    },
    "0705": function(e, t, n) {},
    "0a1e": function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return r
        })),
        n.d(t, "a", (function() {
            return c
        }));
        var a = n("54d7"),
        s = n("8c8a");
        function r() {
            return Object(s["a"])({
                url: a["g"] + "/api/v1/user/notice/fetch",
                method: "get"
            })
        }
        function c() {
            return Object(s["a"])({
                url: a["g"] + "/api/v1/user/getStat",
                method: "get"
            })
        }
    },
    "0f8c": function(e, t, n) {
        "use strict";
        n("6257")
    },
    "199e": function(e, t, n) {},
    "1a1c": function(e, t, n) {},
    "22d6": function(e, t, n) {
        var a = {
            "./gate/routes/static.js": "d82d",
            "./stage/routes/static.js": "f488"
        };
        function s(e) {
            var t = r(e);
            return n(t)
        }
        function r(e) {
            if (!n.o(a, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return a[e]
        }
        s.keys = function() {
            return Object.keys(a)
        },
        s.resolve = r,
        e.exports = s,
        s.id = "22d6"
    },
    "27f9": function(e, t, n) {
        "use strict";
        var a = function() {
            var e = this,
            t = e.$createElement,
            n = e._self._c || t;
            return n("div", {
                staticClass: "corner-bar"
            },
            [n("div", {
                staticClass: "item",
                on: {
                    click: function(t) {
                        e.isDarkMode = !e.isDarkMode
                    }
                }
            },
            [n("svg-icon", {
                staticStyle: {
                    "font-size": "28px"
                },
                attrs: {
                    name: e.isDarkMode ? "moon": "sun"
                }
            })], 1), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isBackend,
                    expression: "isBackend"
                }],
                staticClass: "item"
            },
            [n("bell-notice")], 1), n("div", {
                staticClass: "item"
            },
            [n("a-dropdown", {
                attrs: {
                    "overlay-class-name": "dropdown-menu",
                    trigger: ["click"]
                }
            },
            [n("div", {
                staticClass: "rightbar"
            },
            [n("span", {
                staticClass: "avatar"
            },
            [e._v(e._s(e.avatar))]), n("span", {
                staticClass: "name"
            },
            [e._v(e._s(e.username))])]), n("a-menu", {
                attrs: {
                    slot: "overlay"
                },
                slot: "overlay"
            },
            [n("a-menu-item", [n("a", {
                attrs: {
                    href: "javascript:;"
                },
                on: {
                    click: function(t) {
                        return e.$router.push(e.menuPath)
                    }
                }
            },
            [n("svg-icon", {
                attrs: {
                    name: "user"
                }
            }), e._v(" " + e._s(e.menuText) + " ")], 1)]), n("a-menu-item", [n("a", {
                attrs: {
                    href: "javascript:;"
                },
                on: {
                    click: e.onLogout
                }
            },
            [n("svg-icon", {
                attrs: {
                    name: "paper-plane-tilt"
                }
            }), e._v(" 退出登录 ")], 1)])], 1)], 1)], 1)])
        },
        s = [],
        r = n("c7eb"),
        c = n("1da1"),
        o = n("5530"),
        i = (n("caad"), n("2532"), n("2f62")),
        u = n("30b4"),
        d = function() {
            var e = this,
            t = e.$createElement,
            n = e._self._c || t;
            return n("a-popover", {
                staticClass: "bell-notice",
                attrs: {
                    title: "公告",
                    placement: "bottom",
                    "overlay-style": {
                        position: "fixed"
                    },
                    trigger: "click"
                },
                model: {
                    value: e.visible,
                    callback: function(t) {
                        e.visible = t
                    },
                    expression: "visible"
                }
            },
            [n("div", {
                staticClass: "bell-box",
                attrs: {
                    slot: "content"
                },
                slot: "content"
            },
            [n("ul", e._l(e.filteredNotices, (function(t) {
                return n("li", {
                    key: t.id,
                    on: {
                        click: function(n) {
                            return e.onNoticeShow(t)
                        }
                    }
                },
                [n("div", {
                    staticClass: "icon"
                },
                [n("svg-icon", {
                    attrs: {
                        name: "bell-simple"
                    }
                })], 1), n("div", {
                    staticClass: "texts"
                },
                [n("div", {
                    staticClass: "tit"
                },
                [e._v(e._s(t.title))]), n("div", {
                    staticClass: "time"
                },
                [n("a-icon", {
                    attrs: {
                        type: "clock-circle"
                    }
                }), e._v(" " + e._s(e._f("date")(t.updated_at)) + " ")], 1)])])
            })), 0)]), n("a-badge", {
                attrs: {
                    count: e.total,
                    "overflow-count": 9,
                    offset: [ - 5, 5]
                }
            },
            [n("svg-icon", {
                staticClass: "bell",
                attrs: {
                    name: "bell-simple"
                }
            })], 1)], 1)
        },
        l = [],
        f = (n("4de4"), n("d3b7"), n("0a1e")),
        m = {
            name: "BellNotice",
            data: function() {
                return {
                    notices: [],
                    total: 0,
                    visible: !1,
                    scrollOps: {
                        vuescroll: {
                            sizeStrategy: "number"
                        }
                    }
                }
            },
            computed: {
                filteredNotices: function() {
                    return this.notices.filter((function(e) {
                        return e.show
                    }))
                }
            },
            mounted: function() {
                this.loopGetNotice()
            },
            methods: {
                loopGetNotice: function() {
                    var e = this,
                    t = function() {
                        var t = Object(c["a"])(Object(r["a"])().mark((function t() {
                            var n, a;
                            return Object(r["a"])().wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    Object(f["b"])();
                                case 2:
                                    a = t.sent,
                                    e.notices = null !== (n = a.data) && void 0 !== n ? n: [],
                                    e.total = a.total;
                                case 5:
                                case "end":
                                    return t.stop()
                                }
                            }), t)
                        })));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    } ();
                    t(),
                    setInterval((function() {
                        t()
                    }), 6e5)
                },
                onNoticeShow: function(e) {
                    this.visible = !1,
                    this.$info({
                        title: e.title,
                        okText: "我知道了",
                        mask: !0,
                        content: e.content
                    })
                }
            }
        },
        p = m,
        b = (n("cd37"), n("d8ad"), n("2877")),
        h = Object(b["a"])(p, d, l, !1, null, "17af17c6", null),
        g = h.exports,
        v = n("9c30"),
        j = {
            name: "CornerBar",
            components: {
                BellNotice: g
            },
            data: function() {
                return {
                    isDarkMode: !1
                }
            },
            computed: Object(o["a"])(Object(o["a"])({},
            Object(i["b"])("auth", ["userInfo"])), {},
            {
                email: function() {
                    return this.userInfo.email
                },
                username: function() {
                    return this.email.split("@")[0].toUpperCase()
                },
                avatar: function() {
                    return this.username.substring(0, 1)
                },
                isBackend: function() {
                    return this.$route.path.includes("/stage")
                },
                menuText: function() {
                    return this.isBackend ? "个人中心": "我的服务"
                },
                menuPath: function() {
                    return this.isBackend ? "/stage/profile": "/stage/dashboard"
                }
            }),
            watch: {
                isDarkMode: {
                    immediate: !1,
                    handler: function(e) {
                        e ? (v["enable"]({
                            brightness: 100,
                            contrast: 90,
                            sepia: 10
                        }), document.body.classList.add("is-darkmode")) : (v["disable"](), document.body.classList.remove("is-darkmode")),
                        this.$ls.set(u["b"], e ? "dark": "light")
                    }
                }
            },
            mounted: function() {
                this.isDarkMode = v["isEnabled"]()
            },
            methods: {
                onLogout: function() {
                    var e = this;
                    return Object(c["a"])(Object(r["a"])().mark((function t() {
                        return Object(r["a"])().wrap((function(t) {
                            while (1) switch (t.prev = t.next) {
                            case 0:
                                e.$ls.remove(u["a"]),
                                location.reload();
                            case 2:
                            case "end":
                                return t.stop()
                            }
                        }), t)
                    })))()
                }
            }
        },
        k = j,
        w = (n("0f8c"), n("8048"), Object(b["a"])(k, a, s, !1, null, "4a54cdb4", null));
        t["a"] = w.exports
    },
    2887 : function(e, t, n) {},
    "30b4": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return c
        })),
        n.d(t, "b", (function() {
            return o
        }));
        var a = n("2b0e"),
        s = n("c16e"),
        r = n.n(s);
        a["default"].use(r.a, {
            namespace: "__AURORA__",
            name: "ls",
            storage: "local"
        });
        var c = "authorization",
        o = "Darkmode";
        t["c"] = a["default"].ls
    },
    3660 : function(e, t, n) {},
    4678 : function(e, t, n) {
        var a = {
            "./af": "2bfb",
            "./af.js": "2bfb",
            "./ar": "8e73",
            "./ar-dz": "a356",
            "./ar-dz.js": "a356",
            "./ar-kw": "423e",
            "./ar-kw.js": "423e",
            "./ar-ly": "1cfd",
            "./ar-ly.js": "1cfd",
            "./ar-ma": "0a84",
            "./ar-ma.js": "0a84",
            "./ar-sa": "8230",
            "./ar-sa.js": "8230",
            "./ar-tn": "6d83",
            "./ar-tn.js": "6d83",
            "./ar.js": "8e73",
            "./az": "485c",
            "./az.js": "485c",
            "./be": "1fc1",
            "./be.js": "1fc1",
            "./bg": "84aa",
            "./bg.js": "84aa",
            "./bm": "a7fa",
            "./bm.js": "a7fa",
            "./bn": "9043",
            "./bn-bd": "9686",
            "./bn-bd.js": "9686",
            "./bn.js": "9043",
            "./bo": "d26a",
            "./bo.js": "d26a",
            "./br": "6887",
            "./br.js": "6887",
            "./bs": "2554",
            "./bs.js": "2554",
            "./ca": "d716",
            "./ca.js": "d716",
            "./cs": "3c0d",
            "./cs.js": "3c0d",
            "./cv": "03ec",
            "./cv.js": "03ec",
            "./cy": "9797",
            "./cy.js": "9797",
            "./da": "0f14",
            "./da.js": "0f14",
            "./de": "b469",
            "./de-at": "b3eb",
            "./de-at.js": "b3eb",
            "./de-ch": "bb71",
            "./de-ch.js": "bb71",
            "./de.js": "b469",
            "./dv": "598a",
            "./dv.js": "598a",
            "./el": "8d47",
            "./el.js": "8d47",
            "./en-au": "0e6b",
            "./en-au.js": "0e6b",
            "./en-ca": "3886",
            "./en-ca.js": "3886",
            "./en-gb": "39a6",
            "./en-gb.js": "39a6",
            "./en-ie": "e1d3",
            "./en-ie.js": "e1d3",
            "./en-il": "7333",
            "./en-il.js": "7333",
            "./en-in": "ec2e",
            "./en-in.js": "ec2e",
            "./en-nz": "6f50",
            "./en-nz.js": "6f50",
            "./en-sg": "b7e9",
            "./en-sg.js": "b7e9",
            "./eo": "65db",
            "./eo.js": "65db",
            "./es": "898b",
            "./es-do": "0a3c",
            "./es-do.js": "0a3c",
            "./es-mx": "b5b7",
            "./es-mx.js": "b5b7",
            "./es-us": "55c9",
            "./es-us.js": "55c9",
            "./es.js": "898b",
            "./et": "ec18",
            "./et.js": "ec18",
            "./eu": "0ff2",
            "./eu.js": "0ff2",
            "./fa": "8df4",
            "./fa.js": "8df4",
            "./fi": "81e9",
            "./fi.js": "81e9",
            "./fil": "d69a",
            "./fil.js": "d69a",
            "./fo": "0721",
            "./fo.js": "0721",
            "./fr": "9f26",
            "./fr-ca": "d9f8",
            "./fr-ca.js": "d9f8",
            "./fr-ch": "0e49",
            "./fr-ch.js": "0e49",
            "./fr.js": "9f26",
            "./fy": "7118",
            "./fy.js": "7118",
            "./ga": "5120",
            "./ga.js": "5120",
            "./gd": "f6b4",
            "./gd.js": "f6b4",
            "./gl": "8840",
            "./gl.js": "8840",
            "./gom-deva": "aaf2",
            "./gom-deva.js": "aaf2",
            "./gom-latn": "0caa",
            "./gom-latn.js": "0caa",
            "./gu": "e0c5",
            "./gu.js": "e0c5",
            "./he": "c7aa",
            "./he.js": "c7aa",
            "./hi": "dc4d",
            "./hi.js": "dc4d",
            "./hr": "4ba9",
            "./hr.js": "4ba9",
            "./hu": "5b14",
            "./hu.js": "5b14",
            "./hy-am": "d6b6",
            "./hy-am.js": "d6b6",
            "./id": "5038",
            "./id.js": "5038",
            "./is": "0558",
            "./is.js": "0558",
            "./it": "6e98",
            "./it-ch": "6f12",
            "./it-ch.js": "6f12",
            "./it.js": "6e98",
            "./ja": "079e",
            "./ja.js": "079e",
            "./jv": "b540",
            "./jv.js": "b540",
            "./ka": "201b",
            "./ka.js": "201b",
            "./kk": "6d79",
            "./kk.js": "6d79",
            "./km": "e81d",
            "./km.js": "e81d",
            "./kn": "3e92",
            "./kn.js": "3e92",
            "./ko": "22f8",
            "./ko.js": "22f8",
            "./ku": "2421",
            "./ku.js": "2421",
            "./ky": "9609",
            "./ky.js": "9609",
            "./lb": "440c",
            "./lb.js": "440c",
            "./lo": "b29d",
            "./lo.js": "b29d",
            "./lt": "26f9",
            "./lt.js": "26f9",
            "./lv": "b97c",
            "./lv.js": "b97c",
            "./me": "293c",
            "./me.js": "293c",
            "./mi": "688b",
            "./mi.js": "688b",
            "./mk": "6909",
            "./mk.js": "6909",
            "./ml": "02fb",
            "./ml.js": "02fb",
            "./mn": "958b",
            "./mn.js": "958b",
            "./mr": "39bd",
            "./mr.js": "39bd",
            "./ms": "ebe4",
            "./ms-my": "6403",
            "./ms-my.js": "6403",
            "./ms.js": "ebe4",
            "./mt": "1b45",
            "./mt.js": "1b45",
            "./my": "8689",
            "./my.js": "8689",
            "./nb": "6ce3",
            "./nb.js": "6ce3",
            "./ne": "3a39",
            "./ne.js": "3a39",
            "./nl": "facd",
            "./nl-be": "db29",
            "./nl-be.js": "db29",
            "./nl.js": "facd",
            "./nn": "b84c",
            "./nn.js": "b84c",
            "./oc-lnc": "167b",
            "./oc-lnc.js": "167b",
            "./pa-in": "f3ff",
            "./pa-in.js": "f3ff",
            "./pl": "8d57",
            "./pl.js": "8d57",
            "./pt": "f260",
            "./pt-br": "d2d4",
            "./pt-br.js": "d2d4",
            "./pt.js": "f260",
            "./ro": "972c",
            "./ro.js": "972c",
            "./ru": "957c",
            "./ru.js": "957c",
            "./sd": "6784",
            "./sd.js": "6784",
            "./se": "ffff",
            "./se.js": "ffff",
            "./si": "eda5",
            "./si.js": "eda5",
            "./sk": "7be6",
            "./sk.js": "7be6",
            "./sl": "8155",
            "./sl.js": "8155",
            "./sq": "c8f3",
            "./sq.js": "c8f3",
            "./sr": "cf1e",
            "./sr-cyrl": "13e9",
            "./sr-cyrl.js": "13e9",
            "./sr.js": "cf1e",
            "./ss": "52bd",
            "./ss.js": "52bd",
            "./sv": "5fbd",
            "./sv.js": "5fbd",
            "./sw": "74dc",
            "./sw.js": "74dc",
            "./ta": "3de5",
            "./ta.js": "3de5",
            "./te": "5cbb",
            "./te.js": "5cbb",
            "./tet": "576c",
            "./tet.js": "576c",
            "./tg": "3b1b",
            "./tg.js": "3b1b",
            "./th": "10e8",
            "./th.js": "10e8",
            "./tk": "5aff",
            "./tk.js": "5aff",
            "./tl-ph": "0f38",
            "./tl-ph.js": "0f38",
            "./tlh": "cf75",
            "./tlh.js": "cf75",
            "./tr": "0e81",
            "./tr.js": "0e81",
            "./tzl": "cf51",
            "./tzl.js": "cf51",
            "./tzm": "c109",
            "./tzm-latn": "b53d",
            "./tzm-latn.js": "b53d",
            "./tzm.js": "c109",
            "./ug-cn": "6117",
            "./ug-cn.js": "6117",
            "./uk": "ada2",
            "./uk.js": "ada2",
            "./ur": "5294",
            "./ur.js": "5294",
            "./uz": "2e8c",
            "./uz-latn": "010e",
            "./uz-latn.js": "010e",
            "./uz.js": "2e8c",
            "./vi": "2921",
            "./vi.js": "2921",
            "./x-pseudo": "fd7e",
            "./x-pseudo.js": "fd7e",
            "./yo": "7f33",
            "./yo.js": "7f33",
            "./zh-cn": "5c3a",
            "./zh-cn.js": "5c3a",
            "./zh-hk": "49ab",
            "./zh-hk.js": "49ab",
            "./zh-mo": "3a6c",
            "./zh-mo.js": "3a6c",
            "./zh-tw": "90ea",
            "./zh-tw.js": "90ea"
        };
        function s(e) {
            var t = r(e);
            return n(t)
        }
        function r(e) {
            if (!n.o(a, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return a[e]
        }
        s.keys = function() {
            return Object.keys(a)
        },
        s.resolve = r,
        e.exports = s,
        s.id = "4678"
    },
    "54d7": function(e, t, n) {
        "use strict";
        n.d(t, "h", (function() {
            return s
        })),
        n.d(t, "g", (function() {
            return r
        })),
        n.d(t, "f", (function() {
            return c
        })),
        n.d(t, "e", (function() {
            return o
        })),
        n.d(t, "c", (function() {
            return i
        })),
        n.d(t, "a", (function() {
            return u
        })),
        n.d(t, "b", (function() {
            return d
        })),
        n.d(t, "d", (function() {
            return l
        }));
        var a = window.EnvConfig,
        s = a.staticUrl,
        r = a.serverUrl,
        c = a.licenseKey,
        o = a.landPage,
        i = a.appName,
        u = a.appDesc,
        d = (a.appTheme, a.appColor, a.appLogo),
        l = a.appVersion
    },
    "56d7": function(e, t, n) {
        "use strict";
        n.r(t);
        n("e260"),
        n("e6cf"),
        n("cca6"),
        n("a79d"),
        n("ac1f"),
        n("5319");
        var a = n("2b0e"),
        s = function() {
            var e = this,
            t = e.$createElement,
            n = e._self._c || t;
            return null !== e.showApp ? n("div", {
                attrs: {
                    id: "app"
                }
            },
            [e.showApp ? n("a-config-provider", {
                attrs: {
                    locale: e.locale
                }
            },
            [n("router-view")], 1) : n("div", {
                staticClass: "error-tip"
            },
            [n("div", {
                staticClass: "img"
            },
            [e.rocketOptions.animationData ? n("lottie", {
                staticClass: "in",
                attrs: {
                    options: e.rocketOptions,
                    height: 500,
                    width: 500
                }
            }) : e._e()], 1), n("div", {
                staticClass: "text"
            },
            [e._v(e._s(e.showError))]), n("div", {
                staticClass: "link"
            },
            [e._v(" 联系 "), n("a", {
                attrs: {
                    target: "_blank",
                    href: "https://t.me/kunpehx"
                }
            },
            [e._v("@kunpehx")])])])], 1) : e._e()
        },
        r = [],
        c = n("c7eb"),
        o = n("1da1"),
        i = (n("d3b7"), n("677e")),
        u = n.n(i),
        d = n("54d7"),
        l = n("8c2c"),
        f = n("bc3a"),
        m = n.n(f),
        p = {
            name: "App",
            components: {
                Lottie: l["a"]
            },
            data: function() {
                return {
                    locale: u.a,
                    showApp: null,
                    showError: "",
                    rocketOptions: {
                        animationData: null
                    }
                }
            },
            mounted: function() {
                var e = this;
                this.initWasm(),
                setTimeout((function() {
                    m.a.get(d["h"] + "/80438-no-supported-area.json").then((function(t) {
                        e.rocketOptions.animationData = t.data
                    }))
                }), 0)
            },
            methods: {
                initCheck: function() {
                    var e = this;
                    return Object(o["a"])(Object(c["a"])().mark((function t() {
                        var n;
                        return Object(c["a"])().wrap((function(t) {
                            while (1) switch (t.prev = t.next) {
                            case 0:
                                try {
                                    n = window.Active(d["f"], d["c"]),
                                    console.log("response", n),
                                    !0 === n || "true" === n ? (e.showApp = !0, e.initAppConfig()) : (e.showApp = !1, e.showError = n || "授权码错误，请联系作者")
                                } catch(a) {
                                    console.error("Caught exception", a)
                                }
                            case 1:
                            case "end":
                                return t.stop()
                            }
                        }), t)
                    })))()
                },
                initWasm: function() {
                    var e = this,
                    t = d["h"] + "/wasm.wasm",
                    n = new window.Go;
                    "instantiateStreaming" in WebAssembly ? WebAssembly.instantiateStreaming(fetch(t), n.importObject).then((function(t) {
                        n.run(t.instance),
                        e.initCheck()
                    })) : fetch(t).then((function(e) {
                        return e.arrayBuffer()
                    })).then((function(t) {
                        return WebAssembly.instantiate(t, n.importObject).then((function(t) {
                            n.run(t.instance),
                            e.initCheck()
                        }))
                    }))
                },
                initAppConfig: function() {
                    this.$store.dispatch("auth/getGlobalConfig")
                }
            }
        },
        b = p,
        h = (n("6cdd"), n("2877")),
        g = Object(h["a"])(b, s, r, !1, null, "75fcc72b", null),
        v = g.exports,
        j = n("77a0"),
        k = n.n(j),
        w = n("2b88"),
        y = n.n(w),
        O = n("f23d"),
        C = (n("2fbf"), n("d71b")),
        _ = n("9c30"),
        x = (n("3660"), n("ecff"), n("2887"),
        function() {
            var e = this,
            t = e.$createElement,
            n = e._self._c || t;
            return n("span", e._g({
                staticClass: "svg-icon",
                class: {
                    disabled: e.disabled
                }
            },
            e.$listeners), [n("i", {
                class: [e.iconName, e.iconWeight]
            })])
        }),
        T = [],
        E = (n("b0c0"), {
            name: "SvgIcon",
            props: {
                name: {
                    type: String,
                    required: !0
                },
                weight: {
                    type: String,
                    required: !1,
                default:
                    "regular"
                },
                disabled: {
                    type: Boolean,
                default:
                    !1
                }
            },
            computed: {
                iconName: function() {
                    return "ph-" + this.name
                },
                iconWeight: function() {
                    return "regular" === this.weight ? "ph": "ph-" + this.weight
                }
            }
        }),
        z = E,
        P = (n("cf76"), Object(h["a"])(z, x, T, !1, null, "425f4b60", null)),
        I = P.exports;
        a["default"].component("svg-icon", I);
        var L = n("7a2c"),
        N = n("ec26");
        a["default"].prototype.$appName = d["c"],
        a["default"].prototype.$appDesc = d["a"],
        a["default"].prototype.$appLogo = d["b"],
        a["default"].prototype.$appVersion = d["d"].replace(/\.\d{8,}/, ""),
        a["default"].prototype.$uuid = N["a"],
        a["default"].use(O["a"]),
        a["default"].use(C["a"]),
        a["default"].use(y.a),
        a["default"].use(k.a, {
            ops: {
                rail: {
                    size: "10px"
                },
                bar: {
                    background: "#CCC",
                    size: "10px",
                    keepShow: !1
                }
            },
            name: "VueScroll"
        }),
        a["default"].config.productionTip = !1,
        window.isDarkMode() ? _["enable"]({
            brightness: 100,
            contrast: 90,
            sepia: 10
        }) : _["disable"](),
        new a["default"]({
            el: "#app",
            router: L["a"],
            store: L["b"],
            render: function(e) {
                return e(v)
            }
        })
    },
    6257 : function(e, t, n) {},
    "62d0": function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return r
        })),
        n.d(t, "c", (function() {
            return c
        })),
        n.d(t, "d", (function() {
            return o
        })),
        n.d(t, "g", (function() {
            return i
        })),
        n.d(t, "h", (function() {
            return u
        })),
        n.d(t, "f", (function() {
            return d
        })),
        n.d(t, "e", (function() {
            return l
        })),
        n.d(t, "a", (function() {
            return f
        }));
        var a = n("54d7"),
        s = n("8c8a");
        function r() {
            return Object(s["a"])({
                url: a["g"] + "/api/v1/guest/comm/config",
                method: "get"
            })
        }
        function c() {
            return Object(s["a"])({
                url: a["g"] + "/api/v1/user/comm/config",
                method: "get"
            })
        }
        function o() {
            return Object(s["a"])({
                url: a["g"] + "/api/v1/user/info",
                method: "get"
            })
        }
        function i(e) {
            return Object(s["a"])({
                url: a["g"] + "/api/v1/passport/auth/login",
                method: "post",
                data: e
            })
        }
        function u(e) {
            return Object(s["a"])({
                url: a["g"] + "/api/v1/passport/auth/register",
                method: "post",
                data: e
            })
        }
        function d(e) {
            return Object(s["a"])({
                url: a["g"] + "/api/v1/passport/comm/sendEmailVerify",
                method: "post",
                params: e
            })
        }
        function l(e) {
            return Object(s["a"])({
                url: a["g"] + "/api/v1/passport/auth/forget",
                method: "post",
                params: e
            })
        }
        function f(e) {
            return Object(s["a"])({
                url: a["g"] + "/api/v1/user/changePassword",
                method: "post",
                params: e
            })
        }
    },
    "6cdd": function(e, t, n) {
        "use strict";
        n("85bb")
    },
    79482 : function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("c7eb"),
        s = n("1da1"),
        r = n("62d0"),
        c = {
            globalConfig: {},
            userConfig: {},
            userInfo: {}
        },
        o = {
            SET_GLOBAL_CONFIG: function(e, t) {
                e.globalConfig = t
            },
            SET_USER_CONFIG: function(e, t) {
                e.userConfig = t
            },
            SET_USER_INFO: function(e, t) {
                e.userInfo = t
            }
        },
        i = {
            getGlobalConfig: function(e) {
                return Object(s["a"])(Object(a["a"])().mark((function t() {
                    var n, s;
                    return Object(a["a"])().wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return n = e.commit,
                            t.next = 3,
                            Object(r["b"])();
                        case 3:
                            s = t.sent,
                            n("SET_GLOBAL_CONFIG", s.data);
                        case 5:
                        case "end":
                            return t.stop()
                        }
                    }), t)
                })))()
            },
            getUserConfig: function(e) {
                return Object(s["a"])(Object(a["a"])().mark((function t() {
                    var n, s;
                    return Object(a["a"])().wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return n = e.commit,
                            t.next = 3,
                            Object(r["c"])();
                        case 3:
                            s = t.sent,
                            n("SET_USER_CONFIG", s.data);
                        case 5:
                        case "end":
                            return t.stop()
                        }
                    }), t)
                })))()
            },
            getUserInfo: function(e) {
                return Object(s["a"])(Object(a["a"])().mark((function t() {
                    var n, s;
                    return Object(a["a"])().wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return n = e.commit,
                            t.next = 3,
                            Object(r["d"])();
                        case 3:
                            s = t.sent,
                            n("SET_USER_INFO", s.data);
                        case 5:
                        case "end":
                            return t.stop()
                        }
                    }), t)
                })))()
            }
        };
        t["default"] = {
            namespaced: !0,
            state: c,
            mutations: o,
            actions: i
        }
    },
    "7a2c": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return k
        })),
        n.d(t, "b", (function() {
            return f
        }));
        var a = n("c7eb"),
        s = n("5530"),
        r = n("1da1"),
        c = (n("a15b"), n("b0c0"), n("caad"), n("2b0e")),
        o = n("8c4f"),
        i = (n("13d5"), n("d3b7"), n("ddb0"), n("ac1f"), n("466d"), n("d9e2"), n("2f62"));
        c["default"].use(i["a"]);
        var u = n("9da2"),
        d = u.keys().reduce((function(e, t) {
            var n = t.match(/(\w+)\.js/)[1];
            if (e[n]) throw new Error("store模块文件名不允许重名，请修改");
            var a = u(t);
            return e[n] = a.
        default,
            e
        }), {}),
        l = new i["a"].Store({
            modules: d
        }),
        f = l;
        n("99af");
        function m() {
            var e = g.keys(),
            t = e.reduce((function(e, t) {
                return e.concat(g(t).
            default)
            }), []);
            return t
        }
        var p = n("30b4"),
        b = n("54d7"),
        h = o["a"].prototype.push;
        o["a"].prototype.push = function(e) {
            return h.call(this, e).
            catch((function(e) {
                return e
            }))
        },
        c["default"].use(o["a"]);
        var g = n("22d6"),
        v = new o["a"]({
            mode: "hash",
            scrollBehavior: function() {
                return {
                    y: 0
                }
            },
            routes: m()
        }),
        j = ["/", "/login", "/register", "/reset-password", "/agreement", "/error"];
        v.beforeEach(function() {
            var e = Object(r["a"])(Object(a["a"])().mark((function e(t, n, r) {
                var c, o, i, u;
                return Object(a["a"])().wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        if (document.title = [b["c"], null !== (c = null === (o = t.meta) || void 0 === o ? void 0 : o.name) && void 0 !== c ? c: ""].join(" - "), "/error" !== t.path) {
                            e.next = 3;
                            break
                        }
                        return e.abrupt("return", r());
                    case 3:
                        if (i = p["c"].get(p["a"]), !i) {
                            e.next = 27;
                            break
                        }
                        if ("/login" !== t.path) {
                            e.next = 9;
                            break
                        }
                        r({
                            path: "/stage"
                        }),
                        e.next = 25;
                        break;
                    case 9:
                        if (u = f.state.auth.userInfo, !u.uuid) {
                            e.next = 14;
                            break
                        }
                        r(),
                        e.next = 25;
                        break;
                    case 14:
                        return e.prev = 14,
                        e.next = 17,
                        f.dispatch("auth/getUserConfig");
                    case 17:
                        return e.next = 19,
                        f.dispatch("auth/getUserInfo");
                    case 19:
                        r(Object(s["a"])(Object(s["a"])({},
                        t), {},
                        {
                            replace: !0
                        })),
                        e.next = 25;
                        break;
                    case 22:
                        e.prev = 22,
                        e.t0 = e["catch"](14),
                        r("/error");
                    case 25:
                        e.next = 28;
                        break;
                    case 27:
                        j.includes(t.path) ? r() : r("/login");
                    case 28:
                    case "end":
                        return e.stop()
                    }
                }), e, null, [[14, 22]])
            })));
            return function(t, n, a) {
                return e.apply(this, arguments)
            }
        } ());
        var k = v
    },
    "7ebf": function(e, t, n) {
        "use strict";
        n("d2fa")
    },
    8048 : function(e, t, n) {
        "use strict";
        n("0705")
    },
    "85bb": function(e, t, n) {},
    8918 : function(e, t, n) {
        e.exports = n.p + "static/img/rocket2.a37fff7d.svg"
    },
    "8c8a": function(e, t, n) {
        "use strict";
        n("d3b7");
        var a = n("bc3a"),
        s = n.n(a),
        r = n("56cd"),
        c = n("30b4"),
        o = n("323e"),
        i = n.n(o),
        u = (n("a5d8"), s.a.create({
            baseURL: "",
            timeout: 3e4
        }));
        function d() {
            i.a.start()
        }
        function l() {
            i.a.done()
        }
        i.a.configure({
            showSpinner: !1
        }),
        u.interceptors.request.use((function(e) {
            return d(),
            c["c"].get(c["a"]) && (e.headers[c["a"]] = c["c"].get(c["a"])),
            e
        }), (function(e) {
            return Promise.reject(e)
        })),
        u.interceptors.response.use((function(e) {
            l();
            var t = e.data;
            return t
        }), (function(e) {
            console.log(e),
            l();
            try {
                var t = e.response.data;
                r["a"].error({
                    message: "提示",
                    description: t.message
                }),
                "未登录或登陆已过期" === t.message && c["c"].remove(c["a"])
            } catch(n) {
                r["a"].error({
                    message: "提示",
                    description: "似乎出了点问题"
                })
            }
            return Promise.reject(e)
        })),
        t["a"] = u
    },
    "921c": function(e, t, n) {},
    "9da2": function(e, t, n) {
        var a = {
            "./views/gate/stores/auth.js": "79482"
        };
        function s(e) {
            var t = r(e);
            return n(t)
        }
        function r(e) {
            if (!n.o(a, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return a[e]
        }
        s.keys = function() {
            return Object.keys(a)
        },
        s.resolve = r,
        e.exports = s,
        s.id = "9da2"
    },
    cd37: function(e, t, n) {
        "use strict";
        n("1a1c")
    },
    cf76: function(e, t, n) {
        "use strict";
        n("921c")
    },
    d2fa: function(e, t, n) {},
    d5e5: function(e, t, n) {},
    d82d: function(e, t, n) {
        "use strict";
        n.r(t);
        n("d3b7"),
        n("3ca3"),
        n("ddb0");
        var a = n("54d7");
        t["default"] = [{
            path: "/",
            name: "Home",
            redirect: "index" === a["e"] ? "/home": "/login"
        },
        {
            path: "/home",
            name: "Home",
            component: function() {
                return Promise.all([n.e("chunk-2d0daec5"), n.e("chunk-7af539e8")]).then(n.bind(null, "c465"))
            },
            meta: {
                name: "首页"
            }
        },
        {
            path: "/login",
            name: "Login",
            component: function() {
                return n.e("chunk-93df4642").then(n.bind(null, "cc9a"))
            },
            meta: {
                name: "登录"
            }
        },
        {
            path: "/register",
            name: "Register",
            component: function() {
                return n.e("chunk-39db48c4").then(n.bind(null, "16e9"))
            },
            meta: {
                name: "注册"
            }
        },
        {
            path: "/reset-password",
            name: "ResetPassword",
            component: function() {
                return n.e("chunk-3fc7716f").then(n.bind(null, "04b6"))
            },
            meta: {
                name: "重置密码"
            }
        },
        {
            path: "/agreement",
            name: "Agreement",
            component: function() {
                return n.e("chunk-3d5589d0").then(n.bind(null, "364d"))
            },
            meta: {
                name: "服务协议"
            }
        },
        {
            path: "/error",
            name: "Error",
            component: function() {
                return n.e("chunk-2f337956").then(n.bind(null, "8a7e"))
            },
            meta: {
                name: "异常"
            }
        }]
    },
    d8ad: function(e, t, n) {
        "use strict";
        n("d5e5")
    },
    ecff: function(e, t, n) {},
    f488: function(e, t, n) {
        "use strict";
        n.r(t);
        n("d3b7"),
        n("3ca3"),
        n("ddb0");
        var a = function() {
            var e = this,
            t = e.$createElement,
            a = e._self._c || t;
            return a("div", {
                ref: "refLayout",
                staticClass: "layout-container",
                class: {
                    "is-collapse": e.isCollapse,
                    "is-expand": !e.isCollapse
                }
            },
            [a("div", {
                staticClass: "layout-menu use-shadow"
            },
            [a("h1", {
                staticClass: "menu-logo",
                on: {
                    click: function(t) {
                        return e.$router.push("/")
                    }
                }
            },
            [e.$appLogo ? a("img", {
                attrs: {
                    src: e.$appLogo
                }
            }) : a("img", {
                attrs: {
                    src: n("8918")
                }
            }), a("span", [e._v(e._s(e.$appName))])]), a("div", {
                staticClass: "menu-groups"
            },
            e._l(e.navMenus, (function(t, n) {
                return a("div", {
                    key: n,
                    staticClass: "menu-group"
                },
                [t.groupTitle ? a("div", {
                    staticClass: "g-title"
                },
                [e._v(e._s(t.groupTitle))]) : e._e(), a("ul", {
                    staticClass: "g-links"
                },
                e._l(t.groupLinks, (function(t, n) {
                    return a("li", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.menuHide,
                            expression: "!menu.menuHide"
                        }],
                        key: n,
                        class: {
                            "is-active": t.menuPath === e.$route.path
                        }
                    },
                    [a("a-tooltip", {
                        attrs: {
                            title: t.menuTitle,
                            placement: "right",
                            "get-popup-container": function() {
                                return e.$refs.refLayout
                            }
                        }
                    },
                    [a("router-link", {
                        staticClass: "link",
                        attrs: {
                            to: t.menuPath
                        }
                    },
                    [a("svg-icon", {
                        attrs: {
                            name: t.menuIcon,
                            weight: "duotone"
                        }
                    }), a("span", {
                        staticClass: "tit"
                    },
                    [e._v(e._s(t.menuTitle))])], 1)], 1)], 1)
                })), 0)])
            })), 0), a("p", {
                staticClass: "version"
            },
            [e._v(" " + e._s(e.$appName + " " + e.$appVersion) + " ")])]), a("div", {
                staticClass: "layout-topbar"
            },
            [a("div", {
                staticClass: "topbar-collapse"
            },
            [a("div", {
                staticClass: "svg-icon",
                on: {
                    click: function(t) {
                        t.stopPropagation(),
                        e.isCollapse = !e.isCollapse
                    }
                }
            },
            [a("svg", {
                staticStyle: {
                    display: "block"
                },
                attrs: {
                    width: "32",
                    height: "32",
                    viewBox: "0 0 46 46",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            },
            [a("path", {
                attrs: {
                    d: "M40.25 11.5H5.75",
                    stroke: "#1B1B1B",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round"
                }
            }), a("path", {
                attrs: {
                    d: "M40.25 23H5.75",
                    stroke: "#1B1B1B",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round"
                }
            }), a("path", {
                attrs: {
                    d: "M23 34.5H5.75",
                    stroke: "#1B1B1B",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round"
                }
            })])]), a("div", {
                staticClass: "title"
            },
            [e._v(e._s(e.navTitle))])]), a("corner-bar")], 1), a("div", {
                staticClass: "layout-main"
            },
            [a("div", {
                staticClass: "wrapper"
            },
            [a("router-view")], 1)])])
        },
        s = [],
        r = (n("7db0"), n("0481"), n("4069"), n("d81d"), n("caad"), n("2532"), [{
            groupTitle: "",
            groupLinks: [{
                menuTitle: "仪表盘",
                menuIcon: "gauge",
                menuPath: "/stage/dashboard"
            },
            {
                menuTitle: "使用教程",
                menuIcon: "book-open-text",
                menuPath: "/stage/knowledge"
            }]
        },
        {
            groupTitle: "订阅",
            groupLinks: [{
                menuTitle: "购买订阅",
                menuIcon: "currency-circle-dollar",
                menuPath: "/stage/buysubs"
            },
            {
                menuTitle: "购买订阅",
                menuIcon: "currency-circle-dollar",
                menuPath: "/stage/buysubs/order",
                menuHide: !0
            },
            {
                menuTitle: "我的订阅",
                menuIcon: "shopping-cart-simple",
                menuPath: "/stage/mysubs"
            }]
        },
        {
            groupTitle: "财务",
            groupLinks: [{
                menuTitle: "我的订单",
                menuIcon: "cardholder",
                menuPath: "/stage/order"
            },
            {
                menuTitle: "我的订单",
                menuIcon: "cardholder",
                menuPath: "/stage/order/info",
                menuHide: !0
            },
            {
                menuTitle: "邀请赚佣金",
                menuIcon: "link-break",
                menuPath: "/stage/invite"
            }]
        },
        {
            groupTitle: "用户",
            groupLinks: [{
                menuTitle: "个人中心",
                menuIcon: "user-circle",
                menuPath: "/stage/profile"
            },
            {
                menuTitle: "我的工单",
                menuIcon: "chat-centered-dots",
                menuPath: "/stage/ticket"
            },
            {
                menuTitle: "流量明细",
                menuIcon: "presentation-chart",
                menuPath: "/stage/flow"
            }]
        }]),
        c = n("27f9"),
        o = (n("199e"), n("4de4"), n("2b0e")),
        i = n("72f9"),
        u = n.n(i),
        d = n("f248"),
        l = n.n(d),
        f = n("5a0c"),
        m = n.n(f),
        p = n("7a2c");
        o["default"].filter("amount", (function() {
            var e, t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            a = null !== (e = null === (t = p["b"].state.auth.userConfig) || void 0 === t ? void 0 : t.currency_symbol) && void 0 !== e ? e: "¥";
            return u()(n, {
                fromCents: !0,
                symbol: a
            }).format()
        })),
        o["default"].filter("flow", (function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            return l()(e)
        })),
        o["default"].filter("date", (function(e) {
            return e ? m.a.unix(e).format("YYYY/MM/DD") : ""
        })),
        o["default"].filter("datetime", (function(e) {
            return e ? m.a.unix(e).format("YYYY/MM/DD HH:mm:ss") : ""
        }));
        var b = {
            name: "Layout",
            components: {
                CornerBar: c["a"]
            },
            data: function() {
                return {
                    isCollapse: window.innerWidth < 900,
                    navMenus: r
                }
            },
            computed: {
                navTitle: function() {
                    var e, t = this;
                    return null === (e = this.navMenus.map((function(e) {
                        return e.groupLinks
                    })).flat().find((function(e) {
                        return t.$route.path.includes(e.menuPath)
                    }))) || void 0 === e ? void 0 : e.menuTitle
                }
            },
            mounted: function() {
                var e = this;
                window.addEventListener("resize", (function() {
                    e.isCollapse = window.innerWidth < 900
                }), !1),
                document.addEventListener("click", (function() {
                    window.innerWidth < 700 && (e.isCollapse = !0)
                }), !1)
            }
        },
        h = b,
        g = (n("7ebf"), n("2877")),
        v = Object(g["a"])(h, a, s, !1, null, "a1fcde5c", null),
        j = v.exports;
        t["default"] = [{
            path: "/stage",
            name: "Stage",
            component: j,
            redirect: "/stage/dashboard",
            children: [{
                path: "/stage/dashboard",
                name: "Dashboard",
                component: function() {
                    return Promise.all([n.e("chunk-131c13e9"), n.e("chunk-91c31360"), n.e("chunk-569e4ee8")]).then(n.bind(null, "12a6"))
                },
                meta: {
                    name: "仪表盘"
                }
            },
            {
                path: "/stage/knowledge",
                name: "Knowledge",
                component: function() {
                    return Promise.all([n.e("chunk-2d0aa5b8"), n.e("chunk-78df7426"), n.e("chunk-0111a542")]).then(n.bind(null, "538b"))
                },
                meta: {
                    name: "使用教程"
                }
            },
            {
                path: "/stage/flow",
                name: "Flow",
                component: function() {
                    return n.e("chunk-bc9f1460").then(n.bind(null, "dae4"))
                },
                meta: {
                    name: "流量明细"
                }
            },
            {
                path: "/stage/profile",
                name: "Profile",
                component: function() {
                    return Promise.all([n.e("chunk-2d0aa5b8"), n.e("chunk-68073a80")]).then(n.bind(null, "a75e"))
                },
                meta: {
                    name: "个人中心"
                }
            },
            {
                path: "/stage/invite",
                name: "Invite",
                component: function() {
                    return n.e("chunk-56ceb11a").then(n.bind(null, "b5285"))
                },
                meta: {
                    name: "邀请赚佣金"
                }
            },
            {
                path: "/stage/buysubs",
                name: "Buysubs",
                component: function() {
                    return n.e("chunk-29ac4bec").then(n.bind(null, "0ffc"))
                },
                meta: {
                    name: "购买订阅"
                }
            },
            {
                path: "/stage/buysubs/order",
                name: "BuysubsOrder",
                component: function() {
                    return n.e("chunk-7c8b6774").then(n.bind(null, "6c95"))
                },
                meta: {
                    name: "订阅详情"
                }
            },
            {
                path: "/stage/mysubs",
                name: "Mysubs",
                component: function() {
                    return Promise.all([n.e("chunk-131c13e9"), n.e("chunk-8141c294")]).then(n.bind(null, "99c9"))
                },
                meta: {
                    name: "我的订阅"
                }
            },
            {
                path: "/stage/order",
                name: "Order",
                component: function() {
                    return n.e("chunk-c0f9a3fa").then(n.bind(null, "7f84"))
                },
                meta: {
                    name: "我的订单"
                }
            },
            {
                path: "/stage/order/info",
                name: "OrderInfo",
                component: function() {
                    return n.e("chunk-bddeaf02").then(n.bind(null, "89cf"))
                },
                meta: {
                    name: "订单详情"
                }
            },
            {
                path: "/stage/ticket",
                name: "Ticket",
                component: function() {
                    return n.e("chunk-338220b6").then(n.bind(null, "51a2"))
                },
                meta: {
                    name: "我的工单"
                }
            }]
        },
        {
            path: "/pay/qrcode",
            name: "PayQrcode",
            component: function() {
                return Promise.all([n.e("chunk-131c13e9"), n.e("chunk-c1f381c6")]).then(n.bind(null, "b29c"))
            },
            meta: {
                name: "支付"
            }
        }]
    }
},
[[0, "runtime", "n"]]]);