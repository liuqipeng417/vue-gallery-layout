const webpack = require("webpack");
const merge = require("webpack-merge");
const baseWebpackConf = require("./webpack.base.conf");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const webpackConfig = merge(baseWebpackConf, {
  output: {
		filename: "[name].min.js",
  },
	plugins: [
    new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			sourceMap: false
		})
	]
});

// `npm run build --report` generate bundle analysis
if (process.env.npm_config_report) {
	webpackConfig.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = webpackConfig;
