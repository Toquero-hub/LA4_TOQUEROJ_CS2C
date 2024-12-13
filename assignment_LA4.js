// Simple Queueing System for Customer Service

// Initialize an empty queue
let customerQueue = [];

// Function to add a customer to the queue
function addCustomer(name) {
    customerQueue.push(name);
    console.log(`Customer ${name} added to the queue. Your number is ${customerQueue.length}.`);
}

// Function to service a customer
function serviceCustomer(number) {
    if (number > 0 && number <= customerQueue.length) {
        const customerName = customerQueue[number - 1];
        console.log(`Servicing customer: ${customerName}`);
        // Remove the serviced customer from the queue
        customerQueue.splice(number - 1, 1);
        console.log(`Updated queue: ${customerQueue.join(', ')}`);
    } else {
        console.log("Invalid number. Please enter a valid customer number.");
    }
}

// Adding customers to the queue
addCustomer("Elaine");
addCustomer("Althea");
addCustomer("Angelo");
addCustomer("Lito");
addCustomer("Engelbert");

// Example of servicing customers
serviceCustomer(1); // Servicing Elaine
serviceCustomer(2); // Servicing Althea
