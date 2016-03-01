# Export & Imports Tickets From Jira For Planning Poker

## Setup Once

- `npm i` for dependencies
- add `T-Shirt Size` field in Jira with options `xxs,xs,s,m,l,xl,xxl`
- Set `apiBaseUrl` in `/script/config.js`
- Set `projectPrefix` in `/script/config.js`
- Set Jira `pointsField` in /script/config.js - if you don't know this name you can often find it by attempting to search in the gui
- Set Jira `shirtField` in /script/config.js - if you don't know this name you can often find it by attempting to search in the gui
- Set Jira credentials in `/script/config.js`
- Optionally tweak the points for sizes

## Run

- Run `./plan_poker.sh` which will open a page with links to your tickets, planningpoker.com and a list of tickets. copy those tickets to your clipboard and paste them into planning poker.
- Paste the ouput of planningpoker into `pasteResults/here.txt` which should be open
- Return to your terminal window and hit a key which will run `updateTickets.js`