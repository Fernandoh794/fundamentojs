const validarDominio = /wwww.\w+\.com.br|.com/;


console.log(validarDominio.test("www.google.com"))

console.log(validarDominio.test("www.google.com.br"))


console.log(validarDominio.test("www.google"))