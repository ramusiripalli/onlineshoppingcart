'use strict';
const cassandra = require('cassandra-driver');
//const client = new cassandra.Client({ contactPoints: ['18.188.206.16'], keyspace: 'tutorial' });
const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], keyspace: 'tutorial' });

var util = require('util');

module.exports = {
  registerUser,
  updateUser,
  deleteUser,
  viewUser,
  registerVendor,
  updateVendor,
  deleteVendor,
  viewVendor

};

function registerUser(req, res) {
  
  var id = req.body.id;
  var password = req.body.password;
  const query = "insert INTO userlogin (id, password ) VALUES ("+" '"+id+"','"+password+"')";
  client.execute(query)
  .then((result) => {
    res.json("success");
  })
  .catch(err => {
    console.log("error in savingdata(registerUser)->" + err);
    res.json("error");
  })

}

function updateUser(req, res) {
  
  var id = req.body.id;
  var password = req.body.password;
  const query = "UPDATE userlogin SET password = '"+password+"' WHERE id = '"+id+"'";
  client.execute(query)
  .then((result) => {
    res.json("success");
  })
  .catch(err => {
    console.log("error in savingdata(updateUser)->" + err);
    res.json("error");
  })

}

function deleteUser(req, res) {
  
  var id = req.body.id;
  
  const query = "delete from userlogin WHERE id = '"+id+"' ";
  client.execute(query)
  .then((result) => {
    res.json("success");
  })
  .catch(err => {
    console.log("error in savingdata(deleteUser)->" + err);
    res.json("error");
  })

}

function viewUser(req, res) {
  
  //var id = req.body.id;
  var response = {};
  
  const query = "select * from userlogin ";
  client.execute(query)
  .then((result) => {
    if(result.rowLength<1){
      response.status = 'no record in the table';
      response.json(response);
      
    }
    else{
      response.status ='success';
      response.users = result.rows;
      res.json(response);
    }
  })
  .catch(err => {
    console.log("error in savingdata(viewUser)->" + err);
    res.status = "we are facing a technical issue right now"
    res.json(response);
  })

}

function registerVendor(req, res) {

var records=req.body.records;
var count=0;
console.log("Total Records is ->"+records.length);
for(var i=0;i<records.length;i++){
  addData(records[i].id,records[i].password,records[i].name,records[i].phone,records[i].address)
}

function addData(id,password,name,phoneNo,address){

  const query = "insert INTO vendorlogin (name,id,address,phoneNo,password) VALUES ( '"+name+"','"+id+"','"+address+"','"+phoneNo+"','"+password+"');";
  client.execute(query)
  .then((result) => {
    count++;
    if(count==records.length){
     res.json("success");
    }
  })
  .catch(err => {
    console.log("error in savingdata(registerUser)->" + err);
    count++;
    if(count==records.length){
     res.json("success");
    }
  })
}
}

function updateVendor(req, res) {
  
  var id = req.body.id;
  var password = req.body.password;
  const query = "update vendorlogin set password = '"+password+"' where id = '"+id+"'";
  client.execute(query)
  .then((result) => {
    res.json("success");
  })
  .catch(err => {
    console.log("error in savingdata(updateUser)->" + err);
    res.json("error");
  })

}
function deleteVendor(req, res) {
  
  var id = req.body.id;
  
  const query = "delete from vendorlogin WHERE id = '"+id+"' ";
  client.execute(query)
  .then((result) => {
    res.json("success");
  })
  .catch(err => {
    console.log("error in savingdata(deleteUser)->" + err);
    res.json("error");
  })

}


function viewVendor(req, res) {
  
  //var id = req.body.id;
  var response = {};
  
  const query = "select * from vendorlogin ";
  client.execute(query)
  .then((result) => {
    if(result.rowLength<1){
      response.status = 'no record in the table';
      response.json(response);
      
    }
    else{
      response.status ='success';
      response.users = result.rows;
      res.json(response);
    }
  })
  .catch(err => {
    console.log("error in savingdata(viewUser)->" + err);
    res.status = "we are facing a technical issue right now"
    res.json(response);
  })

}




  
 

