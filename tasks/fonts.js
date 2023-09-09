const { src, dest } = require('gulp');
const gulpConfig = require('../gulpConfig.json');
const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');

const path = gulpConfig.path;

function fonts() {
	return src(path.src.fonts)
		.pipe(ttf2woff())
		.pipe(dest(path.dist.fonts))
		.pipe(src(path.src.fonts))
		.pipe(ttf2woff2())
		.pipe(dest(path.dist.fonts));
}

exports.fonts = fonts;