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

class MyView3 extends LitElement {

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);

    var url ="https://jsonplaceholder.typicode.com/todos?_limit=5"
    fetch(url).then((response) => {
      return response.json()
    }).then((data) => {
      console.log(data)
    })


   const Dictionary = {
      '34': 'thirty-four', '90': 'ninety',
      '91': 'ninety-one','21': 'twenty-one',
      '61': 'sixty-one', '9': 'nine',
      '2': 'two', '6': 'six', '3': 'three',
      '8': 'eight', '80': 'eighty', '81': 'eighty-one',
      'Ninety-Nine': '99', 'nine-hundred': '900'
    }
    Dictionary.sort();
    Dictionary.reverse();


  }

 render() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <div class="circle">3</div>
        <h1>View Three</h1>
        <p>Modus commodo minimum eum te, vero utinam assueverit per eu.</p>
        <p>Ea duis bonorum nec, falli paulo aliquid ei eum.Has at minim mucius aliquam, est id tempor laoreet.Pro saepe pertinax ei, ad pri animal labores suscipiantur.</p>
      </div>
    `;
  }
}

customElements.define('my-view3', MyView3);
