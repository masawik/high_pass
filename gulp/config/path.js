import * as nodePath from 'path'

const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = `./dist`
const srcFolder = './src'

export const path = {
  build: {
    fonts: `${buildFolder}/fonts/`,
    svgSprites: `${buildFolder}/images/`,
    images: `${buildFolder}/images/`,
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/styles/`,
    html: buildFolder,
  },
  src: {
    fonts: `${srcFolder}/fonts/*.woff*`,
    svgSprites: `${srcFolder}/images/sprites/**/*.svg`,
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/images/**/*.svg`,
    js: `${srcFolder}/js/main.js`,
    css: `${srcFolder}/styles/main.scss`,
    html: `${srcFolder}/*.pug`,
  },
  watch: {
    svg: `${srcFolder}/images/**/*.svg`,
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp}`,
    js: `${srcFolder}/js/**/*.js`,
    css: `${srcFolder}/styles/**/*.scss`,
    html: `${srcFolder}/**/*.pug`,
  },
  clean: buildFolder,
  buildFolder,
  srcFolder,
  rootFolder
}