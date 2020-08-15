module.exports = {
    host: process.env.DATABASE_HOST || "localhost",
    user: process.env.DATABASE_USER || "spaezsuarez",
    database: process.env.DATABASE_NAME || "cinema",
    connectionLimit: 10,
    password: process.env.DATABASE_PASSWORD || "pass"
}