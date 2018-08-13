import webpack from "webpack"
import paths from "./paths"

const config: webpack.Configuration = {
	mode: "development",
	entry: [paths.indexts],
	devtool: 'inline-source-map',
	devServer: {
		contentBase: paths.dist,
		compress: false,
		port: 8080,
		historyApiFallback: true
	},
	module: {
		rules: [{
			test: /\.tsx?$/,
			use: [{
				loader: 'ts-loader',
				options: {
					configFile: paths.tsconfig
				}
			}],
			exclude: /node_modules/
		}]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	output: {
		path: paths.dist,
		filename: paths.jsoutput
	}
}

export default config