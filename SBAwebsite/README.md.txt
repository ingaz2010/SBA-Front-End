GitHub repository URL: https://github.com/ingaz2010/SBA-Front-End

For this assignment I created a website for  daycare using HTML, CSS and JavaScript.
It has 7 pages: Home page, description for each program (toddlers, 3-K, PRE-K) on each page, provider's log in page, registry and contact pages.

Each page has logo with picture, daycare's name, phone number and address on top as a header; menu which contains also a dropdown part.

Home page has a daycare description along with a picture and video.

Dropdown section of the menu groups together pages for each program. Those pages are similar to each other, containing program's descriptions, on the bottom of each page there is a button with the link to Contact Us page.

Contact us page contains a form with person's information, along with option to select a predefined reasons for contact and message box. Once we click Submit button, all entered Information will be displayed on the screen. Also, this page contains a gif.

Provider's Login page can be accessed from a menu. It has two forms. One to log in with already existing username and password, another one is to create account with new username and password. This page uses login.js file, which allows us to create new User object with information entered at the create account form, saves it in an array. When we log in, it takes username and password and traverses through the array with users comparing entered data with data inside each object. If it finds a match than alert window pops up and we get redirected to a Register page.

To make easy access for testing purposes, Register page could be also accessed through dropdown part of menu under the programs. this page allows providers to input child's information, including information about it's parents and register the child for a program. Once Register button is clicked, new Child object is created with all information provided in the form; mother and father objects get created as well, and added to the child class, so this way we have an access to that information. Than we have Program objects created for each program. based on the preference for a program for a child we add the child to the program's array of kids attending the program (contains child objects).
Once the child is registered and added to the program, then it gets; displayed in one of the tables on the bottom of the page. There are three tables for each program. Once the child is added, new row created in the table and child's information gets displayed in the new row.
Regex validation is used in login page.


