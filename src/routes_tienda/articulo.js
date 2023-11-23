const {Router} = require('express');

require('./config');
const router = Router();


const { articuloModel } = require('../schemas/models');


//optener todos los articulos.
router.get('/lista',async (req,res)=>{
           
                try {   
                    let data =  await articuloModel.find();
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
            let data =  await articuloModel.find(req.params);
              res.status(201).json(data);    
            } catch (error) {            
            console.log(error);
            return res.status(402).json({ message: 'Datos incorrectos' });
            }
 
    
});


//agregar un nuevo articulo
router.post('/', async (req, res) => {
    try {
      
      const nombre = req.body?.nombre;
      const precio = req.body?.precio;
      const descripcion = req.body?.descripcion;
      const lista_deseos = req.body?.lista_deseos;
      const correo_contacto = req.body?.correo_contacto;
      const id_etiquetas = req.body?.id_etiquetas;
      const id_estado = req.body?.id_estado;

      if (!nombre) {
        return res.status(400).json({ message: 'Bad request, name or age not found' });
      }

      const articulo = new articuloModel({       
        nombre,
        precio,
        descripcion,
        lista_deseos,
        correo_contacto,
        id_etiquetas,
        id_estado
      });
  
      const save = await articulo.save();

      return res.status(201).json({ articulo: save });
    } catch (error) {
      console.log('Error', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });


//Modificar un articulo.
  router.put("/:_id", async (req,res)=>{
    const {_id} = req.params;    
        console.log(req.params)
       if(_id){
        try {   

        let data =  await articuloModel.updateOne(req.params,
            {
                $set:req.body
            }
            );
        res.status(200).json(data);

        } catch (error) {        
        console.log(error);
        return res.status(402).json({ message: 'Datos incorrectos' });
        }

       }else{
        res.status(400).json({error: "Debe ingresar un Id"});
       }
    });


//Eliminar un articulo especifico.
  router.delete("/:_id", async (req,res)=>{
    const {_id} = req.params;    
        console.log(req.params)
       if(_id){
        let data = await articuloModel.deleteOne(req.params);
        res.status(200).json(data);

       }else{
        res.status(400).json({error: "Debe ingresar un Id"});
       }    
    });

module.exports = router;