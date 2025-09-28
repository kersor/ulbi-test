import { Configuration } from "webpack"
import { BuildOptions } from "./types"

export const BuildResolve = (options: BuildOptions): Configuration['resolve'] => {
    const config: Configuration['resolve'] = {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            "@public": options.paths.public,
            "@": options.paths.src,
            "@app": options.paths.app,
            "@pages": options.paths.pages,
            "@entities": options.paths.entities,
            "@features": options.paths.features,
            "@widgets": options.paths.widgets,
            "@shared": options.paths.shared,
        },
        preferAbsolute: true,
        mainFiles: ["index"]
    }

    return config
}