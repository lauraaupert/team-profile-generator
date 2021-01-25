
# Team-Profile Generator	![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## DESCRIPTION

This app generates a roster based on individual employee profiles. The user input the details into Node.js inquirer and an HTML file is generated with a complete team roster. There is 1 superclass and 3 subclasses used to categorize employees, and tests are run through jest. Each question in the Inquirer has a validation function to ensure that the format of user input is the correct one (numbers, email, string). This generator is centered around Object-Oriented Programming and Test Driven Development.

Technology used: JavaScript, HTML, CSS, Node.js, jest, inquirer

View the app in action: https://drive.google.com/file/d/1mPSdn85mcopOMJEznEAs3sO188F9UWb0/view

## TABLE OF CONTENTS

[User Story and Requirements](#USER)  
[Installation](#INSTALLATION)  
[Testing](#TESTING)  
[License](#LICENSE)  

## USER STORY AND REQUIREMENTS <a name="USER"></a>

AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated


## INSTALLATION <a name="INSTALLATION"></a>

Please install the npm package.

## TESTING <a name="TESTING"></a>

To test, simply run "npm run test" in your terminal after installing all modules.

## QUESTIONS <a name="QUESTIONS"></a>
For additional questions, please get in touch:  
https://github.com/lauraaupert  
aupert.laura@gmail.com

## LICENSE
MIT License

Copyright (c) 2021 lauraaupert

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
