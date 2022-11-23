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
import './shared-styles.js';

export class MyView3 extends LitElement {


  static get properties() {
    return {
      data: { type: Array },
    };
  }

  constructor() {
    super()
    this.todos = []
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
    <style include="shared-styles">
      :host {
        display: block;
      padding: 10px;
        }
    </style>
    <template is="dom-repeat" items="{{mytodos}}">  
        <div class="card">
          <div class="circle">{{item.userId}}</div>
          <h1>{{item.title}}</h1>
          <h1>{{item.completed}}</h1>
        </div>
      </template>
     <p>Title:${this.todos}</p>
     <p>Completed:${this.todos}</p>
     
     <div class="card">
      <div class="container">
        <form class="form">
      <textarea class="textarea is-primary" placeholder="Primary textarea"></textarea>

      </form>
      </div>
      </div>`;
    
  }
}

customElements.define('my-view3', MyView3);
