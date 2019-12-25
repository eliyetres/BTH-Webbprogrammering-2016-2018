#!/bin/bash
#
# Skapa ett skript if_1.bash som hanterar ett argument, en siffra, 
# som kollar om argumentet är större än 5 med hjälp av en if-sats. 
# Ex: ./ 7 ska returnera “7 is greater than 5” och ./if_1.bash 3 ska returnera 
# “3 is NOT greater than 5”.
#

if [[ 5 -le $1 ]]; then
    echo "$1 is greater than 5"
else
	echo "$1 is NOT greater than 5" 
fi
