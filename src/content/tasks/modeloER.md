---
title: TP Nº3 | Modelo Entidad-Relación
topic: Diseño
slug: modelo_er
visible: true
---

# Trabajo Práctico Nº3

**Temas**: **[Modelo Entidad-Relación](/lessons/mer)**

<hr>

**Universo del discurso:**

> _En una biblioteca, la gestión de los libros y la interacción de los usuarios con ellos son fundamentales para su funcionamiento. Los libros forman parte del catálogo de la biblioteca y poseen información de interés como su título, su autor o autores, el ISBN, el año de publicación, el género, cantidad de páginas, sinopsis, texto en la contratapa, idioma original y la cantidad de ejemplares disponibles. Además, la biblioteca registra a los autores, quienes pueden escribir muchos libros y un libro puede ser escrito por varios autores. Para cada autor se guardan datos como el nombre, apellido, fecha de nacimiento, nacionalidad y biografía. <br/><br/>
> De igual modo, se almacena la información de la editorial; cada libro solo puede pertenecer a una editorial, mientras que una editorial puede tener a su cargo muchos libros. Para cada editorial se asigna una clave o identificador único, y se registran datos tales como su nombre, dirección, teléfono, correo electrónico y sitio web. <br/><br/>
> Los miembros de la biblioteca son personas que se registran para hacer uso de los servicios de la biblioteca. Cada uno cuenta con información de contacto que permite a la biblioteca comunicarse con ellos en caso necesario junto con su información personal, como pueden ser: dni, cuil, nombre, apellido, fecha de nacimiento, edad, estatura. Los miembros pueden consultar la disponibilidad de algún libro mediante un bibliotecario y leer un libro en la biblioteca o pueden acercarse a la recepción para tomar prestado uno o más libros, lo que implica que salen de la biblioteca durante un período determinado y deben devolverse dentro de un plazo establecido. <br/><br/>
> Cuando un libro no está disponible, los miembros tienen la opción de hacer una reserva, lo que implica que el miembro queda en espera hasta que el libro esté disponible para su retiro. <br><br/>
> La biblioteca es administrada por bibliotecarios, encargados de gestionar los préstamos, procesar las devoluciones y administrar las reservas. Además, este personal mantiene actualizado el catálogo de libros, organiza el material en distintas categorías temáticas y asegura el cumplimiento de las normas establecidas para el uso de los recursos. <br/><br/>
> Para organizar los libros de manera más eficiente, estos se agrupan en categorías, como "Ficción", "No Ficción", "Ciencia", "Historia", entre otras. Esto facilita la búsqueda de libros dentro de un área temática específica, ayudando tanto a los clientes como a los bibliotecarios a localizar rápidamente los materiales que buscan. <br/><br/>_

**Nota:** Por como esta pensado el sistema no es necesario incluir a los bibliotecarios como una entidad en el modelo ER.

## Consignas

<div id="instructions">

**Recomendación:** Utilizá un enfoque escéptico y crítico. No aceptes el discurso tal como se presenta ya que este podría ser dado por un cliente sin un trasfondo tecnico. Cuestiona cada elemento discutiendo su relevancia y utilidad ¿Es realmente necesario esto? ¿Para qué se utiliza dentro de una biblioteca?

1. A partir del universo del discurso, identificá y enumerá:
   - **Entidades**
   - **Atributos**, para cada entidad, definí cuáles son sus propiedades. También, indicá si el atributo se trata de la clave primaria de la entidad.
   - **Relaciones**, determiná cómo se interactuan las entidades entre sí
2. Establecé la cardinalidad (uno a uno, uno a muchos, muchos a muchos) de cada relación y justifica brevemente tus elecciones.
3. Realizá un diagrama entidad-relación que represente las entidades, atributos, relaciones y sus cardinalidades.

<div id="bonus">

**Bonus (Opcional):**

4. Plantea ejemplos de consultas que se podrían utilizar en un sistema real de alguna biblioteca. Por ejemplo:
   - Listar los libros reservados que están pendientes de devolución
   - Consultar el historial de préstamos de un miembro
5. Señala cuáles aspectos del universo del discurso consideras innecesarios o redundantes y justifica tu respuesta.
6. ¿Qué elementos adicionales podrían incorporarse para mejorar la funcionalidad del sistema?

</div>

</div>
