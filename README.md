# Platzom

Platzom es un idioma inventado para el [Curso de Fundamentos de JavaScript](https://platzi.com/js) de [Platzi](https://platzi.com/).

## Descripción del idioma

- Si la palabra termina en 'ar', se le quitan esos 2 caracteres
- Si la palabra inicia con 'z', se le añade 'pe' al final
- Si la palabra traducida tiene 10 o más letras, se parte a la mitad con un guión medio
- Por último, si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayúsculas y minúsculas

## Instalación

```
npm install platzom
```

## Uso

```
import platzom from 'platzom'

console.log(platzom("Programar")) // Program
console.log(platzom("zapato")) // zapatope
console.log(platzom("zorro")) // zorrope
console.log(platzom("Zarpar")) // Zarppe
console.log(platzom("abecedario")) // abece-dario
console.log(platzom("abecedarios")) // abeced-arios
console.log(platzom("Neuquen")) // NeUqUeN
```

## Créditos

- [Fernanda Walker](https://fernandawr.com)

## Licencia

[MIT](https://opensource.org/licenses/MIT)