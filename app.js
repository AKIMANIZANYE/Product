

const express = require('express');
const app  =express();

const http = require('http');
const request = require('request');

app.get('/request',()=> {   
    console.log('request  is good');
 
});

request('http://dev.mobivat.com:8080/vsdc_module/mobivat/api/product/productId?upc=224444445', { json: true }, (err, res, body) => {
  if (err)
   { return console.log(err); }
  console.log(body.url);

});

http.get('http://dev.mobivat.com:8080/vsdc_module/mobivat/api/product/productId?upc=224444445', (resp) => {
  
let data = '';
  resp.on('data', (result) => {
    data += result;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data));
    

 });
    


});






app.listen(3000,() => {console.log('starting server');
});