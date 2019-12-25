#!/bin/bash
# File for converting XLS to JSON
#
printf "{\n\"salar\": [\n\n"

IFS=";"
#Salsnr	Salsnamn Lat Long Ort Hus Våning Typ Storlek
while read -r  f1 f2 f3 f4 f5 f6 f7 f8 f9
do

printf "\n{"

echo "\"Salsnr\": \"$f1\"," | sed "s/ \"\"/ null/g"
echo "\"Salsnamn\": \"$f2\"," | sed "s/ \"\"/ null/g"
echo "\"Lat\": \"$f3\"," | sed "s/ \"\"/ null/g"
echo "\"Long\": \"$f4\","| sed "s/ \"\"/ null/g"
echo "\"Ort\": \"$f5\","| sed "s/ \"\"/ null/g"
echo "\"Hus\": \"$f6\","| sed "s/ \"\"/ null/g"
echo "\"Våning\": \"$f7\","| sed "s/ \"\"/ null/g"
echo "\"Typ\": \"$f8\","| sed "s/ \"\"/ null/g" | sed "s/Ö/Ã–/g" | sed "s/ö/Ã¶/g"
echo "\"Storlek\": \"$f9\"" | tr -d '\011\012\015' | sed "s/\"\"/null/g"

printf "\n},\n"
done < salar.csv



printf "\n]\n}"


./salar2json.bash  >  salar.json

# Ö = Ã–
# ö = Ã¶
# ä = Ã¤

#iconv -f ISO-8859 -t UTF8 salar.json

