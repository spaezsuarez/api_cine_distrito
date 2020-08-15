module.exports = {
    host: process.env.DATABASE_HOST || "host",
    user: process.env.DATABASE_USER || "user",
    database: process.env.DATABASE_NAME || "database",
    connectionLimit: 10,
    password: process.env.DATABASE_PASSWORD || "password"
}