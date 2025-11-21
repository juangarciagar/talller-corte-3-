import { Router } from "express";
import {
    getProductosActivos,
    getPrecioTotalActivos,
    getEntregasRecientes,
    getPreciosEnPesos,
    getInventarioTotal
} from "../controllers/productos.controller.js";

const router = Router();

router.get("/productos/activos", getProductosActivos);
router.get("/productos/precio-total", getPrecioTotalActivos);
router.get("/productos/entregas-recientes", getEntregasRecientes);
router.get("/productos/precios-pesos", getPreciosEnPesos);
router.get("/productos/inventario-total", getInventarioTotal);

export default router;