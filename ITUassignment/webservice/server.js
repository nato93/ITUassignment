const http = require('http');
const fs = require('fs');
const port = 3000
const data = fs.readFileSync('subjects.json', 'utf-8');

//creates the server
const server = http.createServer(function (request, res) {
  res.setHeader('Content-Type', 'application/text');
//Allows any client to access server
  res.setHeader("Access-Control-Allow-Origin", "*");
  //http://127.0.0.1:5500

  res.end(data);
});


//Server listens at port 3000
server.listen(3000, function (error) {

  if(error){
    console.log('Something went wrong');
  } else{
    console.log('Server running at http://localhost:3000');

  }
});
