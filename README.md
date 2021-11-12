# Super Galactic Age Calculator

#### Find out your age and life expectency in Mercury, Venus, Mars, and Jupiter years!
---
#### By
* _**Ella Tanttu**_

## Technologies Used

- CSS3
- HTML5
- JAVAscript
- eslint
- Jest
- Node & NPM
- popper.js
- webpack

## Description

_ADD UPON COMPLETION_

## View Live Application on GH-Pages
_PLACE LINK TO LIVE SITE HERE_

## Setup & Installation Instructions

1. Download or clone github repository to local machine in desired directory - https://github.com/ellajtanttu/super-galactic
2. If downloaded, extract .zip contents to desired directory
3. Navigate to and open directory with Visual Studio Code
4. Open terminal and install required packages by typing "npm install"
5. Test code in terminal by typing "npm test"
6. Build the display environment in the terminal by typing "npm run build"
7. Run the environment in your default web browser by typing "npm run start" in the terminal

## Known Bugs

No known issues

## License

_MIT Copyright (c) 2021 Ella Tanttu_
_https://opensource.org/licenses/MIT_

## Contact Information

_Ella Tanttu ellajtanttu@gmail.com_

---


# Whiteboarding

## Prompt
> Super Galactic Age Calculator
A solar year lasts 365 days on planet Earth. However, the length of a solar year varies from planet to planet. For instance, a solar year on Mercury lasts 88 days. Write an application that determines a user's age based on a planet's solar years.
>
> You are not required to build a UI for this application. Instead, focus on thoroughly testing each piece of functionality. Normally, we want you to follow testing best practices, which includes committing your code and test once it is passing. However, for this project, we want you to follow a different commit workflow to demonstrate your understanding of the Red, Green, Refactor workflow. Make sure that you:
>
>* Commit each test after you have written it and before writing the corresponding method in your business logic. This is the Red phase.
>* Then, write the business logic that corresponds to the test, verify that your test passes, and then commit your code. This is the Green phase.
>* Refactor your code base and tests as necessary. At the end of your work session, verify that you have 100% coverage on all tests.
>
>The business logic of your application should take a person's age in years and create a class that does the following:
>
>* Returns their age in Mercury years. (A Mercury year is .24 Earth years.)
>* Returns their age in Venus years. (A Venus year is .62 Earth years.)
>* Returns their age in Mars years. (A Mars year is 1.88 Earth years.)
>* Returns their age in Jupiter years. (A Jupiter year is 11.86 Earth years.)
>* Determines how many years a user has left to live on each planet… (yikes!) To do this, the application will have to calculate the user's life expectancy. You can determine average life expectancy as you see fit. A simple way to do this would be to have the user input the average life expectancy for their demographic. A more involved way to do this would be to collect other information from the user (e.g. lifestyle, country of residence, activity level, etc.) to determine their life expectancy.
>* If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy. The number of years lived past life expectancy should be a positive number.
>
>Keep it simple! You do not have to use the JavaScript Date object to complete this prompt.

## Analysis & Brainstorm
Order of events:
1. UI- user submits a form telling their age and demographics (tbd)
2. UI/BL - An object is created that holds the age and demos
3. Method is run on that function that will measure the earth life expectency and store it in the object
4. BL - Four separate functions will measure the ages on different planets, and life expectencies on those planets
5. BL - A ageCalc method will be run on the object, referencing all of the four functions, to return all four of the ages and life expectencies
6. The results will be printed to the dom for the user to see

I will need to make:\
Business Logic:\
X 1. method for life expecency on earth\
<!-- 2. Mercury age/LE calculator function\
3. Venus age/LE calculator function\
4. Mars age/LE calculator function\
5. Jupiter age/LE calculator function -->
X 2. Mercury day to year conversion function
X 3. Venus day to year conversion function
X 4. Mars day to year conversion function
X 5. Jupiter day to year conversion function
6. Life Expectency conversion function (for all planets?)
7. User Object:
      Name: ""
      Earth Age: #
      Type: ""
      Combustibles: Bool
      Diet: ""
      Earth LE: #
      Mercury Age & LE: [#,#]
      Venus Age & LE: [#,#]
      Mars Age & LE: [#,#]
      Jupiter Age & LE: [#,#]



UI: (Further Exploration)
1. form for user to input their name, age, and demographics
2. results div to show the ages

Days it takes to circle the sun on different planets:

Earth: 365 days
Mercury: 88 days
Venus: 225 days
Mars: 687 days
Jupiter: 4,333 days

1. are you a: Bloogblag, Magmoog, or Magblag?
2. how many times have you made a full circle around the sun?
3. do you inhale combustibles?
4. Are you a carnivore or herbivore? (there is no middle)

bloogblag - base is 67\
magmoog - base is 83\
Magblag - base is 75\
inhale combustibles - (-20)\
carnivore - (+12)\
herbivore - (+18)

## Pseudocode

      function earthLE() {
            let lifeExp = 0;
            if (type === bloogblag) {
                  life exp += 67
            } else if (type === magmoog) {
                  life exp += 83
            } else {
                  life exp += 75
            }

            if (inhaleComp === true) {
                  lifeExp -= 20;
            } else {
                  lifeExp -= o;
            }

            if (diet === "carnivore) {
                  lifeExp += 12;
            } else {
                  lifeExp += 18;
            }
            return lifeExp;
      }

      prototype.yrsToDays = function () {
            this.age *= 365
      }

      dayAge = object.age.yrsToDays();

      prototype.mercury = function () {
            mercConv = day.age / 88
            return mercConv
      }

      prototype.venus = function () {
            venConv = day.age / 225
            return venConv
      }

      prototype.mars = function () {
            marsConv = day.age / 687
            return marsConv
      }

      prototype.jupiter = function () {
            jupConv = day.age / 4333
            return jupConv
      }
      prototype.ageCalc = function () {
            const ageDays = this.earthAge.yrsToDays();
            this.mercData.push(ageDays.mercury)
            this.venData.push(ageDays.venus)
            this.marsData.push(ageDays.mars)
            this.jupData.push(ageDays.jupiter)
      }

      prototype.lifeExp = function () {
            const lEDays = this.earthLE.yrsToDays();
            this.mercData.push(lEDays.mercury)
            this.venData.push(lEDays.venus)
            this.marsData.push(lEDays.mars)
            this.jupData.push(lEDays.jupiter)
      }

      function GlabbaData(name, earthAge, type, combs, diet, earthLE, mercData, venData, marsData, jupData) {
            this.name: name;
            this.earthAge: earthAge;
            this.type: type;
            this.combs: combs;
            this.diet: diet;
            this.earthLE: earthLE;
            this.mercData: mercData;
            this.venData: venData;
            this.marsData: marsData;
            this.jupData: jupData;
      }