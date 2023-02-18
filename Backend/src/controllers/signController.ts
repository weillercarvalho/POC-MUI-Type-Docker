import { Request, Response } from "express";
import db from "../databases/db.js";

async function signInController(req: Request, res: Response) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.sendStatus(401);
  }
  try {
    const user = await db.collection(`users`).findOne({ email: email });
    if (!user) {
        return res.status(400).send("Email not found!")
    }
    await db.collection(`sessions`).insertOne({...req.body});
    return res.sendStatus(201);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function signUpController(req: Request, res: Response) {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.sendStatus(401);
  }
  try {
    const user = await db.collection(`users`).findOne({ email: email });
    if (user) {
      return res.sendStatus(400);
    }
    await db.collection(`users`).insertOne({ ...req.body });
    return res.send(201);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

export { signInController, signUpController };
