# aracar-challenge
#### Sitio web para verificar ADN mutante: https://mutant-check.web.app/

Esta prueba técnica para Aracar tiene como fin identificar si un humano es mutante de acuerdo a la secuencia de su ADN.

Para eso, una función recibe como parámetro un array de strings que representan cada fila de una matriz y devuelve "true" si el ADN corresponde a un Mutante y "false" si corresponde a No-Mutante. Las letras de los Strings solo pueden ser: (A,T,C,G), las cuales representan cada base nitrogenada del ADN.

Para que un humano sea considerado Mutante, **el patrón de su ADN debe ser exacto como se ve en la secuencia coloreada** a continuación (debe contener 3 secuencias de manera excluyente):

![Imagen enunciado challenge Aracar](https://i.imgur.com/HC4XAU5.png "Matrices No-Mutante y Mutante") 

## Consigna
**Nivel 1 – Junior:**  
a) Realizar un programa en JavaScript que cumpla con el método pedido por Magneto.  
b) Crear una API REST, crear el servicio “/mutant/” en donde se pueda detectar si un humano es mutante, enviando la secuencia de ADN mediante un HTTP POST con un JSON el cual tenga el siguiente formato:  
``
POST → /mutant/
{“dna”:["ATGCGA","CAGTGC", "TTATGT","AGAAGG","CCCCTA","TCACTG"]}  
``
En caso de verificar un mutante, debería devolver un **HTTP 200-OK**; caso contrario, un **403-DNA isn't Mutant**  

**Nivel 2 – Junior:**  
c) Anexar una base de datos, la cual guarde los ADN’s verificados con la API. (Solo 1 registro por
ADN).  
d) Exponer un servicio extra “/stats” que devuelva un JSON con las estadísticas de las
verificaciones de ADN: ``{“count_mutant_dna”:40, “count_human_dna”:100: “ratio”:0.4}``  
e) Se debe desarrollar una página web que se pueda ingresar la secuencia de ADN y, luego de
analizarla, indique si corresponde a un mutante.  
Utilizar siguientes lenguajes: HTML / Javascript / React):  

## Tecnologías utilizadas - Nivel 1 (API)
- NodeJS
- JavaScript
- Express (Servidor)
- Morgan (Middleware)
- Postman (para realizar las peticiones a la API)

## Tecnologías utilizadas - Nivel 2 (Sitio web)
- HTML
- CSS
- JavaScript
- React
- Reactstrap (para modals)

## Funcionamiento de la API
1. Instalar NodeJS como entorno de ejecución para correr el programa de forma local (https://nodejs.org/es/)
2. Clonar el repositorio ``git clone https://github.com/marcosdellavecchia/aracar-challenge.git ``.
3. Ubicarse en el directorio \aracar-challenge\ y ejecutar el comando ``npm install`` para descargar las dependencias requeridas.
4. Dirigirse a la carpeta src ingresando ``cd ./src`` y ejecutar el comando ``node index.js`` para levantar el servidor local.
5. Realizar la petición POST a la ruta http://localhost:3000/api/mutant/ con el siguiente formato: ``{“dna”:["ATGCGA","CAGTGC", "TTATGT","AGAAGG","CCCCTA","TCACTG"]}``.
6. Si el string cumple con los requisitos (3 combinaciones exactas), la API va a devolver **HTTP 200-OK**. Caso contrario, va a retornar **403-DNA isn't Mutant**.

## Peticiones a la API
- Método HTTP: **POST**
- Respuesta para ADN Mutante: **200 (OK)**
- Respuesta para ADN No-Mutante: **403 (Forbidden)**

## Explicación del programa para detectar ADN mutante
El algoritmo que permite clasificar las secuencias de ADN en Mutante y No-Mutante se encuentra en el archivo dnaTest.js. El mismo consiste en una función que recibe un string y retorna true o false según corresponda. Junto con el resultado de la prueba, también imprime en consola la cantidad de combinaciones encontradas de cada base nitrogenada (A, C y G) y la cadena de ADN ingresada como se ve a continuación:  
``
Cantidad de combinaciones en ADN: 3 &nbsp;
Bases nitrogenadas A: 1 &nbsp;
Bases nitrogenadas C: 1 &nbsp;
Bases nitrogenadas G: 1 &nbsp;
El ADN recibido es MUTANTE &nbsp;
ADN: [ 'ATGCGA', 'CAGTGC', 'TTATGT', 'AGAAGG', 'CCCCTA', 'TCACTG' ] &nbsp;
true  
``
Las coincidencias pueden encontrarse en cualquier lugar de la matriz, debiendo sumar exactamente 3. Tienen que estar compuestas de la siguiente manera:
- 1 secuencia de 4 letras A en forma oblicua.
- 1 secuencia de 4 letras C en forma horizontal.
- 1 secuencia de 4 letras G en forma vertical.

### Funcionamiento del algoritmo
La funcion isMutant() recibe como parámetro un array con el siguiente formato: ``testDna = ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"]``.   
Dentro de la función se definen 3 constantes (matchA, matchB, matchC) que equivalen a un arreglo compuesto por cada una de las combinaciones de 4 letras posibles. Ej: ``matchA = ["A", "A", "A", "A"]``. De la misma forma se inicializan en cero 3 variables que cumplen la funcion de contadores, una por cada letra posible. Por último se declara una variable llamada dnaToAnalyse, donde va a alojarse temporalmente el string ingresado, y tres variables i, j y k que se utilizarán posteriormente en los ciclos for.


