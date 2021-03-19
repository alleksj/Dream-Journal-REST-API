# Dream-Journal-REST-API

## Tasks covered

1. Create an empty Express.js app.
2. Implement “Get all dream types” endpoint which returns an
array of strings (values of the enum).
3. Implement Dream CRUD endpoints.

## Technologies used

**NPM** - [https://www.npmjs.com/](https://www.npmjs.com/)

A package manager for CommonJS packages, command line applications, and much more.

**nodemon** - [https://www.npmjs.com/package/nodemon](https://www.npmjs.com/package/nodemon)

Run a Javascript file in the commandline. If a Javascript file changes nodemon will restart the process.

**Express** - [https://www.npmjs.com/package/express](https://www.npmjs.com/package/express)

A backend web framework which can be used to render html server side or create restful api's.

**mongoose** - [https://www.npmjs.com/package/mongoose](https://www.npmjs.com/package/mongoose)

Helps you to work with Mongo databases.

**Cloud Hosted MONGODB** - [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)

MongoDB Atlas is hosted on the cloud and helps visualise the data in a database.


## Installation

### npm

To check if you have Node.js installed, run this command in your terminal:

```bash
node -v
```
To confirm that you have npm installed you can run this command in your terminal:

```bash
npm -v
```
To install (or update) npm, run this command in your terminal:

```bash
npm install npm@latest -g
```

### Initialize the project

```bash
node init
```

### Start the server

```bash
node run Express.js
```

### nodemon

To install nodemon, run this command in your terminal:

```bash
npm install nodemon
```

In the package.json file, under scripts add the following:

```
"start": "nodemon Express.js",
```

Now, the file can be run using the following command in your terminal:

```bash
npm run start
```

### Express

To install express, run this command in your terminal:

```bash
npm install express
```

### mongoose

To install mongoose, run this command in your terminal:

```bash
npm install mongoose
```

### MongoDB Atlas

To connect to the database using, generate a database connection string and replace `process.env.DB_CONNECTION_STRING` with it in the following code:

```javascript
mongodb.connect(process.env.DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    db = client.db();
    app.listen(3000);
});
```

## Future improvements

The biggest improvement, which is already in process, is splitting the code in Express.js into separate files (router, controllers, database). That would make code more readable, and more importantly, easier to maintain.
