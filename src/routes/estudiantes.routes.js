const {Router} = require('express')
const EstudiantesModel = require('../models/estudiantes')

const router = Router()

const students = [{
    "nombre": "Steffen",
    "apellido": "Terzo",
    "edad": 36,
    "dni":"15691240",
    "curso":"Programación Backend",
    "nota":9
  }, {
    "nombre": "Jorgan",
    "apellido": "Matthis",
    "edad": 27,
    "dni":"29358120",
    "curso":"Programación Frontend",
    "nota":6
  }, {
    "nombre": "Haley",
    "apellido": "Proback",
    "edad": 34,
    "dni":"51241268",
    "curso":"Diseño UX/UI",
    "nota":7
  }, {
    "nombre": "Michelina",
    "apellido": "Beaglehole",
    "edad": 34,
    "dni":"24614567",
    "curso":"Diseño UX/UI",
    "nota":6
  }, {
    "nombre": "Jeralee",
    "apellido": "Postans",
    "edad": 26,
    "dni":"97212450",
    "curso":"Programación Frontend",
    "nota":6
  }, {
    "nombre": "Jordain",
    "apellido": "Kerner",
    "edad": 35,
    "dni":"41262234",
    "curso":"Programación Backend",
    "nota":5
  }, {
    "nombre": "Harriett",
    "apellido": "Skeene",
    "edad": 33,
    "dni":"21245129",
    "curso":"Programación Backend",
    "nota":10
  }, {
    "nombre": "Andie",
    "apellido": "McIlrath",
    "edad": 20,
    "dni":"59127389",
    "curso":"Programación Frontend",
    "nota":9
  }, {
    "nombre": "Sapphira",
    "apellido": "Arnholtz",
    "edad": 17,
    "dni":"03128893",
    "curso":"Programación Backend",
    "nota":5
  }, {
    "nombre": "Terra",
    "apellido": "Wadsworth",
    "edad": 31,
    "dni":"02213850",
    "curso":"Diseño UX/UI",
    "nota":10
  }]

router.get('/insertion',async (req, res)=>{
    const result = await EstudiantesModel.insertMany(students)
    res.send({result})
})

router.get('/',async(req, res)=>{
    const estudiantes = await EstudiantesModel.find()
    res.send({status:'success', users:estudiantes})
})

router.post('/',async(req, res)=>{
    try {
        await EstudiantesModel.create(req.body)
        res.send({status:'suscess'})
    } catch (error) {
        res.status(400).send({message:'Incomplete data'})
    }
})

router.put('/:eid',async(req, res)=>{
    const {eid} = req.params; 

    const {nombre, apellido, edad, dni, curso, nota } = req.body; 
    await EstudiantesModel.updateOne({_id:eid}, {nombre, apellido, edad, dni, curso, nota })

    res.send({status:'suscess'})
})

router.delete('/:eid',async(req, res)=>{
    const {eid} = req.params; 

    await EstudiantesModel.deleteOne({_id:eid})

    res.send({status:'suscess'})
})


module.exports = router;