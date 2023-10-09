# Pestaña de EXPLAIN
- Por norma general, MongoDB hace ESCANEOS COMPLETOS de la colección para encontrar el documento

# Índices
- Los índices mejoran la eficiencia de las búsquedas, ya que indexan los documentos utilizando
los atributos indicados. Eso sí, hacen que el espacio en disco aumente. Más velocidad pero más espacio ocupado.

### Studio 3T

Podemos crear un índice de manera sencilla:

1. Seleccionar la colección (click derecho).
2. Seleccionar "Crear indice".
3. Seleccionar los atributos de la colección que queremos indexar.
4. Seleccionar el tipo de índice (ascendente, descendente, etc).
5. Seleccionar "Crear indice".