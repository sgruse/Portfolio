// var express = require('express');
// var app = express();
//
// var port = 3000;
//
// app.use(express.static('./builds'));
//
// app.listen(function() {
//   console.log('SERVER STARTED ON PORT : ', port);
// })


'use strict';
require('express')().use(require('express')
  .static(__dirname + '/builds')).listen(process.env.PORT || 8080, () => console.log('Client Server Up on 8080'));
