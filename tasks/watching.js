const { watch } = require('gulp');
const gulpConfig = require('../gulpConfig.json');
const { html } = require('./html');
const { scss } = require('./sass');
const { js } = require('./script');
const { fonts } = require('./fonts');
const { images } = require('./images');

const path = gulpConfig.path;

function watching() {
	watch(path.watch.html, html)
	watch(path.watch.style, scss)
	watch(path.watch.scripts, js)
	watch(path.watch.fonts, fonts)
	watch(path.watch.images, images)
}

exports.watching = watching;