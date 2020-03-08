import express from 'express';
import middleware from '../middleware';
import inicializedDB from '../db.js'; //Inicializará la conexion a la bd
import config from '../config';
import restaurant from '../controller/restaurant';

let router = express.Router();

inicializedDB(db=>{
  //Middleware to connect to db
  router.use(middleware({config,db}));

  //Test connection
  router.get('/',(req,res)=>{
    res.json({"message":"Hi"});
  });

  //api routes /v1
  router.use('/restaurant',restaurant({config,db}));

});

export default router;
