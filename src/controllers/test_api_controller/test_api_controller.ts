import { Request, Response } from "express";

export default function testApiController(req: Request, res: Response) {
  try {
    return res.status(200).json({
      message: "Hello again, welcome to your sandbox.",
      status: 200,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message, status: 500 });
    }
  }
}
