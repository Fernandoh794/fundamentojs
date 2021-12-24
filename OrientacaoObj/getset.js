const cachorro = {
    raca: 'SRD',
    uivar: function() {
        console.log("AUUUUUUUUUUUUU")
    },
    rosnar: function() {
        console.log("GRRRRR")
    },
    setRaca: function(raca) {
        this.raca = raca;
    }
}


cachorro.setRaca("Pastor Alemao")
console.log(cachorro.raca)

