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
  viewVendor,
  registerCustomer,
  updateCustomer,
  deleteCustomer,
  viewCustomer,
  registerOrders,
  updateOrders,
  deleteOrders,
  viewOrders,
  registerProducts,
  updateProducts,
  deleteproducts,
  viewProducts,
  registerCategories,
  updateCategories,
  deleteCategories,
  viewCategories,
  registerSellers,
  updateSellers,
  deleteSellers
  
};
// functions for userlogin
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
// Functions for Vendorlogins

function registerVendor(req, res) {
  
  var id = req.body.id;
  var password = req.body.password;
  const query = "insert INTO vendorlogin (id, password ) VALUES ("+" '"+id+"','"+password+"')";
  client.execute(query)
  .then((result) => {
    res.json("success");
  })
  .catch(err => {
    console.log("error in savingdata(registerUser)->" + err);
    res.json("error");
  })

}


// function registerVendor(req, res) {

// var records=req.body.records;
// var count=0;
// console.log("Total Records is ->"+records.length);
// for(var i=0;i<records.length;i++){
//   addData(records[i].id,records[i].password,records[i].name,records[i].phone,records[i].address)
// }

// function addData(id,password,name,phoneNo,address){

//   const query = "insert INTO vendorlogin (name,id,address,phoneNo,password) VALUES ( '"+name+"','"+id+"','"+address+"','"+phoneNo+"','"+password+"');";
//   client.execute(query)
//   .then((result) => {
//     count++;
//     if(count==records.length){
//      res.json("success");
//     }
//   })
//   .catch(err => {
//     console.log("error in savingdata(registerUser)->" + err);
//     count++;
//     if(count==records.length){
//      res.json("success");
//     }
//   })
// }
// }

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

//Functions for customer

function registerCustomer(req, res) {
  console.log('1111');
  var id = req.body.id;
  var password = req.body.password;
  var billingaddress = req.body.billingaddress;
  var name = req.body.name;
  var phone = req.body.phone;
  var orders = req.body.orders;
  const query = "insert INTO customer (id, password,billingaddress,name,phone,orders ) VALUES ("+" '"+id+"','"+password+"', '"+billingaddress+"','"+name+"','"+phone+"',['"+orders+"'])";
  
  console.log('2222');
  client.execute(query)

  .then((result) => {
    console.log('3333');
    var q1="select id,password from customer where id='"+ id+"'";
    client.execute(q1)
    .then(res10=>{
var response=" Welcome " + name +" Your new password is :"+ password;
res.json(response);
    })
    .catch(err=>{
      console.log("Error in view user details->"+ err);
      var response=" Bad Luck Mate, Try again in sometime when my code finally works";
res.json(response);

    })
    
  })
  .catch(err => {
    console.log('4444');
    console.log("error in savingdata(registerUser)->" + err);
    res.json("error");
  })
  console.log('5555');
  // const query = "select * from customer where id = '"+id+"'";
}

// function for updating customer


function updateCustomer(req, res) {
  
  var id = req.body.id;
  var password = req.body.password;
  const query = "update customer set password = '"+password+"' where id = '"+id+"'";
  client.execute(query)
  .then((result) => {
    res.json("success");
  })
  .catch(err => {
    console.log("error in savingdata(updateUser)->" + err);
    res.json("error");
  })

}


function deleteCustomer(req, res) {
  
  var id = req.body.id;
  
  const query = "delete from customer WHERE id = '"+id+"' ";
  client.execute(query)
  .then((result) => {
    res.json("success");
  })
  .catch(err => {
    console.log("error in savingdata(deleteUser)->" + err);
    res.json("error");
  })

}


function viewCustomer(req, res) {
  
  //var id = req.body.id;
  var response = {};
  
  const query = "select * from customer ";
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
// Functions for Orders

function registerOrders(req, res) {
  
  var id = req.body.id;
  var categoryid = req.body.categoryid;
  var productid = req.body.productid;
 
  const query = "insert INTO orders (id, categoryid, productid) VALUES ("+" '"+id+"','"+categoryid+"', '"+productid+"')";
  client.execute(query)
  .then((result) => {
    res.json("success");
  })
  .catch(err => {
    console.log("error in savingdata(registerUser)->" + err);
    res.json("error");
  })

}

// function for updating customer


function updateOrders(req, res) {
  
  var id = req.body.id;
  var categoryid = req.body.categoryid;
  var productid = req.body.productid;
  const query = "update orders set productid = '"+productid+"', categoryid = '"+categoryid+"' where id = '"+id+"'";
  client.execute(query)
  .then((result) => {
    res.json("success");
  })
  .catch(err => {
    console.log("error in savingdata(updateUser)->" + err);
    res.json("error");
  })

}


function deleteOrders(req, res) {
  
  var id = req.body.id;
  
  const query = "delete from orders WHERE id = '"+id+"' ";
  client.execute(query)
  .then((result) => {
    res.json("success");
  })
  .catch(err => {
    console.log("error in savingdata(deleteUser)->" + err);
    res.json("error");
  })

}


function viewOrders(req, res) {
  
  //var id = req.body.id;
  var response = {};
  
  const query = "select * from orders";
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
// Functions for the products

function registerProducts(req, res) {
  
  var id = req.body.id;
  var name = req.body.name;
  var description = req.body.description;
 
  const query = "insert INTO  products (id,name,description) VALUES ("+" '"+id+"','"+name+"', '"+description+"')";
  client.execute(query)
  .then((result) => {
    res.json("success");
  })
  .catch(err => {
    console.log("error in savingdata(registerUser)->" + err);
    res.json("error");
  })

}

function updateProducts(req, res) {
  
  var id = req.body.id;
  var description = req.body.description;
  var name = req.body.name;

  const query = "update products set description = '"+description+"', name = '"+name+"' where id = '"+id+"'";
  client.execute(query)
  .then((result) => {
    res.json("success");
  })
  .catch(err => {
    console.log("error in savingdata(updateUser)->" + err);
    res.json("error");
  })

}


function deleteproducts(req, res) {
  
  var id = req.body.id;
  
  const query = "delete from products WHERE id = '"+id+"' ";
  client.execute(query)
  .then((result) => {
    res.json("success");
  })
  .catch(err => {
    console.log("error in savingdata(deleteUser)->" + err);
    res.json("error");
  })

}


function viewProducts(req, res) {
  
  //var id = req.body.id;
  var response = {};
  
  const query = "select * from products";
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
  
function registerCategories(req, res) {
  
  var id = req.body.id;
  var name = req.body.name;
  var description = req.body.description;
 
  const query = "insert INTO  categories (id,name,description) VALUES ("+" '"+id+"','"+name+"', '"+description+"')";
  client.execute(query)
  .then((result) => {
    res.json("success");
  })
  .catch(err => {
    console.log("error in savingdata(registerUser)->" + err);
    res.json("error");
  })

}

function updateCategories(req, res) {
  
  var id = req.body.id;
  var description = req.body.description;
  var name = req.body.name;

  const query = "update categories set description = '"+description+"', name = '"+name+"' where id = '"+id+"'";
  client.execute(query)
  .then((result) => {
    res.json("success");
  })
  .catch(err => {
    console.log("error in savingdata(updateUser)->" + err);
    res.json("error");
  })

}


function deleteCategories(req, res) {
  
  var id = req.body.id;
  
  const query = "delete from categories WHERE id = '"+id+"' ";
  client.execute(query)
  .then((result) => {
    res.json("success");
  })
  .catch(err => {
    console.log("error in savingdata(deleteUser)->" + err);
    res.json("error");
  })

}


function viewCategories(req, res) {
  
  //var id = req.body.id;
  var response = {};
  
  const query = "select * from categories";
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

function registerSellers(req, res) {
  
  var id = req.body.id;
  var products = req.body.products;
  var categories = req.body.categories;
 
  const query = "insert INTO  seller (id,products,categories) VALUES ("+" '"+id+"','"+products+"', '"+categories+"')";
  client.execute(query)
  .then((result) => {
    res.json("success");
  })
  .catch(err => {
    console.log("error in savingdata(registerUser)->" + err);
    res.json("error");
  })

}

function updateSellers(req, res) {
  
  var id = req.body.id;
  var products = req.body.products;
  var categories = req.body.categories;

  const query = "update seller set products = '"+products+"', categories = '"+categories+"' where id = '"+id+"'";
  client.execute(query)
  .then((result) => {
    res.json("success");
  })
  .catch(err => {
    console.log("error in savingdata(updateUser)->" + err);
    res.json("error");
  })

}


function deleteSellers(req, res) {
  
  var id = req.body.id;
  
  const query = "delete from seller WHERE id = '"+id+"' ";
  client.execute(query)
  .then((result) => {
    res.json("success");
  })
  .catch(err => {
    console.log("error in savingdata(deleteUser)->" + err);
    res.json("error");
  })

}


function viewSellers(req, res) {
  
  //var id = req.body.id;
  var response = {};
  
  const query = "select * from seller";
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