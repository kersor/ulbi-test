export type BuildMode = "development" | "production"

export type BuildEnv = {
    mode: BuildMode
    port: number
}

export type BuildOptions = {
    mode: BuildMode,
    isDev: boolean,
    isProd: boolean,
    port: number,

    paths: BuildPaths
}

export type BuildPaths = {
    entry: string
    output: string
    html: string
    src: string
    public: string
    app: string
    pages: string
    entities: string
    features: string
    widgets: string
    shared: string
}