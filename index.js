 // Customer class
 class Customer {
    constructor(id, name, email, password) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.password = password;
    }
  
    login() {
      console.log("Customer ${this.name} logged in.");
    }
  
    logout() {
      console.log("Customer ${this.name} logged out.");
    }
  
    placeOrder(order) {
      console.log("Customer ${this.name} placed order with ID: ${order.id}.");
    }
  }
  
  // Product class
  class Product {
    constructor(id, name, description, price, quantity) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.price = price;
      this.quantity = quantity;
    }
  
    updateQuantity(newQuantity) {
      this.quantity = newQuantity;
    }
  }
  
  // Order class
  class Order {
    constructor(id, customer, products, total) {
      this.id = id;
      this.customer = customer;
      this.products = products;
      this.total = total;
    }
  
    updateStatus(status) {
      console.log("Order ${this.id} status updated to ${status}.");
    }
  }
  
  // ShoppingCart class
  class ShoppingCart {
    constructor() {
      this.products = [];
    }
  
    addProduct(product) {
      this.products.push(product);
    }
  
    removeProduct(productId) {
      this.products = this.products.filter(product => product.id !== productId);
    }
  
    calculateTotal() {
      return this.products.reduce((total, product) => total + product.price, 0);
    }
  
    checkout(customer) {
      const order = new Order(
        1, 
        customer, 
        this.products, 
        this.calculateTotal()
      );
      customer.placeOrder(order);
      this.products = []; // Clear cart after checkout
    }
  }
  
  // Example usage
  const customer = new Customer(1, "Mary Lee", "marylee@gmail.com", "password2567");
  
  const product1 = new Product(
    1, 
    "Apple iPhone 15", 
    "Latest iPhone model with advanced features, processor, and camera", 
    120.5, 
    10
  );
  
  const product2 = new Product(
    2, 
    "Samsung Smart TV", 
    "High-definition TV with smart features", 
    1505.99, 
    3
  );
  
  const shoppingCart = new ShoppingCart();
  
  shoppingCart.addProduct(product1);
  shoppingCart.addProduct(product2);
  
  customer.login();
  shoppingCart.checkout(customer);
  customer.logout();
  
  