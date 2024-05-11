import { conn } from "../../../config/database_config/database_config";

export async function getUser({ idUserFirebase }: { idUserFirebase: string }) {
  const connection = await conn();

  const [rows]: any = await connection?.execute(
    "SELECT * FROM users WHERE id_user_firebase = ?",
    [idUserFirebase]
  );

  if (rows.length === 0) {
    return {
      message: "Error: User not found",
      data: [],
      status: 400,
    };
  }

  return {
    message: "Successful request",
    data: rows[0],
    status: 200,
  };
}
