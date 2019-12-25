#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Marvin with a simple menu to start up with.
Marvin doesnt do anything, just presents a menu with some choices.
You should add functinoality to Marvin.

"""


def meImage():
    """
    Store my ascii image in a separat variabel as a raw string
    """
    return r"""
               
         /\___/\
        (  o o  )
        /   *   \
        \__\_/__/
          /   \
         / ___ \
         \/___\/
    """


def menu():
    """
    Display the menu with the options that Marvin can do.
    """
    print(chr(27) + "[2J" + chr(27) + "[;H")
    print(meImage()) 
    print("Hi, I'm Ada. I am Robot. What can I do you for?") 
    print("1) Tell Ada your name.")
    print("2) Tell Ada how long you have lived.")
    print("3) Tell Ada how much you weigh.")
    print("4) Round up minutes.")
    print("5) Convert celsius to fahrenheit")
    print("6) Multiply numbers")
    print("7) Print random numbers.")
    print("8) Calculate sum and mean.")
    print("9) Ask for your grades.")
    print("q) Quit.")


def myNameIs():
    """
    Read the users name and say hello to Marvin.
    """
    name = input("What is your name? ")
    print("\nAda says:\n")
    print("Hello %s - your awesomeness!" % name)
    print("What can I do you for?!")


def ageInSeconds():
    """
    age in seconds KLAR
    """
    age = int(input("How old are you?"))
    ageseconds = age * 31556926
    print("You have lived for at least %d seconds! " % ageseconds)


def moonWeight():
    """
    kg on the moon KLAR
    """
    kilogr = int(input("How many kg do you weight? "))
    weight = kilogr / 6 
    print("You would weigh %d kg on the moon!" % weight)

def minutesHours():
    """
    minutes to hours 
    """
    minutesInput = int(input("Enter minutes: "))
    hours = (minutesInput/60)
    hoursRounded = round(minutesInput/60)
    minutes = minutesInput - hours
    print("That is %d hours and %d minutes!" % (hoursRounded, minutes))

# 
def celFahr():
    """
    C to F KLAR
    """
    celsius = float(input('Enter degree Celsius: '))
    fahrenheit = (celsius * 9/5) + 32
    print('%0.1f degree(s) Celsius is %0.1f degree(s) Fahrenheit' %(celsius, fahrenheit))


def muliplyNum():
    """
    ask for word and number, print word x times KLAR
    """
    word, number = input("Enter a word and a number, separated by ONE space: ").split()
    print((word + "\n") * int(number))



import random
def min_max():
    """
    ask for a min and a max nr and print 10 random numbers between them, in a list w/ commas 
    """
    mini, maxi = input("Enter two numbers: ").split()
    list_var = []
    for _ in range(10):
        list_var.append(random.randint(int(mini), int(maxi)))
    
    print(list_var)



def num_done():
    """
    Summa och medelvarde:  KLAR
    """
    list_num = []
    while True:
        line = (input("Enter one number at a time, type 'done' when you are ready: "))
        if line == 'done':
            break
        else:
            list_num.append(int(line))
    print("Sum: %d mean: %0.2f " %(sum(list_num), sum(list_num)/len(list_num)))



def scoreGrade():
    """
    Poang till betyg. Kika på ovning 3.3 i boken Python for everybody. 
    """
    maxPoint = input("What is the maximum possible points? :")
    myPoint = input("How many points did you get? :")
    try:
        grade = float(myPoint)/float(maxPoint)
    
        if grade > 1:
            print("Bad score")
            scoreGrade()
        elif grade >= 0.9: 
            print('Your grade is: A')
        elif grade >= 0.8:
            print('Your grade is: B')
        elif grade >= 0.7:
            print('Your grade is: C')
        elif grade >= 0.6:
            print('Your grade is: D')
        elif grade >= 0:
            print('Your grade is: F')

    except TypeError:
        print("Bad grade")
        scoreGrade()





def main():
    """
    This is the main method, I call it main by convention.
    Its an eternal loop, until q is pressed. 
    It should check the choice done by the user and call a appropriate 
    function.
    """
    while True:
        menu()
        choice = input("--> ")

        if choice == "q":
            print("Bye, bye - and welcome back anytime!")
            return
        
        elif choice == "1":
            myNameIs()

        elif choice == "2":
            ageInSeconds()

        elif choice == "3":
            moonWeight()

        elif choice == "4":
            minutesHours()

        elif choice == "5":
            celFahr()

        elif choice == "6":
            muliplyNum()

        elif choice == "7":
            min_max()

        elif choice == "8":
            num_done()

        elif choice == "9":
            scoreGrade()
        
        else:
            print("That is not a valid choice. You can only choose from the menu.")          
            
        input("\nPress enter to continue...")



if __name__ == "__main__":
    main()
