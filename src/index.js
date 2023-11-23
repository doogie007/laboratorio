const express = require('express');
const morgan = require('morgan');
const app = express();

//settings
app.set('port',process.env.PORT || 4000);
app.set('json spaces',2);


//app.use(morgan('dev'));
app.use(morgan('combined'));

//permitir json
app.use(express.urlencoded({extended:false}));
app.use(express.json());


//routes
//app.use('/api/index',require('./routes/index'));
//app.use('/api/personal',require('./routes/personal'));

app.use('/api/articulo',require('./routes_tienda/articulo'));
app.use('/api/usuario',require('./routes_tienda/usuario'));


//Levantar el servidor
app.listen(app.get('port'),() => {
    console.log(`Server on port ${app.get('port')}`);
});

