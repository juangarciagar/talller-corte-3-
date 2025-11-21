const productos = [
  {
    id: 1,
    nombre: "Laptop Gamer Pro",
    precio: 1200,
    categoria: {
      nombre: "Tecnología",
      descripcion: "Dispositivos electrónicos y computadoras",
      formatos: [
        { formato: "Caja", cantidad: 1 },
        { formato: "Paquete", cantidad: 1 },
      ],
    },
    proveedor: {
      nombre: "TechImport S.A.",
      entregas: [
        { fecha: "2020-01-15", cantidad: 25 },
        { fecha: "2020-01-08", cantidad: 30 },
        { fecha: "2020-01-02", cantidad: 20 },
        { fecha: "2021-12-28", cantidad: 35 },
        { fecha: "2021-12-20", cantidad: 15 },
      ],
      estado: "activo",
    },
    inventario: {
      disponible: 85,
      reservado: 10,
      total: 95,
    },
  },
  {
    id: 2,
    nombre: "Smartphone Ultra",
    precio: 800,
    categoria: {
      nombre: "Tecnología",
      descripcion: "Dispositivos electrónicos y computadoras",
      formatos: [
        { formato: "Caja", cantidad: 1 },
        { formato: "Blíster", cantidad: 1 },
      ],
    },
    proveedor: {
      nombre: "MobileTech Ltda.",
      entregas: [
        { fecha: "2020-01-14", cantidad: 50 },
        { fecha: "2020-01-07", cantidad: 45 },
        { fecha: "2020-01-03", cantidad: 60 },
        { fecha: "2021-12-29", cantidad: 40 },
        { fecha: "2021-12-22", cantidad: 55 },
      ],
      estado: "inactivo",
    },
    inventario: {
      disponible: 210,
      reservado: 35,
      total: 245,
    },
    
  },
  {
    id: 3,
    nombre: "Tablet Android Pro",
    precio: 450,
    categoria: {
      nombre: "Tecnología",
      descripcion: "Dispositivos electrónicos y computadoras",
      formatos: [
        { formato: "Caja", cantidad: 1 },
        { formato: "Blíster", cantidad: 1 },
      ],
    },
    proveedor: {
      nombre: "TechImport S.A.",
      entregas: [
        { fecha: "2020-01-16", cantidad: 40 },
        { fecha: "2020-01-09", cantidad: 35 },
        { fecha: "2021-01-04", cantidad: 45 },
        { fecha: "2021-12-30", cantidad: 30 },
        { fecha: "2021-12-23", cantidad: 25 },
      ],
      estado: "activo",
    },
    inventario: {
      disponible: 145,
      reservado: 20,
      total: 165,
    },
    
  },
  {
 id: 4,
    nombre: "Auriculares Bluetooth Premium",
    precio: 120,
    categoria: {
      nombre: "Tecnología",
      descripcion: "Dispositivos electrónicos y computadoras",
      formatos: [
        { formato: "Caja", cantidad: 1 },
        { formato: "Blíster", cantidad: 1 },
      ],
    },
    proveedor: {
      nombre: "AudioTech Solutions",
      entregas: [
        { fecha: "2020-01-13", cantidad: 75 },
        { fecha: "2021-01-06", cantidad: 60 },
        { fecha: "2021-01-01", cantidad: 85 },
        { fecha: "2021-12-27", cantidad: 70 },
        { fecha: "2021-12-21", cantidad: 65 },
      ],
      estado: "inactivo",
    },
    inventario: {
      disponible: 285,
      reservado: 25,
      total: 310,
    },
    
  },
  {
      id: 5,
    nombre: "Smartwatch Fitness Pro",
    precio: 180,
    categoria: {
      nombre: "Tecnología",
      descripcion: "Dispositivos electrónicos y computadoras",
      formatos: [
        { formato: "Caja", cantidad: 1 },
        { formato: "Blíster", cantidad: 1 },
      ],
    },
    proveedor: {
      nombre: "MobileTech Ltda.",
      entregas: [
        { fecha: "2020-01-17", cantidad: 60 },
        { fecha: "2021-01-10", cantidad: 55 },
        { fecha: "2021-01-05", cantidad: 65 },
        { fecha: "2022-12-31", cantidad: 50 },
        { fecha: "2022-12-24", cantidad: 45 },
      ],
      estado: "activo",
    },
    inventario: {
      disponible: 245,
      reservado: 30,
      total: 275,
    },
    
  },
  {    
    id: 6,
    nombre: "Smartphone Plegable",
    precio: 1500,
    categoria: {
      nombre: "Tecnología",
      descripcion: "Dispositivos electrónicos y computadoras",
      formatos: [
        { formato: "Caja", cantidad: 1 },
        { formato: "Blíster", cantidad: 1 },
      ],
    },
    proveedor: {
      nombre: "MobileTech Ltda.",
      entregas: [
        { fecha: "2018-01-20", cantidad: 15 },
        { fecha: "2018-01-13", cantidad: 12 },
        { fecha: "2019-01-07", cantidad: 18 },
      ],
      estado: "inactivo",
    },
    inventario: {
      disponible: 42,
      reservado: 3,
      total: 45,
    },
    
  },
  {
    id: 7,
    nombre: "Tablet Drawing Pro",
    precio: 520,
    categoria: {
      nombre: "Tecnología",
      descripcion: "Dispositivos electrónicos y computadoras",
      formatos: [
        { formato: "Caja", cantidad: 1 },
        { formato: "Blíster", cantidad: 1 },
      ],
    },
    proveedor: {
      nombre: "CreativeTech Ltd.",
      entregas: [
        { fecha: "2018-01-16", cantidad: 25 },
        { fecha: "2019-01-09", cantidad: 20 },
        { fecha: "2019-01-03", cantidad: 30 },
      ],
      estado: "activo",
    },
    inventario: {
      disponible: 68,
      reservado: 7,
      total: 75,
    },
    
  },
  {
    id: 8,
    nombre: "Impresora Láser Multifunción",
    precio: 280,
    categoria: {
      nombre: "Tecnología",
      descripcion: "Dispositivos electrónicos y computadoras",
      formatos: [
        { formato: "Caja", cantidad: 1 },
        { formato: "Paquete", cantidad: 1 },
      ],
    },
    proveedor: {
      nombre: "OfficeTech Corp.",
      entregas: [
        { fecha: "2019-01-19", cantidad: 35 },
        { fecha: "2019-01-12", cantidad: 30 },
        { fecha: "2019-01-06", cantidad: 40 },
      ],
      estado: "activo",
    },
    inventario: {
      disponible: 95,
      reservado: 12,
      total: 107,
    },
    
  },
  {
    id: 9,
    nombre: "Cámara Web 4K",
    precio: 85,
    categoria: {
      nombre: "Tecnología",
      descripcion: "Dispositivos electrónicos y computadoras",
      formatos: [
        { formato: "Blíster", cantidad: 1 },
        { formato: "Caja", cantidad: 1 },
      ],
    },
    proveedor: {
      nombre: "AudioTech Solutions",
      entregas: [
        { fecha: "2019-01-17", cantidad: 90 },
        { fecha: "2019-01-10", cantidad: 75 },
        { fecha: "2020-01-05", cantidad: 85 },
      ],
       estado: "inactivo",
    },
    inventario: {
      disponible: 220,
      reservado: 18,
      total: 238,
    },
   
  },
  {
    id: 10,
    nombre: "Laptop UltraSlim 14",
    precio: 950,
    categoria: {
      nombre: "Tecnología",
      descripcion: "Dispositivos electrónicos y computadoras",
      formatos: [
        { formato: "Caja", cantidad: 1 },
        { formato: "Paquete", cantidad: 1 },
      ],
    },
    proveedor: {
      nombre: "TechImport S.A.",
      entregas: [
        { fecha: "2019-01-18", cantidad: 20 },
        { fecha: "2019-01-11", cantidad: 25 },
        { fecha: "2020-01-04", cantidad: 15 },
      ],
      estado: "activo",
    },
    inventario: {
      disponible: 52,
      reservado: 8,
      total: 60,
    },
    
  }
];

export default productos;