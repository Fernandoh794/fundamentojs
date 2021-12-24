axios.get('https://api.github.com/users/Fernando794')
.then(function(response){
    console.log(response)
})
.catch(function(error){
    console.log(error)
})