# Queries en JSON

En MongoDB, TODO es JSON.

# Queries

-  Buscar la película cuyo título sea 'Die Hard':

   -  Mediante comparación de cadenas: <br>
      `{ original_title: 'Die Hard' }`
      <br>

   -  Mediante comparación de valores (con operadores de MongoDB): <br>
      _Mayor o igual_ <br>
      `{ budget: { $gte: 28000000 } }` <br>

      _Mayor o igual &nbsp; & &nbsp; AND_ <br>
      `{ budget: { $gte: 28000000 }, revenue: { $gte: 168840000 } }`

      _Mayor o igual &nbsp; & &nbsp; Menor o igual_ <br>
      `{ budget: { $gte: 28000000, $lte: 30000000 } }`

# Ejercicios

## Películas largas y populares

Encontrar las películas que duran 90 minutos o más y tienen una puntuación mayor o igual a 8. <br>
Los atributos son: **runtime** y **vote_average**

## Solución

<details>
<summary>Solution Warning</summary>

`{ runtime: { $gte: 90 }, vote_average: { $gte: 8 }}`

</details>
<br>

# Aclaraciones

En las consultas vistas, se ha omitido el operador `$eq` porque es el operador por defecto. <br>

Por ejemplo: <br>
`{ original_title: { $eq: 'Die Hard' } }` <br>
Es equivalente a: <br>
`{ original_title: 'Die Hard' }`