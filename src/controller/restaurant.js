import mongoose from 'mongoose';
import {Router} from 'express';
import Restaurant from '../model/restaurant';

export default({config,db}) => {
  let api = Router();

  // Url /v1/restaurant/add
  api.post('/add', (req,res) => {
    let newRest = new Restaurant();
    newRest.name = req.body.name;

    newRest.save(err => {
      if (err) {
        res.send(err);
      }
      res.json({'message':'Restaurant save successfully'});
    });
  });

  api.get('',(req,res) => {
    Restaurant.find({},function(err,restaurants) {
      if (err) {
        res.send(err);
      }
      res.json(restaurants);
    });
  });

  api.get('/:restaurant_id',(req,res) => {
    Restaurant.findById(req.params.restaurant_id,(err,restaurant) => {
      if(err){ res.send(err) }
      res.json(restaurant);
    });
  });

  api.put('/:restaurant_id',(req,res) => {
    Restaurant.findById(req.params.restaurant_id, (err, restaurant) => {
      if (err) {
        res.send(err);
      }
      restaurant.name = req.body.name;
      restaurant.save( err => {
        if (err) {
          res.send(err);
        }
        res.json({"message":"Restaurant successfully updated!"});
      });
    });
  });

  api.delete('/:restaurant_id',(req,res) => {
    Restaurant.remove({_id:req.params.restaurant_id}, (err,restaurant) => {
      if (err) {
        res.send(err);
      }
      res.json({"message":"Restaurant successfully deleted!"});
    });
  });

  return api;
}
