'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = platzom;
function platzom(str) {
    //Si ejecutamos métodos sobre los strings, no se modifican, por eso hay que asignarlo a una variable
    var translation = str;

    //Si la palabra original es un palíndromo, ninguna regla anterior cuenta
    //se devuelve palabra intercalando mayúsculas y minúsculas
    //Se crea una funcion que con split convierte el string en un array para poder acceder a la funcion reverse, que le da la vuelta y luego con join volvemos a pegar todos los caracteres en un string.
    var reverse = function reverse(str) {
        return str.split('').reverse().join('').toLowerCase();
    };

    function minMay(str) {
        var length = str.length;
        var translation = '';
        var capitalize = true;
        for (var i = 0; i < length; i++) {
            var char = str.charAt(i);
            translation += capitalize ? char.toUpperCase() : char.toLowerCase();
            capitalize = !capitalize;
        }
        return translation;
    }
    //Esta funcion comprueba si el string es igual al string al string que devuelve la funcion reverse. Si es así
    if (str.toLowerCase() == reverse(str)) {
        return minMay(str);
    }

    //Si la palabra termina en 'ar', se le quitan esos 2 caracteres
    //Se usa toLowerCase primero por si la palabra se ha escrito en mayúsculas, hace la comprobación con todo en minúsculas
    if (str.toLowerCase().endsWith('ar')) {
        // slice parte el string del primer punto que le digamos, en este caso 0, hasta dos menos del final -2
        translation = str.slice(0, -2);
    }

    //Si la palabra inicia con 'z', se le añade 'pe' al final
    if (str.toLowerCase().startsWith('z')) {
        //Esto es lo mismo que escribir: translation = translation + 'pe'
        translation += 'pe';
    }

    //Si la palabra traducida tiene 10 o más letras, partir a la mitad con un guión medio
    var length = translation.length;
    if (length >= 10) {
        var firstHalf = translation.slice(0, Math.round(length / 2));
        var secondHalf = translation.slice(Math.round(length / 2));
        translation = firstHalf + '-' + secondHalf;
    }

    return translation;
}