var users = db.getUsers();
var result =  users.some(function(e) { return e.user == "admin"});

if (!result) {
  db.createUser(
    {
      user: "admin",
      pwd: "pass",
      roles: [ "root" ]
    }
  );
  db.createCollection("test");
}