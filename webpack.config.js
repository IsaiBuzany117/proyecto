const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js'
    },
    devServer: {
        port: 7070,
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                  { loader: "style-loader" },
                  { loader: "css-loader" }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    { loader: 'file-loader' }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html'
        })
    ]
}