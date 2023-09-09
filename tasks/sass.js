const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const maps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const autoPrefixer = require('gulp-autoprefixer');
const dependents = require('gulp-dependents');
const gulpConfig = require('../gulpConfig.json');
const browserSync = require('browser-sync');
const cached = require('gulp-cached');

const path = gulpConfig.path;

function scss() {
	return src(path.src.style)
		.pipe(cached('scss'))
		.pipe(dependents())
		.pipe(maps.init())
		.pipe(sass({ outputStyle: 'compressed' }))
		.pipe(autoPrefixer({
			grid: true,
			flex: true
		}))
		.pipe(maps.write())
		.pipe(rename({ suffix: '.min' }))
		.pipe(dest(path.dist.style))
		.pipe(browserSync.reload({ stream: true }))
};

exports.scss = scss;

