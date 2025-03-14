const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');
const contadorOperaciones = require('../middlewares/contadorOperaciones');

router.post('/', contadorOperaciones, productoController.crearProducto); 
router.get('/', contadorOperaciones, productoController.obtenerProductos); 
router.put('/:id', contadorOperaciones, productoController.actualizarProducto); 
router.delete('/:id', contadorOperaciones, productoController.eliminarProducto); 

module.exports = router;