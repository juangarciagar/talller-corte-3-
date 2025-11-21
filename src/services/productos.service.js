export default class ProductosService {
    constructor() {
        this.mensaje = "Servicio de productos tecnológicos";
    }

    // 1. Filtrar productos activos
    productosActivos(productos) {
        return productos.filter(producto => 
            producto.proveedor.estado === "activo"
        );
    }

    // 2. Calcular precio total de productos activos
    precioTotalActivos(productos) {
        const activos = productos.filter(p => p.proveedor.estado === "activo");
        return activos.reduce((total, p) => total + p.precio, 0);
    }

    // 3. Entregas con año >= 2020
    entregasRecientes(productos) {
        return productos.flatMap(producto => 
            producto.proveedor.entregas
                .filter(entrega => new Date(entrega.fecha).getFullYear() >= 2020)
                .map(entrega => ({
                    producto: producto.nombre,
                    ...entrega,
                    año: new Date(entrega.fecha).getFullYear()
                }))
        );
    }

    // 4. Convertir precios a pesos colombianos
    convertirAPesosColombianos(productos, tasa = 4250) {
        return productos.map(producto => ({
            id: producto.id,
            nombre: producto.nombre,
            precioUSD: producto.precio,
            precioCOP: producto.precio * tasa,
            precioCOPFormateado: `$${(producto.precio * tasa).toLocaleString()} COP`
        }));
    }

    // 5. Sumar inventario total
    sumarInventarioTotal(productos) {
        return productos.reduce((sum, producto) => {
            return sum + (producto.inventario?.total || 0);
        }, 0);
    }
}