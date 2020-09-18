module.exports = { isMutant };

function isMutant(dnaString) {
  const matchA = ["A", "A", "A", "A"];
  const matchC = ["C", "C", "C", "C"];
  const matchG = ["G", "G", "G", "G"];
  let counterA = 0;
  let counterC = 0;
  let counterG = 0;
  let dnaToAnalyse;
  let i, j, k;

  // 1. Busca de forma horizontal la base nitrogenada C

  // a. Recorre cada fila de la matriz (hasta la longitud de la cantidad de filas)
  for (i = 0; i < dnaString.length; i++) {
    // b. Recorre las bases nitrogenadas dentro de cada fila
    for (j = 0; j <= dnaString[i].length - matchC.length; j++) {
      dnaToAnalyse = [];
      // c. Agrega a una variable arreglos de 4 bases nitrogenadas para analizar (de forma horizontal)
      for (k = 0; k < matchC.length; k++) {
        dnaToAnalyse.push(dnaString[i][j + k]);
      }
      // d. Une los arreglos de letras para compararlos con las combinaciones buscadas en mutantes. Si hay coincidencia, suma 1 al contador de bases nitrogenadas C
      if (dnaToAnalyse.join() === matchC.join()) {
        counterC++;
      }
    }
  }

  // 2. Busca de forma vertical la base nitrogenada G

  // a. Recorre cada fila de la matriz (hasta la longitud de letras en cada fila)
  for (i = 0; i < dnaString[0].length; i++) {
    // b. Recorre las bases nitrogenadas dentro de cada fila
    for (j = 0; j <= dnaString.length - matchG.length; j++) {
      dnaToAnalyse = [];
      // c. Agrega a una variable arreglos de 4 bases nitrogenadas para analizar (ordenado de forma vertical)
      for (k = 0; k < matchG.length; k++) {
        dnaToAnalyse.push(dnaString[j + k][i]);
      }
      // d. Une los arreglos de letras para compararlos con las combinaciones buscadas en mutantes. Si hay coincidencia, suma 1 al contador de bases nitrogenadas G
      if (dnaToAnalyse.join() === matchG.join()) {
        counterG++;
      }
    }
  }

  // 3. Busca de forma oblicua la base nitrogenada A
  for (i = 0; i <= dnaString.length - matchA.length; i++) {
    for (j = 0; j <= dnaString[i].length - matchA.length; j++) {
      dnaToAnalyse = [];
      for (k = 0; k < matchA.length; k++) {
        dnaToAnalyse.push(dnaString[i + k][j + k]);
      }
      if (dnaToAnalyse.join() === matchA.join()) {
        counterA++;
      }
    }
  }

  // 4. Busca de forma oblicua la base nitrogenada A (desde el otro extremo de la matriz)
  for (i = 0; i <= dnaString.length - matchA.length; i++) {
    for (j = dnaString[i].length - 1; j >= 0 + matchA.length - 1; j--) {
      dnaToAnalyse = [];
      for (k = 0; k < matchA.length; k++) {
        dnaToAnalyse.push(dnaString[i + k][j - k]);
      }
      if (dnaToAnalyse.join() === matchA.join()) {
        counterA++;
      }
    }
  }

  console.log(
    "Cantidad de combinaciones en ADN:",
    counterA + counterC + counterG
  );

  console.log("Bases nitrogenadas A:", counterA);
  console.log("Bases nitrogenadas C:", counterC);
  console.log("Bases nitrogenadas G:", counterG);

  // Verifica que se haya encontrado cada una de las 3 bases nitrogenadas para definir a un mutante
  if (counterA == 1 && counterC == 1 && counterG == 1) {
    //El ADN corresponde a un Mutante
    console.log("El ADN recibido es MUTANTE");
    console.log("ADN:", dnaString);
    return true;
  } else {
    //El ADN corresponde a un No-Mutante
    console.log("El ADN recibido es NO-MUTANTE");
    console.log("ADN:", dnaString);
    return false;
  }
}

//CASOS DE TESTEO

// Mutante (3 secuencias exactas, una de cada base nitrogenada)
const testDna1 = ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"];

// No-Mutante (4 secuencias)
const testDna2 = ["ATGCGA", "CAGTGC", "TTATGG", "AGAAGG", "CCCCTG", "TCACTG"];

// No-Mutante (1 secuencia)
const testDna3 = ["ATGCGA", "ATCGTA", "AGAGTA", "ATGAGA", "CCACAA", "CACACA"];

console.log(isMutant(testDna1));
console.log(isMutant(testDna2));
console.log(isMutant(testDna3));
