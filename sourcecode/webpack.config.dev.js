// webpack.config.js
var path = require('path')
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
let projectRoot = process.cwd();
//const srcRoot = path.resolve(__dirname, 'src');
module.exports = {
  entry: {
  main: './src/index.js',
    vendor: [
      'react', 'react-dom','lodash'
    ]
  },
  //entry:'./src/index.js'
  output: {
    path:  	path.resolve(projectRoot, './src') ,
    filename: 'js/[name].bundle.js',

  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(projectRoot, './src/index.html')
      }
    ),

  ],
  module: {
    rules: [ {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
				query:{
					"presets": [
						"react"
					],
					"plugins": [
						"react-hot-loader/babel"
						//Enables React code to work with HMR.
					]
				}

      },
			{test: /\.css$/, loader: "style-loader!css-loader"},

			{test: /\.json$/, loader: "json-loader"},
      // Load images.
      {
        test: /\.(jpg|png|gif|ico|pdf)$/,
        loader: 'file-loader',
        options: {
                 name: '[path][name]-[hash:8].[ext]'
             },
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
        query:{
            name: 'asset/img/[name].[ext]'
          }
      },
			{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
							loader: "url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]" ,
							include: [

								path.resolve(projectRoot, './node_modules/font-awesome/fonts/') ,
			                 ],
						},
						{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
							loader: "file-loader?name=fonts/[name].[ext]" ,
							include: [

								path.resolve(projectRoot, './node_modules/font-awesome/fonts/') ,
			                 ],
						},
		]
  },
  devServer: {
   // historyApiFallback: true,
   contentBase: path.resolve(projectRoot, "./src"),
   host:'0.0.0.0',
   port: 9000,
   disableHostCheck: true,
   //hot: true,
   compress:true,
   publicPath: '/',
   stats: "minimal"

 },

}
