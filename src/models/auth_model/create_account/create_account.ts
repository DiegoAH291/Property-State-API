import { conn } from "../../../config/database_config/database_config";

type Signup = {
  idUserFirebase: string;
  photoUrl: string;
  email: string;
  fullName: string;
};

export async function signup({
  idUserFirebase,
  photoUrl,
  email,
  fullName,
}: Signup) {
  const connection = await conn();

  const [rows]: any = await connection?.execute(
    "SELECT * FROM users WHERE id_user_firebase = ? OR email = ?",
    [idUserFirebase, email]
  );

  if (rows.length > 0) {
    return {
      message: "Error: This account already exists",
      status: 400,
    };
  }

  await connection?.execute(
    "INSERT INTO users (id_user_firebase, photo_url, email, full_name) VALUES (?, ?, ?, ?)",
    [idUserFirebase, photoUrl, email, fullName]
  );

  return {
    message: "Account created",
    status: 200,
  };
}
