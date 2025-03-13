const express = require('express');
const mongoose = require('mongoose');
const usuariosRouter = require('./routes/usuarios');
const productosRouter = require('./routes/productos');
const contadorOperaciones = require('./middlewares/contadorOperaciones');

const app = express();

// Middleware para contar operaciones
app.use(contadorOperaciones);

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/Sample', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error conectando a MongoDB:', err));

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/usuarios', usuariosRouter); // Rutas de usuarios
app.use('/productos', productosRouter); // Rutas de productos

// Endpoint para obtener el número de registros en Usuarios y Productos
app.get('/contadores', async (req, res) => {
    try {
        const totalUsuarios = await mongoose.model('Usuario').countDocuments();
        const totalProductos = await mongoose.model('Producto').countDocuments();
        res.json({ totalUsuarios, totalProductos });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint para obtener el número total de operaciones realizadas
app.get('/operaciones', (req, res) => {
    res.json({ totalOperaciones: req.totalOperaciones });
});

// Middleware para manejar errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Algo salió mal en el servidor' });
});

module.exports = app;