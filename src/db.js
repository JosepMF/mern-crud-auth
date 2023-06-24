import mongoose from "mongoose";

export async function connectDB() {
    try {
        await mongoose.connect("mongodb://localhost/mern-crud-auth-db");
        console.log("db connected");
    } catch (error) {
        console.error(error);
    }
}