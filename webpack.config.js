const path = require('path')
const webpack = require('webpack')

// plugins
const CleanWebpackPlugin = require("clean-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const sourceDir = "src"
const distributionDir = "dist"

module.exports = {
    context: path.resolve(__dirname, sourceDir),
    entry: {
        app: ["./app/main.ts"],
        "math.lib": "./app/lib/math.ts"
    },
    output: {
        path: path.resolve(__dirname, distributionDir),
        filename: "[name].bundle.js",
        publicPath: "/"
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: "awesome-typescript-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(s*)css$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    fallback: "style-loader"
                }) 
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                use: [ "file-loader" ]
            }
        ]
    },
    resolve: {
        extensions: [ ".ts", ".js" ]
    },
    plugins: [
        new CleanWebpackPlugin([distributionDir]),
        new ExtractTextPlugin("app.bundle.css"),
        new HtmlWebpackPlugin({
            template: "index.html"
        })
    ]
};