import { createProperty } from "../../models/property_model/create_property/create_property";
import { Request, Response } from "express";

export default async function createPropertyController(
  req: Request,
  res: Response
) {
  try {
    const { photoUrl, title, location, price, idUser, idUserFirebase } =
      req.body as {
        photoUrl: string;
        title: string;
        location: string;
        price: number;
        idUser: number;
        idUserFirebase: string;
      };

    if (
      !photoUrl ||
      !title ||
      !location ||
      !price ||
      !idUser ||
      !idUserFirebase
    ) {
      return res
        .status(400)
        .json({ message: "Error: the fields is empty", status: 400 });
    }

    const { message, status } = await createProperty({
      photoUrl: photoUrl,
      title: title,
      location: location,
      price: price,
      idUser: idUser,
      idUserFirebase: idUserFirebase,
    });

    return res.status(status).json({ message: message, status: status });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message, status: 500 });
    }
  }
}
