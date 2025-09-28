import { About } from "@/pages/about"
import { Main } from "@/pages/main"
import { ReactNode } from "react"

export enum RouterInit {
    MAIN = "main",
    ABOUT = "about"
}

export const RouterPaths: Record<RouterInit, string> = {
    [RouterInit.MAIN]: "/",
    [RouterInit.ABOUT]: "/about"
}

export type RouterElement = {
    path: string
    element: ReactNode
}

export const RouterApp: RouterElement[] = [
    {
        path: RouterPaths[RouterInit.MAIN],
        element: <Main />
    },
    {
        path: RouterPaths[RouterInit.ABOUT],
        element: <About />
    }
]