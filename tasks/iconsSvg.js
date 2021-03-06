// sprite.icon.svg

const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const svgmin = require('gulp-svgmin'); // Minify SVG
const cheerio = require('gulp-cheerio'); // manipulate XML files
const replace = require('gulp-replace'); // String Replace
const gulpIf = require('gulp-if');
const fs = require('fs');


module.exports = () => (

	gulp.src('app/icons/svg/**/*.svg')
	.pipe(svgmin({
		js2svg: {
			pretty: true
		}
	}))
	// remove all fill, style and stroke declarations in out shapes
	.pipe(cheerio({
			run: function ($) {
				$('[fill]').removeAttr('fill');
				$('[stroke]').removeAttr('stroke');
				$('[style]').removeAttr('style');
			},
			parserOptions: {xmlMode: true}
	}))

	// cheerio plugin create unnecessary string '&gt;', so replace it.
	.pipe(replace('&gt;', '>'))

	// build svg sprite
	.pipe(svgSprite({
		mode: {
			symbol: {
				
				dest: '.',
				bust: false,
				sprite: 'sprite-icons.svg',
				layout: 'vertical',
				render: {
					styl: {
						dest: 'svg-size.styl',
						template: 'svg-sprite-template'
					}
				}
				
			}
		}
	}))
	.pipe(gulpIf('*.svg', gulp.dest('public/assets/img/sprites'), gulp.dest('app/styles/helpers')))
);
