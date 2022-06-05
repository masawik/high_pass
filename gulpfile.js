import gulp from 'gulp'
import {path} from './gulp/config/path.js'
import {reset} from "./gulp/tasks/reset.js"
import {html} from './gulp/tasks/html.js'
import {server} from './gulp/tasks/server.js'
import {plugins} from './gulp/config/plugins.js'
import {styles} from "./gulp/tasks/css.js"
import {js} from "./gulp/tasks/js.js"
import {images} from "./gulp/tasks/images.js"
import {fonts} from "./gulp/tasks/fonts.js"
import {svgSprite} from "./gulp/tasks/svgSprite.js"
import ghPages from "gulp-gh-pages";


global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  path,
  gulp,
  plugins
}

const watcher = () => {
  gulp.watch(path.watch.html, html)
  gulp.watch(path.watch.css, styles)
  gulp.watch(path.watch.js, js)
  gulp.watch(path.watch.images, images)
  gulp.watch(path.watch.svg, svgSprite)
}

const mainTasks = gulp.parallel(html, styles, js, images, svgSprite, fonts)

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))
const build = gulp.series(reset, mainTasks)
const deploy = gulp.series(build, ghPages)

gulp.task('default', dev)

export {
  dev,
  build,
  deploy
}
