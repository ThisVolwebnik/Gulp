const { src, dest } = require('gulp');
const fileInclude = require('gulp-file-include');
const gulpConfig = require('../gulpConfig.json');
const htmlmin = require('gulp-htmlmin');
const dependents = require('gulp-dependents');
const browserSync = require('browser-sync');
const cached = require('gulp-cached');

const path = gulpConfig.path;

function html() {
	return src(path.src.html)
		.pipe(cached('html'))
		.pipe(dependents())
		.pipe(fileInclude())
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(dest(path.dist.html))
		.on('end', browserSync.reload);
};

exports.html = html;