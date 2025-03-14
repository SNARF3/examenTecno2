const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const contadorOperaciones = require('../middlewares/contadorOperaciones');

router.post('/', contadorOperaciones, usuarioController.crearUsuario);
router.get('/', contadorOperaciones, usuarioController.obtenerUsuarios);
router.put('/:id', contadorOperaciones, usuarioController.actualizarUsuario);
router.delete('/:id', contadorOperaciones, usuarioController.eliminarUsuario);

module.exports = router;