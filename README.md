# aracar-challenge
Aracar Developer Challenge Frontender

Magneto quiere reclutar la mayor cantidad de mutantes posibles para poder luchar contra los X-Men.
Te ha contratado a ti para que desarrolles un proyecto que detecte si un humano es mutante basándose
en su secuencia de ADN.

Para eso te ha pedido crear un programa con un método o función con la siguiente firma (En lenguaje
NodeJs):

```
boolean isMutant(String[] dna);
```

En donde recibirás como parámetro un array de Strings que representan cada fila de una matriz de
(NxN) con la secuencia del ADN. Las letras de los Strings solo pueden ser: (A,T,C,G), las cuales
representan cada base nitrogenada del ADN. El patrón de la secuencia debe ser exacta (3
secuencias coloreadas) como se ve a continuación:

![Imagen enunciado challenge Aracar](https://i.imgur.com/HC4XAU5.png "Matrices No-Mutante y Mutante") 

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
