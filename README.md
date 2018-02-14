# Otodio README

This requires uses Node.js + Mysql and uses npm. 
  bash commands :
      sudo apt-get install nodejs
     
once you have downloaded the files and have navigated to 'Otodio/app' in your bash command.
run the following command to have the dependencies installed
   bash command :
      npm install
      
You could also install nodemon globally to your computer
   nodemon allows you to run the server and any changes made to the file would be monitored by nodemon
   bash commands:
      npm install -g nodemon (install)

I am using Xampp to manage the database but you could also use the standard mysql app.
  Link to Xampp : https://www.apachefriends.org/index.html
 

Enter the app.js file and enter the credentials to your mysql database.

 
If you are not using Xampp, skip to line 30

once you have installed Xampp,
have the Mysql service started

Starting the server:
  If you have installed nodemon,
    bash command :
      nodemon app.js
  If you only have nodejs installed,
    bash command :
      node app.js
  
If you have any issues, let me know on slack.
   

