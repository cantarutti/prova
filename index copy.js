var Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,    Server = require('mongodb').Server,
    ReplSetServers = require('mongodb').ReplSetServers,
    ObjectID = require('mongodb').ObjectID,
    Binary = require('mongodb').Binary,
    GridStore = require('mongodb').GridStore,
    Grid = require('mongodb').Grid,
    Code = require('mongodb').Code,
    //BSON = require('mongodb').pure().BSON,
    assert = require('assert');

var db = new Db('test', new Server('192.168.0.2', 27017));
// Establish connection to db
db.open(function(err, db) {

  // Use the admin database for the operation
  var adminDb = db.admin();

  // Add the new user to the admin database
  adminDb.addUser('admin3', 'admin3', function(err, result) {

    // Authenticate using the newly added user
    adminDb.authenticate('admin3', 'admin3', function(err, result) {
      assert.ok(result);

      // Retrive the build information for the MongoDB instance
      adminDb.buildInfo(function(err, info) {
        assert.ok(err == null);

        adminDb.removeUser('admin3', function(err, result) {
          assert.ok(result);

          db.close();
        });
      });
    });
  });
});