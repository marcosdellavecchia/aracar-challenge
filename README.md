# aracar-challenge
Aracar Developer Challenge Frontender

Esta prueba técnica para Aracar tiene como fin identificar si un humano es mutante de acuerdo a la secuencia de su ADN.

Para eso, una función recibe como parámetro un array de strings que representan cada fila de una matriz y devuelve "true" si el ADN corresponde a un Mutante y "false" si corresponde a No-Mutante. Las letras de los Strings solo pueden ser: (A,T,C,G), las cuales representan cada base nitrogenada del ADN.

Para que un humano sea considerado Mutante, **el patrón de su ADN debe ser exacto como se ve en la secuencia coloreada** a continuación (debe contener 3 secuencias de manera excluyente):

![Imagen enunciado challenge Aracar](https://i.imgur.com/HC4XAU5.png "Matrices No-Mutante y Mutante") 

## Tecnologías utilizadas
- NodeJS
- JavaScript

**Nivel 1 – Junior:**

a) Realizar un programa en JavaScript que cumpla con el método pedido por Magneto.
b) Crear una API REST, crear el servicio “/mutant/” en donde se pueda detectar si un humano es
mutante, enviando la secuencia de ADN mediante un HTTP POST con un JSON el cual tenga el
siguiente formato:

```
POST → /mutant/
{“dna”:["ATGCGA","CAGTGC", "TTATGT","AGAAGG","CCCCTA","TCACTG"]}
```

En caso de verificar un mutante, debería devolver un **HTTP 200-OK**; caso contrario, un 403-
DNA isn't Mutant

**Nivel 2 – Junior:**

c) Anexar una base de datos, la cual guarde los ADN’s verificados con la API. (Solo 1 registro por
ADN).
d) Exponer un servicio extra **“/stats”** que devuelva un JSON con las estadísticas de las
verificaciones de ADN: ```{“count_mutant_dna”:40, “count_human_dna”:100: “ratio”:0.4}```
e) Se debe desarrollar una página web que se pueda ingresar la secuencia de ADN y, luego de
analizarla, indique si corresponde a un mutante.
Utilizar siguientes lenguajes: html/ Javascript / React):
