import {html} from "lit";


export const routes: any = [
    {
        path: '/',
        render() {
            return html`
                <page-home></page-home>
            `;
        },
        enter() {
            return import('../pages/home');
        },
    },
    {
        path: '/list',
        render() {
            return html`
                <page-list></page-list>
            `
        },
        enter() {
            return import('../pages/list');
        },
    }
]
