var jade = require('jade');
var Promise = require('bluebird');
var nodemailer = require('nodemailer');
var sass = Promise.promisifyAll(require('node-sass'));
var fs = Promise.promisifyAll(require('fs'));
var _ = require('lodash');
var juice = require('juice');
var config = require('./config');

sass.renderAsync({
  file: 'style.scss',
  outputStyle: 'compressed',
  outFile: 'style.css'
})
.then(function(compiledCSS){
  return fs.writeFileAsync('style.css', compiledCSS.css)
  .then(function(){
    return jade.renderFile( './template.jade', config );  
  });
})
.tap(function (renderedHTML) {
  fs.writeFileAsync('rendered.html', renderedHTML);
})
.then(function(renderedHTML){
  if(process.argv[2] ==='send'){

    var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: config.mailerAccount,
        pass: config.mailerPassword
      }
    });

    var mailOptions = {
      from: 'Mailer <account@whateverdomain.com>', // sender address
      to: 'shirajganguly@gmail.com', // list of receivers
      subject: "There's a new P", // Subject line
      text: "Theres a new P", 
      html: juice( renderedHTML, {
        inlinePseudoElements: true
      })
    };

    transporter.sendMail(mailOptions, function(error, info){
      if(error){
          console.log(error);
      }else{
          console.log('Message sent: ' + info.response);
      }
    });
  }
})
.catch(function(err){
  console.log("There was an error: ", err);
});

