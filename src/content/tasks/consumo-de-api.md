---
title: TP Nº11 | Consumo de API
topic: Implementación
slug: consumo-apis
visible: true
---

# Trabajo Práctico Nº11

**Temas**: **[Intro Frontend](/lessons/intro_frontend)**

En base a la entidad elegida en los trabajos prácticos anteriores:

- Realizar un frontend para su proyecto. Pueden hacerlo en un repo aparte, separar en carpetas "frontend" y "backend" al repo o bien dentro de una carpeta "public" en su proyecto

- Crear un archivo `index.html` que tenga un título con el nombre de su proyecto. Si ya tienen una página inicial armada pueden usarla tambien para ya dejar el repo preparado

- Crear una carpeta `/pages`, y dentro de esa misma carpeta otra con el nombre de la entidad (Ejemplo /pages/tareas)

- En esta ultima carpeta crear los archivos
* `index.html`: Que consuma el api creada por ustedes mediante el uso de `fetch` y muestre en consola un listado de elementos de la entidad que hayan usado en su tp
* `create.html`: Que tenga un formulario y, al subirlo, haga una solicitud POST al api para crear un elemento nuevo de su entidad


## Y ya que estamos...
- Crear tambien los siguientes archivos
* `show.html`: Que consuma el api creada para mostrar en consola un solo elemento de su entidad. Además debería tener un botón que permita eliminar a ese elemento usando DELETE en el API
* `edit.html`: Que tenga un formulario con los datos de la entidad ya cargados. Al submitear el formulario se debería modificar la entidad con los nuevos datos ingresados usando PUT como método en la llamada al API