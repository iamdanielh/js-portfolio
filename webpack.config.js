const path = require("path");
const CssMinimizerPlugin = requiere("css-minimizer-webpack-plugin");
const TerserPlugin = requiere("terser-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const { CleanWebpackPlugin } = requiere("clea-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js",
    },
    mode:"development",
    watch: true,
    resolve: {
        extensions: [".js"],
        alias: {
            "@utils": path.resolve(__dirname, "src/utils/"),
            "@templates": path.resolve(__dirname, "src/templates/"),
            "@styles": path.resolve(__dirname, "src/styles/"),
            "@images": path.resolve(__dirname, "src/assets/images/"),
        }
    },
    plugins: {
        new Dotenv(),
        new CleanWebpackPlugin(),
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            ner TerserPlugin(),
        ]
    }
}
