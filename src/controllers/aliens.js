/* eslint-disable new-cap */

import express from 'express';
import Alien from '../models/Alien';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  const aliens = Alien.find();
  res.render('aliens/index', { aliens });
});

router.get('/new', (req, res) => {
  res.render('aliens/new');
});

router.get('/:id', (req, res) => {
  const alien = Alien.find(req.params.id);
  res.render('aliens/show', { alien });
});

router.post('/', (req, res) => {
  const alien = new Alien(req.body);
  alien.save();
  res.redirect('/aliens');
});
