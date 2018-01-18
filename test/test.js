const expect = require('chai').expect
//Requerimos platzom, si ponemos .. toma la ruta del main del archivo package.json
const platzom = require('..').default

describe('#platzom', function () {

    it('Si la palabra termina en "ar", se le quitan esos 2 caracteres', function () {
      const translation = platzom("Programar")
      expect(translation).to.equal("Program")
    })
  
    it('Si la palabra inicia con "z", se le añade "pe"s al final', function () {
        const translation = platzom("Zorro")
        const translation2 = platzom("Zarpar")
        expect(translation).to.equal("Zorrope")
        expect(translation2).to.equal("Zarppe")
    })
  
    it('Si la palabra traducida tiene 10 o más letras, se parte a la mitad con un guión medio', function () {
        const translation = platzom("abecedario")
        expect(translation).to.equal("abece-dario")
    })
  
    it('Si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayúsculas y minúsculas', function () {
        const translation = platzom("Neuquen")
        expect(translation).to.equal("NeUqUeN")
    })
  
  })