import { Configuration, DefinePlugin, ProgressPlugin } from "webpack"
import { BuildOptions } from "./types"
import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"

export const BuildPlugins = (options: BuildOptions): Configuration["plugins"] => {
    const config: Configuration["plugins"] = [
        new HtmlWebpackPlugin({
            template: options.paths.html
        }),

        new DefinePlugin({
            __DEV__: JSON.stringify(options.isDev)
        })
    ]


    if (options.isDev) {
        config.push(new ProgressPlugin())
    }

    if (options.isProd) {
        config.push(new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css"
        }))
    }

    return config
}