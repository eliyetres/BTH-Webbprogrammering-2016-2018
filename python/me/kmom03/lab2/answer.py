#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
4d4e142fe86c0a62ca9e405e6a841391
python
lab2
elhb16
2016-09-04 19:36:56
v2.2.15 (2016-05-31)

Generated 2016-09-04 21:36:56 by dbwebb lab-utility v2.2.15 (2016-05-31).
https://github.com/mosbth/lab
"""


from Dbwebb import Dbwebb

dbwebb = Dbwebb()
print(">>> Ready to begin.")



"""
==========================================================================
Lab 2 - python 
 
Strings and files.
 
"""



"""
--------------------------------------------------------------------------
Section 1. Strings 
 
The basics of strings.
 
"""



"""
Exercise 1.1 
 
Assign the word: 'cupcakes' to a variable and put your variable as the
answer.
 

Write your code below and put the answer into the variable ANSWER.
"""

cupcakes = 'cupcakes'
print(cupcakes)


ANSWER = "cupcakes"

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("1.1", ANSWER, False))

"""
Exercise 1.2 
 
Assign the word 'cupcakes' to a variable. Create another variable where you
put the first and the last letter in the word.

Answer with the second variable.
 

Write your code below and put the answer into the variable ANSWER.
"""

cupcakes2 = 'cupcakes'
cupcakes2letter = cupcakes2[0] + cupcakes2[7]
print(cupcakes2letter)



ANSWER = "cs"

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("1.2", ANSWER, False))

"""
Exercise 1.3 
 
Assign the word: lollipop to a variable. Answer with the length of the word
as an integer.
 

Write your code below and put the answer into the variable ANSWER.
"""

lollipop = 'lollipop'
len(lollipop)


ANSWER = 8

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("1.3", ANSWER, False))

"""
Exercise 1.4 
 
Use the 'in-operator' to see if the word: 'cupcakes' contains the letter
'a'. Answer with a boolean result.
 

Write your code below and put the answer into the variable ANSWER.
"""

baking = 'a' in 'cupcakes'
print(baking)

ANSWER = True

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("1.4", ANSWER, False))

"""
Exercise 1.5 
 
Make all the letters in the word 'lollipop' capitalized. Answer with the
capitalized word.
 

Write your code below and put the answer into the variable ANSWER.
"""

lollipop = 'lollipop'
print(str.upper(lollipop))




ANSWER = "LOLLIPOP"

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("1.5", ANSWER, False))

"""
Exercise 1.6 
 
Use the built-in function `startswith()` to see if the word 'car' starts
with the letter 'c'. Answer with the boolean value.
 

Write your code below and put the answer into the variable ANSWER.
"""
car = 'car'
carC = car.startswith('c')
print(carC)



ANSWER = True

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("1.6", ANSWER, False))

"""
Exercise 1.7 
 
Assign the words: 'juice' and 'cupcakes' to two different variables. 

Create a function and pass the two words as arguments to it. Your function
should return them as a single word.

Answer with the result.
 

Write your code below and put the answer into the variable ANSWER.
"""

juice = 'juice'
cupcakes = 'cupcakes'

def partyTime():
    """
    party
    """
    print(juice + cupcakes)



ANSWER = "juicecupcakes"

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("1.7", ANSWER, False))

"""
Exercise 1.8 
 
Create a function and pass the word: 'cupcakes' to it. Your function should
return the sentence:

> "This word was: cupcakes"

Answer with the result.
 

Write your code below and put the answer into the variable ANSWER.
"""

def cupcakeFunc():
    """
    party
    """
    cupcakes4 = 'cupcakes'
    print("This word was: %s" % cupcakes4)



ANSWER = "This word was: cupcakes"

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("1.8", ANSWER, False))

"""
Exercise 1.9 
 
Create a function and pass the word: 'cupcakes' to it.

Your function should return the string 'yes' if the word is longer than 5
characters. Else return 'no'.

Answer with the result.
 

Write your code below and put the answer into the variable ANSWER.
"""

def cupcakeFunc2():
    """
    party
    """
    cupcakes3 = 'cupcakes'
    if len(cupcakes3) > 5:
        print("yes")
    else:
        print("no")



ANSWER = "yes"

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("1.9", ANSWER, False))

"""
Exercise 1.10 
 
Create a function and pass the word: 'lollipop' to it.

Your function should return a string with the word backwards.

Answer with the result.
 

Write your code below and put the answer into the variable ANSWER.
"""

def lollipops():
    """
    party
    """
    lollipop1 = 'lollipop'
    print(lollipop1[::-1])




ANSWER = "popillol"

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("1.10", ANSWER, False))

"""
Exercise 1.11 
 
Create a function and pass the word: 'juice' to it.

Your function should exclude the first and the last letter of the word and
return it.

Answer with the result.
 

Write your code below and put the answer into the variable ANSWER.
"""

def juiceslices():
    """
    party
    """
    juices = 'juice'
    juiceslice = juices[1:-1]
    print(juiceslice)



ANSWER = "uic"

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("1.11", ANSWER, False))

"""
Exercise 1.12 
 
Use `str.format()` to print out:

> 'My 'string' has 'integer' 'string''.

Use the values: 'father', '9' and 'cats'. Answer with the result.
 

Write your code below and put the answer into the variable ANSWER.
"""

print(str('My {0} has {1} {2}.'.format('father', 9, 'cats')))




ANSWER = 'My father has 9 cats'

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("1.12", ANSWER, True))

"""
Exercise 1.13 
 
Use `find` and `slice` on the string:

> "154.84.56.0 : (wallpaper) , soda"

to get the word inside the parenthesis.

Answer with the word as a string.
 

Write your code below and put the answer into the variable ANSWER.
"""

def findSlice():
    """
    party
    """
    string = "154.84.56.0 : (wallpaper) , soda"
    findparastart = string.find('(') 
    findparaend = string.find(')')
    print(string[findparastart+1:findparaend])



ANSWER = "wallpaper"

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("1.13", ANSWER, False))

"""
--------------------------------------------------------------------------
Section 2. Files 
 
This section uses the text file: '[httpd-access.txt](httpd-access.txt)'.
 
"""
"""
Exercise 2.1 
 
Open the file and count the number of times a line starts with '81'. Answer
with the result as an integer.
 

Write your code below and put the answer into the variable ANSWER.
"""

fhand = open('httpd-access.txt')
count = 0
for line in fhand:
    if line.startswith('81'):
        count = count + 1
print(count)




ANSWER = 112

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("2.1", ANSWER, False))

"""
Exercise 2.2 
 
Find out the last 4 digits on line 821 in the file. Answer with the result
as an integer.
 

Write your code below and put the answer into the variable ANSWER.
"""

hand2 = open('httpd-access.txt')
for i, line in enumerate(hand2):
    if i == 820:
        print(line[-5::])


ANSWER = 2154

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("2.2", ANSWER, False))

"""
Exercise 2.3 
 
Find out which of the ip adresses 81.226.253.26 and 95.19.133.73 that has
the highest amount of entries in the file.

Answer with the result as an integer.
 

Write your code below and put the answer into the variable ANSWER.
"""

def ipEntry():
    """
    find last part
    """
    address = open('httpd-access.txt')
    count3 = 0
    for line1 in address:
        if line1.startswith("81.226.253.26"):
            count3 = count3 + 1
    print('there are', count3, 'subject lines')


def ipEntry2():
    """
    find last part
    """
    address = open('httpd-access.txt')
    counts = 0
    for line3 in address:
        if line3.startswith("95.19.133.73"):
            counts = counts + 1
    print('there are', counts, 'subject lines')



ANSWER = 93

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("2.3", ANSWER, False))

"""
Exercise 2.4 
 
Count the number of periods (.) there are in the file.

Use the built-in function `count()` on the file after you have converted it
to a string.

Answer with the result as an integer.
 

Write your code below and put the answer into the variable ANSWER.
"""


openfile = open('httpd-access.txt')
count = 0
for line in openfile:
    line = line.rstrip()
    count = count + line.count('.')
print(count)


ANSWER = 5199

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("2.4", ANSWER, True))

"""
Exercise 2.5 
 
Find the characters on line 637 from index 65 to index 75. Make sure that
the character at index 75 also gets included.

Answer with the piece of string you found.
 

Write your code below and put the answer into the variable ANSWER.
"""

indexlines = open('httpd-access.txt')
for i, line in enumerate(indexlines):
    if i == 636:
        print(line[65:76])



ANSWER = 'source.php?'

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("2.5", ANSWER, True))

"""
Exercise 2.6 
 
Find the last element (digit) on each line, if there are any, and sum all
that are even.

Answer with the result as an integer.
 

Write your code below and put the answer into the variable ANSWER.
"""
def sumDigit():
    """
    find last sigit and sum
    """
result = []
with open('httpd-access.txt') as file:
    for line in file:
        l = line.strip()
        if l[-1].isdigit():
            if int(l[-1]) % 2 == 0:
                result.append(int(l[-1]))
print(sum(result))



ANSWER = 2226

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("2.6", ANSWER, False))


dbwebb.exitWithSummary()
