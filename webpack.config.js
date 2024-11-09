const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    devServer: {
        static: path.join(__dirname, 'src'),
        port: 8085,
        open: true,
    },
    plugins: [

        new CleanWebpackPlugin(),

        new HtmlWebpackPlugin({
            template: './src/pages/index.html',
            filename: 'index.html',
        }),

        new HtmlWebpackPlugin({
            template: './src/pages/about.html',
            filename: 'about.html',
        }),
    ],
};
