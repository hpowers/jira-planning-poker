#!/bin/bash
echo "Searching for Tickets"

# run the node script
node findTicketsToEstimate.js

s PastePokerOutHere

# open the helper files and app to plan
open linkSheet.html
open https://www.planningpoker.com/dashboard
open pokerInput.html
