var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var precss = require('precss');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
    entry: __dirname + '/app/main.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts','.tsx','.js','.json','.css']
    },
    devtool: none,
    module:{
        rules:[
            {
                test: /\.tsx?$/,
                use: 'awesome-typescript-loader'
            },
            {
                test: /\.(scss|css)$/,
                use: ExtractTextPlugin.extract('style-loader','sass-loader!css-loader!postcss-loader')
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=8192&name=images/[hash:8].[name].[ext]'
            },
        ]
    },
    externals: {
        'react' : 'React',
        'react-dom' : 'ReactDom'
    },
    postcss: function(){
        return [autoprefixer,cssnano,precss]
    },  
    plugins: [
        new ExtractTextPlugin('./public/style.min.css'),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warning: false
            }
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname,'src/index.tmpl.html'),
            filename: 'index.html'
        })
    ]
}