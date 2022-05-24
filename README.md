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
