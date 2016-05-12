var webpack = require('webpack')
var path = require('path')
var DEV_MODE = (process.env.NODE_ENV === 'development')


module.exports = {
    entry: {
        app: [
            'webpack-hot-middleware/client',
            'react-hot-loader/patch',
            './js/entry.js'
        ],
        vendor: ['react', 'react-dom'],
    },
    output: {
        path: path.join(__dirname, 'assets'),
        publicPath: '/assets/',
        filename: '[name].js'
    },

    module: {},

    plugins: [
        // For https://www.npmjs.com/package/webpack-hot-middleware
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),

        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' })
    ]
}
