import ProductosService from "../services/productos.service.js";
import productosData from "../datos/productos.datos.js";

const servicio = new ProductosService();

export const getProductosActivos = (req, res) => {
    console.log("Ejercicio 1 ejecutado - Productos Activos");
    const resultado = servicio.productosActivos(productosData);
    res.json({
        mensaje: "Productos con proveedores activos",
        total: resultado.length,
        productos: resultado
    });
};

export const getPrecioTotalActivos = (req, res) => {
    console.log("Ejercicio 2 ejecutado - Precio Total Activos");
    const resultado = servicio.precioTotalActivos(productosData);
    res.json({
        mensaje: "Precio total de productos activos",
        totalUSD: resultado,
        totalFormateado: `$${resultado} USD`
    });
};

export const getEntregasRecientes = (req, res) => {
    console.log("Ejercicio 3 ejecutado - Entregas Recientes");
    const resultado = servicio.entregasRecientes(productosData);
    res.json({
        mensaje: "Entregas desde el año 2020",
        totalEntregas: resultado.length,
        entregas: resultado
    });
};

export const getPreciosEnPesos = (req, res) => {
    console.log("Ejercicio 4 ejecutado - Precios en Pesos");
    const resultado = servicio.convertirAPesosColombianos(productosData);
    res.json({
        mensaje: "Precios convertidos a pesos colombianos (1 USD = 4250 COP)",
        productos: resultado
    });
};

export const getInventarioTotal = (req, res) => {
    console.log("Ejercicio 5 ejecutado - Inventario Total");
    const resultado = servicio.sumarInventarioTotal(productosData);
    res.json({
        mensaje: "Suma total de inventario",
        totalUnidades: resultado,
        totalFormateado: `${resultado} unidades`
    });
};