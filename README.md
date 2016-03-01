# Export & Imports Tickets From Jira For Planning Poker

## Setup Once

- `npm i` for dependencies
- add `T-Shirt Size` field in Jira with options `xxs,xs,s,m,l,xl,xxl`
- Set `apiBaseUrl` in `config.js`
- Set `projectPrefix` in `config.js`
- Set Jira `pointsField` in config.js - if you don't know this name you can often find it by attempting to search in the gui
- Set Jira `shirtField` in config.js - if you don't know this name you can often find it by attempting to search in the gui
- Set Jira credentials in `config.js`

- Optionally tweak the points for sizes

## Run

- Run `./plan_poker.sh` which will open a page with links to your tickets, planningpoker.com and a list of tickets. copy those tickets to your clipboard and paste them into planning poker.
- Paste the ouput of planningpoker into `pasteResults/here.txt`
- Run `updateTickets.js`