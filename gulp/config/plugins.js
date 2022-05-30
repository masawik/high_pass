import replace from 'gulp-replace'
import plumber from 'gulp-plumber'
import notify from "gulp-notify"
import browserSync from 'browser-sync'
import sourcemaps from "gulp-sourcemaps"
import concat from "gulp-concat"
import newer from 'gulp-newer'
import ifPlugin from 'gulp-if'

export const plugins = {
  replace,
  notify,
  plumber,
  browserSync,
  sourcemaps,
  concat,
  newer,
  if: ifPlugin
}