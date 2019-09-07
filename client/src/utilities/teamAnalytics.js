export default {
    // total sales per user
    totalSalesPerUser(userID, orders) {
        let counter = [];
        orders.forEach(order => {
            if (order.user[0]._id === userID) {
                counter.push(userID);
            }
        });
        return counter.length;
    }
}
