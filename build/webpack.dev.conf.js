const webpack = require("webpack");
const merge = require("webpack-merge");
const baseWebpackConf = require("./webpack.base.conf");

module.exports = merge(baseWebpackConf, {
  output: {
		filename: "[name].js",
  },
	watch: true,
	watchOptions: {
		ignored: /node_modules/
	}
});
