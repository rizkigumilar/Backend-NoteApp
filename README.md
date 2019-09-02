# Restfull API Express


<p align="center">
  <a href="https://nodejs.org/">
    <img src="https://cdn-images-1.medium.com/max/871/1*d2zLEjERsrs1Rzk_95QU9A.png">
  </a>
</p>

## Prerequiste

- Node.js - Download and install [Node.js](https://nodejs.org/en/)
- Mysql - Download and install [Mysql](https://www.mysql.com/downloads/)

## How to run the app ?
1. Open CMD or Terminal and enter to the app directory
2. [Instalation](#Instalation)
3. Make a new file called **.env** in the root directory, set up first [here](#Create-Environment)
4. Turn on Web Server and MySQL can using Third-party tool like xampp, etc.
5. Create Database on **phpmyadmin**
6. Open Postman desktop application or Chrome web app extension that has installed before
7. Choose HTTP Method and enter request url.(ex. localhost:3000)
8. You can see all the end point [here](#Endpoint) or you can see Collection [here](https://www.getpostman.com/collections/ced68f7ecf5eff29625d)

## Instalation

```
$ git clone https://github.com/rizkigumilar/Backend-NoteApp.git
$ cd backEndPolopadGame
$ npm install
```
## Create Environment
```
$ touch .env
$ nano .env
```
```
DB_HOST="Your_Host"
DB_USER="Your_Username"
DB_PASSWORD="Your_Password"
DB_NAME="Your_Table"

PORT = 5000
REQUEST_HEADERS = "Your Header"
SECRET_KEY = "Key for Encryption Password"
WHITELIST ="http://localhost:5000,http:example1.com"
```
## Start Server
```
$ npm start
```

## Author
<center>
  <table>
    <tr>
      <td align="center">
        <a href="https://github.com/rizkigumilar">
          <img width="100" src="https://avatars3.githubusercontent.com/u/50262941?s=460&v=4" alt="Rizki Gumilar"><br/>
          <sub><b>Rizki GUmilar</b></sub>
        </a>
      </td>
    </tr>
  </table>
</center>