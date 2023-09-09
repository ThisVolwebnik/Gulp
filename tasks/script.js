const { src, dest } = require('gulp');
const webpack = require('webpack-stream');
const webpackConfig = require('../webpack.config');
const gulpCofig = require('../gulpConfig.json');
const babel = require('gulp-babel');
const browserSync = require('browser-sync');

const path = gulpCofig.path;

function js() {
	return src(path.src.scripts)
		.pipe(babel())
		.pipe(webpack(webpackConfig))
		.pipe(dest(path.dist.scripts))
		.pipe(browserSync.reload({ stream: true }))
}

exports.js = js;