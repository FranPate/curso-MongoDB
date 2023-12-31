# Etapas

Las etapas de agregación se combinan en una serie de pasos para procesar y transformar los datos de acuerdo a las necesidades específicas. <br>
Cada una puede tener parámetros adicionales para realizar operaciones mas complejas.

## Tipos de Etapas

Hay muchos tipos de etapas distintos, pero aquí se destacan algunas importantes.

### **$match**

Es para filtrar documentos. <br>
Suele usarse como primera etapa de agregación. Ya que este va a eliminar muchos datos de la colección que se va a analizar en la etapa siguiente. <br>
Es muy similar a las queries que se utilizan normalmente para hacer un match, solo que en agregaciones.

#### Ejemplos

-  Aquí se buscan todas las películas que duran 100 minutos o más: <br>
   `$match: { runtime: { $gte: 100 } }`

### **$group**

Es para agrupar diferentes documentos en uno. <br>
Lo que se hace es definir un identificar que puede venir dado de los propios atributos del documento. Esto para agrupar los distintos documentos en un solo.

#### Ejemplos

-  Aquí se agrupan todos las películas que tengan el mismo idioma original: <br>
   `{ $group: { _id: '$original_language' } }` <br>

-  Aquí se agrupan las películas según si son de adultos o no: <br>
   `{ $group: { _id: '$adult' } }` <br>

También podemos agregar parámetros de cantidad o campos acumuladores.

-  Aquí se agrupan todos las películas que tengan el mismo idioma original y la cantidad que hay de cada una: <br>
   `{ $group: { _id: '$original_language', quantity: { $sum: 1 } } }`

-  Aquí se agrupan todos las películas que tengan el mismo idioma original y la media de hay de cada una: <br>
   `{ $group: { _id: '$original_language', average: { $avg: '$vote_average' } } }`

Note que el nombre que tendrá el parámetro puede ser elegible.

### **$lookup**

Es para buscar información en otras colecciones. <br>
Hacer el vinculo entre una colección y otra. (JOIN) <br>
Estas pueden llegar a ser muy caras en rendimiento a no ser que se tenga claro el atributo que se va a buscar y bien realizado el match.

```json
$lookup:
{
   from: 'collection_name', //la que vamos a traer
   localField: 'field_name', //identificador de la colección actual
   foreignField: 'field_name', //identificador de la colección que vamos a traer
   as: 'field_name' //nombre del resultado
}
```

#### Ejemplos

Partiendo desde que esta query se esta haciendo en movies_metadata, se busca la información de la colección credits.

-  Aquí se busca la información de la colección credits: <br>
   `{ $lookup: { from: 'credits', localField: 'id', foreignField: 'id', as: 'personnel' } }`

#### Ejercicios

##### Sacar la media de puntuación de las películas de Tom Holland y el numero de puntuaciones que ha recibido.

-  Películas de Tom Holland
-  Por cada película, cuantas puntuaciones ha recibido
-  La media de las puntuaciones (desde la colección de ratings)

###### Solución

<details>
<summary>Solution Warning</summary>

Partiendo desde créditos, porque ahi es que están los actores.

`$match` para filtrar credits por Tom Hanks. <br>
`$lookup` para ir a buscar la información de la película.

`{ $match: { runt'cast.name': 'Tom Hanks' } }` <br>
`{ $lookup: { from: 'movies_metadata', localField: 'id', foreignField: 'id', as: 'movie' } }`

</details>

### **$project**

Es para dejar pasar solamente un set de atributos. <br>
Es la version de proyecciones de las queries normales pero de agregaciones. <br>

#### Ejemplos

Partiendo de la agregación del ejercicio anterior: <br>
`{ $match: { runt'cast.name': 'Tom Hanks' } }` <br>
`{ $lookup: { from: 'credits', localField: 'id', foreignField: 'id', as: 'personnel' } }`

Si agregamos una proyección: <br>
`{ $project: { cast: 1, movies: 1 } }`

Si agregamos una proyección para no ver elementos: <br>
`{ $project: { cast: 0, movies: 0 } }`

### **$unwind**

Es para desmontar arrays y transformarlos en un documentos único por item del array. <br>
Muy util para filtrar elementos dentro de un array.<br>

#### Ejemplos

Partiendo de la agregación del ejercicio anterior: <br>
`{ $match: { runt'cast.name': 'Tom Hanks' } }` <br>
`{ $lookup: { from: 'credits', localField: 'id', foreignField: 'id', as: 'personnel' } }`

##### Ejemplo #1

Para ver las películas directamente y no el arreglo de películas:
`{ $unwind: { path: '$movies} }`

Ahora de esas películas tenemos un documento, no un arreglo. <br>
Por lo que de eso se puede crear un proyección para ver el titulo de las películas: <br>
`{ $project: { movieTitle: '$movies.original_title' } }`

##### Ejemplo #2

Para ver el cast directamente (de cada película) y no el arreglo de actores: <br>
`{ $unwind: { path: '$cast'} }`

Ahora podemos sacar directamente el nombre de los actores que han trabajado con tom hanks: <br>
`{ $project: { actor: '$cast.name' } }`

E incluso ahora sobre ese resultado podemos hacer un match para filtrar que salga el mismo nombre: <br>
`{ $match: { 'actor': { $ne: 'Tom Hanks'} } }`

Para terminar de agregar todas las etapas explicadas, podemos agregar un group para ver cuantas películas en total son por cada actor: <br>
`{ $group: { _id: '$actor', quantity: { $sum: 1 } } }`

### Ejercicios

#### Cuántas películas ha hecho cada actor?

#### Cuántas películas ha hecho cada empresa de producción?

## Ejercicios

### Busca obtener la media de puntuación de cada SAGA de películas.

Utilizando el atributo belongs_to_collection.

#### Solución

<details>
<summary>Solution Warning</summary>

`{ $group: { _id: '$belongs_to_collection.name', average: { $avg: '$vote_average' } } }`

</details>