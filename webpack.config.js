const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

let conf = {
	 entry: {
		app: './src/index.js'
		}
	 
	 ,
	 output: {
	 	path: path.resolve(__dirname,'./dist'),
	 	filename: '[name].js',
	 	publicPath: '/dist'
	 },
	 devServer: {
	 	
	 	overlay:true
	 }, 
	 module:{
	 	rules:[
	 	 {
		 	test: /\.m?js$/,
	 		exclude: '/node_modules/',		
	   		 	loader: 'babel-loader',
		 },
		 {
			test:/\.less$/,
			use:[
				'style-loader',
			  	MiniCssExtractPlugin.loader,
			  	{
					  loader:'css-loader',
					  options:{sourceMap:true}
				},
				{
					loader:"less-loader",
					options:{sourseMap:true}
				}
			],   	  	
		 },

    	  {
    	  	test:/\.css$/,
    	  	use:[
				MiniCssExtractPlugin.loader,
				'css-loader'
			  ],   	  	
    	   }

	 	]
	 },
	 plugins:[
		 new MiniCssExtractPlugin({
			 filename:"[name].css"
		 })
	 ]
};




module.exports = conf;