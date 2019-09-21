import axios from "axios";

export default {
    getTasks: function() {
      return axios.get("/api/tasks");
    },
    getTask: function(id) {
      return axios.get("/api/tasks/" + id);
    },
    getUserTaskAnalytics: function(userID) {
      return axios.get("api/tasks/user/" + userID)
    },
    deleteTask: function(id) {
      return axios.delete("/api/tasks/" + id);
    },
    saveTask: function(taskData) {
      return axios.post("/api/tasks", taskData);
    },
    updateTask: function(taskData) {
      return axios.put("api/tasks", taskData);
    },
    getOrders: function() {
      return axios.get("/api/orders");
    },
    getUserOrderAnalytics: function(userID, startDate, endDate) {
      return axios.get("api/orders/usertotal/" + userID + "/" + startDate + "/" + endDate);
    },
    getClientOrderAnalytics: function(clientID, startDate, endDate) {
      return axios.get("api/orders/clienttotal/" + clientID + "/" + startDate + "/" + endDate);
    },
    getBusinessAnalytics: function(startDate, endDate) {
      return axios.get("api/orders/total/" + startDate + "/" + endDate);
    },
    getClientOrders: function(clientID) {
      return axios.get("api/orders/client/" + clientID);
    },
    getUserOrders: function(userID) {
      return axios.get("api/orders/user" + userID);
    },
    getOrder: function(id) {
      return axios.get("/api/orders/" + id);
    },
    deleteOrder: function(id) {
      return axios.delete("/api/orders/" + id);
    },
    saveOrder: function(orderData) {
      return axios.post("/api/orders", orderData);
    },
    updateOrder: function(orderData) {
      return axios.put("api/tasks", orderData);
    },
    getClients: function() {
      return axios.get("/api/clients");
    },
    getClient: function(id) {
      return axios.get("/api/clients/" + id)
    },
    deleteClient: function(id) {
      return axios.delete("/api/clients/" + id);
    },
    saveClient: function(clientData) {
      return axios.post("/api/clients", clientData);
    },
    updateClient: function(clientData) {
      return axios.put("api/tasks", clientData);
    },
    getProducts: function() {
      return axios.get("/api/products");
    },
    getProduct: function(id) {
      return axios.get("/api/products/" + id);
    },
    getProductByName: function(name) {
      return axios.get("api/products/productByName/" + name);
    },
    deleteProduct: function(id) {
      return axios.delete("/api/products/" + id);
    },
    saveProduct: function(productData) {
      return axios.post("/api/products", productData);
    },
    updateProduct: function(productData) {
      return axios.put("api/tasks", productData);
    },
    getSupplies: function() {
      return axios.get("/api/supplies");
    },
    getSupply: function(id) {
      return axios.get("/api/supplies/" + id);
    },
    newSupply: function(supplyData) {
      return axios.post("/api/supplies/" + supplyData);
    },
    updateSupply: function(supplyData) {
      return axios.put("/api/supplies/" + supplyData);
    },
    deleteSupply: function(id) {
      return axios.delete("/api/supplies/" + id);
    }
  };
