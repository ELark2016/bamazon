# bamazon 


### What is bamazon? 
bamazon is a node application that will take in orders from customers and deplete stock from the store's inventory. The store's inventory is managed from a SQL database. 

## Workflow for a successful order

1. Initial snapshot of database
Note that there are 9 Diamond Rings available in the database
![beginningDB](https://github.com/ELark2016/bamazon/blob/master/images/Starting_SnapShot_of_Database.png "Initial DB View")


2. Run the file in node.js
![runNodeJS](https://github.com/ELark2016/bamazon/blob/master/images/node_bamazon_js.png)

3. Full list of available items is provided; user is asked which item they want to buy
Note: User should enter the item number
![InventoryList](https://github.com/ELark2016/bamazon/blob/master/images/inventoryList.png)

4. Enter item number and number of items that are to be purchased
In this case, the user has entered number '5' and 'Diamond Ring' has been selected. The user will be prompted to enter the quantity after they've enter the item number. 
![UserSelection](https://github.com/ELark2016/bamazon/blob/master/images/UserSelection.png)

5. Success message is provided along with total cost of purchase
The user has purchased 2 diamond rings at $1000 each.
![OrderReceived](https://github.com/ELark2016/bamazon/blob/master/images/OrderRecvd.png)

6. Number of available items is decreased from inventory in the database 
Note that there are 7 Diamond Rings available in the database after the purchase
![Updated_DB](https://github.com/ELark2016/bamazon/blob/master/images/Updated_DB.png)

## Workflow if out of inventory

See steps 1 - 4 in the 'Workflow for a successful order

1. User is notified that the item is not available
![OutOfStock](https://github.com/ELark2016/bamazon/blob/master/images/OutOfStock.png)

Note: See step 6 of successful workflow for a snapshot of the database that shows that there are 0 Bubblegums available for order











