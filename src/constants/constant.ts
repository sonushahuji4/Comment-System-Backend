
/** All RDS Queries goes here */
export const queries = {
    createCustomer : (tableName: string,customer :any) => `INSERT INTO ${tableName}(customerName,email,picture) VALUES (\'${customer.customerName}\', \'${customer.email}\', \'${customer.picture}\') RETURNING *`,
}

export const tableNames = {
    USERS : "customers",
    ORDER : "orders"    
}