import cleanCSS from "gulp-clean-css"
import webpCSS from 'gulp-webpcss'
import groupMediaQueries from 'gulp-group-css-media-queries'
import autoprefixer from "gulp-autoprefixer"
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename'

const sass = gulpSass(dartSass);


export const styles = () => {
  return app.gulp.src(app.path.src.css)
    .pipe(app.plugins.plumber(app.plugins.notify.onError({
      title: "SCSS",
      message: 'Error: <%= error.message %>'
    })))
    .pipe(app.plugins.if(app.isDev, app.plugins.sourcemaps.init()))
    .pipe(sass())
    // .pipe(app.plugins.concat('style.min.css'))
    .pipe(app.plugins.replace(/@images\//g, '../images/'))
    .pipe(app.plugins.if(app.isBuild, autoprefixer({
      cascade: true,
      grid: true,
      overrideBrowserslist: ['last 3 versions']
    })))
    .pipe(webpCSS({
      webpClass: ".webp",
      noWebpClass: ".no-webp"
    }))
    .pipe(app.plugins.if(app.isBuild, groupMediaQueries()))
    .pipe(app.plugins.if(app.isBuild, cleanCSS({level: 2})))
    .pipe(app.plugins.if(app.isDev, app.plugins.sourcemaps.write()))
    .pipe(rename('styles.min.css'))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browserSync.stream())
}
