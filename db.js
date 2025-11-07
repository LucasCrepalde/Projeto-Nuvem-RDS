import mysql from "mysql2/promise";

export async function connect() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || "seu-endpoint-rds.us-east-1.rds.amazonaws.com",
    user: process.env.DB_USER || "admin",
    password: process.env.DB_PASSWORD || "senha123",
    database: process.env.DB_NAME || "meubanco"
  });

  console.log("✅ Conectado ao banco de dados RDS!");
  return connection;
}
