# Map Reduce

Map Reduce permite realizar acciones sobre datos de forma paralela y altamente escalable. <br>
Es un modelo de programación que consta de dos pasos: **Map** y **Reduce** <br>

-  Map: La información completa se separa en bloques, cada uno con una clave. Se realiza alguna transformación y se envía cada bloque al paso de Reduce.
-  Reduce: Un reduce coge los datos que salen del paso de Map (que tengan la misma clave) y los procesa.

# Usos

-  Se utiliza sobretodo cuando tienes una agregación que es muy lenta y necesitas que sea más eficiente.

## Ejemplo

### Vistas de YouTube

Dada la situación, tenemos: <br>
Map:

-  Una gran cantidad de ordenadores viendo videos en YouTube: **+1 visualización** para cada video visto.
-  N servidores que se encargan de ir guardando las visualizaciones de cada video (**videoID**: **Suma de visualizaciones**).

Reduce:

-  De cada servidor, toma: **videoID** y **suma de visualizaciones** y devuelve la cantidad total de visualizaciones.

### Ratings de películas

Dado que deseamos utilizar map reduce para agrupar por cada película la media de sus ratings, la idea es: <br>

Map:
`emit(this.movieID, this.rating)` <br>
Reduce:

```js
let sumRatings = 0;
for (let i = 0; i < values.length; i++) {
	sumRatings += rating;
}

return sumRatings / values.length;
```

#### Version Agregación

`{ group: { _id: '$movieID', rating: { $avg: '$rating' } } }`

### Conclusiones

Haciendo las pruebas, se puede observar como el map reduce es muy lento, en el ejemplo presentado, casi **26** veces mas lento.

Esto se debe a que:

-  Las funciones de map y reduce utilizan código de JS que debe ser interpretado pero las agregaciones no, estas utilizan C++ que es su código base (el de mongoDB).<br>
-  Al momento de usar JS, mongo debe encargarse de pasar el archivo de BSON a JSON, en agregaciones se usa directamente BSON.