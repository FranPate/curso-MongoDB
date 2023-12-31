# Proyecciones

Para filtrar los atributos que nos devuelve MongoDB. Por defecto, nos devuelve todos los atributos. <br>
Podemos observar en momento se aplica la proyección en la pestaña de EXPLAIN. <br> <br>
Se especifica después en otra función, de la función **find().project()**.

`find(...,).project({nombre: 1, apellido: 1, edad: 1})`

## Ejemplo

Si deseamos especificar los atributos que nos devuelve MongoDB, podemos hacerlo de la siguiente manera:

-  Para incluir: <br>
   `{nombre: 1, apellido: 1, edad: 1}`

-  Para excluir: <br>
   `{nombre: 0, apellido: 0, edad: 0}`

Donde el **1** indica que **sí** lo vamos a ver y el **0** indica que **no** lo vamos a ver.

-  Pero no podemos tenerlos ambos en la misma consulta. <br>
   `{nombre: 1, apellido: 0, edad: 0}`

# Ordenaciones

Para ordenar los resultados que nos devuelve MongoDB. <br>
Podemos observar en momento (luego de la proyección) se aplica la ordenación en la pestaña de EXPLAIN. <br> <br>
Se especifica después en otra función, de la función **find().sort()**. <br>

`find(...,).sort({nombre: 1})`

En caso de usar proyecciones, se especifica después de la función **find().project().sort()**.

`find(...,).project(...,).sort({nombre: 1})`

## Ejemplo

Si deseamos ordenar los resultados que nos devuelve MongoDB, podemos hacerlo de la siguiente manera:

-  De menor a mayor: <br>
   `{nombre: 1}`
-  De mayor a menor: <br>
   `{nombre: -1}`

Donde el **1** indica que **de menor a mayor** y el **-1** indica que **de mayor a menor**.

Podemos tener varios parámetros de ordenación respetados en orden de colocación. (En caso de tener un empate): <br>
`{nombre: 1, apellido: -1}`

Aquí si tenemos permitido tener ambos en la misma consulta.