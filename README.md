# Restful API
##  Description
This is website for managing posts. It uses a RESTful api written in python. User can create, search, delete and update posts.

## Table of contents
### API
A folder where our api is coded.
#### main.py
Here all the magic happens. It is where the api runs at. We can find 2 classes: PostModel (model for our database) and Post (the api commands are defined here). This api also uses Swagger for documentation so if you wanna see that, after running main.py copy this url: http://127.0.0.1:5000/. Then paste it to your web browser to see the swaggger documentation.
#### messages.py
All error messages that our api can send are stored here. This way its easier to change them and manage them.
#### parsers.py
In this file we can find parsers for each api request/ functionality.
#### tests.py
Here u can test the functionalitie of this api. Try changing several parametres. ;)
#### database.db
Internal database of the api that stores all of its data. Some data are already created so that you can properly try out the api functionalities.
#### requirements.txt
Here are all the libraries you need to install in order to run this project properly.
### Website
A folder where our frontend is coded
#### index.html
Here is our home page. It only redirects you to other pages.
#### post_create.html
Page where you can create a post. You have to type in a unique id and an existing user id otherwise it won't work.
#### post_delete.html
Here you can delete posts. Userid and the post id have to match.
#### post_search.html
Page where you can find your post based on its id or user id.
#### post_update.html
Here you have to give user id and the id of the post in order to update it. You can update the title and the body only.
#### all_posts.html
Here you can check out all of the posts that are in the internal database.
#### script.js
Javascript file that supports the functionalities of post_create.html, post_delete.html, post_search.html and post_update.html.
#### script_all.js
Javascript file that helps us find all posts in all_posts.html.
#### style.css
Styling of our home page.
####style_pages.css
Styling of all the other pages.

## Installation and running the project
For this project you will need several external libraries. Installation can be done through pip and installing the entire requirements.txt file. In order for the api to function you must run the main.py file. After that if you want to try out its functionality run tests.py while main.py is still running. To see the swagger documentation, after running main.py copy this url: http://127.0.0.1:5000/ and paste it to your web browser.

For the website part first run your main.py file. Then right click on index.html and choose open with, and open it with your browser. You can try out all the functionalities after that.

## Credits
I would like to thank Tim (youtube channel Tech with Tim) for his amazing tutorial on APIs in python. His requirements are those that I use in this project. If you wish to find out more check out his video:https://www.youtube.com/watch?v=GMppyAPbLYk And also Cryce Truly for his flasgger explanation that helped me set up my swagger.
