// webpack.config.js
var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
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
    path:  	path.resolve(projectRoot, './dist') ,
    filename: 'js/[name].bundle.js',

  },


  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(projectRoot, './src/index.html')
      })
  ],
  module: {
    rules: [ {
         test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
				query:{
					"presets": [
						"react"
					],
					"plugins": [
						"react-hot-loader/babel"

					]
				},


      },
			{test: /\.css$/, loader: "style-loader!css-loader"},

			{test: /\.json$/, loader: "json-loader"},
      // Load images.
      {
        test: /\.(jpg|png|gif|ico|pdf)$/,
        loader: 'file-loader',
        options: {
                 name: 'asset/img/[name]-[hash:8].[ext]'

             },
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
        query:{
            name: 'asset/fonts/[name].[ext]'
          }
      },
			{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
							loader: "url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]" ,
							include: [

								//path.resolve(projectRoot, './node_modules/font-awesome/fonts/') ,
                path.resolve(projectRoot, './src/asset/fonts/') ,
                path.resolve(projectRoot, './node_modules/react-sort-search-table/lib/fonts/') ,
			                 ],
						},
						{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
							loader: "file-loader?name=fonts/[name].[ext]" ,
							include: [

							//	path.resolve(projectRoot, './node_modules/font-awesome/fonts/') ,
              path.resolve(projectRoot, './src/asset/fonts/') ,
              path.resolve(projectRoot, './node_modules/react-sort-search-table/lib/fonts/') ,
			                 ],
						},
		]
  },
  resolve: {
       extensions: [".js", ".jsx"],
       modules: [
      			"node_modules"
      		],
      		alias: {
      			reactSortSearchTblFonts: path.join(__dirname, './node_modules/react-sort-search-table/lib/fonts'),
      		}
   },


  performance: { hints: false }
}
