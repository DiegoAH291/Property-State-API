import { signup } from "../../models/auth_model/create_account/create_account";
import { Request, Response } from "express";
import { regex } from "../../libs/regex";

export default async function signupController(req: Request, res: Response) {
  try {
    const { idUserFirebase, fullName, photoUrl, email } = req.body as {
      idUserFirebase: string;
      photoUrl: string;
      email: string;
      fullName: string;
    };

    if (!idUserFirebase || !fullName || !photoUrl || !email) {
      return res
        .status(400)
        .json({ message: "Error: the fields is empty", status: 400 });
    }

    if (!regex.emailRegex.test(email)) {
      return res
        .status(400)
        .json({ message: "Error: the email is invalid", status: 400 });
    }

    const { message, status } = await signup({
      idUserFirebase: idUserFirebase,
      email: email,
      photoUrl: photoUrl,
      fullName: fullName,
    });

    return res.status(status).json({ message: message, status: status });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message, status: 500 });
    }
  }
}
