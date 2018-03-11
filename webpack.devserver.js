const webpack = require("webpack")
const webpackDevServer = require("webpack-dev-server")

const port = parseInt(process.env.PORT || "3000")

var config = require("./webpack.config.js")
config.entry.app.unshift("webpack-dev-server/client?http://localhost:" + port + "/", "webpack/hot/dev-server")
config.plugins.unshift(new webpack.HotModuleReplacementPlugin())

var compiler = webpack(config)

const server = new webpackDevServer(compiler, {
    disableHostCheck: true,
    hot: true,
    inline: true
})

server.listen(port, "127.0.0.1", function(error) {
    if(error) return console.error(error)
    console.info("Listening on port %s. Open up http://localhost:%s/ in your browser", port, port)
})