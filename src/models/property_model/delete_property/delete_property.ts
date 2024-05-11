import { conn } from "../../../config/database_config/database_config";

export async function deleteProperty({ idProperty }: { idProperty: number }) {
  const connection = await conn();

  const [rows]: any = await connection?.execute(
    "SELECT * FROM properties WHERE id_property = ?",
    [idProperty]
  );

  if (rows.length === 0) {
    return {
      message: "Error: Property does not exist",
      status: 400,
    };
  }

  connection?.execute("DELETE FROM properties WHERE id_property = ?", [
    idProperty,
  ]);

  return {
    message: "Successfully deleted property",
    status: 200,
  };
}
