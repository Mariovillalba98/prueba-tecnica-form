require('dotenv').config();
const { Router } = require('express');
// Importar todos los routers;

const axios = require("axios")
const {Formulario} = require('../db')

const router = Router();

// Configurar los routers


const getInfo = async () => {
    var nada =await Formulario.findAll()

    return nada
}

const getInfoDni = async () => {
    const registros = await Formulario.findAll({
      attributes: ['dni']
    });
    return registros.map(registro => registro.dni);
  }

  router.get('/documentos', async (req, res) => {
    try {
      const dnise = await getInfoDni();
      console.log(dnise);
      res.status(200).send(dnise);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al obtener DNIs');
    }
  });

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
        res.status(201).send('Registro creado con éxito');
    }catch (error) {
        console.error(error);
        res.status(500).send('Error al crear registro');
      }

})





module.exports = router;
