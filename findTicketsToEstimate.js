var request = require('request'),
          _ = require('lodash'),
         fs = require('fs'),
     config = require('./config');

// setup the Jira API call
var callApi = {
 url: 'https://socialtables.atlassian.net/rest/api/2/search',
 auth: {
   user: config.credentials.username,
   pass: config.credentials.password,
   sendImmediately: true
 },
 qs: {
   jql: 'project = "'+config.projectPrefix+'" and "Story Points" = EMPTY AND issuetype in (Bug, Story, Task) AND status != Done'
 }
};

// stolen from http://stackoverflow.com/questions/1787322/htmlspecialchars-equivalent-in-javascript
// function escapeHtml(text) {
//   var map = {
//     '&': '&amp;',
//     '<': '&lt;',
//     '>': '&gt;',
//     '"': '&quot;',
//     "'": '&#039;'
//   };
//   return text.replace(/[&<>"']/g, function(m) { return map[m]; });
// }

// build a file that we can open in chrome and copy and paste into planningpoker.com
function pokerInput(issues){
  var html = [];
  for (index in issues){
    var issue = issues[index];
    // html.push(escapeHtml('<a href=\'https://socialtables.atlassian.net/browse/'+issue.key+'\'>'+issue.key+' - '+issue.name+'</a>'));
    html.push(issue.key+' - '+issue.name);
  }
  var htmlString = html.join('<br>');
  fs.writeFile('out/pokerInput.html', htmlString);
}

// build a file we can open in chrome and use the links to review issues
function linkSheet(issues){
  var html = [];
  var rand = ~~(Math.random()*1000);

  for (index in issues){
    var issue = issues[index];
    html.push('<a href="https://socialtables.atlassian.net/browse/'+issue.key+'#'+rand+'" target="_blank">'+issue.key+' - '+issue.name+'</a>');
  }
  var htmlString = html.join('<br><br>');
  fs.writeFile('out/linkSheet.html', htmlString);
}

// process the results of API call
function processApi(error, response, body) {
  if (!error && response.statusCode == 200) {
    var jsonBody = JSON.parse(body);
    var issues = [];

    // loop through the issues and grab the keys
    for (index in jsonBody.issues){

      var issue = jsonBody.issues[index];

      issues.push({
        key: issue.key,
        name: issue.fields.summary,
      });

    }

    // sort the keys so issues are in order created
    issues = _.sortBy(issues, ['key']);
    // console.log(issues)

    // build our output
    pokerInput(issues);
    linkSheet(issues);

  } else {
    console.log('error will robinson', error, response.statusCode, body)
  }
}

// process the API request
request(callApi, processApi);
