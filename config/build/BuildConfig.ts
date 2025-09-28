import webpack from 'webpack'
import { BuildOptions } from './types'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { BuildDevServer } from './BuildDevServer'
import { BuildPlugins } from './BuildPlugins'
import { BuildResolve } from './BuildResolve'
import { BuildLoaders } from './BuildLoaders'

export const BuildConfig = (options: BuildOptions): webpack.Configuration => {
    const config: webpack.Configuration = {
        mode: options.mode,
        entry: options.paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: options.paths.output,
            clean: true
        },
        devtool: options.isDev ?'inline-source-map' : undefined,
        module: {
            rules: BuildLoaders(options),
        },
        resolve: BuildResolve(options),
        plugins: BuildPlugins(options),
        devServer: options.isDev ? BuildDevServer(options) : undefined
    }

    return config
}