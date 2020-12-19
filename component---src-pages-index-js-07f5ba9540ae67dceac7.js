(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    "9eSz": function (e, t, a) {
      "use strict";
      var r = a("TqRt");
      (t.__esModule = !0), (t.default = void 0);
      var i,
        n = r(a("PJYZ")),
        l = r(a("VbXa")),
        s = r(a("8OQS")),
        d = r(a("pVnL")),
        o = r(a("q1tI")),
        c = r(a("17x9")),
        u = function (e) {
          var t = (0, d.default)({}, e),
            a = t.resolutions,
            r = t.sizes,
            i = t.critical;
          return (
            a && ((t.fixed = a), delete t.resolutions),
            r && ((t.fluid = r), delete t.sizes),
            i && (t.loading = "eager"),
            t.fluid && (t.fluid = w([].concat(t.fluid))),
            t.fixed && (t.fixed = w([].concat(t.fixed))),
            t
          );
        },
        f = function (e) {
          var t = e.media;
          return !!t && b && !!window.matchMedia(t).matches;
        },
        m = function (e) {
          var t = e.fluid,
            a = e.fixed,
            r = g(t || a || []);
          return r && r.src;
        },
        g = function (e) {
          if (
            b &&
            (function (e) {
              return (
                !!e &&
                Array.isArray(e) &&
                e.some(function (e) {
                  return void 0 !== e.media;
                })
              );
            })(e)
          ) {
            var t = e.findIndex(f);
            if (-1 !== t) return e[t];
            var a = e.findIndex(function (e) {
              return void 0 === e.media;
            });
            if (-1 !== a) return e[a];
          }
          return e[0];
        },
        p = Object.create({}),
        h = function (e) {
          var t = u(e),
            a = m(t);
          return p[a] || !1;
        },
        E =
          "undefined" != typeof HTMLImageElement &&
          "loading" in HTMLImageElement.prototype,
        b = "undefined" != typeof window,
        y = b && window.IntersectionObserver,
        v = new WeakMap();
      function S(e) {
        return e.map(function (e) {
          var t = e.src,
            a = e.srcSet,
            r = e.srcSetWebp,
            i = e.media,
            n = e.sizes;
          return o.default.createElement(
            o.default.Fragment,
            { key: t },
            r &&
              o.default.createElement("source", {
                type: "image/webp",
                media: i,
                srcSet: r,
                sizes: n,
              }),
            a &&
              o.default.createElement("source", {
                media: i,
                srcSet: a,
                sizes: n,
              })
          );
        });
      }
      function w(e) {
        var t = [],
          a = [];
        return (
          e.forEach(function (e) {
            return (e.media ? t : a).push(e);
          }),
          [].concat(t, a)
        );
      }
      function x(e) {
        return e.map(function (e) {
          var t = e.src,
            a = e.media,
            r = e.tracedSVG;
          return o.default.createElement("source", {
            key: t,
            media: a,
            srcSet: r,
          });
        });
      }
      function L(e) {
        return e.map(function (e) {
          var t = e.src,
            a = e.media,
            r = e.base64;
          return o.default.createElement("source", {
            key: t,
            media: a,
            srcSet: r,
          });
        });
      }
      function N(e, t) {
        var a = e.srcSet,
          r = e.srcSetWebp,
          i = e.media,
          n = e.sizes;
        return (
          "<source " +
          (t ? "type='image/webp' " : "") +
          (i ? 'media="' + i + '" ' : "") +
          'srcset="' +
          (t ? r : a) +
          '" ' +
          (n ? 'sizes="' + n + '" ' : "") +
          "/>"
        );
      }
      var I = function (e, t) {
          var a =
            (void 0 === i &&
              "undefined" != typeof window &&
              window.IntersectionObserver &&
              (i = new window.IntersectionObserver(
                function (e) {
                  e.forEach(function (e) {
                    if (v.has(e.target)) {
                      var t = v.get(e.target);
                      (e.isIntersecting || e.intersectionRatio > 0) &&
                        (i.unobserve(e.target), v.delete(e.target), t());
                    }
                  });
                },
                { rootMargin: "200px" }
              )),
            i);
          return (
            a && (a.observe(e), v.set(e, t)),
            function () {
              a.unobserve(e), v.delete(e);
            }
          );
        },
        R = function (e) {
          var t = e.src ? 'src="' + e.src + '" ' : 'src="" ',
            a = e.sizes ? 'sizes="' + e.sizes + '" ' : "",
            r = e.srcSet ? 'srcset="' + e.srcSet + '" ' : "",
            i = e.title ? 'title="' + e.title + '" ' : "",
            n = e.alt ? 'alt="' + e.alt + '" ' : 'alt="" ',
            l = e.width ? 'width="' + e.width + '" ' : "",
            s = e.height ? 'height="' + e.height + '" ' : "",
            d = e.crossOrigin ? 'crossorigin="' + e.crossOrigin + '" ' : "",
            o = e.loading ? 'loading="' + e.loading + '" ' : "",
            c = e.draggable ? 'draggable="' + e.draggable + '" ' : "";
          return (
            "<picture>" +
            e.imageVariants
              .map(function (e) {
                return (e.srcSetWebp ? N(e, !0) : "") + N(e);
              })
              .join("") +
            "<img " +
            o +
            l +
            s +
            a +
            r +
            t +
            n +
            i +
            d +
            c +
            'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'
          );
        },
        M = o.default.forwardRef(function (e, t) {
          var a = e.src,
            r = e.imageVariants,
            i = e.generateSources,
            n = e.spreadProps,
            l = e.ariaHidden,
            s = o.default.createElement(
              O,
              (0, d.default)({ ref: t, src: a }, n, { ariaHidden: l })
            );
          return r.length > 1
            ? o.default.createElement("picture", null, i(r), s)
            : s;
        }),
        O = o.default.forwardRef(function (e, t) {
          var a = e.sizes,
            r = e.srcSet,
            i = e.src,
            n = e.style,
            l = e.onLoad,
            c = e.onError,
            u = e.loading,
            f = e.draggable,
            m = e.ariaHidden,
            g = (0, s.default)(e, [
              "sizes",
              "srcSet",
              "src",
              "style",
              "onLoad",
              "onError",
              "loading",
              "draggable",
              "ariaHidden",
            ]);
          return o.default.createElement(
            "img",
            (0, d.default)(
              { "aria-hidden": m, sizes: a, srcSet: r, src: i },
              g,
              {
                onLoad: l,
                onError: c,
                ref: t,
                loading: u,
                draggable: f,
                style: (0, d.default)(
                  {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  },
                  n
                ),
              }
            )
          );
        });
      O.propTypes = {
        style: c.default.object,
        onError: c.default.func,
        onLoad: c.default.func,
      };
      var z = (function (e) {
        function t(t) {
          var a;
          ((a = e.call(this, t) || this).seenBefore = b && h(t)),
            (a.isCritical = "eager" === t.loading || t.critical),
            (a.addNoScript = !(a.isCritical && !t.fadeIn)),
            (a.useIOSupport = !E && y && !a.isCritical && !a.seenBefore);
          var r = a.isCritical || (b && (E || !a.useIOSupport));
          return (
            (a.state = {
              isVisible: r,
              imgLoaded: !1,
              imgCached: !1,
              fadeIn: !a.seenBefore && t.fadeIn,
              isHydrated: !1,
            }),
            (a.imageRef = o.default.createRef()),
            (a.placeholderRef = t.placeholderRef || o.default.createRef()),
            (a.handleImageLoaded = a.handleImageLoaded.bind((0, n.default)(a))),
            (a.handleRef = a.handleRef.bind((0, n.default)(a))),
            a
          );
        }
        (0, l.default)(t, e);
        var a = t.prototype;
        return (
          (a.componentDidMount = function () {
            if (
              (this.setState({ isHydrated: b }),
              this.state.isVisible &&
                "function" == typeof this.props.onStartLoad &&
                this.props.onStartLoad({ wasCached: h(this.props) }),
              this.isCritical)
            ) {
              var e = this.imageRef.current;
              e && e.complete && this.handleImageLoaded();
            }
          }),
          (a.componentWillUnmount = function () {
            this.cleanUpListeners && this.cleanUpListeners();
          }),
          (a.handleRef = function (e) {
            var t = this;
            this.useIOSupport &&
              e &&
              (this.cleanUpListeners = I(e, function () {
                var e = h(t.props);
                t.state.isVisible ||
                  "function" != typeof t.props.onStartLoad ||
                  t.props.onStartLoad({ wasCached: e }),
                  t.setState({ isVisible: !0 }, function () {
                    t.setState({
                      imgLoaded: e,
                      imgCached: !(
                        !t.imageRef.current || !t.imageRef.current.currentSrc
                      ),
                    });
                  });
              }));
          }),
          (a.handleImageLoaded = function () {
            var e, t, a;
            (e = this.props),
              (t = u(e)),
              (a = m(t)) && (p[a] = !0),
              this.setState({ imgLoaded: !0 }),
              this.props.onLoad && this.props.onLoad();
          }),
          (a.render = function () {
            var e = u(this.props),
              t = e.title,
              a = e.alt,
              r = e.className,
              i = e.style,
              n = void 0 === i ? {} : i,
              l = e.imgStyle,
              s = void 0 === l ? {} : l,
              c = e.placeholderStyle,
              f = void 0 === c ? {} : c,
              m = e.placeholderClassName,
              p = e.fluid,
              h = e.fixed,
              E = e.backgroundColor,
              b = e.durationFadeIn,
              y = e.Tag,
              v = e.itemProp,
              w = e.loading,
              N = e.draggable,
              I = p || h;
            if (!I) return null;
            var z = !1 === this.state.fadeIn || this.state.imgLoaded,
              V = !0 === this.state.fadeIn && !this.state.imgCached,
              H = (0, d.default)(
                {
                  opacity: z ? 1 : 0,
                  transition: V ? "opacity " + b + "ms" : "none",
                },
                s
              ),
              T = "boolean" == typeof E ? "lightgray" : E,
              j = { transitionDelay: b + "ms" },
              k = (0, d.default)(
                { opacity: this.state.imgLoaded ? 0 : 1 },
                V && j,
                s,
                f
              ),
              C = {
                title: t,
                alt: this.state.isVisible ? "" : a,
                style: k,
                className: m,
                itemProp: v,
              },
              P = this.state.isHydrated ? g(I) : I[0];
            if (p)
              return o.default.createElement(
                y,
                {
                  className: (r || "") + " gatsby-image-wrapper",
                  style: (0, d.default)(
                    {
                      position: "relative",
                      overflow: "hidden",
                      maxWidth: P.maxWidth ? P.maxWidth + "px" : null,
                      maxHeight: P.maxHeight ? P.maxHeight + "px" : null,
                    },
                    n
                  ),
                  ref: this.handleRef,
                  key: "fluid-" + JSON.stringify(P.srcSet),
                },
                o.default.createElement(y, {
                  "aria-hidden": !0,
                  style: {
                    width: "100%",
                    paddingBottom: 100 / P.aspectRatio + "%",
                  },
                }),
                T &&
                  o.default.createElement(y, {
                    "aria-hidden": !0,
                    title: t,
                    style: (0, d.default)(
                      {
                        backgroundColor: T,
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        opacity: this.state.imgLoaded ? 0 : 1,
                        right: 0,
                        left: 0,
                      },
                      V && j
                    ),
                  }),
                P.base64 &&
                  o.default.createElement(M, {
                    ariaHidden: !0,
                    ref: this.placeholderRef,
                    src: P.base64,
                    spreadProps: C,
                    imageVariants: I,
                    generateSources: L,
                  }),
                P.tracedSVG &&
                  o.default.createElement(M, {
                    ariaHidden: !0,
                    ref: this.placeholderRef,
                    src: P.tracedSVG,
                    spreadProps: C,
                    imageVariants: I,
                    generateSources: x,
                  }),
                this.state.isVisible &&
                  o.default.createElement(
                    "picture",
                    null,
                    S(I),
                    o.default.createElement(O, {
                      alt: a,
                      title: t,
                      sizes: P.sizes,
                      src: P.src,
                      crossOrigin: this.props.crossOrigin,
                      srcSet: P.srcSet,
                      style: H,
                      ref: this.imageRef,
                      onLoad: this.handleImageLoaded,
                      onError: this.props.onError,
                      itemProp: v,
                      loading: w,
                      draggable: N,
                    })
                  ),
                this.addNoScript &&
                  o.default.createElement("noscript", {
                    dangerouslySetInnerHTML: {
                      __html: R(
                        (0, d.default)({ alt: a, title: t, loading: w }, P, {
                          imageVariants: I,
                        })
                      ),
                    },
                  })
              );
            if (h) {
              var W = (0, d.default)(
                {
                  position: "relative",
                  overflow: "hidden",
                  display: "inline-block",
                  width: P.width,
                  height: P.height,
                },
                n
              );
              return (
                "inherit" === n.display && delete W.display,
                o.default.createElement(
                  y,
                  {
                    className: (r || "") + " gatsby-image-wrapper",
                    style: W,
                    ref: this.handleRef,
                    key: "fixed-" + JSON.stringify(P.srcSet),
                  },
                  T &&
                    o.default.createElement(y, {
                      "aria-hidden": !0,
                      title: t,
                      style: (0, d.default)(
                        {
                          backgroundColor: T,
                          width: P.width,
                          opacity: this.state.imgLoaded ? 0 : 1,
                          height: P.height,
                        },
                        V && j
                      ),
                    }),
                  P.base64 &&
                    o.default.createElement(M, {
                      ariaHidden: !0,
                      ref: this.placeholderRef,
                      src: P.base64,
                      spreadProps: C,
                      imageVariants: I,
                      generateSources: L,
                    }),
                  P.tracedSVG &&
                    o.default.createElement(M, {
                      ariaHidden: !0,
                      ref: this.placeholderRef,
                      src: P.tracedSVG,
                      spreadProps: C,
                      imageVariants: I,
                      generateSources: x,
                    }),
                  this.state.isVisible &&
                    o.default.createElement(
                      "picture",
                      null,
                      S(I),
                      o.default.createElement(O, {
                        alt: a,
                        title: t,
                        width: P.width,
                        height: P.height,
                        sizes: P.sizes,
                        src: P.src,
                        crossOrigin: this.props.crossOrigin,
                        srcSet: P.srcSet,
                        style: H,
                        ref: this.imageRef,
                        onLoad: this.handleImageLoaded,
                        onError: this.props.onError,
                        itemProp: v,
                        loading: w,
                        draggable: N,
                      })
                    ),
                  this.addNoScript &&
                    o.default.createElement("noscript", {
                      dangerouslySetInnerHTML: {
                        __html: R(
                          (0, d.default)({ alt: a, title: t, loading: w }, P, {
                            imageVariants: I,
                          })
                        ),
                      },
                    })
                )
              );
            }
            return null;
          }),
          t
        );
      })(o.default.Component);
      z.defaultProps = {
        fadeIn: !0,
        durationFadeIn: 500,
        alt: "",
        Tag: "div",
        loading: "lazy",
      };
      var V = c.default.shape({
          width: c.default.number.isRequired,
          height: c.default.number.isRequired,
          src: c.default.string.isRequired,
          srcSet: c.default.string.isRequired,
          base64: c.default.string,
          tracedSVG: c.default.string,
          srcWebp: c.default.string,
          srcSetWebp: c.default.string,
          media: c.default.string,
        }),
        H = c.default.shape({
          aspectRatio: c.default.number.isRequired,
          src: c.default.string.isRequired,
          srcSet: c.default.string.isRequired,
          sizes: c.default.string.isRequired,
          base64: c.default.string,
          tracedSVG: c.default.string,
          srcWebp: c.default.string,
          srcSetWebp: c.default.string,
          media: c.default.string,
          maxWidth: c.default.number,
          maxHeight: c.default.number,
        });
      function T(e) {
        return function (t, a, r) {
          var i;
          if (!t.fixed && !t.fluid)
            throw new Error(
              "The prop `fluid` or `fixed` is marked as required in `" +
                r +
                "`, but their values are both `undefined`."
            );
          c.default.checkPropTypes((((i = {})[a] = e), i), t, "prop", r);
        };
      }
      z.propTypes = {
        resolutions: V,
        sizes: H,
        fixed: T(c.default.oneOfType([V, c.default.arrayOf(V)])),
        fluid: T(c.default.oneOfType([H, c.default.arrayOf(H)])),
        fadeIn: c.default.bool,
        durationFadeIn: c.default.number,
        title: c.default.string,
        alt: c.default.string,
        className: c.default.oneOfType([c.default.string, c.default.object]),
        critical: c.default.bool,
        crossOrigin: c.default.oneOfType([c.default.string, c.default.bool]),
        style: c.default.object,
        imgStyle: c.default.object,
        placeholderStyle: c.default.object,
        placeholderClassName: c.default.string,
        backgroundColor: c.default.oneOfType([
          c.default.string,
          c.default.bool,
        ]),
        onLoad: c.default.func,
        onError: c.default.func,
        onStartLoad: c.default.func,
        Tag: c.default.string,
        itemProp: c.default.string,
        loading: c.default.oneOf(["auto", "lazy", "eager"]),
        draggable: c.default.bool,
      };
      var j = z;
      t.default = j;
    },
    RXBc: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "query", function () {
          return L;
        });
      var r = a("q1tI"),
        i = a.n(r),
        n = a("dDsW"),
        l = a("Bl7J"),
        s = a("9eSz"),
        d = a.n(s),
        o = a("cWnB"),
        c = a("JI6e"),
        u = a("7vrA"),
        f = a("wx14"),
        m = a("zLVn"),
        g = a("TSYQ"),
        p = a.n(g),
        h = a("vUet"),
        E = i.a.forwardRef(function (e, t) {
          var a,
            r = e.as,
            n = void 0 === r ? "div" : r,
            l = e.className,
            s = e.fluid,
            d = e.bsPrefix,
            o = Object(m.a)(e, ["as", "className", "fluid", "bsPrefix"]),
            c =
              (((a = {})[(d = Object(h.a)(d, "jumbotron"))] = !0),
              (a[d + "-fluid"] = s),
              a);
          return i.a.createElement(
            n,
            Object(f.a)({ ref: t }, o, { className: p()(l, c) })
          );
        });
      (E.defaultProps = { fluid: !1 }), (E.displayName = "Jumbotron");
      var b = E,
        y = a("3Z9Z"),
        v = function (e) {
          var t = e.logo;
          return i.a.createElement(
            b,
            null,
            i.a.createElement(
              u.a,
              null,
              i.a.createElement(d.a, { fixed: t.childImageSharp.fixed }),
              i.a.createElement(
                "h1",
                { className: "display-6 text-white" },
                "ETHTerakoya"
              )
            )
          );
        },
        S = function (e) {
          var t = e.title;
          return i.a.createElement(
            y.a,
            { className: "py-2 mb-5" },
            i.a.createElement(
              c.a,
              null,
              i.a.createElement(
                "div",
                { className: "text-center" },
                i.a.createElement(
                  "a",
                  {
                    href: "https://forms.gle/3ptEzDnWtrzqShMz8",
                    target: "_blank",
                    rel: "noreferrer",
                  },
                  i.a.createElement(o.a, { variant: "info" }, t)
                )
              )
            )
          );
        },
        w = function (e) {
          var t = e.data,
            a = Object(n.a)();
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(v, { logo: t.logo }),
            i.a.createElement(
              u.a,
              null,
              i.a.createElement(
                y.a,
                null,
                i.a.createElement(
                  c.a,
                  { className: "py-5" },
                  i.a.createElement(
                    "h3",
                    { className: "text-center mb-5" },
                    i.a.createElement(
                      "span",
                      { role: "img", "aria-label": "hand" },
                      "👉"
                    ),
                    a.formatMessage({ id: "slogan" })
                  )
                )
              ),
              i.a.createElement(
                y.a,
                null,
                i.a.createElement(
                  c.a,
                  { className: "py-5" },
                  i.a.createElement(
                    "h4",
                    { className: "text-center mb-5 h3" },
                    a.formatMessage({ id: "what" })
                  ),
                  i.a.createElement(
                    "p",
                    null,
                    a.formatMessage({ id: "whatDetail" })
                  )
                )
              ),
              i.a.createElement(
                y.a,
                null,
                i.a.createElement(
                  c.a,
                  { className: "col-sm py-md-5 pb-5" },
                  i.a.createElement(
                    "h4",
                    { className: "text-center mb-5" },
                    i.a.createElement(
                      "span",
                      { role: "img", "aria-label": "friendship" },
                      "👬"
                    ),
                    i.a.createElement(
                      "span",
                      {
                        role: "img",
                        "aria-label": "friendship different order",
                      },
                      "👫"
                    ),
                    a.formatMessage({ id: "wg" })
                  ),
                  i.a.createElement(
                    "ul",
                    null,
                    i.a.createElement(
                      "li",
                      null,
                      a.formatMessage({ id: "wgList1" })
                    ),
                    i.a.createElement(
                      "li",
                      null,
                      a.formatMessage({ id: "wgList2" })
                    ),
                    i.a.createElement(
                      "li",
                      null,
                      a.formatMessage({ id: "wgList3" })
                    )
                  )
                ),
                i.a.createElement(
                  c.a,
                  { className: "col-sm py-md-5 pb-5" },
                  i.a.createElement(
                    "h4",
                    { className: "text-center mb-5" },
                    i.a.createElement(
                      "span",
                      { role: "img", "aria-label": "male researcher" },
                      "👨‍🔬"
                    ),
                    i.a.createElement(
                      "span",
                      { role: "img", "aria-label": "female researcher" },
                      "👩‍⚕"
                    ),
                    a.formatMessage({ id: "ws" })
                  ),
                  i.a.createElement(
                    "ul",
                    null,
                    i.a.createElement(
                      "li",
                      null,
                      a.formatMessage({ id: "wsList1" })
                    ),
                    i.a.createElement(
                      "li",
                      null,
                      a.formatMessage({ id: "wsList2" })
                    )
                  )
                )
              ),
              i.a.createElement(S, {
                title: a.formatMessage({ id: "contact" }),
              })
            ),
            i.a.createElement(
              u.a,
              { fluid: !0, className: "bg-beige" },
              i.a.createElement(
                y.a,
                { className: "justify-content-md-center py-5 bg-beige" },
                i.a.createElement(
                  c.a,
                  { className: "col-12 col-sm-6" },
                  i.a.createElement(
                    "h4",
                    { className: "text-center mb-5" },
                    a.formatMessage({ id: "target" })
                  ),
                  i.a.createElement(
                    "ul",
                    null,
                    i.a.createElement(
                      "li",
                      null,
                      a.formatMessage({ id: "target1" })
                    ),
                    i.a.createElement(
                      "li",
                      null,
                      a.formatMessage({ id: "target2" })
                    ),
                    i.a.createElement(
                      "li",
                      null,
                      a.formatMessage({ id: "target3" })
                    )
                  )
                )
              )
            ),
            i.a.createElement(
              u.a,
              null,
              i.a.createElement(
                y.a,
                { className: "py-5" },
                i.a.createElement(
                  c.a,
                  null,
                  i.a.createElement(
                    "h4",
                    { className: "text-center mb-5" },
                    a.formatMessage({ id: "organize" })
                  ),
                  i.a.createElement(
                    "div",
                    { className: "text-center" },
                    i.a.createElement(d.a, {
                      fixed: t.couger.childImageSharp.fixed,
                    })
                  )
                )
              ),
              i.a.createElement(
                y.a,
                { className: "py-5" },
                i.a.createElement(
                  c.a,
                  null,
                  i.a.createElement(
                    "h4",
                    { className: "text-center mb-5" },
                    a.formatMessage({ id: "support" })
                  ),
                  i.a.createElement(
                    "div",
                    { className: "text-center" },
                    i.a.createElement(d.a, {
                      fixed: t.ef.childImageSharp.fixed,
                    })
                  )
                )
              ),
              i.a.createElement(S, {
                title: a.formatMessage({ id: "contact" }),
              })
            )
          );
        },
        x = a("vrFN"),
        L =
          ((t.default = function (e) {
            var t = e.data,
              a = e.pageContext,
              r = Object(n.a)(),
              s = "ja" === a.locale ? "ホーム" : "Home";
            return i.a.createElement(
              l.a,
              null,
              i.a.createElement(x.a, {
                title: s,
                description: r.formatMessage({ id: "description" }),
              }),
              i.a.createElement(w, { data: t })
            );
          }),
          "964555951");
    },
    vrFN: function (e, t, a) {
      "use strict";
      var r = a("q1tI"),
        i = a.n(r),
        n = a("qhky"),
        l = a("Wbzz");
      t.a = function (e) {
        var t = e.description,
          a = e.children,
          r = e.title,
          s = e.image,
          d = Object(l.useStaticQuery)("2364640217"),
          o = d.site,
          c = d.ogImageDefault,
          u = s
            ? o.siteMetadata.siteUrl.concat(s)
            : o.siteMetadata.siteUrl.concat(c.childImageSharp.fixed.src),
          f = "undefined" != typeof window ? window.location.href : "";
        return i.a.createElement(
          n.a,
          { title: r, titleTemplate: "%s | " + o.siteMetadata.title },
          i.a.createElement("meta", { name: "description", content: t }),
          i.a.createElement("meta", { property: "og:title", content: r }),
          i.a.createElement("meta", { property: "og:description", content: t }),
          i.a.createElement("meta", { property: "og:image", content: u }),
          i.a.createElement("meta", {
            property: "og:type",
            content: "website",
          }),
          i.a.createElement("meta", {
            property: "og:site_name",
            content: o.siteMetadata.title,
          }),
          i.a.createElement("meta", { property: "og:url", content: f }),
          i.a.createElement("meta", {
            name: "twitter:card",
            content: "summary",
          }),
          i.a.createElement("meta", {
            name: "twitter:creator",
            content: o.siteMetadata.author,
          }),
          i.a.createElement("meta", { name: "twitter:title", content: r }),
          i.a.createElement("meta", { name: "twitter:image", content: u }),
          i.a.createElement("meta", {
            name: "twitter:description",
            content: t,
          }),
          a
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-index-js-07f5ba9540ae67dceac7.js.map
