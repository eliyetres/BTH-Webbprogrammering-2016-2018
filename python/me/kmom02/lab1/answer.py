#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
c7df351551346a67c362c313459685ed
python
lab1
elhb16
2016-08-23 13:40:55
v2.2.15 (2016-05-31)

Generated 2016-08-23 15:40:55 by dbwebb lab-utility v2.2.15 (2016-05-31).
https://github.com/mosbth/lab
"""


from Dbwebb import Dbwebb

dbwebb = Dbwebb()
print(">>> Ready to begin.")



"""
==========================================================================
Lab 1 - python 
 
If you need to peek at examples or just want to know more, take a look at
the [Python manual](https://docs.python.org/3/library/index.html).

There you will find everything this lab will go through and much more.
 
"""



"""
--------------------------------------------------------------------------
Section 1. Integers, strings, floats and basic arithmetics 
 
The foundation of numbers and basic arithmetic.
 
"""



"""
Exercise 1.1 
 
Create a variable called 'numOne' and give it the value 50. Create another
variable called 'numTwo' and give it the value 76. Create a third variable
called 'result' and assign to it the sum of the first two variables.

Answer with the result.
 

Write your code below and put the answer into the variable ANSWER.
"""

numOne = 50
numTwo = 76
result = numOne + numTwo




ANSWER = 126

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("1.1", ANSWER, False))

"""
Exercise 1.2 
 
Create a variable called 'numThree' and give it the value 91. 

Create another variable called 'numFour' and give it the value 92. 

Subtract 'numThree' from 'numFour' and answer with the result.
 

Write your code below and put the answer into the variable ANSWER.
"""


numThree = 91
numFour = 92
numanswer = numFour - numThree
print(numFour - numThree)



ANSWER = numanswer

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("1.2", ANSWER, False))

"""
Exercise 1.3 
 
Find out the product of 'numOne' and 'numThree' and answer with the result.

Write your code below and put the answer into the variable ANSWER.
"""
numanswer2 = numOne * numThree


ANSWER = numanswer2

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("1.3", ANSWER, False))

"""
Exercise 1.4 
 
Divide 30 with 5 and answer with the result.
 

Write your code below and put the answer into the variable ANSWER.
"""

print(30 / 5) 




ANSWER = 6.0

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("1.4", ANSWER, False))

"""
Exercise 1.5  
Create a variable called 'floatOne' and give it the value 56.69. 
Create another variable called 'floatTwo' and give it the value 55.02.
Sum the two values and answer with the result, rounded to 2 decimals.
Write your code below and put the answer into the variable ANSWER.
"""

floatOne = 56.69
floatTwo = 55.02
answerfloat = round(floatOne + floatTwo, 2)


ANSWER = answerfloat

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("1.5", ANSWER, False))

"""
Exercise 1.6 
 
Subtract 'floatTwo' from 'floatOne' and answer with the result. Round to 2
decimals.
 

Write your code below and put the answer into the variable ANSWER.
"""


roundfloat = round(floatOne - floatTwo, 2)



ANSWER = roundfloat

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("1.6", ANSWER, False))

"""
Exercise 1.7 
 
Answer with the product of 'floatOne' and 'floatTwo', rounded to 4
decimals.
 

Write your code below and put the answer into the variable ANSWER.
"""

roundfloat2 = round(floatOne * floatTwo, 4)




ANSWER = roundfloat2

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("1.7", ANSWER, False))

""" 
Exercise 1.8 
 
Create three variables: 'n1' = 177, 'n2' = 339 and 'n3' = 100. Sum up 'n1'
and 'n2'. Subtract 'n3' and answer with the result.
 

Write your code below and put the answer into the variable ANSWER.
"""

n1 = 177
n2 = 339
n3 = 100
nanswer = n1 + n2 - n3

ANSWER = nanswer

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("1.8", ANSWER, False))

"""
Exercise 1.9 
 
Answer with the result of 402 modulo (%) 61.
 

Write your code below and put the answer into the variable ANSWER.
"""


resultmodu = (402 % 61)



ANSWER = resultmodu

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("1.9", ANSWER, False))

"""
Exercise 1.10 
 
Add the word: 'device' to the word: 'beach' and answer with the result.
 

Write your code below and put the answer into the variable ANSWER.
"""


beachdev = ('beach' + 'device')



ANSWER = beachdev

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("1.10", ANSWER, False))

"""
--------------------------------------------------------------------------
Section 2. Conditions, exceptions, booleans, if, else and elif 
 

 
"""



"""
Exercise 2.1 
 
Answer with the boolean value of: 376 is less than 482.
 

Write your code below and put the answer into the variable ANSWER.
"""


boolval1 = 376 < 482



ANSWER = boolval1

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("2.1", ANSWER, False))

"""
Exercise 2.2 
 
Answer with the boolean value of: 195 is larger than 129.
 

Write your code below and put the answer into the variable ANSWER.
"""

boolval2 = 195 > 129




ANSWER = boolval2

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("2.2", ANSWER, False))

"""
Exercise 2.3 
 
Answer with the boolean value of: 376 == 195.
 

Write your code below and put the answer into the variable ANSWER.
"""


boolval3 = 376 == 195



ANSWER = boolval3

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("2.3", ANSWER, False))

"""
Exercise 2.4 
 
Create three variables representing dice values: 'd1' = 5, 'd2' = 5 and
'd3' = 2. Sum them up and answer with the result.
 

Write your code below and put the answer into the variable ANSWER.
"""

d1 = 5
d2 = 5
d3 = 2

dices = (d1+d2+d3)




ANSWER = dices

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("2.4", ANSWER, False))

"""
Exercise 2.5 
 
Create an if statement to see if the total value of your dices is 11 or
higher. If that is the case, answer with the string: 'big', else answer
with the string: 'nothing'. 
 

Write your code below and put the answer into the variable ANSWER.
"""

if d1 + d2 + d3 > 11:
    print('big')
else:
    print('nothing')




ANSWER = "big"

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("2.5", ANSWER, False))

"""
Exercise 2.6 
 
Create an elif statement that checks your total dice value. The checks and
results should be: three of the same value = 'triple', total of 11 or
higher = 'big', total of 10 or lower = 'small'. If you get a triple you
should not make more checks.
 

Write your code below and put the answer into the variable ANSWER.
"""


if d1 == d2 and d2 == d3:
    print('triple')

elif d1 + d2 + d3 >= 11:
    print('big')
else:
    print('small')



ANSWER = 'big'

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("2.6", ANSWER, False))

"""
--------------------------------------------------------------------------
Section 3. Built-in functions 
 
Some useful built-in functions.
 
"""



"""
Exercise 3.1 
 
Use `max()` to find the largest number in the serie:
6,8,95,2,12,152,4,78,621,45. 

Answer with the result. 
 

Write your code below and put the answer into the variable ANSWER.
"""


maxlist = max(6, 8, 95, 2, 12, 152, 4, 78, 621, 45)



ANSWER = maxlist

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("3.1", ANSWER, False))

"""
Exercise 3.2 
 
Use `min()` to find the smallest number in the serie:
6,8,95,2,12,152,4,78,621,45.

Answer with the result.
 

Write your code below and put the answer into the variable ANSWER.
"""


minlist = min(6, 8, 95, 2, 12, 152, 4, 78, 621, 45)



ANSWER = minlist

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("3.2", ANSWER, False))

"""
Exercise 3.3 
 
Use `len()` to find the number of letters in the word: syntax.

Answer with the result.
 

Write your code below and put the answer into the variable ANSWER.
"""

synlen = len('syntax')




ANSWER = synlen

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("3.3", ANSWER, False))

"""
Exercise 3.4 
 
Convert the number 590 to a string and add it to the word 'syntax'. Answer
with the result.
 

Write your code below and put the answer into the variable ANSWER.
"""

numString = ('syntax')+ str(590)




ANSWER = numString

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("3.4", ANSWER, False))

"""
Exercise 3.5 
 
Convert the number 119.67 to an integer and then to a string. Add it to the
beginning of the word: 'syntax'. Answer with the result. 
 

Write your code below and put the answer into the variable ANSWER.
"""

numbers = int(119.67)
intString = str(numbers) + ('syntax')


ANSWER = intString

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("3.5", ANSWER, False))

"""
--------------------------------------------------------------------------
Section 4. Functions 
 
Basic functions.
 
"""



"""
Exercise 4.1 
 
Create a function called 'prodNr' that takes two arguments, 83 and 64. The
function should return the product of the numbers.

Answer with a call to the function. 
 

Write your code below and put the answer into the variable ANSWER.
"""
def prodNr(a, b):
    """pylint e skit"""
    a = 83
    b = 64
    productNr = (a*b)
    return (productNr)



ANSWER = 5312

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("4.1", ANSWER, False))

"""
Exercise 4.2 
 
Create a function called 'funnyWord' that takes one argument and adds it to
the string ' is a funny word'. If the argument is 'water', the function
should return: 'water is a funny word'.

Use the argument 'resort' and answer with a call to the function.
 

Write your code below and put the answer into the variable ANSWER.
"""
def funnyWord(resort):
    """pylint e skit"""
    return (resort + ('is a funny word'))




ANSWER = "resort is a funny word"

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("4.2", ANSWER, False))

"""
Exercise 4.3 
 
Create a function called 'inRange' that takes one argument. The function
should return 'true' if the argument is higher than 50 and lower than 100.
If the number is out of range, the function should return 'false'. The
return type should be boolean.

Use the argument 99 and answer with a call to the function.
 

Write your code below and put the answer into the variable ANSWER.
"""

def inRange(a):
    """pylint e skit"""
    if a > 50 and a < 100:
        return True
    else:
        return False




ANSWER = True

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("4.3", ANSWER, False))

"""
--------------------------------------------------------------------------
Section 5. Iteration and loops 
 
For-loops and while-loops. 
 
"""



"""
Exercise 5.1 
 
Create a while-loop that adds 4 to the number 90, 37 times. Answer with the
result. 
 

Write your code below and put the answer into the variable ANSWER.
"""

n = 0
count_to = 37
add_me = 90
while n < count_to:
    n = n + 1
    add_me = add_me + 4
    print("Loop-iteration: {0} \t add_me = {1}".format(n, add_me))


ANSWER = 238

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("5.1", ANSWER, False))

"""
Exercise 5.2 
 
Create a while-loop that subtracts 6 from 93, 20 times. Answer with the
result. 
 

Write your code below and put the answer into the variable ANSWER.
"""

n = 0
count_to2 = 20
sub_me = 93
while n < count_to2:
    n = n + 1
    sub_me = sub_me -6
    print("Loop-iteration: {0} \t sub_me = {1}".format(n, sub_me))




ANSWER = -27

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("5.2", ANSWER, False))

"""
Exercise 5.3 
 
Create a for-loop that counts the number of elements in the serie:

> 6,8,95,2,12,152,4,78,621,45

Answer with the result. 
 

Write your code below and put the answer into the variable ANSWER.
"""

count = 0
for itervar in [6, 8, 95, 2, 12, 152, 4, 78, 621, 45]:
    count = count + 1
print(count)




ANSWER = 10

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("5.3", ANSWER, False))

"""
Exercise 5.4 
 
Create a for-loop that sums up the numbers in the serie:

> 67,2,12,28,128,15,90,4,579,450

Answer with the result. 
 

Write your code below and put the answer into the variable ANSWER.
"""
totalNum = 0
for sumList in [67, 2, 12, 28, 128, 15, 90, 4, 579, 450]:
    totalNum = totalNum + sumList
print(totalNum)


ANSWER = 1375

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("5.4", ANSWER, False))

"""
Exercise 5.5 
 
Create a for-loop that finds the largest number in the serie:

> 6,8,95,2,12,152,4,78,621,45

Answer with the result. 
 

Write your code below and put the answer into the variable ANSWER.
"""


largest = None
for itervar in [6, 8, 95, 2, 12, 152, 4, 78, 621, 45]:
    if largest is None or itervar > largest:
        largest = itervar
print(largest)



ANSWER = 621

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("5.5", ANSWER, False))

"""
Exercise 5.6 
 
Create a for-loop that goes through the numbers:

> 67,2,12,28,128,15,90,4,579,450

If the current number is even, you should add it to a variable and if the
current number is odd, you should subtract it from the variable.

Answer with the final result. 
 

Write your code below and put the answer into the variable ANSWER.
"""


even = 0 
for evenNumbers in [67, 2, 12, 28, 128, 15, 90, 4, 579, 450]:
    if (evenNumbers%2 == 1):
        even = even-evenNumbers
    else:
        even = even+evenNumbers
    print(even)



ANSWER = 53

# I will now test your answer - change false to true to get a hint.
print(dbwebb.assertEqual("5.6", ANSWER, False))


dbwebb.exitWithSummary()
