# TESTING THE API FROM THE USER SIDE
# commands ktore su zadefinovane na api: post, get, patch, delete
# inputy su tu len pre prehladnost

import requests

BASE = 'http://127.0.0.1:5000/' # kde sa ta api nachadza

response = requests.post(BASE + "posts", {"id": 1, "userId": 1, "title": "Actually the second post","body": "well lets hope this will work"})
print(response.json())

input()

response = requests.post(BASE + "posts", {"id": 0, "userId": 2, "title": "Actually the post", "body": "well lets work"})
print(response.json())

input()

response = requests.get(BASE + "posts", {"userId": 2})
print(response.json())

input()

response = requests.get(BASE + "posts", {"id": 3})
print(response.json())

input()

response = requests.patch(BASE + "posts", {"id": 3, "userId": 1, "title": "Normal title"})
print(response.json())

input()

'''
response = requests.delete(BASE + "posts", data={"id": 1, "userId": 1})
print(response)
'''