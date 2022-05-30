import svgSpritePlugin from 'gulp-svg-sprite'

export const svgSprite = () => {
  return app.gulp.src(app.path.src.svgSprites)
    .pipe(app.plugins.plumber(app.plugins.notify.onError({
      title: "IMAGES",
      message: 'Error: <%= error.message %>'
    })))

    .pipe(svgSpritePlugin({
      mode: {
        stack: {
          sprite: '../sprites.svg',
          example: true
        }
      }
    }))

    .pipe(app.gulp.dest(app.path.build.svgSprites))
}