import express from 'express';
import middleware from '../middleware';
import inicializedDB from '../db.js'; //Inicializará la conexion a la bd
import config from '../config';

let router = express.Router();

inicializedDB(db=>{
  //Middleware to connect to db
  router.use(middleware({config,db}));

  //api routes /v1

});

export default router;
