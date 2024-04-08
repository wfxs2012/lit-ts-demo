import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import 'b-button';
import 'b-dropdown';
import 'b-menu';
import 'b-menu-item';
import 'b-divider';


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
        table-layout: fixed;
      }

      table caption {
        font-size: 1.5em;
        margin: .5em 0 .75em;
      }

      table tr {
        background-color: #f8f8f8;
        border: 1px solid #ddd;
        padding: .35em;
      }

      table th,
      table td {
        padding: .625em;
        text-align: center;
        word-break: break-word;
      }

      table th {
        font-size: .85em;
        letter-spacing: .1em;
        text-transform: uppercase;
      }


      @media screen and (max-width: 600px) {
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
          margin-bottom: 10px;
        }

        table td {
          border-bottom: 1px solid #ddd;
          display: flex;
          justify-content: space-between;
          font-size: .8em;
          text-align: right;


        }

        table td::before {
          /*
          * aria-label has no advantage, it won't be read inside a table
          content: attr(aria-label);
          */

          left: 10px;
          content: attr(data-label);
          font-weight: bold;
          text-transform: uppercase;
          text-align: left;
          padding-right: 10px;
        }

        table td:last-child {
          border-bottom: 0;
        }
      }

    `


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

                <table>
                    <caption>Lorem ipsum !</caption>
                    <thead>
                    <tr>
                        <th>Account</th>
                        <th>Due Date</th>
                        <th>Amount</th>
                        <th
                        ">Period</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td data-label="Account">Visa - 3412</td>
                        <td data-label="Due Date">04/01/2016</td>
                        <td data-label="Amount">$1,190</td>
                        <td data-label="Period">03/01/2016 - 03/31/2016</td>
                    </tr>
                    <tr>
                        <td data-label="Account">Visa - 3412</td>
                        <td data-label="Due Date">04/01/2016</td>
                        <td data-label="Amount">$1,190</td>
                        <td data-label="Period">03/01/2016 - 03/31/2016</td>
                    </tr>
                    <tr>
                        <td data-label="Account">Visa - 3412</td>
                        <td data-label="Due Date">04/01/2016</td>
                        <td data-label="Amount">$1,190</td>
                        <td data-label="Period">03/01/2016 - 03/31/2016</td>
                    </tr>
                    </tbody>
                </table>


            </article>
        `
    }

}
