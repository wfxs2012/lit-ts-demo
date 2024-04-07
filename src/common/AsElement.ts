import {TwLitElement} from "./TwLitElement.ts";

import {RouterContext, router} from "../router/router.context.ts";
import {consume} from "@lit-labs/context";


export class AsElement extends TwLitElement {


    @consume({context: router})
    router: RouterContext | undefined;

    goto(url = '') {
        if (!url) return
        history.pushState({}, '', url)
        this.router?.routes?.goto(url)
    }


}
