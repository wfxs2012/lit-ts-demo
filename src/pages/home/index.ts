import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";

import 'b-button';
// import 'b-dropdown';
// import 'b-menu';
// import 'b-menu-item';
// import 'b-divider';


@customElement('page-home')
export class Home extends LitElement {

    static styles = css`
      b-dropdown::part(drop) {
        position: fixed;
      }
    `


    render(): TemplateResult {

        return html`
            <article>
                <b-button type="primary" loading>
                    主要按钮
                </b-button>
               
            </article>
        `
    }

}
