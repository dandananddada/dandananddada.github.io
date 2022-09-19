// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-templates-blog-content-js": () => import("./../../../src/templates/blog/content.js" /* webpackChunkName: "component---src-templates-blog-content-js" */),
  "component---src-templates-blog-page-js": () => import("./../../../src/templates/blog/page.js" /* webpackChunkName: "component---src-templates-blog-page-js" */),
  "component---src-templates-game-games-template-js": () => import("./../../../src/templates/game/games.template.js" /* webpackChunkName: "component---src-templates-game-games-template-js" */)
}

