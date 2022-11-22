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
class MyElement extends LitElement {
  render() {
    return html`
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
      <div class="card">
      <div class="block">
  <span class="tag is-success">
    Welcome to Intertel
    <button class="delete is-small"  onClick="onDeleteAlert1()"></button>
  </span>
</div>

<div class="notification is-danger">
  <button class="delete"  onClick="onDeleteAlert2()"></button>
  This is your number one provider of IT solutions
</div>

<article class="message is-info">
  <div class="message-header">
    Info
    <button class="delete"  onClick="onDeleteAlert3()"></button>
  </div>
  <div class="message-body">
    InterTel provide value for your money
  </div>
</article>
      
    `;
  }
}

customElements.define('my-element', MyElement);
