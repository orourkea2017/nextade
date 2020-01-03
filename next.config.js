const path = require('path');
const fp = require('lodash/fp');
const withSass = require('@zeit/next-sass');

module.exports = fp.compose(withSass)({
    distDir: './dist/.next',
    webpack: (config, { dev }) => {
        config.resolve.modules = [
            path.resolve('./node_modules'),
            path.resolve()
        ]

        if (dev) {
            // linting on hot-reload in dev mode
            config.module.rules.push({
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    configFile: 'eslint.json',
                    tsConfigFile: 'tsconfig.json'
                }
            });
        }

        config.module.rules.push({
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            loader: 'file-loader',
            options: {
                name: '[path][name].[ext]'
            }
        });

        return config;
    },
    publicRuntimeConfig: {
        SERVER_URL: 'https://localhost:3000',
        API_VERSION: 'api/v1'
    }
});
