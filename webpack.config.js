const path = require("path");

module.exports = {
    entry: "./js/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/, // Apply Babel to .js files
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"], // Use preset-env for modern JavaScript
                    },
                },
            },
        ],
    },
};
