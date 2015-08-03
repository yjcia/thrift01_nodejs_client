/**
 * Created by YanJun on 2015/7/30.
 */
var thrift = require('thrift');

var HelloService = require('./gen-nodejs/HelloService.js'),
    ttypes = require('./gen-nodejs/hello_types.js');

var connection = thrift.createConnection('127.0.0.1', 9009);
var client = thrift.createClient(HelloService, connection);

connection.on('error', function (err) {
    console.error(err);
});

client.getHelloInterface('Hello', 'World', function (err, response) {
    if ("undefined" != response.toString()) {
        console.log(response);
    }
});