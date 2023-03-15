require('dotenv').config();
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require("axios")
const {Formulario} = require('../db')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getInfo = async () => {
    var nada =await Formulario.findAll()

    return nada
}

router.get('/formularios', async (req,res) => {
    let infoTotal = await getInfo()
    console.log(infoTotal)
    res.status(200).send(infoTotal)
})

router.post('/formularios', async (req,res) => {
    try{
        const {
            name,
            lastName,
            email,
            dni,
            consulta
        } = req.body;
    
        const postForm = await Formulario.create ({
            name,
            lastName,
            email,
            dni,
            consulta
        })
        // const newRegistro = await Formulario.create({ name });
        // await newRegistro.createLastName({ lastName });
        // await newRegistro.createLastName({ email });
        // await newRegistro.createDni({ dni });
        // await newRegistro.createLastName({ consulta });

        res.status(201).send('Registro creado con éxito');
    }catch (error) {
        console.error(error);
        res.status(500).send('Error al crear registro');
      }

})





module.exports = router;
