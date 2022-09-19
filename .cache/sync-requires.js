const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/admin/Personal/dandananddada.github.io/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/admin/Personal/dandananddada.github.io/src/pages/index.js"))),
  "component---src-templates-blog-content-js": hot(preferDefault(require("/Users/admin/Personal/dandananddada.github.io/src/templates/blog/content.js"))),
  "component---src-templates-blog-page-js": hot(preferDefault(require("/Users/admin/Personal/dandananddada.github.io/src/templates/blog/page.js"))),
  "component---src-templates-game-games-template-js": hot(preferDefault(require("/Users/admin/Personal/dandananddada.github.io/src/templates/game/games.template.js")))
}

