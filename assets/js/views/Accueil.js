import dompurify from "dompurify";
import { animate, stagger } from "animejs";

class Accueil {
  #application;
  #listeHTML;

  constructor(application) {
    this.#application = application;
    this.render();
  }

  render() {
    this.#application.conteneurHTML.innerHTML = `
            <div class="container mx-auto p-10 bg-slate-100 min-h-screen flex flex-col gap-5">
                <h1 class="text-3xl font-bold text-center text-orange-700 mb-2">
                <i class="fa-solid fa-landmark"></i>
                    Musée d'art contemporain de Montréal
                </h1>
                <div class="w-full h-64 mb-6">
                    <img src="public/img/musee1.jpg" class="w-full h-full object-cover rounded shadow-lg" alt="Salle d'exposition du musée">
                </div>
                <h2 class="text-lg text-center text-slate-700">
                <i class="fa-solid fa-palette"></i>
                    Collection d'œuvres disponible sur Données Québec
                </h2>
                <div data-liste-oeuvres></div>
            </div>
        `;

    this.#listeHTML = this.#application.conteneurHTML.querySelector(
      "[data-liste-oeuvres]"
    );

    this.chargerOeuvres();
  }

  async chargerOeuvres() {
    const requete = await fetch(
      "https://www.donneesquebec.ca/recherche/dataset/3b475449-f7e0-4f68-b9e8-933dda1916d0/resource/6e08aa19-4653-411a-ab80-d97d4feaeba5/download/oeuvres-mac.json"
    );

    const reponse = await requete.json();

    let gabarit = `
            <div class="grid grid-cols-3 gap-5 p-5" data-conteneur-cartes>
        `;

    reponse.forEach((item) => {
      gabarit += `
                <div class="p-5 bg-white shadow rounded opacity-0 hover:scale-105" data-carte>
                    <h3 class="font-bold text-orange-600">${
                      item.titre ?? "Titre inconnu"
                    }</h3>
                    <p><strong>Artiste :</strong> ${
                      item.libelleNomsArtistes ?? "—"
                    }</p>
                    <p><strong>Catégorie :</strong> ${item.categorie ?? "—"}</p>
  
                    <p><strong>Date :</strong> ${item.dateProduction ?? "—"}</p>
                    <p><strong>Lieu :</strong> ${item.lieuProduction ?? "—"}</p>
                    <p><strong>Matériaux :</strong> ${item.materiaux ?? "—"}</p>
                </div>
            `;
    });

    gabarit += "</div>";

    const propre = dompurify.sanitize(gabarit);
    this.#listeHTML.innerHTML = propre;

    const cartes = this.#listeHTML.querySelectorAll("[data-carte]");

    animate(cartes, {
      opacity: [0, 1],
      translateY: [-20, 0],
      delay: stagger(100),
      duration: 400,
    });
  }
}

export default Accueil;
