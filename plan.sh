#!/bin/bash
echo "Searching for Tickets"

# run the node script
pushd script
node findTicketsToEstimate.js
popd

# open the helper files and app to plan
open out/linkSheet.html
open https://www.planningpoker.com/dashboard
open out/pokerInput.html
touch pasteResults/here.txt
rm pasteResults/here.txt
touch pasteResults/here.txt
open pasteResults/here.txt

read -p "Press any key to process results... " -n1 -s
echo
pushd script
node updateTickets.js
popd