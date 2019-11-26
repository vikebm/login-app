# Template for login App
This is a template for the users module. It contains the method of registration and login. Mongodb was used to store user information. The code is written in ES6

### Dev Dependencies used
- **Babel**: Used to compile the project, for babel plugins i use `@babel/cli`
  `@babel/core` `@babel/node` and `@babel/presets-env`
- **Eslint**: Used to check for mistakes in the source files. I personally use
  prettier to check for rules so i use `eslint-config-prettier` and
  `eslint-pluggin-prettier` to help me with this
- **Nodemon**: to run the project as dev used usually with `babel-node`
- **Prettier**: as a ruleset for the code
- **Rimraf**: it's just a helper to delete the dist folder when i'm rebuilding
    the project

## Running Locally

#### Prerequisites
* [Git](https://git-scm.com/downloads)
* [Node JS](https://nodejs.org/en/)

#### 1. Clone the repo and install dependencies
```bash
git clone 
cd login-app
npm i
```

#### 2. Start the server
To run in production mode where code is transpiled by Babel into a `dist` folder and run directly in `node`:
```bash
npm start
```

To run in development mode where code is run by [babel-node](https://babeljs.io/docs/en/babel-node) via [nodemon](https://nodemon.io) and re-transpiled any time there is a change:
```bash
npm run dev
```    
