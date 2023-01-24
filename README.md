# User list

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

- Node.js
- npm or yarn
- Mysql

## Installing

1. Clone the repository to your local machine.
   git clone https://github.com/abhimran/-user-login-crud.git

2. Install the dependencies for the server by navigating to the root folder and running:
   cd server
   npm install or yarn install

3. Install the dependencies for the client by navigating to the client folder and running:
   cd client
   npm install or yarn install

4. Start the MYSQL server on your local machine.

5. Create a `.env` file in the root folder of the project and add the following variables:

MYSQL_HOST='127.0.0.1'
MYSQL_USER='yourusername'
MYSQL_PASSWORD='yourpassword'
MYSQL_DATABASE='users_app'
PORT=8080
JWT_SECRET='yoursecretkey'

6. Start the server by running:
   npm run dev or yarn dev

7. Start the client by running:
   npm start or yarn start

This will start the server on port 8080 and the client on port 3000. You can access the client by navigating to `http://localhost:3000` in your browser.

## Built With

- [MySql](https://www.mysql.com/) - The backend framework
- [Express](https://expressjs.com/) - The web framework used
- [React](https://reactjs.org/) - The frontend framework
