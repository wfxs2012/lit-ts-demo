import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import 'b-button';
import 'b-dropdown';
import 'b-menu';
import 'b-menu-item';
import 'b-divider';
import 'b-stepper';
import 'b-input';
import {ProductService} from "../../service/product.service.ts";
import {repeat} from "lit/directives/repeat.js";


@customElement('page-home')
export class Home extends LitElement {
    static styles = css`
      //b-dropdown::part(drop) {
      //  position: fixed;
      //}
      :host {
        padding: 10px;
        position: absolute;
        inset: 0;
        overflow-y: auto;
        overflow-x: hidden;
      }

      table {
        border: 1px solid #ccc;
        border-collapse: collapse;
        margin: 0;
        padding: 0;
        width: 100%;
        table-layout: auto;
      }

      table caption {
        font-size: 1.5em;
        margin: .5em 0 .75em;
      }

      table tr {
        background-color: #f8f8f8;
        border: 1px solid #ddd;

      }

      table th,
      table td {
        padding: 10px;
        text-align: center;
        word-break: break-word;
        white-space: nowrap;
      }

      table th {
        font-size: .85em;
        letter-spacing: .1em;
        text-transform: uppercase;
      }


      @media screen and (max-width: 768px) {
        table {
          border: 0;
        }

        table caption {
          font-size: 1.3em;
        }

        table thead {
          display: none;
        }

        table tr {
          display: block;
          margin-bottom: 20px;
        }

        table td {
          display: flex;
          align-items: center;
        }

        table td:not(.not-label) {
          border-bottom: 1px solid #ddd;
          display: flex;
          justify-content: space-between;
          font-size: .8em;
          position: relative;
          padding-left: 32%;
          white-space: normal;
          text-align: left;
        }

        table td::before {
          left: 10px;
          width: 30%;
          position: absolute;
          content: attr(data-label);
          font-weight: bold;
          white-space: nowrap;
          text-transform: uppercase;
          text-align: left;

        }

        table td.not-label::before {
          display: none;
        }

        table td:last-child {
          border-bottom: 0;
        }


      }

      .image {


      }

      .image img {
        min-width: 50px;
        max-width: 100px;
      }

      .action {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 20px;
        justify-content: center;
      }

    `

    private data: any = []

    constructor() {
        super();

        const load = async () => {
            this.data = await ProductService.getProductsMini()
            console.log(this.data)
        }
        load()

    }


    render(): TemplateResult {

        return html`
            <article>
                <b-dropdown>
                    <b-button>Hover me!</b-button>
                    <b-menu slot="drop" style="max-width: 200px;">
                        <b-menu-item>Option 1</b-menu-item>
                        <b-menu-item>Option 2</b-menu-item>
                        <b-menu-item>Option 3</b-menu-item>
                        <b-menu-item>Option 4</b-menu-item>
                        <b-menu-item>Option 5</b-menu-item>
                        <b-divider></b-divider>
                        <b-menu-item>Option A</b-menu-item>
                        <b-menu-item>Option B</b-menu-item>
                    </b-menu>
                </b-dropdown>

                <div style="overflow-x: auto">
                    <table>
                        <caption>Lorem ipsum !</caption>
                        <thead>
                        <tr>
                            <th style="width: 120px;">Image</th>
                            <th>Title</th>
                            <th>SKU</th>
                            <th>Available qty</th>
                            <th>Price</th>

                            <th style="width: 300px;">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>

                        </tr>
                        ${repeat(this.data,
                                (item: any) => item.id,
                                (item: any) => html`
                                    <tr>
                                        <td data-label="image" class="image  ">
                                            <image src="${`https://primefaces.org/cdn/primereact/images/product/${item.image}`}"/>
                                        </td>
                                        <td data-label="title">${item.name}</td>
                                        <td data-label="sku">${item.code}</td>
                                        <td data-label="status">${item.inventoryStatus}</td>
                                        <td data-label="price">${item.price}</td>
                                        <td class="not-label">
                                            <div class="action">
                                                <b-stepper value="1"></b-stepper>
                                                <b-button type="primary" outline>Add to cart</b-button>
                                            </div>

                                        </td>
                                    </tr>
                                `)
                        }
                        </tbody>
                    </table>

                </div>
            </article>
        `
    }

}
