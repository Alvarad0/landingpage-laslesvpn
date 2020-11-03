const MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    autoprefixer = require('autoprefixer'),
    path = require('path'),
    webpack = require('webpack')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    entry: {
        js: './src/index.js'
    },
    output: {
        filename: "[name].[chunkhash].js",
        path: path.resolve(__dirname, 'dist')
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            autoprefixer: {
                                browser: ['last 2 versions']
                            },
                            sourceMap: true,
                            plugins: () => [ autoprefixer ]
                        }
                    },
                    'resolve-url-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg|webp)$/i,
                loader: 'file-loader',
                options: {
                    esModule: false,
                    name: 'assets/[name].[ext]'
                }
            },
            {
                test: /\.(ttf|eot|woff2?|mp4|mp3|txt|xml)$/i,
                use: 'file-loader?name=assets/[name].[ext]'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': "jquery",
            'jQuery': "jquery",
            'window.jQuery': 'jquery'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash].css',
            chunkFilename: 'id'.css
        }),
        new HtmlWebpackPlugin({
            template: './src/views/template.html',
            filename: 'index.html',
            chunks: ['js'],
            minify: {
                html5: true,
                collapseWhitespace: true,
                caseSensitive: true,
                removeComments: true
            }
        })
    ]
}
