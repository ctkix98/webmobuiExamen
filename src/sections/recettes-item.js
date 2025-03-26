export class RecettesListe extends HTMLElement {
    static observedAttributes = ["favorite"];
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      this.render();
    }
    render() {
      // const image =
      //   this.getAttribute("favorite") == "true" ? "favorite" : "favorite_border";
  
      // On agglomère le HTML
      this.innerHTML = `

        <div>
            <img class="recipes__elem__preview" src="${this.getAttribute("preview_url")}" />
            <div class="recipes__elem__name">${this.getAttribute("name")}</div>
          </div>

        `;
    }
  }
  customElements.define("recettes-item", RecettesListe);
  