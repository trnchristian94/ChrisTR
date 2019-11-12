const path = require('path');
module.exports = {
    mode: "development",
    entry: "./app/src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/app/dist"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
        alias: {
            components: path.resolve(__dirname, 'app/src/components/'),
            styles: path.resolve(__dirname, 'app/src/styles/'),
            img: path.resolve(__dirname, 'app/src/img/')
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
        contentBase: path.resolve(__dirname, 'app/'), // . 
        publicPath: '/app/dist/', // '/dist/'
        watchContentBase: true,
        inline: true,
        hot: true,
        compress: true,
        watchOptions: {
            poll: true
        }
    }
};