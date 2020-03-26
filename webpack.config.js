const path = require('path');

module.exports = {
    entry: './app/main',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'all.js',
        publicPath: "xuni"
    },
    // watch: true,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react']
                    }
                }
            },

        ]
    }

};