const mongoose = require('mongoose');

const articuloSchema = new mongoose.Schema({

  nombre: {
    type: String,
    required: true
  },
  precio: {
    type: Number,
    required: true
  }
  ,
  descripcion: {
    type: String,
    required: true
  },
  lista_deseos: {
    type: String,
    required: false
  }
  ,
  correo_contacto: {
    type: String,
    required: true
  }
  ,
  id_etiquetas: {
    type: Number,
    required: true
  }
  ,
  id_estado: {
    type: Number,
    required: true
  }
  


});


const usuarioSchema = new mongoose.Schema({
    user_name: {
      type: String,
      required: true
    },
    correo: {
      type: String,
      required: true
    },
    contrasenia: {
      type: String,
      required: true
    },
    profile_pic: {
      type: String
    },
    desc: {
        type: String,
        required: false
    },
    reputacion: {
        type: Number,
        required: false
      }
  });

module.exports = {
    articuloSchema, usuarioSchema
}