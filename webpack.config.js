var path = require('path');
var Dotenv = require('dotenv-webpack');
module.exports = {
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
    node: {
        fs: 'empty'
    },
    plugins: [
        new Dotenv({
            path: path.resolve(__dirname, '.', '.env'),
        })
    ],
    devServer: {
        port: 3001,
        contentBase: path.resolve(__dirname, 'app/'),
        publicPath: '/dist/',
        watchContentBase: true,
        inline: true,
        hot: true,
        watchOptions: {
            poll: true
        },
        historyApiFallback: {
            index: '/'
        }
    }
};