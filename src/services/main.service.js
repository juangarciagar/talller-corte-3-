export default class Producto {
    #nombre;
    #precio;
    #categoria;

    constructor(nombre, precio, categoria) {
        this.#nombre = nombre;
        this.#precio = precio;
        this.#categoria = categoria;
    }

    obtenerDescripcion() {
        return `Producto: ${this.#nombre} - Precio: $${this.#precio} - Categoría: ${this.#categoria}`;
    }

    actualizarPrecio(nuevoPrecio) {
        return nuevoPrecio ? (this.#precio = nuevoPrecio) : this.#precio;
    }

    obtenerPrecio() {
        return this.#precio;
    }
}