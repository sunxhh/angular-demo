const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

// 获得路径
const resolve = function(src) {
    return path.join(__dirname, "..", src);
};

module.exports = {
    entry: {
        // 运行Angular时所需的一些标准js
        'polyfills': './src/polyfills.ts',
        // Angular、Lodash
        'vendor': './src/vendor.ts',
        // 应用代码
        'app': resolve('./src/module/app/app.component.ts')
    },
    output: {
        filename: '[name].bundle.js',
        path: resolve('dist')
    },
    plugins: [
        // Workaround for angular/angular#11580
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)@angular/,
            resolve('./src'), // location of your src
            {} // a map of your routes
        ),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new CleanWebpackPlugin([resolve('dist')]),
        new HtmlWebpackPlugin({
            template: resolve('src/module/index.html')
        })
    ],
    module: {
        rules: [{
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            //awesome-typescript-loader - 一个用于把TypeScript代码转译成ES5的加载器，它会由tsconfig.json文件提供指导
            //angular2-template-loader - 用于加载Angular组件的模板和样式
            loaders: ['ts-loader', 'angular2-template-loader']
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }, {
            test: /\.html$/,
            loader: 'html-loader'
        }, {
            test: /\.styl$/,
            use: [
                'style-loader',
                'css-loader',
                'stylus-loader'
            ],
        }, {
            test: /\.(ttf|woff|svg|eot)$/,
            use: [
                'url-loader?name=../fonts/[name].[ext]?[hash]'
            ],
        }, {
            // 图片加载器，file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
            // 如下配置，将小于8192byte的图片转成base64码
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader?limit=8192&name=../images/[name].[ext]?[hash]',
        }]
    },
    resolve: {
        // 可以忽略的文件类型
        extensions: ['.js', '.ts'],
        // 别名
        alias: {
            src: resolve('src')
        }
    }
};
