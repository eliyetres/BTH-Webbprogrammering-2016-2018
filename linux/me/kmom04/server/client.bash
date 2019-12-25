#!/bin/env bash

# Skriptet skall läsa av environment-variabeln LINUX_PORT och, om variabeln är definierad,
# använda dess innehåll som portnummer att koppla upp sig mot. Standardvärde skall vara 1337.

if [[ "$LINUX_PORT" ]]; then
	port="$LINUX_PORT"
else
	port=localhost:1337
fi

#echo "$port"

case "$1" in
# Kommandot ./client.bash hello skall anropa serverns route /,
# med curl eller wget, och skriva ut svaret.
		hello)
			curl $port
			exit 0
		;;
# Kommandot ./client.bash HTML skall anropa
# serverns route /index.html och skriva ut svaret.
		html)
			curl $port/index.html
			exit 0
		;;
# Kommandot ./client.bash STATUS skall anropa
# serverns route /status och skriva ut svaret.
		status)
			curl $port/status
			exit 0
		;;
# Kommandot ./client.bash sum 2 3 4 skall använda
# serverns route /sum för att beräkna summan av talen. Man kan skicka med valfritt antal tal.
		sum)
			sum_vars_string=${*:2}
			sum_arg_string="${sum_vars_string// /"&"}"
			#curl_cmd="$port/sum?$sum_arg_string"

			curl "$port/sum?$sum_arg_string"

			#in_vars_string=${@:2}
			#in_vars_array=(${in_vars_string// / })
			#for i in "${!in_vars_array[@]}"
			#do
			#    echo "$i=>${in_vars_array[i]}"
			#done
		exit 0
		;;
# Kommandot ./client.bash filter 2 3 4 skall använda
# serverns route /filter. Man kan skicka med valfritt antal tal.
		filter)
			filter_vars_string=${*:2}
			filter_arg_string="${filter_vars_string// /"&"}"

			curl "$port/filter?$filter_arg_string"
			exit 0
		;;

# Kommandot ./client.bash all skall utföra samtliga ovan
# nämna kommandon i en följd och visa vilket kommando som utförs
# och svaret som ges. Gör en snygg utskrift så det blir överskådligt.
		all)
			printf "hello: "
			curl $port/status
			printf "\n\nhtml: "
			curl $port/index.html
			printf "\n\nstatus: "
			curl $port/status
			printf "\n\nsum: "
			curl $port/sum
			printf "\n\nfilter: "
			curl $port/filter
			printf "\n\n404: "
			curl -I $port/*
			exit 0
		;;

# Kommandot ./client.bash 404 skall använda en godtycklig
# felaktig route och ge samma svar som servern ger.
# Här skall du även visa innehållet i header-delen av svaret (curl -I).
		404)
			curl -I $port/*
			exit 0
		;;
esac
