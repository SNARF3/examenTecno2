# ⚙️ Backend para Gestión de Usuarios y Productos 

¡Bienvenido al backend de nuestra aplicación! Este proyecto se encarga de gestionar usuarios  y productos  de manera eficiente, utilizando Node.js  y MongoDB Atlas ☁️.

##  Requisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

-   **Node.js**: [Descargar Node.js](https://nodejs.org/) ⬇️
-   **MongoDB**: No es necesario instalarlo localmente, ya que utilizamos MongoDB Atlas .

## ️ Instalación

Sigue estos pasos para poner en marcha el proyecto:

1.  **Clona el repositorio**:

    ```bash
    git clone [https://github.com/SNARF3/examenTecno2.git](https://github.com/SNARF3/examenTecno2.git) 
    cd examenTecno2
    ```

2.  **Instala las dependencias**:

    ```bash
    npm install 
    ```

3.  **Inicia el servidor**:

    ```bash
    npm start ▶️
    ```

    El servidor estará disponible en `http://localhost:5000` .

## ️ Rutas de la API

###  Usuarios

-   **Crear un usuario (POST /usuarios)**:

    ```json
    {
        "nombre": "Miguel Angel Pacheco",
        "edad": 36,
        "ocupacion": "Ingeniero en telecomunicaciones"
    } ➕
    ```

-   **Obtener todos los usuarios (GET /usuarios)**:

    ```bash
    GET http://localhost:3000/usuarios 
    ```

-   **Actualizar un usuario por ID (PUT /usuarios/:id)**:

    ```json
    {
        "nombre": "Miguel Angel Pacheco",
        "edad": 36,
        "ocupacion": "Ingeniero en telecomunicaciones"
    } ✏️
    ```

-   **Eliminar un usuario por ID (DELETE /usuarios/:id)**:

    ```bash
    DELETE http://localhost:3000/usuarios/:id ️
    ```

###  Productos

-   **Crear un producto (POST /productos)**:

    ```json
    {
        "nombre": "Laptop Gamer",
        "precio": 1500,
        "categoria": "Tecnología"
    } ➕
    ```

-   **Obtener todos los productos (GET /productos)**:

    ```bash
    GET http://localhost:3000/productos 
    ```

-   **Actualizar un producto por ID (PUT /productos/:id)**:

    ```json
    {
        "nombre": "Laptop Gamer",
        "precio": 1500,
        "categoria": "Tecnología"
    } ✏️
    ```

-   **Eliminar un producto por ID (DELETE /productos/:id)**:

    ```bash
    DELETE http://localhost:3000/productos/:id ️
    ```

###  Contadores y Operaciones

-   **Obtener el número de usuarios y productos (GET /contadores)**:

    ```bash
    GET http://localhost:3000/contadores 
    ```

-   **Obtener el número total de operaciones realizadas (GET /operaciones)**:

    ```bash
    GET http://localhost:3000/operaciones 
    ```