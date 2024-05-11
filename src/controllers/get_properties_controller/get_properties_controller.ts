import { getProperties } from "../../models/property_model/get_properties/get_properties";
import { Request, Response } from "express";

export default async function getPropertiesController(
  req: Request,
  res: Response
) {
  try {
    const { idUser } = req.query as unknown as {
      idUser: number;
    };

    if (!idUser) {
      return res
        .status(400)
        .json({ message: "Error: the fields is empty", status: 400 });
    }

    const { data, message, status } = await getProperties({ idUser: idUser });

    return res.status(status).json({
      message: message,
      data: data,
      status: status,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message, status: 500 });
    }
  }
}
