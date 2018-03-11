const path = require('path')
const webpack = require('webpack')

// plugins
const CleanWebpackPlugin = require("clean-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const UglifyWebpackPlugin = require("uglifyjs-webpack-plugin")

const isProductionMode = process.env.NODE_ENV === "production"

const sourceDir = "src"
const distributionDir = "dist"

module.exports = {
    context: path.resolve(__dirname, sourceDir),
    entry: {
        app: ["./app/main.ts"],
        "math.lib": "./lib/math.ts"
    },
    output: {
        path: path.resolve(__dirname, distributionDir),
        filename: "[name].bundle.js",
        publicPath: "/"
    },
    devtool: "#sourcemap",
    module: {
        rules: [
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
            },
            {
                test: /\.ts?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
        ]
    },
    resolve: {
        extensions: [ ".ts", ".js" ]
    },
    plugins: getPlugins()
}

function getPlugins() {
    const generalPlugins = [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new CleanWebpackPlugin([distributionDir]),
        new ExtractTextPlugin("app.bundle.css"),
        new HtmlWebpackPlugin({
            template: "index.html"
        })
    ]
    const developmentPlugins = []
    const productionPlugins = [
        new UglifyWebpackPlugin({
            sourceMap: true,
            uglifyOptions: {
                output: {
                    semicolons: false,
                }
            }
        })
    ]
    return isProductionMode 
        ? generalPlugins.concat(productionPlugins)
        : generalPlugins.concat(developmentPlugins)
}