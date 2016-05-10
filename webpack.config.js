var webpack = require('webpack')
var path = require('path')
var DEV_MODE = (process.env.NODE_ENV === 'development')


module.exports = {
    entry: {
        app: [
            'react-hot-loader/patch',
            './js/entry.js'
        ],
        vendor: ['react', 'react-dom'],
    },
    output: {
        path: path.join(__dirname, 'assets'),
        filename: '[name].js'
    },

    module: {},

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' })
    ]
}
