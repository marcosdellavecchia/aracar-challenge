// Importo el archivo que contiene la funcion isMutant()
const mutant = require("../dnaTest");

// Requiero el metodo Router de Express
const { Router } = require("express");
const router = Router();

// Ruta
router.post("/", (req, res) => {
  // Guarda en una constante el adn que recibe a traves del metodo POST
  const { dna } = req.body;
  // Ejecuta la funcion isMutant tomando como parametro el adn recibido. Si es true devuelve HTTP200 (OK). Caso contrario un 403 (DNA isn't Mutant)
  if (mutant.isMutant(dna) == true) {
    res.status(200).json("OK");
  } else {
    res.status(403).json("DNA isn't Mutant");
  }
});

module.exports = router;
