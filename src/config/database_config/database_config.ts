import mysql2 from "mysql2/promise";
import "dotenv/config";

export async function conn() {
  try {
    const connection = await mysql2.createConnection({
      host: process.env.HOST,
      user: process.env.USER,
      database: process.env.DATABASE_NAME,
      password: process.env.PASSWORD,
    });

    return connection;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}
