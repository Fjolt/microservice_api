# Restful API
##  Description
This is a RESTful API written in python for managing user posts. It uses these functions: get, post, patch, delete.
## Table of contents
### main.py
Here all the magic happens. It is where the api runs at. We can find 2 classes: PostModel (model for our database) and Post (the api commands are defined here).
### messages.py
All error messages that our api can send are stored here. This way its easier to change them and manage them.
### parsers.py
In this file we can find parsers for each api request/ functionality.
### tests.py
Here u can test the functionalitie of this api. Try changing several parametres. ;)
### database.db
Internal database of the api that stores all of its data.
### requirements.txt
Here are all the libraries you need to install in order to run this project properly.
## Installation and running the project
For this project you will need several external libraries. Installation can be done through pip and installing the entire requirements.txt file. In order for the api to function you must run the main.py file. After that if you want to try out its functionality run tests.py while main.py is still running.
## Credits
I would like to thank Tim (youtube channel Tech with Tim) for his amazing tutorial on APIs in python. His requirements are those that I use in this project. If you wish to find out more check out his video:https://www.youtube.com/watch?v=GMppyAPbLYk
