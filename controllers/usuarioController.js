const Usuario = require('../models/Usuario');

exports.crearUsuario = async (req, res) => {
    try {
        const usuario = new Usuario(req.body);
        await usuario.save();
        res.status(201).json(usuario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios); 
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.actualizarUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(usuario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.eliminarUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndDelete(req.params.id);
        if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.status(200).json({ message: 'Usuario eliminado correctamente' }); 
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};