

This project is designed by WVSSM team 
@developer : https://github.com/mohamadch91

# Inventory and Gap Analysis System
# Dependencies
for install dependencies please read Project installation file



# Installation
1. Clone the project
2. Download one editor for example Visual Studio Code
    you can download it from https://code.visualstudio.com/Download
3. Open the project in the editor
4. on the side bar click on the search icon and search for https://example.com"
5. replace the url with your backend url 
6. you can run the project by running the command :
### `serve -s build`

if you don't have serve installed you can install it by running the command :
### `npm install -g serve`

## Running in background

if you want to run the project in background you can run the command :
### `serve -s build -l 3000 &`

or you can install pm2 by running the command :
### `npm install pm2 -g`

then run the command :
### `pm2 start serve --name "wvssm" -- serve -s build -l 3000`



