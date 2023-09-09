const config = {
	mode: 'production',
	entry: {
		index: './src/assets/js/app.js'
	},
	output: {
		filename: '[name].bandle.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	}
}

exports.config = config;