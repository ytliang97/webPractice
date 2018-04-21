var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry : './app/resources/ui-dev/app.js' ,
    output : {
        filename : 'bundle.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            {
                test : /\.(png|jpg|gif|ico)$/,
                loader : "url-loader?limit=1000&name=images/img-[sha512:hash:base64:15].[ext]"
            },
            {
                test : /\.(ttf|otf|woff|woff2|eot|svg)\??.*$/,
                loader : "url-loader?limit=50000&mimetype=application/octet-stream&name=fonts/font-[sha512:hash:base64:15].[ext]"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('bundle.css')
    ]
};