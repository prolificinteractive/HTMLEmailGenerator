module.exports = {
  //**********************************
  // CONFIGURATION
  //**********************************
  "webStorage" : "SOMEPLACE YOU LINK ASSETS FROM",
  "filename" : "template.jade",
  "mailerAccount" : "MAILER ACCOUNT",
  "mailerPassword": "MAILER ACCOUNT PASSWORD",

  //**********************************
  // CONTENT
  //**********************************
  "pageTitle": "There's a new P!",
  "pronoun": "his",
  "image": "http://images.contentful.com/d0b7y6oe9s75/4ifCPfjUgMesoGAOMieeUW/fcda1dbd57eb6b22dc3938cd8b53b8f1/Shiraj_Ganguly_158.jpg",
  "jobTitle": "Frontend Engineer",
  "firstName": "Shiraj",
  "lastName": "Ganguly",
  "email": "shiraj@prolificinteractive.com",
  "location": "bk",
  "bkBackground": "https://upload.wikimedia.org/wikipedia/commons/0/00/Brooklyn_Bridge_Manhattan.jpg",
  "sfBackground": "http://imgsrv.legends1027.com/image/wlgz/UserFiles/Image/Wiki%20Corner/golden%20gate%20bridge.jpg",
  "sections": [
    {
      "icon": "originally_from.png",
      "title": "Originally from",
      "content": "Staten Island, NY",
      "class": "normal"
    },
    {
      "icon": "currently_lives_in.png",
      "title": "Currently Lives in",
      "content": "Manhattan",
      "class": "normal"
    },
    {
      "icon": "previous_experience.png",
      "title": "Previous Experience",
      "content": "What you used to do before",
      "class": "normal"
    },
    {
      "icon": "stats.png",
      "type": "stats",
      "title": "Stats",
      "class": "stats",
      "content": [
        {
          "name": "Strength",
          "value": "Very high"
        },
        {
          "name": "Dexterity",
          "value": "Very high"
        },
        {
          "name": "Hit Points",
          "value": "Very high"
        }
      ]
    },
    {
      "icon": "truths_and_a_lie.png",
      "type": "truthsAndALie",
      "title": "3 Truths and a lie",
      "content": [
        "His favorite beer is coors light.", 
        "His favorite movie is the Matrix",
        "He once got sprayed by 3 skunks",
        "His favorite food is escargot"
      ],
      "class": "normal"
    },
    {
      "icon": "favorite_apps.png",
      "type": "favoriteApps",
      "title": "Favorite Apps",
      "content": ["Instagram", "evernote", "snapchat"],
      "class": "normal"
    }
  ]
};
