import { filterPropertiesByStatus } from "../../models/property_model/filter_properties_status/filter_properties_status";
import { Request, Response } from "express";

export default async function filterPropertiesByStatusController(
  req: Request,
  res: Response
) {
  try {
    const { idUser, statusProperty } = req.query as unknown as {
      idUser: number;
      statusProperty: string;
    };

    if (!idUser || !statusProperty) {
      return res
        .status(400)
        .json({ message: "Error: the fields is empty", status: 400 });
    }

    const { data, message, status } = await filterPropertiesByStatus({
      idUser: idUser,
      status: statusProperty,
    });

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
