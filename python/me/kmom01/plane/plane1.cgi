#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Execute as cgi-skript and send a correct HTTP header.

"""

# To write pagecontent to sys.stdout as bytes instead of string
import sys
import codecs


#Enable debugging of cgi-.scripts
import cgitb
cgitb.enable()   

# Send the HTTP header
print("Content-Type: text/plain;charset=utf-8")
#print("Content-Type: text/html;charset=utf-8")
print("")

"""
Höjd över havet (meter)
Hastighet (km/h)
Temperatur utanför flygplanet (Celsius)
Sedan skall programmet skriva ut motsvarande värden enligt:

Höjd över havet (feet)
Hastighet (mph)
Temperatur utanför flygplanet (Farenheit)

1 meter är 3.28084 feet.
1 kilometer är 0.62137 miles.
För att konvertera från Celcius till Farenheit används följande formel:
[°F] = [°C] * 9 / 5 + 32
"""

feet = 1100 * 3.28084
print('1100 meter is %0.1f feet' %(feet))

miles = 1000 * 0.62137
print('1000km is %0.1f miles' %(miles))

fahrenheit = (-50 * 9/5) + 32
print('-50degrees Celsius is %0.1f Fahrenheit' %(fahrenheit))

# Write page content
sys.stdout = codecs.getwriter("utf-8")(sys.stdout.detach())
sys.stdout.write(content.format(image=meImage))
