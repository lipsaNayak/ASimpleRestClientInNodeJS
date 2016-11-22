# ASimpleRestClientInNodeJS

1. Dowload the source from the repo.
2. Install and setup the mongo DB.
        a. Install mongodb which is easily and freely available on your system.
        b. Start your monodb issuing the command : 
           > mongod --dbpath $Installed_dir/data
        c. On another terminal type the below command
           > mongo
        d. On the same terminal type the below command:
           > use nodeServerWithRest (The name of the db i have given is nodeServerWithRest,you can give anything u like, but              change the code accordingly.)
        e. You can create a db and then push data one by one else open another terminal and issue the below command for import            the devices.json. 
           > mongoimport --db nodeServerWithRest --collection devices --file devices.json --jsonArray
           You can find devices.json in the repo.
7. After the DB is set, start the node server by issuing the command npm install and then npm start.
8. The server would have started at http://localhost:8000/
