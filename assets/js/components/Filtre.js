class Filtre {
    #conteneurHTML;

    constructor() {
        // this.#conteneurHTML = document.body;
    }
    get conteneurHTML() {
        return this.#conteneurHTML;
    }
    injecterHTML() {
        return `<div>FILTRE</div>`;
    }
    additionner(nombre1, nombre2) {
        return nombre1 + nombre2;
    }
}

export default Filtre;
