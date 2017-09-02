require('babel-register')({
    presets:['react']
});
const Firebase_functions = require('firebase-functions');


const server = require('./modules/app.js');

// var port = 5000;
// server.listen(port,function(){
//     console.log('http://localhost:'+port);
// })

exports.server = Firebase_functions.https.onRequest(server);