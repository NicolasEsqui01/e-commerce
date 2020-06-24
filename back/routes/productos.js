const express = require("express");
const Router = express.Router();
const productos = require("../controllers/productos");

// ruta = /api/productos

Router.post("/", productos.createProducto);

Router.get("/:id", productos.productoId);

Router.put("/:id", productos.modificarProducto);

Router.delete("/:id", productos.modificarProducto);

Router.get("/", productos.allProductos);

module.exports = Router;
