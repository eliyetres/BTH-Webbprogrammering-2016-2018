#!/usr/bin/env python3
# -*- coding: utf-8 -*-


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

feet = float(input('Enter altitude in meter: '))
meter = 3.28084
print('%0.1f meter is %0.1f feet' %(feet, meter))

miles = float(input('Enter velocity in km: '))
km = 0.62137
print('%0.1f in km is %0.1f miles' %(miles, km))

celsius = float(input('Enter degree Celsius: '))
fahrenheit = (celsius * 9/5) + 32
print('%0.1f degree(s) Celsius is %0.1f degree(s) Fahrenheit' %(celsius, fahrenheit))
