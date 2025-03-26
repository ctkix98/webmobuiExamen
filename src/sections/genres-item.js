export class GenresListe extends HTMLElement {
  static observedAttributes = ["favorite"];
  connectedCallback() {
    this.render();
  }
  attributeChangedCallback() {
    this.render();
  }
  render() {
    // On agglomère le HTML
    this.innerHTML = `

      <a href="${this.getAttribute('href')}" class="genre-card">
            <div class="card__buttons">
              <button type="button" class="icon-button like-button">
                <span class="material-icons">thumb_up_off_alt</span> <!-- utiliser "thumb_up" pour la version pleine -->
              </button>
            </div>

            <img src="${this.getAttribute(
              "thumbnail_url"
            )}" class="card__thumbnail" />

            <div class="card__title">${this.getAttribute("title")}</div>
            <!-- penser à garder l'écriture "[count] recettes" -->
            <div class="card__count">${this.getAttribute(
              "count"
            )} recettes</div>
          </a>
  
        `;
  }
}
customElements.define("genres-item", GenresListe);
