#!/bin/bash
#
# Skapa ett script myFunction.bash som innehåller en funktion, greet(). 
# Kalla på funktionen som ska skriva ut “Hello $USER”.
#

function greet
{
	echo "Hello $USER"
}

greet