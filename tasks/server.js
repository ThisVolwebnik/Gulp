const browserSync = require('browser-sync');
const gulpConfig = require('../gulpConfig.json');

const path = gulpConfig.path;

function server() {
	browserSync.init({
		open: true,
		server: path.dist.distPath
	});
}

exports.server = server;