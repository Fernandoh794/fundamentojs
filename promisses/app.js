var minhaPromisse = function () {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.github.com/users/Fernandoh794"); // fazer a requisição
    xhr.send(null);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if(xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText))
        } else {
            reject('Erro')
        }
      }
    };
  });
};



var result = minhaPromisse();
console.log(result)