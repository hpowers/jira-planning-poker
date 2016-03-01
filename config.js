var config = {};

try {
  // optionally store your credentials in a seperate file
  var credentials = require('./credentials')
} catch(er){}

config.projectPrefix = 'IN';

config.credentials = credentials || {
  // note Jira username is usually not email address
  username: 'Jira username',
  passwprd: 'Jira password'
};

config.points = {
  'xxs':0,
   'xs':1,
    's':2,
    'm':4,
    'l':8,
   'xl':16,
  'xxl':32
};

module.exports = config;