import axios from "axios";

export default {
    // Gets all tasks
    getTasks: function() {
      return axios.get("/api/tasks");
    },
    // Get all tasks sorted by assigned date
    getTasksByAssignedDate: function() {
      return axios.get("api/tasks/assignedDate");
    },
    // Get one task
    getTask: function(id) {
      return axios.get("/api/tasks/" + id);
    },
    // get all tasks by one user
    getTaskByUser: function(userID) {
      return axios.get("api/tasks/user/" + userID)
    },
    // Deletes the task with the given id
    deleteTask: function(id) {
      return axios.delete("/api/tasks/" + id);
    },
    // Saves a task to the database
    saveTask: function(taskData) {
      return axios.post("/api/tasks", taskData);
    },
    // Updates a task in the database
    updateTask: function(taskData) {
      return axios.post("api/tasks", taskData);
    },

    // Gets all orders
    getOrders: function() {
      return axios.get("/api/orders");
    },
    // Get order analytics for one user
    getUserOrderAnalytics: function(userID, startDate, endDate) {
      return axios.get("api/orders/usertotal/" + userID + "/" + startDate + "/" + endDate);
    },
    // Get order analytics for one user
    getClientOrderAnalytics: function(clientID, startDate, endDate) {
      return axios.get("api/orders/clienttotal/" + clientID + "/" + startDate + "/" + endDate);
    },
    // Get analytics for all orders
    getBusinessAnalytics: function(startDate, endDate) {
      return axios.get("api/orders/total/" + startDate + "/" + endDate);
    },
    // Get all orders for one client
    getClientOrders: function(clientID) {
      return axios.get("api/orders/client/" + clientID);
    },
    // Get all orders for one user
    getUserOrders: function(userID) {
      return axios.get("api/orders/user" + userID);
    },
    // Get one order
    getOrder: function(id) {
      return axios.get("/api/orders/" + id);
    },
    // Deletes the order with the given id
    deleteOrder: function(id) {
      return axios.delete("/api/orders/" + id);
    },
    // Saves a order to the database
    saveOrder: function(orderData) {
      return axios.post("/api/orders", orderData);
    },
    // Updates an order in the database
    updateOrder: function(orderData) {
      return axios.post("api/tasks", orderData);
    },

    // Gets all clients
    getClients: function() {
      return axios.get("/api/clients");
    },
    // get one client
    getClient: function(id) {
      return axios.get("/api/clients/" + id)
    },
    // Deletes the client with the given id
    deleteClient: function(id) {
      return axios.delete("/api/clients/" + id);
    },
    // Saves a client to the database
    saveClient: function(clientData) {
      return axios.post("/api/clients", clientData);
    },
    // Updates a client in the database
    updateClient: function(clientData) {
      return axios.post("api/tasks", clientData);
    },

    // Gets all products
    getProducts: function() {
      return axios.get("/api/products");
    },
    // Get one product
    getProduct: function(id) {
      return axios.get("/api/products/" + id);
    },
    // Get one product by name
    getProductByName: function(name) {
      return axios.get("api/products/productByName/" + name);
    },
    // Deletes the product with the given id
    deleteProduct: function(id) {
      return axios.delete("/api/products/" + id);
    },
    // Saves a product to the database
    saveProduct: function(productData) {
      return axios.post("/api/products", productData);
    },
    // Updates a product in the database
    updateProduct: function(productData) {
      return axios.post("api/tasks", productData);
    }
  };
