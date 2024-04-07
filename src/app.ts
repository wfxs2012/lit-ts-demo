import {customElement} from 'lit/decorators.js'
import {html, LitElement, TemplateResult} from "lit";

import './router'
@customElement('my-app')
export class App extends LitElement {
    render(): TemplateResult {
        return html`
            <main>
                <app-router></app-router>
            </main>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'my-app': App;
    }
}
