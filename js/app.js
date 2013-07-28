(function () {
    "use strict";
    var t = "undefined" != typeof window ? window : global;
    if ("function" != typeof t.require) {
        var e = {}, n = {}, r = function (t, e) {
                return {}.hasOwnProperty.call(t, e)
            }, i = function (t, e) {
                var n, r, i = [];
                n = /^\.\.?(\/|$)/.test(e) ? [t, e].join("/").split("/") : e.split("/");
                for (var o = 0, s = n.length; s > o; o++) r = n[o], ".." === r ? i.pop() : "." !== r && "" !== r && i.push(r);
                return i.join("/")
            }, o = function (t) {
                return t.split("/").slice(0, -1).join("/")
            }, s = function (e) {
                return function (n) {
                    var r = o(e),
                        s = i(r, n);
                    return t.require(s)
                }
            }, a = function (t, e) {
                var r = {
                    id: t,
                    exports: {}
                };
                e(r.exports, s(t), r);
                var i = n[t] = r.exports;
                return i
            }, l = function (t) {
                var o = i(t, ".");
                if (r(n, o)) return n[o];
                if (r(e, o)) return a(o, e[o]);
                var s = i(o, "./index");
                if (r(n, s)) return n[s];
                if (r(e, s)) return a(s, e[s]);
                throw Error('Cannot find module "' + t + '"')
            }, u = function (t) {
                for (var n in t) r(t, n) && (e[n] = t[n])
            };
        t.require = l, t.require.define = u
    }
})(),
function () {
    var t = this,
        e = t._,
        n = {}, r = Array.prototype,
        i = Object.prototype,
        o = Function.prototype,
        s = r.push,
        a = r.slice,
        l = r.concat,
        u = (r.unshift, i.toString),
        c = i.hasOwnProperty,
        p = r.forEach,
        h = r.map,
        d = r.reduce,
        f = r.reduceRight,
        m = r.filter,
        g = r.every,
        v = r.some,
        y = r.indexOf,
        w = r.lastIndexOf,
        b = Array.isArray,
        _ = Object.keys,
        k = o.bind,
        x = function (t) {
            return t instanceof x ? t : this instanceof x ? (this._wrapped = t, void 0) : new x(t)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = x), exports._ = x) : t._ = x, x.VERSION = "1.4.2";
    var S = x.each = x.forEach = function (t, e, r) {
        if (null != t)
            if (p && t.forEach === p) t.forEach(e, r);
            else if (t.length === +t.length) {
            for (var i = 0, o = t.length; o > i; i++)
                if (e.call(r, t[i], i, t) === n) return
        } else
            for (var s in t)
                if (x.has(t, s) && e.call(r, t[s], s, t) === n) return
    };
    x.map = x.collect = function (t, e, n) {
        var r = [];
        return null == t ? r : h && t.map === h ? t.map(e, n) : (S(t, function (t, i, o) {
            r[r.length] = e.call(n, t, i, o)
        }), r)
    }, x.reduce = x.foldl = x.inject = function (t, e, n, r) {
        var i = arguments.length > 2;
        if (null == t && (t = []), d && t.reduce === d) return r && (e = x.bind(e, r)), i ? t.reduce(e, n) : t.reduce(e);
        if (S(t, function (t, o, s) {
            i ? n = e.call(r, n, t, o, s) : (n = t, i = !0)
        }), !i) throw new TypeError("Reduce of empty array with no initial value");
        return n
    }, x.reduceRight = x.foldr = function (t, e, n, r) {
        var i = arguments.length > 2;
        if (null == t && (t = []), f && t.reduceRight === f) return r && (e = x.bind(e, r)), arguments.length > 2 ? t.reduceRight(e, n) : t.reduceRight(e);
        var o = t.length;
        if (o !== +o) {
            var s = x.keys(t);
            o = s.length
        }
        if (S(t, function (a, l, u) {
            l = s ? s[--o] : --o, i ? n = e.call(r, n, t[l], l, u) : (n = t[l], i = !0)
        }), !i) throw new TypeError("Reduce of empty array with no initial value");
        return n
    }, x.find = x.detect = function (t, e, n) {
        var r;
        return C(t, function (t, i, o) {
            return e.call(n, t, i, o) ? (r = t, !0) : void 0
        }), r
    }, x.filter = x.select = function (t, e, n) {
        var r = [];
        return null == t ? r : m && t.filter === m ? t.filter(e, n) : (S(t, function (t, i, o) {
            e.call(n, t, i, o) && (r[r.length] = t)
        }), r)
    }, x.reject = function (t, e, n) {
        var r = [];
        return null == t ? r : (S(t, function (t, i, o) {
            e.call(n, t, i, o) || (r[r.length] = t)
        }), r)
    }, x.every = x.all = function (t, e, r) {
        e || (e = x.identity);
        var i = !0;
        return null == t ? i : g && t.every === g ? t.every(e, r) : (S(t, function (t, o, s) {
            return (i = i && e.call(r, t, o, s)) ? void 0 : n
        }), !! i)
    };
    var C = x.some = x.any = function (t, e, r) {
        e || (e = x.identity);
        var i = !1;
        return null == t ? i : v && t.some === v ? t.some(e, r) : (S(t, function (t, o, s) {
            return i || (i = e.call(r, t, o, s)) ? n : void 0
        }), !! i)
    };
    x.contains = x.include = function (t, e) {
        var n = !1;
        return null == t ? n : y && t.indexOf === y ? -1 != t.indexOf(e) : n = C(t, function (t) {
            return t === e
        })
    }, x.invoke = function (t, e) {
        var n = a.call(arguments, 2);
        return x.map(t, function (t) {
            return (x.isFunction(e) ? e : t[e]).apply(t, n)
        })
    }, x.pluck = function (t, e) {
        return x.map(t, function (t) {
            return t[e]
        })
    }, x.where = function (t, e) {
        return x.isEmpty(e) ? [] : x.filter(t, function (t) {
            for (var n in e)
                if (e[n] !== t[n]) return !1;
            return !0
        })
    }, x.max = function (t, e, n) {
        if (!e && x.isArray(t) && t[0] === +t[0] && 65535 > t.length) return Math.max.apply(Math, t);
        if (!e && x.isEmpty(t)) return -1 / 0;
        var r = {
            computed: -1 / 0
        };
        return S(t, function (t, i, o) {
            var s = e ? e.call(n, t, i, o) : t;
            s >= r.computed && (r = {
                value: t,
                computed: s
            })
        }), r.value
    }, x.min = function (t, e, n) {
        if (!e && x.isArray(t) && t[0] === +t[0] && 65535 > t.length) return Math.min.apply(Math, t);
        if (!e && x.isEmpty(t)) return 1 / 0;
        var r = {
            computed: 1 / 0
        };
        return S(t, function (t, i, o) {
            var s = e ? e.call(n, t, i, o) : t;
            r.computed > s && (r = {
                value: t,
                computed: s
            })
        }), r.value
    }, x.shuffle = function (t) {
        var e, n = 0,
            r = [];
        return S(t, function (t) {
            e = x.random(n++), r[n - 1] = r[e], r[e] = t
        }), r
    };
    var E = function (t) {
        return x.isFunction(t) ? t : function (e) {
            return e[t]
        }
    };
    x.sortBy = function (t, e, n) {
        var r = E(e);
        return x.pluck(x.map(t, function (t, e, i) {
            return {
                value: t,
                index: e,
                criteria: r.call(n, t, e, i)
            }
        }).sort(function (t, e) {
            var n = t.criteria,
                r = e.criteria;
            if (n !== r) {
                if (n > r || void 0 === n) return 1;
                if (r > n || void 0 === r) return -1
            }
            return t.index < e.index ? -1 : 1
        }), "value")
    };
    var T = function (t, e, n, r) {
        var i = {}, o = E(e);
        return S(t, function (e, s) {
            var a = o.call(n, e, s, t);
            r(i, a, e)
        }), i
    };
    x.groupBy = function (t, e, n) {
        return T(t, e, n, function (t, e, n) {
            (x.has(t, e) ? t[e] : t[e] = []).push(n)
        })
    }, x.countBy = function (t, e, n) {
        return T(t, e, n, function (t, e) {
            x.has(t, e) || (t[e] = 0), t[e]++
        })
    }, x.sortedIndex = function (t, e, n, r) {
        n = null == n ? x.identity : E(n);
        for (var i = n.call(r, e), o = 0, s = t.length; s > o;) {
            var a = o + s >>> 1;
            i > n.call(r, t[a]) ? o = a + 1 : s = a
        }
        return o
    }, x.toArray = function (t) {
        return t ? t.length === +t.length ? a.call(t) : x.values(t) : []
    }, x.size = function (t) {
        return t.length === +t.length ? t.length : x.keys(t).length
    }, x.first = x.head = x.take = function (t, e, n) {
        return null == e || n ? t[0] : a.call(t, 0, e)
    }, x.initial = function (t, e, n) {
        return a.call(t, 0, t.length - (null == e || n ? 1 : e))
    }, x.last = function (t, e, n) {
        return null == e || n ? t[t.length - 1] : a.call(t, Math.max(t.length - e, 0))
    }, x.rest = x.tail = x.drop = function (t, e, n) {
        return a.call(t, null == e || n ? 1 : e)
    }, x.compact = function (t) {
        return x.filter(t, function (t) {
            return !!t
        })
    };
    var $ = function (t, e, n) {
        return S(t, function (t) {
            x.isArray(t) ? e ? s.apply(n, t) : $(t, e, n) : n.push(t)
        }), n
    };
    x.flatten = function (t, e) {
        return $(t, e, [])
    }, x.without = function (t) {
        return x.difference(t, a.call(arguments, 1))
    }, x.uniq = x.unique = function (t, e, n, r) {
        var i = n ? x.map(t, n, r) : t,
            o = [],
            s = [];
        return S(i, function (n, r) {
            (e ? r && s[s.length - 1] === n : x.contains(s, n)) || (s.push(n), o.push(t[r]))
        }), o
    }, x.union = function () {
        return x.uniq(l.apply(r, arguments))
    }, x.intersection = function (t) {
        var e = a.call(arguments, 1);
        return x.filter(x.uniq(t), function (t) {
            return x.every(e, function (e) {
                return x.indexOf(e, t) >= 0
            })
        })
    }, x.difference = function (t) {
        var e = l.apply(r, a.call(arguments, 1));
        return x.filter(t, function (t) {
            return !x.contains(e, t)
        })
    }, x.zip = function () {
        for (var t = a.call(arguments), e = x.max(x.pluck(t, "length")), n = Array(e), r = 0; e > r; r++) n[r] = x.pluck(t, "" + r);
        return n
    }, x.object = function (t, e) {
        for (var n = {}, r = 0, i = t.length; i > r; r++) e ? n[t[r]] = e[r] : n[t[r][0]] = t[r][1];
        return n
    }, x.indexOf = function (t, e, n) {
        if (null == t) return -1;
        var r = 0,
            i = t.length;
        if (n) {
            if ("number" != typeof n) return r = x.sortedIndex(t, e), t[r] === e ? r : -1;
            r = 0 > n ? Math.max(0, i + n) : n
        }
        if (y && t.indexOf === y) return t.indexOf(e, n);
        for (; i > r; r++)
            if (t[r] === e) return r;
        return -1
    }, x.lastIndexOf = function (t, e, n) {
        if (null == t) return -1;
        var r = null != n;
        if (w && t.lastIndexOf === w) return r ? t.lastIndexOf(e, n) : t.lastIndexOf(e);
        for (var i = r ? n : t.length; i--;)
            if (t[i] === e) return i;
        return -1
    }, x.range = function (t, e, n) {
        1 >= arguments.length && (e = t || 0, t = 0), n = arguments[2] || 1;
        for (var r = Math.max(Math.ceil((e - t) / n), 0), i = 0, o = Array(r); r > i;) o[i++] = t, t += n;
        return o
    };
    var P = function () {};
    x.bind = function (t, e) {
        var n, r;
        if (t.bind === k && k) return k.apply(t, a.call(arguments, 1));
        if (!x.isFunction(t)) throw new TypeError;
        return r = a.call(arguments, 2), n = function () {
            if (!(this instanceof n)) return t.apply(e, r.concat(a.call(arguments)));
            P.prototype = t.prototype;
            var i = new P,
                o = t.apply(i, r.concat(a.call(arguments)));
            return Object(o) === o ? o : i
        }
    }, x.bindAll = function (t) {
        var e = a.call(arguments, 1);
        return 0 == e.length && (e = x.functions(t)), S(e, function (e) {
            t[e] = x.bind(t[e], t)
        }), t
    }, x.memoize = function (t, e) {
        var n = {};
        return e || (e = x.identity),
        function () {
            var r = e.apply(this, arguments);
            return x.has(n, r) ? n[r] : n[r] = t.apply(this, arguments)
        }
    }, x.delay = function (t, e) {
        var n = a.call(arguments, 2);
        return setTimeout(function () {
            return t.apply(null, n)
        }, e)
    }, x.defer = function (t) {
        return x.delay.apply(x, [t, 1].concat(a.call(arguments, 1)))
    }, x.throttle = function (t, e) {
        var n, r, i, o, s, a, l = x.debounce(function () {
                s = o = !1
            }, e);
        return function () {
            n = this, r = arguments;
            var u = function () {
                i = null, s && (a = t.apply(n, r)), l()
            };
            return i || (i = setTimeout(u, e)), o ? s = !0 : (o = !0, a = t.apply(n, r)), l(), a
        }
    }, x.debounce = function (t, e, n) {
        var r, i;
        return function () {
            var o = this,
                s = arguments,
                a = function () {
                    r = null, n || (i = t.apply(o, s))
                }, l = n && !r;
            return clearTimeout(r), r = setTimeout(a, e), l && (i = t.apply(o, s)), i
        }
    }, x.once = function (t) {
        var e, n = !1;
        return function () {
            return n ? e : (n = !0, e = t.apply(this, arguments), t = null, e)
        }
    }, x.wrap = function (t, e) {
        return function () {
            var n = [t];
            return s.apply(n, arguments), e.apply(this, n)
        }
    }, x.compose = function () {
        var t = arguments;
        return function () {
            for (var e = arguments, n = t.length - 1; n >= 0; n--) e = [t[n].apply(this, e)];
            return e[0]
        }
    }, x.after = function (t, e) {
        return 0 >= t ? e() : function () {
            return 1 > --t ? e.apply(this, arguments) : void 0
        }
    }, x.keys = _ || function (t) {
        if (t !== Object(t)) throw new TypeError("Invalid object");
        var e = [];
        for (var n in t) x.has(t, n) && (e[e.length] = n);
        return e
    }, x.values = function (t) {
        var e = [];
        for (var n in t) x.has(t, n) && e.push(t[n]);
        return e
    }, x.pairs = function (t) {
        var e = [];
        for (var n in t) x.has(t, n) && e.push([n, t[n]]);
        return e
    }, x.invert = function (t) {
        var e = {};
        for (var n in t) x.has(t, n) && (e[t[n]] = n);
        return e
    }, x.functions = x.methods = function (t) {
        var e = [];
        for (var n in t) x.isFunction(t[n]) && e.push(n);
        return e.sort()
    }, x.extend = function (t) {
        return S(a.call(arguments, 1), function (e) {
            for (var n in e) t[n] = e[n]
        }), t
    }, x.pick = function (t) {
        var e = {}, n = l.apply(r, a.call(arguments, 1));
        return S(n, function (n) {
            n in t && (e[n] = t[n])
        }), e
    }, x.omit = function (t) {
        var e = {}, n = l.apply(r, a.call(arguments, 1));
        for (var i in t) x.contains(n, i) || (e[i] = t[i]);
        return e
    }, x.defaults = function (t) {
        return S(a.call(arguments, 1), function (e) {
            for (var n in e) null == t[n] && (t[n] = e[n])
        }), t
    }, x.clone = function (t) {
        return x.isObject(t) ? x.isArray(t) ? t.slice() : x.extend({}, t) : t
    }, x.tap = function (t, e) {
        return e(t), t
    };
    var A = function (t, e, n, r) {
        if (t === e) return 0 !== t || 1 / t == 1 / e;
        if (null == t || null == e) return t === e;
        t instanceof x && (t = t._wrapped), e instanceof x && (e = e._wrapped);
        var i = u.call(t);
        if (i != u.call(e)) return !1;
        switch (i) {
        case "[object String]":
            return t == e + "";
        case "[object Number]":
            return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;
        case "[object Date]":
        case "[object Boolean]":
            return +t == +e;
        case "[object RegExp]":
            return t.source == e.source && t.global == e.global && t.multiline == e.multiline && t.ignoreCase == e.ignoreCase
        }
        if ("object" != typeof t || "object" != typeof e) return !1;
        for (var o = n.length; o--;)
            if (n[o] == t) return r[o] == e;
        n.push(t), r.push(e);
        var s = 0,
            a = !0;
        if ("[object Array]" == i) {
            if (s = t.length, a = s == e.length)
                for (; s-- && (a = A(t[s], e[s], n, r)););
        } else {
            var l = t.constructor,
                c = e.constructor;
            if (l !== c && !(x.isFunction(l) && l instanceof l && x.isFunction(c) && c instanceof c)) return !1;
            for (var p in t)
                if (x.has(t, p) && (s++, !(a = x.has(e, p) && A(t[p], e[p], n, r)))) break;
            if (a) {
                for (p in e)
                    if (x.has(e, p) && !s--) break;
                a = !s
            }
        }
        return n.pop(), r.pop(), a
    };
    x.isEqual = function (t, e) {
        return A(t, e, [], [])
    }, x.isEmpty = function (t) {
        if (null == t) return !0;
        if (x.isArray(t) || x.isString(t)) return 0 === t.length;
        for (var e in t)
            if (x.has(t, e)) return !1;
        return !0
    }, x.isElement = function (t) {
        return !(!t || 1 !== t.nodeType)
    }, x.isArray = b || function (t) {
        return "[object Array]" == u.call(t)
    }, x.isObject = function (t) {
        return t === Object(t)
    }, S(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (t) {
        x["is" + t] = function (e) {
            return u.call(e) == "[object " + t + "]"
        }
    }), x.isArguments(arguments) || (x.isArguments = function (t) {
        return !(!t || !x.has(t, "callee"))
    }), x.isFunction = function (t) {
        return "function" == typeof t
    }, x.isFinite = function (t) {
        return x.isNumber(t) && isFinite(t)
    }, x.isNaN = function (t) {
        return x.isNumber(t) && t != +t
    }, x.isBoolean = function (t) {
        return t === !0 || t === !1 || "[object Boolean]" == u.call(t)
    }, x.isNull = function (t) {
        return null === t
    }, x.isUndefined = function (t) {
        return void 0 === t
    }, x.has = function (t, e) {
        return c.call(t, e)
    }, x.noConflict = function () {
        return t._ = e, this
    }, x.identity = function (t) {
        return t
    }, x.times = function (t, e, n) {
        for (var r = 0; t > r; r++) e.call(n, r)
    }, x.random = function (t, e) {
        return null == e && (e = t, t = 0), t + (0 | Math.random() * (e - t + 1))
    };
    var L = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    L.unescape = x.invert(L.escape);
    var D = {
        escape: RegExp("[" + x.keys(L.escape).join("") + "]", "g"),
        unescape: RegExp("(" + x.keys(L.unescape).join("|") + ")", "g")
    };
    x.each(["escape", "unescape"], function (t) {
        x[t] = function (e) {
            return null == e ? "" : ("" + e).replace(D[t], function (e) {
                return L[t][e]
            })
        }
    }), x.result = function (t, e) {
        if (null == t) return null;
        var n = t[e];
        return x.isFunction(n) ? n.call(t) : n
    }, x.mixin = function (t) {
        S(x.functions(t), function (e) {
            var n = x[e] = t[e];
            x.prototype[e] = function () {
                var t = [this._wrapped];
                return s.apply(t, arguments), M.call(this, n.apply(x, t))
            }
        })
    };
    var O = 0;
    x.uniqueId = function (t) {
        var e = O++;
        return t ? t + e : e
    }, x.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var I = /(.)^/,
        R = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "	": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }, F = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    x.template = function (t, e, n) {
        n = x.defaults({}, n, x.templateSettings);
        var r = RegExp([(n.escape || I).source, (n.interpolate || I).source, (n.evaluate || I).source].join("|") + "|$", "g"),
            i = 0,
            o = "__p+='";
        t.replace(r, function (e, n, r, s, a) {
            o += t.slice(i, a).replace(F, function (t) {
                return "\\" + R[t]
            }), o += n ? "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : s ? "';\n" + s + "\n__p+='" : "", i = a + e.length
        }), o += "';\n", n.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
        try {
            var s = Function(n.variable || "obj", "_", o)
        } catch (a) {
            throw a.source = o, a
        }
        if (e) return s(e, x);
        var l = function (t) {
            return s.call(this, t, x)
        };
        return l.source = "function(" + (n.variable || "obj") + "){\n" + o + "}", l
    }, x.chain = function (t) {
        return x(t).chain()
    };
    var M = function (t) {
        return this._chain ? x(t).chain() : t
    };
    x.mixin(x), S(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (t) {
        var e = r[t];
        x.prototype[t] = function () {
            var n = this._wrapped;
            return e.apply(n, arguments), "shift" != t && "splice" != t || 0 !== n.length || delete n[0], M.call(this, n)
        }
    }), S(["concat", "join", "slice"], function (t) {
        var e = r[t];
        x.prototype[t] = function () {
            return M.call(this, e.apply(this._wrapped, arguments))
        }
    }), x.extend(x.prototype, {
        chain: function () {
            return this._chain = !0, this
        },
        value: function () {
            return this._wrapped
        }
    })
}.call(this),
function () {
    var t, e = this,
        n = e.Backbone,
        r = Array.prototype.slice,
        i = Array.prototype.splice;
    t = "undefined" != typeof exports ? exports : e.Backbone = {}, t.VERSION = "0.9.2";
    var o = e._;
    o || "undefined" == typeof require || (o = require("underscore"));
    var s = e.jQuery || e.Zepto || e.ender;
    t.setDomLibrary = function (t) {
        s = t
    }, t.noConflict = function () {
        return e.Backbone = n, this
    }, t.emulateHTTP = !1, t.emulateJSON = !1;
    var a = /\s+/,
        l = t.Events = {
            on: function (t, e, n) {
                var r, i, o, s, l;
                if (!e) return this;
                for (t = t.split(a), r = this._callbacks || (this._callbacks = {}); i = t.shift();) l = r[i], o = l ? l.tail : {}, o.next = s = {}, o.context = n, o.callback = e, r[i] = {
                    tail: s,
                    next: l ? l.next : o
                };
                return this
            },
            off: function (t, e, n) {
                var r, i, s, l, u, c;
                if (i = this._callbacks) {
                    if (!(t || e || n)) return delete this._callbacks, this;
                    for (t = t ? t.split(a) : o.keys(i); r = t.shift();)
                        if (s = i[r], delete i[r], s && (e || n))
                            for (l = s.tail;
                                (s = s.next) !== l;) u = s.callback, c = s.context, (e && u !== e || n && c !== n) && this.on(r, u, c);
                    return this
                }
            },
            trigger: function (t) {
                var e, n, i, o, s, l, u;
                if (!(i = this._callbacks)) return this;
                for (l = i.all, t = t.split(a), u = r.call(arguments, 1); e = t.shift();) {
                    if (n = i[e])
                        for (o = n.tail;
                            (n = n.next) !== o;) n.callback.apply(n.context || this, u);
                    if (n = l)
                        for (o = n.tail, s = [e].concat(u);
                            (n = n.next) !== o;) n.callback.apply(n.context || this, s)
                }
                return this
            }
        };
    l.bind = l.on, l.unbind = l.off;
    var u = t.Model = function (t, e) {
        var n;
        t || (t = {}), e && e.parse && (t = this.parse(t)), (n = E(this, "defaults")) && (t = o.extend({}, n, t)), e && e.collection && (this.collection = e.collection), this.attributes = {}, this._escapedAttributes = {}, this.cid = o.uniqueId("c"), this.changed = {}, this._silent = {}, this._pending = {}, this.set(t, {
            silent: !0
        }), this.changed = {}, this._silent = {}, this._pending = {}, this._previousAttributes = o.clone(this.attributes), this.initialize.apply(this, arguments)
    };
    o.extend(u.prototype, l, {
        changed: null,
        _silent: null,
        _pending: null,
        idAttribute: "id",
        initialize: function () {},
        toJSON: function () {
            return o.clone(this.attributes)
        },
        get: function (t) {
            return this.attributes[t]
        },
        escape: function (t) {
            var e;
            if (e = this._escapedAttributes[t]) return e;
            var n = this.get(t);
            return this._escapedAttributes[t] = o.escape(null == n ? "" : "" + n)
        },
        has: function (t) {
            return null != this.get(t)
        },
        set: function (t, e, n) {
            var r, i, s;
            if (o.isObject(t) || null == t ? (r = t, n = e) : (r = {}, r[t] = e), n || (n = {}), !r) return this;
            if (r instanceof u && (r = r.attributes), n.unset)
                for (i in r) r[i] = void 0;
            if (!this._validate(r, n)) return !1;
            this.idAttribute in r && (this.id = r[this.idAttribute]);
            var a = n.changes = {}, l = this.attributes,
                c = this._escapedAttributes,
                p = this._previousAttributes || {};
            for (i in r) s = r[i], (!o.isEqual(l[i], s) || n.unset && o.has(l, i)) && (delete c[i], (n.silent ? this._silent : a)[i] = !0), n.unset ? delete l[i] : l[i] = s, o.isEqual(p[i], s) && o.has(l, i) == o.has(p, i) ? (delete this.changed[i], delete this._pending[i]) : (this.changed[i] = s, n.silent || (this._pending[i] = !0));
            return n.silent || this.change(n), this
        },
        unset: function (t, e) {
            return (e || (e = {})).unset = !0, this.set(t, null, e)
        },
        clear: function (t) {
            return (t || (t = {})).unset = !0, this.set(o.clone(this.attributes), t)
        },
        fetch: function (e) {
            e = e ? o.clone(e) : {};
            var n = this,
                r = e.success;
            return e.success = function (t, i, o) {
                return n.set(n.parse(t, o), e) ? (r && r(n, t), void 0) : !1
            }, e.error = t.wrapError(e.error, n, e), (this.sync || t.sync).call(this, "read", this, e)
        },
        save: function (e, n, r) {
            var i, s;
            if (o.isObject(e) || null == e ? (i = e, r = n) : (i = {}, i[e] = n), r = r ? o.clone(r) : {}, r.wait) {
                if (!this._validate(i, r)) return !1;
                s = o.clone(this.attributes)
            }
            var a = o.extend({}, r, {
                silent: !0
            });
            if (i && !this.set(i, r.wait ? a : r)) return !1;
            var l = this,
                u = r.success;
            r.success = function (t, e, n) {
                var s = l.parse(t, n);
                return r.wait && (delete r.wait, s = o.extend(i || {}, s)), l.set(s, r) ? (u ? u(l, t) : l.trigger("sync", l, t, r), void 0) : !1
            }, r.error = t.wrapError(r.error, l, r);
            var c = this.isNew() ? "create" : "update",
                p = (this.sync || t.sync).call(this, c, this, r);
            return r.wait && this.set(s, a), p
        },
        destroy: function (e) {
            e = e ? o.clone(e) : {};
            var n = this,
                r = e.success,
                i = function () {
                    n.trigger("destroy", n, n.collection, e)
                };
            if (this.isNew()) return i(), !1;
            e.success = function (t) {
                e.wait && i(), r ? r(n, t) : n.trigger("sync", n, t, e)
            }, e.error = t.wrapError(e.error, n, e);
            var s = (this.sync || t.sync).call(this, "delete", this, e);
            return e.wait || i(), s
        },
        url: function () {
            var t = E(this, "urlRoot") || E(this.collection, "url") || T();
            return this.isNew() ? t : t + ("/" == t.charAt(t.length - 1) ? "" : "/") + encodeURIComponent(this.id)
        },
        parse: function (t) {
            return t
        },
        clone: function () {
            return new this.constructor(this.attributes)
        },
        isNew: function () {
            return null == this.id
        },
        change: function (t) {
            t || (t = {});
            var e = this._changing;
            this._changing = !0;
            for (var n in this._silent) this._pending[n] = !0;
            var r = o.extend({}, t.changes, this._silent);
            this._silent = {};
            for (var n in r) this.trigger("change:" + n, this, this.get(n), t);
            if (e) return this;
            for (; !o.isEmpty(this._pending);) {
                this._pending = {}, this.trigger("change", this, t);
                for (var n in this.changed) this._pending[n] || this._silent[n] || delete this.changed[n];
                this._previousAttributes = o.clone(this.attributes)
            }
            return this._changing = !1, this
        },
        hasChanged: function (t) {
            return arguments.length ? o.has(this.changed, t) : !o.isEmpty(this.changed)
        },
        changedAttributes: function (t) {
            if (!t) return this.hasChanged() ? o.clone(this.changed) : !1;
            var e, n = !1,
                r = this._previousAttributes;
            for (var i in t) o.isEqual(r[i], e = t[i]) || ((n || (n = {}))[i] = e);
            return n
        },
        previous: function (t) {
            return arguments.length && this._previousAttributes ? this._previousAttributes[t] : null
        },
        previousAttributes: function () {
            return o.clone(this._previousAttributes)
        },
        isValid: function () {
            return !this.validate(this.attributes)
        },
        _validate: function (t, e) {
            if (e.silent || !this.validate) return !0;
            t = o.extend({}, this.attributes, t);
            var n = this.validate(t, e);
            return n ? (e && e.error ? e.error(this, n, e) : this.trigger("error", this, n, e), !1) : !0
        }
    });
    var c = t.Collection = function (t, e) {
        e || (e = {}), e.model && (this.model = e.model), e.comparator && (this.comparator = e.comparator), this._reset(), this.initialize.apply(this, arguments), t && this.reset(t, {
            silent: !0,
            parse: e.parse
        })
    };
    o.extend(c.prototype, l, {
        model: u,
        initialize: function () {},
        toJSON: function (t) {
            return this.map(function (e) {
                return e.toJSON(t)
            })
        },
        add: function (t, e) {
            var n, r, s, a, l, u, c = {}, p = {}, h = [];
            for (e || (e = {}), t = o.isArray(t) ? t.slice() : [t], n = 0, s = t.length; s > n; n++) {
                if (!(a = t[n] = this._prepareModel(t[n], e))) throw Error("Can't add an invalid model to a collection");
                l = a.cid, u = a.id, c[l] || this._byCid[l] || null != u && (p[u] || this._byId[u]) ? h.push(n) : c[l] = p[u] = a
            }
            for (n = h.length; n--;) t.splice(h[n], 1);
            for (n = 0, s = t.length; s > n; n++)(a = t[n]).on("all", this._onModelEvent, this), this._byCid[a.cid] = a, null != a.id && (this._byId[a.id] = a);
            if (this.length += s, r = null != e.at ? e.at : this.models.length, i.apply(this.models, [r, 0].concat(t)), this.comparator && this.sort({
                silent: !0
            }), e.silent) return this;
            for (n = 0, s = this.models.length; s > n; n++) c[(a = this.models[n]).cid] && (e.index = n, a.trigger("add", a, this, e));
            return this
        },
        remove: function (t, e) {
            var n, r, i, s;
            for (e || (e = {}), t = o.isArray(t) ? t.slice() : [t], n = 0, r = t.length; r > n; n++) s = this.getByCid(t[n]) || this.get(t[n]), s && (delete this._byId[s.id], delete this._byCid[s.cid], i = this.indexOf(s), this.models.splice(i, 1), this.length--, e.silent || (e.index = i, s.trigger("remove", s, this, e)), this._removeReference(s));
            return this
        },
        push: function (t, e) {
            return t = this._prepareModel(t, e), this.add(t, e), t
        },
        pop: function (t) {
            var e = this.at(this.length - 1);
            return this.remove(e, t), e
        },
        unshift: function (t, e) {
            return t = this._prepareModel(t, e), this.add(t, o.extend({
                at: 0
            }, e)), t
        },
        shift: function (t) {
            var e = this.at(0);
            return this.remove(e, t), e
        },
        get: function (t) {
            return null == t ? void 0 : this._byId[null != t.id ? t.id : t]
        },
        getByCid: function (t) {
            return t && this._byCid[t.cid || t]
        },
        at: function (t) {
            return this.models[t]
        },
        where: function (t) {
            return o.isEmpty(t) ? [] : this.filter(function (e) {
                for (var n in t)
                    if (t[n] !== e.get(n)) return !1;
                return !0
            })
        },
        sort: function (t) {
            if (t || (t = {}), !this.comparator) throw Error("Cannot sort a set without a comparator");
            var e = o.bind(this.comparator, this);
            return 1 == this.comparator.length ? this.models = this.sortBy(e) : this.models.sort(e), t.silent || this.trigger("reset", this, t), this
        },
        pluck: function (t) {
            return o.map(this.models, function (e) {
                return e.get(t)
            })
        },
        reset: function (t, e) {
            t || (t = []), e || (e = {});
            for (var n = 0, r = this.models.length; r > n; n++) this._removeReference(this.models[n]);
            return this._reset(), this.add(t, o.extend({
                silent: !0
            }, e)), e.silent || this.trigger("reset", this, e), this
        },
        fetch: function (e) {
            e = e ? o.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
            var n = this,
                r = e.success;
            return e.success = function (t, i, o) {
                n[e.add ? "add" : "reset"](n.parse(t, o), e), r && r(n, t)
            }, e.error = t.wrapError(e.error, n, e), (this.sync || t.sync).call(this, "read", this, e)
        },
        create: function (t, e) {
            var n = this;
            if (e = e ? o.clone(e) : {}, t = this._prepareModel(t, e), !t) return !1;
            e.wait || n.add(t, e);
            var r = e.success;
            return e.success = function (i, o) {
                e.wait && n.add(i, e), r ? r(i, o) : i.trigger("sync", t, o, e)
            }, t.save(null, e), t
        },
        parse: function (t) {
            return t
        },
        chain: function () {
            return o(this.models).chain()
        },
        _reset: function () {
            this.length = 0, this.models = [], this._byId = {}, this._byCid = {}
        },
        _prepareModel: function (t, e) {
            if (e || (e = {}), t instanceof u) t.collection || (t.collection = this);
            else {
                var n = t;
                e.collection = this, t = new this.model(n, e), t._validate(t.attributes, e) || (t = !1)
            }
            return t
        },
        _removeReference: function (t) {
            this == t.collection && delete t.collection, t.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function (t, e, n, r) {
            ("add" != t && "remove" != t || n == this) && ("destroy" == t && this.remove(e, r), e && t === "change:" + e.idAttribute && (delete this._byId[e.previous(e.idAttribute)], this._byId[e.id] = e), this.trigger.apply(this, arguments))
        }
    });
    var p = ["forEach", "each", "map", "reduce", "reduceRight", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "sortBy", "sortedIndex", "toArray", "size", "first", "initial", "rest", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "groupBy"];
    o.each(p, function (t) {
        c.prototype[t] = function () {
            return o[t].apply(o, [this.models].concat(o.toArray(arguments)))
        }
    });
    var h = t.Router = function (t) {
        t || (t = {}), t.routes && (this.routes = t.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
    }, d = /:\w+/g,
        f = /\*\w+/g,
        m = /[-[\]{}()+?.,\\^$|#\s]/g;
    o.extend(h.prototype, l, {
        initialize: function () {},
        route: function (e, n, r) {
            return t.history || (t.history = new g), o.isRegExp(e) || (e = this._routeToRegExp(e)), r || (r = this[n]), t.history.route(e, o.bind(function (i) {
                var o = this._extractParameters(e, i);
                r && r.apply(this, o), this.trigger.apply(this, ["route:" + n].concat(o)), t.history.trigger("route", this, n, o)
            }, this)), this
        },
        navigate: function (e, n) {
            t.history.navigate(e, n)
        },
        _bindRoutes: function () {
            if (this.routes) {
                var t = [];
                for (var e in this.routes) t.unshift([e, this.routes[e]]);
                for (var n = 0, r = t.length; r > n; n++) this.route(t[n][0], t[n][1], this[t[n][1]])
            }
        },
        _routeToRegExp: function (t) {
            return t = t.replace(m, "\\$&").replace(d, "([^/]+)").replace(f, "(.*?)"), RegExp("^" + t + "$")
        },
        _extractParameters: function (t, e) {
            return t.exec(e).slice(1)
        }
    });
    var g = t.History = function () {
        this.handlers = [], o.bindAll(this, "checkUrl")
    }, v = /^[#\/]/,
        y = /msie [\w.]+/;
    g.started = !1, o.extend(g.prototype, l, {
        interval: 50,
        getHash: function (t) {
            var e = t ? t.location : window.location,
                n = e.href.match(/#(.*)$/);
            return n ? n[1] : ""
        },
        getFragment: function (t, e) {
            if (null == t)
                if (this._hasPushState || e) {
                    t = window.location.pathname;
                    var n = window.location.search;
                    n && (t += n)
                } else t = this.getHash();
            return t.indexOf(this.options.root) || (t = t.substr(this.options.root.length)), t.replace(v, "")
        },
        start: function (t) {
            if (g.started) throw Error("Backbone.history has already been started");
            g.started = !0, this.options = o.extend({}, {
                root: "/"
            }, this.options, t), this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !! this.options.pushState, this._hasPushState = !! (this.options.pushState && window.history && window.history.pushState);
            var e = this.getFragment(),
                n = document.documentMode,
                r = y.exec(navigator.userAgent.toLowerCase()) && (!n || 7 >= n);
            r && (this.iframe = s('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(e)), this._hasPushState ? s(window).bind("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !r ? s(window).bind("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = e;
            var i = window.location,
                a = i.pathname == this.options.root;
            return this._wantsHashChange && this._wantsPushState && !this._hasPushState && !a ? (this.fragment = this.getFragment(null, !0), window.location.replace(this.options.root + "#" + this.fragment), !0) : (this._wantsPushState && this._hasPushState && a && i.hash && (this.fragment = this.getHash().replace(v, ""), window.history.replaceState({}, document.title, i.protocol + "//" + i.host + this.options.root + this.fragment)), this.options.silent ? void 0 : this.loadUrl())
        },
        stop: function () {
            s(window).unbind("popstate", this.checkUrl).unbind("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), g.started = !1
        },
        route: function (t, e) {
            this.handlers.unshift({
                route: t,
                callback: e
            })
        },
        checkUrl: function () {
            var t = this.getFragment();
            return t == this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe))), t == this.fragment ? !1 : (this.iframe && this.navigate(t), this.loadUrl() || this.loadUrl(this.getHash()), void 0)
        },
        loadUrl: function (t) {
            var e = this.fragment = this.getFragment(t),
                n = o.any(this.handlers, function (t) {
                    return t.route.test(e) ? (t.callback(e), !0) : void 0
                });
            return n
        },
        navigate: function (t, e) {
            if (!g.started) return !1;
            e && e !== !0 || (e = {
                trigger: e
            });
            var n = (t || "").replace(v, "");
            this.fragment != n && (this._hasPushState ? (0 != n.indexOf(this.options.root) && (n = this.options.root + n), this.fragment = n, window.history[e.replace ? "replaceState" : "pushState"]({}, document.title, n)) : this._wantsHashChange ? (this.fragment = n, this._updateHash(window.location, n, e.replace), this.iframe && n != this.getFragment(this.getHash(this.iframe)) && (e.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, n, e.replace))) : window.location.assign(this.options.root + t), e.trigger && this.loadUrl(t))
        },
        _updateHash: function (t, e, n) {
            n ? t.replace(("" + t).replace(/(javascript:|#).*$/, "") + "#" + e) : t.hash = e
        }
    });
    var w = t.View = function (t) {
        this.cid = o.uniqueId("view"), this._configure(t || {}), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
    }, b = /^(\S+)\s*(.*)$/,
        _ = ["model", "collection", "el", "id", "attributes", "className", "tagName"];
    o.extend(w.prototype, l, {
        tagName: "div",
        $: function (t) {
            return this.$el.find(t)
        },
        initialize: function () {},
        render: function () {
            return this
        },
        remove: function () {
            return this.$el.remove(), this
        },
        make: function (t, e, n) {
            var r = document.createElement(t);
            return e && s(r).attr(e), n && s(r).html(n), r
        },
        setElement: function (t, e) {
            return this.$el && this.undelegateEvents(), this.$el = t instanceof s ? t : s(t), this.el = this.$el[0], e !== !1 && this.delegateEvents(), this
        },
        delegateEvents: function (t) {
            if (t || (t = E(this, "events"))) {
                this.undelegateEvents();
                for (var e in t) {
                    var n = t[e];
                    if (o.isFunction(n) || (n = this[t[e]]), !n) throw Error('Method "' + t[e] + '" does not exist');
                    var r = e.match(b),
                        i = r[1],
                        s = r[2];
                    n = o.bind(n, this), i += ".delegateEvents" + this.cid, "" === s ? this.$el.bind(i, n) : this.$el.delegate(s, i, n)
                }
            }
        },
        undelegateEvents: function () {
            this.$el.unbind(".delegateEvents" + this.cid)
        },
        _configure: function (t) {
            this.options && (t = o.extend({}, this.options, t));
            for (var e = 0, n = _.length; n > e; e++) {
                var r = _[e];
                t[r] && (this[r] = t[r])
            }
            this.options = t
        },
        _ensureElement: function () {
            if (this.el) this.setElement(this.el, !1);
            else {
                var t = E(this, "attributes") || {};
                this.id && (t.id = this.id), this.className && (t["class"] = this.className), this.setElement(this.make(this.tagName, t), !1)
            }
        }
    });
    var k = function (t, e) {
        var n = C(this, t, e);
        return n.extend = this.extend, n
    };
    u.extend = c.extend = h.extend = w.extend = k;
    var x = {
        create: "POST",
        update: "PUT",
        "delete": "DELETE",
        read: "GET"
    };
    t.sync = function (e, n, r) {
        var i = x[e];
        r || (r = {});
        var a = {
            type: i,
            dataType: "json"
        };
        return r.url || (a.url = E(n, "url") || T()), r.data || !n || "create" != e && "update" != e || (a.contentType = "application/json", a.data = JSON.stringify(n.toJSON())), t.emulateJSON && (a.contentType = "application/x-www-form-urlencoded", a.data = a.data ? {
            model: a.data
        } : {}), t.emulateHTTP && ("PUT" === i || "DELETE" === i) && (t.emulateJSON && (a.data._method = i), a.type = "POST", a.beforeSend = function (t) {
            t.setRequestHeader("X-HTTP-Method-Override", i)
        }), "GET" === a.type || t.emulateJSON || (a.processData = !1), s.ajax(o.extend(a, r))
    }, t.wrapError = function (t, e, n) {
        return function (r, i) {
            i = r === e ? i : r, t ? t(e, i, n) : e.trigger("error", e, i, n)
        }
    };
    var S = function () {}, C = function (t, e, n) {
            var r;
            return r = e && e.hasOwnProperty("constructor") ? e.constructor : function () {
                t.apply(this, arguments)
            }, o.extend(r, t), S.prototype = t.prototype, r.prototype = new S, e && o.extend(r.prototype, e), n && o.extend(r, n), r.prototype.constructor = r, r.__super__ = t.prototype, r
        }, E = function (t, e) {
            return t && t[e] ? o.isFunction(t[e]) ? t[e]() : t[e] : null
        }, T = function () {
            throw Error('A "url" property or function must be specified')
        }
}.call(this),
function () {
    "use strict";
    var t = {}.hasOwnProperty,
        e = function (e, n) {
            function r() {
                this.constructor = e
            }
            for (var i in n) t.call(n, i) && (e[i] = n[i]);
            return r.prototype = n.prototype, e.prototype = new r, e.__super__ = n.prototype, e
        }, n = [].indexOf || function (t) {
            for (var e = 0, n = this.length; n > e; e++)
                if (e in this && this[e] === t) return e;
            return -1
        }, r = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, i = [].slice;
    require.define({
        jquery: function (t, e, n) {
            return n.exports = $
        },
        underscore: function (t, e, n) {
            return n.exports = _
        },
        backbone: function (t, e, n) {
            return n.exports = Backbone
        }
    }), require.define({
        "chaplin/application": function (t, e, n) {
            var r, i, o, s, a, l, u;
            return i = e("backbone"), u = e("chaplin/mediator"), o = e("chaplin/dispatcher"), a = e("chaplin/views/layout"), l = e("chaplin/lib/router"), s = e("chaplin/lib/event_broker"), n.exports = r = function () {
                function t() {}
                return t.extend = i.Model.extend, _(t.prototype).extend(s), t.prototype.title = "", t.prototype.dispatcher = null, t.prototype.layout = null, t.prototype.router = null, t.prototype.initialize = function () {}, t.prototype.initDispatcher = function (t) {
                    return this.dispatcher = new o(t)
                }, t.prototype.initLayout = function (t) {
                    var e;
                    return null == t && (t = {}), null == (e = t.title) && (t.title = this.title), this.layout = new a(t)
                }, t.prototype.initRouter = function (t, e) {
                    return this.router = new l(e), "function" == typeof t && t(this.router.match), this.router.startHistory()
                }, t.prototype.disposed = !1, t.prototype.dispose = function () {
                    var t, e, n, r;
                    if (!this.disposed) {
                        for (e = ["dispatcher", "layout", "router"], n = 0, r = e.length; r > n; n++) t = e[n], null != this[t] && (this[t].dispose(), delete this[t]);
                        return this.disposed = !0, "function" == typeof Object.freeze ? Object.freeze(this) : void 0
                    }
                }, t
            }()
        }
    }), require.define({
        "chaplin/mediator": function (t, e, n) {
            var r, i, o, s, a;
            return a = e("underscore"), r = e("backbone"), o = e("chaplin/lib/support"), s = e("chaplin/lib/utils"), i = {}, i.subscribe = r.Events.on, i.unsubscribe = r.Events.off, i.publish = r.Events.trigger, i.on = i.subscribe, i._callbacks = null, s.readonly(i, "subscribe", "unsubscribe", "publish", "on"), i.seal = function () {
                return o.propertyDescriptors && Object.seal ? Object.seal(i) : void 0
            }, s.readonly(i, "seal"), n.exports = i
        }
    }), require.define({
        "chaplin/dispatcher": function (t, e, n) {
            var r, i, o, s, a;
            return a = e("underscore"), r = e("backbone"), s = e("chaplin/lib/utils"), o = e("chaplin/lib/event_broker"), n.exports = i = function () {
                function t() {
                    this.initialize.apply(this, arguments)
                }
                return t.extend = r.Model.extend, a(t.prototype).extend(o), t.prototype.previousControllerName = null, t.prototype.currentControllerName = null, t.prototype.currentController = null, t.prototype.currentAction = null, t.prototype.currentParams = null, t.prototype.url = null, t.prototype.initialize = function (t) {
                    return null == t && (t = {}), this.settings = a(t).defaults({
                        controllerPath: "controllers/",
                        controllerSuffix: "_controller"
                    }), this.subscribeEvent("matchRoute", this.matchRoute), this.subscribeEvent("!startupController", this.startupController)
                }, t.prototype.matchRoute = function (t, e, n) {
                    return this.startupController(t.controller, t.action, e, n)
                }, t.prototype.startupController = function (t, e, n, r) {
                    var i, o;
                    return null == e && (e = "index"), null == n && (n = {}), null == r && (r = {}), r.changeURL !== !1 && (r.changeURL = !0), r.forceStartup !== !0 && (r.forceStartup = !1), (o = !r.forceStartup && this.currentControllerName === t && this.currentAction === e && (!this.currentParams || a(n).isEqual(this.currentParams))) ? void 0 : (i = a(this.controllerLoaded).bind(this, t, e, n, r), this.loadController(t, i))
                }, t.prototype.loadController = function (t, n) {
                    var r, i;
                    return r = s.underscorize(t) + this.settings.controllerSuffix, i = this.settings.controllerPath + r, ("undefined" != typeof define && null !== define ? define.amd : void 0) ? e([i], n) : n(e(i))
                }, t.prototype.controllerLoaded = function (t, e, n, r, i) {
                    var o, s, a;
                    return a = this.currentControllerName || null, s = this.currentController || null, s && (this.publishEvent("beforeControllerDispose", s), s.dispose(n, t)), o = new i(n, a), o[e](n, a), o.redirected ? void 0 : (this.previousControllerName = a, this.currentControllerName = t, this.currentController = o, this.currentAction = e, this.currentParams = n, this.adjustURL(o, n, r), this.publishEvent("startupController", {
                        previousControllerName: this.previousControllerName,
                        controller: this.currentController,
                        controllerName: this.currentControllerName,
                        params: this.currentParams
                    }))
                }, t.prototype.adjustURL = function (t, e, n) {
                    var r;
                    if ("string" == typeof n.path) r = n.path;
                    else if ("function" == typeof t.historyURL) r = t.historyURL(e);
                    else {
                        if ("string" != typeof t.historyURL) throw Error("Dispatcher#adjustURL: controller for " + ("" + this.currentControllerName + " does not provide a historyURL"));
                        r = t.historyURL
                    }
                    return n.changeURL && this.publishEvent("!router:changeURL", r, n), this.url = r
                }, t.prototype.disposed = !1, t.prototype.dispose = function () {
                    return this.disposed ? void 0 : (this.unsubscribeAllEvents(), this.disposed = !0, "function" == typeof Object.freeze ? Object.freeze(this) : void 0)
                }, t
            }()
        }
    }), require.define({
        "chaplin/controllers/controller": function (e, n, r) {
            var i, o, s, a;
            return a = n("underscore"), i = n("backbone"), s = n("chaplin/lib/event_broker"), r.exports = o = function () {
                function e() {
                    this.initialize.apply(this, arguments)
                }
                return e.extend = i.Model.extend, a(e.prototype).extend(s), e.prototype.view = null, e.prototype.currentId = null, e.prototype.redirected = !1, e.prototype.initialize = function () {}, e.prototype.redirectTo = function (t, e, n, r) {
                    return this.redirected = !0, 1 === arguments.length ? this.publishEvent("!router:route", t, {}, function (t) {
                        if (!t) throw Error("Controller#redirectTo: no route matched")
                    }) : this.publishEvent("!startupController", t, e, n, r)
                }, e.prototype.disposed = !1, e.prototype.dispose = function () {
                    var e, n, r, i, o;
                    if (!this.disposed) {
                        for (n in this) t.call(this, n) && (e = this[n], e && "function" == typeof e.dispose && (e.dispose(), delete this[n]));
                        for (this.unsubscribeAllEvents(), r = ["currentId", "redirected"], i = 0, o = r.length; o > i; i++) n = r[i], delete this[n];
                        return this.disposed = !0, "function" == typeof Object.freeze ? Object.freeze(this) : void 0
                    }
                }, e
            }()
        }
    }), require.define({
        "chaplin/models/collection": function (t, n, r) {
            var i, o, s, a, l;
            return l = n("underscore"), i = n("backbone"), s = n("chaplin/lib/event_broker"), a = n("chaplin/models/model"), r.exports = o = function (t) {
                function n() {
                    return n.__super__.constructor.apply(this, arguments)
                }
                return e(n, t), l(n.prototype).extend(s), n.prototype.model = a, n.prototype.initDeferred = function () {
                    return l(this).extend($.Deferred())
                }, n.prototype.serialize = function () {
                    var t, e, n, r, i;
                    for (r = this.models, i = [], e = 0, n = r.length; n > e; e++) t = r[e], t instanceof a ? i.push(t.serialize()) : i.push(t.toJSON());
                    return i
                }, n.prototype.addAtomic = function (t, e) {
                    var n, r;
                    if (null == e && (e = {}), t.length) {
                        for (e.silent = !0, n = "number" == typeof e.at ? "pop" : "shift"; r = t[n]();) this.add(r, e);
                        return this.trigger("reset")
                    }
                }, n.prototype.update = function (t, e) {
                    var n, r, i, o, s, a, u, c, p;
                    if (null == e && (e = {}), n = this.pluck("id").join(), i = l(t).pluck("id"), s = i.join(), s !== n)
                        for (c = l(i), r = this.models.length; r--;) o = this.models[r], c.include(o.id) || this.remove(o);
                    if (s !== n || e.deep)
                        for (r = u = 0, p = t.length; p > u; r = ++u) o = t[r], a = this.get(o.id), a ? e.deep && a.set(o) : this.add(o, {
                            at: r
                        })
                }, n.prototype.disposed = !1, n.prototype.dispose = function () {
                    var t, e, n, r;
                    if (!this.disposed) {
                        for (this.trigger("dispose", this), this.reset([], {
                            silent: !0
                        }), this.unsubscribeAllEvents(), this.off(), "function" == typeof this.reject && this.reject(), e = ["model", "models", "_byId", "_byCid", "_callbacks"], n = 0, r = e.length; r > n; n++) t = e[n], delete this[t];
                        return this.disposed = !0, "function" == typeof Object.freeze ? Object.freeze(this) : void 0
                    }
                }, n
            }(i.Collection)
        }
    }), require.define({
        "chaplin/models/model": function (t, r, i) {
            var o, s, a, l, u;
            return u = r("underscore"), o = r("backbone"), l = r("chaplin/lib/utils"), s = r("chaplin/lib/event_broker"), i.exports = a = function (t) {
                function r() {
                    return r.__super__.constructor.apply(this, arguments)
                }
                var i, a;
                return e(r, t), u(r.prototype).extend(s), r.prototype.initDeferred = function () {
                    return u(this).extend($.Deferred())
                }, r.prototype.getAttributes = function () {
                    return this.attributes
                }, i = function (t, e, n) {
                    var r, i, s, u, c, p, h, d;
                    r = l.beget(e), n ? n.push(t) : n = [t];
                    for (i in e)
                        if (c = e[i], c instanceof o.Model) r[i] = a(c, t, n);
                        else if (c instanceof o.Collection) {
                        for (u = [], d = c.models, p = 0, h = d.length; h > p; p++) s = d[p], u.push(a(s, t, n));
                        r[i] = u
                    }
                    return n.pop(), r
                }, a = function (t, e, r) {
                    var o;
                    return t === e || n.call(r, t) >= 0 ? null : (o = "function" == typeof t.getAttributes ? t.getAttributes() : t.attributes, i(t, o, r))
                }, r.prototype.serialize = function () {
                    return i(this, this.getAttributes())
                }, r.prototype.disposed = !1, r.prototype.dispose = function () {
                    var t, e, n, r;
                    if (!this.disposed) {
                        for (this.trigger("dispose", this), this.unsubscribeAllEvents(), this.off(), "function" == typeof this.reject && this.reject(), e = ["collection", "attributes", "changed", "_escapedAttributes", "_previousAttributes", "_silent", "_pending", "_callbacks"], n = 0, r = e.length; r > n; n++) t = e[n], delete this[t];
                        return this.disposed = !0, "function" == typeof Object.freeze ? Object.freeze(this) : void 0
                    }
                }, r
            }(o.Model)
        }
    }), require.define({
        "chaplin/views/layout": function (t, e, n) {
            var i, o, s, a, l, u;
            return i = e("jquery"), u = e("underscore"), o = e("backbone"), l = e("chaplin/lib/utils"), s = e("chaplin/lib/event_broker"), n.exports = a = function () {
                function t() {
                    this.openLink = r(this.openLink, this), this.initialize.apply(this, arguments)
                }
                return t.extend = o.Model.extend, u(t.prototype).extend(s), t.prototype.title = "", t.prototype.events = {}, t.prototype.el = document, t.prototype.$el = i(document), t.prototype.cid = "chaplin-layout", t.prototype.initialize = function (t) {
                    return null == t && (t = {}), this.title = t.title, this.settings = u(t).defaults({
                        titleTemplate: u.template("<%= subtitle %> – <%= title %>"),
                        openExternalToBlank: !1,
                        routeLinks: "a, .go-to",
                        skipRouting: ".noscript",
                        scrollTo: [0, 0]
                    }), this.subscribeEvent("beforeControllerDispose", this.hideOldView), this.subscribeEvent("startupController", this.showNewView), this.subscribeEvent("startupController", this.adjustTitle), this.settings.routeLinks && this.startLinkRouting(), this.delegateEvents()
                }, t.prototype.delegateEvents = o.View.prototype.delegateEvents, t.prototype.undelegateEvents = o.View.prototype.undelegateEvents, t.prototype.hideOldView = function (t) {
                    var e, n;
                    return e = this.settings.scrollTo, e && window.scrollTo(e[0], e[1]), n = t.view, n ? n.$el.css("display", "none") : void 0
                }, t.prototype.showNewView = function (t) {
                    var e;
                    return e = t.controller.view, e ? e.$el.css({
                        display: "block",
                        opacity: 1,
                        visibility: "visible"
                    }) : void 0
                }, t.prototype.adjustTitle = function (t) {
                    var e, n;
                    return n = this.title || "", e = t.controller.title || "", n = this.settings.titleTemplate({
                        title: n,
                        subtitle: e
                    }), setTimeout(function () {
                        return document.title = n
                    }, 50)
                }, t.prototype.startLinkRouting = function () {
                    return this.settings.routeLinks ? i(document).on("click", this.settings.routeLinks, this.openLink) : void 0
                }, t.prototype.stopLinkRouting = function () {
                    return this.settings.routeLinks ? i(document).off("click", this.settings.routeLinks) : void 0
                }, t.prototype.openLink = function (t) {
                    var e, n, r, o, s, a, u, c, p, h;
                    if (!(l.modifierKeyPressed(t) || (n = t.currentTarget, e = i(n), s = "A" === n.nodeName, r = e.attr("href") || e.data("href") || null, null === r || void 0 === r || "" === r || "#" === r.charAt(0) || s && ("_blank" === e.attr("target") || "external" === e.attr("rel") || "http:" !== (p = n.protocol) && "https:" !== p && "file:" !== p) || (u = this.settings.skipRouting, c = typeof u, "function" === c && !u(r, n) || "string" === c && e.is(u))))) {
                        if (o = !s || (h = n.hostname) === location.hostname || "" === h, !o) return this.settings.openExternalToBlank && (t.preventDefault(), window.open(n.href)), void 0;
                        s ? (a = n.pathname + n.search, "/" !== a.charAt(0) && (a = "/" + a)) : a = r, this.publishEvent("!router:route", a, {}, function (e) {
                            e ? t.preventDefault() : s || (location.href = a)
                        })
                    }
                }, t.prototype.disposed = !1, t.prototype.dispose = function () {
                    return this.disposed ? void 0 : (this.stopLinkRouting(), this.unsubscribeAllEvents(), this.undelegateEvents(), delete this.title, this.disposed = !0, "function" == typeof Object.freeze ? Object.freeze(this) : void 0)
                }, t
            }()
        }
    }), require.define({
        "chaplin/views/view": function (t, n, r) {
            var i, o, s, a, l, u, c, p;
            return i = n("jquery"), p = n("underscore"), o = n("backbone"), c = n("chaplin/lib/utils"), a = n("chaplin/lib/event_broker"), l = n("chaplin/models/model"), s = n("chaplin/models/collection"), r.exports = u = function (t) {
                function n(t) {
                    this.initialize !== n.prototype.initialize && c.wrapMethod(this, "initialize"), this.render !== n.prototype.render ? c.wrapMethod(this, "render") : this.render = p(this.render).bind(this), t && p(this).extend(p.pick(t, ["autoRender", "container", "containerMethod"])), n.__super__.constructor.apply(this, arguments)
                }
                return e(n, t), p(n.prototype).extend(a), n.prototype.autoRender = !1, n.prototype.container = null, n.prototype.containerMethod = "append", n.prototype.subviews = null, n.prototype.subviewsByName = null, n.prototype.initialize = function () {
                    return this.subviews = [], this.subviewsByName = {}, (this.model || this.collection) && this.modelBind("dispose", this.dispose), this.initializeIsWrapped ? void 0 : this.afterInitialize()
                }, n.prototype.afterInitialize = function () {
                    return this.autoRender ? this.render() : void 0
                }, n.prototype.delegate = function (t, e, n) {
                    var r, i, o, s, a;
                    if ("string" != typeof t) throw new TypeError("View#delegate: first argument must be a string");
                    if (2 === arguments.length) o = e;
                    else {
                        if (3 !== arguments.length) throw new TypeError("View#delegate: only two or three arguments are allowed");
                        if (a = e, "string" != typeof a) throw new TypeError("View#delegate: second argument must be a string");
                        o = n
                    } if ("function" != typeof o) throw new TypeError("View#delegate: handler argument must be function");
                    return s = function () {
                        var e, n, i, o;
                        for (i = t.split(" "), o = [], e = 0, n = i.length; n > e; e++) r = i[e], o.push("" + r + ".delegate" + this.cid);
                        return o
                    }.call(this), i = s.join(" "), o = p(o).bind(this), a ? this.$el.on(i, a, o) : this.$el.on(i, o), o
                }, n.prototype.undelegate = function () {
                    return this.$el.unbind(".delegate" + this.cid)
                }, n.prototype.modelBind = function (t, e) {
                    var n;
                    if ("string" != typeof t) throw new TypeError("View#modelBind: type must be a string");
                    if ("function" != typeof e) throw new TypeError("View#modelBind: handler argument must be function");
                    if (n = this.model || this.collection, !n) throw new TypeError("View#modelBind: no model or collection set");
                    return n.off(t, e, this), n.on(t, e, this)
                }, n.prototype.modelUnbind = function (t, e) {
                    var n;
                    if ("string" != typeof t) throw new TypeError("View#modelUnbind: type argument must be a string");
                    if ("function" != typeof e) throw new TypeError("View#modelUnbind: handler argument must be a function");
                    return (n = this.model || this.collection) ? n.off(t, e) : void 0
                }, n.prototype.modelUnbindAll = function () {
                    var t;
                    return (t = this.model || this.collection) ? t.off(null, null, this) : void 0
                }, n.prototype.pass = function (t, e) {
                    var n = this;
                    return this.modelBind("change:" + t, function (t, r) {
                        var i;
                        return i = n.$(e), i.is("input, textarea, select, button") ? i.val(r) : i.text(r)
                    })
                }, n.prototype.subview = function (t, e) {
                    return t && e ? (this.removeSubview(t), this.subviews.push(e), this.subviewsByName[t] = e, e) : t ? this.subviewsByName[t] : void 0
                }, n.prototype.removeSubview = function (t) {
                    var e, n, r, i, o, s;
                    if (t) {
                        if ("string" == typeof t) n = t, o = this.subviewsByName[n];
                        else {
                            o = t, s = this.subviewsByName;
                            for (r in s)
                                if (i = s[r], o === i) {
                                    n = r;
                                    break
                                }
                        } if (n && o && o.dispose) return o.dispose(), e = p(this.subviews).indexOf(o), e > -1 && this.subviews.splice(e, 1), delete this.subviewsByName[n]
                    }
                }, n.prototype.getTemplateData = function () {
                    var t, e, n, r, i, o, a;
                    if (this.model) r = this.model instanceof l ? this.model.serialize() : c.beget(this.model.attributes);
                    else if (this.collection) {
                        if (this.collection instanceof s) t = this.collection.serialize();
                        else
                            for (t = [], a = this.collection.models, i = 0, o = a.length; o > i; i++) e = a[i], t.push(c.beget(e.attributes));
                        r = {
                            items: t
                        }
                    } else r = {};
                    return n = this.model || this.collection, n && ("function" != typeof n.state || "resolved" in r || (r.resolved = "resolved" === n.state()), "function" != typeof n.isSynced || "synced" in r || (r.synced = n.isSynced())), r
                }, n.prototype.getTemplateFunction = function () {
                    throw Error("View#getTemplateFunction must be overridden")
                }, n.prototype.render = function () {
                    var t, e;
                    return this.disposed ? !1 : (e = this.getTemplateFunction(), "function" == typeof e && (t = e(this.getTemplateData()), this.$el.empty().append(t)), this.renderIsWrapped || this.afterRender(), this)
                }, n.prototype.afterRender = function () {
                    return this.container ? (i(this.container)[this.containerMethod](this.el), this.trigger("addedToDOM")) : void 0
                }, n.prototype.disposed = !1, n.prototype.dispose = function () {
                    var t, e, n, r, i, o, s, a;
                    if (!this.disposed) {
                        if (null == this.subviews) throw Error("Your `initialize` method must include a super call to        Chaplin `initialize`");
                        for (a = this.subviews, r = 0, o = a.length; o > r; r++) n = a[r], n.dispose();
                        for (this.unsubscribeAllEvents(), this.modelUnbindAll(), this.off(), this.$el.remove(), e = ["el", "$el", "options", "model", "collection", "subviews", "subviewsByName", "_callbacks"], i = 0, s = e.length; s > i; i++) t = e[i], delete this[t];
                        return this.disposed = !0, "function" == typeof Object.freeze ? Object.freeze(this) : void 0
                    }
                }, n
            }(o.View)
        }
    }), require.define({
        "chaplin/views/collection_view": function (n, i, o) {
            var s, a, l, u;
            return s = i("jquery"), u = i("underscore"), l = i("chaplin/views/view"), o.exports = a = function (n) {
                function i(t) {
                    this.renderAllItems = r(this.renderAllItems, this), this.showHideFallback = r(this.showHideFallback, this), this.itemsResetted = r(this.itemsResetted, this), this.itemRemoved = r(this.itemRemoved, this), this.itemAdded = r(this.itemAdded, this), t && u(this).extend(u.pick(t, ["renderItems", "itemView"])), i.__super__.constructor.apply(this, arguments)
                }
                return e(i, n), i.prototype.itemView = null, i.prototype.autoRender = !0, i.prototype.renderItems = !0, i.prototype.animationDuration = 500, i.prototype.useCssAnimation = !1, i.prototype.listSelector = null, i.prototype.$list = null, i.prototype.fallbackSelector = null, i.prototype.$fallback = null, i.prototype.loadingSelector = null, i.prototype.$loading = null, i.prototype.itemSelector = null, i.prototype.filterer = null, i.prototype.filterCallback = function (t, e) {
                    var n;
                    return n = e ? "" : "none", t.$el.stop(!0, !0).css("display", n)
                }, i.prototype.visibleItems = null, i.prototype.initialize = function (t) {
                    return null == t && (t = {}), i.__super__.initialize.apply(this, arguments), this.visibleItems = [], this.addCollectionListeners(), null != t.filterer ? this.filter(t.filterer) : void 0
                }, i.prototype.addCollectionListeners = function () {
                    return this.modelBind("add", this.itemAdded), this.modelBind("remove", this.itemRemoved), this.modelBind("reset", this.itemsResetted)
                }, i.prototype.getTemplateFunction = function () {}, i.prototype.render = function () {
                    return i.__super__.render.apply(this, arguments), this.$list = this.listSelector ? this.$(this.listSelector) : this.$el, this.initFallback(), this.initLoadingIndicator(), this.renderItems ? this.renderAllItems() : void 0
                }, i.prototype.itemAdded = function (t, e, n) {
                    return null == n && (n = {}), this.renderAndInsertItem(t, n.index)
                }, i.prototype.itemRemoved = function (t) {
                    return this.removeViewForItem(t)
                }, i.prototype.itemsResetted = function () {
                    return this.renderAllItems()
                }, i.prototype.initFallback = function () {
                    return this.fallbackSelector ? (this.$fallback = this.$(this.fallbackSelector), this.on("visibilityChange", this.showHideFallback), this.modelBind("syncStateChange", this.showHideFallback), this.showHideFallback()) : void 0
                }, i.prototype.showHideFallback = function () {
                    var t;
                    return t = 0 === this.visibleItems.length && ("function" == typeof this.collection.isSynced ? this.collection.isSynced() : !0), this.$fallback.css("display", t ? "block" : "none")
                }, i.prototype.initLoadingIndicator = function () {
                    return this.loadingSelector && "function" == typeof this.collection.isSyncing ? (this.$loading = this.$(this.loadingSelector), this.modelBind("syncStateChange", this.showHideLoadingIndicator), this.showHideLoadingIndicator()) : void 0
                }, i.prototype.showHideLoadingIndicator = function () {
                    var t;
                    return t = 0 === this.collection.length && this.collection.isSyncing(), this.$loading.css("display", t ? "block" : "none")
                }, i.prototype.getItemViews = function () {
                    var t, e, n, r;
                    t = {}, r = this.subviewsByName;
                    for (e in r) n = r[e], "itemView:" === e.slice(0, 9) && (t[e.slice(9)] = n);
                    return t
                }, i.prototype.filter = function (t, e) {
                    var n, r, i, o, s, a, l;
                    if (this.filterer = t, e && (this.filterCallback = e), null == e && (e = this.filterCallback), !u(this.getItemViews()).isEmpty())
                        for (l = this.collection.models, r = s = 0, a = l.length; a > s; r = ++s) {
                            if (i = l[r], n = "function" == typeof t ? t(i, r) : !0, o = this.subview("itemView:" + i.cid), !o) throw Error("CollectionView#filter: " + ("no view found for " + i.cid));
                            this.filterCallback(o, n), this.updateVisibleItems(o.model, n, !1)
                        }
                    return this.trigger("visibilityChange", this.visibleItems)
                }, i.prototype.renderAllItems = function () {
                    var e, n, r, i, o, s, a, l, u, c, p;
                    for (i = this.collection.models, this.visibleItems = [], o = {}, a = 0, u = i.length; u > a; a++) r = i[a], s = this.subview("itemView:" + r.cid), s && (o[r.cid] = s);
                    p = this.getItemViews();
                    for (e in p) t.call(p, e) && (s = p[e], e in o || this.removeSubview("itemView:" + e));
                    for (n = l = 0, c = i.length; c > l; n = ++l) r = i[n], s = this.subview("itemView:" + r.cid), s ? this.insertView(r, s, n, !1) : this.renderAndInsertItem(r, n);
                    return i.length ? void 0 : this.trigger("visibilityChange", this.visibleItems)
                }, i.prototype.renderAndInsertItem = function (t, e) {
                    var n;
                    return n = this.renderItem(t), this.insertView(t, n, e)
                }, i.prototype.renderItem = function (t) {
                    var e;
                    return e = this.subview("itemView:" + t.cid), e || (e = this.getView(t), this.subview("itemView:" + t.cid, e)), e.render(), e
                }, i.prototype.getView = function (t) {
                    if (this.itemView) return new this.itemView({
                        model: t
                    });
                    throw Error("The CollectionView#itemView property must be defined or the getView() must be overridden.")
                }, i.prototype.insertView = function (t, e, n, r) {
                    var i, o, s, a, l, u, c, p, h;
                    null == n && (n = null), null == r && (r = !0), p = "number" == typeof n ? n : this.collection.indexOf(t), u = "function" == typeof this.filterer ? this.filterer(t, p) : !0, h = e.el, a = e.$el, u ? r && (this.useCssAnimation ? a.addClass("animated-item-view") : a.css("opacity", 0)) : this.filterCallback(e, u), i = this.$list, l = this.itemSelector ? i.children(this.itemSelector) : i.children(), l.get(p) !== h && (c = l.length, 0 === c || p === c ? i.append(h) : 0 === p ? (o = l.eq(p), o.before(h)) : (s = l.eq(p - 1), s.after(h))), e.trigger("addedToDOM"), this.updateVisibleItems(t, u), r && u && (this.useCssAnimation ? setTimeout(function () {
                        return a.addClass("animated-item-view-end")
                    }, 0) : a.animate({
                        opacity: 1
                    }, this.animationDuration))
                }, i.prototype.removeViewForItem = function (t) {
                    return this.updateVisibleItems(t, !1), this.removeSubview("itemView:" + t.cid)
                }, i.prototype.updateVisibleItems = function (t, e, n) {
                    var r, i, o;
                    return null == n && (n = !0), i = !1, o = u(this.visibleItems).indexOf(t), r = o > -1, e && !r ? (this.visibleItems.push(t), i = !0) : !e && r && (this.visibleItems.splice(o, 1), i = !0), i && n && this.trigger("visibilityChange", this.visibleItems), i
                }, i.prototype.dispose = function () {
                    var t, e, n, r;
                    if (!this.disposed) {
                        for (e = ["$list", "$fallback", "$loading", "visibleItems"], n = 0, r = e.length; r > n; n++) t = e[n], delete this[t];
                        return i.__super__.dispose.apply(this, arguments)
                    }
                }, i
            }(l)
        }
    }), require.define({
        "chaplin/lib/route": function (e, n, i) {
            var o, s, a, l, u;
            return u = n("underscore"), o = n("backbone"), a = n("chaplin/lib/event_broker"), s = n("chaplin/controllers/controller"), i.exports = l = function () {
                function e(t, e, n) {
                    var i;
                    if (this.options = null != n ? n : {}, this.handler = r(this.handler, this), this.addParamName = r(this.addParamName, this), this.pattern = t, null != this.options.name && (this.name = this.options.name), i = e.split("#"), this.controller = i[0], this.action = i[1], u(s.prototype).has(this.action)) throw Error("Route: You should not use existing controller properties as action names");
                    this.createRegExp()
                }
                var n, i, l, c;
                return e.extend = o.Model.extend, u(e.prototype).extend(a), c = ["path", "changeURL"], n = /[-[\]{}()+?.,\\^$|#\s]/g, i = "&", l = "=", e.prototype.reverse = function (t) {
                    var e, n, r;
                    if (n = this.pattern, u.isRegExp(n)) return !1;
                    for (e in t) r = t[e], n = n.replace(RegExp(":" + e, "g"), r), n = n.replace(RegExp("\\*" + e, "g"), r);
                    return this.test(n) ? n : !1
                }, e.prototype.createRegExp = function () {
                    var t;
                    return u.isRegExp(this.pattern) ? (this.regExp = this.pattern, u.isArray(this.options.names) && (this.paramNames = this.options.names), void 0) : (t = this.pattern.replace(n, "\\$&").replace(/(?::|\*)(\w+)/g, this.addParamName), this.regExp = RegExp("^" + t + "(?=\\?|$)"))
                }, e.prototype.addParamName = function (t, e) {
                    var n;
                    if (null == (n = this.paramNames) && (this.paramNames = []), u(c).include(e)) throw Error("Route#addParamName: parameter name " + e + " is reserved");
                    return this.paramNames.push(e), ":" === t.charAt(0) ? "([^/?]+)" : "(.*?)"
                }, e.prototype.test = function (e) {
                    var n, r, i, o, s;
                    if (i = this.regExp.test(e), !i) return !1;
                    if (r = this.options.constraints) {
                        s = this.extractParams(e);
                        for (o in r)
                            if (t.call(r, o) && (n = r[o], !n.test(s[o]))) return !1
                    }
                    return !0
                }, e.prototype.handler = function (t, e) {
                    var n;
                    return null == e && (e = {}), n = this.buildParams(t), e.path = t, this.publishEvent("matchRoute", this, n, e)
                }, e.prototype.buildParams = function (t) {
                    return u.extend({}, this.extractQueryParams(t), this.extractParams(t), this.options.params)
                }, e.prototype.extractParams = function (t) {
                    var e, n, r, i, o, s, a, l;
                    for (o = {}, r = this.regExp.exec(t), l = r.slice(1), e = s = 0, a = l.length; a > s; e = ++s) n = l[e], i = this.paramNames ? this.paramNames[e] : e, o[i] = n;
                    return o
                }, e.prototype.extractQueryParams = function (t) {
                    var e, n, r, o, s, a, u, c, p, h, d, f;
                    if (a = {}, c = /\?(.+?)(?=#|$)/, r = c.exec(t), !r) return a;
                    for (u = r[1], s = u.split(i), h = 0, d = s.length; d > h; h++) o = s[h], o.length && (f = o.split(l), n = f[0], p = f[1], n.length && (n = decodeURIComponent(n), p = decodeURIComponent(p), e = a[n], e ? e.push ? e.push(p) : a[n] = [e, p] : a[n] = p));
                    return a
                }, e
            }()
        }
    }), require.define({
        "chaplin/lib/router": function (t, e, n) {
            var i, o, s, a, l, u;
            return u = e("underscore"), i = e("backbone"), l = e("chaplin/mediator"), o = e("chaplin/lib/event_broker"), s = e("chaplin/lib/route"), n.exports = a = function () {
                function t(t) {
                    this.options = null != t ? t : {}, this.route = r(this.route, this), this.match = r(this.match, this), u(this.options).defaults({
                        pushState: !0
                    }), this.subscribeEvent("!router:route", this.routeHandler), this.subscribeEvent("!router:reverse", this.reverseHandler), this.subscribeEvent("!router:changeURL", this.changeURLHandler), this.createHistory()
                }
                return t.extend = i.Model.extend, u(t.prototype).extend(o), t.prototype.createHistory = function () {
                    return i.history || (i.history = new i.History)
                }, t.prototype.startHistory = function () {
                    return i.history.start(this.options)
                }, t.prototype.stopHistory = function () {
                    return i.History.started ? i.history.stop() : void 0
                }, t.prototype.match = function (t, e, n) {
                    var r;
                    return null == n && (n = {}), r = new s(t, e, n), i.history.handlers.push({
                        route: r,
                        callback: r.handler
                    }), r
                }, t.prototype.route = function (t, e) {
                    var n, r, o, s;
                    for (null == e && (e = {}), u(e).defaults({
                        changeURL: !0
                    }), t = t.replace(/^(\/#|\/)/, ""), s = i.history.handlers, r = 0, o = s.length; o > r; r++)
                        if (n = s[r], n.route.test(t)) return n.callback(t, e), !0;
                    return !1
                }, t.prototype.reverseHandler = function (t, e, n) {
                    return n(this.reverse(t, e))
                }, t.prototype.reverse = function (t, e) {
                    var n, r, o, s, a;
                    for (a = i.history.handlers, o = 0, s = a.length; s > o; o++)
                        if (n = a[o], n.route.name === t && (r = n.route.reverse(e), r !== !1)) return r;
                    return !1
                }, t.prototype.routeHandler = function (t, e, n) {
                    var r;
                    return 2 === arguments.length && "function" == typeof e && (n = e, e = {}), r = this.route(t, e), "function" == typeof n ? n(r) : void 0
                }, t.prototype.changeURL = function (t, e) {
                    var n;
                    return null == e && (e = {}), n = {
                        trigger: e.trigger === !0,
                        replace: e.replace === !0
                    }, i.history.navigate(t, n)
                }, t.prototype.changeURLHandler = function (t, e) {
                    return this.changeURL(t, e)
                }, t.prototype.disposed = !1, t.prototype.dispose = function () {
                    return this.disposed ? void 0 : (this.stopHistory(), delete i.history, this.unsubscribeAllEvents(), this.disposed = !0, "function" == typeof Object.freeze ? Object.freeze(this) : void 0)
                }, t
            }()
        }
    }), require.define({
        "chaplin/lib/delayer": function (t, e, n) {
            var r;
            return r = {
                setTimeout: function (t, e, n) {
                    var r, i, o, s = this;
                    return null == (o = this.timeouts) && (this.timeouts = {}), this.clearTimeout(t), i = function () {
                        return delete s.timeouts[t], n()
                    }, r = setTimeout(i, e), this.timeouts[t] = r, r
                },
                clearTimeout: function (t) {
                    this.timeouts && null != this.timeouts[t] && (clearTimeout(this.timeouts[t]), delete this.timeouts[t])
                },
                clearAllTimeouts: function () {
                    var t, e, n;
                    if (this.timeouts) {
                        n = this.timeouts;
                        for (e in n) t = n[e], this.clearTimeout(e)
                    }
                },
                setInterval: function (t, e, n) {
                    var r, i;
                    return this.clearInterval(t), null == (i = this.intervals) && (this.intervals = {}), r = setInterval(n, e), this.intervals[t] = r, r
                },
                clearInterval: function (t) {
                    this.intervals && this.intervals[t] && (clearInterval(this.intervals[t]), delete this.intervals[t])
                },
                clearAllIntervals: function () {
                    var t, e, n;
                    if (this.intervals) {
                        n = this.intervals;
                        for (e in n) t = n[e], this.clearInterval(e)
                    }
                },
                clearDelayed: function () {
                    this.clearAllTimeouts(), this.clearAllIntervals()
                }
            }, "function" == typeof Object.freeze && Object.freeze(r), n.exports = r
        }
    }), require.define({
        "chaplin/lib/event_broker": function (t, e, n) {
            var r, o;
            return o = e("chaplin/mediator"), r = {
                subscribeEvent: function (t, e) {
                    if ("string" != typeof t) throw new TypeError("EventBroker#subscribeEvent: type argument must be a string");
                    if ("function" != typeof e) throw new TypeError("EventBroker#subscribeEvent: handler argument must be a function");
                    return o.unsubscribe(t, e, this), o.subscribe(t, e, this)
                },
                unsubscribeEvent: function (t, e) {
                    if ("string" != typeof t) throw new TypeError("EventBroker#unsubscribeEvent: type argument must be a string");
                    if ("function" != typeof e) throw new TypeError("EventBroker#unsubscribeEvent: handler argument must be a function");
                    return o.unsubscribe(t, e)
                },
                unsubscribeAllEvents: function () {
                    return o.unsubscribe(null, null, this)
                },
                publishEvent: function () {
                    var t, e;
                    if (e = arguments[0], t = arguments.length >= 2 ? i.call(arguments, 1) : [], "string" != typeof e) throw new TypeError("EventBroker#publishEvent: type argument must be a string");
                    return o.publish.apply(o, [e].concat(i.call(t)))
                }
            }, "function" == typeof Object.freeze && Object.freeze(r), n.exports = r
        }
    }), require.define({
        "chaplin/lib/support": function (t, e, n) {
            var r;
            return r = {
                propertyDescriptors: function () {
                    var t;
                    if ("function" != typeof Object.defineProperty || "function" != typeof Object.defineProperties) return !1;
                    try {
                        return t = {}, Object.defineProperty(t, "foo", {
                            value: "bar"
                        }), "bar" === t.foo
                    } catch (e) {
                        return !1
                    }
                }()
            }, n.exports = r
        }
    }), require.define({
        "chaplin/lib/sync_machine": function (t, e, n) {
            var r, i, o, s, a, l, u, c, p, h;
            for (a = "unsynced", o = "syncing", i = "synced", r = "syncStateChange", s = {
                _syncState: a,
                _previousSyncState: null,
                syncState: function () {
                    return this._syncState
                },
                isUnsynced: function () {
                    return this._syncState === a
                },
                isSynced: function () {
                    return this._syncState === i
                },
                isSyncing: function () {
                    return this._syncState === o
                },
                unsync: function () {
                    var t;
                    ((t = this._syncState) === o || t === i) && (this._previousSync = this._syncState, this._syncState = a, this.trigger(this._syncState, this, this._syncState), this.trigger(r, this, this._syncState))
                },
                beginSync: function () {
                    var t;
                    ((t = this._syncState) === a || t === i) && (this._previousSync = this._syncState, this._syncState = o, this.trigger(this._syncState, this, this._syncState), this.trigger(r, this, this._syncState))
                },
                finishSync: function () {
                    this._syncState === o && (this._previousSync = this._syncState, this._syncState = i, this.trigger(this._syncState, this, this._syncState), this.trigger(r, this, this._syncState))
                },
                abortSync: function () {
                    this._syncState === o && (this._syncState = this._previousSync, this._previousSync = this._syncState, this.trigger(this._syncState, this, this._syncState), this.trigger(r, this, this._syncState))
                }
            }, h = [a, o, i, r], u = function (t) {
                return s[t] = function (e, n) {
                    return null == n && (n = this), this.on(t, e, n), this._syncState === t ? e.call(n) : void 0
                }
            }, c = 0, p = h.length; p > c; c++) l = h[c], u(l);
            return "function" == typeof Object.freeze && Object.freeze(s), n.exports = s
        }
    }), require.define({
        "chaplin/lib/utils": function (t, e, n) {
            var r, o;
            return r = e("chaplin/lib/support"), o = {
                beget: function () {
                    var t;
                    return "function" == typeof Object.create ? Object.create : (t = function () {}, function (e) {
                        return t.prototype = e, new t
                    })
                }(),
                readonly: function () {
                    var t;
                    return r.propertyDescriptors ? (t = {
                        writable: !1,
                        enumerable: !0,
                        configurable: !1
                    }, function () {
                        var e, n, r, o, s;
                        for (e = arguments[0], r = arguments.length >= 2 ? i.call(arguments, 1) : [], o = 0, s = r.length; s > o; o++) n = r[o], t.value = e[n], Object.defineProperty(e, n, t);
                        return !0
                    }) : function () {
                        return !1
                    }
                }(),
                wrapMethod: function (t, e) {
                    var n;
                    return n = t[e], t["" + e + "IsWrapped"] = !0, t[e] = function () {
                        return t.disposed ? !1 : (n.apply(t, arguments), t["after" + o.upcase(e)].apply(t, arguments), t)
                    }
                },
                upcase: function (t) {
                    return t.charAt(0).toUpperCase() + t.substring(1)
                },
                underscorize: function (t) {
                    return t.replace(/[A-Z]/g, function (t, e) {
                        return (0 !== e ? "_" : "") + t.toLowerCase()
                    })
                },
                modifierKeyPressed: function (t) {
                    return t.shiftKey || t.altKey || t.ctrlKey || t.metaKey
                }
            }, "function" == typeof Object.seal && Object.seal(o), n.exports = o
        }
    }), require.define({
        chaplin: function (t, e, n) {
            var r, i, o, s, a, l, u, c, p, h, d, f, m, g, v, y;
            return r = e("chaplin/application"), g = e("chaplin/mediator"), l = e("chaplin/dispatcher"), s = e("chaplin/controllers/controller"), i = e("chaplin/models/collection"), p = e("chaplin/models/model"), c = e("chaplin/views/layout"), m = e("chaplin/views/view"), o = e("chaplin/views/collection_view"), h = e("chaplin/lib/route"), d = e("chaplin/lib/router"), a = e("chaplin/lib/delayer"), u = e("chaplin/lib/event_broker"), v = e("chaplin/lib/support"), f = e("chaplin/lib/sync_machine"), y = e("chaplin/lib/utils"), n.exports = {
                Application: r,
                mediator: g,
                Dispatcher: l,
                Controller: s,
                Collection: i,
                Model: p,
                Layout: c,
                View: m,
                CollectionView: o,
                Route: h,
                Router: d,
                Delayer: a,
                EventBroker: u,
                support: v,
                SyncMachine: f,
                utils: y
            }
        }
    })
}.call(this);
var Handlebars = {};
Handlebars.VERSION = "1.0.beta.6", Handlebars.helpers = {}, Handlebars.partials = {}, Handlebars.registerHelper = function (t, e, n) {
    n && (e.not = n), this.helpers[t] = e
}, Handlebars.registerPartial = function (t, e) {
    this.partials[t] = e
}, Handlebars.registerHelper("helperMissing", function (t) {
    if (2 === arguments.length) return void 0;
    throw Error("Could not find property '" + t + "'")
});
var toString = Object.prototype.toString,
    functionType = "[object Function]";
Handlebars.registerHelper("blockHelperMissing", function (t, e) {
    var n = e.inverse || function () {}, r = e.fn,
        i = "",
        o = toString.call(t);
    if (o === functionType && (t = t.call(this)), t === !0) return r(this);
    if (t === !1 || null == t) return n(this);
    if ("[object Array]" === o) {
        if (t.length > 0)
            for (var s = 0, a = t.length; a > s; s++) i += r(t[s]);
        else i = n(this);
        return i
    }
    return r(t)
}), Handlebars.registerHelper("each", function (t, e) {
    var n = e.fn,
        r = e.inverse,
        i = "";
    if (t && t.length > 0)
        for (var o = 0, s = t.length; s > o; o++) i += n(t[o]);
    else i = r(this);
    return i
}), Handlebars.registerHelper("if", function (t, e) {
    var n = toString.call(t);
    return n === functionType && (t = t.call(this)), !t || Handlebars.Utils.isEmpty(t) ? e.inverse(this) : e.fn(this)
}), Handlebars.registerHelper("unless", function (t, e) {
    var n = e.fn,
        r = e.inverse;
    return e.fn = r, e.inverse = n, Handlebars.helpers["if"].call(this, t, e)
}), Handlebars.registerHelper("with", function (t, e) {
    return e.fn(t)
}), Handlebars.registerHelper("log", function (t) {
    Handlebars.log(t)
}), Handlebars.Exception = function () {
    var t = Error.prototype.constructor.apply(this, arguments);
    for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
    this.message = t.message
}, Handlebars.Exception.prototype = Error(), Handlebars.SafeString = function (t) {
    this.string = t
}, Handlebars.SafeString.prototype.toString = function () {
    return "" + this.string
}, Handlebars.SaferString = function (t) {
    return -1 != t.indexOf("<script") || -1 != t.indexOf("script>") || -1 != t.indexOf("<iframe") || -1 != t.indexOf("iframe>") || -1 != t.indexOf("javascript:") ? !1 : void 0
},
function () {
    var t = {
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    }, e = /&(?!\w+;)|[<>"'`]/g,
        n = /[&<>"'`]/,
        r = function (e) {
            return t[e] || "&amp;"
        };
    Handlebars.Utils = {
        escapeExpression: function (t) {
            return t instanceof Handlebars.SafeString ? "" + t : null == t || t === !1 ? "" : n.test(t) ? t.replace(e, r) : t
        },
        isEmpty: function (t) {
            return t === void 0 ? !0 : null === t ? !0 : t === !1 ? !0 : "[object Array]" === Object.prototype.toString.call(t) && 0 === t.length ? !0 : !1
        }
    }
}(), Handlebars.VM = {
    template: function (t) {
        var e = {
            escapeExpression: Handlebars.Utils.escapeExpression,
            invokePartial: Handlebars.VM.invokePartial,
            programs: [],
            program: function (t, e, n) {
                var r = this.programs[t];
                return n ? Handlebars.VM.program(e, n) : r ? r : r = this.programs[t] = Handlebars.VM.program(e)
            },
            programWithDepth: Handlebars.VM.programWithDepth,
            noop: Handlebars.VM.noop
        };
        return function (n, r) {
            return r = r || {}, t.call(e, Handlebars, n, r.helpers, r.partials, r.data)
        }
    },
    programWithDepth: function (t, e) {
        var n = Array.prototype.slice.call(arguments, 2);
        return function (r, i) {
            return i = i || {}, t.apply(this, [r, i.data || e].concat(n))
        }
    },
    program: function (t, e) {
        return function (n, r) {
            return r = r || {}, t(n, r.data || e)
        }
    },
    noop: function () {
        return ""
    },
    invokePartial: function (t, e, n, r, i, o) {
        if (options = {
            helpers: r,
            partials: i,
            data: o
        }, void 0 === t) throw new Handlebars.Exception("The partial " + e + " could not be found");
        if (t instanceof Function) return t(n, options);
        if (Handlebars.compile) return i[e] = Handlebars.compile(t), i[e](n, options);
        throw new Handlebars.Exception("The partial " + e + " could not be compiled when running in runtime-only mode")
    }
}, Handlebars.template = Handlebars.VM.template, ! function (t) {
    t(function () {
        "use strict";
        t.support.transition = function () {
            var t = function () {
                var t, e = document.createElement("bootstrap"),
                    n = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        transition: "transitionend"
                    };
                for (t in n)
                    if (void 0 !== e.style[t]) return n[t]
            }();
            return t && {
                end: t
            }
        }()
    })
}(window.jQuery), ! function (t) {
    "use strict";
    var e = '[data-dismiss="alert"]',
        n = function (n) {
            t(n).on("click", e, this.close)
        };
    n.prototype.close = function (e) {
        function n() {
            r.trigger("closed").remove()
        }
        var r, i = t(this),
            o = i.attr("data-target");
        o || (o = i.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")), r = t(o), e && e.preventDefault(), r.length || (r = i.hasClass("alert") ? i : i.parent()), r.trigger(e = t.Event("close")), e.isDefaultPrevented() || (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.on(t.support.transition.end, n) : n())
    }, t.fn.alert = function (e) {
        return this.each(function () {
            var r = t(this),
                i = r.data("alert");
            i || r.data("alert", i = new n(this)), "string" == typeof e && i[e].call(r)
        })
    }, t.fn.alert.Constructor = n, t(function () {
        t("body").on("click.alert.data-api", e, n.prototype.close)
    })
}(window.jQuery), ! function (t) {
    "use strict";
    var e = function (e) {
        this.element = t(e)
    };
    e.prototype = {
        constructor: e,
        show: function () {
            var e, n, r, i = this.element,
                o = i.closest("ul:not(.dropdown-menu)"),
                s = i.attr("data-target");
            s || (s = i.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, "")), i.parent("li").hasClass("active") || (e = o.find(".active a").last()[0], r = t.Event("show", {
                relatedTarget: e
            }), i.trigger(r), r.isDefaultPrevented() || (n = t(s), this.activate(i.parent("li"), o), this.activate(n, n.parent(), function () {
                i.trigger({
                    type: "shown",
                    relatedTarget: e
                })
            })))
        },
        activate: function (e, n, r) {
            function i() {
                o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), e.addClass("active"), s ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"), r && r()
            }
            var o = n.find("> .active"),
                s = r && t.support.transition && o.hasClass("fade");
            s ? o.one(t.support.transition.end, i) : i(), o.removeClass("in")
        }
    }, t.fn.tab = function (n) {
        return this.each(function () {
            var r = t(this),
                i = r.data("tab");
            i || r.data("tab", i = new e(this)), "string" == typeof n && i[n]()
        })
    }, t.fn.tab.Constructor = e, t(function () {
        t("body").on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
            e.preventDefault(), t(this).tab("show")
        })
    })
}(window.jQuery), ! function (t) {
    "use strict";
    var e = function (e, n) {
        this.$element = t(e), this.options = t.extend({}, t.fn.button.defaults, n)
    };
    e.prototype.setState = function (t) {
        var e = "disabled",
            n = this.$element,
            r = n.data(),
            i = n.is("input") ? "val" : "html";
        t += "Text", r.resetText || n.data("resetText", n[i]()), n[i](r[t] || this.options[t]), setTimeout(function () {
            "loadingText" == t ? n.addClass(e).attr(e, e) : n.removeClass(e).removeAttr(e)
        }, 0)
    }, e.prototype.toggle = function () {
        var t = this.$element.parent('[data-toggle="buttons-radio"]');
        t && t.find(".active").removeClass("active"), this.$element.toggleClass("active")
    }, t.fn.button = function (n) {
        return this.each(function () {
            var r = t(this),
                i = r.data("button"),
                o = "object" == typeof n && n;
            i || r.data("button", i = new e(this, o)), "toggle" == n ? i.toggle() : n && i.setState(n)
        })
    }, t.fn.button.defaults = {
        loadingText: "loading..."
    }, t.fn.button.Constructor = e, t(function () {
        t("body").on("click.button.data-api", "[data-toggle^=button]", function (e) {
            var n = t(e.target);
            n.hasClass("btn") || (n = n.closest(".btn")), n.button("toggle")
        })
    })
}(window.jQuery), ! function (t) {
    "use strict";

    function e() {
        t(r).each(function () {
            n(t(this)).removeClass("open")
        })
    }

    function n(e) {
        var n, r = e.attr("data-target");
        return r || (r = e.attr("href"), r = r && /#/.test(r) && r.replace(/.*(?=#[^\s]*$)/, "")), n = r && t(r), n && n.length || (n = e.parent()), n
    }
    var r = "[data-toggle=dropdown]",
        i = function (e) {
            var n = t(e).on("click.dropdown.data-api", this.toggle);
            t("html").on("click.dropdown.data-api", function () {
                n.parent().removeClass("open")
            })
        };
    i.prototype = {
        constructor: i,
        toggle: function () {
            var r, i, o = t(this);
            if (!o.is(".disabled, :disabled")) return r = n(o), i = r.hasClass("open"), e(), i || r.toggleClass("open"), o.focus(), !1
        },
        keydown: function (e) {
            var i, o, s, a, l;
            if (/(38|40|27)/.test(e.keyCode) && (i = t(this), e.preventDefault(), e.stopPropagation(), !i.is(".disabled, :disabled"))) {
                if (s = n(i), a = s.hasClass("open"), !a || a && 27 == e.keyCode) return 27 == e.which && s.find(r).focus(), i.click();
                o = t("[role=menu] li:not(.divider):visible a", s), o.length && (l = o.index(o.filter(":focus")), 38 == e.keyCode && l > 0 && l--, 40 == e.keyCode && o.length - 1 > l && l++, ~l || (l = 0), o.eq(l).focus())
            }
        }
    };
    var o = t.fn.dropdown;
    t.fn.dropdown = function (e) {
        return this.each(function () {
            var n = t(this),
                r = n.data("dropdown");
            r || n.data("dropdown", r = new i(this)), "string" == typeof e && r[e].call(n)
        })
    }, t.fn.dropdown.Constructor = i, t.fn.dropdown.noConflict = function () {
        return t.fn.dropdown = o, this
    }, t(document).on("click.dropdown.data-api", e).on("click.dropdown.data-api", ".dropdown form", function (t) {
        t.stopPropagation()
    }).on("click.dropdown-menu", function (t) {
        t.stopPropagation()
    }).on("click.dropdown.data-api", r, i.prototype.toggle).on("keydown.dropdown.data-api", r + ", [role=menu]", i.prototype.keydown)
}(window.jQuery), ! function (t) {
    "use strict";
    var e = function (e, n) {
        this.options = n, this.$element = t(e).delegate('[data-dismiss="modal"]', "click.dismiss.modal", t.proxy(this.hide, this)), this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
    };
    e.prototype = {
        constructor: e,
        toggle: function () {
            return this[this.isShown ? "hide" : "show"]()
        },
        show: function () {
            var e = this,
                n = t.Event("show");
            this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (t("body").addClass("modal-open"), this.isShown = !0, this.escape(), this.backdrop(function () {
                var n = t.support.transition && e.$element.hasClass("fade");
                e.$element.parent().length || e.$element.appendTo(document.body), e.$element.show(), n && e.$element[0].offsetWidth, e.$element.addClass("in").attr("aria-hidden", !1).focus(), n ? e.$element.one(t.support.transition.end, function () {
                    e.$element.trigger("shown")
                }) : e.$element.trigger("shown")
            }))
        },
        hide: function (e) {
            e && e.preventDefault(), e = t.Event("hide"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, t("body").removeClass("modal-open"), this.escape(), t(document).off("focusin.modal"), this.$element.removeClass("in").attr("aria-hidden", !0), t.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal())
        },
        enforceFocus: function () {
            var e = this;
            t(document).on("focusin.modal", function (t) {
                e.$element[0] === t.target || e.$element.has(t.target).length || e.$element.focus()
            })
        },
        escape: function () {
            var t = this;
            this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function (e) {
                27 == e.which && t.hide()
            }) : this.isShown || this.$element.off("keyup.dismiss.modal")
        },
        hideWithTransition: function () {
            var e = this,
                n = setTimeout(function () {
                    e.$element.off(t.support.transition.end), e.hideModal()
                }, 500);
            this.$element.one(t.support.transition.end, function () {
                clearTimeout(n), e.hideModal()
            })
        },
        hideModal: function () {
            this.$element.hide().trigger("hidden"), this.backdrop()
        },
        removeBackdrop: function () {
            this.$backdrop.remove(), this.$backdrop = null
        },
        backdrop: function (e) {
            var n = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var r = t.support.transition && n;
                this.$backdrop = t('<div class="modal-backdrop ' + n + '" />').appendTo(document.body), "static" != this.options.backdrop && this.$backdrop.click(t.proxy(this.hide, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), r ? this.$backdrop.one(t.support.transition.end, e) : e()
            } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(t.support.transition.end, t.proxy(this.removeBackdrop, this)) : this.removeBackdrop()) : e && e()
        }
    }, t.fn.modal = function (n) {
        return this.each(function () {
            var r = t(this),
                i = r.data("modal"),
                o = t.extend({}, t.fn.modal.defaults, r.data(), "object" == typeof n && n);
            i || r.data("modal", i = new e(this, o)), "string" == typeof n ? i[n]() : o.show && i.show()
        })
    }, t.fn.modal.defaults = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, t.fn.modal.Constructor = e, t(function () {
        t("body").on("click.modal.data-api", '[data-toggle="modal"]', function (e) {
            var n = t(this),
                r = n.attr("href"),
                i = t(n.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
                o = i.data("modal") ? "toggle" : t.extend({
                    remote: !/#/.test(r) && r
                }, i.data(), n.data());
            e.preventDefault(), i.modal(o).one("hide", function () {
                n.focus()
            })
        })
    })
}(window.jQuery),
function () {
    var t = {}.hasOwnProperty,
        e = function (e, n) {
            function r() {
                this.constructor = e
            }
            for (var i in n) t.call(n, i) && (e[i] = n[i]);
            return r.prototype = n.prototype, e.prototype = new r, e.__super__ = n.prototype, e
        };
    RegExp.escape = function (t) {
        return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }, this.AutocompleteItem = function (t) {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return e(n, t), n.prototype.key = function () {
            return "name"
        }, n.prototype.matches = function (t) {
            return t.test(this.completion())
        }, n.prototype.completion = function () {
            var t;
            return t = this.get(this.key()), /\s/.test(t) && (t = '"' + t + '"'), this._prefixToken() + t + this._suffixToken()
        }, n.prototype.groupBy = function () {
            return this.get("kind") || "results"
        }, n.prototype._prefixToken = function () {
            var t;
            return (null != (t = this.get("token")) ? t.slice(0, 1) : void 0) || ""
        }, n.prototype._suffixToken = function () {
            var t;
            return (null != (t = this.get("token")) ? t.slice(1, 2) : void 0) || ""
        }, n
    }(Backbone.Model), this.AutocompleteItems = function (t) {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return e(n, t), n.prototype.model = AutocompleteItem, n.prototype.comparator = function (t) {
            return t.get(t.key()).toLowerCase()
        }, n.prototype.matches = function (t) {
            return this.filter(function (e) {
                return e.matches(t)
            })
        }, n
    }(Backbone.Collection), this.AutocompleteItemView = function (t) {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return e(n, t), n.prototype.tagName = "li", n.prototype.className = "autocomplete-item", n.prototype.initialize = function () {
            return this.model.on("change", this.render)
        }, n.prototype.template = function (t) {
            return '<a href="#">' + t.markup + "</a>"
        }, n.prototype.render = function (t) {
            var e, n;
            return n = this.model.toJSON(), n.markup = t ? n[this.model.key()].replace(t, "<em>$1</em>") : n[this.model.key()], this.$el.html(this.template(n)), e = encodeURIComponent(this.model.completion()), this.$el.attr("data-autocomplete-completion", e), this
        }, n
    }(Backbone.View), this.AutocompleteItemsView = function (t) {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return e(n, t), n.prototype.itemView = AutocompleteItemView, n.prototype.events = {
            "submit form": "_handleSubmit",
            "keyup input[type=text]": "_handleKeypress",
            "focus input[type=text]": "showResults",
            "blur input[type=text]": "hideResults",
            "mouseenter [data-autocomplete-completion]": "_selectResult",
            "mousedown [data-autocomplete-completion]": "submit"
        }, n.prototype.initialize = function () {
            var t = this;
            return this.options.itemView && (this.itemView = this.options.itemView), this._$field = this.$el.find("input[type=text]"), this._$form = this.$el.find("form"), this._$resultsList = this.$el.find(".autocomplete-results"), this.on("autocomplete:clear", function () {
                return t._$field.val("")
            }), this.on("autocomplete:replace", function (e) {
                var n;
                return n = t._fragments(e), t._$field.val(n.join(" ").trim() + " ")
            }), this.on("autocomplete:append", function (e) {
                var n;
                return n = t._fragments(t._$field.val()).concat(e), t._$field.val(t._fragments(n.join(" ")).join(" ").trim() + " ")
            })
        }, n.prototype.render = function () {
            return this
        }, n.prototype._handleSubmit = function (t, e) {
            var n = this;
            return null == e && (e = !1), e ? !0 : (_.delay(function () {
                return n._$form.trigger("submit", !0)
            }, 100), !1)
        }, n.prototype.submit = function () {
            return this._finishAutocomplete(), this.hideResults(), this._$field.blur(), this._handleSubmit(!0)
        }, n.prototype.showResults = function () {
            return this._showAutocompleteResults()
        }, n.prototype.hideResults = function () {
            return this._$resultsList.hide().empty()
        }, n.prototype.selectResult = function (t) {
            return null == t && (t = 0), this._$resultsList.children().removeClass("selected").filter(":eq(" + t + ")").addClass("selected")
        }, n.prototype._selectResult = function (t) {
            var e;
            return e = $(t.target), e = e.is("li") ? e : e.closest("li"), this.selectResult(this._$resultsList.children().index(e))
        }, n.prototype._handleKeypress = function (t) {
            var e = this;
            return this._debouncedHandleKeypress || (this._debouncedHandleKeypress = _.debounce(function (t) {
                var n, r, i, o, s;
                switch (t.which) {
                case 38:
                case 40:
                    return i = e._$resultsList.children(), r = i.filter(":first-child"), o = i.filter(":last-child"), s = i.filter(".selected"), n = 38 === t.which ? s.is(":first-child") ? o : s.prevAll("[data-autocomplete-completion]").filter(":eq(0)") : s.is(":last-child") ? r : s.nextAll("[data-autocomplete-completion]").filter(":eq(0)"), e.selectResult(i.index(n));
                case 27:
                    return e.hideResults();
                case 13:
                    return e.submit();
                default:
                    return e._showAutocompleteResults()
                }
            })), this._debouncedHandleKeypress(t)
        }, n.prototype._showAutocompleteResults = function () {
            var t, e, n, r = this;
            return this.hideResults(), (t = _.last(this._fragments(this._$field.val()))).length > 0 ? (n = RegExp("(" + RegExp.escape(t) + ")", "i"), this._$resultsList.append('<li class="autocomplete-item-all" data-autocomplete-completion="#"><a href="#">See all results</a></li>'), e = _.groupBy(this.collection.matches(n), function (t) {
                return t.groupBy()
            }), _.each(e, function (t, e) {
                return r._$resultsList.append('<li class="autocomplete-item-group"><h5>' + e + "</h5></li>"), _.each(t, function (t, e) {
                    var i, o;
                    return o = new r.itemView({
                        model: t
                    }), i = o.render(n).$el.addClass("index-" + e), r._$resultsList.append(i)
                })
            }), this._$resultsList.show(), this.selectResult()) : void 0
        }, n.prototype._finishAutocomplete = function () {
            var t, e;
            return t = this._$resultsList.children(".selected").attr("data-autocomplete-completion"), t && (t = decodeURIComponent(t)), _.isEmpty(t) || "#" === t ? void 0 : (e = this._fragments(this._$field.val()).slice(0, -1).concat(t), this._$field.val(this._fragments(e.join(" ")).join(" ").trim() + " "))
        }, n.prototype._fragments = function (t) {
            return _.uniq(t.trim().split(/\s+/))
        }, n
    }(Backbone.View)
}.call(this),
function (t) {
    var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        n = function () {
            for (var t = [], e = "A".charCodeAt(0), n = "a".charCodeAt(0), r = "0".charCodeAt(0), i = 0; 26 > i; i++) t.push(e + i);
            for (var i = 0; 26 > i; i++) t.push(n + i);
            for (var i = 0; 10 > i; i++) t.push(r + i);
            return t.push("+".charCodeAt(0)), t.push("/".charCodeAt(0)), t
        }(),
        r = function (t) {
            for (var e = {}, n = 0, r = t.length; r > n; n++) e[t.charAt(n)] = n;
            return e
        }(e),
        i = function (t) {
            for (var e = [], n = 0, r = t.length; r > n; n++) e[n] = t.charCodeAt(n);
            return e
        }, o = function (t) {
            for (var e = 0; t.length % 3;) t.push(0), e++;
            for (var r = [], i = 0, o = t.length; o > i; i += 3) {
                var s = t[i],
                    a = t[i + 1],
                    l = t[i + 2];
                if (s >= 256 || a >= 256 || l >= 256) throw "unsupported character found";
                var u = s << 16 | a << 8 | l;
                r.push(n[u >>> 18], n[63 & u >>> 12], n[63 & u >>> 6], n[63 & u])
            }
            for (; e--;) r[r.length - e - 1] = "=".charCodeAt(0);
            return v(r)
        }, s = function (t) {
            t = t.replace(/[^A-Za-z0-9+\/]+/g, "");
            for (var e = [], n = t.length % 4, i = 0, o = t.length; o > i; i += 4) {
                var s = (r[t.charAt(i)] || 0) << 18 | (r[t.charAt(i + 1)] || 0) << 12 | (r[t.charAt(i + 2)] || 0) << 6 | (r[t.charAt(i + 3)] || 0);
                e.push(s >> 16, 255 & s >> 8, 255 & s)
            }
            return e.length -= [0, 0, 2, 1][n], e
        }, a = function (t) {
            for (var e = [], n = 0, r = t.length; r > n; n++) {
                var i = t[n];
                128 > i ? e.push(i) : 2048 > i ? e.push(192 | i >>> 6, 128 | 63 & i) : e.push(224 | 15 & i >>> 12, 128 | 63 & i >>> 6, 128 | 63 & i)
            }
            return e
        }, l = function (t) {
            for (var e = [], n = 0, r = t.length; r > n; n++) {
                var i = t[n];
                if (128 > i) e.push(i);
                else {
                    var o = t[++n];
                    if (224 > i) e.push((31 & i) << 6 | 63 & o);
                    else {
                        var s = t[++n];
                        e.push((15 & i) << 12 | (63 & o) << 6 | 63 & s)
                    }
                }
            }
            return e
        }, u = function (t) {
            return o(i(t))
        }, c = function (t) {
            return v(s(t))
        }, p = function (t) {
            return l(i(t))
        }, h = function (t) {
            return v(l(t))
        }, d = function (t) {
            return v(l(i(t)))
        }, f = function (t) {
            return a(i(t))
        }, m = function (t) {
            return v(a(t))
        }, g = function (t) {
            return v(a(i(t)))
        }, v = function (t) {
            var e, n = [];
            for (e = 0; t.length > e; e += 65536) n.push(String.fromCharCode.apply(String, t.slice(e, e + 65536)));
            return n.join("")
        };
    if (t.btoa) var y = t.btoa,
    w = function (t) {
        return y(g(t))
    };
    else var y = u,
    w = function (t) {
        return o(f(t))
    };
    if (t.atob) var b = t.atob,
    _ = function (t) {
        return d(b(t))
    };
    else var b = c,
    _ = function (t) {
        return h(s(t))
    };
    t.Base64 = {
        convertUTF8ArrayToBase64: o,
        convertByteArrayToBase64: o,
        convertBase64ToUTF8Array: s,
        convertBase64ToByteArray: s,
        convertUTF16ArrayToUTF8Array: a,
        convertUTF16ArrayToByteArray: a,
        convertUTF8ArrayToUTF16Array: l,
        convertByteArrayToUTF16Array: l,
        convertUTF8StringToBase64: u,
        convertBase64ToUTF8String: c,
        convertUTF8StringToUTF16Array: p,
        convertUTF8ArrayToUTF16String: h,
        convertByteArrayToUTF16String: h,
        convertUTF8StringToUTF16String: d,
        convertUTF16StringToUTF8Array: f,
        convertUTF16StringToByteArray: f,
        convertUTF16ArrayToUTF8String: m,
        convertUTF16StringToUTF8String: g,
        convertUTF16StringToBase64: w,
        convertBase64ToUTF16String: _,
        fromBase64: c,
        toBase64: u,
        atob: b,
        btoa: y,
        utob: g,
        btou: d,
        encode: w,
        encodeURI: function (t) {
            return w(t).replace(/[+\/]/g, function (t) {
                return "+" == t ? "-" : "_"
            }).replace(/=+$/, "")
        },
        decode: function (t) {
            return _(t.replace(/[-_]/g, function (t) {
                return "-" == t ? "+" : "/"
            }))
        }
    }
}(this),
function (t, e, n) {
    function r(t) {
        return t
    }

    function i(t) {
        return decodeURIComponent(t.replace(o, " "))
    }
    var o = /\+/g,
        s = t.cookie = function (o, a, l) {
            if (a !== n) {
                if (l = t.extend({}, s.defaults, l), null === a && (l.expires = -1), "number" == typeof l.expires) {
                    var u = l.expires,
                        c = l.expires = new Date;
                    c.setDate(c.getDate() + u)
                }
                return a = s.json ? JSON.stringify(a) : a + "", e.cookie = [encodeURIComponent(o), "=", s.raw ? a : encodeURIComponent(a), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : ""].join("")
            }
            for (var p = s.raw ? r : i, h = e.cookie.split("; "), d = 0, f = h.length; f > d; d++) {
                var m = h[d].split("=");
                if (p(m.shift()) === o) {
                    var g = p(m.join("="));
                    return s.json ? JSON.parse(g) : g
                }
            }
            return null
        };
    s.defaults = {}, t.removeCookie = function (e, n) {
        return null !== t.cookie(e) ? (t.cookie(e, null, n), !0) : !1
    }
}(jQuery, document),
function (t) {
    "use strict";

    function e() {
        if (t.fn.ajaxSubmit.debug) {
            var e = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(e) : window.opera && window.opera.postError && window.opera.postError(e)
        }
    }
    var n = {};
    n.fileapi = void 0 !== t("<input type='file'/>").get(0).files, n.formdata = void 0 !== window.FormData, t.fn.ajaxSubmit = function (r) {
        function i(e) {
            var n, r, i = t.param(e).split("&"),
                o = i.length,
                s = {};
            for (n = 0; o > n; n++) i[n] = i[n].replace(/\+/g, " "), r = i[n].split("="), s[decodeURIComponent(r[0])] = decodeURIComponent(r[1]);
            return s
        }

        function o(e) {
            for (var n = new FormData, o = 0; e.length > o; o++) n.append(e[o].name, e[o].value);
            if (r.extraData) {
                var s = i(r.extraData);
                for (var l in s) s.hasOwnProperty(l) && n.append(l, s[l])
            }
            r.data = null;
            var u = t.extend(!0, {}, t.ajaxSettings, r, {
                contentType: !1,
                processData: !1,
                cache: !1,
                type: a || "POST"
            });
            r.uploadProgress && (u.xhr = function () {
                var t = jQuery.ajaxSettings.xhr();
                return t.upload && (t.upload.onprogress = function (t) {
                    var e = 0,
                        n = t.loaded || t.position,
                        i = t.total;
                    t.lengthComputable && (e = Math.ceil(100 * (n / i))), r.uploadProgress(t, n, i, e)
                }), t
            }), u.data = null;
            var c = u.beforeSend;
            return u.beforeSend = function (t, e) {
                e.data = n, c && c.call(this, t, e)
            }, t.ajax(u)
        }

        function s(n) {
            function i(t) {
                var e = t.contentWindow ? t.contentWindow.document : t.contentDocument ? t.contentDocument : t.document;
                return e
            }

            function o() {
                function n() {
                    try {
                        var t = i(g).readyState;
                        e("state = " + t), t && "uninitialized" == t.toLowerCase() && setTimeout(n, 50)
                    } catch (r) {
                        e("Server abort: ", r, " (", r.name, ")"), s(E), _ && clearTimeout(_), _ = void 0
                    }
                }
                var r = c.attr("target"),
                    o = c.attr("action");
                k.setAttribute("target", d), a || k.setAttribute("method", "POST"), o != p.url && k.setAttribute("action", p.url), p.skipEncodingOverride || a && !/post/i.test(a) || c.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                }), p.timeout && (_ = setTimeout(function () {
                    b = !0, s(C)
                }, p.timeout));
                var l = [];
                try {
                    if (p.extraData)
                        for (var u in p.extraData) p.extraData.hasOwnProperty(u) && (t.isPlainObject(p.extraData[u]) && p.extraData[u].hasOwnProperty("name") && p.extraData[u].hasOwnProperty("value") ? l.push(t('<input type="hidden" name="' + p.extraData[u].name + '">').val(p.extraData[u].value).appendTo(k)[0]) : l.push(t('<input type="hidden" name="' + u + '">').val(p.extraData[u]).appendTo(k)[0]));
                    p.iframeTarget || (m.appendTo("body"), g.attachEvent ? g.attachEvent("onload", s) : g.addEventListener("load", s, !1)), setTimeout(n, 15), k.submit()
                } finally {
                    k.setAttribute("action", o), r ? k.setAttribute("target", r) : c.removeAttr("target"), t(l).remove()
                }
            }

            function s(n) {
                if (!v.aborted && !L) {
                    try {
                        A = i(g)
                    } catch (r) {
                        e("cannot access response document: ", r), n = E
                    }
                    if (n === C && v) return v.abort("timeout"), S.reject(v, "timeout"), void 0;
                    if (n == E && v) return v.abort("server abort"), S.reject(v, "error", "server abort"), void 0;
                    if (A && A.location.href != p.iframeSrc || b) {
                        g.detachEvent ? g.detachEvent("onload", s) : g.removeEventListener("load", s, !1);
                        var o, a = "success";
                        try {
                            if (b) throw "timeout";
                            var l = "xml" == p.dataType || A.XMLDocument || t.isXMLDoc(A);
                            if (e("isXml=" + l), !l && window.opera && (null === A.body || !A.body.innerHTML) && --D) return e("requeing onLoad callback, DOM not available"), setTimeout(s, 250), void 0;
                            var u = A.body ? A.body : A.documentElement;
                            v.responseText = u ? u.innerHTML : null, v.responseXML = A.XMLDocument ? A.XMLDocument : A, l && (p.dataType = "xml"), v.getResponseHeader = function (t) {
                                var e = {
                                    "content-type": p.dataType
                                };
                                return e[t]
                            }, u && (v.status = Number(u.getAttribute("status")) || v.status, v.statusText = u.getAttribute("statusText") || v.statusText);
                            var c = (p.dataType || "").toLowerCase(),
                                d = /(json|script|text)/.test(c);
                            if (d || p.textarea) {
                                var f = A.getElementsByTagName("textarea")[0];
                                if (f) v.responseText = f.value, v.status = Number(f.getAttribute("status")) || v.status, v.statusText = f.getAttribute("statusText") || v.statusText;
                                else if (d) {
                                    var y = A.getElementsByTagName("pre")[0],
                                        w = A.getElementsByTagName("body")[0];
                                    y ? v.responseText = y.textContent ? y.textContent : y.innerText : w && (v.responseText = w.textContent ? w.textContent : w.innerText)
                                }
                            } else "xml" == c && !v.responseXML && v.responseText && (v.responseXML = O(v.responseText));
                            try {
                                P = R(v, c, p)
                            } catch (n) {
                                a = "parsererror", v.error = o = n || a
                            }
                        } catch (n) {
                            e("error caught: ", n), a = "error", v.error = o = n || a
                        }
                        v.aborted && (e("upload aborted"), a = null), v.status && (a = v.status >= 200 && 300 > v.status || 304 === v.status ? "success" : "error"), "success" === a ? (p.success && p.success.call(p.context, P, "success", v), S.resolve(v.responseText, "success", v), h && t.event.trigger("ajaxSuccess", [v, p])) : a && (void 0 === o && (o = v.statusText), p.error && p.error.call(p.context, v, a, o), S.reject(v, "error", o), h && t.event.trigger("ajaxError", [v, p, o])), h && t.event.trigger("ajaxComplete", [v, p]), h && !--t.active && t.event.trigger("ajaxStop"), p.complete && p.complete.call(p.context, v, a), L = !0, p.timeout && clearTimeout(_), setTimeout(function () {
                            p.iframeTarget || m.remove(), v.responseXML = null
                        }, 100)
                    }
                }
            }
            var l, u, p, h, d, m, g, v, y, w, b, _, k = c[0],
                x = !! t.fn.prop,
                S = t.Deferred();
            if (t("[name=submit],[id=submit]", k).length) return alert('Error: Form elements must not have name or id of "submit".'), S.reject(), S;
            if (n)
                for (u = 0; f.length > u; u++) l = t(f[u]), x ? l.prop("disabled", !1) : l.removeAttr("disabled");
            if (p = t.extend(!0, {}, t.ajaxSettings, r), p.context = p.context || p, d = "jqFormIO" + (new Date).getTime(), p.iframeTarget ? (m = t(p.iframeTarget), w = m.attr("name"), w ? d = w : m.attr("name", d)) : (m = t('<iframe name="' + d + '" src="' + p.iframeSrc + '" />'), m.css({
                position: "absolute",
                top: "-1000px",
                left: "-1000px"
            })), g = m[0], v = {
                aborted: 0,
                responseText: null,
                responseXML: null,
                status: 0,
                statusText: "n/a",
                getAllResponseHeaders: function () {},
                getResponseHeader: function () {},
                setRequestHeader: function () {},
                abort: function (n) {
                    var r = "timeout" === n ? "timeout" : "aborted";
                    e("aborting upload... " + r), this.aborted = 1;
                    try {
                        g.contentWindow.document.execCommand && g.contentWindow.document.execCommand("Stop")
                    } catch (i) {}
                    m.attr("src", p.iframeSrc), v.error = r, p.error && p.error.call(p.context, v, r, n), h && t.event.trigger("ajaxError", [v, p, r]), p.complete && p.complete.call(p.context, v, r)
                }
            }, h = p.global, h && 0 === t.active++ && t.event.trigger("ajaxStart"), h && t.event.trigger("ajaxSend", [v, p]), p.beforeSend && p.beforeSend.call(p.context, v, p) === !1) return p.global && t.active--, S.reject(), S;
            if (v.aborted) return S.reject(), S;
            y = k.clk, y && (w = y.name, w && !y.disabled && (p.extraData = p.extraData || {}, p.extraData[w] = y.value, "image" == y.type && (p.extraData[w + ".x"] = k.clk_x, p.extraData[w + ".y"] = k.clk_y)));
            var C = 1,
                E = 2,
                T = t("meta[name=csrf-token]").attr("content"),
                $ = t("meta[name=csrf-param]").attr("content");
            $ && T && (p.extraData = p.extraData || {}, p.extraData[$] = T), p.forceSync ? o() : setTimeout(o, 10);
            var P, A, L, D = 50,
                O = t.parseXML || function (t, e) {
                    return window.ActiveXObject ? (e = new ActiveXObject("Microsoft.XMLDOM"), e.async = "false", e.loadXML(t)) : e = (new DOMParser).parseFromString(t, "text/xml"), e && e.documentElement && "parsererror" != e.documentElement.nodeName ? e : null
                }, I = t.parseJSON || function (t) {
                    return window.eval("(" + t + ")")
                }, R = function (e, n, r) {
                    var i = e.getResponseHeader("content-type") || "",
                        o = "xml" === n || !n && i.indexOf("xml") >= 0,
                        s = o ? e.responseXML : e.responseText;
                    return o && "parsererror" === s.documentElement.nodeName && t.error && t.error("parsererror"), r && r.dataFilter && (s = r.dataFilter(s, n)), "string" == typeof s && ("json" === n || !n && i.indexOf("json") >= 0 ? s = I(s) : ("script" === n || !n && i.indexOf("javascript") >= 0) && t.globalEval(s)), s
                };
            return S
        }
        if (!this.length) return e("ajaxSubmit: skipping submit process - no element selected"), this;
        var a, l, u, c = this;
        "function" == typeof r && (r = {
            success: r
        }), a = this.attr("method"), l = this.attr("action"), u = "string" == typeof l ? t.trim(l) : "", u = u || window.location.href || "", u && (u = (u.match(/^([^#]+)/) || [])[1]), r = t.extend(!0, {
            url: u,
            success: t.ajaxSettings.success,
            type: a || "GET",
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, r);
        var p = {};
        if (this.trigger("form-pre-serialize", [this, r, p]), p.veto) return e("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
        if (r.beforeSerialize && r.beforeSerialize(this, r) === !1) return e("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
        var h = r.traditional;
        void 0 === h && (h = t.ajaxSettings.traditional);
        var d, f = [],
            m = this.formToArray(r.semantic, f);
        if (r.data && (r.extraData = r.data, d = t.param(r.data, h)), r.beforeSubmit && r.beforeSubmit(m, this, r) === !1) return e("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
        if (this.trigger("form-submit-validate", [m, this, r, p]), p.veto) return e("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
        var g = t.param(m, h);
        d && (g = g ? g + "&" + d : d), "GET" == r.type.toUpperCase() ? (r.url += (r.url.indexOf("?") >= 0 ? "&" : "?") + g, r.data = null) : r.data = g;
        var v = [];
        if (r.resetForm && v.push(function () {
            c.resetForm()
        }), r.clearForm && v.push(function () {
            c.clearForm(r.includeHidden)
        }), !r.dataType && r.target) {
            var y = r.success || function () {};
            v.push(function (e) {
                var n = r.replaceTarget ? "replaceWith" : "html";
                t(r.target)[n](e).each(y, arguments)
            })
        } else r.success && v.push(r.success);
        r.success = function (t, e, n) {
            for (var i = r.context || this, o = 0, s = v.length; s > o; o++) v[o].apply(i, [t, e, n || c, c])
        };
        var w = t('input[type=file]:enabled[value!=""]', this),
            b = w.length > 0,
            _ = "multipart/form-data",
            k = c.attr("enctype") == _ || c.attr("encoding") == _,
            x = n.fileapi && n.formdata;
        e("fileAPI :" + x);
        var S, C = (b || k) && !x;
        r.iframe !== !1 && (r.iframe || C) ? r.closeKeepAlive ? t.get(r.closeKeepAlive, function () {
            S = s(m)
        }) : S = s(m) : S = (b || k) && x ? o(m) : t.ajax(r), c.removeData("jqxhr").data("jqxhr", S);
        for (var E = 0; f.length > E; E++) f[E] = null;
        return this.trigger("form-submit-notify", [this, r]), this
    }, t.fn.formToArray = function (e, r) {
        var i = [];
        if (0 === this.length) return i;
        var o = this[0],
            s = e ? o.getElementsByTagName("*") : o.elements;
        if (!s) return i;
        var a, l, u, c, p, h, d;
        for (a = 0, h = s.length; h > a; a++)
            if (p = s[a], u = p.name)
                if (e && o.clk && "image" == p.type) p.disabled || o.clk != p || (i.push({
                    name: u,
                    value: t(p).val(),
                    type: p.type
                }), i.push({
                    name: u + ".x",
                    value: o.clk_x
                }, {
                    name: u + ".y",
                    value: o.clk_y
                }));
                else if (c = t.fieldValue(p, !0), c && c.constructor == Array)
            for (r && r.push(p), l = 0, d = c.length; d > l; l++) i.push({
                name: u,
                value: c[l]
            });
        else if (n.fileapi && "file" == p.type && !p.disabled) {
            r && r.push(p);
            var f = p.files;
            if (f.length)
                for (l = 0; f.length > l; l++) i.push({
                    name: u,
                    value: f[l],
                    type: p.type
                });
            else i.push({
                name: u,
                value: "",
                type: p.type
            })
        } else null !== c && c !== void 0 && (r && r.push(p), i.push({
            name: u,
            value: c,
            type: p.type,
            required: p.required
        })); if (!e && o.clk) {
            var m = t(o.clk),
                g = m[0];
            u = g.name, u && !g.disabled && "image" == g.type && (i.push({
                name: u,
                value: m.val()
            }), i.push({
                name: u + ".x",
                value: o.clk_x
            }, {
                name: u + ".y",
                value: o.clk_y
            }))
        }
        return i
    }, t.fn.formSerialize = function (e) {
        return t.param(this.formToArray(e))
    }, t.fn.fieldSerialize = function (e) {
        var n = [];
        return this.each(function () {
            var r = this.name;
            if (r) {
                var i = t.fieldValue(this, e);
                if (i && i.constructor == Array)
                    for (var o = 0, s = i.length; s > o; o++) n.push({
                        name: r,
                        value: i[o]
                    });
                else null !== i && i !== void 0 && n.push({
                    name: this.name,
                    value: i
                })
            }
        }), t.param(n)
    }, t.fn.fieldValue = function (e) {
        for (var n = [], r = 0, i = this.length; i > r; r++) {
            var o = this[r],
                s = t.fieldValue(o, e);
            null === s || void 0 === s || s.constructor == Array && !s.length || (s.constructor == Array ? t.merge(n, s) : n.push(s))
        }
        return n
    }, t.fieldValue = function (e, n) {
        var r = e.name,
            i = e.type,
            o = e.tagName.toLowerCase();
        if (void 0 === n && (n = !0), n && (!r || e.disabled || "reset" == i || "button" == i || ("checkbox" == i || "radio" == i) && !e.checked || ("submit" == i || "image" == i) && e.form && e.form.clk != e || "select" == o && -1 == e.selectedIndex)) return null;
        if ("select" == o) {
            var s = e.selectedIndex;
            if (0 > s) return null;
            for (var a = [], l = e.options, u = "select-one" == i, c = u ? s + 1 : l.length, p = u ? s : 0; c > p; p++) {
                var h = l[p];
                if (h.selected) {
                    var d = h.value;
                    if (d || (d = h.attributes && h.attributes.value && !h.attributes.value.specified ? h.text : h.value), u) return d;
                    a.push(d)
                }
            }
            return a
        }
        return t(e).val()
    }, t.fn.clearForm = function (e) {
        return this.each(function () {
            t("input,select,textarea", this).clearFields(e)
        })
    }, t.fn.clearFields = t.fn.clearInputs = function (e) {
        var n = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function () {
            var r = this.type,
                i = this.tagName.toLowerCase();
            n.test(r) || "textarea" == i ? this.value = "" : "checkbox" == r || "radio" == r ? this.checked = !1 : "select" == i ? this.selectedIndex = -1 : "file" == r ? t.browser.msie ? t(this).replaceWith(t(this).clone()) : t(this).val("") : e && (e === !0 && /hidden/.test(r) || "string" == typeof e && t(this).is(e)) && (this.value = "")
        })
    }, t.fn.resetForm = function () {
        return this.each(function () {
            ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
        })
    }, t.fn.enable = function (t) {
        return void 0 === t && (t = !0), this.each(function () {
            this.disabled = !t
        })
    }, t.fn.selected = function (e) {
        return void 0 === e && (e = !0), this.each(function () {
            var n = this.type;
            if ("checkbox" == n || "radio" == n) this.checked = e;
            else if ("option" == this.tagName.toLowerCase()) {
                var r = t(this).parent("select");
                e && r[0] && "select-one" == r[0].type && r.find("option").selected(!1), this.selected = e
            }
        })
    }, t.fn.ajaxSubmit.debug = !1
}(jQuery),
function (t) {
    var e = /[^\[\]]+/g,
        n = function (e) {
            return t.isNumeric(e) ? parseFloat(e) : "true" === e ? !0 : "false" === e ? !1 : "" === e ? void 0 : e
        }, r = function (e, n, i, o, s, a, l) {
            var u = o.shift();
            if (l = l ? l + "." + u : u, o.length) i[u] || (i[u] = {}), r(e, n, i[u], o, s, a, l);
            else {
                if (l in a && "radio" != n && !t.isArray(i[u]) ? i[u] = u in i ? [i[u]] : [] : a[l] = !0, ("radio" == n || "checkbox" == n) && !e.is(":checked")) return;
                i[u] ? i[u].push(s) : i[u] = s
            }
        };
    t.fn.extend({
        formParams: function (t) {
            var e;
            return !!t === t && (e = t, t = null), t ? this.setParams(t) : this.getParams(e)
        },
        setParams: function (e) {
            this.find("[name]").each(function () {
                var n, r = e[t(this).attr("name")];
                void 0 !== r && (n = t(this), n.is(":radio") ? n.val() == r && n.attr("checked", !0) : n.is(":checkbox") ? (r = t.isArray(r) ? r : [r], t.inArray(n.val(), r) > -1 && n.attr("checked", !0)) : n.val(r))
            })
        },
        getParams: function (i) {
            var o = {}, s = {};
            return this.find("[name]:not(:disabled)").each(function () {
                var a, l = t(this),
                    u = l.attr("type"),
                    c = l.attr("name"),
                    p = l.val();
                "submit" != u && c && (a = c.match(e), a.length || (a = [c]), i && (p = n(p)), r(l, u, o, a, p, s))
            }), o
        }
    })
}(jQuery),
function (t) {
    var e = {
        verticalOffset: 10,
        horizontalOffset: 10,
        title: !1,
        content: !1,
        url: !1,
        classes: "",
        position: "auto",
        fadeSpeed: 160,
        trigger: "click",
        preventDefault: !0,
        stopChildrenPropagation: !0,
        hideOnHTMLClick: !0,
        animateChange: !0,
        autoReposition: !0,
        anchor: !1
    }, n = [],
        r = {
            calc_position: function (e, n) {
                var r, i, o = e.popover("getData"),
                    s = o.options,
                    a = s.anchor ? t(s.anchor) : e,
                    l = o.popover,
                    u = a.offset();
                return "top" == n ? (r = u.top - l.outerHeight(), i = u.left - l.outerWidth() / 2 + a.outerWidth() / 2) : "right" == n ? (r = u.top + a.outerHeight() / 2 - l.outerHeight() / 2, i = u.left + a.outerWidth()) : "left" == n ? (r = u.top + a.outerHeight() / 2 - l.outerHeight() / 2, i = u.left - l.outerWidth()) : (r = u.top + a.outerHeight(), i = u.left - l.outerWidth() / 2 + a.outerWidth() / 2), x2 = i + l.outerWidth(), y2 = r + l.outerHeight(), ret = {
                    x1: i,
                    x2: x2,
                    y1: r,
                    y2: y2
                }
            },
            pop_position_class: function (t, e) {
                var n = "popover-top popover-right popover-left",
                    r = "top-arrow",
                    i = "right-arrow bottom-arrow left-arrow";
                "top" == e ? (n = "popover-right popover-bottom popover-left", r = "bottom-arrow", i = "top-arrow right-arrow left-arrow") : "right" == e ? (n = "popover-yop popover-bottom popover-left", r = "left-arrow", i = "top-arrow right-arrow bottom-arrow") : "left" == e && (n = "popover-top popover-right popover-bottom", r = "right-arrow", i = "top-arrow bottom-arrow left-arrow"), t.removeClass(n).addClass("popover-" + e).find(".arrow").removeClass(i).addClass(r)
            }
        }, i = {
            init: function (r) {
                return this.each(function () {
                    var i = t.extend({}, e, r),
                        o = t(this),
                        s = o.popover("getData");
                    if (!s) {
                        var a = t('<div class="popover" />').addClass(i.classes).append('<div class="arrow" />').append('<div class="wrap"></div>').appendTo("body").hide();
                        i.stopChildrenPropagation && a.children().bind("click.popover", function (t) {
                            t.stopPropagation()
                        }), o.bind("click.popover", function (t) {
                            i.preventDefault && t.preventDefault(), t.stopPropagation()
                        }), i.anchor && !i.anchor instanceof jQuery && (i.anchor = t(i.anchor));
                        var s = {
                            target: o,
                            popover: a,
                            options: i
                        };
                        if (i.title && t('<div class="title" />').html(i.title instanceof jQuery ? i.title.html() : i.title).appendTo(a.find(".wrap")), i.content && t('<div class="content" />').html(i.content instanceof jQuery ? i.content.html() : i.content).appendTo(a.find(".wrap")), o.data("popover", s), n.push(o), i.url && o.popover("ajax", i.url), o.popover("reposition"), o.popover("setTrigger", i.trigger), i.hideOnHTMLClick) {
                            var l = "click.popover";
                            "ontouchstart" in document.documentElement && (l = "touchstart.popover"), t("html").unbind(l).bind(l, function () {
                                t("html").popover("fadeOutAll")
                            })
                        }
                        if (i.autoReposition) {
                            var u = function () {
                                o.popover("reposition")
                            };
                            t(window).unbind("resize.popover").bind("resize.popover", u).unbind("scroll.popover").bind("scroll.popover", u)
                        }
                    }
                })
            },
            reposition: function () {
                return this.each(function () {
                    var e = t(this),
                        n = e.popover("getData");
                    if (n) {
                        var i = n.popover,
                            o = n.options,
                            s = o.anchor ? t(o.anchor) : e;
                        s.offset();
                        var a = o.position;
                        "top" != a && "right" != a && "left" != a && "auto" != a && (a = "bottom");
                        var l;
                        if ("auto" == a) {
                            var u = ["bottom", "left", "top", "right"],
                                c = t(window).scrollTop(),
                                p = t(window).scrollLeft(),
                                h = t(window).outerHeight(),
                                d = t(window).outerWidth();
                            if (t.each(u, function (t, n) {
                                l = r.calc_position(e, n);
                                var i = l.x1 - p,
                                    s = l.x2 - p + o.horizontalOffset,
                                    u = l.y1 - c,
                                    f = l.y2 - c + o.verticalOffset;
                                return 0 > i || 0 > s || 0 > u || 0 > f ? !0 : f > h ? !0 : s > d ? !0 : (a = n, !1)
                            }), "auto" == a) return
                        }
                        l = r.calc_position(e, a), l.top, l.left, r.pop_position_class(i, a);
                        var f = 0,
                            m = 0;
                        "bottom" == a && (f = o.verticalOffset), "top" == a && (f = -o.verticalOffset), "right" == a && (m = o.horizontalOffset), "left" == a && (m = -o.horizontalOffset);
                        var g = {
                            left: l.x1,
                            top: l.y1,
                            marginTop: f,
                            marginLeft: m
                        };
                        n.initd && o.animateChange ? i.css(g) : (n.initd = !0, i.css(g)), e.data("popover", n)
                    }
                })
            },
            destroy: function () {
                return this.each(function () {
                    var e = t(this),
                        n = e.popover("getData");
                    e.unbind(".popover"), t(window).unbind(".popover"), n.popover.remove(), e.removeData("popover")
                })
            },
            show: function () {
                return this.each(function () {
                    var e = t(this),
                        n = e.popover("getData");
                    if (n) {
                        var r = n.popover;
                        e.popover("reposition"), r.clearQueue().css({
                            zIndex: 950
                        }).show(), e.trigger("show.popover", r)
                    }
                })
            },
            hide: function () {
                return this.each(function () {
                    var e = t(this),
                        n = e.popover("getData");
                    n && n.popover.hide().css({
                        zIndex: 949
                    })
                })
            },
            fadeOut: function (e) {
                return this.each(function () {
                    var n = t(this),
                        r = n.popover("getData");
                    if (r) {
                        var i = r.popover,
                            o = r.options;
                        i.delay(100).css({
                            zIndex: 949
                        }).fadeOut(e ? e : o.fadeSpeed)
                    }
                })
            },
            hideAll: function () {
                return t.each(n, function () {
                    var e = t(this),
                        n = e.popover("getData");
                    if (n) {
                        var r = n.popover;
                        r.hide()
                    }
                })
            },
            fadeOutAll: function (e) {
                return t.each(n, function () {
                    var n = t(this),
                        r = n.popover("getData");
                    if (r) {
                        var i = r.popover,
                            o = r.options;
                        i.css({
                            zIndex: 949
                        }).fadeOut(e ? e : o.fadeSpeed)
                    }
                })
            },
            setTrigger: function (e) {
                return this.each(function () {
                    var n = t(this),
                        r = n.popover("getData");
                    if (r) {
                        var i = r.popover,
                            o = r.options,
                            s = o.anchor ? t(o.anchor) : n;
                        "click" === e ? (s.unbind("click").bind("click", function (t) {
                            t.preventDefault(), t.stopPropagation(), n.popover("show")
                        }), i.unbind("click.popover").bind("click.popover", function (t) {
                            t.stopPropagation()
                        })) : (s.unbind("click"), i.unbind("click.popover")), "hover" === e ? (s.add(i).bind("mousemove.popover", function () {
                            n.popover("show")
                        }), s.add(i).bind("mouseleave.popover", function () {
                            n.popover("fadeOut")
                        })) : s.add(i).unbind("mousemove.popover").unbind("mouseleave.popover"), "focus" === e ? (s.add(i).bind("focus.popover", function () {
                            n.popover("show")
                        }), s.add(i).bind("blur.popover", function () {
                            n.popover("fadeOut")
                        }), s.bind("click.popover", function (t) {
                            t.stopPropagation()
                        })) : s.add(i).unbind("focus.popover").unbind("blur.popover").unbind("click.popover")
                    }
                })
            },
            title: function (e) {
                return this.each(function () {
                    var n = t(this),
                        r = n.popover("getData");
                    if (r) {
                        var i = r.popover.find(".title"),
                            o = r.popover.find(".wrap");
                        0 === i.length && (i = t('<div class="title" />').appendTo(o)), i.html(e)
                    }
                })
            },
            content: function (e) {
                return this.each(function () {
                    var n = t(this),
                        r = n.popover("getData");
                    if (r) {
                        var i = r.popover.find(".content"),
                            o = r.popover.find(".wrap");
                        0 === i.length && (i = t('<div class="content" />').appendTo(o)), i.html(e)
                    }
                })
            },
            ajax: function (e, n) {
                return this.each(function () {
                    var r = t(this),
                        i = r.popover("getData");
                    if (i) {
                        var o = {
                            url: e,
                            success: function (e) {
                                var n = i.popover.find(".content"),
                                    r = i.popover.find(".wrap");
                                0 === n.length && (n = t('<div class="content" />').appendTo(r)), n.html(e)
                            }
                        }, s = t.extend({}, o, n);
                        t.ajax(s)
                    }
                })
            },
            setOption: function (e, n) {
                return this.each(function () {
                    var r = t(this),
                        i = r.popover("getData");
                    i && (i.options[e] = n, r.data("popover", i))
                })
            },
            getData: function () {
                var e = [];
                return this.each(function () {
                    var n = t(this),
                        r = n.data("popover");
                    r && e.push(r)
                }), 0 != e.length ? (1 == e.length && (e = e[0]), e) : void 0
            }
        };
    t.fn.popover = function (e) {
        return i[e] ? i[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? (t.error("Method " + e + " does not exist on jQuery.popover"), void 0) : i.init.apply(this, arguments)
    }
}(jQuery),
function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function (t) {
    function e() {
        var e = n(this);
        return isNaN(e.datetime) || t(this).text(r(e.datetime)), this
    }

    function n(e) {
        if (e = t(e), !e.data("timeago")) {
            e.data("timeago", {
                datetime: o.datetime(e)
            });
            var n = t.trim(e.text());
            !(n.length > 0) || o.isTime(e) && e.attr("title") || e.attr("title", n)
        }
        return e.data("timeago")
    }

    function r(t) {
        return o.inWords(i(t))
    }

    function i(t) {
        return (new Date).getTime() - t.getTime()
    }
    t.timeago = function (e) {
        return e instanceof Date ? r(e) : "string" == typeof e ? r(t.timeago.parse(e)) : "number" == typeof e ? r(new Date(e)) : r(t.timeago.datetime(e))
    };
    var o = t.timeago;
    t.extend(t.timeago, {
        settings: {
            refreshMillis: 6e4,
            allowFuture: !1,
            strings: {
                prefixAgo: null,
                prefixFromNow: null,
                suffixAgo: "ago",
                suffixFromNow: "from now",
                seconds: "less than a minute",
                minute: "about a minute",
                minutes: "%d minutes",
                hour: "about an hour",
                hours: "about %d hours",
                day: "a day",
                days: "%d days",
                month: "about a month",
                months: "%d months",
                year: "about a year",
                years: "%d years",
                wordSeparator: " ",
                numbers: []
            }
        },
        inWords: function (e) {
            function n(n, i) {
                var o = t.isFunction(n) ? n(i, e) : n,
                    s = r.numbers && r.numbers[i] || i;
                return o.replace(/%d/i, s)
            }
            var r = this.settings.strings,
                i = r.prefixAgo,
                o = r.suffixAgo;
            this.settings.allowFuture && 0 > e && (i = r.prefixFromNow, o = r.suffixFromNow);
            var s = Math.abs(e) / 1e3,
                a = s / 60,
                l = a / 60,
                u = l / 24,
                c = u / 365,
                p = 45 > s && n(r.seconds, Math.round(s)) || 90 > s && n(r.minute, 1) || 45 > a && n(r.minutes, Math.round(a)) || 90 > a && n(r.hour, 1) || 24 > l && n(r.hours, Math.round(l)) || 42 > l && n(r.day, 1) || 30 > u && n(r.days, Math.round(u)) || 45 > u && n(r.month, 1) || 365 > u && n(r.months, Math.round(u / 30)) || 1.5 > c && n(r.year, 1) || n(r.years, Math.round(c)),
                h = r.wordSeparator || "";
            return void 0 === r.wordSeparator && (h = " "), t.trim([i, p, o].join(h))
        },
        parse: function (e) {
            var n = t.trim(e);
            return n = n.replace(/\.\d+/, ""), n = n.replace(/-/, "/").replace(/-/, "/"), n = n.replace(/T/, " ").replace(/Z/, " UTC"), n = n.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"), new Date(n)
        },
        datetime: function (e) {
            var n = o.isTime(e) ? t(e).attr("datetime") : t(e).attr("title");
            return o.parse(n)
        },
        isTime: function (e) {
            return "time" === t(e).get(0).tagName.toLowerCase()
        }
    }), t.fn.timeago = function () {
        var t = this;
        t.each(e);
        var n = o.settings;
        return n.refreshMillis > 0 && setInterval(function () {
            t.each(e)
        }, n.refreshMillis), t
    }, document.createElement("abbr"), document.createElement("time")
}),
function (t) {
    function e(t, e) {
        for (var n = t.length; n--;)
            if (t[n] === e) return n;
        return -1
    }

    function n(t, n) {
        var r, i, s, a, l;
        if (r = t.keyCode, (93 == r || 224 == r) && (r = 91), r in d) {
            d[r] = !0;
            for (s in m) m[s] == r && (o[s] = !0)
        } else if (o.filter.call(this, t) && r in h)
            for (a = 0; h[r].length > a; a++)
                if (i = h[r][a], i.scope == n || "all" == i.scope) {
                    l = i.mods.length > 0;
                    for (s in d)(!d[s] && e(i.mods, +s) > -1 || d[s] && -1 == e(i.mods, +s)) && (l = !1);
                    (0 != i.mods.length || d[16] || d[18] || d[17] || d[91]) && !l || i.method(t, i) === !1 && (t.preventDefault ? t.preventDefault() : t.returnValue = !1, t.stopPropagation && t.stopPropagation(), t.cancelBubble && (t.cancelBubble = !0))
                }
    }

    function r(t) {
        var e, n = t.keyCode;
        if ((93 == n || 224 == n) && (n = 91), n in d) {
            d[n] = !1;
            for (e in m) m[e] == n && (o[e] = !1)
        }
    }

    function i() {
        for (p in d) d[p] = !1;
        for (p in m) o[p] = !1
    }

    function o(t, e, n) {
        var r, i, o, s;
        for (void 0 === n && (n = e, e = "all"), t = t.replace(/\s/g, ""), r = t.split(","), "" == r[r.length - 1] && (r[r.length - 2] += ","), o = 0; r.length > o; o++) {
            if (i = [], t = r[o].split("+"), t.length > 1) {
                for (i = t.slice(0, t.length - 1), s = 0; i.length > s; s++) i[s] = m[i[s]];
                t = [t[t.length - 1]]
            }
            t = t[0], t = g[t] || t.toUpperCase().charCodeAt(0), t in h || (h[t] = []), h[t].push({
                shortcut: r[o],
                scope: e,
                method: n,
                key: r[o],
                mods: i
            })
        }
    }

    function s(t) {
        var e = (t.target || t.srcElement).tagName;
        return !("INPUT" == e || "SELECT" == e || "TEXTAREA" == e)
    }

    function a(t) {
        f = t || "all"
    }

    function l() {
        return f || "all"
    }

    function u(t) {
        var e, n, r;
        for (e in h)
            for (n = h[e], r = 0; n.length > r;) n[r].scope === t ? n.splice(r, 1) : r++
    }

    function c(t, e, n) {
        t.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent && t.attachEvent("on" + e, function () {
            n(window.event)
        })
    }
    var p, h = {}, d = {
            16: !1,
            18: !1,
            17: !1,
            91: !1
        }, f = "all",
        m = {
            "⇧": 16,
            shift: 16,
            "⌥": 18,
            alt: 18,
            option: 18,
            "⌃": 17,
            ctrl: 17,
            control: 17,
            "⌘": 91,
            command: 91
        }, g = {
            backspace: 8,
            tab: 9,
            clear: 12,
            enter: 13,
            "return": 13,
            esc: 27,
            escape: 27,
            space: 32,
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            del: 46,
            "delete": 46,
            home: 36,
            end: 35,
            pageup: 33,
            pagedown: 34,
            ",": 188,
            ".": 190,
            "/": 191,
            "`": 192,
            "-": 189,
            "=": 187,
            ";": 186,
            "'": 222,
            "[": 219,
            "]": 221,
            "\\": 220
        };
    for (p = 1; 20 > p; p++) m["f" + p] = 111 + p;
    for (p in m) o[p] = !1;
    c(document, "keydown", function (t) {
        n(t, f)
    }), c(document, "keyup", r), c(window, "focus", i), t.key = o, t.key.setScope = a, t.key.getScope = l, t.key.deleteScope = u, t.key.filter = s, "undefined" != typeof module && (module.exports = key)
}(this),
function (t) {
    t.fn.scrollable = function () {
        t(this).bind("mousewheel DOMMouseScroll", function (e) {
            var n = t(this),
                r = e.originalEvent.wheelDelta || -e.originalEvent.detail,
                i = n.get(0).scrollTop,
                o = n.get(0).scrollHeight,
                s = n.outerHeight();
            o !== s && (0 >= i ? r > 0 && e.preventDefault() : s + 1 >= o - i && 0 > r && e.preventDefault())
        })
    }
}(window.jQuery),
function (t) {
    t.fn.each2 === void 0 && t.fn.extend({
        each2: function (e) {
            for (var n = t([0]), r = -1, i = this.length; i > ++r && (n.context = n[0] = this[r]) && e.call(n[0], r, n) !== !1;);
            return this
        }
    })
}(jQuery),
function (t, e) {
    "use strict";

    function n(t, n) {
        var r, i = 0,
            o = n.length;
        if (t === e) return -1;
        if (t.constructor === String) {
            for (; o > i; i += 1)
                if (0 === t.localeCompare(n[i])) return i
        } else
            for (; o > i; i += 1)
                if (r = n[i], r.constructor === String) {
                    if (0 === r.localeCompare(t)) return i
                } else if (r === t) return i;
        return -1
    }

    function r(t, n) {
        return t === n ? !0 : t === e || n === e ? !1 : null === t || null === n ? !1 : t.constructor === String ? 0 === t.localeCompare(n) : n.constructor === String ? 0 === n.localeCompare(t) : !1
    }

    function i(e, n) {
        var r, i, o;
        if (null === e || 1 > e.length) return [];
        for (r = e.split(n), i = 0, o = r.length; o > i; i += 1) r[i] = t.trim(r[i]);
        return r
    }

    function o(t) {
        return t.outerWidth() - t.width()
    }

    function s(n) {
        var r = "keyup-change-value";
        n.bind("keydown", function () {
            t.data(n, r) === e && t.data(n, r, n.val())
        }), n.bind("keyup", function () {
            var i = t.data(n, r);
            i !== e && n.val() !== i && (t.removeData(n, r), n.trigger("keyup-change"))
        })
    }

    function a(n) {
        n.bind("mousemove", function (n) {
            var r = t.data(document, "select2-lastpos");
            (r === e || r.x !== n.pageX || r.y !== n.pageY) && t(n.target).trigger("mousemove-filtered", n)
        })
    }

    function l(t, n, r) {
        r = r || e;
        var i;
        return function () {
            var e = arguments;
            window.clearTimeout(i), i = window.setTimeout(function () {
                n.apply(r, e)
            }, t)
        }
    }

    function u(t) {
        var e, n = !1;
        return function () {
            return n === !1 && (e = t(), n = !0), e
        }
    }

    function c(t, e) {
        var r = l(t, function (t) {
            e.trigger("scroll-debounced", t)
        });
        e.bind("scroll", function (t) {
            n(t.target, e.get()) >= 0 && r(t)
        })
    }

    function p(t) {
        t.preventDefault(), t.stopPropagation()
    }

    function h(e) {
        if (!T) {
            var n = e[0].currentStyle || window.getComputedStyle(e[0], null);
            T = t("<div></div>").css({
                position: "absolute",
                left: "-10000px",
                top: "-10000px",
                display: "none",
                fontSize: n.fontSize,
                fontFamily: n.fontFamily,
                fontStyle: n.fontStyle,
                fontWeight: n.fontWeight,
                letterSpacing: n.letterSpacing,
                textTransform: n.textTransform,
                whiteSpace: "nowrap"
            }), t("body").append(T)
        }
        return T.text(e.val()), T.width()
    }

    function d(t, n, r) {
        var i = t.toUpperCase().indexOf(n.toUpperCase()),
            o = n.length;
        return 0 > i ? (r.push(t), e) : (r.push(t.substring(0, i)), r.push("<span class='select2-match'>"), r.push(t.substring(i, i + o)), r.push("</span>"), r.push(t.substring(i + o, t.length)), e)
    }

    function f(e) {
        var n, r = 0,
            i = null,
            o = e.quietMillis || 100;
        return function (s) {
            window.clearTimeout(n), n = window.setTimeout(function () {
                r += 1;
                var n = r,
                    o = e.data,
                    a = e.transport || t.ajax,
                    l = e.traditional || !1,
                    u = e.type || "GET";
                o = o.call(this, s.term, s.page, s.context), null !== i && i.abort(), i = a.call(null, {
                    url: e.url,
                    dataType: e.dataType,
                    data: o,
                    type: u,
                    traditional: l,
                    success: function (t) {
                        if (!(r > n)) {
                            var i = e.results(t, s.page);
                            s.callback(i)
                        }
                    }
                })
            }, o)
        }
    }

    function m(n) {
        var r, i = n,
            o = function (t) {
                return "" + t.text
            };
        return t.isArray(i) || (o = i.text, t.isFunction(o) || (r = i.text, o = function (t) {
            return t[r]
        }), i = i.results),
        function (n) {
            var r, s = n.term,
                a = {
                    results: []
                };
            return "" === s ? (n.callback({
                results: i
            }), e) : (r = function (e, i) {
                var a, l;
                if (e = e[0], e.children) {
                    a = {};
                    for (l in e) e.hasOwnProperty(l) && (a[l] = e[l]);
                    a.children = [], t(e.children).each2(function (t, e) {
                        r(e, a.children)
                    }), a.children.length && i.push(a)
                } else n.matcher(s, o(e)) && i.push(e)
            }, t(i).each2(function (t, e) {
                r(e, a.results)
            }), n.callback(a), e)
        }
    }

    function g(n) {
        return t.isFunction(n) ? n : function (r) {
            var i = r.term,
                o = {
                    results: []
                };
            t(n).each(function () {
                var t = this.text !== e,
                    n = t ? this.text : this;
                ("" === i || r.matcher(i, n)) && o.results.push(t ? this : {
                        id: this,
                        text: this
                    })
            }), r.callback(o)
        }
    }

    function v(e) {
        if (t.isFunction(e)) return !0;
        if (!e) return !1;
        throw Error("formatterName must be a function or a falsy value")
    }

    function y(e) {
        return t.isFunction(e) ? e() : e
    }

    function w(e) {
        var n = 0;
        return t.each(e, function (t, e) {
            e.children ? n += w(e.children) : n++
        }), n
    }

    function b(t, n, i, o) {
        var s, a, l, u, c, p = t,
            h = !1;
        if (!o.createSearchChoice || !o.tokenSeparators || 1 > o.tokenSeparators.length) return e;
        for (;;) {
            for (a = -1, l = 0, u = o.tokenSeparators.length; u > l && (c = o.tokenSeparators[l], a = t.indexOf(c), !(a >= 0)); l++);
            if (0 > a) break;
            if (s = t.substring(0, a), t = t.substring(a + c.length), s.length > 0 && (s = o.createSearchChoice(s, n), s !== e && null !== s && o.id(s) !== e && null !== o.id(s))) {
                for (h = !1, l = 0, u = n.length; u > l; l++)
                    if (r(o.id(s), o.id(n[l]))) {
                        h = !0;
                        break
                    }
                h || i(s)
            }
        }
        return 0 != p.localeCompare(t) ? t : e
    }

    function _(e, n) {
        var r = function () {};
        return r.prototype = new e, r.prototype.constructor = r, r.prototype.parent = e.prototype, r.prototype = t.extend(r.prototype, n), r
    }
    if (window.Select2 === e) {
        var k, x, S, C, E, T;
        k = {
            TAB: 9,
            ENTER: 13,
            ESC: 27,
            SPACE: 32,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            SHIFT: 16,
            CTRL: 17,
            ALT: 18,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            HOME: 36,
            END: 35,
            BACKSPACE: 8,
            DELETE: 46,
            isArrow: function (t) {
                switch (t = t.which ? t.which : t) {
                case k.LEFT:
                case k.RIGHT:
                case k.UP:
                case k.DOWN:
                    return !0
                }
                return !1
            },
            isControl: function (t) {
                var e = t.which;
                switch (e) {
                case k.SHIFT:
                case k.CTRL:
                case k.ALT:
                    return !0
                }
                return t.metaKey ? !0 : !1
            },
            isFunctionKey: function (t) {
                return t = t.which ? t.which : t, t >= 112 && 123 >= t
            }
        }, E = function () {
            var t = 1;
            return function () {
                return t++
            }
        }(), t(document).delegate("body", "mousemove", function (e) {
            t.data(document, "select2-lastpos", {
                x: e.pageX,
                y: e.pageY
            })
        }), t(document).ready(function () {
            t(document).delegate("body", "mousedown touchend", function (n) {
                var r, i = t(n.target).closest("div.select2-container").get(0);
                i ? t(document).find("div.select2-container-active").each(function () {
                    this !== i && t(this).data("select2").blur()
                }) : (i = t(n.target).closest("div.select2-drop").get(0), t(document).find("div.select2-drop-active").each(function () {
                    this !== i && t(this).data("select2").blur()
                })), i = t(n.target), r = i.attr("for"), "LABEL" === n.target.tagName && r && r.length > 0 && (i = t("#" + r), i = i.data("select2"), i !== e && (i.focus(), n.preventDefault()))
            })
        }), x = _(Object, {
            bind: function (t) {
                var e = this;
                return function () {
                    t.apply(e, arguments)
                }
            },
            init: function (n) {
                var r, i, o = ".select2-results";
                this.opts = n = this.prepareOpts(n), this.id = n.id, n.element.data("select2") !== e && null !== n.element.data("select2") && this.destroy(), this.enabled = !0, this.container = this.createContainer(), this.containerId = "s2id_" + (n.element.attr("id") || "autogen" + E()), this.containerSelector = "#" + this.containerId.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1"), this.container.attr("id", this.containerId), this.body = u(function () {
                    return n.element.closest("body")
                }), n.element.attr("class") !== e && this.container.addClass(n.element.attr("class").replace(/validate\[[\S ]+] ?/, "")), this.container.css(y(n.containerCss)), this.container.addClass(y(n.containerCssClass)), this.opts.element.data("select2", this).hide().before(this.container), this.container.data("select2", this), this.dropdown = this.container.find(".select2-drop"), this.dropdown.addClass(y(n.dropdownCssClass)), this.dropdown.data("select2", this), this.results = r = this.container.find(o), this.search = i = this.container.find("input.select2-input"), i.attr("tabIndex", this.opts.element.attr("tabIndex")), this.resultsPage = 0, this.context = null, this.initContainer(), this.initContainerWidth(), a(this.results), this.dropdown.delegate(o, "mousemove-filtered", this.bind(this.highlightUnderEvent)), c(80, this.results), this.dropdown.delegate(o, "scroll-debounced", this.bind(this.loadMoreIfNeeded)), t.fn.mousewheel && r.mousewheel(function (t, e, n, i) {
                    var o = r.scrollTop();
                    i > 0 && 0 >= o - i ? (r.scrollTop(0), p(t)) : 0 > i && r.get(0).scrollHeight - r.scrollTop() + i <= r.height() && (r.scrollTop(r.get(0).scrollHeight - r.height()), p(t))
                }), s(i), i.bind("keyup-change", this.bind(this.updateResults)), i.bind("focus", function () {
                    i.addClass("select2-focused"), " " === i.val() && i.val("")
                }), i.bind("blur", function () {
                    i.removeClass("select2-focused")
                }), this.dropdown.delegate(o, "mouseup", this.bind(function (e) {
                    t(e.target).closest(".select2-result-selectable:not(.select2-disabled)").length > 0 ? (this.highlightUnderEvent(e), this.selectHighlighted(e)) : this.focusSearch(), p(e)
                })), this.dropdown.bind("click mouseup mousedown", function (t) {
                    t.stopPropagation()
                }), t.isFunction(this.opts.initSelection) && (this.initSelection(), this.monitorSource()), (n.element.is(":disabled") || n.element.is("[readonly='readonly']")) && this.disable()
            },
            destroy: function () {
                var t = this.opts.element.data("select2");
                t !== e && (t.container.remove(), t.dropdown.remove(), t.opts.element.removeData("select2").unbind(".select2").show())
            },
            prepareOpts: function (n) {
                var o, s, a, l;
                if (o = n.element, "select" === o.get(0).tagName.toLowerCase() && (this.select = s = n.element), s && t.each(["id", "multiple", "ajax", "query", "createSearchChoice", "initSelection", "data", "tags"], function () {
                    if (this in n) throw Error("Option '" + this + "' is not allowed for Select2 when attached to a <select> element.")
                }), n = t.extend({}, {
                    populateResults: function (r, i, o) {
                        var s, a = this.opts.id,
                            l = this;
                        s = function (r, i, u) {
                            var c, p, h, d, f, m, g, v, y;
                            for (c = 0, p = r.length; p > c; c += 1) h = r[c], d = a(h) !== e, f = h.children && h.children.length > 0, m = t("<li></li>"), m.addClass("select2-results-dept-" + u), m.addClass("select2-result"), m.addClass(d ? "select2-result-selectable" : "select2-result-unselectable"), f && m.addClass("select2-result-with-children"), m.addClass(l.opts.formatResultCssClass(h)), g = t("<div></div>"), g.addClass("select2-result-label"), y = n.formatResult(h, g, o), y !== e && g.html(l.opts.escapeMarkup(y)), m.append(g), f && (v = t("<ul></ul>"), v.addClass("select2-result-sub"), s(h.children, v, u + 1), m.append(v)), m.data("select2-data", h), i.append(m)
                        }, s(i, r, 0)
                    }
                }, t.fn.select2.defaults, n), "function" != typeof n.id && (a = n.id, n.id = function (t) {
                    return t[a]
                }), s ? (n.query = this.bind(function (n) {
                    var r, i, s, a = {
                            results: [],
                            more: !1
                        }, l = n.term;
                    s = function (t, e) {
                        var r;
                        t.is("option") ? n.matcher(l, t.text(), t) && e.push({
                            id: t.attr("value"),
                            text: t.text(),
                            element: t.get(),
                            css: t.attr("class")
                        }) : t.is("optgroup") && (r = {
                            text: t.attr("label"),
                            children: [],
                            element: t.get(),
                            css: t.attr("class")
                        }, t.children().each2(function (t, e) {
                            s(e, r.children)
                        }), r.children.length > 0 && e.push(r))
                    }, r = o.children(), this.getPlaceholder() !== e && r.length > 0 && (i = r[0], "" === t(i).text() && (r = r.not(i))), r.each2(function (t, e) {
                        s(e, a.results)
                    }), n.callback(a)
                }), n.id = function (t) {
                    return t.id
                }, n.formatResultCssClass = function (t) {
                    return t.css
                }) : "query" in n || ("ajax" in n ? (l = n.element.data("ajax-url"), l && l.length > 0 && (n.ajax.url = l), n.query = f(n.ajax)) : "data" in n ? n.query = m(n.data) : "tags" in n && (n.query = g(n.tags), n.createSearchChoice = function (t) {
                    return {
                        id: t,
                        text: t
                    }
                }, n.initSelection = function (o, s) {
                    var a = [];
                    t(i(o.val(), n.separator)).each(function () {
                        var i = this,
                            o = this,
                            s = n.tags;
                        t.isFunction(s) && (s = s()), t(s).each(function () {
                            return r(this.id, i) ? (o = this.text, !1) : e
                        }), a.push({
                            id: i,
                            text: o
                        })
                    }), s(a)
                })), "function" != typeof n.query) throw "query function not defined for Select2 " + n.element.attr("id");
                return n
            },
            monitorSource: function () {
                this.opts.element.bind("change.select2", this.bind(function () {
                    this.opts.element.data("select2-change-triggered") !== !0 && this.initSelection()
                }))
            },
            triggerChange: function (e) {
                e = e || {}, e = t.extend({}, e, {
                    type: "change",
                    val: this.val()
                }), this.opts.element.data("select2-change-triggered", !0), this.opts.element.trigger(e), this.opts.element.data("select2-change-triggered", !1), this.opts.element.click(), this.opts.blurOnChange && this.opts.element.blur()
            },
            enable: function () {
                this.enabled || (this.enabled = !0, this.container.removeClass("select2-container-disabled"))
            },
            disable: function () {
                this.enabled && (this.close(), this.enabled = !1, this.container.addClass("select2-container-disabled"))
            },
            opened: function () {
                return this.container.hasClass("select2-dropdown-open")
            },
            positionDropdown: function () {
                var e, n, r, i = this.container.offset(),
                    o = this.container.outerHeight(),
                    s = this.container.outerWidth(),
                    a = this.dropdown.outerHeight(),
                    l = t(window).scrollTop() + document.documentElement.clientHeight,
                    u = i.top + o,
                    c = i.left,
                    p = l >= u + a,
                    h = i.top - a >= this.body().scrollTop(),
                    d = this.dropdown.hasClass("select2-drop-above");
                "static" !== this.body().css("position") && (e = this.body().offset(), u -= e.top, c -= e.left), d ? (n = !0, !h && p && (n = !1)) : (n = !1, !p && h && (n = !0)), n ? (u = i.top - a, this.container.addClass("select2-drop-above"), this.dropdown.addClass("select2-drop-above")) : (this.container.removeClass("select2-drop-above"), this.dropdown.removeClass("select2-drop-above")), r = t.extend({
                    top: u,
                    left: c,
                    width: s
                }, y(this.opts.dropdownCss)), this.dropdown.css(r)
            },
            shouldOpen: function () {
                var e;
                return this.opened() ? !1 : (e = t.Event("open"), this.opts.element.trigger(e), !e.isDefaultPrevented())
            },
            clearDropdownAlignmentPreference: function () {
                this.container.removeClass("select2-drop-above"), this.dropdown.removeClass("select2-drop-above")
            },
            open: function () {
                return this.shouldOpen() ? (window.setTimeout(this.bind(this.opening), 1), !0) : !1
            },
            opening: function () {
                var e = this.containerId,
                    n = this.containerSelector,
                    r = "scroll." + e,
                    i = "resize." + e;
                this.container.parents().each(function () {
                    t(this).bind(r, function () {
                        var e = t(n);
                        0 == e.length && t(this).unbind(r), e.select2("close")
                    })
                }), t(window).bind(i, function () {
                    var e = t(n);
                    0 == e.length && t(window).unbind(i), e.select2("close")
                }), this.clearDropdownAlignmentPreference(), " " === this.search.val() && this.search.val(""), this.container.addClass("select2-dropdown-open").addClass("select2-container-active"), this.updateResults(!0), this.dropdown[0] !== this.body().children().last()[0] && this.dropdown.detach().appendTo(this.body()), this.dropdown.show(), this.positionDropdown(), this.dropdown.addClass("select2-drop-active"), this.ensureHighlightVisible(), this.focusSearch()
            },
            close: function () {
                if (this.opened()) {
                    var e = this;
                    this.container.parents().each(function () {
                        t(this).unbind("scroll." + e.containerId)
                    }), t(window).unbind("resize." + this.containerId), this.clearDropdownAlignmentPreference(), this.dropdown.hide(), this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active"), this.results.empty(), this.clearSearch(), this.opts.element.trigger(t.Event("close"))
                }
            },
            clearSearch: function () {},
            ensureHighlightVisible: function () {
                var n, r, i, o, s, a, l, u = this.results;
                if (r = this.highlight(), !(0 > r)) {
                    if (0 == r) return u.scrollTop(0), e;
                    n = u.find(".select2-result-selectable"), i = t(n[r]), o = i.offset().top + i.outerHeight(), r === n.length - 1 && (l = u.find("li.select2-more-results"), l.length > 0 && (o = l.offset().top + l.outerHeight())), s = u.offset().top + u.outerHeight(), o > s && u.scrollTop(u.scrollTop() + (o - s)), a = i.offset().top - u.offset().top, 0 > a && u.scrollTop(u.scrollTop() + a)
                }
            },
            moveHighlight: function (e) {
                for (var n = this.results.find(".select2-result-selectable"), r = this.highlight(); r > -1 && n.length > r;) {
                    r += e;
                    var i = t(n[r]);
                    if (i.hasClass("select2-result-selectable") && !i.hasClass("select2-disabled")) {
                        this.highlight(r);
                        break
                    }
                }
            },
            highlight: function (r) {
                var i = this.results.find(".select2-result-selectable").not(".select2-disabled");
                return 0 === arguments.length ? n(i.filter(".select2-highlighted")[0], i.get()) : (r >= i.length && (r = i.length - 1), 0 > r && (r = 0), i.removeClass("select2-highlighted"), t(i[r]).addClass("select2-highlighted"), this.ensureHighlightVisible(), e)
            },
            countSelectableResults: function () {
                return this.results.find(".select2-result-selectable").not(".select2-disabled").length
            },
            highlightUnderEvent: function (e) {
                var n = t(e.target).closest(".select2-result-selectable");
                if (n.length > 0 && !n.is(".select2-highlighted")) {
                    var r = this.results.find(".select2-result-selectable");
                    this.highlight(r.index(n))
                } else 0 == n.length && this.results.find(".select2-highlighted").removeClass("select2-highlighted")
            },
            loadMoreIfNeeded: function () {
                var t, e = this.results,
                    n = e.find("li.select2-more-results"),
                    r = this.resultsPage + 1,
                    i = this,
                    o = this.search.val(),
                    s = this.context;
                0 !== n.length && (t = n.offset().top - e.offset().top - e.height(), 0 >= t && (n.addClass("select2-active"), this.opts.query({
                    term: o,
                    page: r,
                    context: s,
                    matcher: this.opts.matcher,
                    callback: this.bind(function (t) {
                        i.opened() && (i.opts.populateResults.call(this, e, t.results, {
                            term: o,
                            page: r,
                            context: s
                        }), t.more === !0 ? (n.detach().appendTo(e).text(i.opts.formatLoadMore(r + 1)), window.setTimeout(function () {
                            i.loadMoreIfNeeded()
                        }, 10)) : n.remove(), i.positionDropdown(), i.resultsPage = r)
                    })
                })))
            },
            tokenize: function () {},
            updateResults: function (n) {
                function i() {
                    u.scrollTop(0), l.removeClass("select2-active"), p.positionDropdown()
                }

                function o(t) {
                    u.html(p.opts.escapeMarkup(t)), i()
                }
                var s, a, l = this.search,
                    u = this.results,
                    c = this.opts,
                    p = this;
                if (n === !0 || this.showSearchInput !== !1 && this.opened()) {
                    if (l.addClass("select2-active"), c.maximumSelectionSize >= 1 && (s = this.data(), t.isArray(s) && s.length >= c.maximumSelectionSize && v(c.formatSelectionTooBig, "formatSelectionTooBig"))) return o("<li class='select2-selection-limit'>" + c.formatSelectionTooBig(c.maximumSelectionSize) + "</li>"), e;
                    if (l.val().length < c.minimumInputLength && v(c.formatInputTooShort, "formatInputTooShort")) return o("<li class='select2-no-results'>" + c.formatInputTooShort(l.val(), c.minimumInputLength) + "</li>"), e;
                    o("<li class='select2-searching'>" + c.formatSearching() + "</li>"), a = this.tokenize(), a != e && null != a && l.val(a), this.resultsPage = 1, c.query({
                        term: l.val(),
                        page: this.resultsPage,
                        context: null,
                        matcher: c.matcher,
                        callback: this.bind(function (s) {
                            var a;
                            if (this.opened()) {
                                if (this.context = s.context === e ? null : s.context, this.opts.createSearchChoice && "" !== l.val() && (a = this.opts.createSearchChoice.call(null, l.val(), s.results), a !== e && null !== a && p.id(a) !== e && null !== p.id(a) && 0 === t(s.results).filter(function () {
                                    return r(p.id(this), p.id(a))
                                }).length && s.results.unshift(a)), 0 === s.results.length && v(c.formatNoMatches, "formatNoMatches")) return o("<li class='select2-no-results'>" + c.formatNoMatches(l.val()) + "</li>"), e;
                                u.empty(), p.opts.populateResults.call(this, u, s.results, {
                                    term: l.val(),
                                    page: this.resultsPage,
                                    context: null
                                }), s.more === !0 && v(c.formatLoadMore, "formatLoadMore") && (u.append("<li class='select2-more-results'>" + p.opts.escapeMarkup(c.formatLoadMore(this.resultsPage)) + "</li>"), window.setTimeout(function () {
                                    p.loadMoreIfNeeded()
                                }, 10)), this.postprocessResults(s, n), i()
                            }
                        })
                    })
                }
            },
            cancel: function () {
                this.close()
            },
            blur: function () {
                this.close(), this.container.removeClass("select2-container-active"), this.dropdown.removeClass("select2-drop-active"), this.search[0] === document.activeElement && this.search.blur(), this.clearSearch(), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")
            },
            focusSearch: function () {
                this.search.show(), this.search.focus(), window.setTimeout(this.bind(function () {
                    this.search.show(), this.search.focus(), this.search.val(this.search.val())
                }), 10)
            },
            selectHighlighted: function () {
                var t = this.highlight(),
                    e = this.results.find(".select2-highlighted").not(".select2-disabled"),
                    n = e.closest(".select2-result-selectable").data("select2-data");
                n && (e.addClass("select2-disabled"), this.highlight(t), this.onSelect(n))
            },
            getPlaceholder: function () {
                return this.opts.element.attr("placeholder") || this.opts.element.attr("data-placeholder") || this.opts.element.data("placeholder") || this.opts.placeholder
            },
            initContainerWidth: function () {
                function n() {
                    var n, r, i, o, s;
                    if ("off" === this.opts.width) return null;
                    if ("element" === this.opts.width) return 0 === this.opts.element.outerWidth() ? "auto" : this.opts.element.outerWidth() + "px";
                    if ("copy" === this.opts.width || "resolve" === this.opts.width) {
                        if (n = this.opts.element.attr("style"), n !== e)
                            for (r = n.split(";"), o = 0, s = r.length; s > o; o += 1)
                                if (i = r[o].replace(/\s/g, "").match(/width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/), null !== i && i.length >= 1) return i[1];
                        return "resolve" === this.opts.width ? (n = this.opts.element.css("width"), n.indexOf("%") > 0 ? n : 0 === this.opts.element.outerWidth() ? "auto" : this.opts.element.outerWidth() + "px") : null
                    }
                    return t.isFunction(this.opts.width) ? this.opts.width() : this.opts.width
                }
                var r = n.call(this);
                null !== r && this.container.attr("style", "width: " + r)
            }
        }), S = _(x, {
            createContainer: function () {
                var e = t("<div></div>", {
                    "class": "select2-container"
                }).html(["    <a href='#' onclick='return false;' class='select2-choice'>", "   <span></span><abbr class='select2-search-choice-close' style='display:none;'></abbr>", "   <div><b></b></div>", "</a>", "    <div class='select2-drop select2-offscreen'>", "   <div class='select2-search'>", "       <input type='text' autocomplete='off' class='select2-input'/>", "   </div>", "   <ul class='select2-results'>", "   </ul>", "</div>"].join(""));
                return e
            },
            opening: function () {
                this.search.show(), this.parent.opening.apply(this, arguments), this.dropdown.removeClass("select2-offscreen")
            },
            close: function () {
                this.opened() && (this.parent.close.apply(this, arguments), this.dropdown.removeAttr("style").addClass("select2-offscreen").insertAfter(this.selection).show())
            },
            focus: function () {
                this.close(), this.selection.focus()
            },
            isFocused: function () {
                return this.selection[0] === document.activeElement
            },
            cancel: function () {
                this.parent.cancel.apply(this, arguments), this.selection.focus()
            },
            initContainer: function () {
                var t, n = this.container,
                    r = this.dropdown,
                    i = !1;
                this.selection = t = n.find(".select2-choice"), this.search.bind("keydown", this.bind(function (t) {
                    if (this.enabled) {
                        if (t.which === k.PAGE_UP || t.which === k.PAGE_DOWN) return p(t), e;
                        if (this.opened()) switch (t.which) {
                        case k.UP:
                        case k.DOWN:
                            return this.moveHighlight(t.which === k.UP ? -1 : 1), p(t), e;
                        case k.TAB:
                        case k.ENTER:
                            return this.selectHighlighted(), p(t), e;
                        case k.ESC:
                            return this.cancel(t), p(t), e
                        } else {
                            if (t.which === k.TAB || k.isControl(t) || k.isFunctionKey(t) || t.which === k.ESC) return;
                            if (this.opts.openOnEnter === !1 && t.which === k.ENTER) return;
                            if (this.open(), t.which === k.ENTER) return
                        }
                    }
                })), this.search.bind("focus", this.bind(function () {
                    this.selection.attr("tabIndex", "-1")
                })), this.search.bind("blur", this.bind(function () {
                    this.opened() || this.container.removeClass("select2-container-active"), window.setTimeout(this.bind(function () {
                        this.selection.attr("tabIndex", this.opts.element.attr("tabIndex"))
                    }), 10)
                })), t.bind("mousedown", this.bind(function () {
                    i = !0, this.opened() ? (this.close(), this.selection.focus()) : this.enabled && this.open(), i = !1
                })), r.bind("mousedown", this.bind(function () {
                    this.search.focus()
                })), t.bind("focus", this.bind(function () {
                    this.container.addClass("select2-container-active"), this.search.attr("tabIndex", "-1")
                })), t.bind("blur", this.bind(function () {
                    this.opened() || this.container.removeClass("select2-container-active"), window.setTimeout(this.bind(function () {
                        this.search.attr("tabIndex", this.opts.element.attr("tabIndex"))
                    }), 10)
                })), t.bind("keydown", this.bind(function (t) {
                    if (this.enabled) {
                        if (t.which === k.PAGE_UP || t.which === k.PAGE_DOWN) return p(t), e;
                        if (!(t.which === k.TAB || k.isControl(t) || k.isFunctionKey(t) || t.which === k.ESC || this.opts.openOnEnter === !1 && t.which === k.ENTER)) {
                            if (t.which == k.DELETE) return this.opts.allowClear && this.clear(), e;
                            if (this.open(), t.which === k.ENTER) return p(t), e;
                            if (48 > t.which) return p(t), e;
                            var n = String.fromCharCode(t.which).toLowerCase();
                            t.shiftKey && (n = n.toUpperCase()), this.search.focus(), this.search.val(n), p(t)
                        }
                    }
                })), t.delegate("abbr", "mousedown", this.bind(function (t) {
                    this.enabled && (this.clear(), p(t), this.close(), this.triggerChange(), this.selection.focus())
                })), this.setPlaceholder(), this.search.bind("focus", this.bind(function () {
                    this.container.addClass("select2-container-active")
                }))
            },
            clear: function () {
                this.opts.element.val(""), this.selection.find("span").empty(), this.selection.removeData("select2-data"), this.setPlaceholder()
            },
            initSelection: function () {
                if ("" === this.opts.element.val()) this.close(), this.setPlaceholder();
                else {
                    var t = this;
                    this.opts.initSelection.call(null, this.opts.element, function (n) {
                        n !== e && null !== n && (t.updateSelection(n), t.close(), t.setPlaceholder())
                    })
                }
            },
            prepareOpts: function () {
                var e = this.parent.prepareOpts.apply(this, arguments);
                return "select" === e.element.get(0).tagName.toLowerCase() && (e.initSelection = function (e, n) {
                    var r = e.find(":selected");
                    t.isFunction(n) && n({
                        id: r.attr("value"),
                        text: r.text()
                    })
                }), e
            },
            setPlaceholder: function () {
                var t = this.getPlaceholder();
                if ("" === this.opts.element.val() && t !== e) {
                    if (this.select && "" !== this.select.find("option:first").text()) return;
                    this.selection.find("span").html(this.opts.escapeMarkup(t)), this.selection.addClass("select2-default"), this.selection.find("abbr").hide()
                }
            },
            postprocessResults: function (n, i) {
                var o = 0,
                    s = this,
                    a = !0;
                this.results.find(".select2-result-selectable").each2(function (t, n) {
                    return r(s.id(n.data("select2-data")), s.opts.element.val()) ? (o = t, !1) : e
                }), this.highlight(o), i === !0 && (a = this.showSearchInput = w(n.results) >= this.opts.minimumResultsForSearch, this.dropdown.find(".select2-search")[a ? "removeClass" : "addClass"]("select2-search-hidden"), t(this.dropdown, this.container)[a ? "addClass" : "removeClass"]("select2-with-searchbox"))
            },
            onSelect: function (t) {
                var e = this.opts.element.val();
                this.opts.element.val(this.id(t)), this.updateSelection(t), this.close(), this.selection.focus(), r(e, this.id(t)) || this.triggerChange()
            },
            updateSelection: function (t) {
                var n, r = this.selection.find("span");
                this.selection.data("select2-data", t), r.empty(), n = this.opts.formatSelection(t, r), n !== e && r.append(this.opts.escapeMarkup(n)), this.selection.removeClass("select2-default"), this.opts.allowClear && this.getPlaceholder() !== e && this.selection.find("abbr").show()
            },
            val: function () {
                var t, n = null,
                    r = this;
                if (0 === arguments.length) return this.opts.element.val();
                if (t = arguments[0], this.select) this.select.val(t).find(":selected").each2(function (t, e) {
                    return n = {
                        id: e.attr("value"),
                        text: e.text()
                    }, !1
                }), this.updateSelection(n), this.setPlaceholder();
                else {
                    if (this.opts.initSelection === e) throw Error("cannot call val() if initSelection() is not defined");
                    if (!t) return this.clear(), e;
                    this.opts.element.val(t), this.opts.initSelection(this.opts.element, function (t) {
                        r.opts.element.val(t ? r.id(t) : ""), r.updateSelection(t), r.setPlaceholder()
                    })
                }
            },
            clearSearch: function () {
                this.search.val("")
            },
            data: function (t) {
                var n;
                return 0 === arguments.length ? (n = this.selection.data("select2-data"), n == e && (n = null), n) : (t && "" !== t ? (this.opts.element.val(t ? this.id(t) : ""), this.updateSelection(t)) : this.clear(), e)
            }
        }), C = _(x, {
            createContainer: function () {
                var e = t("<div></div>", {
                    "class": "select2-container select2-container-multi"
                }).html(["    <ul class='select2-choices'>", "  <li class='select2-search-field'>", "    <input type='text' autocomplete='off' class='select2-input'>", "  </li>", "</ul>", "<div class='select2-drop select2-drop-multi' style='display:none;'>", "   <ul class='select2-results'>", "   </ul>", "</div>"].join(""));
                return e
            },
            prepareOpts: function () {
                var e = this.parent.prepareOpts.apply(this, arguments);
                return "select" === e.element.get(0).tagName.toLowerCase() && (e.initSelection = function (e, n) {
                    var r = [];
                    e.find(":selected").each2(function (t, e) {
                        r.push({
                            id: e.attr("value"),
                            text: e.text()
                        })
                    }), t.isFunction(n) && n(r)
                }), e
            },
            initContainer: function () {
                var n, r = ".select2-choices";
                this.searchContainer = this.container.find(".select2-search-field"), this.selection = n = this.container.find(r), this.search.bind("keydown", this.bind(function (t) {
                    if (this.enabled) {
                        if (t.which === k.BACKSPACE && "" === this.search.val()) {
                            this.close();
                            var r, i = n.find(".select2-search-choice-focus");
                            if (i.length > 0) return this.unselect(i.first()), this.search.width(10), p(t), e;
                            r = n.find(".select2-search-choice"), r.length > 0 && r.last().addClass("select2-search-choice-focus")
                        } else n.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"); if (this.opened()) switch (t.which) {
                        case k.UP:
                        case k.DOWN:
                            return this.moveHighlight(t.which === k.UP ? -1 : 1), p(t), e;
                        case k.ENTER:
                        case k.TAB:
                            return this.selectHighlighted(), p(t), e;
                        case k.ESC:
                            return this.cancel(t), p(t), e
                        }
                        t.which === k.TAB || k.isControl(t) || k.isFunctionKey(t) || t.which === k.BACKSPACE || t.which === k.ESC || (this.opts.openOnEnter !== !1 || t.which !== k.ENTER) && (this.open(), (t.which === k.PAGE_UP || t.which === k.PAGE_DOWN) && p(t))
                    }
                })), this.search.bind("keyup", this.bind(this.resizeSearch)), this.search.bind("blur", this.bind(function (t) {
                    this.container.removeClass("select2-container-active"), this.search.removeClass("select2-focused"), this.clearSearch(), t.stopImmediatePropagation()
                })), this.container.delegate(r, "mousedown", this.bind(function (e) {
                    this.enabled && (t(e.target).closest(".select2-search-choice").length > 0 || (this.clearPlaceholder(), this.open(), this.focusSearch(), e.preventDefault()))
                })), this.container.delegate(r, "focus", this.bind(function () {
                    this.enabled && (this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"), this.clearPlaceholder())
                })), this.clearSearch()
            },
            enable: function () {
                this.enabled || (this.parent.enable.apply(this, arguments), this.search.removeAttr("disabled"))
            },
            disable: function () {
                this.enabled && (this.parent.disable.apply(this, arguments), this.search.attr("disabled", !0))
            },
            initSelection: function () {
                if ("" === this.opts.element.val() && (this.updateSelection([]), this.close(), this.clearSearch()), this.select || "" !== this.opts.element.val()) {
                    var t = this;
                    this.opts.initSelection.call(null, this.opts.element, function (n) {
                        n !== e && null !== n && (t.updateSelection(n), t.close(), t.clearSearch())
                    })
                }
            },
            clearSearch: function () {
                var t = this.getPlaceholder();
                t !== e && 0 === this.getVal().length && this.search.hasClass("select2-focused") === !1 ? (this.search.val(t).addClass("select2-default"), this.resizeSearch()) : this.search.val(" ").width(10)
            },
            clearPlaceholder: function () {
                this.search.hasClass("select2-default") ? this.search.val("").removeClass("select2-default") : " " === this.search.val() && this.search.val("")
            },
            opening: function () {
                this.parent.opening.apply(this, arguments), this.clearPlaceholder(), this.resizeSearch(), this.focusSearch()
            },
            close: function () {
                this.opened() && this.parent.close.apply(this, arguments)
            },
            focus: function () {
                this.close(), this.search.focus()
            },
            isFocused: function () {
                return this.search.hasClass("select2-focused")
            },
            updateSelection: function (e) {
                var r = [],
                    i = [],
                    o = this;
                t(e).each(function () {
                    0 > n(o.id(this), r) && (r.push(o.id(this)), i.push(this))
                }), e = i, this.selection.find(".select2-search-choice").remove(), t(e).each(function () {
                    o.addSelectedChoice(this)
                }), o.postprocessResults()
            },
            tokenize: function () {
                var t = this.search.val();
                t = this.opts.tokenizer(t, this.data(), this.bind(this.onSelect), this.opts), null != t && t != e && (this.search.val(t), t.length > 0 && this.open())
            },
            onSelect: function (t) {
                this.addSelectedChoice(t), this.select && this.postprocessResults(), this.opts.closeOnSelect ? (this.close(), this.search.width(10)) : this.countSelectableResults() > 0 ? (this.search.width(10), this.resizeSearch(), this.positionDropdown()) : this.close(), this.triggerChange({
                    added: t
                }), this.focusSearch()
            },
            cancel: function () {
                this.close(), this.focusSearch()
            },
            addSelectedChoice: function (e) {
                var n, r = t("<li class='select2-search-choice'>    <div></div>    <a href='#' onclick='return false;' class='select2-search-choice-close' tabindex='-1'></a></li>"),
                    i = this.id(e),
                    o = this.getVal();
                n = this.opts.formatSelection(e, r), r.find("div").replaceWith("<div>" + this.opts.escapeMarkup(n) + "</div>"), r.find(".select2-search-choice-close").bind("mousedown", p).bind("click dblclick", this.bind(function (e) {
                    this.enabled && (t(e.target).closest(".select2-search-choice").fadeOut("fast", this.bind(function () {
                        this.unselect(t(e.target)), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"), this.close(), this.focusSearch()
                    })).dequeue(), p(e))
                })).bind("focus", this.bind(function () {
                    this.enabled && (this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"))
                })), r.data("select2-data", e), r.insertBefore(this.searchContainer), o.push(i), this.setVal(o)
            },
            unselect: function (t) {
                var e, r, i = this.getVal();
                if (t = t.closest(".select2-search-choice"), 0 === t.length) throw "Invalid argument: " + t + ". Must be .select2-search-choice";
                e = t.data("select2-data"), r = n(this.id(e), i), r >= 0 && (i.splice(r, 1), this.setVal(i), this.select && this.postprocessResults()), t.remove(), this.triggerChange({
                    removed: e
                })
            },
            postprocessResults: function () {
                var t = this.getVal(),
                    r = this.results.find(".select2-result-selectable"),
                    i = this.results.find(".select2-result-with-children"),
                    o = this;
                r.each2(function (e, r) {
                    var i = o.id(r.data("select2-data"));
                    n(i, t) >= 0 ? r.addClass("select2-disabled").removeClass("select2-result-selectable") : r.removeClass("select2-disabled").addClass("select2-result-selectable")
                }), i.each2(function (t, e) {
                    0 == e.find(".select2-result-selectable").length ? e.addClass("select2-disabled") : e.removeClass("select2-disabled")
                }), r.each2(function (t, n) {
                    return !n.hasClass("select2-disabled") && n.hasClass("select2-result-selectable") ? (o.highlight(0), !1) : e
                })
            },
            resizeSearch: function () {
                var t, e, n, r, i, s = o(this.search);
                t = h(this.search) + 10, e = this.search.offset().left, n = this.selection.width(), r = this.selection.offset().left, i = n - (e - r) - s, t > i && (i = n - s), 40 > i && (i = n - s), this.search.width(i)
            },
            getVal: function () {
                var t;
                return this.select ? (t = this.select.val(), null === t ? [] : t) : (t = this.opts.element.val(), i(t, this.opts.separator))
            },
            setVal: function (e) {
                var r;
                this.select ? this.select.val(e) : (r = [], t(e).each(function () {
                    0 > n(this, r) && r.push(this)
                }), this.opts.element.val(0 === r.length ? "" : r.join(this.opts.separator)))
            },
            val: function () {
                var n, r = [],
                    i = this;
                if (0 === arguments.length) return this.getVal();
                if (n = arguments[0], !n) return this.opts.element.val(""), this.updateSelection([]), this.clearSearch(), e;
                if (this.setVal(n), this.select) this.select.find(":selected").each(function () {
                    r.push({
                        id: t(this).attr("value"),
                        text: t(this).text()
                    })
                }), this.updateSelection(r);
                else {
                    if (this.opts.initSelection === e) throw Error("val() cannot be called if initSelection() is not defined");
                    this.opts.initSelection(this.opts.element, function (e) {
                        var n = t(e).map(i.id);
                        i.setVal(n), i.updateSelection(e), i.clearSearch()
                    })
                }
                this.clearSearch()
            },
            onSortStart: function () {
                if (this.select) throw Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");
                this.search.width(0), this.searchContainer.hide()
            },
            onSortEnd: function () {
                var e = [],
                    n = this;
                this.searchContainer.show(), this.searchContainer.appendTo(this.searchContainer.parent()), this.resizeSearch(), this.selection.find(".select2-search-choice").each(function () {
                    e.push(n.opts.id(t(this).data("select2-data")))
                }), this.setVal(e), this.triggerChange()
            },
            data: function (n) {
                var r, i = this;
                return 0 === arguments.length ? this.selection.find(".select2-search-choice").map(function () {
                    return t(this).data("select2-data")
                }).get() : (n || (n = []), r = t.map(n, function (t) {
                    return i.opts.id(t)
                }), this.setVal(r), this.updateSelection(n), this.clearSearch(), e)
            }
        }), t.fn.select2 = function () {
            var r, i, o, s, a = Array.prototype.slice.call(arguments, 0),
                l = ["val", "destroy", "opened", "open", "close", "focus", "isFocused", "container", "onSortStart", "onSortEnd", "enable", "disable", "positionDropdown", "data"];
            return this.each(function () {
                if (0 === a.length || "object" == typeof a[0]) r = 0 === a.length ? {} : t.extend({}, a[0]), r.element = t(this), "select" === r.element.get(0).tagName.toLowerCase() ? s = r.element.attr("multiple") : (s = r.multiple || !1, "tags" in r && (r.multiple = s = !0)), i = s ? new C : new S, i.init(r);
                else {
                    if ("string" != typeof a[0]) throw "Invalid arguments to select2 plugin: " + a;
                    if (0 > n(a[0], l)) throw "Unknown method: " + a[0];
                    if (o = e, i = t(this).data("select2"), i === e) return;
                    if (o = "container" === a[0] ? i.container : i[a[0]].apply(i, a.slice(1)), o !== e) return !1
                }
            }), o === e ? this : o
        }, t.fn.select2.defaults = {
            width: "copy",
            closeOnSelect: !0,
            openOnEnter: !0,
            containerCss: {},
            dropdownCss: {},
            containerCssClass: "",
            dropdownCssClass: "",
            formatResult: function (t, e, n) {
                var r = [];
                return d(t.text, n.term, r), r.join("")
            },
            formatSelection: function (t) {
                return t ? t.text : e
            },
            formatResultCssClass: function () {
                return e
            },
            formatNoMatches: function () {
                return "No matches found"
            },
            formatInputTooShort: function (t, e) {
                return "Please enter " + (e - t.length) + " more characters"
            },
            formatSelectionTooBig: function (t) {
                return "You can only select " + t + " item" + (1 == t ? "" : "s")
            },
            formatLoadMore: function () {
                return "Loading more results..."
            },
            formatSearching: function () {
                return "Searching..."
            },
            minimumResultsForSearch: 0,
            minimumInputLength: 0,
            maximumSelectionSize: 0,
            id: function (t) {
                return t.id
            },
            matcher: function (t, e) {
                return e.toUpperCase().indexOf(t.toUpperCase()) >= 0
            },
            separator: ",",
            tokenSeparators: [],
            tokenizer: b,
            escapeMarkup: function (t) {
                return t && "string" == typeof t ? t.replace(/&/g, "&amp;") : t
            },
            blurOnChange: !1
        }, window.Select2 = {
            query: {
                ajax: f,
                local: m,
                tags: g
            },
            util: {
                debounce: l,
                markMatch: d
            },
            "class": {
                "abstract": x,
                single: S,
                multi: C
            }
        }
    }
}(jQuery), window.console && console.log || function () {
    for (var t = function () {}, e = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "markTimeline", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], n = e.length, r = window.console = {}; n--;) r[e[n]] = t
}(), "function" != typeof String.prototype.trim && (String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "")
}), $.fn.outerHtml = function () {
    return $(this).get(0).outerHTML || (new XMLSerializer).serializeToString($(this).get(0))
}, window.location.origin === void 0 && (window.location.origin = window.location.protocol + "//" + window.location.host), Array.prototype.indexOf || (Array.prototype.indexOf = function (t) {
    var e = this.length >>> 0,
        n = Number(arguments[1]) || 0;
    for (n = 0 > n ? Math.ceil(n) : Math.floor(n), 0 > n && (n += e); e > n; n++)
        if (n in this && this[n] === t) return n;
    return -1
}), Date.prototype.toISOString || (Date.prototype.toISOString = function () {
    function t(t) {
        return 10 > t ? "0" + t : t
    }
    return this.getUTCFullYear() + "-" + t(this.getUTCMonth() + 1) + "-" + t(this.getUTCDate()) + "T" + t(this.getUTCHours()) + ":" + t(this.getUTCMinutes()) + ":" + t(this.getUTCSeconds()) + "Z"
}), window.Socialite = function (t, e, n) {
    "use strict";
    var r = 0,
        i = [],
        o = {}, s = {}, a = /^($|loaded|complete)/,
        l = t.encodeURIComponent,
        u = {
            settings: {},
            trim: function (t) {
                return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
            },
            hasClass: function (t, e) {
                return -1 !== (" " + t.className + " ").indexOf(" " + e + " ")
            },
            addClass: function (t, e) {
                u.hasClass(t, e) || (t.className = "" === t.className ? e : t.className + " " + e)
            },
            removeClass: function (t, e) {
                t.className = u.trim(" " + t.className + " ".replace(" " + e + " ", " "))
            },
            extendObject: function (t, e, r) {
                for (var i in e) {
                    var o = t[i] !== n;
                    o && "object" == typeof e[i] ? u.extendObject(t[i], e[i], r) : (r || !o) && (t[i] = e[i])
                }
            },
            getElements: function (t, e) {
                for (var n = 0, r = [], i = !! t.getElementsByClassName, o = i ? t.getElementsByClassName(e) : t.getElementsByTagName("*"); o.length > n; n++)(i || u.hasClass(o[n], e)) && r.push(o[n]);
                return r
            },
            getDataAttributes: function (t, e, n) {
                for (var r = 0, i = "", o = {}, s = t.attributes; s.length > r; r++) {
                    var a = s[r].name,
                        u = s[r].value;
                    u.length && 0 === a.indexOf("data-") && (e && (a = a.substring(5)), n ? o[a] = u : i += l(a) + "=" + l(u) + "&")
                }
                return n ? o : i
            },
            copyDataAttributes: function (t, e, n, r) {
                var i = u.getDataAttributes(t, n, !0);
                for (var o in i) e.setAttribute(r ? o.replace(/-/g, "_") : o, i[o])
            },
            createIframe: function (t, n) {
                var r = e.createElement("iframe");
                return r.style.cssText = "overflow: hidden; border: none;", u.extendObject(r, {
                    src: t,
                    allowtransparency: "true",
                    frameborder: "0",
                    scrolling: "no"
                }, !0), n && (r.onload = r.onreadystatechange = function () {
                    a.test(r.readyState || "") && (r.onload = r.onreadystatechange = null, u.activateInstance(n))
                }), r
            },
            networkReady: function (t) {
                return o[t] ? o[t].loaded : n
            },
            appendNetwork: function (t) {
                if (t && !t.appended) {
                    if ("function" == typeof t.append && t.append(t) === !1) return t.appended = t.loaded = !0, u.activateAll(t), n;
                    t.script && (t.el = e.createElement("script"), u.extendObject(t.el, t.script, !0), t.el.async = !0, t.el.onload = t.el.onreadystatechange = function () {
                        if (a.test(t.el.readyState || "")) {
                            if (t.el.onload = t.el.onreadystatechange = null, t.loaded = !0, "function" == typeof t.onload && t.onload(t) === !1) return;
                            u.activateAll(t)
                        }
                    }, e.body.appendChild(t.el)), t.appended = !0
                }
            },
            removeNetwork: function (t) {
                return u.networkReady(t.name) ? (t.el.parentNode.removeChild(t.el), !(t.appended = t.loaded = !1)) : !1
            },
            reloadNetwork: function (t) {
                var e = o[t];
                e && u.removeNetwork(e) && u.appendNetwork(e)
            },
            createInstance: function (t, e) {
                var o = !0,
                    s = {
                        el: t,
                        uid: r++,
                        widget: e
                    };
                return i.push(s), e.process !== n && (o = "function" == typeof e.process ? e.process(s) : !1), o && u.processInstance(s), s.el.setAttribute("data-socialite", s.uid), s.el.className = "socialite " + e.name + " socialite-instance", s
            },
            processInstance: function (t) {
                var n = t.el;
                t.el = e.createElement("div"), t.el.className = n.className, u.copyDataAttributes(n, t.el), "a" !== n.nodeName.toLowerCase() || n.getAttribute("data-default-href") || t.el.setAttribute("data-default-href", n.getAttribute("href"));
                var r = n.parentNode;
                r.insertBefore(t.el, n), r.removeChild(n)
            },
            activateInstance: function (t) {
                return t && !t.loaded ? (t.loaded = !0, "function" == typeof t.widget.activate && t.widget.activate(t), u.addClass(t.el, "socialite-loaded"), t.onload ? t.onload(t.el) : null) : n
            },
            activateAll: function (t) {
                "string" == typeof t && (t = o[t]);
                for (var e = 0; i.length > e; e++) {
                    var n = i[e];
                    n.init && n.widget.network === t && u.activateInstance(n)
                }
            },
            load: function (t, r, o, a, l) {
                if (t = t && "object" == typeof t && 1 === t.nodeType ? t : e, !r || "object" != typeof r) return u.load(t, u.getElements(t, "socialite"), o, a, l), n;
                var c;
                if (/Array/.test(Object.prototype.toString.call(r)))
                    for (c = 0; r.length > c; c++) u.load(t, r[c], o, a, l);
                else if (1 === r.nodeType) {
                    if (!o || !s[o]) {
                        o = null;
                        var p = r.className.split(" ");
                        for (c = 0; p.length > c; c++)
                            if (s[p[c]]) {
                                o = p[c];
                                break
                            }
                        if (!o) return
                    }
                    var h, d = s[o],
                        f = parseInt(r.getAttribute("data-socialite"), 10);
                    if (isNaN(f)) h = u.createInstance(r, d);
                    else
                        for (c = 0; i.length > c; c++)
                            if (i[c].uid === f) {
                                h = i[c];
                                break
                            }!l && h && (h.init || (h.init = !0, h.onload = "function" == typeof a ? a : null, d.init(h)), d.network.appended ? u.networkReady(d.network.name) && u.activateInstance(h) : u.appendNetwork(d.network))
                }
            },
            activate: function (e, n, r) {
                t.Socialite.load(null, e, n, r)
            },
            process: function (e, n, r) {
                t.Socialite.load(e, n, r, null, !0)
            },
            network: function (t, e) {
                o[t] = {
                    name: t,
                    el: null,
                    appended: !1,
                    loaded: !1,
                    widgets: {}
                }, e && u.extendObject(o[t], e)
            },
            widget: function (t, e, n) {
                n.name = t + "-" + e, o[t] && !s[n.name] && (n.network = o[t], o[t].widgets[e] = s[n.name] = n)
            },
            setup: function (t) {
                u.extendObject(u.settings, t, !0)
            }
        };
    return u
}(window, window.document),
function (e, n, r) {
    r.setup({
        facebook: {
            lang: "en_GB",
            appId: null
        },
        twitter: {
            lang: "en"
        },
        googleplus: {
            lang: "en-GB"
        }
    }), r.network("facebook", {
        script: {
            src: "//connect.facebook.net/{{language}}/all.js",
            id: "facebook-jssdk"
        },
        append: function (t) {
            var i = n.createElement("div"),
                o = r.settings.facebook,
                s = {
                    onlike: "edge.create",
                    onunlike: "edge.remove",
                    onsend: "message.send"
                };
            i.id = "fb-root", n.body.appendChild(i), t.script.src = t.script.src.replace("{{language}}", o.lang), e.fbAsyncInit = function () {
                e.FB.init({
                    appId: o.appId,
                    xfbml: !0
                });
                for (var t in s) "function" == typeof o[t] && e.FB.Event.subscribe(s[t], o[t])
            }
        }
    }), r.widget("facebook", "like", {
        init: function (t) {
            var i = n.createElement("div");
            i.className = "fb-like", r.copyDataAttributes(t.el, i), t.el.appendChild(i), e.FB && e.FB.XFBML && e.FB.XFBML.parse(t.el)
        }
    }), r.network("twitter", {
        script: {
            src: "//platform.twitter.com/widgets.js",
            id: "twitter-wjs",
            charset: "utf-8"
        },
        append: function () {
            var n = "object" != typeof e.twttr,
                i = r.settings.twitter,
                o = ["click", "tweet", "retweet", "favorite", "follow"];
            return n && (e.twttr = t = {
                _e: [],
                ready: function (e) {
                    t._e.push(e)
                }
            }), e.twttr.ready(function (t) {
                for (var e = 0; o.length > e; e++) {
                    var n = o[e];
                    "function" == typeof i["on" + n] && t.events.bind(n, i["on" + n])
                }
                r.activateAll("twitter")
            }), n
        }
    });
    var i = function (t) {
        var e = n.createElement("a");
        e.className = t.widget.name + "-button", r.copyDataAttributes(t.el, e), e.setAttribute("href", t.el.getAttribute("data-default-href")), e.setAttribute("data-lang", t.el.getAttribute("data-lang") || r.settings.twitter.lang), t.el.appendChild(e)
    }, o = function () {
            e.twttr && "object" == typeof e.twttr.widgets && "function" == typeof e.twttr.widgets.load && e.twttr.widgets.load()
        };
    r.widget("twitter", "share", {
        init: i,
        activate: o
    }), r.widget("twitter", "follow", {
        init: i,
        activate: o
    }), r.widget("twitter", "hashtag", {
        init: i,
        activate: o
    }), r.widget("twitter", "mention", {
        init: i,
        activate: o
    }), r.widget("twitter", "embed", {
        process: function (t) {
            t.innerEl = t.el, t.innerEl.getAttribute("data-lang") || t.innerEl.setAttribute("data-lang", r.settings.twitter.lang), t.el = n.createElement("div"), t.el.className = t.innerEl.className, t.innerEl.className = "", t.innerEl.parentNode.insertBefore(t.el, t.innerEl), t.el.appendChild(t.innerEl)
        },
        init: function (t) {
            t.innerEl.className = "twitter-tweet"
        },
        activate: o
    }), r.network("googleplus", {
        script: {
            src: "//apis.google.com/js/plusone.js"
        },
        append: function () {
            return e.gapi ? !1 : (e.___gcfg = {
                lang: r.settings.googleplus.lang,
                parsetags: "explicit"
            }, undefined)
        }
    });
    var s = function (t) {
        var e = n.createElement("div");
        e.className = "g-" + t.widget.gtype, r.copyDataAttributes(t.el, e), t.el.appendChild(e), t.gplusEl = e
    }, a = function (t, e) {
            return "function" != typeof e ? null : function (n) {
                e(t.el, n)
            }
        }, l = function (t) {
            var n = t.widget.gtype;
            if (e.gapi && e.gapi[n]) {
                for (var i = r.settings.googleplus, o = r.getDataAttributes(t.el, !0, !0), s = ["onstartinteraction", "onendinteraction", "callback"], l = 0; s.length > l; l++) o[s[l]] = a(t, i[s[l]]);
                e.gapi[n].render(t.gplusEl, o)
            }
        };
    r.widget("googleplus", "one", {
        init: s,
        activate: l,
        gtype: "plusone"
    }), r.widget("googleplus", "share", {
        init: s,
        activate: l,
        gtype: "plus"
    }), r.widget("googleplus", "badge", {
        init: s,
        activate: l,
        gtype: "plus"
    }), r.network("linkedin", {
        script: {
            src: "//platform.linkedin.com/in.js"
        }
    });
    var u = function (t) {
        var i = n.createElement("script");
        i.type = "IN/" + t.widget.intype, r.copyDataAttributes(t.el, i), t.el.appendChild(i), "object" == typeof e.IN && "function" == typeof e.IN.parse && (e.IN.parse(t.el), r.activateInstance(t))
    };
    r.widget("linkedin", "share", {
        init: u,
        intype: "Share"
    }), r.widget("linkedin", "recommend", {
        init: u,
        intype: "RecommendProduct"
    })
}(window, window.document, window.Socialite),
function () {
    var t = window._socialite;
    if (/Array/.test(Object.prototype.toString.call(t)))
        for (var e = 0, n = t.length; n > e; e++) "function" == typeof t[e] && t[e]()
}(), ! function (t, e, n) {
    function r(t, n) {
        var r, i = e.createElement(t || "div");
        for (r in n) i[r] = n[r];
        return i
    }

    function i(t) {
        for (var e = 1, n = arguments.length; n > e; e++) t.appendChild(arguments[e]);
        return t
    }

    function o(t, e, n, r) {
        var i = ["opacity", e, ~~ (100 * t), n, r].join("-"),
            o = .01 + 100 * (n / r),
            s = Math.max(1 - (1 - t) / e * (100 - o), t),
            a = c.substring(0, c.indexOf("Animation")).toLowerCase(),
            l = a && "-" + a + "-" || "";
        return h[i] || (d.insertRule("@" + l + "keyframes " + i + "{" + "0%{opacity:" + s + "}" + o + "%{opacity:" + t + "}" + (o + .01) + "%{opacity:1}" + (o + e) % 100 + "%{opacity:" + t + "}" + "100%{opacity:" + s + "}" + "}", d.cssRules.length), h[i] = 1), i
    }

    function s(t, e) {
        var r, i, o = t.style;
        if (o[e] !== n) return e;
        for (e = e.charAt(0).toUpperCase() + e.slice(1), i = 0; p.length > i; i++)
            if (r = p[i] + e, o[r] !== n) return r
    }

    function a(t, e) {
        for (var n in e) t.style[s(t, n) || n] = e[n];
        return t
    }

    function l(t) {
        for (var e = 1; arguments.length > e; e++) {
            var r = arguments[e];
            for (var i in r) t[i] === n && (t[i] = r[i])
        }
        return t
    }

    function u(t) {
        for (var e = {
            x: t.offsetLeft,
            y: t.offsetTop
        }; t = t.offsetParent;) e.x += t.offsetLeft, e.y += t.offsetTop;
        return e
    }
    var c, p = ["webkit", "Moz", "ms", "O"],
        h = {}, d = function () {
            var t = r("style", {
                type: "text/css"
            });
            return i(e.getElementsByTagName("head")[0], t), t.sheet || t.styleSheet
        }(),
        f = {
            lines: 12,
            length: 7,
            width: 5,
            radius: 10,
            rotate: 0,
            corners: 1,
            color: "#000",
            speed: 1,
            trail: 100,
            opacity: .25,
            fps: 20,
            zIndex: 2e9,
            className: "spinner",
            top: "auto",
            left: "auto",
            position: "relative"
        }, m = function m(t) {
            return this.spin ? (this.opts = l(t || {}, m.defaults, f), n) : new m(t)
        };
    m.defaults = {}, l(m.prototype, {
        spin: function (t) {
            this.stop();
            var e, n, i = this,
                o = i.opts,
                s = i.el = a(r(0, {
                    className: o.className
                }), {
                    position: o.position,
                    width: 0,
                    zIndex: o.zIndex
                }),
                l = o.radius + o.length + o.width;
            if (t && (t.insertBefore(s, t.firstChild || null), n = u(t), e = u(s), a(s, {
                left: ("auto" == o.left ? n.x - e.x + (t.offsetWidth >> 1) : parseInt(o.left, 10) + l) + "px",
                top: ("auto" == o.top ? n.y - e.y + (t.offsetHeight >> 1) : parseInt(o.top, 10) + l) + "px"
            })), s.setAttribute("aria-role", "progressbar"), i.lines(s, i.opts), !c) {
                var p = 0,
                    h = o.fps,
                    d = h / o.speed,
                    f = (1 - o.opacity) / (d * o.trail / 100),
                    m = d / o.lines;
                (function g() {
                    p++;
                    for (var t = o.lines; t; t--) {
                        var e = Math.max(1 - (p + t * m) % d * f, o.opacity);
                        i.opacity(s, o.lines - t, e, o)
                    }
                    i.timeout = i.el && setTimeout(g, ~~ (1e3 / h))
                })()
            }
            return i
        },
        stop: function () {
            var t = this.el;
            return t && (clearTimeout(this.timeout), t.parentNode && t.parentNode.removeChild(t), this.el = n), this
        },
        lines: function (t, e) {
            function n(t, n) {
                return a(r(), {
                    position: "absolute",
                    width: e.length + e.width + "px",
                    height: e.width + "px",
                    background: t,
                    boxShadow: n,
                    transformOrigin: "left",
                    transform: "rotate(" + ~~(360 / e.lines * l + e.rotate) + "deg) translate(" + e.radius + "px" + ",0)",
                    borderRadius: (e.corners * e.width >> 1) + "px"
                })
            }
            for (var s, l = 0; e.lines > l; l++) s = a(r(), {
                position: "absolute",
                top: 1 + ~(e.width / 2) + "px",
                transform: e.hwaccel ? "translate3d(0,0,0)" : "",
                opacity: e.opacity,
                animation: c && o(e.opacity, e.trail, l, e.lines) + " " + 1 / e.speed + "s linear infinite"
            }), e.shadow && i(s, a(n("#000", "0 0 4px #000"), {
                top: "2px"
            })), i(t, i(s, n(e.color, "0 0 1px rgba(0,0,0,.1)")));
            return t
        },
        opacity: function (t, e, n) {
            t.childNodes.length > e && (t.childNodes[e].style.opacity = n)
        }
    }),
    function () {
        function t(t, e) {
            return r("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', e)
        }
        var e = a(r("group"), {
            behavior: "url(#default#VML)"
        });
        !s(e, "transform") && e.adj ? (d.addRule(".spin-vml", "behavior:url(#default#VML)"), m.prototype.lines = function (e, n) {
            function r() {
                return a(t("group", {
                    coordsize: u + " " + u,
                    coordorigin: -l + " " + -l
                }), {
                    width: u,
                    height: u
                })
            }

            function o(e, o, s) {
                i(p, i(a(r(), {
                    rotation: 360 / n.lines * e + "deg",
                    left: ~~o
                }), i(a(t("roundrect", {
                    arcsize: n.corners
                }), {
                    width: l,
                    height: n.width,
                    left: n.radius,
                    top: -n.width >> 1,
                    filter: s
                }), t("fill", {
                    color: n.color,
                    opacity: n.opacity
                }), t("stroke", {
                    opacity: 0
                }))))
            }
            var s, l = n.length + n.width,
                u = 2 * l,
                c = 2 * -(n.width + n.length) + "px",
                p = a(r(), {
                    position: "absolute",
                    top: c,
                    left: c
                });
            if (n.shadow)
                for (s = 1; n.lines >= s; s++) o(s, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
            for (s = 1; n.lines >= s; s++) o(s);
            return i(e, p)
        }, m.prototype.opacity = function (t, e, n, r) {
            var i = t.firstChild;
            r = r.shadow && r.lines || 0, i && i.childNodes.length > e + r && (i = i.childNodes[e + r], i = i && i.firstChild, i = i && i.firstChild, i && (i.opacity = n))
        }) : c = s(e, "animation")
    }(), "function" == typeof define && define.amd ? define(function () {
        return m
    }) : t.Spinner = m
}(window, document),
function (t) {
    t.fn.spin = function (e, n) {
        var r = {
            tiny: {
                lines: 8,
                length: 2,
                width: 2,
                radius: 3
            },
            small: {
                lines: 8,
                length: 4,
                width: 3,
                radius: 5
            },
            large: {
                lines: 10,
                length: 8,
                width: 4,
                radius: 8
            }
        };
        if (Spinner) return this.each(function () {
            var i = t(this),
                o = i.data();
            o.spinner && (o.spinner.stop(), delete o.spinner), e !== !1 && ("string" == typeof e && (e = e in r ? r[e] : {}, n && (e.color = n)), o.spinner = new Spinner(t.extend({
                color: i.css("color")
            }, e)).spin(this))
        });
        throw "Spinner class not available."
    }
}(jQuery),
function () {
    function t() {
        try {
            return l in s && s[l]
        } catch (t) {
            return !1
        }
    }

    function e() {
        try {
            return u in s && s[u] && s[u][s.location.hostname]
        } catch (t) {
            return !1
        }
    }

    function n(t) {
        return function () {
            var e = Array.prototype.slice.call(arguments, 0);
            e.unshift(i), p.appendChild(i), i.addBehavior("#default#userData"), i.load(l);
            var n = t.apply(o, e);
            return p.removeChild(i), n
        }
    }

    function r(t) {
        return t.replace(f, "___")
    }
    var i, o = {}, s = window,
        a = s.document,
        l = "localStorage",
        u = "globalStorage",
        c = "__storejs__";
    if (o.disabled = !1, o.set = function () {}, o.get = function () {}, o.remove = function () {}, o.clear = function () {}, o.transact = function (t, e, n) {
        var r = o.get(t);
        null == n && (n = e, e = null), r === void 0 && (r = e || {}), n(r), o.set(t, r)
    }, o.getAll = function () {}, o.serialize = function (t) {
        return JSON.stringify(t)
    }, o.deserialize = function (t) {
        if ("string" != typeof t) return void 0;
        try {
            return JSON.parse(t)
        } catch (e) {
            return t || void 0
        }
    }, t()) i = s[l], o.set = function (t, e) {
        return void 0 === e ? o.remove(t) : (i.setItem(t, o.serialize(e)), e)
    }, o.get = function (t) {
        return o.deserialize(i.getItem(t))
    }, o.remove = function (t) {
        i.removeItem(t)
    }, o.clear = function () {
        i.clear()
    }, o.getAll = function () {
        for (var t = {}, e = 0; i.length > e; ++e) {
            var n = i.key(e);
            t[n] = o.get(n)
        }
        return t
    };
    else if (e()) i = s[u][s.location.hostname], o.set = function (t, e) {
        return void 0 === e ? o.remove(t) : (i[t] = o.serialize(e), e)
    }, o.get = function (t) {
        return o.deserialize(i[t] && i[t].value)
    }, o.remove = function (t) {
        delete i[t]
    }, o.clear = function () {
        for (var t in i) delete i[t]
    }, o.getAll = function () {
        for (var t = {}, e = 0; i.length > e; ++e) {
            var n = i.key(e);
            t[n] = o.get(n)
        }
        return t
    };
    else if (a.documentElement.addBehavior) {
        var p, h;
        try {
            h = new ActiveXObject("htmlfile"), h.open(), h.write('<script>document.w=window</script><iframe src="/favicon.ico"></frame>'), h.close(), p = h.w.frames[0].document, i = p.createElement("div")
        } catch (d) {
            i = a.createElement("div"), p = a.body
        }
        var f = RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g");
        o.set = n(function (t, e, n) {
            return e = r(e), void 0 === n ? o.remove(e) : (t.setAttribute(e, o.serialize(n)), t.save(l), n)
        }), o.get = n(function (t, e) {
            return e = r(e), o.deserialize(t.getAttribute(e))
        }), o.remove = n(function (t, e) {
            e = r(e), t.removeAttribute(e), t.save(l)
        }), o.clear = n(function (t) {
            var e = t.XMLDocument.documentElement.attributes;
            t.load(l);
            for (var n, r = 0; n = e[r]; r++) t.removeAttribute(n.name);
            t.save(l)
        }), o.getAll = n(function (t) {
            var e = t.XMLDocument.documentElement.attributes;
            t.load(l);
            for (var n, r = {}, i = 0; n = e[i]; ++i) r[n] = o.get(n);
            return r
        })
    }
    try {
        o.set(c, c), o.get(c) != c && (o.disabled = !0), o.remove(c)
    } catch (d) {
        o.disabled = !0
    }
    o.enabled = !o.disabled, "undefined" != typeof module && "function" != typeof module ? module.exports = o : "function" == typeof define && define.amd ? define(o) : this.store = o
}(), window.XDomainRequest && jQuery.ajaxTransport(function (t) {
    if (t.crossDomain && t.async) {
        t.timeout && (t.xdrTimeout = t.timeout, delete t.timeout);
        var e;
        return {
            send: function (n, r) {
                function i(t, n, i, o) {
                    e.onload = e.onerror = e.ontimeout = jQuery.noop, e = void 0, r(t, n, i, o)
                }
                e = new XDomainRequest, e.onload = function () {
                    i(200, "OK", {
                        text: e.responseText
                    }, "Content-Type: " + e.contentType)
                }, e.onerror = function () {
                    i(404, "Not Found")
                }, e.onprogress = jQuery.noop, e.ontimeout = function () {
                    i(0, "timeout")
                }, e.timeout = t.xdrTimeout || Number.MAX_VALUE, e.open(t.type, t.url), e.send(t.hasContent && t.data || null)
            },
            abort: function () {
                e && (e.onerror = jQuery.noop, e.abort())
            }
        }
    }
}), window.require.define({
    application: function (t, e, n) {
        (function () {
            var t, r, i, o, s, a, l, u, c, p, h = function (t, e) {
                    return function () {
                        return t.apply(e, arguments)
                    }
                }, d = {}.hasOwnProperty,
                f = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) d.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            r = e("controllers/auth_controller"), l = e("lib/avos"), i = e("chaplin"), s = e("controllers/layout_controller"), a = e("controllers/links_controller"), u = e("lib/logger"), c = e("mediator"), o = e("chaplin").Dispatcher, p = e("routes"), n.exports = t = function (t) {
                function n() {
                    return this.initApp = h(this.initApp, this), n.__super__.constructor.apply(this, arguments)
                }
                return f(n, t), n.prototype.title = "Delicious", n.prototype.initialize = function () {
                    return n.__super__.initialize.apply(this, arguments), this.dispatcher = c.dispatcher = new o, this._csrf = $('meta[name="_csrf"]').attr("content"), c.app = {
                        bulkEditActive: !1
                    }, $.ajaxSetup(l.ajax.options), this.initTemplateHelpers(), c.auth = new r, c.links = new a, this.initLayout(), c.user.get("password_hash") && c.user.get("username") ? c.user.loginSilent().always(this.initApp) : this.initApp(), yepnope({
                        test: window.JSON,
                        nope: "js/json2.js"
                    })
                }, n.prototype.initApp = function () {
                    return this.initRouter(p), new s, c.on("!router:route", this.trackPageView), "function" == typeof Object.freeze ? Object.freeze(this) : void 0
                }, n.prototype.initLayout = function (t) {
                    var n, r;
                    return null == t && (t = {}), n = e("views/layout"), null == (r = t.title) && (t.title = this.title), t.skipRouting = ".noscript, .question", this.layout = c.layout = new n(t)
                }, n.prototype.initTemplateHelpers = function () {
                    return e("templates/helpers/common"), e("templates/helpers/link_helpers"), e("templates/helpers/user_helpers")
                }, n.prototype.trackPageView = function (t) {
                    return _gaq.push(["_trackPageview", t])
                }, n
            }(i.Application)
        }).call(this)
    }
}), window.require.define({
    initialize: function (t, e) {
        (function () {
            var t;
            t = e("application"), $(function () {
                var e;
                return e = new t, e.initialize()
            })
        }).call(this)
    }
}), window.require.define({
    mediator: function (t, e, n) {
        (function () {
            n.exports = e("chaplin").mediator
        }).call(this)
    }
}), window.require.define({
    routes: function (t, e, n) {
        (function () {
            n.exports = function (t) {
                var e;
                return e = {
                    "": "home#index",
                    join: "users#join",
                    "join/intro": "users#intro",
                    "join/intro/:section": "users#intro",
                    "join/:section": "users#join",
                    "join/:section/:username": "users#join",
                    forgot_pw: "users#resetPassword",
                    "settings/pw/:id/:time/:passhash": "users#resetPassword",
                    signin: "auth#signin",
                    save: "bookmarklet#save",
                    post: "bookmarklet#save",
                    "help/quicktour/chrome": "plain#chrome",
                    "settings/:subpage/:section": "users#settings",
                    "settings/:subpage": "users#settings",
                    settings: "users#settings",
                    discover: "search#discover",
                    search: "search#consolidated",
                    "tag/:tags/search": "search#consolidated",
                    "tag/:tags": "search#consolidated",
                    "url/:md5": "search#link",
                    network: "search#network",
                    "network/:username": "search#network",
                    "network/:username/search": "search#network",
                    "network/:username/:tags/search": "search#network",
                    "network/:username/tag/:tags": "search#network",
                    about: "plain#about",
                    tools: ["html#page", {
                        params: {
                            page: "tools"
                        }
                    }],
                    help: ["html#page", {
                        params: {
                            page: "help"
                        }
                    }],
                    "help/:questionid": ["html#page", {
                        params: {
                            page: "help"
                        }
                    }],
                    terms: ["html#page", {
                        params: {
                            page: "terms"
                        }
                    }],
                    "terms-update": ["html#page", {
                        params: {
                            page: "terms-update"
                        }
                    }],
                    privacy: ["html#page", {
                        params: {
                            page: "privacy"
                        }
                    }],
                    copyright: ["html#page", {
                        params: {
                            page: "copyright"
                        }
                    }],
                    developers: ["html#page", {
                        params: {
                            page: "developers"
                        }
                    }],
                    "developers/:questionid": ["html#page", {
                        params: {
                            page: "developers"
                        }
                    }],
                    upgradebrowser: ["html#page", {
                        params: {
                            page: "upgradebrowser"
                        }
                    }],
                    redirect_warn: "links#redirectWarn",
                    "validate/:token": "users#validateEmail",
                    undefined: "oops#notfound",
                    notfound: "oops#notfound",
                    ":username/search": "search#profile",
                    ":username/tag_bundle/:tagBundle": "search#profile",
                    ":username/:tags/search": "search#profile",
                    ":username/:tags": "search#profile",
                    ":username": "search#profile"
                }, _.each(e, function (e, n) {
                    var r, i;
                    return r = n.replace(/\/$/, ""), i = [r], r.length > 0 && i.unshift(r + "/"), _.each(i, function (n) {
                        return _.isArray(e) ? t(n, _.first(e), _.rest(e)[0]) : t(n, e)
                    })
                })
            }
        }).call(this)
    }
}), window.require.define({
    "controllers/auth_controller": function (t, e, n) {
        (function () {
            var t, r, i, o, s, a, l, u = function (t, e) {
                    return function () {
                        return t.apply(e, arguments)
                    }
                }, c = {}.hasOwnProperty,
                p = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) c.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            r = e("lib/controller"), a = e("lib/logger"), l = e("mediator"), s = e("models/user"), i = e("views/auth/login"), o = e("views/auth/splash"), n.exports = t = function (t) {
                function e() {
                    return this.loginSuccess = u(this.loginSuccess, this), e.__super__.constructor.apply(this, arguments)
                }
                return p(e, t), e.prototype.redirectOnLogin = !0, e.prototype.redirectOnJoin = !0, e.prototype.events = {
                    "auth:login": "login"
                }, e.prototype.initialize = function () {
                    var t;
                    return e.__super__.initialize.apply(this, arguments), t = store.get("user"), l.user = new s(t), l.user.set("isLoggedIn", !1)
                }, e.prototype.signin = function () {
                    return l.layout.toggleBanner(!1), this.view = new i({
                        closeOnXClick: !1,
                        closeOnBackgroundClick: !1
                    })
                }, e.prototype.promptLogin = function (t) {
                    var e, n, r, s;
                    return null == t && (t = {}), null != t.redirect && (this.redirectOnLogin = t.redirect), null != t.redirectOnJoin && (this.redirectOnJoin = t.redirectOnJoin), t.model = l.user, r = new $.Deferred, this.subscribeEvent("login:success", _.once(r.resolve)), t.splash ? (s = new o(t), this.subscribeEvent("!router:route", function () {
                        return s.dispose()
                    })) : (e = new i(t), n = function () {
                        return r.reject()
                    }, e.$el.on("hide", n), e.on("socialClickThrough", function () {
                        return e.$el.off("hide", n)
                    })), r
                }, e.prototype.promptServiceLogin = function (t, e) {
                    return null == e && (e = {}), l.user.loginWithService(t).done(this.loginSuccess).fail(function (n) {
                        return e.redirectNewUsers !== !1 ? l.publish("!router:route", "/join/" + t + "/" + n.displayName) : void 0
                    })
                }, e.prototype.login = function (t) {
                    var e = this;
                    return l.user.login(t).done(this.loginSuccess).fail(function () {
                        return e.publishEvent("auth:bad_credentials")
                    })
                }, e.prototype.loginSilent = function (t) {
                    return l.user.loginSilent(t).done(this.loginSuccess)
                }, e.prototype.loginSuccess = function () {
                    return this.publishEvent("login:success"), this.redirectOnLogin && this.redirectTo(l.user.get("username")), this.redirectOnLogin = !0
                }, e.prototype.logout = function () {
                    return l.user.logout(), this.redirectTo("/discover")
                }, e.prototype.dispose = function () {
                    return l.user.logout(), e.__super__.dispose.apply(this, arguments)
                }, e
            }(r)
        }).call(this)
    }
}), window.require.define({
    "controllers/bookmarklet_controller": function (t, e, n) {
        (function () {
            var t, r, i, o, s, a, l, u = {}.hasOwnProperty,
                c = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) u.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            r = e("lib/controller"), i = e("models/link"), o = e("views/links/edit"), a = e("lib/logger"), l = e("mediator"), s = e("views/auth/splash"), n.exports = t = function (t) {
                function e() {
                    return e.__super__.constructor.apply(this, arguments)
                }
                return c(e, t), e.prototype.save = function (t) {
                    var e, n, r;
                    return r = t.v || "The buggy version", e = new i({
                        title: t.title,
                        url: t.url,
                        note: t.note
                    }), n = !1, l.user.get("isLoggedIn") || r >= 5 && 6 > r && (this.title = "Capture the web you’ve been missing", n = !0), l.links.compose({
                        model: e,
                        splash: n,
                        redirectOnJoin: !1
                    }).always(this.destroyBookmarklet)
                }, e.prototype.destroyBookmarklet = function () {
                    return window.parent.postMessage("destroy_bookmarklet", "*")
                }, e
            }(r)
        }).call(this)
    }
}), window.require.define({
    "controllers/home_controller": function (t, e, n) {
        (function () {
            var t, r, i, o, s, a, l = {}.hasOwnProperty,
                u = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) l.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            t = e("lib/controller"), i = e("views/home"), o = e("models/links"), s = e("lib/logger"), a = e("mediator"), n.exports = r = function (t) {
                function e() {
                    return e.__super__.constructor.apply(this, arguments)
                }
                return u(e, t), e.prototype.historyUrl = "/", e.prototype.initialize = function () {
                    return 0
                }, e.prototype.index = function () {
                    var t;
                    return t = a.user.get("username"), this.links = new o([], {
                        urlParams: {
                            type: "everyone",
                            limit: 40,
                            hasImage: !0
                        }
                    }), t ? this.redirectTo(t) : (this.title = "Capture the web you’ve been missing", this.view = new i({
                        links: this.links
                    }))
                }, e
            }(t)
        }).call(this)
    }
}), window.require.define({
    "controllers/html_controller": function (t, e, n) {
        (function () {
            var t, r, i, o, s, a = {}.hasOwnProperty,
                l = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) a.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            t = e("lib/controller"), s = e("mediator"), i = e("views/base/section"), o = e("models/user"), n.exports = r = function (t) {
                function e() {
                    return e.__super__.constructor.apply(this, arguments)
                }
                return l(e, t), e.prototype.pages = [{
                    url: "tools",
                    title: "Tools",
                    id: "tools"
                }, {
                    url: "help",
                    title: "Help",
                    id: "help"
                }, {
                    url: "terms",
                    title: "Terms",
                    id: "terms"
                }, {
                    url: "terms-update",
                    title: "Update",
                    id: "terms-update"
                }, {
                    url: "privacy",
                    title: "Privacy",
                    id: "privacy"
                }, {
                    url: "copyright",
                    title: "Copyright",
                    id: "copyright"
                }, {
                    url: "developers",
                    title: "Developers",
                    id: "developers"
                }], e.prototype.page = function (t) {
                    var e, n;
                    return e = _(this.pages).where({
                        url: t.page
                    }), this.title = (null != (n = e[0]) ? n.title : void 0) || "Discover Awesome", this.view = new i({
                        pages: this.pages,
                        currentId: t.page,
                        params: t
                    })
                }, e
            }(t)
        }).call(this)
    }
}), window.require.define({
    "controllers/layout_controller": function (t, e, n) {
        (function () {
            var t, r, i, o = function (t, e) {
                    return function () {
                        return t.apply(e, arguments)
                    }
                }, s = {}.hasOwnProperty,
                a = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) s.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            t = e("lib/controller"), i = e("mediator"), n.exports = r = function (t) {
                function e() {
                    return this.showRemember = o(this.showRemember, this), this.showNetwork = o(this.showNetwork, this), this.showDiscover = o(this.showDiscover, this), this.focusSearch = o(this.focusSearch, this), e.__super__.constructor.apply(this, arguments)
                }
                return a(e, t), e.prototype.initialize = function () {
                    return e.__super__.initialize.apply(this, arguments), key("/", this.focusSearch), key("1", this.showDiscover), key("2", this.showNetwork), key("3", this.showRemember)
                }, e.prototype.focusSearch = function (t) {
                    return t.preventDefault(), $("#search-field").focus()
                }, e.prototype.showDiscover = function () {
                    return this.redirectTo("/discover")
                }, e.prototype.showNetwork = function () {
                    return i.user.get("username") ? this.redirectTo("network") : void 0
                }, e.prototype.showRemember = function () {
                    var t;
                    return t = i.user.get("username"), t ? this.redirectTo(t) : void 0
                }, e
            }(t)
        }).call(this)
    }
}), window.require.define({
    "controllers/links_controller": function (t, e, n) {
        (function () {
            var t, r, i, o, s, a, l, u = function (t, e) {
                    return function () {
                        return t.apply(e, arguments)
                    }
                }, c = {}.hasOwnProperty,
                p = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) c.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            t = e("lib/controller"), r = e("models/link"), i = e("views/links/edit"), a = e("lib/logger"), s = e("views/links/warn"), l = e("mediator"), n.exports = o = function (t) {
                function e() {
                    return this.showNextDetailPane = u(this.showNextDetailPane, this), this.showPreviousDetailPane = u(this.showPreviousDetailPane, this), this.triggerAddEdit = u(this.triggerAddEdit, this), e.__super__.constructor.apply(this, arguments)
                }
                return p(e, t), e.prototype.historyURL = "", e.prototype.events = {
                    "links:compose": "compose"
                }, e.prototype.initialize = function () {
                    return e.__super__.initialize.apply(this, arguments), key("k", this.showPreviousDetailPane), key("up", this.showPreviousDetailPane), key("j", this.showNextDetailPane), key("down", this.showNextDetailPane), key("enter", this.openCurrentLink), key("a", this.triggerAddEdit), key("e", this.triggerAddEdit)
                }, e.prototype.redirectWarn = function (t) {
                    return this.view = new s({
                        model: new r({
                            url: t.url
                        })
                    })
                }, e.prototype.triggerAddEdit = function (t) {
                    var e;
                    return t.preventDefault(), e = $(".link.expanded"), e.find(".link-badge a").click()
                }, e.prototype.prevNext = function (t) {
                    var e, n;
                    return e = $(".link.expanded"), n = e[t](".link").first(), 1 === n.length ? (n.focus(), this.publishEvent("list:activateByMd5", n.data("md5"))) : void 0
                }, e.prototype.showPreviousDetailPane = function (t) {
                    return t.preventDefault(), this.prevNext("prevAll")
                }, e.prototype.showNextDetailPane = function (t) {
                    return t.preventDefault(), this.prevNext("nextAll")
                }, e.prototype.openCurrentLink = function () {
                    return "/" !== window.location.pathname ? window.open($(".link.expanded .link-title a").attr("href"), "_blank") : void 0
                }, e.prototype.compose = function (t) {
                    var e, n, r = this;
                    if (null != t.model) return n = t.response || new $.Deferred, _.defaults(t, {
                        redirect: !1,
                        redirectOnJoin: !0
                    }), l.user.get("isLoggedIn") ? (t.model.on("remove", function () {
                        return r.prevNext("nextAll")
                    }), t.model.on("save", n.resolve), e = new i(t), e.$el.on("hidden", function () {
                        return n.reject()
                    }), t.model.compose().done(_.bind(e.render, e)).fail(_.bind(e.hide, e))) : l.auth.promptLogin({
                        title: "Sign in to save this link",
                        redirect: t.redirect,
                        redirectOnJoin: t.redirectOnJoin,
                        splash: t.splash
                    }).done(function () {
                        return _.delay(function () {
                            return r.compose(_.extend(t, {
                                response: n
                            }))
                        }, 400)
                    }).fail(function () {
                        return n.reject()
                    }), n
                }, e
            }(t)
        }).call(this)
    }
}), window.require.define({
    "controllers/oops_controller": function (t, e, n) {
        (function () {
            var t, r, i, o = {}.hasOwnProperty,
                s = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) o.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            t = e("lib/controller"), r = e("views/oops/notfound"), n.exports = i = function (t) {
                function e() {
                    return e.__super__.constructor.apply(this, arguments)
                }
                return s(e, t), e.prototype.notfound = function () {
                    return this.view = new r
                }, e
            }(t)
        }).call(this)
    }
}), window.require.define({
    "controllers/plain_controller": function (t, e, n) {
        (function () {
            var t, r, i, o, s, a = {}.hasOwnProperty,
                l = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) a.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            t = e("views/about"), r = e("views/chrome"), i = e("lib/controller"), s = e("lib/logger"), n.exports = o = function (e) {
                function n() {
                    return n.__super__.constructor.apply(this, arguments)
                }
                return l(n, e), n.prototype.historyUrl = "/", n.prototype.initialize = function () {
                    return n.__super__.initialize.apply(this, arguments), 0
                }, n.prototype.about = function () {
                    return this.title = "About us", this.view = new t
                }, n.prototype.chrome = function () {
                    return this.title = "Chrome Quicktour", this.view = new r
                }, n
            }(i)
        }).call(this)
    }
}), window.require.define({
    "controllers/search_controller": function (t, e, n) {
        (function () {
            var t, r, i, o, s, a, l, u, c, p, h, d, f, m, g, v, y, w, b = {}.hasOwnProperty,
                k = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) b.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            g = e("lib/avos"), t = e("lib/controller"), v = e("lib/encode"), r = e("models/link"), i = e("models/links"), o = e("views/links/list"), y = e("lib/logger"), w = e("mediator"), s = e("views/oops/notfound"), a = e("views/user/profile"), l = e("views/tags/related_tag_list"), c = e("views/links/search_results"), f = e("models/tags"), p = e("models/tag_bundle"), h = e("views/tags/tag_bundle_list"), d = e("models/tag_bundles"), m = e("models/user"), n.exports = u = function (t) {
                function n() {
                    return n.__super__.constructor.apply(this, arguments)
                }
                return k(n, t), n.prototype.historyURL = "", n.prototype.initialize = function (t) {
                    var e;
                    return n.__super__.initialize.apply(this, arguments), this.mixin("lib/search_params"), this.subscribeEvent("search:addYourTag", this._addYourTag), this.subscribeEvent("search:addTag", this._addTag), this.subscribeEvent("search:onlyTag", this._onlyTag), this.subscribeEvent("search:onlyTagBundle", this._onlyTagBundle), this.subscribeEvent("search:addUsername", this._addUsername), this.username = (null != (e = w.user) ? e.get("username") : void 0) || null, this.searchParams = this._searchParams(t)
                }, n.prototype.link = function (t) {
                    return this.consolidated(t), this.title = "Delicious", this.view.$(".links-container").not(".everyone").addClass("hidden"), this.view.$(".tags-container").addClass("hidden")
                }, n.prototype.consolidated = function (t) {
                    var e, n, r = this;
                    return this._setTitle(t), n = _.extend(_.clone(t), {
                        type: "everyone"
                    }), this.communityLinks = new i([], {
                        urlParams: n,
                        subscribeToFetch: !0
                    }), w.user.get("isLoggedIn") ? (this.youLinks = new i([], {
                        urlParams: _.extend(_.clone(t), {
                            type: "you",
                            limit: 2
                        }),
                        subscribeOnceToFetch: !0
                    }), this.networkLinks = new i([], {
                        urlParams: _.extend(_.clone(t), {
                            type: "network",
                            limit: 2
                        }),
                        subscribeOnceToFetch: !0
                    }), e = [this.communityLinks, this.youLinks, this.networkLinks]) : e = [this.communityLinks], this.relatedTags = new f([], {
                        urlParams: {
                            type: "related"
                        },
                        subscribeToFetch: !0
                    }), this.view = new c({
                        model: w.user,
                        type: "all"
                    }), _.each(e, function (t) {
                        var e, n, i;
                        return i = t.urlParams.type, n = r.searchPathFromSearchParams(_.extend(r.searchParams, {
                            network: "network" === i,
                            username: "everyone" !== i && r.username
                        })), e = "everyone" === i ? "More links on Delicious" : i.charAt(0).toUpperCase() + i.slice(1), r.view.subview("links-" + i, new o({
                            collection: t,
                            heading: e,
                            container: r.view.$(".links-container." + i),
                            seeAllPath: n,
                            infiniteScroll: "everyone" === i
                        }))
                    }), this.view.subview("related-tags", new l({
                        collection: this.relatedTags,
                        el: ".tags-container.related"
                    })), this._triggerSearch(t)
                }, n.prototype.network = function (t) {
                    var n, r, s, a = this;
                    return this.username ? (t.network = !0, s = this.searchParams.username || this.username, this._setTitle(t), this.title = s === this.username ? "Your Network" : "" + s + "’s Network", this.links = new i([], {
                        urlParams: {
                            type: "network",
                            username: s
                        }
                    }), this.trendingTags = new f, this.relatedTags = new f, this.links.subscribeEvent("search:fetch", function (t) {
                        return a.links.urlParams = _.extend(_.clone(a.links.urlParams), t), a.links.reset([], {
                            silent: !0
                        }), a.links.fetch().done(function () {
                            var t, e, n;
                            return e = _.uniq(_.compact(_.flatten(a.links.pluck("tags")))), e = _.difference(e, a.links.urlParams.tags), n = _.map(e, function (t) {
                                return {
                                    name: t
                                }
                            }), t = a.links.urlParams.tags.length > 0, t ? a.relatedTags.reset(n) : a.trendingTags.reset(n)
                        })
                    }), this.view = new c({
                        type: "network",
                        model: w.user
                    }), this.view.subview("links", new o({
                        collection: this.links,
                        heading: this.title,
                        container: this.view.$(".links-container.network")
                    })), this.view.subview("trending-tags", new l({
                        collection: this.trendingTags,
                        el: ".tags-container.recent"
                    })), this.view.subview("related-tags", new l({
                        collection: this.relatedTags,
                        el: ".tags-container.related"
                    })), store.get("closedFeaturedFollowers") || (r = e("models/users"), n = e("views/user/featured_followers_collection"), this.users = new r, this.users.url = "/account/featuredusers", this.users.fetch().done(function () {
                        return a.view.subview("featured-followers", new n({
                            collection: a.users,
                            model: w.user
                        }))
                    })), this._triggerSearch(t)) : this.redirectTo(g.defaultRoute)
                }, n.prototype.profile = function (t) {
                    var e = this;
                    return null == this.searchTokensFromSearchParams && this.mixin("lib/search_params"), this._setTitle(t), this.user = new m({
                        username: this.searchParams.username
                    }), this.links = new i([], {
                        urlParams: {
                            username: this.searchParams.username,
                            tagBundle: this.searchParams.tagBundle
                        }
                    }), this.tagBundles = new d([], {
                        urlParams: {
                            username: this.searchParams.username
                        }
                    }), this.tagsInBundle = new f, this.currentTagBundle = new p, this.currentTagBundle.on("change", function () {
                        var t;
                        return t = _.map(e.currentTagBundle.get("tags"), function (t) {
                            return {
                                name: t
                            }
                        }), e.tagsInBundle.reset(t)
                    }), this.relatedTags = new f, this.allTags = new f([], {
                        urlParams: {
                            username: this.searchParams.username
                        }
                    }), this.allTags.fetch(), this.links.subscribeEvent("search:fetch", function (t) {
                        return e.links.urlParams = _.extend(_.clone(e.links.urlParams), t), e.links.reset([], {
                            silent: !0
                        }), e.links.fetch().done(function () {
                            var n, r, i, o, s;
                            return (n = t.tagBundle) && e.currentTagBundle.fetchTags(e.searchParams.username, n), r = e.links.urlParams.keywords.length > 0, i = e.links.urlParams.tags.length > 0, r || i ? (o = _.uniq(_.compact(_.flatten(e.links.pluck("tags")))), o = _.difference(o, e.links.urlParams.tags), s = _.map(o, function (t) {
                                return {
                                    name: t
                                }
                            }), e.relatedTags.reset(s)) : void 0
                        })
                    }), this.subscribeEvent("tagBundle:save", function (t) {
                        return 0 === e.tagBundles.where({
                            name: t.get("name")
                        }).length ? e.tagBundles.add(t) : void 0
                    }), this.user.profile().fail(function () {
                        return e.view = new s
                    }).done(function (n) {
                        return null === n.pkg ? e.view = new s : (e.view = new a({
                            model: e.user,
                            tagBundles: e.tagBundles
                        }), e.tagBundles.fetch(), e.view.subview("links", new o({
                            collection: e.links,
                            container: e.view.$(".links-container")
                        })), e.view.subview("related-tags", new l({
                            collection: e.relatedTags,
                            el: e.view.$(".tags-container.related"),
                            limit: 1e4
                        })), e.view.subview("all-tags", new l({
                            collection: e.allTags,
                            el: e.view.$(".tags-container.all"),
                            selected: store.get("orderBy")
                        })), e.view.subview("tag_bundles", new h({
                            collection: e.tagBundles
                        })), e.view.subview("tags-in-bundle", new l({
                            collection: e.tagsInBundle,
                            el: e.view.$(".tags-container.in-bundle"),
                            showingAllTags: !0
                        }))), !e.user.isMe() || t.p || t.tags ? void 0 : (e.subscribeEvent("link:added", function () {
                            return e._triggerSearch(t)
                        }), e.subscribeEvent("tags:managed", function () {
                            return e.allTags.reset([], {
                                silent: !0
                            }), e.allTags.fetch().done(function () {
                                return w.user.set("tags", e.allTags.toJSON())
                            })
                        }))
                    }), this._triggerSearch(t)
                }, n.prototype.discover = function (t) {
                    return this.publishEvent("autocomplete:clear"), this.title = "Discover", this.links = new i([], {
                        urlParams: {
                            type: "everyone"
                        },
                        subscribeToFetch: !0
                    }), this.trendingTags = new f([], {
                        urlParams: {
                            type: "trending"
                        },
                        subscribeToFetch: !0
                    }), this.view = new c({
                        type: "discover"
                    }), this.view.subview("links", new o({
                        collection: this.links,
                        heading: "Discover Delicious",
                        container: this.view.$(".links-container.everyone")
                    })), this.view.subview("trending-tags", new l({
                        collection: this.trendingTags,
                        el: ".tags-container.recent"
                    })), this._triggerSearch(t)
                }, n.prototype._addYourTag = function (t) {
                    var e, n, r, i, o;
                    return e = $("#search-field"), i = e.val(), (n = e.data("excluded-fragment")) && (i = i.replace(RegExp("" + n + "$"), ""), e.data("excluded-fragment", null)), o = this.searchParamsFromSearchString(i), o.tags = _.uniq((o.tags || []).concat(t)), o.tagBundle = null, o.username || (o.username = w.user.get("username")), r = this.searchPathFromSearchParams(o), this.publishEvent("!router:route", r)
                }, n.prototype._addTag = function (t) {
                    var e, n, r, i, o;
                    return e = $("#search-field"), i = e.val(), (n = e.data("excluded-fragment")) && (i = i.replace(RegExp("" + n + "$"), ""), e.data("excluded-fragment", null)), o = this.searchParamsFromSearchString(i), o.tags = _.uniq((o.tags || []).concat(t)), o.tagBundle = null, r = this.searchPathFromSearchParams(o), this.publishEvent("!router:route", r)
                }, n.prototype._onlyTag = function (t) {
                    var e, n, r, i, o;
                    return e = $("#search-field"), i = e.val(), (n = e.data("excluded-fragment")) && (i = i.replace(RegExp("" + n + "$"), ""), e.data("excluded-fragment", null)), o = this.searchParamsFromSearchString(i), o.tags = [t], o.tagBundle = null, r = this.searchPathFromSearchParams(o), this.publishEvent("!router:route", r)
                }, n.prototype._onlyTagBundle = function (t) {
                    var e, n, r, i, o;
                    return e = $("#search-field"), i = e.val(), (n = e.data("excluded-fragment")) && (n = n.replace(/(\[|\])/, "\\$1"), i = i.replace(RegExp("" + n + "$"), ""), e.data("excluded-fragment", null)), o = this.searchParamsFromSearchString(i), o.tagBundle = t, o.username || (o.username = w.user.get("username")), r = this.searchPathFromSearchParams(o), this.publishEvent("!router:route", r)
                }, n.prototype._addUsername = function (t) {
                    var e, n, r, i, o;
                    return e = $("#search-field"), i = e.val(), (n = e.data("excluded-fragment")) && (i = i.replace(RegExp("" + n + "$"), ""), e.data("excluded-fragment", null)), o = this.searchParamsFromSearchString(i), o.username = t, r = this.searchPathFromSearchParams(o), this.publishEvent("!router:route", r)
                }, n.prototype._triggerSearch = function (t) {
                    return this.publishEvent("search:fetch", this._searchParams(t))
                }, n.prototype._setTitle = function (t) {
                    var e;
                    return e = this._searchParams(t), this.title = this.searchTokensFromSearchParams(e).join(" "), this.publishEvent("autocomplete:replace", this.title)
                }, n.prototype._searchParams = function (t) {
                    var e, n, r;
                    return {
                        username: (null != t ? null != (e = t.username) ? e.trim() : void 0 : void 0) || null,
                        tags: (null != t ? null != (n = t.tags) ? n.split("+") : void 0 : void 0) || [],
                        keywords: (null != (r = t.p) ? r.split(",") : void 0) || [],
                        network: t.network || !1,
                        tagBundle: t.tagBundle || null
                    }
                }, n
            }(t)
        }).call(this)
    }
}), window.require.define({
    "controllers/users_controller": function (t, e, n) {
        (function () {
            var t, r, i, o, s, a, l = {}.hasOwnProperty,
                u = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) l.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                }, c = [].slice;
            o = e("lib/avos"), t = e("lib/controller"), s = e("lib/logger"), a = e("mediator"), r = e("models/user"), n.exports = i = function (t) {
                function n() {
                    return n.__super__.constructor.apply(this, arguments)
                }
                return u(n, t), n.prototype.validateEmail = function (t) {
                    var n, i, o = this;
                    return i = new r, n = e("views/user/validate_email"), i.validateEmail(t.token, function (t) {
                        return o.view = new n({
                            model: i,
                            result: t
                        })
                    })
                }, n.prototype.settings = function (t) {
                    var n, r;
                    return n = e("views/base/section"), this.title = "Settings", r = a.user, r.get("isLoggedIn") ? this.view = new n({
                        pages: [{
                            title: "Profile",
                            view: "views/user/settings/settings",
                            model: r,
                            url: "settings",
                            id: "profile"
                        }, {
                            title: "Account",
                            view: "views/user/settings/account",
                            url: "settings/account",
                            id: "account"
                        }, {
                            title: "Find friends",
                            view: "views/user/settings/friends",
                            url: "settings/friends",
                            id: "friends"
                        }, {
                            title: "Import links",
                            view: "views/user/settings/sources",
                            url: "settings/sources",
                            id: "sources",
                            active: "sources" === t.subpage,
                            subpages: [{
                                title: "Facebook",
                                view: "views/user/settings/service",
                                url: "settings/sources/facebook",
                                id: "facebook",
                                active: "facebook" === t.section
                            }, {
                                title: "Twitter",
                                view: "views/user/settings/service",
                                url: "settings/sources/twitter",
                                id: "twitter",
                                active: "twitter" === t.section
                            }]
                        }],
                        currentId: t.subpage,
                        currentSectionId: t.section
                    }) : (a.auth.promptLogin({
                        redirect: !1
                    }).fail(_.bind(this.redirectTo, this, o.defaultRoute)).done(_.bind.apply(_, [this.settings, this].concat(c.call(arguments)))), void 0)
                }, n.prototype.join = function (t) {
                    var n, r = this;
                    return n = e("views/auth/join"), a.user.get("isLoggedIn") ? (this.redirectTo(a.user.get("username")), void 0) : (this.title = "Join", this.view = new n({
                        section: t.section
                    }), this.view.on("register", function () {
                        return a.auth.redirectOnLogin = !1, a.auth.redirectOnJoin ? r.subscribeEvent("login:success", function () {
                            return r.redirectTo("/join/intro")
                        }) : void 0
                    }), this.view.on("htmlLoaded", function () {
                        return t.username && r.view.prefillAndCreate(t.username), "create" === t.section ? r.view.toCreateAccount() : void 0
                    }))
                }, n.prototype.intro = function (t) {
                    var n;
                    return n = e("views/auth/intro"), this.title = "Introduction", a.user.get("isLoggedIn") ? this.view = new n({
                        model: a.user,
                        section: t.section
                    }) : (this.redirectTo("join"), void 0)
                }, n.prototype.resetPassword = function (t) {
                    var n, r;
                    return a.user.get("isLoggedIn") ? (this.redirectTo("settings/account"), void 0) : (this.title = "Reset password", r = {
                        model: a.user
                    }, t.passhash && (r.showReset = !0, r.tokens = t), n = e("views/auth/forgot_pw"), this.view = new n(r))
                }, n
            }(t)
        }).call(this)
    }
}), window.require.define({
    "lib/avos": function (t, e, n) {
        (function () {
            var t;
            n.exports = t = {
                api_hosts: ["avosapi.delicious.com"],
                api_host: function () {
                    return t.api_hosts[Math.floor(Math.random() * t.api_hosts.length)]
                },
                api_path: "/api/v1",
                default_avatar: "//delicious-icons.s3.amazonaws.com/default-avatar-2.jpg",
                defaultRoute: "/discover",
                logging: !0,
                ajax: {
                    options: {
                        cache: !1,
                        dataType: "json",
                        type: "GET",
                        timeout: 1e4,
                        headers: {
                            Accept: ""
                        },
                        xhrFields: {
                            withCredentials: !0
                        }
                    }
                },
                popup: {
                    allowedOrigins: ["http://avosapi.delicious.com", "https://avosapi.delicious.com"],
                    options: {
                        menubar: "no",
                        toolbar: "no",
                        width: 790,
                        height: 360
                    }
                },
                spinner: {
                    defaults: {
                        lines: 11,
                        length: 0,
                        width: 4,
                        radius: 8,
                        corners: 1,
                        rotate: 0,
                        color: "#285da7",
                        speed: 1,
                        trail: 10,
                        shadow: !1,
                        hwaccel: !0,
                        className: "spinner",
                        zIndex: 1,
                        top: "auto",
                        left: "auto"
                    }
                }
            }
        }).call(this)
    }
}), window.require.define({
    "lib/collection": function (t, e, n) {
        (function () {
            var t, r, i, o, s = {}.hasOwnProperty,
                a = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) s.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            o = e("lib/avos"), t = e("chaplin"), i = e("lib/model"), n.exports = r = function (t) {
                function n() {
                    return n.__super__.constructor.apply(this, arguments)
                }
                return a(n, t), n.prototype.xhrPool = [], n.prototype.parse = function (t) {
                    return _.isEmpty(t) ? [] : (null != t ? t.pkg : void 0) || []
                }, n.prototype.mixin = e("lib/mixin"), n.prototype.api = i.prototype.api, n.prototype.initialize = function (t, e) {
                    return null == t && (t = []), null == e && (e = {}), this.urlParams = e.urlParams, delete e.urlParams, n.__super__.initialize.apply(this, arguments)
                }, n.prototype.fetch = function (t) {
                    return null == t && (t = {}), this.length > 0 && (t.add = !0), n.__super__.fetch.apply(this, arguments)
                }, n.prototype.sync = function (t, e, n) {
                    var r;
                    return r = {}, r.url = "function" == typeof this.url ? this.url() : null != e.url ? e.url : void 0, r = _.extend(r, n), this.api(r)
                }, n.prototype._anchor = function () {
                    var t, e;
                    return 1 > this.length ? -1 : (e = _.sortBy(this.pluck("time_created"), function (t) {
                        return t
                    }), t = _.first(e), (t || 0) - 1)
                }, n.prototype._index = function () {
                    var t;
                    return 1 > this.length ? 0 : (t = _.sortBy(this.pluck("index"), function (t) {
                        return t
                    }), _.last(t) || 0)
                }, n.prototype.dispose = function () {
                    return _.each(this.xhrPool, function (t) {
                        return t.abort()
                    }), n.__super__.dispose.apply(this, arguments)
                }, n
            }(t.Collection)
        }).call(this)
    }
}), window.require.define({
    "lib/collection_view": function (t, e, n) {
        (function () {
            var t, r, i, o = {}.hasOwnProperty,
                s = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) o.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            t = e("chaplin"), i = e("lib/view"), n.exports = r = function (t) {
                function n() {
                    return n.__super__.constructor.apply(this, arguments)
                }
                return s(n, t), n.prototype.mixin = e("lib/mixin"), n.prototype.autoRender = !0, n.prototype.useCssAnimation = !0, n.prototype.getTemplateFunction = i.prototype.getTemplateFunction, n.prototype.showHeadingIfEmpty = !0, n.prototype.defaults = {
                    heading: !1,
                    headingLevel: 2,
                    showHeadingIfEmpty: !0
                }, n.prototype.isMobile = i.prototype.isMobile, n.prototype.isDesktop = i.prototype.isDesktop, n.prototype.isTouch = i.prototype.isTouch, n.prototype.isiPhone = i.prototype.isiPhone, n.prototype.initialize = function (t) {
                    return this.options = null != t ? t : {}, _.defaults(this.options, this.defaults), n.__super__.initialize.apply(this, arguments), this.showHeadingIfEmpty || this.modelBind("reset", this.renderHeading), this.collection && this.loadingIndicator ? this.modelBind("reset", this.hideLoading) : void 0
                }, n.prototype.renderHeading = function () {
                    var t;
                    return t = this.$list || this.$el, this.options.heading && (this.options.showHeadingIfEmpty || this.collection.length > 0) ? t.before("<h" + this.options.headingLevel + ">" + this.options.heading + "</h" + this.options.headingLevel + ">") : void 0
                }, n.prototype.afterRender = function () {
                    return n.__super__.afterRender.apply(this, arguments), this.renderHeading(), this.loadingIndicator && this.collection.isEmpty() ? this.setLoading() : void 0
                }, n.prototype.setLoading = i.prototype.setLoading, n.prototype.hideLoading = i.prototype.hideLoading, n
            }(t.CollectionView)
        }).call(this)
    }
}), window.require.define({
    "lib/controller": function (t, e, n) {
        (function () {
            var t, r, i, o, s = {}.hasOwnProperty,
                a = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) s.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            t = e("chaplin"), i = e("lib/logger"), o = t.mediator, n.exports = r = function (t) {
                function n() {
                    return n.__super__.constructor.apply(this, arguments)
                }
                return a(n, t), n.prototype.mixin = e("lib/mixin"), n.prototype.initialize = function () {
                    var t = this;
                    return n.__super__.initialize.apply(this, arguments), this.events ? _(this.events).each(function (e, n) {
                        return "function" == typeof t[e] ? t.subscribeEvent(n, t[e]) : 0
                    }) : void 0
                }, n
            }(t.Controller)
        }).call(this)
    }
}), window.require.define({
    "lib/delicious_autocomplete_item": function (t, e, n) {
        (function () {
            var t, e = {}.hasOwnProperty,
                r = function (t, n) {
                    function r() {
                        this.constructor = t
                    }
                    for (var i in n) e.call(n, i) && (t[i] = n[i]);
                    return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
                };
            n.exports = t = function (t) {
                function e() {
                    return e.__super__.constructor.apply(this, arguments)
                }
                return r(e, t), e.prototype.matches = function (t) {
                    return t.test(this.get("name")) || t.test(this.get("description")) || t.test(this.completion())
                }, e
            }(AutocompleteItem)
        }).call(this)
    }
}), window.require.define({
    "lib/delicious_autocomplete_items": function (t, e, n) {
        (function () {
            var t, r, i = {}.hasOwnProperty,
                o = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) i.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            t = e("lib/delicious_autocomplete_item"), n.exports = r = function (e) {
                function n() {
                    return n.__super__.constructor.apply(this, arguments)
                }
                return o(n, e), n.prototype.model = t, n
            }(AutocompleteItems)
        }).call(this)
    }
}), window.require.define({
    "lib/encode": function (t, e, n) {
        (function () {
            n.exports = function (t) {
                return t = encodeURIComponent(t), t.replace(/\./g, "%2E")
            }
        }).call(this)
    }
}), window.require.define({
    "lib/logger": function (t, e, n) {
        (function () {
            var t, e, r, i, o, s = [].slice;
            e = 15, o = (new Date).getTime(), i = !1, t = function (t) {
                var n;
                return null == t && (t = ""), n = e - t.length + 1, 0 > n && (n = 0), Array(n).join(" ")
            }, n.exports = r = {
                error: function () {
                    var t, e;
                    return e = arguments[0], t = arguments.length >= 2 ? s.call(arguments, 1) : [], r.log.apply(r, [e, "error"].concat(s.call(t)))
                },
                log: function () {
                    var t, e, n, r, a;
                    return n = arguments[0], e = arguments[1], t = arguments.length >= 3 ? s.call(arguments, 2) : [], null == e && (e = "log"), i ? ("log" !== e && "warn" !== e && "error" !== e && (t.unshift(e), e = "log"), "string" != typeof n && (t.unshift(n), n = ""), r = (new Date).getTime(), a = r - o + "ms", _(t).each(function (t) {
                        return "object" == typeof t ? _(t).each(function () {
                            return 0
                        }) : void 0
                    })) : void 0
                },
                set: function (t) {
                    return null == t && (t = !1), t === !0 ? i = !0 : void 0
                },
                warn: function () {
                    var t, e;
                    return e = arguments[0], t = arguments.length >= 2 ? s.call(arguments, 1) : [], r.log.apply(r, [e, "warn"].concat(s.call(t)))
                }
            }
        }).call(this)
    }
}), window.require.define({
    "lib/mixin": function (t, e, n) {
        (function () {
            var t = [].slice,
                r = {}.hasOwnProperty;
            n.exports = function () {
                var n, i, o, s, a, l, u, c;
                for (a = arguments.length >= 1 ? t.call(arguments, 0) : [], u = 0, c = a.length; c > u; u++) {
                    o = a[u], s = e(o);
                    for (i in s) r.call(s, i) && (l = s[i], this[i] = l);
                    n = s.attached, n && n.apply(this)
                }
                return this
            }
        }).call(this)
    }
}), window.require.define({
    "lib/model": function (t, e, n) {
        (function () {
            var t, r, i, o, s, a = {}.hasOwnProperty,
                l = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) a.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            t = e("chaplin"), s = e("mediator"), i = e("lib/avos"), o = e("lib/logger"), s.loginFailCount = 0, s.retryCounter = {}, n.exports = r = function (t) {
                function e() {
                    return e.__super__.constructor.apply(this, arguments)
                }
                return l(e, t), e.prototype.xhrPool = [], e.prototype.api = function (t) {
                    var e, n, r, o, a, l, u = this;
                    return r = _.extend({}, i.ajax.options, t, {
                        dataType: $("html").hasClass("lt-ie10") ? "jsonp" : "json",
                        url: "//" + i.api_host() + i.api_path + t.url,
                        success: null,
                        error: null
                    }), l = new Date, a = function (e, r, i) {
                        var l;
                        if ("expired_session" === (null != e ? e.status : void 0)) {
                            if (s.loginFailCount++, 2 > s.loginFailCount && s.user.get("password_hash") && s.user.get("username")) return o.notify("Attempting to reAuth with silent login"), s.user.loginSilent().fail(a).done(function () {
                                return n(), s.loginFailCount = 0
                            });
                            s.user.logout(), s.loginFailCount = 0
                        } else if ("success" === (null != e ? e.status : void 0)) return l = u.xhrPool.indexOf(i), -1 !== l && u.xhrPool.splice(l, 1), $.isFunction(t.success) && t.success.apply(t, arguments), o.resolve.apply(o, arguments), void 0;
                        return _.isFunction(t.error) && t.error.apply(t, arguments), o.reject.apply(o, arguments)
                    }, e = function () {
                        return _.isFunction(t.error) && t.error.apply(t, arguments), o.reject.apply(o, arguments)
                    }, n = function () {
                        return u.xhrPool.push($.ajax(r).fail(e).done(a))
                    }, n(), o = new $.Deferred
                }, e.prototype.dispose = function () {
                    return _.each(this.xhrPool, function (t) {
                        return t.abort()
                    }), e.__super__.dispose.apply(this, arguments)
                }, e
            }(t.Model)
        }).call(this)
    }
}), window.require.define({
    "lib/obfuscate": function (t, e, n) {
        (function () {
            n.exports = function (t) {
                var e;
                return e = t.split("").reverse().join(""), Base64.toBase64(e)
            }
        }).call(this)
    }
}), window.require.define({
    "lib/popup": function (t, e, n) {
        (function () {
            var t, r = [].indexOf || function (t) {
                    for (var e = 0, n = this.length; n > e; e++)
                        if (e in this && this[e] === t) return e;
                    return -1
                };
            t = e("lib/avos"), n.exports = function (e) {
                var n, i;
                return null == e && (e = {}), i = _.extend({}, t.popup.options, e), delete i.url, delete i.success, delete i.popupWindowName, delete i.crossWindowMessageName, n = function (i) {
                    var o;
                    return i = i.originalEvent, o = i.origin, 0 > r.call(t.popup.allowedOrigins, o) || i.data.name !== e.crossWindowMessageName ? void 0 : (e.success(i.data.body), $(window).off("message", n))
                }, $(window).on("message", n), window.open("//" + t.api_host() + t.api_path + e.url, e.popupWindowName, $.param(i).replace(/&/g, ","))
            }
        }).call(this)
    }
}), window.require.define({
    "lib/search_params": function (t, e, n) {
        (function () {
            var t, r, i, o;
            r = e("lib/encode"), i = e("lib/logger"), o = e("mediator"), t = e("models/tag"), n.exports = {
                tokenizeSearchString: function (e) {
                    var n;
                    return n = _.uniq(e.match(/@\S+|#"[^"]+"|#'[^']+'|#\S+|\[[^\]]+\]|[0-9a-f]{32}|\S+/g) || []), n = _.reject(n, function (t) {
                        return /^#*$/.test(t)
                    }), n = _.map(n, function (e) {
                        return /^#'[^'\s]+'$|^#"[^"\s]+"$/.test(e) && (e = e.replace(/'|"/, "")), t.unquote(e)
                    })
                },
                searchParamsFromSearchString: function (t) {
                    var e;
                    return e = {
                        username: null,
                        tags: [],
                        keywords: []
                    }, t = t.trim(), _.isEmpty(t) ? e : (_.each(this.tokenizeSearchString(t), function (t) {
                        var n, r, i, s;
                        return (r = t.match(/#(.+)/)) ? (i = _.last(r).trim(), i = i.replace(/^'|^"/, "").replace(/'$|"$/, ""), e.tags.push(i)) : (r = t.match(/^@([^\/]+)/)) ? e.username || (e.username = _.last(r).trim(), e.network = /(?:\S{1,}\/|^@)network$/.test(t), "me" !== e.username && "network" !== e.username) ? void 0 : e.username = null != (s = o.user) ? s.get("username") : void 0 : (r = t.match(/^\[([^\[\]]+)\]/)) ? e.tagBundle = _.last(r).trim() : (r = t.match(/([0-9a-f]{32})/)) ? e.md5 = _.last(r).trim() : (n = t.trim(), e.keywords.push(n))
                    }), e)
                },
                searchTokensFromSearchParams: function (e) {
                    var n, r, i, s, a, l, u;
                    return s = [], (a = (null != (l = e.username) ? l.trim() : void 0) || null) && (e.network && (a === (null != (u = o.user) ? u.get("username") : void 0) ? a = "network" : a += "/network"), s.push("@" + a)), i = e.tags || [], s = s.concat(_.map(i, function (e) {
                        var n;
                        return n = t.unquote(e), n = decodeURIComponent(n), /\s/.test(n) ? '#"' + n + '"' : "#" + n
                    })), n = e.keywords || [], s = s.concat(n), e.tagBundle && (r = t.unquote(e.tagBundle), r = decodeURIComponent(r), s = s.concat("[" + r + "]")), s = _.compact(_.uniq(_.map(s, function (t) {
                        return t.trim()
                    })))
                },
                searchPathFromSearchParams: function (t) {
                    var e, n, i, o, s, a, l;
                    return l = t.username, e = t.keywords, a = t.tags, i = t.network, s = t.tagBundle, n = t.md5, (null != a ? a.length : void 0) > 0 && (a = _.map(a, function (t) {
                        return r(t)
                    })), o = "", n ? "/url/" + n : (l ? i ? (o = "/network/" + l, a && a.length > 0 && (o += e && e.length > 0 ? "/" + a.join("+") : "/tag/" + a.join("+"))) : (o = "/" + l, s ? o += "/tag_bundle/" + r(s) : a && a.length > 0 && (o += "/" + a.join("+"))) : a && a.length > 0 && (o = "/tag/" + a.join("+")), e && e.length > 0 && (o = o + "/search?" + $.param({
                        p: e.join(",")
                    })), o)
                }
            }
        }).call(this)
    }
}), window.require.define({
    "lib/view": function (t, e, n) {
        (function () {
            var t, r, i, o = {}.hasOwnProperty,
                s = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) o.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                }, a = [].slice;
            t = e("chaplin"), i = e("lib/avos"), n.exports = r = function (t) {
                function n() {
                    return n.__super__.constructor.apply(this, arguments)
                }
                return s(n, t), n.prototype.mixin = e("lib/mixin"), n.prototype.autoRender = !0, n.prototype.subviews = [], n.prototype.defaults = {}, n.prototype.isMobile = function () {
                    return Modernizr.mq("(max-width: 767px)")
                }, n.prototype.isDesktop = function () {
                    return Modernizr.mq("(min-width: 767px)")
                }, n.prototype.isTouch = function () {
                    return Modernizr.touch
                }, n.prototype.isiPhone = function () {
                    return navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i)
                }, n.prototype.getTemplateFunction = function () {
                    return this.template ? this._cachedTemplateFunction || (this._cachedTemplateFunction = e("templates/" + this.template)) : void 0
                }, n.prototype.initialize = function (t) {
                    var e;
                    return this.options = null != t ? t : {}, null == (e = this.template) && (this.template = this.options.template), _.defaults(this.options, this.defaults), this.collection && this.loadingIndicator && this.modelBind("reset", this.hideLoading), n.__super__.initialize.apply(this, arguments)
                }, n.prototype.render = function () {
                    return n.__super__.render.apply(this, arguments), this.loadingIndicator && this.setLoading(), this
                }, n.prototype.setLoading = function (t) {
                    var e;
                    return null == t && (t = {}), null != (e = this.$fallback) && e.hide(), _.defaults(t, i.spinner.defaults), this.$(".loading").show().spin(t)
                }, n.prototype.hideLoading = function () {
                    var t, e;
                    return t = this.$(".loading"), (null != (e = t.data()) ? e.spinner : void 0) && t.spin(), this.$el ? t.hide() : void 0
                }, n.prototype.getFormData = function () {
                    var t, e;
                    return e = arguments.length >= 1 ? a.call(arguments, 0) : [], t = this.$("form").formParams(), e.length ? _.pick.apply(_, [t].concat(a.call(e))) : t
                }, n
            }(t.View)
        }).call(this)
    }
}), window.require.define({
    "models/connect": function (t, e, n) {
        (function () {
            var t, r, i, o, s = {}.hasOwnProperty,
                a = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) s.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            o = e("lib/popup"), i = e("mediator"), r = e("lib/model"), n.exports = t = function (t) {
                function e() {
                    return e.__super__.constructor.apply(this, arguments)
                }
                return a(e, t), e.prototype.defaults = {
                    privacy_options: [{
                        value: "ALL_PUBLIC",
                        text: "Make links public"
                    }, {
                        value: "ALL_PRIVATE",
                        text: "Make links private"
                    }, {
                        value: "AUTOMATIC",
                        text: "Keep the same privacy"
                    }]
                }, e.prototype.initialize = function () {
                    return e.__super__.initialize.apply(this, arguments), this.set("sharingMessage", "facebook" === this.get("providerId") ? "Links you share on Facebook or post on your own wall will be imported to Delicious." : "Links you share on Twitter will be imported to Delicious.")
                }, e.prototype.connect = function (t, e) {
                    var n;
                    return n = {
                        url: "/connect/to/" + this.get("providerId") + "?active=" + t,
                        crossWindowMessageName: "connect_to_delicious",
                        popupWindowName: "Connect_To_" + this.get("providerId") + "_From_Delicious",
                        success: function (t) {
                            return _.isFunction(e) ? e(t) : void 0
                        }
                    }, "facebook" === this.get("providerId") && (n = _.extend(n, {
                        width: 1e3,
                        height: 610
                    })), o(n)
                }, e.prototype.disconnect = function () {
                    var t = this;
                    return this.api({
                        url: "/connect/delete/" + this.get("providerId"),
                        success: function () {
                            var e;
                            return null != (e = t.collection) && e.remove(t), t.dispose()
                        }
                    })
                }, e.prototype.update = function (t, e) {
                    var n = this;
                    return this.api({
                        url: "/connect/update/" + this.get("providerId") + "/" + this.get("providerUserId"),
                        data: t,
                        success: function () {
                            return _.isFunction(e) ? e(n) : void 0
                        }
                    })
                }, e
            }(r)
        }).call(this)
    }
}), window.require.define({
    "models/connects": function (t, e, n) {
        (function () {
            var t, r, i, o = {}.hasOwnProperty,
                s = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) o.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            t = e("lib/collection"), r = e("models/connect"), n.exports = i = function (t) {
                function e() {
                    return e.__super__.constructor.apply(this, arguments)
                }
                return s(e, t), e.prototype.model = r, e.prototype.url = function () {
                    return "/connect"
                }, e.prototype.parse = function () {
                    var t;
                    return t = e.__super__.parse.apply(this, arguments), _.flatten(_.values(t))
                }, e.prototype.filterForLinkImporting = function () {
                    return this.filter(function (t) {
                        return t.get("active") === !0
                    })
                }, e.prototype.findByProvider = function (t) {
                    return this.find(function (e) {
                        return e.get("providerId") === t
                    })
                }, e
            }(t)
        }).call(this)
    }
}), window.require.define({
    "models/link": function (t, e, n) {
        (function () {
            var t, r, i, o, s, a, l, u = function (t, e) {
                    return function () {
                        return t.apply(e, arguments)
                    }
                }, c = {}.hasOwnProperty,
                p = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) c.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            a = e("lib/logger"), l = e("mediator"), r = e("lib/model"), i = e("models/notes"), o = e("models/tag"), s = e("models/tags"), n.exports = t = function (t) {
                function e() {
                    return this.compose = u(this.compose, this), e.__super__.constructor.apply(this, arguments)
                }
                return p(e, t), e.prototype.addOrEdit = function (t) {
                    var e = this;
                    return this.api({
                        data: t,
                        url: "/posts/addoredit",
                        success: function () {
                            var n, r;
                            return r = e.get("savers") || [], n = l.user.toJSON(), e.set("savers", [n].concat(r)), e.set(_.extend(t, {
                                "private": t["private"],
                                title: t.description,
                                tags: t.tags.split(",")
                            })), store.set("newLinkPrivate", "on" === t["private"]), store.set("insertRecommendedTags", "on" === t.showTags), e.publishEvent("link:" + (t.replace ? "edited" : "added"), e), e.trigger("save")
                        }
                    })
                }, e.prototype.bulkEdit = function (t) {
                    return this.api({
                        data: t,
                        url: "/tag/edit/all"
                    })
                }, e.prototype.compose = function () {
                    var t = this;
                    return this.api({
                        data: {
                            url: this.get("url")
                        },
                        url: "/posts/compose",
                        success: function (e) {
                            return null != e.pkg && (t.set({
                                recommended: e.pkg
                            }), e.pkg.previously_saved === !0) ? (t.set("title", e.pkg.suggested_title), t.set("tags", e.pkg.previous_tags), t.set("note", e.pkg.note)) : void 0
                        }
                    })
                }, e.prototype.deleteAll = function (t) {
                    return this.api({
                        data: {
                            md5s: t
                        },
                        url: "/links/delete"
                    })
                }, e.prototype.markAs = function (t, e) {
                    return this.api({
                        data: {
                            md5s: e
                        },
                        type: "GET",
                        url: "/links/make/" + t
                    })
                }, e.prototype.notes = function () {
                    return new i([], {
                        urlParams: {
                            md5: this.get("md5")
                        }
                    })
                }, e.prototype.tags = function () {
                    return _.uniq(_.map(this.get("tags"), function (t) {
                        return o.normalize(t)
                    }))
                }, e.prototype.relatedTags = function (t) {
                    return new s([], {
                        urlParams: {
                            type: "related",
                            tags: t
                        }
                    })
                }, e.prototype.remove = function () {
                    return this.api({
                        data: {
                            url: encodeURIComponent(this.get("url"))
                        },
                        type: "GET",
                        url: "/posts/delete",
                        success: _.bind(this.destroy, this)
                    })
                }, e
            }(r)
        }).call(this)
    }
}), window.require.define({
    "models/links": function (t, e, n) {
        (function () {
            var t, r, i, o, s, a = function (t, e) {
                    return function () {
                        return t.apply(e, arguments)
                    }
                }, l = {}.hasOwnProperty,
                u = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) l.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            t = e("lib/collection"), o = e("lib/encode"), r = e("models/link"), s = e("mediator"), n.exports = i = function (t) {
                function e() {
                    return this.reFetchFromSearch = a(this.reFetchFromSearch, this), e.__super__.constructor.apply(this, arguments)
                }
                return u(e, t), e.prototype.model = r, e.prototype.initialize = function (t, n) {
                    return e.__super__.initialize.apply(this, arguments), n.subscribeToFetch ? this.subscribeEvent("search:fetch", this.reFetchFromSearch) : n.subscribeOnceToFetch ? this.subscribeEvent("search:fetch", _.once(this.reFetchFromSearch)) : void 0
                }, e.prototype.reFetchFromSearch = function (t) {
                    return this.urlParams = _.extend(this.urlParams, t), this.reset([], {
                        silent: !0
                    }), this.fetch()
                }, e.prototype.parse = function (t) {
                    var n, r, i, o, s = this;
                    return i = e.__super__.parse.call(this, t), o = _.compact(_.uniq(_.pluck(i, "md5"))), n = this.pluck("md5"), r = _.difference(o, n), i = _.filter(i, function (t) {
                        return _.contains(r, t.md5)
                    }), _.each(i, function (t) {
                        return s.hasLegalImage(t) ? void 0 : t.chosen_image = null
                    }), this.urlParams.hasImage && (i = _.filter(i, function (t) {
                        return s.hasLegalImage(t)
                    })), i
                }, e.prototype.hasLegalImage = function (t) {
                    var e, n;
                    return (null != (e = t.chosen_image) ? e.width : void 0) >= 300 || (null != (n = t.chosen_image) ? n.height : void 0) >= 200
                }, e.prototype.url = function () {
                    var t, e, n, r, i, a, l, u, c, p, h, d, f, m, g;
                    return this.urlParamDefaults || (this.urlParamDefaults = {
                        type: "popular",
                        tags: [],
                        keywords: [],
                        limit: 20,
                        username: null,
                        tagBundle: null,
                        md5: null
                    }), a = _.extend(this.urlParamDefaults, this.urlParams), h = a.type, p = a.tags, r = a.limit, n = a.keywords, d = a.username, c = a.tagBundle, i = a.md5, t = a.hasImage, _.isArray(p) && p.length > 0 && (p = _.map(p, function (t) {
                        return /%/.test(t) ? decodeURIComponent(t) : t
                    })), d && ("network" === h ? d === (null != (f = s.user) ? f.get("username") : void 0) || "me" === d ? h = "network" : (d = o(d), h = "publicnetwork/" + d) : d === (null != (m = s.user) ? m.get("username") : void 0) || "me" === d ? h = "you" : (d = o(d), h = "public/" + d)), u = "/posts/" + h + "/time", l = {
                        tags: _.isArray(p) ? p.join(",") : p,
                        keywords: _.isArray(n) ? n.join(",") : n,
                        tagsor: !1,
                        limit: r,
                        anchor: this._anchor(),
                        index: this._index(),
                        inclpriv: 1,
                        bundle_name: decodeURIComponent(c),
                        has_all: !0,
                        exclude_zeen: !0
                    }, d && c && (u = "/tags/bundle/links", d !== (null != (g = s.user) ? g.get("username") : void 0) && (l.username = d)), i && (u = "/posts/everyone/time", l = {
                        md5: i
                    }), e = p.length || n.length || d || c || i, "everyone" !== h || e || (h = "recommend", 1 > this.length ? delete l.anchor : l.anchor = this.last().get("md5"), u = "/recommend/links"), u + "?" + $.param(l)
                }, e
            }(t)
        }).call(this)
    }
}), window.require.define({
    "models/notes": function (t, e, n) {
        (function () {
            var t, r, i, o = {}.hasOwnProperty,
                s = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) o.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            t = e("lib/collection"), r = e("lib/model"), n.exports = i = function (t) {
                function e() {
                    return e.__super__.constructor.apply(this, arguments)
                }
                return s(e, t), e.prototype.model = r, e.prototype.url = function () {
                    return _.defaults(this.urlParams, {
                        limit: 1
                    }), this.urlParams.md5 ? "/posts/comments/time/" + this.urlParams.md5 + "?" + $.param({
                        limit: this.urlParams.limit,
                        anchor: this._anchor(),
                        exclude_yours: !0
                    }) : void 0
                }, e
            }(t)
        }).call(this)
    }
}), window.require.define({
    "models/tag": function (t, e, n) {
        (function () {
            var t, r, i, o, s = {}.hasOwnProperty,
                a = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) s.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            i = e("lib/logger"), o = e("mediator"), t = e("lib/model"), n.exports = r = function (t) {
                function e() {
                    return e.__super__.constructor.apply(this, arguments)
                }
                return a(e, t), e.prototype.idAttribute = "name", e.normalize = function (t) {
                    return "string" == typeof t ? t.trim() : void 0
                }, e.quote = function (t, e, n) {
                    return null == e && (e = /"/g), null == n && (n = '\\"'), this.normalize(t).replace(e, n)
                }, e.unquote = function (t, e, n) {
                    return null == e && (e = /\\"/g), null == n && (n = '"'), this.normalize(t).replace(e, n)
                }, e.sanitize = function (t) {
                    return this.normalize(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;")
                }, e.prototype.remove = function () {
                    return this.api({
                        data: {
                            tag: this.get("name")
                        },
                        url: "/tags/delete",
                        success: function () {
                            return o.publish("tags:managed")
                        }
                    })
                }, e.prototype.rename = function (t) {
                    return this.api({
                        data: {
                            old_tag: this.get("name"),
                            new_tag: t
                        },
                        url: "/tags/rename",
                        success: function () {
                            return o.publish("tags:managed")
                        }
                    })
                }, e
            }(t)
        }).call(this)
    }
}), window.require.define({
    "models/tag_bundle": function (t, e, n) {
        (function () {
            var t, r, i, o = function (t, e) {
                    return function () {
                        return t.apply(e, arguments)
                    }
                }, s = {}.hasOwnProperty,
                a = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) s.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            i = e("mediator"), t = e("lib/model"), n.exports = r = function (t) {
                function e() {
                    return this.saveResponse = o(this.saveResponse, this), e.__super__.constructor.apply(this, arguments)
                }
                return a(e, t), e.prototype["delete"] = function () {
                    var t = this;
                    return this.api({
                        url: "/tags/bundle/delete",
                        data: {
                            bundle_name: this.get("name")
                        },
                        success: function (e) {
                            var n;
                            return "success" === (null != e ? e.status : void 0) ? (t.publishEvent("tagBundle:delete"), null != (n = t.collection) ? n.remove(t) : void 0) : t.publishEvent("tagBundle:delete:error")
                        }
                    })
                }, e.prototype.fetchTags = function (t, e) {
                    var n = this;
                    return this.api({
                        data: {
                            bundle_owner: t,
                            bundle_name: decodeURIComponent(e)
                        },
                        url: "/tags/bundle/tags",
                        success: function (t) {
                            return n.set({
                                tags: _.map(t.pkg.tags, function (t) {
                                    return t.tag_name
                                })
                            })
                        }
                    })
                }, e.prototype.save = function (t) {
                    var e;
                    return this.newdata = {
                        name: t.name,
                        tags: t.tags
                    }, null != t.previous ? (e = {
                        url: "/tags/bundle/edit",
                        data: {
                            new_bundle_name: t.name,
                            old_bundle_name: t.previous.get("name"),
                            new_bundle_tags: t.tags,
                            old_bundle_tags: t.previous.get("tags").join(","),
                            bundle_owner: i.user.get("username")
                        },
                        success: this.saveResponse
                    }, this.api(e)) : (e = {
                        url: "/tags/bundle/create",
                        data: {
                            bundle_name: t.name,
                            tags: t.tags
                        },
                        success: this.saveResponse
                    }, this.api(e))
                }, e.prototype.saveResponse = function (t) {
                    return "success" === t.status ? (this.set(this.newdata), this.publishEvent("tagBundle:save", this)) : this.publishEvent("tagBundle:save:error", this)
                }, e
            }(t)
        }).call(this)
    }
}), window.require.define({
    "models/tag_bundles": function (t, e, n) {
        (function () {
            var t, r, i, o = {}.hasOwnProperty,
                s = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) o.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            t = e("lib/collection"), r = e("models/tag_bundle"), n.exports = i = function (t) {
                function e() {
                    return e.__super__.constructor.apply(this, arguments)
                }
                return s(e, t), e.prototype.model = r, e.prototype.url = function () {
                    var t;
                    return this.urlParamDefaults || (this.urlParamDefaults = {
                        username: null
                    }), t = _.extend(this.urlParamDefaults, this.urlParams).username, t ? "/tags/bundles/" + t : void 0
                }, e.prototype.parse = function (t) {
                    var n, r, i;
                    return e.__super__.parse.apply(this, arguments), n = null != (r = t.pkg) ? null != (i = r[0]) ? i.bundle_names : void 0 : void 0, n ? _.map(n, function (t) {
                        return {
                            name: t
                        }
                    }) : []
                }, e.prototype.comparator = function (t) {
                    var e;
                    return null != (e = t.get("name")) ? e.toLowerCase() : void 0
                }, e
            }(t)
        }).call(this)
    }
}), window.require.define({
    "models/tags": function (t, e, n) {
        (function () {
            var t, r, i, o, s, a = {}.hasOwnProperty,
                l = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) a.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            t = e("lib/collection"), o = e("lib/encode"), s = e("mediator"), r = e("models/tag"), n.exports = i = function (t) {
                function e() {
                    return e.__super__.constructor.apply(this, arguments)
                }
                return l(e, t), e.prototype.model = r, e.prototype.initialize = function (t, n) {
                    return null == n && (n = {}), e.__super__.initialize.apply(this, arguments), n.subscribeToFetch ? this.subscribeEvent("search:fetch", function (t) {
                        return this.urlParams.keywords = t.keywords, this.urlParams.tags = t.tags, this.reset([], {
                            silent: !0
                        }), this.fetch()
                    }) : void 0
                }, e.prototype.comparator = function (t) {
                    return -1 * (t.get("num_saves") || 0)
                }, e.prototype.url = function () {
                    var t, e, n, r, i, a, l, u, c;
                    return this.urlParamDefaults || (this.urlParamDefaults = {
                        type: "public",
                        tags: [],
                        keywords: [],
                        limit: 20
                    }), n = _.extend(this.urlParamDefaults, this.urlParams), a = n.tags, t = n.keywords, l = n.type, e = n.limit, u = n.username, _.isArray(a) && a.length > 0 && (a = _.map(a, function (t) {
                        return /%/.test(t) ? decodeURIComponent(t) : t
                    })), r = {
                        tags: _.isArray(a) ? a.join(",") : a,
                        keywords: _.isArray(t) ? t.join(",") : t,
                        limit: e,
                        anchor: this._anchor(),
                        index: this._index()
                    }, u && (u === (null != (c = s.user) ? c.get("username") : void 0) ? l = "you" : (u = o(u), l = "public/" + u)), i = function () {
                        switch (l) {
                        case "trending":
                            return "/tags/trending";
                        default:
                            return "/posts/" + l + "/tags"
                        }
                    }(), i + "?" + $.param(r)
                }, e.prototype.parse = function (t) {
                    var n, i, o, s, a, l, u, c, p = this;
                    return (s = e.__super__.parse.call(this, t)) ? (i = s.tags ? (l = _.keys(s.tags), a = _.map(l, function (t) {
                        return s.tags[t]
                    }), o = function (t, e, n) {
                        var i;
                        return i = r.normalize(e), _.isEmpty(i) ? t : (t[i] || (t[i] = 0), t[i] += a[n], t)
                    }, u = _.reduce(l, o, {}), n = u.length, delete u.length, u = _.map(u, function (t, e) {
                        return {
                            name: e,
                            num_saves: t
                        }
                    }), n ? u.push({
                        name: "length",
                        num_saves: n
                    }) : void 0, u) : s.best_tags ? _.map(s.best_tags, function (t) {
                        return {
                            name: r.normalize(t)
                        }
                    }) : _.isArray(s) ? _.map(s, function (t) {
                        return {
                            name: t
                        }
                    }) : [], (null != (c = this.urlParams) ? c.tags : void 0) ? _.reject(i, function (t) {
                        return _.include(p.urlParams.tags, t.name)
                    }) : i) : []
                }, e
            }(t)
        }).call(this)
    }
}), window.require.define({
    "models/user": function (t, e, n) {
        (function () {
            var t, r, i, o, s, a, l, u, c, p, h = function (t, e) {
                    return function () {
                        return t.apply(e, arguments)
                    }
                }, d = {}.hasOwnProperty,
                f = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) d.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            p = e("lib/popup"), s = e("lib/avos"), a = e("lib/encode"), c = e("lib/obfuscate"), u = e("mediator"), r = e("lib/model"), i = e("models/tags"), l = e("lib/logger"), t = e("lib/delicious_autocomplete_items"), n.exports = o = function (e) {
                function n() {
                    return this.loginSuccess = h(this.loginSuccess, this), n.__super__.constructor.apply(this, arguments)
                }
                return f(n, e), n.prototype.defaults = {
                    isLoggedIn: !1
                }, n.prototype.profile = function (t) {
                    var e, n = this;
                    return null == t && (t = {}), e = this.get("username"), e ? this.api({
                        url: "/account/public/profile/" + a(e)
                    }).done(function (t) {
                        return null !== t.pkg ? n.set(n._userDataFromPackage(t.pkg)) : void 0
                    }) : this
                }, n.prototype.set = function () {
                    return n.__super__.set.apply(this, arguments), this.isMe() && this.get("isLoggedIn") ? (store.set("user", this), u.user = this) : void 0
                }, n.prototype.login = function (t) {
                    var e, n, r;
                    return r = t.username, n = t.password, e = {
                        success: this.loginSuccess
                    }, $("html").hasClass("lt-ie10") ? (r = a(r), n = encodeURIComponent(encodeURIComponent(n)).replace(".", "%252E"), e.url = "/account/webloginpwd/" + r + "/" + n) : _.extend(e, {
                        url: "/account/login",
                        type: "POST",
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        data: {
                            username: r,
                            password: c(n)
                        }
                    }), this.api(e)
                }, n.prototype.loginSilent = function () {
                    return this.api({
                        url: "/account/webloginhash/" + a(this.get("username")) + "/" + this.get("password_hash"),
                        success: this.loginSuccess
                    })
                }, n.prototype.loginSuccess = function (t) {
                    var e;
                    return e = this._userDataFromPackage(t.pkg), e.isLoggedIn = !0, this.set(e)
                }, n.prototype.loginWithService = function (t) {
                    var e, n, r = this;
                    return e = new $.Deferred, n = {
                        url: "/auth/signin/" + t,
                        crossWindowMessageName: "connect_to_delicious",
                        popupWindowName: "SigninWith" + t,
                        success: function (t) {
                            var n;
                            return t.username && t.password ? (r.set({
                                username: t.username,
                                password_hash: t.password
                            }), r.loginSilent().done(function () {
                                return e.resolve()
                            })) : (t.displayName = null != (n = t.displayName) ? n.replace(/^@/, "") : void 0, e.reject(t))
                        }
                    }, "facebook" === t && (n = _.extend(n, {
                        width: 1e3,
                        height: 610
                    })), p(n), e
                }, n.prototype.logout = function () {
                    return store.remove("user"), $.cookie("avid") && $.removeCookie("avid", {
                        domain: ".delicious.com"
                    }), this.clear(), this.set("isLoggedIn", !1, {
                        silent: !0
                    })
                }, n.prototype.isMe = function () {
                    var t;
                    return (null != (t = u.user) ? t.get("username") : void 0) === this.get("username")
                }, n.prototype.existsUser = function (t) {
                    var e = this;
                    return this.api({
                        url: "/account/public/profile/" + t,
                        success: function (n) {
                            return e.publishEvent("join:checkedUserExists", {
                                available: null === n.pkg,
                                username: t
                            })
                        }
                    })
                }, n.prototype.register = function () {
                    var t = this;
                    return this.api({
                        url: "/account/registerw",
                        data: this.toJSON(),
                        success: function (e) {
                            return t.set(e.pkg), u.auth.loginSilent()
                        }
                    })
                }, n.prototype.update = function (t) {
                    var e = this;
                    return this.api({
                        url: "/account/profile/edit",
                        data: t,
                        success: function (t) {
                            return e.set(t.pkg)
                        }
                    })
                }, n.prototype.changePassword = function (t) {
                    return t.user_id = this.get("id"), this.api({
                        url: "/account/webchangepassword",
                        type: "GET",
                        data: t,
                        success: function () {
                            return 0
                        }
                    })
                }, n.prototype.forgotPassword = function (t) {
                    var e = this;
                    return this.api({
                        url: "/account/forgot_password/" + t,
                        success: function (t) {
                            return "success" === t.status ? e.set(t.pkg) : void 0
                        }
                    })
                }, n.prototype.resetPassword = function (t) {
                    return this.api({
                        url: "/account/reset_password",
                        type: "GET",
                        data: t,
                        success: function () {
                            return 0
                        }
                    })
                }, n.prototype.updateAvatar = function (t, e) {
                    var n, r = this;
                    return n = {
                        dataType: "json",
                        type: "GET",
                        success: function (t) {
                            return _.delay(function () {
                                return t.pkg.avatar_url = t.pkg.avatar_url + "?" + (new Date).getTime(), r.set(t.pkg), _.isFunction(e) ? e(t.status, t.error) : void 0
                            }, 2500)
                        }
                    }, t.attr("action", "//" + (s.api_host() + s.api_path) + "/account/profile/edit_image"), t.ajaxSubmit(n)
                }, n.prototype.validateEmail = function (t) {
                    return this.api({
                        url: "/account/validate_email/" + t,
                        success: function () {
                            return result.success = !0, callback(result)
                        },
                        error: function (t) {
                            return result.error = "invalid_args" === t.status ? result.error = "Sorry, that url is invalid." : t.error, callback(result)
                        }
                    })
                }, n.prototype.autocompleteItems = function () {
                    var e;
                    return this._autocompleteItems ? this._autocompleteItems : (e = [], _.each(this.get("follows"), function (t) {
                        return t.description = t.full_name, t.kind = "People You Follow", t.token = "@", e.push(t)
                    }), _.each(this.get("tags"), function (t) {
                        return t.kind = "Your Tags", t.token = "#", e.push(t)
                    }), _.each(this.get("tag_bundles"), function (t) {
                        return t.kind = "Your Tag Bundles", t.token = "[]", e.push(t)
                    }), this._autocompleteItems = new t(e))
                }, n.prototype._userDataFromPackage = function (t) {
                    var e, n, r, o, s;
                    return e = t.account, s = _.extend({}, e || t), null != t.follows && (n = _.sortBy(t.follows, function (t) {
                        return t.username.toLowerCase()
                    }), s.follows = _.map(n, function (t) {
                        return {
                            name: t.username,
                            username: t.username,
                            full_name: t.full_name
                        }
                    })), null != t.user_tags && (r = new i, o = r.parse({
                        pkg: t.user_tags
                    }), s.tags = r = r.reset(o).toJSON()), null != t.bundle_names && (s.tag_bundles = _.map(t.bundle_names, function (t) {
                        return {
                            name: t
                        }
                    })), s
                }, n.prototype.followUser = function (t) {
                    return this.get("isLoggedIn") ? this.api({
                        url: "/account/follow/" + t.get("username"),
                        success: function () {
                            return t.set({
                                am_following_them: !0
                            })
                        }
                    }) : u.auth.promptLogin({
                        redirect: !1
                    }).done(_.bind(this.followUser, this, t))
                }, n.prototype.unfollowUser = function (t) {
                    return this.api({
                        url: "/account/unfollow/" + t.get("username"),
                        success: function () {
                            return t.set({
                                am_following_them: !1
                            })
                        }
                    })
                }, n.prototype.getFollowersUrl = function () {
                    return "/account/public/followers/" + a(this.get("username"))
                }, n.prototype.getFollowingUrl = function () {
                    return "/account/public/follows/" + a(this.get("username"))
                }, n
            }(r)
        }).call(this)
    }
}), window.require.define({
    "models/users": function (t, e, n) {
        (function () {
            var t, r, i, o = {}.hasOwnProperty,
                s = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) o.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            t = e("lib/collection"), r = e("models/user"), n.exports = i = function (t) {
                function e() {
                    return e.__super__.constructor.apply(this, arguments)
                }
                return s(e, t), e.prototype.model = r, e.prototype.comparator = function (t) {
                    return t.get("username").toLowerCase()
                }, e.prototype.filterBySocial = function (t) {
                    return this.filter(function (e) {
                        return _.contains(e.get("social_types"), t[0].toUpperCase() + t.slice(1))
                    })
                }, e
            }(t)
        }).call(this)
    }
}), window.require.define({
    "templates/auth/login_modal": function (t, e, n) {
        n.exports = Handlebars.template(function (t, e, n, r, i) {
            return n = n || t.helpers, i = i || {}, '<form data-action="login" method="POST" class="login-form" action="/login">\n  <div class="modal-body">\n    <div class="btn-group clearfix">\n      <a class="btn btn-facebook btn-half" id="connect-facebook">Facebook</a>\n      <a class="btn btn-twitter btn-half" id="connect-twitter">Twitter</a>\n    </div>\n    <hr>\n    <div class="alert-container"></div>\n    <label for="input-username">Username</label>\n    <input id="input-username" name="username" type="text" tabindex="1">\n\n    <label for="input-password">Password</label>\n    <input id="input-password" name="password" type="password" tabindex="2">\n  </div>\n  <div class="modal-footer">\n    <button type="submit" class="btn btn-primary" tabindex="3" data-loading-text="Signing in&hellip;">Sign in</button>\n    <a class="btn-link btn-mini pull-left" href="/forgot_pw">Forgot password</a><a class="btn-link btn-mini pull-left" href="/join">Create an account</a>\n  </div>\n</form>\n'
        })
    }
}), window.require.define({
    "templates/helpers/common": function (t, e) {
        (function () {
            Handlebars.registerHelper("formatDate", function (t) {
                return $.timeago(1e3 * t)
            }), Handlebars.registerHelper("formatMachineDate", function (t) {
                return new Date(1e3 * t).toISOString()
            }), Handlebars.registerHelper("commafy", function (t) {
                return (null != t ? ("" + t).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : void 0) || 0
            }), Handlebars.registerHelper("capitalize", function (t) {
                return null == t && (t = ""), t.charAt(0).toUpperCase() + t.slice(1)
            }), Handlebars.registerHelper("decode", function (t) {
                return null != t ? ("" + t).replace(/%2E/g, ".") : void 0
            }), Handlebars.registerHelper("ifProfile", function (t) {
                var e;
                return e = window.location.pathname.split("/")[1], "network" === e || "discover" === e ? t.inverse(this) : t.fn(this)
            }), Handlebars.registerPartial("footer", e("templates/layout/footer"))
        }).call(this)
    }
}), window.require.define({
    "templates/helpers/link_helpers": function (t, e) {
        (function () {
            var t, n, r, i;
            t = e("models/tag"), r = e("mediator"), n = e("lib/avos"), Handlebars.registerHelper("currentUrl", function () {
                return window.location.href
            }), Handlebars.registerHelper("date", function (t) {
                return moment.unix(t).fromNow()
            }), Handlebars.registerHelper("encodedUrl", function () {
                return encodeURIComponent(this.url)
            }), Handlebars.registerHelper("linkPreview", function () {
                var t, e, r, i, o, s;
                return r = null != (i = this.url) ? null != (o = i.match(/https?:\/\/www\.youtube\.com\/watch\?v\=([^\&]*)/i)) ? o[1] : void 0 : void 0, e = null != (s = this.chosen_image) ? s.image_url.split("/").pop() : void 0, t = e ? '<div class="loading"></div>\n<a data-track-outbound="' + this.url + '" href="//' + n.api_host() + n.api_path + "/posts/redirect?url=" + encodeURIComponent(this.url) + '" target="_blank" rel="nofollow">\n  <div class="link-preview" style="background-image: url(//img.zeen.com/v2/del-content/' + e + '?w=700&h=400&fm=jpg&q=50&hs=1)"></div>\n</a>' : r ? '<iframe width="350" height="240" src=\'http://www.youtube.com/embed/' + r + "?html5=1' frameborder='0' allowfullscreen></iframe>" : '<div class="no-image">' + (this.title || this.url) + "</div>", new Handlebars.SafeString(t)
            }), Handlebars.registerHelper("firstSaverInfo", function () {
                var t, e;
                if (null != this.first_saver && null != this.first_saver_date) return e = Handlebars.helpers.formatDate(this.first_saver_date), t = Handlebars.helpers.formatMachineDate(this.first_saver_date), new Handlebars.SafeString('<hr>\n<div class="first-saver">\n  <h4>First added <small class="date-added"><time datetime="' + t + '">' + e + '</time></small> by:</h4>\n  <div class="avatar" style="background-image: url(' + this.first_saver.avatar_url + ');"></div>\n  <h5><a href="/' + this.first_saver.username + '" data-user="' + this.first_saver.username + '" data-track-group="notes" data-track-name="a username">' + this.first_saver.display_name + "</a></h5>\n</div>\n<hr>")
            }), Handlebars.registerHelper("linkTags", function (e, n) {
                var r, i, o;
                return i = n.hash.limit || 100, r = "", null != e ? (_.each(e.slice(0, i), function (n, i) {
                    return r += '<a href="#" class="tag-small" data-tag="' + t.quote(n) + '">' + t.sanitize(n) + "</a>", e.length - 1 > i ? r += "<span>, </span>" : void 0
                }), e.length > i && (o = e.slice(i).join(", "), r += " <strong>+ " + (e.length - i) + " more</strong>"), new Handlebars.SafeString(r)) : void 0
            }), Handlebars.registerHelper("tagsInput", function () {
                var t;
                return null != (t = this.tags) ? t.join(", ") : void 0
            }), Handlebars.registerHelper("saversAndNoteOrDesc", function () {
                var t, e, n;
                return t = [], (null != (n = this.savers) ? n.length : void 0) > 0 && (e = _.first(this.savers), t.push('<a href="/' + e.username + '">' + (e.full_name || e.display_name || e.username) + "</a>"), this.savers.length > 1 && t.push(" and " + (this.savers.length - 1) + " other"), this.savers.length > 2 && t.push("s"), t.push(" added this. ")), (this.note || this.description) && t.push(i(this.note || this.description)), t.length ? new Handlebars.SafeString('<div class="link-note link-savers"><p>' + t.join("") + "</div>") : void 0
            }), Handlebars.registerHelper("isMyLink", function (t) {
                var e, n;
                return r.user.get("isLoggedIn") && (null != (e = this.savers) ? e[0].username : void 0) === r.user.get("username") || (null != (n = this.recommended) ? n.previously_saved : void 0) === !0 ? t.fn(this) : t.inverse(this)
            }), Handlebars.registerHelper("insertRecommendedTags", function (t) {
                return store.get("insertRecommendedTags") ? t.fn(this) : t.inverse(this)
            }), Handlebars.registerHelper("hasRecommendedTags", function (t) {
                var e, n;
                return (null != (e = this.recommended) ? null != (n = e.suggested_tags) ? n.length : void 0 : void 0) ? t.fn(this) : t.inverse(this)
            }), Handlebars.registerHelper("recommendedTags", function () {
                var t;
                return null != (t = this.recommended) ? t.suggested_tags : void 0
            }), Handlebars.registerHelper("titleOrURL", function () {
                return this.title || this.url
            }), i = function (t) {
                return t.replace(/[&lt;]+[3]/gi, "<tt class='heart'>&#x2665;</tt>").replace(/((ftp|http|https):\/\/(\w+:{0,1}\w*@)?([\w#!:\.?+=&%@!\-\/}]+)(:[0-9]+)?(\/|\/([\w#!:\.?+=&%@!\-\/}]))?)/gi, '<a href="$1" target="_blank">$4</a>')
            }, Handlebars.registerHelper("noteAsHTML", function () {
                return this.note ? new Handlebars.SafeString('<div class="link-note"><p>' + i(this.note) + "</p></div>") : void 0
            }), Handlebars.registerHelper("noteAsHTMLWithLineBreaks", function () {
                var t;
                return this.note ? (t = i(this.note), t.replace(/\n/g, "<br>")) : void 0
            }), Handlebars.registerHelper("editPreview", function () {
                var t, e, n, r;
                return this.chosen_image ? (t = this.chosen_image.image_url || this.chosen_image.imageUrl, '<div class="swipe-wrap"><div style="background-image: url(' + t + ');" class="edit-preview-image-tile"></div></div>') : (null != (n = this.recommended) ? null != (r = n.suggested_images) ? r.length : void 0 : void 0) ? (e = this.recommended.suggested_images[0], t = e.image_url || e.imageUrl, '<div class="swipe-wrap"><div style="background-image: url(' + e.image_url + ');" class="edit-preview-image-tile"></div></div>') : '<div class="no-image">No image<br>:(</div>'
            }), Handlebars.registerHelper("faviconUrl", function () {
                var t, e;
                return t = [".com", ".co.uk", ".com.au"], e = _.first(_.shuffle(t)), new Handlebars.SafeString("//www.google" + e + "/s2/favicons?domain=" + this.domain)
            }), Handlebars.registerHelper("randomApiHost", function () {
                return n.api_host()
            }), Handlebars.registerHelper("linkPrivacyChecked", function () {
                var t, e;
                return this["private"] || store.get("newLinkPrivate") && (null != (t = this.savers) ? null != (e = t[0]) ? e.username : void 0 : void 0) !== r.user.get("username") ? " checked" : void 0
            }), Handlebars.registerHelper("redirectURL", function () {
                return "//" + n.api_host() + n.api_path + "/posts/redirect?url=" + encodeURIComponent(this.url)
            })
        }).call(this)
    }
}), window.require.define({
    "templates/helpers/user_helpers": function (t, e) {
        (function () {
            var t, n;
            n = e("mediator"), t = e("lib/avos"), Handlebars.registerHelper("ifMe", function (t) {
                return n.user.get("username") === this.username ? t.fn(this) : t.inverse(this)
            }), Handlebars.registerHelper("displayName", function () {
                return this.full_name || this.display_name || this.username
            }), Handlebars.registerHelper("followButton", function (t) {
                var e, r;
                return e = (null != (r = t.hash) ? r.className : void 0) || "", this.am_following_them || _.where(n.user.get("follows"), {
                    username: this.username
                }).length > 0 ? '<a href="#unfollow" class="btn ' + e + '">Following</a>' : this.username !== n.user.get("username") ? '<a href="#follow" class="btn ' + e + ' btn-primary">Follow</a>' : void 0
            }), Handlebars.registerHelper("privacyOptionCheck", function (t) {
                return t === this.value ? "selected" : void 0
            }), Handlebars.registerHelper("ifHasLinks", function (t) {
                if (n.user.get("username") === this.username) {
                    if (n.user.get("bookmark_count") > 0 || n.user.get("public_bookmark_count") > 0) return t.fn(this)
                } else if (this.public_bookmark_count) return t.fn(this);
                return t.inverse(this)
            }), Handlebars.registerHelper("ifUploadedPhotoOrNotMe", function (e) {
                return n.user.get("username") === this.username && n.user.get("avatar_url") !== t.default_avatar ? e.fn(this) : n.user.get("username") !== this.username ? e.fn(this) : e.inverse(this)
            })
        }).call(this)
    }
}), window.require.define({
    "templates/layout/banner": function (t, e, n) {
        n.exports = Handlebars.template(function (t, e, n, r, i) {
            function o() {
                return "/discover"
            }

            function s() {
                return "/"
            }

            function a(t, e) {
                var r, i, o = "";
                return o += '\n      <a href="/network" class="nav-link nav-network">Network</a>\n      <a href="/', i = n.username, i ? r = i.call(t, {
                    hash: {},
                    data: e
                }) : (r = t.username, r = typeof r === f ? r.apply(t) : r), o += m(r) + '" class="nav-link nav-remember">Remember</a>\n    '
            }

            function l() {
                return '\n      <a href="/join" class="nav-link" id="nav-join-link">Join</a>\n      <a href="#login" data-track-group="header links" class="nav-link" id="nav-sign-in">Sign in</a>\n    '
            }

            function u(t, e) {
                var r, i, o = "";
                return o += '\n        <a href="/settings/friends" class="nav-link find-friends hidden-tablet" data-track-group="header links">Find friends</a>\n        <a href="#add-link" class="nav-link add-link hidden-phone" data-track-group="header links">Add link</a>\n\n        <div class="banner-dropdown">\n          <a href="#" data-toggle="dropdown" data-track-group="header links" data-track-name="Name and avatar area" class="nav-link dropdown">\n            <span class="banner-name hidden-tablet">', i = n.full_name, i ? r = i.call(t, {
                    hash: {},
                    data: e
                }) : (r = t.full_name, r = typeof r === f ? r.apply(t) : r), o += m(r) + '</span>\n            <span class="avatar-container">\n              <span class="dropdown-carrot left"></span>\n              <img class="avatar" src="', i = n.avatar_url, i ? r = i.call(t, {
                    hash: {},
                    data: e
                }) : (r = t.avatar_url, r = typeof r === f ? r.apply(t) : r), o += m(r) + '">\n            </span>\n          </a>\n\n          <ul class="dropdown-menu" role="menu">\n            <li><a href="#add-link" data-track-group="header dropdown" class="hidden-desktop visible-tablet">Add link</a></li>\n            <li><a href="/settings">Settings</a></li>\n            <li><a href="/tools">Tools</a></li>\n            <li><a href="/help">Help</a></li>\n            <li><a href="#sign-out" data-track-group="header dropdown">Sign out</a></li>\n          </ul>\n        </div>\n\n    '
            }

            function c() {
                return '\n      <a href="#add-link" class="nav-link add-link hidden-phone" data-track-group="header links">Add link</a>\n      <a href="/join" class="nav-link" data-track-group="header links" id="join-link">Create an account</a>\n      <a href="#login" class="nav-link" data-track-group="header links" id="sign-in-link">Sign in</a>\n    '
            }
            n = n || t.helpers, i = i || {};
            var p, h, d = "",
                f = "function",
                m = this.escapeExpression,
                g = this;
            return d += '<div class="page-header-inner container">\n  <div class="page-header-search clearfix">\n\n    <a class="logo" href="', p = e.isLoggedIn, h = {}, p = n["if"].call(e, p, {
                hash: h,
                inverse: g.program(3, s, i),
                fn: g.program(1, o, i),
                data: i
            }), (p || 0 === p) && (d += p), d += '" title="Delicious" data-track-group="logo"></a>\n    <div class="global-search-container autocomplete">\n      <form class="global-search" action="/search" method="get">\n        <a href="#" class="d-icon-search btn btn-link search-submit" data-track-group="search" data-track-name="Search submit icon"></a>\n        <input autocomplete="off" type="text" placeholder="Search Delicious" id="search-field" name="p" tabindex="1">\n        <ul class="autocomplete-results" style="display: none"></ul>\n      </form>\n      <a class="help-prompt" data-track-group="header links" data-track-name="Wee question mark">?</a>\n\n    </div>\n  </div>\n\n  <div class="banner-nav">\n    <a href="/discover" class="nav-link nav-discover">Discover</a>\n\n    ', p = e.username, h = {}, p = n["if"].call(e, p, {
                hash: h,
                inverse: g.program(7, l, i),
                fn: g.program(5, a, i),
                data: i
            }), (p || 0 === p) && (d += p), d += '\n  </div>\n\n  <div class="user-controls">\n    ', p = e.username, h = {}, p = n["if"].call(e, p, {
                hash: h,
                inverse: g.program(11, c, i),
                fn: g.program(9, u, i),
                data: i
            }), (p || 0 === p) && (d += p), d += "\n  </div>\n</div>\n"
        })
    }
}), window.require.define({
    "templates/layout/footer": function (t, e, n) {
        n.exports = Handlebars.template(function (t, e, n, r, i) {
            return n = n || t.helpers, i = i || {}, '<footer class="delicious-footer">\n  <nav>\n    <ul>\n      <li><a href="http://facebook.com/delicious" class="d-icon-facebook facebook"></a></li>\n      <li><a href="https://twitter.com/delicious" class="d-icon-twitter twitter"></a><br></li>\n      <li><a href="/help">Help</a></li>\n      <li><a href="/tools">Tools</a></li>\n      <li><a href="http://blog.delicious.com/">Blog</a></li>\n      <li><a href="/about">About</a></li>\n      <li><a href="/terms">Legal</a></li>\n      <li class="copyright"><a href="http://avos.com">&copy; AVOS 2013</a></li>\n    </ul>\n  </nav>\n</footer>'
        })
    }
}), window.require.define({
    "templates/layout/help": function (t, e, n) {
        n.exports = Handlebars.template(function (t, e, n, r, i) {
            return n = n || t.helpers, i = i || {}, '<div class="help-wrapper">\n  <ul class="help-container">\n    <h4>Keyboard shortcuts</h4>\n\n    <li>\n      <div class="key">/</div>\n      <span class="key-label">Focus search field</span>\n    </li>\n\n    <li>\n      <div class="key">&darr;</div>\n      <span class="key-label">Show next link</span>\n    </li>\n\n    <li>\n      <div class="key">&uarr;</div>\n      <span class="key-label">Show previous link</span>\n    </li>\n\n    <li>\n      <div class="key">Enter</div>\n      <span class="key-label">Open current link</span>\n    </li>\n\n    <li>\n      <div class="key">a</div>\n      <span class="key-label">Add a new link</span>\n    </li>\n\n    <li>\n      <div class="key">e</div>\n      <span class="key-label">Add or edit selected link</span>\n    </li>\n\n    <li>\n      <div class="key">1</div>\n      <span class="key-label">Discover</span>\n    </li>\n\n    <li>\n      <div class="key">2</div>\n      <span class="key-label">Network</span>\n    </li>\n\n    <li>\n      <div class="key">3</div>\n      <span class="key-label">Remember</span>\n    </li>\n\n    <li>\n      <div class="key">?</div>\n      <span class="key-label">Show this help dialog</span>\n    </li>\n\n  </ul>\n\n  <ul class="help-container">\n    <h4>Advanced search</h4>\n    <p>Search your own links with @me</p>\n    <p>Search your network with @network</p>\n    <p>Search for tags using a #</p>\n    <p>Search someone’s links with @username</p>\n    <br>\n    <p>You can chain search queries together:</p>\n    <p><b>@humphreybc design #css</b></p>\n    <p><b>@network lasagne</b></p>\n    <p><b>@me #"web design"</b></p>\n    <p><b>@me #android #mobile #design</b></p> \n    <br>\n    <p>Or just search everything:</p>\n    <p><b>Lasagne</b></p>\n    <p><b>#design</b></p>\n  </ul>\n</div>\n\n<div class="help-wrapper">\n  <p>For general help using Delicious, visit <a href="/help">delicious.com/help</a>\n</div>\n'
        })
    }
}), window.require.define({
    "templates/layout/logo_dialog": function (t, e, n) {
        n.exports = Handlebars.template(function (t, e, n, r, i) {
            return n = n || t.helpers, i = i || {}, '<div class="modal-body">\n  <p>Don’t use a pixelated asset! Download our logo and branding pack with vectors and high resolution PNGs.</p> \n  <p>It includes a vector PSD file with the logo, and PNGs in 8 sizes from 16px all the way to 1024px.</p>\n  <br>\n</div>\n<div class="modal-footer">\n  <a href="https://s3.amazonaws.com/avos-site-images/delicious-logo-rev1.zip" class="btn btn-primary">Download vector logo pack</a>\n</div>\n'
        })
    }
}), window.require.define({
    "templates/layout/page": function (t, e, n) {
        n.exports = Handlebars.template(function (t, e, n, r, i) {
            function o(t, e) {
                var r, i, o = "";
                return o += '\n    <ul class="section_nav">\n      ', r = t.nav, i = {}, r = n.each.call(t, r, {
                    hash: i,
                    inverse: v.noop,
                    fn: v.program(2, s, e),
                    data: e
                }), (r || 0 === r) && (o += r), o += "\n    </ul>\n    "
            }

            function s(t, e) {
                var r, i, o, s = "";
                return s += '\n          <li>\n            <a data-page-id="', o = n.id, o ? r = o.call(t, {
                    hash: {},
                    data: e
                }) : (r = t.id, r = typeof r === m ? r.apply(t) : r), s += g(r) + '" href="', r = t.external, i = {}, r = n.unless.call(t, r, {
                    hash: i,
                    inverse: v.noop,
                    fn: v.program(3, a, e),
                    data: e
                }), (r || 0 === r) && (s += r), o = n.url, o ? r = o.call(t, {
                    hash: {},
                    data: e
                }) : (r = t.url, r = typeof r === m ? r.apply(t) : r), s += g(r) + '">', o = n.title, o ? r = o.call(t, {
                    hash: {},
                    data: e
                }) : (r = t.title, r = typeof r === m ? r.apply(t) : r), s += g(r) + "</a>\n\n            ", r = t.active, i = {}, r = n["if"].call(t, r, {
                    hash: i,
                    inverse: v.noop,
                    fn: v.program(5, l, e),
                    data: e
                }), (r || 0 === r) && (s += r), s += "\n          </li>\n      "
            }

            function a() {
                return "/"
            }

            function l(t, e) {
                var r, i, o = "";
                return o += '\n              <ul class="section_subnav">\n              ', r = t.subpages, i = {}, r = n.each.call(t, r, {
                    hash: i,
                    inverse: v.noop,
                    fn: v.program(6, u, e),
                    data: e
                }), (r || 0 === r) && (o += r), o += "\n              </ul>\n            "
            }

            function u(t, e) {
                var r, i, o, s = "";
                return s += '\n                <li><a data-page-id="', o = n.id, o ? r = o.call(t, {
                    hash: {},
                    data: e
                }) : (r = t.id, r = typeof r === m ? r.apply(t) : r), s += g(r) + '" href="', r = t.external, i = {}, r = n.unless.call(t, r, {
                    hash: i,
                    inverse: v.noop,
                    fn: v.program(7, c, e),
                    data: e
                }), (r || 0 === r) && (s += r), o = n.url, o ? r = o.call(t, {
                    hash: {},
                    data: e
                }) : (r = t.url, r = typeof r === m ? r.apply(t) : r), s += g(r) + '" class="subnav\n            ', r = t.active, i = {}, r = n["if"].call(t, r, {
                    hash: i,
                    inverse: v.noop,
                    fn: v.program(9, p, e),
                    data: e
                }), (r || 0 === r) && (s += r), s += '">', o = n.title, o ? r = o.call(t, {
                    hash: {},
                    data: e
                }) : (r = t.title, r = typeof r === m ? r.apply(t) : r), s += g(r) + "</a></li>\n              "
            }

            function c() {
                return "/"
            }

            function p() {
                return " active"
            }
            n = n || t.helpers, r = r || t.partials, i = i || {};
            var h, d, f = "",
                m = "function",
                g = this.escapeExpression,
                v = this;
            return f += '<div class="row">\n  <div class="span2 flexible sidebar-bg "></div>\n  <div class="span2 flexible sidebar">\n    ', h = e.nav, d = {}, h = n["if"].call(e, h, {
                hash: d,
                inverse: v.noop,
                fn: v.program(1, o, i),
                data: i
            }), (h || 0 === h) && (f += h), f += "\n    ", h = e, h = v.invokePartial(r.footer, "footer", h, n, r, i), (h || 0 === h) && (f += h), f += '\n  </div>\n  <div class="span10">\n    <div class="content"></div>\n  </div>\n</div>'
        })
    }
}), window.require.define({
    "templates/links/_bulk": function () {
        Handlebars.registerPartial("bulk", Handlebars.template(function (t, e, n, r, i) {
            function o(t, e) {
                var r, i;
                return i = n.tags, i ? r = i.call(t, {
                    hash: {},
                    data: e
                }) : (r = t.tags, r = typeof r === c ? r.apply(t) : r), p(r)
            }
            n = n || t.helpers, i = i || {};
            var s, a, l, u = "",
                c = "function",
                p = this.escapeExpression,
                h = this,
                d = n.blockHelperMissing;
            return u += '<form>\n  <div class="modal-body">\n    <h3>Replace tags in all selected links with the following:</h3>\n    <label>Enter tags separated by commas</label>\n\n    <input name="tags" type="text" value="', l = n.isMyLink, l ? s = l.call(e, {
                hash: {},
                inverse: h.noop,
                fn: h.program(1, o, i),
                data: i
            }) : (s = e.isMyLink, s = typeof s === c ? s.apply(e) : s), a = {}, n.isMyLink || (s = d.call(e, s, {
                hash: a,
                inverse: h.noop,
                fn: h.program(1, o, i),
                data: i
            })), (s || 0 === s) && (u += s), u += '" placeholder="" id="input-tags-bulk" style="width: 100%">\n    \n  </div>\n\n  <div class="modal-options">\n    <button type="submit" class="btn btn-primary" data-loading-text="Saving...">Replace Tags</button>\n  </div>\n</form>'
        }))
    }
}), window.require.define({
    "templates/links/add_from_url": function (t, e, n) {
        n.exports = Handlebars.template(function (t, e, n, r, i) {
            return n = n || t.helpers, i = i || {}, '<form data-action="addFromUrl">\n  <div class="modal-body">\n    <label>URL</label>\n    <input type="text" name="new-url" value="" placeholder="http://">\n  </div>\n\n  <div class="modal-footer">\n    <div class="pull-left">\n      <p style="margin-top:10px;">Have you tried <a href="/tools">our bookmarklet or iOS app?</a>\n    </div>\n\n    <button type="submit" class="btn btn-primary">Add link</button>\n  </div>\n</form>'
        })
    }
}), window.require.define({
    "templates/links/detail": function (t, e, n) {
        n.exports = Handlebars.template(function (t, e, n, r, i) {
            function o(t, e) {
                var r, i, o = "";
                return o += "\n      <p>", i = n.description, i ? r = i.call(t, {
                    hash: {},
                    data: e
                }) : (r = t.description, r = typeof r === h ? r.apply(t) : r), o += d(r) + "</p>\n    "
            }

            function s(t, e) {
                var r, i, o, s = "";
                return s += '\n  <div class="comments">\n    <div class="comment">\n      ', o = n.isMyLink, o ? r = o.call(t, {
                    hash: {},
                    inverse: f.noop,
                    fn: f.program(4, a, e),
                    data: e
                }) : (r = t.isMyLink, r = typeof r === h ? r.apply(t) : r), i = {}, n.isMyLink || (r = m.call(t, r, {
                    hash: i,
                    inverse: f.noop,
                    fn: f.program(4, a, e),
                    data: e
                })), (r || 0 === r) && (s += r), s += "\n    </div>\n  </div>\n  "
            }

            function a(t, e) {
                var r, i, o = "";
                return o += '\n      <hr>\n      <h4>\n        <span class="your-note">Your Comment</span>\n      </h4>\n      <p>', i = n.noteAsHTMLWithLineBreaks, i ? r = i.call(t, {
                    hash: {},
                    data: e
                }) : (r = t.noteAsHTMLWithLineBreaks, r = typeof r === h ? r.apply(t) : r), (r || 0 === r) && (o += r), o += "</p>\n      "
            }
            n = n || t.helpers, i = i || {};
            var l, u, c, p = "",
                h = "function",
                d = this.escapeExpression,
                f = this,
                m = n.blockHelperMissing,
                g = n.helperMissing;
            return p += '<div class="link-details-content scrollable">\n  ', c = n.linkPreview, c ? l = c.call(e, {
                hash: {},
                data: i
            }) : (l = e.linkPreview, l = typeof l === h ? l.apply(e) : l), p += d(l) + '\n\n  <nav>\n    <div class="btn link-details-count disabled">\n      ', l = e.num_saves, u = {}, c = n.commafy, l = c ? c.call(e, l, {
                hash: u,
                data: i
            }) : g.call(e, "commafy", l, {
                hash: u,
                data: i
            }), p += d(l) + '\n    </div>\n\n    <span class="link-share-wrapper">\n      <a href="#" class="d-icon-share btn" id="details-share-button" data-track-group="details pane" title="Share this link"></a>\n      \n      <div class="link-share">\n        <a href="https://twitter.com/share?text=', c = n.title, c ? l = c.call(e, {
                hash: {},
                data: i
            }) : (l = e.title, l = typeof l === h ? l.apply(e) : l), p += d(l) + "&url=", c = n.url, c ? l = c.call(e, {
                hash: {},
                data: i
            }) : (l = e.url, l = typeof l === h ? l.apply(e) : l), p += d(l) + '&via=delicious" class="btn btn-twitter"><span class="d-icon-twitter"></span></a>\n\n        <a href="http://www.facebook.com/share.php?u=', c = n.url, c ? l = c.call(e, {
                hash: {},
                data: i
            }) : (l = e.url, l = typeof l === h ? l.apply(e) : l), p += d(l) + '" class="btn btn-facebook" id="share-facebook"><span class="d-icon-facebook"></span></a>\n\n        <a href="https://plus.google.com/share?url=', c = n.url, c ? l = c.call(e, {
                hash: {},
                data: i
            }) : (l = e.url, l = typeof l === h ? l.apply(e) : l), p += d(l) + '" class="btn btn-googleplus"><span class="d-icon-googleplus"></span></a>\n\n        <a href="mailto:?subject=', c = n.title, c ? l = c.call(e, {
                hash: {},
                data: i
            }) : (l = e.title, l = typeof l === h ? l.apply(e) : l), p += d(l) + "&amp;body=", c = n.url, c ? l = c.call(e, {
                hash: {},
                data: i
            }) : (l = e.url, l = typeof l === h ? l.apply(e) : l), p += d(l) + '" class="btn"><span class="d-icon-mail"></span></a>\n      </div>\n    </span>\n  </nav>\n\n  <h2>\n    <a href="', c = n.redirectURL, c ? l = c.call(e, {
                hash: {},
                data: i
            }) : (l = e.redirectURL, l = typeof l === h ? l.apply(e) : l), p += d(l) + '" data-track-outbound="', c = n.url, c ? l = c.call(e, {
                hash: {},
                data: i
            }) : (l = e.url, l = typeof l === h ? l.apply(e) : l), p += d(l) + '" title="', c = n.title, c ? l = c.call(e, {
                hash: {},
                data: i
            }) : (l = e.title, l = typeof l === h ? l.apply(e) : l), p += d(l) + '" rel="nofollow" target="_blank" data-track-group="link brick" data-track-name="link title">', c = n.titleOrURL, c ? l = c.call(e, {
                hash: {},
                data: i
            }) : (l = e.titleOrURL, l = typeof l === h ? l.apply(e) : l), (l || 0 === l) && (p += l), p += '</a>\n  </h2>\n\n  <div class="description">\n    ', l = e.description, u = {}, l = n["if"].call(e, l, {
                hash: u,
                inverse: f.noop,
                fn: f.program(1, o, i),
                data: i
            }), (l || 0 === l) && (p += l), p += "\n  </div>\n\n  ", l = e.note, u = {}, l = n["if"].call(e, l, {
                hash: u,
                inverse: f.noop,
                fn: f.program(3, s, i),
                data: i
            }), (l || 0 === l) && (p += l), p += "\n\n  ", c = n.firstSaverInfo, c ? l = c.call(e, {
                hash: {},
                data: i
            }) : (l = e.firstSaverInfo, l = typeof l === h ? l.apply(e) : l), p += d(l) + '\n\n  <div class="others comments">\n    Loading…\n  </div>\n  <a href="#" class="btn btn-link btn-block hidden" id="load-more-comments">Load more comments</a>\n</div>\n'
        })
    }
}), window.require.define({
    "templates/links/edit": function (t, e, n) {
        n.exports = Handlebars.template(function (t, e, n, r, i) {
            function o() {
                return ' value="true"'
            }

            function s(t, e) {
                var r, i;
                return i = n.tagsInput, i ? r = i.call(t, {
                    hash: {},
                    data: e
                }) : (r = t.tagsInput, r = typeof r === _ ? r.apply(t) : r), k(r)
            }

            function a(t, e) {
                var r, i, o;
                return o = n.insertRecommendedTags, o ? r = o.call(t, {
                    hash: {},
                    inverse: x.noop,
                    fn: x.program(6, l, e),
                    data: e
                }) : (r = t.insertRecommendedTags, r = typeof r === _ ? r.apply(t) : r), i = {}, n.insertRecommendedTags || (r = S.call(t, r, {
                    hash: i,
                    inverse: x.noop,
                    fn: x.program(6, l, e),
                    data: e
                })), r || 0 === r ? r : ""
            }

            function l(t, e) {
                var r, i;
                return i = n.recommendedTags, i ? r = i.call(t, {
                    hash: {},
                    data: e
                }) : (r = t.recommendedTags, r = typeof r === _ ? r.apply(t) : r), k(r)
            }

            function u(t, e) {
                var r, i, o, s = "";
                return s += '\n        <input name="showTags" id="input-set-tags" type="checkbox"', o = n.isMyLink, o ? r = o.call(t, {
                    hash: {},
                    inverse: x.program(11, p, e),
                    fn: x.program(9, c, e),
                    data: e
                }) : (r = t.isMyLink, r = typeof r === _ ? r.apply(t) : r), i = {}, n.isMyLink || (r = S.call(t, r, {
                    hash: i,
                    inverse: x.program(11, p, e),
                    fn: x.program(9, c, e),
                    data: e
                })), (r || 0 === r) && (s += r), s += '>\n        <label for="input-set-tags">Insert recommended tags</label>\n      '
            }

            function c() {
                var t = "";
                return t
            }

            function p(t, e) {
                var r, i, o;
                return o = n.insertRecommendedTags, o ? r = o.call(t, {
                    hash: {},
                    inverse: x.noop,
                    fn: x.program(12, h, e),
                    data: e
                }) : (r = t.insertRecommendedTags, r = typeof r === _ ? r.apply(t) : r), i = {}, n.insertRecommendedTags || (r = S.call(t, r, {
                    hash: i,
                    inverse: x.noop,
                    fn: x.program(12, h, e),
                    data: e
                })), r || 0 === r ? r : ""
            }

            function h() {
                return " checked"
            }

            function d() {
                return '\n        <label class="no-tags">No recommended tags</label>\n      '
            }

            function f() {
                return '\n        <a href="#remove" class="btn btn-danger btn-link">Remove link</a>\n    '
            }

            function m() {
                return "Save changes"
            }

            function g() {
                return "Add link"
            }
            n = n || t.helpers, i = i || {};
            var v, y, w, b = "",
                _ = "function",
                k = this.escapeExpression,
                x = this,
                S = n.blockHelperMissing;
            return b += '<div class="edit-preview-image">\n  <div class="swipe">\n    ', w = n.editPreview, w ? v = w.call(e, {
                hash: {},
                data: i
            }) : (v = e.editPreview, v = typeof v === _ ? v.apply(e) : v), (v || 0 === v) && (b += v), b += '\n  </div>\n</div>\n\n<form>\n  <div class="modal-body">\n    ', b += '\n    <input type="hidden" name="url" value="', w = n.url, w ? v = w.call(e, {
                hash: {},
                data: i
            }) : (v = e.url, v = typeof v === _ ? v.apply(e) : v), b += k(v) + '">\n    <input type="hidden" name="replace"', w = n.isMyLink, w ? v = w.call(e, {
                hash: {},
                inverse: x.noop,
                fn: x.program(1, o, i),
                data: i
            }) : (v = e.isMyLink, v = typeof v === _ ? v.apply(e) : v), y = {}, n.isMyLink || (v = S.call(e, v, {
                hash: y,
                inverse: x.noop,
                fn: x.program(1, o, i),
                data: i
            })), (v || 0 === v) && (b += v), b += '>\n\n    <label for="input-title">Link title</label>\n    <input id="input-title" name="description" type="text" value="', w = n.title, w ? v = w.call(e, {
                hash: {},
                data: i
            }) : (v = e.title, v = typeof v === _ ? v.apply(e) : v), b += k(v) + '" placeholder="', w = n.url, w ? v = w.call(e, {
                hash: {},
                data: i
            }) : (v = e.url, v = typeof v === _ ? v.apply(e) : v), b += k(v) + '" class="input-block">\n\n    <label for="input-note">Your comment</label>\n    <textarea name="note" rows="3" placeholder="What do you think of this link?" id="input-note">', w = n.note, w ? v = w.call(e, {
                hash: {},
                data: i
            }) : (v = e.note, v = typeof v === _ ? v.apply(e) : v), b += k(v) + '</textarea>\n\n    <p class="char-count">1000 characters left.</p>\n\n    <label for="input-tags">Tags</label>\n    <input name="tags" type="text" value="', w = n.isMyLink, w ? v = w.call(e, {
                hash: {},
                inverse: x.program(5, a, i),
                fn: x.program(3, s, i),
                data: i
            }) : (v = e.isMyLink, v = typeof v === _ ? v.apply(e) : v), y = {}, n.isMyLink || (v = S.call(e, v, {
                hash: y,
                inverse: x.program(5, a, i),
                fn: x.program(3, s, i),
                data: i
            })), (v || 0 === v) && (b += v), b += '" placeholder="Enter tags separated by commas" id="input-tags" style="width: 100%">\n\n    <div class="error"></div>\n\n    <div class="half">\n      <input name="private" id="input-private" type="checkbox"', w = n.linkPrivacyChecked, w ? v = w.call(e, {
                hash: {},
                data: i
            }) : (v = e.linkPrivacyChecked, v = typeof v === _ ? v.apply(e) : v), b += k(v) + '>\n      <label for="input-private">Private</label>\n    </div>\n\n    <div class="half pull-right">\n      ', w = n.hasRecommendedTags, w ? v = w.call(e, {
                hash: {},
                inverse: x.program(14, d, i),
                fn: x.program(8, u, i),
                data: i
            }) : (v = e.hasRecommendedTags, v = typeof v === _ ? v.apply(e) : v), y = {}, n.hasRecommendedTags || (v = S.call(e, v, {
                hash: y,
                inverse: x.program(14, d, i),
                fn: x.program(8, u, i),
                data: i
            })), (v || 0 === v) && (b += v), b += '\n    </div>\n\n  </div>\n\n  <div class="modal-options">\n    ', w = n.isMyLink, w ? v = w.call(e, {
                hash: {},
                inverse: x.noop,
                fn: x.program(16, f, i),
                data: i
            }) : (v = e.isMyLink, v = typeof v === _ ? v.apply(e) : v), y = {}, n.isMyLink || (v = S.call(e, v, {
                hash: y,
                inverse: x.noop,
                fn: x.program(16, f, i),
                data: i
            })), (v || 0 === v) && (b += v), b += '\n    <a class="btn btn-link" data-dismiss="modal">Cancel</a>\n    <button type="submit" class="btn btn-primary" data-loading-text="Saving...">', w = n.isMyLink, w ? v = w.call(e, {
                hash: {},
                inverse: x.program(20, g, i),
                fn: x.program(18, m, i),
                data: i
            }) : (v = e.isMyLink, v = typeof v === _ ? v.apply(e) : v), y = {}, n.isMyLink || (v = S.call(e, v, {
                hash: y,
                inverse: x.program(20, g, i),
                fn: x.program(18, m, i),
                data: i
            })), (v || 0 === v) && (b += v), b += "</button>\n  </div>\n</form>\n"
        })
    }
}), window.require.define({
    "templates/links/homepage_link": function (t, e, n) {
        n.exports = Handlebars.template(function (t, e, n, r, i) {
            n = n || t.helpers, i = i || {};
            var o, s, a = "",
                l = "function",
                u = this.escapeExpression;
            return a += '<div class="home-link-img">\n   ', s = n.linkPreview, s ? o = s.call(e, {
                hash: {},
                data: i
            }) : (o = e.linkPreview, o = typeof o === l ? o.apply(e) : o), a += u(o) + '\n</div>\n<a href="', s = n.redirectURL, s ? o = s.call(e, {
                hash: {},
                data: i
            }) : (o = e.redirectURL, o = typeof o === l ? o.apply(e) : o), a += u(o) + '" title="', s = n.title, s ? o = s.call(e, {
                hash: {},
                data: i
            }) : (o = e.title, o = typeof o === l ? o.apply(e) : o), a += u(o) + '" rel="nofollow" target="_blank" data-track-name="link title" data-track-outbound="', s = n.url, s ? o = s.call(e, {
                hash: {},
                data: i
            }) : (o = e.url, o = typeof o === l ? o.apply(e) : o), a += u(o) + '" class="home-link-meta">\n  <h2>', s = n.title, s ? o = s.call(e, {
                hash: {},
                data: i
            }) : (o = e.title, o = typeof o === l ? o.apply(e) : o), a += u(o) + '</h2>\n  <span class="link-url" title="', s = n.url, s ? o = s.call(e, {
                hash: {},
                data: i
            }) : (o = e.url, o = typeof o === l ? o.apply(e) : o), a += u(o) + '">\n    ', s = n.domain, s ? o = s.call(e, {
                hash: {},
                data: i
            }) : (o = e.domain, o = typeof o === l ? o.apply(e) : o), a += u(o) + "\n  </span>\n</div>"
        })
    }
}), window.require.define({
    "templates/links/link": function (t, e, n) {
        n.exports = Handlebars.template(function (t, e, n, r, i) {
            function o() {
                var t = "";
                return t
            }

            function s(t, e) {
                var r, i, o, s = "";
                return s += '\n    <small class="date-added">\n      ', o = n.isMyLink, o ? r = o.call(t, {
                    hash: {},
                    inverse: k.program(6, l, e),
                    fn: k.program(4, a, e),
                    data: e
                }) : (r = t.isMyLink, r = typeof r === x ? r.apply(t) : r), i = {}, n.isMyLink || (r = S.call(t, r, {
                    hash: i,
                    inverse: k.program(6, l, e),
                    fn: k.program(4, a, e),
                    data: e
                })), (r || 0 === r) && (s += r), s += '\n      <time datetime="', r = t.time_created, i = {}, o = n.formatMachineDate, r = o ? o.call(t, r, {
                    hash: i,
                    data: e
                }) : C.call(t, "formatMachineDate", r, {
                    hash: i,
                    data: e
                }), s += E(r) + '">', r = t.time_created, i = {}, o = n.formatDate, r = o ? o.call(t, r, {
                    hash: i,
                    data: e
                }) : C.call(t, "formatDate", r, {
                    hash: i,
                    data: e
                }), s += E(r) + "</time>\n    </small>\n  "
            }

            function a() {
                return "You added "
            }

            function l() {
                return "Added "
            }

            function u(t, e) {
                var r, i, o = "";
                return o += '\n        <span class="recommended">', i = n.rcmd_by, i ? r = i.call(t, {
                    hash: {},
                    data: e
                }) : (r = t.rcmd_by, r = typeof r === x ? r.apply(t) : r), o += E(r) + "</span>\n      "
            }

            function c(t, e) {
                var r, i, o, s = "";
                return s += "\n        ", r = t.tags, i = {}, r = n["if"].call(t, r, {
                    hash: i,
                    inverse: k.noop,
                    fn: k.program(11, p, e),
                    data: e
                }), (r || 0 === r) && (s += r), s += "\n        ", r = t.tags, i = {}, i.limit = 100, o = n.linkTags, r = o ? o.call(t, r, {
                    hash: i,
                    data: e
                }) : C.call(t, "linkTags", r, {
                    hash: i,
                    data: e
                }), s += E(r) + "\n      "
            }

            function p() {
                return '<span class="d-icon-tag"></span>'
            }

            function h() {
                return "link-badge-tall"
            }

            function d() {
                return '\n    <a class="btn" title="Edit this link" href="#edit" data-track-group="link brick"><span class="d-icon-pencil" id="edit-icon"></span></a>\n\n    <a class="btn" href="#bulk-edit"><span class="d-icon-checkmark"></span></a>\n  '
            }

            function f() {
                return '\n\n    <a class="btn" title="Add this link" href="#edit" data-track-group="link brick"><span class="d-icon-plus" id="add-icon"></span></a>\n  '
            }

            function m() {
                return '<div class="d-icon-lock">private</div>'
            }

            function g(t, e) {
                var r, i, o = "";
                return o += "\n  ", i = n.noteAsHTML, i ? r = i.call(t, {
                    hash: {},
                    data: e
                }) : (r = t.noteAsHTML, r = typeof r === x ? r.apply(t) : r), o += E(r) + "\n"
            }

            function v(t, e) {
                var r, i, o = "";
                return o += "\n  ", i = n.saversAndNoteOrDesc, i ? r = i.call(t, {
                    hash: {},
                    data: e
                }) : (r = t.saversAndNoteOrDesc, r = typeof r === x ? r.apply(t) : r), o += E(r) + "\n"
            }
            n = n || t.helpers, i = i || {};
            var y, w, b, _ = "",
                k = this,
                x = "function",
                S = n.blockHelperMissing,
                C = n.helperMissing,
                E = this.escapeExpression;
            return _ += '<h3 class="link-title">\n  <a href="', b = n.redirectURL, b ? y = b.call(e, {
                hash: {},
                data: i
            }) : (y = e.redirectURL, y = typeof y === x ? y.apply(e) : y), _ += E(y) + '" title="', b = n.title, b ? y = b.call(e, {
                hash: {},
                data: i
            }) : (y = e.title, y = typeof y === x ? y.apply(e) : y), _ += E(y) + '" rel="nofollow" target="_blank" data-track-group="link brick" data-track-name="link title" data-track-outbound="', b = n.url, b ? y = b.call(e, {
                hash: {},
                data: i
            }) : (y = e.url, y = typeof y === x ? y.apply(e) : y), _ += E(y) + '">', b = n.titleOrURL, b ? y = b.call(e, {
                hash: {},
                data: i
            }) : (y = e.titleOrURL, y = typeof y === x ? y.apply(e) : y), _ += E(y) + '</a>\n</h3>\n\n<div class="link-meta">\n  ', b = n.isDiscover, b ? y = b.call(e, {
                hash: {},
                inverse: k.program(3, s, i),
                fn: k.program(1, o, i),
                data: i
            }) : (y = e.isDiscover, y = typeof y === x ? y.apply(e) : y), w = {}, n.isDiscover || (y = S.call(e, y, {
                hash: w,
                inverse: k.program(3, s, i),
                fn: k.program(1, o, i),
                data: i
            })), (y || 0 === y) && (_ += y), _ += '\n\n  <span class="link-url" title="', b = n.url, b ? y = b.call(e, {
                hash: {},
                data: i
            }) : (y = e.url, y = typeof y === x ? y.apply(e) : y), _ += E(y) + '">\n    <div class="link-favicon" style="background-image: url(//www.google.com/s2/favicons?domain=', b = n.domain, b ? y = b.call(e, {
                hash: {},
                data: i
            }) : (y = e.domain, y = typeof y === x ? y.apply(e) : y), _ += E(y) + ')"></div>\n    ', b = n.domain, b ? y = b.call(e, {
                hash: {},
                data: i
            }) : (y = e.domain, y = typeof y === x ? y.apply(e) : y), _ += E(y) + '\n  </span>\n\n  <nav class="link-tags">\n      ', y = e.rcmd_by, w = {}, y = n["if"].call(e, y, {
                hash: w,
                inverse: k.program(10, c, i),
                fn: k.program(8, u, i),
                data: i
            }), (y || 0 === y) && (_ += y), _ += '\n  </nav>\n</div>\n\n<div class="link-badge ', b = n.isMyLink, b ? y = b.call(e, {
                hash: {},
                inverse: k.noop,
                fn: k.program(13, h, i),
                data: i
            }) : (y = e.isMyLink, y = typeof y === x ? y.apply(e) : y), w = {}, n.isMyLink || (y = S.call(e, y, {
                hash: w,
                inverse: k.noop,
                fn: k.program(13, h, i),
                data: i
            })), (y || 0 === y) && (_ += y), _ += '">\n  ', b = n.isMyLink, b ? y = b.call(e, {
                hash: {},
                inverse: k.program(17, f, i),
                fn: k.program(15, d, i),
                data: i
            }) : (y = e.isMyLink, y = typeof y === x ? y.apply(e) : y), w = {}, n.isMyLink || (y = S.call(e, y, {
                hash: w,
                inverse: k.program(17, f, i),
                fn: k.program(15, d, i),
                data: i
            })), (y || 0 === y) && (_ += y), _ += "\n  ", y = e["private"], w = {}, y = n["if"].call(e, y, {
                hash: w,
                inverse: k.noop,
                fn: k.program(19, m, i),
                data: i
            }), (y || 0 === y) && (_ += y), _ += "\n</div>\n\n", b = n.ifProfile, b ? y = b.call(e, {
                hash: {},
                inverse: k.program(23, v, i),
                fn: k.program(21, g, i),
                data: i
            }) : (y = e.ifProfile, y = typeof y === x ? y.apply(e) : y), w = {}, n.ifProfile || (y = S.call(e, y, {
                hash: w,
                inverse: k.program(23, v, i),
                fn: k.program(21, g, i),
                data: i
            })), (y || 0 === y) && (_ += y), _
        })
    }
}), window.require.define({
    "templates/links/list": function (t, e, n) {
        n.exports = Handlebars.template(function (t, e, n, r, i) {
            return n = n || t.helpers, i = i || {}, '<div class="link-list"> \n  <div class="loading"></div>\n</div>\n\n<div class="alert alert-info no-results">No results found.</div>\n'
        })
    }
}), window.require.define({
    "templates/links/warn": function (t, e, n) {
        n.exports = Handlebars.template(function (t, e, n, r, i) {
            n = n || t.helpers, i = i || {};
            var o, s, a = "",
                l = "function",
                u = this.escapeExpression;
            return a += '<h1>The page you are being redirected to is untrusted.</h1>\n<h3 class="link-title">\n  Click to continue on to <a href="', s = n.url, s ? o = s.call(e, {
                hash: {},
                data: i
            }) : (o = e.url, o = typeof o === l ? o.apply(e) : o), a += u(o) + '" title="', s = n.url, s ? o = s.call(e, {
                hash: {},
                data: i
            }) : (o = e.url, o = typeof o === l ? o.apply(e) : o), a += u(o) + '" rel="nofollow" data-track-group="link brick" data-track-name="link title">', s = n.url, s ? o = s.call(e, {
                hash: {},
                data: i
            }) : (o = e.url, o = typeof o === l ? o.apply(e) : o), (o || 0 === o) && (a += o), a += "</a>\n</h3>"
        })
    }
}), window.require.define({
    "templates/notes/note": function (t, e, n) {
        n.exports = Handlebars.template(function (t, e, n, r, i) {
            n = n || t.helpers, i = i || {};
            var o, s, a = "",
                l = "function",
                u = this.escapeExpression;
            return a += '<div class="avatar" style="background-image: url(', s = n.avatar_url, s ? o = s.call(e, {
                hash: {},
                data: i
            }) : (o = e.avatar_url, o = typeof o === l ? o.apply(e) : o), a += u(o) + ');"></div>\n\n<h5><a href="/', s = n.username, s ? o = s.call(e, {
                hash: {},
                data: i
            }) : (o = e.username, o = typeof o === l ? o.apply(e) : o), a += u(o) + '" data-user="', s = n.username, s ? o = s.call(e, {
                hash: {},
                data: i
            }) : (o = e.username, o = typeof o === l ? o.apply(e) : o), a += u(o) + '" data-track-group="notes" data-track-name="a username">', s = n.displayName, s ? o = s.call(e, {
                hash: {},
                data: i
            }) : (o = e.displayName, o = typeof o === l ? o.apply(e) : o), a += u(o) + "</a></h5>\n\n<article><p>", s = n.noteAsHTMLWithLineBreaks, s ? o = s.call(e, {
                hash: {},
                data: i
            }) : (o = e.noteAsHTMLWithLineBreaks, o = typeof o === l ? o.apply(e) : o), (o || 0 === o) && (a += o), a += "</p></article>\n"
        })
    }
}), window.require.define({
    "templates/search/autocomplete_result": function (t, e, n) {
        n.exports = Handlebars.template(function (t, e, n, r, i) {
            function o(t, e) {
                var r, i, o = "";
                return o += '<span class="description">', i = n.descriptionAsHTML, i ? r = i.call(t, {
                    hash: {},
                    data: e
                }) : (r = t.descriptionAsHTML, r = typeof r === c ? r.apply(t) : r), (r || 0 === r) && (o += r), o += "</span>"
            }
            n = n || t.helpers, i = i || {};
            var s, a, l, u = "",
                c = "function",
                p = this;
            return u += '<a href="#">\n  ', l = n.nameAsHTML, l ? s = l.call(e, {
                hash: {},
                data: i
            }) : (s = e.nameAsHTML, s = typeof s === c ? s.apply(e) : s), (s || 0 === s) && (u += s), u += "\n  ", s = e.description, a = {}, s = n["if"].call(e, s, {
                hash: a,
                inverse: p.noop,
                fn: p.program(1, o, i),
                data: i
            }), (s || 0 === s) && (u += s), u += "\n</a>\n"
        })
    }
}), window.require.define({
    "templates/search/results": function (t, e, n) {
        n.exports = Handlebars.template(function (t, e, n, r, i) {
            function o() {
                return '\n      <div class="links-container you">\n      </div>\n      <div class="links-container network">\n      </div>\n    '
            }
            n = n || t.helpers, r = r || t.partials, i = i || {};
            var s, a, l = "",
                u = this;
            return l += '<div class="row">\n  <section class="sidebar span2">\n\n    ', l += '\n    <div class="tags-container recent">\n      <h4>Recent Tags</h4>\n      <div class="tag-list"></div>\n      <h5 class="no-results meta">No recent tags</h5>\n    </div>\n\n    ', l += '\n    <div class="tags-container related">\n      <h4>Related Tags</h4>\n      <div class="tag-list"></div>\n      <h5 class="no-results meta">No related tags</h5>\n    </div>\n    ', s = e, s = u.invokePartial(r.footer, "footer", s, n, r, i), (s || 0 === s) && (l += s), l += '\n  </section>\n\n  <section id="links-results" class="span6">\n    ', s = e.isLoggedIn, a = {}, s = n["if"].call(e, s, {
                hash: a,
                inverse: u.noop,
                fn: u.program(1, o, i),
                data: i
            }), (s || 0 === s) && (l += s), l += '\n    <div class="links-container everyone">\n    </div>\n  </section>\n</div>'
        })
    }
}), window.require.define({
    "templates/tags/edit_bundle_modal": function (t, e, n) {
        n.exports = Handlebars.template(function (t, e, n, r, i) {
            function o() {
                return '<a href="#remove" class="btn btn-danger btn-link">Remove bundle</a>'
            }
            n = n || t.helpers, i = i || {};
            var s, a, l, u = "",
                c = "function",
                p = this.escapeExpression,
                h = this;
            return u += '<form>\n  <div class="modal-body">\n    <label for="input-name">Bundle Name</label>\n    <input id="input-name" name="name" type="text" value="', l = n.name, l ? s = l.call(e, {
                hash: {},
                data: i
            }) : (s = e.name, s = typeof s === c ? s.apply(e) : s), u += p(s) + '" placeholder="', l = n.url, l ? s = l.call(e, {
                hash: {},
                data: i
            }) : (s = e.url, s = typeof s === c ? s.apply(e) : s), u += p(s) + '" class="input-block">\n\n    <label for="input-tags">Tags</label>\n    <input name="tags" type="text" value="', l = n.tagsInput, l ? s = l.call(e, {
                hash: {},
                data: i
            }) : (s = e.tagsInput, s = typeof s === c ? s.apply(e) : s), u += p(s) + '" placeholder="Enter tags separated by commas" id="input-tags" style="width: 100%">\n  </div>\n\n  <div class="modal-options">\n    \n    ', s = e.name, a = {}, s = n["if"].call(e, s, {
                hash: a,
                inverse: h.noop,
                fn: h.program(1, o, i),
                data: i
            }), (s || 0 === s) && (u += s), u += '\n    \n    <button type="submit" class="btn btn-primary" data-loading-text="Saving...">Save bundle</button>\n  </div>\n</form>'
        })
    }
}), window.require.define({
    "templates/tags/manage": function (t, e, n) {
        n.exports = Handlebars.template(function (t, e, n, r, i) {
            return n = n || t.helpers, i = i || {}, '<form>\n  <div class="modal-body">\n\n    <div id="rename-tag">\n      <label for="to-tagname">Rename Tag</label>\n      <input type="text" id="from-tagname" name="from_tag" placeholder="Select a tag to rename" class="input-tag">\n      <input type="text" id="to-tagname" name="to_tag" placeholder="Enter new tag name" class="input-tag">\n    </div>\n\n    <div id="delete-tag">\n      <label for="delete-tagname">Delete Tag</label>\n      <input type="text" id="delete-tagname" name="delete_tag" placeholder="Select a tag to delete" class="input-tag">\n    </div>\n\n  </div>\n\n  <div class="modal-options">\n    <button type="submit" class="btn btn-primary" data-loading-text="Saving...">Save changes</button>\n  </div>\n</form>\n'
        })
    }
}), window.require.define({
    "templates/tags/tag_bundle_row": function (t, e, n) {
        n.exports = Handlebars.template(function (t, e, n, r, i) {
            n = n || t.helpers, i = i || {};
            var o, s, a = "",
                l = "function",
                u = this.escapeExpression;
            return a += '<div class="pull-right">\n  <a href="#edit-bundle" class="btn">Edit</a>\n</div>\n<h3>', s = n.name, s ? o = s.call(e, {
                hash: {},
                data: i
            }) : (o = e.name, o = typeof o === l ? o.apply(e) : o), a += u(o) + "</h3>"
        })
    }
}), window.require.define({
    "templates/user/featured_followers_collectionview": function (t, e, n) {
        n.exports = Handlebars.template(function (t, e, n, r, i) {
            return n = n || t.helpers, i = i || {}, '<div id="featured-followers-refresh" class="d-icon-refresh"></div>\n<h2><a href="/settings/friends">Recommended People</a><a id="feat-foll-hide" href="#">Hide</a></h2>\n<ul id="featured-followers-container"></ul>\n'
        })
    }
}), window.require.define({
    "templates/user/friends_collectionview": function (t, e, n) {
        n.exports = Handlebars.template(function (t, e, n, r, i) {
            return n = n || t.helpers, i = i || {}, '<ul id="friends-container"></ul>\n'
        })
    }
}), window.require.define({
    "templates/user/profile": function (t, e, n) {
        n.exports = Handlebars.template(function (t, e, n, r, i) {
            function o(t, e) {
                var r, i, o, l = "";
                return l += '\n            <a href="//twitter.com/share" class="socialite twitter-share" data-count="none" data-text="Check out ', o = n.ifMe, o ? r = o.call(t, {
                    hash: {},
                    inverse: R.program(4, a, e),
                    fn: R.program(2, s, e),
                    data: e
                }) : (r = t.ifMe, r = typeof r === O ? r.apply(t) : r), i = {}, n.ifMe || (r = F.call(t, r, {
                    hash: i,
                    inverse: R.program(4, a, e),
                    fn: R.program(2, s, e),
                    data: e
                })), (r || 0 === r) && (l += r), l += 'links on @Delicious!" data-url="https://delicious.com/', o = n.username, o ? r = o.call(t, {
                    hash: {},
                    data: e
                }) : (r = t.username, r = typeof r === O ? r.apply(t) : r), l += I(r) + '" rel="nofollow"></a>\n          '
            }

            function s() {
                return "my "
            }

            function a(t, e) {
                var r, i, o = "";
                return i = n.displayName, i ? r = i.call(t, {
                    hash: {},
                    data: e
                }) : (r = t.displayName, r = typeof r === O ? r.apply(t) : r), o += I(r) + "’s "
            }

            function l() {
                return '\n            <a href="/settings">Upload photo</a>\n          '
            }

            function u(t, e) {
                var r, i, o;
                return r = t.bookmark_count, i = {}, o = n.commafy, r = o ? o.call(t, r, {
                    hash: i,
                    data: e
                }) : M.call(t, "commafy", r, {
                    hash: i,
                    data: e
                }), I(r)
            }

            function c(t, e) {
                var r, i, o;
                return r = t.public_bookmark_count, i = {}, o = n.commafy, r = o ? o.call(t, r, {
                    hash: i,
                    data: e
                }) : M.call(t, "commafy", r, {
                    hash: i,
                    data: e
                }), I(r)
            }

            function p(t, e) {
                var r, i, o;
                return r = t.follower_count, i = {}, o = n.commafy, r = o ? o.call(t, r, {
                    hash: i,
                    data: e
                }) : M.call(t, "commafy", r, {
                    hash: i,
                    data: e
                }), I(r)
            }

            function h() {
                return "0"
            }

            function d(t, e) {
                var r, i, o, s = "";
                return s += '\n        <div class="tags-container all exclusive-tag-search">\n          <h4>\n            ', o = n.ifMe, o ? r = o.call(t, {
                    hash: {},
                    inverse: R.program(19, m, e),
                    fn: R.program(17, f, e),
                    data: e
                }) : (r = t.ifMe, r = typeof r === O ? r.apply(t) : r), i = {}, n.ifMe || (r = F.call(t, r, {
                    hash: i,
                    inverse: R.program(19, m, e),
                    fn: R.program(17, f, e),
                    data: e
                })), (r || 0 === r) && (s += r), s += '\n            <div class="dropdown sort-tags-dropdown pull-right">\n              <span class="sort-by dropdown-toggle" data-toggle="dropdown">Sort<span class="dropdown-carrot"></span></span>\n              <ul class="dropdown-menu sort-by-menu" role="menu" aria-labelledby="dropdownMenu">\n                <li><a id="sort-by-count" href="#">Count</a></li>\n                <li><a id="sort-by-abc" href="#">ABC</a></li>\n              </ul>\n            </div>\n          </h4>\n          <div class="tag-list"></div>\n          <div clas="show-all">\n            <a class="tags-see-all" href="#more">Show more</a>\n          </div>\n        </div>\n      '
            }

            function f() {
                return '\n              <a id="your-tags-modal" href="#">Tags</a>\n            '
            }

            function m() {
                return "\n              Tags\n            "
            }

            function g() {
                return '\n            <a href="#bundles-manage">Tag Bundles</a>\n          '
            }

            function v() {
                return "\n            Tag Bundles\n          "
            }

            function y(t, e) {
                var r, i, o = "";
                return o += '\n      <div class="alert alert-warning"><a href="#login">Sign in</a> to follow @', i = n.display_name, i ? r = i.call(t, {
                    hash: {},
                    data: e
                }) : (r = t.display_name, r = typeof r === O ? r.apply(t) : r), o += I(r) + "</div>\n    "
            }

            function w(t, e) {
                var r, i, o = "";
                return o += "\n          ", i = n.profile_bio, i ? r = i.call(t, {
                    hash: {},
                    data: e
                }) : (r = t.profile_bio, r = typeof r === O ? r.apply(t) : r), o += I(r) + "\n        "
            }

            function b(t, e) {
                var r, i, o, s = "";
                return s += "\n          ", o = n.ifMe, o ? r = o.call(t, {
                    hash: {},
                    inverse: R.noop,
                    fn: R.program(30, _, e),
                    data: e
                }) : (r = t.ifMe, r = typeof r === O ? r.apply(t) : r), i = {}, n.ifMe || (r = F.call(t, r, {
                    hash: i,
                    inverse: R.noop,
                    fn: R.program(30, _, e),
                    data: e
                })), (r || 0 === r) && (s += r), s += "\n        "
            }

            function _() {
                var t = "";
                return t += '\n            Tell the Delicious community about yourself on your <a href="/settings">profile settings page.</a>\n          ', t += "\n            ", t += "\n          "
            }

            function k(t, e) {
                var r, i, o = "";
                return o += '\n          <br><a href="', i = n.profile_url, i ? r = i.call(t, {
                    hash: {},
                    data: e
                }) : (r = t.profile_url, r = typeof r === O ? r.apply(t) : r), o += I(r) + '" target="_blank">', i = n.profile_url, i ? r = i.call(t, {
                    hash: {},
                    data: e
                }) : (r = t.profile_url, r = typeof r === O ? r.apply(t) : r), o += I(r) + "</a>\n        "
            }

            function x(t, e) {
                var r, i, o, s = "";
                return s += '\n        <div id="bulk-edit-actions" class="hidden-tablet">\n\n        ', o = n.ifMe, o ? r = o.call(t, {
                    hash: {},
                    inverse: R.noop,
                    fn: R.program(35, S, e),
                    data: e
                }) : (r = t.ifMe, r = typeof r === O ? r.apply(t) : r), i = {}, n.ifMe || (r = F.call(t, r, {
                    hash: i,
                    inverse: R.noop,
                    fn: R.program(35, S, e),
                    data: e
                })), (r || 0 === r) && (s += r), s += '\n\n        </div>\n        <div class="links-container"></div>\n\n      ', s += "\n      "
            }

            function S() {
                return '\n          <a id="bulk-edit-btn" class="btn">Edit links</a>\n\n          <div id="bulk-edit-on">\n            <div id="bulk-edit-dd" class="btn-group">\n              <a id="bulk-edit-dd-button" class="btn btn-dropdown disabled" data-toggle="dropdown" href="#">\n                <span id="bulk-edit-count">0</span> selected<span class="dropdown-carrot"></span>\n              </a>\n              <ul class="select-menu dropdown-menu">\n                <li><a id="bulk-edit-make-public" href="#public">Make public</a></li>\n                <li><a id="bulk-edit-make-private" href="#private">Make private</a></li>\n                <li><a id="delete-links" href="#delete-links">Remove links</a></li>\n                <li><a id="bulk-edit-select-all" href="#">Select all</a></li>\n                <li><a id="bulk-edit-clear-selection" href="#">Clear Selection</a></li>\n              </ul>\n            </div>\n          </div>\n        '
            }

            function C(t, e) {
                var r, i, o, s = "";
                return s += "\n\n        ", o = n.ifMe, o ? r = o.call(t, {
                    hash: {},
                    inverse: R.program(41, $, e),
                    fn: R.program(38, E, e),
                    data: e
                }) : (r = t.ifMe, r = typeof r === O ? r.apply(t) : r), i = {}, n.ifMe || (r = F.call(t, r, {
                    hash: i,
                    inverse: R.program(41, $, e),
                    fn: R.program(38, E, e),
                    data: e
                })), (r || 0 === r) && (s += r), s += "\n\n      "
            }

            function E(t, e) {
                var r, i, o = "";
                return o += "\n\n          ", r = t.following_count, i = {}, r = n["if"].call(t, r, {
                    hash: i,
                    inverse: R.noop,
                    fn: R.program(39, T, e),
                    data: e
                }), (r || 0 === r) && (o += r), o += '\n          <div id="profile-bookmarklet-install">\n            <div class="bookmarklet-container">\n              \n            </div>\n\n            <h2>Welcome to Delicious!</h2>\n            <p>Add links from anywhere on the web by installing our bookmarklet. Just drag the blue “Add to Delicious” button on the left to your bookmarks bar (or “favorites” bar for Internet Explorer).</p>\n            <br>\n            <p>Connect your <a href="/settings/sources">Facebook or Twitter account</a> to import everything you’ve shared there.</p>\n            <br>\n            <p>If you find something you love on the <a href="/discover">Discover page,</a> add it to your profile by using the + button next to each link.</p>\n          </div>\n\n        '
            }

            function T(t, e) {
                var r, i, o = "";
                return o += '\n            <div id="following-friends">\n            <p>You are now following ', i = n.following_count, i ? r = i.call(t, {
                    hash: {},
                    data: e
                }) : (r = t.following_count, r = typeof r === O ? r.apply(t) : r), o += I(r) + ' of your friends on Delicious. <a href="#following">Click here to change.</a></p></div>\n          '
            }

            function $() {
                return "\n\n          <p>This person doesn’t have any links yet.</p>\n\n        "
            }
            n = n || t.helpers, r = r || t.partials, i = i || {};
            var P, A, L, D = "",
                O = "function",
                I = this.escapeExpression,
                R = this,
                F = n.blockHelperMissing,
                M = n.helperMissing;
            return D += '<div class="row">\n  <section class="span2 profile-sidebar">\n\n    <div class="profile-avatar" style="background-image:url(', L = n.avatar_url, L ? P = L.call(e, {
                hash: {},
                data: i
            }) : (P = e.avatar_url, P = typeof P === O ? P.apply(e) : P), D += I(P) + ')">\n      <div class="avatar-overlay">\n        <div class="avatar-overlay-button">\n          ', L = n.ifUploadedPhotoOrNotMe, L ? P = L.call(e, {
                hash: {},
                inverse: R.program(6, l, i),
                fn: R.program(1, o, i),
                data: i
            }) : (P = e.ifUploadedPhotoOrNotMe, P = typeof P === O ? P.apply(e) : P), A = {}, n.ifUploadedPhotoOrNotMe || (P = F.call(e, P, {
                hash: A,
                inverse: R.program(6, l, i),
                fn: R.program(1, o, i),
                data: i
            })), (P || 0 === P) && (D += P), D += "\n          </div>\n      </div>\n    </div>\n    \n    ", P = {}, P.className = "btn-block", L = n.followButton, P = L ? L.call(e, {
                hash: P,
                data: i
            }) : M.call(e, "followButton", {
                hash: P,
                data: i
            }), (P || 0 === P) && (D += P), D += '\n    \n    <nav class="user-stats">\n      <span class="link-count">Links <small>', L = n.ifMe, L ? P = L.call(e, {
                hash: {},
                inverse: R.program(10, c, i),
                fn: R.program(8, u, i),
                data: i
            }) : (P = e.ifMe, P = typeof P === O ? P.apply(e) : P), A = {}, n.ifMe || (P = F.call(e, P, {
                hash: A,
                inverse: R.program(10, c, i),
                fn: R.program(8, u, i),
                data: i
            })), (P || 0 === P) && (D += P), D += '</small></span>\n      <br>\n      <a href="#followers" data-track-group="profile page" data-track-name="Followers">Followers <small>', P = e.follower_count, A = {}, P = n["if"].call(e, P, {
                hash: A,
                inverse: R.program(14, h, i),
                fn: R.program(12, p, i),
                data: i
            }), (P || 0 === P) && (D += P), D += '</small></a>\n      <br>\n      <a href="#following" data-track-group="profile page" data-track-name="Following">Following <small>', P = e.following_count, A = {}, L = n.commafy, P = L ? L.call(e, P, {
                hash: A,
                data: i
            }) : M.call(e, "commafy", P, {
                hash: A,
                data: i
            }), D += I(P) + '</small></a>\n    </nav>\n\n    <span class="sidebar-meta">\n      ', D += '\n      <div class="tags-container related">\n        <h4>Related Tags</h4>\n        <div class="tag-list"></div>\n      </div>\n\n      ', D += "\n      ", P = e.tag_count, A = {}, P = n["if"].call(e, P, {
                hash: A,
                inverse: R.noop,
                fn: R.program(16, d, i),
                data: i
            }), (P || 0 === P) && (D += P), D += "\n\n      ", D += '\n      <div class="tags-container in-bundle exclusive-tag-search">\n        <h4>Tags in Bundle</h4>\n        <div class="tag-list"></div>\n      </div>\n\n      ', D += '\n      <div class="tag-bundles-container">\n        <h4>\n          ', L = n.ifMe, L ? P = L.call(e, {
                hash: {},
                inverse: R.program(23, v, i),
                fn: R.program(21, g, i),
                data: i
            }) : (P = e.ifMe, P = typeof P === O ? P.apply(e) : P), A = {}, n.ifMe || (P = F.call(e, P, {
                hash: A,
                inverse: R.program(23, v, i),
                fn: R.program(21, g, i),
                data: i
            })), (P || 0 === P) && (D += P), D += '\n        </h4>\n        <div class="sidebar-list"></div>\n      </div>\n\n    </span>\n    ', P = e, P = R.invokePartial(r.footer, "footer", P, n, r, i), (P || 0 === P) && (D += P), D += '\n\n  </section>\n  <section class="span6">\n    ', P = e.username, A = {}, P = n.unless.call(e, P, {
                hash: A,
                inverse: R.noop,
                fn: R.program(25, y, i),
                data: i
            }), (P || 0 === P) && (D += P), D += '\n\n    <div class="profile-header">\n      <h1>', L = n.full_name, L ? P = L.call(e, {
                hash: {},
                data: i
            }) : (P = e.full_name, P = typeof P === O ? P.apply(e) : P), D += I(P) + ' <small><a href="/', L = n.username, L ? P = L.call(e, {
                hash: {},
                data: i
            }) : (P = e.username, P = typeof P === O ? P.apply(e) : P), D += I(P) + '">@', P = e.display_name, A = {}, L = n.decode, P = L ? L.call(e, P, {
                hash: A,
                data: i
            }) : M.call(e, "decode", P, {
                hash: A,
                data: i
            }), D += I(P) + '</a></small></h1>\n      <p class="profile-bio">\n\n        ', P = e.profile_bio, A = {}, P = n["if"].call(e, P, {
                hash: A,
                inverse: R.program(29, b, i),
                fn: R.program(27, w, i),
                data: i
            }), (P || 0 === P) && (D += P), D += "\n\n        ", P = e.profile_url, A = {}, P = n["if"].call(e, P, {
                hash: A,
                inverse: R.noop,
                fn: R.program(32, k, i),
                data: i
            }), (P || 0 === P) && (D += P), D += "\n      </p>\n\n    </div>\n\n      ", L = n.ifHasLinks, L ? P = L.call(e, {
                hash: {},
                inverse: R.program(37, C, i),
                fn: R.program(34, x, i),
                data: i
            }) : (P = e.ifHasLinks, P = typeof P === O ? P.apply(e) : P), A = {}, n.ifHasLinks || (P = F.call(e, P, {
                hash: A,
                inverse: R.program(37, C, i),
                fn: R.program(34, x, i),
                data: i
            })), (P || 0 === P) && (D += P), D += "\n  </section>\n</div>\n"
        })
    }
}), window.require.define({
    "templates/user/settings/account": function (t, e, n) {
        n.exports = Handlebars.template(function (t, e, n, r, i) {
            function o(t, e) {
                var r, i;
                return i = n.profile_email, i ? r = i.call(t, {
                    hash: {},
                    data: e
                }) : (r = t.profile_email, r = typeof r === c ? r.apply(t) : r), p(r)
            }

            function s(t, e) {
                var r, i;
                return i = n.email, i ? r = i.call(t, {
                    hash: {},
                    data: e
                }) : (r = t.email, r = typeof r === c ? r.apply(t) : r), p(r)
            }
            n = n || t.helpers, i = i || {};
            var a, l, u = "",
                c = "function",
                p = this.escapeExpression,
                h = this;
            return u += '<form enctype="multipart/form-data" id="settings-form">\n  <div class="row settings">\n\n    <div class="span7">\n      <h1>Account settings <span class="subtitle">Change your email address and password.</span></h1>\n\n      <fieldset>\n        <label for="user-email">Email Address</label>\n        <input name="profile_email" type="text" id="user-email" class="input-xlarge" placeholder="example@gmail.com" value="', a = e.profile_email, l = {}, a = n["if"].call(e, a, {
                hash: l,
                inverse: h.program(3, s, i),
                fn: h.program(1, o, i),
                data: i
            }), (a || 0 === a) && (u += a), u += '"></input>\n      </fieldset>\n\n      <h3>Change your password</h3>\n\n      <fieldset>\n        <label for="user-old-password">Current Password</label>\n        <input name="old_password" type="password" id="user-old-password" class="input-xlarge"></input>\n\n        <label for="user-new-password">New Password</label>\n        <input name="new_password" type="password" id="user-new-password" class="input-xlarge"></input>\n      </fieldset>\n\n      <p id="error" class="error"></p>\n\n      <div class="form-buttons">\n        <input type="submit" data-loading-text="Updating…" class="btn btn-primary" value="Save changes">\n      </div>\n\n      <p>Note: If you are using private RSS feeds, you will need to update these after you change your password.</p>\n      <br>\n\n      <a href="https://settings.delicious.com/settings/deactivate" target="_blank" class="preview-note">Deactivate my account</a>\n    </div>\n\n  </div>\n</form>\n'
        })
    }
}), window.require.define({
    "templates/user/settings/friends": function (t, e, n) {
        n.exports = Handlebars.template(function (t, e, n, r, i) {
            return n = n || t.helpers, i = i || {}, '<div class="settings row">\n  <div class="span7 hidden-intro">\n    <h1>Find your friends</h1>\n    <p class="info">\n      Delicious is better with other people! Along with your friends from Facebook or Twitter, we’ve also compiled a list of awesome, featured Delicious users. Click Follow to add them to your network and see what links they save.\n    </p>\n    <br>\n  </div>\n\n  <div class="span10">\n    <div class="nav-container">\n      <ul class="nav nav-tabs">\n        <li class="active"><a href="#featured" data-toggle="tab">Featured users</a></li>\n        <li><a href="#facebook" data-toggle="tab">Facebook friends</a></li>\n        <li><a href="#twitter" data-toggle="tab">Twitter friends</a></li>\n      </ul>\n    </div>\n    <div class="tab-content">\n      <div class="tab-pane active" id="featured"></div>\n      <div class="tab-pane" id="facebook">We could not find any of your connections on Delicious. Check out some of our featured users!</div>\n      <div class="tab-pane" id="twitter">We could not find any of your connections on Delicious. Check out some of our featured users!</div>\n    </div>\n  </div>\n</div>\n'
        })
    }
}), window.require.define({
    "templates/user/settings/service": function (t, e, n) {
        n.exports = Handlebars.template(function (t, e, n, r, i) {
            function o() {
                return ' disabled="disabled"'
            }

            function s(t, e) {
                var r, i, o, s = "";
                return s += '\n            <option value="', o = n.value, o ? r = o.call(t, {
                    hash: {},
                    data: e
                }) : (r = t.value, r = typeof r === m ? r.apply(t) : r), s += g(r) + '" ', r = t.selected, i = {}, r = n["if"].call(t, r, {
                    hash: i,
                    inverse: v.noop,
                    fn: v.program(4, a, e),
                    data: e
                }), (r || 0 === r) && (s += r), s += ">", o = n.text, o ? r = o.call(t, {
                    hash: {},
                    data: e
                }) : (r = t.text, r = typeof r === m ? r.apply(t) : r), s += g(r) + "</option>\n          "
            }

            function a() {
                return "selected"
            }

            function l() {
                return ' disabled="disabled"'
            }

            function u() {
                return ' disabled="disabled"'
            }

            function c(t, e) {
                var r, i, o, s = "";
                return s += '\n        <a class="disconnect" href="#">Disconnect from ', r = t.providerId, i = {}, o = n.capitalize, r = o ? o.call(t, r, {
                    hash: i,
                    data: e
                }) : y.call(t, "capitalize", r, {
                    hash: i,
                    data: e
                }), s += g(r) + " as ", o = n.providerDisplayname, o ? r = o.call(t, {
                    hash: {},
                    data: e
                }) : (r = t.providerDisplayname, r = typeof r === m ? r.apply(t) : r), s += g(r) + "</a>\n      "
            }
            n = n || t.helpers, i = i || {};
            var p, h, d, f = "",
                m = "function",
                g = this.escapeExpression,
                v = this,
                y = n.helperMissing;
            return f += '<form id="settings-form">\n  <div class="row settings">\n    <div class="span10">\n      <h1>Importing links from ', p = e.providerId, h = {}, d = n.capitalize, p = d ? d.call(e, p, {
                hash: h,
                data: i
            }) : y.call(e, "capitalize", p, {
                hash: h,
                data: i
            }), f += g(p) + '</h1>\n      <br>\n    </div>\n    <div class="span10">\n      <fieldset>\n        <label for="privacy">When importing links...</label>\n\n        <select name="privacy" class="input-xlarge"', p = e.providerDisplayname, h = {}, p = n.unless.call(e, p, {
                hash: h,
                inverse: v.noop,
                fn: v.program(1, o, i),
                data: i
            }), (p || 0 === p) && (f += p), f += ">\n          \n          ", p = e.privacy_options, h = {}, p = n.each.call(e, p, {
                hash: h,
                inverse: v.noop,
                fn: v.program(3, s, i),
                data: i
            }), (p || 0 === p) && (f += p), f += '\n        </select>\n      </fieldset>\n\n      <fieldset>\n        <label for="tags">Add these tags to imported links</label>\n        <input name="tags" type="text" class="input-xlarge" placeholder="from ', d = n.providerId, d ? p = d.call(e, {
                hash: {},
                data: i
            }) : (p = e.providerId, p = typeof p === m ? p.apply(e) : p), f += g(p) + '" value="', d = n.tags, d ? p = d.call(e, {
                hash: {},
                data: i
            }) : (p = e.tags, p = typeof p === m ? p.apply(e) : p), f += g(p) + '"', p = e.providerDisplayname, h = {}, p = n.unless.call(e, p, {
                hash: h,
                inverse: v.noop,
                fn: v.program(6, l, i),
                data: i
            }), (p || 0 === p) && (f += p), f += '>\n      </fieldset>\n      \n      <div class="form-buttons">\n        <input type="submit" class="btn btn-primary" value="Save changes"', p = e.providerDisplayname, h = {}, p = n.unless.call(e, p, {
                hash: h,
                inverse: v.noop,
                fn: v.program(8, u, i),
                data: i
            }), (p || 0 === p) && (f += p), f += '>\n      </div>\n    </div>\n\n    <div class="span5 description">\n      <br>\n      <p>', d = n.sharingMessage, d ? p = d.call(e, {
                hash: {},
                data: i
            }) : (p = e.sharingMessage, p = typeof p === m ? p.apply(e) : p), f += g(p) + "</p>\n      <p>Links are not imported in real time. Depending on circumstances, it can be as little as five minutes or as long as 24 hours before they appear on Delicious.</p>\n      ", p = e.providerDisplayname, h = {}, p = n.unless.call(e, p, {
                hash: h,
                inverse: v.noop,
                fn: v.program(10, c, i),
                data: i
            }), (p || 0 === p) && (f += p), f += "\n    </div>\n  </div>\n</form>\n"
        })
    }
}), window.require.define({
    "templates/user/settings/settings": function (t, e, n) {
        n.exports = Handlebars.template(function (t, e, n, r, i) {
            n = n || t.helpers, i = i || {};
            var o, s, a = "",
                l = "function",
                u = this.escapeExpression;
            return a += '<div class="row settings">\n  <div class="span7">\n    <h1>Your Profile<span class="subtitle">Visible to the public.</span></h1>\n    <br>\n  </div>\n  <div class="span4">\n    <form id="settings-form">\n      <fieldset>\n        <label for="user-full-name">Your name</label>\n        <input name="full_name" type="text" id="user-full-name" class="span4" placeholder="Example: Lauren Ipsum" value="', s = n.full_name, s ? o = s.call(e, {
                hash: {},
                data: i
            }) : (o = e.full_name, o = typeof o === l ? o.apply(e) : o), a += u(o) + '"></input>\n      </fieldset>\n\n      <fieldset>\n        <label for="user-bio">Tell the world about yourself</label>\n        <textarea name="profile_bio" type="text" cols="10" rows="6" id="user-bio" class="span4" maxlength="140">', s = n.profile_bio, s ? o = s.call(e, {
                hash: {},
                data: i
            }) : (o = e.profile_bio, o = typeof o === l ? o.apply(e) : o), a += u(o) + '</textarea>\n        <div id="bio-count">140 characters left.</div>\n      </fieldset>\n      <fieldset>\n        <label for="user-website">Your website</label>\n          <input name="profile_url" type="text" id="user-website" class="span4" value="', s = n.profile_url, s ? o = s.call(e, {
                hash: {},
                data: i
            }) : (o = e.profile_url, o = typeof o === l ? o.apply(e) : o), a += u(o) + '" placeholder="http://"></input>\n      </fieldset>\n      <div class="form-buttons">\n        <input type="submit" class="btn btn-primary" value="Save profile">\n      </div>\n    </form>\n      \n  </div>\n\n  <div class="span3 photo-upload">\n    <label for="user-avatar-input">Your picture <span class="muted">(max size 2MB)</span></label>\n    <div class="user-avatar">\n      <img class="fade" src="', s = n.avatar_url, s ? o = s.call(e, {
                hash: {},
                data: i
            }) : (o = e.avatar_url, o = typeof o === l ? o.apply(e) : o), a += u(o) + '">\n    </div>\n      <span class="muted upload-info">For best results, choose a square image.</span>\n\n      <iframe id="upload-frame" name="upload-frame" height="0" width="0" frameborder="0" scrolling="no"></iframe>\n\n      <form id="photo-form" target="upload-frame" enctype="multipart/form-data" method="post">\n\n        <fieldset>\n          <div>\n            <p id="photo-upload-error" class="error"></p>\n          </div>\n          <div class="relative">\n            <input name="photo" type="file" id="user-photo-input">\n            <div id="user-photo-button" class="clearfix">\n              <button type="button" class="btn">Choose image</button>\n              <span id="user-photo-text" class="flash red">No image selected</span>\n            </div>\n          </div>\n        </fieldset>\n\n        <fieldset class="relative">\n          <input type="submit" value="Upload" class="btn">\n          <div class="loading-container">\n            <span class="loading"></span>\n          </div>\n        </fieldset>\n      </form>\n  </div>\n</div>'
        })
    }
}), window.require.define({
    "templates/user/settings/sources": function (t, e, n) {
        n.exports = Handlebars.template(function (t, e, n, r, i) {
            return n = n || t.helpers, i = i || {}, '<div class="row settings">\n  <div class="span10">\n    <h1>Import links to your Delicious account</h1>\n    <p>Delicious can automatically import links you share (and have shared) on the social services listed below.</p>\n    <br>\n  </div>\n  <div class="span10">\n\n      <fieldset>\n        <div data-service="facebook" class="social-connector facebook">\n          <div class="icon-block d-icon-facebook">\n          </div>\n          <button class="btn connect">Import from Facebook</button>\n          <a class="disconnect" href="#">Disconnect from Facebook</a>\n        </div>\n      </fieldset>\n\n      <fieldset>\n        <div data-service="twitter" class="social-connector twitter">\n          <div class="icon-block d-icon-twitter">\n          </div>\n          <button class="btn connect">Import from Twitter</button>\n          <a class="disconnect" href="#">Disconnect from Twitter</a>\n        </div>\n      </fieldset>\n\n      <br>\n\n      <h3>Import or export your bookmarks from a file</h3>\n\n      <br>\n\n      <a href="http://export.delicious.com/settings/bookmarks/import" target="_blank" class="preview-note">Import bookmarks</a>\n      <br>\n      <a href="http://export.delicious.com/settings/bookmarks/export" target="_blank" class="preview-note">Export bookmarks</a>\n      \n  </div>\n</div>\n'
        })
    }
}), window.require.define({
    "templates/user/user_card": function (t, e, n) {
        n.exports = Handlebars.template(function (t, e, n, r, i) {
            n = n || t.helpers, i = i || {};
            var o, s, a = "",
                l = "function",
                u = this.escapeExpression;
            return a += '<a href="/', s = n.username, s ? o = s.call(e, {
                hash: {},
                data: i
            }) : (o = e.username, o = typeof o === l ? o.apply(e) : o), a += u(o) + '">\n  <img class="avatar" src="', s = n.avatar_url, s ? o = s.call(e, {
                hash: {},
                data: i
            }) : (o = e.avatar_url, o = typeof o === l ? o.apply(e) : o), a += u(o) + '">\n  <h5>', s = n.displayName, s ? o = s.call(e, {
                hash: {},
                data: i
            }) : (o = e.displayName, o = typeof o === l ? o.apply(e) : o), a += u(o) + "</h5>\n</a>\n\n", s = n.followButton, s ? o = s.call(e, {
                hash: {},
                data: i
            }) : (o = e.followButton, o = typeof o === l ? o.apply(e) : o), (o || 0 === o) && (a += o), a += "\n"
        })
    }
}), window.require.define({
    "templates/user/validate_email": function (t, e, n) {
        n.exports = Handlebars.template(function (t, e, n, r, i) {
            return n = n || t.helpers, i = i || {}, '<div class="join-surround in">\n  <div class="title">\n    <h1><a href="/" class="logo"></a>Welcome to Delicious</h1>\n  </div>\n  <p class="result-info">\n  </p>\n</div>'
        })
    }
}), window.require.define({
    "views/about": function (t, e, n) {
        (function () {
            var t, r, i, o, s, a = {}.hasOwnProperty,
                l = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) a.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            o = e("lib/logger"), s = e("mediator"), r = e("views/base/html"), i = e("views/base/page"), n.exports = t = function (t) {
                function e() {
                    return e.__super__.constructor.apply(this, arguments)
                }
                return l(e, t), e.prototype.initialize = function () {
                    return e.__super__.initialize.apply(this, arguments), this.$body = $("body").addClass("about").on("mousemove", this.updateMapPosition), this.subview("about-html", new r({
                        url: "about",
                        id: "about",
                        containedLayout: !1,
                        container: "#delicious"
                    })), 0
                }, e.prototype.updateMapPosition = function (t) {
                    return $("#world-map").css("left", -t.pageX / 50)
                }, e.prototype.dispose = function () {
                    return e.__super__.dispose.apply(this, arguments), this.$body.removeClass("about").off("mousemove", this.updateMapPosition)
                }, e
            }(i)
        }).call(this)
    }
}), window.require.define({
    "views/auth/forgot_pw": function (t, e, n) {
        (function () {
            var t, r, i, o, s = function (t, e) {
                    return function () {
                        return t.apply(e, arguments)
                    }
                }, a = {}.hasOwnProperty,
                l = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) a.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            r = e("views/base/html"), o = e("mediator"), i = e("lib/logger"), n.exports = t = function (t) {
                function e() {
                    return this.showError = s(this.showError, this), this.fail = s(this.fail, this), this.resetSuccess = s(this.resetSuccess, this), this.sendSuccess = s(this.sendSuccess, this), this.goToResetForm = s(this.goToResetForm, this), this.goToSendForm = s(this.goToSendForm, this), e.__super__.constructor.apply(this, arguments)
                }
                return l(e, t), e.prototype.className = "join forgot-pw", e.prototype.showBanner = !1, e.prototype.autoRender = !0, e.prototype.containedLayout = !1, e.prototype.showReset = !1, e.prototype.events = {
                    "submit form.send": "doSend",
                    "submit form.reset": "doReset"
                }, e.prototype.initialize = function () {
                    return this.options.url = "forgot_pw", this.on("htmlLoaded", this.renderForm, this), e.__super__.initialize.apply(this, arguments)
                }, e.prototype.renderForm = function () {
                    var t = this;
                    return this.options.showReset && this.goToResetForm(), _.defer(function () {
                        return t.$(".join-surround").addClass("in")
                    })
                }, e.prototype.goToSendForm = function () {
                    return this.$("form.reset").addClass("hidden"), this.$("form.send").removeClass("hidden")
                }, e.prototype.goToResetForm = function () {
                    return this.$("form.send").addClass("hidden"), this.$("form.reset").removeClass("hidden")
                }, e.prototype.doSend = function (t) {
                    var e;
                    return t.preventDefault(), this.showError(null), e = this.$("#reset-username").val().trim(), "" === e ? (this.showError("Please enter your username"), void 0) : o.user.forgotPassword(e).fail(this.fail).done(this.sendSuccess)
                }, e.prototype.doReset = function (t) {
                    var e, n;
                    return t.preventDefault(), this.showError(null), n = this.$("#reset-password").val().trim(), "" === n ? this.showError("Please enter a new password") : (e = {
                        user_id: this.options.tokens.id,
                        timestamp: this.options.tokens.time,
                        old_password_hash: this.options.tokens.passhash,
                        new_password: n
                    }, o.user.resetPassword(e).fail(this.fail).done(this.resetSuccess))
                }, e.prototype.sendSuccess = function () {
                    return this.$(".reset-box").addClass("hidden"), this.$(".send-success").removeClass("hidden")
                }, e.prototype.resetSuccess = function () {
                    return this.$(".reset-box").addClass("hidden"), this.$(".reset-success").removeClass("hidden")
                }, e.prototype.fail = function (t) {
                    return "not_found" === t.status ? this.showError("That username doesn't exist.") : "expired_session" === t.status ? (this.goToSendForm(), this.options.showReset = !1, this.showError("Session expired, please try again.")) : this.showError(t.error.charAt(0).toUpperCase() + t.error.slice(1))
                }, e.prototype.showError = function (t) {
                    return t = null != t ? "<p>" + t + "</p>" : "", this.options.showReset ? this.$("form.reset .error-info").html(t) : this.$("form.send .error-info").html(t)
                }, e.prototype.dispose = function () {
                    return this.off("htmlLoaded", this.renderForm, this), e.__super__.dispose.apply(this, arguments)
                }, e
            }(r)
        }).call(this)
    }
}), window.require.define({
    "views/auth/intro": function (t, e, n) {
        (function () {
            var t, r, i, o, s, a, l, u = {}.hasOwnProperty,
                c = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) u.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            o = e("views/base/page"), a = e("lib/logger"), l = e("mediator"), r = e("models/links"), i = e("views/links/list"), s = e("views/user/settings/sources"), n.exports = t = function (t) {
                function e() {
                    return e.__super__.constructor.apply(this, arguments)
                }
                return c(e, t), e.prototype.containedLayout = !0, e.prototype.className = "intro", e.prototype.autoRender = !0, e.prototype.showBanner = !1, e.prototype.section = "connect", e.prototype.events = {
                    'click a[href="#skip"]': "skipSection"
                }, e.prototype.initialize = function () {
                    var t = this;
                    return e.__super__.initialize.apply(this, arguments), $("body").addClass("warm-bg"), this.$el.load("/html/intro.html", function () {
                        return t.$(".bookmarklet-container").load("/html/tools.html #bookmarklet-box a.bookmarklet"), t.options.section && t.$('[data-url="/' + t.options.section + '"]').tab("show"), t.subview("sources", new s({
                            container: "#intro-connnect-container"
                        })), t.links = new r([], {
                            urlParams: {
                                type: "everyone"
                            }
                        }), t.links.fetch({
                            success: function () {
                                return t.subview("links", new i({
                                    collection: t.links
                                }))
                            }
                        }), t.$('[data-toggle="tab"]').on("shown", function (t) {
                            return l.publish("!router:changeURL", "join/intro" + $(t.target).data("url"))
                        })
                    })
                }, e.prototype.skipSection = function (t) {
                    var e, n;
                    return t.preventDefault(), e = this.$(".intro-pane.active"), n = e.next(".intro-pane").attr("id"), "intro-install-bookmarklet" === e.attr("id") ? l.publish("!router:route", l.user.get("username")) : this.$('a[href="#' + n + '"]').tab("show")
                }, e.prototype.dispose = function () {
                    return $("body").removeClass("warm-bg"), e.__super__.dispose.apply(this, arguments)
                }, e
            }(o)
        }).call(this)
    }
}), window.require.define({
    "views/auth/join": function (t, e, n) {
        (function () {
            var t, r, i, o, s = function (t, e) {
                    return function () {
                        return t.apply(e, arguments)
                    }
                }, a = {}.hasOwnProperty,
                l = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) a.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            t = e("views/base/html"), o = e("mediator"), i = e("lib/logger"), n.exports = r = function (t) {
                function e() {
                    return this.doTwitterLogin = s(this.doTwitterLogin, this), this.doRegister = s(this.doRegister, this), this.signupWithService = s(this.signupWithService, this), this.signupError = s(this.signupError, this), this.showUsernameExistsError = s(this.showUsernameExistsError, this), this.checkUsernameExists = s(this.checkUsernameExists, this), e.__super__.constructor.apply(this, arguments)
                }
                return l(e, t), e.prototype.className = "join", e.prototype.showBanner = !1, e.prototype.containedLayout = !1, e.prototype.events = {
                    "keyup #user-username": "checkUsernameDebounced",
                    "blur #user-email": "checkValidEmail",
                    "click #connect-facebook": "doFacebookLogin",
                    "click #connect-twitter": "doTwitterLogin",
                    "click #create-account": "toCreateAccount",
                    "submit form": "doRegister",
                    "change #check-password": "toggleInputType"
                }, e.prototype.initialize = function () {
                    var t = this;
                    return this.options.url = "auth/join", this.options.includeFooter = !1, e.__super__.initialize.apply(this, arguments), this.subscribeEvent("join:checkedUserExists", this.showUsernameExistsError), Modernizr.history && (window.onpopstate = function (e) {
                        return "/join" === window.location.pathname ? (e.preventDefault(), t.toJoinHome()) : void 0
                    }), this.checkUsernameDebounced = _.debounce(this.checkUsernameExists, 100), this.on("htmlLoaded", this.htmlLoaded, this)
                }, e.prototype.htmlLoaded = function () {
                    return this.$(".join-surround").addClass("in"), $.getScript("https://www.google.com/recaptcha/api/js/recaptcha_ajax.js", function (t, e) {
                        return Recaptcha.create("6Lf2VNkSAAAAAHpjH1J1nqEZxV4UEBWNAHrc8QLF", "join-captcha", {
                            theme: "custom"
                        })
                    })
                }, e.prototype.toggleInputType = function () {
                    return this.$("#user-password").get(0).type = this.$("#check-password").prop("checked") ? "text" : "password"
                }, e.prototype.showErrorInfo = function (t) {
                    var e;
                    return e = null != t ? "<p>" + t + "</p>" : "", $(".error-info").html(e)
                }, e.prototype.toJoinHome = function () {
                    return this.$(".slide2").removeClass("active"), this.$(".slide1").addClass("active").removeClass("done")
                }, e.prototype.toCreateAccount = function () {
                    return this.publishEvent("!router:changeURL", "/join/create"), this.$(".slide1").removeClass("active").addClass("done"), this.$(".slide2").addClass("active")
                }, e.prototype.checkValidEmail = function () {
                    var t, e;
                    return t = this.$("#user-email").val(), e = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/, e.test(t) || 0 === t.length ? (this.showErrorInfo(null), !0) : (this.showErrorInfo("Please enter a valid email address"), !1)
                }, e.prototype.checkUsernameExists = function () {
                    var t;
                    return t = $("#user-username").val(), t.length > 0 ? (o.user.existsUser(t), !1) : t.length > 1 ? (this.showErrorInfo(null), !0) : void 0
                }, e.prototype.showUsernameExistsError = function (t) {
                    return t.available ? this.showErrorInfo(null) : this.showErrorInfo("Sorry, the username '" + t.username + "', has already been taken. Please choose another username.")
                }, e.prototype.signupError = function (t) {
                    return Recaptcha.reload(), "invalid_captcha" === t.status ? this.showErrorInfo("Sorry, you typed the words incorrectly. Please try again - we need to make sure you’re human!") : this.showErrorInfo(t.error.charAt(0).toUpperCase() + t.error.slice(1))
                }, e.prototype.signupWithService = function (t) {
                    return this.prefillAndCreate(t.displayName)
                }, e.prototype.prefillAndCreate = function (t) {
                    return this.$("#user-username, #user-full-name").val(t), this.toCreateAccount()
                }, e.prototype.doRegister = function (t) {
                    var e, n = this;
                    return t.preventDefault(), this.checkValidEmail() ? (e = this.getFormData(), e.username && e.email && e.name && e.password ? (this.trigger("register"), o.user.set({
                        full_name: e.name,
                        display_name: e.username,
                        email: e.email,
                        username: e.username,
                        password: e.password,
                        recaptcha_challenge_field: Recaptcha.get_challenge(),
                        recaptcha_response_field: Recaptcha.get_response()
                    }), o.user.register().fail(this.signupError).done(function () {
                        return n.$el.hide()
                    })) : (this.showErrorInfo("Please complete all the fields to continue."), void 0)) : void 0
                }, e.prototype.doTwitterLogin = function (t) {
                    return t.preventDefault(), o.auth.promptServiceLogin("twitter", {
                        redirectNewUsers: !1
                    }).fail(_.bind(this.signupWithService, this))
                }, e.prototype.doFacebookLogin = function (t) {
                    return t.preventDefault(), o.auth.promptServiceLogin("facebook", {
                        redirectNewUsers: !1
                    }).fail(_.bind(this.signupWithService, this))
                }, e
            }(t)
        }).call(this)
    }
}), window.require.define({
    "views/auth/login": function (t, e, n) {
        (function () {
            var t, r, i, o, s = function (t, e) {
                    return function () {
                        return t.apply(e, arguments)
                    }
                }, a = {}.hasOwnProperty,
                l = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) a.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            i = e("lib/logger"), o = e("mediator"), r = e("views/base/modal"), n.exports = t = function (t) {
                function e() {
                    return this.showError = s(this.showError, this), e.__super__.constructor.apply(this, arguments)
                }
                return l(e, t), e.prototype.template = "auth/login_modal", e.prototype.events = {
                    "submit form": "toggleSubmitButton",
                    "click #connect-facebook": "doFacebookLogin",
                    "click #connect-twitter": "doTwitterLogin"
                }, e.prototype.initialize = function (t) {
                    return this.options = null != t ? t : {}, this.options = _.extend(this.defaults, {
                        title: "Sign in to Delicious",
                        size: "slim"
                    }), e.__super__.initialize.apply(this, arguments), this.subscribeEvent("login:success", this.hide), this.subscribeEvent("auth:bad_credentials", this.error)
                }, e.prototype.afterRender = function () {
                    return e.__super__.afterRender.apply(this, arguments), this.options.redirect === !1 ? this.$(".modal-footer a").attr("target", "_blank") : void 0
                }, e.prototype.error = function () {
                    return this.$(".modal-body").prepend('<div class="alert alert-error">Incorrect username or password.</div>'), this.$('button[type="submit"]').button("reset")
                }, e.prototype.showError = function () {
                    var t;
                    return t = $('<div class="alert alert-error">Incorrect username or password.</div>'), this.$('button[type="submit"]').button("reset"), this.$(".alert-container").append(t)
                }, e.prototype.toggleSubmitButton = function () {
                    return this.$el.find(".alert").remove(), this.$('button[type="submit"]').button("loading")
                }, e.prototype.doTwitterLogin = function (t) {
                    return t.preventDefault(), this.trigger("socialClickThrough"), o.auth.promptServiceLogin("twitter")
                }, e.prototype.doFacebookLogin = function (t) {
                    return t.preventDefault(), this.trigger("socialClickThrough"), o.auth.promptServiceLogin("facebook")
                }, e
            }(r)
        }).call(this)
    }
}), window.require.define({
    "views/auth/splash": function (t, e, n) {
        (function () {
            var t, r, i, o, s = function (t, e) {
                    return function () {
                        return t.apply(e, arguments)
                    }
                }, a = {}.hasOwnProperty,
                l = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) a.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            i = e("lib/logger"), o = e("mediator"), t = e("views/base/html"), n.exports = r = function (t) {
                function e() {
                    return this.doFacebookSignup = s(this.doFacebookSignup, this), this.doTwitterSignup = s(this.doTwitterSignup, this), e.__super__.constructor.apply(this, arguments)
                }
                return l(e, t), e.prototype.className = "splash", e.prototype.containedLayout = !1, e.prototype.showBanner = !1, e.prototype.events = {
                    "click #connect-twitter": "doTwitterSignup",
                    "click #connect-facebook": "doFacebookSignup"
                }, e.prototype.initialize = function () {
                    return this.options.url = "auth/splash", this.options.includeFooter = !1, $("body").addClass("splash-container"), e.__super__.initialize.apply(this, arguments)
                }, e.prototype.doTwitterSignup = function (t) {
                    return t.preventDefault(), o.auth.promptServiceLogin("twitter")
                }, e.prototype.doFacebookSignup = function (t) {
                    return t.preventDefault(), o.auth.promptServiceLogin("facebook")
                }, e.prototype.dispose = function () {
                    return $("body").removeClass("splash-container"), e.__super__.dispose.apply(this, arguments)
                }, e
            }(t)
        }).call(this)
    }
}), window.require.define({
    "views/base/banner": function (t, e, n) {
        (function () {
            var t, r, i, o, s, a, l, u, c, p = function (t, e) {
                    return function () {
                        return t.apply(e, arguments)
                    }
                }, h = {}.hasOwnProperty,
                d = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) h.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            l = e("lib/avos"), u = e("lib/logger"), c = e("mediator"), s = e("models/tags"), a = e("lib/view"), o = e("views/base/modal"), r = e("lib/delicious_autocomplete_items"), i = e("views/base/delicious_autocomplete_items_view"), n.exports = t = function (t) {
                function n() {
                    return this.updateActiveLink = p(this.updateActiveLink, this), n.__super__.constructor.apply(this, arguments)
                }
                return d(n, t), n.prototype.container = "#delicious", n.prototype.containerMethod = "prepend", n.prototype.template = "layout/banner", n.prototype.tagName = "header", n.prototype.className = "page-header", n.prototype.events = {
                    "submit form.global-search": "performSearch",
                    "mousedown form.global-search .search-submit": "performSearch",
                    "click .banner-dropdown a": "clickDropdown",
                    'click a[href="#sign-out"]': "clickSignOut",
                    'click a[href="#add-link"]': "clickAddLink",
                    "click .ios-banner .close": "closeAppBanner"
                }, n.prototype.initialize = function () {
                    var t = this;
                    return n.__super__.initialize.apply(this, arguments), this.mixin("lib/search_params"), this.model.on("change", function () {
                        return t.render()
                    }), this.subscribeEvent("!router:changeURL", this.updateActiveLink), this.subscribeEvent("search:changeURL", function (e) {
                        return t.publishEvent("!router:changeURL", t.searchPathFromSearchParams(e))
                    })
                }, n.prototype.afterRender = function () {
                    var t, o;
                    return n.__super__.afterRender.apply(this, arguments), t = (null != (o = c.user) ? o.get("isLoggedIn") : void 0) ? c.user.autocompleteItems() : new r, this.autocomplete = new i({
                        el: this.$el.find(".autocomplete"),
                        collection: t,
                        itemView: e("views/base/delicious_autocomplete_item_view")
                    }), this.isiPhone() || this.isMobile() || store.get("closediPadBanner") ? void 0 : (this.body = $("body"), this.body.addClass("ios-banner-on"), this.iosBanner = $('<div class="ios-banner">\n  <p class="container">\n    Announcing the new <a href="http://blog.delicious.com/2013/07/announcing-the-delicious-ipad-app/">Delicious iPad app</a>!\n    <span class="close d-icon-close">×</span>\n  </p>\n</div>'), this.$el.append(this.iosBanner))
                }, n.prototype.clickDropdown = function (t) {
                    var e = this;
                    return t.preventDefault(), this.isTouch() ? _.defer(function () {
                        return e.$(".dropdown").removeClass("open")
                    }) : this.$(".dropdown-menu").show()
                }, n.prototype.clickSignOut = function (t) {
                    return t.preventDefault(), c.user.logout(), window.location.href = l.defaultRoute
                }, n.prototype.clickAddLink = function (t) {
                    var e = this;
                    return t.preventDefault(), $("#add-link.modal").length ? void 0 : c.user.get("isLoggedIn") ? new o({
                        title: "Add a new link to Delicious",
                        template: "links/add_from_url",
                        id: "add-link",
                        size: "normal",
                        closeOnBackgroundClick: !0
                    }) : c.auth.promptLogin({
                        title: "Sign in to save a link"
                    }).done(function () {
                        return _.delay(function () {
                            return e.clickAddLink(t)
                        }, 200)
                    })
                }, n.prototype.updateActiveLink = function (t) {
                    var e;
                    return t = t.split("/")[0], e = "discover" === t ? "discover" : "network" === t ? "network" : t === this.model.get("username") ? "remember" : void 0, e ? this.$(".nav-" + e).addClass("active-nav").siblings().removeClass("active-nav") : this.$(".active-nav").removeClass("active-nav")
                }, n.prototype.performSearch = function (t) {
                    var e, n;
                    return t.preventDefault(), n = this.searchParamsFromSearchString($(".autocomplete input").val()), e = this.searchPathFromSearchParams(n), _.isEmpty(e) || this.publishEvent("!router:route", e), !1
                }, n.prototype.closeAppBanner = function () {
                    return store.set("closediPadBanner", !0), this.iosBanner.remove(), this.body.removeClass("ios-banner-on")
                }, n
            }(a)
        }).call(this)
    }
}), window.require.define({
    "views/base/delicious_autocomplete_item_view": function (t, e, n) {
        (function () {
            var t, r, i, o = {}.hasOwnProperty,
                s = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) o.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            i = e("mediator"), r = encodeURIComponent, n.exports = t = function (t) {
                function n() {
                    return n.__super__.constructor.apply(this, arguments)
                }
                return s(n, t), n.prototype.initialize = function () {
                    return n.__super__.initialize.apply(this, arguments), this.username = i.user.get("username")
                }, n.prototype.template = function (t) {
                    return this._template || (this._template = e("templates/search/autocomplete_result")), this._template(t)
                }, n.prototype.render = function (t) {
                    var e, n;
                    return e = this.model.toJSON(), _.each([this.model.key(), "description"], function (n) {
                        return e.hasOwnProperty(n) ? e["" + n + "AsHTML"] = e[n].replace(t, "<em>$1</em>") : void 0
                    }), this.$el.html(this.template(e)), "@" !== this.model.get("token") ? (n = _.map(["@" + this.username, this.model.completion()], r).join(" "), this.$el.attr("data-autocomplete-completion", n)) : this.$el.attr("data-autocomplete-completion", r(this.model.completion())), this
                }, n
            }(AutocompleteItemView)
        }).call(this)
    }
}), window.require.define({
    "views/base/delicious_autocomplete_items_view": function (t, e, n) {
        (function () {
            var t, r, i = {}.hasOwnProperty,
                o = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) i.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            r = e("mediator"), n.exports = t = function (t) {
                function e() {
                    return e.__super__.constructor.apply(this, arguments)
                }
                return o(e, t), e.prototype.initialize = function () {
                    var t = this;
                    return e.__super__.initialize.apply(this, arguments), r.subscribe("autocomplete:clear", function () {
                        return t.trigger("autocomplete:clear")
                    }), r.subscribe("autocomplete:replace", function (e) {
                        return t.trigger("autocomplete:replace", e)
                    }), r.subscribe("autocomplete:append", function (e) {
                        return t.trigger("autocomplete:append", e)
                    })
                }, e
            }(AutocompleteItemsView)
        }).call(this)
    }
}), window.require.define({
    "views/base/flash": function (t, e, n) {
        (function () {
            var t, r, i = {}.hasOwnProperty,
                o = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) i.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            r = e("lib/view"), n.exports = t = function (t) {
                function e() {
                    return e.__super__.constructor.apply(this, arguments)
                }
                return o(e, t), e.prototype.containerMethod = "prepend", e.prototype.className = "alert fade in", e.prototype.container = "#delicious", e.prototype.initialize = function () {
                    return _.defaults(this.options, {
                        type: "info",
                        autoDestroy: 2500,
                        closeOnXClick: !0
                    }), e.__super__.initialize.apply(this, arguments)
                }, e.prototype.render = function () {
                    var t, n = this;
                    return e.__super__.render.apply(this, arguments), this.options.flash ? (this.$el.addClass("alert-" + this.options.type), t = this.options.flash, this.options.closeOnXClick && (t += '<a href="#" class="close" data-dismiss="alert">×</a>'), this.$el.html(t).bind("closed", _.bind(this.dispose, this)), this.options.autoDestroy ? _.delay(function () {
                        var t;
                        return null != (t = n.$el) ? t.alert("close") : void 0
                    }, this.options.autoDestroy) : void 0) : void 0
                }, e
            }(r)
        }).call(this)
    }
}), window.require.define({
    "views/base/html": function (t, e, n) {
        (function () {
            var t, r, i, o = {}.hasOwnProperty,
                s = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) o.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            i = e("mediator"), r = e("views/base/page"), n.exports = t = function (t) {
                function e() {
                    return e.__super__.constructor.apply(this, arguments)
                }
                return s(e, t), e.prototype.autoRender = !0, e.prototype.showBanner = !0, e.prototype.defaults = {
                    includeFooter: !0
                }, e.prototype.initialize = function () {
                    return null != this.options.containedLayout && (this.containedLayout = this.options.containedLayout), e.__super__.initialize.apply(this, arguments)
                }, e.prototype.render = function () {
                    var t = this;
                    return e.__super__.render.apply(this, arguments), this.options.url ? this.$el.load("/html/" + this.options.url + ".html", function () {
                        return t.trigger("htmlLoaded"), t.options.includeFooter ? t.$el.append(Handlebars.partials.footer()) : void 0
                    }) : void 0
                }, e
            }(r)
        }).call(this)
    }
}), window.require.define({
    "views/base/modal": function (t, e, n) {
        (function () {
            var t, r, i, o = {}.hasOwnProperty,
                s = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) o.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            r = e("lib/view"), i = e("lib/avos"), n.exports = t = function (t) {
                function e() {
                    return e.__super__.constructor.apply(this, arguments)
                }
                return s(e, t), e.prototype.container = "body", e.prototype.className = "modal hide fade", e.prototype.attributes = {
                    role: "dialog",
                    "aria-hidden": !0,
                    tabindex: "-1"
                }, e.prototype.spinner = !1, e.prototype.defaults = {
                    title: !1,
                    closeOnXClick: !0,
                    closeOnBackgroundClick: !0,
                    size: "normal"
                }, e.prototype.initialize = function () {
                    var t = this;
                    return this.subscribeEvent("!router:route", function () {
                        var e;
                        return null != (e = t.$el) ? e.modal("hide") : void 0
                    }), this.$el.on("hidden", _.bind(this.dispose, this)), this.spinner && this.showSpinner(), e.__super__.initialize.apply(this, arguments)
                }, e.prototype.getTitle = function () {
                    return this.options.title ? _.isFunction(this.options.title) ? this.options.title.apply(this) : this.options.title : void 0
                }, e.prototype.addTitle = function () {
                    return this.titleAdded ? void 0 : (this.getTitle() && this.$el.prepend('<div class="modal-header"><h3>' + this.getTitle() + "</h3></div>"), this.options.closeOnXClick && this.$(".modal-header, .modal-body").first().prepend('<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'), this.titleAdded = !0)
                }, e.prototype.afterRender = function () {
                    var t = this;
                    return e.__super__.afterRender.apply(this, arguments), this.$el.addClass("size-" + this.options.size), this.options.closeOnBackgroundClick || this.$el.attr("data-backdrop", "static"), this.collection && 0 === this.collection.length || this.addTitle(), this.options.html && (this.modalBody = '<div class="modal-body">' + this.options.html + "</div>", this.$el.append(this.modalBody)), _.delay(function () {
                        var e;
                        return null != (e = t.$el) ? e.find('input:not([type="hidden"]), select, textarea, btn.primary').first().focus() : void 0
                    }, 300), this.$el.modal("show"), this.hideSpinner()
                }, e.prototype.showSpinner = function () {
                    return this.$el.addClass("modal-loading").modal("show"), this.autoRender = !1, this.$spinner = $('<div class="loading"></div>').appendTo(this.$el).spin(_.extend(i.spinner.defaults, {
                        color: "white"
                    }))
                }, e.prototype.hideSpinner = function () {
                    var t;
                    if (this.spinner) return this.$el.removeClass("modal-loading"), null != (t = this.$spinner) && t.remove(), this.spinner = !1
                }, e.prototype.hide = function () {
                    var t;
                    return null != (t = this.$el) ? t.modal("hide") : void 0
                }, e.prototype.dispose = function () {
                    return this.spinner && this.$spinner.remove(), e.__super__.dispose.apply(this, arguments)
                }, e
            }(r)
        }).call(this)
    }
}), window.require.define({
    "views/base/modal_collection": function (t, e, n) {
        (function () {
            var t, r, i = {}.hasOwnProperty,
                o = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) i.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            r = e("views/base/modal"), n.exports = t = function (t) {
                function e() {
                    return e.__super__.constructor.apply(this, arguments)
                }
                return o(e, t), e.prototype.listSelector = ".modal-body", e.prototype.id = "modal-collection", e.prototype.loadingIndicator = !0, e.prototype.defaults = {
                    title: !1,
                    size: "slim",
                    closeOnXClick: !0,
                    closeOnBackgroundClick: !0
                }, e.prototype.initialize = function () {
                    return e.__super__.initialize.apply(this, arguments), this.modelBind("reset", this.renderCollection), this.$el.html('<div class="modal-body">\n  <div class="loading"></div>\n</div>')
                }, e.prototype.render = function () {
                    return 0 !== this.collection.length && this.renderCollection(), e.__super__.render.apply(this, arguments)
                }, e.prototype.renderCollection = function () {
                    var t, e = this;
                    return this.addTitle(), this.$(this.fallbackSelector).hide(), t = [], this.collection.each(function (n, r) {
                        var i;
                        return e.itemView ? (i = new e.itemView({
                            model: e.collection.at(r)
                        }), t.push(i.$el.outerHtml())) : void 0
                    }), this.$(this.listSelector).html(t.join(""))
                }, e
            }(r)
        }).call(this)
    }
}), window.require.define({
    "views/base/page": function (t, e, n) {
        (function () {
            var t, r, i, o, s = {}.hasOwnProperty,
                a = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) s.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            o = e("mediator"), r = e("lib/view"), i = e("lib/logger"), n.exports = t = function (t) {
                function e() {
                    return e.__super__.constructor.apply(this, arguments)
                }
                return a(e, t), e.prototype.container = "#delicious", e.prototype.containedLayout = !0, e.prototype.className = "pageview", e.prototype.showBanner = !0, e.prototype.autoRender = !1, e.prototype.initialize = function () {
                    var t, n, r = this;
                    return e.__super__.initialize.apply(this, arguments), (this.model || this.collection) && (t = !1, this.modelBind("change", function () {
                        return t || r.render(), t = !0
                    })), $("#delicious").toggleClass("container", this.containedLayout === !0), null != (n = o.layout) ? n.toggleBanner(this.showBanner) : void 0
                }, e.prototype.afterRender = function () {
                    return e.__super__.afterRender.apply(this, arguments), this.isMobile() ? this.$(".delicious-footer").appendTo(this.$el) : void 0
                }, e
            }(r)
        }).call(this)
    }
}), window.require.define({
    "views/base/popover": function (t, e, n) {
        (function () {
            var t, r, i, o = {}.hasOwnProperty,
                s = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) o.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            i = e("mediator"), r = e("lib/view"), n.exports = t = function (t) {
                function e() {
                    return e.__super__.constructor.apply(this, arguments)
                }
                return s(e, t), e.prototype.autoRender = !1, e.prototype.container = "body", e.prototype.initialize = function (t) {
                    var n, r, i;
                    return this.options = null != t ? t : {}, e.__super__.initialize.apply(this, arguments), this.$el ? (this.mixin("views/user/mixins/follow_button"), n = this.options.bootstrapOptions || {}, r = _.defaults(n, {
                        content: this.getRenderedContent(),
                        stopChildrenPropagation: !1
                    }), this.$el.popover(r), i = this.$el.popover("getData"), null != i && (i.popover.on("click", '[href="#follow"]', $.proxy(this.clickFollow, this)), i.popover.on("click", '[href="#unfollow"]', $.proxy(this.clickUnfollow, this)), this.$el.hover(function () {
                        return Socialite.load(i.popover)
                    })), this.model ? this.modelBind("change", this.renderContent, this) : void 0) : void 0
                }, e.prototype.render = function () {
                    return this
                }, e.prototype.getRenderedContent = function () {
                    return this.getTemplateFunction()(this.getTemplateData())
                }, e.prototype.renderContent = function () {
                    var t, e;
                    return t = null != (e = this.$el) ? e.popover("getData") : void 0, null != t ? t.popover.find(".content").html(this.getRenderedContent()) : void 0
                }, e.prototype.dispose = function () {
                    var t;
                    return (null != (t = this.$el) ? t.popover("getData") : void 0) && this.$el.popover("destroy"), e.__super__.dispose.apply(this, arguments)
                }, e
            }(r)
        }).call(this)
    }
}), window.require.define({
    "views/base/section": function (t, e, n) {
        (function () {
            var t, r, i, o, s, a = {}.hasOwnProperty,
                l = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) a.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            r = e("lib/model"), i = e("views/base/page"), t = e("views/base/html"), s = e("mediator"), n.exports = o = function (n) {
                function i() {
                    return i.__super__.constructor.apply(this, arguments)
                }
                return l(i, n), i.prototype.autoRender = !0, i.prototype.id = "section", i.prototype.template = "layout/page", i.prototype.events = {
                    "click .question": "clickQuestion",
                    "click #help-expand-all": "clickHelpExpandAll"
                }, i.prototype.initialize = function (t) {
                    var e, n, o, s;
                    return this.options = t, n = _.where(this.options.pages, {
                        id: t.currentId
                    }), e = n.length ? n[0] : this.options.pages[0], s = _.where(e.subpages, {
                        id: this.options.currentSectionId
                    }), o = s.length ? s[0] : !1, this.model = new r({
                        url: this.options.page,
                        nav: this.options.pages,
                        page: e,
                        section: o
                    }), i.__super__.initialize.apply(this, arguments)
                }, i.prototype.render = function () {
                    var n, r, o, s = this;
                    return i.__super__.render.apply(this, arguments), r = this.model.get("page"), this.$('.section_nav a[data-page-id="' + r.id + '"]').addClass("active"), o = this.model.get("section"), o ? (n = e(o.view), this.subview("page", new n({
                        model: o.model,
                        container: this.$(".content"),
                        template: o.template,
                        service: o.id
                    }))) : r.view ? (n = e(r.view), this.subview("page", new n({
                        model: r.model,
                        container: this.$(".content")
                    }))) : r.url ? (this.subview("page", new t({
                        url: r.url,
                        container: this.$(".content"),
                        includeFooter: !1
                    })), this.subview("page").on("htmlLoaded", function () {
                        return s.$(".answer").addClass("collapse"), s.options.params.questionid ? s.$('[href$="/' + s.options.params.questionid + '"]').trigger("click") : void 0
                    })) : void 0
                }, i.prototype.clickQuestion = function (t) {
                    var e;
                    return t.preventDefault(), e = $(t.target), this.publishEvent("!router:changeURL", e.attr("href")), $(window).scrollTop(e.next(".answer").toggleClass("collapse").offset().top - 100)
                }, i.prototype.clickHelpExpandAll = function (t) {
                    var e;
                    return t.preventDefault(), e = $(t.target), "Collapse all answers" === e.text() ? ($(".answer").addClass("collapse"), e.text("Expand all answers")) : ($(".answer").removeClass("collapse"), e.text("Collapse all answers"))
                }, i.prototype.afterRender = function () {
                    var t, e;
                    return i.__super__.afterRender.apply(this, arguments), t = this.model.get("section"), e = this.$(".section_subnav"), t || /^\/settings\/sources/.test(window.location.pathname) ? e.show() : e.slideDown(150)
                }, i
            }(i)
        }).call(this)
    }
}), window.require.define({
    "views/chrome": function (t, e, n) {
        (function () {
            var t, r, i, o = {}.hasOwnProperty,
                s = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) o.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            i = e("lib/logger"), r = e("views/base/page"), n.exports = t = function (t) {
                function e() {
                    return e.__super__.constructor.apply(this, arguments)
                }
                return s(e, t), e.prototype.autoRender = !0, e.prototype.className = "pageview big-text", e.prototype.render = function () {
                    return this.$el.append("<h1>Thanks for installing the Delicious Chrome extension!</h1>")
                }, e
            }(r)
        }).call(this)
    }
}), window.require.define({
    "views/home": function (t, e, n) {
        (function () {
            var t, r, i, o, s, a = function (t, e) {
                    return function () {
                        return t.apply(e, arguments)
                    }
                }, l = {}.hasOwnProperty,
                u = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) l.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            s = e("lib/logger"), i = e("views/base/html"), o = e("views/links/list"), r = e("views/links/homepage_link"), n.exports = t = function (t) {
                function e() {
                    return this.renderLinks = a(this.renderLinks, this), e.__super__.constructor.apply(this, arguments)
                }
                return u(e, t), e.prototype.className = "home", e.prototype.containedLayout = !1, e.prototype.autoRender = !0, e.prototype.events = {
                    "click #user-story .expand-collapse": "expandCollapseUserStory",
                    "click #homepage-feed .expand-collapse": "expandCollapseFeed"
                }, e.prototype.initialize = function () {
                    var t;
                    return this.options.url = "home", this.on("htmlLoaded", this.renderLinks), t = Math.floor(2 * Math.random()), this.$el.addClass(0 === t ? "home-a" : "home-b"), e.__super__.initialize.apply(this, arguments), this.$pageHeader = $(".page-header").addClass("page-header-gray page-header-static"), this.$body = $("body").removeClass("banner-on").addClass("body-home"), this.$iosBanner = $(".ios-banner"), this.$iosBanner.length ? (this.$iosBanner.hide(), this.$body.removeClass("ios-banner-on")) : void 0
                }, e.prototype.renderLinks = function () {
                    var t = this;
                    return this.options.links.fetch().done(function () {
                        return t.subview("links", new o({
                            className: "home-links",
                            itemView: r,
                            container: t.$("#homepage-feed"),
                            collection: t.options.links,
                            infiniteScroll: !1
                        })), t.subview("links").$el.append('<a href="#" class="expand-collapse d-icon-arrow-down">&nbsp;</a>')
                    })
                }, e.prototype.expandCollapseUserStory = function (t) {
                    var e;
                    return t.preventDefault(), e = this.$("#user-story .expand-collapse"), this.$("#user-info").toggleClass("expanded").hasClass("expanded") ? e.text("show less") : e.text("learn more")
                }, e.prototype.expandCollapseFeed = function (t) {
                    var e;
                    return t.preventDefault(), e = this.$("#homepage-feed .expand-collapse"), this.$("#homepage-feed").toggleClass("expanded").hasClass("expanded") ? e.removeClass("d-icon-arrow-down").addClass("d-icon-arrow-up") : e.removeClass("d-icon-arrow-up").addClass("d-icon-arrow-down")
                }, e.prototype.dispose = function () {
                    return this.$pageHeader.removeClass("page-header-gray page-header-static"), this.$body.addClass("banner-on").removeClass("body-home"), this.$iosBanner.length && (this.$iosBanner.show(), this.$body.addClass("ios-banner-on")), e.__super__.dispose.apply(this, arguments)
                }, e
            }(i)
        }).call(this)
    }
}), window.require.define({
    "views/layout": function (t, e, n) {
        (function () {
            var t, r, i, o, s, a, l, u, c, p = function (t, e) {
                    return function () {
                        return t.apply(e, arguments)
                    }
                }, h = {}.hasOwnProperty,
                d = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) h.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            r = e("chaplin"), l = e("models/tag"), s = e("models/link"), u = e("lib/logger"), c = r.mediator, a = e("views/base/modal"), t = e("views/base/banner"), i = e("views/base/flash"), n.exports = o = function (e) {
                function n() {
                    return this.updateTagsContainers = p(this.updateTagsContainers, this), n.__super__.constructor.apply(this, arguments)
                }
                return d(n, e), n.prototype.events = {
                    "contextmenu .page-header .logo": "showLogoDialog",
                    'submit form[data-action="login"]': "submitLoginForm",
                    'submit form[data-action="addFromUrl"]': "submitAddLink",
                    'click a[href="#login"]': "showLogin",
                    scroll: "triggerLoadMoreEvent",
                    'click a[href="#more"]': "clickLoadMoreButton",
                    "click [data-tag]": "clickTag",
                    "click [data-tag-bundle]": "clickTagBundle",
                    "click [data-user]": "clickUser",
                    'mouseenter a[href="#unfollow"]': "hoverUnfollow",
                    'mouseleave a[href="#unfollow"]': "hoverUnfollow",
                    "click .help-prompt": "showHelp",
                    "click [data-track-group]": "trackClick",
                    "click [data-track-outbound]": "trackOutboundLink"
                }, n.prototype.initialize = function () {
                    var e, r = this;
                    return n.__super__.initialize.apply(this, arguments), Modernizr.load({
                        test: Modernizr.mq("(max-width: 767px)"),
                        yep: "/js/fastclick.js",
                        callback: function () {
                            return new FastClick(document.body), window.scrollTo(0, 1)
                        }
                    }), this.subscribeEvent("search:searching", function () {
                        return r.loadMoreIsRunning = !0
                    }), this.subscribeEvent("search:finish", function () {
                        return r.loadMoreIsRunning = !1
                    }), this.subscribeEvent("search:fetch", this.updateTagsContainers), this.$page = $("#delicious"), key("shift+/", this.showHelp), e = window.location.pathname, "/save" !== e && "/post" !== e && (this.banner = new t({
                        model: c.user
                    }), "/" !== e) ? this.checkForMeiWeiPromo() : void 0
                }, n.prototype.showLogoDialog = function (t) {
                    return t.preventDefault(), new a({
                        template: "layout/logo_dialog",
                        id: "logo-modal",
                        title: "Download our logo",
                        size: "slim"
                    })
                }, n.prototype.showHelp = function (t) {
                    return null != t && t.preventDefault(), $(".modal").length ? void 0 : new a({
                        template: "layout/help",
                        id: "help-modal",
                        size: "normal",
                        title: "Delicious tips and tricks"
                    })
                }, n.prototype.submitLoginForm = function (t) {
                    var e, n, r, i;
                    return t.preventDefault(), e = $(t.target), i = e.formParams(), r = i.username, n = i.password, r && n ? c.publish("auth:login", {
                        username: r,
                        password: n
                    }) : (e.find('button[type="submit"]').button("reset"), void 0)
                }, n.prototype.showLogin = function (t) {
                    return t.preventDefault(), c.auth.promptLogin()
                }, n.prototype.submitAddLink = function (t) {
                    var e, n;
                    return t.preventDefault(), e = $(t.target).formParams(), "" !== e["new-url"] ? (n = new s({
                        url: e["new-url"]
                    }), c.links.compose({
                        model: n
                    }), $("#add-link.modal").modal("hide")) : void 0
                }, n.prototype.triggerLoadMoreEvent = function (t) {
                    var e = this;
                    return this._throttledTriggerLoadMoreEvent || (this._throttledTriggerLoadMoreEvent = _.throttle(function (t) {
                        return e.loadMoreIsRunning ? void 0 : $(window).scrollTop() >= $(document).height() - $(window).height() - 350 ? e.clickLoadMoreButton(t) : void 0
                    }, 250)), this._throttledTriggerLoadMoreEvent(t)
                }, n.prototype.clickLoadMoreButton = function (t) {
                    return null != t && t.preventDefault(), c.publish("search:loadMore")
                }, n.prototype.clickTag = function (t) {
                    var e, n;
                    return t.preventDefault(), e = $(t.target), n = l.unquote(e.attr("data-tag")), e.closest(".tags-container").is(".exclusive-tag-search") ? this.publishEvent("search:onlyTag", n) : this.publishEvent("search:addTag", n)
                }, n.prototype.clickTagBundle = function (t) {
                    var e, n;
                    return t.preventDefault(), e = $(t.target), n = l.unquote(e.attr("data-tag-bundle")), this.publishEvent("search:onlyTagBundle", n), this.publishEvent("search:hideAutocomplete")
                }, n.prototype.clickUser = function (t) {
                    var e, n;
                    return t.preventDefault(), e = $(t.target), n = e.attr("data-user"), this.publishEvent("search:addUsername", n)
                }, n.prototype.hoverUnfollow = function (t) {
                    return $(t.target).text("mouseenter" === t.type ? "Unfollow" : "Following")
                }, n.prototype.checkForMeiWeiPromo = function () {
                    var t = this;
                    return $.ajax({
                        url: "//avosapi.delicious.com/api/v1/public/headers"
                    }).done(function (e) {
                        var n, r;
                        return n = e.pkg["Accept-Language"], -1 === n.search(/zh/) || store.get("closedNotification-info-xPromoForMeiweisq") ? void 0 : (r = new i({
                            type: "notification",
                            autoDestroy: 3e5,
                            notiId: "xPromoForMeiweisq",
                            flash: '您是中文用户吗？快来体验我们的中文产品吧！<a target="_blank" href="http://meiweisq.com/delicious"><img data-track-group="promo" data-track-name="meiweisq" src="//meiweisq.com/static/meiweisq-logo.png"></a>'
                        }), r.$el.bind("closed", function () {
                            return store.set("closedNotification-info-xPromoForMeiweisq", !0)
                        }), t.banner.subview("meiwei-promo", r))
                    })
                }, n.prototype.toggleBanner = function (t) {
                    var e;
                    return null != (e = this.banner) && e.$el.toggle(t), $("body").toggleClass("banner-on", t)
                }, n.prototype.updateTagsContainers = function (t) {
                    var e, n;
                    return (null != (e = t.tags) ? e.length : void 0) > 0 || (null != (n = t.keywords) ? n.length : void 0) > 0 ? this.$page.addClass("filtering-tags").removeClass("filtering-tag-bundle") : t.tagBundle ? this.$page.addClass("filtering-tag-bundle").removeClass("filtering-tags") : this.$page.removeClass("filtering-tags").removeClass("filtering-tag-bundle")
                }, n.prototype.trackClick = function (t) {
                    var e, n, r;
                    return e = $(t.target), r = e.attr("data-track-group"), n = e.attr("data-track-name") || e.attr("title") || e.text(), n ? _gaq.push(["_trackEvent", r, "click", n]) : void 0
                }, n.prototype.trackOutboundLink = function (t) {
                    var e;
                    return e = $(t.currentTarget).attr("data-track-outbound"), _gaq.push(["_trackEvent", "Outbound Link", e]), 0
                }, n
            }(r.Layout)
        }).call(this)
    }
}), window.require.define({
    "views/links/_bulk": function (t, e, n) {
        (function () {
            var t, r, i, o, s, a = function (t, e) {
                    return function () {
                        return t.apply(e, arguments)
                    }
                }, l = {}.hasOwnProperty,
                u = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) l.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            i = e("lib/encode"), o = e("lib/logger"), s = e("mediator"), r = e("views/base/modal"), n.exports = t = function (t) {
                function e() {
                    return this.setupTagAutoComplete = a(this.setupTagAutoComplete, this), e.__super__.constructor.apply(this, arguments)
                }
                return u(e, t), e.prototype.template = "links/bulk", e.prototype.id = "edit-bulk", e.prototype.events = {
                    "submit form": "submitEditBulk",
                    'click [href="#remove"]': "clickDelete"
                }, e.prototype.afterRender = function () {
                    return e.__super__.afterRender.apply(this, arguments), _.delay(this.setupTagAutoComplete, 400)
                }, e.prototype.setupTagAutoComplete = function () {
                    var t = this;
                    return this.$("#input-tags-bulk").select2({
                        openOnEnter: !1,
                        tags: function () {
                            return t.model.relatedTags(t.$("#input-tags-bulk").val()) || []
                        },
                        tokenSeparators: [","],
                        formatNoMatches: function () {
                            return ""
                        }
                    })
                }, e.prototype.submitEditBulk = function (t) {
                    var e, n, r, o = this;
                    return t.preventDefault(), n = $("#input-tags-bulk").val().split(","), n.length > 0 ? (r = [], _.each($(".link.selected").find(".link-url"), function (t) {
                        return r.push($(t).attr("title"))
                    }), e = {
                        tags: i(n),
                        urls: i(r)
                    }, this.model.bulkEdit(e).always(function () {
                        var t;
                        return t = '<span class="d-icon-tag"></span>', _.each(n, function (e, n) {
                            return e = e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), n > 0 && (t += ", "), t += '<a class="tag-small" data-tag="' + Tag.quote(e) + '" href="#">' + Tag.sanitize(e) + "</a>"
                        }), _.each($(".link.selected"), function (e) {
                            var n;
                            return n = $(e).find(".link-tags"), n.html(""), n.append(t)
                        }), o.hide()
                    })) : void 0
                }, e.prototype.clickDelete = function (t) {
                    return t.preventDefault()
                }, e.prototype.dispose = function () {
                    return this.$("#input-tags").select2("destroy"), e.__super__.dispose.apply(this, arguments)
                }, e
            }(r)
        }).call(this)
    }
}), window.require.define({
    "views/links/detail": function (t, e, n) {
        (function () {
            var t, r, i, o, s, a = function (t, e) {
                    return function () {
                        return t.apply(e, arguments)
                    }
                }, l = {}.hasOwnProperty,
                u = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) l.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            r = e("views/notes/notes_collection"), i = e("views/base/popover"), s = e("lib/view"), o = e("models/user"), n.exports = t = function (t) {
                function e() {
                    return this.closeShare = a(this.closeShare, this), e.__super__.constructor.apply(this, arguments)
                }
                return u(e, t), e.prototype.autoRender = !0, e.prototype.className = "link-details closed span4 hidden-intro", e.prototype.container = "#delicious .pageview .row", e.prototype.template = "links/detail", e.prototype.events = {
                    "click [data-tag]": "clickTag",
                    "click #details-share-button": "clickShare",
                    "click .link-share a": "sharePopup",
                    "click #load-more-comments": "clickLoadMoreComments"
                }, e.prototype.initialize = function () {
                    return e.__super__.initialize.apply(this, arguments), this.mixin("lib/search_params"), this.modelBind("change", this.render)
                }, e.prototype.afterRender = function () {
                    var t, n;
                    return e.__super__.afterRender.apply(this, arguments), this.notes = this.model.notes(), this.subview("notes", new r({
                        collection: this.notes,
                        container: ".others.comments",
                        heading: "Comments from other users",
                        headingLevel: 4,
                        showHeadingIfEmpty: !1
                    })), (n = this.model.get("first_saver")) && (t = new o(n), this.subview("hovercard", new i({
                        el: this.$(".first-saver a"),
                        template: "user/user_card",
                        model: t,
                        bootstrapOptions: {
                            trigger: "hover",
                            classes: "user-card wider"
                        }
                    }))), this.loadMoreComments(), this.$(".scrollable").scrollable(), this.toggle()
                }, e.prototype.clickLoadMoreComments = function (t) {
                    return t.preventDefault(), this.loadMoreComments()
                }, e.prototype.loadMoreComments = function () {
                    var t = this;
                    return this.notes.fetch({
                        update: !0,
                        remove: !1
                    }).done(function () {
                        return t.disposed ? void 0 : t.$("#load-more-comments").toggleClass("hidden", 0 === t.notes.length || 0 !== t.notes.length % 10)
                    })
                }, e.prototype.clickTag = function (t) {
                    var e, n, r, i;
                    return t.preventDefault(), e = $(t.target), r = Tag.unquote(e.attr("data-tag")), i = e.closest(".note").find("[data-user]").attr("data-user") || null, n = this.searchPathFromSearchParams({
                        tags: [r],
                        username: i
                    }), this.publishEvent("!router:route", n)
                }, e.prototype.toggle = function () {
                    return this.$el.toggleClass("closed")
                }, e.prototype.clickShare = function (t) {
                    return t.preventDefault(), t.stopPropagation(), this.$(".link-share").toggleClass("share-open"), $(document).on("click", this.closeShare)
                }, e.prototype.closeShare = function (t) {
                    return $(t.target).closest(".link-share-wrapper").length ? void 0 : (this.$(".link-share").removeClass("share-open"), $(document).off("click", this.closeShare))
                }, e.prototype.sharePopup = function (t) {
                    var e, n, r, i, o, s, a, l, u, c;
                    return e = $(t.currentTarget), u = e.attr("href"), /^mailto/.test(u) ? void 0 : (t.preventDefault(), c = 575, r = 400, n = $(window), i = (n.width() - c) / 2, l = (n.height() - r) / 2, u.indexOf("text=") > -1 && (s = u.substring(u.indexOf("text=") + 5, u.indexOf("&url=")), o = encodeURIComponent(u.substring(u.indexOf("text=") + 5, u.indexOf("&url="))), u = u.replace(s, o)), a = "status=1,width=" + c + ",height=" + r + ",top=" + l + ",left=" + i, window.open(u, "Share from Delicious", a))
                }, e.prototype.dispose = function () {
                    return $(document).off("click", this.closeShare), e.__super__.dispose.apply(this, arguments)
                }, e
            }(s)
        }).call(this)
    }
}), window.require.define({
    "views/links/edit": function (t, e, n) {
        (function () {
            var t, r, i, o, s = function (t, e) {
                    return function () {
                        return t.apply(e, arguments)
                    }
                }, a = {}.hasOwnProperty,
                l = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) a.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            i = e("lib/logger"), o = e("mediator"), r = e("views/base/modal"), n.exports = t = function (t) {
                function e() {
                    return this.toggleShowTags = s(this.toggleShowTags, this), this.setupTagAutoComplete = s(this.setupTagAutoComplete, this), e.__super__.constructor.apply(this, arguments)
                }
                return l(e, t), e.prototype.template = "links/edit", e.prototype.id = "edit-link", e.prototype.spinner = !0, e.prototype.events = {
                    "submit form": "submitEditLink",
                    'click [href="#remove"]': "clickDelete",
                    "change #input-set-tags": "toggleShowTags",
                    "keydown #input-note": "checkNoteLimit",
                    "keyup #input-note": "checkNoteLimit"
                }, e.prototype.initialize = function (t) {
                    return this.options = null != t ? t : {}, _.extend(this.defaults, {
                        title: !1,
                        size: "normal",
                        closeOnXClick: !0,
                        closeOnBackgroundClick: !1
                    }), e.__super__.initialize.apply(this, arguments), 0
                }, e.prototype.afterRender = function () {
                    var t = this;
                    return e.__super__.afterRender.apply(this, arguments), this.setupTagAutoComplete(), _.delay(function () {
                        return t.$("#input-note")[0].focus()
                    }, 400), this.noteInput = this.$("#input-note"), this.previousTags = !1, this.checkNoteLimit()
                }, e.prototype.setupTagAutoComplete = function () {
                    var t;
                    return t = _.map(o.user.get("tags"), function (t) {
                        return t.name
                    }), this.$("#input-tags").select2({
                        openOnEnter: !1,
                        tags: _.uniq(t),
                        tokenSeparators: [","],
                        formatNoMatches: function () {
                            return "Enter tags separated by commas"
                        }
                    }), this.$(".select2-results").scrollable()
                }, e.prototype.submitEditLink = function (t) {
                    var e, n, r = this;
                    return t.preventDefault(), n = this.$('input[name="tags"]').val(), 0 > n.indexOf("<") && 0 > n.indexOf(">") ? (this.showError(""), this.$('button[type="submit"]').button("loading"), e = this.getFormData("description", "url", "note", "tags", "private", "showTags", "replace", "chosen_image_md5"), this.model.addOrEdit(e).done(function () {
                        var t;
                        return r.previousTags = !1, null != (t = r.$el) ? t.modal("hide") : void 0
                    })) : (this.showError("Tags contain illegal characters"), void 0)
                }, e.prototype.showError = function (t) {
                    return this.$(".error").text(t)
                }, e.prototype.toggleShowTags = function (t) {
                    var e, n, r, i, o, s, a, l;
                    return e = $(t.target), s = this.$("#input-tags"), r = (null != (l = this.model.get("recommended")) ? l.suggested_tags : void 0) || [], n = s.select2("val"), e.prop("checked") ? (this.previousTags = n, s.select2("val", _.uniq(n.concat(r)))) : (this.previousTags ? (o = _.difference(n, r), i = _.uniq(this.previousTags.concat(o)), a = _.difference(i, n), i = _.without.apply(_, [i].concat(a))) : i = _.without.apply(_, [n].concat(r)), s.select2("val", _.uniq(i)))
                }, e.prototype.checkNoteLimit = function () {
                    var t, e, n, r, i, o, s;
                    return r = 1e3, s = this.noteInput.val(), n = s.length, e = this.$(".char-count"), n >= r ? (e.text("Sorry, you have reached the limit!"), n > r ? (o = n - r, i = o > 2 ? s.substring(0, r - 3) + "..." : s.substring(0, r), this.noteInput.val(i)) : void 0) : (t = r - n, e.text("" + t + " character" + (1 === t ? "" : "s") + " left."))
                }, e.prototype.clickDelete = function (t) {
                    var e = this;
                    return t.preventDefault(), confirm("Are you sure?") ? this.model.remove().done(function () {
                        var t;
                        return null != (t = e.$el) ? t.modal("hide") : void 0
                    }) : void 0
                }, e.prototype.dispose = function () {
                    return $("#input-tags").select2("destroy"), e.__super__.dispose.apply(this, arguments)
                }, e
            }(r)
        }).call(this)
    }
}), window.require.define({
    "views/links/homepage_link": function (t, e, n) {
        (function () {
            var t, r, i = {}.hasOwnProperty,
                o = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) i.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            r = e("lib/view"), n.exports = t = function (t) {
                function e() {
                    return e.__super__.constructor.apply(this, arguments)
                }
                return o(e, t), e.prototype.template = "links/homepage_link", e.prototype.className = "home-link", e
            }(r)
        }).call(this)
    }
}), window.require.define({
    "views/links/link": function (t, e, n) {
        (function () {
            var t, r, i, o = {}.hasOwnProperty,
                s = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) o.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            i = e("mediator"), r = e("lib/view"), n.exports = t = function (t) {
                function e() {
                    return e.__super__.constructor.apply(this, arguments)
                }
                return s(e, t), e.prototype.template = "links/link", e.prototype.className = "link", e.prototype.attributes = {
                    tabindex: "-1"
                }, e.prototype.events = {
                    "click .link-title a": "clickLink",
                    'click [href="#edit"]': "clickEditLink",
                    click: "clickLinkBrick"
                }, e.prototype.initialize = function () {
                    return e.__super__.initialize.apply(this, arguments), this.modelBind("change", _.bind(this.render, this)), this.clickEditLinkThrottled = _.debounce(this.showEditModal, 600, !0)
                }, e.prototype.render = function () {
                    return e.__super__.render.apply(this, arguments), this.$el.attr("data-md5", this.model.get("md5")), this.$el.toggleClass("private", this.model.get("private") === !0), this.$("time").timeago()
                }, e.prototype.clickLink = function (t) {
                    return this.isMobile() ? t.preventDefault() : void 0
                }, e.prototype.clickLinkBrick = function (t) {
                    var e, n, r, o, s;
                    return r = t.shiftKey || t.shiftLeft, this.isMobile() && !$(t.target).parents(".link-badge").length ? (o = this.$el.find(".link-title > a").attr("href"), window.location = o) : $(t.target).is("a:not(.btn)") ? void 0 : (t.preventDefault(), n = location.pathname.split("/")[1] === i.user.get("username") || (null != (s = location.hash.split("#")[1]) ? s.split("/")[0] : void 0) === i.user.get("username"), n && (e = $(t.target), e.is(".link") || (e = e.closest(".link")), i.publish("bulkedit:selectone", e, r)), this.publishEvent("list:activateByMd5", this.model.get("md5")))
                }, e.prototype.clickEditLink = function (t) {
                    return t.preventDefault(), this.clickEditLinkThrottled()
                }, e.prototype.showEditModal = function () {
                    return this.publishEvent("links:compose", {
                        model: this.model
                    })
                }, e
            }(r)
        }).call(this)
    }
}), window.require.define({
    "views/links/list": function (t, e, n) {
        (function () {
            var t, r, i, o, s, a, l, u, c, p = function (t, e) {
                    return function () {
                        return t.apply(e, arguments)
                    }
                }, h = {}.hasOwnProperty,
                d = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) h.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            t = e("lib/collection_view"), r = e("models/link"), i = e("views/links/detail"), o = e("views/links/link"), u = e("lib/logger"), c = e("mediator"), l = e("views/tags/manage"), a = e("models/tags"), n.exports = s = function (t) {
                function e() {
                    return this.deactivateDetailPane = p(this.deactivateDetailPane, this), this.loadMore = p(this.loadMore, this), this.bulkEditToggle = p(this.bulkEditToggle, this), this.bulkEditSelectAll = p(this.bulkEditSelectAll, this), this.bulkEditMake = p(this.bulkEditMake, this), this.bulkEditDelete = p(this.bulkEditDelete, this), this.bulkEditClearSelection = p(this.bulkEditClearSelection, this), e.__super__.constructor.apply(this, arguments)
                }
                return d(e, t), e.prototype.template = "links/list", e.prototype.itemView = o, e.prototype.container = ".links-container", e.prototype.containerMethod = "html", e.prototype.className = "links", e.prototype.listSelector = ".link-list", e.prototype.fallbackSelector = ".no-results", e.prototype.loadingIndicator = !0, e.prototype.infiniteScroll = !0, e.prototype.previousLoadCount = 0, e.prototype.initialize = function (t) {
                    return e.__super__.initialize.call(this, t), this.modelBind("reset", this.renderSeeAllLink), this.modelBind("change", this.renderSeeAllLink), $("#bulk-edit-btn").on("click", this.bulkEditToggle), $("#bulk-edit-clear-selection").on("click", this.bulkEditClearSelection), $("#bulk-edit-select-all").on("click", this.bulkEditSelectAll), $("#your-tags-modal").on("click", this.tagEditModal), $("#bulk-edit-make-public").on("click", this.bulkEditMake), $("#bulk-edit-make-private").on("click", this.bulkEditMake), $("#delete-links").on("click", this.bulkEditDelete), null != (null != t ? t.infiniteScroll : void 0) && (this.infiniteScroll = t.infiniteScroll), this.subscribeEvent("list:activateByMd5", this.activateByMd5), this.infiniteScroll && this.subscribeEvent("search:loadMore", this.loadMore), this.subscribeEvent("click .load-more", this.loadMore), this.subscribeEvent("follower:hide", this.showNewFollower), this.subscribeEvent("bulkedit:activate", this.bulkEditActivate), this.subscribeEvent("bulkedit:deactivate", this.bulkEditDeactivate), this.subscribeEvent("bulkedit:selectall", this.bulkEditSelectAll), this.subscribeEvent("bulkedit:selectone", this.bulkEditSelectOne), this.subscribeEvent("bulkedit:toggle", this.bulkEditToggle), this.subscribeEvent("links:changeCategory", this.filterByCategory), this.subscribeEvent("link:hideAllDetailPanes", this.deactivateDetailPane), (null != t ? t.seeAllPath : void 0) && (this.seeAllPath = t.seeAllPath), this._renderAllItemsCounter = 0, this.bulkEditActive = !1
                }, e.prototype.afterRender = function () {
                    var t;
                    return e.__super__.afterRender.apply(this, arguments), (null != (t = this.collection) ? t.length : void 0) > 0 ? this.hideLoading() : void 0
                }, e.prototype.filterByCategory = function (t) {
                    return this.bulkEditClearSelection(), this.collection.urlParams.filter = t, this.collection.reset([], {
                        silent: !1
                    }), this.setLoading(), this.collection.fetch([], {
                        update: !0
                    })
                }, e.prototype.activateByMd5 = function (t) {
                    var e;
                    if (!this.bulkEditActive && !this.isMobile()) return this.$(".link").removeClass("expanded").filter('[data-md5="' + t + '"]').addClass("expanded"), e = this.collection.where({
                        md5: t
                    }), e.length ? this.showDetailPane(e[0]) : void 0
                }, e.prototype.bulkEditActivate = function (t) {
                    return null != t && t.preventDefault(), $("#bulk-edit-on").show(), $("#bulk-edit-btn").text("Finish editing"), $('[href="#edit"]').hide(), $('[href="#bulk-edit"]').css("display", "block"), $(".link-details").hide(), this.$(".link").removeClass("expanded"), this.bulkEditActive = !0
                }, e.prototype.bulkEditClearAll = function (t) {
                    return null != t && t.preventDefault(), this.bulkEditClearSelection(), $("#bulk-edit-count").text(0), $('[href="#edit"]').show(), $('[href="#bulk-edit"]').css("display", "none")
                }, e.prototype.bulkEditClearSelection = function (t) {
                    return null != t && t.preventDefault(), this.bulkEditClearCount(), this.$(".link.selected").removeClass("selected")
                }, e.prototype.bulkEditClearCount = function () {
                    return $("#bulk-edit-count").text(0), $("#bulk-edit-dd-button").addClass("disabled")
                }, e.prototype.bulkEditCount = function (t) {
                    var e, n;
                    return e = $("#bulk-edit-count"), n = parseInt(e.text()), n += t, e.text(n), n > 0 ? $("#bulk-edit-dd-button").removeClass("disabled") : $("#bulk-edit-dd-button").addClass("disabled")
                }, e.prototype.bulkEditDeactivate = function (t) {
                    return null != t && t.preventDefault(), this.bulkEditClearAll(), $("#bulk-edit-on").hide(), $("#bulk-edit-btn").text("Edit links"), $(".link-details").show(), this.$(".link").first().addClass("expanded"), this.bulkEditActive = !1
                }, e.prototype.bulkEditDelete = function (t) {
                    var e, n, i, o = this;
                    return t.preventDefault(), e = $("#bulk-edit-count").text(), i = e > 1 ? "Are you sure you want to delete these " + e + " links?" : "Are you sure you want to delete this link?", confirm(i) ? (n = new r, this.getDataFromSelectedLinks($(".link.selected"), function (t) {
                        return n.deleteAll(t), o.$(".link.selected").remove(), o.bulkEditClearSelection()
                    })) : void 0
                }, e.prototype.bulkEditMake = function (t) {
                    var e, n;
                    return t.preventDefault(), n = $(t.target).attr("href"), n = n.split("#")[1], e = new r, this.getDataFromSelectedLinks($(".link.selected"), function (t, r) {
                        var i = this;
                        return e.markAs(n, t).done(function () {
                            return _.each(r, function (t) {
                                return t.set({
                                    "private": "private" === n
                                })
                            }), i.bulkEditClearSelection()
                        })
                    })
                }, e.prototype.bulkEditSelectOne = function (t, e) {
                    return t.hasClass("selected") ? (t.removeClass("selected"), this.bulkEditCount(-1)) : (!this.bulkEditActive && e && this.bulkEditActivate(), this.bulkEditActive || e ? (t.removeClass("expanded"), t.addClass("selected"), this.bulkEditCount(1)) : void 0)
                }, e.prototype.bulkEditSelectAll = function (t) {
                    var e;
                    return t.preventDefault(), e = this.$(".link"), e.addClass("selected"), $("#bulk-edit-count").text(e.length)
                }, e.prototype.bulkEditToggle = function (t) {
                    return null != t && t.preventDefault(), this.bulkEditActive ? this.bulkEditDeactivate() : this.bulkEditActivate()
                }, e.prototype.getDataFromSelectedLinks = function (t, e) {
                    var n, r, i;
                    return n = this.collection, r = [], i = [], t.each(function () {
                        var t, e;
                        return t = $(this).attr("data-md5"), r.push(t), e = n.where({
                            md5: t
                        }), i.push(e[0])
                    }), r = r.join(","), "function" == typeof e ? e.call(this, r, i) : void 0
                }, e.prototype.loadMore = function (t) {
                    var e, n = this;
                    return null != t && t.preventDefault(), this.collection.length > this.previousLoadCount ? (this.previousLoadCount = this.collection.length, this.publishEvent("search:searching"), e = this.$(".load-more").button("loading"), this.setLoading(), this.collection.fetch({
                        success: function () {
                            return n.bulkEditActive && n.bulkEditActivate(), n.publishEvent("search:finish", n.collection), n.hideLoading(), e.button("reset")
                        }
                    })) : void 0
                }, e.prototype.renderAllItems = function () {
                    var t, n, r, i, o;
                    return e.__super__.renderAllItems.apply(this, arguments), this.bulkEditActive && (this.bulkEditActivate(), t = $("#featured-followers-refresh"), t.off("click", this.refreshFollowers), t.on("click", this.refreshFollowers)), r = this.$(".link").first(), n = $(".link.expanded").first(), 0 === n.length || (null != (i = n.offset()) ? i.top : void 0) > (null != (o = r.offset()) ? o.top : void 0) ? ($(".link").removeClass("expanded"), this.publishEvent("link:hideAllDetailPanes"), this.activateByMd5(r.data("md5"))) : void 0
                }, e.prototype.deactivateDetailPane = function () {
                    var t;
                    return null != (t = this.currentDetailPane) ? t.dispose() : void 0
                }, e.prototype.refreshFollowers = function () {
                    return $("#featured-followers-refresh").toggleClass("rotating")
                }, e.prototype.renderSeeAllLink = function () {
                    return this.bulkEditActive && this.bulkEditActivate(), this.seeAllPath && (this.$(".see-all").remove(), this.collection.length > 0) ? this.$el.prepend('<a class="btn btn-link see-all" href="' + this.seeAllPath + '">See all results</a>') : void 0
                }, e.prototype.showDetailPane = function (t) {
                    var e, n;
                    return t !== (null != (e = this.currentDetailPane) ? e.model : void 0) ? (null != (n = this.currentDetailPane) && n.dispose(), this.currentDetailPane = new i({
                        model: t
                    })) : void 0
                }, e.prototype.showNewFollower = function () {
                    return $("#featured-followers-container .user-card:eq(4)").fadeIn()
                }, e.prototype.tagEditModal = function (t) {
                    return t.preventDefault(), new l({
                        title: "Manage Tags",
                        collection: new a(c.user.get("tags"))
                    })
                }, e.prototype.dispose = function () {
                    return e.__super__.dispose.apply(this, arguments), $("#bulk-edit-btn").off("click", this.bulkEditToggle), $("#bulk-edit-clear-selection").off("click", this.bulkEditClearSelection), $("#bulk-edit-select-all").off("click", this.bulkEditSelectAll), $("#your-tags-modal").off("click", this.tagEditModal), $("#bulk-edit-make-public").off("click", this.bulkEditMake), $("#bulk-edit-make-private").off("click", this.bulkEditMake), $("#delete-links").off("click", this.bulkEditDelete)
                }, e
            }(t)
        }).call(this)
    }
}), window.require.define({
    "views/links/search_results": function (t, e, n) {
        (function () {
            var t, r, i = {}.hasOwnProperty,
                o = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) i.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            t = e("views/base/page"), n.exports = r = function (t) {
                function e() {
                    return e.__super__.constructor.apply(this, arguments)
                }
                return o(e, t), e.prototype.className = "search pageview", e.prototype.template = "search/results", e.prototype.autoRender = !0, e.prototype.initialize = function () {
                    return e.__super__.initialize.apply(this, arguments), this.options.type ? this.$el.addClass(this.options.type) : void 0
                }, e
            }(t)
        }).call(this)
    }
}), window.require.define({
    "views/links/warn": function (t, e, n) {
        (function () {
            var t, r, i = {}.hasOwnProperty,
                o = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) i.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            t = e("views/base/page"), n.exports = r = function (t) {
                function e() {
                    return e.__super__.constructor.apply(this, arguments)
                }
                return o(e, t), e.prototype.template = "links/warn", e.prototype.autoRender = !0, e
            }(t)
        }).call(this)
    }
}), window.require.define({
    "views/notes/note": function (t, e, n) {
        (function () {
            var t, r, i, o = {}.hasOwnProperty,
                s = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) o.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            r = e("views/base/popover"), i = e("lib/view"), n.exports = t = function (t) {
                function e() {
                    return e.__super__.constructor.apply(this, arguments)
                }
                return s(e, t), e.prototype.className = "note", e.prototype.template = "notes/note", e.prototype.autoRender = !1, e.prototype.afterRender = function () {
                    return e.__super__.afterRender.apply(this, arguments), this.subview("hovercard", new r({
                        el: this.$el.find("h5 a"),
                        template: "user/user_card",
                        model: this.model,
                        bootstrapOptions: {
                            trigger: "hover",
                            classes: "user-card wider"
                        }
                    }))
                }, e
            }(i)
        }).call(this)
    }
}), window.require.define({
    "views/notes/notes_collection": function (t, e, n) {
        (function () {
            var t, r, i = {}.hasOwnProperty,
                o = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) i.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            t = e("lib/collection_view"), n.exports = r = function (t) {
                function n() {
                    return n.__super__.constructor.apply(this, arguments)
                }
                return o(n, t), n.prototype.className = "notes", n.prototype.containerMethod = "html", n.prototype.itemView = e("views/notes/note"), n
            }(t)
        }).call(this)
    }
}), window.require.define({
    "views/oops/notfound": function (t, e, n) {
        (function () {
            var t, r, i = {}.hasOwnProperty,
                o = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) i.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            r = e("views/base/page"), n.exports = t = function (t) {
                function e() {
                    return e.__super__.constructor.apply(this, arguments)
                }
                return o(e, t), e.prototype.autoRender = !0, e.prototype.className = "pageview oops-page big-text", e.prototype.initialize = function () {
                    return e.__super__.initialize.apply(this, arguments), this.$el.load("/html/oops/404.html")
                }, e
            }(r)
        }).call(this)
    }
}), window.require.define({
    "views/tags/edit_bundle_modal": function (t, e, n) {
        (function () {
            var t, r, i, o, s = {}.hasOwnProperty,
                a = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) s.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            o = e("mediator"), i = e("views/base/modal"), r = e("views/base/flash"), n.exports = t = function (t) {
                function e() {
                    return e.__super__.constructor.apply(this, arguments)
                }
                return a(e, t), e.prototype.template = "tags/edit_bundle_modal", e.prototype.id = "edit-bundle", e.prototype.events = {
                    "submit form": "submitForm",
                    'click [href="#remove"]': "clickRemove"
                }, e.prototype.render = function () {
                    var t, n = this;
                    return e.__super__.render.apply(this, arguments), this.subscribeEvent("tagBundle:save tagBundle:delete", this.hide), t = _.map(o.user.get("tags"), function (t) {
                        return t.name
                    }), _.delay(function () {
                        return n.$("#input-tags").select2({
                            openOnEnter: !1,
                            tags: _.uniq(t),
                            tokenSeparators: [","],
                            formatNoMatches: function () {
                                return "Enter tags separated by commas"
                            }
                        }, 400)
                    })
                }, e.prototype.submitForm = function (t) {
                    var e, n, i, o, s, a, l, u, c = this;
                    return t.preventDefault(), l = this.getFormData("name", "tags"), o = l.name, a = l.tags, o ? a ? (this.model.get("name") && (s = this.model.clone()), n = {
                        name: o,
                        tags: a,
                        username: this.options.username,
                        previous: s || null
                    }, e = null != (u = this.options.collection) ? u.reject(function (t) {
                        return t.get("name") === (null != s ? s.get("name") : void 0)
                    }) : void 0, i = _.filter(e, function (t) {
                        return t.get("name") === o
                    }), i.length ? (this.subview("error", new r({
                        flash: "A bundle with that name already exists.",
                        type: "error",
                        closeOnXClick: !1,
                        container: this.$(".modal-body")
                    })), void 0) : this.model.save(n).done(function () {
                        var t;
                        return s ? void 0 : null != (t = c.options.collection) ? t.add(c.model) : void 0
                    })) : (this.$("#input-tags").select2("open"), void 0) : (this.$("#input-name").focus(), void 0)
                }, e.prototype.clickRemove = function (t) {
                    var e = this;
                    return t.preventDefault(), confirm("Are you sure?") ? this.model["delete"]().done(function () {
                        var t;
                        return null != (t = e.options.collection) ? t.remove(e.model) : void 0
                    }) : void 0
                }, e.prototype.dispose = function () {
                    return this.$("#input-tags").select2("destroy"), e.__super__.dispose.apply(this, arguments)
                }, e
            }(i)
        }).call(this)
    }
}), window.require.define({
    "views/tags/manage": function (t, e, n) {
        (function () {
            var t, r, i, o = function (t, e) {
                    return function () {
                        return t.apply(e, arguments)
                    }
                }, s = {}.hasOwnProperty,
                a = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) s.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            i = e("mediator"), t = e("views/base/modal"), n.exports = r = function (t) {
                function e() {
                    return this.setupTagAutoComplete = o(this.setupTagAutoComplete, this), e.__super__.constructor.apply(this, arguments)
                }
                return a(e, t), e.prototype.template = "tags/manage", e.prototype.id = "tags-manage", e.prototype.title = "Tags Management", e.prototype.events = {
                    "submit form": "submit"
                }, e.prototype.initialize = function () {
                    return _.defaults(this.options, {
                        size: "normal"
                    }), e.__super__.initialize.apply(this, arguments)
                }, e.prototype.afterRender = function () {
                    return e.__super__.afterRender.apply(this, arguments), _.delay(this.setupTagAutoComplete, 400), this.$(".modal-body").addClass("show-overflow")
                }, e.prototype.setupTagAutoComplete = function () {
                    var t;
                    return t = this.collection.map(function (t) {
                        return {
                            id: t.get("name"),
                            text: t.get("name")
                        }
                    }), this.$("#from-tagname, #delete-tagname").select2({
                        data: t,
                        formatNoMatches: function () {
                            return "Enter a tag"
                        },
                        width: "element",
                        containerCssClass: "select2-box"
                    })
                }, e.prototype.submit = function (t) {
                    var e, n, r, i, o = this;
                    return t.preventDefault(), this.$('button[type="submit"]').button("loading"), e = this.getFormData("from_tag", "to_tag", "delete_tag"), (null != (n = e.from_tag) ? n.trim().length : void 0) && (null != (r = e.to_tag) ? r.trim().length : void 0) && this.collection.get(e.from_tag).rename(e.to_tag).done(function () {
                        return o.$el.modal("hide")
                    }), (null != (i = e.delete_tag) ? i.trim().length : void 0) ? this.collection.get(e.delete_tag).remove().done(function () {
                        return o.$el.modal("hide")
                    }) : void 0
                }, e.prototype.dispose = function () {
                    return this.$(".input-tag").select2("destroy"), e.__super__.dispose.apply(this, arguments)
                }, e
            }(t)
        }).call(this)
    }
}), window.require.define({
    "views/tags/related_tag_list": function (t, e, n) {
        (function () {
            var t, r, i, o, s, a, l, u = {}.hasOwnProperty,
                c = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) u.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            s = e("lib/view"), a = e("lib/logger"), l = e("mediator"), t = e("models/tag"), r = e("models/tags"), o = e("views/tags/manage"), n.exports = i = function (e) {
                function n() {
                    return n.__super__.constructor.apply(this, arguments)
                }
                return c(n, e), n.prototype.el = ".tags-container.related", n.prototype.listSelector = ".tag-list", n.prototype.fallbackSelector = ".no-results", n.prototype.loadingIndicator = !0, n.prototype.showingAllTags = !1, n.prototype.render = function () {
                    var e, n = this;
                    return e = [], 0 !== this.collection.length ? (this.$(this.fallbackSelector).hide(), _.each(this.collection.toJSON(), function (r, i) {
                        var o, s;
                        return s = r.num_saves ? " <small>" + r.num_saves + "</small>" : "", o = i > 15 && n.showingAllTags === !1 ? " hidden" : "", e.push('<a class="tag tag-small' + o + '" data-tag="' + t.quote(r.name) + '" href="#">' + r.name + s + "</a>")
                    }), this.$el.find(this.listSelector).html(e.join(""))) : void 0
                }, n.prototype.events = {
                    'click [href="#more"]': "showAllTags",
                    "click .sort-by-menu a": "performSort"
                }, n.prototype.initialize = function (t) {
                    return n.__super__.initialize.apply(this, arguments), this.count = 0, this.showingAllTags = t.showingAllTags || !1, this.options.selected = (null != t ? t.selected : void 0) || "count", this.performSort(), this.collection.on("reset", this.render)
                }, n.prototype.afterRender = function () {
                    return n.__super__.afterRender.apply(this, arguments), this.$("#sort-by-" + this.options.selected).addClass("selected"), this.$(".tag-list").scrollable()
                }, n.prototype.performSort = function (t) {
                    var e;
                    return null != t && (t.preventDefault(), t.stopPropagation(), this.$(".sort-tags-dropdown").removeClass("open"), e = $(t.target), e.parent().siblings().children("a").removeClass("selected"), e.addClass("selected"), this.options.selected = e.text().toLowerCase(), store.set("orderBy", this.options.selected)), this.collection.comparator = function () {
                        switch (this.options.selected) {
                        case "abc":
                            return function (t) {
                                return t.get("name").toLowerCase()
                            };
                        default:
                            return (new r).comparator
                        }
                    }.call(this), this.collection.sort()
                }, n.prototype.showAllTags = function (t) {
                    return t.preventDefault(), this.$(".tag").removeClass("hidden"), this.$('[href="#more"]').remove(), this.showingAllTags = !0
                }, n
            }(s)
        }).call(this)
    }
}), window.require.define({
    "views/tags/tag": function (t, e, n) {
        (function () {
            var t, r, i, o = {}.hasOwnProperty,
                s = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) o.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            t = e("models/tag"), i = e("lib/view"), n.exports = r = function (e) {
                function n() {
                    return n.__super__.constructor.apply(this, arguments)
                }
                return s(n, e), n.prototype.autoRender = !1, n.prototype.render = function () {
                    var e, n;
                    return n = this.model.get("name"), n = n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), e = this.model.get("num_saves") ? " <small>" + this.model.get("num_saves") + "</small>" : "", this.setElement('<a class="tag tag-small" data-tag="' + t.quote(n) + '" href="#">' + t.sanitize(n) + e + "</a>")
                }, n
            }(i)
        }).call(this)
    }
}), window.require.define({
    "views/tags/tag_bundle": function (t, e, n) {
        (function () {
            var t, r, i, o = {}.hasOwnProperty,
                s = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) o.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            t = e("models/tag"), i = e("lib/view"), n.exports = r = function (e) {
                function n() {
                    return n.__super__.constructor.apply(this, arguments)
                }
                return s(n, e), n.prototype.containerMethod = "append", n.prototype.initialize = function () {
                    return n.__super__.initialize.apply(this, arguments), this.modelBind("change", this.render)
                }, n.prototype.render = function () {
                    var e, n;
                    return n = this.model.get("name"), e = this.model.get("num_saves") ? " <small>" + this.model.get("num_saves") + "</small>" : "", this.$el.html('<a class="tag-bundle" data-tag-bundle="' + t.quote(n) + '" href="#">' + t.sanitize(n) + e + "</a>")
                }, n
            }(i)
        }).call(this)
    }
}), window.require.define({
    "views/tags/tag_bundle_list": function (t, e, n) {
        (function () {
            var t, r, i, o = {}.hasOwnProperty,
                s = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) o.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            t = e("lib/collection_view"), r = e("views/tags/tag_bundle"), n.exports = i = function (t) {
                function e() {
                    return e.__super__.constructor.apply(this, arguments)
                }
                return s(e, t), e.prototype.itemView = r, e.prototype.container = ".tag-bundles-container", e.prototype.className = "sidebar-list", e
            }(t)
        }).call(this)
    }
}), window.require.define({
    "views/tags/tag_bundle_row": function (t, e, n) {
        (function () {
            var t, r, i, o = {}.hasOwnProperty,
                s = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) o.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            i = e("mediator"), r = e("lib/view"), n.exports = t = function (t) {
                function e() {
                    return e.__super__.constructor.apply(this, arguments)
                }
                return s(e, t), e.prototype.template = "tags/tag_bundle_row", e.prototype.className = "tag-bundle-row", e
            }(r)
        }).call(this)
    }
}), window.require.define({
    "views/tags/tag_bundles_modal": function (t, e, n) {
        (function () {
            var t, r, i, o, s, a = {}.hasOwnProperty,
                l = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) a.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            t = e("views/tags/edit_bundle_modal"), r = e("views/base/modal_collection"), i = e("models/tag_bundle"), o = e("views/tags/tag_bundle_row"), n.exports = s = function (e) {
                function n() {
                    return n.__super__.constructor.apply(this, arguments)
                }
                return l(n, e), n.prototype.itemView = o, n.prototype.events = {
                    'click [href="#create-bundle"]': "clickCreateBundle",
                    'click [href="#edit-bundle"]': "clickEditBundle"
                }, n.prototype.renderCollection = function () {
                    return n.__super__.renderCollection.apply(this, arguments), this.$(".modal-body").prepend('<a href="#create-bundle" id="create-bundle" class="btn">Create bundle</a>')
                }, n.prototype.clickCreateBundle = function (e) {
                    var n, r;
                    return e.preventDefault(), r = this.options, n = this.collection, _.defer(function () {
                        return new t({
                            title: "Create Bundle",
                            model: new i,
                            username: r.username,
                            size: "slim",
                            collection: n
                        })
                    }), this.hide()
                }, n.prototype.clickEditBundle = function (e) {
                    var n, r, i, o, s;
                    return e.preventDefault(), n = $(e.currentTarget), i = n.closest(".tag-bundle-row").index(), o = this.collection.at(i - 1), s = this.options, r = this.collection, o.fetchTags(s.username, o.get("name")).done(function () {
                        return new t({
                            title: o.get("name"),
                            model: o,
                            username: s.username,
                            size: "slim",
                            collection: r
                        })
                    }), this.hide()
                }, n
            }(r)
        }).call(this)
    }
}), window.require.define({
    "views/user/featured_followers": function (t, e, n) {
        (function () {
            var t, r, i, o = {}.hasOwnProperty,
                s = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) o.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            i = e("mediator"), r = e("views/user/followers"), n.exports = t = function (t) {
                function e() {
                    return e.__super__.constructor.apply(this, arguments)
                }
                return s(e, t), e.prototype.className = "featured-follower user-card fade", e.prototype.events = {
                    'click a[href="#follow"]': "hideFollower"
                }, e.prototype.initialize = function () {
                    return e.__super__.initialize.apply(this, arguments)
                }, e.prototype.hideFollower = function (t) {
                    return t.preventDefault(), this.$el.fadeOut().remove(), i.publish("follower:hide", this)
                }, e
            }(r)
        }).call(this)
    }
}), window.require.define({
    "views/user/featured_followers_collection": function (t, e, n) {
        (function () {
            var t, r, i, o, s = {}.hasOwnProperty,
                a = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) s.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            t = e("lib/collection_view"), i = e("views/user/featured_followers"), o = e("lib/logger"), n.exports = r = function (t) {
                function e() {
                    return e.__super__.constructor.apply(this, arguments)
                }
                return a(e, t), e.prototype.id = "featured-followers-wrapper", e.prototype.template = "user/featured_followers_collectionview", e.prototype.listSelector = "#featured-followers-container", e.prototype.itemView = i, e.prototype.container = "#links-results", e.prototype.containerMethod = "prepend", e.prototype.count = 4, e.prototype.events = {
                    "click #feat-foll-hide": "hideFeaturedUsers"
                }, e.prototype.afterRender = function () {
                    return e.__super__.afterRender.apply(this, arguments), 1 > this.model.get("following_count") && (this.count = 8), $("#featured-followers-container .user-card").slice(this.count).hide()
                }, e.prototype.hideFeaturedUsers = function (t) {
                    return t.preventDefault(), store.set("closedFeaturedFollowers", !0), this.dispose()
                }, e
            }(t)
        }).call(this)
    }
}), window.require.define({
    "views/user/follow": function (t, e, n) {
        (function () {
            var t, r, i = {}.hasOwnProperty,
                o = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) i.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            r = e("lib/view"), n.exports = t = function (t) {
                function e() {
                    return e.__super__.constructor.apply(this, arguments)
                }
                return o(e, t), e.prototype.template = "user/user_card", e.prototype.className = "modal-following user-card", e.prototype.initialize = function () {
                    return this.mixin("views/user/mixins/follow_button"), e.__super__.initialize.apply(this, arguments), this.modelBind("change", this.render)
                }, e
            }(r)
        }).call(this)
    }
}), window.require.define({
    "views/user/follow_collection": function (t, e, n) {
        (function () {
            var t, r, i, o, s = {}.hasOwnProperty,
                a = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) s.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            r = e("views/user/follow"), i = e("views/base/modal_collection"), o = e("mediator"), n.exports = t = function (t) {
                function e() {
                    return e.__super__.constructor.apply(this, arguments)
                }
                return a(e, t), e.prototype.itemView = r, e.prototype.events = {
                    'click [href="#follow"]': "clickFollow",
                    'click [href="#unfollow"]': "clickUnfollow"
                }, e.prototype.initialize = function () {
                    return e.__super__.initialize.apply(this, arguments), this.collection.on("change:am_following_them", this.updateFollowingButton, this)
                }, e.prototype.updateFollowingButton = function (t) {
                    var e, n;
                    return n = this.collection.indexOf(t), n >= 0 ? (e = this.$(".user-card").eq(n).find('[href="#unfollow"], [href="#follow"]'), t.get("am_following_them") ? e.prop("href", "#unfollow").text("Following").removeClass("btn-primary") : e.prop("href", "#follow").text("Follow").addClass("btn-primary")) : void 0
                }, e.prototype.clickFollow = function (t) {
                    var e;
                    return t.preventDefault(), e = this.collection.at($(t.target).closest(".user-card").index()), o.user.followUser(e)
                }, e.prototype.clickUnfollow = function (t) {
                    var e;
                    return t.preventDefault(), e = this.collection.at($(t.target).closest(".user-card").index()), o.user.unfollowUser(e)
                }, e
            }(i)
        }).call(this)
    }
}), window.require.define({
    "views/user/followers": function (t, e, n) {
        (function () {
            var t, r, i, o = {}.hasOwnProperty,
                s = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) o.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            i = e("mediator"), r = e("lib/view"), n.exports = t = function (t) {
                function e() {
                    return e.__super__.constructor.apply(this, arguments)
                }
                return s(e, t), e.prototype.className = "follower user-card fade", e.prototype.tagName = "li", e.prototype.template = "user/user_card", e.prototype.autoRender = !1, e.prototype.initialize = function () {
                    return e.__super__.initialize.apply(this, arguments), this.mixin("views/user/mixins/follow_button")
                }, e.prototype.afterRender = function () {
                    var t = this;
                    return _.delay(function () {
                        return t.$el.addClass("in")
                    }, 1)
                }, e
            }(r)
        }).call(this)
    }
}), window.require.define({
    "views/user/mixins/follow_button": function (t, e, n) {
        (function () {
            var t, r, i;
            r = e("lib/logger"), i = e("mediator"), t = e("lib/view"), n.exports = {
                attached: function () {
                    var t;
                    return null == (t = this.events) && (this.events = {}), _.extend(this.events, {
                        'click [href="#follow"]': "clickFollow",
                        'click [href="#unfollow"]': "clickUnfollow"
                    }), this.model.on("change:am_following_them", this.updateFollowingButton, this)
                },
                updateFollowingButton: function (t) {
                    var e;
                    return e = this.$('[href="#unfollow"], [href="#follow"]'), t.get("am_following_them") ? e.prop("href", "#unfollow").text("Following").removeClass("btn-primary") : e.prop("href", "#follow").text("Follow").addClass("btn-primary")
                },
                clickFollow: function (t) {
                    return t.preventDefault(), t.stopImmediatePropagation(), i.user.followUser(this.model)
                },
                clickUnfollow: function (t) {
                    return t.preventDefault(), t.stopImmediatePropagation(), i.user.unfollowUser(this.model)
                }
            }
        }).call(this)
    }
}), window.require.define({
    "views/user/profile": function (t, e, n) {
        (function () {
            var t, r, i, o, s, a, l, u, c, p = {}.hasOwnProperty,
                h = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) p.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            t = e("views/tags/edit_bundle_modal"), l = e("models/user"), r = e("views/user/follow_collection"), c = e("mediator"), i = e("views/base/page"), s = e("models/tag_bundle"), a = e("views/tags/tag_bundles_modal"), u = e("models/users"), n.exports = o = function (e) {
                function n() {
                    return n.__super__.constructor.apply(this, arguments)
                }
                return h(n, e), n.prototype.className = "profile pageview", n.prototype.template = "user/profile", n.prototype.autoRender = !0, n.prototype.events = {
                    'click a[href="#followers"]': "showFollowers",
                    'click a[href="#following"]': "showFollowing",
                    'click a[href="#bundles-manage"]': "clickShowBundles"
                }, n.prototype.initialize = function () {
                    return this.mixin("views/user/mixins/follow_button"), n.__super__.initialize.apply(this, arguments), this.model.off("change", null)
                }, n.prototype.afterRender = function () {
                    var t;
                    return n.__super__.afterRender.apply(this, arguments), Socialite.load(this.$(".avatar-overlay-button")), t = this.$(".bookmarklet-container"), t.length > 0 ? t.load("/html/tools.html #bookmarklet-box") : void 0
                }, n.prototype.showFollowers = function (t) {
                    var e, n, i, o;
                    return t.preventDefault(), 0 !== this.model.get("follower_count") ? (e = new u, e.comparator = function (t) {
                        return -(t.get("time_created") || 0)
                    }, e.url = this.model.getFollowersUrl(), e.fetch(), i = this.model.get("full_name") || this.model.get("display_name"), o = this.model.isMe() ? "Your" : "" + i + "’s", n = "" + o + " followers", this.subview("followers", new r({
                        collection: e,
                        title: n
                    }))) : void 0
                }, n.prototype.showFollowing = function (t) {
                    var e, n, i, o;
                    return t.preventDefault(), 0 !== this.model.get("following_count") ? (e = new u, e.comparator = function (t) {
                        return -(t.get("time_created") || 0)
                    }, e.url = this.model.getFollowingUrl(), e.fetch(), i = this.model.get("full_name") || this.model.get("display_name"), o = this.model.isMe() ? "you’re" : "" + i + "’s", n = "People " + o + " following", this.subview("follow", new r({
                        collection: e,
                        title: n
                    }))) : void 0
                }, n.prototype.clickShowBundles = function (e) {
                    var n;
                    return e.preventDefault(), n = this.options.tagBundles.length > 0 ? new a({
                        collection: this.options.tagBundles,
                        title: "Tag Bundles <small>" + this.options.tagBundles.length + "</small>",
                        username: this.model.get("username")
                    }) : new t({
                        title: "Create Bundle",
                        model: new s,
                        username: this.model.get("username"),
                        size: "slim"
                    })
                }, n
            }(i)
        }).call(this)
    }
}), window.require.define({
    "views/user/settings/account": function (t, e, n) {
        (function () {
            var t, r, i, o, s, a = {}.hasOwnProperty,
                l = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) a.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            r = e("views/base/flash"), o = e("lib/logger"), s = e("mediator"), i = e("views/base/page"), n.exports = t = function (t) {
                function e() {
                    return e.__super__.constructor.apply(this, arguments)
                }
                return l(e, t), e.prototype.template = "user/settings/account", e.prototype.autoRender = !0, e.prototype.events = {
                    "submit form": "submitAccount"
                }, e.prototype.initialize = function () {
                    return e.__super__.initialize.apply(this, arguments), this.model = s.user
                }, e.prototype.submitAccount = function (t) {
                    var e, n, r = this;
                    if (t.preventDefault(), e = this.getFormData("profile_email", "old_password", "new_password"), e.profile_email !== this.model.get("profile_email")) {
                        if (n = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/, !n.test(e.profile_email)) return this.showError("Please enter a valid email address."), void 0;
                        this.setLoading(), s.user.update({
                            profile_email: e.profile_email
                        }).done(_.bind(this.showSuccess, this, "Email address updated successfully.")).always(_.bind(this.resetForm, this))
                    }
                    if (e.old_password && e.new_password) {
                        if (e.old_password === e.new_password) return this.showError("The new password you entered matches the current password."), void 0;
                        if (this.validatePassword(e.new_password)) return this.setLoading(), s.user.changePassword(e).done(function () {
                            return r.showError(""), r.showSuccess("Your password has been updated.")
                        }).fail(function (t) {
                            return r.showError(t.error.charAt(0).toUpperCase() + t.error.slice(1) + ".")
                        }).always(_.bind(this.resetForm, this))
                    }
                }, e.prototype.validatePassword = function (t) {
                    return t.length >= 8 ? (this.showError(""), !0) : (this.showError("The new password must be at least 8 characters long."), !1)
                }, e.prototype.setLoading = function () {
                    return this.$('input[type="submit"]').button("loading")
                }, e.prototype.resetForm = function () {
                    return this.$("input").blur(), this.$("form").formParams({
                        old_password: "",
                        new_password: "",
                        profile_email: this.model.get("profile_email")
                    }), this.$('input[type="submit"]').button("reset")
                }, e.prototype.showError = function (t) {
                    return this.$("#error").text(t)
                }, e.prototype.showSuccess = function (t) {
                    return this.subview("success", new r({
                        container: ".content",
                        flash: t,
                        type: "success"
                    }))
                }, e
            }(i)
        }).call(this)
    }
}), window.require.define({
    "views/user/settings/friends": function (t, e, n) {
        (function () {
            var t, r, i, o, s, a, l, u, c = {}.hasOwnProperty,
                p = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) c.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            u = e("mediator"), a = e("views/base/page"), i = e("views/base/flash"), r = e("models/connects"), t = e("models/connect"), l = e("models/users"), o = e("views/user/settings/friends_collection"), n.exports = s = function (e) {
                function n() {
                    return n.__super__.constructor.apply(this, arguments)
                }
                return p(n, e), n.prototype.template = "user/settings/friends", n.prototype.autoRender = !0, n.prototype.events = {
                    "click .nav-tabs a": "clickTab"
                }, n.prototype.initialize = function () {
                    var t = this;
                    return n.__super__.initialize.apply(this, arguments), this.connects = new r, this.connects.fetch().done(function () {
                        return t.connects_fetched = !0
                    }), this.featured = new l, this.featured.url = "/account/featuredusers", this.featured.on("add remove reset", this.updateFeaturedFriends, this), this.featured.fetch(), this.friends = new l, this.friends.url = "/account/friends", this.friends.on("add remove reset", this.updateConnectedFriends, this), this.friends.fetch()
                }, n.prototype.updateFeaturedFriends = function () {
                    return this._populateFriends("featured", this.featured)
                }, n.prototype.updateConnectedFriends = function () {
                    return this._populateFriends("twitter", new l(this.friends.filterBySocial("twitter"))), this._populateFriends("facebook", new l(this.friends.filterBySocial("facebook")))
                }, n.prototype.clickTab = function (e) {
                    var n, r, o = this;
                    return e.preventDefault(), r = $(e.target).attr("href").slice(1), "twitter" !== r && "facebook" !== r || !this.connects_fetched || this.connects.findByProvider(r) ? void 0 : (n = new t({
                        providerId: r
                    }), n.connect(!1, function (t) {
                        if ("success" === t.status) return o.connects.fetch(), o.friends.fetch().done(function () {
                            return o._populateFriends(r, new l(o.friends.filterBySocial(r)))
                        });
                        if (null == o.subview("error")) return o.subview("error", new i({
                            container: ".content",
                            flash: t.message,
                            type: "error"
                        }))
                    }))
                }, n.prototype._populateFriends = function (t, e) {
                    return 0 !== e.length ? (this.subview("" + t + "-friends", new o({
                        collection: e,
                        container: "#" + t
                    })), "facebook" === t ? this.$("#facebook").append('<a href="https://www.facebook.com/dialog/apprequests?%20app_id=436820079686126&%20message=Check%20out%20Delicious!&%20redirect_uri=https://delicious.com/settings/friends">Invite your Facebook friends to Delicious!</a>') : void 0) : void 0
                }, n
            }(a)
        }).call(this)
    }
}), window.require.define({
    "views/user/settings/friends_collection": function (t, e, n) {
        (function () {
            var t, r, i, o, s = {}.hasOwnProperty,
                a = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) s.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            t = e("lib/collection_view"), r = e("views/user/followers"), o = e("lib/logger"), n.exports = i = function (t) {
                function e() {
                    return e.__super__.constructor.apply(this, arguments)
                }
                return a(e, t), e.prototype.id = "friends-wrapper", e.prototype.template = "user/friends_collectionview", e.prototype.listSelector = "#friends-container", e.prototype.itemView = r, e.prototype.containerMethod = "html", e.prototype.count = 1e3, e
            }(t)
        }).call(this)
    }
}), window.require.define({
    "views/user/settings/service": function (t, e, n) {
        (function () {
            var t, r, i, o, s, a, l, u = {}.hasOwnProperty,
                c = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) u.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            i = e("views/base/flash"), l = e("mediator"), o = e("views/base/page"), r = e("models/connects"), t = e("models/connect"), a = e("lib/logger"), n.exports = s = function (e) {
                function n() {
                    return n.__super__.constructor.apply(this, arguments)
                }
                return c(n, e), n.prototype.events = {
                    "submit form": "saveChanges",
                    "click .disconnect": "disconnectService"
                }, n.prototype.initialize = function (e) {
                    var i = this;
                    return this.options = null != e ? e : {}, _.defaults(this.options, {
                        template: "user/settings/service",
                        service: "facebook"
                    }), n.__super__.initialize.apply(this, arguments), this.connects = new r, this.connects.fetch().always(function () {
                        return i.model = i.connects.findByProvider(i.options.service), i.model ? (_.each(i.model.get("privacy_options"), function (t) {
                            return t.selected = i.model.get("privateAttri") === t.value
                        }), i.model.on("dispose", i.render, i), i.render()) : i.model = new t({
                            providerId: i.options.service
                        }), i.render()
                    })
                }, n.prototype.saveChanges = function (t) {
                    var e, n = this;
                    return t.preventDefault(), e = this.getFormData("privacy", "tags"), this.model.update(e).done(function () {
                        return n.subview("success", new i({
                            container: "#settings-form",
                            flash: "Your changes have been saved.",
                            type: "success"
                        }))
                    })
                }, n.prototype.disconnectService = function () {
                    var t;
                    return t = l.user, this.model.disconnect()
                }, n
            }(o)
        }).call(this)
    }
}), window.require.define({
    "views/user/settings/settings": function (t, e, n) {
        (function () {
            var t, r, i, o, s, a, l, u = {}.hasOwnProperty,
                c = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) u.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            t = e("views/base/flash"), a = e("lib/logger"), l = e("mediator"), r = e("lib/model"), i = e("views/base/page"), s = e("lib/avos"), n.exports = o = function (e) {
                function n() {
                    return n.__super__.constructor.apply(this, arguments)
                }
                return c(n, e), n.prototype.template = "user/settings/settings", n.prototype.autoRender = !0, n.prototype.maxFileSize = 2e3, n.prototype.events = {
                    "submit #settings-form": "submitProfile",
                    "submit #photo-form": "submitAvatar",
                    "change #user-photo-input": "showFilePath",
                    "keyup #user-bio": "bioLimit"
                }, n.prototype.initialize = function () {
                    return n.__super__.initialize.apply(this, arguments), $("html").hasClass("lt-ie10") ? void 0 : this.events["click #user-photo-button"] = "clickPhotoUpload"
                }, n.prototype.afterRender = function () {
                    var t, e, r = this;
                    return n.__super__.afterRender.apply(this, arguments), this.bioLimit(), window.setTimeout(function () {
                        return r.$(".user-avatar img").addClass("in")
                    }, 200), this.photoInputSpan = this.$("#user-photo-text"), this.photoInput = this.$("#user-photo-input"), t = this.model.get("avatar_url"), e = t + "?" + (new Date).getTime()
                }, n.prototype.submitProfile = function (e) {
                    var n, r = this;
                    return e.preventDefault(), n = this.getFormData("full_name", "profile_bio", "profile_url"), l.user.update(n).done(function () {
                        return r.subview("success", new t({
                            container: ".content",
                            flash: "Profile updated successfully.",
                            type: "success"
                        }))
                    })
                }, n.prototype.bioLimit = function () {
                    var t, e, n;
                    return n = 140, e = this.$("#user-bio").val().length, e >= n ? this.$("#bio-count").text(" Sorry, you have reached the limit!") : (t = n - e, this.$("#bio-count").text(t + " characters left."))
                }, n.prototype.uploadError = function (t) {
                    return $("#photo-upload-error").text(t)
                }, n.prototype.clickPhotoUpload = function (t) {
                    return t.preventDefault(), this.photoInput.click()
                }, n.prototype.showFilePath = function () {
                    var t;
                    return this.uploadError(""), t = this.photoInput.val(), this.photoInput[0].files && this.photoInput[0].files[0].size / 1e3 > this.maxFileSize ? (this.resetInput(), this.uploadError("Image size too big."), void 0) : t ? this.photoInputSpan.text(t.split(/(\\|\/)/g).pop()) : (this.resetInput(), void 0)
                }, n.prototype.resetInput = function () {
                    return this.photoInputSpan.text("No image selected"), this.photoInput.val("")
                }, n.prototype.submitAvatar = function (e) {
                    var n = this;
                    return null != e && e.preventDefault(), this.photoInput.val() ? (this.setLoading(), l.user.updateAvatar(this.$("#photo-form"), function (e, r) {
                        return "success" === e ? (n.hideLoading(), n.resetInput(), n.render(), n.subview("success", new t({
                            container: "#settings-form",
                            flash: "Image uploaded successfully.",
                            type: "success"
                        }))) : n.subview("success", new t({
                            container: "#settings-form",
                            flash: r + ".",
                            type: "success"
                        }))
                    })) : (this.photoInputSpan.addClass("on"), _.delay(function () {
                        return n.photoInputSpan.removeClass("on")
                    }, 500), void 0)
                }, n.prototype.dispose = function () {
                    return this.$(".user-avatar img").removeClass("in"), n.__super__.dispose.apply(this, arguments)
                }, n
            }(i)
        }).call(this)
    }
}), window.require.define({
    "views/user/settings/sources": function (t, e, n) {
        (function () {
            var t, r, i, o, s, a, l = {}.hasOwnProperty,
                u = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) l.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            i = e("views/base/flash"), r = e("models/connects"), t = e("models/connect"), a = e("mediator"), o = e("views/base/html"), n.exports = s = function (e) {
                function n() {
                    return n.__super__.constructor.apply(this, arguments)
                }
                return u(n, e), n.prototype.container = "#delicious", n.prototype.template = "user/settings/sources", n.prototype.events = {
                    "click .connect": "clickConnect",
                    "click .disconnect": "clickDisconnect"
                }, n.prototype.initialize = function () {
                    var t = this;
                    return this.connects = new r, this.connects.on("add remove reset", this.htmlLoaded, this), this.options.url = "settings/sources", this.on("htmlLoaded", function () {
                        return t.connects.fetch(), t.htmlLoaded
                    }), n.__super__.initialize.apply(this, arguments)
                }, n.prototype.htmlLoaded = function () {
                    var t, e, n, r, i, o, s;
                    for (o = ["twitter", "facebook"], s = [], r = 0, i = o.length; i > r; r++) n = o[r], e = this.connects.findByProvider(n), t = n.charAt(0).toUpperCase() + n.slice(1), (null != e ? e.get("active") : void 0) ? s.push(this.$("." + n + " .connect").text("Connected to " + t).attr("disabled", "disabled").next(".disconnect").show()) : s.push(this.$("." + n + " .connect").text("Connect to " + t).prop("disabled", !1).next(".disconnect").hide());
                    return s
                }, n.prototype.clickConnect = function (e) {
                    var n, r = this;
                    return e.preventDefault(), $(e.target).is(":disabled") ? void 0 : (n = new t({
                        providerId: $(e.target).parents(".social-connector").attr("data-service"),
                        active: !0
                    }), n.connect(!0, function (t) {
                        if ("error" === t.status) {
                            if (null != r.subview("error")) return;
                            return r.subview("error", new i({
                                container: ".content",
                                flash: t.message,
                                type: "error"
                            }))
                        }
                        return "success" === t.status ? r.connects.add(n) : void 0
                    }))
                }, n.prototype.clickDisconnect = function (t) {
                    var e, n;
                    return t.preventDefault(), e = this.$(t.target).parents(".social-connector").attr("data-service"), n = this.connects.findByProvider(e), n.disconnect()
                }, n
            }(o)
        }).call(this)
    }
}), window.require.define({
    "views/user/validate_email": function (t, e, n) {
        (function () {
            var t, r, i = {}.hasOwnProperty,
                o = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e) i.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            t = e("views/base/page"), n.exports = r = function (t) {
                function e() {
                    return e.__super__.constructor.apply(this, arguments)
                }
                return o(e, t), e.prototype.template = "user/validate_email", e.prototype.className = "join validate-email", e.prototype.showBanner = !1, e.prototype.autoRender = !0, e.prototype.result = {}, e.prototype.initialize = function (t) {
                    return e.__super__.initialize.apply(this, arguments), this.modelBind("change", _.bind(this.render, this)), (null != t ? t.result : void 0) ? this.result = t.result : void 0
                }, e.prototype.afterRender = function () {
                    return e.__super__.afterRender.apply(this, arguments), this.$info = this.$(".result-info"), this.result.success && this.$info.html('Thank you, your email has been validated.\n<br />\n<a href="/">Go to Delicious</a>.'), this.result.error ? this.$info.html("" + this.result.error + '\nIf you are having trouble, please contact <a href="mailto:support@delicious.com">support@delicious.com') : void 0
                }, e
            }(t)
        }).call(this)
    }
});