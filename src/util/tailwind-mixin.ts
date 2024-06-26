import { adoptStyles, LitElement, unsafeCSS } from 'lit'

import style from '../styles/tailwind/tailwind.global.css?inline'

declare global {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    export type LitMixin<T = unknown> = new (...args: any[]) => T & LitElement;
}


const stylesheet = unsafeCSS(style)

export const TW = <T extends LitMixin>(superClass: T): T =>
    class extends superClass {
        connectedCallback() {
            super.connectedCallback();
            // @ts-ignore
            adoptStyles(this.shadowRoot, [stylesheet])
        }
    };
