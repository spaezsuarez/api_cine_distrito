module.exports = {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    database: process.env.DATABASE_NAME,
    connectionLimit: 10,
    password: process.env.DATABASE_PASSWORD
}