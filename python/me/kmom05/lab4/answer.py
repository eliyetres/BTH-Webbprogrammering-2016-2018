#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
b08b118809ebe1311638d09cf01d6b91
python
lab4
elhb16
2016-10-03 18:04:34
v2.2.20 (2016-09-29)

Generated 2016-10-03 20:04:34 by dbwebb lab-utility v2.2.20 (2016-09-29).
https://github.com/mosbth/lab
"""


from Dbwebb import Dbwebb

dbwebb = Dbwebb()
print(">>> Ready to begin.")



"""
==========================================================================
Lab 4 - python 
 
Dictionaries and tuples.
 
"""



"""
--------------------------------------------------------------------------
Section 1. Dictionaries 
 
Some basics with dictionaries.
 
"""



"""
Exercise 1.1 
 
Create a small phonebook using a dictionary. Use the names as keys and
numbers as values.

Use

> Baggins, Aragorn, Smaug

and corresponding numbers

> 55523412, 55564222, 55567894

Add the phonenumbers as integers. Answer with the resulting dictionary.
 

Write your code below and put the answer into the variable ANSWER.
"""

lotr = {'Baggins': 55523412, 'Aragorn': 55564222, 'Smaug': 55567894}


ANSWER = lotr

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("1.1", ANSWER, False))

"""
Exercise 1.2 
 
How many items are there in the dictionary?
 

Write your code below and put the answer into the variable ANSWER.
"""

lotrcount = len(lotr)


ANSWER = lotrcount

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("1.2", ANSWER, False))

"""
Exercise 1.3 
 
Use the `get()` method on your phonebook and answer with the phonenumber of
'Baggins'.
 

Write your code below and put the answer into the variable ANSWER.
"""


getbag = lotr.get('Baggins')
#print(getbag)



ANSWER = getbag

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("1.3", ANSWER, False))

"""
Exercise 1.4 
 
Get all keys from the dictionary and return them in a sorted list.
 

Write your code below and put the answer into the variable ANSWER.
"""


lotrlist = list(sorted(lotr))
#print(lotrlist)



ANSWER = lotrlist

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("1.4", ANSWER, False))

"""
Exercise 1.5 
 
Get all values from the dictionary and return them in a sorted list.
 

Write your code below and put the answer into the variable ANSWER.
"""

lotrvalues = sorted(lotr.values())
#print(lotrvalues)


ANSWER = lotrvalues

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("1.5", ANSWER, False))

"""
Exercise 1.6 
 
Use the in-operator to test if the name 'Baggins' exists in the dictionary.
Answer with the return boolean value.
 

Write your code below and put the answer into the variable ANSWER.
"""

lotr0 = {'Baggins': 55523412, 'Aragorn': 55564222, 'Smaug': 55567894}
baggin = 'Baggins' in lotr0.keys()
#print(baggin)

ANSWER = baggin

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("1.6", ANSWER, False))

"""
Exercise 1.7 
 
Use the in-operator to test if the phone number 55523412 exists in the
dictionary. Answer with the return boolean value.
 

Write your code below and put the answer into the variable ANSWER.
"""

#lotr0 = {'Baggins': 55523412, 'Aragorn': 55564222, 'Smaug': 55567894}
keyval = 55523412 in lotr0.values()

ANSWER = keyval

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("1.7", ANSWER, True))

"""
Exercise 1.8 
 
Use a for-loop to walk through the dictionary and create a string
representing it. Each name and number should be on its own row, separated
by a space. The names must come in alphabetical order.

Answer with the resulting string.
 

Write your code below and put the answer into the variable ANSWER.
"""

#lotr0 = {'Baggins': 55523412, 'Aragorn': 55564222, 'Smaug': 55567894}
blaj = [key + ' ' + str(lotr0[key])for key in lotr0]
st = blaj.sort()
same = '\n'.join(blaj)
#print(same)

ANSWER = same + '\n'

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("1.8", ANSWER, True))

"""
Exercise 1.9 
 
Convert the phonenumber to a string and add the prefix '+1-', representing
the language code, to each phone-number.

Answer with the resulting dictionary.
 

Write your code below and put the answer into the variable ANSWER.
"""

#lotr0 = {'Baggins': 55523412, 'Aragorn': 55564222, 'Smaug': 55567894}


for item in lotr0:
    lotr0[item] = '+1-' + str(lotr0[item])
    print(lotr0[item])
print(lotr0)


ANSWER = lotr0

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("1.9", ANSWER, True))

"""
Exercise 1.10 
 
Get and remove the item 'Baggins' from the phonebook (use pop()). Answer
with the resulting dictionary.
 

Write your code below and put the answer into the variable ANSWER.
"""

popbag = lotr.pop('Baggins')


ANSWER = lotr

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("1.10", ANSWER, False))

"""
Exercise 1.11 
 
Add the item you just popped from the phonebook. Answer with the resulting
dictionary.
 

Write your code below and put the answer into the variable ANSWER.
"""


addbag = lotr.update({'Baggins':55523412}) 

ANSWER = lotr

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("1.11", ANSWER, False))

"""
--------------------------------------------------------------------------
Section 2. Tuples 
 
Some basics with tuples.
 
"""
"""
Exercise 2.1 
 
Create a tuple with 'frog, 54, 4.77, fridge, 2'. Answer with the length of
the tuple as an integer.
 

Write your code below and put the answer into the variable ANSWER.
"""

tuplelen = ('frog', '54', '4.77', 'fridge', '2')
tuples = len(tuplelen)

ANSWER = tuples


# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("2.1", ANSWER, False))

"""
Exercise 2.2 
 
Create a tuple out of:

> (frog, 54, 4.77, fridge, 2).

Assign each value in the tuple to different variables:

> 'a','b','c','d','e'.

Answer with the variable: 'd'. Hint: a,b,c = tuple.
 

Write your code below and put the answer into the variable ANSWER.
"""

val = ('frog', '54', '4.77', 'fridge', '2')
var = ('a', 'b', 'c', 'd', 'e')
a, b, c, d, e = tuple(zip(val, var))


ANSWER = d[0]

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("2.2", ANSWER, True))
"""
Exercise 2.3 
 
Use the list

> [45, 22, 2, 498, 78]

Assign the first two elements to a tuple with a slice on the list.

Answer with the first element in the tuple as an integer.
 
 
Write your code below and put the answer into the variable ANSWER.
"""

slicetuple = [45, 22, 2, 498, 78]
newtuple = (slicetuple[0:2])


ANSWER = int(newtuple[0])

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("2.3", ANSWER, False))

"""
Exercise 2.4 
 
Create a tuple with

> (moose, 12, 1.98, table, 7)

Convert it to a list and replace the second element with:

> "beverage"

Convert it back to a tuple and answer with the first three elements in a
comma-separated string.
 

Write your code below and put the answer into the variable ANSWER.
"""

tuple1 = ('moose', '12', '1.98', 'table', '7')
tuplebev = list(tuple1)
#print(tuplebev)
tuplebev[1] = 'beverage'
tuplebevtuple = tuple(tuplebev)
tuplestring = str(tuplebevtuple[0:3]).replace(" ", "").replace("(", "").replace("'", "").replace(")", "")
print(tuplestring)



ANSWER = tuplestring

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("2.4", ANSWER, True))


dbwebb.exitWithSummary()
