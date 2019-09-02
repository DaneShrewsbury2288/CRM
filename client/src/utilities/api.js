import axios from "axios";

export default {
    // Gets all tasks
    getTasks: function() {
      return axios.get("/api/tasks");
    },
    // Get one task
    getTask: function(id) {
      return axios.get("/api/tasks/" + id);
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
    // Get one order
    getOrder: function(id) {
      return axios.get("/api/orders/" +id);
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
    },
    
  };
