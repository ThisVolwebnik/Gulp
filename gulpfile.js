const { parallel, series } = require('gulp');
const { scss } = require('./tasks/sass');
const { html } = require('./tasks/html');
const { js } = require('./tasks/script');
const { clean } = require('./tasks/clean');
const { server } = require('./tasks/server');
const { watching } = require('./tasks/watching');
const { fonts } = require('./tasks/fonts');
const { images } = require('./tasks/images');

exports.default = series(
	clean,
	parallel(scss, html, js, fonts, images),
	parallel(server, watching)
)