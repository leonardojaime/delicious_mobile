window.Modernizr = function (t, e, n) {
    function r(t) {
        f.cssText = t
    }

    function i(t, e) {
        return typeof t === e
    }
    var o, s, a, l = "2.6.2",
        u = {}, c = !0,
        p = e.documentElement,
        h = "modernizr",
        d = e.createElement(h),
        f = d.style,
        m = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
        g = {}, v = [],
        y = v.slice,
        b = function (t, n, r, i) {
            var o, s, a, l, u = e.createElement("div"),
                c = e.body,
                d = c || e.createElement("body");
            if (parseInt(r, 10))
                for (; r--;) a = e.createElement("div"), a.id = i ? i[r] : h + (r + 1), u.appendChild(a);
            return o = ["&#173;", '<style id="s', h, '">', t, "</style>"].join(""), u.id = h, (c ? u : d).innerHTML += o, d.appendChild(u), c || (d.style.background = "", d.style.overflow = "hidden", l = p.style.overflow, p.style.overflow = "hidden", p.appendChild(d)), s = n(u, t), c ? u.parentNode.removeChild(u) : (d.parentNode.removeChild(d), p.style.overflow = l), !! s
        }, w = function (e) {
            var n = t.matchMedia || t.msMatchMedia;
            if (n) return n(e).matches;
            var r;
            return b("@media " + e + " { #" + h + " { position: absolute; } }", function (e) {
                r = "absolute" == (t.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).position
            }), r
        }, _ = {}.hasOwnProperty;
    a = i(_, "undefined") || i(_.call, "undefined") ? function (t, e) {
        return e in t && i(t.constructor.prototype[e], "undefined")
    } : function (t, e) {
        return _.call(t, e)
    }, Function.prototype.bind || (Function.prototype.bind = function (t) {
        var e = this;
        if ("function" != typeof e) throw new TypeError;
        var n = y.call(arguments, 1),
            r = function () {
                if (this instanceof r) {
                    var i = function () {};
                    i.prototype = e.prototype;
                    var o = new i,
                        s = e.apply(o, n.concat(y.call(arguments)));
                    return Object(s) === s ? s : o
                }
                return e.apply(t, n.concat(y.call(arguments)))
            };
        return r
    }), g.touch = function () {
        var n;
        return "ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch ? n = !0 : b(["@media (", m.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (t) {
            n = 9 === t.offsetTop
        }), n
    }, g.history = function () {
        return !!t.history && !! history.pushState
    }, g.textshadow = function () {
        return "" === e.createElement("div").style.textShadow
    }, g.fontface = function () {
        var t;
        return b('@font-face {font-family:"font";src:url("https://")}', function (n, r) {
            var i = e.getElementById("smodernizr"),
                o = i.sheet || i.styleSheet,
                s = o ? o.cssRules && o.cssRules[0] ? o.cssRules[0].cssText : o.cssText || "" : "";
            t = /src/i.test(s) && 0 === s.indexOf(r.split(" ")[0])
        }), t
    };
    for (var k in g) a(g, k) && (s = k.toLowerCase(), u[s] = g[k](), v.push((u[s] ? "" : "no-") + s));
    return u.addTest = function (t, e) {
        if ("object" == typeof t)
            for (var r in t) a(t, r) && u.addTest(r, t[r]);
        else {
            if (t = t.toLowerCase(), u[t] !== n) return u;
            e = "function" == typeof e ? e() : e, c !== void 0 && c && (p.className += " " + (e ? "" : "no-") + t), u[t] = e
        }
        return u
    }, r(""), d = o = null,
    function (t, e) {
        function n(t, e) {
            var n = t.createElement("p"),
                r = t.getElementsByTagName("head")[0] || t.documentElement;
            return n.innerHTML = "x<style>" + e + "</style>", r.insertBefore(n.lastChild, r.firstChild)
        }

        function r() {
            var t = v.elements;
            return "string" == typeof t ? t.split(" ") : t
        }

        function i(t) {
            var e = g[t[f]];
            return e || (e = {}, m++, t[f] = m, g[m] = e), e
        }

        function o(t, n, r) {
            if (n || (n = e), c) return n.createElement(t);
            r || (r = i(n));
            var o;
            return o = r.cache[t] ? r.cache[t].cloneNode() : d.test(t) ? (r.cache[t] = r.createElem(t)).cloneNode() : r.createElem(t), o.canHaveChildren && !h.test(t) ? r.frag.appendChild(o) : o
        }

        function s(t, n) {
            if (t || (t = e), c) return t.createDocumentFragment();
            n = n || i(t);
            for (var o = n.frag.cloneNode(), s = 0, a = r(), l = a.length; l > s; s++) o.createElement(a[s]);
            return o
        }

        function a(t, e) {
            e.cache || (e.cache = {}, e.createElem = t.createElement, e.createFrag = t.createDocumentFragment, e.frag = e.createFrag()), t.createElement = function (n) {
                return v.shivMethods ? o(n, t, e) : e.createElem(n)
            }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/\w+/g, function (t) {
                return e.createElem(t), e.frag.createElement(t), 'c("' + t + '")'
            }) + ");return n}")(v, e.frag)
        }

        function l(t) {
            t || (t = e);
            var r = i(t);
            return v.shivCSS && !u && !r.hasCSS && (r.hasCSS = !! n(t, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), c || a(t, r), t
        }
        var u, c, p = t.html5 || {}, h = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            d = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            f = "_html5shiv",
            m = 0,
            g = {};
        (function () {
            try {
                var t = e.createElement("a");
                t.innerHTML = "<xyz></xyz>", u = "hidden" in t, c = 1 == t.childNodes.length || function () {
                    e.createElement("a");
                    var t = e.createDocumentFragment();
                    return t.cloneNode === void 0 || t.createDocumentFragment === void 0 || t.createElement === void 0
                }()
            } catch (n) {
                u = !0, c = !0
            }
        })();
        var v = {
            elements: p.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
            shivCSS: p.shivCSS !== !1,
            supportsUnknownElements: c,
            shivMethods: p.shivMethods !== !1,
            type: "default",
            shivDocument: l,
            createElement: o,
            createDocumentFragment: s
        };
        t.html5 = v, l(e)
    }(this, e), u._version = l, u._prefixes = m, u.mq = w, u.testStyles = b, p.className = p.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (c ? " js " + v.join(" ") : ""), u
}(this, this.document),
function (t, e, n) {
    function r(t) {
        return "[object Function]" == g.call(t)
    }

    function i(t) {
        return "string" == typeof t
    }

    function o() {}

    function s(t) {
        return !t || "loaded" == t || "complete" == t || "uninitialized" == t
    }

    function a() {
        var t = v.shift();
        y = 1, t ? t.t ? f(function () {
            ("c" == t.t ? h.injectCss : h.injectJs)(t.s, 0, t.a, t.x, t.e, 1)
        }, 0) : (t(), a()) : y = 0
    }

    function l(t, n, r, i, o, l, u) {
        function c(e) {
            if (!d && s(p.readyState) && (b.r = d = 1, !y && a(), p.onload = p.onreadystatechange = null, e)) {
                "img" != t && f(function () {
                    _.removeChild(p)
                }, 50);
                for (var r in T[n]) T[n].hasOwnProperty(r) && T[n][r].onload()
            }
        }
        var u = u || h.errorTimeout,
            p = e.createElement(t),
            d = 0,
            g = 0,
            b = {
                t: r,
                s: n,
                e: o,
                a: l,
                x: u
            };
        1 === T[n] && (g = 1, T[n] = []), "object" == t ? p.data = n : (p.src = n, p.type = t), p.width = p.height = "0", p.onerror = p.onload = p.onreadystatechange = function () {
            c.call(this, g)
        }, v.splice(i, 0, b), "img" != t && (g || 2 === T[n] ? (_.insertBefore(p, w ? null : m), f(c, u)) : T[n].push(p))
    }

    function u(t, e, n, r, o) {
        return y = 0, e = e || "j", i(t) ? l("c" == e ? x : k, t, e, this.i++, n, r, o) : (v.splice(this.i++, 0, t), 1 == v.length && a()), this
    }

    function c() {
        var t = h;
        return t.loader = {
            load: u,
            i: 0
        }, t
    }
    var p, h, d = e.documentElement,
        f = t.setTimeout,
        m = e.getElementsByTagName("script")[0],
        g = {}.toString,
        v = [],
        y = 0,
        b = "MozAppearance" in d.style,
        w = b && !! e.createRange().compareNode,
        _ = w ? d : m.parentNode,
        d = t.opera && "[object Opera]" == g.call(t.opera),
        d = !! e.attachEvent && !d,
        k = b ? "object" : d ? "script" : "img",
        x = d ? "script" : k,
        C = Array.isArray || function (t) {
            return "[object Array]" == g.call(t)
        }, S = [],
        T = {}, E = {
            timeout: function (t, e) {
                return e.length && (t.timeout = e[0]), t
            }
        };
    h = function (t) {
        function e(t) {
            var e, n, r, t = t.split("!"),
                i = S.length,
                o = t.pop(),
                s = t.length,
                o = {
                    url: o,
                    origUrl: o,
                    prefixes: t
                };
            for (n = 0; s > n; n++) r = t[n].split("="), (e = E[r.shift()]) && (o = e(o, r));
            for (n = 0; i > n; n++) o = S[n](o);
            return o
        }

        function s(t, i, o, s, a) {
            var l = e(t),
                u = l.autoCallback;
            l.url.split(".").pop().split("?").shift(), l.bypass || (i && (i = r(i) ? i : i[t] || i[s] || i[t.split("/").pop().split("?")[0]]), l.instead ? l.instead(t, i, o, s, a) : (T[l.url] ? l.noexec = !0 : T[l.url] = 1, o.load(l.url, l.forceCSS || !l.forceJS && "css" == l.url.split(".").pop().split("?").shift() ? "c" : n, l.noexec, l.attrs, l.timeout), (r(i) || r(u)) && o.load(function () {
                c(), i && i(l.origUrl, a, s), u && u(l.origUrl, a, s), T[l.url] = 2
            })))
        }

        function a(t, e) {
            function n(t, n) {
                if (t) {
                    if (i(t)) n || (p = function () {
                        var t = [].slice.call(arguments);
                        h.apply(this, t), d()
                    }), s(t, p, e, 0, u);
                    else if (Object(t) === t)
                        for (l in a = function () {
                            var e, n = 0;
                            for (e in t) t.hasOwnProperty(e) && n++;
                            return n
                        }(), t) t.hasOwnProperty(l) && (!n && !--a && (r(p) ? p = function () {
                            var t = [].slice.call(arguments);
                            h.apply(this, t), d()
                        } : p[l] = function (t) {
                            return function () {
                                var e = [].slice.call(arguments);
                                t && t.apply(this, e), d()
                            }
                        }(h[l])), s(t[l], p, e, l, u))
                } else !n && d()
            }
            var a, l, u = !! t.test,
                c = t.load || t.both,
                p = t.callback || o,
                h = p,
                d = t.complete || o;
            n(u ? t.yep : t.nope, !! c), c && n(c)
        }
        var l, u, p = this.yepnope.loader;
        if (i(t)) s(t, 0, p, 0);
        else if (C(t))
            for (l = 0; t.length > l; l++) u = t[l], i(u) ? s(u, 0, p, 0) : C(u) ? h(u) : Object(u) === u && a(u, p);
        else Object(t) === t && a(t, p)
    }, h.addPrefix = function (t, e) {
        E[t] = e
    }, h.addFilter = function (t) {
        S.push(t)
    }, h.errorTimeout = 1e4, null == e.readyState && e.addEventListener && (e.readyState = "loading", e.addEventListener("DOMContentLoaded", p = function () {
        e.removeEventListener("DOMContentLoaded", p, 0), e.readyState = "complete"
    }, 0)), t.yepnope = c(), t.yepnope.executeStack = a, t.yepnope.injectJs = function (t, n, r, i, l, u) {
        var c, p, d = e.createElement("script"),
            i = i || h.errorTimeout;
        d.src = t;
        for (p in r) d.setAttribute(p, r[p]);
        n = u ? a : n || o, d.onreadystatechange = d.onload = function () {
            !c && s(d.readyState) && (c = 1, n(), d.onload = d.onreadystatechange = null)
        }, f(function () {
            c || (c = 1, n(1))
        }, i), l ? d.onload() : m.parentNode.insertBefore(d, m)
    }, t.yepnope.injectCss = function (t, n, r, i, s, l) {
        var u, i = e.createElement("link"),
            n = l ? a : n || o;
        i.href = t, i.rel = "stylesheet", i.type = "text/css";
        for (u in r) i.setAttribute(u, r[u]);
        s || (m.parentNode.insertBefore(i, m), f(n, 0))
    }
}(this, document), Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0))
}, Modernizr.addTest("mediaqueries", Modernizr.mq("only all"));