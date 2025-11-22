import page from "page";
import Accueil from "./views/Accueil.js";
import Sources from "./views/Sources.js";
import Page404 from "./views/Page404.js";

class Application {
  #conteneurHTML;

  constructor() {
    this.#conteneurHTML = document.querySelector("[data-application]");

    page(
      "/",
      function () {
        new Accueil(this);
      }.bind(this)
    );

    page(
      "/sources",
      function () {
        new Sources(this);
      }.bind(this)
    );

    page(
      "*",
      function () {
        new Page404(this);
      }.bind(this)
    );

    page();
  }

  get conteneurHTML() {
    return this.#conteneurHTML;
  }
}

export default Application;
