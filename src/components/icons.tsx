import {css, html, LitElement, TemplateResult} from "lit";
import {customElement, property} from "lit/decorators.js";
import {Gauge, Layers, LayoutList, Pencil} from "lucide";
import {createIcons} from "../util/tools.ts";


const aIcons = createIcons({
    dashboard: Gauge,
    'root-list': LayoutList,
    edit: Pencil,
    layers: Layers,
})


@customElement("as-icons")
export class Icons extends LitElement {
    static styles = css`
      :host {
        line-height: 0;
      }
    `


    @property()
    icon = ''


    render(): TemplateResult {
        const Icon = aIcons[this.icon]
        return html`${Icon}`;
    }
}

