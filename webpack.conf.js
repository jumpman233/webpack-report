const webpack = require('webpack')
const path = require('path')

const config = {
    mode: 'production',
    entry: {
        'a': ['vue', './src/page2/index.js'],
        'page1': ['vue', './src/page1/index.js'],
        'vendor': ['vue']
    },
    output: {
        path: path.resolve('./dist'),
        filename:'[name].js',
        // chunkFilename: '[name].[chunkhash].js'
    },
    optimization: {
        // namedChunks: true,
        namedModules: true,
        // chunkIds: 'named',
        moduleIds: 'named',
        minimize: false,
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    name: 'vendor',
                    test: 'vendor',
                    enforce: true
                }
            }
        },
        runtimeChunk: {
            name: 'manifest'
        }
    },
    plugins: [
        // new webpack.HashedModuleIdsPlugin({
        //     hashDigest: 'hex',
        // }),
        new webpack.NamedChunksPlugin(chunk => {
            if (chunk.name) {
                console.log(chunk.name)
                return chunk.name
            }
            // console.log(chunk)
        }),
        new webpack.NamedModulesPlugin(module => {
            console.log(module.name)
            console.log(module)
        })
    ]
}

webpack(config, function (err) {
    if (err) {
        throw err
    } else {
        console.log('ok')
    }
})

