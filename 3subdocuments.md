# Sub-documentos & Arrays

Nos hemos encontrado con una situación, hemos buscado dentro de arreglos usando los objetos completos, pero que pasa si solo sabemos el nombre de uno de ellos? O si queremos buscar dentro de un arreglo de objetos que esta dentro de otro arreglo de objetos?

## Notación del punto (.)

Esto nos permite acceder a los sub-documentos de un documento, por asi decirlo a una propiedad del objeto. Ademas, para dejarle saber a mongo que es una cadena compuesta, podemos usar las comillas simples.

Ejemplo: `'array.property'`

`{'array.property': value}`

En caso de ser un arreglo dentro de un arreglo, podemos usar el punto `.` para acceder a la propiedad del objeto y al arreglo que esta dentro de este.

`{'array.sub-array.property': value}`

### Ejemplo

Para buscar un película que tenga el nombre de &nbsp;`Warner Bros.`: <br>
`{'production_companies.name': 'Warner Bros.'}`

Para buscar un película que pertenezca a una colección de películas: <br>
`{'belongs_to_collection.name': 'collection_name'}`

# Ejercicios

## Todas las películas donde ha participado como actor Tom Hanks (sobre colección de credits)

La propiedad es: <br>
`{'cast.propiedad': 'value'}`

### Solución

<details>
<summary>Solution Warning</summary>

`{'cast.name': 'Tom Hanks'}`

</details>