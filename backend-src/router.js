const handlers = require('./handlers.js');

const router = (request, response) => {
  const {
    url
  } = request;
  if (url === '/') {
    handlers.homepageHandler(request, response);
  } else if (url.startsWith('/public') || url.startsWith('/frontend-src')) {
    handlers.publicHandler(request, response);
  } else if (url === '/insertData') {
    handlers.insertData(request, response);
  }
  else if (url === '/viewData') {
    handlers.viewData(request, response);
  }  else {
    response.writeHead(404);
    response.end('PAGE NOT FOUND!!!!!!!!!!');
  }
};
module.exports = router;
