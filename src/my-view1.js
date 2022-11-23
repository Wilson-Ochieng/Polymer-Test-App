/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { LitElement, css, html } from 'lit';
import './shared-styles.js';


export class MyView1 extends LitElement {
  render() {
    return html`
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
<div class="card">
  <div class="container">
 <form class id="form">
    <div class="field">
    <label class="label">Username</label>
    <div class="control has-icons-left has-icons-right">
    <input class="input is-medium" type="text" id="username" placeholder="Text input" value="username">
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
    </div>
   <p class="help is-success">This username is available</p>
   </div>

    <div class="field">
    <label class="label">Email</label>
    <div class="control has-icons-left has-icons-right">
     <input class="input is-medium"  id="email" type="email" placeholder="Email input" value="wilsonochieng718@gmail.com">
     <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-success"></i>
    </span>
      </div>
  </div>
  <div class="field">
       <label class="label">Phone</label>
    <div class="control has-icons-left has-icons-left ">
    <input class="input is-medium" id="phone" type="tel" placeholder="Text input" value="+254702430127">
    <span class="icon is-small is-left">
      <i class="fa fa-phone"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
    </div>
   </div>

    <div class="field is-grouped">
  <div class="control">
    <button class="button is-link"  id="submit" onClick ="showAlert()" >Submit</button>
  </div>
   </div>
   

        </form>
      </div>
    `;
  }
}
customElements.define('my-view1', MyView1);
