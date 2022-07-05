db.createCollection
(
    "Producto",
    {
        validator: 
        {
            $jsonSchema:
            {
                bsonType: "object",
                required: ["Nombre","idProducto","Cantidad"],
                properties: 
                {
                     Nombre:
                    {
                        bsonType: "string",
                        description: "se describe la boleta"
                    },
                    idBoletaPago: 
                    {
                        bsonType: "string",
                        description: "Id de la boleta"
                    },              
                    Cantidad:
                    {
                        bsonType: "int",         
                        description: "se ingresa la cantidad de Productos"
                    },         
                }
            }
        }
    }
)


db.createCollection(
    "Componentes",
    { 
        validator:
        {
             $jsonSchema:
                {  
                    bsonType: "object",
                    description: "Componentes del producto",
                    required: ["idComponentes","Nombre","Descripcion","Proveedores","Productos"],
                    properties:
                        { 
                            idComponentes: 
                         {
                        bsonType: "string",
                        description: "Id de componentes"
                         },
                         
                            Nombre:{
                            bsonType: "string",
                            description: "Nombre",
                            },
                            
                            Descripcion:{
                            bsonType: "string",
                            description: "Descripcion del componente"
                            },
                            
                           Proveedores:{
                                bsonType: "array",
                                description: "Proveedores must be array to strings", 
                                items:{      
                                bsonType: "string"                          
                                }
                            },
                            Productos:{
                                bsonType: "array",
                                  description: "Productos ust be array to strings",
                                items:{      
                                bsonType: "string",                         
                                }
                            },                         
                         }
                }
        }
    }
);