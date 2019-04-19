let path = require('path');
let conf = {
	 entry: './src/index.js',
	 output: {
	 	path: path.resolve(__dirname,'./dist'),
	 	filename: 'main.js',
	 	publicPath: 'dist/'
	 },
	 devServer: {
	 	contentBase:path.join(__dirname,'dist'),
	 	overlay:true
	 },
	 module:{
	 	rules:[
	 	 {
		 	test: /\.m?js$/,
	 		exclude: /node_modules/,
	 		use: {
	   		 	loader: 'babel-loader',
	   	 		options: {
	      		presets: ['@babel/preset-env']
	       		 }
	      	}
    	 },
    	  {
    	  	test:/\.css$/,
    	  	use:['style-loader','css-loader'],   	  	
    	  }

	 	]
	 }
};




module.exports = conf;