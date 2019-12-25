#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
import to marvin
"""

def mood():
    """
    mood random
    """
    import time
    import random
    # 24 hour format
    currtime = time.strftime("%H:%M:%S")
    # dd/mm/yyyy format
    currdate = time.strftime("%d/%m/%Y")
    
    moods = ['happy', 'hungry', 'tired', 'bored', 'natural', 'naughty', '\
    nervous', 'obstinate', 'outraged', 'outstanding']
    print('The time is {0}, todays date is {1} and I am feeling {2}% {3}. \
    This took me less than {4} second to figure out!'.format(currtime, currdate, 0.458, random.choice(moods), 1))

