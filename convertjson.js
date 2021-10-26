let pessoa = {
    "nome": "matheus",
    "idade": 20,
    "profissao": "programador",
    "hobbies": ["games", "leitura"]
}


let pessoaTexto = JSON.stringify(pessoa)
console.log(pessoaTexto)


let pessoaJSON = JSON.parse(pessoaTexto);
console.log(pessoaJSON)