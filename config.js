var credentials = require('./credentials'),
         config = {};

config.projectPrefix = 'IN';

config.credentials = credentials;

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