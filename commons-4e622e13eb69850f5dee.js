/*! For license information please see commons-4e622e13eb69850f5dee.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    "2W6z": function (e, t, n) {
      "use strict";
      var r = function () {};
      e.exports = r;
    },
    "2Zix": function (e, t, n) {
      var r = n("NC/Y");
      e.exports = /MSIE|Trident/.test(r);
    },
    "3Z9Z": function (e, t, n) {
      "use strict";
      var r = n("wx14"),
        a = n("zLVn"),
        o = n("TSYQ"),
        i = n.n(o),
        s = n("q1tI"),
        c = n.n(s),
        l = n("vUet"),
        u = ["bsPrefix", "className", "noGutters", "as"],
        f = ["xl", "lg", "md", "sm", "xs"],
        d = c.a.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            o = e.className,
            s = e.noGutters,
            d = e.as,
            p = void 0 === d ? "div" : d,
            v = Object(a.a)(e, u),
            m = Object(l.a)(n, "row"),
            b = m + "-cols",
            h = [];
          return (
            f.forEach(function (e) {
              var t,
                n = v[e];
              delete v[e];
              var r = "xs" !== e ? "-" + e : "";
              null != (t = null != n && "object" == typeof n ? n.cols : n) &&
                h.push("" + b + r + "-" + t);
            }),
            c.a.createElement(
              p,
              Object(r.a)({ ref: t }, v, {
                className: i.a.apply(
                  void 0,
                  [o, m, s && "no-gutters"].concat(h)
                ),
              })
            )
          );
        });
      (d.displayName = "Row"), (d.defaultProps = { noGutters: !1 }), (t.a = d);
    },
    "7vrA": function (e, t, n) {
      "use strict";
      var r = n("wx14"),
        a = n("zLVn"),
        o = n("TSYQ"),
        i = n.n(o),
        s = n("q1tI"),
        c = n.n(s),
        l = n("vUet"),
        u = ["bsPrefix", "fluid", "as", "className"],
        f = c.a.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            o = e.fluid,
            s = e.as,
            f = void 0 === s ? "div" : s,
            d = e.className,
            p = Object(a.a)(e, u),
            v = Object(l.a)(n, "container"),
            m = "string" == typeof o ? "-" + o : "-fluid";
          return c.a.createElement(
            f,
            Object(r.a)({ ref: t }, p, {
              className: i()(d, o ? "" + v + m : v),
            })
          );
        });
      (f.displayName = "Container"),
        (f.defaultProps = { fluid: !1 }),
        (t.a = f);
    },
    "8oQk": function (e, t, n) {},
    BNF5: function (e, t, n) {
      var r = n("NC/Y").match(/firefox\/(\d+)/i);
      e.exports = !!r && +r[1];
    },
    "BO/t": function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          return function (t, n, r, a, o) {
            var i = r || "<<anonymous>>",
              s = o || n;
            if (null == t[n])
              return new Error(
                "The " +
                  a +
                  " `" +
                  s +
                  "` is required to make `" +
                  i +
                  "` accessible for users of assistive technologies such as screen readers."
              );
            for (
              var c = arguments.length, l = Array(c > 5 ? c - 5 : 0), u = 5;
              u < c;
              u++
            )
              l[u - 5] = arguments[u];
            return e.apply(void 0, [t, n, r, a, o].concat(l));
          };
        }),
        (e.exports = t.default);
    },
    Bl7J: function (e, t, n) {
      "use strict";
      var r = n("q1tI"),
        a = n.n(r),
        o = (n("q4sD"), n("8oQk"), n("dDsW")),
        i = n("Frpm"),
        s = n("cWnB"),
        c = n("7vrA"),
        l = n("wx14"),
        u = n("zLVn"),
        f = n("TSYQ"),
        d = n.n(f);
      n("E9XD"), n("QLaP");
      function p(e) {
        return "default" + e.charAt(0).toUpperCase() + e.substr(1);
      }
      function v(e) {
        var t = (function (e, t) {
          if ("object" != typeof e || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == typeof t ? t : String(t);
      }
      function m(e, t, n) {
        var a = Object(r.useRef)(void 0 !== e),
          o = Object(r.useState)(t),
          i = o[0],
          s = o[1],
          c = void 0 !== e,
          l = a.current;
        return (
          (a.current = c),
          !c && l && i !== t && s(t),
          [
            c ? e : i,
            Object(r.useCallback)(
              function (e) {
                for (
                  var t = arguments.length,
                    r = new Array(t > 1 ? t - 1 : 0),
                    a = 1;
                  a < t;
                  a++
                )
                  r[a - 1] = arguments[a];
                n && n.apply(void 0, [e].concat(r)), s(e);
              },
              [n]
            ),
          ]
        );
      }
      function b(e, t) {
        return Object.keys(t).reduce(function (n, r) {
          var a,
            o = n,
            i = o[p(r)],
            s = o[r],
            c = Object(u.a)(o, [p(r), r].map(v)),
            f = t[r],
            d = m(s, i, e[f]),
            b = d[0],
            h = d[1];
          return Object(l.a)({}, c, (((a = {})[r] = b), (a[f] = h), a));
        }, e);
      }
      var h = n("dI71");
      n("94VI");
      var g = n("YdCC"),
        y = n("vUet"),
        x = ["bsPrefix", "className", "as"],
        O = a.a.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            r = e.className,
            o = e.as,
            i = Object(u.a)(e, x);
          n = Object(y.a)(n, "navbar-brand");
          var s = o || (i.href ? "a" : "span");
          return a.a.createElement(
            s,
            Object(l.a)({}, i, { ref: t, className: d()(r, n) })
          );
        });
      O.displayName = "NavbarBrand";
      var w = O,
        E = n("dZvc");
      function j(e, t) {
        return (function (e) {
          var t = Object(E.a)(e);
          return (t && t.defaultView) || window;
        })(e).getComputedStyle(e, t);
      }
      var N = /([A-Z])/g;
      var C = /^ms-/;
      function k(e) {
        return (function (e) {
          return e.replace(N, "-$1").toLowerCase();
        })(e).replace(C, "-ms-");
      }
      var P = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
      var S = function (e, t) {
          var n = "",
            r = "";
          if ("string" == typeof t)
            return (
              e.style.getPropertyValue(k(t)) || j(e).getPropertyValue(k(t))
            );
          Object.keys(t).forEach(function (a) {
            var o = t[a];
            o || 0 === o
              ? !(function (e) {
                  return !(!e || !P.test(e));
                })(a)
                ? (n += k(a) + ": " + o + ";")
                : (r += a + "(" + o + ") ")
              : e.style.removeProperty(k(a));
          }),
            r && (n += "transform: " + r + ";"),
            (e.style.cssText += ";" + n);
        },
        D = n("i8i4"),
        T = n.n(D),
        R = !1,
        M = a.a.createContext(null),
        A = (function (e) {
          function t(t, n) {
            var r;
            r = e.call(this, t, n) || this;
            var a,
              o = n && !n.isMounting ? t.enter : t.appear;
            return (
              (r.appearStatus = null),
              t.in
                ? o
                  ? ((a = "exited"), (r.appearStatus = "entering"))
                  : (a = "entered")
                : (a =
                    t.unmountOnExit || t.mountOnEnter ? "unmounted" : "exited"),
              (r.state = { status: a }),
              (r.nextCallback = null),
              r
            );
          }
          Object(h.a)(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              return e.in && "unmounted" === t.status
                ? { status: "exited" }
                : null;
            });
          var n = t.prototype;
          return (
            (n.componentDidMount = function () {
              this.updateStatus(!0, this.appearStatus);
            }),
            (n.componentDidUpdate = function (e) {
              var t = null;
              if (e !== this.props) {
                var n = this.state.status;
                this.props.in
                  ? "entering" !== n && "entered" !== n && (t = "entering")
                  : ("entering" !== n && "entered" !== n) || (t = "exiting");
              }
              this.updateStatus(!1, t);
            }),
            (n.componentWillUnmount = function () {
              this.cancelNextCallback();
            }),
            (n.getTimeouts = function () {
              var e,
                t,
                n,
                r = this.props.timeout;
              return (
                (e = t = n = r),
                null != r &&
                  "number" != typeof r &&
                  ((e = r.exit),
                  (t = r.enter),
                  (n = void 0 !== r.appear ? r.appear : t)),
                { exit: e, enter: t, appear: n }
              );
            }),
            (n.updateStatus = function (e, t) {
              if ((void 0 === e && (e = !1), null !== t))
                if ((this.cancelNextCallback(), "entering" === t)) {
                  if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var n = this.props.nodeRef
                      ? this.props.nodeRef.current
                      : T.a.findDOMNode(this);
                    n &&
                      (function (e) {
                        e.scrollTop;
                      })(n);
                  }
                  this.performEnter(e);
                } else this.performExit();
              else
                this.props.unmountOnExit &&
                  "exited" === this.state.status &&
                  this.setState({ status: "unmounted" });
            }),
            (n.performEnter = function (e) {
              var t = this,
                n = this.props.enter,
                r = this.context ? this.context.isMounting : e,
                a = this.props.nodeRef ? [r] : [T.a.findDOMNode(this), r],
                o = a[0],
                i = a[1],
                s = this.getTimeouts(),
                c = r ? s.appear : s.enter;
              (!e && !n) || R
                ? this.safeSetState({ status: "entered" }, function () {
                    t.props.onEntered(o);
                  })
                : (this.props.onEnter(o, i),
                  this.safeSetState({ status: "entering" }, function () {
                    t.props.onEntering(o, i),
                      t.onTransitionEnd(c, function () {
                        t.safeSetState({ status: "entered" }, function () {
                          t.props.onEntered(o, i);
                        });
                      });
                  }));
            }),
            (n.performExit = function () {
              var e = this,
                t = this.props.exit,
                n = this.getTimeouts(),
                r = this.props.nodeRef ? void 0 : T.a.findDOMNode(this);
              t && !R
                ? (this.props.onExit(r),
                  this.safeSetState({ status: "exiting" }, function () {
                    e.props.onExiting(r),
                      e.onTransitionEnd(n.exit, function () {
                        e.safeSetState({ status: "exited" }, function () {
                          e.props.onExited(r);
                        });
                      });
                  }))
                : this.safeSetState({ status: "exited" }, function () {
                    e.props.onExited(r);
                  });
            }),
            (n.cancelNextCallback = function () {
              null !== this.nextCallback &&
                (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (n.safeSetState = function (e, t) {
              (t = this.setNextCallback(t)), this.setState(e, t);
            }),
            (n.setNextCallback = function (e) {
              var t = this,
                n = !0;
              return (
                (this.nextCallback = function (r) {
                  n && ((n = !1), (t.nextCallback = null), e(r));
                }),
                (this.nextCallback.cancel = function () {
                  n = !1;
                }),
                this.nextCallback
              );
            }),
            (n.onTransitionEnd = function (e, t) {
              this.setNextCallback(t);
              var n = this.props.nodeRef
                  ? this.props.nodeRef.current
                  : T.a.findDOMNode(this),
                r = null == e && !this.props.addEndListener;
              if (n && !r) {
                if (this.props.addEndListener) {
                  var a = this.props.nodeRef
                      ? [this.nextCallback]
                      : [n, this.nextCallback],
                    o = a[0],
                    i = a[1];
                  this.props.addEndListener(o, i);
                }
                null != e && setTimeout(this.nextCallback, e);
              } else setTimeout(this.nextCallback, 0);
            }),
            (n.render = function () {
              var e = this.state.status;
              if ("unmounted" === e) return null;
              var t = this.props,
                n = t.children,
                r =
                  (t.in,
                  t.mountOnEnter,
                  t.unmountOnExit,
                  t.appear,
                  t.enter,
                  t.exit,
                  t.timeout,
                  t.addEndListener,
                  t.onEnter,
                  t.onEntering,
                  t.onEntered,
                  t.onExit,
                  t.onExiting,
                  t.onExited,
                  t.nodeRef,
                  Object(u.a)(t, [
                    "children",
                    "in",
                    "mountOnEnter",
                    "unmountOnExit",
                    "appear",
                    "enter",
                    "exit",
                    "timeout",
                    "addEndListener",
                    "onEnter",
                    "onEntering",
                    "onEntered",
                    "onExit",
                    "onExiting",
                    "onExited",
                    "nodeRef",
                  ]));
              return a.a.createElement(
                M.Provider,
                { value: null },
                "function" == typeof n
                  ? n(e, r)
                  : a.a.cloneElement(a.a.Children.only(n), r)
              );
            }),
            t
          );
        })(a.a.Component);
      function L() {}
      (A.contextType = M),
        (A.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: L,
          onEntering: L,
          onEntered: L,
          onExit: L,
          onExiting: L,
          onExited: L,
        }),
        (A.UNMOUNTED = "unmounted"),
        (A.EXITED = "exited"),
        (A.ENTERING = "entering"),
        (A.ENTERED = "entered"),
        (A.EXITING = "exiting");
      var I = A,
        B = n("SJxq"),
        q = !1,
        K = !1;
      try {
        var W = {
          get passive() {
            return (q = !0);
          },
          get once() {
            return (K = q = !0);
          },
        };
        B.a &&
          (window.addEventListener("test", W, W),
          window.removeEventListener("test", W, !0));
      } catch (ar) {}
      var z = function (e, t, n, r) {
        if (r && "boolean" != typeof r && !K) {
          var a = r.once,
            o = r.capture,
            i = n;
          !K &&
            a &&
            ((i =
              n.__once ||
              function e(r) {
                this.removeEventListener(t, e, o), n.call(this, r);
              }),
            (n.__once = i)),
            e.addEventListener(t, i, q ? r : o);
        }
        e.addEventListener(t, n, r);
      };
      var U = function (e, t, n, r) {
        var a = r && "boolean" != typeof r ? r.capture : r;
        e.removeEventListener(t, n, a),
          n.__once && e.removeEventListener(t, n.__once, a);
      };
      var V = function (e, t, n, r) {
        return (
          z(e, t, n, r),
          function () {
            U(e, t, n, r);
          }
        );
      };
      function F(e, t, n) {
        void 0 === n && (n = 5);
        var r = !1,
          a = setTimeout(function () {
            r ||
              (function (e, t, n, r) {
                if ((void 0 === n && (n = !1), void 0 === r && (r = !0), e)) {
                  var a = document.createEvent("HTMLEvents");
                  a.initEvent(t, n, r), e.dispatchEvent(a);
                }
              })(e, "transitionend", !0);
          }, t + n),
          o = V(
            e,
            "transitionend",
            function () {
              r = !0;
            },
            { once: !0 }
          );
        return function () {
          clearTimeout(a), o();
        };
      }
      function H(e, t, n, r) {
        var a, o;
        null == n &&
          ((a = S(e, "transitionDuration") || ""),
          (o = -1 === a.indexOf("ms") ? 1e3 : 1),
          (n = parseFloat(a) * o || 0));
        var i = F(e, n, r),
          s = V(e, "transitionend", t);
        return function () {
          i(), s();
        };
      }
      function _(e, t) {
        var n = S(e, t) || "",
          r = -1 === n.indexOf("ms") ? 1e3 : 1;
        return parseFloat(n) * r;
      }
      function Y(e, t) {
        var n = _(e, "transitionDuration"),
          r = _(e, "transitionDelay"),
          a = H(
            e,
            function (n) {
              n.target === e && (a(), t(n));
            },
            n + r
          );
      }
      var J = n("Qg85");
      var Q,
        Z = [
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "className",
          "children",
          "dimension",
          "getDimensionValue",
        ],
        X = {
          height: ["marginTop", "marginBottom"],
          width: ["marginLeft", "marginRight"],
        };
      function G(e, t) {
        var n = t["offset" + e[0].toUpperCase() + e.slice(1)],
          r = X[e];
        return n + parseInt(S(t, r[0]), 10) + parseInt(S(t, r[1]), 10);
      }
      var $ =
          (((Q = {}).exited = "collapse"),
          (Q.exiting = "collapsing"),
          (Q.entering = "collapsing"),
          (Q.entered = "collapse show"),
          Q),
        ee = {
          in: !1,
          timeout: 300,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          getDimensionValue: G,
        },
        te = a.a.forwardRef(function (e, t) {
          var n = e.onEnter,
            o = e.onEntering,
            i = e.onEntered,
            s = e.onExit,
            c = e.onExiting,
            f = e.className,
            p = e.children,
            v = e.dimension,
            m = void 0 === v ? "height" : v,
            b = e.getDimensionValue,
            h = void 0 === b ? G : b,
            g = Object(u.a)(e, Z),
            y = "function" == typeof m ? m() : m,
            x = Object(r.useMemo)(
              function () {
                return Object(J.a)(function (e) {
                  e.style[y] = "0";
                }, n);
              },
              [y, n]
            ),
            O = Object(r.useMemo)(
              function () {
                return Object(J.a)(function (e) {
                  var t = "scroll" + y[0].toUpperCase() + y.slice(1);
                  e.style[y] = e[t] + "px";
                }, o);
              },
              [y, o]
            ),
            w = Object(r.useMemo)(
              function () {
                return Object(J.a)(function (e) {
                  e.style[y] = null;
                }, i);
              },
              [y, i]
            ),
            E = Object(r.useMemo)(
              function () {
                return Object(J.a)(function (e) {
                  (e.style[y] = h(y, e) + "px"), e.offsetHeight;
                }, s);
              },
              [s, h, y]
            ),
            j = Object(r.useMemo)(
              function () {
                return Object(J.a)(function (e) {
                  e.style[y] = null;
                }, c);
              },
              [y, c]
            );
          return a.a.createElement(
            I,
            Object(l.a)({ ref: t, addEndListener: Y }, g, {
              "aria-expanded": g.role ? g.in : null,
              onEnter: x,
              onEntering: O,
              onEntered: w,
              onExit: E,
              onExiting: j,
            }),
            function (e, t) {
              return a.a.cloneElement(
                p,
                Object(l.a)({}, t, {
                  className: d()(
                    f,
                    p.props.className,
                    $[e],
                    "width" === y && "width"
                  ),
                })
              );
            }
          );
        });
      te.defaultProps = ee;
      var ne = te,
        re = a.a.createContext(null);
      re.displayName = "NavbarContext";
      var ae = re,
        oe = ["children", "bsPrefix"],
        ie = a.a.forwardRef(function (e, t) {
          var n = e.children,
            r = e.bsPrefix,
            o = Object(u.a)(e, oe);
          return (
            (r = Object(y.a)(r, "navbar-collapse")),
            a.a.createElement(ae.Consumer, null, function (e) {
              return a.a.createElement(
                ne,
                Object(l.a)({ in: !(!e || !e.expanded) }, o),
                a.a.createElement("div", { ref: t, className: r }, n)
              );
            })
          );
        });
      ie.displayName = "NavbarCollapse";
      var se = ie;
      var ce = function (e) {
        var t = Object(r.useRef)(e);
        return (
          Object(r.useEffect)(
            function () {
              t.current = e;
            },
            [e]
          ),
          t
        );
      };
      function le(e) {
        var t = ce(e);
        return Object(r.useCallback)(
          function () {
            return t.current && t.current.apply(t, arguments);
          },
          [t]
        );
      }
      var ue = ["bsPrefix", "className", "children", "label", "as", "onClick"],
        fe = a.a.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            o = e.className,
            i = e.children,
            s = e.label,
            c = e.as,
            f = void 0 === c ? "button" : c,
            p = e.onClick,
            v = Object(u.a)(e, ue);
          n = Object(y.a)(n, "navbar-toggler");
          var m = Object(r.useContext)(ae) || {},
            b = m.onToggle,
            h = m.expanded,
            g = le(function (e) {
              p && p(e), b && b();
            });
          return (
            "button" === f && (v.type = "button"),
            a.a.createElement(
              f,
              Object(l.a)({}, v, {
                ref: t,
                onClick: g,
                "aria-label": s,
                className: d()(o, n, !h && "collapsed"),
              }),
              i || a.a.createElement("span", { className: n + "-icon" })
            )
          );
        });
      (fe.displayName = "NavbarToggle"),
        (fe.defaultProps = { label: "Toggle navigation" });
      var de = fe,
        pe = function (e, t) {
          return void 0 === t && (t = null), null != e ? String(e) : t || null;
        },
        ve = a.a.createContext(null),
        me = [
          "bsPrefix",
          "expand",
          "variant",
          "bg",
          "fixed",
          "sticky",
          "className",
          "children",
          "as",
          "expanded",
          "onToggle",
          "onSelect",
          "collapseOnSelect",
        ],
        be = Object(g.a)("navbar-text", { Component: "span" }),
        he = a.a.forwardRef(function (e, t) {
          var n = b(e, { expanded: "onToggle" }),
            o = n.bsPrefix,
            i = n.expand,
            s = n.variant,
            c = n.bg,
            f = n.fixed,
            p = n.sticky,
            v = n.className,
            m = n.children,
            h = n.as,
            g = void 0 === h ? "nav" : h,
            x = n.expanded,
            O = n.onToggle,
            w = n.onSelect,
            E = n.collapseOnSelect,
            j = Object(u.a)(n, me),
            N = Object(y.a)(o, "navbar"),
            C = Object(r.useCallback)(
              function () {
                w && w.apply(void 0, arguments), E && x && O && O(!1);
              },
              [w, E, x, O]
            );
          void 0 === j.role && "nav" !== g && (j.role = "navigation");
          var k = N + "-expand";
          "string" == typeof i && (k = k + "-" + i);
          var P = Object(r.useMemo)(
            function () {
              return {
                onToggle: function () {
                  return O && O(!x);
                },
                bsPrefix: N,
                expanded: !!x,
              };
            },
            [N, x, O]
          );
          return a.a.createElement(
            ae.Provider,
            { value: P },
            a.a.createElement(
              ve.Provider,
              { value: C },
              a.a.createElement(
                g,
                Object(l.a)({ ref: t }, j, {
                  className: d()(
                    v,
                    N,
                    i && k,
                    s && N + "-" + s,
                    c && "bg-" + c,
                    p && "sticky-" + p,
                    f && "fixed-" + f
                  ),
                }),
                m
              )
            )
          );
        });
      (he.defaultProps = {
        expand: !0,
        variant: "light",
        collapseOnSelect: !1,
      }),
        (he.displayName = "Navbar"),
        (he.Brand = w),
        (he.Toggle = de),
        (he.Collapse = se),
        (he.Text = be);
      var ge = he,
        ye = (n("K9S6"), n("Wzyw")),
        xe = Function.prototype.bind.call(Function.prototype.call, [].slice);
      function Oe(e, t) {
        return xe(e.querySelectorAll(t));
      }
      function we() {
        return Object(r.useReducer)(function (e) {
          return !e;
        }, !1)[1];
      }
      var Ee = function (e) {
        return e && "function" != typeof e
          ? function (t) {
              e.current = t;
            }
          : e;
      };
      var je = function (e, t) {
          return Object(r.useMemo)(
            function () {
              return (function (e, t) {
                var n = Ee(e),
                  r = Ee(t);
                return function (e) {
                  n && n(e), r && r(e);
                };
              })(e, t);
            },
            [e, t]
          );
        },
        Ne = a.a.createContext(null);
      Ne.displayName = "NavContext";
      var Ce = Ne,
        ke = a.a.createContext(null),
        Pe = ["as", "onSelect", "activeKey", "role", "onKeyDown"],
        Se = function () {},
        De = a.a.forwardRef(function (e, t) {
          var n,
            o,
            i = e.as,
            s = void 0 === i ? "ul" : i,
            c = e.onSelect,
            f = e.activeKey,
            d = e.role,
            p = e.onKeyDown,
            v = Object(u.a)(e, Pe),
            m = we(),
            b = Object(r.useRef)(!1),
            h = Object(r.useContext)(ve),
            g = Object(r.useContext)(ke);
          g &&
            ((d = d || "tablist"),
            (f = g.activeKey),
            (n = g.getControlledId),
            (o = g.getControllerId));
          var y = Object(r.useRef)(null),
            x = function (e) {
              var t = y.current;
              if (!t) return null;
              var n = Oe(t, "[data-rb-event-key]:not(.disabled)"),
                r = t.querySelector(".active");
              if (!r) return null;
              var a = n.indexOf(r);
              if (-1 === a) return null;
              var o = a + e;
              return (
                o >= n.length && (o = 0), o < 0 && (o = n.length - 1), n[o]
              );
            },
            O = function (e, t) {
              null != e && (c && c(e, t), h && h(e, t));
            };
          Object(r.useEffect)(function () {
            if (y.current && b.current) {
              var e = y.current.querySelector("[data-rb-event-key].active");
              e && e.focus();
            }
            b.current = !1;
          });
          var w = je(t, y);
          return a.a.createElement(
            ve.Provider,
            { value: O },
            a.a.createElement(
              Ce.Provider,
              {
                value: {
                  role: d,
                  activeKey: pe(f),
                  getControlledId: n || Se,
                  getControllerId: o || Se,
                },
              },
              a.a.createElement(
                s,
                Object(l.a)({}, v, {
                  onKeyDown: function (e) {
                    var t;
                    switch ((p && p(e), e.key)) {
                      case "ArrowLeft":
                      case "ArrowUp":
                        t = x(-1);
                        break;
                      case "ArrowRight":
                      case "ArrowDown":
                        t = x(1);
                        break;
                      default:
                        return;
                    }
                    t &&
                      (e.preventDefault(),
                      O(t.dataset.rbEventKey, e),
                      (b.current = !0),
                      m());
                  },
                  ref: w,
                  role: d,
                })
              )
            )
          );
        }),
        Te = ["bsPrefix", "className", "children", "as"],
        Re = a.a.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            r = e.className,
            o = e.children,
            i = e.as,
            s = void 0 === i ? "div" : i,
            c = Object(u.a)(e, Te);
          return (
            (n = Object(y.a)(n, "nav-item")),
            a.a.createElement(
              s,
              Object(l.a)({}, c, { ref: t, className: d()(r, n) }),
              o
            )
          );
        });
      Re.displayName = "NavItem";
      var Me = Re,
        Ae = n("dbZe"),
        Le = n("2W6z"),
        Ie = n.n(Le),
        Be = ["active", "className", "eventKey", "onSelect", "onClick", "as"],
        qe = a.a.forwardRef(function (e, t) {
          var n = e.active,
            o = e.className,
            i = e.eventKey,
            s = e.onSelect,
            c = e.onClick,
            f = e.as,
            p = Object(u.a)(e, Be),
            v = pe(i, p.href),
            m = Object(r.useContext)(ve),
            b = Object(r.useContext)(Ce),
            h = n;
          if (b) {
            p.role || "tablist" !== b.role || (p.role = "tab");
            var g = b.getControllerId(v),
              y = b.getControlledId(v);
            (p["data-rb-event-key"] = v),
              (p.id = g || p.id),
              (p["aria-controls"] = y || p["aria-controls"]),
              (h = null == n && null != v ? b.activeKey === v : n);
          }
          "tab" === p.role &&
            (p.disabled && ((p.tabIndex = -1), (p["aria-disabled"] = !0)),
            (p["aria-selected"] = h));
          var x = le(function (e) {
            c && c(e), null != v && (s && s(v, e), m && m(v, e));
          });
          return a.a.createElement(
            f,
            Object(l.a)({}, p, {
              ref: t,
              onClick: x,
              className: d()(o, h && "active"),
            })
          );
        });
      qe.defaultProps = { disabled: !1 };
      var Ke = qe,
        We = [
          "bsPrefix",
          "disabled",
          "className",
          "href",
          "eventKey",
          "onSelect",
          "as",
        ],
        ze = { disabled: !1, as: Ae.a },
        Ue = a.a.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            r = e.disabled,
            o = e.className,
            i = e.href,
            s = e.eventKey,
            c = e.onSelect,
            f = e.as,
            p = Object(u.a)(e, We);
          return (
            (n = Object(y.a)(n, "nav-link")),
            a.a.createElement(
              Ke,
              Object(l.a)({}, p, {
                href: i,
                ref: t,
                eventKey: s,
                as: f,
                disabled: r,
                onSelect: c,
                className: d()(o, n, r && "disabled"),
              })
            )
          );
        });
      (Ue.displayName = "NavLink"), (Ue.defaultProps = ze);
      var Ve = Ue,
        Fe = [
          "as",
          "bsPrefix",
          "variant",
          "fill",
          "justify",
          "navbar",
          "navbarScroll",
          "className",
          "children",
          "activeKey",
        ],
        He = a.a.forwardRef(function (e, t) {
          var n,
            o,
            i,
            s = b(e, { activeKey: "onSelect" }),
            c = s.as,
            f = void 0 === c ? "div" : c,
            p = s.bsPrefix,
            v = s.variant,
            m = s.fill,
            h = s.justify,
            g = s.navbar,
            x = s.navbarScroll,
            O = s.className,
            w = s.children,
            E = s.activeKey,
            j = Object(u.a)(s, Fe),
            N = Object(y.a)(p, "nav"),
            C = !1,
            k = Object(r.useContext)(ae),
            P = Object(r.useContext)(ye.a);
          return (
            k
              ? ((o = k.bsPrefix), (C = null == g || g))
              : P && (i = P.cardHeaderBsPrefix),
            a.a.createElement(
              De,
              Object(l.a)(
                {
                  as: f,
                  ref: t,
                  activeKey: E,
                  className: d()(
                    O,
                    ((n = {}),
                    (n[N] = !C),
                    (n[o + "-nav"] = C),
                    (n[o + "-nav-scroll"] = C && x),
                    (n[i + "-" + v] = !!i),
                    (n[N + "-" + v] = !!v),
                    (n[N + "-fill"] = m),
                    (n[N + "-justified"] = h),
                    n)
                  ),
                },
                j
              ),
              w
            )
          );
        });
      (He.displayName = "Nav"),
        (He.defaultProps = { justify: !1, fill: !1 }),
        (He.Item = Me),
        (He.Link = Ve);
      var _e,
        Ye = He;
      function Je(e, t, n) {
        return (
          void 0 === n && (n = !1),
          (function (e, t, n, a) {
            void 0 === a && (a = !1);
            var o = le(n);
            Object(r.useEffect)(
              function () {
                var n = "function" == typeof e ? e() : e;
                return (
                  n.addEventListener(t, o, a),
                  function () {
                    return n.removeEventListener(t, o, a);
                  }
                );
              },
              [e]
            );
          })(
            Object(r.useCallback)(function () {
              return document;
            }, []),
            e,
            t,
            n
          )
        );
      }
      var Qe = a.a.createContext(null);
      var Ze = n("XcHJ");
      var Xe = function (e) {
        var t = Object(Ze.a)();
        return [
          e[0],
          Object(r.useCallback)(
            function (n) {
              if (t()) return e[1](n);
            },
            [t, e[1]]
          ),
        ];
      };
      function Ge(e) {
        return e.split("-")[0];
      }
      function $e(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      function et(e) {
        return e instanceof $e(e).Element || e instanceof Element;
      }
      function tt(e) {
        return e instanceof $e(e).HTMLElement || e instanceof HTMLElement;
      }
      function nt(e) {
        return (
          "undefined" != typeof ShadowRoot &&
          (e instanceof $e(e).ShadowRoot || e instanceof ShadowRoot)
        );
      }
      var rt = Math.max,
        at = Math.min,
        ot = Math.round;
      function it(e, t) {
        void 0 === t && (t = !1);
        var n = e.getBoundingClientRect(),
          r = 1,
          a = 1;
        if (tt(e) && t) {
          var o = e.offsetHeight,
            i = e.offsetWidth;
          i > 0 && (r = ot(n.width) / i || 1),
            o > 0 && (a = ot(n.height) / o || 1);
        }
        return {
          width: n.width / r,
          height: n.height / a,
          top: n.top / a,
          right: n.right / r,
          bottom: n.bottom / a,
          left: n.left / r,
          x: n.left / r,
          y: n.top / a,
        };
      }
      function st(e) {
        var t = it(e),
          n = e.offsetWidth,
          r = e.offsetHeight;
        return (
          Math.abs(t.width - n) <= 1 && (n = t.width),
          Math.abs(t.height - r) <= 1 && (r = t.height),
          { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
        );
      }
      function ct(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && nt(n)) {
          var r = t;
          do {
            if (r && e.isSameNode(r)) return !0;
            r = r.parentNode || r.host;
          } while (r);
        }
        return !1;
      }
      function lt(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function ut(e) {
        return $e(e).getComputedStyle(e);
      }
      function ft(e) {
        return ["table", "td", "th"].indexOf(lt(e)) >= 0;
      }
      function dt(e) {
        return ((et(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function pt(e) {
        return "html" === lt(e)
          ? e
          : e.assignedSlot || e.parentNode || (nt(e) ? e.host : null) || dt(e);
      }
      function vt(e) {
        return tt(e) && "fixed" !== ut(e).position ? e.offsetParent : null;
      }
      function mt(e) {
        for (
          var t = $e(e), n = vt(e);
          n && ft(n) && "static" === ut(n).position;

        )
          n = vt(n);
        return n &&
          ("html" === lt(n) ||
            ("body" === lt(n) && "static" === ut(n).position))
          ? t
          : n ||
              (function (e) {
                var t =
                  -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
                if (
                  -1 !== navigator.userAgent.indexOf("Trident") &&
                  tt(e) &&
                  "fixed" === ut(e).position
                )
                  return null;
                var n = pt(e);
                for (
                  nt(n) && (n = n.host);
                  tt(n) && ["html", "body"].indexOf(lt(n)) < 0;

                ) {
                  var r = ut(n);
                  if (
                    "none" !== r.transform ||
                    "none" !== r.perspective ||
                    "paint" === r.contain ||
                    -1 !== ["transform", "perspective"].indexOf(r.willChange) ||
                    (t && "filter" === r.willChange) ||
                    (t && r.filter && "none" !== r.filter)
                  )
                    return n;
                  n = n.parentNode;
                }
                return null;
              })(e) ||
              t;
      }
      function bt(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      function ht(e, t, n) {
        return rt(e, at(t, n));
      }
      function gt(e) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
      }
      function yt(e, t) {
        return t.reduce(function (t, n) {
          return (t[n] = e), t;
        }, {});
      }
      var xt = "top",
        Ot = "bottom",
        wt = "right",
        Et = "left",
        jt = [xt, Ot, wt, Et],
        Nt = jt.reduce(function (e, t) {
          return e.concat([t + "-start", t + "-end"]);
        }, []),
        Ct = [].concat(jt, ["auto"]).reduce(function (e, t) {
          return e.concat([t, t + "-start", t + "-end"]);
        }, []),
        kt = [
          "beforeRead",
          "read",
          "afterRead",
          "beforeMain",
          "main",
          "afterMain",
          "beforeWrite",
          "write",
          "afterWrite",
        ];
      var Pt = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t,
            n = e.state,
            r = e.name,
            a = e.options,
            o = n.elements.arrow,
            i = n.modifiersData.popperOffsets,
            s = Ge(n.placement),
            c = bt(s),
            l = [Et, wt].indexOf(s) >= 0 ? "height" : "width";
          if (o && i) {
            var u = (function (e, t) {
                return gt(
                  "number" !=
                    typeof (e =
                      "function" == typeof e
                        ? e(
                            Object.assign({}, t.rects, {
                              placement: t.placement,
                            })
                          )
                        : e)
                    ? e
                    : yt(e, jt)
                );
              })(a.padding, n),
              f = st(o),
              d = "y" === c ? xt : Et,
              p = "y" === c ? Ot : wt,
              v =
                n.rects.reference[l] +
                n.rects.reference[c] -
                i[c] -
                n.rects.popper[l],
              m = i[c] - n.rects.reference[c],
              b = mt(o),
              h = b
                ? "y" === c
                  ? b.clientHeight || 0
                  : b.clientWidth || 0
                : 0,
              g = v / 2 - m / 2,
              y = u[d],
              x = h - f[l] - u[p],
              O = h / 2 - f[l] / 2 + g,
              w = ht(y, O, x),
              E = c;
            n.modifiersData[r] =
              (((t = {})[E] = w), (t.centerOffset = w - O), t);
          }
        },
        effect: function (e) {
          var t = e.state,
            n = e.options.element,
            r = void 0 === n ? "[data-popper-arrow]" : n;
          null != r &&
            ("string" != typeof r ||
              (r = t.elements.popper.querySelector(r))) &&
            ct(t.elements.popper, r) &&
            (t.elements.arrow = r);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      };
      function St(e) {
        return e.split("-")[1];
      }
      var Dt = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function Tt(e) {
        var t,
          n = e.popper,
          r = e.popperRect,
          a = e.placement,
          o = e.variation,
          i = e.offsets,
          s = e.position,
          c = e.gpuAcceleration,
          l = e.adaptive,
          u = e.roundOffsets,
          f = e.isFixed,
          d = i.x,
          p = void 0 === d ? 0 : d,
          v = i.y,
          m = void 0 === v ? 0 : v,
          b = "function" == typeof u ? u({ x: p, y: m }) : { x: p, y: m };
        (p = b.x), (m = b.y);
        var h = i.hasOwnProperty("x"),
          g = i.hasOwnProperty("y"),
          y = Et,
          x = xt,
          O = window;
        if (l) {
          var w = mt(n),
            E = "clientHeight",
            j = "clientWidth";
          if (
            (w === $e(n) &&
              "static" !== ut((w = dt(n))).position &&
              "absolute" === s &&
              ((E = "scrollHeight"), (j = "scrollWidth")),
            (w = w),
            a === xt || ((a === Et || a === wt) && "end" === o))
          )
            (x = Ot),
              (m -=
                (f && w === O && O.visualViewport
                  ? O.visualViewport.height
                  : w[E]) - r.height),
              (m *= c ? 1 : -1);
          if (a === Et || ((a === xt || a === Ot) && "end" === o))
            (y = wt),
              (p -=
                (f && w === O && O.visualViewport
                  ? O.visualViewport.width
                  : w[j]) - r.width),
              (p *= c ? 1 : -1);
        }
        var N,
          C = Object.assign({ position: s }, l && Dt),
          k =
            !0 === u
              ? (function (e) {
                  var t = e.x,
                    n = e.y,
                    r = window.devicePixelRatio || 1;
                  return { x: ot(t * r) / r || 0, y: ot(n * r) / r || 0 };
                })({ x: p, y: m })
              : { x: p, y: m };
        return (
          (p = k.x),
          (m = k.y),
          c
            ? Object.assign(
                {},
                C,
                (((N = {})[x] = g ? "0" : ""),
                (N[y] = h ? "0" : ""),
                (N.transform =
                  (O.devicePixelRatio || 1) <= 1
                    ? "translate(" + p + "px, " + m + "px)"
                    : "translate3d(" + p + "px, " + m + "px, 0)"),
                N)
              )
            : Object.assign(
                {},
                C,
                (((t = {})[x] = g ? m + "px" : ""),
                (t[y] = h ? p + "px" : ""),
                (t.transform = ""),
                t)
              )
        );
      }
      var Rt = {
          name: "computeStyles",
          enabled: !0,
          phase: "beforeWrite",
          fn: function (e) {
            var t = e.state,
              n = e.options,
              r = n.gpuAcceleration,
              a = void 0 === r || r,
              o = n.adaptive,
              i = void 0 === o || o,
              s = n.roundOffsets,
              c = void 0 === s || s,
              l = {
                placement: Ge(t.placement),
                variation: St(t.placement),
                popper: t.elements.popper,
                popperRect: t.rects.popper,
                gpuAcceleration: a,
                isFixed: "fixed" === t.options.strategy,
              };
            null != t.modifiersData.popperOffsets &&
              (t.styles.popper = Object.assign(
                {},
                t.styles.popper,
                Tt(
                  Object.assign({}, l, {
                    offsets: t.modifiersData.popperOffsets,
                    position: t.options.strategy,
                    adaptive: i,
                    roundOffsets: c,
                  })
                )
              )),
              null != t.modifiersData.arrow &&
                (t.styles.arrow = Object.assign(
                  {},
                  t.styles.arrow,
                  Tt(
                    Object.assign({}, l, {
                      offsets: t.modifiersData.arrow,
                      position: "absolute",
                      adaptive: !1,
                      roundOffsets: c,
                    })
                  )
                )),
              (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-placement": t.placement,
              }));
          },
          data: {},
        },
        Mt = { passive: !0 };
      var At = {
          name: "eventListeners",
          enabled: !0,
          phase: "write",
          fn: function () {},
          effect: function (e) {
            var t = e.state,
              n = e.instance,
              r = e.options,
              a = r.scroll,
              o = void 0 === a || a,
              i = r.resize,
              s = void 0 === i || i,
              c = $e(t.elements.popper),
              l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
            return (
              o &&
                l.forEach(function (e) {
                  e.addEventListener("scroll", n.update, Mt);
                }),
              s && c.addEventListener("resize", n.update, Mt),
              function () {
                o &&
                  l.forEach(function (e) {
                    e.removeEventListener("scroll", n.update, Mt);
                  }),
                  s && c.removeEventListener("resize", n.update, Mt);
              }
            );
          },
          data: {},
        },
        Lt = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function It(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return Lt[e];
        });
      }
      var Bt = { start: "end", end: "start" };
      function qt(e) {
        return e.replace(/start|end/g, function (e) {
          return Bt[e];
        });
      }
      function Kt(e) {
        var t = $e(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function Wt(e) {
        return it(dt(e)).left + Kt(e).scrollLeft;
      }
      function zt(e) {
        var t = ut(e),
          n = t.overflow,
          r = t.overflowX,
          a = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + a + r);
      }
      function Ut(e, t) {
        var n;
        void 0 === t && (t = []);
        var r = (function e(t) {
            return ["html", "body", "#document"].indexOf(lt(t)) >= 0
              ? t.ownerDocument.body
              : tt(t) && zt(t)
              ? t
              : e(pt(t));
          })(e),
          a = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
          o = $e(r),
          i = a ? [o].concat(o.visualViewport || [], zt(r) ? r : []) : r,
          s = t.concat(i);
        return a ? s : s.concat(Ut(pt(i)));
      }
      function Vt(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height,
        });
      }
      function Ft(e, t) {
        return "viewport" === t
          ? Vt(
              (function (e) {
                var t = $e(e),
                  n = dt(e),
                  r = t.visualViewport,
                  a = n.clientWidth,
                  o = n.clientHeight,
                  i = 0,
                  s = 0;
                return (
                  r &&
                    ((a = r.width),
                    (o = r.height),
                    /^((?!chrome|android).)*safari/i.test(
                      navigator.userAgent
                    ) || ((i = r.offsetLeft), (s = r.offsetTop))),
                  { width: a, height: o, x: i + Wt(e), y: s }
                );
              })(e)
            )
          : et(t)
          ? (function (e) {
              var t = it(e);
              return (
                (t.top = t.top + e.clientTop),
                (t.left = t.left + e.clientLeft),
                (t.bottom = t.top + e.clientHeight),
                (t.right = t.left + e.clientWidth),
                (t.width = e.clientWidth),
                (t.height = e.clientHeight),
                (t.x = t.left),
                (t.y = t.top),
                t
              );
            })(t)
          : Vt(
              (function (e) {
                var t,
                  n = dt(e),
                  r = Kt(e),
                  a = null == (t = e.ownerDocument) ? void 0 : t.body,
                  o = rt(
                    n.scrollWidth,
                    n.clientWidth,
                    a ? a.scrollWidth : 0,
                    a ? a.clientWidth : 0
                  ),
                  i = rt(
                    n.scrollHeight,
                    n.clientHeight,
                    a ? a.scrollHeight : 0,
                    a ? a.clientHeight : 0
                  ),
                  s = -r.scrollLeft + Wt(e),
                  c = -r.scrollTop;
                return (
                  "rtl" === ut(a || n).direction &&
                    (s += rt(n.clientWidth, a ? a.clientWidth : 0) - o),
                  { width: o, height: i, x: s, y: c }
                );
              })(dt(e))
            );
      }
      function Ht(e, t, n) {
        var r =
            "clippingParents" === t
              ? (function (e) {
                  var t = Ut(pt(e)),
                    n =
                      ["absolute", "fixed"].indexOf(ut(e).position) >= 0 &&
                      tt(e)
                        ? mt(e)
                        : e;
                  return et(n)
                    ? t.filter(function (e) {
                        return et(e) && ct(e, n) && "body" !== lt(e);
                      })
                    : [];
                })(e)
              : [].concat(t),
          a = [].concat(r, [n]),
          o = a[0],
          i = a.reduce(function (t, n) {
            var r = Ft(e, n);
            return (
              (t.top = rt(r.top, t.top)),
              (t.right = at(r.right, t.right)),
              (t.bottom = at(r.bottom, t.bottom)),
              (t.left = rt(r.left, t.left)),
              t
            );
          }, Ft(e, o));
        return (
          (i.width = i.right - i.left),
          (i.height = i.bottom - i.top),
          (i.x = i.left),
          (i.y = i.top),
          i
        );
      }
      function _t(e) {
        var t,
          n = e.reference,
          r = e.element,
          a = e.placement,
          o = a ? Ge(a) : null,
          i = a ? St(a) : null,
          s = n.x + n.width / 2 - r.width / 2,
          c = n.y + n.height / 2 - r.height / 2;
        switch (o) {
          case xt:
            t = { x: s, y: n.y - r.height };
            break;
          case Ot:
            t = { x: s, y: n.y + n.height };
            break;
          case wt:
            t = { x: n.x + n.width, y: c };
            break;
          case Et:
            t = { x: n.x - r.width, y: c };
            break;
          default:
            t = { x: n.x, y: n.y };
        }
        var l = o ? bt(o) : null;
        if (null != l) {
          var u = "y" === l ? "height" : "width";
          switch (i) {
            case "start":
              t[l] = t[l] - (n[u] / 2 - r[u] / 2);
              break;
            case "end":
              t[l] = t[l] + (n[u] / 2 - r[u] / 2);
          }
        }
        return t;
      }
      function Yt(e, t) {
        void 0 === t && (t = {});
        var n = t,
          r = n.placement,
          a = void 0 === r ? e.placement : r,
          o = n.boundary,
          i = void 0 === o ? "clippingParents" : o,
          s = n.rootBoundary,
          c = void 0 === s ? "viewport" : s,
          l = n.elementContext,
          u = void 0 === l ? "popper" : l,
          f = n.altBoundary,
          d = void 0 !== f && f,
          p = n.padding,
          v = void 0 === p ? 0 : p,
          m = gt("number" != typeof v ? v : yt(v, jt)),
          b = "popper" === u ? "reference" : "popper",
          h = e.rects.popper,
          g = e.elements[d ? b : u],
          y = Ht(et(g) ? g : g.contextElement || dt(e.elements.popper), i, c),
          x = it(e.elements.reference),
          O = _t({
            reference: x,
            element: h,
            strategy: "absolute",
            placement: a,
          }),
          w = Vt(Object.assign({}, h, O)),
          E = "popper" === u ? w : x,
          j = {
            top: y.top - E.top + m.top,
            bottom: E.bottom - y.bottom + m.bottom,
            left: y.left - E.left + m.left,
            right: E.right - y.right + m.right,
          },
          N = e.modifiersData.offset;
        if ("popper" === u && N) {
          var C = N[a];
          Object.keys(j).forEach(function (e) {
            var t = [wt, Ot].indexOf(e) >= 0 ? 1 : -1,
              n = [xt, Ot].indexOf(e) >= 0 ? "y" : "x";
            j[e] += C[n] * t;
          });
        }
        return j;
      }
      n("ToJy");
      var Jt = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = e.name;
          if (!t.modifiersData[r]._skip) {
            for (
              var a = n.mainAxis,
                o = void 0 === a || a,
                i = n.altAxis,
                s = void 0 === i || i,
                c = n.fallbackPlacements,
                l = n.padding,
                u = n.boundary,
                f = n.rootBoundary,
                d = n.altBoundary,
                p = n.flipVariations,
                v = void 0 === p || p,
                m = n.allowedAutoPlacements,
                b = t.options.placement,
                h = Ge(b),
                g =
                  c ||
                  (h === b || !v
                    ? [It(b)]
                    : (function (e) {
                        if ("auto" === Ge(e)) return [];
                        var t = It(e);
                        return [qt(e), t, qt(t)];
                      })(b)),
                y = [b].concat(g).reduce(function (e, n) {
                  return e.concat(
                    "auto" === Ge(n)
                      ? (function (e, t) {
                          void 0 === t && (t = {});
                          var n = t,
                            r = n.placement,
                            a = n.boundary,
                            o = n.rootBoundary,
                            i = n.padding,
                            s = n.flipVariations,
                            c = n.allowedAutoPlacements,
                            l = void 0 === c ? Ct : c,
                            u = St(r),
                            f = u
                              ? s
                                ? Nt
                                : Nt.filter(function (e) {
                                    return St(e) === u;
                                  })
                              : jt,
                            d = f.filter(function (e) {
                              return l.indexOf(e) >= 0;
                            });
                          0 === d.length && (d = f);
                          var p = d.reduce(function (t, n) {
                            return (
                              (t[n] = Yt(e, {
                                placement: n,
                                boundary: a,
                                rootBoundary: o,
                                padding: i,
                              })[Ge(n)]),
                              t
                            );
                          }, {});
                          return Object.keys(p).sort(function (e, t) {
                            return p[e] - p[t];
                          });
                        })(t, {
                          placement: n,
                          boundary: u,
                          rootBoundary: f,
                          padding: l,
                          flipVariations: v,
                          allowedAutoPlacements: m,
                        })
                      : n
                  );
                }, []),
                x = t.rects.reference,
                O = t.rects.popper,
                w = new Map(),
                E = !0,
                j = y[0],
                N = 0;
              N < y.length;
              N++
            ) {
              var C = y[N],
                k = Ge(C),
                P = "start" === St(C),
                S = [xt, Ot].indexOf(k) >= 0,
                D = S ? "width" : "height",
                T = Yt(t, {
                  placement: C,
                  boundary: u,
                  rootBoundary: f,
                  altBoundary: d,
                  padding: l,
                }),
                R = S ? (P ? wt : Et) : P ? Ot : xt;
              x[D] > O[D] && (R = It(R));
              var M = It(R),
                A = [];
              if (
                (o && A.push(T[k] <= 0),
                s && A.push(T[R] <= 0, T[M] <= 0),
                A.every(function (e) {
                  return e;
                }))
              ) {
                (j = C), (E = !1);
                break;
              }
              w.set(C, A);
            }
            if (E)
              for (
                var L = function (e) {
                    var t = y.find(function (t) {
                      var n = w.get(t);
                      if (n)
                        return n.slice(0, e).every(function (e) {
                          return e;
                        });
                    });
                    if (t) return (j = t), "break";
                  },
                  I = v ? 3 : 1;
                I > 0;
                I--
              ) {
                if ("break" === L(I)) break;
              }
            t.placement !== j &&
              ((t.modifiersData[r]._skip = !0),
              (t.placement = j),
              (t.reset = !0));
          }
        },
        requiresIfExists: ["offset"],
        data: { _skip: !1 },
      };
      function Qt(e, t, n) {
        return (
          void 0 === n && (n = { x: 0, y: 0 }),
          {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x,
          }
        );
      }
      function Zt(e) {
        return [xt, wt, Ot, Et].some(function (t) {
          return e[t] >= 0;
        });
      }
      var Xt = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function (e) {
          var t = e.state,
            n = e.name,
            r = t.rects.reference,
            a = t.rects.popper,
            o = t.modifiersData.preventOverflow,
            i = Yt(t, { elementContext: "reference" }),
            s = Yt(t, { altBoundary: !0 }),
            c = Qt(i, r),
            l = Qt(s, a, o),
            u = Zt(c),
            f = Zt(l);
          (t.modifiersData[n] = {
            referenceClippingOffsets: c,
            popperEscapeOffsets: l,
            isReferenceHidden: u,
            hasPopperEscaped: f,
          }),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, {
              "data-popper-reference-hidden": u,
              "data-popper-escaped": f,
            }));
        },
      };
      var Gt = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = e.name,
            a = n.offset,
            o = void 0 === a ? [0, 0] : a,
            i = Ct.reduce(function (e, n) {
              return (
                (e[n] = (function (e, t, n) {
                  var r = Ge(e),
                    a = [Et, xt].indexOf(r) >= 0 ? -1 : 1,
                    o =
                      "function" == typeof n
                        ? n(Object.assign({}, t, { placement: e }))
                        : n,
                    i = o[0],
                    s = o[1];
                  return (
                    (i = i || 0),
                    (s = (s || 0) * a),
                    [Et, wt].indexOf(r) >= 0 ? { x: s, y: i } : { x: i, y: s }
                  );
                })(n, t.rects, o)),
                e
              );
            }, {}),
            s = i[t.placement],
            c = s.x,
            l = s.y;
          null != t.modifiersData.popperOffsets &&
            ((t.modifiersData.popperOffsets.x += c),
            (t.modifiersData.popperOffsets.y += l)),
            (t.modifiersData[r] = i);
        },
      };
      var $t = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function (e) {
          var t = e.state,
            n = e.name;
          t.modifiersData[n] = _t({
            reference: t.rects.reference,
            element: t.rects.popper,
            strategy: "absolute",
            placement: t.placement,
          });
        },
        data: {},
      };
      var en = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = e.name,
            a = n.mainAxis,
            o = void 0 === a || a,
            i = n.altAxis,
            s = void 0 !== i && i,
            c = n.boundary,
            l = n.rootBoundary,
            u = n.altBoundary,
            f = n.padding,
            d = n.tether,
            p = void 0 === d || d,
            v = n.tetherOffset,
            m = void 0 === v ? 0 : v,
            b = Yt(t, {
              boundary: c,
              rootBoundary: l,
              padding: f,
              altBoundary: u,
            }),
            h = Ge(t.placement),
            g = St(t.placement),
            y = !g,
            x = bt(h),
            O = "x" === x ? "y" : "x",
            w = t.modifiersData.popperOffsets,
            E = t.rects.reference,
            j = t.rects.popper,
            N =
              "function" == typeof m
                ? m(Object.assign({}, t.rects, { placement: t.placement }))
                : m,
            C =
              "number" == typeof N
                ? { mainAxis: N, altAxis: N }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, N),
            k = t.modifiersData.offset
              ? t.modifiersData.offset[t.placement]
              : null,
            P = { x: 0, y: 0 };
          if (w) {
            if (o) {
              var S,
                D = "y" === x ? xt : Et,
                T = "y" === x ? Ot : wt,
                R = "y" === x ? "height" : "width",
                M = w[x],
                A = M + b[D],
                L = M - b[T],
                I = p ? -j[R] / 2 : 0,
                B = "start" === g ? E[R] : j[R],
                q = "start" === g ? -j[R] : -E[R],
                K = t.elements.arrow,
                W = p && K ? st(K) : { width: 0, height: 0 },
                z = t.modifiersData["arrow#persistent"]
                  ? t.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                U = z[D],
                V = z[T],
                F = ht(0, E[R], W[R]),
                H = y
                  ? E[R] / 2 - I - F - U - C.mainAxis
                  : B - F - U - C.mainAxis,
                _ = y
                  ? -E[R] / 2 + I + F + V + C.mainAxis
                  : q + F + V + C.mainAxis,
                Y = t.elements.arrow && mt(t.elements.arrow),
                J = Y ? ("y" === x ? Y.clientTop || 0 : Y.clientLeft || 0) : 0,
                Q = null != (S = null == k ? void 0 : k[x]) ? S : 0,
                Z = M + _ - Q,
                X = ht(p ? at(A, M + H - Q - J) : A, M, p ? rt(L, Z) : L);
              (w[x] = X), (P[x] = X - M);
            }
            if (s) {
              var G,
                $ = "x" === x ? xt : Et,
                ee = "x" === x ? Ot : wt,
                te = w[O],
                ne = "y" === O ? "height" : "width",
                re = te + b[$],
                ae = te - b[ee],
                oe = -1 !== [xt, Et].indexOf(h),
                ie = null != (G = null == k ? void 0 : k[O]) ? G : 0,
                se = oe ? re : te - E[ne] - j[ne] - ie + C.altAxis,
                ce = oe ? te + E[ne] + j[ne] - ie - C.altAxis : ae,
                le =
                  p && oe
                    ? (function (e, t, n) {
                        var r = ht(e, t, n);
                        return r > n ? n : r;
                      })(se, te, ce)
                    : ht(p ? se : re, te, p ? ce : ae);
              (w[O] = le), (P[O] = le - te);
            }
            t.modifiersData[r] = P;
          }
        },
        requiresIfExists: ["offset"],
      };
      function tn(e, t, n) {
        void 0 === n && (n = !1);
        var r,
          a,
          o = tt(t),
          i =
            tt(t) &&
            (function (e) {
              var t = e.getBoundingClientRect(),
                n = ot(t.width) / e.offsetWidth || 1,
                r = ot(t.height) / e.offsetHeight || 1;
              return 1 !== n || 1 !== r;
            })(t),
          s = dt(t),
          c = it(e, i),
          l = { scrollLeft: 0, scrollTop: 0 },
          u = { x: 0, y: 0 };
        return (
          (o || (!o && !n)) &&
            (("body" !== lt(t) || zt(s)) &&
              (l =
                (r = t) !== $e(r) && tt(r)
                  ? { scrollLeft: (a = r).scrollLeft, scrollTop: a.scrollTop }
                  : Kt(r)),
            tt(t)
              ? (((u = it(t, !0)).x += t.clientLeft), (u.y += t.clientTop))
              : s && (u.x = Wt(s))),
          {
            x: c.left + l.scrollLeft - u.x,
            y: c.top + l.scrollTop - u.y,
            width: c.width,
            height: c.height,
          }
        );
      }
      function nn(e) {
        var t = new Map(),
          n = new Set(),
          r = [];
        return (
          e.forEach(function (e) {
            t.set(e.name, e);
          }),
          e.forEach(function (e) {
            n.has(e.name) ||
              (function e(a) {
                n.add(a.name),
                  []
                    .concat(a.requires || [], a.requiresIfExists || [])
                    .forEach(function (r) {
                      if (!n.has(r)) {
                        var a = t.get(r);
                        a && e(a);
                      }
                    }),
                  r.push(a);
              })(e);
          }),
          r
        );
      }
      var rn = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function an() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return !t.some(function (e) {
          return !(e && "function" == typeof e.getBoundingClientRect);
        });
      }
      function on(e) {
        void 0 === e && (e = {});
        var t = e,
          n = t.defaultModifiers,
          r = void 0 === n ? [] : n,
          a = t.defaultOptions,
          o = void 0 === a ? rn : a;
        return function (e, t, n) {
          void 0 === n && (n = o);
          var a,
            i,
            s = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, rn, o),
              modifiersData: {},
              elements: { reference: e, popper: t },
              attributes: {},
              styles: {},
            },
            c = [],
            l = !1,
            u = {
              state: s,
              setOptions: function (n) {
                var a = "function" == typeof n ? n(s.options) : n;
                f(),
                  (s.options = Object.assign({}, o, s.options, a)),
                  (s.scrollParents = {
                    reference: et(e)
                      ? Ut(e)
                      : e.contextElement
                      ? Ut(e.contextElement)
                      : [],
                    popper: Ut(t),
                  });
                var i = (function (e) {
                  var t = nn(e);
                  return kt.reduce(function (e, n) {
                    return e.concat(
                      t.filter(function (e) {
                        return e.phase === n;
                      })
                    );
                  }, []);
                })(
                  (function (e) {
                    var t = e.reduce(function (e, t) {
                      var n = e[t.name];
                      return (
                        (e[t.name] = n
                          ? Object.assign({}, n, t, {
                              options: Object.assign({}, n.options, t.options),
                              data: Object.assign({}, n.data, t.data),
                            })
                          : t),
                        e
                      );
                    }, {});
                    return Object.keys(t).map(function (e) {
                      return t[e];
                    });
                  })([].concat(r, s.options.modifiers))
                );
                return (
                  (s.orderedModifiers = i.filter(function (e) {
                    return e.enabled;
                  })),
                  s.orderedModifiers.forEach(function (e) {
                    var t = e.name,
                      n = e.options,
                      r = void 0 === n ? {} : n,
                      a = e.effect;
                    if ("function" == typeof a) {
                      var o = a({ state: s, name: t, instance: u, options: r });
                      c.push(o || function () {});
                    }
                  }),
                  u.update()
                );
              },
              forceUpdate: function () {
                if (!l) {
                  var e = s.elements,
                    t = e.reference,
                    n = e.popper;
                  if (an(t, n)) {
                    (s.rects = {
                      reference: tn(t, mt(n), "fixed" === s.options.strategy),
                      popper: st(n),
                    }),
                      (s.reset = !1),
                      (s.placement = s.options.placement),
                      s.orderedModifiers.forEach(function (e) {
                        return (s.modifiersData[e.name] = Object.assign(
                          {},
                          e.data
                        ));
                      });
                    for (var r = 0; r < s.orderedModifiers.length; r++)
                      if (!0 !== s.reset) {
                        var a = s.orderedModifiers[r],
                          o = a.fn,
                          i = a.options,
                          c = void 0 === i ? {} : i,
                          f = a.name;
                        "function" == typeof o &&
                          (s =
                            o({ state: s, options: c, name: f, instance: u }) ||
                            s);
                      } else (s.reset = !1), (r = -1);
                  }
                }
              },
              update:
                ((a = function () {
                  return new Promise(function (e) {
                    u.forceUpdate(), e(s);
                  });
                }),
                function () {
                  return (
                    i ||
                      (i = new Promise(function (e) {
                        Promise.resolve().then(function () {
                          (i = void 0), e(a());
                        });
                      })),
                    i
                  );
                }),
              destroy: function () {
                f(), (l = !0);
              },
            };
          if (!an(e, t)) return u;
          function f() {
            c.forEach(function (e) {
              return e();
            }),
              (c = []);
          }
          return (
            u.setOptions(n).then(function (e) {
              !l && n.onFirstUpdate && n.onFirstUpdate(e);
            }),
            u
          );
        };
      }
      var sn = on({ defaultModifiers: [Xt, $t, Rt, At, Gt, Jt, en, Pt] }),
        cn = function (e) {
          return {
            position: e,
            top: "0",
            left: "0",
            opacity: "0",
            pointerEvents: "none",
          };
        },
        ln = { name: "applyStyles", enabled: !1 },
        un = {
          name: "ariaDescribedBy",
          enabled: !0,
          phase: "afterWrite",
          effect: function (e) {
            var t = e.state;
            return function () {
              var e = t.elements,
                n = e.reference,
                r = e.popper;
              if ("removeAttribute" in n) {
                var a = (n.getAttribute("aria-describedby") || "")
                  .split(",")
                  .filter(function (e) {
                    return e.trim() !== r.id;
                  });
                a.length
                  ? n.setAttribute("aria-describedby", a.join(","))
                  : n.removeAttribute("aria-describedby");
              }
            };
          },
          fn: function (e) {
            var t,
              n = e.state.elements,
              r = n.popper,
              a = n.reference,
              o =
                null == (t = r.getAttribute("role")) ? void 0 : t.toLowerCase();
            if (r.id && "tooltip" === o && "setAttribute" in a) {
              var i = a.getAttribute("aria-describedby");
              if (i && -1 !== i.split(",").indexOf(r.id)) return;
              a.setAttribute("aria-describedby", i ? i + "," + r.id : r.id);
            }
          },
        },
        fn = [];
      var dn = function (e, t, n) {
        var a = void 0 === n ? {} : n,
          o = a.enabled,
          i = void 0 === o || o,
          s = a.placement,
          c = void 0 === s ? "bottom" : s,
          f = a.strategy,
          d = void 0 === f ? "absolute" : f,
          p = a.modifiers,
          v = void 0 === p ? fn : p,
          m = Object(u.a)(a, ["enabled", "placement", "strategy", "modifiers"]),
          b = Object(r.useRef)(),
          h = Object(r.useCallback)(function () {
            var e;
            null == (e = b.current) || e.update();
          }, []),
          g = Object(r.useCallback)(function () {
            var e;
            null == (e = b.current) || e.forceUpdate();
          }, []),
          y = Xe(
            Object(r.useState)({
              placement: c,
              update: h,
              forceUpdate: g,
              attributes: {},
              styles: { popper: cn(d), arrow: {} },
            })
          ),
          x = y[0],
          O = y[1],
          w = Object(r.useMemo)(
            function () {
              return {
                name: "updateStateModifier",
                enabled: !0,
                phase: "write",
                requires: ["computeStyles"],
                fn: function (e) {
                  var t = e.state,
                    n = {},
                    r = {};
                  Object.keys(t.elements).forEach(function (e) {
                    (n[e] = t.styles[e]), (r[e] = t.attributes[e]);
                  }),
                    O({
                      state: t,
                      styles: n,
                      attributes: r,
                      update: h,
                      forceUpdate: g,
                      placement: t.placement,
                    });
                },
              };
            },
            [h, g, O]
          );
        return (
          Object(r.useEffect)(
            function () {
              b.current &&
                i &&
                b.current.setOptions({
                  placement: c,
                  strategy: d,
                  modifiers: [].concat(v, [w, ln]),
                });
            },
            [d, c, w, i]
          ),
          Object(r.useEffect)(
            function () {
              if (i && null != e && null != t)
                return (
                  (b.current = sn(
                    e,
                    t,
                    Object(l.a)({}, m, {
                      placement: c,
                      strategy: d,
                      modifiers: [].concat(v, [un, w]),
                    })
                  )),
                  function () {
                    null != b.current &&
                      (b.current.destroy(),
                      (b.current = void 0),
                      O(function (e) {
                        return Object(l.a)({}, e, {
                          attributes: {},
                          styles: { popper: cn(d) },
                        });
                      }));
                  }
                );
            },
            [i, e, t]
          ),
          x
        );
      };
      var pn = function (e) {
          return Object(E.a)(
            (function (e) {
              return e && "setState" in e
                ? T.a.findDOMNode(e)
                : null != e
                ? e
                : null;
            })(e)
          );
        },
        vn = function () {};
      var mn = function (e) {
        return e && ("current" in e ? e.current : e);
      };
      var bn = function (e, t, n) {
        var a = void 0 === n ? {} : n,
          o = a.disabled,
          i = a.clickTrigger,
          s = void 0 === i ? "click" : i,
          c = Object(r.useRef)(!1),
          l = t || vn,
          u = Object(r.useCallback)(
            function (t) {
              var n,
                r,
                a,
                o,
                i = mn(e);
              Ie()(
                !!i,
                "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"
              ),
                (c.current = !(
                  i &&
                  ((o = t),
                  !(o.metaKey || o.altKey || o.ctrlKey || o.shiftKey)) &&
                  (function (e) {
                    return 0 === e.button;
                  })(t) &&
                  ((r = i),
                  (a =
                    null !=
                    (n = null == t.composedPath ? void 0 : t.composedPath()[0])
                      ? n
                      : t.target),
                  !(r.contains
                    ? r.contains(a)
                    : r.compareDocumentPosition
                    ? r === a || 16 & r.compareDocumentPosition(a)
                    : void 0))
                ));
            },
            [e]
          ),
          f = le(function (e) {
            c.current || l(e);
          }),
          d = le(function (e) {
            27 === e.keyCode && l(e);
          });
        Object(r.useEffect)(
          function () {
            if (!o && null != e) {
              var t = window.event,
                n = pn(mn(e)),
                r = V(n, s, u, !0),
                a = V(n, s, function (e) {
                  e !== t ? f(e) : (t = void 0);
                }),
                i = V(n, "keyup", function (e) {
                  e !== t ? d(e) : (t = void 0);
                }),
                c = [];
              return (
                "ontouchstart" in n.documentElement &&
                  (c = [].slice.call(n.body.children).map(function (e) {
                    return V(e, "mousemove", vn);
                  })),
                function () {
                  r(),
                    a(),
                    i(),
                    c.forEach(function (e) {
                      return e();
                    });
                }
              );
            }
          },
          [e, o, s, u, f, d]
        );
      };
      function hn(e) {
        var t,
          n,
          r,
          a,
          o,
          i = e.enabled,
          s = e.enableEvents,
          c = e.placement,
          u = e.flip,
          f = e.offset,
          d = e.fixed,
          p = e.containerPadding,
          v = e.arrowElement,
          m = e.popperConfig,
          b = void 0 === m ? {} : m,
          h = (function (e) {
            var t = {};
            return Array.isArray(e)
              ? (null == e ||
                  e.forEach(function (e) {
                    t[e.name] = e;
                  }),
                t)
              : e || t;
          })(b.modifiers);
        return Object(l.a)({}, b, {
          placement: c,
          enabled: i,
          strategy: d ? "fixed" : b.strategy,
          modifiers:
            ((o = Object(l.a)({}, h, {
              eventListeners: { enabled: s },
              preventOverflow: Object(l.a)({}, h.preventOverflow, {
                options: p
                  ? Object(l.a)(
                      { padding: p },
                      null == (t = h.preventOverflow) ? void 0 : t.options
                    )
                  : null == (n = h.preventOverflow)
                  ? void 0
                  : n.options,
              }),
              offset: {
                options: Object(l.a)(
                  { offset: f },
                  null == (r = h.offset) ? void 0 : r.options
                ),
              },
              arrow: Object(l.a)({}, h.arrow, {
                enabled: !!v,
                options: Object(l.a)(
                  {},
                  null == (a = h.arrow) ? void 0 : a.options,
                  { element: v }
                ),
              }),
              flip: Object(l.a)({ enabled: !!u }, h.flip),
            })),
            void 0 === o && (o = {}),
            Array.isArray(o)
              ? o
              : Object.keys(o).map(function (e) {
                  return (o[e].name = e), o[e];
                })),
        });
      }
      var gn = function () {};
      function yn(e) {
        void 0 === e && (e = {});
        var t = Object(r.useContext)(Qe),
          n = Object(r.useState)(null),
          a = n[0],
          o = n[1],
          i = Object(r.useRef)(!1),
          s = e,
          c = s.flip,
          u = s.offset,
          f = s.rootCloseEvent,
          d = s.fixed,
          p = void 0 !== d && d,
          v = s.popperConfig,
          m = void 0 === v ? {} : v,
          b = s.usePopper,
          h = void 0 === b ? !!t : b,
          g = null == (null == t ? void 0 : t.show) ? !!e.show : t.show,
          y =
            null == (null == t ? void 0 : t.alignEnd) ? e.alignEnd : t.alignEnd;
        g && !i.current && (i.current = !0);
        var x = t || {},
          O = x.drop,
          w = x.setMenu,
          E = x.menuElement,
          j = x.toggleElement,
          N = y ? "bottom-end" : "bottom-start";
        "up" === O
          ? (N = y ? "top-end" : "top-start")
          : "right" === O
          ? (N = y ? "right-end" : "right-start")
          : "left" === O && (N = y ? "left-end" : "left-start");
        var C = dn(
            j,
            E,
            hn({
              placement: N,
              enabled: !(!h || !g),
              enableEvents: g,
              offset: u,
              flip: c,
              fixed: p,
              arrowElement: a,
              popperConfig: m,
            })
          ),
          k = Object(l.a)(
            { ref: w || gn, "aria-labelledby": null == j ? void 0 : j.id },
            C.attributes.popper,
            { style: C.styles.popper }
          ),
          P = {
            show: g,
            alignEnd: y,
            hasShown: i.current,
            toggle: null == t ? void 0 : t.toggle,
            popper: h ? C : null,
            arrowProps: h
              ? Object(l.a)({ ref: o }, C.attributes.arrow, {
                  style: C.styles.arrow,
                })
              : {},
          };
        return (
          bn(
            E,
            function (e) {
              null == t || t.toggle(!1, e);
            },
            { clickTrigger: f, disabled: !g }
          ),
          [k, P]
        );
      }
      function xn(e) {
        var t = e.children,
          n = yn(Object(u.a)(e, ["children"])),
          r = n[0],
          o = n[1];
        return a.a.createElement(
          a.a.Fragment,
          null,
          o.hasShown ? t(r, o) : null
        );
      }
      (xn.displayName = "ReactOverlaysDropdownMenu"),
        (xn.defaultProps = { usePopper: !0 });
      var On = xn,
        wn = function () {};
      function En() {
        var e = Object(r.useContext)(Qe) || {},
          t = e.show,
          n = void 0 !== t && t,
          a = e.toggle,
          o = void 0 === a ? wn : a,
          i = e.setToggle,
          s = Object(r.useCallback)(
            function (e) {
              o(!n, e);
            },
            [n, o]
          );
        return [
          {
            ref: i || wn,
            onClick: s,
            "aria-haspopup": !0,
            "aria-expanded": !!n,
          },
          { show: n, toggle: o },
        ];
      }
      function jn(e) {
        var t = e.children,
          n = En(),
          r = n[0],
          o = n[1];
        return a.a.createElement(a.a.Fragment, null, t(r, o));
      }
      jn.displayName = "ReactOverlaysDropdownToggle";
      var Nn = jn;
      function Cn() {
        var e = we(),
          t = Object(r.useRef)(null),
          n = Object(r.useCallback)(
            function (n) {
              (t.current = n), e();
            },
            [e]
          );
        return [t, n];
      }
      function kn(e) {
        var t,
          n,
          o = e.drop,
          i = e.alignEnd,
          s = e.defaultShow,
          c = e.show,
          l = e.onToggle,
          u = e.itemSelector,
          f = void 0 === u ? "* > *" : u,
          d = e.focusFirstItemOnShow,
          p = e.children,
          v = m(c, s, l),
          b = v[0],
          h = v[1],
          g = Cn(),
          y = g[0],
          x = g[1],
          O = y.current,
          w = Cn(),
          E = w[0],
          j = w[1],
          N = E.current,
          C =
            ((t = b),
            (n = Object(r.useRef)(null)),
            Object(r.useEffect)(function () {
              n.current = t;
            }),
            n.current),
          k = Object(r.useRef)(null),
          P = Object(r.useRef)(!1),
          S = Object(r.useCallback)(
            function (e, t) {
              h(e, t);
            },
            [h]
          ),
          D = Object(r.useMemo)(
            function () {
              return {
                toggle: S,
                drop: o,
                show: b,
                alignEnd: i,
                menuElement: O,
                toggleElement: N,
                setMenu: x,
                setToggle: j,
              };
            },
            [S, o, b, i, O, N, x, j]
          );
        O && C && !b && (P.current = O.contains(document.activeElement));
        var T = le(function () {
            N && N.focus && N.focus();
          }),
          R = le(function () {
            var e = k.current,
              t = d;
            if (
              (null == t &&
                (t =
                  !(
                    !y.current ||
                    !(function (e, t) {
                      if (!_e) {
                        var n = document.body,
                          r =
                            n.matches ||
                            n.matchesSelector ||
                            n.webkitMatchesSelector ||
                            n.mozMatchesSelector ||
                            n.msMatchesSelector;
                        _e = function (e, t) {
                          return r.call(e, t);
                        };
                      }
                      return _e(e, t);
                    })(y.current, "[role=menu]")
                  ) && "keyboard"),
              !1 !== t && ("keyboard" !== t || /^key.+$/.test(e)))
            ) {
              var n = Oe(y.current, f)[0];
              n && n.focus && n.focus();
            }
          });
        Object(r.useEffect)(
          function () {
            b ? R() : P.current && ((P.current = !1), T());
          },
          [b, P, T, R]
        ),
          Object(r.useEffect)(function () {
            k.current = null;
          });
        var M = function (e, t) {
          if (!y.current) return null;
          var n = Oe(y.current, f),
            r = n.indexOf(e) + t;
          return n[(r = Math.max(0, Math.min(r, n.length)))];
        };
        return (
          Je("keydown", function (e) {
            var t,
              n,
              r = e.key,
              a = e.target,
              o = null == (t = y.current) ? void 0 : t.contains(a),
              i = null == (n = E.current) ? void 0 : n.contains(a);
            if (
              (!/input|textarea/i.test(a.tagName) ||
                !(" " === r || ("Escape" !== r && o))) &&
              (o || i) &&
              (y.current || "Tab" !== r)
            )
              switch (((k.current = e.type), r)) {
                case "ArrowUp":
                  var s = M(a, -1);
                  return s && s.focus && s.focus(), void e.preventDefault();
                case "ArrowDown":
                  if ((e.preventDefault(), b)) {
                    var c = M(a, 1);
                    c && c.focus && c.focus();
                  } else h(!0, e);
                  return;
                case "Tab":
                  z(
                    document,
                    "keyup",
                    function (t) {
                      var n;
                      (("Tab" !== t.key || t.target) &&
                        null != (n = y.current) &&
                        n.contains(t.target)) ||
                        h(!1, e);
                    },
                    { once: !0 }
                  );
                  break;
                case "Escape":
                  e.preventDefault(), e.stopPropagation(), h(!1, e);
              }
          }),
          a.a.createElement(Qe.Provider, { value: D }, p)
        );
      }
      (kn.displayName = "ReactOverlaysDropdown"),
        (kn.Menu = On),
        (kn.Toggle = Nn);
      var Pn = kn,
        Sn = [
          "bsPrefix",
          "className",
          "children",
          "eventKey",
          "disabled",
          "href",
          "onClick",
          "onSelect",
          "active",
          "as",
        ],
        Dn = { as: Ae.a, disabled: !1 },
        Tn = a.a.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            o = e.className,
            i = e.children,
            s = e.eventKey,
            c = e.disabled,
            f = e.href,
            p = e.onClick,
            v = e.onSelect,
            m = e.active,
            b = e.as,
            h = Object(u.a)(e, Sn),
            g = Object(y.a)(n, "dropdown-item"),
            x = Object(r.useContext)(ve),
            O = (Object(r.useContext)(Ce) || {}).activeKey,
            w = pe(s, f),
            E = null == m && null != w ? pe(O) === w : m,
            j = le(function (e) {
              c || (p && p(e), x && x(w, e), v && v(w, e));
            });
          return a.a.createElement(
            b,
            Object(l.a)({}, h, {
              ref: t,
              href: f,
              disabled: c,
              className: d()(o, g, E && "active", c && "disabled"),
              onClick: j,
            }),
            i
          );
        });
      (Tn.displayName = "DropdownItem"), (Tn.defaultProps = Dn);
      var Rn = Tn,
        Mn = n("17x9"),
        An = n.n(Mn);
      function Ln(e, t) {
        return e;
      }
      var In = n("KXUJ");
      function Bn(e) {
        var t = window.getComputedStyle(e);
        return {
          top: parseFloat(t.marginTop) || 0,
          right: parseFloat(t.marginRight) || 0,
          bottom: parseFloat(t.marginBottom) || 0,
          left: parseFloat(t.marginLeft) || 0,
        };
      }
      var qn = [
          "bsPrefix",
          "className",
          "align",
          "alignRight",
          "rootCloseEvent",
          "flip",
          "show",
          "renderOnMount",
          "as",
          "popperConfig",
        ],
        Kn = An.a.oneOf(["left", "right"]),
        Wn =
          (An.a.oneOfType([
            Kn,
            An.a.shape({ sm: Kn }),
            An.a.shape({ md: Kn }),
            An.a.shape({ lg: Kn }),
            An.a.shape({ xl: Kn }),
          ]),
          a.a.forwardRef(function (e, t) {
            var n,
              o,
              i,
              s,
              c,
              f = e.bsPrefix,
              p = e.className,
              v = e.align,
              m = e.alignRight,
              b = e.rootCloseEvent,
              h = e.flip,
              g = e.show,
              x = e.renderOnMount,
              O = e.as,
              w = void 0 === O ? "div" : O,
              E = e.popperConfig,
              j = Object(u.a)(e, qn),
              N = Object(r.useContext)(ae),
              C = Object(y.a)(f, "dropdown-menu"),
              k =
                ((n = Object(r.useRef)(null)),
                (o = Object(r.useRef)(null)),
                (i = Object(r.useRef)(null)),
                (s = Object(y.a)(void 0, "popover")),
                (c = Object(y.a)(void 0, "dropdown-menu")),
                [
                  Object(r.useCallback)(
                    function (e) {
                      e &&
                        (Object(In.a)(e, s) || Object(In.a)(e, c)) &&
                        ((o.current = Bn(e)),
                        (e.style.margin = "0"),
                        (n.current = e));
                    },
                    [s, c]
                  ),
                  [
                    Object(r.useMemo)(
                      function () {
                        return {
                          name: "offset",
                          options: {
                            offset: function (e) {
                              var t = e.placement;
                              if (!o.current) return [0, 0];
                              var n = o.current,
                                r = n.top,
                                a = n.left,
                                i = n.bottom,
                                s = n.right;
                              switch (t.split("-")[0]) {
                                case "top":
                                  return [0, i];
                                case "left":
                                  return [0, s];
                                case "bottom":
                                  return [0, r];
                                case "right":
                                  return [0, a];
                                default:
                                  return [0, 0];
                              }
                            },
                          },
                        };
                      },
                      [o]
                    ),
                    Object(r.useMemo)(
                      function () {
                        return {
                          name: "arrow",
                          options: {
                            padding: function () {
                              if (!i.current) return 0;
                              var e = i.current,
                                t = e.top,
                                n = e.right,
                                r = t || n;
                              return { top: r, left: r, right: r, bottom: r };
                            },
                          },
                        };
                      },
                      [i]
                    ),
                    Object(r.useMemo)(
                      function () {
                        return {
                          name: "popoverArrowMargins",
                          enabled: !0,
                          phase: "main",
                          fn: function () {},
                          requiresIfExists: ["arrow"],
                          effect: function (e) {
                            var t = e.state;
                            if (
                              n.current &&
                              t.elements.arrow &&
                              Object(In.a)(n.current, s)
                            ) {
                              if (t.modifiersData["arrow#persistent"]) {
                                var r = Bn(t.elements.arrow),
                                  a = r.top,
                                  o = r.right,
                                  c = a || o;
                                t.modifiersData["arrow#persistent"].padding = {
                                  top: c,
                                  left: c,
                                  right: c,
                                  bottom: c,
                                };
                              } else i.current = Bn(t.elements.arrow);
                              return (
                                (t.elements.arrow.style.margin = "0"),
                                function () {
                                  t.elements.arrow &&
                                    (t.elements.arrow.style.margin = "");
                                }
                              );
                            }
                          },
                        };
                      },
                      [s]
                    ),
                  ],
                ]),
              P = k[0],
              S = k[1],
              D = [];
            if (v)
              if ("object" == typeof v) {
                var T = Object.keys(v);
                if (T.length) {
                  var R = T[0],
                    M = v[R];
                  (m = "left" === M), D.push(C + "-" + R + "-" + M);
                }
              } else "right" === v && (m = !0);
            var A = yn({
                flip: h,
                rootCloseEvent: b,
                show: g,
                alignEnd: m,
                usePopper: !N && 0 === D.length,
                popperConfig: Object(l.a)({}, E, {
                  modifiers: S.concat((null == E ? void 0 : E.modifiers) || []),
                }),
              }),
              L = A[0],
              I = A[1],
              B = I.hasShown,
              q = I.popper,
              K = I.show,
              W = I.alignEnd,
              z = I.toggle;
            if (((L.ref = je(P, je(Ln(t), L.ref))), !B && !x)) return null;
            "string" != typeof w &&
              ((L.show = K),
              (L.close = function () {
                return null == z ? void 0 : z(!1);
              }),
              (L.alignRight = W));
            var U = j.style;
            return (
              null != q &&
                q.placement &&
                ((U = Object(l.a)({}, j.style, L.style)),
                (j["x-placement"] = q.placement)),
              a.a.createElement(
                w,
                Object(l.a)({}, j, L, {
                  style: U,
                  className: d.a.apply(
                    void 0,
                    [p, C, K && "show", W && C + "-right"].concat(D)
                  ),
                })
              )
            );
          }));
      (Wn.displayName = "DropdownMenu"),
        (Wn.defaultProps = { align: "left", alignRight: !1, flip: !0 });
      var zn = Wn,
        Un =
          (n("BO/t"),
          ["bsPrefix", "split", "className", "childBsPrefix", "as"]),
        Vn = a.a.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            r = e.split,
            o = e.className,
            i = e.childBsPrefix,
            c = e.as,
            f = void 0 === c ? s.a : c,
            p = Object(u.a)(e, Un),
            v = Object(y.a)(n, "dropdown-toggle");
          void 0 !== i && (p.bsPrefix = i);
          var m = En()[0];
          return (
            (m.ref = je(m.ref, Ln(t))),
            a.a.createElement(
              f,
              Object(l.a)({ className: d()(o, v, r && v + "-split") }, m, p)
            )
          );
        });
      Vn.displayName = "DropdownToggle";
      var Fn = Vn,
        Hn = [
          "bsPrefix",
          "drop",
          "show",
          "className",
          "alignRight",
          "onSelect",
          "onToggle",
          "focusFirstItemOnShow",
          "as",
          "navbar",
        ],
        _n = Object(g.a)("dropdown-header", {
          defaultProps: { role: "heading" },
        }),
        Yn = Object(g.a)("dropdown-divider", {
          defaultProps: { role: "separator" },
        }),
        Jn = Object(g.a)("dropdown-item-text", { Component: "span" }),
        Qn = a.a.forwardRef(function (e, t) {
          var n = b(e, { show: "onToggle" }),
            o = n.bsPrefix,
            i = n.drop,
            s = n.show,
            c = n.className,
            f = n.alignRight,
            p = n.onSelect,
            v = n.onToggle,
            m = n.focusFirstItemOnShow,
            h = n.as,
            g = void 0 === h ? "div" : h,
            x = (n.navbar, Object(u.a)(n, Hn)),
            O = Object(r.useContext)(ve),
            w = Object(y.a)(o, "dropdown"),
            E = le(function (e, t, n) {
              void 0 === n && (n = t.type),
                t.currentTarget !== document ||
                  ("keydown" === n && "Escape" !== t.key) ||
                  (n = "rootClose"),
                v && v(e, t, { source: n });
            }),
            j = le(function (e, t) {
              O && O(e, t), p && p(e, t), E(!1, t, "select");
            });
          return a.a.createElement(
            ve.Provider,
            { value: j },
            a.a.createElement(
              Pn,
              {
                drop: i,
                show: s,
                alignEnd: f,
                onToggle: E,
                focusFirstItemOnShow: m,
                itemSelector: "." + w + "-item:not(.disabled):not(:disabled)",
              },
              a.a.createElement(
                g,
                Object(l.a)({}, x, {
                  ref: t,
                  className: d()(
                    c,
                    s && "show",
                    (!i || "down" === i) && w,
                    "up" === i && "dropup",
                    "right" === i && "dropright",
                    "left" === i && "dropleft"
                  ),
                })
              )
            )
          );
        });
      (Qn.displayName = "Dropdown"),
        (Qn.defaultProps = { navbar: !1 }),
        (Qn.Divider = Yn),
        (Qn.Header = _n),
        (Qn.Item = Rn),
        (Qn.ItemText = Jn),
        (Qn.Menu = zn),
        (Qn.Toggle = Fn);
      var Zn = Qn,
        Xn = [
          "id",
          "title",
          "children",
          "bsPrefix",
          "className",
          "rootCloseEvent",
          "menuRole",
          "disabled",
          "active",
          "renderMenuOnMount",
        ],
        Gn = a.a.forwardRef(function (e, t) {
          var n = e.id,
            r = e.title,
            o = e.children,
            i = e.bsPrefix,
            s = e.className,
            c = e.rootCloseEvent,
            f = e.menuRole,
            p = e.disabled,
            v = e.active,
            m = e.renderMenuOnMount,
            b = Object(u.a)(e, Xn),
            h = Object(y.a)(void 0, "nav-item");
          return a.a.createElement(
            Zn,
            Object(l.a)({ ref: t }, b, { className: d()(s, h) }),
            a.a.createElement(
              Zn.Toggle,
              {
                id: n,
                eventKey: null,
                active: v,
                disabled: p,
                childBsPrefix: i,
                as: Ve,
              },
              r
            ),
            a.a.createElement(
              Zn.Menu,
              { role: f, renderOnMount: m, rootCloseEvent: c },
              o
            )
          );
        });
      (Gn.displayName = "NavDropdown"),
        (Gn.Item = Zn.Item),
        (Gn.ItemText = Zn.ItemText),
        (Gn.Divider = Zn.Divider),
        (Gn.Header = Zn.Header);
      var $n = Gn,
        er = function () {
          var e = Object(o.a)();
          return a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement(
              ge,
              {
                collapseOnSelect: !0,
                expand: "lg",
                bg: "dark",
                variant: "dark",
              },
              a.a.createElement(
                c.a,
                { className: "header" },
                a.a.createElement(
                  ge.Brand,
                  null,
                  a.a.createElement(
                    i.a,
                    { to: "/", className: "text-white font-weight-bold" },
                    a.a.createElement("span", { className: "header-logo" })
                  )
                ),
                a.a.createElement(ge.Toggle, {
                  "aria-controls": "responsive-navbar-nav",
                }),
                a.a.createElement(
                  ge.Collapse,
                  { id: "responsive-navbar-nav" },
                  a.a.createElement(Ye, { className: "mr-auto" }),
                  a.a.createElement(
                    $n,
                    {
                      title: e.formatMessage({ id: "wg" }),
                      id: "collasible-nav-dropdown-wg",
                      className: "working-group nav-item",
                    },
                    a.a.createElement(
                      i.a,
                      {
                        to: "/id-voting/",
                        className: "working-group-item dropdown-item",
                      },
                      e.formatMessage({ id: "groupName_id-voting" })
                    ),
                    a.a.createElement(
                      i.a,
                      {
                        to: "/ethereum2.0/",
                        className: "working-group-item dropdown-item",
                      },
                      e.formatMessage({ id: "groupName_ethereum2.0" })
                    ),
                    a.a.createElement(
                      i.a,
                      {
                        to: "/students/",
                        className: "working-group-item dropdown-item",
                      },
                      e.formatMessage({ id: "groupName_students" })
                    ),
                    a.a.createElement(
                      i.a,
                      {
                        to: "/scaling/",
                        className: "working-group-item dropdown-item",
                      },
                      e.formatMessage({ id: "groupName_scaling" })
                    )
                  ),
                  a.a.createElement(
                    "div",
                    { className: "nav-item news pr-3" },
                    a.a.createElement(
                      i.a,
                      { to: "/news" },
                      e.formatMessage({ id: "news" })
                    )
                  ),
                  a.a.createElement(
                    "div",
                    { className: "up-lg" },
                    a.a.createElement(
                      s.a,
                      {
                        variant: "none",
                        href: "https://forms.gle/3ptEzDnWtrzqShMz8",
                        className: "contact-button nav-item",
                      },
                      e.formatMessage({ id: "contact" })
                    )
                  ),
                  a.a.createElement(
                    "div",
                    { className: "down-md" },
                    a.a.createElement(
                      "div",
                      { className: "nav-item news pr-3" },
                      a.a.createElement(
                        "a",
                        {
                          href: "https://forms.gle/3ptEzDnWtrzqShMz8",
                          className: "nav-item",
                        },
                        e.formatMessage({ id: "contact" })
                      )
                    )
                  ),
                  a.a.createElement(
                    "div",
                    { className: "up-lg" },
                    a.a.createElement(
                      Zn,
                      { className: "ml-2" },
                      a.a.createElement(
                        Fn,
                        { variant: "none" },
                        a.a.createElement("img", {
                          src: "/svg/np_language.svg",
                          height: "32",
                          width: "32",
                          alt: "language",
                        })
                      ),
                      a.a.createElement(
                        zn,
                        {
                          id: "collasible-nav-dropdown",
                          className: "dropdown-menu",
                        },
                        a.a.createElement(
                          Rn,
                          { className: "dropdown-item", href: "/" },
                          "日本語"
                        ),
                        a.a.createElement(
                          Rn,
                          { className: "dropdown-item", href: "/en" },
                          "English"
                        )
                      )
                    )
                  ),
                  a.a.createElement(
                    "div",
                    { className: "down-md" },
                    a.a.createElement(
                      "div",
                      { className: "nav-item news pr-3" },
                      a.a.createElement("a", { href: "/" }, "日本語"),
                      a.a.createElement(
                        "span",
                        { style: { color: "white" } },
                        " / "
                      ),
                      a.a.createElement("a", { href: "/en" }, "English")
                    )
                  )
                )
              )
            )
          );
        },
        tr = n("JI6e"),
        nr = n("3Z9Z"),
        rr = function () {
          return a.a.createElement(
            "footer",
            { className: "footer" },
            a.a.createElement(
              c.a,
              { fluid: !0, className: "pt-5 pb-2 bg-dark text-white" },
              a.a.createElement(
                nr.a,
                { className: "justify-content-md-center mb-5" },
                a.a.createElement(
                  tr.a,
                  null,
                  a.a.createElement(
                    "h4",
                    { className: "text-center footer-title" },
                    " "
                  )
                ),
                a.a.createElement(tr.a, null),
                a.a.createElement(
                  tr.a,
                  null,
                  a.a.createElement(
                    "ul",
                    { className: "list-unstyled" },
                    a.a.createElement(
                      "li",
                      null,
                      a.a.createElement(
                        i.a,
                        {
                          to: "/news",
                          rel: "noreferrer",
                          className: "text-white",
                        },
                        "News"
                      )
                    ),
                    a.a.createElement(
                      "li",
                      null,
                      a.a.createElement(
                        "a",
                        {
                          href: "https://github.com/ethereum-terakoya",
                          target: "_blank",
                          rel: "noreferrer",
                          className: "text-white",
                        },
                        "Github"
                      )
                    ),
                    a.a.createElement(
                      "li",
                      null,
                      a.a.createElement(
                        "a",
                        {
                          href: "/",
                          rel: "noreferrer",
                          className: "text-white",
                        },
                        "Contributors"
                      )
                    ),
                    a.a.createElement(
                      "li",
                      null,
                      a.a.createElement(
                        "a",
                        {
                          href: "/",
                          rel: "noreferrer",
                          className: "text-white",
                        },
                        "Privacy Policy"
                      )
                    ),
                    a.a.createElement(
                      "li",
                      null,
                      a.a.createElement(
                        "a",
                        {
                          href: "/",
                          rel: "noreferrer",
                          className: "text-white",
                        },
                        "Terms"
                      )
                    )
                  )
                )
              ),
              a.a.createElement(
                nr.a,
                null,
                a.a.createElement(
                  tr.a,
                  null,
                  a.a.createElement(
                    "p",
                    { className: "small text-center" },
                    "© ",
                    new Date().getFullYear(),
                    " EEA Japan"
                  )
                )
              )
            )
          );
        };
      t.a = function (e) {
        var t = e.children;
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(er, null),
          a.a.createElement("main", null, t),
          a.a.createElement(rr, null)
        );
      };
    },
    CDr4: function (e, t, n) {
      "use strict";
      var r = n("DVFp"),
        a = TypeError;
      e.exports = function (e, t) {
        if (!delete e[t])
          throw a("Cannot delete property " + r(t) + " of " + r(e));
      };
    },
    Frpm: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      });
      n("eq4K");
      var r = n("zLVn"),
        a = n("q1tI"),
        o = n("Wbzz"),
        i = n("B+z7"),
        s = n("yAkg"),
        c = ["to", "language"],
        l = function (e) {
          var t = e.to,
            n = e.language,
            l = Object(r.a)(e, c),
            u = Object(s.a)(),
            f = u.defaultLang,
            d = u.prefixDefault,
            p = u.locale,
            v = n || p;
          return a.createElement(
            o.Link,
            Object.assign({}, l, {
              to: Object(i.localizedPath)({
                defaultLang: f,
                prefixDefault: d,
                locale: v,
                path: t,
              }),
            })
          );
        };
      n("YwZP");
    },
    JI6e: function (e, t, n) {
      "use strict";
      var r = n("wx14"),
        a = n("zLVn"),
        o = n("TSYQ"),
        i = n.n(o),
        s = n("q1tI"),
        c = n.n(s),
        l = n("vUet"),
        u = ["bsPrefix", "className", "as"],
        f = ["xl", "lg", "md", "sm", "xs"],
        d = c.a.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            o = e.className,
            s = e.as,
            d = void 0 === s ? "div" : s,
            p = Object(a.a)(e, u),
            v = Object(l.a)(n, "col"),
            m = [],
            b = [];
          return (
            f.forEach(function (e) {
              var t,
                n,
                r,
                a = p[e];
              if ((delete p[e], "object" == typeof a && null != a)) {
                var o = a.span;
                (t = void 0 === o || o), (n = a.offset), (r = a.order);
              } else t = a;
              var i = "xs" !== e ? "-" + e : "";
              t && m.push(!0 === t ? "" + v + i : "" + v + i + "-" + t),
                null != r && b.push("order" + i + "-" + r),
                null != n && b.push("offset" + i + "-" + n);
            }),
            m.length || m.push(v),
            c.a.createElement(
              d,
              Object(r.a)({}, p, {
                ref: t,
                className: i.a.apply(void 0, [o].concat(m, b)),
              })
            )
          );
        });
      (d.displayName = "Col"), (t.a = d);
    },
    K9S6: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function () {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          function r() {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            var a = null;
            return (
              t.forEach(function (e) {
                if (null == a) {
                  var t = e.apply(void 0, n);
                  null != t && (a = t);
                }
              }),
              a
            );
          }
          return (0, o.default)(r);
        });
      var r,
        a = n("pvIh"),
        o = (r = a) && r.__esModule ? r : { default: r };
      e.exports = t.default;
    },
    KXUJ: function (e, t, n) {
      "use strict";
      function r(e, t) {
        return e.classList
          ? !!t && e.classList.contains(t)
          : -1 !==
              (" " + (e.className.baseVal || e.className) + " ").indexOf(
                " " + t + " "
              );
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    Qg85: function (e, t, n) {
      "use strict";
      n("E9XD");
      t.a = function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return t
          .filter(function (e) {
            return null != e;
          })
          .reduce(function (e, t) {
            if ("function" != typeof t)
              throw new Error(
                "Invalid Argument Type, must only provide functions, undefined, or null."
              );
            return null === e
              ? t
              : function () {
                  for (
                    var n = arguments.length, r = new Array(n), a = 0;
                    a < n;
                    a++
                  )
                    r[a] = arguments[a];
                  e.apply(this, r), t.apply(this, r);
                };
          }, null);
      };
    },
    SJxq: function (e, t, n) {
      "use strict";
      t.a = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
    },
    TSYQ: function (e, t, n) {
      var r;
      !(function () {
        "use strict";
        var n = {}.hasOwnProperty;
        function a() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var r = arguments[t];
            if (r) {
              var o = typeof r;
              if ("string" === o || "number" === o) e.push(r);
              else if (Array.isArray(r)) {
                if (r.length) {
                  var i = a.apply(null, r);
                  i && e.push(i);
                }
              } else if ("object" === o)
                if (r.toString === Object.prototype.toString)
                  for (var s in r) n.call(r, s) && r[s] && e.push(s);
                else e.push(r.toString());
            }
          }
          return e.join(" ");
        }
        e.exports
          ? ((a.default = a), (e.exports = a))
          : void 0 ===
              (r = function () {
                return a;
              }.apply(t, [])) || (e.exports = r);
      })();
    },
    Ta7t: function (e, t, n) {
      var r = n("I8vh"),
        a = n("B/qT"),
        o = n("hBjN"),
        i = Array,
        s = Math.max;
      e.exports = function (e, t, n) {
        for (
          var c = a(e),
            l = r(t, c),
            u = r(void 0 === n ? c : n, c),
            f = i(s(u - l, 0)),
            d = 0;
          l < u;
          l++, d++
        )
          o(f, d, e[l]);
        return (f.length = d), f;
      };
    },
    ToJy: function (e, t, n) {
      "use strict";
      var r = n("I+eb"),
        a = n("4zBA"),
        o = n("We1y"),
        i = n("ewvW"),
        s = n("B/qT"),
        c = n("CDr4"),
        l = n("V37c"),
        u = n("0Dky"),
        f = n("rdv8"),
        d = n("pkCn"),
        p = n("BNF5"),
        v = n("2Zix"),
        m = n("LQDL"),
        b = n("USzg"),
        h = [],
        g = a(h.sort),
        y = a(h.push),
        x = u(function () {
          h.sort(void 0);
        }),
        O = u(function () {
          h.sort(null);
        }),
        w = d("sort"),
        E = !u(function () {
          if (m) return m < 70;
          if (!(p && p > 3)) {
            if (v) return !0;
            if (b) return b < 603;
            var e,
              t,
              n,
              r,
              a = "";
            for (e = 65; e < 76; e++) {
              switch (((t = String.fromCharCode(e)), e)) {
                case 66:
                case 69:
                case 70:
                case 72:
                  n = 3;
                  break;
                case 68:
                case 71:
                  n = 4;
                  break;
                default:
                  n = 2;
              }
              for (r = 0; r < 47; r++) h.push({ k: t + r, v: n });
            }
            for (
              h.sort(function (e, t) {
                return t.v - e.v;
              }),
                r = 0;
              r < h.length;
              r++
            )
              (t = h[r].k.charAt(0)), a.charAt(a.length - 1) !== t && (a += t);
            return "DGBEFHACIJK" !== a;
          }
        });
      r(
        { target: "Array", proto: !0, forced: x || !O || !w || !E },
        {
          sort: function (e) {
            void 0 !== e && o(e);
            var t = i(this);
            if (E) return void 0 === e ? g(t) : g(t, e);
            var n,
              r,
              a = [],
              u = s(t);
            for (r = 0; r < u; r++) r in t && y(a, t[r]);
            for (
              f(
                a,
                (function (e) {
                  return function (t, n) {
                    return void 0 === n
                      ? -1
                      : void 0 === t
                      ? 1
                      : void 0 !== e
                      ? +e(t, n) || 0
                      : l(t) > l(n)
                      ? 1
                      : -1;
                  };
                })(e)
              ),
                n = a.length,
                r = 0;
              r < n;

            )
              t[r] = a[r++];
            for (; r < u; ) c(t, r++);
            return t;
          },
        }
      );
    },
    USzg: function (e, t, n) {
      var r = n("NC/Y").match(/AppleWebKit\/(\d+)\./);
      e.exports = !!r && +r[1];
    },
    Wzyw: function (e, t, n) {
      "use strict";
      var r = n("q1tI"),
        a = n.n(r).a.createContext(null);
      (a.displayName = "CardContext"), (t.a = a);
    },
    XcHJ: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var r = n("q1tI");
      function a() {
        var e = Object(r.useRef)(!0),
          t = Object(r.useRef)(function () {
            return e.current;
          });
        return (
          Object(r.useEffect)(function () {
            return (
              (e.current = !0),
              function () {
                e.current = !1;
              }
            );
          }, []),
          t.current
        );
      }
    },
    YdCC: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return p;
      });
      var r = n("wx14"),
        a = n("zLVn"),
        o = n("TSYQ"),
        i = n.n(o),
        s = /-(.)/g;
      var c = n("q1tI"),
        l = n.n(c),
        u = n("vUet"),
        f = ["className", "bsPrefix", "as"],
        d = function (e) {
          return (
            e[0].toUpperCase() +
            ((t = e),
            t.replace(s, function (e, t) {
              return t.toUpperCase();
            })).slice(1)
          );
          var t;
        };
      function p(e, t) {
        var n = void 0 === t ? {} : t,
          o = n.displayName,
          s = void 0 === o ? d(e) : o,
          c = n.Component,
          p = n.defaultProps,
          v = l.a.forwardRef(function (t, n) {
            var o = t.className,
              s = t.bsPrefix,
              d = t.as,
              p = void 0 === d ? c || "div" : d,
              v = Object(a.a)(t, f),
              m = Object(u.a)(s, e);
            return l.a.createElement(
              p,
              Object(r.a)({ ref: n, className: i()(o, m) }, v)
            );
          });
        return (v.defaultProps = p), (v.displayName = s), v;
      }
    },
    cWnB: function (e, t, n) {
      "use strict";
      var r = n("wx14"),
        a = n("zLVn"),
        o = n("TSYQ"),
        i = n.n(o),
        s = n("q1tI"),
        c = n.n(s),
        l = n("vUet"),
        u = n("dbZe"),
        f = [
          "bsPrefix",
          "variant",
          "size",
          "active",
          "className",
          "block",
          "type",
          "as",
        ],
        d = c.a.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            o = e.variant,
            s = e.size,
            d = e.active,
            p = e.className,
            v = e.block,
            m = e.type,
            b = e.as,
            h = Object(a.a)(e, f),
            g = Object(l.a)(n, "btn"),
            y = i()(
              p,
              g,
              d && "active",
              o && g + "-" + o,
              v && g + "-block",
              s && g + "-" + s
            );
          if (h.href)
            return c.a.createElement(
              u.a,
              Object(r.a)({}, h, {
                as: b,
                ref: t,
                className: i()(y, h.disabled && "disabled"),
              })
            );
          t && (h.ref = t), m ? (h.type = m) : b || (h.type = "button");
          var x = b || "button";
          return c.a.createElement(x, Object(r.a)({}, h, { className: y }));
        });
      (d.displayName = "Button"),
        (d.defaultProps = { variant: "primary", active: !1, disabled: !1 }),
        (t.a = d);
    },
    dDsW: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var r = n("q1tI"),
        a = n("2OET"),
        o = n("N3fz");
      function i() {
        var e = r.useContext(a.a);
        return Object(o.c)(e), e;
      }
    },
    dZvc: function (e, t, n) {
      "use strict";
      function r(e) {
        return (e && e.ownerDocument) || document;
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    dbZe: function (e, t, n) {
      "use strict";
      var r = n("wx14"),
        a = n("zLVn"),
        o = n("q1tI"),
        i = n.n(o),
        s = n("Qg85"),
        c = ["as", "disabled", "onKeyDown"];
      function l(e) {
        return !e || "#" === e.trim();
      }
      var u = i.a.forwardRef(function (e, t) {
        var n = e.as,
          o = void 0 === n ? "a" : n,
          u = e.disabled,
          f = e.onKeyDown,
          d = Object(a.a)(e, c),
          p = function (e) {
            var t = d.href,
              n = d.onClick;
            (u || l(t)) && e.preventDefault(),
              u ? e.stopPropagation() : n && n(e);
          };
        return (
          l(d.href) &&
            ((d.role = d.role || "button"), (d.href = d.href || "#")),
          u && ((d.tabIndex = -1), (d["aria-disabled"] = !0)),
          i.a.createElement(
            o,
            Object(r.a)({ ref: t }, d, {
              onClick: p,
              onKeyDown: Object(s.a)(function (e) {
                " " === e.key && (e.preventDefault(), p(e));
              }, f),
            })
          )
        );
      });
      (u.displayName = "SafeAnchor"), (t.a = u);
    },
    pvIh: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          function t(t, n, r, a, o, i) {
            var s = a || "<<anonymous>>",
              c = i || r;
            if (null == n[r])
              return t
                ? new Error(
                    "Required " +
                      o +
                      " `" +
                      c +
                      "` was not specified in `" +
                      s +
                      "`."
                  )
                : null;
            for (
              var l = arguments.length, u = Array(l > 6 ? l - 6 : 0), f = 6;
              f < l;
              f++
            )
              u[f - 6] = arguments[f];
            return e.apply(void 0, [n, r, s, o, c].concat(u));
          }
          var n = t.bind(null, !1);
          return (n.isRequired = t.bind(null, !0)), n;
        }),
        (e.exports = t.default);
    },
    q4sD: function (e, t, n) {},
    rdv8: function (e, t, n) {
      var r = n("Ta7t"),
        a = Math.floor,
        o = function (e, t) {
          var n = e.length,
            c = a(n / 2);
          return n < 8 ? i(e, t) : s(e, o(r(e, 0, c), t), o(r(e, c), t), t);
        },
        i = function (e, t) {
          for (var n, r, a = e.length, o = 1; o < a; ) {
            for (r = o, n = e[o]; r && t(e[r - 1], n) > 0; ) e[r] = e[--r];
            r !== o++ && (e[r] = n);
          }
          return e;
        },
        s = function (e, t, n, r) {
          for (var a = t.length, o = n.length, i = 0, s = 0; i < a || s < o; )
            e[i + s] =
              i < a && s < o
                ? r(t[i], n[s]) <= 0
                  ? t[i++]
                  : n[s++]
                : i < a
                ? t[i++]
                : n[s++];
          return e;
        };
      e.exports = o;
    },
    vUet: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      n("wx14");
      var r = n("q1tI"),
        a = n.n(r),
        o = a.a.createContext({});
      o.Consumer, o.Provider;
      function i(e, t) {
        var n = Object(r.useContext)(o);
        return e || n[t] || t;
      }
    },
    wx14: function (e, t, n) {
      "use strict";
      function r() {
        return (r = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    zLVn: function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      n.d(t, "a", function () {
        return r;
      });
    },
  },
]);
//# sourceMappingURL=commons-4e622e13eb69850f5dee.js.map
