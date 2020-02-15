const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';



module.exports = {
    entry: { 
        main: './src/js/index.js',
        mail: './src/js/catalog.js'

    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './scripts/[name].[chunkhash].js'
    },
   
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
      },
  
    module: {
        rules: [{ 
            test: /\.js$/, 
            use: { loader: "babel-loader" }, 
            exclude: /node_modules/ 
                },
        
        {
            test: /\.css$/i, 
            use: [
                (isDev ? 'style-loader': {
                   loader:  MiniCssExtractPlugin.loader,
                options: {
                    publicPath: '../'
                }
            }),
                'css-loader', 
                'postcss-loader'
            ]
        },

        {
            test: /\.(gif|png|jpe?g|svg|ico)$/i,
            use: [
                'file-loader?name=./images/[name].[ext]',
                {
                loader: 'image-webpack-loader',
                options: {
                    bypassOnDebug: true, 
                    disable: true, 
                        },
                    },
                ],
            },

        {
            test: /\.(eot|ttf|woff|woff2)$/,
            use: [
                    {
                        loader: 'file-loader?name=./fonts/[name].[ext]'
                    }
                ]
            },
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles/[name].[contenthash].css',
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                    preset: ['default'],
            },
            canPrint: true
       }),
        new HtmlWebpackPlugin({ 
            inject: true,
            template: './src/index.html',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({ 
            inject: false,
            template: './src/catalog.html',
            filename: 'catalog.html'
        }),

        

        new WebpackMd5Hash()
    ]
}

