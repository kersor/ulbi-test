import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { Configuration as DevConfiguration } from 'webpack-dev-server'
import { BuildConfig } from './config/build/BuildConfig';
import { BuildEnv, BuildOptions, BuildPaths } from './config/build/types';

export default (env: BuildEnv) => {
    const mode = env.mode || "development"

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, "src", "index.tsx"),
        output: path.resolve(__dirname, "build"),
        html: path.resolve(__dirname, "public", "index.html"),
        src: path.resolve(__dirname, "src"),

        public: path.resolve(__dirname, "public"),

        app: path.resolve(__dirname, "src", "app"),
        pages: path.resolve(__dirname, "src", "pages"),
        entities: path.resolve(__dirname, "src", "entities"),
        features: path.resolve(__dirname, "src", "features"),
        widgets: path.resolve(__dirname, "src", "widgets"),
        shared: path.resolve(__dirname, "src", "shared"),
    }

    const options: BuildOptions = {
        mode: mode,
        isDev: mode === "development",
        isProd: mode === "production",
        port: env.port || 3000,
        paths: paths
    }

    const config = BuildConfig(options)


    return config
}