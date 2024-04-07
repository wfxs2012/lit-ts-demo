import {html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";

@customElement('page-list')
export class List extends LitElement {
    render(): TemplateResult {

        return html`
            <article> list page !</article>
        `
    }

}
