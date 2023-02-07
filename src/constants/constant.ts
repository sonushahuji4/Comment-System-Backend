
/** All RDS Queries goes here */
export const queries = {
    createCustomer : (tableName: string) => `INSERT INTO ${tableName} (customer_name,email,picture) VALUES ($1, $2, $3) RETURNING *`,
    isCustomerExits : (tableNames: string) => `SELECT email FROM ${tableNames} WHERE email=$1`,
    getSingleCustomer : (tableNames: string) => `SELECT *FROM ${tableNames} WHERE email=$1`,
}

export const tableNames = {
    CUSTOMER : "customers"   
}