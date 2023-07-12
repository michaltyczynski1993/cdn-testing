class MyWebComponent extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    attributeChangedCallback() {
      this.render();
    }
  
    render() {
      const attr = this.getAttribute('something');
      
      this.innerHTML = `
        <button >${attr}</button>
      `;
    }
  }
  
  customElements.define('my-button', MyWebComponent);