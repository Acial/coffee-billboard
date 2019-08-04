### Prerequisites
To run this project you will need:
- node.js - https://nodejs.org/en/
- .NET Core 2.2 - https://dotnet.microsoft.com/download


### Running back end project
Following commands will create SQLite database with seeded data and start the project:
```sh
$ cd coffee-billboard-back\CoffeeBillboard.DataAccess\
$ dotnet ef database update
$ cd ..\CoffeeBillboard.API\
$ dotnet run
```
### Running front end project
Following commands will install required dependencies and start the project:
```sh
$ cd coffee-billboard-front\
$ npm install
$ npm start
```
