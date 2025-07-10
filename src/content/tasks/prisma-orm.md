---
title: TP Nº10 | Prisma ORM
topic: Implementación
slug: prisma-orm
visible: true
---

# Trabajo Práctico Nº10

**Temas**: **[Prisma ORM](/lessons/prisma-orm)**

<hr>

**Consigna**
En base al trabajo práctico N°9:


* Instalar prisma en su proyecto
* Configurarlo en base a la guia propuesta en https://pdi-website.vercel.app/lessons/prisma_orm
* Modificar los endpoints de la entidad que hayan elegido para que se comporten de la siguiente forma:

GET /entidad => Devuelve todos los registros de la entidad que haya en la DB

GET /entidad/:id => Toma una id de los parámetros de la url y devuelve un solo registro de la entidad

POST /entidad => Toma parametros del cuerpo (body) de la solicitud y crea un registro de la entidad en la DB

PUT /entidad/:id => Toma una id de los parámetros de la url y usa los parámetros del cuerpo de la solicitud para modificar un registro

DELETE /entidad/:id => Borra la entidad que contenga la id dada por parámetro de url

Bonus track:
* Investigar como usar try {...} catch (e) { ... } para manejar excepciones de forma que la app no se rompa cuando recibe algo inesperado
* Agregar un query param en el endpoint GET /entidad que aplique algun filtro