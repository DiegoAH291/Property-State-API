import { deleteProperty } from "../../models/property_model/delete_property/delete_property";
import { Request, Response } from "express";

export default async function deletePropertyController(
  req: Request,
  res: Response
) {
  try {
    const { idProperty } = req.query as unknown as {
      idProperty: number;
    };

    if (!idProperty) {
      return res
        .status(400)
        .json({ message: "Error: the fields is empty", status: 400 });
    }

    const { message, status } = await deleteProperty({
      idProperty: idProperty,
    });

    return res.status(status).json({
      message: message,
      status: status,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message, status: 500 });
    }
  }
}
