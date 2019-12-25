#!/bin/bash
# File for converting XLS to JSON
#

#ROOM_DESCRPITION="$(sed -n 2'p' salar.csv | tr ',' '\n' | tail -5 | head -1)"
headlines="$(sed -n 2'p' salar.csv | tr ';' '\n')"

#echo "$headlines"
salar=salar.csv

#for (( i = 0; i < 10; i++ )); do
#	sed -n $i'p' salar.csv | tr ';' '\n'
#done
#BEGIN {}
test1=$(awk -F "\"*,\"*" '{print $3 $1}' salar.csv | tr ';' ' ')

test2=$(gawk -F "\"*,\"*" 'NF > 0 {print $3 "\n" $1}' salar.csv  )

test3=$(awk -F"," 'NR!=1{print $1,$3}' OFS="," salar.csv)

test4=$(awk -F, 'NR > 1 { print $3 "," $4 "," $5 }' salar.csv)
test5=$(awk -F, '{ print NF }' salar.csv)

#echo $test5


echo "$test2"
