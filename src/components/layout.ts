import {html} from "lit";
import {customElement} from "lit/decorators.js";
import {classMap} from 'lit/directives/class-map.js';
import {activeSidebarItem, isSidebarOpen, sidebarItems} from "../store.ts";
import {TwLitElement} from "../common/TwLitElement.ts";
//
import './sidebar.ts'

@customElement('as-layout')
export class App extends TwLitElement {


    render() {

        return html`
            <article class="flex h-screen">
                <section class=${classMap({
                    ' flex flex-col transition-all': true,
                    'w-60': isSidebarOpen.value,
                    'w-16': !isSidebarOpen.value,
                })}>
                    <as-sidebar .active=${activeSidebarItem.value} .isOpen=${isSidebarOpen.value}
                                .items=${sidebarItems.value}></as-sidebar>

                </section>
                <!--   右侧   -->
                <section class="flex-1 flex flex-col overflow-auto bg-background text-foreground border-l">
                    <!--   头部菜单    -->
                    <header class="shadow py-2 px-4 sticky\t">
                        <div class="flex items-center justify-between">
                            <button
                                    class="p-1 rounded-md hover:bg-slate-100 dark:hover:bg-zinc-600"
                                    onClick="${() => (isSidebarOpen.value = !isSidebarOpen.value)}">
                                <svg
                                        fill="none"
                                        viewBox="0 0 16 16"
                                        width="1.5em"
                                        height="1.5em"
                                        class="t-icon t-icon-view-list collapsed-icon"
                                >
                                    <path
                                            fill="currentColor"
                                            d="M14 4.5H2v-1h12v1zM14 8.5H2v-1h12v1zM2 12.5h12v-1H2v1z"
                                            fill-opacity="0.9"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </header>
                    <!--    内容区     -->
                    <div class=" relative flex-1 ">
                        <slot></slot>
                    </div>
                </section>
            </article>



        `
    }


}
