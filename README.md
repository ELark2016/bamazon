# bamazon


## What is bamazon? 
bamazon is a node application that will take in orders from customers and deplete stock from the store's inventory. The store's inventory is managed from a SQL database. 

# Workflow for a successful order

## Initial snapshot of database
![beginningDB](https://github.com/ELark2016/bamazon/blob/master/images/Starting_SnapShot_of_Database.png)


## Run the file in node.js
![runNodeJS](https://github.com/ELark2016/bamazon/blob/master/images/node_bamazon_js.png)

## User will see the full list of items that are available in inventory and will be asked which item they want to buy
![InventoryList](https://github.com/ELark2016/bamazon/blob/master/images/inventoryList.png)

## The user should enter the number of the item that they'd like to buy and the quantity
In this case, the user has entered number '5' and 'Diamond Ring' has been selected. The user will be prompted to enter the quantity after they've enter the item number. 

![UserSelection](https://github.com/ELark2016/bamazon/blob/master/images/UserSelection.png)

## Once the item number and quantity have been entered. They system will message the user to let them know if the order has been received and what the total cost of the order is based on the quantity entered
![OrderReceived](https://github.com/ELark2016/bamazon/blob/master/images/OrderRecvd.png)

## The .js file will decrement the number of items available in inventory based on the quantity entered by the user and will update the number of items avaiable (quantity) in the database
![Updated_DB](https://github.com/ELark2016/bamazon/blob/master/images/Updated_DB.png)












