# Regex

Definición de un grupo de textos. Se refiere a un patrón de búsqueda utilizado en programación y procesamiento de texto para encontrar y manipular cadenas de caracteres de acuerdo con ciertas reglas predefinidas.

## Ejemplos

Todas las palabras que **empiezan** por **Tom:** &nbsp; `/^Tom/` <br>
Todas las palabras que **acaben** por **Hanks:** &nbsp; `/Hanks$/` <br>
Palabras que **contienen** la palabra **Story:** **&nbsp;** `/Story/` <br>

### Queries

-  Todas las películas con algún actor cuyo nombre empieza por Will: <br>
   `{'cast.name': /ˆWill/}`

-  Todas las películas con algún actor cuyo nombre acabe por Smith: <br>
   `{'cast.name': /Smith$/}`

-  Todas las películas con alguna palabra que contenga la palabra Story: <br>
   `{original_title: /Story/}`

-  Todas las películas con alguna palabra que no contenga la palabra Story: <br>
   `{original_title: /[^Story]/}`

## Documentación

Documentación de Regex por parte de MongoDB: <br>
https://www.mongodb.com/docs/manual/reference/operator/query/regex/