(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"6qSS":function(t,e,n){"use strict";n.r(e),n.d(e,"query",(function(){return f}));var r=n("q1tI"),a=n.n(r),o=n("A2+M"),c=n("JI6e"),i=n("7vrA"),l=n("3Z9Z"),u=n("Bl7J"),s=n("vrFN"),m=function t(e){var n=e.tableOfContents,r=e.depth;return a.a.createElement("ul",null,n.map((function(e){return a.a.createElement("li",{key:e.url},a.a.createElement("a",{href:e.url,className:"toc-link"},e.title),e.items&&a.a.createElement(t,{tableOfContents:e.items,depth:r+1}))})))},p=function(t){var e=t.tableOfContents;return a.a.createElement("div",{className:"toc-container"},a.a.createElement("h3",{className:"h6"},"Table of Contents"),a.a.createElement(m,{tableOfContents:e,depth:0}))},f=(e.default=function(t){var e=t.data;return a.a.createElement(u.a,null,a.a.createElement(s.a,{title:e.mdx.frontmatter.title,discription:e.mdx.excerpt}),a.a.createElement(i.a,null,a.a.createElement(l.a,null,a.a.createElement(c.a,null,a.a.createElement("h1",{className:"pb-3 pt-5 font-weight-bold"},e.mdx.frontmatter.title),a.a.createElement("div",null,e.mdx.frontmatter.date))),a.a.createElement(l.a,null,a.a.createElement(c.a,{sm:4,className:"d-none d-sm-block"},a.a.createElement(p,{tableOfContents:e.mdx.tableOfContents.items})),a.a.createElement(c.a,{sm:{order:"first"},className:"post"},a.a.createElement(o.MDXRenderer,null,e.mdx.body)))))},"3290529092")},"A2+M":function(t,e,n){var r=n("X8hv");t.exports={MDXRenderer:r}},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},Ijbi:function(t,e,n){var r=n("WkPL");t.exports=function(t){if(Array.isArray(t))return r(t)}},RIqP:function(t,e,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),c=n("Bnag");t.exports=function(t){return r(t)||a(t)||o(t)||c()}},SksO:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},X8hv:function(t,e,n){var r=n("sXyB"),a=n("RIqP"),o=n("lSNA"),c=n("8OQS");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u=n("q1tI"),s=n("7ljp"),m=s.useMDXComponents,p=s.mdx,f=n("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,n=t.components,o=t.children,i=c(t,["scope","components","children"]),s=m(n),d=f(e),y=u.useMemo((function(){if(!o)return null;var t=l({React:u,mdx:p},d),e=Object.keys(t),n=e.map((function(e){return t[e]}));return r(Function,["_fn"].concat(a(e),[""+o])).apply(void 0,[{}].concat(a(n)))}),[o,e]);return u.createElement(y,l({components:s},i))}},ZhPi:function(t,e,n){var r=n("WkPL");t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},b48C:function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},sXyB:function(t,e,n){var r=n("SksO"),a=n("b48C");function o(e,n,c){return a()?t.exports=o=Reflect.construct:t.exports=o=function(t,e,n){var a=[null];a.push.apply(a,e);var o=new(Function.bind.apply(t,a));return n&&r(o,n.prototype),o},o.apply(null,arguments)}t.exports=o},vrFN:function(t,e,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("qhky"),c=n("Wbzz");e.a=function(t){var e=t.description,n=t.children,r=t.title,i=Object(c.useStaticQuery)("1445971592").site;return a.a.createElement(o.a,{title:r,titleTemplate:"%s | "+i.siteMetadata.title},a.a.createElement("meta",{name:"description",content:e}),a.a.createElement("meta",{property:"og:title",content:r}),a.a.createElement("meta",{property:"og:description",content:e}),a.a.createElement("meta",{property:"og:type",content:"website"}),a.a.createElement("meta",{property:"og:site_name",content:i.siteMetadata.title}),a.a.createElement("meta",{property:"og:url",content:i.siteMetadata.siteUrl}),a.a.createElement("meta",{name:"twitter:card",content:"summary"}),a.a.createElement("meta",{name:"twitter:creator",content:i.siteMetadata.author}),a.a.createElement("meta",{name:"twitter:title",content:r}),a.a.createElement("meta",{name:"twitter:description",content:e}),n)}}}]);
//# sourceMappingURL=component---src-templates-post-js-ca3438c206d26afe0df1.js.map