# Operadores de comparación para las Queries

-  **Igualdad:**
-  $eq _(Igual)_
-  $ne _(Diferente)_
-  **Mayores:**
-  $gt _(Mayor que estricto)_
-  $gte _(Mayor o igual)_
-  **Menores:**
-  $lt _(Menor que estricto)_
-  $lte _(Menor o igual)_
-  **Contener:**
-  $in _(Contiene)_
-  $nin _(No contiene)_

# Comparaciones con arrays

## El atributo objetivo **NO** es un array: <br>

### Ejemplo con original_language:

`original_language: es, en, fr` -> **QUIERO QUE SEA UNO DE ESTOS:** `['es', 'fr']` <br> <br>
Esta seria la query:<br>
`{ original_language: { $in: ['es', 'fr'] } }`

La negación seria:<br>
`{ original_language: { $nin: ['es', 'fr'] } }`

## El atributo objetivo **SI** es un array:

### Ejemplo con genres:

Hacemos la comparación con el **objeto entero**.<br>
`{ genres: {$in: [ {"id": 16, "name": "Animation"}, {"id": 12, "name": "Adventure"} ] } }`

La negación seria:<br>
`{ genres: {$nin: [ {"id": 16, "name": "Animation"}, {"id": 12, "name": "Adventure"} ] } }`

# Ejercicios

## Películas que han sido producidas o bien por Warner Bros o bien por 20th Century Fox:

Los objetos son: <br>

-  Warner Bros: <br>
   `{"name": "Warner Bros.", "id": 6194}`

-  20th Century Fox: <br>
   `{"name": "Twentieth Century Fox Film Corporation", "id": 306}`

### Solución

<details>
<summary>Solution Warning</summary>

`{ production_companies: { $in: [ { "name" : "Twentieth Century Fox Film Corporation", "id" : 306 }, { "name" : "Warner Bros.", "id" : 6194 } ] } }`

</details>

## De las películas del ejercicio 1, las que tengan una puntuación mayor a 8.

El atributo es: **vote_average**

### Solución

<details>
<summary>Solution Warning</summary>

`{ production_companies: { $in: [ { "name" : "Twentieth Century Fox Film Corporation", "id" : 306 }, { "name" : "Warner Bros.", "id" : 6194 } ] }, vote_average: { $gt: 8 } }`

</details>