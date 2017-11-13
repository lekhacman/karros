const path = require("path");

module.exports = {
    entry: "./fsrc/RootModule.js",
    output: {
        path: path.resolve(__dirname, "public/app"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use:[
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                use: [
                    "file-loader"
                ]
            },
            {
                test: /\.(html$)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            publicPath:"app/",
                            outputPath:"templates/"
                        }
                    }
                ]
            }
        ],
        loaders: [
            {
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ["es2015"]
                }
            }
        ]
    },
    devtool: "source-map"
};