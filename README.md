# Backend para gestionar Usuarios y Productos

## Requisitos
- Node.js
- MongoDB

## Instalación
1. Clonar el repositorio.
2. Ejecutar `npm install` para instalar dependencias.
3. Asegurarse de que MongoDB esté corriendo.
4. Ejecutar `node server.js` para iniciar el servidor.

## Rutas
- `POST /usuarios`: Crear un usuario.
- `GET /usuarios`: Obtener todos los usuarios.
- `PUT /usuarios/:id`: Actualizar un usuario por ID.
- `DELETE /usuarios/:id`: Eliminar un usuario por ID.
- `POST /productos`: Crear un producto.
- `GET /productos`: Obtener todos los productos.
- `PUT /productos/:id`: Actualizar un producto por ID.
- `DELETE /productos/:id`: Eliminar un producto por ID.
- `GET /contadores`: Obtener el número de usuarios y productos.
- `GET /operaciones`: Obtener el número total de operaciones realizadas.

## Pruebas
Usar Postman o Insomnia para probar las rutas. Adjuntar capturas de pantalla de las pruebas exitosas.