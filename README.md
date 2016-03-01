# Export & Imports Tickets From Jira For Planning Poker

## Setup Once

- `npm i` for dependencies
- Set `apiBaseUrl` in `config.js`
- Set Jira credentials in `config.js`
- Set project prefix in `config.js`
- Optionally tweak the points for sizes

## Run

- Run `./plan_poker.sh` which will open a page with links to your tickets, planningpoker.com and a list of tickets. copy those tickets to your clipboard and paste them into planning poker.
- Paste the ouput of planningpoker into `pasteResults/here.txt`
- Run `updateTickets.js`