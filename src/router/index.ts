import {html, LitElement, TemplateResult} from "lit";
import {customElement, property} from "lit/decorators.js";
import {RouterContext, router} from "./router.context.ts";
import {Router} from "@lit-labs/router";
import {routes} from "./routes.ts";
import {provide} from "@lit-labs/context";

import '../components/layout.ts'


@customElement('app-router')
export class AppRouter extends LitElement {
    //
    @provide({context: router})
    @property({type: Object})
    router: RouterContext = {
        routes: new Router(this, routes),
    };

    render(): TemplateResult {
        const {routes} = this.router;
        return html`
            <as-layout>${routes.outlet()}</as-layout>
        `
    }


}


declare global {
    interface HTMLElementTagNameMap {
        'app-router': AppRouter;
    }
}
