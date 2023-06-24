import bcrypt from "bcryptjs";

import UserModel from "../models/user.model.js"
import { createAccessToken } from "../libs/jwt.js";

export const register = async (req, res) => {
    const { username, email, password } = req.body;

    const passwordHash = await bcrypt.hash(password, 10);

    try {
        const userNew = new UserModel({
            username,
            email,
            password: passwordHash
        });

        const userSaved = await userNew.save();
        const token = await createAccessToken({id: userSaved._id})
        
        res.cookie('token', token);
        res.status(201).json({ msg: `the user ${userSaved.username} was created successfuly` });

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const login = (req, res) => {
    res.status(200).json({ msg: "login" });
}