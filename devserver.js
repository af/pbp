var app = require('express')()
var webpack = require('webpack')
var webpackConfig = require('./webpack.config')
var compiler = webpack(webpackConfig)
 
app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}))
app.use(require("webpack-hot-middleware")(compiler))

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname })
})
app.listen(8080, () => console.log('servin'))
