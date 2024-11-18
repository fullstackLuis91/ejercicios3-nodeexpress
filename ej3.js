const express = require ("express")
app = express ()
const PORT = 8080
let products = [

    { id: 1, nombre: 'Taza de Harry Potter' , precio: 300},
    { id: 2, nombre: 'FIFA 23 PS5' , precio: 1000},
    {  id: 3, nombre: 'Figura Goku Super Saiyan' , precio: 100},
    {  id: 4,  nombre: 'Zelda Breath of the Wild' , precio: 200},
    {  id: 5,  nombre: 'Skin Valorant' , precio: 120},
    {  id: 6, nombre: 'Taza de Star Wars' , precio: 220}

]

app.get ("/products", (req,res) => {

    res.send (products)

})

app.post ("/ceateNewProduct", (req,res) => {
 console.log(req.body)
   

})


    
 

app.listen (PORT, () => console.log ("servidor levantado en el puerto" + PORT))