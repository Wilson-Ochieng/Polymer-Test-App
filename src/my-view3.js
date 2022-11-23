/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { LitElement, html } from 'lit';
import { map } from 'lit/directives/map.js';
import './shared-styles.js';

export class MyView3 extends LitElement {


  static get properties() {
    return {
      todos: { state: true },
      things: { state: true }
    };
  }

  constructor() {
    super()
    this.todos = [];
   
  }


  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.fetchData();
  }

  fetchData() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        };
        return response.json()
      }).then((data) => {

        this.todos = data;
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  render() {


    return html`
    <p>MyToDos</p>
     ${map(
       this.todos,
       (todo, index) => html`
            <li>
              ${todo}
              <button @click=${() => this._deleteThing(index)}>Delete</button>
            </li>
          `
     )}
      </ul>
    `;
  }

  _deleteThing(index) {
    this.todos = this.todos.filter((_, i) => i !== index);
  }
}

customElements.define('my-view3', MyView3);
