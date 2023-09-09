const { src } = require('gulp');
const del = require('gulp-clean');
const fs = require('fs');
const gulpConfig = require('../gulpConfig.json');

const path = gulpConfig.path;

function clean(done) {
	if (fs.existsSync(path.dist.distPath)) {
		return src(path.dist.distPath).pipe(del())
	}
	done()
}

exports.clean = clean;