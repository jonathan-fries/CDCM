const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    devServer: {
        inline:true,
        contentBase:'./public',
        port: 14285,
        historyApiFallback: true
    },
    mode: 'development',
    entry: ['@babel/polyfill', './src/client.js'],
    output: {
        filename: 'index.js'
    },
    module: {
        rules: [
            {test:/\.js$/,
                exclude:/node_modules/,
                use: {loader: 'babel-loader'}
            },
            {test:/\.(scss|sass)$/, use: [{loader: MiniCssExtractPlugin.loader}, "css-loader", "sass-loader" ]}
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({filename: "app.css"})
    ]
};
