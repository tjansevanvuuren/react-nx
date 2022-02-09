var r = Object.getOwnPropertySymbols,
    i = Object.prototype.hasOwnProperty,
    o = Object.prototype.propertyIsEnumerable;

function a(e) {
    if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(e)
}
e.exports = function() {
    try {
        if (!Object.assign) return !1;
        var e = new String("abc");
        if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
        for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
        if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                return t[e]
            })).join("")) return !1;
        var r = {};
        return "abcdefghijklmnopqrst".split("").forEach((function(e) {
            r[e] = e
        })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
    } catch (e) {
        return !1
    }
}() ? Object.assign : function(e, t) {
    for (var n, s, u = a(e), l = 1; l < arguments.length; l++) {
        for (var c in n = Object(arguments[l])) i.call(n, c) && (u[c] = n[c]);
        if (r) {
            s = r(n);
            for (var f = 0; f < s.length; f++) o.call(n, s[f]) && (u[s[f]] = n[s[f]])
        }
    }
    return u
}
}, , , , , , , , , , , , , , , , , , , , , , , , , ,
function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = void 0;
    ! function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e)
                if (Object.prototype.hasOwnProperty.call(e, n)) {
                    var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                    r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                }
        t.default = e
    }(n(70));
    var r = s(n(719)),
        i = s(n(722)),
        o = s(n(0)),
        a = s(n(536));
    n(538);

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function u() {
        return (u = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    var l = function(e, t) {
            return e && t && t.split(" ").forEach((function(t) {
                return (0, r.default)(e, t)
            }))
        },
        c = function(e, t) {
            return e && t && t.split(" ").forEach((function(t) {
                return (0, i.default)(e, t)
            }))
        },
        f = function(e) {
            var t, n;

            function r() {
                for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                return (t = e.call.apply(e, [this].concat(r)) || this).onEnter = function(e, n) {
                    var r = t.getClassNames(n ? "appear" : "enter").className;
                    t.removeClasses(e, "exit"), l(e, r), t.props.onEnter && t.props.onEnter(e, n)
                }, t.onEntering = function(e, n) {
                    var r = t.getClassNames(n ? "appear" : "enter").activeClassName;
                    t.reflowAndAddClass(e, r), t.props.onEntering && t.props.onEntering(e, n)
                }, t.onEntered = function(e, n) {
                    var r = t.getClassNames("appear").doneClassName,
                        i = t.getClassNames("enter").doneClassName,
                        o = n ? r + " " + i : i;
                    t.removeClasses(e, n ? "appear" : "enter"), l(e, o), t.props.onEntered && t.props.onEntered(e, n)
                }, t.onExit = function(e) {
                    var n = t.getClassNames("exit").className;
                    t.removeClasses(e, "appear"), t.removeClasses(e, "enter"), l(e, n), t.props.onExit && t.props.onExit(e)
                }, t.onExiting = function(e) {
                    var n = t.getClassNames("exit").activeClassName;
                    t.reflowAndAddClass(e, n), t.props.onExiting && t.props.onExiting(e)
                }, t.onExited = function(e) {
                    var n = t.getClassNames("exit").doneClassName;
                    t.removeClasses(e, "exit"), l(e, n), t.props.onExited && t.props.onExited(e)
                }, t.getClassNames = function(e) {
                    var n = t.props.classNames,
                        r = "string" == typeof n,
                        i = r ? (r && n ? n + "-" : "") + e : n[e];
                    return {
                        className: i,
                        activeClassName: r ? i + "-active" : n[e + "Active"],
                        doneClassName: r ? i + "-done" : n[e + "Done"]
                    }
                }, t
            }
            n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
            var i = r.prototype;
            return i.removeClasses = function(e, t) {
                var n = this.getClassNames(t),
                    r = n.className,
                    i = n.activeClassName,
                    o = n.doneClassName;
                r && c(e, r), i && c(e, i), o && c(e, o)
            }, i.reflowAndAddClass = function(e, t) {
                t && (e && e.scrollTop, l(e, t))
            }, i.render = function() {
                var e = u({}, this.props);
                return delete e.classNames, o.default.createElement(a.default, u({}, e, {
                    onEnter: this.onEnter,
                    onEntered: this.onEntered,
                    onEntering: this.onEntering,
                    onExit: this.onExit,
                    onExiting: this.onExiting,
                    onExited: this.onExited
                }))
            }, r
        }(o.default.Component);
    f.defaultProps = {
        classNames: ""
    }, f.propTypes = {};
    var d = f;
    t.default = d, e.exports = t.default
},
function(e, t, n) {
    "use strict";
    var r = n(720);
    t.__esModule = !0, t.default = function(e, t) {
        e.classList ? e.classList.add(t) : (0, i.default)(e, t) || ("string" == typeof e.className ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t))
    };
    var i = r(n(721));
    e.exports = t.default
},
function(e, t) {
    e.exports = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
},
function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = function(e, t) {
        return e.classList ? !!t && e.classList.contains(t) : -1 !== (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ")
    }, e.exports = t.default
},
function(e, t, n) {
    "use strict";

    function r(e, t) {
        return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
    }
    e.exports = function(e, t) {
        e.classList ? e.classList.remove(t) : "string" == typeof e.className ? e.className = r(e.className, t) : e.setAttribute("class", r(e.className && e.className.baseVal || "", t))
    }
},
function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = void 0;
    a(n(70));
    var r = a(n(0)),
        i = n(27),
        o = a(n(539));

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var s = function(e) {
        var t, n;

        function a() {
            for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            return (t = e.call.apply(e, [this].concat(r)) || this).handleEnter = function() {
                for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                return t.handleLifecycle("onEnter", 0, n)
            }, t.handleEntering = function() {
                for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                return t.handleLifecycle("onEntering", 0, n)
            }, t.handleEntered = function() {
                for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                return t.handleLifecycle("onEntered", 0, n)
            }, t.handleExit = function() {
                for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                return t.handleLifecycle("onExit", 1, n)
            }, t.handleExiting = function() {
                for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                return t.handleLifecycle("onExiting", 1, n)
            }, t.handleExited = function() {
                for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                return t.handleLifecycle("onExited", 1, n)
            }, t
        }
        n = e, (t = a).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
        var s = a.prototype;
        return s.handleLifecycle = function(e, t, n) {
            var o, a = this.props.children,
                s = r.default.Children.toArray(a)[t];
            s.props[e] && (o = s.props)[e].apply(o, n), this.props[e] && this.props[e]((0, i.findDOMNode)(this))
        }, s.render = function() {
            var e = this.props,
                t = e.children,
                n = e.in,
                i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i
                }(e, ["children", "in"]),
                a = r.default.Children.toArray(t),
                s = a[0],
                u = a[1];
            return delete i.onEnter, delete i.onEntering, delete i.onEntered, delete i.onExit, delete i.onExiting, delete i.onExited, r.default.createElement(o.default, i, n ? r.default.cloneElement(s, {
                key: "first",
                onEnter: this.handleEnter,
                onEntering: this.handleEntering,
                onEntered: this.handleEntered
            }) : r.default.cloneElement(u, {
                key: "second",
                onEnter: this.handleExit,
                onEntering: this.handleExiting,
                onEntered: this.handleExited
            }))
        }, a
    }(r.default.Component);
    s.propTypes = {};
    var u = s;
    t.default = u, e.exports = t.default
},
function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.getChildMapping = i, t.mergeChildMappings = o, t.getInitialChildMapping = function(e, t) {
        return i(e.children, (function(n) {
            return (0, r.cloneElement)(n, {
                onExited: t.bind(null, n),
                in: !0,
                appear: a(n, "appear", e),
                enter: a(n, "enter", e),
                exit: a(n, "exit", e)
            })
        }))
    }, t.getNextChildMapping = function(e, t, n) {
        var s = i(e.children),
            u = o(t, s);
        return Object.keys(u).forEach((function(i) {
            var o = u[i];
            if ((0, r.isValidElement)(o)) {
                var l = i in t,
                    c = i in s,
                    f = t[i],
                    d = (0, r.isValidElement)(f) && !f.props.in;
                !c || l && !d ? c || !l || d ? c && l && (0, r.isValidElement)(f) && (u[i] = (0, r.cloneElement)(o, {
                    onExited: n.bind(null, o),
                    in: f.props.in,
                    exit: a(o, "exit", e),
                    enter: a(o, "enter", e)
                })) : u[i] = (0, r.cloneElement)(o, { in: !1
                }) : u[i] = (0, r.cloneElement)(o, {
                    onExited: n.bind(null, o),
                    in: !0,
                    exit: a(o, "exit", e),
                    enter: a(o, "enter", e)
                })
            }
        })), u
    };
    var r = n(0);

    function i(e, t) {
        var n = Object.create(null);
        return e && r.Children.map(e, (function(e) {
            return e
        })).forEach((function(e) {
            n[e.key] = function(e) {
                return t && (0, r.isValidElement)(e) ? t(e) : e
            }(e)
        })), n
    }

    function o(e, t) {
        function n(n) {
            return n in t ? t[n] : e[n]
        }
        e = e || {}, t = t || {};
        var r, i = Object.create(null),
            o = [];
        for (var a in e) a in t ? o.length && (i[a] = o, o = []) : o.push(a);
        var s = {};
        for (var u in t) {
            if (i[u])
                for (r = 0; r < i[u].length; r++) {
                    var l = i[u][r];
                    s[i[u][r]] = n(l)
                }
            s[u] = n(u)
        }
        for (r = 0; r < o.length; r++) s[o[r]] = n(o[r]);
        return s
    }

    function a(e, t, n) {
        return null != n[t] ? n[t] : e.props[t]
    }
}, , , , , , , , , , , , ,
function(e, t, n) {
    "use strict";
    e.exports = n(738)
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = "function" == typeof Symbol && Symbol.for,
        i = r ? Symbol.for("react.element") : 60103,
        o = r ? Symbol.for("react.portal") : 60106,
        a = r ? Symbol.for("react.fragment") : 60107,
        s = r ? Symbol.for("react.strict_mode") : 60108,
        u = r ? Symbol.for("react.profiler") : 60114,
        l = r ? Symbol.for("react.provider") : 60109,
        c = r ? Symbol.for("react.context") : 60110,
        f = r ? Symbol.for("react.async_mode") : 60111,
        d = r ? Symbol.for("react.concurrent_mode") : 60111,
        h = r ? Symbol.for("react.forward_ref") : 60112,
        p = r ? Symbol.for("react.suspense") : 60113,
        g = r ? Symbol.for("react.memo") : 60115,
        v = r ? Symbol.for("react.lazy") : 60116;

    function y(e) {
        if ("object" == typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
                case i:
                    switch (e = e.type) {
                        case f:
                        case d:
                        case a:
                        case u:
                        case s:
                        case p:
                            return e;
                        default:
                            switch (e = e && e.$$typeof) {
                                case c:
                                case h:
                                case l:
                                    return e;
                                default:
                                    return t
                            }
                    }
                case v:
                case g:
                case o:
                    return t
            }
        }
    }

    function m(e) {
        return y(e) === d
    }
    t.typeOf = y, t.AsyncMode = f, t.ConcurrentMode = d, t.ContextConsumer = c, t.ContextProvider = l, t.Element = i, t.ForwardRef = h, t.Fragment = a, t.Lazy = v, t.Memo = g, t.Portal = o, t.Profiler = u, t.StrictMode = s, t.Suspense = p, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === a || e === d || e === u || e === s || e === p || "object" == typeof e && null !== e && (e.$$typeof === v || e.$$typeof === g || e.$$typeof === l || e.$$typeof === c || e.$$typeof === h)
    }, t.isAsyncMode = function(e) {
        return m(e) || y(e) === f
    }, t.isConcurrentMode = m, t.isContextConsumer = function(e) {
        return y(e) === c
    }, t.isContextProvider = function(e) {
        return y(e) === l
    }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === i
    }, t.isForwardRef = function(e) {
        return y(e) === h
    }, t.isFragment = function(e) {
        return y(e) === a
    }, t.isLazy = function(e) {
        return y(e) === v
    }, t.isMemo = function(e) {
        return y(e) === g
    }, t.isPortal = function(e) {
        return y(e) === o
    }, t.isProfiler = function(e) {
        return y(e) === u
    }, t.isStrictMode = function(e) {
        return y(e) === s
    }, t.isSuspense = function(e) {
        return y(e) === p
    }
}, , , ,
function(e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = function(e) {
        return r.createElement("button", {
            type: "button",
            className: e.classNames.selectedTag,
            title: "Click to remove tag",
            onClick: e.onDelete
        }, r.createElement("span", {
            className: e.classNames.selectedTagName
        }, e.tag.name))
    }
},
function(e, t, n) {
    "use strict";
    var r = n(0),
        i = {
            position: "absolute",
            width: 0,
            height: 0,
            visibility: "hidden",
            overflow: "scroll",
            whiteSpace: "pre"
        },
        o = ["fontSize", "fontFamily", "fontWeight", "fontStyle", "letterSpacing", "textTransform"],
        a = function(e) {
            function t(t) {
                e.call(this, t), this.state = {
                    inputWidth: null
                }
            }
            return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.componentDidMount = function() {
                this.props.autoresize && (this.copyInputStyles(), this.updateInputWidth()), this.props.autofocus && this.input.focus()
            }, t.prototype.componentDidUpdate = function(e) {
                var t = e.query,
                    n = e.placeholder;
                t === this.props.query && n === this.props.placeholder || this.updateInputWidth()
            }, t.prototype.copyInputStyles = function() {
                var e = this,
                    t = window.getComputedStyle(this.input);
                o.forEach((function(n) {
                    e.sizer.style[n] = t[n]
                }))
            }, t.prototype.updateInputWidth = function() {
                var e;
                this.props.autoresize && (e = Math.ceil(this.sizer.scrollWidth) + 2), e !== this.state.inputWidth && this.setState({
                    inputWidth: e
                })
            }, t.prototype.render = function() {
                var e = this,
                    t = this.props,
                    n = t.inputAttributes,
                    o = t.inputEventHandlers,
                    a = t.query,
                    s = t.placeholder,
                    u = t.expandable,
                    l = t.listboxId,
                    c = t.selectedIndex,
                    f = t.ariaLabel;
                return r.createElement("div", {
                    className: this.props.classNames.searchInput
                }, r.createElement("input", Object.assign({}, n, o, {
                    ref: function(t) {
                        e.input = t
                    },
                    value: a,
                    placeholder: s,
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-label": f || s,
                    "aria-owns": l,
                    "aria-activedescendant": c > -1 ? l + "-" + c : null,
                    "aria-expanded": u,
                    style: {
                        width: this.state.inputWidth
                    }
                })), r.createElement("div", {
                    ref: function(t) {
                        e.sizer = t
                    },
                    style: i
                }, a || s))
            }, t
        }(r.Component);
    e.exports = a
},
function(e, t, n) {
    "use strict";
    var r = n(0);

    function i(e) {
        return e.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function o(e, t) {
        if (t) {
            var n = RegExp(i(t), "gi");
            e = e.replace(n, "<mark>$&</mark>")
        }
        return {
            __html: e
        }
    }

    function a(e, t, n, r, o) {
        if (!r) {
            var a = new RegExp("(?:^|\\s)" + i(e), "i");
            r = function(e) {
                return a.test(e.name)
            }
        }
        var s = t.filter((function(t) {
            return r(t, e)
        })).slice(0, n);
        return 0 === s.length && o && s.push({
            id: 0,
            name: o,
            disabled: !0,
            disableMarkIt: !0
        }), s
    }
    var s = function(e) {
        function t(t) {
            e.call(this, t), this.state = {
                options: a(this.props.query, this.props.suggestions, this.props.maxSuggestionsLength, this.props.suggestionsFilter, this.props.noSuggestionsText)
            }
        }
        return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.componentWillReceiveProps = function(e) {
            this.setState({
                options: a(e.query, e.suggestions, e.maxSuggestionsLength, e.suggestionsFilter, e.noSuggestionsText)
            })
        }, t.prototype.handleMouseDown = function(e, t) {
            t.preventDefault(), this.props.addTag(e)
        }, t.prototype.render = function() {
            var e = this;
            if (!this.props.expandable || !this.state.options.length) return null;
            var t = this.state.options.map((function(t, n) {
                var i = e.props.listboxId + "-" + n,
                    a = [];
                return e.props.selectedIndex === n && a.push(e.props.classNames.suggestionActive), t.disabled && a.push(e.props.classNames.suggestionDisabled), r.createElement("li", {
                    id: i,
                    key: i,
                    role: "option",
                    className: a.join(" "),
                    "aria-disabled": !0 === t.disabled,
                    onMouseDown: e.handleMouseDown.bind(e, t)
                }, t.disableMarkIt ? t.name : r.createElement("span", {
                    dangerouslySetInnerHTML: o(t.name, e.props.query, t.markInput)
                }))
            }));
            return r.createElement("div", {
                className: this.props.classNames.suggestions
            }, r.createElement("ul", {
                role: "listbox",
                id: this.props.listboxId
            }, t))
        }, t
    }(r.Component);
    e.exports = s
}, , , , , , , , ,
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        i = n(0),
        o = s(i),
        a = s(n(70));

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var u = function(e) {
        function t(e) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.scrollListener = n.scrollListener.bind(n), n.eventListenerOptions = n.eventListenerOptions.bind(n), n.mousewheelListener = n.mousewheelListener.bind(n), n
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, e), r(t, [{
            key: "componentDidMount",
            value: function() {
                this.pageLoaded = this.props.pageStart, this.options = this.eventListenerOptions(), this.attachScrollListener()
            }
        }, {
            key: "componentDidUpdate",
            value: function() {
                if (this.props.isReverse && this.loadMore) {
                    var e = this.getParentElement(this.scrollComponent);
                    e.scrollTop = e.scrollHeight - this.beforeScrollHeight + this.beforeScrollTop, this.loadMore = !1
                }
                this.attachScrollListener()
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this.detachScrollListener(), this.detachMousewheelListener()
            }
        }, {
            key: "isPassiveSupported",
            value: function() {
                var e = !1,
                    t = {
                        get passive() {
                            e = !0
                        }
                    };
                try {
                    document.addEventListener("test", null, t), document.removeEventListener("test", null, t)
                } catch (e) {}
                return e
            }
        }, {
            key: "eventListenerOptions",
            value: function() {
                var e = this.props.useCapture;
                return this.isPassiveSupported() && (e = {
                    useCapture: this.props.useCapture,
                    passive: !0
                }), e
            }
        }, {
            key: "setDefaultLoader",
            value: function(e) {
                this.defaultLoader = e
            }
        }, {
            key: "detachMousewheelListener",
            value: function() {
                var e = window;
                !1 === this.props.useWindow && (e = this.scrollComponent.parentNode), e.removeEventListener("mousewheel", this.mousewheelListener, this.options ? this.options : this.props.useCapture)
            }
        }, {
            key: "detachScrollListener",
            value: function() {
                var e = window;
                !1 === this.props.useWindow && (e = this.getParentElement(this.scrollComponent)), e.removeEventListener("scroll", this.scrollListener, this.options ? this.options : this.props.useCapture), e.removeEventListener("resize", this.scrollListener, this.options ? this.options : this.props.useCapture)
            }
        }, {
            key: "getParentElement",
            value: function(e) {
                var t = this.props.getScrollParent && this.props.getScrollParent();
                return null != t ? t : e && e.parentNode
            }
        }, {
            key: "filterProps",
            value: function(e) {
                return e
            }
        }, {
            key: "attachScrollListener",
            value: function() {
                var e = this.getParentElement(this.scrollComponent);
                if (this.props.hasMore && e) {
                    var t = window;
                    !1 === this.props.useWindow && (t = e), t.addEventListener("mousewheel", this.mousewheelListener, this.options ? this.options : this.props.useCapture), t.addEventListener("scroll", this.scrollListener, this.options ? this.options : this.props.useCapture), t.addEventListener("resize", this.scrollListener, this.options ? this.options : this.props.useCapture), this.props.initialLoad && this.scrollListener()
                }
            }
        }, {
            key: "mousewheelListener",
            value: function(e) {
                1 !== e.deltaY || this.isPassiveSupported() || e.preventDefault()
            }
        }, {
            key: "scrollListener",
            value: function() {
                var e = this.scrollComponent,
                    t = window,
                    n = this.getParentElement(e),
                    r = void 0;
                if (this.props.useWindow) {
                    var i = document.documentElement || document.body.parentNode || document.body,
                        o = void 0 !== t.pageYOffset ? t.pageYOffset : i.scrollTop;
                    r = this.props.isReverse ? o : this.calculateOffset(e, o)
                } else r = this.props.isReverse ? n.scrollTop : e.scrollHeight - n.scrollTop - n.clientHeight;
                r < Number(this.props.threshold) && e && null !== e.offsetParent && (this.detachScrollListener(), this.beforeScrollHeight = n.scrollHeight, this.beforeScrollTop = n.scrollTop, "function" == typeof this.props.loadMore && (this.props.loadMore(this.pageLoaded += 1), this.loadMore = !0))
            }
        }, {
            key: "calculateOffset",
            value: function(e, t) {
                return e ? this.calculateTopPosition(e) + (e.offsetHeight - t - window.innerHeight) : 0
            }
        }, {
            key: "calculateTopPosition",
            value: function(e) {
                return e ? e.offsetTop + this.calculateTopPosition(e.offsetParent) : 0
            }
        }, {
            key: "render",
            value: function() {
                var e = this,
                    t = this.filterProps(this.props),
                    n = t.children,
                    r = t.element,
                    i = t.hasMore,
                    a = (t.initialLoad, t.isReverse),
                    s = t.loader,
                    u = (t.loadMore, t.pageStart, t.ref),
                    l = (t.threshold, t.useCapture, t.useWindow, t.getScrollParent, function(e, t) {
                        var n = {};
                        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                        return n
                    }(t, ["children", "element", "hasMore", "initialLoad", "isReverse", "loader", "loadMore", "pageStart", "ref", "threshold", "useCapture", "useWindow", "getScrollParent"]));
                l.ref = function(t) {
                    e.scrollComponent = t, u && u(t)
                };
                var c = [n];
                return i && (s ? a ? c.unshift(s) : c.push(s) : this.defaultLoader && (a ? c.unshift(this.defaultLoader) : c.push(this.defaultLoader))), o.default.createElement(r, l, c)
            }
        }]), t
    }(i.Component);
    u.propTypes = {
        children: a.default.node.isRequired,
        element: a.default.node,
        hasMore: a.default.bool,
        initialLoad: a.default.bool,
        isReverse: a.default.bool,
        loader: a.default.node,
        loadMore: a.default.func.isRequired,
        pageStart: a.default.number,
        ref: a.default.func,
        getScrollParent: a.default.func,
        threshold: a.default.number,
        useCapture: a.default.bool,
        useWindow: a.default.bool
    }, u.defaultProps = {
        element: "div",
        hasMore: !1,
        initialLoad: !0,
        pageStart: 0,
        ref: null,
        threshold: 250,
        useWindow: !0,
        isReverse: !1,
        useCapture: !1,
        loader: null,
        getScrollParent: null
    }, t.default = u, e.exports = t.default
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.AlphaPicker = void 0;
    var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        i = u(n(0)),
        o = u(n(62)),
        a = n(98),
        s = u(n(789));

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var l = t.AlphaPicker = function(e) {
        var t = e.rgb,
            n = e.hsl,
            s = e.width,
            u = e.height,
            l = e.onChange,
            c = e.direction,
            f = e.style,
            d = e.renderers,
            h = e.pointer,
            p = e.className,
            g = void 0 === p ? "" : p,
            v = (0, o.default)({
                default: {
                    picker: {
                        position: "relative",
                        width: s,
                        height: u
                    },
                    alpha: {
                        radius: "2px",
                        style: f
                    }
                }
            });
        return i.default.createElement("div", {
            style: v.picker,
            className: "alpha-picker " + g
        }, i.default.createElement(a.Alpha, r({}, v.alpha, {
            rgb: t,
            hsl: n,
            pointer: h,
            renderers: d,
            onChange: l,
            direction: c
        })))
    };
    l.defaultProps = {
        width: "316px",
        height: "16px",
        direction: "horizontal",
        pointer: s.default
    }, t.default = (0, a.ColorWrap)(l)
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.flattenNames = void 0;
    var r = s(n(756)),
        i = s(n(383)),
        o = s(n(379)),
        a = s(n(208));

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var u = t.flattenNames = function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            n = [];
        return (0, a.default)(t, (function(t) {
            Array.isArray(t) ? e(t).map((function(e) {
                return n.push(e)
            })) : (0, o.default)(t) ? (0, i.default)(t, (function(e, t) {
                !0 === e && n.push(t), n.push(t + "-" + e)
            })) : (0, r.default)(t) && n.push(t)
        })), n
    };
    t.default = u
},
function(e, t, n) {
    var r = n(375),
        i = n(339),
        o = n(380);
    e.exports = function(e) {
        return "string" == typeof e || !i(e) && o(e) && "[object String]" == r(e)
    }
},
function(e, t, n) {
    var r = n(544),
        i = n(336);
    e.exports = function(e, t) {
        return e && r(e, t, i)
    }
},
function(e, t) {
    e.exports = function(e) {
        return function(t, n, r) {
            for (var i = -1, o = Object(t), a = r(t), s = a.length; s--;) {
                var u = a[e ? s : ++i];
                if (!1 === n(o[u], u, o)) break
            }
            return t
        }
    }
},
function(e, t) {
    e.exports = function(e) {
        return e
    }
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.mergeClasses = void 0;
    var r = a(n(383)),
        i = a(n(761)),
        o = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var s = t.mergeClasses = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            n = e.default && (0, i.default)(e.default) || {};
        return t.map((function(t) {
            var i = e[t];
            return i && (0, r.default)(i, (function(e, t) {
                n[t] || (n[t] = {}), n[t] = o({}, n[t], i[t])
            })), t
        })), n
    };
    t.default = s
},
function(e, t, n) {
    var r = n(473);
    e.exports = function(e) {
        return r(e, 5)
    }
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.autoprefix = void 0;
    var r, i = n(383),
        o = (r = i) && r.__esModule ? r : {
            default: r
        },
        a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
    var s = {
            borderRadius: function(e) {
                return {
                    msBorderRadius: e,
                    MozBorderRadius: e,
                    OBorderRadius: e,
                    WebkitBorderRadius: e,
                    borderRadius: e
                }
            },
            boxShadow: function(e) {
                return {
                    msBoxShadow: e,
                    MozBoxShadow: e,
                    OBoxShadow: e,
                    WebkitBoxShadow: e,
                    boxShadow: e
                }
            },
            userSelect: function(e) {
                return {
                    WebkitTouchCallout: e,
                    KhtmlUserSelect: e,
                    MozUserSelect: e,
                    msUserSelect: e,
                    WebkitUserSelect: e,
                    userSelect: e
                }
            },
            flex: function(e) {
                return {
                    WebkitBoxFlex: e,
                    MozBoxFlex: e,
                    WebkitFlex: e,
                    msFlex: e,
                    flex: e
                }
            },
            flexBasis: function(e) {
                return {
                    WebkitFlexBasis: e,
                    flexBasis: e
                }
            },
            justifyContent: function(e) {
                return {
                    WebkitJustifyContent: e,
                    justifyContent: e
                }
            },
            transition: function(e) {
                return {
                    msTransition: e,
                    MozTransition: e,
                    OTransition: e,
                    WebkitTransition: e,
                    transition: e
                }
            },
            transform: function(e) {
                return {
                    msTransform: e,
                    MozTransform: e,
                    OTransform: e,
                    WebkitTransform: e,
                    transform: e
                }
            },
            absolute: function(e) {
                var t = e && e.split(" ");
                return {
                    position: "absolute",
                    top: t && t[0],
                    right: t && t[1],
                    bottom: t && t[2],
                    left: t && t[3]
                }
            },
            extend: function(e, t) {
                var n = t[e];
                return n || {
                    extend: e
                }
            }
        },
        u = t.autoprefix = function(e) {
            var t = {};
            return (0, o.default)(e, (function(e, n) {
                var r = {};
                (0, o.default)(e, (function(e, t) {
                    var n = s[t];
                    n ? r = a({}, r, n(e)) : r[t] = e
                })), t[n] = r
            })), t
        };
    t.default = u
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.hover = void 0;
    var r, i = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        o = n(0),
        a = (r = o) && r.__esModule ? r : {
            default: r
        };

    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function l(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var c = t.hover = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
        return function(n) {
            function r() {
                var n, o, l;
                s(this, r);
                for (var c = arguments.length, f = Array(c), d = 0; d < c; d++) f[d] = arguments[d];
                return o = l = u(this, (n = r.__proto__ || Object.getPrototypeOf(r)).call.apply(n, [this].concat(f))), l.state = {
                    hover: !1
                }, l.handleMouseOver = function() {
                    return l.setState({
                        hover: !0
                    })
                }, l.handleMouseOut = function() {
                    return l.setState({
                        hover: !1
                    })
                }, l.render = function() {
                    return a.default.createElement(t, {
                        onMouseOver: l.handleMouseOver,
                        onMouseOut: l.handleMouseOut
                    }, a.default.createElement(e, i({}, l.props, l.state)))
                }, u(l, o)
            }
            return l(r, n), r
        }(a.default.Component)
    };
    t.default = c
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.active = void 0;
    var r, i = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        o = n(0),
        a = (r = o) && r.__esModule ? r : {
            default: r
        };

    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function l(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var c = t.active = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
        return function(n) {
            function r() {
                var n, o, l;
                s(this, r);
                for (var c = arguments.length, f = Array(c), d = 0; d < c; d++) f[d] = arguments[d];
                return o = l = u(this, (n = r.__proto__ || Object.getPrototypeOf(r)).call.apply(n, [this].concat(f))), l.state = {
                    active: !1
                }, l.handleMouseDown = function() {
                    return l.setState({
                        active: !0
                    })
                }, l.handleMouseUp = function() {
                    return l.setState({
                        active: !1
                    })
                }, l.render = function() {
                    return a.default.createElement(t, {
                        onMouseDown: l.handleMouseDown,
                        onMouseUp: l.handleMouseUp
                    }, a.default.createElement(e, i({}, l.props, l.state)))
                }, u(l, o)
            }
            return l(r, n), r
        }(a.default.Component)
    };
    t.default = c
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = function(e, t) {
        var n = {},
            r = function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                n[e] = t
            };
        return 0 === e && r("first-child"), e === t - 1 && r("last-child"), (0 === e || e % 2 == 0) && r("even"), 1 === Math.abs(e % 2) && r("odd"), r("nth-child", e), n
    }
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Alpha = void 0;
    var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        o = n(0),
        a = c(o),
        s = c(n(62)),
        u = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }(n(767)),
        l = c(n(384));

    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function f(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function d(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    var h = t.Alpha = function(e) {
        function t() {
            var e, n, r;
            f(this, t);
            for (var i = arguments.length, o = Array(i), a = 0; a < i; a++) o[a] = arguments[a];
            return n = r = d(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(o))), r.handleChange = function(e) {
                var t = u.calculateChange(e, r.props.hsl, r.props.direction, r.props.a, r.container);
                t && "function" == typeof r.props.onChange && r.props.onChange(t, e)
            }, r.handleMouseDown = function(e) {
                r.handleChange(e), window.addEventListener("mousemove", r.handleChange), window.addEventListener("mouseup", r.handleMouseUp)
            }, r.handleMouseUp = function() {
                r.unbindEventListeners()
            }, r.unbindEventListeners = function() {
                window.removeEventListener("mousemove", r.handleChange), window.removeEventListener("mouseup", r.handleMouseUp)
            }, d(r, n)
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, e), i(t, [{
            key: "componentWillUnmount",
            value: function() {
                this.unbindEventListeners()
            }
        }, {
            key: "render",
            value: function() {
                var e = this,
                    t = this.props.rgb,
                    n = (0, s.default)({
                        default: {
                            alpha: {
                                absolute: "0px 0px 0px 0px",
                                borderRadius: this.props.radius
                            },
                            checkboard: {
                                absolute: "0px 0px 0px 0px",
                                overflow: "hidden",
                                borderRadius: this.props.radius
                            },
                            gradient: {
                                absolute: "0px 0px 0px 0px",
                                background: "linear-gradient(to right, rgba(" + t.r + "," + t.g + "," + t.b + ", 0) 0%,\n           rgba(" + t.r + "," + t.g + "," + t.b + ", 1) 100%)",
                                boxShadow: this.props.shadow,
                                borderRadius: this.props.radius
                            },
                            container: {
                                position: "relative",
                                height: "100%",
                                margin: "0 3px"
                            },
                            pointer: {
                                position: "absolute",
                                left: 100 * t.a + "%"
                            },
                            slider: {
                                width: "4px",
                                borderRadius: "1px",
                                height: "8px",
                                boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
                                background: "#fff",
                                marginTop: "1px",
                                transform: "translateX(-2px)"
                            }
                        },
                        vertical: {
                            gradient: {
                                background: "linear-gradient(to bottom, rgba(" + t.r + "," + t.g + "," + t.b + ", 0) 0%,\n           rgba(" + t.r + "," + t.g + "," + t.b + ", 1) 100%)"
                            },
                            pointer: {
                                left: 0,
                                top: 100 * t.a + "%"
                            }
                        },
                        overwrite: r({}, this.props.style)
                    }, {
                        vertical: "vertical" === this.props.direction,
                        overwrite: !0
                    });
                return a.default.createElement("div", {
                    style: n.alpha
                }, a.default.createElement("div", {
                    style: n.checkboard
                }, a.default.createElement(l.default, {
                    renderers: this.props.renderers
                })), a.default.createElement("div", {
                    style: n.gradient
                }), a.default.createElement("div", {
                    style: n.container,
                    ref: function(t) {
                        return e.container = t
                    },
                    onMouseDown: this.handleMouseDown,
                    onTouchMove: this.handleChange,
                    onTouchStart: this.handleChange
                }, a.default.createElement("div", {
                    style: n.pointer
                }, this.props.pointer ? a.default.createElement(this.props.pointer, this.props) : a.default.createElement("div", {
                    style: n.slider
                }))))
            }
        }]), t
    }(o.PureComponent || o.Component);
    t.default = h
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.calculateChange = function(e, t, n, r, i) {
        var o = i.clientWidth,
            a = i.clientHeight,
            s = "number" == typeof e.pageX ? e.pageX : e.touches[0].pageX,
            u = "number" == typeof e.pageY ? e.pageY : e.touches[0].pageY,
            l = s - (i.getBoundingClientRect().left + window.pageXOffset),
            c = u - (i.getBoundingClientRect().top + window.pageYOffset);
        if ("vertical" === n) {
            var f = void 0;
            if (f = c < 0 ? 0 : c > a ? 1 : Math.round(100 * c / a) / 100, t.a !== f) return {
                h: t.h,
                s: t.s,
                l: t.l,
                a: f,
                source: "rgb"
            }
        } else {
            var d = void 0;
            if (r !== (d = l < 0 ? 0 : l > o ? 1 : Math.round(100 * l / o) / 100)) return {
                h: t.h,
                s: t.s,
                l: t.l,
                a: d,
                source: "rgb"
            }
        }
        return null
    }
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = {},
        i = t.render = function(e, t, n, r) {
            if ("undefined" == typeof document && !r) return null;
            var i = r ? new r : document.createElement("canvas");
            i.width = 2 * n, i.height = 2 * n;
            var o = i.getContext("2d");
            return o ? (o.fillStyle = e, o.fillRect(0, 0, i.width, i.height), o.fillStyle = t, o.fillRect(0, 0, n, n), o.translate(n, n), o.fillRect(0, 0, n, n), i.toDataURL()) : null
        };
    t.get = function(e, t, n, o) {
        var a = e + "-" + t + "-" + n + (o ? "-server" : "");
        if (r[a]) return r[a];
        var s = i(e, t, n, o);
        return r[a] = s, s
    }
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.EditableInput = void 0;
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        i = n(0),
        o = s(i),
        a = s(n(62));

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var u = [38, 40],
        l = t.EditableInput = function(e) {
            function t(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return n.handleBlur = function() {
                    n.state.blurValue && n.setState({
                        value: n.state.blurValue,
                        blurValue: null
                    })
                }, n.handleChange = function(e) {
                    n.setUpdatedValue(e.target.value, e)
                }, n.handleKeyDown = function(e) {
                    var t, r = function(e) {
                        return Number(String(e).replace(/%/g, ""))
                    }(e.target.value);
                    if (!isNaN(r) && (t = e.keyCode, u.indexOf(t) > -1)) {
                        var i = n.getArrowOffset(),
                            o = 38 === e.keyCode ? r + i : r - i;
                        n.setUpdatedValue(o, e)
                    }
                }, n.handleDrag = function(e) {
                    if (n.props.dragLabel) {
                        var t = Math.round(n.props.value + e.movementX);
                        t >= 0 && t <= n.props.dragMax && n.props.onChange && n.props.onChange(n.getValueObjectWithLabel(t), e)
                    }
                }, n.handleMouseDown = function(e) {
                    n.props.dragLabel && (e.preventDefault(), n.handleDrag(e), window.addEventListener("mousemove", n.handleDrag), window.addEventListener("mouseup", n.handleMouseUp))
                }, n.handleMouseUp = function() {
                    n.unbindEventListeners()
                }, n.unbindEventListeners = function() {
                    window.removeEventListener("mousemove", n.handleDrag), window.removeEventListener("mouseup", n.handleMouseUp)
                }, n.state = {
                    value: String(e.value).toUpperCase(),
                    blurValue: String(e.value).toUpperCase()
                }, n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e), r(t, [{
                key: "componentDidUpdate",
                value: function(e, t) {
                    this.props.value === this.state.value || e.value === this.props.value && t.value === this.state.value || (this.input === document.activeElement ? this.setState({
                        blurValue: String(this.props.value).toUpperCase()
                    }) : this.setState({
                        value: String(this.props.value).toUpperCase(),
                        blurValue: !this.state.blurValue && String(this.props.value).toUpperCase()
                    }))
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.unbindEventListeners()
                }
            }, {
                key: "getValueObjectWithLabel",
                value: function(e) {
                    return function(e, t, n) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n, e
                    }({}, this.props.label, e)
                }
            }, {
                key: "getArrowOffset",
                value: function() {
                    return this.props.arrowOffset || 1
                }
            }, {
                key: "setUpdatedValue",
                value: function(e, t) {
                    var n = this.props.label ? this.getValueObjectWithLabel(e) : e;
                    this.props.onChange && this.props.onChange(n, t), this.setState({
                        value: e
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this,
                        t = (0, a.default)({
                            default: {
                                wrap: {
                                    position: "relative"
                                }
                            },
                            "user-override": {
                                wrap: this.props.style && this.props.style.wrap ? this.props.style.wrap : {},
                                input: this.props.style && this.props.style.input ? this.props.style.input : {},
                                label: this.props.style && this.props.style.label ? this.props.style.label : {}
                            },
                            "dragLabel-true": {
                                label: {
                                    cursor: "ew-resize"
                                }
                            }
                        }, {
                            "user-override": !0
                        }, this.props);
                    return o.default.createElement("div", {
                        style: t.wrap
                    }, o.default.createElement("input", {
                        style: t.input,
                        ref: function(t) {
                            return e.input = t
                        },
                        value: this.state.value,
                        onKeyDown: this.handleKeyDown,
                        onChange: this.handleChange,
                        onBlur: this.handleBlur,
                        placeholder: this.props.placeholder,
                        spellCheck: "false"
                    }), this.props.label && !this.props.hideLabel ? o.default.createElement("span", {
                        style: t.label,
                        onMouseDown: this.handleMouseDown
                    }, this.props.label) : null)
                }
            }]), t
        }(i.PureComponent || i.Component);
    t.default = l
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Hue = void 0;
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        i = n(0),
        o = u(i),
        a = u(n(62)),
        s = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }(n(771));

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function l(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function c(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    var f = t.Hue = function(e) {
        function t() {
            var e, n, r;
            l(this, t);
            for (var i = arguments.length, o = Array(i), a = 0; a < i; a++) o[a] = arguments[a];
            return n = r = c(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(o))), r.handleChange = function(e) {
                var t = s.calculateChange(e, r.props.direction, r.props.hsl, r.container);
                t && "function" == typeof r.props.onChange && r.props.onChange(t, e)
            }, r.handleMouseDown = function(e) {
                r.handleChange(e), window.addEventListener("mousemove", r.handleChange), window.addEventListener("mouseup", r.handleMouseUp)
            }, r.handleMouseUp = function() {
                r.unbindEventListeners()
            }, c(r, n)
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, e), r(t, [{
            key: "componentWillUnmount",
            value: function() {
                this.unbindEventListeners()
            }
        }, {
            key: "unbindEventListeners",
            value: function() {
                window.removeEventListener("mousemove", this.handleChange), window.removeEventListener("mouseup", this.handleMouseUp)
            }
        }, {
            key: "render",
            value: function() {
                var e = this,
                    t = this.props.direction,
                    n = void 0 === t ? "horizontal" : t,
                    r = (0, a.default)({
                        default: {
                            hue: {
                                absolute: "0px 0px 0px 0px",
                                borderRadius: this.props.radius,
                                boxShadow: this.props.shadow
                            },
                            container: {
                                padding: "0 2px",
                                position: "relative",
                                height: "100%",
                                borderRadius: this.props.radius
                            },
                            pointer: {
                                position: "absolute",
                                left: 100 * this.props.hsl.h / 360 + "%"
                            },
                            slider: {
                                marginTop: "1px",
                                width: "4px",
                                borderRadius: "1px",
                                height: "8px",
                                boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
                                background: "#fff",
                                transform: "translateX(-2px)"
                            }
                        },
                        vertical: {
                            pointer: {
                                left: "0px",
                                top: -100 * this.props.hsl.h / 360 + 100 + "%"
                            }
                        }
                    }, {
                        vertical: "vertical" === n
                    });
                return o.default.createElement("div", {
                    style: r.hue
                }, o.default.createElement("div", {
                    className: "hue-" + n,
                    style: r.container,
                    ref: function(t) {
                        return e.container = t
                    },
                    onMouseDown: this.handleMouseDown,
                    onTouchMove: this.handleChange,
                    onTouchStart: this.handleChange
                }, o.default.createElement("style", null, "\n            .hue-horizontal {\n              background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0\n                33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to right, #f00 0%, #ff0\n                17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n\n            .hue-vertical {\n              background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,\n                #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%,\n                #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n          "), o.default.createElement("div", {
                    style: r.pointer
                }, this.props.pointer ? o.default.createElement(this.props.pointer, this.props) : o.default.createElement("div", {
                    style: r.slider
                }))))
            }
        }]), t
    }(i.PureComponent || i.Component);
    t.default = f
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.calculateChange = function(e, t, n, r) {
        var i = r.clientWidth,
            o = r.clientHeight,
            a = "number" == typeof e.pageX ? e.pageX : e.touches[0].pageX,
            s = "number" == typeof e.pageY ? e.pageY : e.touches[0].pageY,
            u = a - (r.getBoundingClientRect().left + window.pageXOffset),
            l = s - (r.getBoundingClientRect().top + window.pageYOffset);
        if ("vertical" === t) {
            var c = void 0;
            if (l < 0) c = 359;
            else if (l > o) c = 0;
            else {
                c = 360 * (-100 * l / o + 100) / 100
            }
            if (n.h !== c) return {
                h: c,
                s: n.s,
                l: n.l,
                a: n.a,
                source: "hsl"
            }
        } else {
            var f = void 0;
            if (u < 0) f = 0;
            else if (u > i) f = 359;
            else {
                f = 360 * (100 * u / i) / 100
            }
            if (n.h !== f) return {
                h: f,
                s: n.s,
                l: n.l,
                a: n.a,
                source: "hsl"
            }
        }
        return null
    }
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Raised = void 0;
    var r = s(n(0)),
        i = s(n(70)),
        o = s(n(62)),
        a = s(n(150));

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var u = t.Raised = function(e) {
        var t = e.zDepth,
            n = e.radius,
            i = e.background,
            s = e.children,
            u = e.styles,
            l = void 0 === u ? {} : u,
            c = (0, o.default)((0, a.default)({
                default: {
                    wrap: {
                        position: "relative",
                        display: "inline-block"
                    },
                    content: {
                        position: "relative"
                    },
                    bg: {
                        absolute: "0px 0px 0px 0px",
                        boxShadow: "0 " + t + "px " + 4 * t + "px rgba(0,0,0,.24)",
                        borderRadius: n,
                        background: i
                    }
                },
                "zDepth-0": {
                    bg: {
                        boxShadow: "none"
                    }
                },
                "zDepth-1": {
                    bg: {
                        boxShadow: "0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)"
                    }
                },
                "zDepth-2": {
                    bg: {
                        boxShadow: "0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)"
                    }
                },
                "zDepth-3": {
                    bg: {
                        boxShadow: "0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)"
                    }
                },
                "zDepth-4": {
                    bg: {
                        boxShadow: "0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)"
                    }
                },
                "zDepth-5": {
                    bg: {
                        boxShadow: "0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)"
                    }
                },
                square: {
                    bg: {
                        borderRadius: "0"
                    }
                },
                circle: {
                    bg: {
                        borderRadius: "50%"
                    }
                }
            }, l), {
                "zDepth-1": 1 === t
            });
        return r.default.createElement("div", {
            style: c.wrap
        }, r.default.createElement("div", {
            style: c.bg
        }), r.default.createElement("div", {
            style: c.content
        }, s))
    };
    u.propTypes = {
        background: i.default.string,
        zDepth: i.default.oneOf([0, 1, 2, 3, 4, 5]),
        radius: i.default.number,
        styles: i.default.object
    }, u.defaultProps = {
        background: "#fff",
        zDepth: 1,
        radius: 2,
        styles: {}
    }, t.default = u
},
function(e, t, n) {
    var r = n(474),
        i = n(545),
        o = n(544),
        a = n(774),
        s = n(244),
        u = n(338),
        l = n(546);
    e.exports = function e(t, n, c, f, d) {
        t !== n && o(n, (function(o, u) {
            if (d || (d = new r), s(o)) a(t, n, u, c, e, f, d);
            else {
                var h = f ? f(l(t, u), o, u + "", t, n, d) : void 0;
                void 0 === h && (h = o), i(t, u, h)
            }
        }), u)
    }
},
function(e, t, n) {
    var r = n(545),
        i = n(475),
        o = n(775),
        a = n(476),
        s = n(478),
        u = n(778),
        l = n(339),
        c = n(779),
        f = n(480),
        d = n(469),
        h = n(244),
        p = n(379),
        g = n(780),
        v = n(546),
        y = n(781);
    e.exports = function(e, t, n, m, b, _, w) {
        var x = v(e, n),
            E = v(t, n),
            O = w.get(E);
        if (O) r(e, n, O);
        else {
            var S = _ ? _(x, E, n + "", e, t, w) : void 0,
                k = void 0 === S;
            if (k) {
                var T = l(E),
                    C = !T && f(E),
                    M = !T && !C && g(E);
                S = E, T || C || M ? l(x) ? S = x : c(x) ? S = a(x) : C ? (k = !1, S = i(E, !0)) : M ? (k = !1, S = o(E, !0)) : S = [] : p(E) || u(E) ? (S = x, u(x) ? S = y(x) : h(x) && !d(x) || (S = s(E))) : k = !1
            }
            k && (w.set(E, S), b(S, E, m, _, w), w.delete(E)), r(e, n, S)
        }
    }
},
function(e, t, n) {
    var r = n(776);
    e.exports = function(e, t) {
        var n = t ? r(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.length)
    }
},
function(e, t, n) {
    var r = n(777);
    e.exports = function(e) {
        var t = new e.constructor(e.byteLength);
        return new r(t).set(new r(e)), t
    }
},
function(e, t, n) {
    var r = n(378).Uint8Array;
    e.exports = r
},
function(e, t) {
    e.exports = function() {
        return !1
    }
},
function(e, t, n) {
    var r = n(468),
        i = n(380);
    e.exports = function(e) {
        return i(e) && r(e)
    }
},
function(e, t) {
    e.exports = function() {
        return !1
    }
},
function(e, t, n) {
    var r = n(243),
        i = n(338);
    e.exports = function(e) {
        return r(e, i(e))
    }
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Saturation = void 0;
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        i = n(0),
        o = l(i),
        a = l(n(62)),
        s = l(n(783)),
        u = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }(n(784));

    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var c = t.Saturation = function(e) {
        function t(e) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.handleChange = function(e) {
                "function" == typeof n.props.onChange && n.throttle(n.props.onChange, u.calculateChange(e, n.props.hsl, n.container), e)
            }, n.handleMouseDown = function(e) {
                n.handleChange(e), window.addEventListener("mousemove", n.handleChange), window.addEventListener("mouseup", n.handleMouseUp)
            }, n.handleMouseUp = function() {
                n.unbindEventListeners()
            }, n.throttle = (0, s.default)((function(e, t, n) {
                e(t, n)
            }), 50), n
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, e), r(t, [{
            key: "componentWillUnmount",
            value: function() {
                this.throttle.cancel(), this.unbindEventListeners()
            }
        }, {
            key: "unbindEventListeners",
            value: function() {
                window.removeEventListener("mousemove", this.handleChange), window.removeEventListener("mouseup", this.handleMouseUp)
            }
        }, {
            key: "render",
            value: function() {
                var e = this,
                    t = this.props.style || {},
                    n = t.color,
                    r = t.white,
                    i = t.black,
                    s = t.pointer,
                    u = t.circle,
                    l = (0, a.default)({
                        default: {
                            color: {
                                absolute: "0px 0px 0px 0px",
                                background: "hsl(" + this.props.hsl.h + ",100%, 50%)",
                                borderRadius: this.props.radius
                            },
                            white: {
                                absolute: "0px 0px 0px 0px",
                                borderRadius: this.props.radius
                            },
                            black: {
                                absolute: "0px 0px 0px 0px",
                                boxShadow: this.props.shadow,
                                borderRadius: this.props.radius
                            },
                            pointer: {
                                position: "absolute",
                                top: -100 * this.props.hsv.v + 100 + "%",
                                left: 100 * this.props.hsv.s + "%",
                                cursor: "default"
                            },
                            circle: {
                                width: "4px",
                                height: "4px",
                                boxShadow: "0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),\n            0 0 1px 2px rgba(0,0,0,.4)",
                                borderRadius: "50%",
                                cursor: "hand",
                                transform: "translate(-2px, -2px)"
                            }
                        },
                        custom: {
                            color: n,
                            white: r,
                            black: i,
                            pointer: s,
                            circle: u
                        }
                    }, {
                        custom: !!this.props.style
                    });
                return o.default.createElement("div", {
                    style: l.color,
                    ref: function(t) {
                        return e.container = t
                    },
                    onMouseDown: this.handleMouseDown,
                    onTouchMove: this.handleChange,
                    onTouchStart: this.handleChange
                }, o.default.createElement("style", null, "\n          .saturation-white {\n            background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0));\n            background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n          }\n          .saturation-black {\n            background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0));\n            background: linear-gradient(to top, #000, rgba(0,0,0,0));\n          }\n        "), o.default.createElement("div", {
                    style: l.white,
                    className: "saturation-white"
                }, o.default.createElement("div", {
                    style: l.black,
                    className: "saturation-black"
                }), o.default.createElement("div", {
                    style: l.pointer
                }, this.props.pointer ? o.default.createElement(this.props.pointer, this.props) : o.default.createElement("div", {
                    style: l.circle
                }))))
            }
        }]), t
    }(i.PureComponent || i.Component);
    t.default = c
},
function(e, t, n) {
    var r = n(377),
        i = n(244);
    e.exports = function(e, t, n) {
        var o = !0,
            a = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");
        return i(n) && (o = "leading" in n ? !!n.leading : o, a = "trailing" in n ? !!n.trailing : a), r(e, t, {
            leading: o,
            maxWait: t,
            trailing: a
        })
    }
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.calculateChange = function(e, t, n) {
        var r = n.getBoundingClientRect(),
            i = r.width,
            o = r.height,
            a = "number" == typeof e.pageX ? e.pageX : e.touches[0].pageX,
            s = "number" == typeof e.pageY ? e.pageY : e.touches[0].pageY,
            u = a - (n.getBoundingClientRect().left + window.pageXOffset),
            l = s - (n.getBoundingClientRect().top + window.pageYOffset);
        u < 0 ? u = 0 : u > i && (u = i), l < 0 ? l = 0 : l > o && (l = o);
        var c = u / i,
            f = 1 - l / o;
        return {
            h: t.h,
            s: c,
            v: f,
            a: t.a,
            source: "hsv"
        }
    }
},
function(e, t) {
    e.exports = function(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n, e););
        return e
    }
},
function(e, t, n) {
    var r;
    ! function(i) {
        var o = /^\s+/,
            a = /\s+$/,
            s = 0,
            u = i.round,
            l = i.min,
            c = i.max,
            f = i.random;

        function d(e, t) {
            if (t = t || {}, (e = e || "") instanceof d) return e;
            if (!(this instanceof d)) return new d(e, t);
            var n = function(e) {
                var t = {
                        r: 0,
                        g: 0,
                        b: 0
                    },
                    n = 1,
                    r = null,
                    s = null,
                    u = null,
                    f = !1,
                    d = !1;
                "string" == typeof e && (e = function(e) {
                    e = e.replace(o, "").replace(a, "").toLowerCase();
                    var t, n = !1;
                    if (D[e]) e = D[e], n = !0;
                    else if ("transparent" == e) return {
                        r: 0,
                        g: 0,
                        b: 0,
                        a: 0,
                        format: "name"
                    };
                    if (t = z.rgb.exec(e)) return {
                        r: t[1],
                        g: t[2],
                        b: t[3]
                    };
                    if (t = z.rgba.exec(e)) return {
                        r: t[1],
                        g: t[2],
                        b: t[3],
                        a: t[4]
                    };
                    if (t = z.hsl.exec(e)) return {
                        h: t[1],
                        s: t[2],
                        l: t[3]
                    };
                    if (t = z.hsla.exec(e)) return {
                        h: t[1],
                        s: t[2],
                        l: t[3],
                        a: t[4]
                    };
                    if (t = z.hsv.exec(e)) return {
                        h: t[1],
                        s: t[2],
                        v: t[3]
                    };
                    if (t = z.hsva.exec(e)) return {
                        h: t[1],
                        s: t[2],
                        v: t[3],
                        a: t[4]
                    };
                    if (t = z.hex8.exec(e)) return {
                        r: R(t[1]),
                        g: R(t[2]),
                        b: R(t[3]),
                        a: Y(t[4]),
                        format: n ? "name" : "hex8"
                    };
                    if (t = z.hex6.exec(e)) return {
                        r: R(t[1]),
                        g: R(t[2]),
                        b: R(t[3]),
                        format: n ? "name" : "hex"
                    };
                    if (t = z.hex4.exec(e)) return {
                        r: R(t[1] + "" + t[1]),
                        g: R(t[2] + "" + t[2]),
                        b: R(t[3] + "" + t[3]),
                        a: Y(t[4] + "" + t[4]),
                        format: n ? "name" : "hex8"
                    };
                    if (t = z.hex3.exec(e)) return {
                        r: R(t[1] + "" + t[1]),
                        g: R(t[2] + "" + t[2]),
                        b: R(t[3] + "" + t[3]),
                        format: n ? "name" : "hex"
                    };
                    return !1
                }(e));
                "object" == typeof e && (U(e.r) && U(e.g) && U(e.b) ? (h = e.r, p = e.g, g = e.b, t = {
                    r: 255 * j(h, 255),
                    g: 255 * j(p, 255),
                    b: 255 * j(g, 255)
                }, f = !0, d = "%" === String(e.r).substr(-1) ? "prgb" : "rgb") : U(e.h) && U(e.s) && U(e.v) ? (r = N(e.s), s = N(e.v), t = function(e, t, n) {
                    e = 6 * j(e, 360), t = j(t, 100), n = j(n, 100);
                    var r = i.floor(e),
                        o = e - r,
                        a = n * (1 - t),
                        s = n * (1 - o * t),
                        u = n * (1 - (1 - o) * t),
                        l = r % 6;
                    return {
                        r: 255 * [n, s, a, a, u, n][l],
                        g: 255 * [u, n, n, s, a, a][l],
                        b: 255 * [a, a, u, n, n, s][l]
                    }
                }(e.h, r, s), f = !0, d = "hsv") : U(e.h) && U(e.s) && U(e.l) && (r = N(e.s), u = N(e.l), t = function(e, t, n) {
                    var r, i, o;

                    function a(e, t, n) {
                        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
                    }
                    if (e = j(e, 360), t = j(t, 100), n = j(n, 100), 0 === t) r = i = o = n;
                    else {
                        var s = n < .5 ? n * (1 + t) : n + t - n * t,
                            u = 2 * n - s;
                        r = a(u, s, e + 1 / 3), i = a(u, s, e), o = a(u, s, e - 1 / 3)
                    }
                    return {
                        r: 255 * r,
                        g: 255 * i,
                        b: 255 * o
                    }
                }(e.h, r, u), f = !0, d = "hsl"), e.hasOwnProperty("a") && (n = e.a));
                var h, p, g;
                return n = I(n), {
                    ok: f,
                    format: e.format || d,
                    r: l(255, c(t.r, 0)),
                    g: l(255, c(t.g, 0)),
                    b: l(255, c(t.b, 0)),
                    a: n
                }
            }(e);
            this._originalInput = e, this._r = n.r, this._g = n.g, this._b = n.b, this._a = n.a, this._roundA = u(100 * this._a) / 100, this._format = t.format || n.format, this._gradientType = t.gradientType, this._r < 1 && (this._r = u(this._r)), this._g < 1 && (this._g = u(this._g)), this._b < 1 && (this._b = u(this._b)), this._ok = n.ok, this._tc_id = s++
        }

        function h(e, t, n) {
            e = j(e, 255), t = j(t, 255), n = j(n, 255);
            var r, i, o = c(e, t, n),
                a = l(e, t, n),
                s = (o + a) / 2;
            if (o == a) r = i = 0;
            else {
                var u = o - a;
                switch (i = s > .5 ? u / (2 - o - a) : u / (o + a), o) {
                    case e:
                        r = (t - n) / u + (t < n ? 6 : 0);
                        break;
                    case t:
                        r = (n - e) / u + 2;
                        break;
                    case n:
                        r = (e - t) / u + 4
                }
                r /= 6
            }
            return {
                h: r,
                s: i,
                l: s
            }
        }

        function p(e, t, n) {
            e = j(e, 255), t = j(t, 255), n = j(n, 255);
            var r, i, o = c(e, t, n),
                a = l(e, t, n),
                s = o,
                u = o - a;
            if (i = 0 === o ? 0 : u / o, o == a) r = 0;
            else {
                switch (o) {
                    case e:
                        r = (t - n) / u + (t < n ? 6 : 0);
                        break;
                    case t:
                        r = (n - e) / u + 2;
                        break;
                    case n:
                        r = (e - t) / u + 4
                }
                r /= 6
            }
            return {
                h: r,
                s: i,
                v: s
            }
        }

        function g(e, t, n, r) {
            var i = [L(u(e).toString(16)), L(u(t).toString(16)), L(u(n).toString(16))];
            return r && i[0].charAt(0) == i[0].charAt(1) && i[1].charAt(0) == i[1].charAt(1) && i[2].charAt(0) == i[2].charAt(1) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("")
        }

        function v(e, t, n, r) {
            return [L(F(r)), L(u(e).toString(16)), L(u(t).toString(16)), L(u(n).toString(16))].join("")
        }

        function y(e, t) {
            t = 0 === t ? 0 : t || 10;
            var n = d(e).toHsl();
            return n.s -= t / 100, n.s = A(n.s), d(n)
        }

        function m(e, t) {
            t = 0 === t ? 0 : t || 10;
            var n = d(e).toHsl();
            return n.s += t / 100, n.s = A(n.s), d(n)
        }

        function b(e) {
            return d(e).desaturate(100)
        }

        function _(e, t) {
            t = 0 === t ? 0 : t || 10;
            var n = d(e).toHsl();
            return n.l += t / 100, n.l = A(n.l), d(n)
        }

        function w(e, t) {
            t = 0 === t ? 0 : t || 10;
            var n = d(e).toRgb();
            return n.r = c(0, l(255, n.r - u(-t / 100 * 255))), n.g = c(0, l(255, n.g - u(-t / 100 * 255))), n.b = c(0, l(255, n.b - u(-t / 100 * 255))), d(n)
        }

        function x(e, t) {
            t = 0 === t ? 0 : t || 10;
            var n = d(e).toHsl();
            return n.l -= t / 100, n.l = A(n.l), d(n)
        }

        function E(e, t) {
            var n = d(e).toHsl(),
                r = (n.h + t) % 360;
            return n.h = r < 0 ? 360 + r : r, d(n)
        }

        function O(e) {
            var t = d(e).toHsl();
            return t.h = (t.h + 180) % 360, d(t)
        }

        function S(e) {
            var t = d(e).toHsl(),
                n = t.h;
            return [d(e), d({
                h: (n + 120) % 360,
                s: t.s,
                l: t.l
            }), d({
                h: (n + 240) % 360,
                s: t.s,
                l: t.l
            })]
        }

        function k(e) {
            var t = d(e).toHsl(),
                n = t.h;
            return [d(e), d({
                h: (n + 90) % 360,
                s: t.s,
                l: t.l
            }), d({
                h: (n + 180) % 360,
                s: t.s,
                l: t.l
            }), d({
                h: (n + 270) % 360,
                s: t.s,
                l: t.l
            })]
        }

        function T(e) {
            var t = d(e).toHsl(),
                n = t.h;
            return [d(e), d({
                h: (n + 72) % 360,
                s: t.s,
                l: t.l
            }), d({
                h: (n + 216) % 360,
                s: t.s,
                l: t.l
            })]
        }

        function C(e, t, n) {
            t = t || 6, n = n || 30;
            var r = d(e).toHsl(),
                i = 360 / n,
                o = [d(e)];
            for (r.h = (r.h - (i * t >> 1) + 720) % 360; --t;) r.h = (r.h + i) % 360, o.push(d(r));
            return o
        }

        function M(e, t) {
            t = t || 6;
            for (var n = d(e).toHsv(), r = n.h, i = n.s, o = n.v, a = [], s = 1 / t; t--;) a.push(d({
                h: r,
                s: i,
                v: o
            })), o = (o + s) % 1;
            return a
        }
        d.prototype = {
            isDark: function() {
                return this.getBrightness() < 128
            },
            isLight: function() {
                return !this.isDark()
            },
            isValid: function() {
                return this._ok
            },
            getOriginalInput: function() {
                return this._originalInput
            },
            getFormat: function() {
                return this._format
            },
            getAlpha: function() {
                return this._a
            },
            getBrightness: function() {
                var e = this.toRgb();
                return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3
            },
            getLuminance: function() {
                var e, t, n, r = this.toRgb();
                return e = r.r / 255, t = r.g / 255, n = r.b / 255, .2126 * (e <= .03928 ? e / 12.92 : i.pow((e + .055) / 1.055, 2.4)) + .7152 * (t <= .03928 ? t / 12.92 : i.pow((t + .055) / 1.055, 2.4)) + .0722 * (n <= .03928 ? n / 12.92 : i.pow((n + .055) / 1.055, 2.4))
            },
            setAlpha: function(e) {
                return this._a = I(e), this._roundA = u(100 * this._a) / 100, this
            },
            toHsv: function() {
                var e = p(this._r, this._g, this._b);
                return {
                    h: 360 * e.h,
                    s: e.s,
                    v: e.v,
                    a: this._a
                }
            },
            toHsvString: function() {
                var e = p(this._r, this._g, this._b),
                    t = u(360 * e.h),
                    n = u(100 * e.s),
                    r = u(100 * e.v);
                return 1 == this._a ? "hsv(" + t + ", " + n + "%, " + r + "%)" : "hsva(" + t + ", " + n + "%, " + r + "%, " + this._roundA + ")"
            },
            toHsl: function() {
                var e = h(this._r, this._g, this._b);
                return {
                    h: 360 * e.h,
                    s: e.s,
                    l: e.l,
                    a: this._a
                }
            },
            toHslString: function() {
                var e = h(this._r, this._g, this._b),
                    t = u(360 * e.h),
                    n = u(100 * e.s),
                    r = u(100 * e.l);
                return 1 == this._a ? "hsl(" + t + ", " + n + "%, " + r + "%)" : "hsla(" + t + ", " + n + "%, " + r + "%, " + this._roundA + ")"
            },
            toHex: function(e) {
                return g(this._r, this._g, this._b, e)
            },
            toHexString: function(e) {
                return "#" + this.toHex(e)
            },
            toHex8: function(e) {
                return function(e, t, n, r, i) {
                    var o = [L(u(e).toString(16)), L(u(t).toString(16)), L(u(n).toString(16)), L(F(r))];
                    if (i && o[0].charAt(0) == o[0].charAt(1) && o[1].charAt(0) == o[1].charAt(1) && o[2].charAt(0) == o[2].charAt(1) && o[3].charAt(0) == o[3].charAt(1)) return o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0);
                    return o.join("")
                }(this._r, this._g, this._b, this._a, e)
            },
            toHex8String: function(e) {
                return "#" + this.toHex8(e)
            },
            toRgb: function() {
                return {
                    r: u(this._r),
                    g: u(this._g),
                    b: u(this._b),
                    a: this._a
                }
            },
            toRgbString: function() {
                return 1 == this._a ? "rgb(" + u(this._r) + ", " + u(this._g) + ", " + u(this._b) + ")" : "rgba(" + u(this._r) + ", " + u(this._g) + ", " + u(this._b) + ", " + this._roundA + ")"
            },
            toPercentageRgb: function() {
                return {
                    r: u(100 * j(this._r, 255)) + "%",
                    g: u(100 * j(this._g, 255)) + "%",
                    b: u(100 * j(this._b, 255)) + "%",
                    a: this._a
                }
            },
            toPercentageRgbString: function() {
                return 1 == this._a ? "rgb(" + u(100 * j(this._r, 255)) + "%, " + u(100 * j(this._g, 255)) + "%, " + u(100 * j(this._b, 255)) + "%)" : "rgba(" + u(100 * j(this._r, 255)) + "%, " + u(100 * j(this._g, 255)) + "%, " + u(100 * j(this._b, 255)) + "%, " + this._roundA + ")"
            },
            toName: function() {
                return 0 === this._a ? "transparent" : !(this._a < 1) && (P[g(this._r, this._g, this._b, !0)] || !1)
            },
            toFilter: function(e) {
                var t = "#" + v(this._r, this._g, this._b, this._a),
                    n = t,
                    r = this._gradientType ? "GradientType = 1, " : "";
                if (e) {
                    var i = d(e);
                    n = "#" + v(i._r, i._g, i._b, i._a)
                }
                return "progid:DXImageTransform.Microsoft.gradient(" + r + "startColorstr=" + t + ",endColorstr=" + n + ")"
            },
            toString: function(e) {
                var t = !!e;
                e = e || this._format;
                var n = !1,
                    r = this._a < 1 && this._a >= 0;
                return t || !r || "hex" !== e && "hex6" !== e && "hex3" !== e && "hex4" !== e && "hex8" !== e && "name" !== e ? ("rgb" === e && (n = this.toRgbString()), "prgb" === e && (n = this.toPercentageRgbString()), "hex" !== e && "hex6" !== e || (n = this.toHexString()), "hex3" === e && (n = this.toHexString(!0)), "hex4" === e && (n = this.toHex8String(!0)), "hex8" === e && (n = this.toHex8String()), "name" === e && (n = this.toName()), "hsl" === e && (n = this.toHslString()), "hsv" === e && (n = this.toHsvString()), n || this.toHexString()) : "name" === e && 0 === this._a ? this.toName() : this.toRgbString()
            },
            clone: function() {
                return d(this.toString())
            },
            _applyModification: function(e, t) {
                var n = e.apply(null, [this].concat([].slice.call(t)));
                return this._r = n._r, this._g = n._g, this._b = n._b, this.setAlpha(n._a), this
            },
            lighten: function() {
                return this._applyModification(_, arguments)
            },
            brighten: function() {
                return this._applyModification(w, arguments)
            },
            darken: function() {
                return this._applyModification(x, arguments)
            },
            desaturate: function() {
                return this._applyModification(y, arguments)
            },
            saturate: function() {
                return this._applyModification(m, arguments)
            },
            greyscale: function() {
                return this._applyModification(b, arguments)
            },
            spin: function() {
                return this._applyModification(E, arguments)
            },
            _applyCombination: function(e, t) {
                return e.apply(null, [this].concat([].slice.call(t)))
            },
            analogous: function() {
                return this._applyCombination(C, arguments)
            },
            complement: function() {
                return this._applyCombination(O, arguments)
            },
            monochromatic: function() {
                return this._applyCombination(M, arguments)
            },
            splitcomplement: function() {
                return this._applyCombination(T, arguments)
            },
            triad: function() {
                return this._applyCombination(S, arguments)
            },
            tetrad: function() {
                return this._applyCombination(k, arguments)
            }
        }, d.fromRatio = function(e, t) {
            if ("object" == typeof e) {
                var n = {};
                for (var r in e) e.hasOwnProperty(r) && (n[r] = "a" === r ? e[r] : N(e[r]));
                e = n
            }
            return d(e, t)
        }, d.equals = function(e, t) {
            return !(!e || !t) && d(e).toRgbString() == d(t).toRgbString()
        }, d.random = function() {
            return d.fromRatio({
                r: f(),
                g: f(),
                b: f()
            })
        }, d.mix = function(e, t, n) {
            n = 0 === n ? 0 : n || 50;
            var r = d(e).toRgb(),
                i = d(t).toRgb(),
                o = n / 100;
            return d({
                r: (i.r - r.r) * o + r.r,
                g: (i.g - r.g) * o + r.g,
                b: (i.b - r.b) * o + r.b,
                a: (i.a - r.a) * o + r.a
            })
        }, d.readability = function(e, t) {
            var n = d(e),
                r = d(t);
            return (i.max(n.getLuminance(), r.getLuminance()) + .05) / (i.min(n.getLuminance(), r.getLuminance()) + .05)
        }, d.isReadable = function(e, t, n) {
            var r, i, o = d.readability(e, t);
            switch (i = !1, (r = function(e) {
                var t, n;
                t = ((e = e || {
                    level: "AA",
                    size: "small"
                }).level || "AA").toUpperCase(), n = (e.size || "small").toLowerCase(), "AA" !== t && "AAA" !== t && (t = "AA");
                "small" !== n && "large" !== n && (n = "small");
                return {
                    level: t,
                    size: n
                }
            }(n)).level + r.size) {
                case "AAsmall":
                case "AAAlarge":
                    i = o >= 4.5;
                    break;
                case "AAlarge":
                    i = o >= 3;
                    break;
                case "AAAsmall":
                    i = o >= 7
            }
            return i
        }, d.mostReadable = function(e, t, n) {
            var r, i, o, a, s = null,
                u = 0;
            i = (n = n || {}).includeFallbackColors, o = n.level, a = n.size;
            for (var l = 0; l < t.length; l++)(r = d.readability(e, t[l])) > u && (u = r, s = d(t[l]));
            return d.isReadable(e, s, {
                level: o,
                size: a
            }) || !i ? s : (n.includeFallbackColors = !1, d.mostReadable(e, ["#fff", "#000"], n))
        };
        var D = d.names = {
                aliceblue: "f0f8ff",
                antiquewhite: "faebd7",
                aqua: "0ff",
                aquamarine: "7fffd4",
                azure: "f0ffff",
                beige: "f5f5dc",
                bisque: "ffe4c4",
                black: "000",
                blanchedalmond: "ffebcd",
                blue: "00f",
                blueviolet: "8a2be2",
                brown: "a52a2a",
                burlywood: "deb887",
                burntsienna: "ea7e5d",
                cadetblue: "5f9ea0",
                chartreuse: "7fff00",
                chocolate: "d2691e",
                coral: "ff7f50",
                cornflowerblue: "6495ed",
                cornsilk: "fff8dc",
                crimson: "dc143c",
                cyan: "0ff",
                darkblue: "00008b",
                darkcyan: "008b8b",
                darkgoldenrod: "b8860b",
                darkgray: "a9a9a9",
                darkgreen: "006400",
                darkgrey: "a9a9a9",
                darkkhaki: "bdb76b",
                darkmagenta: "8b008b",
                darkolivegreen: "556b2f",
                darkorange: "ff8c00",
                darkorchid: "9932cc",
                darkred: "8b0000",
                darksalmon: "e9967a",
                darkseagreen: "8fbc8f",
                darkslateblue: "483d8b",
                darkslategray: "2f4f4f",
                darkslategrey: "2f4f4f",
                darkturquoise: "00ced1",
                darkviolet: "9400d3",
                deeppink: "ff1493",
                deepskyblue: "00bfff",
                dimgray: "696969",
                dimgrey: "696969",
                dodgerblue: "1e90ff",
                firebrick: "b22222",
                floralwhite: "fffaf0",
                forestgreen: "228b22",
                fuchsia: "f0f",
                gainsboro: "dcdcdc",
                ghostwhite: "f8f8ff",
                gold: "ffd700",
                goldenrod: "daa520",
                gray: "808080",
                green: "008000",
                greenyellow: "adff2f",
                grey: "808080",
                honeydew: "f0fff0",
                hotpink: "ff69b4",
                indianred: "cd5c5c",
                indigo: "4b0082",
                ivory: "fffff0",
                khaki: "f0e68c",
                lavender: "e6e6fa",
                lavenderblush: "fff0f5",
                lawngreen: "7cfc00",
                lemonchiffon: "fffacd",
                lightblue: "add8e6",
                lightcoral: "f08080",
                lightcyan: "e0ffff",
                lightgoldenrodyellow: "fafad2",
                lightgray: "d3d3d3",
                lightgreen: "90ee90",
                lightgrey: "d3d3d3",
                lightpink: "ffb6c1",
                lightsalmon: "ffa07a",
                lightseagreen: "20b2aa",
                lightskyblue: "87cefa",
                lightslategray: "789",
                lightslategrey: "789",
                lightsteelblue: "b0c4de",
                lightyellow: "ffffe0",
                lime: "0f0",
                limegreen: "32cd32",
                linen: "faf0e6",
                magenta: "f0f",
                maroon: "800000",
                mediumaquamarine: "66cdaa",
                mediumblue: "0000cd",
                mediumorchid: "ba55d3",
                mediumpurple: "9370db",
                mediumseagreen: "3cb371",
                mediumslateblue: "7b68ee",
                mediumspringgreen: "00fa9a",
                mediumturquoise: "48d1cc",
                mediumvioletred: "c71585",
                midnightblue: "191970",
                mintcream: "f5fffa",
                mistyrose: "ffe4e1",
                moccasin: "ffe4b5",
                navajowhite: "ffdead",
                navy: "000080",
                oldlace: "fdf5e6",
                olive: "808000",
                olivedrab: "6b8e23",
                orange: "ffa500",
                orangered: "ff4500",
                orchid: "da70d6",
                palegoldenrod: "eee8aa",
                palegreen: "98fb98",
                paleturquoise: "afeeee",
                palevioletred: "db7093",
                papayawhip: "ffefd5",
                peachpuff: "ffdab9",
                peru: "cd853f",
                pink: "ffc0cb",
                plum: "dda0dd",
                powderblue: "b0e0e6",
                purple: "800080",
                rebeccapurple: "663399",
                red: "f00",
                rosybrown: "bc8f8f",
                royalblue: "4169e1",
                saddlebrown: "8b4513",
                salmon: "fa8072",
                sandybrown: "f4a460",
                seagreen: "2e8b57",
                seashell: "fff5ee",
                sienna: "a0522d",
                silver: "c0c0c0",
                skyblue: "87ceeb",
                slateblue: "6a5acd",
                slategray: "708090",
                slategrey: "708090",
                snow: "fffafa",
                springgreen: "00ff7f",
                steelblue: "4682b4",
                tan: "d2b48c",
                teal: "008080",
                thistle: "d8bfd8",
                tomato: "ff6347",
                turquoise: "40e0d0",
                violet: "ee82ee",
                wheat: "f5deb3",
                white: "fff",
                whitesmoke: "f5f5f5",
                yellow: "ff0",
                yellowgreen: "9acd32"
            },
            P = d.hexNames = function(e) {
                var t = {};
                for (var n in e) e.hasOwnProperty(n) && (t[e[n]] = n);
                return t
            }(D);

        function I(e) {
            return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e
        }

        function j(e, t) {
            (function(e) {
                return "string" == typeof e && -1 != e.indexOf(".") && 1 === parseFloat(e)
            })(e) && (e = "100%");
            var n = function(e) {
                return "string" == typeof e && -1 != e.indexOf("%")
            }(e);
            return e = l(t, c(0, parseFloat(e))), n && (e = parseInt(e * t, 10) / 100), i.abs(e - t) < 1e-6 ? 1 : e % t / parseFloat(t)
        }

        function A(e) {
            return l(1, c(0, e))
        }

        function R(e) {
            return parseInt(e, 16)
        }

        function L(e) {
            return 1 == e.length ? "0" + e : "" + e
        }

        function N(e) {
            return e <= 1 && (e = 100 * e + "%"), e
        }

        function F(e) {
            return i.round(255 * parseFloat(e)).toString(16)
        }

        function Y(e) {
            return R(e) / 255
        }
        var H, B, W, z = (B = "[\\s|\\(]+(" + (H = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") + ")[,|\\s]+(" + H + ")[,|\\s]+(" + H + ")\\s*\\)?", W = "[\\s|\\(]+(" + H + ")[,|\\s]+(" + H + ")[,|\\s]+(" + H + ")[,|\\s]+(" + H + ")\\s*\\)?", {
            CSS_UNIT: new RegExp(H),
            rgb: new RegExp("rgb" + B),
            rgba: new RegExp("rgba" + W),
            hsl: new RegExp("hsl" + B),
            hsla: new RegExp("hsla" + W),
            hsv: new RegExp("hsv" + B),
            hsva: new RegExp("hsva" + W),
            hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        });

        function U(e) {
            return !!z.CSS_UNIT.exec(e)
        }
        e.exports ? e.exports = d : void 0 === (r = function() {
            return d
        }.call(t, n, t, e)) || (e.exports = r)
    }(Math)
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Swatch = void 0;
    var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        i = u(n(0)),
        o = u(n(62)),
        a = n(788),
        s = u(n(384));

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var l = t.Swatch = function(e) {
        var t = e.color,
            n = e.style,
            a = e.onClick,
            u = void 0 === a ? function() {} : a,
            l = e.onHover,
            c = e.title,
            f = void 0 === c ? t : c,
            d = e.children,
            h = e.focus,
            p = e.focusStyle,
            g = void 0 === p ? {} : p,
            v = "transparent" === t,
            y = (0, o.default)({
                default: {
                    swatch: r({
                        background: t,
                        height: "100%",
                        width: "100%",
                        cursor: "pointer",
                        position: "relative",
                        outline: "none"
                    }, n, h ? g : {})
                }
            }),
            m = {};
        return l && (m.onMouseOver = function(e) {
            return l(t, e)
        }), i.default.createElement("div", r({
            style: y.swatch,
            onClick: function(e) {
                return u(t, e)
            },
            title: f,
            tabIndex: 0,
            onKeyDown: function(e) {
                return 13 === e.keyCode && u(t, e)
            }
        }, m), d, v && i.default.createElement(s.default, {
            borderRadius: y.swatch.borderRadius,
            boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)"
        }))
    };
    t.default = (0, a.handleFocus)(l)
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.handleFocus = void 0;
    var r, i = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        a = n(0),
        s = (r = a) && r.__esModule ? r : {
            default: r
        };

    function u(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function l(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function c(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    t.handleFocus = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
        return function(n) {
            function r() {
                var e, t, n;
                u(this, r);
                for (var i = arguments.length, o = Array(i), a = 0; a < i; a++) o[a] = arguments[a];
                return t = n = l(this, (e = r.__proto__ || Object.getPrototypeOf(r)).call.apply(e, [this].concat(o))), n.state = {
                    focus: !1
                }, n.handleFocus = function() {
                    return n.setState({
                        focus: !0
                    })
                }, n.handleBlur = function() {
                    return n.setState({
                        focus: !1
                    })
                }, l(n, t)
            }
            return c(r, n), o(r, [{
                key: "render",
                value: function() {
                    return s.default.createElement(t, {
                        onFocus: this.handleFocus,
                        onBlur: this.handleBlur
                    }, s.default.createElement(e, i({}, this.props, this.state)))
                }
            }]), r
        }(s.default.Component)
    }
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.AlphaPointer = void 0;
    var r = o(n(0)),
        i = o(n(62));

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var a = t.AlphaPointer = function(e) {
        var t = e.direction,
            n = (0, i.default)({
                default: {
                    picker: {
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        transform: "translate(-9px, -1px)",
                        backgroundColor: "rgb(248, 248, 248)",
                        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
                    }
                },
                vertical: {
                    picker: {
                        transform: "translate(-3px, -9px)"
                    }
                }
            }, {
                vertical: "vertical" === t
            });
        return r.default.createElement("div", {
            style: n.picker
        })
    };
    t.default = a
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Block = void 0;
    var r = c(n(0)),
        i = c(n(70)),
        o = c(n(62)),
        a = c(n(150)),
        s = c(n(169)),
        u = n(98),
        l = c(n(791));

    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var f = t.Block = function(e) {
        var t = e.onChange,
            n = e.onSwatchHover,
            i = e.hex,
            c = e.colors,
            f = e.width,
            d = e.triangle,
            h = e.styles,
            p = void 0 === h ? {} : h,
            g = e.className,
            v = void 0 === g ? "" : g,
            y = "transparent" === i,
            m = function(e, n) {
                s.default.isValidHex(e) && t({
                    hex: e,
                    source: "hex"
                }, n)
            },
            b = (0, o.default)((0, a.default)({
                default: {
                    card: {
                        width: f,
                        background: "#fff",
                        boxShadow: "0 1px rgba(0,0,0,.1)",
                        borderRadius: "6px",
                        position: "relative"
                    },
                    head: {
                        height: "110px",
                        background: i,
                        borderRadius: "6px 6px 0 0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative"
                    },
                    body: {
                        padding: "10px"
                    },
                    label: {
                        fontSize: "18px",
                        color: s.default.getContrastingColor(i),
                        position: "relative"
                    },
                    triangle: {
                        width: "0px",
                        height: "0px",
                        borderStyle: "solid",
                        borderWidth: "0 10px 10px 10px",
                        borderColor: "transparent transparent " + i + " transparent",
                        position: "absolute",
                        top: "-10px",
                        left: "50%",
                        marginLeft: "-10px"
                    },
                    input: {
                        width: "100%",
                        fontSize: "12px",
                        color: "#666",
                        border: "0px",
                        outline: "none",
                        height: "22px",
                        boxShadow: "inset 0 0 0 1px #ddd",
                        borderRadius: "4px",
                        padding: "0 7px",
                        boxSizing: "border-box"
                    }
                },
                "hide-triangle": {
                    triangle: {
                        display: "none"
                    }
                }
            }, p), {
                "hide-triangle": "hide" === d
            });
        return r.default.createElement("div", {
            style: b.card,
            className: "block-picker " + v
        }, r.default.createElement("div", {
            style: b.triangle
        }), r.default.createElement("div", {
            style: b.head
        }, y && r.default.createElement(u.Checkboard, {
            borderRadius: "6px 6px 0 0"
        }), r.default.createElement("div", {
            style: b.label
        }, i)), r.default.createElement("div", {
            style: b.body
        }, r.default.createElement(l.default, {
            colors: c,
            onClick: m,
            onSwatchHover: n
        }), r.default.createElement(u.EditableInput, {
            style: {
                input: b.input
            },
            value: i,
            onChange: m
        })))
    };
    f.propTypes = {
        width: i.default.oneOfType([i.default.string, i.default.number]),
        colors: i.default.arrayOf(i.default.string),
        triangle: i.default.oneOf(["top", "hide"]),
        styles: i.default.object
    }, f.defaultProps = {
        width: 170,
        colors: ["#D9E3F0", "#F47373", "#697689", "#37D67A", "#2CCCE4", "#555555", "#dce775", "#ff8a65", "#ba68c8"],
        triangle: "top",
        styles: {}
    }, t.default = (0, u.ColorWrap)(f)
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.BlockSwatches = void 0;
    var r = s(n(0)),
        i = s(n(62)),
        o = s(n(208)),
        a = n(98);

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var u = t.BlockSwatches = function(e) {
        var t = e.colors,
            n = e.onClick,
            s = e.onSwatchHover,
            u = (0, i.default)({
                default: {
                    swatches: {
                        marginRight: "-10px"
                    },
                    swatch: {
                        width: "22px",
                        height: "22px",
                        float: "left",
                        marginRight: "10px",
                        marginBottom: "10px",
                        borderRadius: "4px"
                    },
                    clear: {
                        clear: "both"
                    }
                }
            });
        return r.default.createElement("div", {
            style: u.swatches
        }, (0, o.default)(t, (function(e) {
            return r.default.createElement(a.Swatch, {
                key: e,
                color: e,
                style: u.swatch,
                onClick: n,
                onHover: s,
                focusStyle: {
                    boxShadow: "0 0 4px " + e
                }
            })
        })), r.default.createElement("div", {
            style: u.clear
        }))
    };
    t.default = u
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Circle = void 0;
    var r = f(n(0)),
        i = f(n(70)),
        o = f(n(62)),
        a = f(n(208)),
        s = f(n(150)),
        u = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }(n(548)),
        l = n(98),
        c = f(n(793));

    function f(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var d = t.Circle = function(e) {
        var t = e.width,
            n = e.onChange,
            i = e.onSwatchHover,
            u = e.colors,
            l = e.hex,
            f = e.circleSize,
            d = e.styles,
            h = void 0 === d ? {} : d,
            p = e.circleSpacing,
            g = e.className,
            v = void 0 === g ? "" : g,
            y = (0, o.default)((0, s.default)({
                default: {
                    card: {
                        width: t,
                        display: "flex",
                        flexWrap: "wrap",
                        marginRight: -p,
                        marginBottom: -p
                    }
                }
            }, h)),
            m = function(e, t) {
                return n({
                    hex: e,
                    source: "hex"
                }, t)
            };
        return r.default.createElement("div", {
            style: y.card,
            className: "circle-picker " + v
        }, (0, a.default)(u, (function(e) {
            return r.default.createElement(c.default, {
                key: e,
                color: e,
                onClick: m,
                onSwatchHover: i,
                active: l === e.toLowerCase(),
                circleSize: f,
                circleSpacing: p
            })
        })))
    };
    d.propTypes = {
        width: i.default.oneOfType([i.default.string, i.default.number]),
        circleSize: i.default.number,
        circleSpacing: i.default.number,
        styles: i.default.object
    }, d.defaultProps = {
        width: 252,
        circleSize: 28,
        circleSpacing: 14,
        colors: [u.red[500], u.pink[500], u.purple[500], u.deepPurple[500], u.indigo[500], u.blue[500], u.lightBlue[500], u.cyan[500], u.teal[500], u.green[500], u.lightGreen[500], u.lime[500], u.yellow[500], u.amber[500], u.orange[500], u.deepOrange[500], u.brown[500], u.blueGrey[500]],
        styles: {}
    }, t.default = (0, l.ColorWrap)(d)
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.CircleSwatch = void 0;
    var r = s(n(0)),
        i = n(62),
        o = s(i),
        a = n(98);

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var u = t.CircleSwatch = function(e) {
        var t = e.color,
            n = e.onClick,
            i = e.onSwatchHover,
            s = e.hover,
            u = e.active,
            l = e.circleSize,
            c = e.circleSpacing,
            f = (0, o.default)({
                default: {
                    swatch: {
                        width: l,
                        height: l,
                        marginRight: c,
                        marginBottom: c,
                        transform: "scale(1)",
                        transition: "100ms transform ease"
                    },
                    Swatch: {
                        borderRadius: "50%",
                        background: "transparent",
                        boxShadow: "inset 0 0 0 " + (l / 2 + 1) + "px " + t,
                        transition: "100ms box-shadow ease"
                    }
                },
                hover: {
                    swatch: {
                        transform: "scale(1.2)"
                    }
                },
                active: {
                    Swatch: {
                        boxShadow: "inset 0 0 0 3px " + t
                    }
                }
            }, {
                hover: s,
                active: u
            });
        return r.default.createElement("div", {
            style: f.swatch
        }, r.default.createElement(a.Swatch, {
            style: f.Swatch,
            color: t,
            onClick: n,
            onHover: i,
            focusStyle: {
                boxShadow: f.Swatch.boxShadow + ", 0 0 5px " + t
            }
        }))
    };
    u.defaultProps = {
        circleSize: 28,
        circleSpacing: 14
    }, t.default = (0, i.handleHover)(u)
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Chrome = void 0;
    var r = f(n(0)),
        i = f(n(70)),
        o = f(n(62)),
        a = f(n(150)),
        s = n(98),
        u = f(n(795)),
        l = f(n(798)),
        c = f(n(799));

    function f(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var d = t.Chrome = function(e) {
        var t = e.width,
            n = e.onChange,
            i = e.disableAlpha,
            f = e.rgb,
            d = e.hsl,
            h = e.hsv,
            p = e.hex,
            g = e.renderers,
            v = e.styles,
            y = void 0 === v ? {} : v,
            m = e.className,
            b = void 0 === m ? "" : m,
            _ = e.defaultView,
            w = (0, o.default)((0, a.default)({
                default: {
                    picker: {
                        width: t,
                        background: "#fff",
                        borderRadius: "2px",
                        boxShadow: "0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)",
                        boxSizing: "initial",
                        fontFamily: "Menlo"
                    },
                    saturation: {
                        width: "100%",
                        paddingBottom: "55%",
                        position: "relative",
                        borderRadius: "2px 2px 0 0",
                        overflow: "hidden"
                    },
                    Saturation: {
                        radius: "2px 2px 0 0"
                    },
                    body: {
                        padding: "16px 16px 12px"
                    },
                    controls: {
                        display: "flex"
                    },
                    color: {
                        width: "32px"
                    },
                    swatch: {
                        marginTop: "6px",
                        width: "16px",
                        height: "16px",
                        borderRadius: "8px",
                        position: "relative",
                        overflow: "hidden"
                    },
                    active: {
                        absolute: "0px 0px 0px 0px",
                        borderRadius: "8px",
                        boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)",
                        background: "rgba(" + f.r + ", " + f.g + ", " + f.b + ", " + f.a + ")",
                        zIndex: "2"
                    },
                    toggles: {
                        flex: "1"
                    },
                    hue: {
                        height: "10px",
                        position: "relative",
                        marginBottom: "8px"
                    },
                    Hue: {
                        radius: "2px"
                    },
                    alpha: {
                        height: "10px",
                        position: "relative"
                    },
                    Alpha: {
                        radius: "2px"
                    }
                },
                disableAlpha: {
                    color: {
                        width: "22px"
                    },
                    alpha: {
                        display: "none"
                    },
                    hue: {
                        marginBottom: "0px"
                    },
                    swatch: {
                        width: "10px",
                        height: "10px",
                        marginTop: "0px"
                    }
                }
            }, y), {
                disableAlpha: i
            });
        return r.default.createElement("div", {
            style: w.picker,
            className: "chrome-picker " + b
        }, r.default.createElement("div", {
            style: w.saturation
        }, r.default.createElement(s.Saturation, {
            style: w.Saturation,
            hsl: d,
            hsv: h,
            pointer: c.default,
            onChange: n
        })), r.default.createElement("div", {
            style: w.body
        }, r.default.createElement("div", {
            style: w.controls,
            className: "flexbox-fix"
        }, r.default.createElement("div", {
            style: w.color
        }, r.default.createElement("div", {
            style: w.swatch
        }, r.default.createElement("div", {
            style: w.active
        }), r.default.createElement(s.Checkboard, {
            renderers: g
        }))), r.default.createElement("div", {
            style: w.toggles
        }, r.default.createElement("div", {
            style: w.hue
        }, r.default.createElement(s.Hue, {
            style: w.Hue,
            hsl: d,
            pointer: l.default,
            onChange: n
        })), r.default.createElement("div", {
            style: w.alpha
        }, r.default.createElement(s.Alpha, {
            style: w.Alpha,
            rgb: f,
            hsl: d,
            pointer: l.default,
            renderers: g,
            onChange: n
        })))), r.default.createElement(u.default, {
            rgb: f,
            hsl: d,
            hex: p,
            view: _,
            onChange: n,
            disableAlpha: i
        })))
    };
    d.propTypes = {
        width: i.default.oneOfType([i.default.string, i.default.number]),
        disableAlpha: i.default.bool,
        styles: i.default.object,
        defaultView: i.default.oneOf(["hex", "rgb", "hsl"])
    }, d.defaultProps = {
        width: 225,
        disableAlpha: !1,
        styles: {}
    }, t.default = (0, s.ColorWrap)(d)
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ChromeFields = void 0;
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        i = c(n(0)),
        o = c(n(62)),
        a = c(n(169)),
        s = c(n(796)),
        u = n(98),
        l = c(n(797));

    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var f = t.ChromeFields = function(e) {
        function t(e) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return n.toggleViews = function() {
                "hex" === n.state.view ? n.setState({
                    view: "rgb"
                }) : "rgb" === n.state.view ? n.setState({
                    view: "hsl"
                }) : "hsl" === n.state.view && (1 === n.props.hsl.a ? n.setState({
                    view: "hex"
                }) : n.setState({
                    view: "rgb"
                }))
            }, n.handleChange = function(e, t) {
                e.hex ? a.default.isValidHex(e.hex) && n.props.onChange({
                    hex: e.hex,
                    source: "hex"
                }, t) : e.r || e.g || e.b ? n.props.onChange({
                    r: e.r || n.props.rgb.r,
                    g: e.g || n.props.rgb.g,
                    b: e.b || n.props.rgb.b,
                    source: "rgb"
                }, t) : e.a ? (e.a < 0 ? e.a = 0 : e.a > 1 && (e.a = 1), n.props.onChange({
                    h: n.props.hsl.h,
                    s: n.props.hsl.s,
                    l: n.props.hsl.l,
                    a: Math.round(100 * e.a) / 100,
                    source: "rgb"
                }, t)) : (e.h || e.s || e.l) && ("string" == typeof e.s && e.s.includes("%") && (e.s = e.s.replace("%", "")), "string" == typeof e.l && e.l.includes("%") && (e.l = e.l.replace("%", "")), 1 == e.s ? e.s = .01 : 1 == e.l && (e.l = .01), n.props.onChange({
                    h: e.h || n.props.hsl.h,
                    s: Number((0, s.default)(e.s) ? n.props.hsl.s : e.s),
                    l: Number((0, s.default)(e.l) ? n.props.hsl.l : e.l),
                    source: "hsl"
                }, t))
            }, n.showHighlight = function(e) {
                e.currentTarget.style.background = "#eee"
            }, n.hideHighlight = function(e) {
                e.currentTarget.style.background = "transparent"
            }, 1 !== e.hsl.a && "hex" === e.view ? n.state = {
                view: "rgb"
            } : n.state = {
                view: e.view
            }, n
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, e), r(t, [{
            key: "render",
            value: function() {
                var e = this,
                    t = (0, o.default)({
                        default: {
                            wrap: {
                                paddingTop: "16px",
                                display: "flex"
                            },
                            fields: {
                                flex: "1",
                                display: "flex",
                                marginLeft: "-6px"
                            },
                            field: {
                                paddingLeft: "6px",
                                width: "100%"
                            },
                            alpha: {
                                paddingLeft: "6px",
                                width: "100%"
                            },
                            toggle: {
                                width: "32px",
                                textAlign: "right",
                                position: "relative"
                            },
                            icon: {
                                marginRight: "-4px",
                                marginTop: "12px",
                                cursor: "pointer",
                                position: "relative"
                            },
                            iconHighlight: {
                                position: "absolute",
                                width: "24px",
                                height: "28px",
                                background: "#eee",
                                borderRadius: "4px",
                                top: "10px",
                                left: "12px",
                                display: "none"
                            },
                            input: {
                                fontSize: "11px",
                                color: "#333",
                                width: "100%",
                                borderRadius: "2px",
                                border: "none",
                                boxShadow: "inset 0 0 0 1px #dadada",
                                height: "21px",
                                textAlign: "center"
                            },
                            label: {
                                textTransform: "uppercase",
                                fontSize: "11px",
                                lineHeight: "11px",
                                color: "#969696",
                                textAlign: "center",
                                display: "block",
                                marginTop: "12px"
                            },
                            svg: {
                                fill: "#333",
                                width: "24px",
                                height: "24px",
                                border: "1px transparent solid",
                                borderRadius: "5px"
                            }
                        },
                        disableAlpha: {
                            alpha: {
                                display: "none"
                            }
                        }
                    }, this.props, this.state),
                    n = void 0;
                return "hex" === this.state.view ? n = i.default.createElement("div", {
                    style: t.fields,
                    className: "flexbox-fix"
                }, i.default.createElement("div", {
                    style: t.field
                }, i.default.createElement(u.EditableInput, {
                    style: {
                        input: t.input,
                        label: t.label
                    },
                    label: "hex",
                    value: this.props.hex,
                    onChange: this.handleChange
                }))) : "rgb" === this.state.view ? n = i.default.createElement("div", {
                    style: t.fields,
                    className: "flexbox-fix"
                }, i.default.createElement("div", {
                    style: t.field
                }, i.default.createElement(u.EditableInput, {
                    style: {
                        input: t.input,
                        label: t.label
                    },
                    label: "r",
                    value: this.props.rgb.r,
                    onChange: this.handleChange
                })), i.default.createElement("div", {
                    style: t.field
                }, i.default.createElement(u.EditableInput, {
                    style: {
                        input: t.input,
                        label: t.label
                    },
                    label: "g",
                    value: this.props.rgb.g,
                    onChange: this.handleChange
                })), i.default.createElement("div", {
                    style: t.field
                }, i.default.createElement(u.EditableInput, {
                    style: {
                        input: t.input,
                        label: t.label
                    },
                    label: "b",
                    value: this.props.rgb.b,
                    onChange: this.handleChange
                })), i.default.createElement("div", {
                    style: t.alpha
                }, i.default.createElement(u.EditableInput, {
                    style: {
                        input: t.input,
                        label: t.label
                    },
                    label: "a",
                    value: this.props.rgb.a,
                    arrowOffset: .01,
                    onChange: this.handleChange
                }))) : "hsl" === this.state.view && (n = i.default.createElement("div", {
                    style: t.fields,
                    className: "flexbox-fix"
                }, i.default.createElement("div", {
                    style: t.field
                }, i.default.createElement(u.EditableInput, {
                    style: {
                        input: t.input,
                        label: t.label
                    },
                    label: "h",
                    value: Math.round(this.props.hsl.h),
                    onChange: this.handleChange
                })), i.default.createElement("div", {
                    style: t.field
                }, i.default.createElement(u.EditableInput, {
                    style: {
                        input: t.input,
                        label: t.label
                    },
                    label: "s",
                    value: Math.round(100 * this.props.hsl.s) + "%",
                    onChange: this.handleChange
                })), i.default.createElement("div", {
                    style: t.field
                }, i.default.createElement(u.EditableInput, {
                    style: {
                        input: t.input,
                        label: t.label
                    },
                    label: "l",
                    value: Math.round(100 * this.props.hsl.l) + "%",
                    onChange: this.handleChange
                })), i.default.createElement("div", {
                    style: t.alpha
                }, i.default.createElement(u.EditableInput, {
                    style: {
                        input: t.input,
                        label: t.label
                    },
                    label: "a",
                    value: this.props.hsl.a,
                    arrowOffset: .01,
                    onChange: this.handleChange
                })))), i.default.createElement("div", {
                    style: t.wrap,
                    className: "flexbox-fix"
                }, n, i.default.createElement("div", {
                    style: t.toggle
                }, i.default.createElement("div", {
                    style: t.icon,
                    onClick: this.toggleViews,
                    ref: function(t) {
                        return e.icon = t
                    }
                }, i.default.createElement(l.default, {
                    style: t.svg,
                    onMouseOver: this.showHighlight,
                    onMouseEnter: this.showHighlight,
                    onMouseOut: this.hideHighlight
                }))))
            }
        }], [{
            key: "getDerivedStateFromProps",
            value: function(e, t) {
                return 1 !== e.hsl.a && "hex" === t.view ? {
                    view: "rgb"
                } : null
            }
        }]), t
    }(i.default.Component);
    f.defaultProps = {
        view: "hex"
    }, t.default = f
},
function(e, t) {
    e.exports = function(e) {
        return void 0 === e
    }
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, i = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        o = n(0),
        a = (r = o) && r.__esModule ? r : {
            default: r
        };
    t.default = function(e) {
        var t = e.fill,
            n = void 0 === t ? "currentColor" : t,
            r = e.width,
            o = void 0 === r ? 24 : r,
            s = e.height,
            u = void 0 === s ? 24 : s,
            l = e.style,
            c = void 0 === l ? {} : l,
            f = function(e, t) {
                var n = {};
                for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }(e, ["fill", "width", "height", "style"]);
        return a.default.createElement("svg", i({
            viewBox: "0 0 24 24",
            style: i({
                fill: n,
                width: o,
                height: u
            }, c)
        }, f), a.default.createElement("path", {
            d: "M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"
        }))
    }
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ChromePointer = void 0;
    var r = o(n(0)),
        i = o(n(62));

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var a = t.ChromePointer = function() {
        var e = (0, i.default)({
            default: {
                picker: {
                    width: "12px",
                    height: "12px",
                    borderRadius: "6px",
                    transform: "translate(-6px, -1px)",
                    backgroundColor: "rgb(248, 248, 248)",
                    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
                }
            }
        });
        return r.default.createElement("div", {
            style: e.picker
        })
    };
    t.default = a
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ChromePointerCircle = void 0;
    var r = o(n(0)),
        i = o(n(62));

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var a = t.ChromePointerCircle = function() {
        var e = (0, i.default)({
            default: {
                picker: {
                    width: "12px",
                    height: "12px",
                    borderRadius: "6px",
                    boxShadow: "inset 0 0 0 1px #fff",
                    transform: "translate(-6px, -6px)"
                }
            }
        });
        return r.default.createElement("div", {
            style: e.picker
        })
    };
    t.default = a
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Compact = void 0;
    var r = d(n(0)),
        i = d(n(70)),
        o = d(n(62)),
        a = d(n(208)),
        s = d(n(150)),
        u = d(n(169)),
        l = n(98),
        c = d(n(801)),
        f = d(n(802));

    function d(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var h = t.Compact = function(e) {
        var t = e.onChange,
            n = e.onSwatchHover,
            i = e.colors,
            d = e.hex,
            h = e.rgb,
            p = e.styles,
            g = void 0 === p ? {} : p,
            v = e.className,
            y = void 0 === v ? "" : v,
            m = (0, o.default)((0, s.default)({
                default: {
                    Compact: {
                        background: "#f6f6f6",
                        radius: "4px"
                    },
                    compact: {
                        paddingTop: "5px",
                        paddingLeft: "5px",
                        boxSizing: "initial",
                        width: "240px"
                    },
                    clear: {
                        clear: "both"
                    }
                }
            }, g)),
            b = function(e, n) {
                e.hex ? u.default.isValidHex(e.hex) && t({
                    hex: e.hex,
                    source: "hex"
                }, n) : t(e, n)
            };
        return r.default.createElement(l.Raised, {
            style: m.Compact,
            styles: g
        }, r.default.createElement("div", {
            style: m.compact,
            className: "compact-picker " + y
        }, r.default.createElement("div", null, (0, a.default)(i, (function(e) {
            return r.default.createElement(c.default, {
                key: e,
                color: e,
                active: e.toLowerCase() === d,
                onClick: b,
                onSwatchHover: n
            })
        })), r.default.createElement("div", {
            style: m.clear
        })), r.default.createElement(f.default, {
            hex: d,
            rgb: h,
            onChange: b
        })))
    };
    h.propTypes = {
        colors: i.default.arrayOf(i.default.string),
        styles: i.default.object
    }, h.defaultProps = {
        colors: ["#4D4D4D", "#999999", "#FFFFFF", "#F44E3B", "#FE9200", "#FCDC00", "#DBDF00", "#A4DD00", "#68CCCA", "#73D8FF", "#AEA1FF", "#FDA1FF", "#333333", "#808080", "#cccccc", "#D33115", "#E27300", "#FCC400", "#B0BC00", "#68BC00", "#16A5A5", "#009CE0", "#7B64FF", "#FA28FF", "#000000", "#666666", "#B3B3B3", "#9F0500", "#C45100", "#FB9E00", "#808900", "#194D33", "#0C797D", "#0062B1", "#653294", "#AB149E"],
        styles: {}
    }, t.default = (0, l.ColorWrap)(h)
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.CompactColor = void 0;
    var r = s(n(0)),
        i = s(n(62)),
        o = s(n(169)),
        a = n(98);

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var u = t.CompactColor = function(e) {
        var t = e.color,
            n = e.onClick,
            s = void 0 === n ? function() {} : n,
            u = e.onSwatchHover,
            l = e.active,
            c = (0, i.default)({
                default: {
                    color: {
                        background: t,
                        width: "15px",
                        height: "15px",
                        float: "left",
                        marginRight: "5px",
                        marginBottom: "5px",
                        position: "relative",
                        cursor: "pointer"
                    },
                    dot: {
                        absolute: "5px 5px 5px 5px",
                        background: o.default.getContrastingColor(t),
                        borderRadius: "50%",
                        opacity: "0"
                    }
                },
                active: {
                    dot: {
                        opacity: "1"
                    }
                },
                "color-#FFFFFF": {
                    color: {
                        boxShadow: "inset 0 0 0 1px #ddd"
                    },
                    dot: {
                        background: "#000"
                    }
                },
                transparent: {
                    dot: {
                        background: "#000"
                    }
                }
            }, {
                active: l,
                "color-#FFFFFF": "#FFFFFF" === t,
                transparent: "transparent" === t
            });
        return r.default.createElement(a.Swatch, {
            style: c.color,
            color: t,
            onClick: s,
            onHover: u,
            focusStyle: {
                boxShadow: "0 0 4px " + t
            }
        }, r.default.createElement("div", {
            style: c.dot
        }))
    };
    t.default = u
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.CompactFields = void 0;
    var r = a(n(0)),
        i = a(n(62)),
        o = n(98);

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var s = t.CompactFields = function(e) {
        var t = e.hex,
            n = e.rgb,
            a = e.onChange,
            s = (0, i.default)({
                default: {
                    fields: {
                        display: "flex",
                        paddingBottom: "6px",
                        paddingRight: "5px",
                        position: "relative"
                    },
                    active: {
                        position: "absolute",
                        top: "6px",
                        left: "5px",
                        height: "9px",
                        width: "9px",
                        background: t
                    },
                    HEXwrap: {
                        flex: "6",
                        position: "relative"
                    },
                    HEXinput: {
                        width: "80%",
                        padding: "0px",
                        paddingLeft: "20%",
                        border: "none",
                        outline: "none",
                        background: "none",
                        fontSize: "12px",
                        color: "#333",
                        height: "16px"
                    },
                    HEXlabel: {
                        display: "none"
                    },
                    RGBwrap: {
                        flex: "3",
                        position: "relative"
                    },
                    RGBinput: {
                        width: "70%",
                        padding: "0px",
                        paddingLeft: "30%",
                        border: "none",
                        outline: "none",
                        background: "none",
                        fontSize: "12px",
                        color: "#333",
                        height: "16px"
                    },
                    RGBlabel: {
                        position: "absolute",
                        top: "3px",
                        left: "0px",
                        lineHeight: "16px",
                        textTransform: "uppercase",
                        fontSize: "12px",
                        color: "#999"
                    }
                }
            }),
            u = function(e, t) {
                e.r || e.g || e.b ? a({
                    r: e.r || n.r,
                    g: e.g || n.g,
                    b: e.b || n.b,
                    source: "rgb"
                }, t) : a({
                    hex: e.hex,
                    source: "hex"
                }, t)
            };
        return r.default.createElement("div", {
            style: s.fields,
            className: "flexbox-fix"
        }, r.default.createElement("div", {
            style: s.active
        }), r.default.createElement(o.EditableInput, {
            style: {
                wrap: s.HEXwrap,
                input: s.HEXinput,
                label: s.HEXlabel
            },
            label: "hex",
            value: t,
            onChange: u
        }), r.default.createElement(o.EditableInput, {
            style: {
                wrap: s.RGBwrap,
                input: s.RGBinput,
                label: s.RGBlabel
            },
            label: "r",
            value: n.r,
            onChange: u
        }), r.default.createElement(o.EditableInput, {
            style: {
                wrap: s.RGBwrap,
                input: s.RGBinput,
                label: s.RGBlabel
            },
            label: "g",
            value: n.g,
            onChange: u
        }), r.default.createElement(o.EditableInput, {
            style: {
                wrap: s.RGBwrap,
                input: s.RGBinput,
                label: s.RGBlabel
            },
            label: "b",
            value: n.b,
            onChange: u
        }))
    };
    t.default = s
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Github = void 0;
    var r = c(n(0)),
        i = c(n(70)),
        o = c(n(62)),
        a = c(n(208)),
        s = c(n(150)),
        u = n(98),
        l = c(n(804));

    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var f = t.Github = function(e) {
        var t = e.width,
            n = e.colors,
            i = e.onChange,
            u = e.onSwatchHover,
            c = e.triangle,
            f = e.styles,
            d = void 0 === f ? {} : f,
            h = e.className,
            p = void 0 === h ? "" : h,
            g = (0, o.default)((0, s.default)({
                default: {
                    card: {
                        width: t,
                        background: "#fff",
                        border: "1px solid rgba(0,0,0,0.2)",
                        boxShadow: "0 3px 12px rgba(0,0,0,0.15)",
                        borderRadius: "4px",
                        position: "relative",
                        padding: "5px",
                        display: "flex",
                        flexWrap: "wrap"
                    },
                    triangle: {
                        position: "absolute",
                        border: "7px solid transparent",
                        borderBottomColor: "#fff"
                    },
                    triangleShadow: {
                        position: "absolute",
                        border: "8px solid transparent",
                        borderBottomColor: "rgba(0,0,0,0.15)"
                    }
                },
                "hide-triangle": {
                    triangle: {
                        display: "none"
                    },
                    triangleShadow: {
                        display: "none"
                    }
                },
                "top-left-triangle": {
                    triangle: {
                        top: "-14px",
                        left: "10px"
                    },
                    triangleShadow: {
                        top: "-16px",
                        left: "9px"
                    }
                },
                "top-right-triangle": {
                    triangle: {
                        top: "-14px",
                        right: "10px"
                    },
                    triangleShadow: {
                        top: "-16px",
                        right: "9px"
                    }
                },
                "bottom-left-triangle": {
                    triangle: {
                        top: "35px",
                        left: "10px",
                        transform: "rotate(180deg)"
                    },
                    triangleShadow: {
                        top: "37px",
                        left: "9px",
                        transform: "rotate(180deg)"
                    }
                },
                "bottom-right-triangle": {
                    triangle: {
                        top: "35px",
                        right: "10px",
                        transform: "rotate(180deg)"
                    },
                    triangleShadow: {
                        top: "37px",
                        right: "9px",
                        transform: "rotate(180deg)"
                    }
                }
            }, d), {
                "hide-triangle": "hide" === c,
                "top-left-triangle": "top-left" === c,
                "top-right-triangle": "top-right" === c,
                "bottom-left-triangle": "bottom-left" === c,
                "bottom-right-triangle": "bottom-right" === c
            }),
            v = function(e, t) {
                return i({
                    hex: e,
                    source: "hex"
                }, t)
            };
        return r.default.createElement("div", {
            style: g.card,
            className: "github-picker " + p
        }, r.default.createElement("div", {
            style: g.triangleShadow
        }), r.default.createElement("div", {
            style: g.triangle
        }), (0, a.default)(n, (function(e) {
            return r.default.createElement(l.default, {
                color: e,
                key: e,
                onClick: v,
                onSwatchHover: u
            })
        })))
    };
    f.propTypes = {
        width: i.default.oneOfType([i.default.string, i.default.number]),
        colors: i.default.arrayOf(i.default.string),
        triangle: i.default.oneOf(["hide", "top-left", "top-right", "bottom-left", "bottom-right"]),
        styles: i.default.object
    }, f.defaultProps = {
        width: 200,
        colors: ["#B80000", "#DB3E00", "#FCCB00", "#008B02", "#006B76", "#1273DE", "#004DCF", "#5300EB", "#EB9694", "#FAD0C3", "#FEF3BD", "#C1E1C5", "#BEDADC", "#C4DEF6", "#BED3F3", "#D4C4FB"],
        triangle: "top-left",
        styles: {}
    }, t.default = (0, u.ColorWrap)(f)
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.GithubSwatch = void 0;
    var r = s(n(0)),
        i = n(62),
        o = s(i),
        a = n(98);

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var u = t.GithubSwatch = function(e) {
        var t = e.hover,
            n = e.color,
            i = e.onClick,
            s = e.onSwatchHover,
            u = {
                position: "relative",
                zIndex: "2",
                outline: "2px solid #fff",
                boxShadow: "0 0 5px 2px rgba(0,0,0,0.25)"
            },
            l = (0, o.default)({
                default: {
                    swatch: {
                        width: "25px",
                        height: "25px",
                        fontSize: "0"
                    }
                },
                hover: {
                    swatch: u
                }
            }, {
                hover: t
            });
        return r.default.createElement("div", {
            style: l.swatch
        }, r.default.createElement(a.Swatch, {
            color: n,
            onClick: i,
            onHover: s,
            focusStyle: u
        }))
    };
    t.default = (0, i.handleHover)(u)
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HuePicker = void 0;
    var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        i = c(n(0)),
        o = c(n(70)),
        a = c(n(62)),
        s = c(n(150)),
        u = n(98),
        l = c(n(806));

    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var f = t.HuePicker = function(e) {
        var t = e.width,
            n = e.height,
            o = e.onChange,
            l = e.hsl,
            c = e.direction,
            f = e.pointer,
            d = e.styles,
            h = void 0 === d ? {} : d,
            p = e.className,
            g = void 0 === p ? "" : p,
            v = (0, a.default)((0, s.default)({
                default: {
                    picker: {
                        position: "relative",
                        width: t,
                        height: n
                    },
                    hue: {
                        radius: "2px"
                    }
                }
            }, h));
        return i.default.createElement("div", {
            style: v.picker,
            className: "hue-picker " + g
        }, i.default.createElement(u.Hue, r({}, v.hue, {
            hsl: l,
            pointer: f,
            onChange: function(e) {
                return o({
                    a: 1,
                    h: e.h,
                    l: .5,
                    s: 1
                })
            },
            direction: c
        })))
    };
    f.propTypes = {
        styles: o.default.object
    }, f.defaultProps = {
        width: "316px",
        height: "16px",
        direction: "horizontal",
        pointer: l.default,
        styles: {}
    }, t.default = (0, u.ColorWrap)(f)
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.SliderPointer = void 0;
    var r = o(n(0)),
        i = o(n(62));

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var a = t.SliderPointer = function(e) {
        var t = e.direction,
            n = (0, i.default)({
                default: {
                    picker: {
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        transform: "translate(-9px, -1px)",
                        backgroundColor: "rgb(248, 248, 248)",
                        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
                    }
                },
                vertical: {
                    picker: {
                        transform: "translate(-3px, -9px)"
                    }
                }
            }, {
                vertical: "vertical" === t
            });
        return r.default.createElement("div", {
            style: n.picker
        })
    };
    t.default = a
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Material = void 0;
    var r = u(n(0)),
        i = u(n(62)),
        o = u(n(150)),
        a = u(n(169)),
        s = n(98);

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var l = t.Material = function(e) {
        var t = e.onChange,
            n = e.hex,
            u = e.rgb,
            l = e.styles,
            c = void 0 === l ? {} : l,
            f = e.className,
            d = void 0 === f ? "" : f,
            h = (0, i.default)((0, o.default)({
                default: {
                    material: {
                        width: "98px",
                        height: "98px",
                        padding: "16px",
                        fontFamily: "Roboto"
                    },
                    HEXwrap: {
                        position: "relative"
                    },
                    HEXinput: {
                        width: "100%",
                        marginTop: "12px",
                        fontSize: "15px",
                        color: "#333",
                        padding: "0px",
                        border: "0px",
                        borderBottom: "2px solid " + n,
                        outline: "none",
                        height: "30px"
                    },
                    HEXlabel: {
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        fontSize: "11px",
                        color: "#999999",
                        textTransform: "capitalize"
                    },
                    Hex: {
                        style: {}
                    },
                    RGBwrap: {
                        position: "relative"
                    },
                    RGBinput: {
                        width: "100%",
                        marginTop: "12px",
                        fontSize: "15px",
                        color: "#333",
                        padding: "0px",
                        border: "0px",
                        borderBottom: "1px solid #eee",
                        outline: "none",
                        height: "30px"
                    },
                    RGBlabel: {
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        fontSize: "11px",
                        color: "#999999",
                        textTransform: "capitalize"
                    },
                    split: {
                        display: "flex",
                        marginRight: "-10px",
                        paddingTop: "11px"
                    },
                    third: {
                        flex: "1",
                        paddingRight: "10px"
                    }
                }
            }, c)),
            p = function(e, n) {
                e.hex ? a.default.isValidHex(e.hex) && t({
                    hex: e.hex,
                    source: "hex"
                }, n) : (e.r || e.g || e.b) && t({
                    r: e.r || u.r,
                    g: e.g || u.g,
                    b: e.b || u.b,
                    source: "rgb"
                }, n)
            };
        return r.default.createElement(s.Raised, {
            styles: c
        }, r.default.createElement("div", {
            style: h.material,
            className: "material-picker " + d
        }, r.default.createElement(s.EditableInput, {
            style: {
                wrap: h.HEXwrap,
                input: h.HEXinput,
                label: h.HEXlabel
            },
            label: "hex",
            value: n,
            onChange: p
        }), r.default.createElement("div", {
            style: h.split,
            className: "flexbox-fix"
        }, r.default.createElement("div", {
            style: h.third
        }, r.default.createElement(s.EditableInput, {
            style: {
                wrap: h.RGBwrap,
                input: h.RGBinput,
                label: h.RGBlabel
            },
            label: "r",
            value: u.r,
            onChange: p
        })), r.default.createElement("div", {
            style: h.third
        }, r.default.createElement(s.EditableInput, {
            style: {
                wrap: h.RGBwrap,
                input: h.RGBinput,
                label: h.RGBlabel
            },
            label: "g",
            value: u.g,
            onChange: p
        })), r.default.createElement("div", {
            style: h.third
        }, r.default.createElement(s.EditableInput, {
            style: {
                wrap: h.RGBwrap,
                input: h.RGBinput,
                label: h.RGBlabel
            },
            label: "b",
            value: u.b,
            onChange: p
        })))))
    };
    t.default = (0, s.ColorWrap)(l)
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Photoshop = void 0;
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        i = p(n(0)),
        o = p(n(70)),
        a = p(n(62)),
        s = p(n(150)),
        u = n(98),
        l = p(n(809)),
        c = p(n(810)),
        f = p(n(811)),
        d = p(n(812)),
        h = p(n(813));

    function p(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var g = t.Photoshop = function(e) {
        function t(e) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return n.state = {
                currentColor: e.hex
            }, n
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, e), r(t, [{
            key: "render",
            value: function() {
                var e = this.props,
                    t = e.styles,
                    n = void 0 === t ? {} : t,
                    r = e.className,
                    o = void 0 === r ? "" : r,
                    p = (0, a.default)((0, s.default)({
                        default: {
                            picker: {
                                background: "#DCDCDC",
                                borderRadius: "4px",
                                boxShadow: "0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15)",
                                boxSizing: "initial",
                                width: "513px"
                            },
                            head: {
                                backgroundImage: "linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%)",
                                borderBottom: "1px solid #B1B1B1",
                                boxShadow: "inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02)",
                                height: "23px",
                                lineHeight: "24px",
                                borderRadius: "4px 4px 0 0",
                                fontSize: "13px",
                                color: "#4D4D4D",
                                textAlign: "center"
                            },
                            body: {
                                padding: "15px 15px 0",
                                display: "flex"
                            },
                            saturation: {
                                width: "256px",
                                height: "256px",
                                position: "relative",
                                border: "2px solid #B3B3B3",
                                borderBottom: "2px solid #F0F0F0",
                                overflow: "hidden"
                            },
                            hue: {
                                position: "relative",
                                height: "256px",
                                width: "19px",
                                marginLeft: "10px",
                                border: "2px solid #B3B3B3",
                                borderBottom: "2px solid #F0F0F0"
                            },
                            controls: {
                                width: "180px",
                                marginLeft: "10px"
                            },
                            top: {
                                display: "flex"
                            },
                            previews: {
                                width: "60px"
                            },
                            actions: {
                                flex: "1",
                                marginLeft: "20px"
                            }
                        }
                    }, n));
                return i.default.createElement("div", {
                    style: p.picker,
                    className: "photoshop-picker " + o
                }, i.default.createElement("div", {
                    style: p.head
                }, this.props.header), i.default.createElement("div", {
                    style: p.body,
                    className: "flexbox-fix"
                }, i.default.createElement("div", {
                    style: p.saturation
                }, i.default.createElement(u.Saturation, {
                    hsl: this.props.hsl,
                    hsv: this.props.hsv,
                    pointer: c.default,
                    onChange: this.props.onChange
                })), i.default.createElement("div", {
                    style: p.hue
                }, i.default.createElement(u.Hue, {
                    direction: "vertical",
                    hsl: this.props.hsl,
                    pointer: f.default,
                    onChange: this.props.onChange
                })), i.default.createElement("div", {
                    style: p.controls
                }, i.default.createElement("div", {
                    style: p.top,
                    className: "flexbox-fix"
                }, i.default.createElement("div", {
                    style: p.previews
                }, i.default.createElement(h.default, {
                    rgb: this.props.rgb,
                    currentColor: this.state.currentColor
                })), i.default.createElement("div", {
                    style: p.actions
                }, i.default.createElement(d.default, {
                    label: "OK",
                    onClick: this.props.onAccept,
                    active: !0
                }), i.default.createElement(d.default, {
                    label: "Cancel",
                    onClick: this.props.onCancel
                }), i.default.createElement(l.default, {
                    onChange: this.props.onChange,
                    rgb: this.props.rgb,
                    hsv: this.props.hsv,
                    hex: this.props.hex
                }))))))
            }
        }]), t
    }(i.default.Component);
    g.propTypes = {
        header: o.default.string,
        styles: o.default.object
    }, g.defaultProps = {
        header: "Color Picker",
        styles: {}
    }, t.default = (0, u.ColorWrap)(g)
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.PhotoshopPicker = void 0;
    var r = s(n(0)),
        i = s(n(62)),
        o = s(n(169)),
        a = n(98);

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var u = t.PhotoshopPicker = function(e) {
        var t = e.onChange,
            n = e.rgb,
            s = e.hsv,
            u = e.hex,
            l = (0, i.default)({
                default: {
                    fields: {
                        paddingTop: "5px",
                        paddingBottom: "9px",
                        width: "80px",
                        position: "relative"
                    },
                    divider: {
                        height: "5px"
                    },
                    RGBwrap: {
                        position: "relative"
                    },
                    RGBinput: {
                        marginLeft: "40%",
                        width: "40%",
                        height: "18px",
                        border: "1px solid #888888",
                        boxShadow: "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",
                        marginBottom: "5px",
                        fontSize: "13px",
                        paddingLeft: "3px",
                        marginRight: "10px"
                    },
                    RGBlabel: {
                        left: "0px",
                        width: "34px",
                        textTransform: "uppercase",
                        fontSize: "13px",
                        height: "18px",
                        lineHeight: "22px",
                        position: "absolute"
                    },
                    HEXwrap: {
                        position: "relative"
                    },
                    HEXinput: {
                        marginLeft: "20%",
                        width: "80%",
                        height: "18px",
                        border: "1px solid #888888",
                        boxShadow: "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",
                        marginBottom: "6px",
                        fontSize: "13px",
                        paddingLeft: "3px"
                    },
                    HEXlabel: {
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        width: "14px",
                        textTransform: "uppercase",
                        fontSize: "13px",
                        height: "18px",
                        lineHeight: "22px"
                    },
                    fieldSymbols: {
                        position: "absolute",
                        top: "5px",
                        right: "-7px",
                        fontSize: "13px"
                    },
                    symbol: {
                        height: "20px",
                        lineHeight: "22px",
                        paddingBottom: "7px"
                    }
                }
            }),
            c = function(e, r) {
                e["#"] ? o.default.isValidHex(e["#"]) && t({
                    hex: e["#"],
                    source: "hex"
                }, r) : e.r || e.g || e.b ? t({
                    r: e.r || n.r,
                    g: e.g || n.g,
                    b: e.b || n.b,
                    source: "rgb"
                }, r) : (e.h || e.s || e.v) && t({
                    h: e.h || s.h,
                    s: e.s || s.s,
                    v: e.v || s.v,
                    source: "hsv"
                }, r)
            };
        return r.default.createElement("div", {
            style: l.fields
        }, r.default.createElement(a.EditableInput, {
            style: {
                wrap: l.RGBwrap,
                input: l.RGBinput,
                label: l.RGBlabel
            },
            label: "h",
            value: Math.round(s.h),
            onChange: c
        }), r.default.createElement(a.EditableInput, {
            style: {
                wrap: l.RGBwrap,
                input: l.RGBinput,
                label: l.RGBlabel
            },
            label: "s",
            value: Math.round(100 * s.s),
            onChange: c
        }), r.default.createElement(a.EditableInput, {
            style: {
                wrap: l.RGBwrap,
                input: l.RGBinput,
                label: l.RGBlabel
            },
            label: "v",
            value: Math.round(100 * s.v),
            onChange: c
        }), r.default.createElement("div", {
            style: l.divider
        }), r.default.createElement(a.EditableInput, {
            style: {
                wrap: l.RGBwrap,
                input: l.RGBinput,
                label: l.RGBlabel
            },
            label: "r",
            value: n.r,
            onChange: c
        }), r.default.createElement(a.EditableInput, {
            style: {
                wrap: l.RGBwrap,
                input: l.RGBinput,
                label: l.RGBlabel
            },
            label: "g",
            value: n.g,
            onChange: c
        }), r.default.createElement(a.EditableInput, {
            style: {
                wrap: l.RGBwrap,
                input: l.RGBinput,
                label: l.RGBlabel
            },
            label: "b",
            value: n.b,
            onChange: c
        }), r.default.createElement("div", {
            style: l.divider
        }), r.default.createElement(a.EditableInput, {
            style: {
                wrap: l.HEXwrap,
                input: l.HEXinput,
                label: l.HEXlabel
            },
            label: "#",
            value: u.replace("#", ""),
            onChange: c
        }), r.default.createElement("div", {
            style: l.fieldSymbols
        }, r.default.createElement("div", {
            style: l.symbol
        }, "°"), r.default.createElement("div", {
            style: l.symbol
        }, "%"), r.default.createElement("div", {
            style: l.symbol
        }, "%")))
    };
    t.default = u
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.PhotoshopPointerCircle = void 0;
    var r = o(n(0)),
        i = o(n(62));

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var a = t.PhotoshopPointerCircle = function(e) {
        var t = e.hsl,
            n = (0, i.default)({
                default: {
                    picker: {
                        width: "12px",
                        height: "12px",
                        borderRadius: "6px",
                        boxShadow: "inset 0 0 0 1px #fff",
                        transform: "translate(-6px, -6px)"
                    }
                },
                "black-outline": {
                    picker: {
                        boxShadow: "inset 0 0 0 1px #000"
                    }
                }
            }, {
                "black-outline": t.l > .5
            });
        return r.default.createElement("div", {
            style: n.picker
        })
    };
    t.default = a
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.PhotoshopPointerCircle = void 0;
    var r = o(n(0)),
        i = o(n(62));

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var a = t.PhotoshopPointerCircle = function() {
        var e = (0, i.default)({
            default: {
                triangle: {
                    width: 0,
                    height: 0,
                    borderStyle: "solid",
                    borderWidth: "4px 0 4px 6px",
                    borderColor: "transparent transparent transparent #fff",
                    position: "absolute",
                    top: "1px",
                    left: "1px"
                },
                triangleBorder: {
                    width: 0,
                    height: 0,
                    borderStyle: "solid",
                    borderWidth: "5px 0 5px 8px",
                    borderColor: "transparent transparent transparent #555"
                },
                left: {
                    Extend: "triangleBorder",
                    transform: "translate(-13px, -4px)"
                },
                leftInside: {
                    Extend: "triangle",
                    transform: "translate(-8px, -5px)"
                },
                right: {
                    Extend: "triangleBorder",
                    transform: "translate(20px, -14px) rotate(180deg)"
                },
                rightInside: {
                    Extend: "triangle",
                    transform: "translate(-8px, -5px)"
                }
            }
        });
        return r.default.createElement("div", {
            style: e.pointer
        }, r.default.createElement("div", {
            style: e.left
        }, r.default.createElement("div", {
            style: e.leftInside
        })), r.default.createElement("div", {
            style: e.right
        }, r.default.createElement("div", {
            style: e.rightInside
        })))
    };
    t.default = a
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.PhotoshopButton = void 0;
    var r = o(n(0)),
        i = o(n(62));

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var a = t.PhotoshopButton = function(e) {
        var t = e.onClick,
            n = e.label,
            o = e.children,
            a = e.active,
            s = (0, i.default)({
                default: {
                    button: {
                        backgroundImage: "linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%)",
                        border: "1px solid #878787",
                        borderRadius: "2px",
                        height: "20px",
                        boxShadow: "0 1px 0 0 #EAEAEA",
                        fontSize: "14px",
                        color: "#000",
                        lineHeight: "20px",
                        textAlign: "center",
                        marginBottom: "10px",
                        cursor: "pointer"
                    }
                },
                active: {
                    button: {
                        boxShadow: "0 0 0 1px #878787"
                    }
                }
            }, {
                active: a
            });
        return r.default.createElement("div", {
            style: s.button,
            onClick: t
        }, n || o)
    };
    t.default = a
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.PhotoshopPreviews = void 0;
    var r = o(n(0)),
        i = o(n(62));

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var a = t.PhotoshopPreviews = function(e) {
        var t = e.rgb,
            n = e.currentColor,
            o = (0, i.default)({
                default: {
                    swatches: {
                        border: "1px solid #B3B3B3",
                        borderBottom: "1px solid #F0F0F0",
                        marginBottom: "2px",
                        marginTop: "1px"
                    },
                    new: {
                        height: "34px",
                        background: "rgb(" + t.r + "," + t.g + ", " + t.b + ")",
                        boxShadow: "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000"
                    },
                    current: {
                        height: "34px",
                        background: n,
                        boxShadow: "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000"
                    },
                    label: {
                        fontSize: "14px",
                        color: "#000",
                        textAlign: "center"
                    }
                }
            });
        return r.default.createElement("div", null, r.default.createElement("div", {
            style: o.label
        }, "new"), r.default.createElement("div", {
            style: o.swatches
        }, r.default.createElement("div", {
            style: o.new
        }), r.default.createElement("div", {
            style: o.current
        })), r.default.createElement("div", {
            style: o.label
        }, "current"))
    };
    t.default = a
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Sketch = void 0;
    var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        i = f(n(0)),
        o = f(n(70)),
        a = f(n(62)),
        s = f(n(150)),
        u = n(98),
        l = f(n(815)),
        c = f(n(816));

    function f(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var d = t.Sketch = function(e) {
        var t = e.width,
            n = e.rgb,
            o = e.hex,
            f = e.hsv,
            d = e.hsl,
            h = e.onChange,
            p = e.onSwatchHover,
            g = e.disableAlpha,
            v = e.presetColors,
            y = e.renderers,
            m = e.styles,
            b = void 0 === m ? {} : m,
            _ = e.className,
            w = void 0 === _ ? "" : _,
            x = (0, a.default)((0, s.default)({
                default: r({
                    picker: {
                        width: t,
                        padding: "10px 10px 0",
                        boxSizing: "initial",
                        background: "#fff",
                        borderRadius: "4px",
                        boxShadow: "0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)"
                    },
                    saturation: {
                        width: "100%",
                        paddingBottom: "75%",
                        position: "relative",
                        overflow: "hidden"
                    },
                    Saturation: {
                        radius: "3px",
                        shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
                    },
                    controls: {
                        display: "flex"
                    },
                    sliders: {
                        padding: "4px 0",
                        flex: "1"
                    },
                    color: {
                        width: "24px",
                        height: "24px",
                        position: "relative",
                        marginTop: "4px",
                        marginLeft: "4px",
                        borderRadius: "3px"
                    },
                    activeColor: {
                        absolute: "0px 0px 0px 0px",
                        borderRadius: "2px",
                        background: "rgba(" + n.r + "," + n.g + "," + n.b + "," + n.a + ")",
                        boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
                    },
                    hue: {
                        position: "relative",
                        height: "10px",
                        overflow: "hidden"
                    },
                    Hue: {
                        radius: "2px",
                        shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
                    },
                    alpha: {
                        position: "relative",
                        height: "10px",
                        marginTop: "4px",
                        overflow: "hidden"
                    },
                    Alpha: {
                        radius: "2px",
                        shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
                    }
                }, b),
                disableAlpha: {
                    color: {
                        height: "10px"
                    },
                    hue: {
                        height: "10px"
                    },
                    alpha: {
                        display: "none"
                    }
                }
            }, b), {
                disableAlpha: g
            });
        return i.default.createElement("div", {
            style: x.picker,
            className: "sketch-picker " + w
        }, i.default.createElement("div", {
            style: x.saturation
        }, i.default.createElement(u.Saturation, {
            style: x.Saturation,
            hsl: d,
            hsv: f,
            onChange: h
        })), i.default.createElement("div", {
            style: x.controls,
            className: "flexbox-fix"
        }, i.default.createElement("div", {
            style: x.sliders
        }, i.default.createElement("div", {
            style: x.hue
        }, i.default.createElement(u.Hue, {
            style: x.Hue,
            hsl: d,
            onChange: h
        })), i.default.createElement("div", {
            style: x.alpha
        }, i.default.createElement(u.Alpha, {
            style: x.Alpha,
            rgb: n,
            hsl: d,
            renderers: y,
            onChange: h
        }))), i.default.createElement("div", {
            style: x.color
        }, i.default.createElement(u.Checkboard, null), i.default.createElement("div", {
            style: x.activeColor
        }))), i.default.createElement(l.default, {
            rgb: n,
            hsl: d,
            hex: o,
            onChange: h,
            disableAlpha: g
        }), i.default.createElement(c.default, {
            colors: v,
            onClick: h,
            onSwatchHover: p
        }))
    };
    d.propTypes = {
        disableAlpha: o.default.bool,
        width: o.default.oneOfType([o.default.string, o.default.number]),
        styles: o.default.object
    }, d.defaultProps = {
        disableAlpha: !1,
        width: 200,
        styles: {},
        presetColors: ["#D0021B", "#F5A623", "#F8E71C", "#8B572A", "#7ED321", "#417505", "#BD10E0", "#9013FE", "#4A90E2", "#50E3C2", "#B8E986", "#000000", "#4A4A4A", "#9B9B9B", "#FFFFFF"]
    }, t.default = (0, u.ColorWrap)(d)
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.SketchFields = void 0;
    var r = s(n(0)),
        i = s(n(62)),
        o = s(n(169)),
        a = n(98);

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var u = t.SketchFields = function(e) {
        var t = e.onChange,
            n = e.rgb,
            s = e.hsl,
            u = e.hex,
            l = e.disableAlpha,
            c = (0, i.default)({
                default: {
                    fields: {
                        display: "flex",
                        paddingTop: "4px"
                    },
                    single: {
                        flex: "1",
                        paddingLeft: "6px"
                    },
                    alpha: {
                        flex: "1",
                        paddingLeft: "6px"
                    },
                    double: {
                        flex: "2"
                    },
                    input: {
                        width: "80%",
                        padding: "4px 10% 3px",
                        border: "none",
                        boxShadow: "inset 0 0 0 1px #ccc",
                        fontSize: "11px"
                    },
                    label: {
                        display: "block",
                        textAlign: "center",
                        fontSize: "11px",
                        color: "#222",
                        paddingTop: "3px",
                        paddingBottom: "4px",
                        textTransform: "capitalize"
                    }
                },
                disableAlpha: {
                    alpha: {
                        display: "none"
                    }
                }
            }, {
                disableAlpha: l
            }),
            f = function(e, r) {
                e.hex ? o.default.isValidHex(e.hex) && t({
                    hex: e.hex,
                    source: "hex"
                }, r) : e.r || e.g || e.b ? t({
                    r: e.r || n.r,
                    g: e.g || n.g,
                    b: e.b || n.b,
                    a: n.a,
                    source: "rgb"
                }, r) : e.a && (e.a < 0 ? e.a = 0 : e.a > 100 && (e.a = 100), e.a /= 100, t({
                    h: s.h,
                    s: s.s,
                    l: s.l,
                    a: e.a,
                    source: "rgb"
                }, r))
            };
        return r.default.createElement("div", {
            style: c.fields,
            className: "flexbox-fix"
        }, r.default.createElement("div", {
            style: c.double
        }, r.default.createElement(a.EditableInput, {
            style: {
                input: c.input,
                label: c.label
            },
            label: "hex",
            value: u.replace("#", ""),
            onChange: f
        })), r.default.createElement("div", {
            style: c.single
        }, r.default.createElement(a.EditableInput, {
            style: {
                input: c.input,
                label: c.label
            },
            label: "r",
            value: n.r,
            onChange: f,
            dragLabel: "true",
            dragMax: "255"
        })), r.default.createElement("div", {
            style: c.single
        }, r.default.createElement(a.EditableInput, {
            style: {
                input: c.input,
                label: c.label
            },
            label: "g",
            value: n.g,
            onChange: f,
            dragLabel: "true",
            dragMax: "255"
        })), r.default.createElement("div", {
            style: c.single
        }, r.default.createElement(a.EditableInput, {
            style: {
                input: c.input,
                label: c.label
            },
            label: "b",
            value: n.b,
            onChange: f,
            dragLabel: "true",
            dragMax: "255"
        })), r.default.createElement("div", {
            style: c.alpha
        }, r.default.createElement(a.EditableInput, {
            style: {
                input: c.input,
                label: c.label
            },
            label: "a",
            value: Math.round(100 * n.a),
            onChange: f,
            dragLabel: "true",
            dragMax: "100"
        })))
    };
    t.default = u
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.SketchPresetColors = void 0;
    var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        i = u(n(0)),
        o = u(n(70)),
        a = u(n(62)),
        s = n(98);

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var l = t.SketchPresetColors = function(e) {
        var t = e.colors,
            n = e.onClick,
            o = void 0 === n ? function() {} : n,
            u = e.onSwatchHover,
            l = (0, a.default)({
                default: {
                    colors: {
                        margin: "0 -10px",
                        padding: "10px 0 0 10px",
                        borderTop: "1px solid #eee",
                        display: "flex",
                        flexWrap: "wrap",
                        position: "relative"
                    },
                    swatchWrap: {
                        width: "16px",
                        height: "16px",
                        margin: "0 10px 10px 0"
                    },
                    swatch: {
                        borderRadius: "3px",
                        boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15)"
                    }
                },
                "no-presets": {
                    colors: {
                        display: "none"
                    }
                }
            }, {
                "no-presets": !t || !t.length
            }),
            c = function(e, t) {
                o({
                    hex: e,
                    source: "hex"
                }, t)
            };
        return i.default.createElement("div", {
            style: l.colors,
            className: "flexbox-fix"
        }, t.map((function(e) {
            var t = "string" == typeof e ? {
                    color: e
                } : e,
                n = "" + t.color + (t.title || "");
            return i.default.createElement("div", {
                key: n,
                style: l.swatchWrap
            }, i.default.createElement(s.Swatch, r({}, t, {
                style: l.swatch,
                onClick: c,
                onHover: u,
                focusStyle: {
                    boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px " + t.color
                }
            })))
        })))
    };
    l.propTypes = {
        colors: o.default.arrayOf(o.default.oneOfType([o.default.string, o.default.shape({
            color: o.default.string,
            title: o.default.string
        })])).isRequired
    }, t.default = l
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Slider = void 0;
    var r = c(n(0)),
        i = c(n(70)),
        o = c(n(62)),
        a = c(n(150)),
        s = n(98),
        u = c(n(818)),
        l = c(n(820));

    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var f = t.Slider = function(e) {
        var t = e.hsl,
            n = e.onChange,
            i = e.pointer,
            l = e.styles,
            c = void 0 === l ? {} : l,
            f = e.className,
            d = void 0 === f ? "" : f,
            h = (0, o.default)((0, a.default)({
                default: {
                    hue: {
                        height: "12px",
                        position: "relative"
                    },
                    Hue: {
                        radius: "2px"
                    }
                }
            }, c));
        return r.default.createElement("div", {
            style: h.wrap || {},
            className: "slider-picker " + d
        }, r.default.createElement("div", {
            style: h.hue
        }, r.default.createElement(s.Hue, {
            style: h.Hue,
            hsl: t,
            pointer: i,
            onChange: n
        })), r.default.createElement("div", {
            style: h.swatches
        }, r.default.createElement(u.default, {
            hsl: t,
            onClick: n
        })))
    };
    f.propTypes = {
        styles: i.default.object
    }, f.defaultProps = {
        pointer: l.default,
        styles: {}
    }, t.default = (0, s.ColorWrap)(f)
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.SliderSwatches = void 0;
    var r = a(n(0)),
        i = a(n(62)),
        o = a(n(819));

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var s = t.SliderSwatches = function(e) {
        var t = e.onClick,
            n = e.hsl,
            a = (0, i.default)({
                default: {
                    swatches: {
                        marginTop: "20px"
                    },
                    swatch: {
                        boxSizing: "border-box",
                        width: "20%",
                        paddingRight: "1px",
                        float: "left"
                    },
                    clear: {
                        clear: "both"
                    }
                }
            });
        return r.default.createElement("div", {
            style: a.swatches
        }, r.default.createElement("div", {
            style: a.swatch
        }, r.default.createElement(o.default, {
            hsl: n,
            offset: ".80",
            active: Math.abs(n.l - .8) < .1 && Math.abs(n.s - .5) < .1,
            onClick: t,
            first: !0
        })), r.default.createElement("div", {
            style: a.swatch
        }, r.default.createElement(o.default, {
            hsl: n,
            offset: ".65",
            active: Math.abs(n.l - .65) < .1 && Math.abs(n.s - .5) < .1,
            onClick: t
        })), r.default.createElement("div", {
            style: a.swatch
        }, r.default.createElement(o.default, {
            hsl: n,
            offset: ".50",
            active: Math.abs(n.l - .5) < .1 && Math.abs(n.s - .5) < .1,
            onClick: t
        })), r.default.createElement("div", {
            style: a.swatch
        }, r.default.createElement(o.default, {
            hsl: n,
            offset: ".35",
            active: Math.abs(n.l - .35) < .1 && Math.abs(n.s - .5) < .1,
            onClick: t
        })), r.default.createElement("div", {
            style: a.swatch
        }, r.default.createElement(o.default, {
            hsl: n,
            offset: ".20",
            active: Math.abs(n.l - .2) < .1 && Math.abs(n.s - .5) < .1,
            onClick: t,
            last: !0
        })), r.default.createElement("div", {
            style: a.clear
        }))
    };
    t.default = s
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.SliderSwatch = void 0;
    var r = o(n(0)),
        i = o(n(62));

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var a = t.SliderSwatch = function(e) {
        var t = e.hsl,
            n = e.offset,
            o = e.onClick,
            a = void 0 === o ? function() {} : o,
            s = e.active,
            u = e.first,
            l = e.last,
            c = (0, i.default)({
                default: {
                    swatch: {
                        height: "12px",
                        background: "hsl(" + t.h + ", 50%, " + 100 * n + "%)",
                        cursor: "pointer"
                    }
                },
                first: {
                    swatch: {
                        borderRadius: "2px 0 0 2px"
                    }
                },
                last: {
                    swatch: {
                        borderRadius: "0 2px 2px 0"
                    }
                },
                active: {
                    swatch: {
                        transform: "scaleY(1.8)",
                        borderRadius: "3.6px/2px"
                    }
                }
            }, {
                active: s,
                first: u,
                last: l
            });
        return r.default.createElement("div", {
            style: c.swatch,
            onClick: function(e) {
                return a({
                    h: t.h,
                    s: .5,
                    l: n,
                    source: "hsl"
                }, e)
            }
        })
    };
    t.default = a
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.SliderPointer = void 0;
    var r = o(n(0)),
        i = o(n(62));

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var a = t.SliderPointer = function() {
        var e = (0, i.default)({
            default: {
                picker: {
                    width: "14px",
                    height: "14px",
                    borderRadius: "6px",
                    transform: "translate(-7px, -1px)",
                    backgroundColor: "rgb(248, 248, 248)",
                    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
                }
            }
        });
        return r.default.createElement("div", {
            style: e.picker
        })
    };
    t.default = a
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Swatches = void 0;
    var r = f(n(0)),
        i = f(n(70)),
        o = f(n(62)),
        a = f(n(208)),
        s = f(n(150)),
        u = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }(n(548)),
        l = n(98),
        c = f(n(822));

    function f(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var d = t.Swatches = function(e) {
        var t = e.width,
            n = e.height,
            i = e.onChange,
            u = e.onSwatchHover,
            f = e.colors,
            d = e.hex,
            h = e.styles,
            p = void 0 === h ? {} : h,
            g = e.className,
            v = void 0 === g ? "" : g,
            y = (0, o.default)((0, s.default)({
                default: {
                    picker: {
                        width: t,
                        height: n
                    },
                    overflow: {
                        height: n,
                        overflowY: "scroll"
                    },
                    body: {
                        padding: "16px 0 6px 16px"
                    },
                    clear: {
                        clear: "both"
                    }
                }
            }, p)),
            m = function(e, t) {
                return i({
                    hex: e,
                    source: "hex"
                }, t)
            };
        return r.default.createElement("div", {
            style: y.picker,
            className: "swatches-picker " + v
        }, r.default.createElement(l.Raised, null, r.default.createElement("div", {
            style: y.overflow
        }, r.default.createElement("div", {
            style: y.body
        }, (0, a.default)(f, (function(e) {
            return r.default.createElement(c.default, {
                key: e.toString(),
                group: e,
                active: d,
                onClick: m,
                onSwatchHover: u
            })
        })), r.default.createElement("div", {
            style: y.clear
        })))))
    };
    d.propTypes = {
        width: i.default.oneOfType([i.default.string, i.default.number]),
        height: i.default.oneOfType([i.default.string, i.default.number]),
        colors: i.default.arrayOf(i.default.arrayOf(i.default.string)),
        styles: i.default.object
    }, d.defaultProps = {
        width: 320,
        height: 240,
        colors: [
            [u.red[900], u.red[700], u.red[500], u.red[300], u.red[100]],
            [u.pink[900], u.pink[700], u.pink[500], u.pink[300], u.pink[100]],
            [u.purple[900], u.purple[700], u.purple[500], u.purple[300], u.purple[100]],
            [u.deepPurple[900], u.deepPurple[700], u.deepPurple[500], u.deepPurple[300], u.deepPurple[100]],
            [u.indigo[900], u.indigo[700], u.indigo[500], u.indigo[300], u.indigo[100]],
            [u.blue[900], u.blue[700], u.blue[500], u.blue[300], u.blue[100]],
            [u.lightBlue[900], u.lightBlue[700], u.lightBlue[500], u.lightBlue[300], u.lightBlue[100]],
            [u.cyan[900], u.cyan[700], u.cyan[500], u.cyan[300], u.cyan[100]],
            [u.teal[900], u.teal[700], u.teal[500], u.teal[300], u.teal[100]],
            ["#194D33", u.green[700], u.green[500], u.green[300], u.green[100]],
            [u.lightGreen[900], u.lightGreen[700], u.lightGreen[500], u.lightGreen[300], u.lightGreen[100]],
            [u.lime[900], u.lime[700], u.lime[500], u.lime[300], u.lime[100]],
            [u.yellow[900], u.yellow[700], u.yellow[500], u.yellow[300], u.yellow[100]],
            [u.amber[900], u.amber[700], u.amber[500], u.amber[300], u.amber[100]],
            [u.orange[900], u.orange[700], u.orange[500], u.orange[300], u.orange[100]],
            [u.deepOrange[900], u.deepOrange[700], u.deepOrange[500], u.deepOrange[300], u.deepOrange[100]],
            [u.brown[900], u.brown[700], u.brown[500], u.brown[300], u.brown[100]],
            [u.blueGrey[900], u.blueGrey[700], u.blueGrey[500], u.blueGrey[300], u.blueGrey[100]],
            ["#000000", "#525252", "#969696", "#D9D9D9", "#FFFFFF"]
        ],
        styles: {}
    }, t.default = (0, l.ColorWrap)(d)
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.SwatchesGroup = void 0;
    var r = s(n(0)),
        i = s(n(62)),
        o = s(n(208)),
        a = s(n(823));

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var u = t.SwatchesGroup = function(e) {
        var t = e.onClick,
            n = e.onSwatchHover,
            s = e.group,
            u = e.active,
            l = (0, i.default)({
                default: {
                    group: {
                        paddingBottom: "10px",
                        width: "40px",
                        float: "left",
                        marginRight: "10px"
                    }
                }
            });
        return r.default.createElement("div", {
            style: l.group
        }, (0, o.default)(s, (function(e, i) {
            return r.default.createElement(a.default, {
                key: e,
                color: e,
                active: e.toLowerCase() === u,
                first: 0 === i,
                last: i === s.length - 1,
                onClick: t,
                onSwatchHover: n
            })
        })))
    };
    t.default = u
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.SwatchesColor = void 0;
    var r = u(n(0)),
        i = u(n(62)),
        o = u(n(169)),
        a = n(98),
        s = u(n(824));

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var l = t.SwatchesColor = function(e) {
        var t = e.color,
            n = e.onClick,
            u = void 0 === n ? function() {} : n,
            l = e.onSwatchHover,
            c = e.first,
            f = e.last,
            d = e.active,
            h = (0, i.default)({
                default: {
                    color: {
                        width: "40px",
                        height: "24px",
                        cursor: "pointer",
                        background: t,
                        marginBottom: "1px"
                    },
                    check: {
                        color: o.default.getContrastingColor(t),
                        marginLeft: "8px",
                        display: "none"
                    }
                },
                first: {
                    color: {
                        overflow: "hidden",
                        borderRadius: "2px 2px 0 0"
                    }
                },
                last: {
                    color: {
                        overflow: "hidden",
                        borderRadius: "0 0 2px 2px"
                    }
                },
                active: {
                    check: {
                        display: "block"
                    }
                },
                "color-#FFFFFF": {
                    color: {
                        boxShadow: "inset 0 0 0 1px #ddd"
                    },
                    check: {
                        color: "#333"
                    }
                },
                transparent: {
                    check: {
                        color: "#333"
                    }
                }
            }, {
                first: c,
                last: f,
                active: d,
                "color-#FFFFFF": "#FFFFFF" === t,
                transparent: "transparent" === t
            });
        return r.default.createElement(a.Swatch, {
            color: t,
            style: h.color,
            onClick: u,
            onHover: l,
            focusStyle: {
                boxShadow: "0 0 4px " + t
            }
        }, r.default.createElement("div", {
            style: h.check
        }, r.default.createElement(s.default, null)))
    };
    t.default = l
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, i = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        o = n(0),
        a = (r = o) && r.__esModule ? r : {
            default: r
        };
    t.default = function(e) {
        var t = e.fill,
            n = void 0 === t ? "currentColor" : t,
            r = e.width,
            o = void 0 === r ? 24 : r,
            s = e.height,
            u = void 0 === s ? 24 : s,
            l = e.style,
            c = void 0 === l ? {} : l,
            f = function(e, t) {
                var n = {};
                for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }(e, ["fill", "width", "height", "style"]);
        return a.default.createElement("svg", i({
            viewBox: "0 0 24 24",
            style: i({
                fill: n,
                width: o,
                height: u
            }, c)
        }, f), a.default.createElement("path", {
            d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
        }))
    }
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Twitter = void 0;
    var r = c(n(0)),
        i = c(n(70)),
        o = c(n(62)),
        a = c(n(208)),
        s = c(n(150)),
        u = c(n(169)),
        l = n(98);

    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var f = t.Twitter = function(e) {
        var t = e.onChange,
            n = e.onSwatchHover,
            i = e.hex,
            c = e.colors,
            f = e.width,
            d = e.triangle,
            h = e.styles,
            p = void 0 === h ? {} : h,
            g = e.className,
            v = void 0 === g ? "" : g,
            y = (0, o.default)((0, s.default)({
                default: {
                    card: {
                        width: f,
                        background: "#fff",
                        border: "0 solid rgba(0,0,0,0.25)",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
                        borderRadius: "4px",
                        position: "relative"
                    },
                    body: {
                        padding: "15px 9px 9px 15px"
                    },
                    label: {
                        fontSize: "18px",
                        color: "#fff"
                    },
                    triangle: {
                        width: "0px",
                        height: "0px",
                        borderStyle: "solid",
                        borderWidth: "0 9px 10px 9px",
                        borderColor: "transparent transparent #fff transparent",
                        position: "absolute"
                    },
                    triangleShadow: {
                        width: "0px",
                        height: "0px",
                        borderStyle: "solid",
                        borderWidth: "0 9px 10px 9px",
                        borderColor: "transparent transparent rgba(0,0,0,.1) transparent",
                        position: "absolute"
                    },
                    hash: {
                        background: "#F0F0F0",
                        height: "30px",
                        width: "30px",
                        borderRadius: "4px 0 0 4px",
                        float: "left",
                        color: "#98A1A4",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    input: {
                        width: "100px",
                        fontSize: "14px",
                        color: "#666",
                        border: "0px",
                        outline: "none",
                        height: "28px",
                        boxShadow: "inset 0 0 0 1px #F0F0F0",
                        boxSizing: "content-box",
                        borderRadius: "0 4px 4px 0",
                        float: "left",
                        paddingLeft: "8px"
                    },
                    swatch: {
                        width: "30px",
                        height: "30px",
                        float: "left",
                        borderRadius: "4px",
                        margin: "0 6px 6px 0"
                    },
                    clear: {
                        clear: "both"
                    }
                },
                "hide-triangle": {
                    triangle: {
                        display: "none"
                    },
                    triangleShadow: {
                        display: "none"
                    }
                },
                "top-left-triangle": {
                    triangle: {
                        top: "-10px",
                        left: "12px"
                    },
                    triangleShadow: {
                        top: "-11px",
                        left: "12px"
                    }
                },
                "top-right-triangle": {
                    triangle: {
                        top: "-10px",
                        right: "12px"
                    },
                    triangleShadow: {
                        top: "-11px",
                        right: "12px"
                    }
                }
            }, p), {
                "hide-triangle": "hide" === d,
                "top-left-triangle": "top-left" === d,
                "top-right-triangle": "top-right" === d
            }),
            m = function(e, n) {
                u.default.isValidHex(e) && t({
                    hex: e,
                    source: "hex"
                }, n)
            };
        return r.default.createElement("div", {
            style: y.card,
            className: "twitter-picker " + v
        }, r.default.createElement("div", {
            style: y.triangleShadow
        }), r.default.createElement("div", {
            style: y.triangle
        }), r.default.createElement("div", {
            style: y.body
        }, (0, a.default)(c, (function(e, t) {
            return r.default.createElement(l.Swatch, {
                key: t,
                color: e,
                hex: e,
                style: y.swatch,
                onClick: m,
                onHover: n,
                focusStyle: {
                    boxShadow: "0 0 4px " + e
                }
            })
        })), r.default.createElement("div", {
            style: y.hash
        }, "#"), r.default.createElement(l.EditableInput, {
            label: null,
            style: {
                input: y.input
            },
            value: i.replace("#", ""),
            onChange: m
        }), r.default.createElement("div", {
            style: y.clear
        })))
    };
    f.propTypes = {
        width: i.default.oneOfType([i.default.string, i.default.number]),
        triangle: i.default.oneOf(["hide", "top-left", "top-right"]),
        colors: i.default.arrayOf(i.default.string),
        styles: i.default.object
    }, f.defaultProps = {
        width: 276,
        colors: ["#FF6900", "#FCB900", "#7BDCB5", "#00D084", "#8ED1FC", "#0693E3", "#ABB8C3", "#EB144C", "#F78DA7", "#9900EF"],
        triangle: "top-left",
        styles: {}
    }, t.default = (0, l.ColorWrap)(f)
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
function(e, t, n) {
    "use strict";
    var r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto),
        i = new Uint8Array(16);

    function o() {
        if (!r) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return r(i)
    }
    var a = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    for (var s = function(e) {
            return "string" == typeof e && a.test(e)
        }, u = [], l = 0; l < 256; ++l) u.push((l + 256).toString(16).substr(1));
    var c = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = (u[e[t + 0]] + u[e[t + 1]] + u[e[t + 2]] + u[e[t + 3]] + "-" + u[e[t + 4]] + u[e[t + 5]] + "-" + u[e[t + 6]] + u[e[t + 7]] + "-" + u[e[t + 8]] + u[e[t + 9]] + "-" + u[e[t + 10]] + u[e[t + 11]] + u[e[t + 12]] + u[e[t + 13]] + u[e[t + 14]] + u[e[t + 15]]).toLowerCase();
        if (!s(n)) throw TypeError("Stringified UUID is invalid");
        return n
    };
    t.a = function(e, t, n) {
        var r = (e = e || {}).random || (e.rng || o)();
        if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, t) {
            n = n || 0;
            for (var i = 0; i < 16; ++i) t[n + i] = r[i];
            return t
        }
        return c(r)
    }
}, , ,
function(e, t, n) {
    "use strict";
    (function(e) {
        n.d(t, "a", (function() {
            return u
        }));
        var r = n(0),
            i = n(393);

        function o(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        r || null == s.return || s.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function a(e, t) {
            if (null == e) return {};
            var n, r, i = function(e, t) {
                if (null == e) return {};
                var n, r, i = {},
                    o = Object.keys(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
        }
        var s = 0,
            u = Object(r.memo)((function(e) {
                var t = e.children,
                    n = o(function(e) {
                        if ("manager" in e) {
                            return [{
                                dragDropManager: e.manager
                            }, !1]
                        }
                        var t = function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c(),
                                    n = arguments.length > 2 ? arguments[2] : void 0,
                                    r = arguments.length > 3 ? arguments[3] : void 0,
                                    o = t;
                                o[l] || (o[l] = Object(i.b)(e, t, n, r));
                                return o[l]
                            }(e.backend, e.context, e.options, e.debugMode),
                            n = !e.context;
                        return [t, n]
                    }(a(e, ["children"])), 2),
                    u = n[0],
                    f = n[1];
                return r.useEffect((function() {
                    return f && s++,
                        function() {
                            f && (0 === --s && (c()[l] = null))
                        }
                }), []), r.createElement(i.a.Provider, {
                    value: u
                }, t)
            }));
        u.displayName = "DndProvider";
        var l = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");

        function c() {
            return void 0 !== e ? e : window
        }
    }).call(this, n(168))
}]]);