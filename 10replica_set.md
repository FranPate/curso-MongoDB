# ReplicaSet

Es una manera de que MongoDB se copie a si mismo, para hacer una copia de seguridad en distintos servidores o varias instancias de MongoDB con los mismos datos.

```
        +-----------------+
        |CLIENTE/PROGRAMA |
        +--+-----+--------+
              |     |
    ESCRIBE   v     v   LEE
            +---------+
            | PRIMARY |
            +----+-+--+
                 | |
       REPLICA   | | REPLICA
+---------+      | |     +---------+
|SECONDARY|<-----+ +---->|SECONDARY|
+---------+              +---------+
```

Si el primario llega a fallar, pues mongo subiría de categoría una de los secundarios.
Incluso podemos decidir a quien se le escribe y a quien se le lee. Pudiendo repartir las lecturas entre todos y aprovechar todos los servidores.

# Configurando un replicaset

## Local

```bash
docker run --name curso-mongo0 -d -p 27018:27017 mongo:latest --replSet rs0
docker run --name curso-mongo1 -d -p 27019:27017 mongo:latest --replSet rs0
docker run --name curso-mongo2 -d -p 27020:27017 mongo:latest --replSet rs0
```

```js
rsconf = {
	_id: "rs0",
	members: [
		{
			_id: 0,
			host: "localhost:27018",
		},
		{
			_id: 1,
			host: "localhost:27019",
		},
		{
			_id: 2,
			host: "localhost:27020",
		},
	],
};

rs.initiate(rsconf);

rs.status();
```