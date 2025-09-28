import { ModuleOptions } from "webpack"
import { BuildOptions } from "./types"
import MiniCssExtractPlugin from "mini-css-extract-plugin"

export const BuildLoaders = (options: BuildOptions): ModuleOptions["rules"] => {
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoader = {
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        use: [
            options.isProd ? MiniCssExtractPlugin.loader : "style-loader", 
            "css-loader"
        ],
    }

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        exclude: /\.module\.s[ac]ss$/i,
        use: [
          options.isProd ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          "sass-loader",
        ],
    }

    const cssModuleLoader = {
        test: /\.module\.css$/i,
        use: [
            options.isProd ? MiniCssExtractPlugin.loader : "style-loader", 
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: true,
                        exportGlobals: false,
                        namedExport: false,
                        localIdentName: options.isDev ? "[path][name]__[local]" : "[hash:base64]",
                        exportLocalsConvention: "as-is",
                    },
                },
            }
        ],
    }

    const scssModuleLoader = {
        test: /\.module\.s[ac]ss$/i,
        use: [
            options.isProd ? MiniCssExtractPlugin.loader : "style-loader", 
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: true,
                        exportGlobals: false,
                        namedExport: false,
                        localIdentName: options.isDev ? "[path][name]__[local]" : "[hash:base64]",
                        exportLocalsConvention: "as-is",
                    },
                },
            },
            "sass-loader"
        ],
    }
    
    const imageLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    }

    const fontLoader = {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
    }
    
    return [
        tsLoader,
        cssLoader,
        scssLoader,
        cssModuleLoader,
        scssModuleLoader,
        imageLoader,
        svgLoader,
        fontLoader
    ]
}