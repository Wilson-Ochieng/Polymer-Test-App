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

class MyView1 extends LitElement {
 render() {
   return html`

  <div class="container">
   <h3>Input Form</h3>
       <label for ="username">Username:</label><br>
       <input type ="text" id="username" name="username" value="username"><br>
       <label for ="email">Email:</label><br>
       <input type ="text" id="email" name="email" value="email"><br>
       <label for ="phone  number">Phone No:</label><br>
       <input type ="phone" id="phone" name="phone" value="0700000000"><br>
       <input type ="submit" value="Submit Form" onClick ="showAlert() "></button>
       
        </form>
      </div>
    `;
  }
}
customElements.define('my-view1', MyView1);
