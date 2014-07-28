var fs = require('fs');
var colors = require('colors');

exports.generateHulkenRequestsFile = function(path, server) {
  try {
    var hulken_requests = [];
    var table = server.table();
    for (var i = 0; i < table.length; i++) {

      if(table[i].method === "get"){
        var hulken_req = {
          method: table[i].method,
          path: table[i].path,
          expectedTextToExist: null
        };
        hulken_requests.push(hulken_req);
      }

    }

    fs.writeFile(path, JSON.stringify(
      hulken_requests), function(err) {
      if (err) throw err;
      console.log(
        'HulkenInformant created ' + path);
    });
  } catch (err) {
    console.log('HulkenInformant failed: '.red + err.toString().red);
  }

};
