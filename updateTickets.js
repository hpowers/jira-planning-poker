var request = require('request'),
         fs = require('fs'),
     config = require('./config');

function updateJira(key,size){

  var points = config.points[size];

  var fields = {};
  fields[config.pointsField] = points;
  fields[config.shirtField] = {value:size};

  var callApi = {
   url: config.apiBaseUrl+'/rest/api/2/issue/'+key,
   method: 'PUT',
   auth: {
     user: config.credentials.username,
     pass: config.credentials.password,
     sendImmediately: true
   },
   json: {
     fields: fields
   }
  };

  request(callApi, function(error, response){
    if (response.statusCode !== 204){
      console.log('Error updating',key,' - ',response.statusCode);
    } else {
      console.log('updated',key,'with',points,'points.');
    }
  });

}

// process the results
fs.readFile('pasteResults/here.txt', 'utf8', function (err,data) {

  var line, size, id;
  // break into array of lines
  var lines = data.match(/[^\r\n]+/g);
  // regex to find tickets
  var regex = new RegExp(config.projectPrefix + '-\\d+', 'gm');

  // process the lines
  for (lineIndex in lines) {

    // reset everything
    line = id = size = null;
    // reset index on regex as its stateful
    regex.lastIndex = 0;

    // grab the line
    line = lines[lineIndex];

    // extract the id
    id = regex.exec(line);

    if (id){
      // find the size
      size = /\s+\S*$/gm.exec(line)[0].trim();
      if (size){
        updateJira(id[0],size)
      }
    }

  }

});
