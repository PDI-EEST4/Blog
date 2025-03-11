---
title: TP Integrador
topic: Integrador
slug: tp_integrador
---

# Trabajo Práctico Integrador | E-Commerce

El cliente tiene una tienda de celulares. Nos comenta que quisiera ampliar la lógica de su negocio implementando un portal web. El objetivo de ese portal web es permitir a los empleados gestionar el stock de los productos de la tienda.

### Backend

Usando NodeJS y Express se pide modelar un API REST que permita realizar operaciones CRUD sobre los celulares de la tienda. De cada celular, sabemos que presenta:

- Una marca y un nombre de modelo que lo identifican
- Una gama, que puede ser 'Baja', 'Media' o 'Alta'
- Un precio

Un ejemplo de celular podría ser

| marca   | modelo    | gama | precio   |
| ------- | --------- | ---- | -------- |
| Samsung | Galaxy J2 | Baja | 60599.99 |

El API debería contar con los siguientes endpoints:

- `GET /api/productos`: Devuelve un listado de productos
- `POST /api/productos`: Agrega un producto nuevo al listado
- `PUT /api/productos/:marca/:modelo`: Debería permitir actualizar el precio del producto dado
- `DELETE /api/productos/:marca/:modelo`: Debería permitir borrar el producto dado

Por seguridad, no quisieramos que cualquier usuario tenga la posibilidad de acceder a estos endpoints, por lo cual se solicita que, ademas, se construya un middleware que impida el acceso a usuarios no autorizados

**Actividades:**

1. Crear las rutas y controladores necesarios para las 4 rutas indicadas
2. Realizar validaciones dentro de los modelos o los controladores para que no se puedan enviar datos inválidos
3. Crear el middleware que impida el acceso a usuarios no autorizados

Tener en cuenta:

- Usar NodeJS con el framework Express para la realización de la tarea
- Emplear middlewares express.json y cors
- Debe haber una división adecuada de carpetas ('routes', 'controllers', 'models', 'config')
- Probar endpoints usando postman o alguna herramienta similar

### Frontend

Crear una interfaz que contenga una tabla que permita a los gerentes de la tienda visualizar los productos que están en la base de datos

Dentro de la misma tabla debería haber, para cada producto, un botón que permita editar y otro que permita borrar el producto de esa fila

En algún espacio del sitio debería haber un formulario que permita cargar un producto nuevo al sistema de forma sencilla. Sería interesante que al cargar el producto el mismo apareciese instantáneamente en la tabla

**Actividades**

1. Implementar un formulario de carga de productos, que realice una solicitud `POST` al API con los datos del nuevo producto
2. Desarrollar una funcion `obtenerProductos()` que obtenga el listado de productos desde el API mediante una solicitud `GET`
3. Mostrar los productos en una tabla de HTML tabla empleando la funcion anterior
4. Implementar el botón de editar producto, que realice una solicitud `PUT` al API con los datos a modificar y el precio nuevo
5. Implementar el botón de eliminar producto, que realice una solicitud `DELETE` al API y elimine el producto dado de la lista

Tener en cuenta:

- Usar HTML, CSS y Javascript
- Se puede usar Bootstrap
- Implementar Sass para editar algún elemento visual
- Debe haber una división adecuada de carpetas y archivos

```
|_css
|   |_ sass
|   |    |_ componente
|   |    |         |_ componente.scss
|   |    |_ main.scss
|   |_ style.css
|   |_ ...
|_scripts
|   |_ algunScript.js
|   |_ algunOtroScriptDeSerNecesario.js
|   |_ ...
|_index.html
```
