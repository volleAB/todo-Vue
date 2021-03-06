const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'develoment';

const config = {
    target: 'web',
    entry: path.join(__dirname,'src/index.js'), //入口 输入
    //__dirname表示这个文件所在目录的地址-->根目录
    //path.join表示把第一个参数的路径和第二个参数的路径拼接起来，拼成绝对路径
    output: {                                   //输出
        filename: 'bundle.js',
        path: path.join(__dirname,'dist')
    },
    //webpack会将js和vue打包成bundle.js，可以在浏览器上直接运行的js代码
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
    //webpack里由vue-loader为webpack去处理.vue的文件类型，最终可以输出正确的js代码类型
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
    //webpack里由vue-loader为webpack去处理.vue的文件类型，最终可以输出正确的js代码类型
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                    'less-loader'
                ]
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: '[name]+a.[ext]'
                        }
                    }
                ]
            }
        ]
    },
    // process.env.NODE_ENV = develpment
    plugins: [
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new HTMLPlugin()
    ]
}

if(isDev) {
    config.devtool = '#cheap-module-eval-source-map'
    config.devServer = {
        port: 8000,
        host: '0.0.0.0',
        overlay: {
            errors: true,
        },
        hot: true
        // historyFallback: {}
        // open: true,  运行webpack时打开页面
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}

module.exports = config;