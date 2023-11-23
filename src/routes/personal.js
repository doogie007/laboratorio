const {Router} = require('express');
const _ = require('underscore');



const router = Router();



const liperson = require('../sample.json');

router.get('/',(req,res)=>{
    //res.send("Hola terriola");
    res.json(liperson);
});


router.post('/',(req,res)=>{
    //console.log(req.body);

if(nombre && website && edad && especialidad){
    
    const id = liperson.length + 1;
    const newPersonal = {...req.body,id};
    console.log(newPersonal);

    liperson.push(newPersonal);

    res.status(200).json(liperson);
}else{
    res.status(401).send("Datos incorrectos");
}

});



router.delete("/:id",(req,res)=>{
const {id} = req.params;    

    _.each(liperson,(person,i)=>{
        if(person.id==id){
            liperson.splice(i,1);
        }

    });

    res.status(200).json(liperson);
});


router.put('/:id',(req,res)=>{
    const {id} = req.params;
    const {nombre,website,edad,especialidad} = req.body;

    if(nombre && website && edad && especialidad){
        _.each(liperson,(person,i)=>{
            if(person.id == id){                
                person.nombre = nombre;
                person.website = website;
                person.edad= edad;
                person.especialidad = especialidad;
            }

            res.json(liperson);

        });

    }else{
        res.status(401).json({"Error":"Datos incompletos"});
    }

});





module.exports = router;