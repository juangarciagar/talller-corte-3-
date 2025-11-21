export const consulta = (req, res, next) => {
  console.log("Consulta principal ejecutada");
  res.json({ 
      mensaje: "API de Productos Tecnológicos funcionando",
      endpoints: [
          "/api/productos/activos",
          "/api/productos/precio-total", 
          "/api/productos/entregas-recientes",
          "/api/productos/precios-pesos",
          "/api/productos/inventario-total"
      ]
  });
};