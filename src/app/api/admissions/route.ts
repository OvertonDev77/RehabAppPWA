// pages/api/admissions.ts
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    console.log("Received submission:", req.body);
    return res.status(200).json({ message: "Received" });
  }
  return res.status(405).end();
}
