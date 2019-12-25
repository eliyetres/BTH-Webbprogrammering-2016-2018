#!/bin/bash
#
# Skapa ett skript if_2.bash som hanterar ett argument, en siffra, och skriver ut 
# “Higher!” om argumentet är högre än 5, “Lower!” om det är lägre och “Same!” om det är samma.
#

if [[ 5 -eq $1 ]]; then
	echo "Same!"
fi

if [[ 5 -lt $1 ]]; then
    echo "Higher!"
fi

if [[ 5 -gt $1 ]]; then
	echo "Lower!"
fi

