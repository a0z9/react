const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isProduction = false;

module.exports  = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
     // path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {loader: 'babel-loader'},
                exclude: ['/node_modules/'],
            },
            {
                test: /\.css$/,
                use: ['css-loader', 'style-loader'],
            }
        ],
    }
};


