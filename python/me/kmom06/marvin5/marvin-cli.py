#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generell användning av Marvin
"""
#import json
import requests
import sys
import getopt
import os.path
import random
from bs4 import BeautifulSoup


PROGRAM = os.path.basename(sys.argv[0])
AUTHOR = "Elin"
VERSION = "1.0"
USAGE = """{program} By {author}, version {version}.

Usage:
  {program}

Options:
-h, --help                Display this help message.
-v, --version             Print version and exit.
-s, --silent                Do not display any details or statistics about the execution.
--verbose                Display details and statistics about the execution.
ping <url>                Ping a webpage
ping-history                Display previously pinged webpages and status code.
quote                    Get 'quote of the day'!
title <url>                Display webpage title.
seo                     Analyse a webpage from a SEO-perspective

-o <filename>, --output=<filename>     Save output to file.
-i <filename>, --input=<filename>     Get input from file. 

""".format(program=PROGRAM, author=AUTHOR, version=VERSION)

MSG_VERSION = "{program} version {version}.".format(program=PROGRAM, version=VERSION)
MSG_USAGE = "Use {program} --help to get usage.\n".format(program=PROGRAM)


# Global default settings affecting behaviour of script in several places
# global VERBOSE, OUTPUT, INPUT, JSON

SILENT = False
VERBOSE = True
NAME = ""
OUTPUT = None
INPUT = None

EXIT_SUCCESS = 0
EXIT_USAGE = 1
EXIT_FAILED = 2



def printUsage(exitStatus):
    """
    1. Print usage information about the script and exit.
    """
    print(USAGE)
    sys.exit(exitStatus)


def printVersion():
    """
    2. Print version information and exit.
    """
    print("\n") 
    print(MSG_VERSION)
    sys.exit(EXIT_SUCCESS)


def ping(url):
    """
    5. Pinga en webbsida med följande kommando: ./marvin-cli.py ping <url>
    """
    try:
        req = requests.head(url)

        with open('HTTP.txt', 'a+', encoding="utf-8") as f:
            fo = str(req.status_code)
            f.write(url + " : " + fo + '\n')
            f.close()
        
            if VERBOSE:
                print("\nRequest to ", url)
                print("\nRecieved status code: ", req.status_code)
                print("\nSaving output status code to file <HTTP.txt>")

            if not VERBOSE:
                print("\n")
                print(req.status_code)
        
        sys.exit(EXIT_SUCCESS)

    except requests.ConnectionError:
        print("Failed to connect, try again")
        print(EXIT_FAILED)


def ping_history():
    """
    5.2 Visa innehållet i filen HTTP
    ./marvin-cli.py ping-history
    """
    if VERBOSE:
        print("\nDisplaying ping history\nURL : recieved status code")

    with open('HTTP.txt', 'r+') as file:
        pinghist = file.read()
        print("\n" + pinghist)
        sys.exit(EXIT_SUCCESS)



def get_soup(url):
    """
    6. Hämta en webbsida med följande kommando: ./marvin-cli.py get <url>
    Resultatet skall bli att webbsidans innehåll skrivs ut på skärmen. 
    Om man anger --output=<file> så skall utskriften ske till en fil, istället för skärmen.
    """
    
    try:
        
        # Get webpage
        req = requests.get(url)        
        # Get the webpage content as a soup
        #soup = BeautifulSoup(req.text, "html.parser")

        if VERBOSE:
            print("\nRequest to ", url)
            print("\nThe response status code is:\n", req.status_code)
        
        if OUTPUT:
            # write to file
            with open(OUTPUT, 'w', encoding="utf-8") as webContent:
                webContent.write('Content from {}: \n\n{}'.format(url, req.text))
                webContent.close()                
                if VERBOSE:
                    print("\nThe file was saved as:", OUTPUT)

        #Print out the content
        if not OUTPUT:
            print('Done! Content from {}: \n\n{}'.format(url, req.text))
        
        sys.exit(EXIT_SUCCESS)

    except requests.ConnectionError:
        print("Failed to connect, try again")
        print(EXIT_FAILED)



def quote():
    """
    7. Printa dagens citat
    """
    #./marvin-cli.py quote
    url = "http://dbwebb.se/javascript/lekplats/get-marvin-quotes-using-ajax/quote.php"
    try:
        req = requests.get(url)
        json1 = req.json()

        if VERBOSE:
            print("\nRequest to ", url)
            print("\nThe response status code is:\n", req.status_code)
            print("\nThe response body is:\n", req.text)
            
        if INPUT:
            if VERBOSE:
                print("Opening file: ", INPUT)          
            with open(INPUT) as req:
                req = req.readlines()
                req = ''.join(req)
                req = json1.loads(req)
                quotestring = req['quotes'][random.randint(0, len(req['quotes']) - 1)]
                print(quotestring)
                #sys.exit(EXIT_SUCCESS)
                
        if not INPUT:
            print("\nQuote of today is:\n\"{quote}\"\n".format(quote=json1["quote"]))

        sys.exit(EXIT_SUCCESS)

    except requests.ConnectionError:
        print("Failed to connect, try again")
        print(EXIT_FAILED)


def get_title(url):
    """
    #8. Hämta och visa titeln från vald webbsida.
    """    
    #./marvin-cli.py title
    try:
        req = requests.get(url)
        soup = BeautifulSoup(req.text, "html.parser")
            
        if VERBOSE:
            print("\nRequest to", url)
            print("\nThe response status code is: ", req.status_code)
            print("\nThe webpage title is: \n", soup.title.string)

            if not VERBOSE:
                print(soup.title.string)

        if INPUT:
            with open(INPUT, 'r') as file:
                file = file.readlines()
                ftitle = file.title.string
                print(ftitle)

        sys.exit(EXIT_SUCCESS)
                            
    except requests.ConnectionError:
        print("Failed to connect, try again")
        print(EXIT_FAILED)


def seo_page(url):
    """
    9. Hämta en webbsida och analysera den ur perspektivet sökmotoroptimering.
    Sidan har (endast) ett element <title>, räkna antalet tecken i elementet.
    Räkna antalet element som är <h1> respektive <h2>.
    Räkna antalet länkar, element av typen <a>.
    """
    try:
        #download page        
        req = requests.get(url)
        soup = BeautifulSoup(req.text, "html.parser")
        
        #get title and len
        titel = (soup.title.string)
        titellen = len(titel)

        if VERBOSE:
            print("Title: ", titel)
        
        #count links
        linkcount = 0
        for link in soup.find_all('a'):
            links = (link.get('href'))
            linkcount = linkcount + 1

            if VERBOSE:
                print("\nLinks found: ")
                print(links)
        
        #count h1
        h1s = soup.find_all('h1') 
        h1count = len(soup.find_all('h1'))

        #count h2
        h2s = soup.find_all('h2')
        h2count = len(soup.find_all('h2'))

        if VERBOSE:
            print("\n<h1> and <h2> found: {0}{1}\n".format(h1s, h2s))

        print("Length of title: ", titellen)
        print("\nNumber of links: ", linkcount)
        print("\nNumber of lines with <h1>: {0} and <h2>: {1}".format(h1count, h2count))

        if OUTPUT:
            with open(OUTPUT, 'w') as webContent:
                webContent.write('Content from {}: \n{}'.format(url, req.text))

        if INPUT:
            with open(INPUT, 'r') as file:
                soups = BeautifulSoup(file, "html.parser")
                ftitle = soups.title.string
                print(ftitle)
                if VERBOSE:
                    print("File saved as :", INPUT)

        sys.exit(EXIT_SUCCESS)
            
    except requests.ConnectionError:
        print("Failed to connect, try again")
        print(EXIT_FAILED)


def parseOptions():
    """
    Argument parser
    """
    
    try:
        global VERBOSE, OUTPUT, INPUT

        long_opts = ["help", "output=", "input=", "json", "version", "verbose", "silent", "ping=",\
                    "ping-history", "quote", "get=", "title"]
        opts, args = getopt.getopt(sys.argv[1:], "hvso:i", long_opts) 
        print(opts)
        print(args)

        for opt, arg in opts:

            if opt in ("-h", "--help"):
                printUsage(EXIT_SUCCESS)
            
            elif opt in ("-v", "--version"): 
                printVersion()

            elif opt in ("--verbose"):
                VERBOSE = True

            elif opt in ("-s", "--silent"):
                VERBOSE = False

            elif opt in ("--input"):
                INPUT = arg
                if VERBOSE:
                    print("Setting INPUT to ", INPUT)

            elif opt in ("-o", "--output"):
                OUTPUT = arg
                if VERBOSE:
                    print("Setting OUTPUT to ", OUTPUT)

            elif opt in ("--json"):
                JSON = arg
                if VERBOSE:
                    print("Setting JSON to ", JSON)

            else:
                assert False, "Unhandled option"
                sys.exit(EXIT_USAGE)

        if args[0] in ("ping"):
            ping(args[1])

        elif args[0] in ("ping-history"):
            ping_history()

        elif args[0] in ("get"):
            get_soup(args[1])
            
        elif args[0] in ("quote"):
            quote()

        elif args[0] in ("title"):
            get_title(args[1])

        elif args[0] in ("seo"):
            seo_page(args[1])

        else:
            assert False, "Unhandled option"
            sys.exit(EXIT_USAGE)

        if len(args) != 1:
            assert False, "Please provide an argument"
            sys.exit(EXIT_USAGE)

        global NAME
        NAME = args[0]

    except Exception as err:
        print(err) 
        print(MSG_USAGE)
        sys.exit(EXIT_USAGE)


def main():
    """
    Main function to carry out the work.
    """
    parseOptions()

    sys.exit(EXIT_USAGE)

if __name__ == "__main__":
    main()


