const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

// Rutas para productos
router.post('/', productoController.crearProducto); // Crear un producto
router.get('/', productoController.obtenerProductos); // Obtener todos los productos
router.put('/:id', productoController.actualizarProducto); // Actualizar un producto por ID
router.delete('/:id', productoController.eliminarProducto); // Eliminar un producto por ID

module.exports = router;