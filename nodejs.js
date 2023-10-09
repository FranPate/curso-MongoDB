// Requires offcial Node.Js MongoDB Driver 3.0.0+
var mongodb = require("mongodb");

var client = mongodb.MongoClient;
var url = "mongodb://localhost:27017/";

client.connect(url, function(err, client)) {
    
    var db = client.db("movie-dataset");
    var collection = db.collection("movies_metadata");

    var query = {
        original_title: 'Toy Story'
    };

    var proyection = {
        original_title: 1
    }

    var cursor = cursor.find(query).proyect(proyection);

    var cursor = collection.aggregate([
        {
            $match: {
                original_title: 'Toy Story'
            }
        }
    ]);

    collection.insert([
        { curso: 'MasterMind', tematica: 'MongoDB' }
    ]);

    cursor.forEach(
        function(doc) {
            console.log(doc);
        },
        function(err) {
        client.close();
        }
    );
}

$lookup:
{
   from: 'collection_name', //la que vamos a traer
   localField: 'field_name', //identificador de la colección actual
   foreignField: 'field_name', //identificador de la colección que vamos a traer
   as: 'field_name' //nombre del resultado
}

