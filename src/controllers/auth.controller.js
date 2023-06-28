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
        const token = await createAccessToken({ id: userSaved._id })

        res.cookie('token', token);
        res.status(201).json({
            msg: `the user ${userSaved.username} was created successfuly`, user: {
                id: userSaved._id,
                username: userSaved.username,
                email: userSaved.email,
                createdAt: userSaved.createdAt,
                updatedAt: userSaved.updatedAt
            }
        });

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const userFound = await UserModel.findOne({ email });

        if (!userFound) return res.status(400).json({ msg: "user not found" })

        const isMacth = await bcrypt.compare(password, userFound.password);

        if (!isMacth) return res.status(401).json({ msg: "invalid credentials" })

        const token = await createAccessToken({ id: userFound._id })

        res.cookie('token', token);
        res.status(201).json({
            msg: `the user ${userFound.username} was logged successfuly`, user: {
                id: userFound._id,
                username: userFound.username,
                email: userFound.email,
                createdAt: userFound.createdAt,
                updatedAt: userFound.updatedAt
            }
        });

    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log(error);
    }
}

export const logout = async (req, res) => {
    res.cookie("token", "", {
        expires: new Date(0)
    });

    res.sendStatus(200);
}

export const profile = async (req, res) => {
    try {
        const userFound = await UserModel.findById(req.user.id);

        if (!userFound) return res.status(404).json({ msg: "user don't found" });

        res.status(200).json({
            user: {
                id: userFound._id,
                username: userFound.username,
                email: userFound.email,
                createdAt: userFound.createdAt,
                updatedAt: userFound.updatedAt
            }
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}