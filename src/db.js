import mongoose from 'mongoose';
import config from './config';

//Otros cambios aquí

//DB CHANGE

//Cuando se importe esto conectará a nuestra BD
export default callback => {
  let db = mongoose.connect(config.mongoUrl);
  callback(db);
}
//Otros cambios acá
