import { conn } from "../../../config/database_config/database_config";

export async function filterPropertiesByStatus({
  idUser,
  status,
}: {
  idUser: number;
  status: string;
}) {
  const connection = await conn();

  const [rows]: any = await connection?.execute(
    "SELECT p.* FROM properties p JOIN users u ON p.id_user = u.id_user WHERE p.id_user = ? AND p.status_property = ?",
    [idUser, status]
  );

  return {
    message: "Successful query",
    data: rows,
    status: 200,
  };
}
