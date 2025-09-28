import { Configuration as DevConfiguration } from "webpack-dev-server"
import { BuildOptions } from "./types"

export const BuildDevServer = (options: BuildOptions): DevConfiguration => {
    const config: DevConfiguration = {
        port: options.port,
        open: true,
        historyApiFallback: true
    }

    return config
}