import { join } from 'path';

export const entry = './src/index.js';
export const module = {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        },
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        },
        {
            test: /\.(pdf|jpg|png|gif|svg|ico)$/,
            use: [
                {
                    loader: 'url-loader'
                },
            ]
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            loader: "file-loader"
        }
    ]
};
export const resolve = {
    extensions: ['*', '.js', '.jsx']
};
export const output = {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
};
export const devServer = {
    static: {
        directory: join(__dirname, 'dist')
    }
};