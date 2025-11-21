/* import express from 'express';
//import { consulta } from '../controllers/main.controller.js';
//import { consultarAutos, consultarBiblioteca, getFiltrados } from '../controllers/autos.controller.js';
 import { gettotalActivos } from '../controllers/productos.controller.js';
 import { getMayores } from '../controllers/productos.controller.js';
 import { getDolares } from '../controllers/productos.controller.js';
 import { getFiltrados } from '../controllers/productos.controller.js';

const router = express.Router();

/* ESTE ARCHIVO RESUELVE LAS RUTAS DESDE LAS PETICIONES 
QUE VIENEN DESDE EL NAVEGADOR O FRONTEND */
/* Aquí defino a qué función del controlador envío cada petición */
//router.get("/consulta", consulta);
//router.get("/consultarAutos", getFiltrados);
//router.get("/consultarBibiolteca", consultarBiblioteca);
/*
router.get("/productos/Filtrados", getFiltrados);
router.get("/productos/activos", gettotalActivos);
router.get("/productos/mayores", getMayores);
router.get("/productos/dolares", getDolares);
export default router;
*/
// este creo es el mas optimo pero no estoy segguro

import express from 'express';
import { consulta } from '../controllers/main.controller.js';

const router = express.Router();

router.get("/", consulta);
router.get("/consulta", consulta);

export default router;