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

feet = 1100 * 3.28084
print('1100 meter is %0.1f feet' %(feet))

miles = 1000 * 0.62137
print('1000km is %0.1f miles' %(miles))

fahrenheit = (-50 * 9/5) + 32
print('-50degrees Celsius is %0.1f Fahrenheit' %(fahrenheit))

