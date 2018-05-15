const csv = require('csv');
const fv = require('fs');
const bus = require('../models/BUS.js');

var datos = fs.createReadStream('../CSV/fms1-2017-10-01.csv');
var parser = csv.parse({
  delimiter:',',
  columns:true
});

var transform = csv.transform(function(row) {

  var resultado = {
    horaToma: row[0],
    Asset_id: row[1],
    A_Speed: row[7],
    Curr_fLevel: row[16],
    Curr_Temp: row[17]
  }
  bus.create(resultado)
  .then(function() {
      console.log('Record created')
    })
    .catch(function(err) {
      console.log('Error encountered: ' + err)
    })
});

input.pipe(parser).pipe(transform)
