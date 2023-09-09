const { src, dest } = require('gulp');
const avif = require('gulp-avif');
const webp = require('gulp-webp');
const gulpConfig = require('../gulpConfig.json');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');

const path = gulpConfig.path;

function images() {
	return src(path.src.imagesNoSvg)
		.pipe(newer(path.dist.images))
		.pipe(avif({ quality: 50 }))
		.pipe(src(path.src.images))
		.pipe(webp())
		.pipe(src(path.src.images))
		.pipe(imagemin())
		.pipe(dest(path.dist.images))
}

exports.images = images;