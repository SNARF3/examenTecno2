const app = require('./app');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;
const MONGO_URI = 'mongodb+srv://admin:admin@pepedeply.sd9nn.mongodb.net/?retryWrites=true&w=majority&appName=PEPEDEPLY';

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('Conectado a MongoDB Atlas');
        app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
    })
    .catch(err => console.error('Error conectando a MongoDB Atlas:', err));