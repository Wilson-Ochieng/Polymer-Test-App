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
      if (!response.ok) {
        throw new Error('Network response was not ok');
      };
      return response.json()
    }).then((data) => {
      this.data = data;
      console.log('Success:', data);
    })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  render() {
    return html`<p>${this.data}</p>`;
    
  }
}

customElements.define('my-view3', MyView3);
