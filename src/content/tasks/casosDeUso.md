---
title: TP Nº2 | Casos de Uso
topic: Diseño
slug: casos_de_uso
visible: true
---

# Trabajo Práctico Nº2

**Temas**: **[Casos de Uso](/lessons/casos_de_uso)**

<hr>

**Universo del discurso:**

> _En una biblioteca, la gestión de los libros y la interacción de los usuarios con ellos son fundamentales para su funcionamiento. Los libros forman parte del catálogo de la biblioteca y poseen información de interés como su título, su autor o autores, el ISBN, el año de publicación, el género, cantidad de páginas, sinopsis, texto en la contratapa, idioma original y la cantidad de ejemplares disponibles. Además, la biblioteca registra a los autores, quienes pueden escribir muchos libros y un libro puede ser escrito por varios autores. Para cada autor se guardan datos como el nombre, apellido, fecha de nacimiento, nacionalidad y biografía. <br/><br/>
> De igual modo, se almacena la información de la editorial; cada libro solo puede pertenecer a una editorial, mientras que una editorial puede tener a su cargo muchos libros. Para cada editorial se asigna una clave o identificador único, y se registran datos tales como su nombre, dirección, teléfono, correo electrónico y sitio web. <br/><br/>
> Los miembros de la biblioteca son personas que se registran para hacer uso de los servicios de la biblioteca. Cada uno cuenta con información de contacto que permite a la biblioteca comunicarse con ellos en caso necesario junto con su información personal, como pueden ser: dni, cuil, nombre, apellido, fecha de nacimiento, edad, estatura. Los miembros pueden consultar la disponibilidad de algún libro mediante un bibliotecario y leer un libro en la biblioteca o pueden acercarse a la recepción para tomar prestado uno o más libros, lo que implica que salen de la biblioteca durante un período determinado y deben devolverse dentro de un plazo establecido. <br/><br/>
> Cuando un libro no está disponible, los miembros tienen la opción de hacer una reserva, lo que implica que el miembro queda en espera hasta que el libro esté disponible para su retiro. <br><br/>
> La biblioteca es administrada por bibliotecarios, encargados de gestionar los préstamos, procesar las devoluciones y administrar las reservas. Además, este personal mantiene actualizado el catálogo de libros, organiza el material en distintas categorías temáticas y asegura el cumplimiento de las normas establecidas para el uso de los recursos. <br/><br/>
> Para organizar los libros de manera más eficiente, estos se agrupan en categorías, como "Ficción", "No Ficción", "Ciencia", "Historia", entre otras. Esto facilita la búsqueda de libros dentro de un área temática específica, ayudando tanto a los clientes como a los bibliotecarios a localizar rápidamente los materiales que buscan. <br/><br/>_

## Consignas

<div id="instructions">

1. Identificar y listar los actores que interactúan con el sistema de la biblioteca.
2. Utilizando historias de usuario o escenarios, determinar los casos de uso, definiendo actor, nombre del caso de uso y el objetivo.
3. Elaborar un [diagrama de casos de uso](/lessons/casos_de_uso/#diagrama-de-casos-de-uso)

<div id="bonus">

**Bonus (Opcional):**

1. Elegir un caso de uso y realizar una ficha con la siguiente estructura:
   - Nombre del caso de uso
   - Actor(es) involucrado(s)
   - Descripción breve
   - Precondiciones
   - Flujo principal de eventos
   - Flujo alternativo (si aplica)

**Ejemplo:**

- **Nombre del caso de uso:** Tomar prestado un libro
- **Actor(es) involucrado(s):** Miembro de la Biblioteca, Bibliotecario de la Biblioteca
- **Descripción breve:** Un miembro solicita el préstamo de un libro y el bibliotecario verifica la disponibilidad, registrando el préstamo en el sistema.
- **Precondiciones:**
  - El miembro debe estar registrado en el sistema de la biblioteca.
- **Flujo principal de eventos**
  1. El miembro solicita tomar prestado un libro al bibliotecario de la biblioteca.
  2. El bibliotecario verifica en el sistema si el libro está disponible.
  3. El bibliotecario solicita la credencial del miembro y verifica su registro en el sistema.
  4. El bibliotecario verifica que el miembro cumple las condiciones para realizar un préstamo
  5. El bibliotecario y el miembro establecen un periodo de devolución
  6. El bibliotecario registra el préstamo en el sistema.
  7. El miembro recibe el libro para su uso durante el período establecido.
- **Flujo alternativo**
  - **Libro no disponible:**
    1. Si el libro no tiene ejemplares disponibles en el momento, se informa al miembro.
    2. El bibliotecario le ofrece la opción de realizar una reserva.
  - **Miembro con historial de incumplimientos:**
    1. Si el usuario incumplió muchas veces los periodos de devolución, el bibliotecario puede negar el préstamo.

</div>

</div>
