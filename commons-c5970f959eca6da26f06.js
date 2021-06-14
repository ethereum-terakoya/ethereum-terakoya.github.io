(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    "+JL2": function (e, t, n) {
      "use strict";
      var r = n("RjgW"),
        a = n("GEtZ"),
        o = n("q1tI"),
        i = n("ZCiN"),
        c = n("2W6z"),
        s = n.n(c),
        l = n("dZvc"),
        u = n("i8i4"),
        f = n.n(u);
      var d = function (e) {
          return Object(l.a)(
            (function (e) {
              return e && "setState" in e
                ? f.a.findDOMNode(e)
                : null != e
                ? e
                : null;
            })(e)
          );
        },
        p = function () {};
      var m = function (e) {
        return e && ("current" in e ? e.current : e);
      };
      t.a = function (e, t, n) {
        var c = void 0 === n ? {} : n,
          l = c.disabled,
          u = c.clickTrigger,
          f = void 0 === u ? "click" : u,
          v = Object(o.useRef)(!1),
          b = t || p,
          h = Object(o.useCallback)(
            function (t) {
              var n,
                a = m(e);
              s()(
                !!a,
                "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"
              ),
                (v.current = !(
                  a &&
                  ((n = t),
                  !(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey)) &&
                  (function (e) {
                    return 0 === e.button;
                  })(t) &&
                  !Object(r.a)(a, t.target)
                ));
            },
            [e]
          ),
          g = Object(i.a)(function (e) {
            v.current || b(e);
          }),
          O = Object(i.a)(function (e) {
            27 === e.keyCode && b(e);
          });
        Object(o.useEffect)(
          function () {
            if (!l && null != e) {
              var t = d(m(e)),
                n = Object(a.a)(t, f, h, !0),
                r = Object(a.a)(t, f, g),
                o = Object(a.a)(t, "keyup", O),
                i = [];
              return (
                "ontouchstart" in t.documentElement &&
                  (i = [].slice.call(t.body.children).map(function (e) {
                    return Object(a.a)(e, "mousemove", p);
                  })),
                function () {
                  n(),
                    r(),
                    o(),
                    i.forEach(function (e) {
                      return e();
                    });
                }
              );
            }
          },
          [e, l, f, h, g, O]
        );
      };
    },
    "2W6z": function (e, t, n) {
      "use strict";
      var r = function () {};
      e.exports = r;
    },
    "3Z9Z": function (e, t, n) {
      "use strict";
      var r = n("wx14"),
        a = n("zLVn"),
        o = n("TSYQ"),
        i = n.n(o),
        c = n("q1tI"),
        s = n.n(c),
        l = n("vUet"),
        u = ["xl", "lg", "md", "sm", "xs"],
        f = s.a.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            o = e.className,
            c = e.noGutters,
            f = e.as,
            d = void 0 === f ? "div" : f,
            p = Object(a.a)(e, ["bsPrefix", "className", "noGutters", "as"]),
            m = Object(l.a)(n, "row"),
            v = m + "-cols",
            b = [];
          return (
            u.forEach(function (e) {
              var t,
                n = p[e];
              delete p[e];
              var r = "xs" !== e ? "-" + e : "";
              null != (t = null != n && "object" == typeof n ? n.cols : n) &&
                b.push("" + v + r + "-" + t);
            }),
            s.a.createElement(
              d,
              Object(r.a)({ ref: t }, p, {
                className: i.a.apply(
                  void 0,
                  [o, m, c && "no-gutters"].concat(b)
                ),
              })
            )
          );
        });
      (f.displayName = "Row"), (f.defaultProps = { noGutters: !1 }), (t.a = f);
    },
    "7A6N": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var r = n("q1tI");
      function a() {
        return Object(r.useState)(null);
      }
    },
    "7j6X": function (e, t, n) {
      "use strict";
      var r = n("dZvc");
      function a(e, t) {
        return (function (e) {
          var t = Object(r.a)(e);
          return (t && t.defaultView) || window;
        })(e).getComputedStyle(e, t);
      }
      var o = /([A-Z])/g;
      var i = /^ms-/;
      function c(e) {
        return (function (e) {
          return e.replace(o, "-$1").toLowerCase();
        })(e).replace(i, "-ms-");
      }
      var s = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
      t.a = function (e, t) {
        var n = "",
          r = "";
        if ("string" == typeof t)
          return e.style.getPropertyValue(c(t)) || a(e).getPropertyValue(c(t));
        Object.keys(t).forEach(function (a) {
          var o = t[a];
          o || 0 === o
            ? !(function (e) {
                return !(!e || !s.test(e));
              })(a)
              ? (n += c(a) + ": " + o + ";")
              : (r += a + "(" + o + ") ")
            : e.style.removeProperty(c(a));
        }),
          r && (n += "transform: " + r + ";"),
          (e.style.cssText += ";" + n);
      };
    },
    "7vrA": function (e, t, n) {
      "use strict";
      var r = n("wx14"),
        a = n("zLVn"),
        o = n("TSYQ"),
        i = n.n(o),
        c = n("q1tI"),
        s = n.n(c),
        l = n("vUet"),
        u = s.a.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            o = e.fluid,
            c = e.as,
            u = void 0 === c ? "div" : c,
            f = e.className,
            d = Object(a.a)(e, ["bsPrefix", "fluid", "as", "className"]),
            p = Object(l.a)(n, "container"),
            m = "string" == typeof o ? "-" + o : "-fluid";
          return s.a.createElement(
            u,
            Object(r.a)({ ref: t }, d, {
              className: i()(f, o ? "" + p + m : p),
            })
          );
        });
      (u.displayName = "Container"),
        (u.defaultProps = { fluid: !1 }),
        (t.a = u);
    },
    "8oQk": function (e, t, n) {},
    "B+z7": function (e, t) {
      function n(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return r(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return r(e, t);
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var a = 0;
            return function () {
              return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        return (n = e[Symbol.iterator]()).next.bind(n);
      }
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      e.exports = {
        localizedPath: function (e, t, n) {
          return (function (e, t) {
            return e === t;
          })(t, e) || n.split("/")[1] === t
            ? n
            : "/" + t + n;
        },
        getLanguages: function (e, t, r) {
          if (!r) return t;
          for (
            var a,
              o = r.split(" "),
              i = [],
              c = function () {
                var e = a.value,
                  n = t.find(function (t) {
                    return t.code === e;
                  });
                if (!n)
                  throw new Error(
                    "Invalid localed provided: " +
                      e +
                      ". See your i18n config file for a list of available locales."
                  );
                i.push(n);
              },
              s = n(o);
            !(a = s()).done;

          )
            c();
          return i;
        },
      };
    },
    "BO/t": function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          return function (t, n, r, a, o) {
            var i = r || "<<anonymous>>",
              c = o || n;
            if (null == t[n])
              return new Error(
                "The " +
                  a +
                  " `" +
                  c +
                  "` is required to make `" +
                  i +
                  "` accessible for users of assistive technologies such as screen readers."
              );
            for (
              var s = arguments.length, l = Array(s > 5 ? s - 5 : 0), u = 5;
              u < s;
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
        c = n("cWnB"),
        s = n("7vrA"),
        l = n("wx14"),
        u = n("zLVn"),
        f = n("TSYQ"),
        d = n.n(f);
      n("QLaP");
      function p(e) {
        return "default" + e.charAt(0).toUpperCase() + e.substr(1);
      }
      function m(e) {
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
      function v(e, t, n) {
        var a = Object(r.useRef)(void 0 !== e),
          o = Object(r.useState)(t),
          i = o[0],
          c = o[1],
          s = void 0 !== e,
          l = a.current;
        return (
          (a.current = s),
          !s && l && i !== t && c(t),
          [
            s ? e : i,
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
                n && n.apply(void 0, [e].concat(r)), c(e);
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
            c = o[r],
            s = Object(u.a)(o, [p(r), r].map(m)),
            f = t[r],
            d = v(c, i, e[f]),
            b = d[0],
            h = d[1];
          return Object(l.a)({}, s, (((a = {})[r] = b), (a[f] = h), a));
        }, e);
      }
      var h = n("dI71");
      n("94VI");
      var g = n("YdCC"),
        O = n("vUet"),
        y = a.a.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            r = e.className,
            o = e.as,
            i = Object(u.a)(e, ["bsPrefix", "className", "as"]);
          n = Object(O.a)(n, "navbar-brand");
          var c = o || (i.href ? "a" : "span");
          return a.a.createElement(
            c,
            Object(l.a)({}, i, { ref: t, className: d()(r, n) })
          );
        });
      y.displayName = "NavbarBrand";
      var x = y,
        w = n("7j6X"),
        E = n("GEtZ");
      function j(e, t, n) {
        void 0 === n && (n = 5);
        var r = !1,
          a = setTimeout(function () {
            r ||
              (function (e) {
                var t = document.createEvent("HTMLEvents");
                t.initEvent("transitionend", !0, !0), e.dispatchEvent(t);
              })(e);
          }, t + n),
          o = Object(E.a)(
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
      function N(e, t, n, r) {
        var a, o, i;
        null == n &&
          ((a = e),
          (o = Object(w.a)(a, "transitionDuration") || ""),
          (i = -1 === o.indexOf("ms") ? 1e3 : 1),
          (n = parseFloat(o) * i || 0));
        var c = j(e, n, r),
          s = Object(E.a)(e, "transitionend", t);
        return function () {
          c(), s();
        };
      }
      var C = n("i8i4"),
        P = n.n(C),
        k = !1,
        S = a.a.createContext(null),
        M = (function (e) {
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
              void 0 === e && (e = !1),
                null !== t
                  ? (this.cancelNextCallback(),
                    "entering" === t
                      ? this.performEnter(e)
                      : this.performExit())
                  : this.props.unmountOnExit &&
                    "exited" === this.state.status &&
                    this.setState({ status: "unmounted" });
            }),
            (n.performEnter = function (e) {
              var t = this,
                n = this.props.enter,
                r = this.context ? this.context.isMounting : e,
                a = this.props.nodeRef ? [r] : [P.a.findDOMNode(this), r],
                o = a[0],
                i = a[1],
                c = this.getTimeouts(),
                s = r ? c.appear : c.enter;
              (!e && !n) || k
                ? this.safeSetState({ status: "entered" }, function () {
                    t.props.onEntered(o);
                  })
                : (this.props.onEnter(o, i),
                  this.safeSetState({ status: "entering" }, function () {
                    t.props.onEntering(o, i),
                      t.onTransitionEnd(s, function () {
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
                r = this.props.nodeRef ? void 0 : P.a.findDOMNode(this);
              t && !k
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
                  : P.a.findDOMNode(this),
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
                S.Provider,
                { value: null },
                "function" == typeof n
                  ? n(e, r)
                  : a.a.cloneElement(a.a.Children.only(n), r)
              );
            }),
            t
          );
        })(a.a.Component);
      function D() {}
      (M.contextType = S),
        (M.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: D,
          onEntering: D,
          onEntered: D,
          onExit: D,
          onExiting: D,
          onExited: D,
        }),
        (M.UNMOUNTED = "unmounted"),
        (M.EXITED = "exited"),
        (M.ENTERING = "entering"),
        (M.ENTERED = "entered"),
        (M.EXITING = "exiting");
      var R,
        T = M,
        I = n("Qg85");
      var L = {
        height: ["marginTop", "marginBottom"],
        width: ["marginLeft", "marginRight"],
      };
      function A(e, t) {
        var n = t["offset" + e[0].toUpperCase() + e.slice(1)],
          r = L[e];
        return (
          n +
          parseInt(Object(w.a)(t, r[0]), 10) +
          parseInt(Object(w.a)(t, r[1]), 10)
        );
      }
      var q =
          (((R = {}).exited = "collapse"),
          (R.exiting = "collapsing"),
          (R.entering = "collapsing"),
          (R.entered = "collapse show"),
          R),
        B = {
          in: !1,
          timeout: 300,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          getDimensionValue: A,
        },
        K = a.a.forwardRef(function (e, t) {
          var n = e.onEnter,
            o = e.onEntering,
            i = e.onEntered,
            c = e.onExit,
            s = e.onExiting,
            f = e.className,
            p = e.children,
            m = e.dimension,
            v = void 0 === m ? "height" : m,
            b = e.getDimensionValue,
            h = void 0 === b ? A : b,
            g = Object(u.a)(e, [
              "onEnter",
              "onEntering",
              "onEntered",
              "onExit",
              "onExiting",
              "className",
              "children",
              "dimension",
              "getDimensionValue",
            ]),
            O = "function" == typeof v ? v() : v,
            y = Object(r.useMemo)(
              function () {
                return Object(I.a)(function (e) {
                  e.style[O] = "0";
                }, n);
              },
              [O, n]
            ),
            x = Object(r.useMemo)(
              function () {
                return Object(I.a)(function (e) {
                  var t = "scroll" + O[0].toUpperCase() + O.slice(1);
                  e.style[O] = e[t] + "px";
                }, o);
              },
              [O, o]
            ),
            w = Object(r.useMemo)(
              function () {
                return Object(I.a)(function (e) {
                  e.style[O] = null;
                }, i);
              },
              [O, i]
            ),
            E = Object(r.useMemo)(
              function () {
                return Object(I.a)(function (e) {
                  (e.style[O] = h(O, e) + "px"), e.offsetHeight;
                }, c);
              },
              [c, h, O]
            ),
            j = Object(r.useMemo)(
              function () {
                return Object(I.a)(function (e) {
                  e.style[O] = null;
                }, s);
              },
              [O, s]
            );
          return a.a.createElement(
            T,
            Object(l.a)({ ref: t, addEndListener: N }, g, {
              "aria-expanded": g.role ? g.in : null,
              onEnter: y,
              onEntering: x,
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
                    q[e],
                    "width" === O && "width"
                  ),
                })
              );
            }
          );
        });
      K.defaultProps = B;
      var z = K,
        W = a.a.createContext(null);
      W.displayName = "NavbarContext";
      var U = W,
        V = a.a.forwardRef(function (e, t) {
          var n = e.children,
            r = e.bsPrefix,
            o = Object(u.a)(e, ["children", "bsPrefix"]);
          return (
            (r = Object(O.a)(r, "navbar-collapse")),
            a.a.createElement(U.Consumer, null, function (e) {
              return a.a.createElement(
                z,
                Object(l.a)({ in: !(!e || !e.expanded) }, o),
                a.a.createElement("div", { ref: t, className: r }, n)
              );
            })
          );
        });
      V.displayName = "NavbarCollapse";
      var _ = V,
        H = n("ZCiN"),
        F = a.a.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            o = e.className,
            i = e.children,
            c = e.label,
            s = e.as,
            f = void 0 === s ? "button" : s,
            p = e.onClick,
            m = Object(u.a)(e, [
              "bsPrefix",
              "className",
              "children",
              "label",
              "as",
              "onClick",
            ]);
          n = Object(O.a)(n, "navbar-toggler");
          var v = Object(r.useContext)(U) || {},
            b = v.onToggle,
            h = v.expanded,
            g = Object(H.a)(function (e) {
              p && p(e), b && b();
            });
          return (
            "button" === f && (m.type = "button"),
            a.a.createElement(
              f,
              Object(l.a)({}, m, {
                ref: t,
                onClick: g,
                "aria-label": c,
                className: d()(o, n, !h && "collapsed"),
              }),
              i || a.a.createElement("span", { className: n + "-icon" })
            )
          );
        });
      (F.displayName = "NavbarToggle"),
        (F.defaultProps = { label: "Toggle navigation" });
      var Z = F,
        J = a.a.createContext(null),
        Q = function (e, t) {
          return void 0 === t && (t = null), null != e ? String(e) : t || null;
        },
        Y = J,
        X = Object(g.a)("navbar-text", { Component: "span" }),
        G = a.a.forwardRef(function (e, t) {
          var n = b(e, { expanded: "onToggle" }),
            o = n.bsPrefix,
            i = n.expand,
            c = n.variant,
            s = n.bg,
            f = n.fixed,
            p = n.sticky,
            m = n.className,
            v = n.children,
            h = n.as,
            g = void 0 === h ? "nav" : h,
            y = n.expanded,
            x = n.onToggle,
            w = n.onSelect,
            E = n.collapseOnSelect,
            j = Object(u.a)(n, [
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
            ]),
            N = Object(O.a)(o, "navbar"),
            C = Object(r.useCallback)(
              function () {
                w && w.apply(void 0, arguments), E && y && x && x(!1);
              },
              [w, E, y, x]
            );
          void 0 === j.role && "nav" !== g && (j.role = "navigation");
          var P = N + "-expand";
          "string" == typeof i && (P = P + "-" + i);
          var k = Object(r.useMemo)(
            function () {
              return {
                onToggle: function () {
                  return x && x(!y);
                },
                bsPrefix: N,
                expanded: !!y,
              };
            },
            [N, y, x]
          );
          return a.a.createElement(
            U.Provider,
            { value: k },
            a.a.createElement(
              Y.Provider,
              { value: C },
              a.a.createElement(
                g,
                Object(l.a)({ ref: t }, j, {
                  className: d()(
                    m,
                    N,
                    i && P,
                    c && N + "-" + c,
                    s && "bg-" + s,
                    p && "sticky-" + p,
                    f && "fixed-" + f
                  ),
                }),
                v
              )
            )
          );
        });
      (G.defaultProps = { expand: !0, variant: "light", collapseOnSelect: !1 }),
        (G.displayName = "Navbar"),
        (G.Brand = x),
        (G.Toggle = Z),
        (G.Collapse = _),
        (G.Text = X);
      var $ = G,
        ee = (n("K9S6"), n("Wzyw")),
        te = Function.prototype.bind.call(Function.prototype.call, [].slice);
      function ne(e, t) {
        return te(e.querySelectorAll(t));
      }
      function re() {
        return Object(r.useReducer)(function (e) {
          return !e;
        }, !1)[1];
      }
      var ae = n("lcWJ"),
        oe = a.a.createContext(null);
      oe.displayName = "NavContext";
      var ie = oe,
        ce = a.a.createContext(null),
        se = function () {},
        le = a.a.forwardRef(function (e, t) {
          var n,
            o,
            i = e.as,
            c = void 0 === i ? "ul" : i,
            s = e.onSelect,
            f = e.activeKey,
            d = e.role,
            p = e.onKeyDown,
            m = Object(u.a)(e, [
              "as",
              "onSelect",
              "activeKey",
              "role",
              "onKeyDown",
            ]),
            v = re(),
            b = Object(r.useRef)(!1),
            h = Object(r.useContext)(Y),
            g = Object(r.useContext)(ce);
          g &&
            ((d = d || "tablist"),
            (f = g.activeKey),
            (n = g.getControlledId),
            (o = g.getControllerId));
          var O = Object(r.useRef)(null),
            y = function (e) {
              var t = O.current;
              if (!t) return null;
              var n = ne(t, "[data-rb-event-key]:not(.disabled)"),
                r = t.querySelector(".active");
              if (!r) return null;
              var a = n.indexOf(r);
              if (-1 === a) return null;
              var o = a + e;
              return (
                o >= n.length && (o = 0), o < 0 && (o = n.length - 1), n[o]
              );
            },
            x = function (e, t) {
              null != e && (s && s(e, t), h && h(e, t));
            };
          Object(r.useEffect)(function () {
            if (O.current && b.current) {
              var e = O.current.querySelector("[data-rb-event-key].active");
              e && e.focus();
            }
            b.current = !1;
          });
          var w = Object(ae.a)(t, O);
          return a.a.createElement(
            Y.Provider,
            { value: x },
            a.a.createElement(
              ie.Provider,
              {
                value: {
                  role: d,
                  activeKey: Q(f),
                  getControlledId: n || se,
                  getControllerId: o || se,
                },
              },
              a.a.createElement(
                c,
                Object(l.a)({}, m, {
                  onKeyDown: function (e) {
                    var t;
                    switch ((p && p(e), e.key)) {
                      case "ArrowLeft":
                      case "ArrowUp":
                        t = y(-1);
                        break;
                      case "ArrowRight":
                      case "ArrowDown":
                        t = y(1);
                        break;
                      default:
                        return;
                    }
                    t &&
                      (e.preventDefault(),
                      x(t.dataset.rbEventKey, e),
                      (b.current = !0),
                      v());
                  },
                  ref: w,
                  role: d,
                })
              )
            )
          );
        }),
        ue = a.a.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            r = e.className,
            o = e.children,
            i = e.as,
            c = void 0 === i ? "div" : i,
            s = Object(u.a)(e, ["bsPrefix", "className", "children", "as"]);
          return (
            (n = Object(O.a)(n, "nav-item")),
            a.a.createElement(
              c,
              Object(l.a)({}, s, { ref: t, className: d()(r, n) }),
              o
            )
          );
        });
      ue.displayName = "NavItem";
      var fe = ue,
        de = n("dbZe"),
        pe =
          (n("2W6z"),
          a.a.forwardRef(function (e, t) {
            var n = e.active,
              o = e.className,
              i = e.eventKey,
              c = e.onSelect,
              s = e.onClick,
              f = e.as,
              p = Object(u.a)(e, [
                "active",
                "className",
                "eventKey",
                "onSelect",
                "onClick",
                "as",
              ]),
              m = Q(i, p.href),
              v = Object(r.useContext)(Y),
              b = Object(r.useContext)(ie),
              h = n;
            if (b) {
              p.role || "tablist" !== b.role || (p.role = "tab");
              var g = b.getControllerId(m),
                O = b.getControlledId(m);
              (p["data-rb-event-key"] = m),
                (p.id = g || p.id),
                (p["aria-controls"] = O || p["aria-controls"]),
                (h = null == n && null != m ? b.activeKey === m : n);
            }
            "tab" === p.role &&
              ((p.tabIndex = h ? p.tabIndex : -1), (p["aria-selected"] = h));
            var y = Object(H.a)(function (e) {
              s && s(e), null != m && (c && c(m, e), v && v(m, e));
            });
            return a.a.createElement(
              f,
              Object(l.a)({}, p, {
                ref: t,
                onClick: y,
                className: d()(o, h && "active"),
              })
            );
          }));
      pe.defaultProps = { disabled: !1 };
      var me = pe,
        ve = { disabled: !1, as: de.a },
        be = a.a.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            r = e.disabled,
            o = e.className,
            i = e.href,
            c = e.eventKey,
            s = e.onSelect,
            f = e.as,
            p = Object(u.a)(e, [
              "bsPrefix",
              "disabled",
              "className",
              "href",
              "eventKey",
              "onSelect",
              "as",
            ]);
          return (
            (n = Object(O.a)(n, "nav-link")),
            a.a.createElement(
              me,
              Object(l.a)({}, p, {
                href: i,
                ref: t,
                eventKey: c,
                as: f,
                disabled: r,
                onSelect: s,
                className: d()(o, n, r && "disabled"),
              })
            )
          );
        });
      (be.displayName = "NavLink"), (be.defaultProps = ve);
      var he = be,
        ge = a.a.forwardRef(function (e, t) {
          var n,
            o,
            i,
            c = b(e, { activeKey: "onSelect" }),
            s = c.as,
            f = void 0 === s ? "div" : s,
            p = c.bsPrefix,
            m = c.variant,
            v = c.fill,
            h = c.justify,
            g = c.navbar,
            y = c.className,
            x = c.children,
            w = c.activeKey,
            E = Object(u.a)(c, [
              "as",
              "bsPrefix",
              "variant",
              "fill",
              "justify",
              "navbar",
              "className",
              "children",
              "activeKey",
            ]),
            j = Object(O.a)(p, "nav"),
            N = !1,
            C = Object(r.useContext)(U),
            P = Object(r.useContext)(ee.a);
          return (
            C
              ? ((o = C.bsPrefix), (N = null == g || g))
              : P && (i = P.cardHeaderBsPrefix),
            a.a.createElement(
              le,
              Object(l.a)(
                {
                  as: f,
                  ref: t,
                  activeKey: w,
                  className: d()(
                    y,
                    ((n = {}),
                    (n[j] = !N),
                    (n[o + "-nav"] = N),
                    (n[i + "-" + m] = !!i),
                    (n[j + "-" + m] = !!m),
                    (n[j + "-fill"] = v),
                    (n[j + "-justified"] = h),
                    n)
                  ),
                },
                E
              ),
              x
            )
          );
        });
      (ge.displayName = "Nav"),
        (ge.defaultProps = { justify: !1, fill: !1 }),
        (ge.Item = fe),
        (ge.Link = he);
      var Oe,
        ye = ge;
      var xe = n("qvwu"),
        we = n("7A6N"),
        Ee = a.a.createContext(null),
        je = n("RcA9"),
        Ne = n("+JL2"),
        Ce = n("QxbT"),
        Pe = function () {};
      function ke(e) {
        void 0 === e && (e = {});
        var t = Object(r.useContext)(Ee),
          n = Object(we.a)(),
          a = n[0],
          o = n[1],
          i = Object(r.useRef)(!1),
          c = e,
          s = c.flip,
          f = c.offset,
          d = c.rootCloseEvent,
          p = c.popperConfig,
          m = void 0 === p ? {} : p,
          v = c.usePopper,
          b = void 0 === v ? !!t : v,
          h = null == (null == t ? void 0 : t.show) ? e.show : t.show,
          g =
            null == (null == t ? void 0 : t.alignEnd) ? e.alignEnd : t.alignEnd;
        h && !i.current && (i.current = !0);
        var O = function (e) {
            null == t || t.toggle(!1, e);
          },
          y = t || {},
          x = y.drop,
          w = y.setMenu,
          E = y.menuElement,
          j = y.toggleElement,
          N = g ? "bottom-end" : "bottom-start";
        "up" === x
          ? (N = g ? "top-end" : "top-start")
          : "right" === x
          ? (N = g ? "right-end" : "right-start")
          : "left" === x && (N = g ? "left-end" : "left-start");
        var C,
          P = Object(je.a)(
            j,
            E,
            Object(Ce.a)({
              placement: N,
              enabled: !(!b || !h),
              enableEvents: h,
              offset: f,
              flip: s,
              arrowElement: a,
              popperConfig: m,
            })
          ),
          k = P.styles,
          S = P.attributes,
          M = Object(u.a)(P, ["styles", "attributes"]),
          D = { ref: w || Pe, "aria-labelledby": null == j ? void 0 : j.id },
          R = { show: h, alignEnd: g, hasShown: i.current, close: O };
        return (
          (C = b
            ? Object(l.a)({}, M, R, {
                props: Object(l.a)({}, D, S.popper, { style: k.popper }),
                arrowProps: Object(l.a)({ ref: o }, S.arrow, {
                  style: k.arrow,
                }),
              })
            : Object(l.a)({}, R, { props: D })),
          Object(Ne.a)(E, O, { clickTrigger: d, disabled: !(C && h) }),
          C
        );
      }
      function Se(e) {
        var t = e.children,
          n = ke(Object(u.a)(e, ["children"]));
        return a.a.createElement(a.a.Fragment, null, n.hasShown ? t(n) : null);
      }
      (Se.displayName = "ReactOverlaysDropdownMenu"),
        (Se.defaultProps = { usePopper: !0 });
      var Me = Se,
        De = function () {};
      function Re() {
        var e = Object(r.useContext)(Ee) || {},
          t = e.show,
          n = void 0 !== t && t,
          a = e.toggle,
          o = void 0 === a ? De : a;
        return [
          { ref: e.setToggle || De, "aria-haspopup": !0, "aria-expanded": !!n },
          { show: n, toggle: o },
        ];
      }
      function Te(e) {
        var t = e.children,
          n = Re(),
          r = n[0],
          o = n[1],
          i = o.show,
          c = o.toggle;
        return a.a.createElement(
          a.a.Fragment,
          null,
          t({ show: i, toggle: c, props: r })
        );
      }
      Te.displayName = "ReactOverlaysDropdownToggle";
      var Ie = Te;
      function Le(e) {
        var t = e.drop,
          n = e.alignEnd,
          o = e.defaultShow,
          i = e.show,
          c = e.onToggle,
          s = e.itemSelector,
          l = void 0 === s ? "* > *" : s,
          u = e.focusFirstItemOnShow,
          f = e.children,
          d = re(),
          p = v(i, o, c),
          m = p[0],
          b = p[1],
          h = Object(we.a)(),
          g = h[0],
          O = h[1],
          y = Object(r.useRef)(null),
          x = y.current,
          w = Object(r.useCallback)(
            function (e) {
              (y.current = e), d();
            },
            [d]
          ),
          E = Object(xe.a)(m),
          j = Object(r.useRef)(null),
          N = Object(r.useRef)(!1),
          C = Object(r.useCallback)(
            function (e) {
              b(!m, e);
            },
            [b, m]
          ),
          P = Object(r.useMemo)(
            function () {
              return {
                toggle: C,
                drop: t,
                show: m,
                alignEnd: n,
                menuElement: x,
                toggleElement: g,
                setMenu: w,
                setToggle: O,
              };
            },
            [C, t, m, n, x, g, w, O]
          );
        x && E && !m && (N.current = x.contains(document.activeElement));
        var k = Object(H.a)(function () {
            g && g.focus && g.focus();
          }),
          S = Object(H.a)(function () {
            var e = j.current,
              t = u;
            if (
              (null == t &&
                (t =
                  !(
                    !y.current ||
                    !(function (e, t) {
                      if (!Oe) {
                        var n = document.body,
                          r =
                            n.matches ||
                            n.matchesSelector ||
                            n.webkitMatchesSelector ||
                            n.mozMatchesSelector ||
                            n.msMatchesSelector;
                        Oe = function (e, t) {
                          return r.call(e, t);
                        };
                      }
                      return Oe(e, t);
                    })(y.current, "[role=menu]")
                  ) && "keyboard"),
              !1 !== t && ("keyboard" !== t || /^key.+$/.test(e)))
            ) {
              var n = ne(y.current, l)[0];
              n && n.focus && n.focus();
            }
          });
        Object(r.useEffect)(
          function () {
            m ? S() : N.current && ((N.current = !1), k());
          },
          [m, N, k, S]
        ),
          Object(r.useEffect)(function () {
            j.current = null;
          });
        var M = function (e, t) {
          if (!y.current) return null;
          var n = ne(y.current, l),
            r = n.indexOf(e) + t;
          return n[(r = Math.max(0, Math.min(r, n.length)))];
        };
        return a.a.createElement(
          Ee.Provider,
          { value: P },
          f({
            props: {
              onKeyDown: function (e) {
                var t = e.key,
                  n = e.target;
                if (
                  !/input|textarea/i.test(n.tagName) ||
                  !(
                    " " === t ||
                    ("Escape" !== t && y.current && y.current.contains(n))
                  )
                )
                  switch (((j.current = e.type), t)) {
                    case "ArrowUp":
                      var r = M(n, -1);
                      return r && r.focus && r.focus(), void e.preventDefault();
                    case "ArrowDown":
                      if ((e.preventDefault(), m)) {
                        var a = M(n, 1);
                        a && a.focus && a.focus();
                      } else C(e);
                      return;
                    case "Escape":
                    case "Tab":
                      b(!1, e);
                  }
              },
            },
          })
        );
      }
      (Le.displayName = "ReactOverlaysDropdown"),
        (Le.Menu = Me),
        (Le.Toggle = Ie);
      var Ae = Le,
        qe = { as: de.a, disabled: !1 },
        Be = a.a.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            o = e.className,
            i = e.children,
            c = e.eventKey,
            s = e.disabled,
            f = e.href,
            p = e.onClick,
            m = e.onSelect,
            v = e.active,
            b = e.as,
            h = Object(u.a)(e, [
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
            ]),
            g = Object(O.a)(n, "dropdown-item"),
            y = Object(r.useContext)(Y),
            x = (Object(r.useContext)(ie) || {}).activeKey,
            w = Q(c || null, f),
            E = null == v && null != w ? Q(x) === w : v,
            j = Object(H.a)(function (e) {
              s || (p && p(e), y && y(w, e), m && m(w, e));
            });
          return a.a.createElement(
            b,
            Object(l.a)({}, h, {
              ref: t,
              href: f,
              disabled: s,
              className: d()(o, g, E && "active", s && "disabled"),
              onClick: j,
            }),
            i
          );
        });
      (Be.displayName = "DropdownItem"), (Be.defaultProps = qe);
      var Ke = Be;
      function ze(e, t) {
        return e;
      }
      var We = n("KXUJ");
      function Ue(e) {
        var t = window.getComputedStyle(e);
        return {
          top: parseFloat(t.marginTop) || 0,
          right: parseFloat(t.marginRight) || 0,
          bottom: parseFloat(t.marginBottom) || 0,
          left: parseFloat(t.marginLeft) || 0,
        };
      }
      var Ve = a.a.forwardRef(function (e, t) {
        var n,
          o,
          i = e.bsPrefix,
          c = e.className,
          s = e.alignRight,
          f = e.rootCloseEvent,
          p = e.flip,
          m = e.show,
          v = e.renderOnMount,
          b = e.as,
          h = void 0 === b ? "div" : b,
          g = e.popperConfig,
          y = Object(u.a)(e, [
            "bsPrefix",
            "className",
            "alignRight",
            "rootCloseEvent",
            "flip",
            "show",
            "renderOnMount",
            "as",
            "popperConfig",
          ]),
          x = Object(r.useContext)(U),
          w = Object(O.a)(i, "dropdown-menu"),
          E =
            ((n = Object(r.useRef)(null)),
            (o = Object(r.useRef)(null)),
            [
              Object(r.useCallback)(function (e) {
                e &&
                  (Object(We.a)(e, "popover") ||
                    Object(We.a)(e, "dropdown-menu")) &&
                  ((o.current = Ue(e)),
                  (e.style.margin = "0"),
                  (n.current = e));
              }, []),
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
                            c = n.right;
                          switch (t.split("-")[0]) {
                            case "top":
                              return [0, i];
                            case "left":
                              return [0, c];
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
                Object(r.useMemo)(function () {
                  return {
                    name: "popoverArrowMargins",
                    enabled: !0,
                    phase: "main",
                    requiresIfExists: ["arrow"],
                    effect: function (e) {
                      var t = e.state;
                      if (
                        n.current &&
                        t.elements.arrow &&
                        Object(We.a)(n.current, "popover") &&
                        t.modifiersData["arrow#persistent"]
                      ) {
                        var r = Ue(t.elements.arrow),
                          a = r.top,
                          o = r.right,
                          i = a || o;
                        return (
                          (t.modifiersData["arrow#persistent"].padding = {
                            top: i,
                            left: i,
                            right: i,
                            bottom: i,
                          }),
                          (t.elements.arrow.style.margin = "0"),
                          function () {
                            t.elements.arrow &&
                              (t.elements.arrow.style.margin = "");
                          }
                        );
                      }
                    },
                  };
                }, []),
              ],
            ]),
          j = E[0],
          N = E[1],
          C = ke({
            flip: p,
            rootCloseEvent: f,
            show: m,
            alignEnd: s,
            usePopper: !x,
            popperConfig: Object(l.a)({}, g, {
              modifiers: N.concat((null == g ? void 0 : g.modifiers) || []),
            }),
          }),
          P = C.hasShown,
          k = C.placement,
          S = C.show,
          M = C.alignEnd,
          D = C.close,
          R = C.props;
        return (
          (R.ref = Object(ae.a)(j, Object(ae.a)(ze(t), R.ref))),
          P || v
            ? ("string" != typeof h &&
                ((R.show = S), (R.close = D), (R.alignRight = M)),
              k &&
                ((y.style = Object(l.a)({}, y.style, {}, R.style)),
                (y["x-placement"] = k)),
              a.a.createElement(
                h,
                Object(l.a)({}, y, R, {
                  className: d()(c, w, S && "show", M && w + "-right"),
                })
              ))
            : null
        );
      });
      (Ve.displayName = "DropdownMenu"),
        (Ve.defaultProps = { alignRight: !1, flip: !0 });
      var _e = Ve,
        He =
          (n("BO/t"),
          a.a.forwardRef(function (e, t) {
            var n = e.bsPrefix,
              r = e.split,
              o = e.className,
              i = e.children,
              s = e.childBsPrefix,
              f = e.as,
              p = void 0 === f ? c.a : f,
              m = Object(u.a)(e, [
                "bsPrefix",
                "split",
                "className",
                "children",
                "childBsPrefix",
                "as",
              ]),
              v = Object(O.a)(n, "dropdown-toggle");
            void 0 !== s && (m.bsPrefix = s);
            var b = Re(),
              h = b[0],
              g = b[1].toggle;
            return (
              (h.ref = Object(ae.a)(h.ref, ze(t))),
              a.a.createElement(
                p,
                Object(l.a)(
                  { onClick: g, className: d()(o, v, r && v + "-split") },
                  h,
                  m
                ),
                i
              )
            );
          }));
      He.displayName = "DropdownToggle";
      var Fe = He,
        Ze = Object(g.a)("dropdown-header", {
          defaultProps: { role: "heading" },
        }),
        Je = Object(g.a)("dropdown-divider", {
          defaultProps: { role: "separator" },
        }),
        Qe = Object(g.a)("dropdown-item-text", { Component: "span" }),
        Ye = a.a.forwardRef(function (e, t) {
          var n = b(e, { show: "onToggle" }),
            o = n.bsPrefix,
            i = n.drop,
            c = n.show,
            s = n.className,
            f = n.alignRight,
            p = n.onSelect,
            m = n.onToggle,
            v = n.focusFirstItemOnShow,
            h = n.as,
            g = void 0 === h ? "div" : h,
            y =
              (n.navbar,
              Object(u.a)(n, [
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
              ])),
            x = Object(r.useContext)(Y),
            w = Object(O.a)(o, "dropdown"),
            E = Object(H.a)(function (e, t, n) {
              void 0 === n && (n = t.type),
                t.currentTarget === document && (n = "rootClose"),
                m && m(e, t, { source: n });
            }),
            j = Object(H.a)(function (e, t) {
              x && x(e, t), p && p(e, t), E(!1, t, "select");
            });
          return a.a.createElement(
            Y.Provider,
            { value: j },
            a.a.createElement(
              Ae,
              {
                drop: i,
                show: c,
                alignEnd: f,
                onToggle: E,
                focusFirstItemOnShow: v,
                itemSelector: "." + w + "-item:not(.disabled):not(:disabled)",
              },
              function (e) {
                var n = e.props;
                return a.a.createElement(
                  g,
                  Object(l.a)({}, y, n, {
                    ref: t,
                    className: d()(
                      s,
                      c && "show",
                      (!i || "down" === i) && w,
                      "up" === i && "dropup",
                      "right" === i && "dropright",
                      "left" === i && "dropleft"
                    ),
                  })
                );
              }
            )
          );
        });
      (Ye.displayName = "Dropdown"),
        (Ye.defaultProps = { navbar: !1 }),
        (Ye.Divider = Je),
        (Ye.Header = Ze),
        (Ye.Item = Ke),
        (Ye.ItemText = Qe),
        (Ye.Menu = _e),
        (Ye.Toggle = Fe);
      var Xe = Ye,
        Ge = a.a.forwardRef(function (e, t) {
          var n = e.id,
            r = e.title,
            o = e.children,
            i = e.bsPrefix,
            c = e.rootCloseEvent,
            s = e.menuRole,
            f = e.disabled,
            d = e.active,
            p = e.renderMenuOnMount,
            m = Object(u.a)(e, [
              "id",
              "title",
              "children",
              "bsPrefix",
              "rootCloseEvent",
              "menuRole",
              "disabled",
              "active",
              "renderMenuOnMount",
            ]);
          return a.a.createElement(
            Xe,
            Object(l.a)({ ref: t }, m, { as: fe }),
            a.a.createElement(
              Xe.Toggle,
              {
                id: n,
                eventKey: null,
                active: d,
                disabled: f,
                childBsPrefix: i,
                as: he,
              },
              r
            ),
            a.a.createElement(
              Xe.Menu,
              { role: s, renderOnMount: p, rootCloseEvent: c },
              o
            )
          );
        });
      (Ge.displayName = "NavDropdown"),
        (Ge.Item = Xe.Item),
        (Ge.ItemText = Xe.ItemText),
        (Ge.Divider = Xe.Divider),
        (Ge.Header = Xe.Header);
      var $e = Ge,
        et = function () {
          var e = Object(o.a)();
          return a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement(
              $,
              {
                collapseOnSelect: !0,
                expand: "lg",
                bg: "dark",
                variant: "dark",
              },
              a.a.createElement(
                s.a,
                { className: "header" },
                a.a.createElement(
                  $.Brand,
                  null,
                  a.a.createElement(
                    i.a,
                    { to: "/", className: "text-white font-weight-bold" },
                    a.a.createElement(
                      "span",
                      { className: "header-logo" },
                      "ETHTerakoya"
                    )
                  )
                ),
                a.a.createElement($.Toggle, {
                  "aria-controls": "responsive-navbar-nav",
                }),
                a.a.createElement(
                  $.Collapse,
                  { id: "responsive-navbar-nav" },
                  a.a.createElement(ye, { className: "mr-auto" }),
                  a.a.createElement(
                    $e,
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
                      c.a,
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
                      Xe,
                      { className: "ml-2" },
                      a.a.createElement(
                        Fe,
                        { variant: "none" },
                        a.a.createElement("img", {
                          src: "/svg/np_language.svg",
                          height: "32",
                          width: "32",
                          alt: "language",
                        })
                      ),
                      a.a.createElement(
                        _e,
                        {
                          id: "collasible-nav-dropdown",
                          className: "dropdown-menu",
                        },
                        a.a.createElement(
                          Ke,
                          { className: "dropdown-item", href: "/" },
                          "日本語"
                        ),
                        a.a.createElement(
                          Ke,
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
        tt = n("JI6e"),
        nt = n("3Z9Z"),
        rt = function () {
          return a.a.createElement(
            "footer",
            { className: "footer" },
            a.a.createElement(
              s.a,
              { fluid: !0, className: "pt-5 pb-2 bg-dark text-white" },
              a.a.createElement(
                nt.a,
                { className: "justify-content-md-center mb-5" },
                a.a.createElement(
                  tt.a,
                  null,
                  a.a.createElement(
                    "h4",
                    { className: "text-center footer-title" },
                    "ETHTerakoya"
                  )
                ),
                a.a.createElement(tt.a, null),
                a.a.createElement(
                  tt.a,
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
                nt.a,
                null,
                a.a.createElement(
                  tt.a,
                  null,
                  a.a.createElement(
                    "p",
                    { className: "small text-center" },
                    "© ",
                    new Date().getFullYear(),
                    " Ethereum Terakoya"
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
          a.a.createElement(et, null),
          a.a.createElement("main", null, t),
          a.a.createElement(rt, null)
        );
      };
    },
    Frpm: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      n("eq4K");
      var r = n("zLVn"),
        a = n("q1tI"),
        o = n("Wbzz"),
        i = n("B+z7"),
        c = n("yAkg"),
        s = function (e) {
          var t = e.to,
            n = e.language,
            s = Object(r.a)(e, ["to", "language"]),
            l = Object(c.a)(),
            u = l.defaultLang,
            f = l.locale,
            d = n || f;
          return a.createElement(
            o.Link,
            Object.assign({}, s, { to: Object(i.localizedPath)(u, d, t) })
          );
        };
    },
    GEtZ: function (e, t, n) {
      "use strict";
      var r = n("SJxq"),
        a = !1,
        o = !1;
      try {
        var i = {
          get passive() {
            return (a = !0);
          },
          get once() {
            return (o = a = !0);
          },
        };
        r.a &&
          (window.addEventListener("test", i, i),
          window.removeEventListener("test", i, !0));
      } catch (l) {}
      var c = function (e, t, n, r) {
        if (r && "boolean" != typeof r && !o) {
          var i = r.once,
            c = r.capture,
            s = n;
          !o &&
            i &&
            ((s =
              n.__once ||
              function e(r) {
                this.removeEventListener(t, e, c), n.call(this, r);
              }),
            (n.__once = s)),
            e.addEventListener(t, s, a ? r : c);
        }
        e.addEventListener(t, n, r);
      };
      var s = function (e, t, n, r) {
        var a = r && "boolean" != typeof r ? r.capture : r;
        e.removeEventListener(t, n, a),
          n.__once && e.removeEventListener(t, n.__once, a);
      };
      t.a = function (e, t, n, r) {
        return (
          c(e, t, n, r),
          function () {
            s(e, t, n, r);
          }
        );
      };
    },
    JI6e: function (e, t, n) {
      "use strict";
      var r = n("wx14"),
        a = n("zLVn"),
        o = n("TSYQ"),
        i = n.n(o),
        c = n("q1tI"),
        s = n.n(c),
        l = n("vUet"),
        u = ["xl", "lg", "md", "sm", "xs"],
        f = s.a.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            o = e.className,
            c = e.as,
            f = void 0 === c ? "div" : c,
            d = Object(a.a)(e, ["bsPrefix", "className", "as"]),
            p = Object(l.a)(n, "col"),
            m = [],
            v = [];
          return (
            u.forEach(function (e) {
              var t,
                n,
                r,
                a = d[e];
              if ((delete d[e], "object" == typeof a && null != a)) {
                var o = a.span;
                (t = void 0 === o || o), (n = a.offset), (r = a.order);
              } else t = a;
              var i = "xs" !== e ? "-" + e : "";
              t && m.push(!0 === t ? "" + p + i : "" + p + i + "-" + t),
                null != r && v.push("order" + i + "-" + r),
                null != n && v.push("offset" + i + "-" + n);
            }),
            m.length || m.push(p),
            s.a.createElement(
              f,
              Object(r.a)({}, d, {
                ref: t,
                className: i.a.apply(void 0, [o].concat(m, v)),
              })
            )
          );
        });
      (f.displayName = "Col"), (t.a = f);
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
    QxbT: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var r = n("wx14");
      function a(e) {
        var t,
          n,
          a,
          o,
          i,
          c = e.enabled,
          s = e.enableEvents,
          l = e.placement,
          u = e.flip,
          f = e.offset,
          d = e.containerPadding,
          p = e.arrowElement,
          m = e.popperConfig,
          v = void 0 === m ? {} : m,
          b = (function (e) {
            var t = {};
            return Array.isArray(e)
              ? (null == e ||
                  e.forEach(function (e) {
                    t[e.name] = e;
                  }),
                t)
              : e || t;
          })(v.modifiers);
        return Object(r.a)({}, v, {
          placement: l,
          enabled: c,
          modifiers:
            ((i = Object(r.a)({}, b, {
              eventListeners: { enabled: s },
              preventOverflow: Object(r.a)({}, b.preventOverflow, {
                options: d
                  ? Object(r.a)(
                      { padding: d },
                      null == (t = b.preventOverflow) ? void 0 : t.options
                    )
                  : null == (n = b.preventOverflow)
                  ? void 0
                  : n.options,
              }),
              offset: {
                options: Object(r.a)(
                  { offset: f },
                  null == (a = b.offset) ? void 0 : a.options
                ),
              },
              arrow: Object(r.a)({}, b.arrow, {
                enabled: !!p,
                options: Object(r.a)(
                  {},
                  null == (o = b.arrow) ? void 0 : o.options,
                  { element: p }
                ),
              }),
              flip: Object(r.a)({ enabled: !!u }, b.flip),
            })),
            void 0 === i && (i = {}),
            Array.isArray(i)
              ? i
              : Object.keys(i).map(function (e) {
                  return (i[e].name = e), i[e];
                })),
        });
      }
    },
    RcA9: function (e, t, n) {
      "use strict";
      var r = n("wx14"),
        a = n("zLVn"),
        o = n("q1tI"),
        i = n("XcHJ");
      var c = function (e) {
          var t = Object(i.a)();
          return [
            e[0],
            Object(o.useCallback)(
              function (n) {
                if (t()) return e[1](n);
              },
              [t, e[1]]
            ),
          ];
        },
        s = n("cRaf"),
        l = function (e) {
          return {
            position: e,
            top: "0",
            left: "0",
            opacity: "0",
            pointerEvents: "none",
          };
        },
        u = { name: "applyStyles", enabled: !1 },
        f = {
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
              a.setAttribute("aria-describedby", i ? i + "," + r.id : r.id);
            }
          },
        },
        d = [];
      t.a = function (e, t, n) {
        var i = void 0 === n ? {} : n,
          p = i.enabled,
          m = void 0 === p || p,
          v = i.placement,
          b = void 0 === v ? "bottom" : v,
          h = i.strategy,
          g = void 0 === h ? "absolute" : h,
          O = i.modifiers,
          y = void 0 === O ? d : O,
          x = Object(a.a)(i, ["enabled", "placement", "strategy", "modifiers"]),
          w = Object(o.useRef)(),
          E = Object(o.useCallback)(function () {
            var e;
            null == (e = w.current) || e.update();
          }, []),
          j = Object(o.useCallback)(function () {
            var e;
            null == (e = w.current) || e.forceUpdate();
          }, []),
          N = c(
            Object(o.useState)({
              placement: b,
              update: E,
              forceUpdate: j,
              attributes: {},
              styles: { popper: l(g), arrow: {} },
            })
          ),
          C = N[0],
          P = N[1],
          k = Object(o.useMemo)(
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
                    P({
                      state: t,
                      styles: n,
                      attributes: r,
                      update: E,
                      forceUpdate: j,
                      placement: t.placement,
                    });
                },
              };
            },
            [E, j, P]
          );
        return (
          Object(o.useEffect)(
            function () {
              w.current &&
                m &&
                w.current.setOptions({
                  placement: b,
                  strategy: g,
                  modifiers: [].concat(y, [k, u]),
                });
            },
            [g, b, k, m]
          ),
          Object(o.useEffect)(
            function () {
              if (m && null != e && null != t)
                return (
                  (w.current = Object(s.a)(
                    e,
                    t,
                    Object(r.a)({}, x, {
                      placement: b,
                      strategy: g,
                      modifiers: [].concat(y, [f, k]),
                    })
                  )),
                  function () {
                    null != w.current &&
                      (w.current.destroy(),
                      (w.current = void 0),
                      P(function (e) {
                        return Object(r.a)({}, e, {
                          attributes: {},
                          styles: { popper: l(g) },
                        });
                      }));
                  }
                );
            },
            [m, e, t]
          ),
          C
        );
      };
    },
    RjgW: function (e, t, n) {
      "use strict";
      function r(e, t) {
        return e.contains
          ? e.contains(t)
          : e.compareDocumentPosition
          ? e === t || !!(16 & e.compareDocumentPosition(t))
          : void 0;
      }
      n.d(t, "a", function () {
        return r;
      });
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
              else if (Array.isArray(r) && r.length) {
                var i = a.apply(null, r);
                i && e.push(i);
              } else if ("object" === o)
                for (var c in r) n.call(r, c) && r[c] && e.push(c);
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
            return function () {
              e.current = !1;
            };
          }, []),
          t.current
        );
      }
    },
    YdCC: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      });
      var r = n("wx14"),
        a = n("zLVn"),
        o = n("TSYQ"),
        i = n.n(o),
        c = /-(.)/g;
      var s = n("q1tI"),
        l = n.n(s),
        u = n("vUet"),
        f = function (e) {
          return (
            e[0].toUpperCase() +
            ((t = e),
            t.replace(c, function (e, t) {
              return t.toUpperCase();
            })).slice(1)
          );
          var t;
        };
      function d(e, t) {
        var n = void 0 === t ? {} : t,
          o = n.displayName,
          c = void 0 === o ? f(e) : o,
          s = n.Component,
          d = n.defaultProps,
          p = l.a.forwardRef(function (t, n) {
            var o = t.className,
              c = t.bsPrefix,
              f = t.as,
              d = void 0 === f ? s || "div" : f,
              p = Object(a.a)(t, ["className", "bsPrefix", "as"]),
              m = Object(u.a)(c, e);
            return l.a.createElement(
              d,
              Object(r.a)({ ref: n, className: i()(o, m) }, p)
            );
          });
        return (p.defaultProps = d), (p.displayName = c), p;
      }
    },
    ZCiN: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      });
      var r = n("q1tI");
      var a = function (e) {
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
      function o(e) {
        var t = a(e);
        return Object(r.useCallback)(
          function () {
            return t.current && t.current.apply(t, arguments);
          },
          [t]
        );
      }
    },
    cRaf: function (e, t, n) {
      "use strict";
      function r(e) {
        return e.split("-")[0];
      }
      function a(e) {
        return {
          x: e.offsetLeft,
          y: e.offsetTop,
          width: e.offsetWidth,
          height: e.offsetHeight,
        };
      }
      function o(e, t) {
        var n = Boolean(t.getRootNode && t.getRootNode().host);
        if (e.contains(t)) return !0;
        if (n) {
          var r = t;
          do {
            if (r && e.isSameNode(r)) return !0;
            r = r.parentNode || r.host;
          } while (r);
        }
        return !1;
      }
      function i(e) {
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return t ? t.defaultView : window;
        }
        return e;
      }
      function c(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function s(e) {
        return i(e).getComputedStyle(e);
      }
      function l(e) {
        return e instanceof i(e).Element || e instanceof Element;
      }
      function u(e) {
        return e instanceof i(e).HTMLElement || e instanceof HTMLElement;
      }
      function f(e) {
        return ["table", "td", "th"].indexOf(c(e)) >= 0;
      }
      function d(e) {
        return (l(e) ? e.ownerDocument : e.document).documentElement;
      }
      function p(e) {
        return "html" === c(e)
          ? e
          : e.assignedSlot || e.parentNode || e.host || d(e);
      }
      function m(e) {
        if (!u(e) || "fixed" === s(e).position) return null;
        var t = e.offsetParent;
        if (t) {
          var n = d(t);
          if (
            "body" === c(t) &&
            "static" === s(t).position &&
            "static" !== s(n).position
          )
            return n;
        }
        return t;
      }
      function v(e) {
        for (var t = i(e), n = m(e); n && f(n) && "static" === s(n).position; )
          n = m(n);
        return n && "body" === c(n) && "static" === s(n).position
          ? t
          : n ||
              (function (e) {
                for (
                  var t = p(e);
                  u(t) && ["html", "body"].indexOf(c(t)) < 0;

                ) {
                  var n = s(t);
                  if (
                    "none" !== n.transform ||
                    "none" !== n.perspective ||
                    (n.willChange && "auto" !== n.willChange)
                  )
                    return t;
                  t = t.parentNode;
                }
                return null;
              })(e) ||
              t;
      }
      function b(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      function h(e, t, n) {
        return Math.max(e, Math.min(t, n));
      }
      function g(e) {
        return Object.assign(
          Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }),
          e
        );
      }
      function O(e, t) {
        return t.reduce(function (t, n) {
          return (t[n] = e), t;
        }, {});
      }
      n.d(t, "a", function () {
        return ce;
      });
      var y = "top",
        x = "bottom",
        w = "right",
        E = "left",
        j = [y, x, w, E],
        N = j.reduce(function (e, t) {
          return e.concat([t + "-start", t + "-end"]);
        }, []),
        C = [].concat(j, ["auto"]).reduce(function (e, t) {
          return e.concat([t, t + "-start", t + "-end"]);
        }, []),
        P = [
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
      var k = {
          name: "arrow",
          enabled: !0,
          phase: "main",
          fn: function (e) {
            var t,
              n = e.state,
              o = e.name,
              i = n.elements.arrow,
              c = n.modifiersData.popperOffsets,
              s = r(n.placement),
              l = b(s),
              u = [E, w].indexOf(s) >= 0 ? "height" : "width";
            if (i && c) {
              var f = n.modifiersData[o + "#persistent"].padding,
                d = a(i),
                p = "y" === l ? y : E,
                m = "y" === l ? x : w,
                g =
                  n.rects.reference[u] +
                  n.rects.reference[l] -
                  c[l] -
                  n.rects.popper[u],
                O = c[l] - n.rects.reference[l],
                j = v(i),
                N = j
                  ? "y" === l
                    ? j.clientHeight || 0
                    : j.clientWidth || 0
                  : 0,
                C = g / 2 - O / 2,
                P = f[p],
                k = N - d[u] - f[m],
                S = N / 2 - d[u] / 2 + C,
                M = h(P, S, k),
                D = l;
              n.modifiersData[o] =
                (((t = {})[D] = M), (t.centerOffset = M - S), t);
            }
          },
          effect: function (e) {
            var t = e.state,
              n = e.options,
              r = e.name,
              a = n.element,
              i = void 0 === a ? "[data-popper-arrow]" : a,
              c = n.padding,
              s = void 0 === c ? 0 : c;
            null != i &&
              ("string" != typeof i ||
                (i = t.elements.popper.querySelector(i))) &&
              o(t.elements.popper, i) &&
              ((t.elements.arrow = i),
              (t.modifiersData[r + "#persistent"] = {
                padding: g("number" != typeof s ? s : O(s, j)),
              }));
          },
          requires: ["popperOffsets"],
          requiresIfExists: ["preventOverflow"],
        },
        S = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function M(e) {
        var t,
          n = e.popper,
          r = e.popperRect,
          a = e.placement,
          o = e.offsets,
          c = e.position,
          s = e.gpuAcceleration,
          l = e.adaptive,
          u = (function (e) {
            var t = e.x,
              n = e.y,
              r = window.devicePixelRatio || 1;
            return {
              x: Math.round(t * r) / r || 0,
              y: Math.round(n * r) / r || 0,
            };
          })(o),
          f = u.x,
          p = u.y,
          m = o.hasOwnProperty("x"),
          b = o.hasOwnProperty("y"),
          h = E,
          g = y,
          O = window;
        if (l) {
          var j = v(n);
          j === i(n) && (j = d(n)),
            a === y &&
              ((g = x), (p -= j.clientHeight - r.height), (p *= s ? 1 : -1)),
            a === E &&
              ((h = w), (f -= j.clientWidth - r.width), (f *= s ? 1 : -1));
        }
        var N,
          C = Object.assign({ position: c }, l && S);
        return s
          ? Object.assign(
              Object.assign({}, C),
              {},
              (((N = {})[g] = b ? "0" : ""),
              (N[h] = m ? "0" : ""),
              (N.transform =
                (O.devicePixelRatio || 1) < 2
                  ? "translate(" + f + "px, " + p + "px)"
                  : "translate3d(" + f + "px, " + p + "px, 0)"),
              N)
            )
          : Object.assign(
              Object.assign({}, C),
              {},
              (((t = {})[g] = b ? p + "px" : ""),
              (t[h] = m ? f + "px" : ""),
              (t.transform = ""),
              t)
            );
      }
      var D = {
          name: "computeStyles",
          enabled: !0,
          phase: "beforeWrite",
          fn: function (e) {
            var t = e.state,
              n = e.options,
              a = n.gpuAcceleration,
              o = void 0 === a || a,
              i = n.adaptive,
              c = void 0 === i || i,
              s = {
                placement: r(t.placement),
                popper: t.elements.popper,
                popperRect: t.rects.popper,
                gpuAcceleration: o,
              };
            null != t.modifiersData.popperOffsets &&
              (t.styles.popper = Object.assign(
                Object.assign({}, t.styles.popper),
                M(
                  Object.assign(
                    Object.assign({}, s),
                    {},
                    {
                      offsets: t.modifiersData.popperOffsets,
                      position: t.options.strategy,
                      adaptive: c,
                    }
                  )
                )
              )),
              null != t.modifiersData.arrow &&
                (t.styles.arrow = Object.assign(
                  Object.assign({}, t.styles.arrow),
                  M(
                    Object.assign(
                      Object.assign({}, s),
                      {},
                      {
                        offsets: t.modifiersData.arrow,
                        position: "absolute",
                        adaptive: !1,
                      }
                    )
                  )
                )),
              (t.attributes.popper = Object.assign(
                Object.assign({}, t.attributes.popper),
                {},
                { "data-popper-placement": t.placement }
              ));
          },
          data: {},
        },
        R = { passive: !0 };
      var T = {
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
              c = r.resize,
              s = void 0 === c || c,
              l = i(t.elements.popper),
              u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
            return (
              o &&
                u.forEach(function (e) {
                  e.addEventListener("scroll", n.update, R);
                }),
              s && l.addEventListener("resize", n.update, R),
              function () {
                o &&
                  u.forEach(function (e) {
                    e.removeEventListener("scroll", n.update, R);
                  }),
                  s && l.removeEventListener("resize", n.update, R);
              }
            );
          },
          data: {},
        },
        I = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function L(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return I[e];
        });
      }
      var A = { start: "end", end: "start" };
      function q(e) {
        return e.replace(/start|end/g, function (e) {
          return A[e];
        });
      }
      function B(e) {
        var t = e.getBoundingClientRect();
        return {
          width: t.width,
          height: t.height,
          top: t.top,
          right: t.right,
          bottom: t.bottom,
          left: t.left,
          x: t.left,
          y: t.top,
        };
      }
      function K(e) {
        var t = i(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function z(e) {
        return B(d(e)).left + K(e).scrollLeft;
      }
      function W(e) {
        var t = s(e),
          n = t.overflow,
          r = t.overflowX,
          a = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + a + r);
      }
      function U(e, t) {
        void 0 === t && (t = []);
        var n = (function e(t) {
            return ["html", "body", "#document"].indexOf(c(t)) >= 0
              ? t.ownerDocument.body
              : u(t) && W(t)
              ? t
              : e(p(t));
          })(e),
          r = "body" === c(n),
          a = i(n),
          o = r ? [a].concat(a.visualViewport || [], W(n) ? n : []) : n,
          s = t.concat(o);
        return r ? s : s.concat(U(p(o)));
      }
      function V(e) {
        return Object.assign(
          Object.assign({}, e),
          {},
          { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height }
        );
      }
      function _(e, t) {
        return "viewport" === t
          ? V(
              (function (e) {
                var t = i(e),
                  n = d(e),
                  r = t.visualViewport,
                  a = n.clientWidth,
                  o = n.clientHeight,
                  c = 0,
                  s = 0;
                return (
                  r &&
                    ((a = r.width),
                    (o = r.height),
                    /^((?!chrome|android).)*safari/i.test(
                      navigator.userAgent
                    ) || ((c = r.offsetLeft), (s = r.offsetTop))),
                  { width: a, height: o, x: c + z(e), y: s }
                );
              })(e)
            )
          : u(t)
          ? (function (e) {
              var t = B(e);
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
          : V(
              (function (e) {
                var t = d(e),
                  n = K(e),
                  r = e.ownerDocument.body,
                  a = Math.max(
                    t.scrollWidth,
                    t.clientWidth,
                    r ? r.scrollWidth : 0,
                    r ? r.clientWidth : 0
                  ),
                  o = Math.max(
                    t.scrollHeight,
                    t.clientHeight,
                    r ? r.scrollHeight : 0,
                    r ? r.clientHeight : 0
                  ),
                  i = -n.scrollLeft + z(e),
                  c = -n.scrollTop;
                return (
                  "rtl" === s(r || t).direction &&
                    (i += Math.max(t.clientWidth, r ? r.clientWidth : 0) - a),
                  { width: a, height: o, x: i, y: c }
                );
              })(d(e))
            );
      }
      function H(e, t, n) {
        var r =
            "clippingParents" === t
              ? (function (e) {
                  var t = U(p(e)),
                    n =
                      ["absolute", "fixed"].indexOf(s(e).position) >= 0 && u(e)
                        ? v(e)
                        : e;
                  return l(n)
                    ? t.filter(function (e) {
                        return l(e) && o(e, n) && "body" !== c(e);
                      })
                    : [];
                })(e)
              : [].concat(t),
          a = [].concat(r, [n]),
          i = a[0],
          f = a.reduce(function (t, n) {
            var r = _(e, n);
            return (
              (t.top = Math.max(r.top, t.top)),
              (t.right = Math.min(r.right, t.right)),
              (t.bottom = Math.min(r.bottom, t.bottom)),
              (t.left = Math.max(r.left, t.left)),
              t
            );
          }, _(e, i));
        return (
          (f.width = f.right - f.left),
          (f.height = f.bottom - f.top),
          (f.x = f.left),
          (f.y = f.top),
          f
        );
      }
      function F(e) {
        return e.split("-")[1];
      }
      function Z(e) {
        var t,
          n = e.reference,
          a = e.element,
          o = e.placement,
          i = o ? r(o) : null,
          c = o ? F(o) : null,
          s = n.x + n.width / 2 - a.width / 2,
          l = n.y + n.height / 2 - a.height / 2;
        switch (i) {
          case y:
            t = { x: s, y: n.y - a.height };
            break;
          case x:
            t = { x: s, y: n.y + n.height };
            break;
          case w:
            t = { x: n.x + n.width, y: l };
            break;
          case E:
            t = { x: n.x - a.width, y: l };
            break;
          default:
            t = { x: n.x, y: n.y };
        }
        var u = i ? b(i) : null;
        if (null != u) {
          var f = "y" === u ? "height" : "width";
          switch (c) {
            case "start":
              t[u] = Math.floor(t[u]) - Math.floor(n[f] / 2 - a[f] / 2);
              break;
            case "end":
              t[u] = Math.floor(t[u]) + Math.ceil(n[f] / 2 - a[f] / 2);
          }
        }
        return t;
      }
      function J(e, t) {
        void 0 === t && (t = {});
        var n = t,
          r = n.placement,
          a = void 0 === r ? e.placement : r,
          o = n.boundary,
          i = void 0 === o ? "clippingParents" : o,
          c = n.rootBoundary,
          s = void 0 === c ? "viewport" : c,
          u = n.elementContext,
          f = void 0 === u ? "popper" : u,
          p = n.altBoundary,
          m = void 0 !== p && p,
          v = n.padding,
          b = void 0 === v ? 0 : v,
          h = g("number" != typeof b ? b : O(b, j)),
          E = "popper" === f ? "reference" : "popper",
          N = e.elements.reference,
          C = e.rects.popper,
          P = e.elements[m ? E : f],
          k = H(l(P) ? P : P.contextElement || d(e.elements.popper), i, s),
          S = B(N),
          M = Z({
            reference: S,
            element: C,
            strategy: "absolute",
            placement: a,
          }),
          D = V(Object.assign(Object.assign({}, C), M)),
          R = "popper" === f ? D : S,
          T = {
            top: k.top - R.top + h.top,
            bottom: R.bottom - k.bottom + h.bottom,
            left: k.left - R.left + h.left,
            right: R.right - k.right + h.right,
          },
          I = e.modifiersData.offset;
        if ("popper" === f && I) {
          var L = I[a];
          Object.keys(T).forEach(function (e) {
            var t = [w, x].indexOf(e) >= 0 ? 1 : -1,
              n = [y, x].indexOf(e) >= 0 ? "y" : "x";
            T[e] += L[n] * t;
          });
        }
        return T;
      }
      var Q = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            n = e.options,
            a = e.name;
          if (!t.modifiersData[a]._skip) {
            for (
              var o = n.mainAxis,
                i = void 0 === o || o,
                c = n.altAxis,
                s = void 0 === c || c,
                l = n.fallbackPlacements,
                u = n.padding,
                f = n.boundary,
                d = n.rootBoundary,
                p = n.altBoundary,
                m = n.flipVariations,
                v = void 0 === m || m,
                b = n.allowedAutoPlacements,
                h = t.options.placement,
                g = r(h),
                O =
                  l ||
                  (g === h || !v
                    ? [L(h)]
                    : (function (e) {
                        if ("auto" === r(e)) return [];
                        var t = L(e);
                        return [q(e), t, q(t)];
                      })(h)),
                P = [h].concat(O).reduce(function (e, n) {
                  return e.concat(
                    "auto" === r(n)
                      ? (function (e, t) {
                          void 0 === t && (t = {});
                          var n = t,
                            a = n.placement,
                            o = n.boundary,
                            i = n.rootBoundary,
                            c = n.padding,
                            s = n.flipVariations,
                            l = n.allowedAutoPlacements,
                            u = void 0 === l ? C : l,
                            f = F(a),
                            d = f
                              ? s
                                ? N
                                : N.filter(function (e) {
                                    return F(e) === f;
                                  })
                              : j,
                            p = d.filter(function (e) {
                              return u.indexOf(e) >= 0;
                            });
                          0 === p.length && (p = d);
                          var m = p.reduce(function (t, n) {
                            return (
                              (t[n] = J(e, {
                                placement: n,
                                boundary: o,
                                rootBoundary: i,
                                padding: c,
                              })[r(n)]),
                              t
                            );
                          }, {});
                          return Object.keys(m).sort(function (e, t) {
                            return m[e] - m[t];
                          });
                        })(t, {
                          placement: n,
                          boundary: f,
                          rootBoundary: d,
                          padding: u,
                          flipVariations: v,
                          allowedAutoPlacements: b,
                        })
                      : n
                  );
                }, []),
                k = t.rects.reference,
                S = t.rects.popper,
                M = new Map(),
                D = !0,
                R = P[0],
                T = 0;
              T < P.length;
              T++
            ) {
              var I = P[T],
                A = r(I),
                B = "start" === F(I),
                K = [y, x].indexOf(A) >= 0,
                z = K ? "width" : "height",
                W = J(t, {
                  placement: I,
                  boundary: f,
                  rootBoundary: d,
                  altBoundary: p,
                  padding: u,
                }),
                U = K ? (B ? w : E) : B ? x : y;
              k[z] > S[z] && (U = L(U));
              var V = L(U),
                _ = [];
              if (
                (i && _.push(W[A] <= 0),
                s && _.push(W[U] <= 0, W[V] <= 0),
                _.every(function (e) {
                  return e;
                }))
              ) {
                (R = I), (D = !1);
                break;
              }
              M.set(I, _);
            }
            if (D)
              for (
                var H = function (e) {
                    var t = P.find(function (t) {
                      var n = M.get(t);
                      if (n)
                        return n.slice(0, e).every(function (e) {
                          return e;
                        });
                    });
                    if (t) return (R = t), "break";
                  },
                  Z = v ? 3 : 1;
                Z > 0;
                Z--
              ) {
                if ("break" === H(Z)) break;
              }
            t.placement !== R &&
              ((t.modifiersData[a]._skip = !0),
              (t.placement = R),
              (t.reset = !0));
          }
        },
        requiresIfExists: ["offset"],
        data: { _skip: !1 },
      };
      function Y(e, t, n) {
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
      function X(e) {
        return [y, w, x, E].some(function (t) {
          return e[t] >= 0;
        });
      }
      var G = {
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
            i = J(t, { elementContext: "reference" }),
            c = J(t, { altBoundary: !0 }),
            s = Y(i, r),
            l = Y(c, a, o),
            u = X(s),
            f = X(l);
          (t.modifiersData[n] = {
            referenceClippingOffsets: s,
            popperEscapeOffsets: l,
            isReferenceHidden: u,
            hasPopperEscaped: f,
          }),
            (t.attributes.popper = Object.assign(
              Object.assign({}, t.attributes.popper),
              {},
              { "data-popper-reference-hidden": u, "data-popper-escaped": f }
            ));
        },
      };
      var $ = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (e) {
          var t = e.state,
            n = e.options,
            a = e.name,
            o = n.offset,
            i = void 0 === o ? [0, 0] : o,
            c = C.reduce(function (e, n) {
              return (
                (e[n] = (function (e, t, n) {
                  var a = r(e),
                    o = [E, y].indexOf(a) >= 0 ? -1 : 1,
                    i =
                      "function" == typeof n
                        ? n(
                            Object.assign(
                              Object.assign({}, t),
                              {},
                              { placement: e }
                            )
                          )
                        : n,
                    c = i[0],
                    s = i[1];
                  return (
                    (c = c || 0),
                    (s = (s || 0) * o),
                    [E, w].indexOf(a) >= 0 ? { x: s, y: c } : { x: c, y: s }
                  );
                })(n, t.rects, i)),
                e
              );
            }, {}),
            s = c[t.placement],
            l = s.x,
            u = s.y;
          null != t.modifiersData.popperOffsets &&
            ((t.modifiersData.popperOffsets.x += l),
            (t.modifiersData.popperOffsets.y += u)),
            (t.modifiersData[a] = c);
        },
      };
      var ee = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function (e) {
          var t = e.state,
            n = e.name;
          t.modifiersData[n] = Z({
            reference: t.rects.reference,
            element: t.rects.popper,
            strategy: "absolute",
            placement: t.placement,
          });
        },
        data: {},
      };
      var te = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            n = e.options,
            o = e.name,
            i = n.mainAxis,
            c = void 0 === i || i,
            s = n.altAxis,
            l = void 0 !== s && s,
            u = n.boundary,
            f = n.rootBoundary,
            d = n.altBoundary,
            p = n.padding,
            m = n.tether,
            g = void 0 === m || m,
            O = n.tetherOffset,
            j = void 0 === O ? 0 : O,
            N = J(t, {
              boundary: u,
              rootBoundary: f,
              padding: p,
              altBoundary: d,
            }),
            C = r(t.placement),
            P = F(t.placement),
            k = !P,
            S = b(C),
            M = "x" === S ? "y" : "x",
            D = t.modifiersData.popperOffsets,
            R = t.rects.reference,
            T = t.rects.popper,
            I =
              "function" == typeof j
                ? j(
                    Object.assign(
                      Object.assign({}, t.rects),
                      {},
                      { placement: t.placement }
                    )
                  )
                : j,
            L = { x: 0, y: 0 };
          if (D) {
            if (c) {
              var A = "y" === S ? y : E,
                q = "y" === S ? x : w,
                B = "y" === S ? "height" : "width",
                K = D[S],
                z = D[S] + N[A],
                W = D[S] - N[q],
                U = g ? -T[B] / 2 : 0,
                V = "start" === P ? R[B] : T[B],
                _ = "start" === P ? -T[B] : -R[B],
                H = t.elements.arrow,
                Z = g && H ? a(H) : { width: 0, height: 0 },
                Q = t.modifiersData["arrow#persistent"]
                  ? t.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                Y = Q[A],
                X = Q[q],
                G = h(0, R[B], Z[B]),
                $ = k ? R[B] / 2 - U - G - Y - I : V - G - Y - I,
                ee = k ? -R[B] / 2 + U + G + X + I : _ + G + X + I,
                te = t.elements.arrow && v(t.elements.arrow),
                ne = te
                  ? "y" === S
                    ? te.clientTop || 0
                    : te.clientLeft || 0
                  : 0,
                re = t.modifiersData.offset
                  ? t.modifiersData.offset[t.placement][S]
                  : 0,
                ae = D[S] + $ - re - ne,
                oe = D[S] + ee - re,
                ie = h(g ? Math.min(z, ae) : z, K, g ? Math.max(W, oe) : W);
              (D[S] = ie), (L[S] = ie - K);
            }
            if (l) {
              var ce = "x" === S ? y : E,
                se = "x" === S ? x : w,
                le = D[M],
                ue = h(le + N[ce], le, le - N[se]);
              (D[M] = ue), (L[M] = ue - le);
            }
            t.modifiersData[o] = L;
          }
        },
        requiresIfExists: ["offset"],
      };
      function ne(e, t, n) {
        void 0 === n && (n = !1);
        var r,
          a,
          o = d(t),
          s = B(e),
          l = u(t),
          f = { scrollLeft: 0, scrollTop: 0 },
          p = { x: 0, y: 0 };
        return (
          (l || (!l && !n)) &&
            (("body" !== c(t) || W(o)) &&
              (f =
                (r = t) !== i(r) && u(r)
                  ? { scrollLeft: (a = r).scrollLeft, scrollTop: a.scrollTop }
                  : K(r)),
            u(t)
              ? (((p = B(t)).x += t.clientLeft), (p.y += t.clientTop))
              : o && (p.x = z(o))),
          {
            x: s.left + f.scrollLeft - p.x,
            y: s.top + f.scrollTop - p.y,
            width: s.width,
            height: s.height,
          }
        );
      }
      function re(e) {
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
      var ae = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function oe() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return !t.some(function (e) {
          return !(e && "function" == typeof e.getBoundingClientRect);
        });
      }
      function ie(e) {
        void 0 === e && (e = {});
        var t = e,
          n = t.defaultModifiers,
          r = void 0 === n ? [] : n,
          o = t.defaultOptions,
          i = void 0 === o ? ae : o;
        return function (e, t, n) {
          void 0 === n && (n = i);
          var o,
            c,
            s = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign(Object.assign({}, ae), i),
              modifiersData: {},
              elements: { reference: e, popper: t },
              attributes: {},
              styles: {},
            },
            u = [],
            f = !1,
            d = {
              state: s,
              setOptions: function (n) {
                p(),
                  (s.options = Object.assign(
                    Object.assign(Object.assign({}, i), s.options),
                    n
                  )),
                  (s.scrollParents = {
                    reference: l(e)
                      ? U(e)
                      : e.contextElement
                      ? U(e.contextElement)
                      : [],
                    popper: U(t),
                  });
                var a = (function (e) {
                  var t = re(e);
                  return P.reduce(function (e, n) {
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
                          ? Object.assign(
                              Object.assign(Object.assign({}, n), t),
                              {},
                              {
                                options: Object.assign(
                                  Object.assign({}, n.options),
                                  t.options
                                ),
                                data: Object.assign(
                                  Object.assign({}, n.data),
                                  t.data
                                ),
                              }
                            )
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
                  (s.orderedModifiers = a.filter(function (e) {
                    return e.enabled;
                  })),
                  s.orderedModifiers.forEach(function (e) {
                    var t = e.name,
                      n = e.options,
                      r = void 0 === n ? {} : n,
                      a = e.effect;
                    if ("function" == typeof a) {
                      var o = a({ state: s, name: t, instance: d, options: r });
                      u.push(o || function () {});
                    }
                  }),
                  d.update()
                );
              },
              forceUpdate: function () {
                if (!f) {
                  var e = s.elements,
                    t = e.reference,
                    n = e.popper;
                  if (oe(t, n)) {
                    (s.rects = {
                      reference: ne(t, v(n), "fixed" === s.options.strategy),
                      popper: a(n),
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
                        var o = s.orderedModifiers[r],
                          i = o.fn,
                          c = o.options,
                          l = void 0 === c ? {} : c,
                          u = o.name;
                        "function" == typeof i &&
                          (s =
                            i({ state: s, options: l, name: u, instance: d }) ||
                            s);
                      } else (s.reset = !1), (r = -1);
                  }
                }
              },
              update:
                ((o = function () {
                  return new Promise(function (e) {
                    d.forceUpdate(), e(s);
                  });
                }),
                function () {
                  return (
                    c ||
                      (c = new Promise(function (e) {
                        Promise.resolve().then(function () {
                          (c = void 0), e(o());
                        });
                      })),
                    c
                  );
                }),
              destroy: function () {
                p(), (f = !0);
              },
            };
          if (!oe(e, t)) return d;
          function p() {
            u.forEach(function (e) {
              return e();
            }),
              (u = []);
          }
          return (
            d.setOptions(n).then(function (e) {
              !f && n.onFirstUpdate && n.onFirstUpdate(e);
            }),
            d
          );
        };
      }
      var ce = ie({ defaultModifiers: [G, ee, D, T, $, Q, te, k] });
    },
    cWnB: function (e, t, n) {
      "use strict";
      var r = n("wx14"),
        a = n("zLVn"),
        o = n("TSYQ"),
        i = n.n(o),
        c = n("q1tI"),
        s = n.n(c),
        l = n("vUet"),
        u = n("dbZe"),
        f = s.a.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            o = e.variant,
            c = e.size,
            f = e.active,
            d = e.className,
            p = e.block,
            m = e.type,
            v = e.as,
            b = Object(a.a)(e, [
              "bsPrefix",
              "variant",
              "size",
              "active",
              "className",
              "block",
              "type",
              "as",
            ]),
            h = Object(l.a)(n, "btn"),
            g = i()(
              d,
              h,
              f && "active",
              h + "-" + o,
              p && h + "-block",
              c && h + "-" + c
            );
          if (b.href)
            return s.a.createElement(
              u.a,
              Object(r.a)({}, b, {
                as: v,
                ref: t,
                className: i()(g, b.disabled && "disabled"),
              })
            );
          t && (b.ref = t), m ? (b.type = m) : v || (b.type = "button");
          var O = v || "button";
          return s.a.createElement(O, Object(r.a)({}, b, { className: g }));
        });
      (f.displayName = "Button"),
        (f.defaultProps = { variant: "primary", active: !1, disabled: !1 }),
        (t.a = f);
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
        return Object(o.g)(e), e;
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
        c = n("Qg85");
      function s(e) {
        return !e || "#" === e.trim();
      }
      var l = i.a.forwardRef(function (e, t) {
        var n = e.as,
          o = void 0 === n ? "a" : n,
          l = e.disabled,
          u = e.onKeyDown,
          f = Object(a.a)(e, ["as", "disabled", "onKeyDown"]),
          d = function (e) {
            var t = f.href,
              n = f.onClick;
            (l || s(t)) && e.preventDefault(),
              l ? e.stopPropagation() : n && n(e);
          };
        return (
          s(f.href) &&
            ((f.role = f.role || "button"), (f.href = f.href || "#")),
          l && ((f.tabIndex = -1), (f["aria-disabled"] = !0)),
          i.a.createElement(
            o,
            Object(r.a)({ ref: t }, f, {
              onClick: d,
              onKeyDown: Object(c.a)(function (e) {
                " " === e.key && (e.preventDefault(), d(e));
              }, u),
            })
          )
        );
      });
      (l.displayName = "SafeAnchor"), (t.a = l);
    },
    lcWJ: function (e, t, n) {
      "use strict";
      var r = n("q1tI"),
        a = function (e) {
          return e && "function" != typeof e
            ? function (t) {
                e.current = t;
              }
            : e;
        };
      t.a = function (e, t) {
        return Object(r.useMemo)(
          function () {
            return (function (e, t) {
              var n = a(e),
                r = a(t);
              return function (e) {
                n && n(e), r && r(e);
              };
            })(e, t);
          },
          [e, t]
        );
      };
    },
    pvIh: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          function t(t, n, r, a, o, i) {
            var c = a || "<<anonymous>>",
              s = i || r;
            if (null == n[r])
              return t
                ? new Error(
                    "Required " +
                      o +
                      " `" +
                      s +
                      "` was not specified in `" +
                      c +
                      "`."
                  )
                : null;
            for (
              var l = arguments.length, u = Array(l > 6 ? l - 6 : 0), f = 6;
              f < l;
              f++
            )
              u[f - 6] = arguments[f];
            return e.apply(void 0, [n, r, c, o, s].concat(u));
          }
          var n = t.bind(null, !1);
          return (n.isRequired = t.bind(null, !0)), n;
        }),
        (e.exports = t.default);
    },
    q4sD: function (e, t, n) {},
    qvwu: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var r = n("q1tI");
      function a(e) {
        var t = Object(r.useRef)(null);
        return (
          Object(r.useEffect)(function () {
            t.current = e;
          }),
          t.current
        );
      }
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
        return (r =
          Object.assign ||
          function (e) {
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
//# sourceMappingURL=commons-c5970f959eca6da26f06.js.map
