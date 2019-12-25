#!/bin/env bash


# 1. Skapa ett skript mazerunner.bash. 
# Sätt rättigheter på skriptet till 755. Skapa en symbolisk länk mazerunner som pekar på filen mazerunner.bash.
# 
chmod 755 mazerunner.bash
ln -s ./mazerunner.bash mazerunner

# 2. Skriptet skall läsa av environment-variabeln LINUX_PORT och, 
# om variabeln är definierad, använda dess innehåll som portnummer att koppla upp sig mot. 
# Standardvärde skall vara 1337.
# 
if [[ "$LINUX_PORT" ]]; then
	port="$LINUX_PORT"
else
	port=1337
fi

# 3. Skriptet skall läsa av environment-variabeln LINUX_SERVER och, om variabeln är definierad, 
# använda dess innehåll som adress till servern. Standardvärde skall vara localhost.
# 
if [[ "$LINUX_SERVER" ]]; then
	server="$LINUX_SERVER"
else
	server=localhost
fi

# 4. Använd API:et för att lägga till följande funktioner i skriptet. 
# Skriptet skall alltid skriva ut ett meddelande om det gick bra eller inte.

#
# GLOBAL VARIABLES
#

#DIRECTIONS="$(sed -n 1'p' currentroom.txt | tr ',' '\n' | tail -4 && sed -n 2'p' currentroom.txt | tr ',' '\n' | tail -4)"
game_id=$(grep -o '[0-9]*' savegame.txt)

# Kolla att rum finns, och sätt fil
ROOMFILE="currentroom.txt"
if [ -f $ROOMFILE ]; then
   room_id=$(grep -o '[0-9]*' currentroom.txt | head -1 )
   	# Get room description from file created from curl output
	ROOM_DESCRPITION="$(sed -n 2'p' currentroom.txt | tr ',' '\n' | tail -5 | head -1)"

else
   echo "File $ROOMFILE does not exist."
fi

# Check possible directions
# -F filtrera 
# "\*,"  - allt innan komma
# "\*"   - till utan komma (?)
westinfo=$(awk -F "\"*,\"*"  '{print $3}' $ROOMFILE | tail -1)
eastinfo=$(awk -F "\"*,\"*"  '{print $4}' $ROOMFILE | tail -1)
southinfo=$(awk -F "\"*,\"*" '{print $5}' $ROOMFILE | tail -1)
northinfo=$(awk -F "\"*,\"*" '{print $6}' $ROOMFILE | tail -1)
if [[ $westinfo == "-" ]]; then
	westinfo=""
else
	westinfo="west"
fi
if [[ $eastinfo == "-" ]]; then
	eastinfo=""
else
	eastinfo="east"
fi
if [[ $southinfo == "-" ]]; then
	southinfo=""
else
	southinfo="south"
fi
if [[ $northinfo == "-" ]]; then
	northinfo=""
else
	northinfo="north"
fi

#
# ARGUMENTS
#
case "$1" in

#Loop
		loop)
			# Initate game
			printf "Initlizes new game...\n\n"
			curl --silent $server:$port/ > savegame.txt
			game_id=$(grep -o '[0-9]*' savegame.txt)
			echo "New game started with id: $game_id"
			printf "\n"

			# Display possible maps
			printf "Setting up the maps...\n\n"
			curl $server:$port/map?type=csv
			printf "\n"

			# Wait for selection, 0 or 1, then continue
			printf "Select map 0 or 1, and press Enter\n"
			read map_no
			if [[ $map_no == 1 ]]; then
				curl $server:$port/"$game_id"/map/small-maze?type=csv
			else
				curl $server:$port/"$game_id"/map/maze-of-doom?type=csv
			fi
			echo "$map_no selected."
			printf "\n"

			# Enter
			### Ger httpkod... typ.
			##baj=$(curl -w %{http_code} --silent -f http://localhost:1337/27890/maze?type=csv)
			# Set room variable via file created from curl output
			printf "Entering first room...\n\n"
			curl -s $server:$port/"$game_id"/maze?type=csv > currentroom.txt
			room_id=$(grep -o '[0-9]*' currentroom.txt | head -1 )
			ROOM_DESCRPITION="$(sed -n 2'p' currentroom.txt | tr ',' '\n' | tail -5 | head -1)"

			echo "You are in room: $room_id"
			echo "Description: $ROOM_DESCRPITION"
			echo "Possible directions: $westinfo $eastinfo $southinfo $northinfo" 

			while true; do
			read user_input
    			case $user_input in
    				west | south | north | east)
						# Move
						MOVE=$(curl -s "$server:$port/$game_id/maze/$room_id/$user_input?type=csv")
						echo "$MOVE" > currentroom.txt
						room_id=$(grep -o '[0-9]*' currentroom.txt | head -1 )
						# Check if path exist, change room description
						if grep -wq currentroom.txt -e 'Path dont exist'; then
							echo 'Path does not exist.'
							printf "\n"
							ROOM_DESCRPITION="$(sed -n 2'p' currentroom.txt | tr ',' '\n' | tail -6 | head -1)"				
						else
							ROOM_DESCRPITION="$(sed -n 2'p' currentroom.txt | tr ',' '\n' | tail -5 | head -1)"
						fi
						printf "\n"
						echo "You are in room: $room_id"
						echo "Description: $ROOM_DESCRPITION"
						echo "Possible directions: $westinfo $eastinfo $southinfo $northinfo" 
					;;

					exit)
						echo "Exiting game..."
						exit 1
					;;

					*) 
						echo "Type in the direction you want to go"
					;;
    			esac
    		done

		;;

# Initiera ett spel och spara ned spelets id i en fil.
		init)

			# Save game to file
			curl -s $server:$port/ > savegame.txt
			game_id=$(grep -o '[0-9]*' savegame.txt)
			printf "\n"
			echo "New game started with id: $game_id"
			exit 0
		;;

# Visa vilka maps som finns att välja bland.        
		maps)
			curl $server:$port/map?type=csv
			printf "\nUse mazerunner select # to choose map"
			exit 0
		;;

# ./mazerunner select <map>	Välj en viss karta.
		select)
			case "$2" in

				# Choose Maze of doom
				0)
				curl $server:$port/"$game_id"/map/maze-of-doom
				printf "\n"
				echo "You selected: maze of doom.json"
				exit 0
			;;
				# Choose small maze				
				1)
				curl $server:$port/"$game_id"/map/small-maze
				printf "\n"
				echo "You selected: small maze.json"
				exit 0
			;;
				# Wrong number is typed
				*)
				echo "Map $2 not found. Type '$server:$port/maps' for available maps."
			;;
			esac
		;;

# Gå in i första rummet.
		enter)
			# Set room variable via file created from curl output
			game_id=$(grep -o '[0-9]*' savegame.txt)
			curl -s $server:$port/"$game_id"/maze?type=csv > currentroom.txt
			echo "You are in room: $room_id"

			# Get room description from file created from curl output
			ROOM_DESCRPITION="$(sed -n 2'p' currentroom.txt | tr ',' '\n' | tail -5 | head -1)"
			echo "Description: $ROOM_DESCRPITION"
			# Get possible directions
			echo "Possible directions: $westinfo $eastinfo $southinfo $northinfo" 
			
			exit 0
		;;

# Visa information om rummet.
		info)
			ROOM_DESCRPITION="$(sed -n 2'p' currentroom.txt | tr ',' '\n' | tail -5 | head -1)"
			echo "Description: $ROOM_DESCRPITION"
			echo "Possible directions is: $westinfo $eastinfo $southinfo $northinfo" 
			exit 0
		;;

# Gå till ett nytt rum, om riktningen stödjs.
		go)
			# Move
			MOVE=$(curl -s "$server:$port/$game_id/maze/$room_id/$2?type=csv")
			echo "$MOVE" > currentroom.txt
			printf "\n"
			if grep -wq currentroom.txt -e 'Path dont exist'; then
				echo 'Path does not exist.'
			fi

			echo "You are in room: $room_id"

			# Check if path exist, change room description
			if grep -wq currentroom.txt -e 'Path dont exist'; then
				ROOM_DESCRPITION="$(sed -n 2'p' currentroom.txt | tr ',' '\n' | tail -6 | head -1)"				
			else
				ROOM_DESCRPITION="$(sed -n 2'p' currentroom.txt | tr ',' '\n' | tail -5 | head -1)"
			fi
			echo "Description: $ROOM_DESCRPITION"

		exit 0
		;;

# Default if wrong command
		*)
			echo "Command not found."
			exit 1
		;;
esac


