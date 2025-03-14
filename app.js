const express = require('express');
const usuariosRouter = require('./routes/usuarios');
const productosRouter = require('./routes/productos');
const contadorOperaciones = require('./middlewares/contadorOperaciones');

const app = express();
app.use(express.json());
app.use(contadorOperaciones); 
app.use('/usuarios', usuariosRouter); 
app.use('/productos', productosRouter); 
app.get('/contadores', async (req, res) => {
    const Usuario = require('./models/Usuario');
    const Producto = require('./models/Producto');
    try {
        const totalUsuarios = await Usuario.countDocuments();
        const totalProductos = await Producto.countDocuments();
        res.json({ totalUsuarios, totalProductos });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los contadores' });
    }
});
app.get('/operaciones', (req, res) => {
    res.json({ totalOperaciones: req.totalOperaciones });
});

module.exports = app;