const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/index.ts',
    target: 'webworker',
    mode: 'production',
    optimization: {
        minimize: false
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'build'),
        libraryTarget: 'this'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
        fallback: {
            // Add process polyfill
            process: require.resolve('process/browser')
        }
    },
    plugins: [
        // Use dotenv-webpack to load environment variables into process.env
        new Dotenv({
            systemvars: true, // Also load system environment variables
            safe: false,      // Load all variables from .env file
            expand: true      // Allows for expanding variables already in .env
        }),
        
        // Provide process as a global
        new webpack.ProvidePlugin({
            process: 'process/browser'
        })
    ],
    externals: [
        function({ request }, callback) {
            if (/^fastly:.*$/.test(request)) {
                return callback(null, 'commonjs ' + request);
            }
            callback();
        }
    ]
};