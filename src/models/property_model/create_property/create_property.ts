import { conn } from "../../../config/database_config/database_config";

type CreateProperty = {
  photoUrl: string;
  title: string;
  location: string;
  price: number;
  idUser: number;
  idUserFirebase: string;
};

export async function createProperty({
  photoUrl,
  title,
  location,
  price,
  idUser,
  idUserFirebase,
}: CreateProperty) {
  const connection = await conn();

  await connection?.execute(
    "INSERT INTO properties (photo_url , title, location, price, id_user, id_user_firebase) VALUES (? , ?, ?, ?, ?, ?)",
    [photoUrl, title, location, price, idUser, idUserFirebase]
  );

  return {
    message: "Property created successfully",
    status: 200,
  };
}
