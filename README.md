hulken_informant_hapi
=========================

an informant for the stress test tool [hulken](https://github.com/hellgrenj/hulken) (works with hapi.js).  
this small module inspects your routes and generates a hulken requests file automatically.

##Installation
`npm install hulken_informant_hapi --save`
##Usage
```
var Hapi = require('hapi');
var server = new Hapi.Server(3000);
.
.
.
.
var hulkentInformant = require('hulken_informant_hapi');
 hulkenInformant.generateHulkenRequestsFile(‘./hulkenRequestsFile.json’, server);
```
an hulken_informant offers a quick and simple way to create a stress test suite by inspecting your application routes and auto generating the requests file for you!

It has, however, it’s drawbacks:
* It can only include GETs (it has no way of figuring out what payload to send with the POST etc.)
* It can not offer an expectedTextToExist value for each request, leaving Hulken with only the HTTP status code to rely on when verifying responses.
