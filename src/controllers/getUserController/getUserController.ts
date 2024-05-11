import { getUser } from "../../models/auth_model/get_account/get_account";
import { Request, Response } from "express";

export default async function getUserController(req: Request, res: Response) {
  try {
    const { idUserFirebase } = req.query as {
      idUserFirebase: string;
    };

    if (!idUserFirebase) {
      return res
        .status(400)
        .json({ message: "Error: the fields is empty", status: 400 });
    }

    const { message, data, status } = await getUser({
      idUserFirebase: idUserFirebase,
    });

    return res
      .status(status)
      .json({ message: message, data: data, status: status });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message, status: 500 });
    }
  }
}
