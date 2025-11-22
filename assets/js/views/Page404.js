class Page404 {
  #application;

  constructor(application) {
    this.#application = application;
    this.render();
  }

  render() {
    this.#application.conteneurHTML.innerHTML = `
      <section class="min-h-screen flex flex-col items-center justify-center bg-slate-100">
        <h1 class="text-4xl font-bold mb-4 text-orange-600">Oups, page non trouvée</h1>
        <p class="mb-6 text-slate-700">
          La page que vous cherchez n'existe pas.
        </p>
        <a href="/" class="px-4 py-2 bg-[#F6D64A] text-white rounded hover:bg-[#e5c441] transition">
          Retour à l'accueil
        </a>
      </section>
    `;
  }
}

export default Page404;
