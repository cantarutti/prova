
var Db = require('mongodb').Db,
  //MongoClient = require('mongodb').MongoClient,
  Server = require('mongodb').Server,
  ReplSetServers = require('mongodb').ReplSetServers,
  ObjectID = require('mongodb').ObjectID,
  Binary = require('mongodb').Binary,
  GridStore = require('mongodb').GridStore,
  Grid = require('mongodb').Grid,
  Code = require('mongodb').Code;
  //BSON = require('mongodb').pure().BSON;
test = require('assert');

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
process.env.PORT
const user = encodeURIComponent('mongo_user');
const password = encodeURIComponent('mongo_secret');
const authMechanism = 'DEFAULT';

// Connection URL
const url = `mongodb://${user}:${password}@192.168.0.2:27017/?authMechanism=${authMechanism}`;
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("l");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});

// Create a new MongoClient
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = [
    { name: 'John', address: 'Highway 71'},
    { name: 'Peter', address: 'Lowstreet 4'},
    { name: 'Amy', address: 'Apple st 652'},
    { name: 'Hannah', address: 'Mountain 21'},
    { name: 'Michael', address: 'Valley 345'},
    { name: 'Sandy', address: 'Ocean blvd 2'},
    { name: 'Betty', address: 'Green Grass 1'},
    { name: 'Richard', address: 'Sky st 331'},
    { name: 'Susan', address: 'One way 98'},
    { name: 'Vicky', address: 'Yellow Garden 2'},
    { name: 'Ben', address: 'Park Lane 38'},
    { name: 'William', address: 'Central st 954'},
    { name: 'Chuck', address: 'Main Road 989'},
    { name: 'Viola', address: 'Sideway 1633'}
  ];
  dbo.collection("customers").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});

//var MongoClient = require('mongodb').MongoClient;
var url2 = "mongodb://192.168.0.2:27017/gio";

MongoClient.connect(url2, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  console.log(process.env.PORT);
  db.close();
});

var db = new Db('test', new Server('localhost', 27017));


const dbName = 'test';
// Connect using MongoClient

MongoClient.connect(url, function (err, client) {

  // Use the admin database for the operation

  const adminDb = client.db(dbName).admin();
  // List all the available databases

  adminDb.listDatabases(function (err, dbs) {
    console.log(dbs.databases);
    test.equal(null, err);

    test.ok(dbs.databases.length > 0);

    client.close();

  });

});