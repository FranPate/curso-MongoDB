# Agregaciones

Con las agregaciones podemos procesar datos de una forma más compleja. <br>
Conjunto de etapas dónde se realizan diferentes operaciones. <br> <br>
**Proceso de datos complejo:**

-  Filtrar
-  Transformar
-  Agrupar
-  Ordenar

`ENTRADA -> ETAPA 1 -> ETAPA 2 -> ... -> SALIDA: JSON`

Donde cada una de estas etapas pueden ser definidas con las operaciones mencionadas.
 
## Queries

### Normales

Hemos visto que las queries son objetos: <br>
`{original_title: 'Toy Story'}`

### De agregación

Aquí vemos que las agregaciones son arreglos: <br>
`Aggregations: [{etapa1}, {etapa2}...]`
<br>
Donde cada item de arreglo tiene cada paso o cada etapa. Mongo tiene varios tipos de etapas los cuales son fijos y limitado.

Las agregaciones tienen menos rendimiento y este dependerá de como las vinculamos y el orden en que los realizamos: Acostumbran a ir mas lentas.