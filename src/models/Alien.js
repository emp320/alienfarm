/* eslint-disable new-cap */

import fs from 'fs';
import path from 'path';
import uuid from 'uuid';

const file = path.join(__dirname, '../../data/aliens.json');

function Alien(o) {
  this.id = uuid.v1();
  this.name = o.name;
  this.photo = o.photo;
  this.planet = o.planet;
}

module.exports = Alien;

Alien.prototype.save = function save() {
  fs.writeFileSync(file, `${JSON.stringify(this)}\n`, { flag: 'a' });
};

Alien.find = function find() {
  let data = fs.readFileSync(file, { encoding: 'utf8' });
  data = data.split('\n');
  data.pop();
  const output = data.map(d => JSON.parse(d));
  return output;
};

Alien.find = function find(id) {
  let data = fs.readFileSync(file, { encoding: 'utf8' });
  data = data.split('\n');
  data.pop();
  const aliens = data.map(d => JSON.parse(d));

  if (id) {
    console.log(id);
    return aliens.find(a => a.id === id);
  }
  return aliens;
};
