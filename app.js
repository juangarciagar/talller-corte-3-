import express from "express";
import cors from "cors";

const PORT = 9876;

import consultaRoutes from "./src/routes/main.route.js";
import productosRoutes from "./src/routes/productos.route.js";

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/api", consultaRoutes);
app.use("/api", productosRoutes);

app.use((req, res, next) => {
  console.log("Petición a ruta no encontrada");
  res.status(404).json({ message: "Not Found" });
});

app.listen(PORT, () => {
    console.log(`Servidor en el puerto ${PORT}`);
});