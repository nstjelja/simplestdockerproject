var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://admin:pass@mongo:27017/admin';

var count = 0;
var clearIntervalToken = setInterval(function(){
    MongoClient.connect(url, function(err, db) {
        count+=1;
        console.log("Calling " + count + " times");

        if (err !=null && count >= 15){
            console.log("Called enough times");
            clearInterval(clearIntervalToken);
            process.exit(1);
            return;
        }

        if (err != null){
            console.log("Not connected to the mongodb server");
            return;
        }

        clearInterval(clearIntervalToken);
        console.log("Connected correctly to server.");
        db.close();    
        process.exit(0);
    });
},30000);




