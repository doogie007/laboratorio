const mongoose = require('mongoose');
const { articuloSchema, usuarioSchema } = require('./schemas');

const articuloModel = mongoose.model('articulo', articuloSchema);
const usuarioModel = mongoose.model('usuario', usuarioSchema);


module.exports = {
  articuloModel, usuarioModel
};
