// Requiere el modulo Express para configurar el servidor
const express = require("express");
const app = express();

// Settings
// En caso de que exista un puerto definido por el servicio, que lo tome. Si no, que utilice el 3000 por default.
app.set("port", process.env.PORT || 3000);
//Formatea los json
app.set("json spaces", 2);

// Requiere el modulo Morgan (un middleware, procesa datos antes de que el servidor los reciba)
const morgan = require("morgan");

// Middleware - permite ver por consola lo que va llegando al servidor
app.use(morgan("dev"));

// Permite entender datos que llegan desde inputs de formularios
app.use(express.urlencoded({ extended: false }));

// Le permite al servidor recibir y entender formatos JSON
app.use(express.json());

//Importacion de rutas
app.use("/api/mutant", require("./routes/mutant"));

// Empezando el servidor
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
