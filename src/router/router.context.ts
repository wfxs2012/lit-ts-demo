import {createContext} from "@lit-labs/context";
import { Router } from "@lit-labs/router";

export interface RouteContext {
    name: string;
    path: string;
    query?: URLSearchParams;
}
export interface RouterContext {
    routes: Router;
}


export const router = createContext<RouterContext>('router');
