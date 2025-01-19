# UML learnable task wk4.



Title: ONLINE SHOPPING SYSTEM

Problem Description:
An online shopping system allows customers to browse and purchase products from an online store. The system should manage customer information, product inventory, and orders.eg Amazon stores, Jumia Africa etc

 Requirements:
1. Customers can create accounts and log in to the system.
2. Customers can browse products by category.
3. Customers can add products to their shopping cart.
4. Customers can checkout and place orders.
5. The system should update product inventory after each order.
6. The system should allow administrators to add, remove, and update products.

 Classes:
1. Customer
2. Product
3. Order
4. Shopping Cart

 Attributes and Methods:
- Customer:
    - Attributes: id, name, email, password
    - Methods: login(), logout(), placeOrder()
- Product:
    - Attributes: id, name, description, price, quantity
    - Methods: updateQuantity()
- Order:
    -Attributes:  id, customer, products, total
    - Methods: updateStatus()
- Shopping Cart:
    - Attributes: products
    - Methods: addProduct(), removeProduct(), checkout()


 
