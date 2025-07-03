---
title: TP Nº9 | Rutas y Modularización
topic: Implementación
slug: rutas_modularizacion
visible: true
---

# Trabajo Práctico Nº9

**Temas**: **[Rutas y Modularización](/lessons/rutas_modularizacion)**

<hr>

**Consigna**

1. Modularizá tus rutas
A partir del trabajo práctico anterior, mové todas las rutas que tengas al momento a un archivo separado.

    > Por ejemplo: si tenías las rutas en server.js, pasalas a routes/entidad.routes.js y luego importalas en el archivo principal (server.js).

2. Agregá una ruta dinámica GET
Incorporá una nueva ruta del tipo GET /{entidad}/:id. Esta debe responder con un JSON que tenga el mensaje: "Esta es la ruta GET de mi entidad {entidad} con el ID {id}" (Reemplazá {id} por lo que recibís en la URL).

3. Agregá el parámetro :id también en las rutas DELETE y PUT
Modificá tus rutas DELETE /{entidad} y PUT /{entidad} agregándoles el parámetro :id para que devuelvan un mensaje similar, incluyendo el ID recibido como parámetro.

4. Elegí otra entidad de tu proyecto y creá todas sus rutas
Elegí una segunda entidad distinta a la del punto anterior. Para esa nueva entidad, creá un archivo nuevo con las siguientes rutas:

    * GET /{entidad} – debe devolver un mensaje indicando que muestra todos los elementos.
    * GET /{entidad}/:id – debe devolver un mensaje con el ID recibido.
    * POST /{entidad} – mensaje de creación.
    * PUT /{entidad}/:id – mensaje con ID.
    * DELETE /{entidad}/:id – mensaje con ID.

Todas las respuestas deben ser en formato JSON con un mensaje como: "Esta es la ruta <método> de mi entidad {entidad} con el ID {id}"

**Por si pinta...**

5. Centralizá tus rutas en un archivo routes/index.js
6. Creá un archivo routes/index.js donde importes todas las rutas de tus entidades y las agrupes en una única función. Luego, en server.js, simplemente llamá a esa función para registrar todas las rutas en tu app.