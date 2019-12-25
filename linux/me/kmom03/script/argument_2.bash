#!/bin/bash
#
# Skapa ett script argument_2.bash som hanterar olika argument.
# Om argumentet är “d” så ska “date” skrivas ut, dvs dagens datum
# Om argumentet är “n” ska scriptet skriva ut alla siffror från 1 till 20, tips: {1..20}.
# Om argumentet är “a” ska nästa argument skrivas ut, om man skickar in två argument. 
# Om man inte skickat in två argument skall följande skrivas ut “Missing argument”.
#

if [[ $1 = "d" ]]; then
    date +"%d-%m-%y"
fi

if [[ $1 = "n" ]]; then
	echo {1..20}
fi

if [[ $1 = "a" ]]; then
	if [[ $2 ]]; then
		echo "$2"		
	else
		echo "Missing argument"
	fi
fi
