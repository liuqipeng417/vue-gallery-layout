const path = require("path");

function resolve(dir) {
	return path.join(__dirname, "..", dir);
}

module.exports = {
	context: resolve("./"),
	entry: {
		'vue-gallery-layout': resolve('./src/index.js'),
	},
	output: {
		path: resolve("dist")
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				include: [resolve("src")]
			},
			{
				test: /\.vue$/,
				loader: "vue-loader",
				include: [resolve("src")]
			}
		]
	}
};
