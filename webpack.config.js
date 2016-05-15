const path = require('path')
const webpack = require('webpack')
const SvgStore = require('webpack-svgstore-plugin')

const DEV_MODE = (process.env.NODE_ENV === 'development')


const config = {
    entry: {
        app: [
            'webpack-hot-middleware/client',
            'react-hot-loader/patch',
            './ui/entry.js'
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

        new SvgStore(
            path.join(__dirname, 'public/svg/*.svg'),   // input path
            'svg',                                      // output path
            { name: '[hash].sprite.svg', chunk: 'app' } // options
        ),
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' })
    ]
}

var addStyleConfig = require('stylepack')()
module.exports = addStyleConfig(config)
