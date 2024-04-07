import {html} from "lit";
import {customElement, property, queryAll} from "lit/decorators.js";
import {classMap} from "lit/directives/class-map.js";
// import {createPopper} from "@popperjs/core";

import './icons.tsx'
import {styleMap} from "lit/directives/style-map.js";
import {ChevronDown} from "lucide";
import {createIcons} from "../util/tools.ts";
import {AsElement} from "../common/AsElement.ts";


type SidebarItem = {
    text: string
    href: string
    target: string
    name: string
    path: string
    value: string
    type: string
    img?: string
    inner?: string
    children: any[]
    tag?: string
    childrenHeight?: number
    isOpen?: boolean
    icon?: string
}

// type Props = {
//     items: SidebarItem[]
//     active: string
//     isOpen: boolean
// }


const IconChevronDown = (isOpen: any) => {
    const icon = createIcons({chevronDown: ChevronDown})
    return html`
        <div class="${classMap({
            'transition-all text-zinc-500': true,
            'rotate-0': !isOpen,
            'rotate-180': isOpen,

        })}">
            ${icon.chevronDown}
        </div>

    `

}


@customElement('as-sidebar')
export class Sidebar extends AsElement {


    @property({type: String, reflect: true})
    active = ''




    @property({type: Boolean, reflect: true}) isOpen = false;
    @property({type: Array, reflect: true}) items = [];

    @queryAll('.trigger')
    triggers?: NodeListOf<HTMLLIElement>


    //===========================  lifecycle  =================================

    connectedCallback() {
        super.connectedCallback();


    }


    firstUpdated() {
        // this.triggers?.forEach((trigger: Element, index: number) => {
        //     const tooltip = trigger.querySelector('.tip') as HTMLElement
        //     if (trigger && tooltip) {
        //         const popper = createPopper(trigger, tooltip, {
        //             placement: 'right',
        //             modifiers: [
        //                 {
        //                     name: 'offset',
        //                     options: {
        //                         offset: [0, 0],
        //                     },
        //                 },
        //             ],
        //         })
        //         // @ts-ignore
        //         this.items[index].popper = popper
        //         // @ts-ignore
        //         this.items[index].tooltip = tooltip
        //     }
        // })

    }

//=========================  event   ===================================
    onItemClick(item: SidebarItem) {
        item.isOpen = !item.isOpen
        item.childrenHeight = item.children.length * 36
        this.requestUpdate()
    }

    onMouseEnter(item: SidebarItem) {
        if (this.isOpen) return
        // @ts-ignore
        item.tooltip.classList.remove('hidden')
        // @ts-ignore
        item?.popper.update()
    }

    onMouseLeave(item: SidebarItem) {
        if (this.isOpen) return
        // @ts-ignore
        item.tooltip.classList.add('hidden')
        // @ts-ignore
        item.popper.update()
    }


    select(item: SidebarItem) {
        this.active= item.value
        this.goto(item.href)
        this.dispatchEvent(new CustomEvent('change', { bubbles: false, cancelable: false, composed: true, detail:  item  }));
        this.requestUpdate()
    }


    renderChild(child: SidebarItem) {
        return html`
            <li @click=${() => this.select(child)}
                class="${classMap({
                    'py-1 h-9 indent-10 rounded hover:bg-zinc-100 flex items-center text-sm text-zinc-500 dark:text-zinc-200 cursor-pointer': true,
                    'bg-zinc-100': this.active === child.value,
                })}"
            >
                <a href="javascript:void(0);" class="flex items-center space-x-2 whitespace-nowrap">
                    <span>${child.text}</span>
                </a>
            </li>
        `
    }

    renderToolTipChild(child: SidebarItem) {
        return html`
            <li class="py-1 h-9 px-3 rounded hover:bg-zinc-100 flex items-center text-sm text-zinc-500 dark:text-zinc-200">
                <a href="${child.href}" class="flex items-center space-x-2 whitespace-nowrap">
                    <span>${child.text}</span>
                </a>
            </li>
        `
    }


    render() {
        return html`
            <section class=" flex">
                <div class="${classMap({
                    'bg-background text-foreground transition-all p-2 flex flex-col justify-between': true,
                    'w-60': this.isOpen,
                    'w-16': !this.active,
                })}"
                >
                    <!-- logo -->
                    <header class="${classMap({
                        'flex items-center h-[50px] space-x-2 justify-center': true,
                    })}">
                        <i class="h-8 w-8">
                            <img src="https://omi.cdn-go.cn/admin/latest/home/omi.svg"></img>
                        </i>
                        <h1 class="${classMap({
                            'text-black text-2xl font-semibold whitespace-nowrap': true,
                            block: this.isOpen,
                            hidden: !this.isOpen,
                        })}">
                            Lit Admin
                        </h1>
                    </header>
                    <!-- 菜单 -->
                    <nav class="flex-1 overflow-auto">
                        <ul>
                            ${this.items.map((item: SidebarItem) => {
                                const hasChildren = !!(item.children && item.children.length)
                                console.log(hasChildren)
                                return html`

                                    <li>
                                        <a href=${hasChildren ? 'javascript:' : item.href}
                                           @click=${() => this.onItemClick(item)}
                                           @mouseenter=${() => this.onMouseEnter(item)}
                                           @mouseleave=${() => this.onMouseLeave(item)}
                                           class="${classMap({
                                               'trigger flex items-center  hover:bg-zinc-100 h-9 rounded px-2': true,
                                               'justify-between': this.isOpen,
                                               'justify-center': !this.isOpen,
                                           })}"
                                        >
                                            <div class="flex items-center space-x-2 text-zinc-600 dark:text-zinc-200">
                                                <!--     左侧图标    -->
                                                <as-icons .icon=${item.icon}></as-icons>
                                                <!--     菜单名称   -->
                                                ${this.isOpen && html`<span class="text-sm">${item.text}</span>`}
                                            </div>
                                            <!--     小屏幕弹窗菜单   -->
                                            <ul
                                                    class="p-1 border tip hidden overflow-hidden bg-background dark:bg-zinc-800 rounded shadow-md"
                                                    style="${styleMap({
                                                        opacity: this.isOpen ? '0' : '1',
                                                    })}"
                                            >
                                                ${item.children.map((child: SidebarItem) => {
                                                    return this.renderToolTipChild(child)
                                                })}
                                            </ul>
                                            <!--    打开关闭图标  -->
                                            ${hasChildren && this.isOpen && IconChevronDown(item.isOpen)}

                                        </a>

                                        <!--    大屏幕菜单  -->
                                        ${hasChildren && this.isOpen && (
                                                html`
                                                    <ul class="transition-all overflow-hidden"
                                                        style="${styleMap({
                                                            height: item.isOpen ? item.childrenHeight + 'px' : '0',
                                                        })}"
                                                    >
                                                        ${item.children.map((child: SidebarItem) => {
                                                            return this.renderChild(child)
                                                        })}
                                                    </ul>
                                                `
                                        )}

                                    </li>

                                `
                            })}
                        </ul>
                    </nav>
            </section>

        `
    }


}
