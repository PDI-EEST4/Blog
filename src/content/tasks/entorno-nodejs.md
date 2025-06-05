---
title: TP Nº6 | Creación de Proyecto Node.js
topic: Implementación
slug: creacion-node
visible: true
---

# Trabajo Práctico Nº6

**Temas**: **[Implementación de Proyecto de Software](/lessons/implementacion)**

<hr />

## Consignas

1. En base a la guía propuesta en la clase, replicar los pasos para tener un pryoecto de Node.js. Para ello
* Instalar Node.js
* Abrir VS-Code y abrir una nueva carpeta File -> Open Folder. Seleccionar una carpeta que **esté vacía**
* Abrir el terminal y ejecutar el comando `npm init -y`. Este comando debería crearles un archivo `package.json`, que es el archivo de configuración de proyectos Node.js. Dicho archivo contendrá información sobre el proyecto, como su nombre, versión, etc
* Crear un archivo `index.js` cuyo contenido deberia ser algo así como
    ```js
    console.log("Somos (alumnos) y este es el trabajo de Node.js para PDI (La mejor materia)")
    ```
2. Descargar y configurar Git. Para ello:
* Instalar Git
* Configurarlo, para ello
    ```bash
    git config --global user.name "Tu nombre"
    git config --global user.email tuemail@example.com
    ```
* Abrir la terminal (sobre la carpeta del proyecto) y ejecutar el comando `git init`. El mismo deberia crear un repositorio local en la carpeta del proyecto (no es algo que puedan ver, confien. Aunque a lo mejor los archivos se 'ponen en verde')
* Crear un archivo `.gitignore`. Buscar en internet cuál debería ser su contenido para proyectos en **Node.js y Express** y "copypastear" lo encontrado. Este se encarga de ignorar ciertos archivos y carpetas cuando los vayamos a subir a github
* Subir el proyecto a un repositorio empleando ya sea git o la extension de git de VSCode
3. Subir el proyecto a un repositorio empleando ya sea git o la extension de git de VSCode
4. Agregar un archivo `README.md` con el siguiente contenido
    ```md
    # Proyecto de Node de [NombreAlumno]

    Este es mi proyecto de Node.js para el TP N°6 de la materia PDISC (que es mi favorita).
    ```
5. Subir el archivo modificado al repositorio empleando ya sea git o la extension de git de VSCode
