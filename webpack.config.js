import path from 'node:path';

export default {
    entry: './src/app.ts',
    resolve: {
        extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
    },
    output: {
        filename: 'bundle.js', // Specify the output filename
        path: path.resolve(process.cwd(), 'dist'), // Use process.cwd() instead of __dirname
    },
    module: {
        rules: [
            {
                test: /.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                },
            },
        ],
    },
};