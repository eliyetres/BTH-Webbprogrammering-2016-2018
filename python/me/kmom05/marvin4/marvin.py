#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Marvin with a simple menu to start up with.
Marvin doesnt do anything, just presents a menu with some choices.
You should add functinoality to Marvin.

"""
import random
import string
import collections

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
    print("10) Play Guess The Number!") 
    print("11) Play Shuffe String!")
    print("12) Ask Ada how she feels.")
    print("13) Word sum - total count of words in a file.")
    print("14) Word frequency - 7 most frequent words.")
    print("15) Word frequency - 7 most frequent words, excluding common words.")
    print("16) Word frequency - 7 most frequent words, excluding common and misspelled words.")
    print("17) Letter frequency - 7 most frequest letters in percentage.")
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


def randomGame(): 
    """
    This is a guess the number game.
    """
    
    guessesTaken = 0
    
    number = random.randint(1, 100)
    print('I am thinking of a number between 1 and 100.')
    
    while guessesTaken < 6:
        print('Take a guess.') 
        guess = input()
        guess = int(guess)
    
        guessesTaken = guessesTaken + 1
        
        if guess < number:
            print('Your guess is too low.') 
        
        if guess > number:
            print('Your guess is too high.')
        
        if guess == number:
            break
        
    if guess == number:
        guessesTaken = str(guessesTaken)
        print('Good job! You guessed my number in ' + guessesTaken + ' guesses!') 
    if guess != number:
        number = str(number)
        print('Wrong! The number I was thinking of was ' + number)

def moodstring():
    """
    print number, date, time and random mood, get function from file
    """
    #!/usr/bin/python
    import mood
    mood.mood()
    

def randstring():
    """
    shuffle a string
    """
    inputstring = input("Enter your text and: ")
    print(''.join(random.sample(inputstring, len(inputstring))))


def quoteinput():
    """
    get quote from file
    """
    fileq = open('quotes.txt').read().splitlines()
    randomline = random.choice(fileq)
    print(randomline)


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

        elif choice == "citat" or choice == "quote":
            quoteinput()
        
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

        elif choice == "10":
            randomGame()
        
        elif choice == "12":
            moodstring()

        elif choice == "11":
            randstring()

        elif choice == "13":
            wordsum()

        elif choice == "14":
            wordfreq()

        elif choice == "15":
            common_exclude()

        elif choice == "16":
            misspelled_exclude()

        elif choice == "17":
            letter_percent()

        else:
            print("That is not a valid choice. You can only choose from the menu.")          
            
        input("\nPress enter to continue...")



def backpack():
    """
    display inventory, pick up and drop items
    """

    while True:
        choice = input("Actions:\n inv -Show inventory \n inv pick <item> -Pick up item (use without tags) \n inv drop \
        <item> -Drop item (use without tags) \n exit - Return to main menu \n").split(' ')
        if "inv" in choice and len(choice) == 1:
            with open("inv.data", 'r+') as fileb:
                content = fileb.read()
                content2 = content.split()
                if len(content) == 0:
                    print("The inventory is empty.\n")
                else:
                    print("I have {0} items in the inventory. The items are: {1}\n".format(len(content2), content))
        
        #pick up item
        elif "pick" in choice or "inv pick" in choice:
            with open("inv.data", 'r') as file:
                check = file.read()
                check = check.split()
            if choice[2] not in check:
                with open('inv.data', 'a') as file:
                    file.write(" {0}".format(choice[2]))
                with open('inv.data', 'r') as file:
                    newcont = file.read()
                    print("I have picked up the {0}. The inventory now contains: {1}\n".format(choice[2], newcont))
        
        #drop item
        elif "drop" in choice or "inv drop" in choice:
            with open("inv.data", 'r') as file:
                check = file.read()
                check2 = check.split()
            if choice[2] in check2:
                with open('inv.data', 'w') as file: 
                    check2.remove(choice[2])
                    file.write(" ".join(check2))                      
                if len(check2) == 0:
                    with open('inv.data', 'r') as file:
                        print("I have dropped the {0}. The inventory is empty.\n".format(choice[2]))
                else:
                    with open("inv.data", 'r') as file:
                        newcont2 = file.read()
                        print("I have dropped the {0}. The inventory now contains: {1}\n".format(choice[2], newcont2))
            else:
                print("No such object in inventory.\n")
        
        elif "exit" in choice or "quit" in choice:
            main()


        else:
            print("Error. Try again:\n")



punkter = str.maketrans({key:None for key in string.punctuation})

def alice_main():
    """
    1: open file or default file
    """
    filename = input("Enter the file name: ")
    try:
        if filename == (""):
            file = open('alice-ch1.txt', 'r')
        else:
            file = open(filename)
        return file
    except Exception:
        print("Error, try again.")
        alice_main()


def wordsum():
    """
    2: WORD SUM total sum of words in file
    """
    file = alice_main()
    fhand = file.read()
    lenwords = len(fhand.split())
    print(lenwords)



def wordfreq():
    """
    3: WORD FREQUENCY - 7 most frequent words in order, highest first
    """
    file = alice_main()
    
    # count words
    counts = dict()
    for line in file:
        words = line.translate(punkter).lower().split()
        for word in words:
            if word not in counts:
                counts[word] = 1
            else:
                counts[word] += 1
    
    # sort words by value
    lst = list()
    for key, val in list(counts.items()):
        lst.append((val, key))
    lst.sort(reverse=True)  
    for key, val in lst[:7]:
        print(key, val)



def common_exclude():
    """
    4: display 7 most frequent words, exclude common-words.txt
    """
    file = alice_main()
    alicewords = dict()
    for line in file:
        words = line.translate(punkter).lower().split()
        for word in words:
            if word not in alicewords:
                alicewords[word] = 1
            else:
                alicewords[word] += 1
    
    # exclude common-words
    commonfile = open('common-words.txt')
    commonwords = dict()
    for line2 in commonfile:
        words2 = line2.translate(punkter).lower().split()
        for word2 in words2:
            if word2 not in commonwords:
                commonwords[word2] = 1
            else:
                commonwords[word2] += 1

    # sort words by value
    lst = list()
    for key, val in list(alicewords.items()):
        if not key in commonwords:
            lst.append((val, key))

    lst.sort(reverse=True)

    for key, val in lst[:7]:
        print(key, val)

    
def misspelled_exclude():
    """
    #5: display 7 most frequent words, exclude common words(common-words) 
    and exclude misspelled words(words)
    """

    file = alice_main()
    alicewords = dict()
    for line in file:
        words = line.translate(punkter).lower().split()
        for word in words:
            if word not in alicewords:
                alicewords[word] = 1
            else:
                alicewords[word] += 1

    # exclude common-words
    commonfile = open('common-words.txt')
    commonwords = dict()
    for line2 in commonfile:
        words2 = line2.translate(punkter).lower().split()
        for word2 in words2:
            if word2 not in commonwords:
                commonwords[word2] = 1
            else:
                commonwords[word2] += 1

    # only include correct spelled
    spellfile = open('words.txt')
    spellwords = dict()
    for line3 in spellfile:
        words3 = line3.translate(punkter).lower().split()
        for word3 in words3:
            if word3 not in spellwords:
                spellwords[word3] = 1
            else:
                spellwords[word3] += 1


    # sort words by value
    lst = list()
    for key, val in list(alicewords.items()):
        if not key in commonwords:
            if key in spellwords:
                lst.append((val, key))

    lst.sort(reverse=True)

    for key, val in lst[:7]:
        print(key, val)


def letter_percent():
    """
    6: letter frequency - 7 most frequest letters in order highest-lowest in percent
    """
    file = alice_main()
    textlen = len(file.read())
    
    #count
    coll = collections.Counter()
    file.seek(0)
    for line in file:
        coll.update(line.translate(punkter).rstrip().lower().replace(" ", ""))
    #percent
    for letter, count in coll.most_common(7):  
        counted = int(count)
        percent = counted/textlen * 100
        print("{0}: %{1:.2f}".format(letter, percent))



