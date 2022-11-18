(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    "9eSz": function (e, t, a) {
      "use strict";
      var r = a("TqRt");
      (t.__esModule = !0), (t.default = void 0);
      var i,
        n = r(a("PJYZ")),
        s = r(a("VbXa")),
        d = r(a("8OQS")),
        o = r(a("pVnL")),
        l = r(a("q1tI")),
        c = r(a("17x9")),
        u = function (e) {
          var t = (0, o.default)({}, e),
            a = t.resolutions,
            r = t.sizes,
            i = t.critical;
          return (
            a && ((t.fixed = a), delete t.resolutions),
            r && ((t.fluid = r), delete t.sizes),
            i && (t.loading = "eager"),
            t.fluid && (t.fluid = E([].concat(t.fluid))),
            t.fixed && (t.fixed = E([].concat(t.fixed))),
            t
          );
        },
        f = function (e) {
          var t = e.media;
          return !!t && y && !!window.matchMedia(t).matches;
        },
        p = function (e) {
          var t = e.fluid,
            a = e.fixed,
            r = g(t || a || []);
          return r && r.src;
        },
        g = function (e) {
          if (
            y &&
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
        m = Object.create({}),
        h = function (e) {
          var t = u(e),
            a = p(t);
          return m[a] || !1;
        },
        b =
          "undefined" != typeof HTMLImageElement &&
          "loading" in HTMLImageElement.prototype,
        y = "undefined" != typeof window,
        S = y && window.IntersectionObserver,
        v = new WeakMap();
      function w(e) {
        return e.map(function (e) {
          var t = e.src,
            a = e.srcSet,
            r = e.srcSetWebp,
            i = e.media,
            n = e.sizes;
          return l.default.createElement(
            l.default.Fragment,
            { key: t },
            r &&
              l.default.createElement("source", {
                type: "image/webp",
                media: i,
                srcSet: r,
                sizes: n,
              }),
            a &&
              l.default.createElement("source", {
                media: i,
                srcSet: a,
                sizes: n,
              })
          );
        });
      }
      function E(e) {
        var t = [],
          a = [];
        return (
          e.forEach(function (e) {
            return (e.media ? t : a).push(e);
          }),
          [].concat(t, a)
        );
      }
      function L(e) {
        return e.map(function (e) {
          var t = e.src,
            a = e.media,
            r = e.tracedSVG;
          return l.default.createElement("source", {
            key: t,
            media: a,
            srcSet: r,
          });
        });
      }
      function I(e) {
        return e.map(function (e) {
          var t = e.src,
            a = e.media,
            r = e.base64;
          return l.default.createElement("source", {
            key: t,
            media: a,
            srcSet: r,
          });
        });
      }
      function R(e, t) {
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
      var O = function (e, t) {
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
        x = function (e) {
          var t = e.src ? 'src="' + e.src + '" ' : 'src="" ',
            a = e.sizes ? 'sizes="' + e.sizes + '" ' : "",
            r = e.srcSet ? 'srcset="' + e.srcSet + '" ' : "",
            i = e.title ? 'title="' + e.title + '" ' : "",
            n = e.alt ? 'alt="' + e.alt + '" ' : 'alt="" ',
            s = e.width ? 'width="' + e.width + '" ' : "",
            d = e.height ? 'height="' + e.height + '" ' : "",
            o = e.crossOrigin ? 'crossorigin="' + e.crossOrigin + '" ' : "",
            l = e.loading ? 'loading="' + e.loading + '" ' : "",
            c = e.draggable ? 'draggable="' + e.draggable + '" ' : "";
          return (
            "<picture>" +
            e.imageVariants
              .map(function (e) {
                return (e.srcSetWebp ? R(e, !0) : "") + R(e);
              })
              .join("") +
            "<img " +
            l +
            s +
            d +
            a +
            r +
            t +
            n +
            i +
            o +
            c +
            'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'
          );
        },
        z = l.default.forwardRef(function (e, t) {
          var a = e.src,
            r = e.imageVariants,
            i = e.generateSources,
            n = e.spreadProps,
            s = e.ariaHidden,
            d = l.default.createElement(
              V,
              (0, o.default)({ ref: t, src: a }, n, { ariaHidden: s })
            );
          return r.length > 1
            ? l.default.createElement("picture", null, i(r), d)
            : d;
        }),
        V = l.default.forwardRef(function (e, t) {
          var a = e.sizes,
            r = e.srcSet,
            i = e.src,
            n = e.style,
            s = e.onLoad,
            c = e.onError,
            u = e.loading,
            f = e.draggable,
            p = e.ariaHidden,
            g = (0, d.default)(e, [
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
          return l.default.createElement(
            "img",
            (0, o.default)(
              { "aria-hidden": p, sizes: a, srcSet: r, src: i },
              g,
              {
                onLoad: s,
                onError: c,
                ref: t,
                loading: u,
                draggable: f,
                style: (0, o.default)(
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
      V.propTypes = {
        style: c.default.object,
        onError: c.default.func,
        onLoad: c.default.func,
      };
      var H = (function (e) {
        function t(t) {
          var a;
          ((a = e.call(this, t) || this).seenBefore = y && h(t)),
            (a.isCritical = "eager" === t.loading || t.critical),
            (a.addNoScript = !(a.isCritical && !t.fadeIn)),
            (a.useIOSupport = !b && S && !a.isCritical && !a.seenBefore);
          var r = a.isCritical || (y && (b || !a.useIOSupport));
          return (
            (a.state = {
              isVisible: r,
              imgLoaded: !1,
              imgCached: !1,
              fadeIn: !a.seenBefore && t.fadeIn,
              isHydrated: !1,
            }),
            (a.imageRef = l.default.createRef()),
            (a.placeholderRef = t.placeholderRef || l.default.createRef()),
            (a.handleImageLoaded = a.handleImageLoaded.bind((0, n.default)(a))),
            (a.handleRef = a.handleRef.bind((0, n.default)(a))),
            a
          );
        }
        (0, s.default)(t, e);
        var a = t.prototype;
        return (
          (a.componentDidMount = function () {
            if (
              (this.setState({ isHydrated: y }),
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
              (this.cleanUpListeners = O(e, function () {
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
              (a = p(t)) && (m[a] = !0),
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
              s = e.imgStyle,
              d = void 0 === s ? {} : s,
              c = e.placeholderStyle,
              f = void 0 === c ? {} : c,
              p = e.placeholderClassName,
              m = e.fluid,
              h = e.fixed,
              b = e.backgroundColor,
              y = e.durationFadeIn,
              S = e.Tag,
              v = e.itemProp,
              E = e.loading,
              R = e.draggable,
              O = m || h;
            if (!O) return null;
            var H = !1 === this.state.fadeIn || this.state.imgLoaded,
              T = !0 === this.state.fadeIn && !this.state.imgCached,
              C = (0, o.default)(
                {
                  opacity: H ? 1 : 0,
                  transition: T ? "opacity " + y + "ms" : "none",
                },
                d
              ),
              k = "boolean" == typeof b ? "lightgray" : b,
              M = { transitionDelay: y + "ms" },
              P = (0, o.default)(
                { opacity: this.state.imgLoaded ? 0 : 1 },
                T && M,
                d,
                f
              ),
              W = {
                title: t,
                alt: this.state.isVisible ? "" : a,
                style: P,
                className: p,
                itemProp: v,
              },
              q = this.state.isHydrated ? g(O) : O[0];
            if (m)
              return l.default.createElement(
                S,
                {
                  className: (r || "") + " gatsby-image-wrapper",
                  style: (0, o.default)(
                    {
                      position: "relative",
                      overflow: "hidden",
                      maxWidth: q.maxWidth ? q.maxWidth + "px" : null,
                      maxHeight: q.maxHeight ? q.maxHeight + "px" : null,
                    },
                    n
                  ),
                  ref: this.handleRef,
                  key: "fluid-" + JSON.stringify(q.srcSet),
                },
                l.default.createElement(S, {
                  "aria-hidden": !0,
                  style: {
                    width: "100%",
                    paddingBottom: 100 / q.aspectRatio + "%",
                  },
                }),
                k &&
                  l.default.createElement(S, {
                    "aria-hidden": !0,
                    title: t,
                    style: (0, o.default)(
                      {
                        backgroundColor: k,
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        opacity: this.state.imgLoaded ? 0 : 1,
                        right: 0,
                        left: 0,
                      },
                      T && M
                    ),
                  }),
                q.base64 &&
                  l.default.createElement(z, {
                    ariaHidden: !0,
                    ref: this.placeholderRef,
                    src: q.base64,
                    spreadProps: W,
                    imageVariants: O,
                    generateSources: I,
                  }),
                q.tracedSVG &&
                  l.default.createElement(z, {
                    ariaHidden: !0,
                    ref: this.placeholderRef,
                    src: q.tracedSVG,
                    spreadProps: W,
                    imageVariants: O,
                    generateSources: L,
                  }),
                this.state.isVisible &&
                  l.default.createElement(
                    "picture",
                    null,
                    w(O),
                    l.default.createElement(V, {
                      alt: a,
                      title: t,
                      sizes: q.sizes,
                      src: q.src,
                      crossOrigin: this.props.crossOrigin,
                      srcSet: q.srcSet,
                      style: C,
                      ref: this.imageRef,
                      onLoad: this.handleImageLoaded,
                      onError: this.props.onError,
                      itemProp: v,
                      loading: E,
                      draggable: R,
                    })
                  ),
                this.addNoScript &&
                  l.default.createElement("noscript", {
                    dangerouslySetInnerHTML: {
                      __html: x(
                        (0, o.default)({ alt: a, title: t, loading: E }, q, {
                          imageVariants: O,
                        })
                      ),
                    },
                  })
              );
            if (h) {
              var N = (0, o.default)(
                {
                  position: "relative",
                  overflow: "hidden",
                  display: "inline-block",
                  width: q.width,
                  height: q.height,
                },
                n
              );
              return (
                "inherit" === n.display && delete N.display,
                l.default.createElement(
                  S,
                  {
                    className: (r || "") + " gatsby-image-wrapper",
                    style: N,
                    ref: this.handleRef,
                    key: "fixed-" + JSON.stringify(q.srcSet),
                  },
                  k &&
                    l.default.createElement(S, {
                      "aria-hidden": !0,
                      title: t,
                      style: (0, o.default)(
                        {
                          backgroundColor: k,
                          width: q.width,
                          opacity: this.state.imgLoaded ? 0 : 1,
                          height: q.height,
                        },
                        T && M
                      ),
                    }),
                  q.base64 &&
                    l.default.createElement(z, {
                      ariaHidden: !0,
                      ref: this.placeholderRef,
                      src: q.base64,
                      spreadProps: W,
                      imageVariants: O,
                      generateSources: I,
                    }),
                  q.tracedSVG &&
                    l.default.createElement(z, {
                      ariaHidden: !0,
                      ref: this.placeholderRef,
                      src: q.tracedSVG,
                      spreadProps: W,
                      imageVariants: O,
                      generateSources: L,
                    }),
                  this.state.isVisible &&
                    l.default.createElement(
                      "picture",
                      null,
                      w(O),
                      l.default.createElement(V, {
                        alt: a,
                        title: t,
                        width: q.width,
                        height: q.height,
                        sizes: q.sizes,
                        src: q.src,
                        crossOrigin: this.props.crossOrigin,
                        srcSet: q.srcSet,
                        style: C,
                        ref: this.imageRef,
                        onLoad: this.handleImageLoaded,
                        onError: this.props.onError,
                        itemProp: v,
                        loading: E,
                        draggable: R,
                      })
                    ),
                  this.addNoScript &&
                    l.default.createElement("noscript", {
                      dangerouslySetInnerHTML: {
                        __html: x(
                          (0, o.default)({ alt: a, title: t, loading: E }, q, {
                            imageVariants: O,
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
      })(l.default.Component);
      H.defaultProps = {
        fadeIn: !0,
        durationFadeIn: 500,
        alt: "",
        Tag: "div",
        loading: "lazy",
      };
      var T = c.default.shape({
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
        C = c.default.shape({
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
      function k(e) {
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
      H.propTypes = {
        resolutions: T,
        sizes: C,
        fixed: k(c.default.oneOfType([T, c.default.arrayOf(T)])),
        fluid: k(c.default.oneOfType([C, c.default.arrayOf(C)])),
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
      var M = H;
      t.default = M;
    },
    vrFN: function (e, t, a) {
      "use strict";
      var r = a("q1tI"),
        i = a.n(r),
        n = a("qhky"),
        s = a("Wbzz");
      t.a = function (e) {
        var t = e.description,
          a = e.children,
          r = e.title,
          d = e.image,
          o = Object(s.useStaticQuery)("1442128573"),
          l = o.site,
          c = o.ogImageDefault,
          u = d
            ? l.siteMetadata.siteUrl.concat(d)
            : l.siteMetadata.siteUrl.concat(c.childImageSharp.fixed.src),
          f = "undefined" != typeof window ? window.location.href : "";
        return i.a.createElement(
          n.a,
          { title: r, titleTemplate: "%s | " + l.siteMetadata.title },
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
            content: l.siteMetadata.title,
          }),
          i.a.createElement("meta", { property: "og:url", content: f }),
          i.a.createElement("meta", {
            name: "twitter:card",
            content: "summary",
          }),
          i.a.createElement("meta", {
            name: "twitter:creator",
            content: l.siteMetadata.author,
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
//# sourceMappingURL=e0964c8fc51d0049a2b7cf74729e64d21815a450-aaf3d86ecfdb939b3866.js.map
