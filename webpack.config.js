/**
 * Created by Oleksandr_Shustrov on 4/4/2016.
 */
'use strict';
module.exports = {
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    entry: {
        main: [
            './src/main.js'
        ]
    },
    output: {
        filename: './public/[name].js'
    },
}
