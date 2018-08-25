# Node.js Landing

This repository holds the source code of a **template** for the development of a **Node.js landing** written mainly in javascript, pug and scss
<br/><br/><br/>

## Architecture design

### Overview ### 
For handle common server actions, the templates use the following structure:
  - /locale: Website content
  - /middlewares: Server middlewares
  - /public: Public resources such as scripts, images and files
  - /views: UI implementation
  - routes.js: Endpoint definitions

### UI ###
  - /locale: Store all the content of the landing page. It includes locale support (es, en, etc), image urls and metadata
  - /views: Represents the views of the website. They are written in pug script.

### Http resources ###
  - routes.ts: Handle the endpoints representations. 
  - /middlewares: Represents the server middlewares 

### Assets ###
  - /public: Resources that are public via  *e.g profile_image.png, doc.pdf*
  > Note: For the management of styles, the project use .scss so ignore the css folder
<br/><br/>

## Pre-requisites:

 * Download & install [Node js](https://nodejs.org/en/download/) or an equivalent
 * Download & install [Visual Studio code](https://code.visualstudio.com/) or an equivalent (optional)

### To start coding and build:

 * Clone this repository
 * Install dependencies
 ```bash
 $ npm install
 ```
 * Run server
 ```bash
$ npm start
 ```
  > When the command is executed, any change on code is automatically updated and built (including scss). So it is not necessary to restart server
 * Open in browser
 ```bash
$ http://localhost:5005
 ```