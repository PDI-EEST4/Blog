---
title: TP Nº13 | Autenticación
topic: Implementación
slug: autenticacion
visible: true
---

# Trabajo Práctico Nº13

**Temas**: **[Autenticación](/lessons/autenticacion)**

<hr />

**Consigna**
En base a los trabajos prácticos anteriores:

1. Instalar `bcrypt` y crear un modelo de usuario en Prisma con los campos `email`, `password` y `name`. Asegurarse de que el email sea único.
2. En base a su modelo de usuario del MER, agregar los campos necesarios de la tabla de usuarios.
3. Implementar las rutas de autenticación y registro de usuarios.
4. Crear un middleware de autenticación que verifique si el usuario está logueado antes de permitir el acceso a ciertas rutas.
5. Implementar el middleware de autenticación en las rutas que requieran protección.
6. Probar el registro y la autenticación de usuarios utilizando Postman o una herramienta similar