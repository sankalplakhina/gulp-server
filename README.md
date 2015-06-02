# gulp setup with css js and express

This zip acts as a boiler plate before starting any project. It save pre project setup time as well as automates the repetative tasks like JS and CSS conctatenation and minifatcion.

Download the zip and follow the instructions below to get it up and running at http://localhost:4000/.

Install Node.js - For the app to create a server and download dependencies, download and install Node.js from https://nodejs.org/download/

Once Node.js is installed in your system, go to terminal / command line / git bash (whatever you have in your system at present) and check for its installation by typing : $ node -v

This will give the node version and confirm the installation of Node.js in your system. For this application, I developed using v0.10.26

Now navigate to the root folder of this app by using terminal navigation commands like below: $ cd ~/somepath/gulp-server/

Once you are succefully at the root folder of this app, Run the following commands to download npm and bower dependencies of the app.

$ npm install

Above command will download the npm module dependencies like express and gulp plugins by reading the package.json file

$ bower install

Above command will download the javascript dependencies of application like angular, jquery, bootstrap, etc. by reading the bower.json file

Once all the downloads are completed, you can start the application server by typing the following at the root folder where you see server.js:

$ gulp

This will start the server at port 4000.

That is all you require!!