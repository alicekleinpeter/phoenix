module.exports = {
    // 1
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js']
    },
    // 2
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    // 3
    devServer: {
        contentBase: './dist'
    }
};
/* 
The Webpack configuration file gives the following instructions:

    (1) Use the src / index.js file as entry point to bundle it.If the src / index.js file imports
     other JavaScript files, bundle them as well.
    (2) The bundled source code files shall result in a bundle.js file in the / dist folder.
    (3) The / dist folder will be used to serve our application to the browser.
*/