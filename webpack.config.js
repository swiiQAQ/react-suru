var autoprefixer = require('autoprefixer')
module.exports = {
    entry: __dirname + '/app/main.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devtool: 'eval-source-map',
    resolve: {
        extensions: ['.ts','.tsx','.js','.json','.css','.scss']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/, 
                use: 'awesome-typescript-loader'
            },
            {
                test: /(\.(jsx|js)?$)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["es2015","react"]
                    },
                    // exclude: './node_modules/'
                }
            },
            {
                test: /(\.(scss|css)?$)/,
                // use: ['style-loader','css-loader','sass-loader','postcss-loader']
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options:{
                            plugins: function(){
                                return [autoprefixer]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(woff|svg|eot|ttf)?$/,
                use: ['url-loader']
            },  
            {
                test: /\.json$/,
                use: 'json-loader'
            }
        ]
    },
    // externals: {
    //     'react' : 'React',
    //     'react-dom' : 'ReactDom'
    // },
    devServer: {
        contentBase: "./public",
        historyApiFallback: true,
        inline: true,
        port: 8001,
        proxy:{
            '/api':'htto://localhost:8001'
        }
    },
    plugins: [
        require('autoprefixer')
    ]
}