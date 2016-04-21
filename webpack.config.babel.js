module.exports = {
    cache: true,
    entry: './index.js',
    output: {
        path: './dist',
        filename: 'build.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015'],
                    cacheDirectory: true
                }
            },
            {
                test: /\.scss$/,
                include: /src\/components/,
                exclude: /node_modules/,
                loaders: [
                    'style-loader',
                    'css-loader?modules&sourceMap',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader?sourceMap']
            },
            {
                test: /\.woff2?/,
                loaders: ['url-loader?name=[path][name].[ext]?[hash]&mime-type=application/font-woff']
            },
            {
                test: /\.(ttf|eot|svg|jpe?g|png|gif)/,
                loaders: ['url-loader?name=[path][name].[ext]?[hash]']
            },
        ]
    }
};
