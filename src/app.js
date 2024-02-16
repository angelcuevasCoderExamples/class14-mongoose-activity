const express = require('express');
const port = 3001; 
const estudiantesRouter = require('./routes/estudiantes.routes')
const mongoose = require('mongoose')

const app = express()

//al final de la url se indica el nombre de la base de datos [/colegio]
mongoose.connect('mongodb+srv://angelpablocuevas1989:EghP7p3eTEtgWPyu@codercluster.5ny2sqo.mongodb.net/colegio').then(()=>{
    console.log("connected")
})

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.listen(port, ()=>console.log(`up and running on port ${port}`))

app.use('/api/estudiantes', estudiantesRouter)