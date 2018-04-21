# bamazon


## What is bamazon? 
bamazon is a node application that will take in orders from customers and deplete stock from the store's inventory. The store's inventory is managed from a SQL database. 

# Workflow for a successful order

## Initial snapshot of database
Note: There are 9 Diamond Rings Available in the database
![beginningDB](https://github.com/ELark2016/bamazon/blob/master/images/Starting_SnapShot_of_Database.png)


## Run the file in node.js
![runNodeJS](https://github.com/ELark2016/bamazon/blob/master/images/node_bamazon_js.png)

## Full list of available items is provided; user is asked which item they want to buy
Note: User should enter the item number
![InventoryList](https://github.com/ELark2016/bamazon/blob/master/images/inventoryList.png)

## Enter item number and number of items that are to be purchased
In this case, the user has entered number '5' and 'Diamond Ring' has been selected. The user will be prompted to enter the quantity after they've enter the item number. 
![UserSelection](https://github.com/ELark2016/bamazon/blob/master/images/UserSelection.png)

## Success message is provided along with total cost of purchase
![OrderReceived](https://github.com/ELark2016/bamazon/blob/master/images/OrderRecvd.png)

## Number of available items is decreased from inventory in the database 
![Updated_DB](https://github.com/ELark2016/bamazon/blob/master/images/Updated_DB.png)












