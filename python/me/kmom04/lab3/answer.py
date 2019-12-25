#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
bfb19230871a8f987edea97f9646ac83
python
lab3
elhb16
2016-09-14 20:07:13
v2.2.15 (2016-05-31)

Generated 2016-09-14 22:07:13 by dbwebb lab-utility v2.2.15 (2016-05-31).
https://github.com/mosbth/lab
"""


from Dbwebb import Dbwebb

dbwebb = Dbwebb()
print(">>> Ready to begin.")



"""
==========================================================================
Lab 3 - python 
 

 
"""



"""
--------------------------------------------------------------------------
Section 1. List basics 
 

 
"""



"""
Exercise 1.1 
 
Concatenate the two lists [table, drums] and [table, flute]. 

Answer with your list. 
 

Write your code below and put the answer into the variable ANSWER.
"""

list1 = ['table', 'drums']
list2 = ['table', 'flute']
listconcat = list1 + list2



ANSWER = listconcat

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("1.1", ANSWER, False))

"""
Exercise 1.2 
 
Use the list [Dafoe, Sheen, Berenger, Depp, Whitaker].

Add the words 'hotdog' and 'bag' as the second and third element.

Answer with the modified list.
 

Write your code below and put the answer into the variable ANSWER.
"""

listnames = ['Dafoe', 'Sheen', 'Berenger', 'Depp', 'Whitaker']
listnames.insert(1, 'hotdog')
listnames.insert(2, 'bag')
#print(listnames)



ANSWER = listnames

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("1.2", ANSWER, False))

"""
Exercise 1.3 
 
Use the list [Dafoe, Sheen, Berenger, Depp, Whitaker].

Replace the third word with: 'tablet'.

Answer with the modified list.
 

Write your code below and put the answer into the variable ANSWER.
"""
listnames2 = ['Dafoe', 'Sheen', 'Berenger', 'Depp', 'Whitaker']
listnames2[2] = 'tablet'
#print(listnames2)


ANSWER = listnames2

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("1.3", ANSWER, False))

"""
Exercise 1.4 
 
Sort the list

> [wasp, fly, butterfly, bumblebee, mosquito]

in ascending alphabetical order. Answer with the sorted list.
 

Write your code below and put the answer into the variable ANSWER.
"""
insects = ['wasp', 'fly', 'butterfly', 'bumblebee', 'mosquito']
sortedinsects = sorted(insects)
#print(sortedinsects)


ANSWER = sortedinsects

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("1.4", ANSWER, False))

"""
Exercise 1.5 
 
Use the list from the last excercise

> [wasp, fly, butterfly, bumblebee, mosquito]

and sort it in decending alphabetical order. Answer with the sorted list.
 

Write your code below and put the answer into the variable ANSWER.
"""
insects2 = ['wasp', 'fly', 'butterfly', 'bumblebee', 'mosquito']
reverseinsects = (sorted(insects2, reverse=True))
#print(reverseinsects)



ANSWER = reverseinsects

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("1.5", ANSWER, False))

"""
Exercise 1.6 
 
Use `pop()` to get the second and the last element in the list:

> [Dafoe, Sheen, Berenger, Depp, Whitaker]

Answer with the popped elements in a new list.
 

Write your code below and put the answer into the variable ANSWER.
"""
listnames3 = ['Dafoe', 'Sheen', 'Berenger', 'Depp', 'Whitaker']
popnames = [listnames3.pop(1), listnames3.pop(3)]
print(popnames)


ANSWER = popnames

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("1.6", ANSWER, False))

"""
Exercise 1.7 
 
Use `remove()` to delete the word:

> 'desk'

from the list:

> [table, wall, desk, chair, floor]

Answer with the modified list.
 

Write your code below and put the answer into the variable ANSWER.
"""

room = ['table', 'wall', 'desk', 'chair', 'floor']
room.remove('desk')
#print(room)



ANSWER = room

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("1.7", ANSWER, False))

"""
--------------------------------------------------------------------------
Section 2. Built-in list functions 
 
Some basic built-in functions.
 
"""

"""
Exercise 2.1 
 
Use a built-in function to sum all numbers in the list:

> [45, 22, 2, 498, 78]

Answer with the result as an integer.
 

Write your code below and put the answer into the variable ANSWER.
"""

numlist = [45, 22, 2, 498, 78]
sumlist = sum(numlist)
#print(sumlist)


ANSWER = sumlist

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("2.1", ANSWER, False))

"""
Exercise 2.2 
 
Use built-in functions, such as `sum` and `len` to get the average value of
the list:

> [67, 50, 2, 39, 15]

Answer with the result as a float with at most one decimal.
 

Write your code below and put the answer into the variable ANSWER.
"""
numlist2 = [67, 50, 2, 39, 15]
meanlist = sum(numlist2) / len(numlist2)
#print(meanlist)

ANSWER = meanlist

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("2.2", ANSWER, False))

"""
Exercise 2.3 
 
Use a built-in function to get the lowest number in the list:

> [67, 50, 2, 39, 15]

Answer with the result as a integer.
 

Write your code below and put the answer into the variable ANSWER.
"""

#numlist2 = [67, 50, 2, 39, 15]
minlist = min(numlist2)
#print(minlist)


ANSWER = minlist

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("2.3", ANSWER, False))

"""
Exercise 2.4 
 
Use the built-in functions `split()` and `join()` to fix this string:

> "The?rain?is?pouring"

into a real sentence, (without '?').

Answer with the fixed string.
 

Write your code below and put the answer into the variable ANSWER.
"""

pouring = "The?rain?is?pouring"
splitpour = pouring.split('?')
space = ' '
joinedpour = space.join(splitpour)
#print(joinedpour)


ANSWER = joinedpour

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("2.4", ANSWER, False))

"""
Exercise 2.5 
 
Use the string:

> "For every minute you are angry you lose sixty seconds of happiness."

and split it with the delimiter " " (space).

Answer with the element at index 1.
 

Write your code below and put the answer into the variable ANSWER.
"""
angry = "For every minute you are angry you lose sixty seconds of happiness"
angry = angry.split(' ')
#print(angry)
newangry = angry[1]
#print(newangry)


ANSWER = newangry

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("2.5", ANSWER, True))

"""
Exercise 2.6 
 
Use slice on the list

> [reggae, rock, blues, jazz, opera]

and replace the second and third element with

> "book, candle"

Answer with the modified list.
 

Write your code below and put the answer into the variable ANSWER.
"""

music = ['reggae', 'rock', 'blues', 'jazz', 'opera']
music[1:3] = ['book', 'candle']
#print(music)
#skall va ["reggae", "book", "candle", "jazz", "opera"] 



ANSWER = music

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("2.6", ANSWER, True))

"""
Exercise 2.7 
 
Use slice on the list

> [reggae, rock, blues, jazz, opera]

and replace the last two elements with
 
> "book, candle"
 
Answer with the modified list.
 

Write your code below and put the answer into the variable ANSWER.
"""

music2 = ['reggae', 'rock', 'blues', 'jazz', 'opera']
music2[-2::] = ['book', 'candle']
#print(music)



ANSWER = music2

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("2.7", ANSWER, False))

"""
Exercise 2.8 
 
Use slice on the list

> [reggae, rock, blues, jazz, opera]

and insert the words

> "book, candle"

after the third element.

Answer with the modified list.
 

Write your code below and put the answer into the variable ANSWER.
"""

#after blues
music = ['reggae', 'rock', 'blues', 'jazz', 'opera']
music[3:3] = ['book', 'candle']
#print(music)


ANSWER = music

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("2.8", ANSWER, True))

"""
Exercise 2.9 
 
Use `del` on the list

> [tree, stone, grass, water, sky]

and delete the first element.

Answer with the modified list.
 

Write your code below and put the answer into the variable ANSWER.
"""

nature = ['tree', 'stone', 'grass', 'water', 'sky']
del nature[0]
print(nature)



ANSWER = nature

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("2.9", ANSWER, False))

"""
Exercise 2.10 
 
Use `del` on the list

> [tree, stone, grass, water, sky]

and delete the second and third element.

Answer with the modified list.
 

Write your code below and put the answer into the variable ANSWER.
"""
nature2 = ['tree', 'stone', 'grass', 'water', 'sky']
del nature2[1:3]
#print(nature2)


ANSWER = nature2

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("2.10", ANSWER, False))

"""
Exercise 2.11 
 
Assign the list

> [a, b, c, d, e]

to a variable called 'list1'.

Assign the list again, but to another variable called 'list2'.

Answer with the result of 'list1 is list2'. 
 

Write your code below and put the answer into the variable ANSWER.
"""

list1 = ['a', 'b', 'c', 'd', 'e']
list2 = ['a', 'b', 'c', 'd', 'e']
listdone = list1 is list2


ANSWER = listdone

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("2.11", ANSWER, False))

"""
Exercise 2.12 
 
Use your lists from the last exercise. Assign 'list1' to another variable
called 'list3' like this:

> list3 = list1

Answer with the result of 'list1 is list3'.
 

Write your code below and put the answer into the variable ANSWER.
"""

#list1 = ['a', 'b', 'c', 'd', 'e']
#list2 = ['a', 'b', 'c', 'd', 'e']
list3 = list1
listdone2 = list1 is list3




ANSWER = listdone2

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("2.12", ANSWER, False))

"""
Exercise 2.13 
 
Use your lists from the last exercise. Change the first element in 'list1'
to

> "s"

Answer with 'list3'.
 

Write your code below and put the answer into the variable ANSWER.
"""

#list1 = ['a', 'b', 'c', 'd', 'e']
#list2 = ['a', 'b', 'c', 'd', 'e']
list1[0] = "s"


ANSWER = list3

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("2.13", ANSWER, False))

"""
--------------------------------------------------------------------------
Section 3. Lists as arguments 
 
Some excercises with passing lists as arguments to a function.
 
"""

"""
Exercise 3.1 
 
Create a function that returns the list passed as argument sorted in
numerical and ascending order. Also multiply all values with 10.

Use the list:

> [67, 50, 2, 39, 15]

and the built-in method `sort()`.

Answer with the sorted list.
 

Write your code below and put the answer into the variable ANSWER.
"""
def sortlist():
    """
    sort and append
    """
    numbers = [67, 50, 2, 39, 15]
    numbers.sort()
    newlist = []
    for item in numbers:
        newlist.append(item*10)
    print(newlist)
sortlist()

ANSWER = [20, 150, 390, 500, 670]

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("3.1", ANSWER, False))

"""
Exercise 3.2 
 
Create a function that takes the list:

> [67, 50, 2, 39, 15]
as argument.

The function should multiply all even numbers by 2 and add 6 to all odd
numbers.
Answer with the modified list sorted in numerical order, descending.
 
Write your code below and put the answer into the variable ANSWER.
"""

def multilist():
    """
    multi 
    """
    numbers = [67, 50, 2, 39, 15]
    newlist = []
    for item in numbers:
        if (item % 2 == 0):
            newlist.append(item*2)
        else:
            newlist.append(item+6)
            newlist.sort(reverse=True)
    print(newlist)



ANSWER = [100, 73, 45, 21, 4]

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("3.2", ANSWER, True))


dbwebb.exitWithSummary()
