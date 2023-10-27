const express = require('express')
const actors = require('./routes/actors');
const path = require('path');

const app = express();

app.use(express.json());

const PORT = 3302;

app.use('/actors',actors);

app.listen(PORT,()=>{
	console.log(`Ejecutando la aplicacion en el puerto ${PORT}`)
});
