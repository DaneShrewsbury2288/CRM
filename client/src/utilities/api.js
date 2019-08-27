import axios from "axios";

export default {
    // Gets all tasks
    getTasks: function() {
      return axios.get("/api/tasks");
    },
    // Deletes the task with the given id
    deleteTask: function(id) {
      return axios.delete("/api/tasks/" + id);
    },
    // Saves a task to the database
    saveTask: function(taskData) {
      return axios.post("/api/tasks", taskData);
    },

    // Gets all sales
    getSales: function() {
      return axios.get("/api/sales");
    },
    // Deletes the sale with the given id
    deleteSale: function(id) {
      return axios.delete("/api/sales/" + id);
    },
    // Saves a sale to the database
    saveSale: function(saleData) {
      return axios.post("/api/sale", saleData);
    },

    // Gets all clients
    getClients: function() {
      return axios.get("/api/clients");
    },
    // Deletes the client with the given id
    deleteClient: function(id) {
      return axios.delete("/api/clients/" + id);
    },
    // Saves a client to the database
    saveClient: function(clientData) {
      return axios.post("/api/clients", clientData);
    },

    // Gets all products
    getProducts: function() {
      return axios.get("/api/products");
    },
    // Deletes the product with the given id
    deleteProduct: function(id) {
      return axios.delete("/api/products/" + id);
    },
    // Saves a product to the database
    saveProduct: function(productData) {
      console.log("here is the data " + productData);
      return axios.post("/api/products", productData);
    }
    
  };