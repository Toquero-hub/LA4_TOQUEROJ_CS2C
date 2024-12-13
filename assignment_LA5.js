// Hash table to store customers
let customerHashTable = {};

// Hash function to generate a unique key based on the customer's name
function hashFunction(name) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash += name.charCodeAt(i);
    }
    return hash % 10; // Simple modulo to limit the size of the table
}

// Function to add a customer to the hash table
function addCustomer(name) {
    const index = hashFunction(name);
    // Check for collision and find next available index
    while (customerHashTable[index]) {
        index = (index + 1) % 10; // Linear probing
    }
    customerHashTable[index] = name;
    console.log(`Customer ${name} added with number ${index + 1}.`);
}

// Function to service a customer
function serviceCustomer(number) {
    const index = number - 1; // Convert user-friendly number to zero-based index
    if (customerHashTable[index]) {
        const customerName = customerHashTable[index];
        console.log(`Servicing customer: ${customerName}`);
        // Remove the serviced customer from the hash table
        delete customerHashTable[index];
        console.log(`Updated hash table: ${JSON.stringify(customerHashTable)}`);
    } else {
        console.log("Invalid number. Please enter a valid customer number.");
    }
}

// Adding customers to the hash table
addCustomer("Elaine");
addCustomer("Althea");
addCustomer("Angelo");
addCustomer("Lito");
addCustomer("Engelbert");

// Example of servicing customers
serviceCustomer(1); // Servicing first customer based on their assigned number
serviceCustomer(2); // Servicing second customer based on their assigned number
