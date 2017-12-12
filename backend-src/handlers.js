// const staticHero = require('./static');
// const getData = require('./dynmic');
// module.exports = (req,res)=>{
//   const endpoint  = req.url.split('/')[1];
//   if (endpoint === 'static') {
//   const staticData = JSON.stringify(staticHero);
//   res.writeHead(200,{'Content-type':'application/json'});
//   res.end(staticData);
//   }
//   else if(endpoint === 'dynmic'){
//     getData((err,data)=>{
//       if(err) console.log(err);
//       const dynmicData = JSON.stringify(data);
//       res.writeHead(200,{'Content-type':'application/json'});
//       res.end(dynmicData);
//     })
//   }
// };
const fs = require('fs');
const path = require('path');
const homepageHandler = (req, res) => {
  fs.readFile(path.join(__dirname, '..', 'public', 'index.html'), (err, file) => {
    if (err) {
      res.writeHead(500, { 'content-type': 'text/html' });
      res.end('<h1>SERVER ERROR</h1>');
    } else {
      res.writeHead(200, { 'content-type': 'text/html' });
      res.end(file);
    }
  });
};

const publicHandler = (req, res) => {
  const { url } = req;
  const extension = url.split('.')[1];
  const filetype = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    json: 'application/json',
    img: 'image/png',
  };

  fs.readFile(path.join(__dirname, '..', url), (err, file) => {
    if (err) {
      res.writeHead(500, { 'content-type': 'text/html' });
      res.end('<h1>SERVER ERROR</h1>');
    } else {
      res.writeHead(200, `Content-Type:${filetype[extension]}`);
      res.end(file);
    }
  });

};
const getdata = (req, res) => {
  var allData = '';
  req.on('data', function(chunkOfData) {
     allData += chunkOfData;
  });
  req.on('end', function() {
    console.log("allData vallDataallData",JSON.parse(allData));
    res.writeHead(200, 'content-Type: text/html');
    res.end(allData);

  });
    }


module.exports = {
  publicHandler,
  homepageHandler,
getdata
}
