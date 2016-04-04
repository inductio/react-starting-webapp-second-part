/**
 * Created by Oleksandr_Shustrov on 4/4/2016.
 */
module.exports = {
    entry: {
        main: [
            './src/main.js'
        ]
    },
    output: {
        filename: './public/[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    }
}