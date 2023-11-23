const {Router} = require('express');
require('./config');
const router = Router();

const { usuarioModel } = require('../schemas/models');

//agregar un nuevo articulo
router.post('/', async (req, res) => {
    try {      
      const user_name = req.body?.user_name;
      const correo = req.body?.correo;
      const contrasenia = req.body?.contrasenia;
      const profile_pic = req.body?.profile_pic;
      const desc = req.body?.desc;
      const reputacion = req.body?.reputacion;
      
      const usuario = new usuarioModel({
        user_name,
        correo,
        contrasenia,
        profile_pic,
        desc,
        reputacion        
      });
  
      const save = await usuario.save();

      return res.status(200).json({ usuario: save });
    } catch (error) {

      console.log('Error', error);

      return res.status(500).json({ message: 'Internal server error' });
    }
  });




//optener todos los articulos.
router.get('/lista',async (req,res)=>{           
                try {   
                    let data =  await usuarioModel.find();
                    res.status(200).json(data);    
                    } catch (error) {            
                    console.log(error);
                    return res.status(402).json({ message: 'Datos incorrectos' });
                    }  
    });
      
//optener un articulo especifico
router.get('/:_id',async (req,res)=>{
           console.log(req.params);
           
        try {   
            let data =  await usuarioModel.find(req.params);
            res.status(200).json(data);    
            } catch (error) {            
            console.log(error);
            return res.status(402).json({ message: 'Datos incorrectos' });
            }
 
    
});










  module.exports = router;