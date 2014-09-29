#!/usr/bin/env node
var request=require('request');
var os =require('os');
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(data) {
    var r = request.post('http://localhost:3000/', function optionalCallback (err, httpResponse, body) {
        if (err) {
            return console.error('upload failed:', err);
        }
        process.stdout.write(body);
    });
});