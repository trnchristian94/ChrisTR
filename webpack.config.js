const path = require('path');
var Dotenv = require('dotenv-webpack');

module.exports = {
    mode: "development",
    entry: "./app/src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/app/dist",
        publicPath: "/"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
        alias: {
            components: path.resolve(__dirname, 'app/src/components/'),
            styles: path.resolve(__dirname, 'app/src/styles/'),
            img: path.resolve(__dirname, 'app/src/img/'),
            src: path.resolve(__dirname, 'app/src/'),
            utils: path.resolve(__dirname, 'app/src/utils')
        }
    },
    devtool: "source-map",
    module: {
        rules: [{
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.tsx?$/,
                loader: "babel-loader"
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    devServer: {
        port: 3001,
        contentBase: path.resolve(__dirname, 'app/'),
        publicPath: '/app/dist/',
        watchContentBase: true,
        inline: true,
        hot: true,
        compress: true,
        watchOptions: {
            poll: true
        },
        historyApiFallback: {
            index: '/'
        }
    },
    node: {
        fs: 'empty'
    },
    plugins: [
        new Dotenv({
            path: path.resolve(__dirname, '.', '.env'),
        }),
    ]
};