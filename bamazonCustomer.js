var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon_DB"
});

connection.connect(function(err) {
    if (err) throw err;
    queryAllProducts(); 
  });

function queryAllProducts() {
  connection.query("SELECT * FROM products", function(err, res) {
    for (var i = 0; i < res.length; i++) {
    console.log(res[i].id + " | " + "Item: " + res[i].product_name + " | " + "Price: " + "$" + res[i].price);
    }
    console.log("-----------------------------------");

    inquirer
      .prompt([
        // Here we create a basic text prompt.
        {
          name: "choice",
          type: "rawlist",
          choices: function() {
            var choiceArray = [];
            for (var i = 0; i < res.length; i++) {
              choiceArray.push(res[i].product_name);
            }
            return choiceArray;
          },
          message: "Which item would you like to buy?"
        },
        {
          name: "quantity",
          type: "input",
          message: "How many would you like to buy?",
        }
      ])
      .then(function(selection) {
        var chosenItem; 
        for (var i = 0; i < res.length; i++){
          if (res[i].product_name === selection.choice) {
            chosenItem = res[i];
            console.log(chosenItem);
          }
        }
        if (chosenItem.stock_quantity >= parseInt(selection.quantity)) {
          var newQty = chosenItem.stock_quantity - parseInt(selection.quantity);
          var cost = chosenItem.price * parseInt(selection.quantity);

          connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                stock_quantity: newQty
              },
              {
                id: chosenItem.id
              }
            ],
            function(error) {
              if (error) throw err;
              console.log("Your order has been received!");
              console.log("The total cost of your order is: " + "$" + cost);
              console.log("There are now " + newQty + " of this item in inventory");
            }
          );
        }else{
          console.log ("Sorry, this item is out of stock.");
        }
      });
  });
}
