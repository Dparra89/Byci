const datosUsuarios = [
    {
        nombre:"Flavia",
        password:"1234"
    },
    {
        nombre:"Laura",
        password:"1234"
    },
    {
        nombre:"Sandra",
        password:"1234"
    },
    {
        nombre:"Virginia",
        password:"1234"
    },
    {
        nombre:"Clara",
        password:"1234"
    }
]

console.log(datosUsuarios)

const soloPassword = datosUsuarios.map(function(p){
    return p.password
})

console.log(soloPassword)