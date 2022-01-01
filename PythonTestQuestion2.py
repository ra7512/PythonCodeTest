import json
#dictionary with provided info
dict = {
    "Name": "john Doe",
    "Age": 35,
    "City":"Collingwood"
}

#Convert dict to a json and output said file
with open('test.json','w') as outFile:
    json.dump(dict,outFile)

