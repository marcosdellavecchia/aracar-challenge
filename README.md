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

## Tecnologías utilizadas - API
- NodeJS
- JavaScript
- Express (Servidor)
- Morgan (Middleware)
- Postman (para realizar las peticiones a la API)

## Tecnologías utilizadas - Sitio web
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


