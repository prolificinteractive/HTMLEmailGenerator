var jade = require('jade');
var fs = require('fs');
var json = require('./data.json');
var template = fs.readFileSync('template.jade', 'utf8');
fs.writeFileSync('rendered.html',jade.render(template, json));
