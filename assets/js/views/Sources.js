import moment from "moment";
import "moment/dist/locale/fr";

moment.locale("fr");

class Sources {
  #application;

  constructor(application) {
    this.#application = application;
    this.render();
  }

  render() {
    this.#application.conteneurHTML.innerHTML = `
            <section class="p-8 container mx-auto bg-slate-100 min-h-screen">
                <h2 class="text-2xl font-bold mb-5">
                <i class="fa-solid fa-book-open"></i>
                Sources des données</h2>
                <div class="w-full h-60 mb-6">
                  <img src="/img/musee2.jpg" class="w-full h-full object-cover rounded" alt="Architecture moderne du musée">
                </div>
                <p class="mb-4">
                    Cette application affiche des œuvres provenant du 
                    <strong>Musée d'art contemporain de Montréal (MAC)</strong>.
                </p>
                <p class="mb-4">
                    Les données sont offertes sur le portail 
                    <a href="https://www.donneesquebec.ca/" class="text-blue-600 underline">
                        Données Québec
                    </a>.
                </p>
    
                <p class="mb-4">
                    Date de récupération : <strong>${moment().format(
                      "LL"
                    )}</strong>
                </p>
                <h3 class="text-xl font-semibold mt-6">Librairies utilisées</h3>
                <ul class="list-disc ml-6 mt-3">
                    <li>AnimeJs</li>
                    <li>Vite</li>
                    <li>DOMPurify</li>
                    <li>PageJS</li>
                    <li>TailwindCSS</li>
                    <li>Moment</li>
                    <li>Font-Awesome</li>
                </ul>
                <h3 class="text-xl font-semibold mt-6">Lien direct vers le data</h3>
                <a href="https://www.donneesquebec.ca/recherche/dataset/3b475449-f7e0-4f68-b9e8-933dda1916d0/resource/6e08aa19-4653-411a-ab80-d97d4feaeba5/download/oeuvres-mac.json"
                   target="_blank"
                   class="text-blue-600 underline">
                   Données du MAC Montréal
                </a>
            </section>
        `;
  }
}

export default Sources;
