---
title: TP Nº12 | Middlewares
topic: Implementación
slug: middlewares
visible: true
---

# Trabajo Práctico Nº12

**Temas**: **[Middlewares](/lessons/middlewares)**

<hr />

**Consigna**
En base a los trabajos prácticos anteriores:

1. Logger:
* Implementar un middleware tipo logger que imprima en consola el método y la URL de cada petición que se realice a la API
* A ese middleware agregarle un timestamp que imprima la fecha y hora de la petición
* A ese middleware agregarle los datos enviados en el body de la petición (si es que los hay)
* Aplicar ese middleware a todas las rutas de la API

2. Manejo de Errores:
* Crear un middleware que retorne error 404 si la ruta no existe con el siguiente mensaje: 

```json
{ "error": "Ruta no encontrada"}
```
